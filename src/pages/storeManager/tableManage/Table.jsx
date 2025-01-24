import { useState } from "react";
import OrderList from "./OderList";

const Table = () => {
  const [isClick, setIsClick] = useState(false);

  const openDescriptHandler = () => {
    setIsClick(!isClick);
  };
  const data = [
    {
      orderNo: 1,
      price: "27,000원",
      menuTitle: "돼지국밥",
      menuInfo: "내장섞어서",
      menuQuntity: 1,
    },
    {
      orderNo: 2,
      price: "27,000원",
      menuTitle: "돼지국밥",
      menuInfo: "내장섞어서",
      menuQuntity: 1,
    },
    {
      orderNo: 3,
      price: "27,000원",
      menuTitle: "돼지국밥",
      menuInfo: "내장섞어서",
      menuQuntity: 1,
    },
    {
      orderNo: 4,
      price: "27,000원",
      menuTitle: "돼지국밥",
      menuInfo: "내장섞어서",
      menuQuntity: 1,
    },
    {
      orderNo: 5,
      price: "27,000원",
      menuTitle: "돼지국밥",
      menuInfo: "내장섞어서",
      menuQuntity: 1,
    },
    {
      orderNo: 6,
      price: "27,000원",
      menuTitle: "돼지국밥",
      menuInfo: "내장섞어서",
      menuQuntity: 1,
    },
    {
      orderNo: 7,
      price: "27,000원",
      menuTitle: "돼지국밥",
      menuInfo: "내장섞어서",
      menuQuntity: 1,
    },
    {
      orderNo: 8,
      price: "27,000원",
      menuTitle: "돼지국밥",
      menuInfo: "내장섞어서",
      menuQuntity: 1,
    },
    {
      orderNo: 9,
      price: "27,000원",
      menuTitle: "돼지국밥",
      menuInfo: "내장섞어서",
      menuQuntity: 1,
    },
    {
      orderNo: 10,
      price: "27,000원",
      menuTitle: "돼지국밥",
      menuInfo: "내장섞어서",
      menuQuntity: 1,
    },
  ];

  return (
    <>
      <div className="w-full h-full bg-gray">
        <div className="w-100% h-[calc(100%_-_4rem)] mx-4 my-8 bg-white rounded-lg overflow-hidden overflow-y-scroll scrollbar-hide">
          <div className="flex flex-wrap ml-5 mt-5 gap-4 bg-white justify-start">
            {/* 주문카드 시작 */}
            {data.map((item, index) => (
              <div
                onClick={e => openDescriptHandler(e)}
                key={index}
                // className="w-[calc(33%_-_1rem)] min-w-40 h-48 border-2 border-darkGray bg-white"
                className={`${isClick ? "w-[calc(33%_-_1rem)]" : "w-[calc(25%_-_1rem)]"} min-w-40 h-48 border-2 border-darkGray bg-white cursor-pointer`}
              >
                <div className=" px-4 py-1 bg-third">
                  <div className="flex justify-between">
                    <span>{item.orderNo}</span>
                    <span className="font-semibold">{item.price}</span>
                  </div>
                  <div>12:37 ~ (16분)</div>
                </div>

                <div className="px-3 py-3">
                  <div className="flex justify-between">
                    <span>{item.menuTitle}</span>
                    <span>x{item.menuQuntity}</span>
                  </div>
                  <div className="pt-1 pl-6 text-darkGray">{item.menuInfo}</div>
                </div>
              </div>
            ))}
            {/* 주문카드 끝 */}
          </div>
        </div>
      </div>
      {isClick ? <OrderList /> : <></>}
    </>
  );
};
export default Table;
