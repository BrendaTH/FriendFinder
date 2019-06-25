// this file has the routes to display the json for the friends array and
// on post to handle the logic for friend matching
var friendsArray = require('../data/friends');

// compare scores between potential matches and our new friend
// return the friend with the smallest differences
function findBestFriend(newFriendScores) {
    var lastSum = 100;
    var bestFriend;

    // for every potential best friend
    for (var i = 0; i < friendsArray.length; i++) {
        friendScore = friendsArray[i].scores;
        var newSum = 0;
        // compare this potential friend's score with our new friend's scores
        for (var j = 0; j < friendScore.length; j++) {
            newSum += Math.abs(friendScore[j] - newFriendScores[j]);
        }
        // pick the one with the smallest differences
        // if its a tie go for the most recent
        if (newSum <= lastSum) {
            lastSum = newSum;
            bestFriend = friendsArray[i];
        }
    }
    return bestFriend;
}

module.exports = function(app) {
    // return the friendsarray to client
    app.get("/api/friends", function(req, res) {
        console.log("get my friends ") + friendsArray;
        res.json(friendsArray);
    });

    // send a best friend for our new friend to the client
    // and add our new friend to the friendsArray
    app.post("/api/friends", function(req, res) {
        console.log("post my friend ");
        // req.body hosts is equal to the JSON post sent from the user
        // This works because of our body parsing middleware in server.js
        var newFriend = req.body;
        // convert the string to numbers in the scores array
        for (var i = 0; i < newFriend.scores.length; i++) {
            // ok to use parseInt here because scores was validaed on client
            newFriend.scores[i] = parseInt(newFriend.scores[i]);
        }

        // find the best friend
        var bestFriend = findBestFriend(newFriend.scores);
        console.log('best friend is: ' + bestFriend.name);
        // save our new friend in the friends array
        friendsArray.push(newFriend);
        // return the bestFriend to the client
        res.json(bestFriend);
    });
}