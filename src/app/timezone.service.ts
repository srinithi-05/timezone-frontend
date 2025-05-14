import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TimezoneService {
  private baseUrl = 'https://localhost:7005/api/time'; 

  constructor(private http: HttpClient) {}

  getTimezones(): Observable<string[]> {
    return this.http.get<string[]>(`${this.baseUrl}/timezones`);
  }

  // Fetch the selected timezone time
  //.get() makes an HTTP GET request.
  //<{ selectedTime: string }> is a generic type 
  // -> When the response comes back, expect it to look like this:{ selectedTime: string }"
  getSelectedTime(timezone: string): Observable<{ selectedTime: string }> {
    return this.http.get<{ selectedTime: string }>(
      `${this.baseUrl}?timezone=${timezone}`
    );
  }
}