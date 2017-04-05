import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';
// import { BlockService } from './block.service';
// import { Block } from './block';

@Component({
	selector: 'add-block',
	template:`
	<input #InsertName>
    <button (click)="addBlock(InsertName.value)">AddB</button>`,
	// providers: [BlockService]
})

export class AddBlockComponent {
	@Output() saved = new EventEmitter<any>();

	addBlock(value: any){
		this.saved.emit(value);
	}
}