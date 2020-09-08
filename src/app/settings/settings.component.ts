import { Component, OnInit } from '@angular/core';
import { ModelSettings } from './../Model/ModelSettings';
import { SettingsService } from './settings.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {

  // navsSetting: ModelSettings[] = [];
  enterpriseId: number;
  pdvId: number;
  _isValid: string;

  constructor(private settingsService: SettingsService) { }

  receberEvento(_value){
    this.enterpriseId = _value;
    console.log("componente pai Settings recebeu de Settings-Enterprise: "+ _value);
  }

  receberPdvId(_value){
    this.pdvId = _value;
    console.log("componente pai Settings recebeu de Settings-Pdv: "+ this.pdvId);
  }


  receberEventoPdvs(isvalid){
    console.log("receberEventoPdvs valor: " + isvalid);
  }

  reload() {
    location.reload()
  }

  ngOnInit() {
  }

}
