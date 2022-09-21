import { Routes, Route } from "react-router-dom";
import { Suspense, lazy } from "react";
import React from "react";
const CartPage = lazy(() => import("../pages/CartPage"));
const Home = lazy(() => import("../pages/Home"));
const EarphonePage = lazy(() => import("../pages/EarphonePage"));
const PhonePage = lazy(() => import("../pages/PhonePage"));
const WatchPage = lazy(() => import("../pages/WatchPage"));
const LaptopPage = lazy(() => import("../pages/LaptopPage"));

function AllRoutes() {
	return (
		<Suspense fallback={"Loading"}>
			<Routes>
				<Route path="/" exact element={<Home />} />
				<Route path="/earphones" exact element={<EarphonePage />} />
				<Route path="/phones" exact element={<PhonePage />} />
				<Route path="/watches" exact element={<WatchPage />} />
				<Route path="/laptops" exact element={<LaptopPage />} />
				<Route path="/cart" exact element={<CartPage />} />
			</Routes>
		</Suspense>
	);
}

export default AllRoutes;
