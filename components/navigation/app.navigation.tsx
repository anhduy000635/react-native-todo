import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import HomeScreen from "../review/home";
import DetailScreen from "../review/detail";
import AboutScreen from "../review/about";
import AppHeader from "./app.header";

const Stack = createNativeStackNavigator();

function HomeLayout() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{ header: () => <AppHeader /> }}
      />

      <Stack.Screen
        name="Details"
        component={DetailScreen}
        options={{ title: "Thông tin " }}
      />
    </Stack.Navigator>
  );
}

const AppNavigation = () => {
  const Drawer = createDrawerNavigator();

  return (
    <>
      <Drawer.Navigator
      //   screenOptions={{ headerShown: false }}
      >
        <Drawer.Screen
          name="Home1"
          component={HomeLayout}
          options={{ title: "Trang chủ", header: () => <></> }}
        />
        <Drawer.Screen
          name="About"
          component={AboutScreen}
          options={{ title: "Thông tin chi tiết", header: () => <AppHeader /> }}
        />
      </Drawer.Navigator>
    </>
  );
};
export default AppNavigation;
