import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { Home } from "@screens/Home";

import { RoutesName } from "./routes-name";

const { Navigator, Screen } = createNativeStackNavigator();

export function AppRoutes() {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name={RoutesName.HOME} component={Home} />
    </Navigator>
  );
}
