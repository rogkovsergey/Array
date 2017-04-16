"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var block_service_1 = require('./block.service');
var ColumnComponent = (function () {
    function ColumnComponent(blocks) {
        this.blocks = blocks;
    }
    ColumnComponent.prototype.save = function (value) {
        this.blocks.addBlock(value, this.column_number);
    };
    ColumnComponent.prototype.cut = function (index) {
        this.blocks.cutBlock(this.column_number, index);
        console.log("Inputed index: ", index, " | Column number: ", this.column_number);
    };
    ColumnComponent.prototype.ngOnInit = function () {
        this.column_number = this.blocks.getColumnNumber();
        this.column = this.blocks.getBlock(this.column_number);
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Array)
    ], ColumnComponent.prototype, "column", void 0);
    ColumnComponent = __decorate([
        core_1.Component({
            selector: 'app-column',
            template: "<div style='border: solid; border-width: 1px; margin: 5 px'>\n\t<p>AppColumn {{column_number}}</p>\n\t<ul>\n\t\t<li *ngFor = \"let block of column; let i=index\">\n\t\t\t<app-block (cutElement)=\"cut($event)\" [block]=\"block\" [index]=\"i\"></app-block>\n\t\t</li>\n\t</ul>\n\t<add-block (saved)=\"save($event)\"></add-block>\n\t</div>"
        }), 
        __metadata('design:paramtypes', [block_service_1.BlockService])
    ], ColumnComponent);
    return ColumnComponent;
}());
exports.ColumnComponent = ColumnComponent;
//# sourceMappingURL=column.component.js.map