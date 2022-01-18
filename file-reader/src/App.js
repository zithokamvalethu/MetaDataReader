import React, { useState } from "react";
import "./App.css";

function App() {
  const [markedFile, setMarkedFile] = useState({
    name: "",
    type: "",
    size: "",
    blob: "",
  });

  const handleFileInput = (e) => {
    const file = e.target.files[0];
    setMarkedFile({
      name: file.name,
      type: file.type,
      size: file.size,
      blob: file.blob,
      
    });
    console.log(file);
  };
  return (
    <form>
      <div id="container">
        <label>Attach File</label>
        <input id="file" type="file" multiple onChange={handleFileInput} />
        <p>{markedFile.name} </p>
        <br />
        <p>{markedFile.type} </p>
        <br />
        <p>{markedFile.size} </p>
        <br />
        <p>{markedFile.blob} </p>
      </div>
    </form>
  );
}

export default App;
