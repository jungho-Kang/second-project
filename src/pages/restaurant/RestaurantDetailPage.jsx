import { IoMdArrowBack } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import styled from "@emotion/styled";
import { LuMapPin } from "react-icons/lu";

const BackDiv = styled.div`
  background-color: #fff;
  width: 24px;
  height: 24px;
  border-radius: 12px;
  padding: 3px;
  cursor: pointer;
  position: absolute;
  top: 0;
  margin: 10px 20px;
  color: #333;
`;

const TitleDiv = styled.div`
  padding: 15px 25px;
  div {
    font-size: 10px;
    color: #bababa;
    margin-bottom: 5px;
  }
  span {
    color: #eee;
    padding: 0 5px;
  }
  h1 {
    margin-bottom: 5px;
  }
  h2 {
    display: flex;
    align-items: center;
    gap: 5px;
    font-size: 10px;
  }
`;

const LineDiv = styled.div`
  width: 100%;
  height: 10px;
  background-color: #ddd;
`;

const ContentDiv = styled.div`
  height: calc(100% - 100px);
  overflow-y: auto;
  padding: 15px 25px;
  div {
    color: #707070;
  }
  span {
    word-wrap: break-word;
    font-size: 12px;
    font-weight: 700;
  }
  h1 {
    font-weight: 700;
    margin-bottom: 20px;
  }
`;

const MenuDiv = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  margin-bottom: 10px;
  img {
    width: 75px;
    height: 75px;
    border-radius: 5px;
  }
`;

const FooterDiv = styled.div`
  display: flex;
  gap: 35px;
  justify-content: center;
  align-items: center;
  height: 70px;
  width: 100%;
  bottom: 0;
  position: absolute;
  background-color: #fff;
  button {
    padding: 5px 40px;
    font-size: 14px;
    background-color: #6f4cdb;
    color: #fff;
    border-radius: 5px;
  }
`;

function StoreDetailPage() {
  const navigate = useNavigate();

  return (
    <div style={{ height: "100vh" }}>
      <img
        src="/storemain.png"
        alt="가게 이미지"
        style={{ width: "100%", height: 260, position: "relative" }}
      />
      <BackDiv>
        <IoMdArrowBack
          style={{ width: "100%", height: "100%" }}
          onClick={() => navigate(-1)}
        />
      </BackDiv>
      <TitleDiv>
        <div>
          대구 중구 <span>I</span> 한식
        </div>
        <h1>동양백반</h1>
        <div>동성로한식맛집 요즘 핫한 닭볶음탕</div>

        <h2>
          <LuMapPin />
          대구 중구 달구벌대로 2109-37
        </h2>
      </TitleDiv>
      <LineDiv />
      {/* map 사용하기 */}
      <ContentDiv>
        <h1>메뉴</h1>
        <MenuDiv>
          <img src="/menu.png" alt="메뉴 이미지" />
          <div>
            <div>캐비어알밥</div>
            <span>7,000원</span>
          </div>
        </MenuDiv>
        <LineDiv
          style={{ height: 1, backgroundColor: "#eee", marginBottom: 10 }}
        />
        <MenuDiv>
          <img src="/menu.png" alt="메뉴 이미지" />
          <div>
            <div>캐비어알밥</div>
            <span>7,000원</span>
          </div>
        </MenuDiv>
        <LineDiv
          style={{ height: 1, backgroundColor: "#eee", marginBottom: 10 }}
        />
        <MenuDiv>
          <img src="/menu.png" alt="메뉴 이미지" />
          <div>
            <div>캐비어알밥</div>
            <span>7,000원</span>
          </div>
        </MenuDiv>
        <LineDiv
          style={{ height: 1, backgroundColor: "#eee", marginBottom: 10 }}
        />
        <MenuDiv>
          <img src="/menu.png" alt="메뉴 이미지" />
          <div>
            <div>캐비어알밥</div>
            <span>7,000원</span>
          </div>
        </MenuDiv>
        <LineDiv
          style={{ height: 1, backgroundColor: "#eee", marginBottom: 10 }}
        />
        <MenuDiv>
          <img src="/menu.png" alt="메뉴 이미지" />
          <div>
            <div>캐비어알밥</div>
            <span>7,000원</span>
          </div>
        </MenuDiv>
        <LineDiv
          style={{ height: 1, backgroundColor: "#eee", marginBottom: 10 }}
        />
        <MenuDiv>
          <img src="/menu.png" alt="메뉴 이미지" />
          <div>
            <div>캐비어알밥</div>
            <span>7,000원</span>
          </div>
        </MenuDiv>
        <LineDiv
          style={{ height: 1, backgroundColor: "#eee", marginBottom: 10 }}
        />
      </ContentDiv>
      <FooterDiv>
        <button>현장결제</button>
        <button>예약하기</button>
      </FooterDiv>
    </div>
  );
}
export default StoreDetailPage;
