import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListarHeroesComponent } from './listar-heroes/listar-heroes.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';

@NgModule({
    declarations: [ListarHeroesComponent, HeroDetailComponent],
    exports: [
        ListarHeroesComponent,
        HeroDetailComponent
    ],
    imports: [
        CommonModule
    ]
})
export class HeroesModule { }
