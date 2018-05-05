import firebase from 'firebase'

const collection = 'businesses'

export function fetchList(query) {
  firebase.firestore().collection(collection).get().then((data) => {
    return {
      total: data.length,
      items: data
    }
  })
}

export function fetchBusiness() {

}

export function createBusiness(data) {
  firebase.firestore().collection(collection).add({
    first: 'Ada',
    last: 'Lovelace',
    born: 1815
  }).then(function(docRef) {
    console.log('Document written with ID: ', docRef.id)
  }).catch(function(error) {
    console.error('Error adding document: ', error)
  })
}

export function updateBusiness(data) {
  var sfDocRef = firebase.firestore().collection('cities').doc('SF')
  firebase.firestore().runTransaction(function(transaction) {
    return transaction.get(sfDocRef).then(function(sfDoc) {
      if (!sfDoc.exists) {
        throw Error('Document does not exist!')
      }
      var newPopulation = sfDoc.data().population + 1
      if (newPopulation <= 1000000) {
        transaction.update(sfDocRef, { population: newPopulation })
        return newPopulation
      } else {
        return Promise.reject('Sorry! Population is too big.')
      }
    })
  }).then(function(newPopulation) {
    console.log('Population increased to ', newPopulation)
  }).catch(function(err) {
    // This will be an 'population is too big' error.
    console.error(err)
  })
}

export function deleteBusiness(data) {

}

