// javascript for index.html

// query selector
const container = document.querySelector('.mediaforms')

// to get the media forms from the endpoint
const renderMediaForms = async () => {
    let uri = "http://localhost:3000/mediaForms";

    // fetch the response object from the uri
    const res = await fetch(uri);

    // get the data from the response object
    const mediaForms = await res.json();

    // template string to output the mediaForms to Dom
    let template = "";
    mediaForms.forEach(mediaForm => {
        template += `<div class="mediaForm">
            <h2>MediaForm ${mediaForm.id}</h2>
            <a href = "/aiservice/json_server_files/details.html?id=${mediaForm.id}">Click to See Form ${mediaForm.id} Details</a><br>
            <h2><br></h2>
            
            
        </div>
        `;
    })

    container.innerHTML = template;
}

// event listener for Dom Content 
window.addEventListener("DOMContentLoaded", () => renderMediaForms());