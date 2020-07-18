import {Component, OnInit} from '@angular/core';
import {routerTransition} from '../../router.animations';
import {Web3Service} from "../../web3.service";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {NgxUiLoaderService} from "ngx-ui-loader";
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss'],
  animations: [routerTransition()]
})
export class AdminComponent implements OnInit {
  formGroup: FormGroup;
  loginUser = JSON.parse(localStorage.getItem('user'));
  public plans: Array<any> = [];
  public subscribers: Array<any> = [];

  winner: any;
  payMonthlyForm: FormGroup;

  constructor(private web3: Web3Service, private ngxui: NgxUiLoaderService, private modalService: NgbModal) {}

  async ngOnInit() {
    this.ngxui.start();
    this.formGroup = new FormGroup({
      planId: new FormControl('', [Validators.required]),
      amount: new FormControl('', [Validators.required]),
      duration: new FormControl('', [Validators.required]),
    });
    this.payMonthlyForm = new FormGroup({
      planId : new FormControl('', [Validators.required])
    })
    await this.updateData();
    console.log("plans", this.plans);
    this.ngxui.stop();
  }


  async updateData() {
    this.ngxui.start();
    this.plans  = await this.web3.getPlansList();
    this.subscribers = await this.web3.getSubscribersList();
    this.ngxui.stop();
  }

  async addPlan() {
    this.ngxui.start();
    const plan = this.formGroup.value;
    const params = [plan.amount, plan.planId, plan.duration];
    const reciept = await this.web3.invoke('addplan', params);
    console.log(reciept);
    this.updateData();

  }

  onReset() {
    this.formGroup.reset();
  }


  async getWinner() {
    this.ngxui.start();
    const value = this.payMonthlyForm.value;
    const winner = await this.web3.query('GetWinner', [value.planId]);
    if(winner === '0') {
      this.winner = undefined
    } else {
      this.winner = await this.web3.getSubscriber([winner])
    }
    this.payMonthlyForm.reset();
    this.ngxui.stop();
  }

  async reward() {
    this.ngxui.start();
    const value = this.payMonthlyForm.value;
    const receipt = await this.web3.invoke('reward', [value.planId]);
    this.payMonthlyForm.reset();
    this.updateData();
  }
  async rewardAll() {
    this.ngxui.start();
    const value = this.payMonthlyForm.value;
    const receipt = await this.web3.invoke('RewardAllSubscribers', [value.planId]);
    this.payMonthlyForm.reset();
    console.log(receipt)
    this.updateData();
  }
}
