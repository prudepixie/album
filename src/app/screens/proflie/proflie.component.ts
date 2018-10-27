import { Component, OnInit } from '@angular/core';
import AuthService from 'src/app/services/auth.service';
import User from 'src/app/models/user.model';
import { FormGroup, FormControl } from '@angular/forms';
import { FirebaseStorage } from '@angular/fire';
import { AngularFireStorage } from '@angular/fire/storage';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-proflie',
  templateUrl: './proflie.component.html',
  styleUrls: ['./proflie.component.css']
})
export class ProflieComponent implements OnInit {

  currentUser
  photoUrl
  profileForm: FormGroup
  uploadedPhotoBlob: string
  uploadedPhoto: string
  defaultPhoto: string = 'http://4.bp.blogspot.com/-90hwewRVQtg/VahzGgst5PI/AAAAAAAAD1Q/ckwkglwJ3wU/s1600/frodo%2Bsmiling.jpg'
  removeUploadsSubject = 'hello'

  constructor(private authService: AuthService, private storage: AngularFireStorage) {

  }

  ngOnInit() {
    this.currentUser = this.authService.currentUser

    const { displayName, email } = this.currentUser

    this.photoUrl = this.authService.getUserPhoto()

    // this.removeUploadsSubject = new Subject()

    this.profileForm = new FormGroup({
      'displayName': new FormControl(displayName),
      'email': new FormControl(email),
      'photoURL': new FormControl(this.photoUrl)
    })

  }

  updateProfile(){
    let { displayName, photoURL } = this.profileForm.value

    if(this.profileForm.valid){
      //update profile on firebase
      this.authService.updateProfile({ displayName, photoURL })

      //update form locally
      this.profileForm.setValue(this.profileForm.value)
      if(this.uploadedPhotoBlob) {
        this.uploadedPhoto = this.uploadedPhotoBlob
      }
      // TODO: handle update
      alert('updated profile')
    }

  }

  onUploadFinished({ file, src }){
    this.profileForm.patchValue({
      photoURL: file
    })

    this.uploadedPhotoBlob = src
  }
}
