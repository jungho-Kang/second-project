const SideBarRight = () => {
  return (
    <div className="flex flex-col w-1/3 h-dvh border-l-2 border-l-gray shadow-xl justify-start items-center">
      <span className="pt-8 text-lg">주문목록</span>
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
  );
};
export default SideBarRight;
