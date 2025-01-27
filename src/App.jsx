import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import IndexPage from "./pages/IndexPage";
import LoginPage from "./pages/auth/LoginPage";
import UserInfo from "./pages/userInfo/IndexPage";
import EditInfoPage from "./pages/userInfo/EditInfoPage";
import Order from "./pages/order/IndexPage";
import Restaurant from "./pages/restaurant/RestaurantPage";
import FindPwPage from "./pages/auth/FindPwPage";
import Store from "./pages/storeManager/StorePage";
import FindIdPage from "./pages/auth/FindIdPage";
import MenuPage from "./pages/storeManager/menu/StoreMenuPage";
import OrderPage from "./pages/storeManager/salesConfirm/SalesPage";
import UserPage from "./pages/user/UserPage";
import EditPwPage from "./pages/auth/EditPwPage";

import StoreSales from "./pages/storeManager/salesConfirm/Sales";
import SignUpPage from "./pages/auth/SignUpPage";
import EmailAuthPage from "./pages/auth/EmailAuthPage";

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
          <Route path="signup">
            <Route index element={<SignUpPage />} />
            <Route path="emailauth" element={<EmailAuthPage />} />
          </Route>
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
        </Route>
      </Routes>
    </Router>
  );
}
export default App;
