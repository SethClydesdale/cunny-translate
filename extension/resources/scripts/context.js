chrome.runtime.onInstalled.addListener(function () {
  // add context menu icon if preferred
  chrome.storage.sync.get('context_menu', function (data) {
    if (data.context_menu == true || data.context_menu == undefined) {
      chrome.contextMenus.create({
        id : "cunny_translate",
        title : chrome.i18n.getMessage("ext_name"),
        contexts : ["selection"]
      });
    } else {
      try { // required for Firefox as it doesn't remove the context item when reloading the extension
        chrome.contextMenus.remove("cunny_translate");
      } catch (err) {
        console.log(err);
      }
    }
  });
  
  // reopens the option page if reloaded
  chrome.storage.sync.get('reloaded', function (data) {
    if (data.reloaded == true) {
      chrome.storage.sync.set({
        reloaded : false
      });
      
      chrome.runtime.openOptionsPage();
    }
  });
  
});

// open the popup when context menu is clicked
chrome.contextMenus.onClicked.addListener(function () {
  chrome.action.openPopup();
});
