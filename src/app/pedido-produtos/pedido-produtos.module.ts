import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DeliveredComponent } from './delivered/delivered.component';
import { NewsComponent } from './news/news.component';
import { PedidoProdutosComponent } from './pedido-produtos.component';
import { ProductionComponent } from './production/production.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    PedidoProdutosComponent,
    NewsComponent,
    DeliveredComponent,
    ProductionComponent
  ]
})
export class PedidoProdutosModule { }
