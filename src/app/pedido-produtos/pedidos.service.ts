import { ModelSaleRequestProduct } from './../Model/model-sale-request-product';
import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

import { ModelPedidoProdutos } from '../Model/ModelPedidoProdutos';
import { ModelSaleRequest } from './../Model/model-sale-request';

const API = 'http://localhost:10965';
// const API = 'http://192.168.100.205:1096';

@Injectable({
  providedIn: 'root'
})
export class PedidosService {

  constructor(private http: HttpClient) { }

  getSaleRequestProducts() {
    return this.http
    .get<ModelSaleRequestProduct[]>(API + '/api/APISaleRequestProduct/GetAll?_enterpriseId=2');
  }

  getSaleRequestProductsNew(_saleRequestProductId: string) {
    return this.http
    .get<ModelSaleRequestProduct[]>(API + '/api/APISaleRequestProduct/Get?_enterpriseId=2&saleRequesId=' + _saleRequestProductId);
  }

  getSaleRequestProductsForDelivery() {
    return this.http
    .get<ModelSaleRequestProduct[]>(API + '/api/APISaleRequestProduct/GetAll?_enterpriseId=2&_isConsiderDelivery=false');
  }

  getSaleRequestProductsDelivered() {
    return this.http
    .get<ModelSaleRequestProduct[]>(API + '/api/APISaleRequestProduct/GetAll?_enterpriseId=2&_isConsiderDelivery=true');
  }

  // getPedidoProdutosAll() {
  //   return this.http
  //   .get<ModelPedidoProdutos[]>(API + '/api/apiSaleRequest/GetAll?_enterpriseId=2');
  // }

  getSaleRequestsAll() {
    return this.http
    .get<ModelSaleRequest[]>(API + '/api/apiSaleRequest/GetAllById?_enterpriseId=2&isUsing=0&isCancel=0&&isDelivered=0&isPrinted=0');
  }

  getSaleRequestsProductionAll(statusCode) {
    return this.http
    .get<ModelSaleRequest[]>(API + '/api/apiSaleRequest/GetProduction?_enterpriseId=2');
  }

  getSaleRequestProductsIsDelivered(saleReqId) {
    return this.http
    .get<ModelSaleRequestProduct[]>(API + '/api/APISaleRequestProduct/GetIsDelivered?_enterpriseId=2&_saleRequestId=' + saleReqId);
  }

  updateSaleRequestProducts(_saleRequestProductId: string) {
    return this.http
    .get(API + '/api/APISaleRequestProduct/Update?_saleRequestProductId=' + _saleRequestProductId + '&isMArk=1');
  }

  updateSaleRequestProductsUnMark(_saleRequestProductId: string) {
    return this.http
    .get(API + '/api/APISaleRequestProduct/Update?_saleRequestProductId=' + _saleRequestProductId + '&isMArk=0');
  }

  updateStatusSaleRequestProductStatus(_saleRequestProductId: string, statusproductionCode: string) {
    return this.http
    // tslint:disable-next-line: max-line-length
    .get(API + '/api/APISaleRequestProduct/UpdateStatus?_saleRequestProductId=' + _saleRequestProductId + '&statusproductioncocde=' + statusproductionCode );
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


}
