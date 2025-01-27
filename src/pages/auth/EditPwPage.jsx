import axios from "axios";
import { useEffect, useState } from "react";
import { IoMdArrowBack } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import { loginAtom } from "../../atoms/userAtom";
import {
  CloseDiv,
  FormDiv,
  HeaderDiv,
  InputYupDiv,
  LayoutDiv,
  LoginBtn,
  SignUpInput,
  TitleDiv,
  YupDiv,
} from "./loginStyle";

function EditPwPage() {
  const navigate = useNavigate();
  const [isLogin, setIsLogin] = useRecoilState(loginAtom);
  const [formData, setFormData] = useState({ uid: "", upw: "" });
  const [hasVal, setHasVal] = useState(false);

  const pathMove = () => {
    navigate("/auth");
  };

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
      <HeaderDiv>
        <CloseDiv>
          <IoMdArrowBack
            style={{ width: "100%", height: "100%", cursor: "pointer" }}
            onClick={() => pathMove()}
          />
        </CloseDiv>
      </HeaderDiv>
      <FormDiv>
        <form onSubmit={e => handleSubmit(e)}>
          <TitleDiv>비밀번호 변경</TitleDiv>
          <InputYupDiv>
            <SignUpInput
              type="text"
              placeholder="새 비밀번호"
              onChange={e => setFormData({ ...formData, uid: e.target.value })}
            />

            <YupDiv>영문, 숫자, 특수문자가 조합 8-16자리로 입력해주세요</YupDiv>
          </InputYupDiv>
          <InputYupDiv>
            <SignUpInput
              type="password"
              placeholder="새 비밀번호 확인"
              onChange={e => setFormData({ ...formData, upw: e.target.value })}
            />
            <YupDiv>비밀번호를 재확인해주세요</YupDiv>
          </InputYupDiv>

          <div style={{ marginLeft: 20, marginRight: 20 }}>
            <LoginBtn
              type="submit"
              style={{
                backgroundColor: hasVal ? "#6F4CDB" : "#ddd",
              }}
              disabled={!hasVal}
            >
              확인
            </LoginBtn>
          </div>
        </form>
      </FormDiv>
    </LayoutDiv>
  );
}

export default EditPwPage;
