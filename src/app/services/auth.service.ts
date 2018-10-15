import { AngularFireAuth } from '@angular/fire/auth'
import { Injectable } from '@angular/core';
import { MethodCall } from '@angular/compiler';

@Injectable()
export default class AuthService {
  currentUser: {} = {}

  constructor(private fireAuth: AngularFireAuth){
  }

  // TODO:leaving this for later - auth state change listener
  // listenForAuthChanges(){
  //   this.fireAuth.auth.onAuthStateChanged((user) => {
  //     console.log('auth state changed!', user)
  //   })
  // }

  signIn(){

  }

  async signUp(email: string, password: string, displayName: string, photoURL: string = ''){
    try {
      let { user } = await this.fireAuth.auth.createUserWithEmailAndPassword(email, password)
  
      await user.updateProfile({ displayName, photoURL })

      this.currentUser = user

      // TODO: handle post signup.
      alert('successfully authenticated')
    } catch (e) {
      alert('something failed with signup')
    } finally {

    }
  }

  signOut(){
    this.currentUser = {}
  }
}