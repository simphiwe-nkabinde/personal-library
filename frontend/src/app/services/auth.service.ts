import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import  axios  from 'axios';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http: HttpClient
  ) { }

  signin(response: any): any {
    return axios.post('http://localhost:3000/auth/signin', response)
  }
}
