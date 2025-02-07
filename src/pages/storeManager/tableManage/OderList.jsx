import axios from "axios";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import useModal from "../../../components/useModal";

const OrderList = () => {
  const [orderDataList, setOrderDataList] = useState([]);
  const [orderMenuList, setOrderMenuList] = useState([]);
  const [reloadOrders, setReloadOrders] = useState(false);
  const sessionStoreId = window.sessionStorage.getItem("restaurantId");
  const { Modal, open, close, eventData } = useModal({
    title: "주문 정보를 확인해주세요",
  });

  useEffect(() => {
    const getOrderList = async () => {
      const params = {
        restaurantId: sessionStoreId,
        // restaurantId: 1,
      };
      try {
        const res = await axios.get(`/api/order/restaurant/reservation`, {
          params,
        });
        const result = res.data.resultData;
        console.log(res);
        console.log(result);
        const menuList = result.map(item => {
          return item.orderDetails ? item.orderDetails : [];
        });
        console.log(menuList.flat());

        setOrderDataList([...result]);
        setOrderMenuList([...menuList.flat()]);
      } catch (error) {
        console.log(error);
      }
    };
    getOrderList();
  }, [reloadOrders]);

  const triggerReload = () => setReloadOrders(prev => !prev);

  const confirmClickHandler = async () => {
    const payload = {
      orderId: eventData,
      reservationStatus: 1,
    };
    try {
      const res = await axios.put(`/api/order/access`, payload);
      console.log(res);
      Swal.fire({
        title: "주문을 승인했습니다!",
        text: "주문을 확인해주세요.",
        icon: "success",
      });
      close();
      triggerReload();
    } catch (error) {
      console.log(error);
    }
  };

  const dismissClickHandler = async () => {
    const payload = {
      orderId: eventData,
      reservationStatus: 2,
    };
    try {
      const res = await axios.put(`/api/order/access`, payload);
      console.log(res);
      triggerReload();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex flex-col w-2/5 h-dvh border-l-2 bg-white border-l-gray shadow-xl">
      <div className="w-100% h-dvh">
        <div>
          <div className="flex w-100% h-100% flex-col text-center pt-10 text-2xl mb-6 font-semibold">
            새로운 주문
          </div>
          <div className="flex w-full items-center justify-between px-6 py-2 border-b border-gray">
            <span className="flex w-[30%] justify-center text-darkGray">
              주문번호
            </span>
            <span className="flex w-[40%] justify-center text-darkGray">
              메뉴
            </span>
            <span className="flex w-[30%] justify-center text-darkGray">
              주문시간
            </span>
          </div>
        </div>
        <ul className="flex flex-col w-[100%] h-[100%] gap-4 pt-3 text-nowrap">
          {orderDataList.map((item, index) =>
            item.length === 0 ? (
              <li
                key={item}
                className="flex w-full items-center justify-between px-6 py-2"
              >
                <span>새로운 주문이 없습니다</span>
              </li>
            ) : (
              <li
                onClick={() => open(item.orderId)}
                key={index}
                className="flex w-full items-center justify-between px-6 py-2 border-b border-gray"
              >
                <span className="flex w-[30%] justify-center text-black">
                  {item.orderId}
                </span>
                <span className="flex w-[30%] justify-center text-black">
                  {item.orderDetails.map((data, index) => (
                    <div key={index}>{data?.menuName}</div>
                  ))}
                </span>
                <span className="flex w-[30%] justify-center text-black">
                  {item.orderDetails.map((data, index) => (
                    <div key={index}>
                      {data?.createdAt.split(" ")?.[1].slice(0, 5)}
                    </div>
                  ))}
                </span>
              </li>
            ),
          )}
        </ul>
        <Modal>
          <div className="flex flex-col w-full h-full justify-between">
            <div className="flex flex-col w-full h-[60%] gap-4 pt-10">
              <div className="flex w-full px-10 gap-3">
                <span className="flex w-[25%]">주문번호</span>
                <span>12</span>
              </div>
              <div className="flex w-full px-10 gap-3">
                <span className="flex w-[25%]">주문한 메뉴</span>
                <span>asd</span>
              </div>
              <div className="flex w-full px-10 gap-3">
                <span className="flex w-[25%]">주문한 사람</span>
                <span>asdd</span>
              </div>
              <div className="flex w-full px-10 gap-3">
                <span className="flex w-[25%]">핸드폰 번호</span>
                <span>123123123</span>
              </div>
              <div className="flex w-full h-[20%] px-10 gap-3">
                <span className="flex w-[25%]">인원 수</span>
                <span>1 명</span>
              </div>
            </div>
            <div className="flex w-full justify-center gap-10 mb-10">
              <div
                onClick={confirmClickHandler}
                className="bg-blue px-2 py-1 rounded-md text-nowrap text-white font-medium"
              >
                주문 승인
              </div>
              <div
                onClick={dismissClickHandler}
                className="bg-red px-2 py-1 rounded-md text-nowrap text-white font-medium"
              >
                주문 취소
              </div>
            </div>
          </div>
        </Modal>
      </div>
    </div>
  );
};
export default OrderList;
