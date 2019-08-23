import { Component, OnInit } from '@angular/core';
import { AngularFirestoreCollection, AngularFirestore } from 'angularfire2/firestore';
import { Router } from '@angular/router';
interface User {
  name: string;
  email: string;

}

@Component({
  selector: 'users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent{
  usersCol: AngularFirestoreCollection<User>;
  users:any;

  constructor(private afs: AngularFirestore) { }

  ngOnInit() {
    this.usersCol = this.afs.collection('users');
    this.users = this.usersCol.valueChanges();
   }

   add() {
     this._router.navigate(['add']);
   }

}
