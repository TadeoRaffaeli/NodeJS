import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAMzUEhQZR-J7uUDkfCGhLAFOhgNtp6lxQ",
  authDomain: "gymhacks-d82d4.firebaseapp.com",
  projectId: "gymhacks-d82d4",
  storageBucket: "gymhacks-d82d4.appspot.com",
  messagingSenderId: "79065912206",
  appId: "1:79065912206:web:bb6e867ffc1c6ff2b50adf"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);