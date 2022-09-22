import React from "react";
import "./pages.css";
import { product } from "../components/data/productData";
import { IoMdAddCircle } from "react-icons/io";
import { MdFavorite } from "react-icons/md";
import laptop from "../images/laptop1.png";
import earphone from "../images/earphone1.png";
import watch from "../images/watch1.png";
import phone from "../images/phone1.png";
import { useNavigate } from "react-router-dom";
import { addToCart } from "../features/slices/cartSlice";
import { useSlector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import homeImage from "../images/home-left-back.jpg";

function Home() {
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const handAddToCart = (product) => {
		dispatch(addToCart(product));
		navigate("/cart");
	};
	const trendingProduct = product.filter((product) => product.trending == true);
	return (
		<>
			<div className="home-flex">
				<div className="home-left">
					<img
						src={homeImage}
						alt="Home Image"
						height={"100%"}
						width="100%"
						className="img"
						style={{ borderRadius: "10px" }}
					/>
					<div className="home-left-title">20% off</div>
					<div className="home-left-title-ordernow">Order Now</div>
				</div>
				<div className="home-right">
					<Link to="laptops" className="catagory-card">
						<div className="catagory-bg0">
							<img src={laptop} alt="" style={{ opacity: 0.4 }} />
							<div className="catagory-title">Laptops</div>
						</div>
					</Link>
					<Link to="/phones" className="catagory-card">
						<div className="catagory-bg1">
							<img src={phone} alt="" style={{ opacity: 0.4 }} />
							<div className="catagory-title">Phones</div>
						</div>
					</Link>
					<Link to="/earphones" className="catagory-card">
						<div className="catagory-bg2">
							<img src={earphone} alt="" style={{ opacity: 0.4 }} />
							<div className="catagory-title">Earphones</div>
						</div>
					</Link>
					<Link to="/watches" className="catagory-card">
						<div className="catagory-bg3">
							<img src={watch} alt="" style={{ opacity: 0.4 }} />
							<div className="catagory-title">Watches</div>
						</div>
					</Link>
				</div>
			</div>
			<div className="home-title">
				<h1>Trending Products</h1>
				<h2>List of trending products available in our atore</h2>
			</div>
			<div className="trending-product-list">
				{trendingProduct.length &&
					trendingProduct.map((product, key) => (
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
		</>
	);
}

export default Home;
