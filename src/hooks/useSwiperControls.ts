// Custom hook to handle the functionality of previous and next buttons in a swiper.

import { useCallback } from "react";

/**
 * @param setCurrentImageIndex - State setter function to update the current image index.
 * @param imageCount - Total number of images in the swiper.
 *
 * @returns An object containing functions to handle previous and next button clicks.
 */
const useSwiperControls = (
	setCurrentImageIndex: React.Dispatch<React.SetStateAction<number>>,
	productImagesLength: number
) => {
	/**
	 * Handle click event for the previous button.
	 * Moves to the previous image, or loops back to the last image if on the first one.
	 */
	const handlePreviousClick = useCallback(() => {
		setCurrentImageIndex(prevIndex =>
			prevIndex === 0 ? productImagesLength - 1 : prevIndex - 1
		);
	}, [setCurrentImageIndex, productImagesLength]);

	/**
	 * Handle click event for the next button.
	 * Moves to the next image, or loops back to the first image if on the last one.
	 */
	const handleNextClick = useCallback(() => {
		setCurrentImageIndex(prevIndex =>
			prevIndex === productImagesLength - 1 ? 0 : prevIndex + 1
		);
	}, [setCurrentImageIndex, productImagesLength]);

	return { handlePreviousClick, handleNextClick };
};

export default useSwiperControls;
