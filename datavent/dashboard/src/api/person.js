import request from '@/utils/request'
import firebase from 'firebase'
import '@firebase/firestore'

const collection = 'people'

export function fetchList(query) {
  firebase.firestore().collection(collection).get().then((data) => {
    console.log('People')
    return {
      total: data.length,
      items: data
    }
  })
}

export function fetchPerson() {
  return request({
    url: '/person/detail',
    method: 'get'
  })
}

export function createPerson(data) {
  return request({
    url: '/person/create',
    method: 'post',
    data
  })
}

export function updatePerson(data) {
  return request({
    url: '/person/update',
    method: 'post',
    data
  })
}
