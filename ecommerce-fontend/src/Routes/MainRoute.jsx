import { Route, Routes } from "react-router";
import RootLayout from "../RootLayout/RootLayout";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/LoginRegister/Login/Login";
import Registration from "../Pages/LoginRegister/Registration/Registration";
import VerifyOtp from "../Pages/LoginRegister/VerifyOtp/VerifyOtp";
import ForgotPassword from "../Pages/LoginRegister/forgotpassword/ForgotPassword";
import ResetPassword from "../Pages/LoginRegister/Reset Password/ResetPassword";
import Users from "../Pages/DashBoard/users/Users";
import Marchant from '../Pages/DashBoard/marchant/Marchant';
import AddCategory from '../components/Category/Add Catetory/AddCategory';
import ViewCategory from '../components/Category/view category/ViewCategory';
import AddSubCategory from '../Pages/DashBoard/SubCategory/AddSubCategory';
import SubCategory from '../Pages/DashBoard/SubCategory/SubCategory';
import AddProducts from '../Pages/DashBoard/Products/AddProducts';
import ViewProducts from '../Pages/DashBoard/Products/ViewProducts';

const MainRoute = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<RootLayout />}>
          <Route path="login" element={<Login />} />
          <Route path="registration" element={<Registration />} />
          <Route path="verify/:email" element={<VerifyOtp />} />
          <Route path="forgotpassword" element={<ForgotPassword />} />
          <Route path="resetpassword/:token" element={<ResetPassword />} />

          <Route path="/dashboard" element={<Home />}>
          <Route path="users" element={<Users />} />
          <Route path="marchant" element={<Marchant />} />
          <Route path="add-category" element={<AddCategory />} />
          <Route path="category" element={<ViewCategory />} />
          <Route path="add-sub-category" element={<AddSubCategory />} />
          <Route path="sub-category" element={<SubCategory />} />
          <Route path="addproduct" element={<AddProducts />} />
          <Route path="products" element={<ViewProducts />} />
          <Route path="*" element={<h1>Page not found.</h1>} />
          </Route>

          <Route path="*" element={<h1>Page not found.</h1>} />
        </Route>
      </Routes>
    </>
  );
};

export default MainRoute;
