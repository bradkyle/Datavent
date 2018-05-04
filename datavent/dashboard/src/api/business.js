// import firebase from 'firebase'
// import 'firebase/firestore'

// const db_collection = 'businesses'
// const db = firebase.firestore()

export function fetchList(query) {
  // db.collection(db_collection).get().then((querySnapshot) => {
  //   querySnapshot.forEach((doc) => {
  //     console.log(`${doc.id} => ${doc.data()}`)
  //   })
  // })
}

export function fetchBusiness() {
  // db.collection(db_collection).get().then((querySnapshot) => {
  //   querySnapshot.forEach((doc) => {
  //     console.log(`${doc.id} => ${doc.data()}`)
  //   })
  // })
}

export function createBusiness(data) {
  // // Add business to firestore firebase
  // db.collection(db_collection).add({
  //   id: data.id,
  //   timestamp: Date.now(),
  //   name: data.name,
  //   business_type: data.business_type,
  //   importance: data.importance,
  //   status: data.status,
  //   notes: data.notes,
  //   location: data.location
  // }).then(function(docRef) {
  //   console.log('Document written with ID: ', docRef.id)
  // }).catch(function(error) {
  //   console.error('Error adding document: ', error)
  // })
}

export function updateBusiness(data) {
  // // Create a reference to the SF doc.
  // var sfDocRef = db.collection(db_collection).doc('SF')

  // // Uncomment to initialize the doc.
  // // sfDocRef.set({ population: 0 })

  // return db.runTransaction(function(transaction) {
  //   // This code may get re-run multiple times if there are conflicts.
  //   return transaction.get(sfDocRef).then(function(sfDoc) {
  //     if (!sfDoc.exists) {
  //       throw new Error('Document does not exist!')
  //     }
  //     var newPopulation = sfDoc.data().population + 1
  //     transaction.update(sfDocRef, { population: newPopulation })
  //   })
  // }).then(function() {
  //   console.log('Transaction successfully committed!')
  // }).catch(function(error) {
  //   console.log('Transaction failed: ', error)
  // })
}
