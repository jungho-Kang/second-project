import SockJS from "sockjs-client";
import { Client } from "@stomp/stompjs";

const StompComponent = () => {
  const client = new Client({
    brokerURL: `ws://localhost:8080`,
    webSocketFactory: () => new SockJS(`http://localhost:8080/ws-stomp`),
  });

  client.activate();

  return <div>WebSocket 연결 중...</div>;
};

export default StompComponent;
