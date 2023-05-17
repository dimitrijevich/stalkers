import { Component } from '@angular/core';
declare var CPABuildLock: any;


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

  unlock(){
    console.log("ide")
    CPABuildLock();
  }
  


}
