import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { Children } from "react";
import {
  Button,
  FlatList,
  ScrollView,
  TouchableWithoutFeedback,
  Alert,
  Keyboard,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import FlexBox from "./components/flex.box";

export default function App() {
  // const [todo, setTodo] = useState("");
  // const [listTodo, setListTodo] = useState<ITodo[]>([]);
  // interface ITodo {
  //   id: number;
  //   name: string;
  // }
  // function randomTodo(min: number, max: number) {
  //   return Math.floor(Math.random() * (max - min + 1) + min);
  // }
  // const handleAddTodo = () => {
  //   if (!todo) {
  //     Alert.alert("Lỗi Input để trống", "Vui lồn nhập", [
  //       {
  //         text: "Cancel",
  //         onPress: () => console.log("Cancel Pressed"),
  //         style: "cancel",
  //       },
  //       { text: "OK", onPress: () => console.log("OK Pressed") },
  //     ]);
  //   } else {
  //     setListTodo([...listTodo, { id: randomTodo(1, 100), name: todo }]);
  //     setTodo("");
  //   }
  // };
  // const handleRemoveTodo = (id: number) => {
  //   const newTodo = listTodo.filter((item) => item.id !== id);
  //   setListTodo(newTodo);
  // };
  return (
    <FlexBox />
    // <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
    //   <View style={styles.container}>
    //     {/* Header */}
    //     <Text style={styles.header}>Todo APP</Text>

    //     {/* Form */}
    //     <View style={styles.body}>
    //       <TextInput
    //         value={todo}
    //         style={styles.todoInput}
    //         onChangeText={(value) => setTodo(value)}
    //       />
    //       <Button title="Add" onPress={handleAddTodo} />
    //     </View>
    //     {/* List Todo */}
    //     <View style={styles.body}>
    //       <FlatList
    //         data={listTodo}
    //         keyExtractor={(item) => item.id.toString()}
    //         renderItem={({ item }) => {
    //           return (
    //             <Pressable
    //               style={({ pressed }) => ({ opacity: pressed ? 0.5 : 1 })}
    //               onPress={() => handleRemoveTodo(item.id)}
    //             >
    //               <Text style={styles.todoItem}>{item.name}</Text>
    //             </Pressable>
    //           );
    //         }}
    //       />
    //     </View>
    //   </View>
    // </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: "orange",
    paddingHorizontal: 20,
    textAlign: "center",
    paddingVertical: 10,
    fontSize: 30,
  },
  container: {
    flex: 1,
    paddingTop: 40,
    paddingHorizontal: 20,
    backgroundColor: "#fff",
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  todoInput: {
    height: 40,
    borderBottomColor: "green",
    borderBottomWidth: 1,
    marginBottom: 10,
    padding: 10,
    marginHorizontal: 30,
    margin: 15,
  },
  body: {
    paddingHorizontal: 10,
    marginBottom: 20,
  },
  todoItem: {
    fontSize: 20,
    marginBottom: 25,
    borderWidth: 1,
    borderColor: "green",
    padding: 10,
  },
});
