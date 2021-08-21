chrome.runtime.onMessage.addListener((msg, sender, sendResopnse) => {
    sendResopnse(scrape());
})
let jobTitle = "";
let url = String(window.location.href);
let position = {};

const scrape = () => {
    if (url.includes("indeed")) {
        if (url.includes("vjk") || url.includes("vjs")) {
            jobTitle = document.getElementsByClassName("jobsearch-JobInfoHeader-title")[0]?.innerText.replace("- job post", "");
            if (typeof jobTitle === "undefined") {
                jobTitle = document.getElementById('vjs-jobtitle').innerText
                companyName = document.getElementById("vjs-cn").innerText;
                let url = String(window.location.href);
                position = { companyName, jobTitle, url };
                console.log('position: ', position);
            }
            else {
                position = { jobTitle };
                companyName = document.getElementsByClassName("jobsearch-InlineCompanyRating")[0].innerText;
                console.log(companyName);
                let url = String(window.location.href);
                position = { companyName, jobTitle, url };
                console.log('position: ', position);
            }
        }
    }
    else if (url.includes("linkedin")) {
        console.log("in linkedin");
    }
    return position;
}
