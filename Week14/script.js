// Book factory function
function createBook(title, author) {
    return { title, author };
}

// Function to add a book
function addBook() {
    let title = document.getElementById("title").value;
    let author = document.getElementById("author").value;

    if (title === "" || author === "") {
        alert("Please enter both title and author");
        return;
    }

    let book = createBook(title, author);
    displayBook(book);

    document.getElementById("title").value = "";
    document.getElementById("author").value = "";
}

// Function to display a book in the table
function displayBook(book) {
    let table = document.getElementById("book-list");
    let row = document.createElement("tr");

    row.innerHTML = `
        <td>${book.title}</td>
        <td>${book.author}</td>
        <td><button onclick="removeBook(this)">Remove</button></td>
    `;

    table.appendChild(row);
}

// Function to remove a book
function removeBook(button) {
    let row = button.parentElement.parentElement;
    row.remove();
}
