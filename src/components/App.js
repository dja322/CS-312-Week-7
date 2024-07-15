import React, {useState} from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

//combines all components into app function to be rendered in root
function App() {
  const [noteArray, setNotesArray] = useState([]);

  //adds note when add button is clicked
  function addNote(newNote) {
    setNotesArray(prevNotes => {
      return [...prevNotes, newNote];
    });
  }

  //deletes note with corresponding id
  function deleteNote(id) {
    setNotesArray(prevNotes => {
      return prevNotes.filter((noteItem, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div>
      <Header />
      <CreateArea onAdd={addNote} />

      {noteArray.map((noteItem,index) => (
        <Note
          id={index}
          title={noteItem.title}
          content={noteItem.content}
          onDelete={deleteNote}
        />
      ))}
      <Footer />
    </div>
  );
}

export default App;
