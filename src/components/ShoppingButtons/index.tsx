import styles from "./ShoppingButtons.module.scss";

import ShoppingButton from "../ShoppingButton";
import IconShoppingCart from "../icons/IconShoppingCart";

function ShoppingButtons() {
	return (
		<div className={styles.shoppingButtons}>
			<ShoppingButton backgroundColor="var(--light-greyish-blue)">
				- 0 +
			</ShoppingButton>
			<ShoppingButton backgroundColor="var(--primary-orange)">
				<IconShoppingCart />
				Add to Cart
			</ShoppingButton>
		</div>
	);
}

export default ShoppingButtons;
