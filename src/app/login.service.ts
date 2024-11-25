import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; 
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private apiUrl = 'https://example.com/api/login'; 

  constructor(private http: HttpClient) { }

  loginUser(credentials: any): Observable<any> {
    return this.http.post(this.apiUrl, credentials).pipe(
      catchError(this.handleError) 
    );
  }

  private handleError(error: any): Observable<never> {
    console.error('An error occurred:', error); 
    throw new Error('Login failed, please try again later.');
  }
}
