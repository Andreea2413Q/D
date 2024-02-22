const books = [
    {
        name: "The Lightning Thief",
        series: "Percy Jackson and The Olympians",
        category: "fantasy",
        price: 20,
        src: "../src/multimedia/TLT.jpg"
    },
    {
        name: "The Sea of Monster",
        series: "Percy Jackson and The Olympians",
        category: "fantasy",
        price: 20,
        src: "./multimedia/TSOM.jpg"
    },
    {
        name: "The Titan Curse",
        series: "Percy Jackson and The Olympians",
        category: "fantasy",
        price: 22,
        src: "./multimedia/TTC.jpg"
    },
    {
        name: "Battle of The Labirinth",
        series: "Percy Jackson and The Olympians",
        category: "fantasy",
        price: 25,
        src: "./multimedia/TBOTL.jpg"
    },
    {
        name: "The Last Olimpyan",
        series: "Percy Jackson and The Olympians",
        category: "fantasy",
        price: 25,
        src: "./multimedia/TLO.jpg"
    },
    {
        name: "The Lost Hero",
        series: "Heroes Of Olympus",
        category: "fantasy",
        price: 18,
        src: "./multimedia/TLH.jpg"
    },
    {
        name: "The Son of Neptune",
        series: "Heroes Of Olympus",
        category: "fantasy",
        price: 20,
        src: "./multimedia/TSON.jpg"
    },
    {
        name: "The Mark of Athena",
        series: "Heroes Of Olympus",
        category: "fantasy",
        price: 20,
        src: "./multimedia/TMOA.jpg"
    },
    {
        name: "The House of Hades",
        series: "Heroes Of Olympus",
        category: "fantasy",
        price: 22,
        src: "./multimedia/THOH.jpg"
    },
    {
        name: "Blood of Olympus",
        series: "Heroes Of Olympus",
        category: "fantasy",
        price: 25,
        src: "./multimedia/TBOL.jpg"
    },
    {
        name: "1984",
        series: "",
        category: "fiction",
        price: 15,
        src: "./multimedia/1984.jpg"
    },
    {
        name: "To Kill a Mockingbird",
        series: "",
        category: "fiction",
        price: 18,
        src: "./multimedia/TKAM.jpg"
    },
    {
        name: "The Great Gatsby",
        series: "",
        category: "fiction",
        price: 20,
        src: "./multimedia/TGG.jpg"
    },
    {
        name: "Catch-22",
        series: "",
        category: "fiction",
        price: 22,
        src: "./multimedia/C22.jpg"
    },
    {
        name: "The Catcher in the Rye",
        series: "",
        category: "fiction",
        price: 17,
        src: "./multimedia/TCITR.jpg"
    },
    {
        name: "Brave New World",
        series: "",
        category: "fiction",
        price: 19,
        src: "./multimedia/BNN.jpg"
    },
    {
        name: "The Lord of the Rings",
        series: "",
        category: "fiction",
        price: 35,
        src: "./multimedia/TLOTR.jpg"
    },
    {
        name: "Pride and Prejudice",
        series: "",
        category: "fiction",
        price: 16,
        src: "./multimedia/PAP.jpg"
    },
    {
        name: "Beloved",
        series: "",
        category: "fiction",
        price: 18,
        src: "./multimedia/B.jpg"
    },
    {
        name: "Jane Eyre",
        series: "",
        category: "fiction",
        price: 20,
        src: "./multimedia/JE.jpg"
    },
    {
        name: "Sapiens: A Brief History of Humankind",
        series: "",
        category: "non-fiction",
        price: 25,
        src: "./multimedia/S.jpg"
    },
    {
        name: "Educated",
        series: "",
        category: "non-fiction",
        price: 28,
        src: "./multimedia/E.jpg"
    },
    {
        name: "The Diary of Anne Frank",
        series: "",
        category: "non-fiction",
        price: 15,
        src: "./multimedia/TDOAF.jpg"
    },
    {
        name: "Becoming",
        series: "",
        category: "non-fiction",
        price: 30,
        src: "./multimedia/BE.jpg"
    },
    {
        name: "In Cold Blood",
        series: "",
        category: "non-fiction",
        price: 20,
        src: "./multimedia/ICB.jpg"
    },
    
];


function displayBooks(booksToDisplay) {
    const bookList = document.getElementById("book-list");
    bookList.innerHTML = ''; // Curăță conținutul anterior

    booksToDisplay.forEach(book => {
        const bookDiv = document.createElement("div");
        bookDiv.className = "container";

        const img = document.createElement("img");
        img.src = book.src;
        img.alt = book.name;
        img.style.width = "200px"; // Sau orice altă dimensiune
        img.style.height = "100px"; // Păstrează proporția

        const series = document.createElement("h2");
        series.textContent = book.series;

        const name = document.createElement("h4");
        name.textContent = book.name;

        const price = document.createElement("h1");
        price.textContent = `$${book.price}`;

        bookDiv.appendChild(img);
        bookDiv.appendChild(name);
        bookDiv.appendChild(series);
      
        bookDiv.appendChild(price);

        bookList.appendChild(bookDiv);
    });
}

document.addEventListener('DOMContentLoaded', function() {
    displayBooks(books);

    document.getElementById('sort-price-asc').addEventListener('click', function() {
        sortBooks('price-asc');
    });

    document.getElementById('sort-price-desc').addEventListener('click', function() {
        sortBooks('price-desc');
    });

    document.getElementById('sort-name-asc').addEventListener('click', function() {
        sortBooks('name-asc');
    });

    document.getElementById('sort-name-desc').addEventListener('click', function() {
        sortBooks('name-desc');
    });

    const filterButtons = document.querySelectorAll('#filter-menu button');
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            const category = this.getAttribute('data-category');
            const filteredBooks = books.filter(book => book.category.toLowerCase() === category.toLowerCase());
            displayBooks(filteredBooks);
        });
    });
});

function sortBooks(criteria) {
    let sortedBooks = [...books];
    switch(criteria) {
        case 'price-asc':
            sortedBooks.sort((a, b) => a.price - b.price);
            break;
        case 'price-desc':
            sortedBooks.sort((a, b) => b.price - a.price);
            break;
        case 'name-asc':
            sortedBooks.sort((a, b) => a.name.localeCompare(b.name));
            break;
        case 'name-desc':
            sortedBooks.sort((a, b) => b.name.localeCompare(a.name));
            break;
    }

    displayBooks(sortedBooks);
}
