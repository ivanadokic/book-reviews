class BooksAdapter{
    constructor(baseURL){
      this.baseURL = baseURL
    }
  
    //the adapter is going to do all fetch requests that correspond to books
    fetchBooks(){
      fetch(this.baseURL)
        .then(res => res.json())
        .then(resObj => {
          resObj.data.forEach(bookObj => {
            let sanitized = {...bookObj.attributes, title: bookObj.title, genre: bookObj.genre}
            new Book(sanitized)
            
          })
        })
        .then(console.log)
    }
  }