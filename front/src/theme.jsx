import { css } from "styled-components";

export const sizes = {
	xxLarge: 1440,
	xLarge: 1200,
	large: 1024,
	normal: 974,
	small: 768,
	xSmall: 576,
	xxSmall: 350,
};

const mediaMax = Object.keys(sizes).reduce((acc, label) => {
	acc[label] = (...args) => css`
		@media (max-width: ${(sizes[label] - 1) / 16}em) {
			${css(...args)}
		}
	`;
	return acc;
}, {});
const mediaMin = Object.keys(sizes).reduce((acc, label) => {
	acc[label] = (...args) => css`
		@media (min-width: ${sizes[label] / 16}em) {
			${css(...args)}
		}
	`;
	return acc;
}, {});

export default {
	blue: "#737DC2",
	orange: "#FF6B35",
	beige: "#EBE9EC",
	violet: "#A7ADDB",
	mediaMax,
	mediaMin,
};
