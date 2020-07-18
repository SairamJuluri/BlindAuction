import {Injectable} from '@angular/core';
import {AuctionContract} from './constants';
import {environment} from '../environments/environment';
import {NgxUiLoaderService} from 'ngx-ui-loader';

// tslint:disable-next-line:import-spacing
declare let web3;
declare const Web3;

@Injectable({
  providedIn: 'root'
})
export class Web3Service {
  contractAPI;

  constructor(private ngxService: NgxUiLoaderService) {
    console.log(environment.contractId);
    if (typeof web3 !== 'undefined') {
      web3 = new Web3(web3.currentProvider);
      web3.eth.defaultAccount = web3.eth.accounts[0];
    } else {
      web3 = new Web3(new Web3.providers.HttpProvider('http://localhost:8545'));
      web3.eth.defaultAccount = web3.eth.accounts[0];
    }
    this.contractAPI = new web3.eth.Contract(AuctionContract, environment.contractId);
    // console.log('Hello', this.contractAPI.methods['GetAllplan']);
  }

  async query(method: string, params ?: any []) {
    return await this.contractAPI.methods[`${method}`].apply(null, params).call();
  }

  async invoke(method: string, params ?: any []) {
    return await this.contractAPI.methods[`${method}`]
      .apply(null, params)
      .send({from: environment.metamaskId}).then((rec) => {
        console.log(rec);
        this.ngxService.stop();
        return rec;
      });

  }

  async getSubscriber(subscriberId) {
    const subscriber = await this.query('GetSubscribDetails', [subscriberId]);
    return {
      groupId: subscriber['0'],
      subscriberId: subscriber['1'],
      name: subscriber['2'],
      balance: subscriber['3'],
      bidAmount: subscriber['4']
    };
  }

  async getSubscribersList() {
    const subscriberIds = await this.query('GetAllSubscrib');
    return await Promise.all(subscriberIds.map(async subscriberId => {
      const subscriber = await this.query('GetSubscribDetails', [subscriberId]);
      return {
        groupId: subscriber['0'],
        subscriberId: subscriber['1'],
        name: subscriber['2'],
        balance: subscriber['3'],
        bidAmount: subscriber['4']
      };
    }));
  };

  async getPlansList() {
    const planIds = await this.query('GetAllplan');
    return await Promise.all(planIds.map(async planId => {
      const plan = await this.query('GetPlainDetails', [planId]);
      return {
        groupId: plan['0'],
        fixedAmount: plan['1'],
        duration: plan['2'],
        generatedAmount: plan['3'],
        subscriberAmount: plan['4']
      };
    }));
  }

}
