// Firebase configuration
const firebaseConfig = {
    apiKey: "YOUR_API_KEY",
    authDomain: "YOUR_AUTH_DOMAIN",
    projectId: "YOUR_PROJECT_ID",
    storageBucket: "YOUR_STORAGE_BUCKET",
    messagingSenderId: "YOUR_SENDER_ID",
    appId: "YOUR_APP_ID"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  const db = firebase.firestore();
  
  // Track page visits
  function trackPageVisit(pageName) {
    db.collection('pageVisits').add({
      page: pageName,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      duration: 0 // Will update later
    });
  }
  
  // Track time spent on page
  let startTime = Date.now();
  window.addEventListener('beforeunload', () => {
    const duration = Math.floor((Date.now() - startTime) / 1000); // In seconds
    db.collection('pageVisits').add({
      page: window.location.pathname,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      duration: duration
    });
  });