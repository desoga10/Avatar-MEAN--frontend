import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddAvatarComponent } from './components/add-avatar/add-avatar.component';
import { ListAvatarComponent } from './components/list-avatar/list-avatar.component';
import { EditAvatarComponent } from './components/edit-avatar/edit-avatar.component';
import { NavabarComponent } from './components/navabar/navabar.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ModalComponent } from './components/modal/modal.component';

@NgModule({
  declarations: [
    AppComponent,
    AddAvatarComponent,
    ListAvatarComponent,
    EditAvatarComponent,
    NavabarComponent,
    ModalComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
