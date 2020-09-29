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

  // @Input() _saleRequestProducts: ModelSaleRequestProduct[] = [];
  @Input() _saleRequestProductsNew: ModelSaleRequestProduct[] = [];
  // @Input() saleRequests: ModelSaleRequest[] = [];
  @Input() pedido: ModelSaleRequest;
  saleRequestsProduction: ModelSaleRequestProduct[] = [];
  saleRequestsDelivered: ModelSaleRequestProduct[] = [];
  // tslint:disable-next-line: no-output-on-prefix
  @Output() onClickDelivered = new EventEmitter<string>();
  // tslint:disable-next-line: no-output-on-prefix
  @Output() onClickLoadSaleRequest = new EventEmitter();
  isShowDelivered = false;


  constructor(private produtoPedidosService: PedidosService) {
    //  setInterval(() => {this.loadSaleRequestsNew(this.pedido.SaleRequestId);
    //  }, 4000);
  }

  sendToDelivered(value) {
    this.onClickDelivered.emit(value);
  }

  BackToDelivery(value) {
    this.produtoPedidosService.updateSaleRequestProductsUnMark(value)
    .subscribe(data => {

    },
    error => {

    },
    () => {
      // this.loadSaleRequests();
    });
  }
  backToDelivered(value) {

  }

  back() {
    alert('volta ai');
  }

  sendForLoadSaleRequest(value) {
    alert(value);
    this.BackToDelivery(value);
  }

  loadSaleRequestsNew (_saleRequestId) {
    this.produtoPedidosService.getSaleRequestProductsNew(_saleRequestId)
    .subscribe(saleReqProds => {
      this._saleRequestProductsNew = saleReqProds;
    },
    error => {
      console.log('Erro ao carregar produtos dos pedidos');
    },
    () => {
      this.loadSaleRequestProductsInProduction();
      this.loadSaleRequestsProductsForDelivered();
    });
  }

  loadSaleRequestProductsInProduction() {
    this.saleRequestsProduction = [];
    this._saleRequestProductsNew.forEach(element => {
      if (element.ProductionStatus === 0) {
        this.saleRequestsProduction.push(element);
      }
    });
  }

  loadSaleRequestsProductsForDelivered() {
    this.saleRequestsDelivered = [];
    this._saleRequestProductsNew.forEach(element => {
      if (element.ProductionStatus === 2) {
        this.saleRequestsDelivered.push(element);
      }
    });
  }

  onclickMoreInfo(value) {
    this.isShowDelivered = !this.isShowDelivered;
  }

  onclickUpdateStatus(value) {
    this.produtoPedidosService.updateSaleRequestProducts(value)
    .subscribe(data => {
      console.log('atualizado com sucesso');
    },
    error => {
      console.log('Erro ao atualizar o status do produto');
    },
    () => {
      this.loadSaleRequestsNew(this.pedido.SaleRequestId);
      this.onClickLoadSaleRequest.emit();
    });
  }

  ngOnInit() {
    this.loadSaleRequestsNew(this.pedido.SaleRequestId);
  }

  ngOnChanges() {
    this.loadSaleRequestsNew(this.pedido.SaleRequestId);
    console.log('change news.');
  }

}
