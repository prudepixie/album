import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { Router } from "@angular/router";
import { AngularFireDatabase } from '@angular/fire/database';
import { AngularFireStorage, AngularFireUploadTask } from '@angular/fire/storage';
import { Album, Photo } from 'src/app/album';
import { createId } from '../../../helpers/create-id'

@Component({
  selector: 'create-album',
  templateUrl: './create-album.component.html',
  styleUrls: ['./create-album.component.css']
})
export class CreateAlbumComponent implements OnInit {
  public albumForm: FormGroup;
  public albums: any = Album;
  public uploadedPhotos: Array<Photo> = [];
  private task: AngularFireUploadTask;

  constructor( 
    private fb: FormBuilder,
    private router: Router,
    private db: AngularFireDatabase,
    private storage: AngularFireStorage
  ) { 
    this.albums = db.list('/albums')
  }

  ngOnInit() {
    this.resetForm();
  }

  resetForm() {
    this.albumForm = this.fb.group({
      name: ['My Album'],
      description: [''],
      date: [new Date().toISOString().substring(0, 10)]
    });
  }

  onSubmit() {
    this.addAlbumToDB();    
    this.resetForm();
    this.router.navigate(['/albums'])
  }

  onUploadFinished(event) {
    
    this.uploadedPhotos.push(event.file);
  }

  addAlbumToDB() {
    let album = this.albumForm.value;

    this.uploadedPhotos.forEach((photo: Photo)=> {
      const path = `${album.name}/${photo.name}`;
      this.task = this.storage.upload(path, photo);
    });


    let newAlbum = new Album (
      createId(),
      album.name,
      album.description,
      album.date,
      this.uploadedPhotos
    );
    this.albums.push(newAlbum);
  }
}
