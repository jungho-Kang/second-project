const Table = () => {
  return (
    <>
      <div className="w-full h-full bg-gray">
        <div className="w-full h-full mx-4 my-8 bg-white overflow-hidden overflow-y-scroll scrollbar-hide">
          <div className="flex flex-wraps mx-5 gap-4 bg-white">
            {/* 주문카드 시작 */}
            <div className="w-56 h-48 border-2 border-darkGray bg-white">
              <div className="flex justify-between px-3 pb-4 bg-darkGray">
                <span>1</span>
                <span>선택하기</span>
              </div>
              <div className="px-3 py-3">
                <div className="flex justify-between">
                  <span>돼지국밥</span>
                  <span>x1</span>
                </div>
                <div className="pt-1 pl-6 text-darkGray">내장 섞어서</div>
              </div>
            </div>
            {/* 주문카드 끝 */}
          </div>
        </div>
      </div>
    </>
  );
};
export default Table;
