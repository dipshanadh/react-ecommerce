import { Outlet } from "react-router-dom";

import { Header, Navbar, Footer } from "@/components/ui";

const Layout = () => {
	return (
		<>
			<Header />
			<Navbar />
			<main className="align-element py-20">
				<Outlet />
			</main>
			<Footer />
		</>
	);
};

export default Layout;
