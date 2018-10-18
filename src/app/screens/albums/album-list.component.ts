import { Component, OnInit } from '@angular/core';
import { Album } from 'src/app/album';
import { AngularFireDatabase } from '@angular/fire/database';

@Component({
  selector: 'app-album',
  templateUrl: './album-list.component.html',
  styleUrls: ['./album-list.component.css']
})
export class AlbumListComponent implements OnInit {
  public albums: any;

  constructor(
    private db: AngularFireDatabase,
  ) { 
    db.list('albums').valueChanges()
      .subscribe((data: Album[]) => {
        this.albums = data
      })
  }

  ngOnInit() {
   
  }

}
