import { Component, OnInit } from '@angular/core';
import FeedService from 'src/app/services/feed.service';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css']
})
export class FeedComponent implements OnInit {
  activityFeedItems: any

  constructor(private feedService: FeedService) { }

  ngOnInit() {
    this.activityFeedItems = this.feedService.getFeedItems()
  }
}
