import { Stomp } from "@stomp/stompjs";
import SockJS from "sockjs-client";

const StompComponent = () => {
  // SockJS로 WebSocket 연결 설정
  const socket = new SockJS("http://localhost:8080/ws-stomp");
  const stompClient = Stomp.over(() => socket); // SockJS 팩토리를 함수로 전달

  stompClient.reconnectDelay = 5000; // 자동 재연결 설정
  stompClient.onConnected = frame => {
    console.log("Connected: " + frame);
  };
  stompClient.onError = frame => {
    console.log("Connected: " + frame);
  };

  stompClient.activate();

  function subscribeToReservationStatus() {
    const url = `/queue/reservation/${createdOrderId}/user/reservation`;

    stompClient.subscribe(url, function (message) {
      const reservationResponse = JSON.parse(message.body);

      const messageObj = JSON.parse(message.body);
      let statusMessage = ""; // 예약 state에 따른 메세지

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

      const ul = document.getElementById("reservList");
      const li = `
            <li>
                <p>예약 알림이 도착했습니다.</p>
                <p>예약 상태: ${statusMessage}</p>
            </li>
        `;

      ul.innerHTML += li;
    });
  }

  return <div>WebSocket 연결 중...</div>;
};

export default StompComponent;

// 사용자 결재 승인 요청 알림(N명 예약시): "/queue/user/{사용자 PK}/user/userPaymentMember"
// 식당 관리자 예약 알림: "/queue/restaurant/{식당 PK}/owner/reservation"
// 식당 사용자 예약 여부 사용자 알림: "/queue/reservation/{주문 PK}/user/reservation"
// "사용자"가 "로그인" 할 때 "사용자 결재 승인 요청" 구독경로에 연결되어야 함.
// "사장님"이 "로그인" 할 때 "식당 관리자 예약 구독경로"에 연결되어야 함.
// "사용자"가 "예약"에 "성공"했을 시 "식당 사용자 예약  여부 사용자 구독 경로"에 연결되어야 함.
