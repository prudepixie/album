import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';

@Component({
  selector: 'create-album',
  templateUrl: './create-album.component.html',
  styleUrls: ['./create-album.component.css']
})
export class CreateAlbumComponent implements OnInit {
  public albumForm: FormGroup;

  constructor( 
    private fb: FormBuilder
  ) { }

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
    console.log('Form values', this.albumForm.value)
    this.resetForm();
  }
}
