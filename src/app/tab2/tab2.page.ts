import { Component } from '@angular/core';
import { Platform } from '@ionic/angular';
import {friutlist} from '../list'
import {ApiService} from '../api.service';
import { Router ,ActivatedRoute} from '@angular/router';


@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  lists :any;
  noDatafound: boolean = false;

  constructor( public platform : Platform,public apiService: ApiService,private router: Router) {}
  ionViewWillEnter() {
    this.getlist('Chennai');
  }
  onNotify(data){
    this.getlist(data);
 
  }
  getlist(val){
    this.apiService.getList(val, 'Fruits').subscribe(response => {
      if(response.length !== 0 ){
        this.noDatafound= false;
        this.lists = response;
      }
      else{
        this.noDatafound= true;
      }
    })
  }
   navigate(val){
     this.router.navigate(['/tabs/tab2/details'],{state:{data:val,selected:'Fruits'}})
   }

}
