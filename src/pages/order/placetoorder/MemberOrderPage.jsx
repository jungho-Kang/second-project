import { useState } from "react";
import { IoMdArrowBack } from "react-icons/io";
import { IoMdSearch } from "react-icons/io";
import { useNavigate } from "react-router-dom";

const Seatmate = () => {
  const [isSearch, setIsSearch] = useState(true);
  const navigate = useNavigate();

  const nextBtnHandler = () => {
    navigate("/user/placetoorder/price");
  };

  return (
    <div className="w-full h-dvh overflow-x-hidden overflow-y-scroll scrollbar-hide">
      <div className="flex w-full justify-between py-6 items-center border-b border-gray">
        <div className="flex w-[15%] justify-center">
          <IoMdArrowBack className="text-3xl" />
        </div>
        <span className="text-lg font-semibold">인원 선택</span>
        <div className="w-[15%]">
          <span
            className="bg-primary text-center px-3 py-1 rounded-md text-white"
            onClick={nextBtnHandler}
          >
            다음
          </span>
        </div>
      </div>
      <div className="flex w-full justify-between p-4">
        <div className="flex">
          <span
            className={`${isSearch ? "bg-gray text-darkGray text-opacity-60" : "bg-darkGray text-black"} px-2 py-1 rounded-s-md font-semibold`}
            onClick={() => setIsSearch(false)}
          >
            최근
          </span>
          <span
            className={`${isSearch ? "bg-darkGray text-black" : "bg-gray text-darkGray text-opacity-60"} px-2 py-1 rounded-e-md font-semibold`}
            onClick={() => setIsSearch(true)}
          >
            검색
          </span>
        </div>
        <div>총 4명 선택 중</div>
      </div>
      <div className="w-full h-dvh ">
        <div className="flex w-full h-[6%] items-center px-6 border-b border-gray">
          <div className="flex w-[90%] items-center gap-4">
            <input type="checkbox" className="w-5 h-5" checked disabled />
            <label className="text-xl">김길동(12345)</label>
          </div>
          <span className="w-[20%] text-darkGray">필수선택</span>
        </div>
        {isSearch ? (
          <div className="flex flex-col w-full h-dvh">
            <div className="flex p-6 items-center gap-1">
              <input
                type="text"
                className="w-[90%] border border-darkGray rounded-md px-2"
                placeholder="부서 또는 이름으로 검색해보세요"
              />
              <IoMdSearch className="flex w-[10%] text-2xl" />
            </div>
            <div className="flex flex-col w-full h-dvh">
              <div className="flex w-full h-[6%] items-center gap-4 px-6 border-b border-gray">
                <input type="checkbox" className="w-5 h-5" />
                <label className="text-xl">김길동(12345)</label>
              </div>
            </div>
          </div>
        ) : (
          <div className="flex flex-col w-full h-dvh">
            <div className="flex w-full h-[6%] items-center gap-4 px-6 border-b border-gray">
              <input type="checkbox" className="w-5 h-5" />
              <label className="text-xl">김길동(12345)</label>
            </div>
            <div className="flex w-full h-[6%] items-center gap-4 px-6 border-b border-gray">
              <input type="checkbox" className="w-5 h-5" />
              <label className="text-xl">김길동(12345)</label>
            </div>
            <div className="flex w-full h-[6%] items-center gap-4 px-6 border-b border-gray">
              <input type="checkbox" className="w-5 h-5" />
              <label className="text-xl">김길동(12345)</label>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
export default Seatmate;
