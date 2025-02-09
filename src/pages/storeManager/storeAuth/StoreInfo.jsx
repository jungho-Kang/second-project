import axios from "axios";
import { useEffect, useState } from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import DaumPostcodeEmbed from "react-daum-postcode";
import { GrUpload } from "react-icons/gr";
import { MdOutlineCancel } from "react-icons/md";
import useModal from "../../../components/useModal";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const infoEditSchema = yup.object({
  restaurantName: yup.string().required("매장명은 필수입력 항목입니다"),
  restaurantAddress: yup.string().required("매장주소는 필수입력 항목입니다"),
  restaurantNumber: yup
    .string()
    // .matches(
    //   /^\d{2,3}?\d{3,4}?\d{4}$/,
    //   "전화번호는 00(0)-000(0)-0000 형식으로 입력해주세요(- 제외)",
    // )
    .required("전화번호는 필수입력 항목입니다"),
  // filePath: yup
  //   .mixed()
  //   .test("required", "1개 이상의 파일을 업로드 해주세요", value => {
  //     return value && value.length > 0;
  //   })
  //   .test("filesize", "파일 크기는 2MB 이하만 가능합니다.", value => {
  //     return (
  //       value &&
  //       Array.from(value).every(file => {
  //         if (file.size <= 2 * 1024 * 1024) return;
  //       })
  //     );
  //   })
  //   .test("fileCount", "최대 6개의 파일만 업로드 가능합니다", value => {
  //     return value && value.length <= 6;
  //   }),
  // previewlist: yup
  //   .mixed()
  //   .test("required", "미리보기 할 이미지를 업로드 해주세요", value => {
  //     return value && value.length > 0;
  //   })
  //   .test("fileCount", "최대 3개의 이미지만 업로드 가능합니다", value => {
  //     return value && value.length <= 3;
  //   })
  //   .test("fileType", "JPG 또는 PNG 파일만 업로드 가능합니다.", value => {
  //     // 파일이 1개가 아니고 여러개이므로 반복문으로 type 비교를 해야 함.
  //     return (
  //       value &&
  //       Array.from(value).every(file => {
  //         return ["image/jpeg", "image/png"].includes(file.type);
  //       })
  //     );
  //   })
  //   .test("filesize", "파일 크기는 2MB 이하만 가능합니다.", value => {
  //     // 파일이 1개가 아니고 여러개 이므로 반복문으로 각각의 파일의 크기를 알아내야한다
  //     return (
  //       value &&
  //       Array.from(value).every(file => {
  //         return file.size <= 2 * 1024 * 1024;
  //       })
  //     );
  //   }),
  startTime: yup.string(),
  endTime: yup.string(),
  status: yup.number(),
  maxCapacity: yup.number(),
  lat: yup.number(),
  lng: yup.number(),
});

