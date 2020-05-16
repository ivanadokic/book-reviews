class BooksController < ApplicationController

    # GET /books
    def index
        books = Book.all 
        options = {}
        options[:include] = [:reviews]
        render json: BookSerializer.new(books, options)
    end
    def show
        book = Book.find_by(id: params[:id])
        render json: BookSerializer.new(book)
    end
    # POST /books
    def create
        
        new_book = Book.new(book_params)
        if new_book.save
            render json: BookSerializer.new(new_book)
        else
            render json: new_book.errors
        end
    end
   
    def destroy
        book = Book.find_by(id: params[:id])
        book.destroy
    end

    private

    def book_params
        params.require(:book).permit(:title, :author, :genre, :image_url)
    end
end
