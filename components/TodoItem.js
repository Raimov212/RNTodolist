import { Text, TouchableOpacity, StyleSheet, View } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

const TodoItem = ({ item, pressHandler }) => {
  return (
    <TouchableOpacity>
      <View style={styles.item}>
        <MaterialIcons name="delete" size={28} color="red" />
        <Text onPress={() => pressHandler(item.id)} style={{ marginLeft: 10 }}>
          {item.text}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  item: {
    borderWidth: 1,
    padding: 16,
    margin: 12,
    borderColor: "#bbb",
    borderStyle: "dashed",
    borderRadius: 10,
    flexDirection: "row",
    alignItems: "center",
  },
});

export default TodoItem;
