class Review{

    static all = []
  
    constructor(description){
      this.description = description

      this.element = document.createElement('div')
      this.element.className = "review"
      this.element.id = `review-${this.id}`

      Review.all.push(this)
      
    }
    books(){
      return Book.all.filter(function(book){
        return book.title === this.id
      }, this)
    }
  
  fullRender(){
    this.element.innerHTML = `
    <h1>${this. description}</h1>
    <h3>This book's Review: <h3>
    ${this.books().map(book => book.title).join(", ")}
    `
    return this.element

  }
}