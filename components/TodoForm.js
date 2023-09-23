import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  Alert,
  StyleSheet,
} from "react-native";
import TodoItem from "./TodoItem";
import { useState } from "react";
import AddTodo from "./AddTodo";

const TodoForm = () => {
  const [todo, setTodo] = useState([
    {
      id: 1,
      text: "One coffee buy",
    },
    {
      id: 2,
      text: "Two coffee buy",
    },
    {
      id: 3,
      text: "Three coffee buy",
    },
  ]);

  const pressHandler = (key) => {
    setTodo((prev) => {
      return prev.filter((item) => item.id !== key);
    });
  };

  const addTodoList = (newTodo) => {
    if (newTodo.length > 3) {
      setTodo((prevTodo) => {
        return [{ id: prevTodo.length + 1, text: newTodo }, ...prevTodo];
      });
    } else {
      Alert.alert("OOPS!", "Todos must be length 3 ", [
        {
          text: "Ask me later",
          onPress: () => console.log("Ask me later pressed"),
        },
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel",
        },
      ]);
    }
  };

  return (
    <View>
      <AddTodo submitHandler={addTodoList} />
      <FlatList
        key={(todo) => todo.id}
        data={todo}
        renderItem={({ item }) => (
          <TodoItem item={item} pressHandler={pressHandler} />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({});

export default TodoForm;
