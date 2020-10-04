//Get all Books
//Get all Reviews
const booksAdapter = new BooksAdapter("http://localhost:3000/books");
const reviewsAdapter = new ReviewsAdapter("http://localhost:3000/reviews");

booksAdapter.fetchBooks().then(() => renderAllBooks())
reviewsAdapter.fetchReviews();

//Add event listener on menu buttons
//Select our main div

const main = document.getElementById("main");
const menu = document.getElementById("menu");

const formDiv = document.createElement("div");

menu.addEventListener("click", handleMenuClick); //trigger handleMenuClick function

function handleMenuClick(event) {
  if (event.target.id !== menu) {
    //check if the target is anyting besides the menu
    //bcs if clicked on menu that will be menuid undefined in Object/collback

    main.innerHTML = ``; //to clear inner html before its replaced, this is logic that helps page change
    callbacks[`${event.target.id}`]();
  }
}

function handleNewBookSubmit(event) {
  //By default, Form elements automatically submit the form,
  //which redirects the browser to a new url. We want to prevent
  //that event from performing its default behavior (submitting the form),
  //because we want to update the DOM using JavaScript
  event.preventDefault();
  let inputs = formDiv.querySelectorAll("input"); //iterate over all and use index to grab the value
  let select = formDiv.querySelector("select");
  let newBookObj = {
    title: inputs[0].value,
    author: inputs[1].value,
    genre: inputs[2].value,
    image_url: inputs[3].value,
  };

  return booksAdapter
    .createBook(newBookObj)
    .then((book) => {
      //passing newBookObj to booksAdapter
      console.log("book created!", book);
    })
    .catch((err) => {
      console.error(err);
    });
}

function handleNewReviewSubmit(event) {
  event.preventDefault();

  const reviewObj = {
    book_id: event.target.querySelector("select").value,
    description: event.target.querySelector("input").value,
  };
  const review = new Review(reviewObj);
  review.submit();
}

//defined object with key value pair
const callbacks = {
  allBooks: renderAllBooks,
  booksReviews: renderAllBooksReviews,
  newBook: renderNewBookForm,
  newReview: renderNewReviewForm,
};
const searchInput = document.getElementById("myInput");
function bookMatchesSearch(book, searchQuery) {
  if (!searchQuery) { return true }
  const value = searchQuery.toString().toLowerCase();
  const matchesGenre = book.genre && book.genre.toLowerCase().includes(value);
  return (matchesGenre)
}
function renderAllBooks() {
  searchInput.value = ""
  renderBooks()
}
function renderBooks(searchQuery) {
  // delete any books that already exist on the page
  main.innerHTML = ""
  Book.all.forEach((book) => {
    // render all books if they match the search query with title, genre, author, image_url
    if (bookMatchesSearch(book, searchQuery)) {
      main.appendChild(book.fullRender());
    }
  });
}
searchInput.addEventListener("keyup", function (event) {
  console.log(`search input is ${searchInput.value}`)
  const searchQuery = searchInput.value
  renderBooks(searchQuery)
})

main.addEventListener("click", (event) => {
  if (event.target.matches(".book-link")) {
    //
    event.preventDefault(); //prevent from following link
    const book_id = event.target.dataset.bookId;

    const reviewList = document.querySelector(`#book-${book_id}-review-list`);
    const isHidden = reviewList.className.includes("hidden");

    if (isHidden) {
      reviewList.className = "";
      event.target.text = "Hide reviews";
    } else {
      reviewList.className = "hidden";
      event.target.text = "Show reviews";
    }
  }
});

function renderAllBooksReviews() {
  Review.all.forEach((review) => {
    main.appendChild(review.fullRender());
  });
  //render all reviews with description
}

function renderNewBookForm() {
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
  `;

  main.appendChild(formDiv);
  formDiv.querySelector("form").addEventListener("submit", handleNewBookSubmit);
}

function renderNewReviewForm() {
  formDiv.innerHTML = `
    <form>
      Select a Book:<select>
        <option value="default" selected="selected">Select one option </option>
        ${Book.all
      .map((book) => {
        return `<option value=${book.id}>${book.title} by ${book.author}</option>`;
      })
      .join("")}
      </select>
        <br>
        <input type="text" name="description" />
        <input type="submit" value="Please leave a Review!"/>
        <br>

        
    </form>
  `;
  formDiv
    .querySelector("form")
    .addEventListener("submit", handleNewReviewSubmit);
  main.appendChild(formDiv);
}
//querySelector() takes one argument, and returns the first element that matches these selectors.

