const firebaseConfig = {
  apiKey: "AIzaSyAG_qpCtplNVL46qnki00-M0DB0qmz1VxI",
  authDomain: "fiverr-webapp-1.firebaseapp.com",
  databaseURL: "https://fiverr-webapp-1-default-rtdb.firebaseio.com",
  projectId: "fiverr-webapp-1",
  storageBucket: "fiverr-webapp-1.firebasestorage.app",
  messagingSenderId: "388298148795",
  appId: "1:388298148795:web:4590899a3dd7277712129e"
};

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const database = firebase.database();

auth.signInAnonymously()
  .then(() => {
    console.log("Firebase Anonymous Login: SUCCESS");

    return database.ref("connectionTest").set({
      status: "connected",
      time: new Date().toISOString()
    });
  })
  .then(() => {
    console.log("Realtime Database: SUCCESS");
  })
  .catch((error) => {
    console.error("Firebase Error:", error);
  });
