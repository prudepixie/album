import { Component, OnInit, OnChanges, SimpleChange, SimpleChanges, NgZone, ViewEncapsulation } from '@angular/core';
import AuthService from './services/auth.service';
import { Subscription } from 'rxjs';
import { FirebaseAuth } from '@angular/fire';
import { AngularFireAuth } from '@angular/fire/auth';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent implements OnInit {
  title = 'album';  
  appReady: boolean
  authListener: Subscription

  constructor(private authService: AuthService, private fireAuth: AngularFireAuth, private zone: NgZone){
  }
  
  async ngOnInit(){
    this.authListener = this.authService.currentUserListener.subscribe((user: any) => {
      this.zone.run(() => {
        this.appReady = true
        this.unsubscribeAuthChanges()
      })
    })    
    
    this.authService.listenForAuthChanges()
  }

  unsubscribeAuthChanges(){
    this.authListener.unsubscribe()
  }
}
