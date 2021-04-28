import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ContadorComponent } from './contador/contador.component';



@NgModule({
    declarations: [ //Componentes de nuestros modulos
        ContadorComponent,
    ],
    exports: [
        ContadorComponent //Componentes Visibles
    ],
    imports: [
        CommonModule
    ]
})
export class ContadorModule {

}