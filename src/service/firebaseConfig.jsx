
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCCNUZXe2UxlXwBmeEN6T6j_IsDXoG0vuk",
  authDomain: "movie-streaming-29c54.firebaseapp.com",
  databaseURL: "https://movie-streaming-29c54-default-rtdb.firebaseio.com",
  projectId: "movie-streaming-29c54",
  storageBucket: "movie-streaming-29c54.firebasestorage.app",
  messagingSenderId: "192644544192",
  appId: "1:192644544192:web:a83c95498da41d8c5d1f25",
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
