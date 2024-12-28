let books = [];

function addBook(){
    const bookName = document.getElementById("bookName").value;
    const authorName = document.getElementById("authorName").value;
    const bookDescription = document.getElementById("bookDescription").value;
    const pageNumber = document.getElementById("pagesNumber").value;

    if(bookName === "" && authorName === "" && bookDescription === "" && pageNumber === ""){
        alert("Please provide legit details");
    }else{
        const book = {
            bookName,
            authorName,
            bookDescription,
            pageNumber
        }

        books.push(book);
        showBooks();
        clearInputs();
    }
}


function showBooks(){
    const dispBooks = books.map((book) => `<p>Book Name: ${book.bookName}</p>
    <p>Author Name: ${book.authorName}</p>
    <p>Description of Book: ${book.bookDescription}</p>
    <p>Number of Pages: ${book.pageNumber}</p>
    `);

    document.getElementById("books").innerHTML = dispBooks;
}

function clearInputs(){
    document.getElementById("bookName").value = "";
    document.getElementById("authorName").value = "";
    document.getElementById("pagesNumber").value = "";
    document.getElementById("bookDescription").value = "";
}