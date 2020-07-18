import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthGuard } from './shared';
import { NgxUiLoaderModule } from 'ngx-ui-loader';
import {NgBootstrapFormValidationModule} from "ng-bootstrap-form-validation";


@NgModule({
    imports: [
        CommonModule,
        BrowserModule,
        BrowserAnimationsModule,
        HttpClientModule,
        AppRoutingModule,
        NgxUiLoaderModule.forRoot({
          fgsColor: '#DE6262',
          fgsType: 'square-jelly-box'
        }),
        NgBootstrapFormValidationModule.forRoot(),
        NgBootstrapFormValidationModule

    ],
    declarations: [AppComponent],
    providers: [AuthGuard],
    bootstrap: [AppComponent]
})
export class AppModule {}
