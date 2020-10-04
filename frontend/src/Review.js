class Review {
  static all = [];

  constructor({ description, book_id, id }) {
    this.description = description;
    this.book_id = book_id;
    this.id = id;
    this.element = document.createElement("div");
    this.element.className = "review";
    this.element.id = `review-${this.id}`;

    Review.all.push(this);
  }

  books() {
    return Book.all.filter(function (book) {
      return book.id === this.book_id;
    }, this);
  }

  submit() {
    const body = JSON.stringify({
      review: { description: this.description, book_id: this.book_id },
    });
    fetch("http://localhost:3000/reviews", {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: body,
      method: "POST",
    })
      .then((res) => {
        const json = res.json();
        console.log(res.status);
        console.log(json);
        return json;
      })
      .then((data) => {
        this.id = data.id;

        callbacks["booksReviews"]();
        console.log("successfully created review");
      });
  }
}
