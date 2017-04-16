"use strict";
var block_1 = require('./block');
var BlockService = (function () {
    function BlockService() {
        this.blocks = [];
        this.number = 0;
    }
    BlockService.prototype.getBlock = function (number) {
        if (number == -1) {
            return this.blocks;
        }
        else {
            return this.blocks[number];
        }
    };
    BlockService.prototype.addBlock = function (value, column_number) {
        this.blocks[column_number].push(new block_1.Block(value));
        console.log('blocks in service:', this.blocks);
    };
    BlockService.prototype.addColumn = function (value) {
        this.blocks.push([new block_1.Block(value)]);
        console.log('Current column index:', this.number);
    };
    BlockService.prototype.getColumnNumber = function () {
        this.number = this.blocks.length - 1;
        return this.blocks.length - 1;
    };
    BlockService.prototype.cutBlock = function (column_index, block_index) {
        if (block_index == 0) {
            this.blocks.splice(column_index);
        }
        else {
            this.blocks[column_index].splice(block_index);
        }
    };
    return BlockService;
}());
exports.BlockService = BlockService;
//# sourceMappingURL=block.service.js.map