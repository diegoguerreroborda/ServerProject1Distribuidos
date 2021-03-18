const firebase = require('firebase');

const app = firebase.initializeApp({
   // apiKey: "7a218f4e-7050-4a65-86fa-3bd4a9a0d6c2",
    authDomain: "sistemasbd-f8d10-default-rtdb.firebaseapp.com",
    databaseURL: "https://sistemasbd-f8d10-default-rtdb.firebaseio.com",
})

module.exports = app;