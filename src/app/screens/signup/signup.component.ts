import { Component, OnInit } from '@angular/core'
import AuthService from 'src/app/services/auth.service'
import AuthThirdPartyProviderService from 'src/app/services/auth.third.provider';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { passwordValidator } from '../../helpers/form-validators'

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  signupForm: FormGroup

  constructor(private authService: AuthService, private thirdPartyAuth: AuthThirdPartyProviderService) {
  }

  ngOnInit() {
    this.signupForm = new FormGroup({
      'email': new FormControl(null, [Validators.required, Validators.email]),
      'password': new FormControl(null, [Validators.required, Validators.pattern(passwordValidator()) ]),
      'username': new FormControl(null, [Validators.required])
    })
  }

  signup() {
    console.log(this.signupForm)
    if(this.signupForm.valid){
      const { value: { email, password, username }} = this.signupForm
      this.authService.signUp(email, password, username)
    }
  }

  facebookLogin(){
    this.thirdPartyAuth.signinWithFacebook()
  }
}
