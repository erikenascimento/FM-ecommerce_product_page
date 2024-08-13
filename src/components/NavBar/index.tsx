import AvatarRound from "../AvatarRound";
import Logo from "../Logo";
import HamburgerMENU from "./HamburgerMENU";
import ShoppingCartIcon from "./ShoppingCartIcon";

const NavBar = () => {
	return (
		<nav className="flex space-between w-screen">
			<div className="flex">
				<HamburgerMENU />
				<Logo />
			</div>
			<div className="flex">
				<ShoppingCartIcon />
				<AvatarRound />
			</div>
		</nav>
	);
};

export default NavBar;
