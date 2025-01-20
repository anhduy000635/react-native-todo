import { StyleSheet, View, Text } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1, // Chiếm toàn bộ màn hình
    marginTop: 40,
    borderWidth: 1,
    borderColor: "black",
    flexDirection: "column",
  },
  item1: {
    backgroundColor: "red",
    padding: 30,
    flex: 3,
  },
  item2: {
    backgroundColor: "cyan",
    padding: 30,
    flex: 3,
  },
  item3: {
    backgroundColor: "pink",
    padding: 30,
    flex: 3,
  },
  item4: {
    backgroundColor: "violet",
    padding: 30,
    flex: 3,
  },
});

const FlexBox = () => {
  return (
    <View style={styles.container}>
      <View style={styles.item1}>
        <Text>item1</Text>
      </View>
      <View style={styles.item2}>
        <Text>item2</Text>
      </View>
      <View style={styles.item3}>
        <Text>item3</Text>
      </View>
      <View style={styles.item4}>
        <Text>item4</Text>
      </View>
    </View>
  );
};

export default FlexBox;
