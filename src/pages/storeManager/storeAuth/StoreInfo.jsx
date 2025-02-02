import axios from "axios";
import { useEffect, useState } from "react";
import DaumPostcodeEmbed from "react-daum-postcode";
import { GrUpload } from "react-icons/gr";
import { MdOutlineCancel } from "react-icons/md";

const StoreInfo = () => {
  const [imgFile, setImgFile] = useState([]);
  const [imgPreview, setImgPreview] = useState([]);
  const [isClick, setIsClick] = useState(false);
  const [inputAddress, setInputAddress] = useState({});

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
    setIsClick(false);
    setInputAddress({ fullAddress: fullAddress, zoneCode: zoneCode });
    console.log(fullAddress);
  };

  return (
    <div className="flex w-[calc(100%_-_11rem)] h-full bg-gray justify-center items-center">
      <div className="flex w-[96.5%] h-[calc(100%_-_4rem)] bg-white rounded-lg overflow-hidden overflow-y-scroll scrollbar-hide">
        <div className="flex flex-col w-full h-full p-6 gap-6">
          <div>
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
          </div>
          <div className="flex gap-2 items-center">
            <span className="text-darkGray">가게 이름</span>
            <span className="text-2xl">동양백반</span>
          </div>
          <div className="flex gap-2 items-center">
            <span className="text-darkGray">가게 설명</span>
            <span className="text-xl">한식을 파는 집입니다</span>
          </div>
          <div className="flex flex-col w-full gap-2">
            <div className="flex w-[50%] h-10 gap-2 items-center">
              <label htmlFor="">우편 번호</label>
              <input
                type="text"
                className="w-[25%] border rounded-md px-2"
                value={inputAddress ? inputAddress.zoneCode : ""}
                placeholder="00000"
              />
              <button
                className="px-2 py-1 border rounded-md"
                onClick={() => setIsClick(!isClick)}
              >
                주소확인
              </button>
            </div>
            {isClick ? (
              <div className="absolute w-[50%] border">
                <DaumPostcodeEmbed onComplete={e => addressHandler(e)} />
              </div>
            ) : (
              <></>
            )}
            <div className="flex w-[45%] gap-2">
              <label htmlFor="" className="w-[15%] text-nowrap">
                기본 주소
              </label>
              <input
                type="text"
                className="w-full border rounded-md px-2 truncate"
                value={inputAddress ? inputAddress.fullAddress : ""}
              />
            </div>
            <div className="flex w-[45%] gap-2">
              <label htmlFor="" className="w-[15%] text-nowrap">
                상세 주소
              </label>
              <input
                type="text"
                className="w-full border rounded-md px-2 truncate"
              />
            </div>
          </div>
          <div className="flex flex-col w-[45%] gap-2">
            <label htmlFor="" className="w-[15%] text-nowrap">
              전화 번호
            </label>
            <input
              type="phone"
              className="border px-2 rounded-md"
              placeholder="000-0000-0000"
            />
          </div>
          <div className="flex flex-col w-[45%] gap-2">
            <label htmlFor="" className="w-[15%] text-nowrap">
              영업 시간
            </label>
            <input type="phone" className="border px-2 rounded-md" />
          </div>
          <div className="flex flex-col w-[45%] gap-2">
            <label htmlFor="" className="w-[15%] text-nowrap">
              영업 상태
            </label>
            <input type="phone" className="border px-2 rounded-md" />
          </div>
          <div className="flex flex-col w-[45%] gap-2">
            <label htmlFor="" className="w-[15%] text-nowrap">
              휴무일
            </label>
            <input type="phone" className="border px-2 rounded-md" />
          </div>
          <div className="flex flex-col w-[45%] gap-2">
            <label htmlFor="" className="w-[20%] text-nowrap">
              최대 수용인원
            </label>
            <input type="phone" className="border px-2 rounded-md" />
          </div>
        </div>
      </div>
    </div>
  );
};
export default StoreInfo;