const StoreInfo = () => {
  const [imgFile, setImgFile] = useState([]);
  const [imgPreview, setImgPreview] = useState([]);
  const [isClick, setIsClick] = useState(false);
  const [inputAddress, setInputAddress] = useState({});
  // const [formData, setFormData] = useState({
  //   restaurantId: 0,
  //   restaurantName: "",
  //   restaurantAddress: "",
  //   restaurantNumber: "",
  //   operatingHours: "",
  //   restaurantDescription: "",
  //   status: 0,
  //   maxCapacity: 0,
  //   lat: 0,
  //   lng: 0,
  //   filePath: [],
  // });

  const [getData, setGetData] = useState({});

  const sessionRestaurantId = sessionStorage.getItem("restaurantId");
  const { Modal, open, close } = useModal({ title: "주소검색" });

  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    setValue,
    // trigger,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(infoEditSchema),
    defaultValues: {
      // restaurantId: 0,
      restaurantName: getData.restaurantName,
      restaurantAddress: "",
      restaurantNumber: "",
      // operatingHours: "",
      restaurantDescription: "",
      status: 0,
      maxCapacity: 0,
      // lat: 0,
      // lng: 0,
      // filePath: [],
    },
    mode: "onChange",
  });

  // useEffect(() => {
  //   trigger();
  // }, [trigger]);

  // useEffect(() => {
  //   setValue(
  //     "restaurantNumber",
  //     formData.restaurantNumber
  //       .replace(/[^0-9]/g, "")
  //       .replace(/^(\d{0,3})(\d{0,4})(\d{0,4})$/g, "$1-$2-$3")
  //       .replace(/(-{1,2})$/g, ""),
  //   );
  // }, []);

  const getStoreInfo = async () => {
    try {
      const params = { restaurantId: sessionRestaurantId }; // 숫자만 로그인한 레스토랑의 id 값으로 변경
      const res = await axios.get(`/api/restaurant`, { params });
      console.log(res);
      console.log(res.data.resultData);
      const result = res.data.resultData;
      setGetData(result);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getStoreInfo();
  }, []);

  // 초기값 세팅 (원래 저장되어 있는 가게 정보)
  useEffect(() => {
    if (getData && getData.operatingHours) {
      const [startTime, endTime] = getData.operatingHours
        .split("~")
        .map(time => time.trim());
      console.log(startTime, "TTTTTTTT", endTime);
      setValue("startTime", startTime);
      setValue("endTime", endTime);
    }
    setValue("lat", getData.lat);
    setValue("lng", getData.lng);
    setValue("restaurantName", getData.restaurantName);
    setValue("restaurantDescription", getData.restaurantDescription);
    setValue("restaurantAddress", getData.restaurantAddress);
    setValue("restaurantNumber", getData.restaurantNumber);
    setValue("operatingHours", getData.operatingHours);
    setValue("maxCapacity", getData.maxCapacity);
    setValue("status", getData.status);
    console.log(getData.status);
  }, [getData]);

  const addImgHandler = e => {
    const inputfile = e.target.files;
    console.log(inputfile);

    const fileArray = [...inputfile];
    setImgFile([...fileArray]);

    const imgURL = fileArray.map(data => URL.createObjectURL(data));
    setImgPreview([...imgURL]);
  };
  console.log(imgPreview);
  console.log("요거다!!!!!!!", imgFile);

  // 이미지 삭제(X 버튼)
  const deleteImgHandler = previewUrl => {
    // 클릭한 미리보기 이미지의 인덱스를 찾기
    const indexToRemove = imgPreview.indexOf(previewUrl);

    if (indexToRemove === -1) return; // 해당 이미지가 없으면 종료

    // 해당 인덱스의 파일과 미리보기 URL을 제거
    const newImgFiles = imgFile.filter((_, idx) => idx !== indexToRemove);
    const newImgPreview = imgPreview.filter((_, idx) => idx !== indexToRemove);

    // 상태 업데이트
    setImgFile(newImgFiles);
    setImgPreview(newImgPreview);
  };

  // 주소를 위도, 경도로 변환
  const getCoordinates = async address => {
    try {
      const response = await fetch(
        `https://dapi.kakao.com/v2/local/search/address.json?query=${encodeURIComponent(address)}`,
        {
          headers: {
            Authorization: `KakaoAK ${import.meta.env.VITE_KKO_MAP_REST_KEY}`,
          },
        },
      );
      const data = await response.json();
      if (data.documents.length > 0) {
        const { x: longitude, y: latitude } = data.documents[0];
        // 위도, 경도 저장
        setValue("lat", latitude);
        setValue("lng", longitude);
      }
    } catch (error) {
      console.error("Error fetching coordinates:", error);
    }
  };

  // 다음 포스트
  const addressHandler = async data => {
    console.log(data);
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
    await getCoordinates(fullAddress);
    // setIsClick(false);
    close();
    setInputAddress({ fullAddress: fullAddress, zoneCode: zoneCode });
    console.log(fullAddress);
    setValue("restaurantAddress", fullAddress);
  };

  const patchStoreInfo = async data => {
    try {
      await axios.patch("/api/restaurant", data);
      Swal.fire({
        title: "매장 정보가 수정되었습니다.",
        icon: "success",
        confirmButtonText: "확인",
        showConfirmButton: true, // ok 버튼 노출 여부
        allowOutsideClick: false, // 외부 영역 클릭 방지
      }).then(result => {
        if (result.isConfirmed) {
          navigate("/store");
        }
      });
    } catch (error) {
      console.log(error);
    }
  };

  const postImgFiles = async data => {
    try {
      await axios.post(
        `/api/pic/restaurant?restaurantId=${sessionRestaurantId}`,
        data,
        { headers: { "Content-Type": "multipart/form-data" } },
      );
      console.log("잘 들어왔다 이미지!!!!!!!");
      console.log("이미지 데이터", data);
    } catch (error) {
      console.log(error);
      console.log("이미지 데이터", data);
    }
  };

  const formSubmitHandler = data => {
    const time = `${data.startTime} ~ ${data.endTime}`;
    console.log(time);

    const patchStoreData = {
      restaurantId: parseInt(sessionRestaurantId),
      restaurantName: data.restaurantName,
      restaurantAddress: data.restaurantAddress,
      restaurantNumber: data.restaurantNumber,
      operatingHours: time,
      restaurantDescription: data.restaurantDescription,
      status: data.status,
      maxCapacity: data.maxCapacity,
      lat: data.lat,
      lng: data.lng,
    };

    const postImgData = new FormData();
    imgFile.map(file => {
      postImgData.append("filePath", file);
    });
    console.log("ImgData 확인:", [...postImgData.entries()]);

    postImgFiles(postImgData);
    patchStoreInfo(patchStoreData);
    console.log("patchStoreData!!!!!!!!!", patchStoreData);

    console.log(data);
  };

  return (
    <div className="flex w-[calc(100%_-_11rem)] h-full bg-gray justify-center items-center">
      <div className="flex w-[96.5%] h-[calc(100%_-_4rem)] bg-white rounded-lg overflow-hidden overflow-y-scroll scrollbar-hide">
        <div className="flex flex-col w-full h-full p-6 gap-6">
          <form onSubmit={handleSubmit(formSubmitHandler)}>
            <span>식당사진 등록</span>
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
                accept="image/png, image/jpeg"
                className="hidden"
                // {...register("filePath")}
              />
              <div className="flex w-[90%] gap-2 justify-start">
                {imgPreview.map((data, index) => (
                  <div key={index} className="relative">
                    <MdOutlineCancel
                      className="absolute flex p-1 text-3xl right-0.5 text-black"
                      onClick={() => deleteImgHandler(data)}
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
              {/* <div className="flex w-[50%] h-10 gap-2 items-center">
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
            </div> */}
              <label className="text-darkGray block">주소</label>
              <div className="flex gap-4">
                <input
                  type="text"
                  className="w-[35%] border rounded-md px-2"
                  onClick={() => open()}
                  value={inputAddress ? inputAddress.fullAddress : ""}
                  {...register("restaurantAddress")}
                />
                <button
                  type="button"
                  className="px-2 py-1 border rounded-md"
                  onClick={() => open()}
                >
                  주소찾기
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
              {/* <div className="flex w-[45%] gap-2">
              <label htmlFor="" className="w-[15%] text-nowrap text-darkGray">
                기본 주소
              </label>
              <input
                type="text"
                className="w-full border rounded-md px-2 truncate"
                value={inputAddress ? inputAddress.fullAddress : ""}
                {...register("restaurantAddress")}
              />
            </div> */}
              {/* <div className="flex w-[45%] gap-2">
              <label htmlFor="" className="w-[15%] text-nowrap text-darkGray">
                상세 주소
              </label>
              <input
                type="text"
                className="w-full border rounded-md px-2 truncate"
              />
            </div> */}
            </div>
            <div className="flex flex-col w-[45%] gap-2">
              <label htmlFor="" className="w-[15%] text-nowrap text-darkGray">
                전화 번호
              </label>
              <input
                type="tel"
                maxLength={12}
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
              <div className="flex gap-[15px]">
                <span>오픈시간</span>
                <input
                  type="time"
                  className="w-[130px] border px-2 rounded-md"
                  {...register("startTime")}
                />
              </div>
              <div className="flex gap-[15px]">
                <span>마감시간</span>
                <input
                  type="time"
                  className="w-[130px] border px-2 rounded-md"
                  {...register("endTime")}
                />
              </div>
            </div>
            <fieldset className="flex w-[45%] gap-6">
              <legend htmlFor="" className="w-[15%] text-nowrap text-darkGray">
                영업 상태
              </legend>
              <div className="flex gap-1.5">
                <input
                  type="radio"
                  className="border px-2 rounded-md"
                  value={0}
                  {...register("status")}
                />
                <label htmlFor="">영업중</label>
              </div>
              <div className="flex gap-1.5">
                <input
                  type="radio"
                  className="border px-2 rounded-md"
                  value={1}
                  {...register("status")}
                />
                <label htmlFor="">브레이크타임</label>
              </div>
              <div className="flex gap-1.5">
                <input
                  type="radio"
                  className="border px-2 rounded-md"
                  value={2}
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
            <div className="flex flex-col w-[45%] gap-2">
              <div className="flex gap-1 items-center">
                <button
                  className="bg-primary px-4 py-1 rounded-lg text-white"
                  type="submit"
                >
                  수정완료
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
export default StoreInfo;
