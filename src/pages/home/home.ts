import { Component } from '@angular/core';
import { Platform, ActionSheetController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public platform: Platform,
    public actionSheetCtrl: ActionSheetController) { }

  openMenu(){
    let actionSheet=this.actionSheetCtrl.create({
      title: 'Albums',
      cssClass:'action-sheets-basic-page',
      buttons: [
        {
          text: 'Delete',
          role: 'Destructive',
          icon: !this.platform.is('android')? 'trash' : null,
          handler: () => {
            console.log('delete clicked!');
          }
        },
        {
          text: 'Share',
          icon: !this.platform.is('android')? 'share' : null,
          handler: () => {
            console.log('share clicked!');
          }
        },
        {
          text: 'Play',
          icon: !this.platform.is('android')? 'arrow-droplight-circle' : null,
          handler: () => {
            console.log('Play clicked!');
          }
        },
        {
          text: 'Cancel',
          role: 'cancel',
          icon: !this.platform.is('android')? 'close' : null,
          handler: () => {
            console.log('Cancel clicked!');
          }
        }
      ]
    });
    actionSheet.present();
  }
}
