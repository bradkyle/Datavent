
const request = require('supertest');
const app = require('../index')

// jest.mock('cors'); // See manual mock in ../__mocks__/cors.js
// require('cors'); // Jest will return the mock not the real module

const test = require('firebase-functions-test')();

// const key = functions.config().stripe.key;
// test.mockConfig({ stripe: { key: '23wr42ewr34' }});

// const test = require('firebase-functions-test')({
//     databaseURL: 'https://my-project.firebaseio.com',
//     storageBucket: 'my-project.appspot.com',
//     projectId: 'my-project',
//   }, 'path/to/serviceAccountKey.json');

describe('Test the person path', () => {

    test('It should response the GET method', (done) => {
        request(app).get('/person').then((response) => {
            expect(response.statusCode).toBe(200);
            done();
        });
    });
    
    test('It should responnd to the POST method', (done) => {
        request(app).get('/person').then((response) => {
            expect(response.statusCode).toBe(200);
            done();
        });
    });

    test('It should responnd to the POST method', (done) => {
        request(app).get('/person').then((response) => {
            expect(response.statusCode).toBe(200);
            done();
        });
    });

    test('It should responnd to the POST method', (done) => {
        request(app).get('/person').then((response) => {
            expect(response.statusCode).toBe(200);
            done();
        });
    });

    test('It should responnd to the POST method', (done) => {
        request(app).get('/person').then((response) => {
            expect(response.statusCode).toBe(200);
            done();
        });
    });
    
});