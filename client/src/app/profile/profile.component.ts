import { Component, OnInit, PipeTransform } from '@angular/core';
import { AuthenticationService } from '../_services';
import { Router } from '@angular/router';
import { Stock, StockList } from '../_stocklist/';
import { DecimalPipe } from '@angular/common';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith, debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
  providers: [DecimalPipe]
})


export class ProfileComponent implements OnInit {

  currentUser: any;

  stockLists$: Observable<Stock[]>;
  
  
  filter= new FormControl('');

  constructor(private authenticationService: AuthenticationService, 
              private router: Router, 
              pipe: DecimalPipe,
              private formBuilder: FormBuilder, ){
    this.authenticationService.currentUser.subscribe(user => this.currentUser = user);
    this.stockLists$ = this.filter.valueChanges.pipe(
      debounceTime(1000),
      startWith(''),
      map(text => this.search(text, pipe))
    );
    //if(!this.currentUser)
                  //this.router.navigate(['/']);
  }

  search(text: string, pipe: PipeTransform): Stock[] {
    return StockList.filter(stock => {
      const term = text.toLowerCase();
      return stock.symbol.toLowerCase().includes(term)
          || stock.name.toLowerCase().includes(term);
    });
  }
  logout(){
    this.authenticationService.logout();
    this.router.navigate(['/'])
  }

  ngOnInit() {
    
  }

}
