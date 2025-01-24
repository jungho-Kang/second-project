const SalesConfirm = () => {
  return (
    <>
      <div className="w-full h-full bg-gray">
        <div className="w-100% h-[calc(100%_-_4rem)] mx-4 my-8 bg-white rounded-lg overflow-hidden overflow-y-scroll scrollbar-hide">
          <div className="px-12 pt-8">
            <div className="flex gap-5 items-center">
              <img
                src="/storeimg.png"
                alt="식당이미지"
                className="flex size-36 rounded-full"
              />
              <div className="font-semibold text-3xl">
                동백식당
                <span className="font-medium text-xl pl-2">의 매출확인</span>
              </div>
            </div>
            <ul className="pt-10">
              <div className="flex justify-between gap-10">
                <li className="w-1/2 h-20 rounded-md border-2 border-darkGrays">
                  <span className="flex w-full text-start px-3 pt-2 text-darkGray">
                    일일 총 매출
                  </span>
                  <span className="flex w-full h-full px-3 pb-5 justify-end text-3xl font-semibold">
                    2,453,050원
                  </span>
                </li>
                <li className="w-1/2 h-20 rounded-md border-2 border-darkGrays">
                  <span className="flex w-full text-start px-3 pt-2 text-darkGray">
                    월간 총 매출
                  </span>
                  <span className="flex w-full h-full px-3 pb-5 justify-end text-3xl font-semibold">
                    15,123,150원
                  </span>
                </li>
              </div>
              <div className="flex pt-14 justify-between gap-10">
                <li className="w-1/2 h-60 rounded-md border-2 border-darkGrays">
                  <span className="flex w-full text-start px-3 pt-2 text-darkGray">
                    요일별
                  </span>
                  <div className="flex w-full px-3 py-2 justify-center text-3xl">
                    그래프
                  </div>
                </li>
                <li className="w-1/2 h-60 rounded-md border-2 border-darkGrays">
                  <span className="flex w-full text-start px-3 pt-2 text-darkGray">
                    결제 형태
                  </span>
                  <div className="flex w-full px-3 py-2 justify-center text-3xl">
                    그래프
                  </div>
                </li>
              </div>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};
export default SalesConfirm;
