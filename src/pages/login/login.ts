import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import { formArrayNameProvider } from '@angular/forms/src/directives/reactive_directives/form_group_name';
import {SignUpPage} from '../sign-up/sign-up';
import { HomePage } from '../home/home';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  form1;
  form;

  constructor(public nav1: NavController) {
    this.form1=new FormGroup({
      uname1: new FormControl("",Validators.required),
      pwd1: new FormControl("",Validators.required)
    });

    this.form=new SignUpPage(this.nav1);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  validate(vname: string, vpwd: string): boolean {
    let un = JSON.parse(localStorage.getItem(vname));
    console.log(JSON.stringify(un));
    let pd = un.pwd;
   console.log(pd)
    console.log(vname, vpwd);
   
    if (vpwd === pd) {
      return true;
    }
    else {
      return false;
    }
  }

  onSubmit1(){
    alert('1');
    console.log(this.form1.value.uname1, this.form1.value.pwd1);
    let valid: Boolean=this.validate(this.form1.value.uname1,this.form1.value.pwd1);
    if(valid=true){
      this.nav1.push(HomePage, this.form1);
      alert('logged in!');
    }
    else{
      alert("Incorrect Name or Password!!");
    }
  }
}