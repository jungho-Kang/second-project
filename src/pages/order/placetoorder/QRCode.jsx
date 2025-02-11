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
  const [ticketStatus, setTicketStatus] = useState(0);

  // 티켓 사용 여부를 확인하기 위해서 3초마다 체크
  useEffect(() => {
    const intervalId = setInterval(async () => {
      const params = {
        ticketId: newTicketId,
      };
      try {
        const res = await axios.get("/api/order/ticket/status", { params });
        const result = res.data.resultData;
        if (result.status === 1) {
          setTicketStatus(1);
          clearInterval(intervalId);
        }
      } catch (error) {
        console.error("티켓 상태 조회 실패:", error);
      }
    }, 3000);

    return () => clearInterval(intervalId);
  }, [newTicketId]);

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
    setCouponPath();
  }, [newTicketId]);

  useEffect(() => {
    const visual = document.getElementById("visual");
    const info = document.getElementById("info");
    const updateDimensions = () => {
      if (visual && info) {
        setDimensions({
          couponW: visual.clientWidth,
          visualH: visual.clientHeight,
          infoH: info.clientHeight,
        });
      }
    };

    updateDimensions();
    window.addEventListener("resize", updateDimensions);

    return () => window.removeEventListener("resize", updateDimensions);
  }, []);

  useEffect(() => {
    if (!newTicketId || newTicketId <= 0) {
      fetchTicketId();
    } else {
      fetchTicketData(newTicketId);
    }
  }, [newTicketId]);

  const fetchTicketId = async () => {
    try {
      const res = await axios.get("/api/order/ticket/ticketOne", {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
        params: { userId: signedUserId },
      });
      console.log(res.data);

      setNewTicketId(res.data.resultData.ticketId);
    } catch (error) {
      console.error("티켓 ID를 가져오는 중 오류 발생:", error);
    }
  };

  const fetchTicketData = async ticketId => {
    try {
      const res = await axios.get("/api/order/ticket", {
        params: { ticketId },
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });
      console.log(res);

      setTicketData(res.data.resultData.ticket);
    } catch (error) {
      console.error("티켓 데이터를 가져오는 중 오류 발생:", error);
      alert("티켓 정보를 가져오는 중 오류가 발생했습니다. 다시 시도해주세요.");
    }
  };

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
              value={`http://112.222.157.156:5222/user/placetoorder`}
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
