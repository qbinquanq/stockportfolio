import { Component } from '@angular/core';
import { AuthenticationService } from './_services';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  currentUser: any;

  constructor(private authenticationService: AuthenticationService, private router: Router ){
    this.authenticationService.currentUser.subscribe(user => this.currentUser = user);
  }

  logout(){
    this.authenticationService.logout();
    this.router.navigate(['/'])
  }
  /*title = 'client';
  name = 'Goldman';
  wardColor = 'black';
  customers = [
    {id: 1, name: 'Ward'},
    {id: 2, name: 'Kevin'},
    {id: 3, name: 'Eric'},
    {id: 4, name: 'Sally'},
    {id: 5, name: 'Emmet'}
  ];
  changeNameColor(){
    this.name = this.name === 'Goldman' ? 'Silverman' : 'Goldman';
    this.changeColor();
  }
  changeColor(){
    this.wardColor = this.wardColor === 'black' ? 'red' : 'black';
  }*/
}
