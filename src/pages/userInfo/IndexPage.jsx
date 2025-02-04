import { useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { IoMdArrowBack } from "react-icons/io";
import { MdOutlineMail } from "react-icons/md";
import { useRecoilState } from "recoil";
import { userDataAtom } from "../../atoms/userAtom";
import MenuBar from "../../components/MenuBar";
import Notification from "../../components/Notification";

function IndexPage() {
  const navigate = useNavigate();
  const [userData, setUserData] = useRecoilState(userDataAtom);

  useEffect(() => {
    const getUserInfo = async () => {
      try {
        const res = await axios.get("/api/user?userId=1");
        const resultData = res.data.resultData;
        const phoneNumber = resultData.phone
          .replace(/[^0-9]/g, "")
          .replace(/^(\d{0,3})(\d{0,4})(\d{0,4})$/g, "$1-$2-$3")
          .replace(/(-{1,2})$/g, "");
        const pointParse = resultData.point.toLocaleString("ko-KR");
        console.log(resultData);
        console.log(res);

        setUserData({ ...resultData, phone: phoneNumber, point: pointParse });
      } catch (error) {
        console.log(error);
      }
    };
    getUserInfo();
  }, []);

  return (
    <div className="flex w-full h-dvh justify-center items-center overflow-x-hidden overflow-y-scroll scrollbar-hide">
      <div className="absolute top-0 left-0 w-full h-10% flex justify-between items-center px-3 py-5 border-b-2 border-gray border-opacity-70 bg-white">
        <IoMdArrowBack className="text-3xl" onClick={() => navigate(-1)} />
        <span className="text-xl font-semibold">내 정보</span>
        <div>&emsp;</div>
        <Notification />
      </div>
      <div className="flex flex-col h-dvh justify-around mt-48 gap-10">
        <div className="w-full flex flex-col items-center gap-4">
          {userData.pic !== null ? (
            <img
              src={userData.pic}
              alt="프로필 이미지"
              className="w-32 rounded-full bg-auto"
            />
          ) : (
            <img
              src="/profile.jpeg"
              alt="프로필 이미지"
              className="w-32 rounded-full bg-auto"
            />
          )}

          <div className="flex items-center">
            <span className="pr-3">사용가능 포인트</span>
            <span className="font-bold text-2xl">{userData.point}</span>
          </div>
          <span className="flex items-center gap-2 px-3 py-1 border-2 border-gray rounded-xl">
            <MdOutlineMail className="text-xl" />
            {userData.email}
          </span>
        </div>
        <div className="h-1/3 flex justify-center items-center">
          <div className="flex gap-5 items-center">
            <div className="flex flex-col gap-6 font-thin text-lg h-full text-darkGray">
              <span>이름</span>
              <span>아이디</span>
              <span>소속</span>
              <span>휴대폰</span>
            </div>
            <div className="flex flex-col gap-6 font-medium text-lg h-full">
              <span>{userData.name}</span>
              <span>{userData.uid}</span>
              <span>{userData.companyName}</span>
              <span>{userData.phone}</span>
            </div>
          </div>
        </div>
        <div className="flex justify-center gap-5 mb-2">
          <div
            onClick={() => navigate("/user/userInfo/edit")}
            className="px-3 py-1 bg-primary rounded-lg text-white font-semibold text-center"
          >
            회원정보 수정
          </div>
          <div className="px-3 py-1 bg-primary rounded-lg text-white font-semibold text-center">
            비밀번호 변경
          </div>
        </div>
        <div className="flex justify-center text-darkGray underline font-bold mb-32">
          로그아웃
        </div>
      </div>
      <MenuBar />
    </div>
  );
}

export default IndexPage;
