import { Input } from '@angular/core';
import { Block } from './block';

export class BlockService{
	
	private blocks: any [] = [];
	private number: number = 0;

	getBlock(number: number){
		if (number == -1){
			return this.blocks;
		} else {
			return this.blocks[number];
		}
	}

	addBlock(value: any, column_number: number){
		this.blocks[column_number].push(new Block(value));
		console.log('blocks in service:', this.blocks);
	}

	addColumn(value: any){
		this.blocks.push([new Block(value)]);
		console.log('Current column index:', this.number);
	}

	getColumnNumber(){
		this.number = this.blocks.length-1;
		return this.blocks.length-1;
	}

	cutBlock(column_index: number, block_index: number){
if (block_index == 0) {
		this.blocks.splice(column_index);
	} else {
		this.blocks[column_index].splice(block_index);
	}
}
}