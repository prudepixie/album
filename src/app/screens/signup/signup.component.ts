import { Component, OnInit } from '@angular/core'
import AuthService from 'src/app/services/auth.service'

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  items: string[]
  email: string
  password: string
  displayName: string
  photoUrl: string

  constructor(private authService: AuthService) {
  }

  ngOnInit() {
  }

  signup() {
    this.authService.signUp(this.email, this.password, this.displayName, this.photoUrl)
  }
}
