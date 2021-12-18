import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Salarie } from 'app/Models/Salarie/salarie';
import { Observable } from 'rxjs';

const  baseUrl = 'http://localhost:8080/Salaries';
@Injectable({
  providedIn: 'root'
})

export class SalarieService {

  salarieList: Array<Salarie>;

  constructor(private http: HttpClient) {  }

  getAll() : Observable<Salarie[]>{
    return this.http.get<Salarie[]>(baseUrl);
  }
  getById(id: string) :  Observable<Salarie>{
    return this.http.get<Salarie>(baseUrl+"/"+id);
  }
  addSalarie(salarie : Salarie) : Observable<Salarie>{
    return this.http.post<Salarie>(baseUrl,salarie);
  }
}
