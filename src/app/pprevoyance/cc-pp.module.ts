import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListCCPPrevoyance } from './list-cc-pp.component';
import { DetailCCPPComponent } from './detail-cc-pp.component';
import { BorderCardDirective } from './border-card.directive';
import { CCPPRoutingModule } from './cc-pp-routing.module';
import { CCPPService } from './cc-pp.service';


@NgModule({
	imports: [
		CommonModule,
    CCPPRoutingModule
	],
	declarations: [
		ListCCPPrevoyance,
		DetailCCPPComponent,
		BorderCardDirective,
	],
	providers: [CCPPService],
})
export class CCPPModule { }
