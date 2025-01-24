import { useRecoilState } from "recoil";
import { loginAtom } from "../../atoms/userAtom";

function RestaurantPage() {
  const [isLogin, setIsLogin] = useRecoilState(loginAtom);
  return (
    <div>
      로그인 상태 : {isLogin ? "로그인상태입니다" : "로그인이 안 되어있습니다"}
    </div>
  );
}
export default RestaurantPage;
