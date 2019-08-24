import { Component, OnInit } from '@angular/core';
//import { UsersService } from '../../users.service';
import { Router, ActivatedRoute } from '@angular/router';
import { FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first, delay } from 'rxjs/operators';

import { AuthenticationService } from '../../_services';
@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css']
})
export class TopBarComponent implements OnInit {

  loginForm: FormGroup;
  loading= false;
  submitted = false;
  returnUrl: string;
  error: string;

  constructor(
              private router: Router,
              private route: ActivatedRoute,
              private authenticationService: AuthenticationService,
              private formBuilder: FormBuilder) { 
                if(this.authenticationService.currentUserValue)
                  this.router.navigate(['/profile']);
              }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: ['', Validators.required]
    });
    
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/profile';
  }

  get f() { return this.loginForm.controls; }

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.loginForm.invalid) {
      console.log("fail")
        return;
    }

    this.loading = true;
    this.authenticationService.login(this.f.email.value, this.f.password.value)
        .pipe(first()
        )
        .subscribe(
            data => {
                this.router.navigate([this.returnUrl]);
            },
            error => {
                window.alert(error);
                this.loading = false;
            });
  }
}
