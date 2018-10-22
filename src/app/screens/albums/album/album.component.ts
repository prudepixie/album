import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { AngularFireDatabase } from '@angular/fire/database';
import { Album, Photo } from 'src/app/album';
import { AngularFireStorage, AngularFireUploadTask } from '@angular/fire/storage';

@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.css']
})
export class AlbumComponent implements OnInit {
  private album: any;
  public photosUrl = [];
  private task: AngularFireUploadTask;
  constructor(
    public route: ActivatedRoute,
    private db: AngularFireDatabase,
    private storage: AngularFireStorage
  ) { }

  ngOnInit() {
    const id = this.route.snapshot.params.id;
    this.getAlbumFromId(id);
  }

  getAlbumFromId(id: string) {
    return this.db.list('/albums', ref => {
      return ref.orderByChild('id').equalTo(id);
    }).valueChanges()
      .subscribe(albums => {
       this.album = albums[0];

       this.album.photos.forEach((photoPath) => {
         this.storage.ref(photoPath).getDownloadURL().subscribe(url=> {
           console.log('url', url)

           this.photosUrl.push(url);
         })
       });

       console.log('album', this.album);
      });
  }

}
