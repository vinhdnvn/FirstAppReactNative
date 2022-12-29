import React, { useState, useEffect } from "react";
import AppNavigation from "../AppNavigation/AppNavigation";
import AppLoading from "expo-app-loading";
import {
  useFonts,
  FredokaOne_400Regular,
  OpenSans_400Regular,
  OpenSans_500Medium,
  OpenSans_600SemiBold,
  OpenSans_700Bold,
} from "@expo-google-fonts/dev";
export default function AppState() {
  const [allNotes, setAllNotes] = useState([
    {
      noteID: 1,
      noteTitle: "First Idea",
      noteText: "This is my first startup idea",
    },
    {
      noteID: 2,
      noteTitle: "Second Idea",
      noteText:
        "Xin chào mọi người tôi tên là Nguyễn Văn Thành Vinh năm nay tôi là sinh viên năm 2 trường Đại học Công Nghệ Thongo Tin và Truyền thông thành phố Đà Nẵng",
    },
    {
      noteID: 2,
      noteTitle: "Second Idea",
      noteText: "This is my second Idea",
    },
    {
      noteID: 2,
      noteTitle: "Second Idea",
      noteText: "This is my second Idea",
    },
    {
      noteID: 2,
      noteTitle: "Second Idea",
      noteText: "This is my second Idea",
    },
    {
      noteID: 2,
      noteTitle: "Second Idea",
      noteText: "This is my second Idea",
    },
    {
      noteID: 2,
      noteTitle: "Second Idea",
      noteText: "This is my second Idea",
    },
    {
      noteID: 2,
      noteTitle: "Second Idea",
      noteText: "This is my second Idea",
    },
    {
      noteID: 2,
      noteTitle: "Second Idea",
      noteText: "This is my second Idea",
    },
    {
      noteID: 2,
      noteTitle: "Second Idea",
      noteText: "This is my second Idea",
    },
  ]);
  const [note, setNote] = useState({});

  const AppState = {
    allNotes,
    setAllNotes,
    note,
    setNote,
  };
  const [fontsLoaded] = useFonts({
    FredokaOne_400Regular,
    OpenSans_400Regular,
    OpenSans_500Medium,
    OpenSans_600SemiBold,
    OpenSans_700Bold,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return <AppNavigation AppState={AppState} />;
  }
}
