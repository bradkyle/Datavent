import firebase from 'firebase'

export function loginByUsername(email, password) {
  firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
    console.log(error.message + ': ' + error.code)
  })
}

export function logout() {
  firebase.auth().signOut().catch(function(error) {
    // An error happened.
    console.log(error.message + ': ' + error.code)
  })
}

