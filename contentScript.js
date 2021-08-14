let jobTitle = "";
console.log("hello from content script")
console.log(chrome);
console.log(document.getElementsByClassName("jobsearch-JobInfoHeader-title"));

if (String(window.location.href).includes("indeed")) {
    console.log("in indeed .com !");
    jobTitle = document.getElementsByClassName("jobsearch-JobInfoHeader-title")[0]?.innerText.replace("- job post", "")
    console.log("content script says: ", jobTitle);
}