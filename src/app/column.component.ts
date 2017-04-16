import { Component, OnInit, Input } from '@angular/core';

import { Block } from './block';
import { BlockService } from './block.service';
import { BlockComponent } from './block.component';
import { AddBlockComponent } from './add-block.component';

@Component({
	selector: 'app-column',
	template: `<div style='border: solid; border-width: 1px; margin: 5 px'>
	<p>AppColumn {{column_number}}</p>
	<ul>
		<li *ngFor = "let block of column; let i=index">
			<app-block (cutElement)="cut($event)" [block]="block" [index]="i"></app-block>
		</li>
	</ul>
	<add-block (saved)="save($event)"></add-block>
	</div>`
})

export class ColumnComponent implements OnInit{
	@Input() column: any[];
	private column_number: number;

	constructor(private blocks: BlockService){}

	save(value: any){
		this.blocks.addBlock(value, this.column_number);
	}

	cut(index: number){
		this.blocks.cutBlock(this.column_number, index);
		console.log("Inputed index: ", index, " | Column number: ", this.column_number);
	}
	
	ngOnInit(){
		this.column_number = this.blocks.getColumnNumber();
		this.column = this.blocks.getBlock(this.column_number);
	}
}