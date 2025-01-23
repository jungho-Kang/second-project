import styled from "@emotion/styled";
import { useState } from "react";
import { FiEdit } from "react-icons/fi";
import { IoMdClose } from "react-icons/io";
import SideBar from "../SideBar";

import useModal from "../../../components/useModal";

const LayoutDiv = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: #eee;
`;

const ContentDiv = styled.div`
  margin-top: 20px;
  padding-bottom: 30px;
  background-color: #fff;
  border-radius: 10px;
  width: 800px;
  height: 640px;
  overflow-y: scroll;
  box-shadow:
    0px 20px 25px -5px rgba(0, 0, 0, 0.1),
    0px 10px 10px -5px rgba(0, 0, 0, 0.04);
`;

const TitleDiv = styled.div`
  margin-left: 30px;
  margin-top: 30px;
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
  margin-top: 40px;
  margin-left: 30px;
  width: 200px;
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

function IndexPage() {
  const { Modal, open, close } = useModal();
  const [menuAdd, setMenuAdd] = useState(false);
  const [menuEdit, setMenuEdit] = useState(false);

  return (
    <>
      <LayoutDiv>
        <SideBar />
        <ContentDiv className="scrollbar-hide">
          <TitleDiv>밥류</TitleDiv>
          <div style={{ display: "flex", gap: 40 }}>
            <MenuDiv>
              <MenuImg src="/menu.png" alt="없음" />
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  marginTop: 10,
                }}
              >
                <MenuNameDiv>캐비어알밥</MenuNameDiv>
                {menuEdit ? (
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: 5,
                    }}
                  >
                    <FiEdit style={{ width: 20, height: 20 }} />
                    <IoMdClose style={{ width: 25, height: 25 }} />
                  </div>
                ) : (
                  <></>
                )}
              </div>
              <MenuCostDiv>7,000 원</MenuCostDiv>
            </MenuDiv>
            <MenuDiv>
              <MenuImg src="/menu.png" alt="없음" />
              <MenuNameDiv>육회밥</MenuNameDiv>
              <MenuCostDiv>5,500 원</MenuCostDiv>
            </MenuDiv>
            <MenuDiv>
              <MenuImg src="/menu.png" alt="없음" />
              <MenuNameDiv>명란밥</MenuNameDiv>
              <MenuCostDiv>5,000 원</MenuCostDiv>
            </MenuDiv>
          </div>
          <TitleDiv>식사류</TitleDiv>
          <div style={{ display: "flex", gap: 40 }}>
            <MenuDiv>
              <MenuImg src="/menu.png" alt="없음" />
              <MenuNameDiv>국물닭볶음탕</MenuNameDiv>
              <MenuCostDiv>27,000 원</MenuCostDiv>
            </MenuDiv>
            <MenuDiv>
              <MenuImg src="/menu.png" alt="없음" />
              <MenuNameDiv>간장찜닭</MenuNameDiv>
              <MenuCostDiv>25,000 원</MenuCostDiv>
            </MenuDiv>
            <MenuDiv>
              <MenuImg src="/menu.png" alt="없음" />
              <MenuNameDiv>돼지두루치기</MenuNameDiv>
              <MenuCostDiv>25,000 원</MenuCostDiv>
            </MenuDiv>
          </div>
        </ContentDiv>
        <SideBarRightDiv>
          <div
            style={{ display: "flex", justifyContent: "center", marginTop: 50 }}
          >
            <MenuImg
              style={{ borderRadius: 100 }}
              src="/storeimg.png"
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
            style={{
              backgroundColor: menuAdd ? "#A28CE8" : "#fff",
              color: menuAdd ? "#fff" : "#333",
            }}
            onClick={() => {
              setMenuAdd(prev => !prev);
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
      <Modal></Modal>
    </>
  );
}
export default IndexPage;
