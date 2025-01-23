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
  overflow-y: scroll;
  box-shadow:
    0px 20px 25px -5px rgba(0, 0, 0, 0.1),
    0px 10px 10px -5px rgba(0, 0, 0, 0.04);
`;

const TitleDiv = styled.div`
  margin-top: 20px;
  font-size: 20px;
`;

function IndexPage() {
  return (
    <LayoutDiv>
      <SideBar />
      <ContentDiv className="scrollbar-hide">
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginLeft: 35,
            marginRight: 35,
            alignItems: "center",
          }}
        >
          <TitleDiv>목록(11건)</TitleDiv>
        </div>
      </ContentDiv>
    </LayoutDiv>
  );
}
export default IndexPage;
