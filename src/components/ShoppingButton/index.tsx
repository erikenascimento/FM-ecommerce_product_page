"use client";

import React from "react";
import styled from "styled-components";

interface IShoppingButtonProps {
	backgroundColor: string;
	children: React.ReactNode;

	secondaryColor?: string;
}

const StyledShoppingButton = styled.button<IShoppingButtonProps>`
	/* Flex */
	display: flex;

	align-items: center;
	gap: 1rem;
	justify-content: center;
	/* Colors */
	background-color: ${props => props.backgroundColor};
	color: var(--primary-text-black);
	/* Dimensioning */
	height: 56px;
	width: 100%;
	/* Aspect */
	border-radius: 8px;
	/* Typography */
	font-weight: bold;
`;

const ShoppingButton: React.FC<IShoppingButtonProps> = ({
	backgroundColor,
	children,
}) => {
	return (
		<StyledShoppingButton backgroundColor={backgroundColor}>
			{children}
		</StyledShoppingButton>
	);
};

export default ShoppingButton;
