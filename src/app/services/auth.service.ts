import { AngularFireAuth } from '@angular/fire/auth'
import { Injectable } from '@angular/core';
import { MethodCall } from '@angular/compiler';
import User from '../models/user.model';
import { Subject } from 'rxjs';
import { Router } from '@angular/router';

const AUTH_SUCCESS_ROUTE = '/feed'
    , LOGOUT_ROUTE = '/'

@Injectable()
export default class AuthService {
  currentUser: User = null
  currentUserListener = new Subject()

  constructor(private fireAuth: AngularFireAuth, private router: Router){
  }

  listenForAuthChanges(){
    if(localStorage.getItem('currentUser')) this.currentUser = JSON.parse(localStorage.getItem('currentUser'))

    this.fireAuth.auth.onAuthStateChanged((user) => {

      if(!user){
        this.currentUser = null
        localStorage.removeItem('currentUser')
        return this.currentUserListener.next(null)
      } 

      this.currentUser = new User(user.displayName, user.photoURL, user.email)
      this.currentUserListener.next(this.currentUser)
      localStorage.setItem('currentUser', JSON.stringify(this.currentUser))
    })
  }

  async signIn(email: string, password: string){
    try {
      let { user } = await this.fireAuth.auth.signInWithEmailAndPassword(email, password)
      alert('successfully authenticated')
      this.router.navigate([AUTH_SUCCESS_ROUTE])
    } catch (e) {
      alert(`something failed with signin ${e}`)
    } finally {

    }
  }

  async signUp(email: string, password: string, displayName: string, photoURL: string = ''){
    try {
      let { user } = await this.fireAuth.auth.createUserWithEmailAndPassword(email, password)

      console.log('submitting display name', displayName)
  
      await user.updateProfile({ displayName, photoURL })

      console.log('signed up with user', user)

      // TODO: handle post signup.
      alert('successfully authenticated')
      this.router.navigate([AUTH_SUCCESS_ROUTE])
    } catch (e) {
      alert('something failed with signup')
    } finally {

    }
  }

  async signOut(){
    await this.fireAuth.auth.signOut()
    this.router.navigate([LOGOUT_ROUTE])
  }
}