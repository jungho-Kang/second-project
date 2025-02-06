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
    const getPaymentOrder = async () => {
      const params = {
        signedUserId: sessionId,
      };
      try {
        const res = await axios.get(`/api/user/order`, {
          params,
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        });
        console.log(res.data.resultData);
        const result = res.data.resultData;
        setIsNotice([...result]);
      } catch (error) {
        console.log(error);
      }
    };
    getPaymentOrder();
  }, []);

  useEffect(() => {
    const params = {
      userId: sessionId,
      orderId: orderId,
    };
    const getPaymentInfo = async () => {
      try {
        const res = await axios.get(
          "/api/user/user-payment-member/getPaymentInfo",
          {
            params,
            headers: {
              Authorization: `Bearer ${accessToken}`,
            },
          },
        );
        console.log(res.data.resultData);
        const result = res.data.resultData;
        setIsNotice([{ ...result }]);
      } catch (error) {
        console.log(error);
      }
    };
    getPaymentInfo();
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
