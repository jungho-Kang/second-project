import axios from "axios";
import { useEffect, useState } from "react";

const StoreInfo = () => {
  const [imgFile, setImgFile] = useState([]);
  const [imgPreview, setImgPreview] = useState([]);

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

  return (
    <div className="flex w-[calc(100%_-_11rem)] h-full bg-gray justify-center items-center">
      <div className="flex w-[96.5%] h-[calc(100%_-_4rem)] bg-white rounded-lg overflow-hidden overflow-y-scroll scrollbar-hide">
        <div className="w-full h-full p-6">
          <div className="">
            <img
              src="/storeimg.png"
              alt=""
              className="flex w-[10%] h-[10%] rounded-full"
            />
            <label htmlFor="inputImg">
              <input
                type="file"
                id="inputImg"
                multiple
                onChange={e => addImgHandler(e)}
              />
            </label>
            <div className="flex gap-2">
              {imgPreview.map((data, index) => (
                <div key={index} className="">
                  <img
                    src={data}
                    alt=""
                    className="border border-darkGray w-32 h-32"
                  />
                </div>
              ))}
            </div>
          </div>
          <div>
            가게 이름
            <span>동양백반</span>
          </div>
          <div>
            가게 설명
            <span>한식을 파는 집입니다</span>
          </div>
          <div>
            기본 주소
            <input type="address" />
          </div>
          <div>상세 주소</div>
          <div>전화번호</div>
          <div>영업 시간</div>
          <div>영업 상태</div>
          <div>휴무일</div>
          <div>최대 수용인원</div>
        </div>
      </div>
    </div>
  );
};
export default StoreInfo;
