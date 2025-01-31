import { yupResolver } from "@hookform/resolvers/yup";
import axios from "axios";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { IoMdArrowBack } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import * as yup from "yup";
import Loading from "../../components/Loading";
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

const editPwSchema = yup.object({
  upw: yup
    .string()
    .required("비밀번호는 필수입니다.")
    .min(8, "최소 8자 이상 작성해야 합니다.")
    .max(16, "최대 16자까지 작성 가능합니다.")
    .matches(
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]+$/,
      "비밀번호는 영어, 숫자, 특수문자만 가능합니다.",
    ),
  pwConfirm: yup
    .string()
    .required("비밀번호 확인을 입력해주세요.")
    .oneOf([yup.ref("upw")], "비밀번호가 일치하지 않습니다."),
});

function FindPwPage() {
  const navigate = useNavigate();
  const [isSubmit, setIsSubmit] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm({
    mode: "onChange",
    resolver: yupResolver(editPwSchema),
  });

  // api 완성되면 작업
  const getId = async data => {
    try {
      await axios.get();
    } catch (error) {
      console.log(error);
    }
  };

  const handleSubmitForm = data => {
    setIsSubmit(prev => !prev);
    getId(data);
  };

  const pwVal = watch("upw");
  const pwConfirmVal = watch("pwConfirm");
  const hasVal = pwVal && pwConfirmVal;

  return (
    <div>
      <LayoutDiv style={{ position: "relative" }}>
        <HeaderDiv>
          <CloseDiv>
            <IoMdArrowBack
              style={{ width: "100%", height: "100%", cursor: "pointer" }}
              onClick={() => navigate("/auth")}
            />
          </CloseDiv>
        </HeaderDiv>
        <FormDiv>
          <form onSubmit={handleSubmit(handleSubmitForm)}>
            <TitleDiv>비밀번호 변경</TitleDiv>
            <InputYupDiv>
              <SignUpInput
                type="password"
                placeholder="새 비밀번호"
                {...register("upw")}
              />
              <YupDiv>{errors.upw?.message}</YupDiv>
            </InputYupDiv>
            <InputYupDiv>
              <SignUpInput
                type="password"
                placeholder="새 비밀번호 확인"
                {...register("pwConfirm")}
              />
              <YupDiv>{errors.pwConfirm?.message}</YupDiv>
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
      {isSubmit && <Loading />}
    </div>
  );
}

export default FindPwPage;
