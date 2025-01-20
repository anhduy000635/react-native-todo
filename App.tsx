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
import AntDesign from "@expo/vector-icons/AntDesign";

export default function App() {
  const [todo, setTodo] = useState("");
  const [listTodo, setListTodo] = useState<ITodo[]>([]);
  interface ITodo {
    id: number;
    name: string;
  }
  function randomTodo(min: number, max: number) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
  const handleAddTodo = () => {
    if (!todo) {
      Alert.alert("Lỗi Input để trống", "Vui lồn nhập", [
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel",
        },
        { text: "OK", onPress: () => console.log("OK Pressed") },
      ]);
    } else {
      setListTodo([...listTodo, { id: randomTodo(1, 100), name: todo }]);
      setTodo("");
    }
  };
  // const handleRemoveTodo = (id: number) => {
  //   const newTodo = listTodo.filter((item) => item.id !== id);
  //   setListTodo(newTodo);
  // };
  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.container}>
        {/* Header */}
        <Text style={styles.header}>Todo APP</Text>

        {/* Form */}
        <View style={styles.form}>
          <TextInput
            value={todo}
            style={styles.todoInput}
            onChangeText={(value) => setTodo(value)}
          />
          <Button title="Add" onPress={handleAddTodo} />
        </View>
        {/* List Todo */}
        <View style={styles.todo}>
          <FlatList
            data={listTodo}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => {
              return (
                <Pressable
                  style={({ pressed }) => ({ opacity: pressed ? 0.5 : 1 })}
                  // onPress={() => handleRemoveTodo(item.id)}
                >
                  <View style={styles.groupTodo}>
                    <Text style={styles.todoItem}>{item.name}</Text>
                    <AntDesign name="delete" size={24} color="black" />
                  </View>
                </Pressable>
              );
            }}
          />
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40,
    paddingBottom: 40,
    paddingHorizontal: 20,
    backgroundColor: "#fff",
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  header: {
    backgroundColor: "orange",
    paddingHorizontal: 20,
    textAlign: "center",
    paddingVertical: 10,
    fontSize: 60,
    flex: 1,
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
  groupTodo: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "green",
    marginBottom: 15,
    justifyContent: "space-between",
    padding: 15,
    marginHorizontal: 10,
  },
  todoItem: {
    fontSize: 20,
  },
  form: {
    flex: 2,
    marginBottom: 20,
  },
  todo: {
    flex: 7,
  },
});
