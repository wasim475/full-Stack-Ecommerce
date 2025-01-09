import { Outlet } from "react-router";
import Navbar from "../Pages/SharedPage/Navbar/Navbar";

const RootLayout = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
    </div>
  );
};

export default RootLayout;
