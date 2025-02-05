import { QRCodeSVG } from "qrcode.react";
import React, { useEffect, useState } from "react";

const QRCode = () => {
  const [dimensions, setDimensions] = useState({
    couponW: 0,
    visualH: 0,
    infoH: 0,
  });

  // 클립 경로 설정 함수
  const setCouponPath = () => {
    const visual = document.getElementById("visual");
    const couponW = visual.clientWidth;
    const info = document.getElementById("info");
    const visualH = visual.clientHeight;
    const infoH = info.clientHeight;

    // 시각적 요소에 클립 경로 적용
    visual.style.clipPath = `path('M0 0 L0 ${visualH - 10} Q10 ${visualH - 10} 10 ${visualH} L ${couponW - 10} ${visualH} Q${couponW - 10} ${visualH - 10} ${couponW} ${visualH - 10} L${couponW} 0 Z')`;
    // 정보 요소에 클립 경로 적용
    info.style.clipPath = `path('M10 0 Q10 10 0 10 L0 ${infoH} L${couponW} ${infoH} L${couponW} 10 Q${couponW - 10} 10 ${couponW - 10} 0 Z')`;
  };
  useEffect(() => {
    // 요소 크기를 추적하여 상태에 저장
    const updateDimensions = () => {
      const visual = document.getElementById("visual");
      const info = document.getElementById("info");

      if (visual && info) {
        const couponW = visual.clientWidth;
        const visualH = visual.clientHeight;
        const infoH = info.clientHeight;

        setDimensions({ couponW, visualH, infoH });
      }
    };

    // 컴포넌트 초기 로드 시 클립 경로 설정
    updateDimensions();

    // 창 크기 조정 시 클립 경로를 다시 설정하도록 이벤트 리스너 추가
    window.addEventListener("resize", updateDimensions);

    // 컴포넌트 언마운트 시 이벤트 리스너 제거
    return () => {
      window.removeEventListener("resize", updateDimensions);
    };
  }, []);

  useEffect(() => {
    // `dimensions` 상태가 업데이트될 때마다 클립 경로를 다시 설정
    setCouponPath();
  }, [dimensions]); // `dimensions`가 변경될 때마다 클립 경로를 업데이트

  return (
    <div className="flex flex-col w-full h-dvh px-10 mt-28">
      {/* 시각적 요소 섹션 */}
      <section id="visual">
        <div className="gap-4 pb-4 flex flex-col items-center justify-center bg-gray rounded-t-2xl border-b-4 border-dotted border-darkGray">
          <div className="w-full text-center bg-primary rounded-t-2xl p-6 text-white font-bold">
            <span className="font-bold text-4xl text-nowrap">
              미분당 동성로점
            </span>
          </div>
          <div className="flex flex-col w-full items-center">
            <span className="text-base -ml-48 text-nowrap">예약시간</span>
            <div className="flex text-2xl text-center font-semibold gap-8">
              <span className="flex tracking-widest">2025.01.14</span>
              <span className="flex tracking-widest">13:00</span>
            </div>
          </div>
          <div className="flex flex-col w-full items-center gap-2">
            <span className="text-2xl">양지 쌀국수 외 3개</span>
            <span className="text-4xl font-bold tracking-wider">44,000원</span>
            <span className="text-xl">4인 결제</span>
          </div>
        </div>
      </section>
      {/* 정보 요소 섹션 */}
      <section id="info">
        <div className="p-10 flex flex-col justify-center items-center bg-gray rounded-b-2xl">
          <div className="flex w-full justify-center items-center ">
            <QRCodeSVG
              value={"http://192.168.0.192:5173/user"}
              size={180}
              bgColor="none"
            />
          </div>
        </div>
      </section>
      <div className="text-xl underline text-center mt-10 pb-16">
        예약 취소는 매장으로 문의해주세요
      </div>
    </div>
  );
};

export default QRCode;
