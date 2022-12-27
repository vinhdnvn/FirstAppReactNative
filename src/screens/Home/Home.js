import React, {
  useState,
  useEffect,
} from "react";
import {
  StyleSheet,
  Text,
  View,
} from "react-native";

export default function Home() {
  return (
    <View style={styles.screen}>
      <Text style={styles.oneFourth}>
        Hello World!
      </Text>
      <Text style={styles.oneFourth}>
        Hello World!
      </Text>
      <Text style={styles.oneFourth}>
        Hello World!
      </Text>
      <Text style={styles.oneFourth}>
        Hello World!
      </Text>
      <Text style={styles.oneFourth}>
        Hello World!
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  oneFourth: {
    flex: 1,
    width: "100%",
    borderWidth: 2,
  },
});
