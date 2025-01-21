import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import HomeScreen from "../review/home";
import DetailScreen from "../review/detail";
import AboutScreen from "../review/about";

const Stack = createNativeStackNavigator();

function HomeLayout() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home1"
        component={HomeScreen}
        options={{ title: "Trang chủ" }}
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
      <Drawer.Navigator>
        <Drawer.Screen
          name="Home"
          component={HomeLayout}
          options={{ title: "Trang chủ" }}
        />
        <Drawer.Screen
          name="About"
          component={AboutScreen}
          options={{ title: "Thông tin chi tiết" }}
        />
      </Drawer.Navigator>
    </>
  );
};
export default AppNavigation;
