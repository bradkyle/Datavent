
const test = require('firebase-functions-test')();

// const key = functions.config().stripe.key;
// test.mockConfig({ stripe: { key: '23wr42ewr34' }});

// const test = require('firebase-functions-test')({
//     databaseURL: 'https://my-project.firebaseio.com',
//     storageBucket: 'my-project.appspot.com',
//     projectId: 'my-project',
//   }, 'path/to/serviceAccountKey.json');
  

describe('API', () => {
    beforeEach((done) => {
        Book.remove({}, (err) => { 
            done();         
        });     
    });

    describe('/GET people', () => {
        it('it should GET all the books', (done) => {
        chai.request(server)
            .get('/book')
            .end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.a('array');
                res.body.length.should.be.eql(0);
                done();
            });
        });
    });

});