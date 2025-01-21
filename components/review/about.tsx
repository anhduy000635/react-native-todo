import { StyleSheet, Text, View } from "react-native";
import { globalStyles } from "../../utils/const";

const styles = StyleSheet.create({
  about: {
    fontSize: 30,
  },
  about1: {
    fontSize: 20,
    padding: 20,
  },
});

const AboutScreen = () => {
  return (
    <View>
      <Text style={[styles.about, globalStyles.globalFont]}>
        About Review APP
      </Text>
      <Text style={[styles.about1]}>Nguyen Anh Duy</Text>
    </View>
  );
};

export default AboutScreen;
