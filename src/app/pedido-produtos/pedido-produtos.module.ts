import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DeliveredComponent } from './delivered/delivered.component';
import { NewsComponent } from './news/news.component';
import { PedidoProdutosComponent } from './pedido-produtos.component';
import { ProductionComponent } from './production/production.component';
import { ProductDeliveredComponent } from './news/product-delivered/product-delivered.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    PedidoProdutosComponent,
    NewsComponent,
    DeliveredComponent,
    ProductionComponent,
    ProductDeliveredComponent
  ]
})
export class PedidoProdutosModule { }
