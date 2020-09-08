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
    setInterval(() => {this.loadSaleRequestsForDelivery();
    }, 4000);
   }

  loadSaleRequestsForDelivery() {
    this.produtoPedidosService.getSaleRequestProductsForDelivery()
    .subscribe(sale => {
      this._saleRequestProducts = sale;
    } );
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
      this.loadSaleRequestsForDelivery();
      this.loadDelivered();
    },
    error => {
      console.log('Erro: ' + error.data);
    });
  }

  sendToProduction(value) {
    this.produtoPedidosService.changeProductionStatus(value, 1)
    .subscribe(data => {
    },
    error => {
      console.log('Erro: ' + error.data);
    },
    () => {
      this.loadSaleRequestsForDelivery();
      this.loadDelivered();
    });
  }

  ngOnChanges() {
    this.loadSaleRequestsForDelivery();
    this.loadDelivered();
    console.log('Changes!!!!: ' + this.delivered);
  }

  ngOnInit() {
    this.loadSaleRequestsForDelivery();
    this.loadDelivered();
  }

}
