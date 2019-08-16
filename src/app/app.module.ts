import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { UsersComponent } from './users/users.component';

import { routing } from './app.routing';

  // Your web app's Firebase configuration
  var config = {
    apiKey: "AIzaSyA2XMuthBqYb7qDwqusk_KF3BG0GDQ0u7M",
    authDomain: "mycrudapp-32d50.firebaseapp.com",
    databaseURL: "https://mycrudapp-32d50.firebaseio.com",
    projectId: "mycrudapp-32d50",
    storageBucket: "",
    messagingSenderId: "784983823900",
    appId: "1:784983823900:web:1b7653689eb47433"
  };
  // Initialize Firebase
  // firebase.initializeApp(config);



@NgModule({
  declarations: [
    AppComponent,
    UsersComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(config),
    AngularFirestoreModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
