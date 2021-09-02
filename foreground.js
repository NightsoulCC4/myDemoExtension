//document.querySelector(".lnXdpd").classList.add("spinspinspin");

//let mic = document.getElementsByClassName('goxjub');
//console.log(mic)

// Important: enable the following flag: 
// edge://flags/#extensions-on-edge-urls
// chrome://flags/#extensions-on-chrome-urls


// passwordSection = document.querySelectorAll("settings-autofill-page")[0];
// console.log('BB', passwordSection);
      
settings = document.querySelectorAll("settings-ui")[0].shadowRoot;
console.log('XX', settings);
container = settings.querySelectorAll('div[id="container"]')[0];
settingsMain = container.querySelectorAll("settings-main")[0].shadowRoot;
settingsBasicPage = settingsMain.querySelectorAll("settings-basic-page")[0].shadowRoot;
settingsAutofill = settingsBasicPage.querySelectorAll("settings-autofill-page")[0].shadowRoot;
passwordSection = settingsAutofill.querySelectorAll("passwords-section")[0].shadowRoot;
passwords = passwordSection.querySelectorAll("password-list-item");
for(var i = 0; i < passwords.length; i++) {
    pass = passwords[i].shadowRoot;
    butt = pass.querySelectorAll("cr-icon-button");
    butt[0].addEventListener('click',function(element){
        link = element.path[5].querySelectorAll("a")[0].getAttribute("href");
        alert("Dont click on "+link);
    });
}

//}

/*document.getElementById('passwordShowPasswordButton_0').addEventListener('click',function(){
    alert("no");
    console.log("hello");
 });

if (typeof oak === 'undefined') {
    //var oak = document.getElementById("company");
    var oak = document.getElementById("passwordShowPasswordButton_0");
    oak = oak.parentElement.parentElement.childNodes;
    //oak = element.shadowRoot;
    console.log("create new oak var");
} else {
    //oak = document.getElementById("company");
    oak = document.getElementById("passwordShowPasswordButton_0");
    oak = oak.parentElement.parentElement.childNodes;
    //oak = element.shadowRoot;
    console.log("reuse oak var");
}

for (var i = 0; i < oak.length; i++) {
    if(oak[i].getAttribute("data-cellid") == "uniqueKey") {
        var loginLink = oak[i].childNodes[0].getAttribute("href");
        console.log(i+" "+loginLink);
    }
}*/

// const first = document.createElement('button');
// first.innerText = "SET DATA";
// first.id = "first";

// const second = document.createElement('button');
// second.innerText = "SHOUTOUT TO BACKEND";
// second.id = "second";

// document.querySelector('body').appendChild(first);
// document.querySelector('body').appendChild(second);

// first.addEventListener('click', () => {
//     chrome.storage.local.storage({"password": "123"});
//     console.log("set data");
// });


//id ต่างกันทุกเครื่องหรือไม่
//Physical ATTACK เวลาน้อย
//