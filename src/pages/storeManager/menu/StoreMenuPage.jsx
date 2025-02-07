import styled from "@emotion/styled";
import { useEffect, useState } from "react";
import { FiEdit } from "react-icons/fi";
import { IoMdClose } from "react-icons/io";
import { FaPlusCircle } from "react-icons/fa";
import SideBar from "../SideBar";

import useModal from "../../../components/useModal";
import axios from "axios";
import { getCookie } from "../../../components/cookie";

const LayoutDiv = styled.div`
  display: flex;
  gap: 10px;
  justify-content: space-between;
  background-color: #eee;
  max-height: 100vh;
  height: auto;
  overflow: hidden;
`;

const ContentDiv = styled.div`
  flex-wrap: wrap;
  padding: 30px 30px;
  padding-bottom: 30px;
  background-color: #fff;
  border-radius: 10px;
  width: 750px;
  max-height: calc(100vh - 60px);
  overflow-y: auto;
  box-shadow:
    0px 20px 25px -5px rgba(0, 0, 0, 0.1),
    0px 10px 10px -5px rgba(0, 0, 0, 0.04);
`;

const TitleDiv = styled.div`
  font-size: 24px;
  font-weight: 700;
`;

const SideBarRightDiv = styled.div`
  box-shadow:
    0px 20px 25px -5px rgba(0, 0, 0, 0.1),
    0px 10px 10px -5px rgba(0, 0, 0, 0.04);
  width: 320px;
  background-color: #fff;
`;

const MenuDiv = styled.div`
  margin: 10px 0;
  width: calc(33.33% - 26.66px);
  height: 260px;
`;

const MenuImg = styled.img`
  width: 200px;
  height: 200px;
  border-radius: 5px;
`;

const MenuNameDiv = styled.div`
  margin-top: 5px;
  font-size: 20px;
`;
const MenuCostDiv = styled.div`
  margin-top: 5px;
  font-size: 14px;
  font-weight: 700;
`;

const RightMenuDiv = styled.div`
  margin-bottom: 20px;
  font-size: 20px;
  font-weight: 700;
  padding: 10px 0;
  display: flex;
  justify-content: center;
  cursor: pointer;
`;

const MenuAddDiv = styled.div`
  margin: 10px auto;
  img {
    display: block;
    width: 200px;
    height: 200px;
    border-radius: 5px;
    background-color: #eee;
    position: relative;
  }
  div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 10px;
  }
  span {
    display: block;
    width: 60px;
    text-align: left;
  }
  input {
    width: 120px;
  }
  button {
    margin-top: 20px;
    padding: 5px 20px;
    color: #fff;
    background-color: #6f4cdb;
    border-radius: 5px;
  }
  p {
    width: 25px;
    height: 25px;
    position: absolute;
    right: 96px;
    bottom: 37%;
    color: #6f4cdb;
    background-color: #fff;
    border-radius: 15px;
  }
`;

