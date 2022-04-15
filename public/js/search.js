const searchInput = document.getElementById("search");

searchInput.addEventListener("keyup", (e) =>{
    	
    const value = searchInput.value;

    console.log(value);
    axios.post('/search', {value:value})
    .then(function (response){
        console.log(response.data);
    }).catch(function(error){
        console.log(error);
    })
})