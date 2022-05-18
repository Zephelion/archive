console.log("wagwan people");
const form = document.getElementById("storebook");
var title = document.getElementById("title");
var author = document.getElementById("author");
var printer = document.getElementById("printer");
var fingerprint = document.getElementById("fingerprint");
var catalogue_number = document.getElementById("catalogue_number");
var year_publication = document.getElementById("year_publication");
var place_publication = document.getElementById("place_publication");
var language = document.getElementById("taal");
var subject = document.getElementById("subject");
var exterior = document.getElementById("exterior");
var interior = document.getElementById("interior");
const savedContainer = document.getElementById("saved-container");

console.log(savedContainer);



form.addEventListener("submit", (e) => {
    e.preventDefault();

    title = title.value
    author = author.value
    printer = printer.value
    fingerprint = fingerprint.value
    catalogue_number = catalogue_number.value
    year_publication = year_publication.value
    place_publication = place_publication.value
    language = language.value
    subject = subject.value
    exterior = exterior.value
    interior = interior.value

    axios.post("/store", {title:title, author:author, printer:printer, fingerprint:fingerprint, catalogue_number:catalogue_number, year_publication:year_publication, place_publication:place_publication,
    language:language, subject:subject, exterior:exterior, interior:interior}).then(function(response){

        const savedBook = response.data;
        console.log(savedBook);

        const html = `<p class="font-medium">${savedBook.title}</p>`

        savedContainer.insertAdjacentHTML("afterbegin", html);

        form.reset();
    }).catch(function(error){
        console.log(error);
    })

})
