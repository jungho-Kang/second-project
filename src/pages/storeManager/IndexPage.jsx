import SideBar from "./sideBar";
import SideBarRigtht from "./SideBarRight";
import Table from "./tableManage/Table";

const IndexPage = () => {
  return (
    <div className="flex w-full h-dvh overflow-hidden scrollbar-hide justify-between">
      <SideBar />
      <Table />
      <SideBarRigtht />
    </div>
  );
};
export default IndexPage;
