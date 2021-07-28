import React, { useState, useEffect } from "react";
import LinearGradient from "react-native-linear-gradient";
import TaskInputField from "./components/TaskInputField";
import TaskItem from "./components/TaskItem";
import AsyncStorage from "@react-native-community/async-storage";
import { Keyboard, StyleSheet, Text, View, FlatList } from "react-native";

export default function App() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    (async () => {
      AsyncStorage.getItem("tasks")
        .then(
          (localStoragetodos) =>
            localStoragetodos && setTasks(JSON.parse(localStoragetodos))
        )
        .catch((error) => new Error(error));
    })();
  }, []);

  useEffect(() => {
    (async () => {
      AsyncStorage.setItem("tasks", JSON.stringify(tasks)).catch(
        (error) => new Error(error)
      );
    })();
  }, [tasks]);

  const addTask = (task) => {
    if (task == null) return;
    setTasks([
      ...tasks,
      {
        id: tasks.length + 1,
        name: task,
        checked: false,
      },
    ]);
    Keyboard.dismiss();
  };

  const checkTask = (taskIndex) => {
    const newTasks = [...tasks];
    const taskToModify = newTasks[taskIndex]
    newTasks[taskIndex].checked = !newTasks[taskIndex].checked
    setTasks(newTasks)
  };

  const deleteTask = (deleteIndex) => {
    setTasks(tasks.filter((value, index) => index != deleteIndex));
  };

  return (
    <View style={styles.container}>
      <LinearGradient
        colors={["#4C669F", "#3B5998", "#192F6A"]}
        style={styles.linearGradient}
      >
        <View style={styles.headingContainer}>
          <Text style={styles.heading}>TODO LIST {tasks.length}</Text>
        </View>
        <FlatList
          horizontal={false}
          data={tasks}
          renderItem={({ item, index }) => (
            <View key={item.id} style={styles.taskContainer}>
              <TaskItem
                index={index + 1}
                task={item}
                checkTask={() => checkTask(index)}
                deleteTask={() => deleteTask(index)}
              />
            </View>
          )}
          keyExtractor={(item, index) => item.id.toString()}
        />
        <TaskInputField addTask={addTask} />
      </LinearGradient>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  linearGradient: {
    flex: 1,
  },
  headingContainer: {
    alignItems: "center",
  },
  heading: {
    color: "#FFFFFF",
    fontSize: 25,
    fontWeight: "700",
    marginTop: 50,
    marginBottom: 10,
  },
  taskContainer: {
    marginTop: 20,
  },
});
