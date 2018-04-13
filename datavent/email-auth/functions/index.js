const functions = require('firebase-functions');
const express = require('express');
const cookieParser = require('cookie-parser')();
const cors = require('cors')({origin: true});
const app = express();

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });

app.use(cors);
app.use(cookieParser);

app.get('/login', (req, res) => {

  var newUserEmail = req.headers['user-email'];
  var newUserPass = req.headers['user-pass'];
  
  firebase.auth().setPersistence(firebase.auth.Auth.Persistence.LOCAL).then(function() {
    firebase.auth().signInWithEmailAndPassword(email, password)
  })
  .catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    return res.status(errorCode).send(errorMessage);
  });  

  res.send("Successfully logged in");
});

app.get('/logout', (req, res) => {
  firebase.auth().signOut().then(function() {
    // Sign-out successful.
  }).catch(function(error) {
    // An error happened.
    var errorCode = error.code;
    var errorMessage = error.message;
    return res.status(errorCode).send(errorMessage);
  });
});