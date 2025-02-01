import { FaBowlFood } from "react-icons/fa6";
import { MdTableBar } from "react-icons/md";
import { PiMoneyWavyFill } from "react-icons/pi";
import { IoStorefront } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { FaSortDown, FaSortUp } from "react-icons/fa";
import styled from "@emotion/styled";

const SubMenuDiv = styled.div`
  padding: 5px 10px;
  margin-left: 60px;
  margin-top: 10px;
`;

const SideBar = () => {
  const navigate = useNavigate();
  const [menuClick, setMenuClick] = useState({
    table: false,
    menu: false,
    sales: false,
    store: false,
  });
  const [activeMenu, setActiveMenu] = useState("");
  const [subMenuClick, setSubMenuClick] = useState(false);

  const handleMenuClick = (menu, path) => {
    console.log(menu);

    setActiveMenu(menu); // 활성화된 메뉴 업데이트
    navigate(path); // 절대경로로 메뉴 클릭 시 라우팅
  };

  return (
    <div className="flex flex-col w-44 h-dvh justify-between items-center bg-white border-r-2 border-r-gray shadow-xl">
      <div className="w-full mt-8">
        <div className="flex mb-6 px-4 w-44 justify-center items-center">
          <img
            src={"/logo.png"}
            className="flex w-full h-full rounded-full pb-6"
          />
        </div>
        <div className="flex flex-col justify-between">
          {/* 테이블 메뉴 */}
          <div
            className={`flex gap-3 pl-8 py-4 items-center ${
              activeMenu === "table"
                ? "bg-primary text-white ml-6 rounded-l-full"
                : "hover:bg-primary hover:text-white hover:ml-6 hover:rounded-l-full"
            }`}
            onClick={() => handleMenuClick("table", "/store")}
          >
            <MdTableBar className="text-2xl" />
            <span className="text-lg font-semibold">테이블</span>
          </div>
          {/* 메뉴 */}
          <div
            className={`flex gap-3 pl-8 py-4 items-center ${
              activeMenu === "menu"
                ? "bg-primary text-white ml-6 rounded-l-full"
                : "hover:bg-primary hover:text-white hover:ml-6 hover:rounded-l-full"
            }`}
            onClick={() => handleMenuClick("menu", "/store/menu")}
          >
            <FaBowlFood className="text-2xl" />
            <div className="text-lg font-semibold">메뉴</div>
          </div>

          {/* 매출확인 */}
          <div
            className={`flex gap-3 pl-8 py-4 items-center ${
              activeMenu === "sales"
                ? "bg-primary text-white ml-6 rounded-l-full"
                : "hover:bg-primary hover:text-white hover:ml-6 hover:rounded-l-full"
            }`}
            onClick={() => handleMenuClick("sales", "/store/sales")}
          >
            <PiMoneyWavyFill className="text-2xl" />
            <div className="text-lg font-semibold">매출확인</div>
          </div>
        </div>

        {/* 내 매장 메뉴 */}
        <div
          className={`flex gap-3 pl-8 items-center mt-3 ${
            menuClick.store
              ? "bg-primary text-white"
              : "hover:bg-primary hover:text-white"
          }`}
          onClick={() =>
            setMenuClick({ ...menuClick, store: !menuClick.store })
          }
        >
          <IoStorefront className="text-2xl" />
          <div className="text-lg font-semibold">내 매장</div>
          {menuClick.store ? (
            <FaSortUp className="w-6 h-6 mt-3" />
          ) : (
            <FaSortDown className="w-6 h-6 mb-3" />
          )}
        </div>
        {menuClick.store && (
          <>
            <SubMenuDiv
              onClick={() => setSubMenuClick(!subMenuClick)}
              style={{
                backgroundColor: subMenuClick ? "#6f4cd8" : "#fff",
                color: subMenuClick ? "#fff" : "#333",
              }}
            >
              정보수정
            </SubMenuDiv>
            <SubMenuDiv onClick={() => navigate("/auth/editpw")}>
              비밀번호 변경
            </SubMenuDiv>
            <SubMenuDiv>계정삭제</SubMenuDiv>
          </>
        )}
      </div>
      <div className="rounded-md bg-primary text-white font-bold tracking-wider px-6 py-2 mb-16 cursor-pointer hover:bg-primaryFocus">
        로그아웃
      </div>
    </div>
  );
};

export default SideBar;
