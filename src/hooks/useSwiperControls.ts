import { useCallback } from "react";

const useSwiperControls = (
	setCurrentImageIndex: React.Dispatch<React.SetStateAction<number>>,
	productImagesLength: number
) => {
	const handlePreviousClick = useCallback(() => {
		setCurrentImageIndex(prevIndex =>
			prevIndex === 0 ? productImagesLength - 1 : prevIndex - 1
		);
	}, [setCurrentImageIndex, productImagesLength]);

	const handleNextClick = useCallback(() => {
		setCurrentImageIndex(prevIndex =>
			prevIndex === productImagesLength - 1 ? 0 : prevIndex + 1
		);
	}, [setCurrentImageIndex, productImagesLength]);

	return { handlePreviousClick, handleNextClick };
};

export default useSwiperControls;
