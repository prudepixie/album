import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from 'src/app/screens/user/user.component';
import { HomeComponent } from 'src/app/screens/home/home.component';
import { CreateAlbumComponent } from 'src/app/screens/album/create-album/create-album.component';
import { AlbumComponent } from 'src/app/screens/album/album.component';


const routes: Routes = [
  { path: 'user', component: UserComponent},
  { path: 'album', component: CreateAlbumComponent},
  { path: 'albums', component: AlbumComponent },
  { path: '', component: HomeComponent},
  { path: '**', redirectTo: ''}
]

@NgModule({
  exports: [RouterModule],
  imports: [ RouterModule.forRoot(routes)]
})


export class AppRoutingModule { }