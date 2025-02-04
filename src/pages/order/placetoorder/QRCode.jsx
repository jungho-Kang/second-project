import { QRCodeSVG } from "qrcode.react";

const QRCode = () => {
  return (
    <div className="flex flex-col w-full h-dvh justify-center items-center gap-10">
      <div className="w-3/4 h-3/4 border-8 border-primary rounded-t-2xl mt-24">
        <div className="flex w-full h-1/6 justify-center items-center bg-primary text-white font-bold text-3xl">
          미분당 동성로점
        </div>
        <div className="flex flex-col w-full mt-5 items-center">
          <span className="flex text-darkGray pr-40">예약일시</span>
          <div className="flex gap-5 text-2xl">
            <span>2025. 01. 14</span>
            <span>13:00</span>
          </div>
        </div>
        <div className="flex flex-col w-full items-center gap-1 pb-5">
          <span className="font-semibold text-3xl">양지 쌀국수</span>
          <span className="font-semibold text-2xl">11,000원</span>
          <span className="font-medium text-xl">1인 결제</span>
        </div>
        <div className="flex w-full justify-center items-center ">
          <QRCodeSVG value={"http://192.168.0.192:5173/user"} size={180} />
        </div>
      </div>
      <div className="text-xl underline">예약 취소는 매장으로 문의해주세요</div>
    </div>
  );
};
export default QRCode;
