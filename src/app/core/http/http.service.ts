import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  private baseUrl = 'http://5cf6a27f46583900149cba56.mockapi.io';

  constructor(private httpClient: HttpClient) {
  }

  post(path: string, params?:  { [key: string]: any }): Observable<Object> {
      return this.httpClient.post(`${this.baseUrl}/${path}`,{params: params});
  }

  get(path: string, params?:  { [key: string]: any }): Observable<Object>{
    return this.httpClient.get(`${this.baseUrl}/${path}`,{params: params});
  }

  delete(){

  }


}
