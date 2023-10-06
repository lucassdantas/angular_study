import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {

  constructor(
    private httpClient: HttpClient
  ) { 

  }

  fetchData() {
    this.httpClient.get()
  }
}
