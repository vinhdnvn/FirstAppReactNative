import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  TextInput,
} from "react-native";
import Constants from "expo-constants";
import GlobalFooter from "../../Footers/GlobalFooter";
import GlobalHeader from "../../Headers/GlobalHeader";

export default function Note({ navigation, AppState }) {
  const { note } = AppState;
  return (
    <View style={styles.screen}>
      <GlobalHeader navigation={navigation} />

      <View style={styles.body}>
        <ScrollView contentContainerStyle={styles.scrollViewCont}>
          <TextInput style={styles.noteTitle} placeholder={"Note Title"}>
            {note.noteTitle}
          </TextInput>
          <TextInput style={styles.noteText} placeholder={"Note Text"}>
            {note.noteText}
          </TextInput>
        </ScrollView>
      </View>
      <GlobalFooter AppState={AppState} navigation={navigation} />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  body: {
    flex: 8,
    width: "100%",
    paddingLeft: "2.5%",
    paddingRight: "2.5%",
  },
  noteTitle: {
    fontFamily: "OpenSans_600SemiBold",
    fontSize: 15,
    fontWeight: "300",
  },
  noteText: {
    fontFamily: "OpenSans_400Regular",
    marginTop: 3,
  },

  scrollViewCont: {
    paddingTop: 20,
    paddingBottom: 200,
  },
});
