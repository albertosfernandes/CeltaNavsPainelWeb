import { Component, OnInit, Input } from '@angular/core';
import { ModelPedidoProdutos } from 'src/app/Model/ModelPedidoProdutos';
import { PedidosService } from 'src/app/pedido-produtos/pedidos.service';
import { ModelSaleRequestProduct } from 'src/app/Model/model-sale-request-product';

@Component({
  selector: 'app-delivered',
  templateUrl: './delivered.component.html',
  styleUrls: ['./delivered.component.css']
})
export class DeliveredComponent implements OnInit {

  @Input() _saleRequestProductsDelivered: ModelSaleRequestProduct[] = [];

  constructor() { }

  ngOnInit() {
  }

}
