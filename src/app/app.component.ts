import { Component, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { ModelPedidoProdutos } from './Model/ModelPedidoProdutos';
import { PedidosService } from './pedido-produtos/pedidos.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnChanges{
  
  title = 'app';
  // pedidosProdutos: ModelPedidoProdutos[] = [];
  // pedidosProdutosIsDelivered: ModelPedidoProdutos[] = [];

  constructor(){ }


  // CarregarPedidos(){
  //   this.produtoPedidosService.getPedidoProdutosAll()
  //    .subscribe(pedidoProd => {       
  //     this.pedidosProdutos = pedidoProd.filter(s => s.IsDelivered == false);         
  //   })   
  // }

  // CarregarPedidosEntregues(){
  //   this.produtoPedidosService.getPedidoProdutosAll()
  //    .subscribe(pedidoProdDelivered => {       
  //     this.pedidosProdutosIsDelivered = pedidoProdDelivered.filter(s => s.IsDelivered == true);         
  //   })   
  // }

  // teste(value){
  //   console.log("Clicado no botao de entrega " + "id do pedido: " + value);
  //   this.produtoPedidosService.atualizaPedidoProduto(value);
  //   this.CarregarPedidos();
  //   console.log("Depois de Metodo CarregarPedidos");
  //   this.CarregarPedidosEntregues();
    
  // }

  load() {
    location.reload()
  }

  ngOnInit(){    
    // this.CarregarPedidos();
    // this.CarregarPedidosEntregues();
    // console.log(this.pedidosProdutos)
  }

  ngOnChanges(changes: SimpleChanges){
  //   if(changes.pedidosProdutos){
  //     console.log("Change!!!");
  //   }
  //   this.CarregarPedidos();
  //   this.CarregarPedidosEntregues();
   }

}
