// CSS
import styles from "./HamburguerMENU.module.scss";
// MUI Drawer imports
import React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
// Still MUI but outside the default imports
import CloseIcon from "@mui/icons-material/Close";
import { IconButton } from "@mui/material";

const HamburguerMENU = () => {
	const [open, setOpen] = React.useState(false);

	const toggleDrawer = (newOpen: boolean) => () => {
		setOpen(newOpen);
	};

	const DrawerList = (
		<Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)}>
			<Box
				sx={{
					padding: "1rem",
					margin: "1rem 0 2rem 0",
					display: "flex",
					justifyContent: "flex-start",
					color: "var(--secondary-text-grey)",
					width: "14px",
					height: "14px",
				}}
			>
				<IconButton onClick={toggleDrawer(false)} aria-label="close drawer">
					<CloseIcon />
				</IconButton>
			</Box>
			<List>
				{["Collections", "Men", "Women", "About", "Contact"].map(text => (
					<ListItem key={text} disablePadding>
						<ListItemButton>
							<ListItemText
								primary={text}
								classes={{ primary: styles.muiDrawerItem }}
							/>
						</ListItemButton>
					</ListItem>
				))}
			</List>
		</Box>
	);

	return (
		<div>
			<Button
				onClick={toggleDrawer(true)}
				sx={{ padding: "0px", minWidth: "auto" }}
			>
				<span className={styles.hamburguerMENU} />
			</Button>
			<Drawer open={open} onClose={toggleDrawer(false)}>
				{DrawerList}
			</Drawer>
		</div>
	);
};

export default HamburguerMENU;
