import { Component, OnInit, Input } from '@angular/core';
import { ModelSaleRequestProduct } from 'src/app/Model/model-sale-request-product';

@Component({
  selector: 'app-production',
  templateUrl: './production.component.html',
  styleUrls: ['./production.component.css']
})
export class ProductionComponent implements OnInit {


  @Input() _saleRequestProducts: ModelSaleRequestProduct[] = [];

  constructor() { }

  ngOnInit() {
  }

}
