import { Outlet } from "react-router";
import Navbar from "../Pages/SharedPage/Navbar/Navbar";
import Sidebar from '../Pages/DashBoard/Sidebar/Sidebar';
import TextAnimation from '../components/Test';


const RootLayout = () => {
  return (
    <div>
      <Navbar />
      <Outlet/>
      <TextAnimation/>
      {/* <main className=" flex gap-x-4">
        <section>
        </section>
        <section className='border-2 border-gray-400 w-full'>
          <Outlet />
        </section>
      </main> */}
    </div>
  );
};

export default RootLayout;
