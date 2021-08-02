import React, { useState } from "react";
import ProgressBar from "./ProgressBar";

const UploadForm = () => {
  const [file, setFile] = useState(null);
  const [error, setEroor] = useState(null);
  const type = ["image/png", "image/jpeg", "image/jpg"];

  const handleChange = (e) => {
    const selected = e.target.files[0];

    if (selected && type.includes(selected.type)) {
      setFile(selected);
      setEroor(null);
    } else {
      setFile(null);
      setEroor(`Please Select an Image file( png/ jpg )`);
    }
  };

  return (
    <form>
      <label>
        <input type="file" onChange={handleChange} />
        <span>+ </span>
      </label>
      <div className="output">
        {error && <div className="error"> {error} </div>}
        {file && <div className="file"> {file.name} </div>}
        {file && <ProgressBar file={file} setFile={setFile} />}
      </div>
    </form>
  );
};

export default UploadForm;
