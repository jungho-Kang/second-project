import LineChartLayout from "./LineChart";
import SalesPage from "./SalesPage";

const SalesConfirm = () => {
  return (
    <>
      <div className="w-full h-full bg-gray">
        <div className="w-100% h-[calc(100%_-_4rem)] mx-4 my-8 bg-white rounded-lg overflow-hidden overflow-y-scroll scrollbar-hide">
          <div className="px-8 pt-8 ">
            <div className="flex items-center justify-between mb-10">
              <div className="flex gap-5 items-center">
                <img
                  src="/storeimg.png"
                  alt="식당이미지"
                  className="flex size-36 rounded-full"
                />
                <div className="font-semibold text-3xl pb-6 text-nowrap">
                  동백식당
                </div>
              </div>
              <div className="flex flex-col w-2/5 gap-5">
                <div className="w-30% h-20 rounded-md border-2 border-darkGrays">
                  <span className="flex w-full text-start px-3 pt-2 text-darkGray">
                    일일 총 매출
                  </span>
                  <span className="flex w-full h-full px-3 pb-5 justify-end text-3xl font-semibold">
                    2,453,050원
                  </span>
                </div>
                <div className="w-30% h-20 rounded-md border-2 border-darkGrays">
                  <span className="flex w-full text-start px-3 pt-2 text-darkGray">
                    01월 총 매출
                  </span>
                  <span className="flex w-full h-full px-3 pb-5 justify-end text-3xl font-semibold">
                    15,123,150원
                  </span>
                </div>
              </div>
            </div>
            <LineChartLayout />
            <SalesPage />
          </div>
        </div>
      </div>
    </>
  );
};
export default SalesConfirm;
