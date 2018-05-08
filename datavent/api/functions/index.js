const functions = require('firebase-functions');
const app = require('express')();
const cookieParser = require('cookie-parser')();
var crud = require("./crud.js");

// firebase firestore
const admin = require('firebase-admin');
admin.initializeApp();
var db = admin.firestore()

const cors = require('cors')({ origin: true });

// Express middleware that validates Firebase ID Tokens passed in the Authorization HTTP header.
// The Firebase ID token needs to be passed as a Bearer token in the Authorization HTTP header like this:
// `Authorization: Bearer <Firebase ID Token>`.
// when decoded successfully, the ID Token content will be added as `req.user`.
const validateFirebaseIdToken = (req, res, next) => {
  console.log('Check if request is authorized with Firebase ID token');
  if ((!req.headers.authorization || !req.headers.authorization.startsWith('Bearer ')) &&
      !req.cookies.__session) {
    console.error('No Firebase ID token was passed as a Bearer token in the Authorization header.',
        'Make sure you authorize your request by providing the following HTTP header:',
        'Authorization: Bearer <Firebase ID Token>',
        'or by passing a "__session" cookie.');
    res.status(403).send('Unauthorized');
    return;
  }
  let idToken;
  if (req.headers.authorization && req.headers.authorization.startsWith('Bearer ')) {
    console.log('Found "Authorization" header');
    // Read the ID Token from the Authorization header.
    idToken = req.headers.authorization.split('Bearer ')[1];
  } else {
    console.log('Found "__session" cookie');
    // Read the ID Token from cookie.
    idToken = req.cookies.__session;
  }
  admin.auth().verifyIdToken(idToken).then((decodedIdToken) => {
    console.log('ID Token correctly decoded', decodedIdToken);
    req.user = decodedIdToken;
    return next();
  }).catch((error) => {
    console.error('Error while verifying Firebase ID token:', error);
    res.status(403).send('Unauthorized');
  });
};

app.use(cors);
app.use(cookieParser);
app.use(validateFirebaseIdToken);

// Other
// -------------------------------------------->

app.get('/hello', (req, res) => {
  res.send(`Hello`);
});

// People
// -------------------------------------------->

// list
app.get('/person/list', (req, res) => {
  res.send(crud.list(db, 'people', ''))
});

// create
app.post('/person', (req, res) => {
  res.send(`Hello ${req.params.name}`);
});

// read
app.get('/person/:id', (req, res) => {
  res.send(`Sub function`);
});

// update
app.get('/person/:id', (req, res) => {
  res.send(`Hello ${req.params.name}`);
});

// delete
app.delete('/person/:id', (req, res) => {
  res.send(`Hello ${req.params.name}`);
});

// Businesses
// -------------------------------------------->

// list
app.get('/business/list', (req, res) => {
  res.send(`Root page`);
});

// create
app.post('/business', (req, res) => {
  res.send(`Hello ${req.params.name}`);
});

// read
app.get('/business/:id', (req, res) => {
  res.send(`Sub function`);
});

// update
app.get('/business/:id', (req, res) => {
  res.send(`Hello ${req.params.name}`);
});

// delete
app.delete('/business/:id', (req, res) => {
  res.send(`Hello ${req.params.name}`);
});

// Event
// -------------------------------------------->

// list
app.get('/event/list', (req, res) => {
  res.send(`Root page`);
});

// create
app.post('/event', (req, res) => {
  res.send(`Hello ${req.params.name}`);
});

// read
app.get('/event/:id', (req, res) => {
  res.send(`Sub function`);
});

// update
app.get('/event/:id', (req, res) => {
  res.send(`Hello ${req.params.name}`);
});

// delete
app.delete('/event/:id', (req, res) => {
  res.send(`Hello ${req.params.name}`);
});

// RSVPS
// -------------------------------------------->

// list
app.get('/rsvp/list', (req, res) => {
  res.send(`Root page`);
});

// create
app.post('/rsvp', (req, res) => {
  res.send(`Hello ${req.params.name}`);
});

// read
app.get('/rsvp/:id', (req, res) => {
  res.send(`Sub function`);
});

// update
app.get('/rsvp/:id', (req, res) => {
  res.send(`Hello ${req.params.name}`);
});

// delete
app.delete('/rsvp/:id', (req, res) => {
  res.send(`Hello ${req.params.name}`);
});

// Tag
// -------------------------------------------->

// list
app.get('/business/list', (req, res) => {
  res.send(`Root page`);
});

// create
app.post('/business', (req, res) => {
  res.send(`Hello ${req.params.name}`);
});


// We name this function "route", which you can see is 
// still surfaced in the HTTP URLs below.
exports.route = functions.https.onRequest(app);