import React, {
  useState,
  useEffect,
} from "react";

import AppNavigation from "../AppNavigation/AppNavigation";

export default function AppState() {
  const [allNotes, setAllNotes] = useState([
    {
      noteID: 1,
      noteTitle: "first Idea",
      noteText: "this is my first startup idea",
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
  return <AppNavigation AppState={AppState} />;
}
