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


  constructor(private produtoPedidosService: PedidosService) { }

   loadSaleRequests() {
     this.produtoPedidosService.getSaleRequestsAll()
     .subscribe(saleRequest => {
       this.saleRequests = saleRequest;
       console.log(saleRequest);
     },
     error => {
       console.log('Erro ao carregar pedidos');
     },
     () => {
      // setInterval(() => {this.loadSaleRequests();
      // }, 4000);
     });
   }


  sendToDelivery(value) {
    this.produtoPedidosService.updateStatusSaleRequestProductStatus(value, '2')
    .subscribe(data => {

    },
    error => {
      console.log('Erro: ' + error.data);
    },
    () => {
      this.loadSaleRequests();
    });
  }

  BackToDelivery(value) {
    this.produtoPedidosService.updateSaleRequestProductsUnMark(value)
    .subscribe(data => {

    },
    error => {

    },
    () => {
      this.loadSaleRequests();
    });
  }

  ngOnChanges() {
    this.loadSaleRequests();
  }

  ngOnInit() {
    this.loadSaleRequests();
  }

}
