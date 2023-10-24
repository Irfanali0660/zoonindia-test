import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InboxComponent } from './user/components/inbox/inbox.component';
import { HomeComponent } from './user/components/home/home.component';
import { SendComponent } from './user/components/send/send.component';
import { FavoriteComponent } from './user/components/favorite/favorite.component';
import { SearchInboxPipe } from './user/pipes/search-inbox.pipe';
import { SingleinboxComponent } from './user/components/singleinbox/singleinbox.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    InboxComponent,
    HomeComponent,
    SendComponent,
    FavoriteComponent,
    SearchInboxPipe,
    SingleinboxComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
