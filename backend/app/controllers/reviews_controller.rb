class ReviewsController < ApplicationController
  def index
    reviews = Review.all
    render json: ReviewSerializer.new(reviews)
  end

  def create
    new_review = Review.new(review_params)
      if new_review.save
        render json: ReviewSerializer.new(new_review)
      else
        render json: new_review.errors
      end
  end
  private 
  def review_params
    params.require(:review).permit(:description, :book_id)
  end
end
