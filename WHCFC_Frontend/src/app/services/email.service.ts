import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class EmailService {
  private url = environment.apiUrl;
  constructor(private http: HttpClient) { }

  sendContactForm(formData: any) {
    return this.http.post(this.url + '/send-email/contact', formData);
  }
}
