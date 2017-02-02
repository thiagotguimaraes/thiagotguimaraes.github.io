import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class AppConstantService {

  constructor() {
  }

  public static API() {
    return {
      MOCK: {
        API_MOCK: 'https://demo4475807.mockable.io/templates_by_apps',
      },
    }
  }
}
