import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';


import { SkillsService } from './modules/skills/services/skills.service';
import { ContactService } from './modules/contacts/services/contact.service';
import { GreetingComponent } from './components/greeting/greeting.component';
import { ContactFormComponent } from './components/contact-form/contact-form.component';

import { SkillsModule } from './modules/skills/skills.module';
import { ContactsModule } from './modules/contacts/contacts.module';
import { AppRoutingModule } from './/app-routing.module';
import { MoviesModule } from './modules/movies/movies.module';
import { MusicModule } from './modules/music/music.module';






@NgModule({
  declarations: [
    AppComponent,
    GreetingComponent,
    ContactFormComponent
  ],
  imports: [
    BrowserModule, FormsModule, SkillsModule, ContactsModule, AppRoutingModule, MoviesModule, MusicModule
  ],
  providers: [SkillsService, ContactService],
  bootstrap: [AppComponent]
})
export class AppModule { }
