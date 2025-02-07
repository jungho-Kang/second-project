import { useEffect, useState } from "react";
import axios from "axios";
import { ImFileEmpty } from "react-icons/im";
import { IoIosArrowForward } from "react-icons/io";
import MenuBar from "../../components/MenuBar";
import { IoArrowForward } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { getCookie } from "../../components/cookie";

const OrderList = () => {
  const navigate = useNavigate();
  const [isTap, setIsTap] = useState(true);
  const [orderQuntity, setOrderQuntity] = useState(0);
  const [paymentList, setPaymentList] = useState([]);

  // sessionStorage에 저장된 userId 값을 가져옴
  const sessionUserId = window.sessionStorage.getItem("userId");
  const accessToken = getCookie();

  useEffect(() => {
    const params = {
      userId: sessionUserId,
    };
    const getPaymentList = async () => {
      try {
        if (sessionUserId) {
          const res = await axios.get(`/api/user/pastOrderCheck`, {
            params,
            headers: {
              Authorization: `Bearer ${accessToken}`,
            },
          });
          const result = res.data.resultData;
          console.log(result);

          setPaymentList([...result]);
        } else {
          Swal.fire({
            title: "로그인이 필요한 서비스입니다!",
            text: "확인을 누르시면 로그인 페이지로 이동합니다.",
            icon: "error",
            confirmButtonText: "확인",
            showConfirmButton: true, // ok 버튼 노출 여부
            allowOutsideClick: false, // 외부 영역 클릭 방지
          }).then(result => {
            if (result.isConfirmed) {
              navigate("/auth");
            }
          });
        }
      } catch (error) {
        console.log(error);
      }
    };
    getPaymentList();
  }, []);

  return (
    <div className="w-full h-dvh flex flex-col justify-between overflow-hidden overflow-y-scroll scrollbar-hide mb-32">
      <div className="absolute top-0 left-0 w-full flex justify-between border-b-2 border-gray border-opacity-70 bg-white">
        <div
          onClick={() => setIsTap(!isTap)}
          className={`w-1/2 text-center text-xl font-semibold py-3 ${isTap ? "border-b-2 border-black" : "text-darkGray font-normal"}`}
        >
          진행 중인 주문
        </div>
        <div
          onClick={() => setIsTap(!isTap)}
          className={`w-1/2 text-center text-xl font-semibold py-3 ${isTap ? "text-darkGray font-normal" : "border-b-2 border-black"}`}
        >
          지난 주문 내역
        </div>
      </div>
      {isTap ? (
        orderQuntity > 0 ? (
          <></>
        ) : (
          <div className="flex flex-col w-full h-dvh justify-center items-center gap-3">
            <ImFileEmpty className="text-8xl text-darkGray" />
            <span className="text-2xl text-darkGray">
              진행 중인 주문이 없습니다
            </span>
            <div
              onClick={() => setIsTap(false)}
              className="flex items-center gap-1 mt-3 text-xl border border-darkGray px-3 py-1 rounded-lg bg-white cursor-pointer"
            >
              지난 주문 내역 보기
              <IoArrowForward />
            </div>
          </div>
        )
      ) : (
        <div className="flex flex-col w-full h-dvh justify-start items-center gap-5 mt-20 scrollbar-hide">
          {/* 주문내역 카드 */}
          {paymentList.map((item, index) => (
            <div
              key={index}
              className="w-full h-1/3 bg-white shadow-lg border-y border-y-gray"
            >
              <div className="w-full h-1/4 flex justify-between items-center px-5 py-3">
                <span className="text-darkGray">{item.createdAt.slice(0)}</span>
                <span className="font-semibold">
                  {item.reservationYn > 0 ? "예약주문" : "현장결제"}
                </span>
              </div>
              <div className="w-full h-3/4 flex justify-start items-center gap-5 px-5">
                <img
                  src={
                    item.filePath === ""
                      ? `/storeimg.png`
                      : `http://112.222.157.156:5222/pic/restaurant/${item?.restaurantId}/${item?.filePath}`
                  }
                  alt="식당이미지"
                  className="w-16 h-16 rounded-xl"
                />
                <div className="flex flex-col w-[60%]">
                  <div className="flex items-center gap-2 font-semibold text-2xl">
                    <span>{item.restaurantName}</span>
                    <IoIosArrowForward />
                  </div>
                  <div className="flex items-center gap-5 mt-1 justify-between">
                    <span className="text-nowrap">
                      {item.menuName
                        .split(",")
                        .map(item => item)
                        .slice(0, 1)}
                    </span>
                    <span className="text-nowrap">
                      주문 총 가격 {item.menuTotalPrice.toLocaleString("ko-KR")}
                      원
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
      <MenuBar />
    </div>
  );
};
export default OrderList;
