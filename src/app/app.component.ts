import { Component, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { ModelPedidoProdutos } from './Model/ModelPedidoProdutos';
import { PedidosService } from './pedido-produtos/pedidos.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnChanges {
  title = 'app';

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges() {
   }

}
