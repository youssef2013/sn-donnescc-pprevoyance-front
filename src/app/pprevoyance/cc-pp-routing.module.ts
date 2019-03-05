import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ListCCPPrevoyance }    from './list-cc-pp.component';
import { DetailCCPPComponent }  from './detail-cc-pp.component';

// les routes du module PPrévoyance
const ccppRoutes: Routes = [
	{ path: 'cc-pprevoyance', component: ListCCPPrevoyance },
	{ path: 'cc-pprevoyance/:id', component: DetailCCPPComponent }
];

@NgModule({
	imports: [
		RouterModule.forChild(ccppRoutes)
	],
	exports: [
		RouterModule
	]
})
export class CCPPRoutingModule { }
