class Review {

    static all = []
  
    constructor({description, book_id, id}){
      this.description = description
      this.book_id = book_id
      this.id = id
      this.element = document.createElement('div')
      this.element.className = "review"
      this.element.id = `review-${this.id}`

      Review.all.push(this)
      
    }
    
    book(){
      return Book.all.filter(function(book){
        return book.id === this.book_id
      }, this)
    }

  submit() {
    const body = JSON.stringify({
      review: {description: this.description, book_id: this.book_id}
    })
    fetch('http://localhost:3000/reviews', {
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
    }).then(data => {
      this.id = data.id

      //do stuff - reset form or show something else
      callbacks['booksReviews']()
      console.log('successfully created review')
    })
  }

  fullRender(){
    this.element.innerHTML = `

    <form>
    <br>
      Read reviews for this Book:<select>
        <option value="default" selected="selected">Select one option </option>
        ${Book.all.map(book => {
          return `<option value=${book.id}>${book.title} by ${book.author}</option>`
        }).join("")}
      </select>
        <br>  
    </form>
  
 
    <h1>${this.description}</h1>
    <p>${this.book().review}</p>`
    
    //<p>Review: ${this.reviews().map(review => review.description).join(", ")}</p>
   return this.element
  }
  
}

