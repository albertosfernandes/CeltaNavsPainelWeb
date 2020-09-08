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
  // tslint:disable-next-line: no-output-on-prefix
  @Output() onClickDelivered = new EventEmitter<string>();

  constructor(private produtoPedidosService: PedidosService) { }

  sendToDelivered(value) {
    this.onClickDelivered.emit(value);
    this.loadSaleRequestsForDelivery();
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
    this.loadSaleRequestsForDelivery();
  }

}
