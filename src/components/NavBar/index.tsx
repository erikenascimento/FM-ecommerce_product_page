import AvatarRound from "../AvatarRound";
import IconShoppingCart from "../icons/IconShoppingCart";
import Logo from "../Logo";
import HamburguerMENU from "./HamburguerMENU";

import styles from "./NavBar.module.scss";

const NavBar = () => {
	return (
		<nav className={styles.navBar}>
			<div className={styles["navBar__navDiv"]}>
				<HamburguerMENU />
				<Logo />
			</div>
			<div className={styles["navBar__navDiv"]}>
				<IconShoppingCart />
				<AvatarRound />
			</div>
		</nav>
	);
};

export default NavBar;
