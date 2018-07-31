import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'

import { AppComponent } from './app.component';
import { WordComponent } from './word/word.component';
import { BookComponent } from './book/book.component';
import { UserFormComponent } from './user-form/user-form.component';
import { StruckComponent } from './struck/struck.component';
import { WordsComponent } from './words/words.component';
import { PersonComponent } from './person/person.component';
import { ListComponent } from './list/list.component';
import { ParentComponent } from './parent.component';
import { ChildComponent } from './child.component';
import { IpComponent } from './ip.component';
import { HttpModule } from '../../node_modules/@angular/http';
import { IpService } from './ip.service';
import { WeatherIPComponent } from './weather-ip/weather-ip.component';
import { SignInComponent } from './sign-in.component';

@NgModule({
  declarations: [
    AppComponent,
    WordComponent,
    BookComponent,
    UserFormComponent,
    StruckComponent,
    WordsComponent,
    PersonComponent,
    ListComponent,
    ParentComponent,
    ChildComponent,
    IpComponent,
    WeatherIPComponent,
    SignInComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule  
  ],
  providers: [IpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
