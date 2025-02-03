import { FaBell } from "react-icons/fa6";
import { FaCircle } from "react-icons/fa";
import StompComponent from "./notification/StompComponent";

const Notification = () => {
  return (
    <div className="absolute right-5 top-5 z-50">
      <FaCircle className="absolute -right-0.5 -top-1 text-xs text-red animate-ping" />
      <FaBell className="text-white size-6" />
      {/* <StompComponent /> */}
    </div>
  );
};
export default Notification;
