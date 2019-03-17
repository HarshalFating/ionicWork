import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {FormGroup,FormControl, Validators} from '@angular/forms';
import { LoginPage } from '../login/login';

@IonicPage()
@Component({
  selector: 'page-sign-up',
  templateUrl: 'sign-up.html'
})
export class SignUpPage {
  form;
  submitted=false;
  i=1;

  constructor(public nav: NavController){
    this.form=new FormGroup({
      uname: new FormControl("",Validators.required),
      pwd: new FormControl("",Validators.required),
      gender: new FormControl("", Validators.required)
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SignUpPage');
  }

  onSubmit(){
    alert('Saved!');
    this.submitted=true;
    this.i+=1;
    console.log(this.form.value.uname);
    localStorage.setItem(this.form.value.uname,JSON.stringify(this.form.value));
    this.nav.push(LoginPage, this.form);
  }
}