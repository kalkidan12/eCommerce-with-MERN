import React, { useEffect } from "react";
import { MdRemoveShoppingCart } from "react-icons/md";
import { GiShoppingBag } from "react-icons/gi";
import "./cart.css";
import { Link } from "react-router-dom";
import {
	addToCart,
	decreaseCart,
	removeFromCart,
	getTotals,
	clearCart,
} from "../features/slices/cartSlice";
import { useDispatch, useSelector } from "react-redux";

function CartPage() {
	const cart = useSelector((state) => state.cart);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getTotals());
	}, [cart, dispatch]);
	const cartItem = JSON.parse(localStorage.getItem("cartItems"));
	return (
		<>
			<div className="cart-title">
				<h2>Your Cart</h2>
			</div>
			<div className="container">
				{cartItem ? (
					<div>
						<div className="check-out">
							<div className="title">Your Bill</div>
							<div className="sub-total">
								<p>Sub Total</p>
								<p>${cart.cartTotalAmount}</p>
							</div>
							<div className="select">
								<p>Select Payment</p>
								<select type="option">
									<option value="On Delivery">On Delivery</option>
									<option value="Tele Birr">Tele Birr</option>
								</select>
							</div>
							<div className="sub-total">
								<p>Total</p>
								<p>${cart.cartTotalAmount}</p>
							</div>
							<div className="button">
								<button>Proceed Check Out</button>
							</div>
						</div>
						<Link to="/" className="continue-shopping">
							<h3>
								<span>
									<GiShoppingBag />
								</span>
								Continue Shopping
							</h3>
						</Link>
						{cartItem.map((item) => (
							<div key={item.id}>
								<ul className="cart-item-display">
									<li>
										<img src={item.image} alt="" width={70} height={70} />
									</li>
									<li>{item.title}</li>
									<li>
										<button onClick={() => dispatch(decreaseCart(item))}>
											-
										</button>
										<span>{item.cartQuantity}</span>
										<button onClick={() => dispatch(addToCart(item))}>+</button>
									</li>
									<li>${item.price}</li>
									<li>
										<button
											className="remove-button"
											onClick={() => dispatch(removeFromCart(item))}
										>
											x
										</button>
									</li>
								</ul>
							</div>
						))}
						<div className="clear-cart">
							<div onClick={() => dispatch(clearCart())}>
								<h4>
									Clear Cart
									<span>
										<MdRemoveShoppingCart />
									</span>
								</h4>
							</div>
							<Link to="/" className="continue-shopping-sm">
								<h4>
									<span>
										<GiShoppingBag />
									</span>
									Continue Shopping
								</h4>
							</Link>
						</div>
					</div>
				) : (
					<div>Your Cart is Empty</div>
				)}
			</div>
		</>
	);
}

export default CartPage;
