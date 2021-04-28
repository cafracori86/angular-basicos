import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { HeroeComponent } from './heroe/heroe.component';
import { ListadoComponent } from './listado/listado.component';


@NgModule({
    declarations: [ //Componentes de nuestros modulos
        HeroeComponent,
        ListadoComponent
    ],
    exports: [
        ListadoComponent //Componentes Visibles
    ],
    imports: [
        CommonModule
    ]
})
export class HeroesModule {

}