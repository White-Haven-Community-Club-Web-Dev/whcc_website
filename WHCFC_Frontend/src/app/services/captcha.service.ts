import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CaptchaService {
  private url = environment.apiUrl;
  constructor(private http: HttpClient) { }

  validate(body: any): Observable<any> {
    return this.http.post(this.url + '/captcha/validate', body);
  }
}
