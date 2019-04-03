import {Component, Input, OnInit} from '@angular/core';
import {Heroedetail} from "../heroedetail";
import {HeroesService} from "../heroes.service";
import {Movie} from "../movie";

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {

  constructor(private heroesService:HeroesService) { }

  heroDetail :Heroedetail;

  movies: Movie[];


  ngOnInit() {
    this.heroesService.getHeroeDetail(this.heroDetail).subscribe(value => {
      this.heroDetail=value;
      this.movies=value.movies;
    })
  }

}
