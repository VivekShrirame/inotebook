// import React from "react";
import { useState } from "react";
import noteContext from "./noteContext";

const NoteState = (props) => {
  const notesInitial = [
    {
      _id: "644298f506c66ca5f347debb",
      user: "64426fce27c612e6b57e9c34",
      title: "Resolution 2023",
      description: "Get Job",
      tag: "Personal",
      date: "2023-04-21T14:08:53.702Z",
      __v: 0,
    },
    {
      _id: "644ccca0a7e3d94fdc0377d3",
      user: "64426fce27c612e6b57e9c34",
      title: "New Note",
      description: "Frontend",
      tag: "youtube",
      date: "2023-04-29T07:52:00.222Z",
      __v: 0,
    },

    {
      _id: "644ccca0a7e34d94fdc0377d3",
      user: "64426fce27c612e6b57e9c34",
      title: "New Note",
      description: "Frontend",
      tag: "youtube",
      date: "2023-04-29T07:52:00.222Z",
      __v: 0,
    },
    {
      _id: "644ccca0a74e3d94fdc0377d3",
      user: "64426fce27c612e6b57e9c34",
      title: "New Note",
      description: "Frontend",
      tag: "youtube",
      date: "2023-04-29T07:52:00.222Z",
      __v: 0,
    },
  ];
  const [notes, setNotes] = useState(notesInitial);
  return (
    <noteContext.Provider value={{ notes, setNotes }}>
      {props.children}
    </noteContext.Provider>
  );
};

export default NoteState;
