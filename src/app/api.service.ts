
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
 
@Injectable({
  providedIn: 'root'
})
export class ApiService {
 
  // API path

  //get_lists = '../assets/data/get_lists.json';
  //get_lists = 'http://localhost:9005/storeCon/displayStores';
  //get_item_lists = 'http://localhost:9005/storeCon/displayItems';
  
  get_lists = 'https://cfc2020essentialsbe.eu-gb.cf.appdomain.cloud/storeCon/displayStores';
  get_item_lists = 'https://cfc2020essentialsbe.eu-gb.cf.appdomain.cloud/storeCon/displayItems';
 
  constructor(private http: HttpClient) { }
 
  // Http Options
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
 
  // Handle API errors
  handleError(error: HttpErrorResponse) {
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
  };

 
  getList(val,needtype): Observable<any> {
    return this.http
      .get<any>(this.get_lists+'?needType='+needtype+'&location='+val)
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
  };
  
  getItemList(val,needtype): Observable<any> {
    return this.http
      .get<any>(this.get_item_lists+'?id='+val+'&type='+needtype)
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
  };
  
  getListOld(val): Observable<any> {
    return this.http
      .get<any>(this.get_lists+'?location='+val)
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
  }; 
 
}