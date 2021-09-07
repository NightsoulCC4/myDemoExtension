const edgePswd = "edge://settings/passwords";
const settingPage = "edge://settings/";

chrome.tabs.onActivated.addListener((tab) => {
  chrome.tabs.get(tab.tabId, (current_tab_info) => {
    var pswdPageChecked = 1;
    while(pswdPageChecked < 2){
      if (edgePswd == current_tab_info.url) {
        chrome.tabs.executeScript(null, { file: "./foreground.js" }, () =>
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

