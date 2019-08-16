import { Component } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
@Component({
  selector: 'app-root',
  // templateUrl: './app.component.html',
  template:`<users></users>`,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'MyCRUDApp';

  constructor(private afs: AngularFirestore){
    console.log(afs);
  }
}
