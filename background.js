// background.js
chrome.tabs.onUpdated.addListener(function (tabId, changeInfo, tab) {
    if (changeInfo.status === "complete" && tab.url.includes("google.com/maps")) {
      chrome.tabs.sendMessage(tabId, { action: "detectTransportClick" });
    }
  });
  