class Book {
    static all = []

    constructor({title, author, genre, image_url, id}){
      this.id = id
      this.title = title
      this.author = author
      this.genre = genre
      this.image_url = image_url
     
  
      this.element = document.createElement('div')
      this.element.className = "book"
      this.element.id = `book-${this.id}`
  
      Book.all.push(this)
    }
    reviews(){
      return Review.all.filter(review => review.book_id == this.id)
    }//filter find mutliple matches and map find just one
    
 
    fullRender(){
      this.element.innerHTML = `
      <h1>${this.author}</h1>
      <p>Book Title: ${this.title}</p>
      <p>Genre: ${this.genre}</p>
      <p>Book Cover: ${this.image_url}</p>
      <p>
        <a href="#" class="book-link" data-book-id="${this.id}" id="book-${this.id}-reviews">Show reviews (${this.reviews().length})</a>
        <ul id="book-${this.id}-review-list" class="hidden">
          ${this.reviews().map(review => {
            return `<li>${review.description}</li>`
          }).join("")}
        </ul>
        </p>
      `
      return this.element
    }

   
  


}
