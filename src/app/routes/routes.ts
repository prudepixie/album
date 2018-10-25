import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from 'src/app/screens/user/user.component';
import { HomeComponent } from 'src/app/screens/home/home.component';
import { CreateAlbumComponent } from 'src/app/screens/albums/create-album/create-album.component';
import { AlbumListComponent } from 'src/app/screens/albums/album-list.component';
import { SignupComponent } from '../screens/signup/signup.component';
import { AuthResolver } from '../resolvers/auth.resolver';
import { SigninComponent } from '../screens/signin/signin.component';
import { AuthGuard } from '../services/auth.guard';
import { FeedComponent } from '../screens/feed/feed.component';
import { AuthedGuard } from '../services/authed.guard';
import { AlbumComponent } from '../screens/albums/album/album.component'

const routes: Routes = [
  { path: '', 
    canActivateChild: [AuthedGuard],
    children: [
      { path: '', component: HomeComponent },
      { path: 'signup', component: SignupComponent},
      { path: 'signin', component: SigninComponent},
  ]},
  { 
    path: '',
    canActivateChild: [AuthGuard],  
    children: [ 
      { path: 'user', component: UserComponent },
      { path: 'album', component: CreateAlbumComponent },
      { path: 'feed', component: FeedComponent },
      { path: 'albums', component: AlbumListComponent},
      { path: 'albums/:id', component: AlbumComponent}
    ]
  },
  { path: '**', redirectTo: ''},
]

@NgModule({
  exports: [RouterModule],
  imports: [ RouterModule.forRoot(routes)]
})


export class AppRoutingModule { }