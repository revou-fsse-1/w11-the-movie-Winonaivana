# Week-11 Individual project

Movie Watchlist Website

[link](https://fanciful-strudel-7e98c0.netlify.app/src/)

Capabilities:

1. Register Page - takes in user email, username and password which are then stored in the API, user is unable to use existing email or username
2. Login Page - takes in user username and password, then compare it with the ones existing in the API, if it matches then set local storage("isLoggedIn", true) if not, vice versa
3. Home Page - fetch data from API and display in HTML, user is able to click on movies to see details, user is able to search movies
4. Movie Page - when user clicked on a specific movie in the home page, the movie id is stored in the local storage which will then be used to fetch a movie by id from the API and display the contents in the movie page. User can also add the displayed movie to the watchlist or if already existed in the watchlist, remove it
5. Watchlist Page - movies added by the user to the watchlist can be viewed here
