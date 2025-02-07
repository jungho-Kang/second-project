import axios from "axios";
import { useEffect, useState } from "react";
import { IoMdArrowBack } from "react-icons/io";
import { MdOutlineRefresh } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import { userDataAtom } from "../../../atoms/userAtom";
import { getCookie } from "../../../components/cookie";
import { orderIdAtom } from "../../../atoms/restaurantAtom";

const OrderRequestPage = () => {
  const [priceList, setPriceList] = useState({});
  const [inputValue, setInputValue] = useState("");
  const [isCompleted, setIsCompleted] = useState(false);
  const [userData, setUserData] = useRecoilState(userDataAtom);
  const [newOrderId, setNewOrderId] = useRecoilState(orderIdAtom);
  const userId = sessionStorage.getItem("userId");
  const navigate = useNavigate();
  const accessToken = getCookie();

  useEffect(() => {
    const params = {
      userId: userId,
    };
    const getOrderId = async () => {
      try {
        const res = await axios.get(`/api/user/orderId`, {
          params,
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        });
        console.log(res.data.resultData);
        const result = res.data.resultData;
        setNewOrderId(result);
      } catch (error) {
        console.log(error);
      }
    };
    getOrderId();
  }, []);

  useEffect(() => {
    const params = {
      orderId: newOrderId,
    };
    const getPaymentMember = async () => {
      try {
        const res = await axios.get(
          "/api/user/user-payment-member/userPaymentMember",
          {
            params,
            headers: {
              Authorization: `Bearer ${accessToken}`,
            },
          },
        );
        console.log(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    getPaymentMember();
  }, []);

  const getUserApproval = async () => {
    const params = {
      orderId: newOrderId,
    };
    try {
      const res = await axios.get(
        `/api/user/user-payment-member/userOrderApprovalAccess`,
        {
          params,
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        },
      );
      console.log(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  const postPayment = async () => {
    try {
      const res = await axios.post(
        `/api/user/user-payment-member/postPayment?userId=${userId}?orderId=${238}`,
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        },
      );
      console.log(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  const addMemberHandler = () => {
    navigate("/user/placetoorder/member");
  };

  console.log(newOrderId);

  return (
    <div className="w-full h-dvh overflow-x-hidden overflow-y-scroll scrollbar-hide">
      <div className="flex w-full justify-between py-6 items-center border-b border-gray">
        <div className="flex w-[15%] justify-center">
          <IoMdArrowBack className="text-3xl" />
        </div>
        <span className="text-lg font-semibold">결제 상태</span>
        <div className="w-[15%]">
          <span className="text-center px-3 py-1 rounded-md text-white text-opacity-0">
            ㅇ
          </span>
        </div>
      </div>
      <div className="flex flex-col w-full h-full gap-6">
        <div className="flex w-full h-[6%] px-6 justify-between items-center border-b border-gray">
          <span className="flex w-[30%] text-base text-nowrap">
            {userData.name ? userData.name : "김길동(12345)"}
          </span>
          <div className="flex w-[35%] gap-2 items-center justify-end">
            {isCompleted ? (
              <>
                <span className="text-end px-2">{inputValue}</span>
                <span>원</span>
              </>
            ) : (
              <>
                <input
                  type="tel"
                  className="flex w-full border border-darkGray px-2 text-end rounded-md"
                  value={inputValue}
                />
                <span>원</span>
              </>
            )}
          </div>
          <div className="flex w-[20%] justify-center gap-2 text-nowrap items-center">
            <span
              onClick={() => setIsCompleted(true)}
              className="bg-blue px-2 text-white font-semibold rounded-md cursor-pointer"
            >
              승인
            </span>
            <span
              onClick={() => setIsCompleted(false)}
              className="bg-red px-2 text-white font-semibold rounded-md cursor-pointer"
            >
              {isCompleted ? "수정" : "취소"}
            </span>
          </div>
        </div>

        <div className="flex w-full items-center justify-center ">
          <div className="flex gap-2 px-5 py-2 bg-gray rounded-md">
            <MdOutlineRefresh className="text-2xl" />
            <span
              onClick={() => getUserApproval()}
              className="text-lg font-medium cursor-pointer"
            >
              승인 상태 확인
            </span>
          </div>
        </div>

        <div className="flex w-full h-[6%] px-6 justify-between items-center border-b border-gray">
          <span className="flex w-[30%] text-base text-nowrap">
            {userData.name ? userData.name : "김길동(12345)"}
          </span>
          <div className="flex w-[35%] gap-2 items-center justify-end">
            {isCompleted ? (
              <>
                <span className="text-end px-2">{inputValue}</span>
                <span>원</span>
              </>
            ) : (
              <>
                <input
                  type="tel"
                  className="flex w-full border border-darkGray px-2 text-end rounded-md"
                  value={inputValue}
                />
                <span>원</span>
              </>
            )}
          </div>
          <div className="flex w-[20%] justify-center gap-2 text-nowrap items-center">
            <span
              onClick={() => setIsCompleted(true)}
              className="bg-blue px-2 text-white font-semibold rounded-md cursor-pointer"
            >
              승인
            </span>
            <span
              onClick={() => setIsCompleted(false)}
              className="bg-red px-2 text-white font-semibold rounded-md cursor-pointer"
            >
              {isCompleted ? "수정" : "취소"}
            </span>
          </div>
        </div>

        <div className="flex w-full justify-center gap-10">
          <span
            onClick={() => postPayment()}
            className="bg-primary text-white text-lg px-2 py-1 rounded-md cursor-pointer"
          >
            결제 요청
          </span>
          <span className="bg-red text-white text-lg px-2 py-1 rounded-md cursor-pointer">
            결제 취소
          </span>
        </div>
      </div>
    </div>
  );
};
export default OrderRequestPage;
