"use client";

import React from "react";
import styled from "styled-components";

interface IShoppingButtonProps {
	$backgroundColor: string;
	$justifyContent: string;

	children: React.ReactNode;

	secondaryColor?: string;
}

const StyledShoppingButton = styled.span<IShoppingButtonProps>`
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
	padding: 0 2rem 0 2rem;
	/* Aspect */
	border-radius: 8px;
	/* Typography */
	font-weight: bold;

	/* For the hover effect on the orange button only */
	${props =>
		props.$backgroundColor === "var(--primary-orange)" &&
		`
    &:hover {
      background-color: var(--pale-orange)
    }
  `}
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
