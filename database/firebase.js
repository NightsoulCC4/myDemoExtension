 // Import the functions you need from the SDKs you need
 import { initializeApp } from "https://www.gstatic.com/firebasejs/9.4.1/firebase-app.js";
 import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.4.1/firebase-analytics.js";
 import { getDatabase, ref, set, onValue, child, get } from "https://www.gstatic.com/firebasejs/9.4.1/firebase-database.js"
 // TODO: Add SDKs for Firebase products that you want to use
 // https://firebase.google.com/docs/web/setup#available-libraries

 // Your web app's Firebase configuration
 // For Firebase JS SDK v7.20.0 and later, measurementId is optional
 const firebaseConfig = {
   apiKey: "AIzaSyDQf1OQp0Sn_qBhiznI5zFhZ7o1l1zbRzI",
   authDomain: "gazeguard-a4d92.firebaseapp.com",
   databaseURL: "https://gazeguard-a4d92-default-rtdb.asia-southeast1.firebasedatabase.app/",
   projectId: "gazeguard-a4d92",
   storageBucket: "gazeguard-a4d92.appspot.com",
   messagingSenderId: "204843954742",
   appId: "1:204843954742:web:dc752050f318438a615e97",
   measurementId: "G-9M6E3SKQGJ"
 };

 // Initialize Firebase
 const app = initializeApp(firebaseConfig);
 const analytics = getAnalytics(app);
 const db = getDatabase();

 console.log("connect success")

 export async function writeUserData(dataId, time, title, uuid, webtitle) {
  const db = getDatabase();
  set(ref(db, dataId), {
    Time : time,
    Title : title,
    UUID : uuid,
    Webtitle: webtitle
  });
  console.log("writed")
}

const dbRef = ref(getDatabase());
get(child(dbRef, `data1`)).then((snapshot) => {
  if (snapshot.exists()) {
    console.log(snapshot.val());
  } else {
    console.log("No data available");
  }
}).catch((error) => {
  console.error(error);
});
