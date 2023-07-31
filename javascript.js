
  const url = "https://api.pexels.com/v1/search?query="  
  

const fetchAlbum = (query) => {   
        fetch(url + query, {          
        headers: {                    
        Authorization: "M8H7Bi854QxQ2u76shOHDBtBvTqDr5HqK4euaLne0EbMqS0Myv67QgtE", 
    },
  })
  .then( (res) =>  res.json()
  )
  .then( (jsonRisultato) => {

    let cont1 = document.getElementsByClassName('row')[1];   

    jsonRisultato.photos.forEach(element => {  
        
        cont1.innerHTML = jsonRisultato.photos.map((photo) =>{

        return `<div class="col-12 col-lg-4 my-3">
                    
                    <div class="sizeWithoutB">

                     <img class="card-img-top img-fluid w-100 rounded shadow" src="${photo.src.large}" alt="Card image cap">
                    
                     </div>

                </div>`

    }).join("")

   });


    }
  )
  .catch( err => console.log('error: ', err))
  .finally( () => console.log('fine'))
}

fetchAlbum('norway');  

