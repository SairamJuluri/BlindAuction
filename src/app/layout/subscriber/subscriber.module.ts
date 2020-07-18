import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NgbAlertModule, NgbModule, NgbTabsetModule} from '@ng-bootstrap/ng-bootstrap';

import {StatModule} from '../../shared';
import {SubscriberRoutingModule} from './subscriber-routing.module';
import {SubscriberComponent} from './subscriber.component';
import {ReactiveFormsModule} from "@angular/forms";
import {NgBootstrapFormValidationModule} from "ng-bootstrap-form-validation";


@NgModule({
  imports: [
    CommonModule,
    NgbAlertModule.forRoot(),
    SubscriberRoutingModule,
    StatModule,
    NgbModule.forRoot(),
    NgbTabsetModule.forRoot(),
    ReactiveFormsModule,
    NgBootstrapFormValidationModule.forRoot()
  ],
  declarations: [
    SubscriberComponent
  ]
})
export class SubscriberModule {
}
