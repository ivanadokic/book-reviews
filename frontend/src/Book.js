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
    reviews(){
      return Review.all.filter(review => review.book_id == this.id)
    }

    
    
    fullRender(){
      this.element.innerHTML = `
      <h1>${this.author}</h1>
      <p>Book Title: ${this.title}</p>
      <p>Genre: ${this.genre}</p>
      <p>Book Cover: ${this.image_url}</p>
      <p>Read all Reviews: ${this.reviews().map(review => review.description).join(", ")}</p>
      `
      return this.element
    }

   
  


}
