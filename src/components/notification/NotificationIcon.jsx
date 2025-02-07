import axios from "axios";
import { useEffect } from "react";
import { FaCircle } from "react-icons/fa";
import { FaBell } from "react-icons/fa6";
import { useRecoilState } from "recoil";
import { isClickIcon, isWhiteIcon, noticeState } from "../../atoms/noticeAtom";
import { orderIdAtom } from "../../atoms/restaurantAtom";
import { getCookie } from "../cookie";
import NotificationPage from "./NotificationPage";

const Notification = () => {
  const [isWhite, setIsWhite] = useRecoilState(isWhiteIcon);
  const [isNotice, setIsNotice] = useRecoilState(noticeState);
  const [isClick, setIsClick] = useRecoilState(isClickIcon);
  const sessionId = sessionStorage.getItem("userId");
  const accessToken = getCookie();
  const [orderId, setOrderId] = useRecoilState(orderIdAtom);

  useEffect(() => {
    const params = {
      userId: sessionId,
    };
    const getAlert = async () => {
      try {
        const res = await axios.get(`/api/user/alert`, {
          params,
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        });
        console.log(res);
        const result = res.data.resultData;
        if (result[0]?.orderId) {
          setIsNotice(result);
          console.log("결제 승인 요청이 왔습니다");
        } else if (result[1]?.orderId) {
          setIsNotice(result);
          console.log("주문 관련 알림이 도착했습니다");
        }
      } catch (error) {
        console.log(error);
      }
    };
    getAlert();
  }, []);
  console.log(isNotice);

  return (
    <div>
      <div>
        <div
          onClick={() => setIsClick(!isClick)}
          className="absolute right-5 top-5 z-50"
        >
          {isNotice.length !== 0 ? (
            <FaCircle className="absolute -right-0 -top-1 text-xs text-red animate-ping" />
          ) : (
            <></>
          )}
          <FaBell
            className={`size-6 ${isWhite ? "text-white" : "text-black"}`}
          />
        </div>
      </div>
      {isClick ? <NotificationPage /> : <></>}
    </div>
  );
};
export default Notification;
