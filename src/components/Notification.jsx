import { FaCircle } from "react-icons/fa";
import { FaBell } from "react-icons/fa6";
import { useRecoilState } from "recoil";
import { isWhiteIcon, noticeState } from "../atoms/noticeAtom";

const Notification = () => {
  const [isWhite, setIsWhite] = useRecoilState(isWhiteIcon);
  const [isNotice, setIsNotice] = useRecoilState(noticeState);

  return (
    <div className="absolute right-5 top-5 z-50">
      {isNotice.length !== 0 ? (
        <FaCircle className="absolute -right-0 -top-1 text-xs text-red animate-ping" />
      ) : (
        <></>
      )}
      <FaBell className={`size-6 ${isWhite ? "text-white" : "text-black"}`} />
      {/* <StompComponent /> */}
    </div>
  );
};
export default Notification;
