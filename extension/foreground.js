// Important: enable the following flag: edge://flags/#extensions-on-edge-urls

console.log("foreground.js injected");

var pswdBtns = [];
let hrefLists = [];
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
    return uid;
}

async function passwordProtected(pointerList){
    const date = new Date();
    const uid = readUUID();

    alert("You are in dangerous on \'"+ pointerList.title + "\' row = " + pointerList.id.slice(20));
    data = {
        "Webtitle": pointerList.href,
        "Title": pointerList.title,
        "Time": date.toString(),
        "UUID": uid
    }
    console.log("foreground = ", data);
    chrome.runtime.sendMessage(data);
}

console.log("Start loop")
//This function made for collect each id in passwordShowPasswordButton
for(i = 0; i<=pswdBtns.length; i++){
    if(document.querySelector("#passwordShowPasswordButton_"+ i) == null){
        console.log("This is your limit!!");
    }
    else{
        hrefLists[i] = document.querySelector("#passwordWebsitelink_"+ i);
        pswdBtns[i] = document.querySelector("#passwordShowPasswordButton_"+ i);;
        data = pswdBtns[i].addEventListener('click', passwordProtected.bind(pswdBtns[i], hrefLists[i]));
        console.log(hrefLists[i].title);  /* Title VARCHAR(30) */
        console.log(hrefLists[i].href);  /* Website VARCHAR(50) */
    }
}
console.log("End");