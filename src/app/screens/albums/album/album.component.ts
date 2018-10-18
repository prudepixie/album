import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.css']
})
export class AlbumComponent implements OnInit {

  constructor(
    public route: ActivatedRoute
  ) { }

  ngOnInit() {

    console.log('hi', this.route.snapshot.params)
  }

}
