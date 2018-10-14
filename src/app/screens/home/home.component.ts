import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database'

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  items: string[]

  constructor(firebaseDb: AngularFireDatabase) { 
    firebaseDb.list('test').valueChanges()
      .subscribe( (data: string[]) => {
        this.items = data
      })
  }

  ngOnInit() {
  }

}
