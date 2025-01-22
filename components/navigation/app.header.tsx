import { StyleSheet, Text, View } from "react-native";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { globalStyles } from "../../utils/const";
import { useNavigation } from "@react-navigation/native";

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    // justifyContent: "space-between",
    backgroundColor: "#ccc",
    paddingHorizontal: 5,
    paddingVertical: 10,
    alignItems: "center",
  },
  headerText: {
    flex: 1,
    marginLeft: 0,
    fontSize: 30,
    fontWeight: "600",
    textAlign: "center",
  },
});
const AppHeader = () => {
  const navigation: any = useNavigation();
  return (
    <View style={styles.container}>
      <MaterialIcons
        name="menu"
        size={40}
        color="black"
        onPress={() => navigation.openDrawer()}
      />
      <Text style={[styles.headerText, globalStyles.globalFont]}>Header</Text>
    </View>
  );
};
export default AppHeader;
