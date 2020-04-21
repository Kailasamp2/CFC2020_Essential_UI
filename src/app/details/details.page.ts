import { Component } from '@angular/core';
import { Platform } from '@ionic/angular';
import {items} from '../list'
import {ApiService} from '../api.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-details',
  templateUrl: 'details.page.html',
  styleUrls: ['details.page.scss']
})
export class DetailsPage {
  //lists = items.map(obj=> ({ ...obj, qty: 0 }));
  lists = items;
  count:any = 0;
  noDatafound: boolean = false;
  detailData : any;
  storeName : string='';
  storeAddress : string='';
  storeId : any=0;
  needType : string='';
  
  constructor(public platform : Platform,public apiService: ApiService,private router: Router) {
      this.detailData = this.router.getCurrentNavigation().extras.state;
      console.log(this.detailData);
	  if(this.detailData && this.detailData.data){
		  //storeName=this.detailData.data;
		  console.log(this.detailData.data);
		  this.storeName=this.detailData.data.storeName;
		  this.needType=this.detailData.selected;
		  this.storeId=this.detailData.data.storeId;
		  this.storeAddress=this.detailData.data.address;
		this.getItemlist(this.storeId, this.needType);		  
	  }else{
		  
	  }
  }
    

  addtocart(item){
    this.count  = this.count +1;
	 //item.qty = item.qty +1;
  }

 removeocart(item){
    //if(this.count == 0 || item.qty == 0) return;
    //item.qty = item.qty -1
	if(this.count == 0 ) return;
    this.count  = this.count -1;
  }
  
  random(){
    return Math.floor(Math.random() * Math.floor(1000))
  }
    getItemlist(val, needType){
    this.apiService.getItemList(val, needType).subscribe(response => {
      if(response.length !== 0 ){
        this.noDatafound= false;
        this.lists = response;
      }
      else{
        this.noDatafound= true;
      }
    })
  }

}
