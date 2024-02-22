import TLT from "../multimedia/TLT.jpg"
import TLH from "../multimedia/TLH.jpg"
import TSOM from "../multimedia/TSOM.jpg"
import TTC from "../multimedia/TTC.jpg"
import TBOL from "../multimedia/TBOTL.jpg"
import TLO from "../multimedia/TLO.jpg"
import A1984 from "../multimedia/1984.jpg"
import TKAM from "../multimedia/TKAM.jpg"
import TSON from "../multimedia/TSON.jpg"
import TMOA from "../multimedia/TMOA.jpg"
import THOH from "../multimedia/THOH.jpg"
import TGG from "../multimedia/TGG.jpg"
import C22 from "../multimedia/C22.jpg"
import TCITR from "../multimedia/TCITR.jpg"
import BNN from "../multimedia/BNN.jpg"
import PAP from "../multimedia/PAP.jpg"
import TLOTR from "../multimedia/TLOTR.jpg"
import B from "../multimedia/B.jpg"
import S from "../multimedia/S.jpg"
import JE from "../multimedia/JE.jpg"
import TDOAF from "../multimedia/TDOAF.jpg"
import ICB from "../multimedia/ICB.jpg"
import BE from "../multimedia/BE.jpg"
import E from "../multimedia/E.jpg"

import IT from "../multimedia/IT.jpg"
import D from "../multimedia/D.jpg"
import EX from "../multimedia/EX.jpg"
import F from "../multimedia/F.jpg"
import P from "../multimedia/P.jpg"
import H from "../multimedia/H.jpg"
import BOOK from "../multimedia/BOOK.jpg"
import ALL from "../multimedia/ATLWCS.jpg"
import N from "../multimedia/N.jpg"
import W from "../multimedia/WH.jpg"
import TPOTE from "../multimedia/TPOTE.jpg"
import O from "../multimedia/O.jpg"
import G from "../multimedia/GWTW.jpg"
import SH from "../multimedia/SH.jpg"


