class BooksAdapter{
    constructor(baseURL){
      this.baseURL = baseURL
    }
    createBook(bookObj) {
      const body = JSON.stringify({
        book: bookObj
      })
      return fetch(this.baseURL, {
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: body,
        method: 'POST'
      }).then(res => { 
        const json = res.json()
        console.log(res.status)
        console.log(json)
        return json
      })
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