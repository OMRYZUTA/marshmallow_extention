URL = "http://127.0.0.1:8000/"

// Example POST method implementation:
async function postData(url = '', data = {}) {
    // Default options are marked with *
    const response = await fetch(url, {
      method: 'POST', // *GET, POST, PUT, DELETE, etc.
      //mode: 'no-cors', // no-cors, *cors, same-origin
      //cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
      //credentials: 'same-origin', // include, *same-origin, omit
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      //redirect: 'follow', // manual, *follow, error
      //referrerPolicy: 'same-origin', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
      body: JSON.stringify(data) // body data type must match "Content-Type" header
    });
    return response.json(); // parses JSON response into native JavaScript objects
}
  
  

chrome.runtime.onInstalled.addListener((details)=>{
    chrome.contextMenus.create({
        title: "save position",
        id: "contextMenu1",
        contexts:["page","selection"]
    });
    chrome.contextMenus.onClicked.addListener((event)=>
    {
        let selectionValues = event.selectionText.split("-");

        let jobProcess ={};
        
        jobProcess["position"] ={};
        jobProcess["contact_set"]=[];
        jobProcess["stage_set"]=[];
        jobProcess["status"]={"name":"Interested"}
        jobProcess.position["job_posting_URL"]= event.pageUrl;
        jobProcess.position["job_title"]= selectionValues[0];
        let restOfTheString =selectionValues[1].split(" ");
        jobProcess.position["company_name"] = restOfTheString[0];
        jobProcess.position["city"] = restOfTheString[1];
        console.log(jobProcess);
        postData(URL, jobProcess)
    .then(data => {
      console.log(data); // JSON data parsed by `data.json()` call
    }).catch(err => {
        console.log(err);
    });
    }
)});
