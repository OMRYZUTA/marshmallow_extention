let savePositionButton = document.getElementById("savePosition");

savePositionButton.addEventListener("click", async () => {
    let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
    chrome.scripting.executeScript({
        target: { tabId: tab.id },
        function: savePositionNow,
    });
})

function savePositionNow() {
    const queryString = String(window.location.href);
    const jobkeyIndex = queryString.indexOf('jk');
    const jobkey = queryString.substring(jobkeyIndex + 3);
    console.log(jobkey);
    // let jobKeyToSend = document.getElementById("")
}