import React, { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
function CreateArea({ onAdd }) {
  const [note, setNote] = useState({
    title: "",
    content: "",
  });
  const [isExpanded, setExpanded] = useState(false);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setNote((prevValue) => {
      return {
        ...prevValue,
        [name]: value,
      };
    });
  };
  const handleSubmit = (e) => {
    onAdd(note);
    setNote({
      title: "",
      content: "",
    });
    e.preventDefault();
  };
  const handleExpanded = () => {
    setExpanded(true);
  };
  console.log(note, "notes");
  return (
    <div>
      <form>
        {isExpanded && (
          <input
            value={note.title}
            type="text"
            placeholder="Title"
            name="title"
            onChange={handleChange}
          />
        )}
        <p>
          <textarea
            name="content"
            value={note.content}
            onClick={handleExpanded}
            onChange={handleChange}
            rows={isExpanded ? 3 : 1}
            placeholder="Write your note here..."
          ></textarea>
        </p>
        <button onClick={handleSubmit}>
          <AddIcon />
        </button>
      </form>
    </div>
  );
}

export default CreateArea;
