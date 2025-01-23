import { MdTableBar } from "react-icons/md";
import { FaBowlFood } from "react-icons/fa6";
import { PiMoneyWavyFill } from "react-icons/pi";
import { LuClipboardList } from "react-icons/lu";
import { useState } from "react";

const SideBar = () => {
  const [isClickTable, setIsClickTable] = useState(false);
  const [isClickOrder, setIsClickOrder] = useState(false);
  const [isClickMenu, setIsClickMenu] = useState(false);
  const [isClickSales, setIsClickSales] = useState(false);
  const [isClickStore, setIsClickStore] = useState(false);

  const onFocusHandler = e => {
    console.log(e);
    console.log(e.target.innerText);
    switch (e.target.innerText) {
      case "테이블":
        setIsClickOrder(false);
        setIsClickMenu(false);
        setIsClickSales(false);
        setIsClickStore(false);
        setIsClickTable(() => !isClickTable);
        break;

      case "주문내역":
        setIsClickTable(false);
        setIsClickMenu(false);
        setIsClickSales(false);
        setIsClickStore(false);
        setIsClickOrder(() => !isClickOrder);
        break;

      case "메뉴":
        setIsClickTable(false);
        setIsClickOrder(false);
        setIsClickSales(false);
        setIsClickStore(false);
        setIsClickMenu(() => !isClickMenu);
        break;

      case "매출확인":
        setIsClickTable(false);
        setIsClickOrder(false);
        setIsClickMenu(false);
        setIsClickStore(false);
        setIsClickSales(() => !isClickSales);
        break;
    }
  };

  return (
    <div className="flex flex-col w-44 h-dvh justify-between items-center bg-white border-r-2 border-r-gray shadow-xl">
      <div className="w-full mt-8">
        <div className="mb-6 px-4 w-44">
          <img src={"/atta pparune.png"} />
        </div>
        <div className="flex flex-col justify-between">
          <div
            onClick={e => onFocusHandler(e)}
            className={`flex gap-3 pl-8 py-4 items-center + 
              ${isClickTable ? " bg-primary text-white ml-6 rounded-l-full" : ""}
            `}
          >
            <MdTableBar className="text-2xl" />
            <span className="text-lg font-semibold">테이블</span>
          </div>
          <div
            onClick={() => onFocusHandler()}
            className={`flex gap-3 pl-8 py-4 items-center + 
              ${isClickOrder ? " bg-primary text-white ml-6 rounded-l-full" : ""}
            `}
          >
            <LuClipboardList className="text-2xl" />
            <div className="text-lg font-semibold">주문내역</div>
          </div>
          <div
            onClick={() => onFocusHandler()}
            className={`flex gap-3 pl-8 py-4 items-center + 
              ${isClickMenu ? " bg-primary text-white ml-6 rounded-l-full" : ""}
            `}
          >
            <FaBowlFood className="text-2xl" />
            <div className="text-lg font-semibold">메뉴</div>
          </div>
          <div
            onClick={() => onFocusHandler()}
            className={`flex gap-3 pl-8 py-4 items-center + 
              ${isClickSales ? " bg-primary text-white ml-6 rounded-l-full" : ""}
            `}
          >
            <PiMoneyWavyFill className="text-2xl" />
            <div className="text-lg font-semibold">매출확인</div>
          </div>
        </div>
      </div>
      <div className="rounded-md bg-primary text-white font-bold tracking-wider px-6 py-2 mb-16 cursor-pointer hover:bg-primaryFocus">
        로그아웃
      </div>
    </div>
  );
};
export default SideBar;
