import { useEffect, useState } from "react";
import { IoMdArrowBack } from "react-icons/io";
import { IoMdAddCircleOutline } from "react-icons/io";
import _ from "lodash";
import { useRecoilState } from "recoil";
import { userDataAtom } from "../../../atoms/userAtom";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const PriceOrderPage = () => {
  const [priceList, setPriceList] = useState({});
  const [userData, setUserData] = useRecoilState(userDataAtom);
  const navigate = useNavigate();

  useEffect(() => {
    const params = {
      orderId: 2,
    };
    const getPaymentMembers = async () => {
      try {
        const res = await axios.get(
          "/api/user/user-payment-member/getPaymentMember",
          { params },
        );
        console.log(res);
      } catch (error) {
        console.log(error);
      }
    };
    getPaymentMembers();
  }, []);

  const inputPriceList = _.debounce(e => {
    console.log(e.target.value);
    const inputPrice = e.target.value;
    setPriceList({ ...priceList, price: inputPrice });
  }, 1000);
  console.log(priceList);

  const addMemberHandler = () => {
    navigate("/user/placetoorder/member");
  };

  return (
    <div className="w-full h-dvh overflow-x-hidden overflow-y-scroll scrollbar-hide">
      <div className="flex w-full justify-between py-6 items-center border-b border-gray">
        <div className="flex w-[15%] justify-center">
          <IoMdArrowBack className="text-3xl" />
        </div>
        <span className="text-lg font-semibold">금액 선택</span>
        <div className="w-[15%]">
          <span className="text-center px-3 py-1 rounded-md text-white text-opacity-0">
            ㅇ
          </span>
        </div>
      </div>
      <div className="w-full h-full">
        <div className="flex w-full h-[6%] px-6 justify-between items-center border-b border-gray">
          <span className="flex w-[30%] text-base text-nowrap">
            {userData.name ? userData.name : "김길동(12345)"}
          </span>
          <div className="flex w-[35%] gap-2 items-center">
            <input
              type="tel"
              className="border border-darkGray px-2 flex w-full text-end rounded-md"
              onChange={e => inputPriceList(e)}
              value={priceList.price}
            />
            <span>원</span>
          </div>
          <div className="flex w-[20%] justify-center gap-2 text-nowrap items-center">
            <span className="bg-blue px-2 text-white font-semibold rounded-md">
              확인
            </span>
            <span className="bg-red px-2 text-white font-semibold rounded-md">
              취소
            </span>
          </div>
        </div>
        <div className="flex w-full h-[5%] justify-center items-center">
          <IoMdAddCircleOutline
            onClick={addMemberHandler}
            className="text-3xl"
          />
        </div>
      </div>
    </div>
  );
};
export default PriceOrderPage;
