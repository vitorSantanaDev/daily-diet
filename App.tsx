import { StatusBar, ActivityIndicator } from "react-native";

import { ThemeProvider } from "styled-components";

import {
	useFonts,
	NunitoSans_700Bold,
	NunitoSans_400Regular,
} from "@expo-google-fonts/nunito-sans";

import { Routes } from "@routes/index";
import theme from "@theme/index";
import { SafeAreaProvider } from "react-native-safe-area-context";

export default function App() {
	const [fontsLoaded] = useFonts({ NunitoSans_400Regular, NunitoSans_700Bold });

	return (
		<ThemeProvider theme={theme}>
			<StatusBar
				translucent
				barStyle="dark-content"
				backgroundColor="transparent"
			/>
			<SafeAreaProvider>
				{fontsLoaded ? <Routes /> : <ActivityIndicator />}
			</SafeAreaProvider>
		</ThemeProvider>
	);
}
