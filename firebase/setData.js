const firebase = require("./firebase_connect");
var id = 1;
module.exports = {
    saveData: function(req, callback){
        let username = req.name;

        firebase.database().ref("users/"+id).set({
            name:req.name,
            city : req.city,
            cc : req.cc,
        })
        id++;
        callback(null, {"statuscode":200,"message":"inserted sucessfully"})
    }
}