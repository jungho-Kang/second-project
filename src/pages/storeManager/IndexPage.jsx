import SideBar from "./SideBar";
import SideBarRight from "./SideBarRight";
import Table from "./tableManage/Table";

const IndexPage = () => {
  return (
    <div className="flex w-full h-dvh overflow-hidden scrollbar-hide justify-between">
      <SideBar />
      <Table />
      {/* <SideBarRight /> */}
    </div>
  );
};
export default IndexPage;
