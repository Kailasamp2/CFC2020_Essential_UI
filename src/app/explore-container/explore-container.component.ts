import { Component, OnInit, Input } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';
import { ThrowStmt } from '@angular/compiler';
@Component({
  selector: 'app-explore-container',
  templateUrl: './explore-container.component.html',
  styleUrls: ['./explore-container.component.scss'],
})
export class ExploreContainerComponent implements OnInit {
  @Input() name: string;
  myInput = "Chennai";
  myInputvalue:any;
  // @Input() hello: string;
  @Output() notify = new EventEmitter();
  constructor() { }

  ngOnInit() {}
  onInput(ev){
    this.myInputvalue = ev.detail.value
    // console.log(ev.detail);

  }
  emitHandle(){
    this.myInput = this.myInputvalue;
    this.notify.emit(this.myInput)

  }

}
