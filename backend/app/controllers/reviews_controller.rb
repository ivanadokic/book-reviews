class ReviewsController < ApplicationController
    def index
        reviews = Review.all
        render json: ReviewSerializer.new(reviews)
      end

    def create
    end
    private 
    def review_params

    end
end
