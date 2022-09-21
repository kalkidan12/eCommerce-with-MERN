import React, { useState } from "react";
import "./pages.css";
import { product } from "../components/data/productData";
import { IoMdAddCircle } from "react-icons/io";
import { MdFavorite } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { addToCart } from "../features/slices/cartSlice";
import { useSlector, useDispatch } from "react-redux";

function WatchPage() {
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const handAddToCart = (product) => {
		dispatch(addToCart(product));
		navigate("/cart");
	};
	const [range, setRange] = useState(500);
	const watch = product.filter(
		(product) => product.catagory == "watch" && product.price <= range,
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
				<h2>List of available watches in our atore</h2>
			</div>
			<div className="trending-product-list">
				{watch.length &&
					watch.map((product, key) => (
						<div className="trending-card" key={key}>
							<div className="card-content">
								<div className="for-image">
									<div className="favorite">
										<span>
											<MdFavorite />
										</span>
									</div>
									<div className="img">
										<img src={product.image} alt="" />
									</div>
								</div>
								<div className="for-title">
									<h4>{product.title}</h4>
								</div>
								<div className="for-price">
									<h2>${product.price}</h2>
									<span>
										<IoMdAddCircle onClick={() => handAddToCart(product)} />
									</span>
								</div>
							</div>
						</div>
					))}
			</div>
		</div>
	);
}

export default WatchPage;
