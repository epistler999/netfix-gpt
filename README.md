# NETFLIX GPT (https://netflixgpt-14b08.web.app/)

### Process to follow - map of website
* header -> logo
* login Page -> Form
* SignUp Page
* Browse Page -> movie list.

## Browse page
### MainContainer
* Video Title
* Video Background
### SecondaryContainer
* MovieList*n
* cards*n

# Netflix GPT
- Create React App
- Configured TailwindCSS
- Header
- Routing of App
- Login Form
- Sign up Form
- Form Validation
- useRef Hook
- Firebase Setup
- Deploying our app to production
- Create SignUp User Account
- Implement Sign In user Api
- Created Redux Store with userSlice
- Implemented Sign out
- Update Profile
- BugFix: Sign up user displayName and profile picture update
- BugFix: if the user is not logged in Redirect /browse to Login Page and vice-versa
- Unsubscibed to the onAuthStateChanged callback
- Add hardcoded values to the constants file
- Regiter TMDB API & create an app & get access token
- Get Data from TMDB now playing movies list API
- Custom Hook for Now Playing Movies
- Create movieSlice
- Update Store with movies Data
- Planning for MainContauiner & secondary container
- Fetch Data for Trailer Video
- Update Store with Trailer Video Data
- Embedded the Yotube video and make it autoplay and mute
- Tailwind Classes to make Main Container look awesome
- Build Secondary Component
- Build Movie List
- build Movie Card
- TMDB Image CDN URL
- Made the Browsre page amazing with Tailwind CSS
- usePopularMovies Custom hook
- GPT Search Page
- GPT Search Bar
- (BONUS) Multi-language Feature in our App)
- Get Open AI Api Key
- Gpt Search API Call
- fetched gptMoviesSuggestions from TMDB
- created gptSlice added data
- Resused Movie List component to make movie suggestion container
- Memoization
- Added .env file
- Adding .env file to gitignore
- Made our Site Responsive

# Features
- Login/Sign Up
    - Sign In /Sign up Form
    - redirect to Browse Page
- Browse (after authentication)
    - Header
    - Main Movie
        - Tailer in Background
        - Title & Description
        - MovieSuggestions
            - MovieLists * N
- NetflixGPT
    - Search Bar
    - Movie Suggestions
## env variable
* when we don't want to bundle some secret key or API access key , we should put those variable into env file so that it does not bundle those variabel. Usually these keys are maintained by backend but sometimes key are needed to maintained from UI(client side) also. In that case use env variables. Also put env file into git ignore so that it doesnot get pushed into github. In production time, it will be used.

## Memoisation
* Hit the api only when data is not present, if we change the section and data is not changed do not hit the API . Since we are already using the redux to store the data, we can fetch the data using selector and see if the data is present or not. If present do not hit else hit.

# Project Setup
- Before starting the project please add .env file and add TMDB and OPENAI KEY into it.

