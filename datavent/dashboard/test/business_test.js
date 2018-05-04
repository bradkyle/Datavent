import { fetchList, fetchBusiness, createBusiness, updateBusiness } from '@/api/business'
import { businessTypeOptions, importanceOptions, businessStatusOptions } from '@/utils/options'
import Vue from 'vue';

faker = require('faker')

function rand(list){
  return list[Math.floor(Math.random() * list.length)]
}

function genBusiness(){
  return {
    id: 120000000001,
    name: 'Bobbs Burgers',
    business_type: rand(businessTypeOptions),
    location: 'South Africa',
    importance: rand(importanceOptions),
    status: rand(businessStatusOptions),
    notes: 'this is a test note',
    timestamp: Date.now()
  }
}

function setup(){

}

functin

describe('Business', function() {

  setup()

  describe('fetchList', function() {
    it('Should return a list of businesses from firebase and return them without an error', function() {
      list = fetchList()
    })
  })

  describe('createBusiness', function() {
    it('Should add business data to a firebase collection named business without an error', function(){
      createBusiness(test_business)

    })
  })

  describe('fetchBusiness', function() {
    it('Should fetch a business from firebase and return it without an error', function() {
      business = fetchBusiness()

    })
  })

  describe('updateBusiness', function() {
    it('Should update a business in firebase and return response without an error', function(){
      business = updateBusiness()

    })
  })

})