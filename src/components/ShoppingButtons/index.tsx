import styles from "./ShoppingButtons.module.scss";

import ShoppingButton from "../ShoppingButton";
import IconShoppingCart from "../icons/IconShoppingCart";
import IconShoppingMinus from "../icons/IconShoppingMinus";
import IconShoppingPlus from "../icons/IconShoppingPlus";
import { useCart } from "@/context/CartProvider";

function ShoppingButtons() {
	const { itemCount, handleIncrement, handleDecrement, setUpdateCart } =
		useCart();

	const handleCartUpdate = () => {
		setUpdateCart(true);
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
			<button
				onClick={handleCartUpdate}
				className={styles.shoppingButtons__cartButton}
			>
				<ShoppingButton
					$backgroundColor="var(--primary-orange)"
					$justifyContent="center"
				>
					<IconShoppingCart color="var(--primary-text-black)" />
					Add to Cart
				</ShoppingButton>
			</button>
		</div>
	);
}

export default ShoppingButtons;
