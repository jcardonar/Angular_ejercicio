import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.scss']
})
export class DemoComponent implements OnInit {

  title = 'platzi-store';

  items = ['nicolas', 'juanita', 'cardona'];

  power = 10;

  ngOnInit(){
    /*code*/
  }
  /*Agregar items a la interfase*/
  addItem() {
    this.items.push('nuevo item');
  }

  /*Borrar items de la interfas */
  deleteItem(index: number){
    this.items.splice(index, 1);
  }
}
