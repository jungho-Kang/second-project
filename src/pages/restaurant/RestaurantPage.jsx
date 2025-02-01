import styled from "@emotion/styled";
import { useEffect, useState } from "react";
import { FaStar } from "react-icons/fa";
import { IoMdArrowBack } from "react-icons/io";
import { Map } from "react-kakao-maps-sdk";
import { useNavigate } from "react-router-dom";
import { IoIosSearch } from "react-icons/io";

const ListDiv = styled.div`
  position: absolute;
  width: 100%;
  height: 250px;
  bottom: 0;
  z-index: 1;
  background-color: #fff;
  border-radius: 5px 5px 0 0;
  padding-left: 20px;
`;

const BarDiv = styled.div`
  width: 100px;
  height: 5px;
  margin-top: 5px;
  background-color: #eee;
  border-radius: 2px;
  margin-bottom: 10px;
`;

const SortDiv = styled.div`
  padding: 3px 10px;
  background-color: #ddd;
  color: #fff;
  display: inline-block;
  font-size: 10px;
  border-radius: 10px;
`;

const FlexDiv = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  width: 100%;
  margin-bottom: 5px;
`;

const SearchDiv = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  top: 2%;
  width: 100%;
  z-index: 10;
  color: #333;
  div {
    display: flex;
    gap: 10px;
    background-color: #fff;
    width: calc(100% - 40px);
    padding: 5px 10px;
    border-radius: 2px;
    box-shadow:
      0px 20px 25px -5px rgba(0, 0, 0, 0.1),
      0px 10px 10px -5px rgba(0, 0, 0, 0.04);
  }

  input {
    width: 100%;
  }
`;

function RestaurantPage() {
  const [isMapLoaded, setIsMapLoaded] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    const loadKakaoMap = () => {
      if (window.kakao?.maps) {
        setIsMapLoaded(true);
        return;
      }

      const script = document.createElement("script");
      script.async = true;
      script.src = `//dapi.kakao.com/v2/maps/sdk.js?appkey=${import.meta.env.VITE_KKO_MAP_KEY}&autoload=false&libraries=services`;

      script.addEventListener("load", () => {
        window.kakao.maps.load(() => setIsMapLoaded(true));
      });

      document.head.appendChild(script);
      return () => document.head.removeChild(script);
    };

    loadKakaoMap();
  }, []);

  if (!isMapLoaded) {
    return <div>지도를 불러오는 중입니다...</div>;
  }

  return (
    <div className="w-full h-dvh overflow-hidden overflow-y-scroll scrollbar-hide relative">
      <Map
        center={{
          lat: 37.566826,
          lng: 126.9786567,
        }}
        style={{
          width: "100%",
          height: "100%",
        }}
        level={3}
      ></Map>

      <SearchDiv>
        <div>
          <IoMdArrowBack
            style={{ width: 24, height: 24, cursor: "pointer" }}
            onClick={() => navigate(-1)}
          />

          <input type="text" placeholder="검색어를 입력해 주세요" />
          <IoIosSearch style={{ width: 24, height: 24, cursor: "pointer" }} />
        </div>
      </SearchDiv>
      <ListDiv>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            paddingRight: 20,
          }}
        >
          <BarDiv />
        </div>
        <FlexDiv style={{ gap: 10 }}>
          <SortDiv style={{ backgroundColor: "#6f4cdb" }}>전체</SortDiv>
          <SortDiv>거리순</SortDiv>
        </FlexDiv>

        <div style={{ marginTop: 10 }}>
          <FlexDiv>
            <span>동양백반</span>
            <span style={{ fontSize: 10 }}>식사시간 : 15~20분</span>
          </FlexDiv>
          <FlexDiv>
            <FaStar style={{ width: 10, height: 10, color: "E1FF00" }} />
            <span style={{ fontWeight: 700, fontSize: 8 }}>4.8</span>
            <span style={{ fontSize: 8, color: "#BABABA" }}>
              대구 중구 · 한식
            </span>
          </FlexDiv>
          <FlexDiv className="scrollbar-hide" style={{ overflowX: "scroll" }}>
            <img src="/menu.png" style={{ width: 140, height: 140 }} />
            <img src="/storeimg.png" style={{ width: 140, height: 140 }} />
            <img src="/storeimg.png" style={{ width: 140, height: 140 }} />
          </FlexDiv>
        </div>
      </ListDiv>
    </div>
  );
}
export default RestaurantPage;
