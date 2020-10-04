class ReviewsAdapter {
  constructor(baseURL) {
    this.baseURL = baseURL;
  }

  fetchReviews() {
    fetch(this.baseURL)
      .then((res) => res.json()) //function(response) {
      //   return response.json();
      // }
      .then((resObj) => {
        resObj.data.forEach((obj) => {
          let sanitized = { id: obj.id, ...obj.attributes };
          new Review(sanitized);
          console.log(sanitized);
        });
      })
      .then(() => console.log(Review.all));
  }
}
