const firebase = require("./firebase_connect");

module.exports = {
    _getData: function(callback){
        firebase.database().ref("users/").get("value").then(function(snapshot){
            callback(snapshot.val())
        })
    }
}