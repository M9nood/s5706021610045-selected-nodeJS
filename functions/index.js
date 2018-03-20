const functions = require('firebase-functions');
const admin = require('firebase-admin')
//admin.initializeApp(functions.config().firebase);
const firebase = require('firebase')

var config = {
    apiKey: "AIzaSyCShnWIftQXe8bTqOB54X1gfs9I_9wCESE",
    authDomain: "selected-midterm-1647e.firebaseapp.com",
    databaseURL: "https://selected-midterm-1647e.firebaseio.com",
    projectId: "selected-midterm-1647e",
    storageBucket: "selected-midterm-1647e.appspot.com",
    messagingSenderId: "933683752101"
};
var firebaseApp = firebase.initializeApp(config)
var db = firebaseApp.database()

exports.transport2558 = functions.https.onRequest((request, response) => {
    return db.ref('transport2558').once('value').then(function(snapshot) {
      var data = snapshot.val();
      response.send(data)
    });
  });
// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
exports.helloWorld = functions.https.onRequest((request, response) => {
 response.send("Hello from Firebase!");
});
