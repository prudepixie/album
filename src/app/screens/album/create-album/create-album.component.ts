import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { Router } from "@angular/router";
import { AngularFireDatabase } from '@angular/fire/database'
import { Album } from 'src/app/album';

@Component({
  selector: 'create-album',
  templateUrl: './create-album.component.html',
  styleUrls: ['./create-album.component.css']
})
export class CreateAlbumComponent implements OnInit {
  public albumForm: FormGroup;
  public albums: any;

  constructor( 
    private fb: FormBuilder,
    private router: Router,
    private db: AngularFireDatabase
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

  addAlbumToDB() {
    let album = this.albumForm.value;
    let newAlbum = new Album (
      album.name,
      album.description,
      album.date
    );
    this.albums.push(newAlbum);
  }
}
