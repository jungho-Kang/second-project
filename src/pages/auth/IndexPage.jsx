import { IoMdClose } from "react-icons/io";
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function IndexPage() {
  const navigate = useNavigate();
  const [isLogin, setIsLogin] = useState(false);
  const [formData, setFormData] = useState({ uid: "", upw: "" });

  const postLogin = async () => {
    try {
      await axios.post("/api/user/sign-in", formData);
      setIsLogin(true);
    } catch (error) {
      console.log(error);
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    postLogin();
  };

  useEffect(() => {
    if (isLogin) {
      navigate("/login");
    }
  }, [isLogin]);

  return (
    <div>
      <form onSubmit={e => handleSubmit(e)}>
        <div className="p-2.5 w-[375px]">
          <IoMdClose className="w-6 h-6" />
        </div>
        <div className="mt-12 mb-12 w-[375px] text-[#6F4CDB] flex justify-center text-2xl font-bold">
          atta pparune
        </div>
        <input
          type="text"
          placeholder="아이디"
          className="pb-2.5 pt-2.5 ml-5 mb-6 w-[335px] border-b border-[#BABABA] text-[#BABABA]"
          onChange={e => setFormData({ ...formData, uid: e.target.value })}
        />
        <input
          type="password"
          placeholder="비밀번호"
          className="pb-2.5 pt-2.5 ml-5 mb-6 w-[335px] border-b border-[#BABABA] text-[#BABABA]"
          onChange={e => setFormData({ ...formData, upw: e.target.value })}
        />
        <button
          type="submit"
          className="bg-gray-300 text-white w-[335px] h-7 ml-5 rounded"
        >
          로그인
        </button>
      </form>
      <div className="mt-5 ml-5 flex justify-center gap-5">
        <div className="cursor-pointer">아이디 찾기</div>
        <div className="text-[#BABABA]">I</div>
        <div className="cursor-pointer">비밀번호 찾기</div>
      </div>
    </div>
  );
}

export default IndexPage;
