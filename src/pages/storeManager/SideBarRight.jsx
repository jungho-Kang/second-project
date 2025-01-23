import { useState } from "react";
import AddModal from "../../components/Modal";
import useModal from "../../components/useModal";

const SideBarRight = () => {
  const { Modal, open, close } = useModal();
  const [isOpen, setIsOpen] = useState(false);

  const addModalHandler = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="flex flex-col w-1/3 h-dvh border-l-2 bg-white border-l-gray shadow-xl justify-between items-center">
      <div className="w-full pt-8 text-center">
        <span className="text-lg">주문목록</span>
        <div className="flex w-full pt-8 pl-7 pr-10 pb-3  justify-between text-darkGray border-b-2 border-b-gray">
          <div>
            <span>주문번호</span>
          </div>
          <div>
            <span>메뉴</span>
          </div>
          <div>
            <span>시간</span>
          </div>
        </div>
        <div className="flex w-full pt-3 pl-10 pr-5 pb-3 justify-between">
          <span>0001</span>
          <span>돼지국밥</span>
          <span>13:23:47</span>
        </div>
      </div>
      <div className="flex w-full items-center justify-center gap-4">
        <div
          // onClick={() => addModalHandler(true)}
          onClick={open}
          className="rounded-md bg-primary text-white font-bold tracking-wider text-nowrap px-3 py-2 mb-16 cursor-pointer hover:bg-primaryFocus"
        >
          테이블 추가
        </div>
        <Modal />
        <div
          onClick={() => addModalHandler(true)}
          className="rounded-md bg-primary text-white font-bold tracking-wider text-nowrap px-3 py-2 mb-16 cursor-pointer hover:bg-primaryFocus"
        >
          테이블 수정
        </div>
      </div>
      {isOpen && <AddModal setIsOpen={setIsOpen} />}
    </div>
  );
};
export default SideBarRight;
