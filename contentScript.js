chrome.runtime.onMessage.addListener((msg, sender, sendResopnse) => {
    sendResopnse(scrape());
})
let job_title = "";
let job_posting_URL = String(window.location.href);
let position = {};

const scrape = () => {
    if (job_posting_URL.includes("indeed")) {
        if (job_posting_URL.includes("vjk") || job_posting_URL.includes("vjs")) {
            job_title = document.getElementsByClassName("jobsearch-JobInfoHeader-title")[0]?.innerText.replace("- job post", "");
            if (typeof job_title === "undefined") {
                job_title = document.getElementById('vjs-jobtitle').innerText
                company_name = document.getElementById("vjs-cn").innerText;
                let city = document.getElementById("vjs-loc").innerText
                let about_the_job = document.getElementById("vjs-desc").innerText;
                let job_posting_URL = String(window.location.href);
                position = { company_name, job_title, city, about_the_job, job_posting_URL };
                console.log('position: ', position);
            }
            else {
                position = { job_title };
                company_name = document.getElementsByClassName("jobsearch-InlineCompanyRating")[0].innerText;
                console.log(company_name);
                let job_posting_url = String(window.location.href);
                position = { company_name, job_title, job_posting_url };
                console.log('position: ', position);
            }
        }
    }
    else if (job_posting_URL.includes("linkedin")) {
        console.log("in linkedin");
    }
    return position;
}
