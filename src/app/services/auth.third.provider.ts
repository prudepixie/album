import { AngularFireAuth } from '@angular/fire/auth'
import { Injectable } from '@angular/core';
import User from '../models/user.model';
import { Router } from '@angular/router';
import { auth } from 'firebase/app';

@Injectable()
export default class AuthThirdPartyProviderService {
  constructor(private fireAuth: AngularFireAuth, private router: Router){

  }

  async signinWithFacebook(){
    const provider = new auth.FacebookAuthProvider()
    
    try {
      let res = await this.fireAuth.auth.signInWithPopup(provider)
      this.router.navigate(['/albums'])
      console.log('authenticated with facebook!', res)
    } catch (e) {
      console.log('facebook auth failed..')
    } finally {

    }
  }
}