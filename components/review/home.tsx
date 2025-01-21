import { Text, View, Button, StyleSheet } from "react-native";
import { OPENSANS_REGULAR } from "../../utils/const";
const styles = StyleSheet.create({
  review: {
    fontSize: 30,
    fontFamily: OPENSANS_REGULAR,
  },
});
const HomeScreen = (props: any) => {
  const { navigation } = props;
  return (
    <View>
      <Text style={styles.review}>Home Screen</Text>
      <Button title="About" onPress={() => navigation.navigate("Details")} />
    </View>
  );
};

export default HomeScreen;
