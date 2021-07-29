let savePositionButton = document.getElementById("savePosition");

savePositionButton.addEventListener("click", async () => {
    let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
    chrome.scripting.executeScript({
        target: { tabId: tab.id },
        function: savePositionNow,
    });
})


function savePositionNow() {
    const initLinkedingWebsiteIDs = () => {
        return {};
    }
    const initIndeedWebsiteIDs = () => {
        const websiteTags = {};
        websiteTags["job_title"] = "vjs-jobtitle";
        websiteTags["company_name"] = "vjs-cn";
        websiteTags["city"] = "vjs-loc";
        return websiteTags;
    }
    const getWebsiteIds = () => {
        const queryString = String(window.location.href);
        let websiteTags;
        if (queryString.indexOf("linkedin.com") != -1) {
            websiteTags = initLinkedingWebsiteIDs();
        }
        else if (queryString.indexOf("indeed.com") != -1) {
            websiteTags = initIndeedWebsiteIDs();
        }
        return websiteTags;
    }
    const scrapeJobProcess = (websiteIDs) => {
        const jobProcess = {};
        jobProcess["position"] = {};
        jobProcess.position["company_name"] = document.getElementById(websiteIDs["company_name"]).innerText;
        jobProcess.position["job_title"] = document.getElementById(websiteIDs["job_title"]).innerText;
        jobProcess.position["city"] = document.getElementById(websiteIDs["city"]).innerText;
        jobProcess.position["job_posting_URL"] = String(window.location.href);
        return jobProcess;
    }
    //in order to scrape a position for a new site, we only need define its relevent tags
    const websiteIDs = getWebsiteIds();
    const jobProcess = scrapeJobProcess(websiteIDs);
    console.log(jobProcess);
}


