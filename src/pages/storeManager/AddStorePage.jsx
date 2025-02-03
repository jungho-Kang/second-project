import styled from "@emotion/styled";
import { yupResolver } from "@hookform/resolvers/yup";
import axios from "axios";
import { useEffect, useState } from "react";
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
} from "../auth/loginStyle";
import useModal from "../../components/useModal";
import DaumPostcodeEmbed from "react-daum-postcode";

const SignBtn = styled.button`
  color: #fff;
  border-radius: 5px;
  @media (max-width: 430px) {
    font-size: 14px;
    max-width: 80px;
    width: 100%;
    padding: 10px 0;
  }
  @media (max-width: 1400px) and (min-width: 431px) {
    width: 120px;
    padding: 15px 0;
    font-size: 20px;
  }
`;

const EmailInput = styled.input`
  border-bottom: 1px solid #bababa;
  color: #bababa;
  @media (max-width: 430px) {
    margin-right: 20px;
    max-width: 220px;
    width: 100%;
    padding: 10px 0;
  }
  @media (max-width: 1400px) and (min-width: 431px) {
    margin-right: 30px;
    width: 350px;
    font-size: 24px;
    padding: 15px 0;
  }
`;

const storeSchema = yup.object({
  roleId: yup.string(),
  name: yup
    .string()
    .required("이름은 필수입니다.")
    .min(2, "이름은 최소 2자 이상이어야 합니다."),
  phone: yup.string().required("전화번호는 필수입니다."),
  storeName: yup.string().required("가게이름은 필수입니다."),
});

function AddStorePage() {
  const navigate = useNavigate();
  const [isSubmit, setIsSubmit] = useState(false);
  const [inputAddress, setInputAddress] = useState({});

  const { Modal, open, close } = useModal({ title: "주소검색" });

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm({
    mode: "onChange",
    resolver: yupResolver(storeSchema),
  });

  // api 완성되면 작업
  const getPw = async data => {
    try {
      await axios.get();
    } catch (error) {
      console.log(error);
    }
  };

  const handleSubmitForm = data => {
    setIsSubmit(prev => !prev);
    getPw(data);
  };

  const idVal = watch("uid");
  const emailVal = watch("email");
  const hasVal = idVal && emailVal;

  const addressHandler = data => {
    let fullAddress = data.address;
    let extraAddress = "";
    const zoneCode = data.zonecode;

    if (data.addressType === "R") {
      if (data.bname !== "") {
        extraAddress += data.bname;
      }
      if (data.buildingName !== "") {
        extraAddress +=
          extraAddress !== "" ? `, ${data.buildingName}` : data.buildingName;
      }
      fullAddress += extraAddress !== "" ? ` (${extraAddress})` : "";
    }
    // setIsClick(false);
    close();
    setInputAddress({ fullAddress: fullAddress, zoneCode: zoneCode });
    console.log(fullAddress);
  };

  return (
    <div>
      <LayoutDiv style={{ position: "relative" }}>
        <HeaderDiv>
          <CloseDiv>
            <IoMdArrowBack
              style={{ width: "100%", height: "100%", cursor: "pointer" }}
              onClick={() => navigate(-1)}
            />
          </CloseDiv>
        </HeaderDiv>
        <FormDiv>
          <form onSubmit={handleSubmit(handleSubmitForm)}>
            <TitleDiv>온라인 입점신청서</TitleDiv>
            <InputYupDiv>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  marginTop: 20,
                  width: 500,
                }}
              >
                <EmailInput type="text" placeholder="사업자등록번호" />
                <SignBtn
                  type="button"
                  style={{
                    backgroundColor: hasVal ? "#6F4CDB" : "#ddd",
                  }}
                  disabled={!hasVal}
                >
                  번호조회
                </SignBtn>
              </div>
              <YupDiv></YupDiv>
            </InputYupDiv>
            <InputYupDiv>
              <SignUpInput
                type="text"
                placeholder="대표자명"
                {...register("name")}
              />
              <YupDiv>{errors.name?.message}</YupDiv>
            </InputYupDiv>
            <InputYupDiv>
              <SignUpInput
                type="tel"
                placeholder="대표자 휴대폰 번호"
                {...register("phone")}
              />
              <YupDiv>{errors.phone?.message}</YupDiv>
            </InputYupDiv>
            <InputYupDiv>
              <SignUpInput
                type="text"
                placeholder="가게 이름"
                {...register("storeName")}
              />
              <YupDiv>{errors.storeName?.message}</YupDiv>
            </InputYupDiv>
            <InputYupDiv>
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
                  type="text"
                  placeholder="우편번호"
                  value={inputAddress ? inputAddress.zoneCode : ""}
                  onClick={() => open()}
                />
                <SignBtn
                  type="button"
                  style={{
                    backgroundColor: hasVal ? "#6F4CDB" : "#ddd",
                  }}
                  onClick={() => open()}
                >
                  주소조회
                </SignBtn>
              </div>
              <YupDiv></YupDiv>
            </InputYupDiv>
            <InputYupDiv>
              <SignUpInput
                type="text"
                placeholder="가게 주소"
                value={inputAddress ? inputAddress.fullAddress : ""}
                onClick={() => open()}
              />
              <YupDiv>{errors.email?.message}</YupDiv>
            </InputYupDiv>
            <InputYupDiv>
              <SignUpInput
                type="email"
                placeholder="(선택) 상세 주소"
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
                확인
              </LoginBtn>
            </div>
          </form>
        </FormDiv>
      </LayoutDiv>
      {open ? (
        <Modal>
          {/* <div className="absolute w-[50%] border"> */}
          <DaumPostcodeEmbed onComplete={e => addressHandler(e)} />
          {/* </div> */}
        </Modal>
      ) : (
        <></>
      )}
      {isSubmit && <Loading />}
    </div>
  );
}

export default AddStorePage;
