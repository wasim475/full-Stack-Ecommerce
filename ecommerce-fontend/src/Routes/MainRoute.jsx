import { Route, Routes } from "react-router";
import RootLayout from "../RootLayout/RootLayout";
import Home from "../Pages/Home/Home/Home";
import Login from '../Pages/LoginRegister/Login/Login';
import Registration from '../Pages/LoginRegister/Registration/Registration';

const MainRoute = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<RootLayout />}>
        </Route>
      </Routes>
      <Routes>
        <Route index element={<Home/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/registration' element={<Registration/>}/>
      </Routes>
    </>
  );
};

export default MainRoute;
