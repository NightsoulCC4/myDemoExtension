const chromePswd = "chrome://settings/passwords";
const settingPage = "chrome://settings/";


chrome.tabs.onActivated.addListener((tab) => {
  chrome.tabs.get(tab.tabId, (current_tab_info) => {

    //ทำงานเมื่อเข้าหน้า settings
    if (current_tab_info.url.slice(0, 18) == settingPage) {
      console.log("Someone access to the settings page");
      console.log(tab);

      //ฟังก์ชันนี้จะทำงานเมื่อมีคนเข้าหน้า password
      if (chromePswd == current_tab_info.url) {
        //   chrome.tabs.executeScript(null, { file: "./maskedImage.js" }, () =>
        //     console.log("MaskedImaged", tab.tabId, "+", current_tab_info.url)
        // );
        //alert("these are passwords");
        chrome.tabs.executeScript(null, { file: "./foreground.js" }, () =>
          console.log("I'm going to make my script work", tab.tabId, "+", current_tab_info.url, 
          document.getElementsByTagName('title'))
        
        );
      }
    }

    //chrome.tabs.executeScript(null, {file: "./foreground.js"}, () => console.log("bra bra bra") );



  });
});