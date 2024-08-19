import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Slide from "@mui/material/Slide";
import { TransitionProps } from "@mui/material/transitions";
import IconShoppingCart from "@/components/icons/IconShoppingCart";
import { Divider } from "@mui/material";
import { useCart } from "@/context/CartProvider";

const Transition = React.forwardRef(function Transition(
	props: TransitionProps & {
		children: React.ReactElement<any, any>;
	},
	ref: React.Ref<unknown>
) {
	return <Slide direction="down" ref={ref} {...props} />;
});

export default function ShoppingCart() {
	const [open, setOpen] = React.useState(false);

	const { itemCount } = useCart();

	const handleClickOpen = () => {
		setOpen(true);
	};

	const handleClose = () => {
		setOpen(false);
	};

	return (
		<>
			<Button onClick={handleClickOpen} sx={{ padding: "0", minWidth: "0px" }}>
				<IconShoppingCart />
			</Button>
			<Dialog
				open={open}
				TransitionComponent={Transition}
				keepMounted
				onClose={handleClose}
				aria-describedby="alert-dialog-slide-description"
				BackdropProps={{
					style: { backgroundColor: "transparent" }, // Removes the dark tint
				}}
				PaperProps={{
					sx: {
						// Dimensioning
						maxWidth: "none",
						minHeight: "256px",
						width: "96vw",
						// Positioning
						position: "absolute",
						top: "80px",
						margin: "0",
						// Form
						borderRadius: "10px",
					},
				}}
			>
				<DialogTitle
					sx={{
						// Typography
						fontFamily: "'Kumbh sans', sans-serif",
						fontSize: "16px",
						fontWeight: "bold",
					}}
				>
					{"Cart"}
				</DialogTitle>
				<Divider />
				<DialogContent
					sx={{
						// Flex
						display: "flex",
						alignItems: "center",
						justifyContent: "center",
					}}
				>
					<DialogContentText
						id="alert-dialog-slide-description"
						sx={{
							// Typography
							fontFamily: "'Kumbh sans', sans-serif",
							fontWeight: "bold",
						}}
					>
						{/* Your cart is empty. */}
						You cart has: {itemCount} items.
					</DialogContentText>
				</DialogContent>
				<DialogActions>{/* There were buttons here */}</DialogActions>
			</Dialog>
		</>
	);
}
