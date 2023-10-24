import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './user/components/home/home.component';
import { InboxComponent } from './user/components/inbox/inbox.component';
import { SendComponent } from './user/components/send/send.component';
import { FavoriteComponent } from './user/components/favorite/favorite.component';

const routes: Routes = [
  {path:'',component:HomeComponent,children:[
    {path:'inbox',component:InboxComponent},
    {path:'send',component:SendComponent},
    {path:'fav',component:FavoriteComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
