# Stolen Bike Index - Coding Challenge

## What is it? 
An app that displays the list of reported bike thefts based on the Bikewise [API](https://www.bikewise.org/documentation/api_v2).

## Product Requirements
- [x] I want to see a list of reported bike thefts for the Berlin area.
- [x] I want to see the first 10 bike theft cases, with the ability to - paginate (10 cases per page).
- [x] I want to see a total number of bike theft cases.
- [x] For each reported bike theft I want to see:
  - [x] Case title
  - [x] Case description
  - [x] Date of the theft
  - [x] Date of when the case was reported
  - [x] Location of the theft
  - [x] Picture of the bike, if available
- [x] I want to filter reported bike thefts by partial case title.
- [x] I want to filter reported bike thefts by date range.
- [x] I want to see a loading state until the list is available.
- [x] I want to see an error state if the list is unavailable.
- [x] I want to see an empty state if there are no results.

## Tech Stack
- React
- Tests: Jest + react-testing-library
- ESLint
- Husky
- CSS in JS

## Please note
This app was tested, but only at the "dummy" component level. Unforunately, I wasn't able to 
get the main app tested using Jest and react-testing-library at the "interaction" level. Despite that,
I made sure to test the app through the browser. 

The challenge I faced was time, due to the inconsistency of my schedule, but that is no excuse for not
testing the app "interaction" level. 

## The things I wanted to implemented outside of requirements: 
- Mobile first design. This is something I imagine many users would use due to the prevalance of the smarth phone. 
- Testing the interactivity of the app. Even though I am confident everything is functionally well, this doesn't mean that it will continue to function well if a feature is added or changed. 
- Removing all "__tests__" directories and use [componentName].test.jsx instead
- Validating user input. This can prevent users waiting for a response from the API before correcting their mistake. 
- The UI design. This is something I struggled with pushing myself through because I know the UI could have been a lot better, e.g. using labels for the input field, fixed image max-width across the board, and etc.

Overall, I believe I did a good job given the time constraint and I made sure that all requirements were met. I will surely go back to this project, and make all the above changes for my own self efficacy.