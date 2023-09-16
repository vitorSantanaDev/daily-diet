import theme from "@theme/index";
import { StyleSheet, Text, View } from "react-native";

export function Home() {
  return (
    <View style={styles.container}>
      <Text style={{ fontFamily: theme.FONT_FAMILY.REGULAR }}>
        React Native App
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
