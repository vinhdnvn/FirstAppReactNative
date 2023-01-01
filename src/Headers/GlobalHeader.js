import React, { useState, useEffect } from "react";
import Constants from "expo-constants";
import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import Icon2 from "react-native-vector-icons/AntDesign";

export default function GlobalHeader({ navigation }) {
  return (
    <View style={styles.headerCont}>
      <Icon
        name="notes"
        size={35}
        color="#070707"
        onPress={() => {
          navigation.navigate("AllNotes");
        }}
      />

      <Text style={styles.text}>Startup Notes</Text>

      <Icon2
        name="user"
        size={28}
        color="#070707"
        onPress={() => {
          navigation.navigate("AllNotes");
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  headerCont: {
    flex: 1,
    flexDirection: "row",
    paddingLeft: "5%",
    paddingRight: "5%",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    backgroundColor: "#fff",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 7,
    paddingTop: Constants.statusBarHeight,
  },

  text: {
    fontFamily: "FredokaOne_400Regular",
    fontSize: 25,
    color: "#519872",
  },
});
