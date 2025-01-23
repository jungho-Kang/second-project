import { MdTableBar } from "react-icons/md";
import { FaBowlFood } from "react-icons/fa6";
import { PiMoneyWavyFill } from "react-icons/pi";
import { LuClipboardList } from "react-icons/lu";
import { IoStorefront } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
const SideBar = () => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col w-44 h-dvh justify-between items-center bg-white border-r-2 border-r-gray shadow-xl">
      <div className="w-full mt-8">
        <div className="mb-6 px-4 w-44">
          <img src={"/atta pparune.png"} />
        </div>
        <div className="flex flex-col justify-between">
          <div
            className={
              "flex gap-3 pl-8 py-4 items-center hover:bg-primary hover:text-white hover:ml-6 hover:rounded-l-full"
            }
          >
            <MdTableBar className="text-2xl" />
            <span className="text-lg font-semibold">테이블</span>
          </div>
          <div
            className={
              "flex gap-3 pl-8 py-4 items-center hover:bg-primary hover:text-white hover:ml-6 hover:rounded-l-full"
            }
            onClick={() => navigate("/store/order")}
          >
            <LuClipboardList className="text-2xl" />
            <div className="text-lg font-semibold">주문내역</div>
          </div>
          <div
            className={
              "flex gap-3 pl-8 py-4 items-center hover:bg-primary hover:text-white hover:ml-6 hover:rounded-l-full"
            }
            onClick={() => navigate("/store/menu")}
          >
            <FaBowlFood className="text-2xl" />
            <div className="text-lg font-semibold">메뉴</div>
          </div>
          <div
            className={
              "flex gap-3 pl-8 py-4 items-center hover:bg-primary hover:text-white hover:ml-6 hover:rounded-l-full"
            }
          >
            <PiMoneyWavyFill className="text-2xl" />
            <div className="text-lg font-semibold">매출확인</div>
          </div>
          <div
            className={
              "flex gap-3 pl-8 py-4 items-center hover:bg-primary hover:text-white hover:ml-6 hover:rounded-l-full"
            }
          >
            <IoStorefront className="text-2xl" />
            <div className="text-lg font-semibold">내 매장</div>
          </div>
        </div>
      </div>
      <div className="rounded-md bg-primary text-white font-bold tracking-wider px-6 py-2 mb-16">
        로그아웃
      </div>
    </div>
  );
};
export default SideBar;
