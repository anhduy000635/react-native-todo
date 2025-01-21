import { processFontFamily } from "expo-font";
import { Text, View, StyleSheet, Button } from "react-native";
import { OPENSANS_REGULAR } from "../../utils/const";
import { NavigationProp, useNavigation } from "@react-navigation/native";

const styles = StyleSheet.create({
  review: {
    fontSize: 30,
    fontFamily: OPENSANS_REGULAR,
  },
});
const DetailScreen = () => {
  const navigation: NavigationProp<RootStackParamList> = useNavigation();
  return (
    <View>
      <Text style={styles.review}>Detail Screen google</Text>
      <Button title="GoHome" onPress={() => navigation.navigate("Home")} />
    </View>
  );
};

export default DetailScreen;
