
//const bookList = document.getElementById('book-list')
//const bookTitle = document.getElementById('book-title')
////const bookAuthor = document.getElementById('book-author')
//const bookGenre = document.getElementById('book-genre')
//const bookImage = document.getElementById('book-image')
//const bookButton = document.getElementById('add-button')

//Get all Books
//Get all Reviews
const booksAdapter = new BooksAdapter("http://localhost:3000/books")
const reviewsAdapter = new ReviewsAdapter("http://localhost:3000/reviews")

booksAdapter.fetchBooks()
reviewsAdapter.fetchReviews()


//Add event listener on menu buttons
//Select our main div

const main = document.getElementById('main')
const menu = document.getElementById('menu')

const formDiv = document.createElement('div')

menu.addEventListener('click', handleMenuClick)
formDiv.addEventListener('click', handleFormSubmit)

function handleMenuClick(event){
  if (event.target.id !== menu){
    main.innerHTML = ``
    callbacks[`${event.target.id}`]()
  }
}

function handleFormSubmit(event){
  if(event.target.tagName == "BUTTON"){
    let inputs = formDiv.querySelectorAll('input')
    let select = formDiv.querySelector('select')
    let newBookObj = {
      title: inputs[0].value,
      author: inputs[1].value,
    genre: select.value
    }
    bookssAdapter.newBook(newBookObj)
  }
}

const callbacks = {
  allBooks: renderAllBooks,
  allReviews: renderAllReviews,
  booksReviews: renderAllbooksReviews,
  newBooks: renderNewBookForm,
  newReview: renderNewReviewForm
}

function renderAllBooks(){
 Book.all.forEach(book => {
    main.appendChild(book.fullRender())
  })
  //render all books with title, genre, author, image_url
}
function renderAllBooksReviews(){
  Book.all.forEach(review => {
     main.appendChild(review.fullRender())
   })

 }

 function renderNewBookForm(){
  formDiv.innerHTML = `
    Book Title:
    <input type="text" />
    <br>
    Book Author:
    <input type="text" />
    <br>
    Book Genre:
    <input type="text" />
    <br>
    Book Cover url:
    <input type="text" />
    <br>
    <select>
       <option value="default" selected="selected">Select one option </option>
     ${Brand.all.map(review => {
       return `<option value=${review.id}>${review.name}</option>`
     }).join("")}
    </select>
    <button>Make new Book!</button>
  `
  main.appendChild(formDiv)
}













//bookButton.addEventListener('click', handleSubmitBook)

//function fetchBooks(){
  //fetch all books
  //fetch("http://localhost:3000/books")
  //  .then(data => data.json())
 //.then(resToJson)
 //.then(function(jsonObj){
  // bookList.innerHTML = ""
  // let data = jsonObj.data
  // data.forEach(putBookOnDom) //forEach needs a callback function that we passes to another function or a method that determine the logic or return value/result of that function
 //  console.log(data)
// })
//}

//function handleSubmitBook(){
  //Grab the values of the inputs
//   let title = bookTitle.value
//   let author = bookAuthor.value
//   let genre = bookGenre.value
//   let image_url = bookImage.value

//   let newBookObj = JSON.stringify({
//       title: title,
//       author: author,
//       genre: genre,
//       image_url: image_url

//     })

//   let configObj = {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//         Accepts: "application/json"
//       },
//       body: newBookObj
//   }

//   fetch("http://localhost:3000/books", configObj)
//   .then(resToJson)
//   .then(function(respObj){
//     let bookObj = respObj.data
//     putBookOnDom(bookObj)
//   })
//  }
  
// function resToJson(res){
//   return res.json()
// }
  
// function putBookOnDom(book){
//   bookList.innerHTML += `
//     <li id="book-${book.id}">${book.attributes.title}, Written by ${book.attributes.author}, Book Genre: ${book.attributes.genre}, <img src="${book.attributes.image_url}" />
//      <button class="delete" data-id="${book.id}">Delete</button>
//     </li>
//     `
// }
// bookList.addEventListener('click', handleDelete)
  
// function handleDelete(e){
//   if (e.target.className = "delete"){

//     let configObj = {
//       method: "DELETE",
//       headers: {
//         "Content-Type": "application/json",
//         Accepts: "application/json"
//       }
//     }

//     let book_id = e.target.dataset.id
//     fetch(`http://localhost:3000/books/${book_id}`, configObj)
//       .then(function(){
//         console.log("Done!")
//       })
//     let el = document.getElementById(`book-${book_id}`)
//     el.remove()
//     console.log("removed!")
//   }
// }
  
  

// fetchBooks()

 

//const bookData = []
//bookData.map(book => new Book(book))
//class Book {
   //constructor(data) {
   // this.data = data
  // }

   // addComment(text) {
   //    this.data

//   add a form to the page 
  // click
   //add review to book
   //form will have a class add review

   