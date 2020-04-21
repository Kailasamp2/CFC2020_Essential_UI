import { Component } from '@angular/core';
import { Platform } from '@ionic/angular';
import {medlists} from '../list'
import {ApiService} from '../api.service';
import { Router ,ActivatedRoute} from '@angular/router';


@Component({
  selector: 'app-tab4',
  templateUrl: 'tab4.page.html',
  styleUrls: ['tab4.page.scss']
})
export class Tab3Page {
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
    this.apiService.getList(val, 'Medicines').subscribe(response => {
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
     this.router.navigate(['/tabs/tab4/details'],{state:{data:val,selected:'Medicines'}})
   }

}
