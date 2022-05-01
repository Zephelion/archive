const modalBtns = document.querySelectorAll("#open-modal");
const modalTitle = document.querySelector('.modal-title-title');
const modalAuthor = document.querySelector('.author');
const modalYear = document.querySelector('.year');
const modal = document.querySelector('.modal');
const closeBtn = document.querySelector('.modal-close');

const openModal = (book) =>{
    modalTitle.innerText = book.title;
    modalAuthor.innerText = book.author;
    modalYear.innerText = book.year_publication;

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
