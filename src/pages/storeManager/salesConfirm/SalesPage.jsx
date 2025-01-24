import styled from "@emotion/styled";
import SideBar from "../SideBar";

const LayoutDiv = styled.div`
  display: flex;
  background-color: #eee;
  gap: 20px;
`;

const ContentDiv = styled.div`
  margin-right: 20px;
  margin-top: 20px;
  padding-bottom: 30px;
  background-color: #fff;
  border-radius: 10px;
  width: 100%;
  height: 640px;
  box-shadow:
    0px 20px 25px -5px rgba(0, 0, 0, 0.1),
    0px 10px 10px -5px rgba(0, 0, 0, 0.04);
`;

const TitleDiv = styled.div`
  margin-left: 35px;
  margin-top: 20px;
  font-size: 20px;
`;

const TableDiv = styled.div`
  margin-top: 30px;
  margin-left: 35px;
  margin-right: 35px;
  overflow-y: scroll;
  height: 540px;
`;

const TableBtn = styled.button`
  border: 1px solid #929292;
  padding: 5px 15px;
  border-radius: 5px;
  background-color: #fff;
`;

const TableTitleDiv = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 15px 25px;
  background-color: #eee;
  font-weight: 700;
  align-items: center;
  border-radius: 10px 10px 0 0;
  border: 1px solid #929292;
`;

const TableTopDiv = styled.div`
  justify-content: space-between;
  display: flex;
  background-color: #eee;
  border-left: 1px solid #929292;
`;

const TopTitleDiv = styled.div`
  width: 20%;
  text-align: center;
  padding: 10px 0;
  border-right: 1px solid #929292;
  border-bottom: 1px solid #929292;
