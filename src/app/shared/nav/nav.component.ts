import { Component, OnInit, Input } from '@angular/core';
import User from 'src/app/models/user.model';
import AuthService from 'src/app/services/auth.service';

@Component({
  selector: 'nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  currentUser: any

  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.currentUser = this.authService.currentUser

    this.authService.currentUserListener.subscribe((currentUser) => {
      this.currentUser = currentUser
    })
  }

  signOut(){
    this.authService.signOut()
  }
}
