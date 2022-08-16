import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  dado: number = 10;
  constructor() {}
  
   async sortear(){
    for (let i = 0; i < 10; i++){
    let numeroSorteado = Math.random();
    this.dado = Math.floor(numeroSorteado * 6 + 1);
    await new Promise(f => setTimeout(f, 100));
    
    }
  }

}
