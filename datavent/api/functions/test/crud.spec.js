var sinon = require('sinon');
const test = require('firebase-functions-test')();

// Mock the Firebase configuration
require('firebase-functions').config = jest.fn(() => {
  console.log('Jest firebase functions.config being called');
  return {
    firebase: {
      databaseURL: 'https://not-a-project.firebaseio.com',
      storageBucket: 'not-a-project.appspot.com'
    },
    gmail: {
      email: 'testsender@test.com',
      password: 'testpassword'
    }
  };
});


// test functionality for crud

const myFunctions = require('../crud.js');

describe('CRUD', () => {

  beforeEach((done) => {
    
  });

  

})