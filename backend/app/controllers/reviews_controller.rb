class ReviewsController < ApplicationController
    def index
        reviews = Review.all
        render json: ReviewSerializer.new(reviews)
      end
end
