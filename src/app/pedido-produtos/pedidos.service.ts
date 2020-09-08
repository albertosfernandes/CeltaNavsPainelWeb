import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

import { ModelPedidoProdutos } from '../Model/ModelPedidoProdutos';
import { ModelSaleRequest } from './../Model/model-sale-request';
import { ModelSaleRequestProduct } from '../Model/model-sale-request-product';

const API = 'http://localhost:10965';

@Injectable({
  providedIn: 'root'
})
export class PedidosService {


  getSaleRequestProducts() {
    return this.http
    .get<ModelSaleRequestProduct[]>(API + '/api/APISaleRequestProduct/GetAll?_enterpriseId=2');
  }

  getSaleRequestProductsForDelivery() {
    return this.http
    .get<ModelSaleRequestProduct[]>(API + '/api/APISaleRequestProduct/GetAll?_enterpriseId=2&_isConsiderDelivery=false');
  }

  getSaleRequestProductsDelivered() {
    return this.http
    .get<ModelSaleRequestProduct[]>(API + '/api/APISaleRequestProduct/GetAll?_enterpriseId=2&_isConsiderDelivery=true');
  }

  getPedidoProdutosAll() {
    return this.http
    .get<ModelPedidoProdutos[]>(API + '/api/apiSaleRequest/GetAll?_enterpriseId=2');
  }

  getSaleRequestsAll() {
    return this.http
    .get<ModelSaleRequest[]>(API + '/api/apiSaleRequest/GetAll?_enterpriseId=2');
  }

  updateSaleRequestProducts(_saleRequestProductId: string) {
    return this.http
    .put<string>(API + '/api/APISaleRequestProduct/Update?_saleRequestProductId=' + _saleRequestProductId, '');
  }

  atualizaPedidoProduto(_pedidoProd) {
    return this.http.put<ModelPedidoProdutos>(API + '/api/apiSaleRequest/UpdateSaleRequestDelivered/', _pedidoProd)
    .subscribe(data => {
    },
    error  => {
      console.log('error', error);
      }
      );
  }

  changeProductionStatus(_saleReqProdId, statuscode) {
    // tslint:disable-next-line: max-line-length
    console.log('/api/APISaleRequestProduct/ChangeProductionStatus?_saleRequestProductId' + _saleReqProdId + '&productionstatus=' + statuscode);
    return this.http
    // tslint:disable-next-line: max-line-length
    .get(API + '/api/APISaleRequestProduct/ChangeProductionStatus?_saleRequestProductId=' + _saleReqProdId + '&productionstatus=' + statuscode);
  }

  constructor(private http: HttpClient) { }
}
