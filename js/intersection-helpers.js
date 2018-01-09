const thresholds = (steps = 20.0) => {
	const thresholds = [];

	for (let i = 1.0; i <= steps; i++) {
		thresholds.push(i / steps);
	}

	thresholds.push(0);
	return thresholds;
};

export const compressRange = (opts) => {
	const { oldMax, oldMin, newMax, newMin, value } = Object.assign({
		oldMax: 1,
		oldMin: 0.5,
		newMax: 1,
		newMin: 0,
		value: 1
	}, opts);

	return Math.min(1, Math.max(0, (value - oldMin) * (newMax - newMin) / (oldMax - oldMin) + newMin));
};

export const createObserver = (element, callback) => {
	const options = {
		root: null,
		rootMargin: `0px 0px 0px 0px`,
		threshold: thresholds(100.0)
	};

	const observer = new IntersectionObserver(callback, options);
	observer.observe(element);

	return observer;
};