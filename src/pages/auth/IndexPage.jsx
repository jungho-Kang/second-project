import { IoMdClose } from "react-icons/io";
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import { loginAtom } from "../../atoms/userAtom";

function IndexPage() {
  const navigate = useNavigate();
  const [isLogin, setIsLogin] = useRecoilState(loginAtom);
  const [formData, setFormData] = useState({ uid: "", upw: "" });
  const [hasVal, setHasVal] = useState(false);

  const postLogin = async () => {
    try {
      await axios.post("/api/user/sign-in", formData);
      setIsLogin(true);
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    postLogin();
  };

  useEffect(() => {
    if (formData.uid && formData.upw) {
      setHasVal(true);
    } else {
      setHasVal(false);
    }
  }, [formData]);

  return (
    <div>
      <form onSubmit={e => handleSubmit(e)}>
        <div className="mw:px-[15px] mw:py-[10px] mw:w-[375px] tb:px-[30px] tb:py-[15px] tb:w-[1194px]">
          <IoMdClose
            className="w-[24px] h-[24px] cursor-pointer"
            onClick={() => navigate("/")}
          />
        </div>
        <div className="mw:mt-[50px] mw:mb-[50px] mw:w-[375px] tb:mt-[30px] tb:mb-[50px] tb:w-[1194px] flex justify-center">
          <img
            className="mw:w-[230px] mw:h-[55px] tb:w-[290px] tb:h-[55px]"
            src="/logo.png"
            alt="로고"
          />
        </div>

        <input
          type="text"
          placeholder="아이디"
          className="pb-[10px] pt-[10px] ml-[20px] mb-[25px] w-[335px] border-b border-[#BABABA] text-[#BABABA]"
          onChange={e => setFormData({ ...formData, uid: e.target.value })}
        />
        <input
          type="password"
          placeholder="비밀번호"
          className="pb-[10px] pt-[10px] ml-[20px] mb-[25px] w-[335px] border-b border-[#BABABA] text-[#BABABA]"
          onChange={e => setFormData({ ...formData, upw: e.target.value })}
        />
        <button
          type="submit"
          className={`text-[#fff] w-[335px] h-[30px] ml-[20px] rounded-[5px] ${!hasVal ? "bg-[#ddd]" : "bg-[#6F4CDB]"}`}
          disabled={!hasVal}
        >
          로그인
        </button>
      </form>
      <div className="mt-[20px] ml-[20px] flex justify-center gap-[20px]">
        <div className="cursor-pointer">아이디 찾기</div>
        <div className="text-[#BABABA]">I</div>
        <div className="cursor-pointer">비밀번호 찾기</div>
      </div>
    </div>
  );
}

export default IndexPage;
