import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SignupComponent } from './signup.component';
import {RouterModule, Routes} from '@angular/router';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";
import {NgBootstrapFormValidationModule} from "ng-bootstrap-form-validation";

const routes: Routes = [
    {
        path: '', component: SignupComponent
    }
];

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
        FormsModule,
        NgbModule.forRoot(),
        ReactiveFormsModule,
        NgBootstrapFormValidationModule.forRoot()
    ],
  declarations: [SignupComponent]
})
export class SignupModule { }
