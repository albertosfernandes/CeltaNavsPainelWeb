import { Component, OnInit, Input, OnChanges, SimpleChanges, Output } from '@angular/core';
import { ModelPedidoProdutos } from './../Model/ModelPedidoProdutos';
import { PedidosService } from './pedidos.service';
import { ModelSaleRequest } from '../Model/model-sale-request';
import { ModelSaleRequestProduct } from '../Model/model-sale-request-product';

@Component({
  selector: 'app-pedido-produtos',
  templateUrl: './pedido-produtos.component.html',
  styleUrls: ['./pedido-produtos.component.css']
})
export class PedidoProdutosComponent implements OnInit, OnChanges {

  saleRequestProducts: ModelPedidoProdutos[] = [];
  saleRequests: ModelSaleRequest[] = [];
  _saleRequestProducts: ModelSaleRequestProduct[] = [];
  _saleRequestProductsDelivered: ModelSaleRequestProduct[] = [];
  @Output() delivered: ModelSaleRequestProduct;
  _pedidoId = '0';


  constructor(private produtoPedidosService: PedidosService) {
    setInterval(() => {this.loadSaleRequestsProducts();
    }, 4000);
   }

  loadSaleRequestsProducts() {
    this.produtoPedidosService.getSaleRequestsProductionAll(0)
    .subscribe(sale => {
      this.saleRequests = sale;
    });
  }

  loadSaleRequestsProduction() {
    this.produtoPedidosService.getSaleRequestsProductionAll(0)
    .subscribe(sale => {
      this.saleRequests = sale;
    });
  }

  loadDelivered() {
    this.produtoPedidosService.getSaleRequestProductsDelivered()
    .subscribe(prodsDelivered => {
    this._saleRequestProductsDelivered = prodsDelivered;
    });
  }

  sendToDelivery(value) {
    this.produtoPedidosService.updateSaleRequestProducts(value)
    .subscribe(data => {
      this.loadSaleRequestsProducts();
      this.loadDelivered();
    },
    error => {
      console.log('Erro: ' + error.data);
    });
  }

  sendToProduction(value) {
    this.produtoPedidosService.updateStatusSaleRequestProductStatus(value, '1')
    .subscribe(data => {
    },
    error => {
      console.log('Erro: ' + error.data);
    },
    () => {
      this.loadSaleRequestsProducts();
      this.loadDelivered();
    });
  }

  ngOnChanges() {
    this.loadSaleRequestsProducts();
    this.loadDelivered();
  }

  ngOnInit() {
    this.loadSaleRequestsProducts();
    this.loadDelivered();
  }

}
