"use client";

import React from "react";
import styled from "styled-components";

interface IShoppingButtonProps {
	$backgroundColor: string;
	$justifyContent: string;

	children: React.ReactNode;

	secondaryColor?: string;
}

const StyledShoppingButton = styled.button<IShoppingButtonProps>`
	/* Flex */
	display: flex;

	align-items: center;
	gap: 1rem;
	justify-content: ${props => props.$justifyContent};
	/* Colors */
	background-color: ${props => props.$backgroundColor};
	color: var(--primary-text-black);
	/* Dimensioning */
	height: 56px;
	width: 100%;
	/* Aspect */
	border-radius: 8px;
	/* Typography */
	font-weight: bold;

	padding: 0 2rem 0 2rem;
`;

const ShoppingButton: React.FC<IShoppingButtonProps> = ({
	$backgroundColor,
	$justifyContent,
	children,
}) => {
	return (
		<StyledShoppingButton
			$backgroundColor={$backgroundColor}
			$justifyContent={$justifyContent}
		>
			{children}
		</StyledShoppingButton>
	);
};

export default ShoppingButton;
