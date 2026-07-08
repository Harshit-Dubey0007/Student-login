import { initializeApp } from "https://www.gstatic.com/firebasejs/12.1.0/firebase-app.js";

import { getFirestore } from "https://www.gstatic.com/firebasejs/12.1.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyCaSum-MRp6eWVxaK2sGGRZBVAIIDesTA0",
  authDomain: "student-login-49bc8.firebaseapp.com",
  projectId: "student-login-49bc8",
  storageBucket: "student-login-49bc8.firebasestorage.app",
  messagingSenderId: "411454234875",
  appId: "1:411454234875:web:b402a24f86a8dd1d5c505e",
  measurementId: "G-W400983Q16"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export { db };
