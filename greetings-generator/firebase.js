const firebaseConfig = {
  apiKey: "AIzaSyCNBTuR4LMMeM4Vr8CQ70ceSyvnGST1T8I",
  authDomain: "greetings-generator-d90a5.firebaseapp.com",
  projectId: "greetings-generator-d90a5",
  storageBucket: "greetings-generator-d90a5.firebasestorage.app",
  messagingSenderId: "374119188992",
  appId: "1:374119188992:web:a5bb163b83a1c4a8eda6e5",
  measurementId: "G-PPG1VQS367",
};
firebase.initializeApp(firebaseConfig);
window.db = firebase.firestore();
