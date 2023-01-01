import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import Constants from "expo-constants";

import GlobalFooter from "../../Footers/GlobalFooter";
import GlobalHeader from "../../Headers/GlobalHeader";

export default function AllNotes({ navigation, AppState }) {
  const { allNotes, setNote } = AppState;
  useEffect(() => {
    console.log("useEffect triggered");
  });
  const handlePress = (element) => {
    setNote(element);
    navigation.navigate("Note");
  };

  return (
    <View style={styles.screen}>
      <GlobalHeader navigation={navigation} />

      <View style={styles.body}>
        <ScrollView contentContainerStyle={styles.scrollViewCont}>
          {allNotes.map((e, i) => {
            return (
              <TouchableOpacity
                key={i}
                onPress={() => handlePress(e)}
                style={styles.noteCont}
              >
                <Text style={styles.noteTitle} numberOfLines={1}>
                  {e.noteTitle}
                </Text>
                <Text style={styles.noteText} numberOfLines={1}>
                  {e.noteText}
                </Text>
              </TouchableOpacity>
            );
          })}
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
    paddingTop: 20,
    paddingLeft: "2.5%",
    paddingRight: "2.5%",
    paddingBottom: 20,
  },

  noteCont: {
    marginTop: 0,
    marginBottom: 15,
    padding: 20,
    backgroundColor: "#fff",
    borderColor: "black",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    borderRadius: 8,
    elevation: 5,
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
