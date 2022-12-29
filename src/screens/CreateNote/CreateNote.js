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

export default function CreateNote({ navigation, AppState }) {
  const { allNotes, setAllNotes } = AppState;
  const [noteTitle, setNoteTitle] = useState("");
  const [noteText, setNoteText] = useState("");
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
          >
            {/* {note.noteTitle} */}
          </TextInput>
          <TextInput
            style={styles.noteText}
            placeholder={"Note Text"}
            value={noteText}
            onChangeText={setNoteText}
            multiline={true}
          >
            {/* {note.noteText} */}
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
    paddingTop: 20,
    paddingBottom: 200,
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
  },
});
