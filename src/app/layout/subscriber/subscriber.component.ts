import {Component, OnInit} from '@angular/core';
import {routerTransition} from '../../router.animations';
import {Web3Service} from "../../web3.service";
import {NgxUiLoaderService} from "ngx-ui-loader";
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-retailer',
  templateUrl: './subscriber.component.html',
  styleUrls: ['./subscriber.component.scss'],
  animations: [routerTransition()]
})
export class SubscriberComponent implements OnInit {
  loginUser = JSON.parse(localStorage.getItem('user'));
  loginCustomer: any;
  public plans: Array<any> = [];
  public planIds = [];
  public subscribers: Array<any> = [];
  public winner;
  payMonthlyForm: FormGroup;
  bidMonthlyForm: FormGroup;

  constructor(private web3: Web3Service,
              private ngxui: NgxUiLoaderService,
              ) {
  }

  async ngOnInit() {
    this.ngxui.start();
    this.loginCustomer = await this.web3.getSubscriber(this.loginUser.subscriberId);
    this.payMonthlyForm = new FormGroup({
      planId: new FormControl('', [Validators.required])
    })
    this.bidMonthlyForm = new FormGroup({
      planId: new FormControl('', [Validators.required]),
      bidAmount: new FormControl('', [Validators.required])
    })
    this.updateData();
  }

  async updateData() {
    this.plans = await this.web3.getPlansList();
    this.planIds = this.plans.map(plan => {return plan.groupId});
    this.subscribers = await this.web3.getSubscribersList();

  }

  async payMonthly() {
    this.ngxui.start();
    console.log(this.payMonthlyForm.value);
    const params = [this.loginUser.subscriberId, this.payMonthlyForm.value.planId];
    const receipt = await this.web3.invoke('monthplay', params);
    this.payMonthlyForm.reset();
    this.updateData();

  }

  async bidAuction() {
    this.ngxui.start();
    const data = this.bidMonthlyForm.value
    const params = [this.loginUser.subscriberId, data.bidAmount, data.planId];
    const receipt = await this.web3.invoke('Bid', params);
    this.payMonthlyForm.reset();
    this.updateData();
  }

  async getWinner() {
    this.ngxui.start();
    const value = this.payMonthlyForm.value;
    const winner = await this.web3.query('GetWinner', [value.planId]);
    this.winner = await this.web3.getSubscriber([winner]);
    this.payMonthlyForm.reset();
    this.ngxui.stop();
  }

  async checkBalance() {
    console.log("checking balance");
    this.loginCustomer = await this.web3.getSubscriber(this.loginCustomer.subscriberId)
  }
}
