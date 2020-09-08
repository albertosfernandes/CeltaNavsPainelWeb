import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RoutingModule } from './routing.module';
import { AppComponent } from './app.component';

import { PedidoProdutosModule } from './pedido-produtos/pedido-produtos.module';
import { SettingsModule } from './settings/settings.module';

@NgModule({
  declarations: [
    AppComponent    
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RoutingModule,
    PedidoProdutosModule,
    SettingsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
