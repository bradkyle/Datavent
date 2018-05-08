import Vue from 'vue';
import faker from 'faker';
import { fetchList, fetchBusiness, createBusiness, updateBusiness } from '../../../src/api/business'
import { businessTypeOptions, importanceOptions, businessStatusOptions } from '../../../src/utils/options'

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

