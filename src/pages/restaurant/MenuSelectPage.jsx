import styled from "@emotion/styled";
import axios from "axios";
import { useEffect, useState } from "react";
import { BsFillTelephoneFill } from "react-icons/bs";
import { FaAngleDown, FaAngleUp } from "react-icons/fa6";
import { FiMinusCircle, FiPlusCircle } from "react-icons/fi";
import { IoMdArrowBack } from "react-icons/io";
import { LuMapPin } from "react-icons/lu";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { reserveState } from "../../atoms/restaurantAtom";

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

const FlexDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalDiv = styled.div`
  position: absolute;
  width: 100%;
  bottom: 0;
  background-color: #fff;
  padding: 10px 10px;
  border-radius: 5px 5px 0 0;
  box-shadow:
    rgba(0, 0, 0, 0.16) 0px 10px 36px 0px,
    rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;
  transition: height 0.3s ease-in-out;
  button {
    padding: 5px 40px;
    font-size: 14px;
    background-color: #6f4cdb;
    color: #fff;
    border-radius: 5px;
  }
`;

const SelectDiv = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 14px;
  margin: 0 30px;
  p {
    font-size: 14px;
  }
  div {
    font-size: 12px;
    color: #888888;
  }
  span {
  }
`;

function MenuSelectPage() {
  const navigate = useNavigate();
  const isReserve = useRecoilValue(reserveState);
  const location = useLocation();
  const { time, count } = location.state || {};

  const [formData, setFormData] = useState({});
  const [isClick, setIsClick] = useState(false);
  const [postData, setPostData] = useState([]);

  const { id } = useParams();

  const getDetailStore = async () => {
    try {
      const res = await axios.get(`/api/restaurant?restaurantId=${id}`);
      setFormData(res.data.resultData);
      console.log(res.data.resultData);
    } catch (error) {
      console.log(error);
    }
  };

  const cateName = () => {
    switch (formData.categoryId) {
      case 1:
        return "한식";
      case 2:
        return "중식";
      case 3:
        return "일식";
      default:
        return "기타";
    }
  };

  useEffect(() => {
    getDetailStore();
    console.log(id);
  }, []);

  useEffect(() => {
    console.log(isReserve);
    // console.log("시간 : ", time, "인원 : ", count);
  }, []);

  return (
    <div style={{ height: "100vh" }}>
      <img
        src={`http://112.222.157.156:5222/pic/restaurant/${formData.restaurantId}/${formData.restaurantPics?.filePath}`}
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
          {formData.restaurantAddress
            ?.match(/대구광역시\s*중구/)[0]
            .replace("광역시", "")}{" "}
          <span>I</span> {cateName()}
        </div>
        <h1>{formData.restaurantName}</h1>
        <div>{formData.restaurantDescription}</div>

        <h2>
          <LuMapPin />
          {formData.restaurantAddress}
        </h2>
        <h2 style={{ marginTop: 10 }}>
          <BsFillTelephoneFill />
          매장 연락처 : {formData.restaurantNumber}
        </h2>
      </TitleDiv>
      <LineDiv />
      <ContentDiv>
        <h1>메뉴 선택</h1>
        {/* map 사용하기 */}
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
      <ModalDiv>
        <FlexDiv>
          {isClick ? (
            <FaAngleDown
              style={{ color: "#6F6F6F" }}
              onClick={() => setIsClick(false)}
            />
          ) : (
            <FaAngleUp
              style={{ color: "#6F6F6F" }}
              onClick={() => setIsClick(true)}
            />
          )}
        </FlexDiv>
        {isClick && (
          <div>
            <SelectDiv>
              <p>양지 쌀국수</p>
              <div>11,000</div>
            </SelectDiv>
            <SelectDiv style={{ margin: "5px 30px" }}>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 15,
                }}
              >
                <p>
                  <FiMinusCircle />
                </p>
                <p>3</p>
                <p>
                  <FiPlusCircle />
                </p>
              </div>
              <div>33,000</div>
            </SelectDiv>
            <LineDiv
              style={{
                height: 1,
                backgroundColor: "#eee",
                margin: "10px 0",
              }}
            />
            <SelectDiv style={{ marginBottom: 10 }}>
              <p>총 수량 3개</p>
              <p>총 33,000원</p>
            </SelectDiv>
            <FlexDiv>
              <button>{isReserve ? "예약하기" : "결제하기"}</button>
            </FlexDiv>
          </div>
        )}
      </ModalDiv>
    </div>
  );
}
export default MenuSelectPage;
