import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { Children } from "react";
import {
  Button,
  FlatList,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";

export default function App() {
  const [student, setStudent] = useState([
    { id: 1, name: "Duy", age: 20 },
    { id: 2, name: "Huy", age: 20 },
    { id: 3, name: "Nam", age: 20 },
    { id: 4, name: "Anh", age: 20 },
    { id: 5, name: "Thanh", age: 20 },
    { id: 6, name: "Dat", age: 20 },
    { id: 7, name: "Quang", age: 20 },
    { id: 8, name: "Minh", age: 20 },
    { id: 9, name: "Thanh", age: 20 },
    { id: 10, name: "Hieu", age: 20 },
  ]);

  // const [count, setCount] = useState<number>(0);
  // const [name, setName] = useState<string>('');
  // const [age, setAge] = useState<number>();
  return (
    <View style={styles.container}>
      <Text style={styles.hello}>Hello World</Text>
      <FlatList
        data={student}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => {
          return (
            <View style={styles.setScrollView}>
              <Text>{item.name}</Text>
            </View>
          );
        }}
      />

      {/* Text,input, button
      <View >
        <ScrollView >
          {student.map((item) => {
            return (
              <View key = {item.id} style={styles.setScrollView}>
                <Text>{item.name}</Text>
              </View>
            )
          })}
        </ScrollView>
       </View>
      <StatusBar style="auto" /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40,
    paddingHorizontal: 20,
    backgroundColor: "#fff",
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  setScrollView: {
    fontSize: 100,
    borderColor: "green",
    borderWidth: 1,
    marginBottom: 30,
    padding: 50,
    backgroundColor: "pink",
  },
  // hello: {
  //   color: "red",
  //   fontSize: 20,
  //   fontWeight: "bold",
  //   padding: 10,
  // },
  // parent: {
  //   color: "blue",
  //   fontSize: 40,
  // },
  // children: {
  //   color: "green",
  //   fontSize: 20,
  // },
  // setButton: {
  //   borderBottomEndRadius: 10,
  // },
  // setTextInput1: {
  //   fontSize: 30,
  // },
  // setTextInput2: {
  //   fontSize: 30,
  //   borderColor: "green",
  //   borderWidth: 2,
  // },
});
