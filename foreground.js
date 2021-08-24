//document.querySelector(".lnXdpd").classList.add("spinspinspin");

//let mic = document.getElementsByClassName('goxjub');
//console.log(mic)

// Important: enable the following flag: edge://flags/#extensions-on-edge-urls

document.getElementById('passwordShowPasswordButton_0').addEventListener('click',function(){
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
}

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