import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; 
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MovingRequirementService {
  private apiUrl = 'https://example.com/api/moving-requirements'; 

  constructor(private http: HttpClient) { }

  
  submitMovingRequirements(data: any): Observable<any> {
    return this.http.post(this.apiUrl, data).pipe(
      catchError(this.handleError) 
    );
  }

 
  private handleError(error: any): Observable<never> {
    console.error('An error occurred:', error); 
    throw new Error('Submission failed, please try again later.');
  }
}
