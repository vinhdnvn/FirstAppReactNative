import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  TextInput,
  Button,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import GlobalFooter from "../../Footers/GlobalFooter";
import GlobalHeader from "../../Headers/GlobalHeader";

export default function CreateNote({ navigation, AppState }) {
  const { choosenNoteId, allNotes, setAllNotes } = AppState;
  const [noteTitle, setNoteTitle] = useState("");
  const [noteText, setNoteText] = useState("");
  let allNotesCopy = allNotes;

  let objIndex = allNotes.findIndex((obj) => obj.noteId == choosenNoteId);
  console.log("Chosen note update: ", allNotes[objIndex]);

  useEffect(() => {
    handleUpdate();
  });

  const handleUpdate = async () => {
    console.log("Before update: ", allNotes[objIndex]);
    allNotesCopy[objIndex].noteTitle = noteTitle;
    allNotesCopy[objIndex].noteText = noteText;
    console.log("After update: ", allNotesCopy[objIndex]);

    await setAllNotes(allNotesCopy);
    let localNotes = JSON.stringify(allNotes);
    await AsyncStorage.setItem("@notes", localNotes);
  };

  return (
    <View style={styles.screen}>
      <GlobalHeader navigation={navigation} />

      <View style={styles.body}>
        <ScrollView contentContainerStyle={styles.scrollViewCont}>
          <TextInput
            style={styles.noteTitle}
            placeholder={"Note Title"}
            value={noteTitle}
            onChangeText={setNoteTitle}
          ></TextInput>
          <TextInput
            style={styles.noteText}
            placeholder={"Note Text"}
            value={noteText}
            onChangeText={setNoteText}
            multiline={true}
          ></TextInput>
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
    paddingLeft: "5%",
    paddingRight: "5%",
  },

  button: {
    margin: 20,
    padding: 20,
    borderWidth: 2,
    borderColor: "cyan",
  },
  scrollViewCont: {
    height: "100%",
    paddingTop: 20,
  },
  noteTitle: {
    fontFamily: "OpenSans_700Bold",
    fontSize: 22,
    fontWeight: "300",
  },
  noteText: {
    fontFamily: "OpenSans_400Regular",
    marginTop: 20,
    fontSize: 15,
    color: "black",
  },
  saveButtonCont: {
    flex: 1,
    width: "100%",
    paddingLeft: "5%",
    paddingRight: "5%",
    marginTop: 10,
  },
  saveButton: {
    backgroundColor: "#519872",
    padding: 15,
    alignItems: "center",
    borderRadius: 8,
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
  saveButtonText: {
    fontFamily: "OpenSans_700Bold",
    color: "#fff",
    fontSize: 16,
  },
});
