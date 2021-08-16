chrome.runtime.onMessage.addListener((msg, sender, sendResopnse) => {
    console.log("in content script", msg, sender, sendResopnse);
    sendResopnse(scrape());
})
const scrape = () => {
    let jobTitle = "";
    let url = String(window.location.href);
    let position = {};
    if (url.includes("indeed")) {
        console.log("in indeed.com !");
        if (url.includes("vjk") || url.includes("vjs")) {
            console.log("job title array is :" + document.getElementsByClassName("jobsearch-JobInfoHeader-title")[0])
            jobTitle = document.getElementsByClassName("jobsearch-JobInfoHeader-title")[0]?.innerText.replace("- job post", "")
            console.log("job title: ", jobTitle);
            position = { jobTitle };
            companyName = document.getElementsByClassName("jobsearch-InlineCompanyRating")[0].innerText;
            console.log(companyName);
            position = { companyName, jobTitle, url };
            console.log('position: ', position);
        }
    }
    return position;
}
