let subject_book = document.getElementById("subject_book");
document.getElementById("btn_search").addEventListener("click", async () => {
    deleteRows();
    let respons = await fetch(`https://www.googleapis.com/books/v1/volumes?q=${subject_book.value}&maxResults=9&printType=books&orderBy=newest`);
    let data = await respons.json();
    create_table(data.items);


});

function create_table(books) {
    for (let i = 0; i < books.length; i++) {
        document.getElementById("list_of_book").innerHTML += `<tr class="tr-update">
    <td><input type="checkbox" class="form-check-input"></td>
    <td>${books[i].volumeInfo.publishedDate}</td>
    <td>${books[i].volumeInfo.title}</td>
    <td>${books[i].volumeInfo.publisher}</td>
    <td><img src="${books[i].volumeInfo.imageLinks.thumbnail}" /></td>
    <td>Marvil</td>
    </tr>`
    }

    addBooks();

}


function addBooks() {

    let arr = [];
    let list_of_book = document.querySelectorAll(".form-check-input");
    list_of_book.forEach((e) => {
        e.addEventListener("click", () => {
            if (e.checked) {
                e.parentNode.parentNode.style.backgroundColor = "#5cb85c";
                arr.push(e.parentNode.parentNode);

            }
            else {
                e.parentNode.parentNode.style.backgroundColor = "white";
                arr.pop(e.parentNode.parentNode);
            }
        });
    });
    document.getElementById("btn_add").addEventListener("click", () => {
        arr.forEach((e) => {
            console.log(e);
        })
        alert("The books are added");
    })
}


function deleteRows() {
    if (document.querySelectorAll(".tr-update").length != 0) {
        document.querySelectorAll(".tr-update").forEach((e) => {
            e.remove();
        });
    }
}