import { useState } from "react";
import { View, StyleSheet, TextInput, Button } from "react-native";

const AddTodo = ({ submitHandler }) => {
  const [text, setText] = useState("");

  const changeHandler = (val) => {
    setText(val);
  };

  return (
    <View>
      <TextInput
        placeholder="New Todo"
        onChangeText={changeHandler}
        style={styles.textInput}
      />
      <Button
        color="coral"
        onPress={() => submitHandler(text)}
        title="Add Todo"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  textInput: {
    marginBottom: 10,
    paddingHorizontal: 10,
    borderWidth: 0.5,
    borderRadius: 5,
  },
});

export default AddTodo;
