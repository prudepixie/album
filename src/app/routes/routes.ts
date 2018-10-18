import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from 'src/app/screens/user/user.component';
import { HomeComponent } from 'src/app/screens/home/home.component';
import { CreateAlbumComponent } from 'src/app/screens/album/create-album/create-album.component';
import { AlbumComponent } from 'src/app/screens/album/album.component';
import { SignupComponent } from '../screens/signup/signup.component';
import { AuthResolver } from '../resolvers/auth.resolver';
import { SigninComponent } from '../screens/signin/signin.component';
import { AuthGuard } from '../services/auth.guard';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'signup', component: SignupComponent},
  { path: 'signin', component: SigninComponent},
  { 
    path: '',
    canActivateChild: [AuthGuard],  
    children: [ 
      { path: 'user', component: UserComponent },
      { path: 'album', component: CreateAlbumComponent },
      { path: 'albums', component: AlbumComponent },
    ]
  },
  { path: '**', redirectTo: ''},
]

@NgModule({
  exports: [RouterModule],
  imports: [ RouterModule.forRoot(routes)]
})


export class AppRoutingModule { }