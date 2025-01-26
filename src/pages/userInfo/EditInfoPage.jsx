import { useNavigate } from "react-router-dom";
import MenuBar from "../../components/MenuBar";
import Notification from "../../components/Notification";
import { IoMdArrowBack } from "react-icons/io";

function EditInfoPage() {
  const navigate = useNavigate();
  const onEditHandler = () => {
    console.log("핸드폰 번호가 변경되었습니다");
    navigate("/user/userInfo");
  };

  return (
    <div className="h-dvh overflow-x-hidden overflow-y-scroll scrollbar-hide">
      <div className="flex justify-between items-center px-3 py-5 mb-3">
        <IoMdArrowBack className="text-3xl" onClick={() => navigate(-1)} />
        <span className="text-xl font-semibold">내 정보 수정</span>
        <div className="w-100% h-100% text-white">O</div>
        <Notification />
      </div>
      <div>
        <form
          className="flex flex-col h-dvh justify-between"
          onSubmit={onEditHandler()}
        >
          <div className="w-full flex flex-col items-center gap-3">
            <img
              src="/profile.jpeg"
              alt="프로필 이미지"
              className="w-32 rounded-full bg-auto"
            />
            <div className="flex items-center">
              <span className="pr-3">잔여 포인트</span>
              <span className="font-bold text-2xl">213,760원</span>
            </div>
            <span className="px-4 py-1 border-2 border-gray rounded-xl">
              foodmaster@google.com
            </span>
          </div>
          <div className="h-1/6 flex justify-center items-center">
            <div className="flex gap-5 items-center">
              <div className="flex flex-col gap-6 font-thin text-lg h-full text-darkGray">
                <span>이름</span>
                <span>아이디</span>
                <span>소속</span>
                <label htmlFor="phone">휴대폰</label>
              </div>
              <div className="flex flex-col gap-6 font-medium text-lg h-full">
                <span>홍길동</span>
                <span>10001234</span>
                <span>그린컴퓨터아트학원</span>
                <input
                  type="tel"
                  id="phone"
                  placeholder="010-1234-5678"
                  pattern="[0-9]{3}-[0-9]{4}-[0-9]{4}"
                  defaultValue={"010-1234-5678"}
                  autoFocus
                  className="pl-2"
                />
              </div>
            </div>
          </div>
          <div className="flex justify-center gap-5 pb-32">
            <button
              type="submit"
              className="px-3 py-1 bg-primary rounded-lg text-white font-semibold text-center"
            >
              변경하기
            </button>
          </div>
        </form>
      </div>
      <MenuBar />
    </div>
  );
}
export default EditInfoPage;
