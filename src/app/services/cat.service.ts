import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CatService {
  private apiUrl = 'https://api.thecatapi.com/v1/breeds';
  private apiKey = "live_pk7scRseL0NLAsrn2aXUMmtxWPwDm3WfDMUGJjaIauWO2N153ChTDPfZgbGCMcc2";

  constructor(private http: HttpClient) {}

  getBreeds(): Observable<any> {
    const headers = new HttpHeaders({
      'x-api-key': this.apiKey
    });
    return this.http.get(this.apiUrl, { headers });
  }
}

