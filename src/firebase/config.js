import firebase from "firebase";
import "firebase/storage";
import "firebase/firestore";
// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyCVYki8g5nWNjyQ62FSJQIwCi7-j7yIQyg",
  authDomain: "pixy-1e29f.firebaseapp.com",
  projectId: "pixy-1e29f",
  storageBucket: "pixy-1e29f.appspot.com",
  messagingSenderId: "372507827075",
  appId: "1:372507827075:web:97f466e65ae420dbb974b6",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const ProjectStorage = firebase.storage();
const ProjectDatabase = firebase.firestore();
const timeStamp = firebase.firestore.FieldValue.serverTimestamp;

export { ProjectStorage, ProjectDatabase, timeStamp };
