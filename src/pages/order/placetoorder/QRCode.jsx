import { QRCodeSVG } from "qrcode.react";
import React, { useEffect, useState } from "react";
import MenuBar from "../../../components/MenuBar";
import axios from "axios";
import { useRecoilState } from "recoil";
import { ticketDataAtom, ticketIdAtom } from "../../../atoms/userAtom";
import { getCookie } from "../../../components/cookie";

const QRCode = () => {
  const [newTicketId, setNewTicketId] = useRecoilState(ticketIdAtom);
  const [newTicketData, setTicketData] = useRecoilState(ticketDataAtom);
  const accessToken = getCookie();
  const signedUserId = sessionStorage.getItem("userId");
  const [dimensions, setDimensions] = useState({
    couponW: 0,
    visualH: 0,
    infoH: 0,
  });

  const setCouponPath = () => {
    const visual = document.getElementById("visual");
    const couponW = visual.clientWidth;
    const info = document.getElementById("info");
    const visualH = visual.clientHeight;
    const infoH = info.clientHeight;

    visual.style.clipPath = `path('M0 0 L0 ${visualH - 10} Q10 ${visualH - 10} 10 ${visualH} L ${couponW - 10} ${visualH} Q${couponW - 10} ${visualH - 10} ${couponW} ${visualH - 10} L${couponW} 0 Z')`;
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
  }, []); // `dimensions`가 변경될 때마다 클립 경로를 업데이트

  useEffect(() => {
    const params = {
      ticketId: newTicketId,
    };
    const userParams = {
      userId: signedUserId,
    };

    if (newTicketId === 0) {
      const getTicketId = async () => {
        try {
          const res = await axios.get(`/api/order/ticket/ticketOne`, {
            userParams,
            headers: {
              Authorization: `Bearer ${accessToken}`,
            },
          });
          console.log(res);
          const result = res.data.resultData.ticketId;
          console.log(result);
          setNewTicketId(result);
        } catch (error) {
          console.log(error);
        }
      };
      getTicketId();
    } else {
      const getTicketData = async () => {
        try {
          const res = await axios.get(`/api/order/ticket`, {
            params,
            headers: {
              Authorization: `Bearer ${accessToken}`,
            },
          });
          console.log(res.data.resultData);
          const ticket = res.data.resultData.ticket;
          setTicketData({ ...ticket });
        } catch (error) {
          console.log(error);
        }
      };
      getTicketData();
    }
  }, [newTicketId]);

  return (
    <div className="flex flex-col w-full h-dvh px-10 mt-28">
      {/* 시각적 요소 섹션 */}
      <section id="visual">
        <div className="gap-4 pb-4 flex flex-col items-center justify-center bg-gray rounded-t-2xl border-b-4 border-dotted border-darkGray">
          <div className="w-full text-center bg-primary rounded-t-2xl p-6 text-white font-bold">
            <span className="font-bold text-4xl text-nowrap">
              {newTicketData.restaurantName}
            </span>
          </div>
          <div className="flex flex-col w-full items-center">
            <span className="text-base -ml-44 text-nowrap">식권 발급 시간</span>
            <div className="flex text-2xl text-center font-semibold gap-8">
              <span className="flex tracking-widest">
                {newTicketData?.reservationTime?.split(" ")[0]}
              </span>
              <span className="flex tracking-widest">
                {newTicketData?.reservationTime?.split(" ")[1]?.slice(0, 5)}
              </span>
            </div>
          </div>
          <div className="flex flex-col w-full items-center gap-2">
            <span className="text-2xl">{newTicketData.menuNames}</span>
            <span className="text-4xl font-bold tracking-wider">
              {newTicketData.totalAmount.toLocaleString("ko-KR")}원
            </span>
            <span className="text-xl">{newTicketData.personCount}명 결제</span>
          </div>
        </div>
      </section>
      {/* 정보 요소 섹션 */}
      <section id="info">
        <div className="p-10 flex flex-col justify-center items-center bg-gray rounded-b-2xl">
          <div className="flex w-full justify-center items-center ">
            <QRCodeSVG
              value={`http://112.222.157.156:5222/api/order/ticket?ticketId=${newTicketId}`}
              size={180}
              bgColor="none"
            />
          </div>
        </div>
      </section>
      <div className="text-xl underline text-center mt-10 pb-16">
        예약 취소는 매장으로 문의해주세요
      </div>
      <MenuBar />
    </div>
  );
};

export default QRCode;
