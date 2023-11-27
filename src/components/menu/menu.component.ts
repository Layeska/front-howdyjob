import { Component, AfterViewInit } from '@angular/core';
//import AOS from 'aos';
//import 'aos/dist/aos.css';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements AfterViewInit  {
  clic: boolean = false
  width = window.innerWidth;
  height = window.innerHeight;

  constructor() {
    console.log(`Ancho del dispositivo: ${this.width}px`);
    console.log(`Alto del dispositivo: ${this.height}px`);

    this.clic = this.width >= 800 ? true : false;
  }

  ngAfterViewInit() {
    //AOS.init();
  }

  cliciado = () => {
    this.clic = true;
    console.log(this.clic)
  }

  cerrado = () => {
    this.clic = false;
    console.log(this.clic)
    //return false
  }
}
