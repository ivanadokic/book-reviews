
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

function handleMenuClick(event){
  if (event.target.id !== menu){
    main.innerHTML = ``
    callbacks[`${event.target.id}`]()
  }
}

function handleNewBookSubmit(event){
  event.preventDefault()
    let inputs = formDiv.querySelectorAll('input')
    let select = formDiv.querySelector('select')
    let newBookObj = {
      title: inputs[0].value,
      author: inputs[1].value,
    genre: inputs[2].value,
    image_url: inputs[3].value
    }
    
    return booksAdapter.createBook(newBookObj).then(book => {
      console.log("book created!", book)
    }).catch(err => {
      console.error(err)
    })
  }

function handleNewReviewSubmit(event) {
  event.preventDefault()

    const reviewObj = {
      book_id: event.target.querySelector('select').value,
      description: event.target.querySelector('input').value
    }
    const review = new Review(reviewObj)
    review.submit()
}

const callbacks = {
  allBooks: renderAllBooks,
  booksReviews: renderAllBooksReviews,
  newBook: renderNewBookForm,
  newReview: renderNewReviewForm
}

function renderAllBooks(){
 Book.all.forEach(book => {
    main.appendChild(book.fullRender())
  })
  //render all books with title, genre, author, image_url
}
function renderAllBooksReviews(){
 Review.all.forEach(review => {
     main.appendChild(review.fullRender())
   })
//render all reviews with description
 }

function renderNewBookForm(){
  formDiv.innerHTML = `
  <form>
    Book Title:
    <input type="text" name="title" />
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
    
    <input type="submit" value="Make new Book!" />
    </form>
  `

  main.appendChild(formDiv)
  formDiv.querySelector('form').addEventListener('submit', handleNewBookSubmit)

}


function renderNewReviewForm(){
  formDiv.innerHTML = `
    <form>
      Select a Book:<select>
        <option value="default" selected="selected">Select one option </option>
        ${Book.all.map(book => {
          return `<option value=${book.id}>${book.title} by ${book.author}</option>`
        }).join("")}
      </select>
        <br>
        <input type="text" name="description" />
        <input type="submit" value="Please leave a Review!"/>
        <br>

        
    </form>
  `
  formDiv.querySelector('form').addEventListener('submit', handleNewReviewSubmit)
  main.appendChild(formDiv)
}


