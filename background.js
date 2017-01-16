
function focusOrCreateTab(url) {
  chrome.windows.getAll({"populate":true}, function(windows) {
    var existing_tab = null;
    for (var i in windows) {
      var tabs = windows[i].tabs;
      for (var j in tabs) {
        var tab = tabs[j];
        if (tab.url == url) {
          existing_tab = tab;
          break;
        }
      }
    }
    if (existing_tab) {
      chrome.tabs.update(existing_tab.id, {"selected":true});

    } else {
      chrome.tabs.create({"url":url, "selected":true});

    }

  });
}
// Called when the user clicks on the browser action.
chrome.browserAction.onClicked.addListener(function(tab) {
  //alert("Hello from your Chrome extension!")

  // Send a message to the active tab
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    var activeTab = tabs[0];
    chrome.tabs.sendMessage(activeTab.id, {"message": "clicked_browser_action"});
    var manager_url = chrome.extension.getURL("noter.html");
    focusOrCreateTab(manager_url);

  });
});
