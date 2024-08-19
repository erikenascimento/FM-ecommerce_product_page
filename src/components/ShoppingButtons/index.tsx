import styles from "./ShoppingButtons.module.scss";

import ShoppingButton from "../ShoppingButton";
import IconShoppingCart from "../icons/IconShoppingCart";
import IconShoppingMinus from "../icons/IconShoppingMinus";
import IconShoppingPlus from "../icons/IconShoppingPlus";
import { useState } from "react";

function ShoppingButtons() {
	const [itemCount, setItemCount] = useState(0);

	const handleIncrement = () => {
		setItemCount(prevCount => prevCount + 1);
	};

	const handleDecrement = () => {
		setItemCount(prevCount => (prevCount > 0 ? prevCount - 1 : 0));
	};

	return (
		<div className={styles.shoppingButtons}>
			<ShoppingButton
				$backgroundColor="var(--light-greyish-blue)"
				$justifyContent="space-between"
			>
				<button onClick={handleDecrement}>
					<IconShoppingMinus />
				</button>
				{itemCount}
				<button onClick={handleIncrement}>
					<IconShoppingPlus />
				</button>
			</ShoppingButton>
			<ShoppingButton
				$backgroundColor="var(--primary-orange)"
				$justifyContent="center"
			>
				<IconShoppingCart color="var(--primary-text-black)" />
				Add to Cart
			</ShoppingButton>
		</div>
	);
}

export default ShoppingButtons;
