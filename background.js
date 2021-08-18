
chrome.tabs.onUpdated.addListener(function (tabId, changeInfo, tab) {
  if (changeInfo.status === 'complete') {
    if (String(tab.url).includes('indeed')) {
      chrome.tabs.sendMessage(tabId, { message: "hi" },
        response => {
          chrome.storage.sync.set({ "position": response }
          );
          let position = {}
          chrome.storage.sync.get(['position'], function (result) {
            position = result;
          });
        }
      )
    }
  }
}
)
chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  console.log("now need to send to server -", request);
});