`;

function SalesPage() {
  return (
    <LayoutDiv>
      <SideBar />
      <ContentDiv className="scrollbar-hide">
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <TitleDiv>목록(11건)</TitleDiv>
          <TableBtn
            style={{
              marginTop: 20,
              marginRight: 35,
              backgroundColor: "#C4B6F0",
              color: "#fff",
              fontWeight: 700,
            }}
          >
            간단히
          </TableBtn>
        </div>
        <TableDiv>
          <TableTitleDiv>
            <div>매출 내역</div>
            <div style={{ display: "flex", gap: 30 }}>
              <TableBtn>예약</TableBtn>
              <TableBtn>앉아서 주문</TableBtn>
            </div>
          </TableTitleDiv>
          <TableTopDiv>
            <TopTitleDiv>주문 번호</TopTitleDiv>
            <TopTitleDiv>주문 일시</TopTitleDiv>
            <TopTitleDiv>주문자 성함</TopTitleDiv>
            <TopTitleDiv>주문한 메뉴</TopTitleDiv>
            <TopTitleDiv>주문 종류</TopTitleDiv>
          </TableTopDiv>
          {/* 여기부터 map 돌리기 */}
          <TableTopDiv style={{ backgroundColor: "#fff" }}>
            <TopTitleDiv>1113461412</TopTitleDiv>
            <TopTitleDiv>2025.01.03 17:30:46 </TopTitleDiv>
            <TopTitleDiv>홍길동</TopTitleDiv>
            <TopTitleDiv>양지쌀국수</TopTitleDiv>
            <TopTitleDiv>앉아서 주문</TopTitleDiv>
          </TableTopDiv>
          <TableTopDiv style={{ backgroundColor: "#fff" }}>
            <TopTitleDiv>1113461412</TopTitleDiv>
            <TopTitleDiv>2025.01.03 17:30:46 </TopTitleDiv>
            <TopTitleDiv>홍길동</TopTitleDiv>
            <TopTitleDiv>양지쌀국수</TopTitleDiv>
            <TopTitleDiv>앉아서 주문</TopTitleDiv>
          </TableTopDiv>
          <TableTopDiv style={{ backgroundColor: "#fff" }}>
            <TopTitleDiv>1113461412</TopTitleDiv>
            <TopTitleDiv>2025.01.03 17:30:46 </TopTitleDiv>
            <TopTitleDiv>홍길동</TopTitleDiv>
            <TopTitleDiv>양지쌀국수</TopTitleDiv>
            <TopTitleDiv>앉아서 주문</TopTitleDiv>
          </TableTopDiv>
          <TableTopDiv style={{ backgroundColor: "#fff" }}>
            <TopTitleDiv>1113461412</TopTitleDiv>
            <TopTitleDiv>2025.01.03 17:30:46 </TopTitleDiv>
            <TopTitleDiv>홍길동</TopTitleDiv>
            <TopTitleDiv>양지쌀국수</TopTitleDiv>
            <TopTitleDiv>앉아서 주문</TopTitleDiv>
          </TableTopDiv>
          <TableTopDiv style={{ backgroundColor: "#fff" }}>
            <TopTitleDiv>1113461412</TopTitleDiv>
            <TopTitleDiv>2025.01.03 17:30:46 </TopTitleDiv>
            <TopTitleDiv>홍길동</TopTitleDiv>
            <TopTitleDiv>양지쌀국수</TopTitleDiv>
            <TopTitleDiv>앉아서 주문</TopTitleDiv>
          </TableTopDiv>
          <TableTopDiv style={{ backgroundColor: "#fff" }}>
            <TopTitleDiv>1113461412</TopTitleDiv>
            <TopTitleDiv>2025.01.03 17:30:46 </TopTitleDiv>
            <TopTitleDiv>홍길동</TopTitleDiv>
            <TopTitleDiv>양지쌀국수</TopTitleDiv>
            <TopTitleDiv>앉아서 주문</TopTitleDiv>
          </TableTopDiv>
          <TableTopDiv style={{ backgroundColor: "#fff" }}>
            <TopTitleDiv>1113461412</TopTitleDiv>
            <TopTitleDiv>2025.01.03 17:30:46 </TopTitleDiv>
            <TopTitleDiv>홍길동</TopTitleDiv>
            <TopTitleDiv>양지쌀국수</TopTitleDiv>
            <TopTitleDiv>앉아서 주문</TopTitleDiv>
          </TableTopDiv>
          <TableTopDiv style={{ backgroundColor: "#fff" }}>
            <TopTitleDiv>1113461412</TopTitleDiv>
            <TopTitleDiv>2025.01.03 17:30:46 </TopTitleDiv>
            <TopTitleDiv>홍길동</TopTitleDiv>
            <TopTitleDiv>양지쌀국수</TopTitleDiv>
            <TopTitleDiv>앉아서 주문</TopTitleDiv>
          </TableTopDiv>
          <TableTopDiv style={{ backgroundColor: "#fff" }}>
            <TopTitleDiv>1113461412</TopTitleDiv>
            <TopTitleDiv>2025.01.03 17:30:46 </TopTitleDiv>
            <TopTitleDiv>홍길동</TopTitleDiv>
            <TopTitleDiv>양지쌀국수</TopTitleDiv>
            <TopTitleDiv>앉아서 주문</TopTitleDiv>
          </TableTopDiv>
          <TableTopDiv style={{ backgroundColor: "#fff" }}>
            <TopTitleDiv>1113461412</TopTitleDiv>
            <TopTitleDiv>2025.01.03 17:30:46 </TopTitleDiv>
            <TopTitleDiv>홍길동</TopTitleDiv>
            <TopTitleDiv>양지쌀국수</TopTitleDiv>
            <TopTitleDiv>앉아서 주문</TopTitleDiv>
          </TableTopDiv>
          <TableTopDiv style={{ backgroundColor: "#fff" }}>
            <TopTitleDiv>1113461412</TopTitleDiv>
            <TopTitleDiv>2025.01.03 17:30:46 </TopTitleDiv>
            <TopTitleDiv>홍길동</TopTitleDiv>
            <TopTitleDiv>양지쌀국수</TopTitleDiv>
            <TopTitleDiv>앉아서 주문</TopTitleDiv>
          </TableTopDiv>
          <TableTopDiv style={{ backgroundColor: "#fff" }}>
            <TopTitleDiv>1113461412</TopTitleDiv>
            <TopTitleDiv>2025.01.03 17:30:46 </TopTitleDiv>
            <TopTitleDiv>홍길동</TopTitleDiv>
            <TopTitleDiv>양지쌀국수</TopTitleDiv>
            <TopTitleDiv>앉아서 주문</TopTitleDiv>
          </TableTopDiv>
          <TableTopDiv style={{ backgroundColor: "#fff" }}>
            <TopTitleDiv>1113461412</TopTitleDiv>
            <TopTitleDiv>2025.01.03 17:30:46 </TopTitleDiv>
            <TopTitleDiv>홍길동</TopTitleDiv>
            <TopTitleDiv>양지쌀국수</TopTitleDiv>
            <TopTitleDiv>앉아서 주문</TopTitleDiv>
          </TableTopDiv>
        </TableDiv>
      </ContentDiv>
    </LayoutDiv>
  );
}
export default SalesPage;
