import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { SettingsComponent } from './settings/settings.component';
import { PedidoProdutosComponent } from './pedido-produtos/pedido-produtos.component';

const navsRoutes: Routes = [
  { path: 'salerequest', component: PedidoProdutosComponent },
  { path: 'settings', component: SettingsComponent }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(navsRoutes)
  ],
  exports: [RouterModule],
  declarations: []
})
export class RoutingModule { }
