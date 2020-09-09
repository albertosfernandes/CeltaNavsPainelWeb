import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ModelSaleRequestProduct } from 'src/app/Model/model-sale-request-product';
import { ModelSaleRequest } from 'src/app/Model/model-sale-request';
import { PedidosService } from '../pedidos.service';

@Component({
  selector: 'app-production',
  templateUrl: './production.component.html',
  styleUrls: ['./production.component.css']
})
export class ProductionComponent implements OnInit {


  @Input() _saleRequestProducts: ModelSaleRequestProduct[] = [];
  @Input() _saleRequests: ModelSaleRequest[] = [];
  // tslint:disable-next-line: no-output-on-prefix
  @Output() onClickDelivered = new EventEmitter<string>();

  constructor(private produtoPedidosService: PedidosService) { }

  loadSaleRequestsProduction() {
    this.produtoPedidosService.getSaleRequestsProductionAll(0)
    .subscribe(sale => {
      this._saleRequests = sale;
    });
  }

  sendToDelivered(value) {
    this.onClickDelivered.emit(value);
    this.loadSaleRequestsProduction();
  }

  ngOnInit() {

  }

}
