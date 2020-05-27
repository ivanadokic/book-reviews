
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

menu.addEventListener('click', handleMenuClick) //trigger handleMenuClick function

function handleMenuClick(event){
  if (event.target.id !== menu){ //check if the target is anyting besides the menu

    main.innerHTML = ``//to clear inner html before its replaced, this is logic that helps page change
    callbacks[`${event.target.id}`]()
  }
}

function handleNewBookSubmit(event){
  event.preventDefault()
    let inputs = formDiv.querySelectorAll('input') //iterate over all and use index to grab the value
    let select = formDiv.querySelector('select')
    let newBookObj = {
      title: inputs[0].value,
      author: inputs[1].value,
    genre: inputs[2].value,
    image_url: inputs[3].value
    }
    
    return booksAdapter.createBook(newBookObj).then(book => { //passing newBookObj to booksAdapter
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

//defined object with key value pair
const callbacks = { 
  allBooks: renderAllBooks,
  booksReviews: renderAllBooksReviews,
  newBook: renderNewBookForm,
  newReview: renderNewReviewForm
}

function renderAllBooks(){
 Book.all.forEach(book => {
    // render all books with title, genre, author, image_url
    main.appendChild(book.fullRender())
  })

  main.addEventListener("click", (event) => {
    if(event.target.matches(".book-link")) { //
      event.preventDefault() //prevent from following link
      const book_id = event.target.dataset.bookId
      
      const reviewList = document.querySelector(`#book-${book_id}-review-list`)
      const isHidden = reviewList.className.includes("hidden")
      console.log("link clicked")
      console.log(reviewList.className)
      debugger
      if(isHidden) {
        reviewList.className = ""
        event.target.text = "Hide reviews"
        console.log("link clicked hidden")
      }
      else {
        reviewList.className = "hidden"
        event.target.text = "Show reviews" 
        
      }
    }
  })
  
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


