// javascript for details.html

// url selector Id
const id = new URLSearchParams(window.location.search).get('id');
const container = document.querySelector('.details')

// to get the media form detail from the endpoint
const renderDetails = async () => {

    // fetch the response object from the uri
    let res = await fetch("http://localhost:3000/mediaForms/" + id);

    // get the data from the response object
    const mediaFormDetails = await res.json();


    // template string to output the mediaForm Details with Specific Id to Dom
    const template = `
    <h1><span style="color: blue;">MediaForm ${mediaFormDetails.id}   Details</span></h1>
    <h2><span style="color: blue;">Form Id: </span>${mediaFormDetails.FormId} </h2>
    <h2><span style="color: blue;">User Id: </span>${mediaFormDetails.UserId}</h2>
    <h2><span style="color: blue;">Media Type: </span>${mediaFormDetails.MediaType}</h2>
    <h2><span style="color: blue;">Media Url: </span>${mediaFormDetails.MediaUrl}</h2>
    <h2><span style="color: blue;">Form Ask: </span>${mediaFormDetails.FormAsk}</h2>
    `

    container.innerHTML = template;
}

// event listener for Dom Content 
window.addEventListener("DOMContentLoaded", () => renderDetails());



