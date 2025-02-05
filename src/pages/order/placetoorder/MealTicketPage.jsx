import { IoMdArrowBack } from "react-icons/io";
import QRCode from "./QRCode";
import Notification from "../../../components/Notification";
import { useNavigate } from "react-router-dom";

const PlaceToOrder = () => {
  const navigate = useNavigate();
  return (
    <div className="w-full h-dvh overflow-x-hidden overflow-y-scroll scrollbar-hide">
      <div className="absolute w-full h-10% flex justify-between items-center px-3 py-5 border-b-2 border-gray border-opacity-70 bg-white z-30">
        <IoMdArrowBack className="text-3xl" onClick={() => ""} />
        <span className="text-xl font-semibold">진행중인 예약</span>
        <div>&emsp;</div>
      </div>
      <QRCode />
    </div>
  );
};

export default PlaceToOrder;
