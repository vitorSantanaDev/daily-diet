import { Dimensions, PixelRatio } from "react-native";

/**
 * @description It receives as a parameter a value that will be defined for the width, height, padding, margin and font of elements in the interface.
 * @returns Returns a number dynamically based on device size
 * @summary
 * This method performs a calculation
 * based on the width of the UI prototype. Seeking
 * first to know how many percent the pixel value received as
 * a parameter represents the size of the UI prototype.
 * After that we use the roundToNearestPixel method, to round the device width multiplied by parseFloat(widthUIPercent) / 100.
 * **/
const pixel = (valuePx: number) => {
	const prototypeWidth = 375;

	const widthPercent = (valuePx / prototypeWidth) * 100;

	const { width } = Dimensions.get("window");

	const screenPixel = PixelRatio.roundToNearestPixel(
		(width * parseFloat(String(widthPercent))) / 100
	);

	return screenPixel;
};

export default {
	COLORS: {
		WHITE: "#FFFFFF",

		GREEN_DARK: "#639339",
		GREEN_MID: "#CBE4B4",
		GREEN_LIGHT: "#E5F0DB",

		RED_LIGHT: "#F4E6E7",
		RED_DARK: "#BF3B44",
		RED_MID: "#F3BABD",

		GRAY_700: "#1B1D1E",
		GRAY_600: "#333638",
		GRAY_500: "#5C6265",
		GRAY_400: "#B9BBBC",
		GRAY_300: "#DDDEDF",
		GRAY_200: "#EFF0F0",
		GRAY_100: "#FAFAFA",
	},
	FONT_FAMILY: {
		REGULAR: "NunitoSans_400Regular",
		BOLD: "NunitoSans_700Bold",
		LINE_HEIGHT: "130%",
	},
	FONT_SIZE: {
		XSM: 12,
		SM: 14,
		MD: 16,
		LG: 18,
		XL: 24,
		HG: 32,
	},
	LINE_HEIGHT: "130%",
	BORDER_RADIUS: {
		CARD: 8,
		BUTTON: 6,
	},
	METRICS: { pixel },
};
