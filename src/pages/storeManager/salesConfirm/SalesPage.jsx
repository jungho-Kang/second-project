import styled from "@emotion/styled";
import axios from "axios";
import { useEffect, useState } from "react";
import { getCookie } from "../../../components/cookie";

const TableDiv = styled.div`
  margin: 30px 35px;
  overflow-y: scroll;
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
  const [salesList, setSalesList] = useState([]);
  const sessionRestaurantId = sessionStorage.getItem("restaurantId");
  const accessToken = getCookie();

  useEffect(() => {
    const params = {
      restaurantId: 1,
      startDate: "",
      endData: "",
      page: 1,
      size: 15,
    };
    const getSalesList = async () => {
      try {
        const res = await axios.get(`/api/restaurant/orderList`, {
          params,
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        });

        console.log(res.data.resultData);
        const result = res.data.resultData;
        setSalesList([...result]);
      } catch (error) {
        console.log(error);
      }
    };
    getSalesList();
  }, []);
  console.log(salesList);

  return (
    <TableDiv className="scrollbar-hide">
      <TableTitleDiv>
        <div>매출 내역</div>
        <div style={{ display: "flex", gap: 10, alignItems: "center" }}>
          {/* <TableBtn>기간 선택</TableBtn> */}
          <label htmlFor="">시작일</label>
          <input type="date" className="px-2" />
          <span>~</span>
          <label htmlFor="">종료일</label>
          <input type="date" className="px-2" />
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
  );
}
export default SalesPage;
