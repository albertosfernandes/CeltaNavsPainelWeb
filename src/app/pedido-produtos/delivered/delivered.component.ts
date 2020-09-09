import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { ModelPedidoProdutos } from 'src/app/Model/ModelPedidoProdutos';
import { PedidosService } from 'src/app/pedido-produtos/pedidos.service';
import { ModelSaleRequestProduct } from 'src/app/Model/model-sale-request-product';
import { ModelSaleRequest } from 'src/app/Model/model-sale-request';

@Component({
  selector: 'app-delivered',
  templateUrl: './delivered.component.html',
  styleUrls: ['./delivered.component.css']
})
export class DeliveredComponent implements OnInit, OnChanges {

  @Input() _saleRequestProductsDelivered: ModelSaleRequestProduct[] = [];
  @Input() _saleRequests: ModelSaleRequest[] = [];

  constructor(private produtoPedidosService: PedidosService) { }

  loadSaleRequestsProduction() {
    this.produtoPedidosService.getSaleRequestsProductionAll(0)
    .subscribe(sale => {
      this._saleRequests = sale;
    });
  }

  ngOnInit() {
  }

  ngOnChanges() {
    this.loadSaleRequestsProduction();
  }

}
