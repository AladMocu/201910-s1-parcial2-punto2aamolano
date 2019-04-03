import { Component, OnInit } from '@angular/core';
import {Heroe} from "../heroe";
import {HeroesService} from "../heroes.service"
import {Observable} from "rxjs";

@Component({
  selector: 'app-listar-heroes',
  templateUrl: './listar-heroes.component.html',
  styleUrls: ['./listar-heroes.component.css']
})
export class ListarHeroesComponent implements OnInit {

  heroes:Heroe[];

  maxheroe:Heroe;
  constructor(private heroesService:HeroesService) { }

  ngOnInit() {
  this.heroesService.getHeroes().subscribe(value => this.heroes=value);
    this.getMaxPower()
  }

  getMaxPower():void {

    this.heroesService.getHeroes().subscribe(value => {
      let maxpower = 0;
      let maxHero;
      value.forEach(value1 => {
        if (value1.power > maxpower) {
          maxpower = value1.power;
          maxHero = value1;
        }
      });
      this.maxheroe = maxHero
    });
  }


}
