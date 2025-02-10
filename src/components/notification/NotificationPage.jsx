import { useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import { orderIdAtom } from "../../atoms/restaurantAtom";
import {
  isClickIcon,
  isWhiteIcon,
  noticeState,
  priceNoticeAtom,
  orderNoticeAtom,
} from "../../atoms/noticeAtom";

const NotificationPage = () => {
  const [orderId, setOrderId] = useRecoilState(orderIdAtom);
  const [isNotice, setIsNotice] = useRecoilState(noticeState);
  const [isPriceNotice, setIsPriceNotice] = useRecoilState(priceNoticeAtom);
  const [isOrderNotice, setIsOrderNotice] = useRecoilState(orderNoticeAtom);
  const [isClick, setIsClick] = useRecoilState(isClickIcon);
  const navigate = useNavigate();
  console.log(isNotice);
  console.log(isPriceNotice);
  console.log(isOrderNotice);

  const orderMemberPageNav = orderId => {
    navigate(`/user/placetoorder/member/${orderId}`, {
      state: {
        orderId: orderId,
      },
    });
    setIsClick(false);
  };

  const pricePageNav = orderId => {
    navigate(`/user/placetoorder/price/${orderId}`, {
      state: {
        orderId: orderId,
      },
    });
    setIsClick(false);
  };
  return (
    <div className="absolute right-4 w-[80%] bg-white z-50 top-12 border-2 border-darkGray rounded-md pb-6 overflow-x-hidden over overflow-y-scroll scrollbar-hide">
      <div className="p-5 font-semibold text-darkGray">알림</div>
      <div className="flex flex-col px-5 gap-5 font-medium text-nowrap">
        {isNotice?.length > 0 ? (
          isNotice.map(item => (
            <div
              key={item.orderId}
              onClick={() => {
                if (item.message === "나한테 온 승인요청 메세지") {
                  pricePageNav(item.orderId);
                } else {
                  orderMemberPageNav(item.orderId);
                }
              }}
              className="flex w-full h-[10%]"
            >
              {item.message} [{item.restaurantName}]
            </div>
          ))
        ) : (
          <span className="text-darkGray tracking-wide">
            새로운 알림이 없습니다
          </span>
        )}
      </div>
    </div>
  );
};
export default NotificationPage;
