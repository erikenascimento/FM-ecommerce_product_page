// Custom Components
import AvatarRound from "../AvatarRound";
import Logo from "../Logo";
import HamburguerMENU from "./HamburguerMENU";
import ShoppingCart from "./ShoppingCart";
// Next Components
import Link from "next/link";
// CSS
import styles from "./NavBar.module.scss";
// Data
import navItems from "@/data/navItems.json";

const NavBar = () => {
	return (
		<nav className={styles.navBar}>
			<div className={styles["navBar__navDiv"]}>
				<HamburguerMENU />
				<Logo />
				<ul className={styles.navBar__navDiv__list}>
					{navItems.navItems.map((item, index) => (
						<li key={index}>
							<Link href="#">{item}</Link>
						</li>
					))}
				</ul>
			</div>
			<div className={styles["navBar__navDiv"]}>
				<ShoppingCart />
				<AvatarRound />
			</div>
		</nav>
	);
};

export default NavBar;
