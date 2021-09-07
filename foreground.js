// Important: enable the following flag: edge://flags/#extensions-on-edge-urls

var pswdBtnCounter = 0;
var pswdBtns = [];

console.log("Hello foreground");
console.log("Password Counter is ", pswdBtnCounter);

var a = document.getElementById('passwordShowPasswordButton_0');
console.log(a.id);

while(pswdBtnCounter <= pswdBtns.length){
    var pswdBtnClick = document.getElementById('passwordShowPasswordButton_', pswdBtnCounter);
    pswdBtnClick.addEventListener('click', function TestClick () {
        alert("Ni Hao Zhong Gao Ren!!", pswdBtnCounter);
    });
    pswdBtns[pswdBtnCounter] = document.getElementById('passwordShowPasswordButton_', pswdBtnCounter).id;
    console.log(pswdBtns[pswdBtnCounter]);
    pswdBtnCounter++;
}

console.log(pswdBtnCounter);







// if (typeof oak === 'undefined') {
//     var oak = document.getElementById("passwordShowPasswordButton_0");
//     oak = oak.parentElement.parentElement.childNodes;
//     // oak = element.shadowRoot;
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
//     }
// }

//id ต่างกันทุกเครื่องหรือไม่
//Physical ATTACK เวลาน้อย
//