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
            const {id, attributes} = bookObj
            const sanitized = {
              ...attributes,
              id
            }
            new Book(sanitized)
            
          })
        })
        .then(console.log)
    }
  }