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
var BlockComponent = (function () {
    function BlockComponent() {
        this.cutElement = new core_1.EventEmitter;
    }
    BlockComponent.prototype.emitIndex = function () {
        this.cutElement.emit(this.index);
        console.log('BlockComponent emits index:', this.index);
    };
    BlockComponent.prototype.ngOnInit = function () {
        // console.log("Element index:", this.index);
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], BlockComponent.prototype, "block", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Number)
    ], BlockComponent.prototype, "index", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], BlockComponent.prototype, "cutElement", void 0);
    BlockComponent = __decorate([
        core_1.Component({
            selector: 'app-block',
            template: "\n\t{{block.value}}\n\t<button (click)=\"emitIndex()\">-</button>"
        }), 
        __metadata('design:paramtypes', [])
    ], BlockComponent);
    return BlockComponent;
}());
exports.BlockComponent = BlockComponent;
//# sourceMappingURL=block.component.js.map