import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  
  constructor(private http: HttpClient) {}
  

  private apiUrl:string = 'http://localhost:5000/api';

  getdata(endPoint:string){
    return this.http.get(`${this.apiUrl}/${endPoint}`);
  }

  postdata(nome: string, senha: string, endPoint: string){
    return this.http.post(`${this.apiUrl}/${endPoint}`, {nome, senha});
  }


  logout(){
    localStorage.removeItem('token');
  }
}
