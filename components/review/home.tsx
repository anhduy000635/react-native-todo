import { useState } from "react";
import { Text, View, Button, StyleSheet, FlatList } from "react-native";
import { OPENSANS_REGULAR } from "../../utils/const";
import { TouchableOpacity } from "react-native";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import AppHeader from "../navigation/app.header";
const styles = StyleSheet.create({
  review: {
    fontSize: 30,
    // fontFamily: OPENSANS_REGULAR,
    padding: 10,
  },
  reviewItem: {
    padding: 15,
    backgroundColor: "#ccc",
    fontSize: 30,
    margin: 10,
    // fontFamily: OPENSANS_REGULAR,
  },
});
interface IReview {
  id: number;
  title: string;
  rating: number;
}
const HomeScreen = (props: any) => {
  const navigation: NavigationProp<RootStackParamList> = useNavigation();
  const [reviews, setReviews] = useState<IReview[]>([
    {
      id: 1,
      title: "Nguyen Anh Duy",
      rating: 5,
    },
    {
      id: 2,
      title: "AAAAAAAAAAAAA",
      rating: 5,
    },
  ]);
  return (
    <View>
      <Text style={styles.review}>Review list:</Text>
      <View>
        <FlatList
          data={reviews}
          keyExtractor={(item) => item.id + ""}
          renderItem={({ item }) => (
            <TouchableOpacity
              onPress={() => navigation.navigate("Details", item)}
            >
              <View style={styles.reviewItem}>
                <Text>{item.title}</Text>
              </View>
            </TouchableOpacity>
          )}
        />
      </View>
    </View>
  );
};

export default HomeScreen;
