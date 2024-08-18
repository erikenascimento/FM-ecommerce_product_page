import { useEffect, useRef } from "react";

const useAutoLoop = (callback: () => void, interval: number) => {
	const intervalRef = useRef<NodeJS.Timeout | null>(null);

	useEffect(() => {
		intervalRef.current = setInterval(callback, interval);

		return () => {
			if (intervalRef.current) {
				clearInterval(intervalRef.current);
			}
		};
	}, [callback, interval]);
};

export default useAutoLoop;
