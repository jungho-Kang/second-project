import axios from "axios";
import { useEffect, useState } from "react";
import { IoMdArrowBack } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import { loginAtom } from "../../atoms/userAtom";
import {
  CloseDiv,
  HeaderDiv,
  Input,
  LayoutDiv,
  LoginBtn,
  TitleDiv,
} from "./loginStyle";

// const SignBtn = styled.button`
//   color: #fff;
//   border-radius: 5px;
//   @media (max-width: 430px) {
//     font-size: 14px;
//     max-width: 80px;
//     width: 100%;
//     padding: 10px 0;
//     margin-bottom: 25px;
//   }
//   @media (max-width: 1400px) and (min-width: 431px) {
//     width: 120px;
//     padding: 15px 0;
//     font-size: 20px;
//     margin-bottom: 40px;
//   }
// `;

// const EmailInput = styled.input`
//   border-bottom: 1px solid #bababa;
//   color: #bababa;
//   @media (max-width: 430px) {
//     margin-right: 20px;
//     max-width: 220px;
//     width: 100%;
//     padding: 10px 0;
//     margin-bottom: 25px;
//   }
//   @media (max-width: 1400px) and (min-width: 431px) {
//     margin-right: 30px;
//     width: 350px;
//     font-size: 24px;
//     margin-bottom: 40px;
//     padding: 15px 0;
//   }
// `;
function FindPwPage() {
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
        <TitleDiv>비밀번호 찾기</TitleDiv>
        <div style={{ marginLeft: 20, marginRight: 20 }}>
          <Input
            type="text"
            placeholder="아이디"
            onChange={e => setFormData({ ...formData, uid: e.target.value })}
          />
        </div>
        {/* <div style={{ marginLeft: 20, marginRight: 20 }}>
          <EmailInput
            type="password"
            placeholder="이메일"
            onChange={e => setFormData({ ...formData, upw: e.target.value })}
          />
          <SignBtn
            type="button"
            style={{
              backgroundColor: hasVal ? "#6F4CDB" : "#ddd",
            }}
            disabled={!hasVal}
          >
            인증코드
          </SignBtn>
        </div> */}
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
            onClick={() => navigate("/auth/editpw")}
            disabled={!hasVal}
          >
            비밀번호 변경
          </LoginBtn>
        </div>
      </form>
    </LayoutDiv>
  );
}

export default FindPwPage;
