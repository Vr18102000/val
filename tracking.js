// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA6HQ9tIuO61U2iHHcr1wjH2N3V5R6aHxM",
  authDomain: "valentine-tracker.firebaseapp.com",
  projectId: "valentine-tracker",
  storageBucket: "valentine-tracker.firebasestorage.app",
  messagingSenderId: "748029057519",
  appId: "1:748029057519:web:5bd07514618f4b761d7e1a"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();