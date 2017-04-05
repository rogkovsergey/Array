import { Component, OnInit } from '@angular/core';

import { BlockService } from './block.service';
import { ColumnComponent } from './column.component';
import { AddBlockComponent } from './add-block.component';

@Component({
  selector: 'my-app',
  template: `
	  
	  <add-block (saved)="save($event)"></add-block>
	  <app-column></app-column>
  `,
  providers: [BlockService]
})

export class AppComponent implements OnInit {

	constructor(private blocks: BlockService){}

	save(value: any){
		this.blocks.addBlock(value);
	}
	
	ngOnInit(){

	}
}