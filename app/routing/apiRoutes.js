
module.exports = function(app) {
    app.get("/api/friends", function(req, res) {
        console.log("get my friends");
        res.end();
    });

    app.post("/api/friends", function(req, res) {
        console.log("post my friends");
    });
}