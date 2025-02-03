import axios from "axios";
import { useEffect, useState } from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import DaumPostcodeEmbed from "react-daum-postcode";
import { GrUpload } from "react-icons/gr";
import { MdOutlineCancel } from "react-icons/md";
import useModal from "../../../components/useModal";

const infoEditSchema = yup.object({
  restaurantName: yup.string().required("매장명은 필수입력 항목입니다"),
  restaurantAddress: yup.string().required("매장주소는 필수입력 항목입니다"),
  restaurantNumber: yup
    .string()
    .matches(
      /^\d{2,3}?\d{3,4}?\d{4}$/,
      "전화번호는 00(0)-000(0)-0000 형식으로 입력해주세요(- 제외)",
    )
    .required("전화번호는 필수입력 항목입니다"),
  filePath: yup
    .mixed()
    .test("required", "1개 이상의 파일을 업로드 해주세요", value => {
      return value && value.length > 0;
    })
    .test("filesize", "파일 크기는 2MB 이하만 가능합니다.", value => {
      return (
        value &&
        Array.from(value).every(file => {
          if (file.size <= 2 * 1024 * 1024) return;
        })
      );
    })
    .test("fileCount", "최대 6개의 파일만 업로드 가능합니다", value => {
      return value && value.length <= 6;
    }),
  previewlist: yup
    .mixed()
    .test("required", "미리보기 할 이미지를 업로드 해주세요", value => {
      return value && value.length > 0;
    })
    .test("fileCount", "최대 3개의 이미지만 업로드 가능합니다", value => {
      return value && value.length <= 3;
    })
    .test("fileType", "JPG 또는 PNG 파일만 업로드 가능합니다.", value => {
      // 파일이 1개가 아니고 여러개이므로 반복문으로 type 비교를 해야 함.
      return (
        value &&
        Array.from(value).every(file => {
          return ["image/jpeg", "image/png"].includes(file.type);
        })
      );
    })
    .test("filesize", "파일 크기는 2MB 이하만 가능합니다.", value => {
      // 파일이 1개가 아니고 여러개 이므로 반복문으로 각각의 파일의 크기를 알아내야한다
      return (
        value &&
        Array.from(value).every(file => {
          return file.size <= 2 * 1024 * 1024;
        })
      );
    }),
});

