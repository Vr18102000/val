const firebaseConfig = {
  apiKey: "AIzaSyA6HQ9tIuO61U2iHHcr1wjH2N3V5R6aHxM",
  authDomain: "valentine-tracker.firebaseapp.com",
  projectId: "valentine-tracker",
  storageBucket: "valentine-tracker.firebasestorage.app",
  messagingSenderId: "748029057519",
  appId: "1:748029057519:web:5bd07514618f4b761d7e1a"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

// Function to track page visits
function trackPageVisit(pageName) {
  db.collection('pageVisits').add({
    page: pageName,
    timestamp: firebase.firestore.FieldValue.serverTimestamp()
  }).then(() => {
    console.log(`Visited ${pageName}`);
  });
}

// Function to log time spent on a page
function logTimeSpent(pageName) {
  const endTime = Date.now();
  const timeSpent = Math.floor((endTime - startTime) / 1000); // In seconds

  db.collection('pageVisits').add({
    page: pageName,
    timeSpent: timeSpent,
    timestamp: firebase.firestore.FieldValue.serverTimestamp()
  }).then(() => {
    console.log(`Time spent on ${pageName}: ${timeSpent} seconds`);
  });
}