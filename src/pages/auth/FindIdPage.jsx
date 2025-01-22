import { IoMdArrowBack } from "react-icons/io";
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import { loginAtom } from "../../atoms/userAtom";
import styled from "@emotion/styled";

const LayoutDiv = styled.div`
  text-align: center;
`;

const HeaderDiv = styled.div`
  @media (max-width: 430px) {
    width: 100%;
    padding: 10px 15px;
  }
  @media (max-width: 1400px) and (min-width: 431px) {
    width: 100%;
    padding: 20px 30px;
  }
`;

const CloseDiv = styled.div`
  @media (max-width: 430px) {
    width: 25px;
    height: 25px;
  }
  @media (max-width: 1400px) and (min-width: 431px) {
    width: 40px;
    height: 40px;
  }
`;

const TitleDiv = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 50px;
  margin-bottom: 50px;
  font-weight: 700;
  @media (max-width: 430px) {
    font-size: 20px;
    width: 100%;
    margin-top: 50px;
    margin-bottom: 50px;
  }
  @media (max-width: 1400px) and (min-width: 431px) {
    width: 100%;
    font-size: 34px;
  }
`;

const Input = styled.input`
  border-bottom: 1px solid #bababa;
  color: #bababa;
  @media (max-width: 430px) {
    max-width: 430px;
    width: 100%;
    padding: 10px 0;
    margin-bottom: 25px;
  }
  @media (max-width: 1400px) and (min-width: 431px) {
    width: 500px;
    font-size: 24px;
    margin-bottom: 40px;
    padding: 15px 0;
  }
`;

const LoginBtn = styled.button`
  color: #fff;
  border-radius: 5px;
  @media (max-width: 430px) {
    max-width: 430px;
    width: 100%;
    padding: 10px 0;
    margin-bottom: 25px;
  }
  @media (max-width: 1400px) and (min-width: 431px) {
    width: 500px;
    padding: 15px 0;
    font-size: 24px;
    margin-bottom: 40px;
  }
`;

function FindIdPage() {
  const navigate = useNavigate();
  const [isLogin, setIsLogin] = useRecoilState(loginAtom);
  const [formData, setFormData] = useState({ uid: "", upw: "" });
  const [hasVal, setHasVal] = useState(false);

  const postLogin = async () => {
    try {
      await axios.post("/api/user/sign-in", formData);
      setIsLogin(true);
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    postLogin();
  };

  useEffect(() => {
    if (formData.uid && formData.upw) {
      setHasVal(true);
    } else {
      setHasVal(false);
    }
  }, [formData]);

  return (
    <LayoutDiv>
      <form onSubmit={e => handleSubmit(e)}>
        <HeaderDiv>
          <CloseDiv>
            <IoMdArrowBack
              style={{ width: "100%", height: "100%", cursor: "pointer" }}
              onClick={() => navigate("/auth")}
            />
          </CloseDiv>
        </HeaderDiv>
        <TitleDiv>아이디 찾기</TitleDiv>
        <div style={{ marginLeft: 20, marginRight: 20 }}>
          <Input
            type="text"
            placeholder="이름"
            onChange={e => setFormData({ ...formData, uid: e.target.value })}
          />
        </div>
        <div style={{ marginLeft: 20, marginRight: 20 }}>
          <Input
            type="password"
            placeholder="이메일"
            onChange={e => setFormData({ ...formData, upw: e.target.value })}
          />
        </div>
        <div style={{ marginLeft: 20, marginRight: 20 }}>
          <LoginBtn
            type="submit"
            style={{
              backgroundColor: hasVal ? "#6F4CDB" : "#ddd",
            }}
            disabled={!hasVal}
          >
            아이디 찾기
          </LoginBtn>
        </div>
      </form>
    </LayoutDiv>
  );
}

export default FindIdPage;
