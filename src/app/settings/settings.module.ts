import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SettingsComponent } from './settings.component';
import { EnterprisesComponent } from './enterprises/enterprises.component';
import { PdvsComponent } from './pdvs/pdvs.component';
import { EditComponent } from './edit/edit.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [
    SettingsComponent,
    EnterprisesComponent,
    PdvsComponent,
    EditComponent
  ]
})
export class SettingsModule { }
