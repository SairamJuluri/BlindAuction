import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {routerTransition} from '../router.animations';
import {NgForm} from "@angular/forms";
import {Web3Service} from "../web3.service";
import {NgxUiLoaderService} from "ngx-ui-loader";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  animations: [routerTransition()]
})
export class LoginComponent implements OnInit {
  user: any = {};
  subscribers = [];
  subscriberIds = [];

  constructor(public router: Router,
              private web3Api: Web3Service,
              private ngxService: NgxUiLoaderService,
  ) {
  }

  loginTypes = [
    'admin',
    'customer',
  ];
  alerts = [];


  ngOnInit() {
    this.updateData();
    // this.existed.farmers = await this.web3Api.getAllFarmer();
    // this.existed.retailers = await this.web3Api.getAllRetailer();
    // this.existed.cdus = await this.web3Api.getAllCentralDistributionUinit();
    // this.existed.warehouses = await this.web3Api.getAllWarehouse();

  }

  async updateData() {
    this.subscribers = await this.web3Api.getSubscribersList();
    console.log(this.subscribers);
    this.subscriberIds = this.subscribers.map(subscriber => {
      return subscriber.subscriberId
    })
  }


  async onLoggedin(f: NgForm) {
    const user = f.value;
    // localStorage.setItem('isLoggedin', 'true');
    console.log(f.value, user.loginType === 'admin', user.password === 'admin');
    if (user.loginType === 'admin' && user.password === 'admin') {
      localStorage.setItem('user', JSON.stringify(user));
      this.router.navigate(['admin']);
    } else if (user.loginType === 'admin' && user.password !== 'admin') {
        let alert = {id: this.alerts.length+1, type:'danger', message: "incorrect admin password"}
        this.alerts.push(alert);
        setTimeout(() => {this.closeAlert(alert)}, 2000);
    }
      else {
        if(this.subscriberIds.includes(user.userId)) {
            let loginUser = this.subscribers.filter(subscriber => subscriber.subscriberId === user.userId)[0];
            localStorage.setItem('user', JSON.stringify(loginUser));
            this.router.navigate(['/subscriber'])
        } else {
          let alert = {id: this.alerts.length+1, type:'danger', message: "Not Valid User"}
          this.alerts.push(alert);
          setTimeout(() => {this.closeAlert(alert)}, 2000);
        }
    }
    // if(!this.existed[`${f.value.loginType}s`].includes(f.value.userId)){
    //   let alert = {id: this.alerts.length+1, type:'danger', message: "Not Valid User"}
    //   this.alerts.push(alert);
    //   setTimeout(() => {this.closeAlert(alert)}, 2000);
    // } else {
    //   let user;
    //   this.ngxService.start();
    //   switch (f.value.loginType) {
    //     case 'admin': {
    //       user = await this.web3Api.getFarmerDetails(f.value.userId);
    //       break;
    //     }
    //     case 'cdu': {
    //       user = await this.web3Api.getCentralDistributionUinitDetails(f.value.userId);
    //       break;
    //     }
    //     case 'subscriber': {
    //       user = await this.web3Api.getRetailerDetails(f.value.userId);
    //       break;
    //     }
    //     case 'warehouse': {
    //       user = await this.web3Api.getWarehouseDetails(f.value.userId);
    //       break;
    //     }
    //   }
    //   user = {userId: user['0'], userName: user['1'], location: user['2']}
    //   user.loginType = f.value.loginType;
    //   localStorage.setItem('user',JSON.stringify(user));
    //   console.log(user);
    //   this.ngxService.stop();
    //   this.router.navigate([`/${user.loginType}s`]);

    // }

  }

  public closeAlert(alert: any) {
    const index: number = this.alerts.indexOf(alert);
    this.alerts.splice(index, 1);
  }
}
