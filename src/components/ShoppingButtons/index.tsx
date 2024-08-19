import styles from "./ShoppingButtons.module.scss";

import ShoppingButton from "../ShoppingButton";
import IconShoppingCart from "../icons/IconShoppingCart";
import IconShoppingMinus from "../icons/IconShoppingMinus";
import IconShoppingPlus from "../icons/IconShoppingPlus";
import { useCart } from "@/context/CartProvider";

function ShoppingButtons() {
	const { itemCount, handleIncrement, handleDecrement } = useCart();

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
