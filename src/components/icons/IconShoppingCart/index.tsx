"use client";

import styled from "styled-components";

interface IIconProps {
	color?: string;
}

const StyledIconShoppingCart = styled.i<IIconProps>`
	.iconShoppingCart {
		/* Background */
		background-image: url("./icon-cart.svg");

		background-color: ${props => props.color || "transparent"};
		background-repeat: no-repeat;
		background-position: center;
		background-size: contain;
		/* Dimensioning */
		height: 21.82px;
		width: 20px;

		display: block;
	}
`;

const IconShoppingCart: React.FC<IIconProps> = ({ color }) => {
	return <StyledIconShoppingCart color={color} />;
};

export default IconShoppingCart;
