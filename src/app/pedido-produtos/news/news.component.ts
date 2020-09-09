import { ModelSaleRequest } from './../../Model/model-sale-request';
import { Component, OnInit, Input, OnChanges, Output, EventEmitter } from '@angular/core';
import { ModelSaleRequestProduct } from 'src/app/Model/model-sale-request-product';
import { PedidosService } from '../pedidos.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit, OnChanges {

  @Input() _saleRequestProducts: ModelSaleRequestProduct[] = [];
  @Input() saleRequests: ModelSaleRequest[] = [];
  // tslint:disable-next-line: no-output-on-prefix
  @Output() onClickDelivered = new EventEmitter<string>();

  constructor(private produtoPedidosService: PedidosService) { }

  sendToDelivered(value) {
    this.onClickDelivered.emit(value);
    this.loadSaleRequestsForDelivery();
  }

  loadSaleRequestsProduction() {
    this.produtoPedidosService.getSaleRequestsProductionAll(0)
    .subscribe(sale => {
      this.saleRequests = sale;
      console.log(this.saleRequests[0]);
    });
  }

  loadSaleRequestsProducts() {
    this.produtoPedidosService.getSaleRequestsProductionAll(0)
    .subscribe(sale => {
      this.saleRequests = sale;
    });
  }

  loadSaleRequestsForDelivery() {
    this.produtoPedidosService.getSaleRequestProductsForDelivery()
    .subscribe(sale => {
      this._saleRequestProducts = sale;
    });
  }

  ngOnInit() {
  }

  ngOnChanges() {
    this.loadSaleRequestsProduction();
  }

}
