import axios from "axios";
import { useEffect, useState } from "react";
import { IoMdClose } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import { useRecoilState, useRecoilValue } from "recoil";
import { roleAtom } from "../../atoms/roleAtom";
import { loginAtom } from "../../atoms/userAtom";
import { STORE, USER } from "../../constants/Role";
import {
  CloseDiv,
  HeaderDiv,
  Input,
  LayoutDiv,
  LoginBtn,
  LogoImg,
  RoleDiv,
  TextSpan,
  TitleDiv,
} from "./loginStyle";
import { useForm } from "react-hook-form";

function LoginPage() {
  const navigate = useNavigate();
  const [isLogin, setIsLogin] = useRecoilState(loginAtom);
  const [formData, setFormData] = useState({ uid: "", upw: "" });
  const [hasVal, setHasVal] = useState(false);

  const { handleSubmit } = useForm();

  const role = useRecoilValue(roleAtom);
  // const routeHandler = () => {
  //   navigate(`/auth`);
  // };

  const postLogin = async () => {
    try {
      await axios.post("/api/user/sign-in", formData);
      setIsLogin(true);
      if (role === USER) {
        navigate("/user");
      } else if (role === STORE) {
        navigate("/store");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleSubmitForm = () => {
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
      <form onSubmit={handleSubmit(handleSubmitForm)}>
        <HeaderDiv>
          <CloseDiv>
            <IoMdClose
              style={{ width: "100%", height: "100%", cursor: "pointer" }}
              onClick={() => navigate("/")}
            />
          </CloseDiv>
        </HeaderDiv>
        <TitleDiv>
          <LogoImg src="/logo.png" alt="로고" />
          <RoleDiv>
            {role === USER ? "사용자" : role === STORE ? "사장님" : ""}
          </RoleDiv>
        </TitleDiv>
        <div style={{ marginLeft: 20, marginRight: 20 }}>
          <Input
            type="text"
            placeholder="아이디"
            value={formData.uid}
            onChange={e => setFormData({ ...formData, uid: e.target.value })}
          />
        </div>
        <div style={{ marginLeft: 20, marginRight: 20 }}>
          <Input
            type="password"
            value={formData.upw}
            placeholder="비밀번호 (8-16자)"
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
            로그인
          </LoginBtn>
        </div>
      </form>
      <TextSpan onClick={() => navigate("/auth/findid")}>아이디 찾기</TextSpan>
      <TextSpan style={{ color: "#bababa" }}>I</TextSpan>
      <TextSpan onClick={() => navigate("/auth/findpw")}>
        비밀번호 찾기
      </TextSpan>
      {role === STORE && (
        <>
          <TextSpan style={{ color: "#bababa" }}>I</TextSpan>
          <TextSpan
            style={{ marginRight: 25 }}
            onClick={() => navigate("/auth/policy")}
          >
            회원가입
          </TextSpan>
        </>
      )}
      {/* <button onClick={() => navigate("/auth/editpw")}>여기</button> */}
    </LayoutDiv>
  );
}

export default LoginPage;
