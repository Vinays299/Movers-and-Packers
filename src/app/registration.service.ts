import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {

  private apiUrl = 'https://example.com/api/register'; 

  constructor(private http: HttpClient) { }

  registerUser(userData: any): Observable<any> {
    return this.http.post(this.apiUrl, userData).pipe(
      catchError(this.handleError) 
    );
  }


  private handleError(error: any): Observable<never> {
    console.error('An error occurred:', error); 
    throw new Error('Registration failed, please try again later.');
  }
}
