# Book-reviews

## Overview
What is on your reading list, option to share your favorite titles and add reviews, anything a potential reader should know about such as “Beautiful writing”, “great pricing” were used as a user story and a features on Book reviews application.

This is Single Page Application(SPA) with HTML, CSS, and JavaScript frontend and Rails API backend. 

<a href="https://imgur.com/weFiLwg"><img src="https://i.imgur.com/weFiLwg.jpg" title="source: imgur.com" /></a>
## Installation

Fork and clone repo:
https://github.com/ivanadokic/book-reviews

Using two terminals, switch to each respective directory:

$ cd book-reviews/backend/
$ cd book-reviews/frontend/

Startup the server :
$ rails s

Enter in your browser to launch the rails server:
$  http://localhost:3000/books

## Usage

Following features were build and as a user, i can:

-see all books with their: title, genre, book cover 

-see all reveiws for particular book

-create a new book and add it

-cerate a new review for selected book

## Project requirements
-JavaScript frontend with a Rails API backend. All interactions between the client and the server required to be handled asynchronously (AJAX) and use JSON as the communication format.

-It needed to organize data through Object Oriented JavaScript (classes) to encapsulate related data and behavior, and domain model served by the Rails backend must include a resource with at least one has-many relationship.

-The backend and frontend must collaborate to demonstrate Client-Server Communication.

-Application should have at least 3 AJAX calls, covering at least 2 of Create, Read, Update, and Delete (CRUD).

-Client-side JavaScript code must use fetch with the appropriate HTTP verb, and your Rails API should use RESTful conventions.

### JavaScript
Use classes and functions to organize code into reusable pieces.
Translate JSON responses into JavaScript model objects using ES6 class or constructor function syntax.
Use ES6 features when appropriate (e.g. arrow functions, let & const, rest and spread syntax).

### Rails
Follow Rails MVC and RESTful conventions. 
Well-named variables and methods
Short, single-purpose methods
