import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';

import { ModelSettings } from 'src/app/Model/ModelSettings';
import { SettingsService } from '../settings.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit, OnChanges {

  navsSetting: ModelSettings;
  @Input() enterpriseIdEdit: number;
  @Input() pdvIdEdit: number;
  _pdvId: number;
  meuPdv: number;
  settingsForm: FormGroup;
  valueForm: ModelSettings;

  constructor(private settingsService: SettingsService, private formBuilder: FormBuilder) { }

  loadSetting() {
    this.settingsService.getSettings(this.enterpriseIdEdit, this.pdvIdEdit)
    .subscribe(setting => {
      this.navsSetting = setting;
      this.loadForm(this.navsSetting);
    });
    console.log('chamou loadSetting');
  }

  loadForm(_navsSetting: ModelSettings){
      this.settingsForm = this.formBuilder.group({
        navsSettingsId: [_navsSetting.NavsSettingsId],
        enterpriseid: [_navsSetting.EnterpriseId],
        pdvId: [_navsSetting.PdvId],
        PosSerial: [_navsSetting.PosSerial],
        sitefAddressIp: [_navsSetting.SitefAddressIp],
        sitefPort: [_navsSetting.SitefPort],
        sitefStoreCode: [_navsSetting.SitefStoreCode],
        satAddressSharePdv: [_navsSetting.SatAddressSharePdv],
        satPortSharePdv: [_navsSetting.SatPortSharePdv],
       //  navsAddress: [''],
       //  navsPort: [''],
        concentratorAddress: [_navsSetting.ConcentratorAddress],
        concentratorPort: [_navsSetting.ConcentratorPort],
        numberOfCharacteresPLU: [_navsSetting.NumberOfCharacteresPLU],
        saveXMLSat: [_navsSetting.SaveXMLSat]
     });
     console.log('valor se settings em loadForm ' + _navsSetting);
  }

  onSubmit() {
    this.valueForm = this.settingsForm.getRawValue();
    // const settingData = new FormData();
    // settingData.append('enterprise', values.EnterpriseId);
    // settingData.append('pdv', values.PdvId);
    // settingData.append('serialPos', values.PosSerial);
    console.log(this.valueForm);
     this.settingsService.setSetting(this.valueForm)
    .subscribe(
      () => console.log('sucess...'),
      err => console.log('error: ' + err)
    );
  }

  receberEventoDePdv(_pdvIdValue) {
    this._pdvId = _pdvIdValue;
    console.log('component Edit Recebeu Id de componente PDV ' + this._pdvId);
  }

  ngOnInit() {
    this.loadSetting();
  }

  ngOnChanges() {
    this.loadSetting();
    console.log('ngOnChanges componente Edit Enterprise ' + this.enterpriseIdEdit);
    console.log('ngOnChanges componente Edit pdvIdEdit ' + this.pdvIdEdit);
  }

}
