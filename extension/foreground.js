// Important: enable the following flag: edge://flags/#extensions-on-edge-urls

var pswdBtns = [];
let hrefLists = [];
var userLists = [];
var data = {};
var i;

function readUUID(){
    var navigator_info = window.navigator;
    var screen_info = window.screen;
    var uid = navigator_info.mimeTypes.length;
    uid += navigator_info.userAgent.replace(/\D+/g, '');
    uid += navigator_info.plugins.length;
    uid += screen_info.height || '';
    uid += screen_info.width || '';
    uid += screen_info.pixelDepth || '';
    // console.log(uid);
    return uid;
}

function passwordProtected(pointerList){

    const date = new Date();
    const uid = readUUID();

    alert("You are in dangerous on \'"+ pointerList.title + "\' row = " + pointerList.id.slice(20));
    // console.log("You have been hacked in ", pswdBtn.title, "at", pswdBtn.id, "when", date, "on", uid);
    data = {
        "Webtitle": pointerList.href,
        "Title": pointerList.title,
        "Time": date.toString(),
        "UUID": uid
    }
    console.log(data)
    // module.exports = { data };
}

/* console.log("Password button list = ", pswdBtns); */

//This function made for collect each id in passwordShowPasswordButton
for(i = 0; i<=pswdBtns.length; i++){
    if(document.querySelector("#passwordShowPasswordButton_"+ i) == null){
        console.log("This is your limit!!");
    }
    else{
        hrefLists[i] = document.querySelector("#passwordWebsitelink_"+ i);
        pswdBtns[i] = document.querySelector("#passwordShowPasswordButton_"+ i);
        // pswdBtns[i].addEventListener('click', passwordProtected(hrefLists[i].href, hrefLists[i].title));
        pswdBtns[i].addEventListener('click', passwordProtected.bind(pswdBtns[i], hrefLists[i]));
        // console.log(pswdBtns[i].id); /* passwordButton VARCHAR(60) */
        // console.log(pswdBtns[i]);
        // console.log(i);
    }
    console.log(hrefLists[i].title); /* Title VARCHAR(30) */
    console.log(hrefLists[i].href); /* Website VARCHAR(50) */
}

// function writeUserData(dataId, time, title, uuid, webtitle) {
//     const db = getDatabase();
//     set(ref(db, dataId), {
//       Time : time,
//       Title : title,
//       UUID : uuid,
//       Webtitle: webtitle
//     });
//     console.log("writed")
//   }
// if (typeof oak === 'undefined') {
//     var oak = document.getElementById("passwordShowPasswordButton_0");
//     oak = oak.parentElement.parentElement.childNodes;
//     oak = element.shadowRoot;
//     console.log(oak)
//     console.log("create new oak var");
// } 
// else {
//     oak = document.getElementById("passwordShowPasswordButton_0");
//     oak = oak.parentElement.parentElement.childNodes;
//     // oak = element.shadowRoot;
//     console.log("reuse oak var");
// }

// for (var i = 0; i < oak.length; i++) {
//     if(oak[i].getAttribute("data-cellid") == "uniqueKey") {
//         var loginLink = oak[i].childNodes[0].getAttribute("href");
//         console.log(i+" "+loginLink);
//         console.log(oak.length);
//     }
// }
