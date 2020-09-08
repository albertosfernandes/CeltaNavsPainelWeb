import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ModelSettings } from '../Model/ModelSettings';
import { ModelEnterprise } from '../Model/model-enterprise';
import { ModelPdv } from '../Model/model-pdv';

const API = 'http://localhost:10965';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {

  constructor(private http: HttpClient) { }

  getSettings(enterpriseId: number, pdvId: number){    
    return this.http
    .get<ModelSettings>(API+'/api/apiNavsSetting/Get?_enterpriseId='+enterpriseId+'&_pdv='+pdvId);
  }

  getAllEnterprises(){
    return this.http
    .get<ModelEnterprise[]>(API+'/api/apinavsSetting/getAllEnterprises');
  }

  getAllPdvs(_enterpriseid: number){
    if(_enterpriseid == null){
      _enterpriseid = 0;
    }
    return this.http
    .get<ModelPdv[]>(API+'/api/apinavsSetting/getAllPdvs?_enterpriseid='+_enterpriseid);
  }

  setSetting(_setting: ModelSettings){    
    return this.http
    .put<ModelSettings>(API+'/api/apinavsSetting/UpdateSetting/',_setting);
  }
}
