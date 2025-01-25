import { useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import { roleAtom } from "../atoms/roleAtom";
import { STORE, USER } from "../constants/Role";

const IndexPage = () => {
  const navigate = useNavigate();
  const [role, setRole] = useRecoilState(roleAtom);

  return (
    <div className="relative  min-h-dvh bg-[url('/startingPage.png')] bg-cover bg-center overflow-x-scroll scrollbar-hide">
      <div className="absolute inset-0 flex flex-col items-center w-5/6 gap-8 mx-auto top-80 tb:w-1/2 lg:w-1/3">
        <button
          className={
            "px-6 py-2 text-xl font-bold tracking-widest text-white transition duration-200 bg-primary shadow-lg sm:text-2xl tb:text-3xl tb:px-8 sm:px-10 rounded-xl hover:bg-primaryFocus"
          }
          onClick={() => {
            navigate("/user");
            setRole(USER);
          }}
        >
          사용자
        </button>
        <button
          className={
            "px-6 py-2 text-xl font-bold tracking-widest text-white transition duration-200 bg-primary shadow-lg sm:text-2xl tb:text-3xl tb:px-8 sm:px-10 rounded-xl hover:bg-primaryFocus"
          }
          onClick={() => {
            navigate("/auth");
            setRole(STORE);
          }}
        >
          매장관리자
        </button>
      </div>
    </div>
  );
};

export default IndexPage;
