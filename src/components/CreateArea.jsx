import React, { useState } from "react";

function CreateArea(props) {
  const [inputNote, setNoteText] = useState({
    title: "",
    content: "",
  });

  function handleChange(event) {
    const { name, value } = event.target;
    setNoteText((prevNote) => ({
      ...prevNote,
      [name]: value,
    }));
  }

  function add(event) {
    event.preventDefault(); // prevent page refresh
    props.onAdd(inputNote); // send note object to App
    setNoteText({ title: "", content: "" }); // clear input fields
  }

  return (
    <div>
      <form>
        <input
          name="title"
          placeholder="Title"
          value={inputNote.title}
          onChange={handleChange}
        />
        <textarea
          name="content"
          placeholder="Take a note..."
          rows="3"
          value={inputNote.content}
          onChange={handleChange}
        />
        <button onClick={add}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
