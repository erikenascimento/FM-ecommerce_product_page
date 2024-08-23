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
import ShoppingButton from "@/components/ShoppingButton";
// Data
import productData from "@/data/productData.json";

const discountedPrice =
	productData.product.pricing.fullPrice *
	productData.product.pricing.discountRate;

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
	let totalCost = (itemCount * discountedPrice).toFixed(2);

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
						maxWidth: "360px",
						minHeight: "256px",
						width: "96vw",
						// Positioning
						position: "absolute",
						top: "80px",
						margin: "0",
						// Form
						borderRadius: "10px",
						// Styling
						boxShadow: "0px 20px 50px -20px rgba(29, 32, 38, 0.5)",

						// Media query for larger screens
						"@media (min-width: 1440px)": {
							top: "94px",
							right: "90px",
						},
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
								color: "var(--secondary-text-grey)",
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
								<figure className={styles.productThumb} />
								<article>
									<h3 className="applySecondaryTextGrey">
										{productData.product.title}
									</h3>
									<div className="flex gap-4">
										<span className="applySecondaryTextGrey">
											${discountedPrice.toFixed(2)} x {itemCount}
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
