import { PedidosService } from 'src/app/pedido-produtos/pedidos.service';
import { ModelSaleRequestProduct } from './../../../Model/model-sale-request-product';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-product-delivered',
  templateUrl: './product-delivered.component.html',
  styleUrls: ['./product-delivered.component.css']
})
export class ProductDeliveredComponent implements OnInit {

  saleRequestProducts: ModelSaleRequestProduct[];
  saleRequestProductsDelivered: ModelSaleRequestProduct[] = [];
  @Input() pedidoId: number;
  @Output() clickForLoadSaleRequest = new EventEmitter<string>();
  constructor(private saleRequestService: PedidosService) { }

  // loadSaleRequestProductsDelivered(_saleRequestProducts) {
  //   this.saleRequestProductsDelivered = [];
  //   this.saleRequestProducts.forEach(element => {
  //     if (element.IsDelivered === true) {
  //       this.saleRequestProductsDelivered.push(element);
  //     }
  //   });
  // }  getSaleRequestProductsIsDelivered

  emit(salereqprodId) {
    this.clickForLoadSaleRequest.emit(salereqprodId);
    console.log('valor da emit' + salereqprodId);
  }

  loadSaleRequestProductsDelivered() {
    this.saleRequestService.getSaleRequestProductsIsDelivered(this.pedidoId)
    .subscribe(productDelivered => {
      this.saleRequestProducts = productDelivered;
      console.log(productDelivered);
    },
    error => {
      console.log('Erro ao carregar produtos entregues');
    },
    () => {

    });
  }


  ngOnInit() {
    console.log('iniciou delivered' + this.pedidoId);
    this.loadSaleRequestProductsDelivered();
  }

}
