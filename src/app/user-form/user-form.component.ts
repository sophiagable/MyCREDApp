import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AngularFirestoreCollection, AngularFirestore } from 'angularfire2/firestore';
import { Router } from '@angular/router';
import { User } from './../user';

@Component({
  selector: 'user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})

export class UserFormComponent implements OnInit {

  form: FormGroup;
  user = new User();

  constructor(fb: FormBuilder, private _router:Router, private afs: AngularFirestore) {
    this.form = fb.group({
      name:['', Validators.required],
      eamil: ['', Validators.required]
    })
  }

  submit(){
    this.afs.collection('users').add({
      name:this.user.name,
      email: this.user.email
    })

    this._router.navigate(['']);
  }

  ngOnInit() {
  }

}
