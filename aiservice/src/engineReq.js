// request to ai engine

export const aiEngineReq = async (dataToSend, urlToSend) => {


    //POST the Data
	await fetch(urlToSend, {
        method: 'POST',
        body: JSON.stringify(dataToSend),
        headers: { 'Content-Type': 'application/json'},
        
        
      })
	  	.then(res => res.json())
		  .then((returnedData) => console.log(returnedData))
		  .catch(err => console.log(err));

}
