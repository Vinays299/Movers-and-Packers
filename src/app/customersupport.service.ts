import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomerSupportService {

  private apiUrl = 'https://your-api-endpoint.com/support'; 

  constructor(private http: HttpClient) { }

  submitSupportRequest(data: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, data);
  }
}
