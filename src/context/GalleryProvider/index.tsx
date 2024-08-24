import { createContext, useContext, useState, ReactNode } from "react";

interface GalleryContextProps {
	isActive: number | null;
	toggleClass: (index: number) => void;
}

const GalleryContext = createContext<GalleryContextProps | undefined>(
	undefined
);

export const GalleryProvider: React.FC<{ children: React.ReactNode }> = ({
	children,
}) => {
	const [isActive, setIsActive] = useState<number | null>(null);

	const toggleClass = (index: number) => {
		setIsActive(index);
	};

	return (
		<GalleryContext.Provider value={{ isActive, toggleClass }}>
			{children}
		</GalleryContext.Provider>
	);
};

export const useGallery = () => {
	const context = useContext(GalleryContext);
	if (!context) {
		throw new Error("useGallery must be used within a GalleryProvider");
	}
	return context;
};
