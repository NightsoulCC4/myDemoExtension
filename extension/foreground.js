// Important: enable the following flag: edge://flags/#extensions-on-edge-urls

function passwordProtected(pswdBtn, hrefList){
    alert("You are in dangerous on "+ pswdBtn.title);
    console.log("Password Button = ", pswdBtn ,"and href = ", hrefList)
    console.log("You have been hacked in ", pswdBtn.title, "at", pswdBtn.id);
}

var pswdBtns = [];
var hrefLists = [];

console.log("Password button list = ", pswdBtns);

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
        console.log(pswdBtns[i].id); /* passwordButton VARCHAR(60) */
        // console.log(pswdBtns[i]);
        // console.log(i);
    }
    console.log(hrefLists[i]);
    console.log(hrefLists[i].title); /* Title VARCHAR(30) */
    console.log(hrefLists[i].href); /* Website VARCHAR(50) */
}

// pswdBtns[i] = document.getElementById("passwordShowPasswordButton_"+ i).addEventListener('click', function passwordProtected () {
//     alert("No", pswdBtns[i].id, "is in dangerous.");
// });
    // var pswdBtnClick = document.getElementById('passwordShowPasswordButton_', pswdBtnCounter);
    // pswdBtnClick.addEventListener('click', function TestClick () {
    //     alert("Ni Hao Zhong Gao Ren!!", pswdBtnCounter);
    // });

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

// var pswdBtnClick = document.getElementById('passwordShowPasswordButton_0');
//     pswdBtnClick.addEventListener('click', function TestClick () {
//         alert("Ni Hao Zhong Gao Ren!!");
//     });

