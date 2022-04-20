const searchInput = document.getElementById("search");
const bookContainer = document.getElementById("book-container");

searchInput.addEventListener("keyup", (e) =>{
    	
    const value = searchInput.value;

    console.log(value);
    axios.post('/search', {value:value})
    .then(function (response){
        const books = response.data
        
        bookContainer.innerHTML = '';

        books.forEach(book => {
            var bookHTML = `                        
            <div class="transition delay-150 duration-300 ease-in-out py-8 flex flex-wrap md:flex-nowrap">
                <div class="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
                <span class="font-semibold title-font text-gray-700">Author</span>
                <span class="mt-1 text-gray-500 text-sm">${book.author}</span>
                </div>
                <div class="md:flex-grow">
                <h2 class="text-2xl font-medium text-gray-900 title-font mb-2">${book.title}</h2>
                <p class="leading-relaxed">Glossier echo park pug, church-key sartorial biodiesel vexillologist pop-up snackwave ramps cornhole. Marfa 3 wolf moon party messenger bag selfies, poke vaporware kombucha lumbersexual pork belly polaroid hoodie portland craft beer.</p>
                <p class="leading-relaxed font-bold">${book.catalogue_number}</p>
                <a href="#" class="text-indigo-500 inline-flex items-center mt-4">Learn More
                    <svg class="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M5 12h14"></path>
                    <path d="M12 5l7 7-7 7"></path>
                    </svg>
                </a>
                </div>
            </div>`

            console.log(book);
            bookContainer.insertAdjacentHTML("afterbegin", bookHTML);
            // bookContainer.insertAdjacentHTML('beforeend')
        });

        // bookContainer.innerHTML = bookHTML;

    }).catch(function(error){
        console.log(error);
    })
})