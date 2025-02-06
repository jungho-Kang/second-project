import { useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import { orderIdAtom } from "../../atoms/restaurantAtom";

const NotificationPage = () => {
  const [orderId, setOrderId] = useRecoilState(orderIdAtom);
  const navigate = useNavigate();

  const orderMemberPageNav = () => {
    navigate(`/user/placetoorder/member`, {
      state: {
        orderId: orderId,
      },
    });
  };
  return (
    <div className="absolute right-4 w-[80%] h-[30%] bg-white z-50 top-12 border-2 border-darkGray rounded-md">
      <div className="p-5 font-semibold">알림</div>
      <div className="flex flex-col px-5 gap-5 font-medium text-nowrap">
        <div
          onClick={() => orderMemberPageNav()}
          className="flex w-full h-[10%]"
        >
          인원을 선택해주세요.
        </div>
        <div
          onClick={() => navigate(`/user/placetoorder/price`)}
          className="flex w-full h-[10%]"
        >
          새로운 결제 요청이 도착했습니다.
        </div>
        <div>새로운 결제 요청이 도착했습니다.</div>
      </div>
    </div>
  );
};
export default NotificationPage;
