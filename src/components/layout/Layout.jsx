import React from "react";
import AllRoutes from "../../routes/AllRoutes";
import Footer from "../footer/Footer";
import Header from "../header/Header";

function Layout() {
	return (
		<>
			<Header />
			<div>
				<AllRoutes />
			</div>
			<Footer />
		</>
	);
}

export default Layout;
