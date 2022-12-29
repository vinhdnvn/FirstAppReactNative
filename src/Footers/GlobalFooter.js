import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/AntDesign";
import Icon2 from "react-native-vector-icons/SimpleLineIcons";

export default function GlobalFooter({ navigation }) {
  return (
    <View style={styles.footerCont}>
      <Icon2
        name="note"
        size={25}
        color="#070707"
        onPress={() => {
          navigation.navigate("AllNotes");
        }}
      />

      <Icon
        name="addfile"
        size={25}
        color="#070707"
        onPress={() => {
          navigation.navigate("CreateNote");
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  footerCont: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    width: "100%",
    borderTopWidth: 0.8,
    borderTopColor: "#C9FAE5",
  },
  text: {
    color: "white",
  },
});
