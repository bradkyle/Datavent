const myFunctions = require('../crud');

// jest.mock('cors'); // See manual mock in ../__mocks__/cors.js
// require('cors'); 

var firebasemock = require('firebase-mock');

const fixtureData = {
  __collection__: {
    people: {
      __doc__: {
        person_a: {
          name: '',

          __collection__: {
            events: {
              __doc__: {
                user_b: {
                  reference: '__ref__:events/event_a'
                }
              }
            }
          }
        }
      }
    },
    events: {
      __doc__: {
        event_a: {
          name: '',

          __collection__: {
            businesses: {
              __doc__: {
                user_b: {
                  reference: '__ref__:businesses/business_a'
                }
              }
            },
            tables: {
              __doc__: {
                user_b: {
                  reference: '__ref__:tables/table_a'
                }
              }
            },
            people:{
              __doc__: {
                user_b: {
                  reference: '__ref__:people/person_a'
                }
              }
            }
          }
        }        
      }
    },
    businesses: {
      __doc__: {   
        business_a: {
          name: '',

          __collection__: {
            people: {
              __doc__: {
                user_b: {
                  reference: '__ref__:people/person_a'
                }
              }
            }
          }
        }             
      }
    },
    tables: {
      __doc__: {   
        table_a: {
          name: '',

          __collection__: {
            people: {
              __doc__: {
                user_b: {
                  reference: '__ref__:people/person_a'
                }
              }
            }
          }
        }             
      }
    }
  }
}

describe('', () => {
  
  var db = new firebasemock.MockFirestore();

  describe('List all people', done => {

    test('returns all people', done => {
      
    });  

  })

  describe('Create a person', done => {

  })

  describe('Read a person', done => {

  })

  describe('Update a person', done => {

  })

  describe('Remove a person', done => {

  })

})