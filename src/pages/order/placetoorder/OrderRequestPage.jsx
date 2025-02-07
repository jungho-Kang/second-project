import { useCallback, useEffect, useState } from "react";
import { IoMdArrowBack } from "react-icons/io";
import { IoMdAddCircleOutline } from "react-icons/io";
import _ from "lodash";
import { useRecoilState } from "recoil";
import { userDataAtom } from "../../../atoms/userAtom";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { getCookie } from "../../../components/cookie";
import { subscribeToReservationStatus } from "../../../components/notification/StompComponent";

const OrderRequestPage = () => {
  const [priceList, setPriceList] = useState({});
  const [inputValue, setInputValue] = useState("");
  const [isCompleted, setIsCompleted] = useState(false);
  const [userData, setUserData] = useRecoilState(userDataAtom);
  const [creatOrderId, setCreatOrderId] = useState(0);
  const navigate = useNavigate();

  const postReservation = async () => {
    subscribeToReservationStatus(99);
    const sessionUserId = window.sessionStorage.getItem("userId");
    const accessToken = getCookie();

    const params = {
      restaurantId: 0,
      userId: sessionUserId,
      reservationTime: "",
      reservationPeopleCount: 0,
      userPhone: "",
      menuList: [
        {
          menuId: 0,
          menuCount: 0,
        },
      ],
    };

    try {
      const res = await axios.post(`/api/reservation`, {
        params,
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });
      console.log(res.data.resultData);
      setCreatOrderId(res.data.resultData);
      subscribeToReservationStatus(127);
    } catch (error) {
      console.log(error);
    }
  };

  const inputChangeHandler = e => {
    setInputValue(e.target.value);
    inputPriceList(e.target.value);
  };

  const inputPriceList = useCallback(
    _.debounce(value => {
      setPriceList({ price: value });
    }, 1000),
    [],
  );
  console.log(inputValue);

  const addMemberHandler = () => {
    navigate("/user/placetoorder/member");
  };

  return (
    <div className="w-full h-dvh overflow-x-hidden overflow-y-scroll scrollbar-hide">
      <div className="flex w-full justify-between py-6 items-center border-b border-gray">
        <div className="flex w-[15%] justify-center">
          <IoMdArrowBack className="text-3xl" />
        </div>
        <span className="text-lg font-semibold">금액 선택</span>
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
                  onChange={e => inputChangeHandler(e)}
                  value={inputValue}
                />
                <span>원</span>
              </>
            )}
          </div>
          <div className="flex w-[20%] justify-center gap-2 text-nowrap items-center">
            <span
              onClick={() => setIsCompleted(true)}
              className="bg-blue px-2 text-white font-semibold rounded-md"
            >
              확인
            </span>
            <span
              onClick={() => setIsCompleted(false)}
              className="bg-red px-2 text-white font-semibold rounded-md"
            >
              {isCompleted ? "수정" : "취소"}
            </span>
          </div>
        </div>
        <div className="flex w-full h-[5%] justify-center items-center">
          <IoMdAddCircleOutline
            onClick={addMemberHandler}
            className="text-3xl"
          />
        </div>
        <div className="flex w-full justify-center">
          <span
            onClick={() => postReservation()}
            className="bg-primary text-white text-lg px-2 py-1 rounded-md"
          >
            승인 요청
          </span>
        </div>
      </div>
    </div>
  );
};
export default OrderRequestPage;
