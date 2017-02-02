import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { AppConstantService } from './app-constant-service';


@Injectable()
export class HttpService {

  private baseUrl: string;


  constructor(public http: Http) {
    this.baseUrl = AppConstantService.API().MOCK.API_MOCK;
  }

  onDeviceReady() {
    // Handle the online event
    console.log('DEVICE READY')
  }

  onOnline() {
    // Handle the online event
    console.log('ONLINE')
  }


  public get(url: string) {
    return this.http.get("https://demo4475807.mockable.io/templates_by_apps").map(res => res.json());
  }

  public post(url: string, data: any) {
    return this.http.post(`${this.baseUrl}${url}`, data).map(res => res);
  }

  public put(url: string, data: any) {
    return this.http.put(`${this.baseUrl}${url}`, data).map(res => res.json());
  }

  public delete(url: string, id: string) {
    return this.http.delete(`${this.baseUrl}${url}/${id}`).map(res => res.json());
  }

}
