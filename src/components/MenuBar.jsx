import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FiHome } from "react-icons/fi";
import { GoMilestone } from "react-icons/go";
import { LuClipboardList } from "react-icons/lu";
import { LuCircleUserRound } from "react-icons/lu";

const MenuBar = () => {
  const [activeMenu, setActiveMenu] = useState("home"); // 현재 선택된 메뉴 상태
  const navigate = useNavigate();

  const menuItems = [
    { id: "", label: "홈", icon: FiHome },
    { id: "restaurant", label: "식당찾기", icon: GoMilestone },
    { id: "order", label: "주문내역", icon: LuClipboardList },
    { id: "userInfo", label: "내 정보", icon: LuCircleUserRound },
  ];

  return (
    <div className="absolute bottom-0 left-0 w-full h-20 flex bg-white border-t-2 border-gray items-center">
      {menuItems.map(menu => {
        const Icon = menu.icon;
        const isActive = activeMenu === menu.id;
        return (
          <div
            key={menu.id}
            onClick={() => {
              setActiveMenu(menu.id);
              navigate(`/user/${menu.id}`);
            }}
            className={`w-1/4 flex flex-col items-center justify-center cursor-pointer`}
          >
            <Icon
              className={`text-3xl ${isActive ? "text-primary" : "text-darkGray"}`}
            />
            <p
              className={`text-sm ${isActive ? "font-bold text-primary" : "text-darkGray"}`}
            >
              {menu.label}
            </p>
          </div>
        );
      })}
    </div>
  );
};

export default MenuBar;
