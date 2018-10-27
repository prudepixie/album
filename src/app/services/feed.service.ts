import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { AngularFireDatabase } from '@angular/fire/database'

@Injectable()
export default class FeedService {

  constructor(private fireDb: AngularFireDatabase) {

  }

  getFeedItems(){
    return this.fireDb.list('/activity').valueChanges()
  }
}