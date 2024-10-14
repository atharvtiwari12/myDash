import { initializeApp } from "firebase/app";
import {
  getAuth,
  setPersistence,
  browserLocalPersistence,
} from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCJR1rMTFwmLlp5B06NPOAA4yOcaTQrcw4",
  authDomain: "mydashboard-proj.firebaseapp.com",
  projectId: "mydashboard-proj",
  storageBucket: "mydashboard-proj.appspot.com",
  messagingSenderId: "180735014974",
  appId: "1:180735014974:web:81d10586f51e2a364f796f",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

setPersistence(auth, browserLocalPersistence)
  .then(() => {
    console.log("Persistence set to local");
  })
  .catch((error) => {
    console.error("Error setting persistence:", error);
  });

const db = getFirestore(app);

export { auth, db };
export default app;
