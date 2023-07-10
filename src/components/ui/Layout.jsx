import { Outlet } from "react-router-dom";

import Header from "./Header";

const Layout = () => {
  return (
    <>
      <Header />
      <main className="align-element py-20">
        <Outlet />
      </main>
    </>
  );
};

export default Layout;
