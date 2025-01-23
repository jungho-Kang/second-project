import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import IndexPage from "./pages/IndexPage";
import LoginPage from "./pages/auth/IndexPage";
import UserInfo from "./pages/userInfo/IndexPage";
import EditInfoPage from "./pages/userInfo/EditInfoPage";
import Order from "./pages/order/IndexPage";
import Restaurant from "./pages/restaurant/IndexPage";
import FindPwPage from "./pages/auth/FindPwPage";
import Store from "./pages/storeManager/IndexPage";
import FindIdPage from "./pages/auth/FindIdPage";
import MenuPage from "./pages/storeManager/menu/IndexPage";
import SalesPage from "./pages/storeManager/salesConfirm/IndexPage";
import UserPage from "./pages/user/IndexPage";
import EditPwPage from "./pages/auth/EditPwPage";

import StoreSales from "./pages/storeManager/Sales";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<IndexPage />} />
        <Route path="/auth">
          <Route index element={<LoginPage />} />
          <Route path="findid" element={<FindIdPage />} />
          <Route path="findpw" element={<FindPwPage />} />
          <Route path="editpw" element={<EditPwPage />} />
        </Route>

        <Route path="/user">
          <Route index element={<UserPage />} />
          <Route path="userinfo">
            <Route index element={<UserInfo />} />
            <Route path="editinfo" element={<EditInfoPage />} />
          </Route>
          <Route path="order">
            <Route index element={<Order />} />
          </Route>
          <Route path="restaurant">
            <Route index element={<Restaurant />} />
          </Route>
        </Route>

        <Route path="/store">
          <Route index element={<Store />} />
          <Route path="menu" element={<MenuPage />} />

          <Route path="order" element={<OrderPage />} />
          <Route path="sales" element={<StoreSales />} />

          <Route path="sales" element={<SalesPage />} />

        </Route>
      </Routes>
    </Router>
  );
}
export default App;
