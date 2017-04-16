import { Component, OnInit } from '@angular/core';

import { Block } from './block';
import { BlockService } from './block.service';
import { ColumnComponent } from './column.component';
import { AddBlockComponent } from './add-block.component';

@Component({
  selector: 'my-app',
  template: `
	<add-block (saved)="save($event)"></add-block>
	<ul *ngFor = "let column of columns">
		<app-column *ngIf="hidden"></app-column>
	</ul>`
})

export class AppComponent implements OnInit {
	
	private columns: any[] = [];
	private hidden: boolean;
	
	constructor(private blocks: BlockService){}

	save(value: any){
		this.blocks.addColumn(value);
		this.hidden = true;
	}

	ngOnInit(){
		this.hidden = false;
		this.columns = this.blocks.getBlock(-1);
	}
}