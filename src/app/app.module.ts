import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NavComponent } from './shared/nav/nav.component';
import { CreateAlbumComponent } from './screens/albums/create-album/create-album.component';
import { HomeComponent } from './screens/home/home.component';
import { UserComponent } from './screens/user/user.component';
import { AppRoutingModule } from 'src/app/routes/routes';
import { AngularFireModule } from '@angular/fire';
import { environment } from '../environments/environment';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AlbumListComponent } from './screens/albums/album-list.component'
import AuthService from './services/auth.service';
import { SignupComponent } from './screens/signup/signup.component';
import { SigninComponent } from './screens/signin/signin.component';
import { AuthResolver } from './resolvers/auth.resolver';
import AuthThirdPartyProviderService from './services/auth.third.provider';
import { AuthGuard } from './services/auth.guard';
import { FormErrorComponent } from './shared/errors/form-error/form-error.component';
import { FeedComponent } from './screens/feed/feed.component';
import { AuthedGuard } from './services/authed.guard'
import FeedService from './services/feed.service';
import { ImageUploadModule } from "angular2-image-upload";
import { AlbumComponent } from './screens/albums/album/album.component'

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    CreateAlbumComponent,
    HomeComponent,
    UserComponent,
    AlbumListComponent,
    SignupComponent,
    SigninComponent,
    FormErrorComponent,
    FeedComponent,
    AlbumComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    AngularFirestoreModule,
    AngularFireStorageModule,
    ImageUploadModule.forRoot()
  ],
  providers: [AuthService, AuthResolver, AuthThirdPartyProviderService, AuthGuard, AuthedGuard, FeedService],
  bootstrap: [AppComponent]
})
export class AppModule { }
