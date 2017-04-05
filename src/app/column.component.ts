import { Component, OnInit } from '@angular/core';

import { AddBlockComponent } from './add-block.component';
import { BlockService } from './block.service';
import { Block } from './block';
import { BlockComponent } from './block.component';

@Component({
	selector: 'app-column',
	template: `
	<p>AppColumn</p>
	    <app-block></app-block>
    <add-block></add-block>`,

	providers: [BlockService]
})

export class ColumnComponent implements OnInit {
	column: any[] = [];

	constructor(private blocks: BlockService){}
	
	ngOnInit(){
		this.column = this.blocks.getBlock();
	}
}