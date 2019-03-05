import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

import { ProspectionPrevoyanceCC } from './cc-prospection-prevoyance';
import { CCPPService } from './cc-pp.service';
//import { PPCC } from './mock-payecc';


@Component({
  selector: 'list-cc-pprevoyance',
  templateUrl: './list-cc-pp.component.html',
})
export class ListCCPPrevoyance {

  constructor(private router: Router, private ccppService: CCPPService) {}

  private pprevoyances: ProspectionPrevoyanceCC[];

  ngOnInit(){
    this.ccppService.getAllPPCC().subscribe((res)=>{
        this.pprevoyances = res;
    });
  }

  selectPPCC(ppcc: ProspectionPrevoyanceCC){
    let link = ['/cc-pprevoyance', ppcc.idCC];
    this.router.navigate(link);

}


}
