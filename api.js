
const totaloutput = document.getElementById('total-output');

const searchBook = () => {
    const searchField = document.getElementById('search-field')
    const searchText = searchField.value;
    console.log(searchText)

    // input clear data 
    searchField.value = "";

    // load data
    const url = `https://openlibrary.org/search.json?q=${searchText}`
    fetch(url)
        .then(res => res.json())
        .then(data => displaysearchresult(data))

}

const displaysearchresult = book => {
    const searchresult = document.getElementById('searchresult');
    console.log(book)
    // chear-result clear
    searchresult.innerHTML = "";



    // total result found

    if (book.docs.length === 0) {
        totaloutput.innerHTML = `<h2 class="text-center text-danger bg-info ">No Result found</h2>`
    } else {
        totaloutput.innerHTML = `
        <h2 class="text-center text-dark py-3 bg-info">search result found ${book.numFound}</h2> `
    }


    const docs1 = book.docs;
    docs1.forEach(docst => {
        console.log(docst);
        const div = document.createElement('div')
        div.classList.add('col');
        div.innerHTML = `
            <div class="card">
            <img style="hight:200px" src="https://covers.openlibrary.org/b/id/${docst.cover_i}-M.jpg" class="card-img-top" alt="Eii card ee img paoa jacce na">
            <div class="card-body">
                <h5 class="card-title">title::  ${docst.title}</h5>
                <h5 class="card-title">Author-name::  ${docst.author_name[0]}</h5>
                <h6 class="card-title">publisher:: ${docst.publisher}</h6>
                <h6 class="card-title">Frist-publisher:: ${docst.first_publish_year}</h6>
                 
             </div>
            </div>
        `;
        searchresult.appendChild(div)
    })
}


