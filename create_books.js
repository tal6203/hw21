
const main = async () => {
  let respons = await fetch('https://www.googleapis.com/books/v1/volumes?q=javascript&maxResults=16&printType=books&orderBy=newest');
  let data = await respons.json();
  create_books(data.items);
}

main();

function create_books(books) {

  for (let i = 0; i < books.length; i++) {
    document.getElementById("cards").innerHTML += `<div class = "col"><div class="card" style="width: 18rem ; margin:auto">
        <img src="${books[i].volumeInfo.imageLinks.thumbnail}" class="card-img-top" alt="book" />
        <div class="card-body">
          <h5 class="card-title">${books[i].volumeInfo.title}</h5>
          <p class="card-text">By: ${books[i].volumeInfo.authors}</br>
          ${books[i].volumeInfo.publishedDate}
          </br>
          <span class="text-success">Price: ${books[i].volumeInfo.pageCount != undefined && books[i].volumeInfo.pageCount != 0 ? books[i].volumeInfo.pageCount : Math.floor(Math.random() * (400 - 100)) + 100}$</span>
          </p>
          <a href="${books[i].volumeInfo.infoLink}" class="btn btn-primary">More about this book</a>
          </br></br>
          <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#myModal">
          Purchase
        </button>
        </div>
      </div></div>
      <div class="modal" id="myModal">
  <div class="modal-dialog">
    <div class="modal-content">

      <!-- Modal Header -->
      <div class="modal-header">
        <h4 class="modal-title"></h4>
        <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
      </div>

      <!-- Modal body -->
      <div class="modal-body">
        
       
        
        
      </div>

      <!-- Modal footer -->
      <div class="modal-footer">
        <button type="submit" form="purchase" class="btn btn-success">Buy</button>
        <button type="button" class="btn btn-danger" data-bs-dismiss="modal">Close</button>
      </div>

    </div>
  </div>
</div>`
  }
  document.querySelectorAll(".card").forEach((e) => {
    e.addEventListener("click", (e) => {
      document.querySelector(".modal-title").innerHTML = e.currentTarget.querySelector(".card-title").innerHTML;
      document.querySelector(".modal-body").innerHTML = e.currentTarget.querySelector(".card-text").innerHTML;
      document.querySelector(".modal-body").innerHTML += `</br><span>Units in Stock: ${Math.floor(Math.random() * 40)}</span>
      <form id = "purchase" method="post" action="#" onsubmit="return valid_form()">
      <label for="first_name">First name:</label>
      <input id="first_name" class="form-control" type="text" pattern="^[a-zA-Z]+$"  placeholder="First name" required/>
      <label for="last_name">Last name:</label>
      <input id="last_name" type="text" class="form-control" pattern="^[a-zA-Z]+$"  placeholder="Last name"  required/>
      <label for="adress">Adress:</label>
      <input id="adress" type="text" class="form-control"  placeholder="Adress"  required/>
      <label for="email">Email:</label>
      <input id="email" type="email" class="form-control"  placeholder="Email"  required/>
      <label for="user_id">ID:</label>
      <input id="user_id" type="text" class="form-control" pattern="[0-9]{9}" maxlength="9" placeholder="ID"  required/>
      <label for="credit_card">Credit Card Number:</label></br>
      <input id ="credit_card"  type="text" pattern="[0-9]{4}-[0-9]{4}-[0-9]{4}-[0-9]{4}" maxlength="20" placeholder="xxxx-xxxx-xxxx-xxxx" required/>
      <input id ="credit_expires" type="text" pattern="[0-9]{2}/[0-9]{4}" maxlength="7" placeholder="MM / YYYY" required/></br></br>
      <input id ="credit_cvc" type="text" pattern="[0-9]{3}" maxlength="3" placeholder="CVC" required/>
      </form>
      `
    });
  });
}





