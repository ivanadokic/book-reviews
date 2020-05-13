class ReviewsAdapter{
    constructor(baseURL){
      this.baseURL = baseURL
    }
  
    fetchReviews(){
      fetch(this.baseURL)
        .then(res => res.json())
        .then(resObj => {
          resObj.data.forEach(obj => {
            let sanitized = {description: obj.description, ...obj.attributes}
            new Review(sanitized)
          })
        })
        .then(() => console.log(Review.all))
    }
  }