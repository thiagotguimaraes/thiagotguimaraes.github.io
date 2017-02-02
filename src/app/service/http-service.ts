import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class HttpService {

  private baseUrl: string;


  constructor(public http: Http) {

  }

  public get(url: string) {
    return this.http.get(url).map(res => res.json());
  }
}
