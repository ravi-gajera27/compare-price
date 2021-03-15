import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  key = '2KrpdKcbuN1nQ1asPyP4wmYU4lw5uFdu4Ik'

  url = `https://price-api.datayuge.com/api/v1/compare/`

  getPoducts(search){
    return this.http.get<any>(this.url + 'search?api_key=' + this.key + '&product=' + search)
  }

  compareProducts(id){
    return this.http.get<any>(this.url + 'detail?api_key=' + this.key + '&id=' + id)
  }

 
}