function StoreMenuPage() {
  const [menuEdit, setMenuEdit] = useState(false);
  const [isClick, setIsClick] = useState({
    modal1: false,
    modal2: false,
  });
  const [formData, setFormData] = useState({});
  const [menuCateList, setMenuCateList] = useState([]);

  // 수정할 메뉴 이미지
  const [menuEditData, setMenuEditData] = useState({});

  const titleChange = () => {
    if (isClick.modal1) {
      return "메뉴 추가하기";
    } else if (isClick.modal2) {
      return "메뉴 수정하기";
    }
  };
  const { Modal, open, close } = useModal({ title: titleChange() });

  const deleteMenu = async id => {
    const accessToken = getCookie();
    try {
      await axios.delete(`/api/restaurant/menu?menuId=${id}`, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });
    } catch (error) {
      console.log(error);
    }
  };

  const getStoreInfo = async () => {
    try {
      const res = await axios.get(`/api/restaurant?restaurantId=${1}`);
      const result = res.data.resultData;
      setFormData(result);
      setMenuCateList(result.menuCateList);
      console.log("가져온 데이터다!!!!", result);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getStoreInfo();
  }, []);

  return (
    <div>
      <LayoutDiv>
        <SideBar />
        <div style={{ padding: "10px 10px" }}>
          <ContentDiv className="scrollbar-hide">
            {menuCateList.map(item => (
              <div key={item.categoryId}>
                <TitleDiv>{item.categoryName}</TitleDiv>
                <div
                  style={{
                    display: "flex",
                    gap: 40,
                    flexWrap: "wrap",
                    marginBottom: 30,
                  }}
                >
                  {item.menuList.map(menu => (
                    <MenuDiv key={menu.menuId}>
                      <MenuImg
                        src={`http://112.222.157.156:5222/pic/menu/${menu.menuId}/${menu?.menuPic}`}
                        alt="없음"
                      />
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "space-between",
                        }}
                      >
                        <MenuNameDiv>{menu.menuName}</MenuNameDiv>
                        {menuEdit ? (
                          <div
                            style={{
                              display: "flex",
                              alignItems: "center",
                              gap: 5,
                            }}
                          >
                            <FiEdit
                              onClick={() => {
                                setMenuEditData(prev => ({
                                  ...prev,
                                  img: `http://112.222.157.156:5222/pic/menu/${menu.menuId}/${menu?.menuPic}`,
                                  categoryName: item.categoryName,
                                  menuName: menu.menuName,
                                  price: menu.price,
                                }));
                                setIsClick({ modal2: true });
                                open();
                              }}
                              style={{ width: 20, height: 20 }}
                            />
                            <IoMdClose style={{ width: 25, height: 25 }} />
                          </div>
                        ) : (
                          <></>
                        )}
                      </div>
                      <MenuCostDiv>{menu.price.toLocaleString()}원</MenuCostDiv>
                    </MenuDiv>
                  ))}
                </div>
              </div>
            ))}
          </ContentDiv>
        </div>
        <SideBarRightDiv>
          <div
            style={{ display: "flex", justifyContent: "center", marginTop: 50 }}
          >
            <MenuImg
              style={{ borderRadius: 100 }}
              src={`http://112.222.157.156:5222/pic/restaurant/${formData.restaurantId}/${formData.restaurantPics?.filePath}`}
              alt="없음"
            />
          </div>
          <TitleDiv
            style={{
              color: "#B3A1EC",
              marginLeft: 0,
              textAlign: "center",
              marginBottom: 40,
            }}
          >
            동양백반
          </TitleDiv>
          <RightMenuDiv
            onClick={() => {
              setIsClick({ modal1: true });
              open();
            }}
          >
            메뉴 추가
          </RightMenuDiv>
          <RightMenuDiv
            style={{
              backgroundColor: menuEdit ? "#A28CE8" : "#fff",
              color: menuEdit ? "#fff" : "#333",
            }}
            onClick={() => setMenuEdit(!menuEdit)}
          >
            메뉴 수정
          </RightMenuDiv>
        </SideBarRightDiv>
      </LayoutDiv>
      {isClick.modal1 && (
        <Modal>
          <MenuAddDiv>
            <img />
            <p onClick={() => {}}>
              <input type="file" className="hidden" />
              <FaPlusCircle style={{ width: "100%", height: "100%" }} />
            </p>

            <div>
              <span>카테고리</span>
              <input type="text" placeholder="카테고리 이름" />
            </div>
            <div>
              <span>메뉴명</span>
              <input type="text" placeholder="메뉴명" />
            </div>
            <div>
              <span>메뉴가격</span>
              <input type="number" placeholder="가격" />
            </div>
            <button>추가</button>
          </MenuAddDiv>
        </Modal>
      )}

      {isClick.modal2 && (
        <Modal>
          <MenuAddDiv>
            <img src={menuEditData?.img} />
            <p onClick={() => {}}>
              <input type="file" className="hidden" />
              <FaPlusCircle style={{ width: "100%", height: "100%" }} />
            </p>

            <div>
              <span>카테고리</span>
              <input
                type="text"
                placeholder="카테고리 이름"
                defaultValue={menuEditData?.categoryName}
              />
            </div>
            <div>
              <span>메뉴명</span>
              <input
                type="text"
                placeholder="메뉴명"
                defaultValue={menuEditData?.menuName}
              />
            </div>
            <div>
              <span>메뉴가격</span>
              <input
                type="number"
                placeholder="가격"
                defaultValue={menuEditData?.price}
              />
            </div>
            <button>수정완료</button>
          </MenuAddDiv>
        </Modal>
      )}
    </div>
  );
}
export default StoreMenuPage;
