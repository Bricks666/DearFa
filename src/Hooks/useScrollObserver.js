import { useEffect, useRef } from "react";

export const useScrollObserver = (
	callback,
	childRef,
	parentRef,
	additionCondition = true
) => {
	const observer = useRef();

	useEffect(() => {
		const option = {
			root: parentRef.current,
			rootMargin: "0px",
			threshold: 0,
		};
		const child = childRef.current;

		observer.current = new IntersectionObserver(([observable]) => {
			console.log("CALLBACK MAY WILL BE CALLED");
			if (observable.isIntersecting && additionCondition) {
				console.log("CALL SUBSCRIBER");
				callback();
			}
		}, option);

		observer.current.observe(child);

		return () => {
			observer.current.unobserve(child);
		};
	}, [callback, additionCondition, parentRef, childRef]);
};
