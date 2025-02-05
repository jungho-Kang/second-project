import { Stomp } from "@stomp/stompjs";
import SockJS from "sockjs-client";

// SockJS로 WebSocket 연결 설정
const socket = new SockJS("http://112.222.157.156:5222/ws-stomp");
const stompClient = Stomp.over(socket); // SockJS 팩토리를 함수로 전달

export const runSocket = () => {
  stompClient.reconnectDelay = 5000; // 자동 재연결 설정
  stompClient.onConnected = frame => {
    console.log("Connected: " + frame);
  };
  stompClient.onError = frame => {
    console.log("Connected: " + frame);
  };
  stompClient.activate();
};

export const subscribeToReservationStatus = orderId => {
  const url = `/queue/reservation/${orderId}/user/reservation`;

  stompClient.subscribe(url, function (message) {
    const messageObj = JSON.parse(message.body);
    let statusMessage = "";

    switch (messageObj.reservationStatus) {
      case 1:
        statusMessage = "예약이 승인되었습니다.";
        break;
      case 2:
        statusMessage = "예약이 거부되었습니다.";
        break;
      case 3:
        statusMessage = "예약이 취소되었습니다.";
        break;
    }
  });

  return statusMessage;
};

export const subscribeUserLogin = userId => {
  const url = `/queue/user/${userId}/user/userPaymentMember`;

  stompClient.subscribe(url, function (message) {
    const messageObj = JSON.parse(message.body);
    let statusMessage = "";

    switch (messageObj.reservationStatus) {
      case 1:
        statusMessage = "예약이 승인되었습니다.";
        break;
      case 2:
        statusMessage = "예약이 거부되었습니다.";
        break;
      case 3:
        statusMessage = "예약이 취소되었습니다.";
        break;
    }
  });
};

export const subscribeStoreLogin = userId => {
  const url = `/queue/restaurant/{식당 PK}/owner/reservation`;

  stompClient.subscribe(url, function (message) {
    const messageObj = JSON.parse(message.body);
    let statusMessage = "";

    switch (messageObj.reservationStatus) {
      case 1:
        statusMessage = "예약이 승인되었습니다.";
        break;
      case 2:
        statusMessage = "예약이 거부되었습니다.";
        break;
      case 3:
        statusMessage = "예약이 취소되었습니다.";
        break;
    }
  });
};

// 사용자 결재 승인 요청 알림(N명 예약시): "/queue/user/{사용자 PK}/user/userPaymentMember"
// 식당 관리자 예약 알림: "/queue/restaurant/{식당 PK}/owner/reservation"
// 식당 사용자 예약 여부 사용자 알림: "/queue/reservation/{주문 PK}/user/reservation"
// "사용자"가 "로그인" 할 때 "사용자 결재 승인 요청" 구독경로에 연결되어야 함.
// "사장님"이 "로그인" 할 때 "식당 관리자 예약 구독경로"에 연결되어야 함.
// "사용자"가 "예약"에 "성공"했을 시 "식당 사용자 예약  여부 사용자 구독 경로"에 연결되어야 함.
