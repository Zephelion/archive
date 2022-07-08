const form = document.getElementById("storebook");
const title = document.getElementById("title");
const author = document.getElementById("author");
const printer = document.getElementById("printer");
const fingerprint = document.getElementById("fingerprint");
const catalogue_number = document.getElementById("catalogue_number");
const year_publication = document.getElementById("year_publication");
const place_publication = document.getElementById("place_publication");
const taal = document.getElementById("taal");
const subject = document.getElementById("subject");
const exterior = document.getElementById("exterior");
const interior = document.getElementById("interior");
const savedContainer = document.getElementById("saved-container");

console.log(savedContainer);



form.addEventListener("submit", (e) => {
    e.preventDefault();



    axios.post("/store", {
        title:title.value, 
        author:author.value, 
        printer:printer.value, 
        fingerprint:fingerprint.value, 
        catalogue_number:catalogue_number.value, 
        year_publication:year_publication.value, 
        place_publication:place_publication.value,
        taal:taal.value, 
        subject:subject.value, 
        exterior:exterior.value, 
        interior:interior.value
    })
    .then(function(response){

        const savedBook = response.data;
        console.log(savedBook);

        const html = `<p class="font-medium">${savedBook.title}</p>`

        savedContainer.insertAdjacentHTML("afterbegin", html);

        form.reset();
    }).catch(function(error){
        console.log(error);
    })

})
