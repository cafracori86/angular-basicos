import { createHostListener } from '@angular/compiler/src/core';
import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
})
export class ListadoComponent  {

   heroes: string[] = ['SpiderMan','Batman','Superman','Wonder Woman','Linterna Verde'];
   heroeBorrado: string = ''

   borrarHeroe() {
     this.heroeBorrado = this.heroes.shift() || '';
   }
}
