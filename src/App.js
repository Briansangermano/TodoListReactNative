import React, { useState, useEffect } from "react";
import LinearGradient from "react-native-linear-gradient";

import {
  Keyboard,
  StyleSheet,
  Text,
  View,
} from "react-native";

export default function App() {
  const [tasks, setTasks] = useState([]);

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
    const taskToModify = newTasks[taskIndex];
    if (taskToModify.checked) {
      newTasks[taskIndex].checked = false;
    } else {
      newTasks[taskIndex].checked = true;
    }
    setTasks(newTasks);
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
});
