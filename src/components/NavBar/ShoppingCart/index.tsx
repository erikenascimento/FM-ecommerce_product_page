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
import { Box, Divider } from "@mui/material";
import { useCart } from "@/context/CartProvider";
// CSS
import styles from "./ShoppingCart.module.scss";
import IconTrashBin from "@/components/icons/IconTrashBin";
import { wrap } from "module";
import ShoppingButton from "@/components/ShoppingButton";

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
	let totalCost = (itemCount * 125).toFixed(2);

	const handleClickOpen = () => {
		setOpen(true);
	};

	const handleClose = () => {
		setOpen(false);
	};

	return (
		<>
			{itemCount > 0 && (
				<span className="position: relative bottom-3 left-12 w-6 h-4 rounded-md bg-orange-600 text-white font-bold text-center z-10">
					{itemCount}
				</span>
			)}
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
					{/* The line bellow will make so that the component inside it will only render when the cart is empty */}
					{itemCount === 0 ? (
						<DialogContentText
							id="alert-dialog-slide-description"
							sx={{
								// Typography
								fontFamily: "'Kumbh sans', sans-serif",
								fontWeight: "bold",
							}}
						>
							Your cart is empty.
						</DialogContentText>
					) : (
						<section className="flex flex-wrap gap-y-6">
							<Box
								sx={{
									display: "flex",
									gap: "1rem",
									width: "100%}",
								}}
							>
								<span className={styles.productThumb} />
								<article>
									<h3 className="applySecondaryTextGrey">
										Fall Limited Edition Sneakers
									</h3>
									<div className="flex gap-4">
										<span className="applySecondaryTextGrey">
											$125.00 x {itemCount}
										</span>
										<span className="font-bold">${totalCost}</span>
									</div>
								</article>
								<IconTrashBin />
							</Box>
							<ShoppingButton
								$backgroundColor="var(--primary-orange)"
								$justifyContent="center"
							>
								Checkout
							</ShoppingButton>
						</section>
					)}
				</DialogContent>
				<DialogActions>{/* There were buttons here */}</DialogActions>
			</Dialog>
		</>
	);
}