var cart = [];
var cartPrice = 0;
var isCartVisible = false;
const books = [
    {
        name: "The Lightning Thief",
        series: "Percy Jackson and The Olympians",
        category: "fantasy",
        price: 20,
        src: TLT
    },
    {
        name: "The Sea of Monster",
        series: "Percy Jackson and The Olympians",
        category: "fantasy",
        price: 20,
        src:TSOM
    },
    {
        name: "The Titan Curse",
        series: "Percy Jackson and The Olympians",
        category: "fantasy",
        price: 22,
        src:TTC
    },
    {
        name: "Battle of The Labirinth",
        series: "Percy Jackson and The Olympians",
        category: "fantasy",
        price: 25,
        src:TBOL
    },
    {
        name: "The Last Olimpyan",
        series: "Percy Jackson and The Olympians",
        category: "fantasy",
        price: 25,
        src: TLO
    },
    {
        name: "The Lost Hero",
        series: "Heroes Of Olympus",
        category: "fantasy",
        price: 18,
        src: TLH
    },
    {
        name: "The Son of Neptune",
        series: "Heroes Of Olympus",
        category: "fantasy",
        price: 20,
        src: TSON
    },
    {
        name: "The Mark of Athena",
        series: "Heroes Of Olympus",
        category: "fantasy",
        price: 20,
        src: TMOA
    },
    {
        name: "The House of Hades",
        series: "Heroes Of Olympus",
        category: "fantasy",
        price: 22,
        src: THOH
    },
    {
        name: "Blood of Olympus",
        series: "Heroes Of Olympus",
        category: "fantasy",
        price: 25,
        src: TBOL
    },
    {
        name: "1984",
        series: "",
        category: "fiction",
        price: 15,
        src: A1984
    },
    {
        name: "To Kill a Mockingbird",
        series: "",
        category: "fiction",
        price: 18,
        src: TKAM
    },
    {
        name: "The Great Gatsby",
        series: "",
        category: "fiction",
        price: 20,
        src: TGG
    },
    {
        name: "Catch-22",
        series: "",
        category: "fiction",
        price: 22,
        src: C22
    },
    {
        name: "The Catcher in the Rye",
        series: "",
        category: "fiction",
        price: 17,
        src: TCITR
    },
    {
        name: "Brave New World",
        series: "",
        category: "fiction",
        price: 19,
        src: BNN
    },
    {
        name: "The Lord of the Rings",
        series: "",
        category: "fiction",
        price: 35,
        src: TLOTR
    },
    {
        name: "Pride and Prejudice",
        series: "",
        category: "fiction",
        price: 16,
        src: PAP
    },
    {
        name: "Beloved",
        series: "",
        category: "fiction",
        price: 18,
        src: B
    },
    {
        name: "Jane Eyre",
        series: "",
        category: "fiction",
        price: 20,
        src: JE
    },
    {
        name: "Sapiens: A Brief History of Humankind",
        series: "",
        category: "non-fiction",
        price: 25,
        src: S
    },
    {
        name: "Educated",
        series: "",
        category: "non-fiction",
        price: 28,
        src: E
    },
    {
        name: "The Diary of Anne Frank",
        series: "",
        category: "non-fiction",
        price: 15,
        src: TDOAF
    },
    {
        name: "Becoming",
        series: "",
        category: "non-fiction",
        price: 30,
        src: BE
    },
    {
        name: "In Cold Blood",
        series: "",
        category: "non-fiction",
        price: 20,
        src: ICB
    },
    {
        name: "The Shining",
        series: "",
        category: "horror",
        price: 15,
        src: SH
    },
    {
        name: "It",
        series: "",
        category: "horror",
        price: 18,
        src: IT
    },
    {
        name: "Dracula",
        series: "",
        category: "horror",
        price: 12,
        src: D
    },
    {
        name: "The Exorcist",
        series: "",
        category: "horror",
        price: 14,
        src: E
    },
    {
        name: "Frankenstein",
        series: "",
        category: "horror",
        price: 11,
        src: F
    },
    {
        name: "Pet Sematary",
        series: "",
        category: "horror",
        price: 13,
        src: P
    },
    {
        name: "The Haunting of Hill House",
        series: "",
        category: "horror",
        price: 16,
        src: H
    },
    {
        name: "The Book Thief",
        series: "",
        category: "historical fiction",
        price: 14,
        src: BOOK
    },
    {
        name: "All the Light We Cannot See",
        series: "",
        category: "historical fiction",
        price: 17,
        src: ALL
    },
    {
        name: "The Nightingale",
        series: "",
        category: "historical fiction",
        price: 16,
        src: N
    },
    {
        name: "Wolf Hall",
        series: "",
        category: "historical fiction",
        price: 18,
        src: W
    },
    {
        name: "The Pillars of the Earth",
        series: "",
        category: "historical fiction",
        price: 20,
        src: TPOTE
    },
    {
        name: "Outlander",
        series: "",
        category: "historical fiction",
        price: 15,
        src: O
    },
    {
        name: "Gone with the Wind",
        series: "",
        category: "historical fiction",
        price: 19,
        src: G
    }    
    
    
];


function displayBooks(booksToDisplay) {
    const bookList = document.getElementById("book-list");
    bookList.innerHTML = '';

    booksToDisplay.forEach(book => {
        const bookDiv = document.createElement("div");
        bookDiv.className = "container";

        const img = document.createElement("img");
        img.src = book.src;
        img.alt = book.name;
        img.style.zIndex = "-1"
        img.style.width = "220px"; 
        img.style.height = "400px"; 

        const series = document.createElement("h4");
        series.textContent = book.series;

        const name = document.createElement("h2");
        name.textContent = book.name;

        const price = document.createElement("h1");
        price.textContent = `$${book.price}`;
        
        const addToCartButton = document.createElement("button");
        addToCartButton.style.height = "auto";
        addToCartButton.style.width = "200px";
        addToCartButton.innerText = "Adaugă în coș";
        addToCartButton.onclick = function() {
            addToCart(book);
            cartPrice += book.price;
            console.log(cartPrice)
        };
        
       

        bookDiv.appendChild(img);
        bookDiv.appendChild(name);
        bookDiv.appendChild(series);
        bookDiv.appendChild(addToCartButton);
        bookDiv.appendChild(price);
    
        bookList.appendChild(bookDiv);
    });
}

function addToCart(book) {
    cart.push(book);
    cartPrice += book.price;
    if (isCartVisible) {
        showCartContents(); 
    }
    updateCartUI(); 
}

