import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient, private firestore: AngularFirestore) { }

  key = '2KrpdKcbuN1nQ1asPyP4wmYU4lw5uFdu4Ik'

  url = `https://price-api.datayuge.com/api/v1/compare/`

  getPoducts(search){
    return this.http.get<any>(this.url + 'search?api_key=' + this.key + '&product=' + search)
  }

  compareProducts(id){
    return this.http.get<any>(this.url + 'detail?api_key=' + this.key + '&id=' + id)
  }

  login(data){
    return this.firestore.collection('user', ref => ref.where('email', '==', data.email).where('password', '==', data.password).limit(1)).get()
  }

  signup(data){
    return this.firestore.collection('user').add(data)
  }

 
}
