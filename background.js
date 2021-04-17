chrome.tabs.onActivated.addListener((tab) => {
  chrome.tabs.get(tab.tabId, (current_tab_info) => {
    if (/^https:\/\/www\.google/.test(current_tab_info.url)) {
      chrome.tabs.insertCSS(null, { file: "../style/app.css" });
      chrome.tabs.executeScript(null, { file: "./foreground.js" }, () =>
        console.log("i injected")
      );
    }
    if (/^edge:\/\/settings/) {
      console.log("Someone access to the settings page");
        if (/^edge:\/\/settings/.test(current_tab_info.url)) {
          console.log("Lunchtime attacks!!");
        }
    }
  });
});
