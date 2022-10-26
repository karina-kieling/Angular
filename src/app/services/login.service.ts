import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private httpclient:HttpClient) { }

  //URI : identificador universal de recursos e URL : localizador universal de recursos
  uri = "http://localhost:3000/login"

//Assincrona -
  login(usuario: User): Observable<any> {
    return this.httpclient.post(this.uri, JSON.stringify(usuario), {
      headers: new HttpHeaders({'Content-Type': 'application/json'}),
      observe: 'response'
    })
  }
}

