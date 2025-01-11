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

          <Route path="/home" element={<Home />}>
          <Route path="users" element={<Users />} />
          <Route path="marchant" element={<Marchant />} />
          <Route path="*" element={<h1>Page not found.</h1>} />
          </Route>

          <Route path="*" element={<h1>Page not found.</h1>} />
        </Route>
      </Routes>
    </>
  );
};

export default MainRoute;
