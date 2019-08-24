import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { catchError, map, tap, retry } from 'rxjs/operators';
import { Observable, of, throwError } from 'rxjs';
import { LoginUser } from '../user'; 
@Injectable({
  providedIn: 'root'
})
export class UsersService {

/*private userUrl = 'server/StockPortfolio/login';
httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json'})
};

login(email:string, password: string): Observable<any>{
  return this.http.get(this.userUrl).pipe(
    retry(3),
    catchError(this.handleError)
  );
}
private handleError(error: HttpErrorResponse){
  if (error.error instanceof ErrorEvent) {
    // A client-side or network error occurred. Handle it accordingly.
    console.error('An error occurred:', error.error.message);
  } else {
    // The backend returned an unsuccessful response code.
    // The response body may contain clues as to what went wrong,
    console.error(
      `Backend returned code ${error.status}, ` +
      `body was: ${error.error}`);
  }
  // return an observable with a user-facing error message
  return throwError(
    'Something bad happened; please try again later.');
}; */

getAll() {
  return this.http.get<any[]>("http://localhost:4200/users");
}

register(user) {
  return this.http.post("http://localhost:4200/users/register", user);
}

delete(id) {
  return this.http.delete(`http://localhost:4200/users/${id}`);
}
constructor(private http: HttpClient) { }

}
