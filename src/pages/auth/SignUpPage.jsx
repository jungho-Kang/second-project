import { yupResolver } from "@hookform/resolvers/yup";
import axios from "axios";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { IoMdArrowBack } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import { useRecoilValue } from "recoil";
import * as yup from "yup";
import { roleAtom } from "../../atoms/roleAtom";
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
//   }
//   @media (max-width: 1400px) and (min-width: 431px) {
//     width: 120px;
//     padding: 15px 0;
//     font-size: 20px;
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
//   }
//   @media (max-width: 1400px) and (min-width: 431px) {
//     margin-right: 30px;
//     width: 350px;
//     font-size: 24px;
//     padding: 15px 0;
//   }
// `;

const loginSchema = yup.object({
  roleId: yup.string(),
  aid: yup
    .string()
    .min(6, "최소 6자 이상 작성해야 합니다.")
    .max(12, "최대 12자까지 작성 가능합니다.")
    .matches(
      /^[A-Za-z][A-Za-z0-9_]{6,12}$/,
      "아이디는 숫자, 영문으로 작성 가능합니다.",
    ),
  apw: yup
    .string()
    .required("비밀번호는 필수입니다.")
    .min(8, "최소 8자 이상 작성해야 합니다.")
    .max(16, "최대 16자까지 작성 가능합니다.")
    .matches(
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]+$/,
      "비밀번호는 영어, 숫자, 특수문자만 가능합니다.",
    ),
  name: yup
    .string()
    .required("이름은 필수입니다.")
    .min(2, "이름은 최소 2자 이상이어야 합니다."),
  email: yup
    .string()
    .required("이메일은 필수입니다.")
    .email("올바른 이메일 형식이 아닙니다."),
  phone: yup.string().required("전화번호는 필수입니다."),
});

function SignUpPage() {
  const navigate = useNavigate();
  const role = useRecoilValue(roleAtom);
  const [isSubmit, setIsSubmit] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onChange",
    resolver: yupResolver(loginSchema),
  });

  const postLogin = async data => {
    try {
      await axios.post("/api/admin/sign-up", data);
      navigate("/auth/signup/emailauth");
    } catch (error) {
      console.log(error);
    }
  };

  const handleSubmitForm = async data => {
    console.log(data);
    setIsSubmit(prev => !prev);
    postLogin(data);
  };

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
            {/* roleId를 보내기 위한 input */}
            <input
              type="text"
              {...register("roleId")}
              value={role}
              style={{ display: "none" }}
            />
            <TitleDiv>회원가입</TitleDiv>
            <InputYupDiv>
              <SignUpInput
                type="text"
                placeholder="아이디"
                {...register("aid")}
              />
              <YupDiv>{errors.aid?.message}</YupDiv>
            </InputYupDiv>
            <InputYupDiv>
              <SignUpInput
                type="password"
                placeholder="비밀번호 (8-16자)"
                {...register("apw")}
              />
              <YupDiv>{errors.apw?.message}</YupDiv>
            </InputYupDiv>
            <InputYupDiv>
              <SignUpInput
                type="text"
                placeholder="이름"
                {...register("name")}
              />
              <YupDiv>{errors.name?.message}</YupDiv>
            </InputYupDiv>
            <InputYupDiv>
              <SignUpInput
                type="email"
                placeholder="이메일"
                {...register("email")}
              />
              <YupDiv>{errors.email?.message}</YupDiv>
            </InputYupDiv>
            <InputYupDiv>
              <SignUpInput
                type="text"
                placeholder="휴대전화번호"
                maxLength={11}
                {...register("phone")}
                // value={formData.phone}
                // onChange={e =>
                //   setFormData({ ...formData, phone: e.target.value })
                // }
              />
              <YupDiv>{errors.phone?.message}</YupDiv>
            </InputYupDiv>

            {/* <InputYupDiv>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                marginTop: 20,
                width: 500,
              }}
            >
              <EmailInput
                type="email"
                placeholder="이메일"
                onChange={e =>
                  setFormData({ ...formData, upw: e.target.value })
                }
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
            </div>
            <YupDiv>비밀번호를 재확인해주세요</YupDiv>
          </InputYupDiv> */}

            <div style={{ marginLeft: 20, marginRight: 20 }}>
              <LoginBtn type="submit">가입하기</LoginBtn>
            </div>
          </form>
        </FormDiv>
      </LayoutDiv>
      {isSubmit && <Loading />}
    </div>
  );
}

export default SignUpPage;
