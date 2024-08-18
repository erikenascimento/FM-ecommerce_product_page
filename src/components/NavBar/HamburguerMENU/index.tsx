// CSS
import styles from "./HamburguerMENU.module.css";
// MUI Drawer imports
import React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";

const HamburguerMENU = () => {
	const [open, setOpen] = React.useState(false);

	const toggleDrawer = (newOpen: boolean) => () => {
		setOpen(newOpen);
	};

	const DrawerList = (
		<Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)}>
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
			<Button onClick={toggleDrawer(true)}>
				<span className={styles.hamburguerMENU} />
			</Button>
			<Drawer open={open} onClose={toggleDrawer(false)}>
				{DrawerList}
			</Drawer>
		</div>
	);
};

export default HamburguerMENU;
