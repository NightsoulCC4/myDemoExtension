// Important: enable the following flag: edge://flags/#extensions-on-edge-urls

var pswdBtnCounter = 0;
var pswdBtns = [];

console.log("Password Counter is ", pswdBtnCounter);

// pswdBtns[pswdBtnCounter] = document.getElementById("passwordShowPasswordButton_139");
// console.log("You're", pswdBtns[pswdBtnCounter]);

console.log("Password counter = ", pswdBtnCounter);
console.log("Password button list = ", pswdBtns);

for(i = 0; i<=pswdBtns.length; i++){
    if(document.getElementById("passwordShowPasswordButton_"+ i) == null){
        console.log("This is your limit!!");
       i++; 
    }
    else{
        pswdBtns[i] = document.getElementById("passwordShowPasswordButton_"+ i);
        console.log(pswdBtns[i].id);
        console.log(i);
    }
}


// while(pswdBtnCounter <= pswdBtns.length){
//     var pswdBtnClick = document.getElementById('passwordShowPasswordButton_', pswdBtnCounter);
//     pswdBtnClick.addEventListener('click', function TestClick () {
//         alert("Ni Hao Zhong Gao Ren!!", pswdBtnCounter);
//     });
//     pswdBtns[pswdBtnCounter] = document.getElementById('passwordShowPasswordButton_', pswdBtnCounter).id;
//     console.log(pswdBtns[pswdBtnCounter]);
//     pswdBtnCounter++;
// }



if (typeof oak === 'undefined') {
    var oak = document.getElementById("passwordShowPasswordButton_0");
    oak = oak.parentElement.parentElement.childNodes;
    // oak = element.shadowRoot;
    console.log(oak)
    console.log("create new oak var");
} 
else {
    oak = document.getElementById("passwordShowPasswordButton_0");
    oak = oak.parentElement.parentElement.childNodes;
    // oak = element.shadowRoot;
    console.log("reuse oak var");
}

for (var i = 0; i < oak.length; i++) {
    if(oak[i].getAttribute("data-cellid") == "uniqueKey") {
        var loginLink = oak[i].childNodes[0].getAttribute("href");
        console.log(i+" "+loginLink);
        console.log(oak.length);
    }
}

// var pswdBtnClick = document.getElementById('passwordShowPasswordButton_0');
//     pswdBtnClick.addEventListener('click', function TestClick () {
//         alert("Ni Hao Zhong Gao Ren!!");
//     });
