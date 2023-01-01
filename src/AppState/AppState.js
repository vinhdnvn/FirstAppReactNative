import React, { useState, useEffect } from "react";
import AppNavigation from "../AppNavigation/AppNavigation";
import AppLoading from "expo-app-loading";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {
  useFonts,
  FredokaOne_400Regular,
  OpenSans_400Regular,
  OpenSans_500Medium,
  OpenSans_600SemiBold,
  OpenSans_700Bold,
} from "@expo-google-fonts/dev";
export default function AppState() {
  const [noteId, setNoteId] = useState(0);
  const [allNotes, setAllNotes] = useState([]);
  const [note, setNote] = useState({});
  const [choosenNoteId, setchoosenNoteId] = useState(0);

  const AppState = {
    noteId,
    setNoteId,
    allNotes,
    setAllNotes,
    note,
    setNote,
    choosenNoteId,
    setchoosenNoteId,
  };
  const [fontsLoaded] = useFonts({
    FredokaOne_400Regular,
    OpenSans_400Regular,
    OpenSans_500Medium,
    OpenSans_600SemiBold,
    OpenSans_700Bold,
  });

  useEffect(() => {
    try {
      const localNoteId = async () => {
        const localNoteIdMain = await AsyncStorage.getItem("@noteId");
        console.log("localNoteId: ", localNoteIdMain);
        if (localNoteIdMain !== null) {
          setNoteId(Number(localNoteIdMain));
        } else {
          await AsyncStorage.setItem("@noteId", "0");
        }
      };
      localNoteId();
      const localNotes = async () => {
        const localNotesMain = await AsyncStorage.getItem("@notes");
        console.log("localNotes: ", localNotesMain);
        if (localNotesMain !== null) {
          setAllNotes(JSON.parse(localNotesMain));
        }
      };
      localNotes();
    } catch (e) {
      console.log(e);
    }
  }, []);

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return <AppNavigation AppState={AppState} />;
  }
}
