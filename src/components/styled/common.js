import styled from "styled-components";
export const Button = styled.button`
	background-color: lightblue;
	border: none;
	border-radius: 5px;
	padding: 10px;
`;
export const Card = styled.div`
	width: 250px;
	height: 280px;
	color: black;
	background-color: rgba(255, 255, 255, 0.4);
	border-radius: 10px;
`;
export const ProductCard = styled(Card)`
	width: 220px;
	height: 245px;
	margin-bottom: 15px;
	position: relative;
	text-align: center;
`;
export const CatagoryCard = styled(Card)`
	width: 210px;
	height: 210px;
	cursor: pointer;
	background-color: rgba(113, 222, 100, 0.4);
`;
