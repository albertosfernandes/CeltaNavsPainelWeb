import { Component, OnInit, Output, EventEmitter, OnChanges } from '@angular/core';

import { ModelEnterprise } from 'src/app/Model/model-enterprise';
import { SettingsService } from '../settings.service';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-enterprises',
  templateUrl: './enterprises.component.html',
  styleUrls: ['./enterprises.component.css']
})
export class EnterprisesComponent implements OnInit, OnChanges {  

  @Output() onClickFilter = new EventEmitter<string>();
  emissor: Subject<string> = new Subject<string>();

  enterprises: ModelEnterprise[] = [];
  enterpriseName: string;
  activated: string;
  active: string;
  isActive: boolean = false;
  isMouseOver: boolean = false;

  constructor(private settingsService: SettingsService) { }

  loadEnterprises(){
    this.settingsService.getAllEnterprises()
    .subscribe(values => {
      this.enterprises = values      
    })
    console.log("load enterprises" + this.enterprises.values);
  }

  toactivate(_value: string) {
    this.activated = _value;
    this.isActive = !this.isActive;
    console.log('Clique componente menu filho: '+_value);
    this.findEnterpriseName(this.activated);
    this.onClickFilter.emit(_value);
  }

  findEnterpriseName(_enterpriseId){
    this.enterprises.forEach(element => {
      if(element.EnterpriseId == parseInt(this.activated))
      {
        this.enterpriseName = element.FantasyName;
      }
    });
  }

  onMouseOverOut(_value: string) {
    this.isMouseOver = !this.isMouseOver;
    this.active = _value;
  }

  ngOnInit() {
    this.loadEnterprises();
    this.emissor.subscribe(_value => console.log('Subscribe: '+_value)); 
  }

  ngOnChanges() {
    this.loadEnterprises();
  }

}
