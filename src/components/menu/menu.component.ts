import { Component } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {
  clic: boolean = false

  constructor() {
    // this.clic = true
    console.log(this.clic)
  }

  cliciado = () => {
    //return true
    this.clic = true
    console.log(this.clic)
  }

  cerrado = () => {
    this.clic = false
    console.log(this.clic)
    //return false
  }

  handleClick() {
    console.log('Se hizo clic en el botón');
    // Puedes realizar otras acciones aquí según tus necesidades
  }
}
