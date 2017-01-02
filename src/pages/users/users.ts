import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { User } from '../../models/user';
import { UserDetailsPage } from '../user-details/user-details';

import { GithubUsers } from '../../providers/github-users';

@Component({
  selector: 'page-users',
  templateUrl: 'users.html'
})
export class UsersPage {
  users: User[]
  originalUsers: User[]

  constructor(public navCtrl: NavController, private githubUsers: GithubUsers) {
    githubUsers.load().subscribe(users => {
      this.users = users;
      this.originalUsers = users;
    })
  }

  goToDetails(login: string) {
    this.navCtrl.push(UserDetailsPage, {login})
  }

  search(searchEvent) {
    let term = searchEvent.target.value
    if (term.trim() === '' || term.trim().length < 3) {
      // Load cached users
      this.users = this.originalUsers;
    } else {
      this.githubUsers.searchUsers(term).subscribe(users => {
        this.users = users
      });
    }
  }
}
