import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-organisations',
  templateUrl: 'organisations.html'
})
export class OrganisationsPage {

  constructor(public navCtrl: NavController) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad OrganisationsPage');
  }

}
