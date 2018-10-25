import { Component, OnInit } from '@angular/core';
import FeedService from 'src/app/services/feed.service';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css']
})
export class FeedComponent implements OnInit {

  constructor(private feedService: FeedService) { }

  ngOnInit() {

  }

  addToFeed(){
    // this.firebaseDb.list('/activity').push({
    //   description: 'some activity',
    //   type: 'some type'
    // })
  }
}
