

const searchBook = () => {
    const searchField = document.getElementById('search-field')
    const searchText = searchField.value;
    console.log(searchText)

    // input clear data 
    searchField.value = "";


    const url = `http://openlibrary.org/search.json?q=${searchText}`
    fetch(url)
        .then(res => res.json())
        .then(data => displaysearchresult(data.docs))

}

const displaysearchresult = docs => {
    const searchresult = document.getElementById('searchresult');
    // chear-result clear
    searchresult.innerHTML = "";


    docs.forEach(docst => {
        console.log(docst);
        const div = document.createElement('div')
        div.classList.add('col');
        div.innerHTML = `
            <div class="card">
            <img src="..." class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${docst.author_name}</h5>
                 <p class="card-text">This is a longer card with supporting text below as a natural lead-in to
                    additional content. This content is a little bit longer.</p>
             </div>
            </div>
        `;
        searchresult.appendChild(div)
    })
}
