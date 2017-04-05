import { Block } from './block';

export class BlockService{
	private blocks: any [] = [];

	getBlock(){
		return this.blocks;
	}

	addBlock(value: string){
		this.blocks.push(new Block(value));
		console.log('blocks in service:', this.blocks);
	}

	isBlock(){
		return this.blocks.length;
	}
}