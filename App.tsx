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
    if (!todo) return;
    setListTodo([...listTodo, { id: randomTodo(1, 100), name: todo }]);
    setTodo("");
  };
  return (
    <View style={styles.container}>
      {/* Header */}
      <Text style={styles.header}>Todo APP</Text>

      {/* Form */}
      <View style={styles.body}>
        <TextInput
          value={todo}
          style={styles.todoInput}
          onChangeText={(value) => setTodo(value)}
        />
        <Button title="Add" onPress={handleAddTodo} />
      </View>
      {/* List Todo */}
      <View style={styles.body}>
        <FlatList
          data={listTodo}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => {
            return <Text style={styles.todoItem}>{item.name}</Text>;
          }}
        />
      </View>
    </View>
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
