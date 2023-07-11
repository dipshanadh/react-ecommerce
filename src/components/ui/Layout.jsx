import { Outlet } from "react-router-dom";

import Header from "./Header";
import Navbar from "./Navbar";

const Layout = () => {
  return (
    <>
      <Header />
      <Navbar />
      <main className="align-element py-20">
        <Outlet />
      </main>
    </>
  );
};

export default Layout;
