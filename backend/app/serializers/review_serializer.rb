class ReviewSerializer
    include FastJsonapi::ObjectSerializer
    attributes :description, :book_id
    belongs_to :book
end
  