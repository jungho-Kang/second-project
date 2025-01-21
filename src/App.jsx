import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import IndexPage from "./pages/IndexPage";
import LoginPage from "./pages/auth/IndexPage";
import MyInfo from "./pages/myInfo/IndexPage";
import EditInfoPage from "./pages/myInfo/EditInfoPage";
import EditPwPage from "./pages/myInfo/EditPwPage";
import Order from "./pages/order/IndexPage";
import Restaurant from "./pages/restaurant/IndexPage";
import FindIdPage from "./pages/auth/FindIdPage";
import FindPwPage from "./pages/auth/FindPwPage";
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
      </Routes>
    </Router>
  );
}

export default App;
