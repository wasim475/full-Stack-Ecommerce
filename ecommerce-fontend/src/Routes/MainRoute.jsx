import { Route, Routes } from "react-router";
import RootLayout from "../RootLayout/RootLayout";
import Home from "../Pages/Home/Home/Home";

const MainRoute = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<RootLayout />}>
        </Route>
      </Routes>
      <Routes>
        <Route index element={<Home/>}/>
      </Routes>
    </>
  );
};

export default MainRoute;
