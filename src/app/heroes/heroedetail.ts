import {Movie} from "./movie";

export class Heroedetail {

    id:number;

    name:string;

    text :string;

    movies:Movie[];


    constructor(id: number, name: string, text: string, movies: Movie[]) {
        this.id = id;
        this.name = name;
        this.text = text;
        this.movies = movies;
    }

}