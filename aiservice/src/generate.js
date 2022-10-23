// javascript for generate.html
const form = document.querySelector('form');
// const { aiEngineReq } = require("./engineReq.js");
import { aiEngineReq } from "./engineReq.js";


const generateForm = async (e) => {
    e.preventDefault();
  
    const doc = {
      FormId: form.FormId.value,
      FormAsk: form.FormAsk.value,
      UserId: form.UserId.value,
      MediaType: form.MediaType.value,
      MediaUrl: form.MediaUrl.value,
    }
    await fetch('http://localhost:3000/mediaForms', {
        method: 'POST',
        body: JSON.stringify(doc),
        headers: { 'Content-Type': 'application/json'},

      })
      .then(res => res.json())
      .then(dataToSend => aiEngineReq(dataToSend,'http://localhost:3000/calcForms' ))
      .catch(err => console.log(err));

      window.location.replace('./');
};

form.addEventListener('submit', generateForm);