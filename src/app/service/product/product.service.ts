import {HttpClient, HttpParams} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  baseUrl=environment.baseUrl;

  constructor(private http:HttpClient) { }

  search(page:any, size:any, searchText:any):Observable<any>{
    let params = new HttpParams();
    params=params.append('searchText', searchText);
    params=params.append('page', page);
    params=params.append('size', size);
    return this.http.get(this.baseUrl+'products/list',{params:params});
  }

}