const StoreInfo = () => {
  const [imgFile, setImgFile] = useState([]);
  const [imgPreview, setImgPreview] = useState([]);
  const [isClick, setIsClick] = useState(false);
  const [inputAddress, setInputAddress] = useState({});
  const [formData, setFormData] = useState({
    restaurantId: 0,
    restaurantName: "",
    restaurantAddress: "",
    restaurantNumber: "",
    operatingHours: "",
    restaurantDescription: "",
    status: 0,
    maxCapacity: 0,
    lat: 0,
    lng: 0,
    filePath: [],
  });

  const { Modal, open, close } = useModal({ title: "주소검색" });

  const {
    register,
    handleSubmit,
    setValue,
    trigger,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(infoEditSchema),
    defaultValues: {
      restaurantId: 0,
      restaurantName: "",
      restaurantAddress: "",
      restaurantNumber: "",
      operatingHours: "",
      restaurantDescription: "",
      status: 0,
      maxCapacity: 0,
      lat: 0,
      lng: 0,
      filePath: [],
    },
    mode: "onChange",
  });

  useEffect(() => {
    trigger();
  }, [trigger]);

  useEffect(() => {}, []);

  const formSubmitHandler = data => {
    console.log(data);
  };

  useEffect(() => {
    const getStoreInfo = async () => {
      try {
        const params = { restaurantId: 1 }; // 숫자만 로그인한 레스토랑의 id 값으로 변경
        const res = await axios.get(`/api/restaurant`, { params });
        console.log(res);
        console.log(res.data.resultData);
      } catch (error) {
        console.log(error);
      }
    };
    getStoreInfo();
  }, []);

  const addImgHandler = e => {
    const inputfile = e.target.files;
    console.log(inputfile);

    const fileArray = [...inputfile];
    setImgFile([...fileArray]);

    const imgURL = fileArray.map(data => URL.createObjectURL(data));
    setImgPreview([...imgURL]);
  };
  console.log(imgPreview);
  console.log(imgFile);

  const deleteImgHandler = e => {
    console.log(e.value);
  };

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
    <div className="flex w-[calc(100%_-_11rem)] h-full bg-gray justify-center items-center">
      <div className="flex w-[96.5%] h-[calc(100%_-_4rem)] bg-white rounded-lg overflow-hidden overflow-y-scroll scrollbar-hide">
        <div className="flex flex-col w-full h-full p-6 gap-6">
          <form onSubmit={handleSubmit(formSubmitHandler)}>
            <span>프로필 사진</span>
            <div className="flex w-full h-[25%] gap-2">
              <label
                htmlFor="inputImg"
                className="flex flex-col w-32 h-32 border border-darkGray items-center justify-center gap-2"
              >
                <GrUpload className="w-6 h-6" />
                <span className="text-lg">이미지 업로드</span>
                <span className="text-sm">최대 6개까지</span>
              </label>
              <input
                type="file"
                id="inputImg"
                multiple
                onChange={e => addImgHandler(e)}
                className="hidden"
                // {...register("filePath")}
              />
              <div className="flex w-[90%] gap-2 justify-start">
                {imgPreview.map((data, index) => (
                  <div key={index} className="relative">
                    <MdOutlineCancel
                      className="absolute flex p-1 text-3xl right-0.5 text-black"
                      onClick={e => deleteImgHandler(e)}
                    />
                    <img
                      src={data}
                      alt=""
                      className="border border-darkGray w-32 h-32"
                    />
                  </div>
                ))}
              </div>
            </div>
          </form>
          <div className="flex gap-2 items-center">
            <span className="text-darkGray">가게 이름</span>
            <input
              type="text"
              className="border px-2 rounded-md"
              {...register("restaurantName")}
            />
          </div>
          <div className="flex gap-2 items-center">
            <span className="text-darkGray">가게 설명</span>
            <input
              type="text"
              className="border px-2 rounded-md"
              {...register("restaurantDescription")}
            />
          </div>
          <div className="flex flex-col w-full gap-2">
            <div className="flex w-[50%] h-10 gap-2 items-center">
              <label htmlFor="" className="text-darkGray">
                우편 번호
              </label>
              <input
                type="text"
                className="w-[25%] border rounded-md px-2"
                value={inputAddress ? inputAddress.zoneCode : ""}
                placeholder="00000"
              />
              <button
                className="px-2 py-1 border rounded-md"
                onClick={() => open()}
              >
                주소확인
              </button>
            </div>
            {open ? (
              <Modal>
                {/* <div className="absolute w-[50%] border"> */}
                <DaumPostcodeEmbed onComplete={e => addressHandler(e)} />
                {/* </div> */}
              </Modal>
            ) : (
              <></>
            )}
            <div className="flex w-[45%] gap-2">
              <label htmlFor="" className="w-[15%] text-nowrap text-darkGray">
                기본 주소
              </label>
              <input
                type="text"
                className="w-full border rounded-md px-2 truncate"
                value={inputAddress ? inputAddress.fullAddress : ""}
                {...register("restaurantAddress")}
              />
            </div>
            <div className="flex w-[45%] gap-2">
              <label htmlFor="" className="w-[15%] text-nowrap text-darkGray">
                상세 주소
              </label>
              <input
                type="text"
                className="w-full border rounded-md px-2 truncate"
              />
            </div>
          </div>
          <div className="flex flex-col w-[45%] gap-2">
            <label htmlFor="" className="w-[15%] text-nowrap text-darkGray">
              전화 번호
            </label>
            <input
              type="tel"
              className="border px-2 rounded-md"
              placeholder="00(0)-000(0)-0000"
              {...register("restaurantNumber")}
            />
            <p className="text-red">{errors.restaurantNumber?.message}</p>
          </div>
          <div className="flex flex-col w-[45%] gap-2">
            <label htmlFor="" className="w-[15%] text-nowrap text-darkGray">
              영업 시간
            </label>
            <input
              type="time"
              className="w-[30%] border px-2 rounded-md"
              step="1800"
              // {...register("operatingHours")}
            />
          </div>
          <fieldset className="flex w-[45%] gap-6">
            <legend htmlFor="" className="w-[15%] text-nowrap text-darkGray">
              영업 상태
            </legend>
            <div className="flex gap-1.5">
              <input
                type="radio"
                className="border px-2 rounded-md"
                {...register("status")}
              />
              <label htmlFor="">영업중</label>
            </div>
            <div className="flex gap-1.5">
              <input
                type="radio"
                className="border px-2 rounded-md"
                {...register("status")}
              />
              <label htmlFor="">브레이크타임</label>
            </div>
            <div className="flex gap-1.5">
              <input
                type="radio"
                className="border px-2 rounded-md"
                {...register("status")}
              />
              <label htmlFor="">영업종료</label>
            </div>
          </fieldset>
          {/* <div className="flex flex-col w-[45%] gap-2">
            <label htmlFor="" className="w-[15%] text-nowrap">
              휴무일
            </label>
            <input type="phone" className="border px-2 rounded-md" />
          </div> */}
          <div className="flex flex-col w-[45%] gap-2">
            <label htmlFor="" className="w-[20%] text-nowrap text-darkGray">
              최대 수용인원
            </label>
            <div className="flex gap-1 items-center">
              <input
                type="number"
                className="border px-2 rounded-md w-[15%] text-end"
                {...register("maxCapacity")}
              />
              <span>명</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default StoreInfo;
