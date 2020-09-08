import { Component, OnInit, Input, OnChanges, Output, EventEmitter } from '@angular/core';

import { SettingsService } from '../settings.service';
import { ModelPdv } from './../../Model/model-pdv';

@Component({
  selector: 'app-pdvs',
  templateUrl: './pdvs.component.html',
  styleUrls: ['./pdvs.component.css']
})
export class PdvsComponent implements OnInit, OnChanges {
  
  pdvs: ModelPdv[] = [];  
  activated: string;
  active: string;
  isActive: boolean = false;
  isMouseOver: boolean = false;
  teste: string;
  
  @Output() pdvFilter = new EventEmitter<string>();  
  @Input() enterpriseId: number;  


  constructor(private settingsService: SettingsService) { }

  loadPdvs(){
    this.settingsService.getAllPdvs(this.enterpriseId)
    .subscribe(values => {
      this.pdvs = values;      
    })   
  }

  toactivatePdv(_value: string) {
    this.activated = _value;
    this.isActive = !this.isActive;
    console.log('Clique componente pdvs: '+_value);
    this.pdvFilter.emit(_value);
    this.teste = _value;
  }
 
  ngOnInit() {
    this.loadPdvs();
  }

  ngOnChanges() {
    this.loadPdvs();
  }
 
}
