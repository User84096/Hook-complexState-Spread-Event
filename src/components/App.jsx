import React, { useState } from "react";

function App() {
  const [inputText, setInputText] = useState("");
  const [nextItem, setNextItem] = useState([]);

  function addItem(event) {
    const newItem = event.target.value;
    setInputText(newItem);
  }

  function updateList(prevValue) {
    setNextItem((prevValue) => {
      return [...prevValue, inputText];
    });
    setInputText("");
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input type="text" onChange={addItem} value={inputText} />
        <button onClick={updateList} value={nextItem}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {nextItem.map((mappedItem) => (
            <li>{mappedItem}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
