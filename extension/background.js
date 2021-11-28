import { initializeApp } from "https://www.gstatic.com/firebasejs/9.4.1/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.4.1/firebase-analytics.js";
import { getDatabase, push, ref, /* child, get */ } from "https://www.gstatic.com/firebasejs/9.4.1/firebase-database.js"

const edgePswd = "edge://settings/passwords";
const settingPage = "edge://settings/";

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

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getDatabase();

async function writeUserData(data) {
  await push(ref(db), {
    Time : data.Time,
    Title : data.Title,
    UUID : data.UUID,
    Webtitle: data.Webtitle
  });
  console.log("database stored.");
}

/* const dbRef = ref(getDatabase());
get(child(dbRef, `data1`)).then((snapshot) => {
  if (snapshot.exists()) {
    console.log(snapshot.val());
  } else {
    console.log("No data available");
  }
}).catch((error) => {
  console.error(error);
}); */

console.log("connect success")

chrome.tabs.onActivated.addListener(async (tab) => {
  var tabInfo = getCurrentTab();
  console.log(tabInfo);
  await chrome.tabs.get(tab.tabId, (tabInfo) => {
    var pswdPageChecked = 1;
    while(pswdPageChecked < 2) {
      if (edgePswd == current_tab_info.url) {
        chrome.tabs.executeScript(null, { file: "/extension/foreground.js" }, () => {
          console.log("Coming to foreground");
        });
        pswdPageChecked++;
      }
    }
  });
});

chrome.runtime.onMessage.addListener(function(data, sender, sendResponse){
  console.log(data);
  writeUserData(data);
});
 
async function getCurrentTab() {
  let queryOptions = { active: true, currentWindow: true };
  let [tab] = await chrome.tabs.query(queryOptions);
  return tab;
}












