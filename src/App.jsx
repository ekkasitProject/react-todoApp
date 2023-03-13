import { useState } from "react";
import "./App.css";
import { v4 as uuidv4 } from "uuid";

const startNote = {
  content: "",
  author: "",
};

const App = () => {
  const [note, setNote] = useState(startNote);
  const [allNote, setAllNote] = useState([]);

  //  onChange={onNoteValueChange}
  const onNoteValueChange = (event) => {
    const { name, value } = event.target;
    setNote((prevNote) => {
      return {
        ...prevNote,
        // name="content" value={note.content}
        // name="author" value={note.author}
        [name]: value,
      };
    });
  };
  // รับข้อมูลมาจาก form onSubmit={onNoteSubmit}
  const onNoteSubmit = (event) => {
    // ป้องกันการรีเฟรชหน้าจอ
    event.preventDefault();
    setAllNote((prevAllNote) => {
      return [...prevAllNote, note, uuidv4()];
    });
    // เคลียร์ค่าเริ่มต้น
    setNote(startNote);
  };
  // Show Elements
  const noteElements = allNote.map((theNote) => {
    return (
      <div key={uuidv4()}>
        <p>{theNote.content}</p>
        <h5>{theNote.author}</h5>
      </div>
    );
  });
  return (
    <div className="app">
      <h1>To Do List</h1>
      <form onSubmit={onNoteSubmit}>
        <p>
          <textarea
            rows={3}
            placeholder="ป้อนข้อความ"
            name="content"
            value={note.content}
            onChange={onNoteValueChange}
          />
        </p>
        <p>
          <input
            type="text"
            placeholder="ลงชื่อ"
            name="author"
            value={note.author}
            onChange={onNoteValueChange}
          />
        </p>
        <p>
          <button type="submit">เพิ่ม</button>
        </p>
      </form>
      <div>{noteElements}</div>
    </div>
  );
};

export default App;
