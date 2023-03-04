import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import HalamanDepan from "./screens/HalamanDepan";
import HalamanMateri from "./screens/HalamanMateri";
import HalamanKuis from "./screens/HalamanKuis";

// Variable untuk navigasi stack
const Stack = createStackNavigator();

export default function App() {
  return (
    <>
      {/* Mengubah status bar menjadi putih */}
      <StatusBar style="light" backgroundColor="#404656" />

      {/* Navigasi Antar Halaman */}
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Home"
          screenOptions={{ headerShown: false }}
        >
          <Stack.Screen name="Home" component={HalamanDepan} />
          <Stack.Screen name="Materi" component={HalamanMateri} />
          <Stack.Screen name="Kuis" component={HalamanKuis} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}
