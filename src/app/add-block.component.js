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
var AddBlockComponent = (function () {
    function AddBlockComponent() {
        this.saved = new core_1.EventEmitter;
    }
    AddBlockComponent.prototype.emitValue = function (value) {
        this.saved.emit(value);
        console.log('AddBlockComponent emits value:', value);
    };
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], AddBlockComponent.prototype, "saved", void 0);
    AddBlockComponent = __decorate([
        core_1.Component({
            selector: 'add-block',
            template: "\n\t<input #inputValue>\n\t<button (click)=\"emitValue(inputValue.value)\">Add</button>"
        }), 
        __metadata('design:paramtypes', [])
    ], AddBlockComponent);
    return AddBlockComponent;
}());
exports.AddBlockComponent = AddBlockComponent;
//# sourceMappingURL=add-block.component.js.map