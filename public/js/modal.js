const modalBtns = document.querySelectorAll("#open-modal");

modalBtns.forEach((btn) => {
    btn.addEventListener("click", (e) => {
        console.log(e.target.dataset.id);
    })
})