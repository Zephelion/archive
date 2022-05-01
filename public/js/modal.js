const modalBtns = document.querySelectorAll("#open-modal");
const modalTitle = document.querySelector('.modal-title-title');
const modalAuthor = document.querySelector('.author');
const modalYear = document.querySelector('.year');
const modalCatalogue = document.querySelector('.c_number');
const modalPlace = document.querySelector('.place');
const modalPrinter = document.querySelector('.printer');
const modalSubject = document.querySelector('.subject');
const modalTaal = document.querySelector('.taal');
const modalExterior = document.querySelector('.exterior');
const modalInterior = document.querySelector('.interior');


const modal = document.querySelector('.modal');
const closeBtn = document.querySelector('.modal-close');

const openModal = (book) =>{
    modalTitle.innerText =  book.title;
    modalAuthor.innerHTML = '<span class="font-bold">Author: </span>' + book.author;
    modalYear.innerHTML = '<span class="font-bold">Year of publication: </span>' + book.year_publication;
    modalCatalogue.innerHTML = '<span class="font-bold">Catalogue Number: </span>' + book.catalogue_number;
    modalPlace.innerHTML = '<span class="font-bold">Place of publication: </span>' + book.place_publication;
    modalPrinter.innerHTML = '<span class="font-bold">Printer: </span>' + book.printer;
    modalTaal.innerHTML = '<span class="font-bold">Language: </span>' + book.taal;
    modalSubject.innerHTML = '<span class="font-bold">Subject: </span>' + book.subject;
    modalExterior.innerHTML = '<span class="font-bold">Exterior: </span>' + book.exterior;
    modalInterior.innerHTML = '<span class="font-bold">Interior: </span>' + book.interior;

    modal.classList.add("reveal");
}

const removeModal = () =>{
    modal.classList.remove("reveal");
}

const userModal = (e) =>{
    e.preventDefault();
    const id = e.target.dataset.id;
    
    axios.post('/book', {id:id}).then(function(response){
        openModal(response.data);

    }).catch(function(error){
        console.log(error);
    })
}

modalBtns.forEach((btn) => {
    btn.addEventListener("click", userModal)
})


closeBtn.addEventListener("click", (e) =>{
    removeModal();
})
