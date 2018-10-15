import { Component, OnInit } from '@angular/core';
import { Album } from 'src/app/album';
import { AngularFireDatabase } from '@angular/fire/database'

@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.css']
})
export class AlbumComponent implements OnInit {
  public albums: any;

  constructor(
    private db: AngularFireDatabase
  ) { 
    db.list('albums').valueChanges()
      .subscribe((data: Album[]) => {
        this.albums = data
      })
  }

  ngOnInit() {
   
  }

}
