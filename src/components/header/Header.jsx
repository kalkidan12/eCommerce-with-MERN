import React, { useRef, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { RiAccountPinCircleFill } from "react-icons/ri";
import { FaShoppingCart } from "react-icons/fa";
import { BiMenuAltRight } from "react-icons/bi";
import { GrClose } from "react-icons/gr";
import { useSelector } from "react-redux";
import "./header.css";

function Header() {
	const { cartTotalQuantity } = useSelector((state) => state.cart);

	const navRef = useRef();
	const [selected, setSelected] = useState(1);

	const showNav = () => {
		navRef.current.classList.toggle("show-hide-nav");
	};

	return (
		<header>
			<div className="logo">
				<Link to="/">
					<h1> Logo</h1>
				</Link>
			</div>
			<nav className="nav" ref={navRef}>
				<div className="nav-content">
					<ul className="nav-links">
						<Link to="/" onClick={() => showNav()}>
							<li
								onClick={() => setSelected(1)}
								style={selected == 1 ? { color: "red" } : {}}
							>
								Home
							</li>
						</Link>
						<Link to="/phones" onClick={() => showNav()}>
							<li
								onClick={() => setSelected(2)}
								style={selected == 2 ? { color: "red" } : {}}
							>
								Phones
							</li>
						</Link>
						<Link to="/watches" onClick={() => showNav()}>
							<li
								onClick={() => setSelected(3)}
								style={selected == 3 ? { color: "red" } : {}}
							>
								Watches
							</li>
						</Link>

						<Link to="/earphones" onClick={() => showNav()}>
							<li
								onClick={() => setSelected(4)}
								style={selected == 4 ? { color: "red" } : {}}
							>
								Earphone
							</li>
						</Link>
						<Link to="/laptops" onClick={() => showNav()}>
							<li
								onClick={() => setSelected(5)}
								style={selected == 5 ? { color: "red" } : {}}
							>
								Laptops
							</li>
						</Link>
					</ul>
					<ul className="nav-right">
						{/* <li className="input">
							<input type="search" placeholder="serach products.." />
						</li> */}
						<Link
							to="/cart"
							style={{ color: "black" }}
							onClick={() => showNav()}
						>
							<li className="icon">
								<span>
									<FaShoppingCart />
								</span>

								<i>{cartTotalQuantity}</i>
							</li>
						</Link>
						<li className="uicon" onClick={() => showNav()}>
							<RiAccountPinCircleFill />
						</li>
					</ul>
				</div>
				<div className="close-btn" onClick={() => showNav()}>
					<GrClose />
				</div>
			</nav>
			<div className="open-btn" onClick={() => showNav()}>
				<BiMenuAltRight />
			</div>
		</header>
	);
}

export default Header;
