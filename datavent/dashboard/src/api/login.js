import { auth } from '../main'

export function loginByUsername(email, password) {
  auth.signInWithEmailAndPassword(email, password).catch(function(error) {
    console.log(error.message + ': ' + error.code)
  })
}

export function logout() {
  auth.signOut().catch(function(error) {
    // An error happened.
    console.log(error.message + ': ' + error.code)
  })
}

