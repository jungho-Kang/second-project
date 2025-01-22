import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import IndexPage from "./pages/IndexPage";
import LoginPage from "./pages/auth/IndexPage";
import MyInfo from "./pages/myInfo/IndexPage";
import EditInfoPage from "./pages/myInfo/EditInfoPage";
import EditPwPage from "./pages/myInfo/EditPwPage";
import Order from "./pages/order/IndexPage";
import Restaurant from "./pages/restaurant/IndexPage";
import FindPwPage from "./pages/auth/FindPwPage";
import Start from "./pages/storeManager/startingPage";
import Store from "./pages/storeManager/IndexPage";
import FindIdPage from "./pages/auth/FindIdPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<IndexPage />} />
        <Route path="/auth">
          <Route index element={<LoginPage />} />
          <Route path="findid" element={<FindIdPage />} />
          <Route path="findpw" element={<FindPwPage />} />
        </Route>
        <Route path="/myinfo">
          <Route index element={<MyInfo />} />
          <Route path="editinfo" element={<EditInfoPage />} />
          <Route path="editpw" element={<EditPwPage />} />
        </Route>
        <Route path="/order">
          <Route index element={<Order />} />
        </Route>
        <Route path="/restaurant">
          <Route index element={<Restaurant />} />
        </Route>
        {/* 식당관리자 */}
        <Route path="/start">
          <Route index element={<Start />} />
        </Route>
        <Route path="/store">
          <Route index element={<Store />} />
        </Route>
      </Routes>
    </Router>
  );
}
export default App;
