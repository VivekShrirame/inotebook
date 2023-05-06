// import React from "react";
import { useState } from "react";
import noteContext from "./noteContext";
// import { json } from "react-router-dom";

const NoteState = (props) => {
  const host = "http://localhost:5000";
  const notesInitial = [];
  const [notes, setNotes] = useState(notesInitial);
  //  Get all Note
  const getNotes = async () => {
    // API call
    const response = await fetch(`${host}/api/notes/fetchallnotes`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjQ0MjZmY2UyN2M2MTJlNmI1N2U5YzM0In0sImlhdCI6MTY4MjA3NjAyOX0.GufZZpo3f9Et0JSh1IwaRkpCcaLIUouncanrPnFZO90",
      },
    });
    const json = await response.json();
    setNotes(json);
  };

  //  Add a Note
  const addNote = async (title, description, tag) => {
    // TODO: API Call
    // API call
    const response = await fetch(`${host}/api/notes/addnote/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjQ0MjZmY2UyN2M2MTJlNmI1N2U5YzM0In0sImlhdCI6MTY4MjA3NjAyOX0.GufZZpo3f9Et0JSh1IwaRkpCcaLIUouncanrPnFZO90",
      },
      body: JSON.stringify({ title, description, tag }),
    });

    const json = response.json();
    console.log(json);

    console.log("Adding a new note");
    const note = {
      _id: "644298f506c66ca5f347edebb",
      user: "64426fce27c612e6b57e9c3c4",
      title: title,
      description: description,
      tag: tag,
      date: "2023-04-21T14:08:53.702Z",
      __v: 0,
    };
    setNotes(notes.concat(note));
  };

  //  Delete a Note
  const deleteNote = async (id) => {
    // TODO: API Call
    const response = await fetch(`${host}/api/notes/deletenote/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjQ0MjZmY2UyN2M2MTJlNmI1N2U5YzM0In0sImlhdCI6MTY4MjA3NjAyOX0.GufZZpo3f9Et0JSh1IwaRkpCcaLIUouncanrPnFZO90",
      },
    });

    const json = response.json();
    console.log(json);

    console.log("Deleting the note with id" + id);
    const newNotes = notes.filter((note) => {
      return note._id !== id;
    });

    setNotes(newNotes);
  };

  //  Update a Note
  const editNote = async (id, title, description, tag) => {
    // TODO: API Call
    // API call
    const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjQ0MjZmY2UyN2M2MTJlNmI1N2U5YzM0In0sImlhdCI6MTY4MjA3NjAyOX0.GufZZpo3f9Et0JSh1IwaRkpCcaLIUouncanrPnFZO90",
      },
      body: JSON.stringify({ title, description, tag }),
    });
    const json = await response.json();
    console.log(json);

    // Logic to edit in client

    for (let index = 0; index < notes.length; index++) {
      const element = notes[index];
      if (element._id === id) {
        element.title = title;
        element.description = description;
        element.tag = tag;
      }
    }
  };

  return (
    <noteContext.Provider
      value={{ notes, addNote, deleteNote, editNote, getNotes }}
    >
      {props.children}
    </noteContext.Provider>
  );
};

export default NoteState;
