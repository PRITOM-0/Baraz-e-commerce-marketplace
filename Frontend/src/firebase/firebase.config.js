import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyA-7w6uV-MQ-GRy6aANwEDNzPEMDZ6KxN0",
  authDomain: "baraz-89626.firebaseapp.com",
  projectId: "baraz-89626",
  storageBucket: "baraz-89626.firebasestorage.app",
  messagingSenderId: "522301958652",
  appId: "1:522301958652:web:3f4672f11ee0204ba6ea79",
  measurementId: "G-9J118TQ018",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;