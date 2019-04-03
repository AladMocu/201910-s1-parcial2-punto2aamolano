import { Injectable } from '@angular/core';
import {Heroe} from "./heroe";
import {Observable} from "rxjs";
import { HttpClient } from '@angular/common/http';


const API_URL = "../../assets/";
const heroes = 'heroes.json';


@Injectable({
  providedIn: 'root'
})
export class HeroesService {

  constructor(private http: HttpClient) { }

  getHeroes(): Observable<Heroe[]> {
    return this.http.get<Heroe[]>(API_URL + heroes);
  }

  getHeroeDetail(HeroeID): Observable<Heroe> {
    return this.http.get<Heroe>(API_URL + "data-" + Heroe+".json");
  }


}
