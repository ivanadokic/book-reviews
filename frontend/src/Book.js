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
      this.element.title = `book-${this.id}`
  
      Book.all.push(this)
    }
    review(){
      return Review.all.find(review => review.id === this.book_id)
    }
    fullRender(){
      this.element.innerHTML = `
      <h1>${this.author}</h1>
      <p>Book Title: ${this.title}</p>
      <p>Genre: ${this.genre}</p>
      <p>Book Cover: ${this.image_url}</p>
      <p>Review: ${this.review().description}`
      return this.element
    }
}
