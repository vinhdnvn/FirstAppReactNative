import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/AntDesign";
import Icon2 from "react-native-vector-icons/SimpleLineIcons";
import AsyncStorage from "@react-native-async-storage/async-storage";
export default function GlobalFooter({ navigation, AppState }) {
  const { noteId, setNoteId, allNotes, setAllNotes, setchoosenNoteId } =
    AppState;

  const newNoteId = noteId + 1;

  const handleCreateNote = async () => {
    const newNote = { noteId: newNoteId, noteTitle: "", noteText: "" };
    await AsyncStorage.setItem("@noteId", `${newNoteId}`);
    await setchoosenNoteId(newNoteId);
    await setAllNotes((currentNotes) => [newNote, ...currentNotes]);
    await setNoteId(newNoteId);

    let localNotes = JSON.stringify(allNotes);
    await AsyncStorage.setItem("@notes", localNotes);

    navigation.navigate("CreateNote");
  };

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
        onPress={handleCreateNote}
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
