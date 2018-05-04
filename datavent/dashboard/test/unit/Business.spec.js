// import { fetchList, fetchBusiness, createBusiness, updateBusiness } from '../../src/api/business'
// import { businessTypeOptions, importanceOptions, businessStatusOptions } from '../../src/utils/options'
// import Vue from 'vue';
// import faker from 'faker';

// var FirebaseServer = require('firebase-server');

// new FirebaseServer(5000, 'test.firebase.localhost', {
//   /* You can put your initial data model here, or just leave it empty */
// });


// function rand(list){
//   return list[Math.floor(Math.random() * list.length)]
// }

// function genBusiness(){
//   return {
//     id: 120000000001,
//     name: 'Bobbs Burgers',
//     business_type: rand(businessTypeOptions),
//     location: 'South Africa',
//     importance: rand(importanceOptions),
//     status: rand(businessStatusOptions),
//     notes: 'this is a test note',
//     timestamp: Date.now()
//   }
// }

// describe('Business', function() {

//   describe('fetchList', function() {
//     it('Should return a list of businesses from firebase and return them without an error', function() {
//       list = fetchList()
//       expect(list).to.be.a('list');
//     })
//   })

//   describe('createBusiness', function() {
//     it('Should add business data to a firebase collection named business without an error', function(){
//       createBusiness(test_business)

//     })
//   })

//   describe('fetchBusiness', function() {
//     it('Should fetch a business from firebase and return it without an error', function() {
//       business = fetchBusiness()

//     })
//   })

//   describe('updateBusiness', function() {
//     it('Should update a business in firebase and return response without an error', function(){
//       business = updateBusiness()

//     })
//   })

// })