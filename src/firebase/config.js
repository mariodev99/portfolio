import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBuowq1Cxd8YERmR9N5-m47WTVGiLNA_bg",
  authDomain: "mariodev-f885e.firebaseapp.com",
  projectId: "mariodev-f885e",
  storageBucket: "mariodev-f885e.appspot.com",
  messagingSenderId: "991772318577",
  appId: "1:991772318577:web:97f2572097f55b540a74d0",
};

const app = initializeApp(firebaseConfig);
export const firestore = getFirestore(app);
