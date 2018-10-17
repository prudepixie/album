import { Component, OnInit } from '@angular/core';
import AuthService from 'src/app/services/auth.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  email: string
  password: string

  constructor(private authService: AuthService) { }

  ngOnInit() {

  }

  signin(){
    console.log('signing in..')
    this.authService.signIn(this.email, this.password)
  }

}
