import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../_services';
import { Router } from '@angular/router';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  currentUser: any;

  constructor(private authenticationService: AuthenticationService, private router: Router ){
    this.authenticationService.currentUser.subscribe(user => this.currentUser = user);
    
    //if(!this.currentUser)
                  //this.router.navigate(['/']);
  }

  logout(){
    this.authenticationService.logout();
    this.router.navigate(['/'])
  }

  ngOnInit() {
  }

}
