import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { AngularFireDatabase } from '@angular/fire/database';
import { Album, Photo } from 'src/app/album';
import { AngularFireStorage, AngularFireUploadTask } from '@angular/fire/storage';
import { ImageUploadService } from 'src/app/services/image-upload.service';


@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.css']
})
export class AlbumComponent implements OnInit {
  private album: any;
  public photosUrl = [];
  private task: AngularFireUploadTask;
  public uploadedPhotos: Array<Photo> = [];

  constructor(
    public route: ActivatedRoute,
    private db: AngularFireDatabase,
    private storage: AngularFireStorage,
    private uploadService: ImageUploadService
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
      if (this.album.photosPath) {
        this.album.photosPath.forEach((photoPath) => {
          this.storage.ref(photoPath).getDownloadURL().subscribe(url=> {
            this.photosUrl.push(url);
          })
        });
      }
    });
  }

  onUploadFinished(event) {
    this.uploadedPhotos.push(event.file);
  }

  addPhotosToAlbum() {

  }

}
