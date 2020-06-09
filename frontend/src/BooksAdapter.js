class BooksAdapter{
    constructor(baseURL){
      this.baseURL = baseURL
    }
    createBook(bookObj) {
      const body = JSON.stringify({
        //JSON.stringify() method converts a JavaScript object or value to a JSON string
        book: bookObj
      })
      return fetch(this.baseURL, {
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: body,
        method: 'POST'
      }).then(res => res.json())
       .then(resObj => {
        const {id, attributes} =resObj.data
        const sanitized = {
          ...attributes,
          id
        }
        new Book(sanitized)
        
        
   
     
      
        
      })
      
    
    }
    //the adapter is going to do all fetch requests that correspond to books
    fetchBooks(){
      fetch(this.baseURL)
        .then(res => res.json())//function(response) {
          //   return response.json();
         // }
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
        .then(console.log(Book.all))
    }
  }