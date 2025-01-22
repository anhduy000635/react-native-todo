import { processFontFamily } from "expo-font";
import { Text, View, StyleSheet, Button, Image } from "react-native";
import { OPENSANS_REGULAR } from "../../utils/const";
import {
  NavigationProp,
  RouteProp,
  useNavigation,
} from "@react-navigation/native";
import { useRoute } from "@react-navigation/native";

import starIcon from "../../assets/images/star.png";
const styles = StyleSheet.create({
  review: {
    fontSize: 30,
    fontFamily: OPENSANS_REGULAR,
  },
  reviewDetail: {
    fontSize: 20,
    fontFamily: OPENSANS_REGULAR,
    padding: 10,
  },
  image: {
    width: 40,
    height: 40,
  },
});
const DetailScreen = () => {
  const navigation: NavigationProp<RootStackParamList> = useNavigation();
  const route: RouteProp<RootStackParamList, "Details"> = useRoute();

  return (
    <View>
      <Text style={styles.reviewDetail}>ID: {route.params?.id}</Text>
      <Text style={styles.reviewDetail}>Title: {route.params?.title}</Text>
      <Text style={styles.reviewDetail}>
        Rating:
        {route.params?.rating}
      </Text>
      <View style={{ flexDirection: "row", gap: 10, marginHorizontal: 10 }}>
        <Image style={styles.image} source={starIcon} />
      </View>
      <Button title="GoHome" onPress={() => navigation.navigate("Home")} />
    </View>
  );
};

export default DetailScreen;
