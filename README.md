# Book-Finder
This project is a web application that allows users to search for books, view details about them, and save their favorite books to a personal account for future reference. It features a simple user interface where users can search for books, view results, create an account, log in, and manage their saved books.

# Features

Book Search: Search for books by title, author, or keyword and view detailed information, including book title, author, description, image, and a link to the Google Books site.
Account Creation & Login: Create an account by providing a username, email, and password. Log in using your email and password to access your saved books.
Save Books: Once logged in, users can save books to their personal list for easy access later.
View Saved Books: Users can view all the books they’ve saved, with the option to remove books from the list.
Logout: Users can log out of the application at any time, which will reset the available options to Search for Books and Login/Signup.
# User Stories
As an avid reader:

I want to search for new books to read so that I can keep a list of books to purchase.
# Acceptance Criteria:

When the page loads:

I am presented with a menu containing:
Search for Books

Login/Signup

An input field to search for books and a submit button.

When I click on the Search for Books menu option:


I am presented with an input field to search for books and a submit button.
When I am not logged in and search for books:

I can enter a search term and click the submit button.
I will see several search results, each displaying:

Book title

Author

Description

Image

A link to the book on Google Books.

When I click on Login/Signup:

A modal appears with a toggle option to switch between Login and Signup.
When I toggle to Signup:

I am prompted to enter a username, email address, and password, with a signup button.
When I toggle to Login:

I am prompted to enter my email and password, with a login button.
When I sign up successfully:

My user account is created, and I am logged into the site.
When I log in successfully:

The menu options change to:

Search for Books

View My Saved Books

Logout

When logged in and searching for books:

I enter a search term and click submit.

I see the search results, now with a Save button for each book.

When I save a book:

The book is added to my saved books list.

When I view my saved books:

I can see a list of all books I’ve saved, with options to:

View details (Title, Author, Description, Image, and Link).

Remove a book from my list.

When I click the Remove button:

The book is deleted from my saved books list.

When I click Logout:

I am logged out, and the menu returns to the options:

Search for Books

Login/Signup

# Technologies Used

Frontend: HTML, CSS, JavaScript
Backend: Node.js (optional if implementing authentication and database)
APIs: Google Books API (for book search and details)
Authentication: Firebase Auth or similar (for user account management)
Database: Firebase Firestore, MongoDB, or similar (for saving user data and books)


# License
This project is licensed under the MIT License. See the LICENSE file for details.

# Links

https://book-finder-d265.onrender.com

https://github.com/tinaara07/Book-Finder



