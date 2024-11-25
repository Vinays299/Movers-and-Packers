import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LiveTrackingService {

  private apiUrl = 'https://your-api-endpoint.com/track'; 

  constructor(private http: HttpClient) { }

  trackPackage(trackingNumber: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}?trackingNumber=${trackingNumber}`);
  }
}
