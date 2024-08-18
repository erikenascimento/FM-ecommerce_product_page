// Custom hook to handle automatic looping of a function at a specified interval.

import { useEffect, useRef } from "react";

/**
 * Custom hook to handle automatic looping of a function at a specified interval.
 *
 * @param callback - The function to be called at each interval.
 * @param intervalTime - The time in milliseconds between each call.
 */

const useAutoLoop = (callback: () => void, interval: number) => {
	const intervalRef = useRef<NodeJS.Timeout | null>(null);

	useEffect(() => {
		// Set up the interval to call the provided callback function repeatedly.
		intervalRef.current = setInterval(callback, interval);

		// Clean up the interval when the component unmounts or interval changes.
		return () => {
			if (intervalRef.current) {
				clearInterval(intervalRef.current);
			}
		};
	}, [callback, interval]); // Dependencies array: re-run effect if callback or intervalTime changes
};

export default useAutoLoop;
