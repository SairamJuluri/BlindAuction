import {Component, OnInit} from '@angular/core';
import {routerTransition} from '../router.animations';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Web3Service} from "../web3.service";
import {NgxUiLoaderService} from "ngx-ui-loader";
import {Router} from "@angular/router";

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
  animations: [routerTransition()]
})
export class SignupComponent implements OnInit {
  loginTypes = [
    'admin',
    'customer',
  ];
  plans = [];
  subscribers = [];
  subscriberIds = [];
  user: any = {};
  alerts = [];
  formGroup: FormGroup;

  constructor(private web3Api: Web3Service,
              private ngxService: NgxUiLoaderService,
              private route: Router) {
  }

  ngOnInit() {

    this.formGroup = new FormGroup({
      groupId: new FormControl('', [Validators.required]),
      subscriberId: new FormControl('', [Validators.required]),
      subscriberName: new FormControl('', [Validators.required]),
      walletAmount: new FormControl('', [Validators.required])
    });
    this.updateData();
  }

  async updateData() {
    this.ngxService.start();
    this.plans = await this.web3Api.getPlansList();
    this.subscribers = await this.web3Api.getSubscribersList();
    this.subscriberIds = this.subscribers.map(subscriber => {
      return subscriber.subscriberId
    })
    this.ngxService.stop();
  }

  async singUp() {
    this.ngxService.start();
    const subscriber = this.formGroup.value;
    const params = [subscriber.groupId, subscriber.walletAmount, subscriber.subscriberId, subscriber.subscriberName]
    const receipt = await this.web3Api.invoke('SubscriberForChit', params);
    this.ngxService.stop();
    await this.route.navigate(['/login'])
  }

  public closeAlert(alert: any) {
    const index: number = this.alerts.indexOf(alert);
    this.alerts.splice(index, 1);
  }
}
