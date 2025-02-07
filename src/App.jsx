import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import IndexPage from "./pages/IndexPage";
import EditPwPage from "./pages/auth/EditPwPage";
import FindIdPage from "./pages/auth/FindIdPage";
import FindPwPage from "./pages/auth/FindPwPage";
import LoginPage from "./pages/auth/LoginPage";
import SignUpPage from "./pages/auth/SignUpPage";
import Order from "./pages/payment/PaymentList";
import Restaurant from "./pages/restaurant/RestaurantPage";
import Store from "./pages/storeManager/StorePage";
import MenuPage from "./pages/storeManager/menu/StoreMenuPage";
import StoreSales from "./pages/storeManager/salesConfirm/Sales";
import OrderPage from "./pages/storeManager/salesConfirm/SalesPage";
import EditInfoPage from "./pages/userInfo/EditInfoPage";
import UserInfo from "./pages/userInfo/IndexPage";
import EmailAuthPage from "./pages/auth/EmailAuthPage";
import PolicyPage from "./pages/auth/PolicyPage";
import PlaceToOrder from "./pages/order/placetoorder/PlaceToOrder";
import MealTicketPage from "./pages/order/placetoorder/QRCode";
import StoreInfoPage from "./pages/storeManager/storeAuth/StoreInfoPage";
import UserMainPage from "./pages/user/UserMainPage";
import RestaurantDetailPage from "./pages/restaurant/RestaurantDetailPage";
import AddStorePage from "./pages/storeManager/AddStorePage";


import OrderMemberPage from "./pages/order/placetoorder/OrderMemberPage";
import OrderPricePage from "./pages/order/placetoorder/OrderPricePage";


import MenuSelectPage from "./pages/restaurant/MenuSelectPage";
import NotFound from "./pages/NotFound";
import { runSocket } from "./components/notification/StompComponent";
import OrderRequestPage from "./pages/order/placetoorder/OrderRequestPage";
function App() {
  runSocket();
  return (
    <Router>
      <Routes>
        <Route path="/" element={<IndexPage />} />
        <Route path="/auth">
          <Route index element={<LoginPage />} />
          <Route path="findid" element={<FindIdPage />} />
          <Route path="findpw" element={<FindPwPage />} />
          <Route path="editpw" element={<EditPwPage />} />
          <Route path="policy" element={<PolicyPage />} />
          <Route path="signup">
            <Route index element={<SignUpPage />} />
            <Route path="emailauth" element={<EmailAuthPage />} />
          </Route>
        </Route>
        <Route path="/user">
          <Route index element={<UserMainPage />} />
          <Route path="userinfo">
            <Route index element={<UserInfo />} />
            <Route path="edit" element={<EditInfoPage />} />
          </Route>
          <Route path="order">
            <Route index element={<Order />} />
          </Route>
          <Route path="placetoorder">
            <Route index element={<PlaceToOrder />} />
            <Route path="coupon" element={<MealTicketPage />} />
            <Route path="member" element={<OrderMemberPage />} />
            <Route path="price" element={<OrderPricePage />} />
            <Route path="request" element={<OrderRequestPage />} />
          </Route>
          <Route path="restaurant">
            <Route index element={<Restaurant />} />
            <Route path="detail">
              <Route path=":id" element={<RestaurantDetailPage />} />
              <Route path="reserve/:id" element={<MenuSelectPage />} />
            </Route>
          </Route>
        </Route>
        <Route path="/addstore" element={<AddStorePage />} />
        <Route path="/store">
          <Route index element={<Store />} />
          <Route path="menu" element={<MenuPage />} />
          <Route path="order" element={<OrderPage />} />
          <Route path="sales" element={<StoreSales />} />
          <Route path="info" element={<StoreInfoPage />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}
export default App;
