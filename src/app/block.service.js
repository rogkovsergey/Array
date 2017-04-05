"use strict";
var block_1 = require('./block');
var BlockService = (function () {
    function BlockService() {
        this.blocks = [];
    }
    BlockService.prototype.getBlock = function () {
        return this.blocks;
    };
    BlockService.prototype.addBlock = function (value) {
        this.blocks.push(new block_1.Block(value));
        console.log('blocks in service:', this.blocks);
    };
    BlockService.prototype.isBlock = function () {
        return this.blocks.length;
    };
    return BlockService;
}());
exports.BlockService = BlockService;
//# sourceMappingURL=block.service.js.map