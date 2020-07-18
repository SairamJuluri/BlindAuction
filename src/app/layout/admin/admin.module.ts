import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {NgbAlertModule, NgbModule, NgbTabsetModule} from '@ng-bootstrap/ng-bootstrap';

import { StatModule } from '../../shared';
import {AdminRoutingModule} from './admin-routing.module';
import {AdminComponent} from './admin.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { NgBootstrapFormValidationModule } from 'ng-bootstrap-form-validation';
@NgModule({
  imports: [
    CommonModule,
    NgbModule.forRoot(),
    NgbAlertModule.forRoot(),
    NgbTabsetModule.forRoot(),
    AdminRoutingModule,
    StatModule,
    NgbTabsetModule,
    NgBootstrapFormValidationModule.forRoot(),
    NgBootstrapFormValidationModule,
    FormsModule,
    ReactiveFormsModule
  ],
    declarations: [
        AdminComponent
    ]
})
export class AdminModule {}
