import { useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import { loginAtom } from "../atoms/userAtom";

function IndexPage() {
  const navigate = useNavigate();
  const [isLogin, setIsLogin] = useRecoilState(loginAtom);
  return (
    <div>
      <div>{isLogin ? "로그인에 성공 했습니다!" : "로그인해주세요"}</div>
      <div className="max-mw:text-slate-300">안녕</div>
      {!isLogin ? (
        <button onClick={() => navigate("/auth")}>로그인</button>
      ) : (
        <button onClick={() => setIsLogin(false)}>로그아웃</button>
      )}
    </div>
  );
}

export default IndexPage;
