import { useEffect, useState } from "react";
import { ProjectStorage, ProjectDatabase, timeStamp } from "../firebase/config";

const useStorage = (file) => {
  const [progress, setProgress] = useState(0);
  const [error, setError] = useState(null);
  const [url, setUrl] = useState(null);

  useEffect(() => {
    const storageRef = ProjectStorage.ref(file.name);

    const databaseRef = ProjectDatabase.collection("images");

    storageRef.put(file).on(
      "stateChanged",
      (snap) => {
        let percentage = (snap.bytesTransferred / snap.totalBytes) * 100;
        setProgress(percentage);
      },
      (err) => {
        setError(err);
      },
      async () => {
        const url = await storageRef.getDownloadURL();
        const createdAt = timeStamp();
        setUrl(url);
        databaseRef.add({ url, createdAt });
      }
    );
  }, [file]);

  return { progress, url, error };
};

export default useStorage;
