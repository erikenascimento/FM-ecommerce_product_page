import { createContext, useContext, useState, ReactNode } from "react";

// Define the context type
interface CartContextType {
	itemCount: number;
	handleIncrement: () => void;
	handleDecrement: () => void;
	updateCart: boolean;
	setUpdateCart: (value: boolean) => void;
}

// Create the context with default values
const CartContext = createContext<CartContextType | undefined>(undefined);

// Provider component
export function CartProvider({ children }: { children: ReactNode }) {
	const [itemCount, setItemCount] = useState(0);
	const [updateCart, setUpdateCart] = useState(false);

	const handleIncrement = () => setItemCount(prevCount => prevCount + 1);
	const handleDecrement = () =>
		setItemCount(prevCount => (prevCount > 0 ? prevCount - 1 : 0));

	return (
		<CartContext.Provider
			value={{
				itemCount,
				handleIncrement,
				handleDecrement,
				updateCart,
				setUpdateCart,
			}}
		>
			{children}
		</CartContext.Provider>
	);
}

// Custom hook to use the CartContext
export function useCart() {
	const context = useContext(CartContext);
	if (!context) {
		throw new Error("useCart must be used within a CartProvider");
	}
	return context;
}
