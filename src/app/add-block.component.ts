import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';
import { NgForm} from '@angular/forms';
import { Block } from './block';

@Component({
	selector: 'add-block',
	template:`
	<input #inputValue>
	<button (click)="emitValue(inputValue.value)">Add</button>`
})

export class AddBlockComponent {

	@Output() saved = new EventEmitter;
	
	emitValue(value: any){
		this.saved.emit(value);
		console.log('AddBlockComponent emits value:', value);
	}
}