
window.addEventListener("load", scrape, false);
console.log("in content script");

const scrape = () => {
    let jobTitle = "";
    let url = String(window.location.href);

    if (url.includes("indeed")) {
        console.log("in indeed.com !");
        if (url.includes("vjk")) {
            console.log("job title array is :" + document.getElementsByClassName("jobsearch-JobInfoHeader-title")[0])
            jobTitle = document.getElementsByClassName("jobsearch-JobInfoHeader-title")[0]?.innerText.replace("- job post", "")
            console.log("job title: ", jobTitle);
        }
    }
}
