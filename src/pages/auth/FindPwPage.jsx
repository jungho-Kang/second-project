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

const findPwSchema = yup.object({
  uid: yup
    .string()
    .min(6, "최소 6자 이상 작성해야 합니다.")
    .max(12, "최대 12자까지 작성 가능합니다.")
    .matches(
      /^[A-Za-z][A-Za-z0-9_]{6,12}$/,
      "아이디는 숫자, 영문으로 작성 가능합니다.",
    ),
  email: yup
    .string()
    .required("이메일은 필수입니다.")
    .email("올바른 이메일 형식이 아닙니다."),
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
    resolver: yupResolver(findPwSchema),
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

  const idVal = watch("uid");
  const emailVal = watch("email");
  const hasVal = idVal && emailVal;

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
            <TitleDiv>비밀번호 찾기</TitleDiv>
            <InputYupDiv>
              <SignUpInput
                type="text"
                placeholder="아이디"
                {...register("uid")}
              />
              <YupDiv>{errors.uid?.message}</YupDiv>
            </InputYupDiv>
            <InputYupDiv>
              <SignUpInput
                type="email"
                placeholder="이메일"
                {...register("email")}
              />
              <YupDiv>{errors.email?.message}</YupDiv>
            </InputYupDiv>

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
              <LoginBtn
                type="submit"
                style={{
                  backgroundColor: hasVal ? "#6F4CDB" : "#ddd",
                }}
                disabled={!hasVal}
              >
                비밀번호 변경
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
