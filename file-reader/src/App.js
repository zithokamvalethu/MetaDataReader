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
      blob: file.type,
      
    });
    console.log(file);
  };
  return (
    <form>
      <div id="container">
        <label>Attach File</label>
        <input id="file" type="file" multiple onChange={handleFileInput} />
        <br />
        <label>File name
        </label><br/><p>{markedFile.name} </p>
        <br />
        File Type <p>{markedFile.type} </p>
        <br />
        File Size:<p>{markedFile.size} </p>
        <br />
        Blob <p>{markedFile.blob} </p>
      </div>
    </form>
  );
}

export default App;
