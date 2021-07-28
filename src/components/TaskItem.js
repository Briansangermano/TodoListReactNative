import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

export default TaskItem = ({ checkTask, deleteTask, task }) => {
  const { name, checked } = task

  return (
    <View style={styles.container}>
      <View style={styles.taskContainer}>
        <Text style={styles.task(checked)}>{name}</Text>
      </View>
      <View style={styles.indexContainer}>
        <TouchableOpacity onPress={() => checkTask()}>
          <MaterialIcons
            style={styles.done}
            name="done"
            size={26}
            color="#fff"
          />
        </TouchableOpacity>
      </View>
      <View style={styles.indexContainer}>
        <TouchableOpacity onPress={() => deleteTask()}>
          <MaterialIcons
            style={styles.done}
            name="delete"
            size={26}
            color="#fff"
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    marginHorizontal: 20,
  },
  indexContainer: {
    backgroundColor: "#2F4378",
    borderRadius: 12,
    marginHorizontal: 2,
    alignItems: "center",
    justifyContent: "center",
    width: 50,
    height: 50,
  },
  index: {
    color: "#FFFFFF",
    fontSize: 20,
  },
  taskContainer: {
    backgroundColor: "#2F4378",
    borderRadius: 12,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    flex: 1,
    paddingHorizontal: 20,
    paddingVertical: 5,
    minHeight: 50,
    marginRight: 2,
  },
  task: (checked) => ({
    textDecorationLine: checked ? 'line-through' : 'none',
    color: "#FFFFFF",
    width: "90%",
    fontSize: 16,
  }),
});
