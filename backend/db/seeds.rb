# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

10.times do
    title = Faker::Name.name
    author = Faker::Name.name
    genre = Faker::Name.name
    image_url = "http://via.placeholder.com/150"
    Book.create!(
                 title: title,
                 author: author,
                 genre: genre,
                 image_url: image_url)
    end

review1 = Review.create(description: "This book is exciting and fun.")
review2 = Review.create(description: "I loved every moment of this book.")