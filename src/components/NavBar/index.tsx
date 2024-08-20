import AvatarRound from "../AvatarRound";
import Logo from "../Logo";
import HamburguerMENU from "./HamburguerMENU";

import styles from "./NavBar.module.scss";
import ShoppingCart from "./ShoppingCart";

const NavBar = () => {
	return (
		<nav className={styles.navBar}>
			<div className={styles["navBar__navDiv"]}>
				<HamburguerMENU />
				<Logo />
			</div>
			<div className={styles["navBar__navDiv"]}>
				<ShoppingCart />
				<AvatarRound />
			</div>
		</nav>
	);
};

export default NavBar;
