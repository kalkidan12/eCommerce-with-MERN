import React, { useState } from "react";
import "./pages.css";
import { product } from "../components/data/productData";
import { IoMdAddCircle } from "react-icons/io";
import { MdFavorite } from "react-icons/md";
import laptop from "../images/laptop1.png";
import { useNavigate } from "react-router-dom";
import { addToCart } from "../features/slices/cartSlice";
import { useSlector, useDispatch } from "react-redux";

function LaptopPage() {
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const handAddToCart = (product) => {
		dispatch(addToCart(product));
		navigate("/cart");
	};
	const [range, setRange] = useState(500);
	const laptop = product.filter(
		(product) => product.catagory == "laptop" && product.price <= range,
	);

	return (
		<div>
			<div className="price-range">
				<div className="set-price">set price: 10 - {range}</div>
				<div className="range-input">
					<input
						type="range"
						name="points"
						min="20"
						max="500"
						onChange={(e) => setRange(e.target.value)}
					/>
				</div>
			</div>
			<div className="home-title">
				<h1></h1>
				<h2>List of available laptops in our atore</h2>
			</div>
			<div className="trending-product-list">
				{laptop.length &&
					laptop.map((laptop, key) => (
						<div className="trending-card" key={key}>
							<div className="card-content">
								<div className="for-image">
									<div className="favorite">
										<span>
											<MdFavorite />
										</span>
									</div>
									<div className="img">
										<img src={laptop.image} alt="" />
									</div>
								</div>
								<div className="for-title">
									<h4>{laptop.title}</h4>
								</div>
								<div className="for-price">
									<h2>${laptop.price}</h2>
									<span>
										<IoMdAddCircle onClick={() => handAddToCart(laptop)} />
									</span>
								</div>
							</div>
						</div>
					))}
			</div>
		</div>
	);
}

export default LaptopPage;
