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
      try {
        chrome.contextMenus.remove("cunny_translate");
      } catch (err) {
        console.log(err);
      }
    }
  });
});

// open the popup when context menu is clicked
chrome.contextMenus.onClicked.addListener(function () {
  chrome.action.openPopup();
});
