import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';

import { ProspectionPrevoyanceCC } from './cc-prospection-prevoyance';
import { CCPPService } from './cc-pp.service';

@Component({
	selector: 'detail-cc-pprevoyance',
	templateUrl: './detail-cc-pp.component.html'
})
export class DetailCCPPComponent implements OnInit {

	ppcc: ProspectionPrevoyanceCC = null;

	constructor(
		private route: ActivatedRoute,
		private router: Router,
		private ccppService: CCPPService) { }

	ngOnInit(): void {
		let id = +this.route.snapshot.paramMap.get('id');
		this.ccppService.getPPCCById(id).subscribe((res)=>{
				this.ppcc = res;
		});
	}

		goBack(): void {
			this.router.navigate(['/cc-pprevoyance']);
		}

}
