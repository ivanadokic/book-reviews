class BooksController < ApplicationController

    # GET /books
    def index
        books = Book.all 
        options = {}
        options[:include] = [:reviews]  
        # Beacuse we have Serialziers when including :reviews
        #Fast JSON API will automatically serialize their attributes as well
        #the recommended method is to pass in a second options parameter to the serializer
        # indicating that we want to include those objects
        render json: BookSerializer.new(books, options)
    end
    
    def show
        options = {}
        options[:include] = [:reviews, :'reviews.description', :'reviews.book_id']
     
        book = Book.find_by(id: params[:id])
        render json: BookSerializer.new(book, options)
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
