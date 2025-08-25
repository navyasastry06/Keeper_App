import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";
import { useState } from "react";

function App() {
  const [Notes, setNotes] = useState([]);

  function addNote(inputNote) {
    console.log(inputNote);
    setNotes((prevNote) => {
      return [...prevNote, inputNote];
    });
  }

  function deleteNote(id) {
    setNotes((prevNote) => {
      return prevNote.filter((Notes, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div>
      <Header />
      <CreateArea onAdd={addNote} />
      {Notes.map((noteItem, index) => {
        return (
          <Note
            key={index}
            id={index}
            title={noteItem.title}
            content={noteItem.content}
            onDelete={deleteNote}
          />
        );
      })}

      <Footer />
    </div>
  );
}

export default App;
