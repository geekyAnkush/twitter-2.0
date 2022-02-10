import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyD2PFP5aaoUqIf7GDkwN7phjXcaKGs3Lys",
  authDomain: "twitterclone-4c5bc.firebaseapp.com",
  projectId: "twitterclone-4c5bc",
  storageBucket: "twitterclone-4c5bc.appspot.com",
  messagingSenderId: "629770046196",
  appId: "1:629770046196:web:86b50a5c0d516c3c286ca1"
}
// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();

export default app;
export { db, storage };