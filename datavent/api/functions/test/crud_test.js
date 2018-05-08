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

describe('CRUD', () => {

  beforeEach((done) => {
    
  });

  describe('list', () => {
    it('Returns an object containing all items in a collection', () => {
      
    })
  })

  describe('create', () => {
    it('Creates an item', () => {

    })
  })

  describe('read', () => {
    it('Returns an object containing item requested', () => {

    })
  })
  
  describe('update', () => {
    it('Updates an item', () => {

    })
  })

  describe('delete', () => {
    it('', () => {

    })
  })

})