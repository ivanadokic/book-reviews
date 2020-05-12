class ReviewSerializer
    include FastJsonapi::ObjectSerializer
    attributes :description
    belongs_to :book
end
  