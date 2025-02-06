import axios from "axios";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { IoMdClose } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import { useRecoilState, useRecoilValue } from "recoil";
import { roleAtom } from "../../atoms/roleAtom";
import { loginAtom, userDataAtom } from "../../atoms/userAtom";
import { STORE, USER } from "../../constants/Role";
import {
  CloseDiv,
  FormDiv,
  HeaderDiv,
  InputYupDiv,
  LayoutDiv,
  LoginBtn,
  LogoImg,
  RoleDiv,
  SignUpInput,
  TextSpan,
  TitleDiv,
} from "./loginStyle";
import { getCookie, setCookie } from "../../components/cookie";

function LoginPage() {
  const navigate = useNavigate();
  const [isLogin, setIsLogin] = useRecoilState(loginAtom);
  const [userData, setUserData] = useRecoilState(userDataAtom);
  const [formData, setFormData] = useState({ id: "", pw: "" });
  const [hasVal, setHasVal] = useState(false);

  const { handleSubmit } = useForm();

  const role = useRecoilValue(roleAtom);
  const routeHandler = () => {
    if (role === USER) {
      navigate("/user");
    } else if (role === STORE) {
      navigate("/store");
    }
  };

  const postLogin = async () => {
    try {
      if (role === USER) {
        const res = await axios.post("/api/user/sign-in", formData);

        const result = res.data.resultData;
        setUserData({
          companyId: result.companyId,
          companyName: result.companyName,
          email: result.email,
          name: result.name,
          phone: result.phone,
          pic: result.pic,
          point: result.point,
          roleId: result.roleId,
          uid: result.uid,
          userId: result.userId,
        });

        console.log(result);
        const userId = result.userId;
        const accessToken = result.accessToken;
        window.sessionStorage.setItem("userId", userId);
        setCookie(accessToken);
      } else if (role === STORE) {
        await axios.post("/api/admin/sign-in", formData);
      }
      setIsLogin(true);
      routeHandler();
    } catch (error) {
      console.log(error);
    }
  };

  const handleSubmitForm = () => {
    postLogin();
  };

  useEffect(() => {
    if (formData.id && formData.pw) {
      setHasVal(true);
    } else {
      setHasVal(false);
    }
  }, [formData]);

  return (
    <LayoutDiv>
      <HeaderDiv>
        <CloseDiv>
          <IoMdClose
            style={{ width: "100%", height: "100%", cursor: "pointer" }}
            onClick={() => navigate(-1)}
          />
        </CloseDiv>
      </HeaderDiv>
      <TitleDiv>
        <LogoImg src="/logo.png" alt="로고" />
        <RoleDiv>
          {role === USER ? "사용자" : role === STORE ? "사장님" : ""}
        </RoleDiv>
      </TitleDiv>
      <FormDiv>
        <form onSubmit={handleSubmit(handleSubmitForm)}>
          <InputYupDiv>
            <SignUpInput
              type="text"
              placeholder="아이디"
              value={formData.id}
              onChange={e => setFormData({ ...formData, id: e.target.value })}
            />
          </InputYupDiv>
          <InputYupDiv>
            <SignUpInput
              type="password"
              value={formData.pw}
              placeholder="비밀번호 (8-16자)"
              onChange={e => setFormData({ ...formData, pw: e.target.value })}
            />
          </InputYupDiv>
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
      </FormDiv>
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
    </LayoutDiv>
  );
}

export default LoginPage;
