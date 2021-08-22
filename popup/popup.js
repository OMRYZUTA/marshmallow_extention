let position = {};

chrome.storage.sync.get(['position'], function (positionWrapper) {
    position = positionWrapper.position;
    console.log(this);
    console.log(position.company_name);
    console.log(position.job_title);
    console.log(document.getElementById("checkbox-link"))
    document.getElementById("checkbox-link").checked = true;
    console.log(document.getElementById("job-title"));
    document.getElementById("job-title").value = position.job_title || '';
    document.getElementById("company-name").value = position.company_name || '';

})
document.getElementById("save-position-btn").addEventListener("click", function (e) {
    chrome.runtime.sendMessage(position);
})
