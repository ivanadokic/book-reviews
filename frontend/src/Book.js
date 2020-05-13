class Books{
    static all = []
 
  
    constructor({title, author, genre, image_url}){
      this.title = title
      this.author = author
      this.genre = genre
      this.image_url = image_url
  
      //this.element = document.createElement('div')
      //this.element.className = "book"
      //this.element.id = `book-${this.id}`
  
      Book.all.push(this)
    }
}