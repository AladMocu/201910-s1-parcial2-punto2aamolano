import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListarHeroesComponent } from './listar-heroes/listar-heroes.component';

@NgModule({
    declarations: [ListarHeroesComponent],
    exports: [
        ListarHeroesComponent
    ],
    imports: [
        CommonModule
    ]
})
export class HeroesModule { }
