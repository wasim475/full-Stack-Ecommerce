import { Route, Routes } from "react-router";
import RootLayout from "../RootLayout/RootLayout";
import Home from "../Pages/Home/Home/Home";
import Login from '../Pages/LoginRegister/Login/Login';

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
      </Routes>
    </>
  );
};

export default MainRoute;
