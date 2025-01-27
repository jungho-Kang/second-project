import { IoMdArrowBack } from "react-icons/io";
import QRCode from "./placetoorder/QRCode";
import Notification from "../../components/Notification";

const PlaceToOrder = () => {
  return (
    <div>
      <div className="absolute w-full h-10% flex justify-between items-center px-3 py-5 border-b-2 border-gray border-opacity-70 bg-white ">
        <IoMdArrowBack className="text-3xl" onClick={() => ""} />
        <span className="text-xl font-semibold">주문하기</span>
        <div>&emsp;</div>
        <Notification />
      </div>
      <QRCode />
    </div>
  );
};

export default PlaceToOrder;
