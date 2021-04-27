import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DatasetService {

  constructor(
    private http: HttpClient
  ) { }

  getData() {
    return this.http.get('../assets/ofertas.json');
  }
}
