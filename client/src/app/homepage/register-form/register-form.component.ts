import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { first } from 'rxjs/operators';
import { UsersService, AuthenticationService } from '../../_services';
@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css']
})
export class RegisterFormComponent implements OnInit {
  validMessage: string;
  userRegistrationForm: FormGroup;
  firstNameErrorMessage: string;
  passwordConfirmError = false;
  submitted = false;
  loading = false;
  error: string;
  
  passwordMatchValidator(g: FormGroup){
    return g.controls.password.value !== g.controls.passwordConfirm.value ? { mismatch: true} : false
  }

  constructor(
        private formBuilder: FormBuilder,
        private router: Router,
        private authenticationService: AuthenticationService,
        private usersService: UsersService
  ) { }

  ngOnInit() {
    this.userRegistrationForm = this.formBuilder.group({
      firstName: new FormControl('', Validators.required),
      lastName: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', Validators.required),
      passwordConfirm: new FormControl('', [Validators.required])
    }, {validators: this.passwordMatchValidator.bind(this)});
  }
  get f() { return this.userRegistrationForm.controls; }
  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.userRegistrationForm.invalid) {
        return;
    }
    
    this.loading = true;
    this.usersService.register(this.userRegistrationForm.value)
        .pipe(first())
        .subscribe(
            data => {
                //this.router.navigate(['/'], { queryParams: { registered: true }});
                window.alert("The account is created successfully");
                this.loading = false
            },
            error => {
                this.error = error;
                window.alert(this.error)
                this.loading = false;
            });
    }

}
