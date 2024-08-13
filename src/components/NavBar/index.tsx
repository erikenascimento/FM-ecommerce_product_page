import AvatarRound from "../AvatarRound";
import Logo from "../Logo";
import HamburgerMENU from "./HamburgerMENU";
import ShoppingCartIcon from "./ShoppingCartIcon";

const NavBar = () => {
	return (
		<nav>
			<HamburgerMENU />
			<Logo />
			<ShoppingCartIcon />
			<AvatarRound />
		</nav>
	);
};

export default NavBar;
