import AvatarRound from "../AvatarRound";
import Logo from "../Logo";
import HamburguerMENU from "./HamburguerMENU";
import ShoppingCartIcon from "./ShoppingCartIcon";
import styles from "./NavBar.module.scss";

const NavBar = () => {
	return (
		<nav className={styles.navBar}>
			<div className={styles["navBar__navDiv"]}>
				<HamburguerMENU />
				<Logo />
			</div>
			<div className={styles["navBar__navDiv"]}>
				<ShoppingCartIcon />
				<AvatarRound />
			</div>
		</nav>
	);
};

export default NavBar;
