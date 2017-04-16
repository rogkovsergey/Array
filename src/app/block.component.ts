import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';

import { Block } from './block';
import { BlockService } from './block.service';

@Component({
	selector: 'app-block',
	template: `
	{{block.value}}
	<button (click)="emitIndex()">-</button>`
})

export class BlockComponent implements OnInit{
	@Input() block: any;
	@Input() index: number;

	@Output() cutElement = new EventEmitter;

	emitIndex(){
		this.cutElement.emit(this.index);
		console.log('BlockComponent emits index:', this.index);
	}
	
	ngOnInit(){
		// console.log("Element index:", this.index);
	}
}