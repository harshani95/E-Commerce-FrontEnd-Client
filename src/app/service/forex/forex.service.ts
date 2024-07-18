import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ForexService {

  key = '222222222222222222';

  constructor(private http: HttpClient) {
  }

  public exchange(from: any, to: any):
    Observable<any> {
    const options = {method: 'GET', headers: {accept: 'application/json'}};
    return this.http.get('https://api.fastforex.io/fetch-one?from=' + from + '&to=' + to + '&api_key=' + this.key, options);
  }
}
