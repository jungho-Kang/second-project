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

  return <div>WebSocket 연결 중...</div>;
};

export default StompComponent;
