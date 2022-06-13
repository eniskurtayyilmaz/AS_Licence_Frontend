import { Injectable } from '@angular/core';
import { AuthService } from '../auth.service';
import { Observable } from 'rxjs';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Websetting } from 'src/app/_viewmodel/settings/websetting';

@Injectable({
  providedIn: 'root'
})
export class ComputerService {

  env: { baseUrl: string; };
  baseUrl = ''; // = 'Subscription/';

  constructor(private authService: AuthService, private http: HttpClient) {
    this.env = Websetting;
    this.baseUrl = this.env.baseUrl + 'CustomerComputerInfo/';
  }

  GetCustomerComputerInfoListsBySubscriptionId(subscriptionId: number): Observable<any> {

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + this.authService.getToken()
      })
    };

    return this.http.get<any>(this.baseUrl + 'GetCustomerComputerInfoListsBySubscriptionId/?subscriptionId=' + subscriptionId, httpOptions)
      .pipe();

  }
}
