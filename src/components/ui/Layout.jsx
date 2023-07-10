import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <nav>
        <span className="tet-4xl text-primary">MK Store</span>
      </nav>
      <main className="align-element py-20">
        <Outlet />
      </main>
    </>
  );
};

export default Layout;
