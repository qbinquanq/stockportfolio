import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { fakeBackendProvider } from './_helpers';

import { AppRoutingModule } from './app-routing.module';
import { JwtInterceptor, ErrorInterceptor } from './_helpers';
import { AppComponent } from './app.component';
import { TopBarComponent } from './homepage/top-bar/top-bar.component';
import { HomeInfoComponent } from './homepage/home-info/home-info.component';
import { RegisterFormComponent } from './homepage/register-form/register-form.component';
import { ProfileComponent } from './profile/profile.component';
import { FooterComponent } from './homepage/footer/footer.component';

@NgModule({
   declarations: [
      AppComponent,
      TopBarComponent,
      HomeInfoComponent,
      RegisterFormComponent,
      ProfileComponent,
      FooterComponent
   ],
   imports: [
      BrowserModule,
      ReactiveFormsModule,
      AppRoutingModule,
      HttpClientModule,
      NgbModule
   ],
   providers: [
      { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
      { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
      fakeBackendProvider],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
