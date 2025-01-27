import axios from "axios";
import { useEffect, useState } from "react";
import { IoMdArrowBack } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import {
  CloseDiv,
  FormDiv,
  HeaderDiv,
  Input,
  InputYupDiv,
  LayoutDiv,
  LoginBtn,
  SignUpInput,
  TitleDiv,
  YupDiv,
} from "./loginStyle";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import Loading from "../../components/Loading";

const loginSchema = yup.object({
  name: yup
    .string()
    .required("이름은 필수입니다.")
    .min(2, "이름은 최소 2자 이상이어야 합니다."),
  email: yup
    .string()
    .required("이메일은 필수입니다.")
    .email("올바른 이메일 형식이 아닙니다."),
});

function FindIdPage() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ name: "", email: "" });
  // const [hasVal, setHasVal] = useState(false);
  const [isSubmit, setIsSubmit] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm({
    mode: "onSubmit",
    resolver: yupResolver(loginSchema),
  });

  const getId = async () => {
    try {
      await axios.get(
        `/api/user/find-id?name=${formData.name}&email=${formData.email}`,
      );
      alert(`${formData.email} 이메일로 아이디가 전송되었습니다.`);
      navigate("/auth");
    } catch (error) {
      alert("이름과 이메일이 일치하지 않습니다.");
      setIsSubmit(false);
      console.log(error);
    }
  };

  const handleSubmitForm = data => {
    console.log(data);
    setIsSubmit(prev => !prev);
    getId();
  };

  useEffect(() => {
    if (formData.name && formData.email) {
      // setHasVal(true);
    } else {
      // setHasVal(false);
    }
  }, [formData]);

  const hasVal = watch("name") && watch("email");

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
            <TitleDiv>아이디 찾기</TitleDiv>
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
        </FormDiv>
      </LayoutDiv>
      {isSubmit && <Loading />}
    </div>
  );
}

export default FindIdPage;