function updateCartUI() {
    console.log(cart); 
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


document.addEventListener('DOMContentLoaded', function() {
    const homeButton = document.getElementById('home');
    const filterButtons = document.querySelectorAll('#filter-menu button');
    const sortButtons = document.querySelectorAll('.sort');
    const filtre = document.querySelector("#filtre")
    const categoryButtons = document.querySelectorAll(".category");

    homeButton.addEventListener('click', function() {
        displayBooks(books);
        
        filterButtons.forEach(button => button.classList.remove('button-active'));
        sortButtons.forEach(button => button.classList.remove('button-active'));
        
        homeButton.classList.add('button-active');
        document.querySelector("#filtre").classList.remove('button-active');
    });


    filtre.addEventListener('click', function() {
        displayBooks(books);
        document.querySelector("#home").classList.remove('button-active');
        filterButtons.forEach(button => button.classList.remove('button-active'));
        sortButtons.forEach(button => button.classList.remove('button-active'));
        filtre.classList.add('button-active');
    });

    
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            const category = this.getAttribute('data-category');
            const filteredBooks = books.filter(book => book.category.toLowerCase() === category.toLowerCase());
            displayBooks(filteredBooks);

            
            filterButtons.forEach(btn => btn.classList.remove('button-active'));
            this.classList.add('button-active');
            
            homeButton.classList.remove('button-active');
        });
    });


    sortButtons.forEach(button => {
        button.addEventListener('click', function() {
            document.getElementById("home").classList.remove('button-active');
            document.getElementById("filtre").classList.remove('button-active');
            categoryButtons.forEach(btn => btn.classList.remove('button-active'))
            sortButtons.forEach(btn => btn.classList.remove('button-active'));
            this.classList.add('button-active');
        });
    });





});


document.addEventListener('DOMContentLoaded', function() {
    const searchInput = document.getElementById('search-input');

    searchInput.addEventListener('keyup', function() {
        const searchText = searchInput.value.toLowerCase();
        const filteredBooks = books.filter(book => book.name.toLowerCase().includes(searchText));
        displayBooks(filteredBooks);
    });

    
});

document.getElementById('cart').addEventListener('click', showCartContents);


function removeFromCart(index) {
    cartPrice -= cart[index].price;
    cart.splice(index, 1);
    if (isCartVisible) {
        showCartContents(); // Actualizează dinamic conținutul coșului după eliminare
    }
    updateCartUI(); 
}

document.getElementById('cart').addEventListener('click', toggleCartContents);

function toggleCartContents() {
    const cartContentDiv = document.getElementById('cart-content');
    if (isCartVisible) {
        cartContentDiv.innerHTML = ''; 
        isCartVisible = false; 
    } else {
       
        showCartContents();
        isCartVisible = true;
    }
}

function showCartContents() {
    const cartContentDiv = document.getElementById('cart-content');
    cartContentDiv.innerHTML = '';

    if (!isCartVisible || cart.length === 0) {
        cartContentDiv.style.display = 'none';
        return;
    }
    cartContentDiv.style.display = 'block';

    let total = 0;

    cart.forEach((book, index) => {
        const bookElement = document.createElement('div');
        bookElement.innerHTML = `
            <img src="${book.src}" alt="${book.name}" style="width: 100px; height: 150px;">
            <p>${book.name}</p>
            <p>Preț: $${book.price}</p>
        `;

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.addEventListener('click', function() {
            removeFromCart(index);
        });

        bookElement.appendChild(deleteButton);
        cartContentDiv.appendChild(bookElement);

        total += book.price;
    });

    const totalElement = document.createElement('div');
    totalElement.innerHTML = `<h3>Total: $${total}</h3>`;
    cartContentDiv.appendChild(totalElement);
}


function hideCartContents() {
    const cartContentDiv = document.getElementById('cart-content');
    cartContentDiv.innerHTML = ''; 
    cartContentDiv.style.display = 'none'; 
}

function toggleCartContents() {
    const cartButton = document.getElementById('cart'); 
    isCartVisible = !isCartVisible; 
    if (isCartVisible) {
        showCartContents(); 
        cartButton.classList.add('button-active');
    } else {
        hideCartContents(); 
        cartButton.classList.remove('button-active'); 
    }
}


function addToCart(book) {
    cart.push(book);
    updateCartUI();
    if (isCartVisible) {
        showCartContents(); 
    }
}
