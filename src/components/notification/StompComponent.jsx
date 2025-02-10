import { Stomp } from "@stomp/stompjs";
import SockJS from "sockjs-client";
import Swal from "sweetalert2";
import axios from "axios";
import { getCookie } from "../../components/cookie";

// SockJS로 WebSocket 연결 설정
const socket = new SockJS("http://112.222.157.156:5222/ws-stomp");
const stompClient = Stomp.over(() => socket); // SockJS 팩토리를 함수로 전달

const sessionStoreId = window.sessionStorage.getItem("restaurantId");
const sessionUser = window.sessionStorage.getItem("userId");
const accessToken = getCookie();

const getAlert = async () => {
  const params = {
    userId: sessionUser,
  };
  try {
    const res = await axios.get(`/api/user/alert`, {
      params,
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
    console.log(res.data.resultData);
    const result = res.data.resultData;
    console.log(result);
  } catch (error) {
    console.log(error);
  }
};

const getOrderList = async () => {
  const params = {
    restaurantId: sessionStoreId,
  };
  try {
    const res = await axios.get(`/api/order/restaurant/reservation`, {
      params,
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
    const result = res.data.resultData;
    console.log(result);
    const menuList = result.map(item => {
      return item.orderDetails ? item.orderDetails : [];
    });
    console.log(menuList.flat());
  } catch (error) {
    console.log(error);
  }
};

export const initializeSocket = () => {
  return new Promise((resolve, reject) => {
    stompClient.reconnectDelay = 5000;

    stompClient.onConnect = frame => {
      console.log("Connected 성공 : " + frame);
      resolve(frame);
    };

    stompClient.onError = frame => {
      console.log("Connected 실패 : " + frame);
      reject(frame);
    };

    stompClient.activate();
  });
};

export const subscribeToReservationStatus = orderId => {
  const url = `/queue/reservation/${orderId}/user/reservation`;

  stompClient.subscribe(url, message => {
    if (!message.body) {
      console.warn("빈 메시지 수신");
      return;
    }

    try {
      const messageObj = JSON.parse(message.body);
      console.log("주문 요청 완료 messageObj : ", messageObj);

      const statusMessages = {
        1: "예약이 승인되었습니다.",
        2: "예약이 거부되었습니다.",
        3: "예약이 취소되었습니다.",
      };

      const reservationStatus = messageObj.reservationStatus;
      const statusMessage =
        statusMessages[reservationStatus] || "알 수 없는 상태입니다.";
      console.log(statusMessage);

      // SweetAlert 처리
      const alertConfig = {
        1: {
          title: "예약이 승인되었습니다",
          icon: "success",
          confirmButtonColor: "#79BAF2",
        },
        2: {
          title: "예약이 거부되었습니다",
          icon: "error",
          confirmButtonColor: "#E44B58",
        },
        3: {
          title: "예약이 취소되었습니다",
          icon: "warning",
          confirmButtonColor: "#E44B58",
        },
      };

      if (alertConfig[reservationStatus]) {
        Swal.fire({
          title: alertConfig[reservationStatus].title,
          icon: alertConfig[reservationStatus].icon,
          confirmButtonColor: alertConfig[reservationStatus].confirmButtonColor,
          confirmButtonText: "확인",
          showCancelButton: true,
        }).then(result => {
          if (result.isConfirmed) {
            getAlert();
          }
        });
      }
    } catch (error) {
      console.error("메시지 처리 중 오류 발생:", error);
    }
  });
};

export const subscribeUserLogin = userId => {
  if (!stompClient.connected) {
    console.error("STOMP 클라이언트가 연결되지 않았습니다.");
    return;
  }

  const url = `/queue/user/${userId}/user/userPaymentMember`;

  stompClient.subscribe(url, message => {
    const messageObj = JSON.parse(message.body);
    let statusMessage = "";

    try {
      console.log("유저 로그인 : ", messageObj);
    } catch (error) {
      console.log(error);
    }
  });
};

export const subscribeStoreLogin = restaurantId => {
  if (!stompClient.connected) {
    console.error("STOMP 클라이언트가 연결되지 않았습니다.");
    return;
  }

  const url = `/queue/restaurant/${restaurantId}/owner/reservation`;

  stompClient.subscribe(url, message => {
    const messageObj = JSON.parse(message.body);
    let statusMessage = "";
    console.log("메세지 수신 완료 : ", messageObj);

    try {
      console.log("식당 관리자 로그인 : ", messageObj);
      Swal.fire({
        title: "새로운 주문이 들어왔습니다!",
        text: "주문 목록에서 확인해주세요.",
        icon: "question",

        showCancelButton: true, // cancel버튼 보이기. 기본은 원래 없음
        confirmButtonColor: "#79BAF2", // confrim 버튼 색깔 지정
        cancelButtonColor: "#E44B58", // cancel 버튼 색깔 지정
        confirmButtonText: "확인", // confirm 버튼 텍스트 지정
        cancelButtonText: "취소", // cancel 버튼 텍스트 지정

        reverseButtons: false, // 버튼 순서 거꾸로
      }).then(result => {
        // 만약 Promise리턴을 받으면,
        if (result.isConfirmed) {
          // 만약 모달창에서 confirm 버튼을 눌렀다면
          Swal.fire("승인이 완료되었습니다.", "", "success");
          getOrderList();
        }
      });
    } catch (error) {
      console.log(error);
    }
  });
};

// 사용자 결재 승인 요청 알림(N명 예약시): "/queue/user/{사용자 PK}/user/userPaymentMember"
// 식당 관리자 예약 알림: "/queue/restaurant/{식당 PK}/owner/reservation"
// 식당 사용자 예약 여부 사용자 알림: "/queue/reservation/{주문 PK}/user/reservation"
// "사용자"가 "로그인" 할 때 "사용자 결재 승인 요청" 구독경로에 연결되어야 함.
// "사장님"이 "로그인" 할 때 "식당 관리자 예약 구독경로"에 연결되어야 함.
// "사용자"가 "예약"에 "성공"했을 시 "식당 사용자 예약  여부 사용자 구독 경로"에 연결되어야 함.
