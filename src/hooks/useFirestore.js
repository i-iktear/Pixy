import { useEffect, useState } from "react";
import { ProjectDatabase } from "../firebase/config";

const useFirestore = (collection) => {
  const [docs, setDocs] = useState([]);
  useEffect(() => {
    const unSub = ProjectDatabase.collection(collection)
      .orderBy("createdAt", "desc")
      .onSnapshot((snap) => {
        let document = [];
        snap.forEach((doc) => {
          document.push({ ...doc.data(), id: doc.id });
        });
        setDocs(document);
      });

    return () => unSub();
  }, [collection]);
  return { docs };
};

export default useFirestore;
