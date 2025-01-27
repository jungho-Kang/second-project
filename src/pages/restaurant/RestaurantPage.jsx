import { useRecoilState } from "recoil";
import { loginAtom } from "../../atoms/userAtom";
import MenuBar from "../../components/MenuBar";

function RestaurantPage() {
  const [isLogin, setIsLogin] = useRecoilState(loginAtom);
  return (
    <div className="w-full h-dvh overflow-hidden overflow-y-scroll scrollbar-hide">
      로그인 상태 : {isLogin ? "로그인상태입니다" : "로그인이 안 되어있습니다"}
      <MenuBar />
    </div>
  );
}
export default RestaurantPage;
