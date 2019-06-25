## REPO Name: FriendFinder at https://github.com/BrendaTH/FriendFinder
## Heroku Deployment: https://obscure-fortress-42812.herokuapp.com/
### FriendFinder -  a compatibility-based "FriendFinder" application. This full-stack site will take in results from your users' surveys, then compare their answers with those from other users. The app will then display the name and picture of the user with the best overall match.

### OVERVIEW and OPERATION
**Home page** - route is '/'  This takes user to the main page. From there the user can go to the survey page, or retreive a list of all the friends in json format.
**Survey Page** - route is '/survey'  This takes the user to the page where the survey is. The user must fill in all fields (name, photo, and answer 10 question). The results are Posted to the server, and a match is found. The match is a modal popup.

Four routes are supported:
* /survey - get an html page with the survey form and modal.
* / - get a home html page 
* /api/friends - gets the current list of friends and their data in json format.
* /api/friends - posts the new friend data back to the server, finds a match, and returns the match's info to the client.



### Technology
The technology/interesting features for this project includes the following:
* node.js 
* express
* path
* modal
* heroku

### FriendFinder has the following directory structure:
*    - .gitignore
*    - app
*      - data
*        - friends.js
*      - public
*        - home.html
*        - survey.html
*      - routing
*        - apiRoutes.js
*        - htmlRoutes.js
*    - node_modules
*    - package.json
*    - server.js


 
Find FriendFinder running at [https://obscure-fortress-42812.herokuapp.com](https://obscure-fortress-42812.herokuapp.com)