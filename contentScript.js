chrome.runtime.onMessage.addListener((msg, sender, sendResopnse) => {
    sendResopnse(scrape());
})
let job_title = "";
let job_posting_URL = window.location.href;
let position = {};

const scrape = () => {
    if (job_posting_URL.includes("indeed")) {
        if (job_posting_URL.includes("vjk") || job_posting_URL.includes("vjs")) {
            job_title = document.getElementsByClassName("jobsearch-JobInfoHeader-title")[0]?.innerText.replace("- job post", "");
            if (typeof job_title === "undefined") {//incase of not a logged in user
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
        let jobDescriptionCollection = document.getElementsByClassName("jobs-unified-top-card__content--two-pane");
        if (jobDescriptionCollection.length > 0) {
            let job_description_div = jobDescriptionCollection[0];
            let job_title = job_description_div.getElementsByTagName("a")[0].innerText;
            console.log(job_title);
            let company_nameDiv = job_description_div.getElementsByTagName("div")[0];
            let company_name = company_nameDiv.getElementsByTagName("span")[1].innerText;
            console.log(company_name);
            position = { job_title, company_name, job_posting_URL };
        }
        else {//incase of not a logged in user - single page application- need to set interval...
            jobDescriptionCollection = document.getElementsByClassName("top-card-layout__card");
            console.log(document.getElementsByClassName("top-card-layout__card").length);
            if (jobDescriptionCollection.length > 0) {
                console.log(jobDescriptionCollection[0]);
            }
        }

    }
    return position;
}
