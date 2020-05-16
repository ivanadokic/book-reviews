class BookSerializer
  include FastJsonapi::ObjectSerializer
  attributes :title, :author, :genre, :image_url
  has_many :reviews
end
