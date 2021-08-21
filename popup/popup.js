let position = {};

chrome.storage.sync.get(['position'], function (positionWrapper) {
    position = positionWrapper.position;
    console.log(this);
    console.log(position.companyName);
    console.log(position.jobTitle);
    console.log(document.getElementById("checkbox-link"))
    document.getElementById("checkbox-link").checked = true;
    console.log(document.getElementById("job-title"));
    document.getElementById("job-title").value = position.jobTitle || '';
    document.getElementById("company-name").value = position.companyName || '';

})
document.getElementById("save-position-btn").addEventListener("click", function (e) {
    chrome.runtime.sendMessage(position,
        function (response) {
            console.log(response);
        })
})
