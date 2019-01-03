(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _entry_list_entry_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./entry-list/entry-list.component */ "./src/app/entry-list/entry-list.component.ts");
/* harmony import */ var _inventory_inventory_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./inventory/inventory.component */ "./src/app/inventory/inventory.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




//
// TODO:
// https://www.sitepoint.com/component-routing-angular-router/
// Add a "resolver" for each route. This implements a hook
// that executes _before_ the component is activated, so that
// nothing displays until the data has been fetched. This can also
// manage a loading animation, maybe
//
var routes = [{
        path: '',
        redirectTo: 'log',
        pathMatch: 'full'
    },
    {
        path: 'log',
        component: _entry_list_entry_list_component__WEBPACK_IMPORTED_MODULE_2__["EntryListComponent"],
    },
    {
        path: 'inventory',
        component: _inventory_inventory_component__WEBPACK_IMPORTED_MODULE_3__["InventoryComponent"],
    }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container content\">\n  <div class=\"row\">\n    <div class=\"col-md-2\">\n    </div>\n    <div class=\"col-md-2\">\n      <h1>\n        {{ title }}\n      </h1>\n    </div>\n    <div class=\"col-md-2\">\n    </div>\n    <div class=\"col-md-2\">\n      <button *ngIf=\"showNew | async\" mat-button (click)=\"dispatchNew()\">\n        <mat-icon>note_add</mat-icon>\n        New Entry\n      </button>\n    </div>\n    <div class=\"col-md-2\">\n      <app-nav-menu></app-nav-menu>\n    </div>\n    <div class=\"col-md-2\">\n    </div>\n  </div>\n  <div class=\"row\">\n    <div class=\"col-md-12\">\n      <router-outlet></router-outlet>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".mat-badge-content{font-weight:600;font-size:12px;font-family:Roboto,\"Helvetica Neue\",sans-serif}.mat-badge-small .mat-badge-content{font-size:6px}.mat-badge-large .mat-badge-content{font-size:24px}.mat-h1,.mat-headline,.mat-typography h1{font:400 24px/32px Roboto,\"Helvetica Neue\",sans-serif;margin:0 0 16px}.mat-h2,.mat-title,.mat-typography h2{font:500 20px/32px Roboto,\"Helvetica Neue\",sans-serif;margin:0 0 16px}.mat-h3,.mat-subheading-2,.mat-typography h3{font:400 16px/28px Roboto,\"Helvetica Neue\",sans-serif;margin:0 0 16px}.mat-h4,.mat-subheading-1,.mat-typography h4{font:400 15px/24px Roboto,\"Helvetica Neue\",sans-serif;margin:0 0 16px}.mat-h5,.mat-typography h5{font:400 11.62px/20px Roboto,\"Helvetica Neue\",sans-serif;margin:0 0 12px}.mat-h6,.mat-typography h6{font:400 9.38px/20px Roboto,\"Helvetica Neue\",sans-serif;margin:0 0 12px}.mat-body-2,.mat-body-strong{font:500 14px/24px Roboto,\"Helvetica Neue\",sans-serif}.mat-body,.mat-body-1,.mat-typography{font:400 14px/20px Roboto,\"Helvetica Neue\",sans-serif}.mat-body p,.mat-body-1 p,.mat-typography p{margin:0 0 12px}.mat-caption,.mat-small{font:400 12px/20px Roboto,\"Helvetica Neue\",sans-serif}.mat-display-4,.mat-typography .mat-display-4{font:300 112px/112px Roboto,\"Helvetica Neue\",sans-serif;margin:0 0 56px;letter-spacing:-.05em}.mat-display-3,.mat-typography .mat-display-3{font:400 56px/56px Roboto,\"Helvetica Neue\",sans-serif;margin:0 0 64px;letter-spacing:-.02em}.mat-display-2,.mat-typography .mat-display-2{font:400 45px/48px Roboto,\"Helvetica Neue\",sans-serif;margin:0 0 64px;letter-spacing:-.005em}.mat-display-1,.mat-typography .mat-display-1{font:400 34px/40px Roboto,\"Helvetica Neue\",sans-serif;margin:0 0 64px}.mat-bottom-sheet-container{font:400 14px/20px Roboto,\"Helvetica Neue\",sans-serif}.mat-button,.mat-fab,.mat-flat-button,.mat-icon-button,.mat-mini-fab,.mat-raised-button,.mat-stroked-button{font-family:Roboto,\"Helvetica Neue\",sans-serif;font-size:14px;font-weight:500}.mat-button-toggle{font-family:Roboto,\"Helvetica Neue\",sans-serif}.mat-card{font-family:Roboto,\"Helvetica Neue\",sans-serif}.mat-card-title{font-size:24px;font-weight:500}.mat-card-header .mat-card-title{font-size:20px}.mat-card-content,.mat-card-subtitle{font-size:14px}.mat-checkbox{font-family:Roboto,\"Helvetica Neue\",sans-serif}.mat-checkbox-layout .mat-checkbox-label{line-height:24px}.mat-chip{font-size:14px;font-weight:500}.mat-chip .mat-chip-remove.mat-icon,.mat-chip .mat-chip-trailing-icon.mat-icon{font-size:18px}.mat-table{font-family:Roboto,\"Helvetica Neue\",sans-serif}.mat-header-cell{font-size:12px;font-weight:500}.mat-cell,.mat-footer-cell{font-size:14px}.mat-calendar{font-family:Roboto,\"Helvetica Neue\",sans-serif}.mat-calendar-body{font-size:13px}.mat-calendar-body-label,.mat-calendar-period-button{font-size:14px;font-weight:500}.mat-calendar-table-header th{font-size:11px;font-weight:400}.mat-dialog-title{font:500 20px/32px Roboto,\"Helvetica Neue\",sans-serif}.mat-expansion-panel-header{font-family:Roboto,\"Helvetica Neue\",sans-serif;font-size:15px;font-weight:400}.mat-expansion-panel-content{font:400 14px/20px Roboto,\"Helvetica Neue\",sans-serif}.mat-form-field{font-size:inherit;font-weight:400;line-height:1.125;font-family:Roboto,\"Helvetica Neue\",sans-serif}.mat-form-field-wrapper{padding-bottom:1.34375em}.mat-form-field-prefix .mat-icon,.mat-form-field-suffix .mat-icon{font-size:150%;line-height:1.125}.mat-form-field-prefix .mat-icon-button,.mat-form-field-suffix .mat-icon-button{height:1.5em;width:1.5em}.mat-form-field-prefix .mat-icon-button .mat-icon,.mat-form-field-suffix .mat-icon-button .mat-icon{height:1.125em;line-height:1.125}.mat-form-field-infix{padding:.5em 0;border-top:.84375em solid transparent}.mat-form-field-can-float .mat-input-server:focus+.mat-form-field-label-wrapper .mat-form-field-label,.mat-form-field-can-float.mat-form-field-should-float .mat-form-field-label{-webkit-transform:translateY(-1.34375em) scale(.75);transform:translateY(-1.34375em) scale(.75);width:133.33333%}.mat-form-field-can-float .mat-input-server[label]:not(:label-shown)+.mat-form-field-label-wrapper .mat-form-field-label{-webkit-transform:translateY(-1.34374em) scale(.75);transform:translateY(-1.34374em) scale(.75);width:133.33334%}.mat-form-field-label-wrapper{top:-.84375em;padding-top:.84375em}.mat-form-field-label{top:1.34375em}.mat-form-field-underline{bottom:1.34375em}.mat-form-field-subscript-wrapper{font-size:75%;margin-top:.66667em;top:calc(100% - 1.79167em)}.mat-form-field-appearance-legacy .mat-form-field-wrapper{padding-bottom:1.25em}.mat-form-field-appearance-legacy .mat-form-field-infix{padding:.4375em 0}.mat-form-field-appearance-legacy.mat-form-field-can-float .mat-input-server:focus+.mat-form-field-label-wrapper .mat-form-field-label,.mat-form-field-appearance-legacy.mat-form-field-can-float.mat-form-field-should-float .mat-form-field-label{-webkit-transform:translateY(-1.28125em) scale(.75) perspective(100px) translateZ(.001px);transform:translateY(-1.28125em) scale(.75) perspective(100px) translateZ(.001px);-ms-transform:translateY(-1.28125em) scale(.75);width:133.33333%}.mat-form-field-appearance-legacy.mat-form-field-can-float .mat-form-field-autofill-control:-webkit-autofill+.mat-form-field-label-wrapper .mat-form-field-label{-webkit-transform:translateY(-1.28125em) scale(.75) perspective(100px) translateZ(.00101px);transform:translateY(-1.28125em) scale(.75) perspective(100px) translateZ(.00101px);-ms-transform:translateY(-1.28124em) scale(.75);width:133.33334%}.mat-form-field-appearance-legacy.mat-form-field-can-float .mat-input-server[label]:not(:label-shown)+.mat-form-field-label-wrapper .mat-form-field-label{-webkit-transform:translateY(-1.28125em) scale(.75) perspective(100px) translateZ(.00102px);transform:translateY(-1.28125em) scale(.75) perspective(100px) translateZ(.00102px);-ms-transform:translateY(-1.28123em) scale(.75);width:133.33335%}.mat-form-field-appearance-legacy .mat-form-field-label{top:1.28125em}.mat-form-field-appearance-legacy .mat-form-field-underline{bottom:1.25em}.mat-form-field-appearance-legacy .mat-form-field-subscript-wrapper{margin-top:.54167em;top:calc(100% - 1.66667em)}@media print{.mat-form-field-appearance-legacy.mat-form-field-can-float .mat-input-server:focus+.mat-form-field-label-wrapper .mat-form-field-label,.mat-form-field-appearance-legacy.mat-form-field-can-float.mat-form-field-should-float .mat-form-field-label{-webkit-transform:translateY(-1.28122em) scale(.75);transform:translateY(-1.28122em) scale(.75)}.mat-form-field-appearance-legacy.mat-form-field-can-float .mat-form-field-autofill-control:-webkit-autofill+.mat-form-field-label-wrapper .mat-form-field-label{-webkit-transform:translateY(-1.28121em) scale(.75);transform:translateY(-1.28121em) scale(.75)}.mat-form-field-appearance-legacy.mat-form-field-can-float .mat-input-server[label]:not(:label-shown)+.mat-form-field-label-wrapper .mat-form-field-label{-webkit-transform:translateY(-1.2812em) scale(.75);transform:translateY(-1.2812em) scale(.75)}}.mat-form-field-appearance-fill .mat-form-field-infix{padding:.25em 0 .75em 0}.mat-form-field-appearance-fill .mat-form-field-label{top:1.09375em;margin-top:-.5em}.mat-form-field-appearance-fill.mat-form-field-can-float .mat-input-server:focus+.mat-form-field-label-wrapper .mat-form-field-label,.mat-form-field-appearance-fill.mat-form-field-can-float.mat-form-field-should-float .mat-form-field-label{-webkit-transform:translateY(-.59375em) scale(.75);transform:translateY(-.59375em) scale(.75);width:133.33333%}.mat-form-field-appearance-fill.mat-form-field-can-float .mat-input-server[label]:not(:label-shown)+.mat-form-field-label-wrapper .mat-form-field-label{-webkit-transform:translateY(-.59374em) scale(.75);transform:translateY(-.59374em) scale(.75);width:133.33334%}.mat-form-field-appearance-outline .mat-form-field-infix{padding:1em 0 1em 0}.mat-form-field-appearance-outline .mat-form-field-label{top:1.84375em;margin-top:-.25em}.mat-form-field-appearance-outline.mat-form-field-can-float .mat-input-server:focus+.mat-form-field-label-wrapper .mat-form-field-label,.mat-form-field-appearance-outline.mat-form-field-can-float.mat-form-field-should-float .mat-form-field-label{-webkit-transform:translateY(-1.59375em) scale(.75);transform:translateY(-1.59375em) scale(.75);width:133.33333%}.mat-form-field-appearance-outline.mat-form-field-can-float .mat-input-server[label]:not(:label-shown)+.mat-form-field-label-wrapper .mat-form-field-label{-webkit-transform:translateY(-1.59374em) scale(.75);transform:translateY(-1.59374em) scale(.75);width:133.33334%}.mat-grid-tile-footer,.mat-grid-tile-header{font-size:14px}.mat-grid-tile-footer .mat-line,.mat-grid-tile-header .mat-line{white-space:nowrap;overflow:hidden;text-overflow:ellipsis;display:block;box-sizing:border-box}.mat-grid-tile-footer .mat-line:nth-child(n+2),.mat-grid-tile-header .mat-line:nth-child(n+2){font-size:12px}input.mat-input-element{margin-top:-.0625em}.mat-menu-item{font-family:Roboto,\"Helvetica Neue\",sans-serif;font-size:14px;font-weight:400}.mat-paginator,.mat-paginator-page-size .mat-select-trigger{font-family:Roboto,\"Helvetica Neue\",sans-serif;font-size:12px}.mat-radio-button{font-family:Roboto,\"Helvetica Neue\",sans-serif}.mat-select{font-family:Roboto,\"Helvetica Neue\",sans-serif}.mat-select-trigger{height:1.125em}.mat-slide-toggle-content{font-family:Roboto,\"Helvetica Neue\",sans-serif}.mat-slider-thumb-label-text{font-family:Roboto,\"Helvetica Neue\",sans-serif;font-size:12px;font-weight:500}.mat-stepper-horizontal,.mat-stepper-vertical{font-family:Roboto,\"Helvetica Neue\",sans-serif}.mat-step-label{font-size:14px;font-weight:400}.mat-step-sub-label-error{font-weight:400}.mat-step-label-error{font-size:14px}.mat-step-label-selected{font-size:14px;font-weight:500}.mat-tab-group{font-family:Roboto,\"Helvetica Neue\",sans-serif}.mat-tab-label,.mat-tab-link{font-family:Roboto,\"Helvetica Neue\",sans-serif;font-size:14px;font-weight:500}.mat-toolbar,.mat-toolbar h1,.mat-toolbar h2,.mat-toolbar h3,.mat-toolbar h4,.mat-toolbar h5,.mat-toolbar h6{font:500 20px/32px Roboto,\"Helvetica Neue\",sans-serif;margin:0}.mat-tooltip{font-family:Roboto,\"Helvetica Neue\",sans-serif;font-size:10px;padding-top:6px;padding-bottom:6px}.mat-tooltip-handset{font-size:14px;padding-top:8px;padding-bottom:8px}.mat-list-item{font-family:Roboto,\"Helvetica Neue\",sans-serif}.mat-list-option{font-family:Roboto,\"Helvetica Neue\",sans-serif}.mat-list .mat-list-item,.mat-nav-list .mat-list-item,.mat-selection-list .mat-list-item{font-size:16px}.mat-list .mat-list-item .mat-line,.mat-nav-list .mat-list-item .mat-line,.mat-selection-list .mat-list-item .mat-line{white-space:nowrap;overflow:hidden;text-overflow:ellipsis;display:block;box-sizing:border-box}.mat-list .mat-list-item .mat-line:nth-child(n+2),.mat-nav-list .mat-list-item .mat-line:nth-child(n+2),.mat-selection-list .mat-list-item .mat-line:nth-child(n+2){font-size:14px}.mat-list .mat-list-option,.mat-nav-list .mat-list-option,.mat-selection-list .mat-list-option{font-size:16px}.mat-list .mat-list-option .mat-line,.mat-nav-list .mat-list-option .mat-line,.mat-selection-list .mat-list-option .mat-line{white-space:nowrap;overflow:hidden;text-overflow:ellipsis;display:block;box-sizing:border-box}.mat-list .mat-list-option .mat-line:nth-child(n+2),.mat-nav-list .mat-list-option .mat-line:nth-child(n+2),.mat-selection-list .mat-list-option .mat-line:nth-child(n+2){font-size:14px}.mat-list .mat-subheader,.mat-nav-list .mat-subheader,.mat-selection-list .mat-subheader{font-family:Roboto,\"Helvetica Neue\",sans-serif;font-size:14px;font-weight:500}.mat-list[dense] .mat-list-item,.mat-nav-list[dense] .mat-list-item,.mat-selection-list[dense] .mat-list-item{font-size:12px}.mat-list[dense] .mat-list-item .mat-line,.mat-nav-list[dense] .mat-list-item .mat-line,.mat-selection-list[dense] .mat-list-item .mat-line{white-space:nowrap;overflow:hidden;text-overflow:ellipsis;display:block;box-sizing:border-box}.mat-list[dense] .mat-list-item .mat-line:nth-child(n+2),.mat-nav-list[dense] .mat-list-item .mat-line:nth-child(n+2),.mat-selection-list[dense] .mat-list-item .mat-line:nth-child(n+2){font-size:12px}.mat-list[dense] .mat-list-option,.mat-nav-list[dense] .mat-list-option,.mat-selection-list[dense] .mat-list-option{font-size:12px}.mat-list[dense] .mat-list-option .mat-line,.mat-nav-list[dense] .mat-list-option .mat-line,.mat-selection-list[dense] .mat-list-option .mat-line{white-space:nowrap;overflow:hidden;text-overflow:ellipsis;display:block;box-sizing:border-box}.mat-list[dense] .mat-list-option .mat-line:nth-child(n+2),.mat-nav-list[dense] .mat-list-option .mat-line:nth-child(n+2),.mat-selection-list[dense] .mat-list-option .mat-line:nth-child(n+2){font-size:12px}.mat-list[dense] .mat-subheader,.mat-nav-list[dense] .mat-subheader,.mat-selection-list[dense] .mat-subheader{font-family:Roboto,\"Helvetica Neue\",sans-serif;font-size:12px;font-weight:500}.mat-option{font-family:Roboto,\"Helvetica Neue\",sans-serif;font-size:16px}.mat-optgroup-label{font:500 14px/24px Roboto,\"Helvetica Neue\",sans-serif}.mat-simple-snackbar{font-family:Roboto,\"Helvetica Neue\",sans-serif;font-size:14px}.mat-simple-snackbar-action{line-height:1;font-family:inherit;font-size:inherit;font-weight:500}.mat-tree{font-family:Roboto,\"Helvetica Neue\",sans-serif}.mat-nested-tree-node,.mat-tree-node{font-weight:400;font-size:14px}.mat-ripple{overflow:hidden;position:relative}.mat-ripple.mat-ripple-unbounded{overflow:visible}.mat-ripple-element{position:absolute;border-radius:50%;pointer-events:none;transition:opacity,-webkit-transform 0s cubic-bezier(0,0,.2,1);transition:opacity,transform 0s cubic-bezier(0,0,.2,1);transition:opacity,transform 0s cubic-bezier(0,0,.2,1),-webkit-transform 0s cubic-bezier(0,0,.2,1);-webkit-transform:scale(0);transform:scale(0)}@media screen and (-ms-high-contrast:active){.mat-ripple-element{display:none}}.cdk-visually-hidden{border:0;clip:rect(0 0 0 0);height:1px;margin:-1px;overflow:hidden;padding:0;position:absolute;width:1px;outline:0;-webkit-appearance:none;-moz-appearance:none}.cdk-global-overlay-wrapper,.cdk-overlay-container{pointer-events:none;top:0;left:0;height:100%;width:100%}.cdk-overlay-container{position:fixed;z-index:1000}.cdk-overlay-container:empty{display:none}.cdk-global-overlay-wrapper{display:flex;position:absolute;z-index:1000}.cdk-overlay-pane{position:absolute;pointer-events:auto;box-sizing:border-box;z-index:1000;display:flex;max-width:100%;max-height:100%}.cdk-overlay-backdrop{position:absolute;top:0;bottom:0;left:0;right:0;z-index:1000;pointer-events:auto;-webkit-tap-highlight-color:transparent;transition:opacity .4s cubic-bezier(.25,.8,.25,1);opacity:0}.cdk-overlay-backdrop.cdk-overlay-backdrop-showing{opacity:1}@media screen and (-ms-high-contrast:active){.cdk-overlay-backdrop.cdk-overlay-backdrop-showing{opacity:.6}}.cdk-overlay-dark-backdrop{background:rgba(0,0,0,.32)}.cdk-overlay-transparent-backdrop,.cdk-overlay-transparent-backdrop.cdk-overlay-backdrop-showing{opacity:0}.cdk-overlay-connected-position-bounding-box{position:absolute;z-index:1000;display:flex;flex-direction:column;min-width:1px;min-height:1px}.cdk-global-scrollblock{position:fixed;width:100%;overflow-y:scroll}@-webkit-keyframes cdk-text-field-autofill-start{/*!*/}@keyframes cdk-text-field-autofill-start{/*!*/}@-webkit-keyframes cdk-text-field-autofill-end{/*!*/}@keyframes cdk-text-field-autofill-end{/*!*/}.cdk-text-field-autofill-monitored:-webkit-autofill{-webkit-animation-name:cdk-text-field-autofill-start;animation-name:cdk-text-field-autofill-start}.cdk-text-field-autofill-monitored:not(:-webkit-autofill){-webkit-animation-name:cdk-text-field-autofill-end;animation-name:cdk-text-field-autofill-end}textarea.cdk-textarea-autosize{resize:none}textarea.cdk-textarea-autosize-measuring{height:auto!important;overflow:hidden!important;padding:2px 0!important;box-sizing:content-box!important}.mat-ripple-element{background-color:rgba(0,0,0,.1)}.mat-option{color:rgba(0,0,0,.87)}.mat-option:focus:not(.mat-option-disabled),.mat-option:hover:not(.mat-option-disabled){background:rgba(0,0,0,.04)}.mat-option.mat-selected:not(.mat-option-multiple):not(.mat-option-disabled){background:rgba(0,0,0,.04)}.mat-option.mat-active{background:rgba(0,0,0,.04);color:rgba(0,0,0,.87)}.mat-option.mat-option-disabled{color:rgba(0,0,0,.38)}.mat-primary .mat-option.mat-selected:not(.mat-option-disabled){color:#3f51b5}.mat-accent .mat-option.mat-selected:not(.mat-option-disabled){color:#ff4081}.mat-warn .mat-option.mat-selected:not(.mat-option-disabled){color:#f44336}.mat-optgroup-label{color:rgba(0,0,0,.54)}.mat-optgroup-disabled .mat-optgroup-label{color:rgba(0,0,0,.38)}.mat-pseudo-checkbox{color:rgba(0,0,0,.54)}.mat-pseudo-checkbox::after{color:#fafafa}.mat-accent .mat-pseudo-checkbox-checked,.mat-accent .mat-pseudo-checkbox-indeterminate,.mat-pseudo-checkbox-checked,.mat-pseudo-checkbox-indeterminate{background:#ff4081}.mat-primary .mat-pseudo-checkbox-checked,.mat-primary .mat-pseudo-checkbox-indeterminate{background:#3f51b5}.mat-warn .mat-pseudo-checkbox-checked,.mat-warn .mat-pseudo-checkbox-indeterminate{background:#f44336}.mat-pseudo-checkbox-checked.mat-pseudo-checkbox-disabled{background:#b0b0b0}.mat-elevation-z0{box-shadow:0 0 0 0 rgba(0,0,0,.2),0 0 0 0 rgba(0,0,0,.14),0 0 0 0 rgba(0,0,0,.12)}.mat-elevation-z1{box-shadow:0 2px 1px -1px rgba(0,0,0,.2),0 1px 1px 0 rgba(0,0,0,.14),0 1px 3px 0 rgba(0,0,0,.12)}.mat-elevation-z2{box-shadow:0 3px 1px -2px rgba(0,0,0,.2),0 2px 2px 0 rgba(0,0,0,.14),0 1px 5px 0 rgba(0,0,0,.12)}.mat-elevation-z3{box-shadow:0 3px 3px -2px rgba(0,0,0,.2),0 3px 4px 0 rgba(0,0,0,.14),0 1px 8px 0 rgba(0,0,0,.12)}.mat-elevation-z4{box-shadow:0 2px 4px -1px rgba(0,0,0,.2),0 4px 5px 0 rgba(0,0,0,.14),0 1px 10px 0 rgba(0,0,0,.12)}.mat-elevation-z5{box-shadow:0 3px 5px -1px rgba(0,0,0,.2),0 5px 8px 0 rgba(0,0,0,.14),0 1px 14px 0 rgba(0,0,0,.12)}.mat-elevation-z6{box-shadow:0 3px 5px -1px rgba(0,0,0,.2),0 6px 10px 0 rgba(0,0,0,.14),0 1px 18px 0 rgba(0,0,0,.12)}.mat-elevation-z7{box-shadow:0 4px 5px -2px rgba(0,0,0,.2),0 7px 10px 1px rgba(0,0,0,.14),0 2px 16px 1px rgba(0,0,0,.12)}.mat-elevation-z8{box-shadow:0 5px 5px -3px rgba(0,0,0,.2),0 8px 10px 1px rgba(0,0,0,.14),0 3px 14px 2px rgba(0,0,0,.12)}.mat-elevation-z9{box-shadow:0 5px 6px -3px rgba(0,0,0,.2),0 9px 12px 1px rgba(0,0,0,.14),0 3px 16px 2px rgba(0,0,0,.12)}.mat-elevation-z10{box-shadow:0 6px 6px -3px rgba(0,0,0,.2),0 10px 14px 1px rgba(0,0,0,.14),0 4px 18px 3px rgba(0,0,0,.12)}.mat-elevation-z11{box-shadow:0 6px 7px -4px rgba(0,0,0,.2),0 11px 15px 1px rgba(0,0,0,.14),0 4px 20px 3px rgba(0,0,0,.12)}.mat-elevation-z12{box-shadow:0 7px 8px -4px rgba(0,0,0,.2),0 12px 17px 2px rgba(0,0,0,.14),0 5px 22px 4px rgba(0,0,0,.12)}.mat-elevation-z13{box-shadow:0 7px 8px -4px rgba(0,0,0,.2),0 13px 19px 2px rgba(0,0,0,.14),0 5px 24px 4px rgba(0,0,0,.12)}.mat-elevation-z14{box-shadow:0 7px 9px -4px rgba(0,0,0,.2),0 14px 21px 2px rgba(0,0,0,.14),0 5px 26px 4px rgba(0,0,0,.12)}.mat-elevation-z15{box-shadow:0 8px 9px -5px rgba(0,0,0,.2),0 15px 22px 2px rgba(0,0,0,.14),0 6px 28px 5px rgba(0,0,0,.12)}.mat-elevation-z16{box-shadow:0 8px 10px -5px rgba(0,0,0,.2),0 16px 24px 2px rgba(0,0,0,.14),0 6px 30px 5px rgba(0,0,0,.12)}.mat-elevation-z17{box-shadow:0 8px 11px -5px rgba(0,0,0,.2),0 17px 26px 2px rgba(0,0,0,.14),0 6px 32px 5px rgba(0,0,0,.12)}.mat-elevation-z18{box-shadow:0 9px 11px -5px rgba(0,0,0,.2),0 18px 28px 2px rgba(0,0,0,.14),0 7px 34px 6px rgba(0,0,0,.12)}.mat-elevation-z19{box-shadow:0 9px 12px -6px rgba(0,0,0,.2),0 19px 29px 2px rgba(0,0,0,.14),0 7px 36px 6px rgba(0,0,0,.12)}.mat-elevation-z20{box-shadow:0 10px 13px -6px rgba(0,0,0,.2),0 20px 31px 3px rgba(0,0,0,.14),0 8px 38px 7px rgba(0,0,0,.12)}.mat-elevation-z21{box-shadow:0 10px 13px -6px rgba(0,0,0,.2),0 21px 33px 3px rgba(0,0,0,.14),0 8px 40px 7px rgba(0,0,0,.12)}.mat-elevation-z22{box-shadow:0 10px 14px -6px rgba(0,0,0,.2),0 22px 35px 3px rgba(0,0,0,.14),0 8px 42px 7px rgba(0,0,0,.12)}.mat-elevation-z23{box-shadow:0 11px 14px -7px rgba(0,0,0,.2),0 23px 36px 3px rgba(0,0,0,.14),0 9px 44px 8px rgba(0,0,0,.12)}.mat-elevation-z24{box-shadow:0 11px 15px -7px rgba(0,0,0,.2),0 24px 38px 3px rgba(0,0,0,.14),0 9px 46px 8px rgba(0,0,0,.12)}.mat-app-background{background-color:#fafafa;color:rgba(0,0,0,.87)}.mat-theme-loaded-marker{display:none}.mat-autocomplete-panel{background:#fff;color:rgba(0,0,0,.87)}.mat-autocomplete-panel:not([class*=mat-elevation-z]){box-shadow:0 2px 4px -1px rgba(0,0,0,.2),0 4px 5px 0 rgba(0,0,0,.14),0 1px 10px 0 rgba(0,0,0,.12)}.mat-autocomplete-panel .mat-option.mat-selected:not(.mat-active):not(:hover){background:#fff}.mat-autocomplete-panel .mat-option.mat-selected:not(.mat-active):not(:hover):not(.mat-option-disabled){color:rgba(0,0,0,.87)}.mat-badge-content{color:#fff;background:#3f51b5}.mat-badge-accent .mat-badge-content{background:#ff4081;color:#fff}.mat-badge-warn .mat-badge-content{color:#fff;background:#f44336}.mat-badge{position:relative}.mat-badge-hidden .mat-badge-content{display:none}.mat-badge-disabled .mat-badge-content{background:#b9b9b9;color:rgba(0,0,0,.38)}.mat-badge-content{position:absolute;text-align:center;display:inline-block;border-radius:50%;transition:-webkit-transform .2s ease-in-out;transition:transform .2s ease-in-out;transition:transform .2s ease-in-out, -webkit-transform .2s ease-in-out;-webkit-transform:scale(.6);transform:scale(.6);overflow:hidden;white-space:nowrap;text-overflow:ellipsis;pointer-events:none}.mat-badge-content.mat-badge-active{-webkit-transform:none;transform:none}.mat-badge-small .mat-badge-content{width:16px;height:16px;line-height:16px}@media screen and (-ms-high-contrast:active){.mat-badge-small .mat-badge-content{outline:solid 1px;border-radius:0}}.mat-badge-small.mat-badge-above .mat-badge-content{top:-8px}.mat-badge-small.mat-badge-below .mat-badge-content{bottom:-8px}.mat-badge-small.mat-badge-before .mat-badge-content{left:-16px}[dir=rtl] .mat-badge-small.mat-badge-before .mat-badge-content{left:auto;right:-16px}.mat-badge-small.mat-badge-after .mat-badge-content{right:-16px}[dir=rtl] .mat-badge-small.mat-badge-after .mat-badge-content{right:auto;left:-16px}.mat-badge-small.mat-badge-overlap.mat-badge-before .mat-badge-content{left:-8px}[dir=rtl] .mat-badge-small.mat-badge-overlap.mat-badge-before .mat-badge-content{left:auto;right:-8px}.mat-badge-small.mat-badge-overlap.mat-badge-after .mat-badge-content{right:-8px}[dir=rtl] .mat-badge-small.mat-badge-overlap.mat-badge-after .mat-badge-content{right:auto;left:-8px}.mat-badge-medium .mat-badge-content{width:22px;height:22px;line-height:22px}@media screen and (-ms-high-contrast:active){.mat-badge-medium .mat-badge-content{outline:solid 1px;border-radius:0}}.mat-badge-medium.mat-badge-above .mat-badge-content{top:-11px}.mat-badge-medium.mat-badge-below .mat-badge-content{bottom:-11px}.mat-badge-medium.mat-badge-before .mat-badge-content{left:-22px}[dir=rtl] .mat-badge-medium.mat-badge-before .mat-badge-content{left:auto;right:-22px}.mat-badge-medium.mat-badge-after .mat-badge-content{right:-22px}[dir=rtl] .mat-badge-medium.mat-badge-after .mat-badge-content{right:auto;left:-22px}.mat-badge-medium.mat-badge-overlap.mat-badge-before .mat-badge-content{left:-11px}[dir=rtl] .mat-badge-medium.mat-badge-overlap.mat-badge-before .mat-badge-content{left:auto;right:-11px}.mat-badge-medium.mat-badge-overlap.mat-badge-after .mat-badge-content{right:-11px}[dir=rtl] .mat-badge-medium.mat-badge-overlap.mat-badge-after .mat-badge-content{right:auto;left:-11px}.mat-badge-large .mat-badge-content{width:28px;height:28px;line-height:28px}@media screen and (-ms-high-contrast:active){.mat-badge-large .mat-badge-content{outline:solid 1px;border-radius:0}}.mat-badge-large.mat-badge-above .mat-badge-content{top:-14px}.mat-badge-large.mat-badge-below .mat-badge-content{bottom:-14px}.mat-badge-large.mat-badge-before .mat-badge-content{left:-28px}[dir=rtl] .mat-badge-large.mat-badge-before .mat-badge-content{left:auto;right:-28px}.mat-badge-large.mat-badge-after .mat-badge-content{right:-28px}[dir=rtl] .mat-badge-large.mat-badge-after .mat-badge-content{right:auto;left:-28px}.mat-badge-large.mat-badge-overlap.mat-badge-before .mat-badge-content{left:-14px}[dir=rtl] .mat-badge-large.mat-badge-overlap.mat-badge-before .mat-badge-content{left:auto;right:-14px}.mat-badge-large.mat-badge-overlap.mat-badge-after .mat-badge-content{right:-14px}[dir=rtl] .mat-badge-large.mat-badge-overlap.mat-badge-after .mat-badge-content{right:auto;left:-14px}.mat-bottom-sheet-container{box-shadow:0 8px 10px -5px rgba(0,0,0,.2),0 16px 24px 2px rgba(0,0,0,.14),0 6px 30px 5px rgba(0,0,0,.12);background:#fff;color:rgba(0,0,0,.87)}.mat-button,.mat-icon-button,.mat-stroked-button{color:inherit;background:0 0}.mat-button.mat-primary,.mat-icon-button.mat-primary,.mat-stroked-button.mat-primary{color:#3f51b5}.mat-button.mat-accent,.mat-icon-button.mat-accent,.mat-stroked-button.mat-accent{color:#ff4081}.mat-button.mat-warn,.mat-icon-button.mat-warn,.mat-stroked-button.mat-warn{color:#f44336}.mat-button.mat-accent[disabled],.mat-button.mat-primary[disabled],.mat-button.mat-warn[disabled],.mat-button[disabled][disabled],.mat-icon-button.mat-accent[disabled],.mat-icon-button.mat-primary[disabled],.mat-icon-button.mat-warn[disabled],.mat-icon-button[disabled][disabled],.mat-stroked-button.mat-accent[disabled],.mat-stroked-button.mat-primary[disabled],.mat-stroked-button.mat-warn[disabled],.mat-stroked-button[disabled][disabled]{color:rgba(0,0,0,.26)}.mat-button.mat-primary .mat-button-focus-overlay,.mat-icon-button.mat-primary .mat-button-focus-overlay,.mat-stroked-button.mat-primary .mat-button-focus-overlay{background-color:#3f51b5}.mat-button.mat-accent .mat-button-focus-overlay,.mat-icon-button.mat-accent .mat-button-focus-overlay,.mat-stroked-button.mat-accent .mat-button-focus-overlay{background-color:#ff4081}.mat-button.mat-warn .mat-button-focus-overlay,.mat-icon-button.mat-warn .mat-button-focus-overlay,.mat-stroked-button.mat-warn .mat-button-focus-overlay{background-color:#f44336}.mat-button[disabled] .mat-button-focus-overlay,.mat-icon-button[disabled] .mat-button-focus-overlay,.mat-stroked-button[disabled] .mat-button-focus-overlay{background-color:transparent}.mat-button.mat-primary .mat-ripple-element,.mat-icon-button.mat-primary .mat-ripple-element,.mat-stroked-button.mat-primary .mat-ripple-element{background-color:rgba(63,81,181,.1)}.mat-button.mat-accent .mat-ripple-element,.mat-icon-button.mat-accent .mat-ripple-element,.mat-stroked-button.mat-accent .mat-ripple-element{background-color:rgba(255,64,129,.1)}.mat-button.mat-warn .mat-ripple-element,.mat-icon-button.mat-warn .mat-ripple-element,.mat-stroked-button.mat-warn .mat-ripple-element{background-color:rgba(244,67,54,.1)}.mat-button-focus-overlay{background:#000}.mat-stroked-button:not([disabled]){border-color:rgba(0,0,0,.12)}.mat-fab,.mat-flat-button,.mat-mini-fab,.mat-raised-button{color:rgba(0,0,0,.87);background-color:#fff}.mat-fab.mat-primary,.mat-flat-button.mat-primary,.mat-mini-fab.mat-primary,.mat-raised-button.mat-primary{color:#fff}.mat-fab.mat-accent,.mat-flat-button.mat-accent,.mat-mini-fab.mat-accent,.mat-raised-button.mat-accent{color:#fff}.mat-fab.mat-warn,.mat-flat-button.mat-warn,.mat-mini-fab.mat-warn,.mat-raised-button.mat-warn{color:#fff}.mat-fab.mat-accent[disabled],.mat-fab.mat-primary[disabled],.mat-fab.mat-warn[disabled],.mat-fab[disabled][disabled],.mat-flat-button.mat-accent[disabled],.mat-flat-button.mat-primary[disabled],.mat-flat-button.mat-warn[disabled],.mat-flat-button[disabled][disabled],.mat-mini-fab.mat-accent[disabled],.mat-mini-fab.mat-primary[disabled],.mat-mini-fab.mat-warn[disabled],.mat-mini-fab[disabled][disabled],.mat-raised-button.mat-accent[disabled],.mat-raised-button.mat-primary[disabled],.mat-raised-button.mat-warn[disabled],.mat-raised-button[disabled][disabled]{color:rgba(0,0,0,.26)}.mat-fab.mat-primary,.mat-flat-button.mat-primary,.mat-mini-fab.mat-primary,.mat-raised-button.mat-primary{background-color:#3f51b5}.mat-fab.mat-accent,.mat-flat-button.mat-accent,.mat-mini-fab.mat-accent,.mat-raised-button.mat-accent{background-color:#ff4081}.mat-fab.mat-warn,.mat-flat-button.mat-warn,.mat-mini-fab.mat-warn,.mat-raised-button.mat-warn{background-color:#f44336}.mat-fab.mat-accent[disabled],.mat-fab.mat-primary[disabled],.mat-fab.mat-warn[disabled],.mat-fab[disabled][disabled],.mat-flat-button.mat-accent[disabled],.mat-flat-button.mat-primary[disabled],.mat-flat-button.mat-warn[disabled],.mat-flat-button[disabled][disabled],.mat-mini-fab.mat-accent[disabled],.mat-mini-fab.mat-primary[disabled],.mat-mini-fab.mat-warn[disabled],.mat-mini-fab[disabled][disabled],.mat-raised-button.mat-accent[disabled],.mat-raised-button.mat-primary[disabled],.mat-raised-button.mat-warn[disabled],.mat-raised-button[disabled][disabled]{background-color:rgba(0,0,0,.12)}.mat-fab.mat-primary .mat-ripple-element,.mat-flat-button.mat-primary .mat-ripple-element,.mat-mini-fab.mat-primary .mat-ripple-element,.mat-raised-button.mat-primary .mat-ripple-element{background-color:rgba(255,255,255,.1)}.mat-fab.mat-accent .mat-ripple-element,.mat-flat-button.mat-accent .mat-ripple-element,.mat-mini-fab.mat-accent .mat-ripple-element,.mat-raised-button.mat-accent .mat-ripple-element{background-color:rgba(255,255,255,.1)}.mat-fab.mat-warn .mat-ripple-element,.mat-flat-button.mat-warn .mat-ripple-element,.mat-mini-fab.mat-warn .mat-ripple-element,.mat-raised-button.mat-warn .mat-ripple-element{background-color:rgba(255,255,255,.1)}.mat-icon-button.mat-primary .mat-ripple-element{background-color:rgba(63,81,181,.2)}.mat-icon-button.mat-accent .mat-ripple-element{background-color:rgba(255,64,129,.2)}.mat-icon-button.mat-warn .mat-ripple-element{background-color:rgba(244,67,54,.2)}.mat-flat-button:not([class*=mat-elevation-z]),.mat-stroked-button:not([class*=mat-elevation-z]){box-shadow:0 0 0 0 rgba(0,0,0,.2),0 0 0 0 rgba(0,0,0,.14),0 0 0 0 rgba(0,0,0,.12)}.mat-raised-button:not([class*=mat-elevation-z]){box-shadow:0 3px 1px -2px rgba(0,0,0,.2),0 2px 2px 0 rgba(0,0,0,.14),0 1px 5px 0 rgba(0,0,0,.12)}.mat-raised-button:not([disabled]):active:not([class*=mat-elevation-z]){box-shadow:0 5px 5px -3px rgba(0,0,0,.2),0 8px 10px 1px rgba(0,0,0,.14),0 3px 14px 2px rgba(0,0,0,.12)}.mat-raised-button[disabled]:not([class*=mat-elevation-z]){box-shadow:0 0 0 0 rgba(0,0,0,.2),0 0 0 0 rgba(0,0,0,.14),0 0 0 0 rgba(0,0,0,.12)}.mat-fab:not([class*=mat-elevation-z]),.mat-mini-fab:not([class*=mat-elevation-z]){box-shadow:0 3px 5px -1px rgba(0,0,0,.2),0 6px 10px 0 rgba(0,0,0,.14),0 1px 18px 0 rgba(0,0,0,.12)}.mat-fab:not([disabled]):active:not([class*=mat-elevation-z]),.mat-mini-fab:not([disabled]):active:not([class*=mat-elevation-z]){box-shadow:0 7px 8px -4px rgba(0,0,0,.2),0 12px 17px 2px rgba(0,0,0,.14),0 5px 22px 4px rgba(0,0,0,.12)}.mat-fab[disabled]:not([class*=mat-elevation-z]),.mat-mini-fab[disabled]:not([class*=mat-elevation-z]){box-shadow:0 0 0 0 rgba(0,0,0,.2),0 0 0 0 rgba(0,0,0,.14),0 0 0 0 rgba(0,0,0,.12)}.mat-button-toggle-group,.mat-button-toggle-standalone{box-shadow:0 3px 1px -2px rgba(0,0,0,.2),0 2px 2px 0 rgba(0,0,0,.14),0 1px 5px 0 rgba(0,0,0,.12)}.mat-button-toggle-group-appearance-standard,.mat-button-toggle-standalone.mat-button-toggle-appearance-standard{box-shadow:none}.mat-button-toggle{color:rgba(0,0,0,.38)}.mat-button-toggle .mat-button-toggle-focus-overlay{background-color:rgba(0,0,0,.12)}.mat-button-toggle-appearance-standard{color:rgba(0,0,0,.87);background:#fff}.mat-button-toggle-appearance-standard .mat-button-toggle-focus-overlay{background-color:#000}.mat-button-toggle-group-appearance-standard .mat-button-toggle+.mat-button-toggle{border-left:solid 1px rgba(0,0,0,.12)}[dir=rtl] .mat-button-toggle-group-appearance-standard .mat-button-toggle+.mat-button-toggle{border-left:none;border-right:solid 1px rgba(0,0,0,.12)}.mat-button-toggle-group-appearance-standard.mat-button-toggle-vertical .mat-button-toggle+.mat-button-toggle{border-left:none;border-right:none;border-top:solid 1px rgba(0,0,0,.12)}.mat-button-toggle-checked{background-color:#e0e0e0;color:rgba(0,0,0,.54)}.mat-button-toggle-checked.mat-button-toggle-appearance-standard{color:rgba(0,0,0,.87)}.mat-button-toggle-disabled{color:rgba(0,0,0,.26);background-color:#eee}.mat-button-toggle-disabled.mat-button-toggle-appearance-standard{background:#fff}.mat-button-toggle-disabled.mat-button-toggle-checked{background-color:#bdbdbd}.mat-button-toggle-group-appearance-standard,.mat-button-toggle-standalone.mat-button-toggle-appearance-standard{border:solid 1px rgba(0,0,0,.12)}.mat-card{background:#fff;color:rgba(0,0,0,.87)}.mat-card:not([class*=mat-elevation-z]){box-shadow:0 2px 1px -1px rgba(0,0,0,.2),0 1px 1px 0 rgba(0,0,0,.14),0 1px 3px 0 rgba(0,0,0,.12)}.mat-card.mat-card-flat:not([class*=mat-elevation-z]){box-shadow:0 0 0 0 rgba(0,0,0,.2),0 0 0 0 rgba(0,0,0,.14),0 0 0 0 rgba(0,0,0,.12)}.mat-card-subtitle{color:rgba(0,0,0,.54)}.mat-checkbox-frame{border-color:rgba(0,0,0,.54)}.mat-checkbox-checkmark{fill:#fafafa}.mat-checkbox-checkmark-path{stroke:#fafafa!important}@media screen and (-ms-high-contrast:black-on-white){.mat-checkbox-checkmark-path{stroke:#000!important}}.mat-checkbox-mixedmark{background-color:#fafafa}.mat-checkbox-checked.mat-primary .mat-checkbox-background,.mat-checkbox-indeterminate.mat-primary .mat-checkbox-background{background-color:#3f51b5}.mat-checkbox-checked.mat-accent .mat-checkbox-background,.mat-checkbox-indeterminate.mat-accent .mat-checkbox-background{background-color:#ff4081}.mat-checkbox-checked.mat-warn .mat-checkbox-background,.mat-checkbox-indeterminate.mat-warn .mat-checkbox-background{background-color:#f44336}.mat-checkbox-disabled.mat-checkbox-checked:not(.mat-checkbox-indeterminate) .mat-checkbox-background{background-color:#b0b0b0}.mat-checkbox-disabled:not(.mat-checkbox-checked) .mat-checkbox-frame{border-color:#b0b0b0}.mat-checkbox-disabled .mat-checkbox-label{color:#b0b0b0}@media screen and (-ms-high-contrast:active){.mat-checkbox-disabled{opacity:.5}}@media screen and (-ms-high-contrast:active){.mat-checkbox-background{background:0 0}}.mat-checkbox:not(.mat-checkbox-disabled).mat-primary .mat-checkbox-ripple .mat-ripple-element{background-color:#3f51b5}.mat-checkbox:not(.mat-checkbox-disabled).mat-accent .mat-checkbox-ripple .mat-ripple-element{background-color:#ff4081}.mat-checkbox:not(.mat-checkbox-disabled).mat-warn .mat-checkbox-ripple .mat-ripple-element{background-color:#f44336}.mat-chip.mat-standard-chip{background-color:#e0e0e0;color:rgba(0,0,0,.87)}.mat-chip.mat-standard-chip .mat-chip-remove{color:rgba(0,0,0,.87);opacity:.4}.mat-chip.mat-standard-chip .mat-chip-remove:hover{opacity:.54}.mat-chip.mat-standard-chip:focus{box-shadow:0 3px 3px -2px rgba(0,0,0,.2),0 3px 4px 0 rgba(0,0,0,.14),0 1px 8px 0 rgba(0,0,0,.12)}.mat-chip.mat-standard-chip.mat-chip-selected.mat-primary{background-color:#3f51b5;color:#fff}.mat-chip.mat-standard-chip.mat-chip-selected.mat-primary .mat-chip-remove{color:#fff;opacity:.4}.mat-chip.mat-standard-chip.mat-chip-selected.mat-primary .mat-chip-remove:hover{opacity:.54}.mat-chip.mat-standard-chip.mat-chip-selected.mat-warn{background-color:#f44336;color:#fff}.mat-chip.mat-standard-chip.mat-chip-selected.mat-warn .mat-chip-remove{color:#fff;opacity:.4}.mat-chip.mat-standard-chip.mat-chip-selected.mat-warn .mat-chip-remove:hover{opacity:.54}.mat-chip.mat-standard-chip.mat-chip-selected.mat-accent{background-color:#ff4081;color:#fff}.mat-chip.mat-standard-chip.mat-chip-selected.mat-accent .mat-chip-remove{color:#fff;opacity:.4}.mat-chip.mat-standard-chip.mat-chip-selected.mat-accent .mat-chip-remove:hover{opacity:.54}.mat-table{background:#fff}.mat-table tbody,.mat-table tfoot,.mat-table thead,.mat-table-sticky,[mat-footer-row],[mat-header-row],[mat-row],mat-footer-row,mat-header-row,mat-row{background:inherit}mat-footer-row,mat-header-row,mat-row,td.mat-cell,td.mat-footer-cell,th.mat-header-cell{border-bottom-color:rgba(0,0,0,.12)}.mat-header-cell{color:rgba(0,0,0,.54)}.mat-cell,.mat-footer-cell{color:rgba(0,0,0,.87)}.mat-calendar-arrow{border-top-color:rgba(0,0,0,.54)}.mat-datepicker-content .mat-calendar-next-button,.mat-datepicker-content .mat-calendar-previous-button,.mat-datepicker-toggle{color:rgba(0,0,0,.54)}.mat-calendar-table-header{color:rgba(0,0,0,.38)}.mat-calendar-table-header-divider::after{background:rgba(0,0,0,.12)}.mat-calendar-body-label{color:rgba(0,0,0,.54)}.mat-calendar-body-cell-content{color:rgba(0,0,0,.87);border-color:transparent}.mat-calendar-body-disabled>.mat-calendar-body-cell-content:not(.mat-calendar-body-selected){color:rgba(0,0,0,.38)}.cdk-keyboard-focused .mat-calendar-body-active>.mat-calendar-body-cell-content:not(.mat-calendar-body-selected),.cdk-program-focused .mat-calendar-body-active>.mat-calendar-body-cell-content:not(.mat-calendar-body-selected),.mat-calendar-body-cell:not(.mat-calendar-body-disabled):hover>.mat-calendar-body-cell-content:not(.mat-calendar-body-selected){background-color:rgba(0,0,0,.04)}.mat-calendar-body-today:not(.mat-calendar-body-selected){border-color:rgba(0,0,0,.38)}.mat-calendar-body-disabled>.mat-calendar-body-today:not(.mat-calendar-body-selected){border-color:rgba(0,0,0,.18)}.mat-calendar-body-selected{background-color:#3f51b5;color:#fff}.mat-calendar-body-disabled>.mat-calendar-body-selected{background-color:rgba(63,81,181,.4)}.mat-calendar-body-today.mat-calendar-body-selected{box-shadow:inset 0 0 0 1px #fff}.mat-datepicker-content{box-shadow:0 2px 4px -1px rgba(0,0,0,.2),0 4px 5px 0 rgba(0,0,0,.14),0 1px 10px 0 rgba(0,0,0,.12);background-color:#fff;color:rgba(0,0,0,.87)}.mat-datepicker-content.mat-accent .mat-calendar-body-selected{background-color:#ff4081;color:#fff}.mat-datepicker-content.mat-accent .mat-calendar-body-disabled>.mat-calendar-body-selected{background-color:rgba(255,64,129,.4)}.mat-datepicker-content.mat-accent .mat-calendar-body-today.mat-calendar-body-selected{box-shadow:inset 0 0 0 1px #fff}.mat-datepicker-content.mat-warn .mat-calendar-body-selected{background-color:#f44336;color:#fff}.mat-datepicker-content.mat-warn .mat-calendar-body-disabled>.mat-calendar-body-selected{background-color:rgba(244,67,54,.4)}.mat-datepicker-content.mat-warn .mat-calendar-body-today.mat-calendar-body-selected{box-shadow:inset 0 0 0 1px #fff}.mat-datepicker-content-touch{box-shadow:0 0 0 0 rgba(0,0,0,.2),0 0 0 0 rgba(0,0,0,.14),0 0 0 0 rgba(0,0,0,.12)}.mat-datepicker-toggle-active{color:#3f51b5}.mat-datepicker-toggle-active.mat-accent{color:#ff4081}.mat-datepicker-toggle-active.mat-warn{color:#f44336}.mat-dialog-container{box-shadow:0 11px 15px -7px rgba(0,0,0,.2),0 24px 38px 3px rgba(0,0,0,.14),0 9px 46px 8px rgba(0,0,0,.12);background:#fff;color:rgba(0,0,0,.87)}.mat-divider{border-top-color:rgba(0,0,0,.12)}.mat-divider-vertical{border-right-color:rgba(0,0,0,.12)}.mat-expansion-panel{background:#fff;color:rgba(0,0,0,.87)}.mat-expansion-panel:not([class*=mat-elevation-z]){box-shadow:0 3px 1px -2px rgba(0,0,0,.2),0 2px 2px 0 rgba(0,0,0,.14),0 1px 5px 0 rgba(0,0,0,.12)}.mat-action-row{border-top-color:rgba(0,0,0,.12)}.mat-expansion-panel:not(.mat-expanded) .mat-expansion-panel-header:not([aria-disabled=true]).cdk-keyboard-focused,.mat-expansion-panel:not(.mat-expanded) .mat-expansion-panel-header:not([aria-disabled=true]).cdk-program-focused,.mat-expansion-panel:not(.mat-expanded) .mat-expansion-panel-header:not([aria-disabled=true]):hover{background:rgba(0,0,0,.04)}@media (hover:none){.mat-expansion-panel:not(.mat-expanded):not([aria-disabled=true]) .mat-expansion-panel-header:hover{background:#fff}}.mat-expansion-panel-header-title{color:rgba(0,0,0,.87)}.mat-expansion-indicator::after,.mat-expansion-panel-header-description{color:rgba(0,0,0,.54)}.mat-expansion-panel-header[aria-disabled=true]{color:rgba(0,0,0,.26)}.mat-expansion-panel-header[aria-disabled=true] .mat-expansion-panel-header-description,.mat-expansion-panel-header[aria-disabled=true] .mat-expansion-panel-header-title{color:inherit}.mat-form-field-label{color:rgba(0,0,0,.6)}.mat-hint{color:rgba(0,0,0,.6)}.mat-form-field.mat-focused .mat-form-field-label{color:#3f51b5}.mat-form-field.mat-focused .mat-form-field-label.mat-accent{color:#ff4081}.mat-form-field.mat-focused .mat-form-field-label.mat-warn{color:#f44336}.mat-focused .mat-form-field-required-marker{color:#ff4081}.mat-form-field-ripple{background-color:rgba(0,0,0,.87)}.mat-form-field.mat-focused .mat-form-field-ripple{background-color:#3f51b5}.mat-form-field.mat-focused .mat-form-field-ripple.mat-accent{background-color:#ff4081}.mat-form-field.mat-focused .mat-form-field-ripple.mat-warn{background-color:#f44336}.mat-form-field.mat-form-field-invalid .mat-form-field-label{color:#f44336}.mat-form-field.mat-form-field-invalid .mat-form-field-label .mat-form-field-required-marker,.mat-form-field.mat-form-field-invalid .mat-form-field-label.mat-accent{color:#f44336}.mat-form-field.mat-form-field-invalid .mat-form-field-ripple,.mat-form-field.mat-form-field-invalid .mat-form-field-ripple.mat-accent{background-color:#f44336}.mat-error{color:#f44336}.mat-form-field-appearance-legacy .mat-form-field-label{color:rgba(0,0,0,.54)}.mat-form-field-appearance-legacy .mat-hint{color:rgba(0,0,0,.54)}.mat-form-field-appearance-legacy .mat-form-field-underline{background-color:rgba(0,0,0,.42)}.mat-form-field-appearance-legacy.mat-form-field-disabled .mat-form-field-underline{background-image:linear-gradient(to right,rgba(0,0,0,.42) 0,rgba(0,0,0,.42) 33%,transparent 0);background-size:4px 100%;background-repeat:repeat-x}.mat-form-field-appearance-standard .mat-form-field-underline{background-color:rgba(0,0,0,.42)}.mat-form-field-appearance-standard.mat-form-field-disabled .mat-form-field-underline{background-image:linear-gradient(to right,rgba(0,0,0,.42) 0,rgba(0,0,0,.42) 33%,transparent 0);background-size:4px 100%;background-repeat:repeat-x}.mat-form-field-appearance-fill .mat-form-field-flex{background-color:rgba(0,0,0,.04)}.mat-form-field-appearance-fill.mat-form-field-disabled .mat-form-field-flex{background-color:rgba(0,0,0,.02)}.mat-form-field-appearance-fill .mat-form-field-underline::before{background-color:rgba(0,0,0,.42)}.mat-form-field-appearance-fill.mat-form-field-disabled .mat-form-field-label{color:rgba(0,0,0,.38)}.mat-form-field-appearance-fill.mat-form-field-disabled .mat-form-field-underline::before{background-color:transparent}.mat-form-field-appearance-outline .mat-form-field-outline{color:rgba(0,0,0,.12)}.mat-form-field-appearance-outline .mat-form-field-outline-thick{color:rgba(0,0,0,.87)}.mat-form-field-appearance-outline.mat-focused .mat-form-field-outline-thick{color:#3f51b5}.mat-form-field-appearance-outline.mat-focused.mat-accent .mat-form-field-outline-thick{color:#ff4081}.mat-form-field-appearance-outline.mat-focused.mat-warn .mat-form-field-outline-thick{color:#f44336}.mat-form-field-appearance-outline.mat-form-field-invalid.mat-form-field-invalid .mat-form-field-outline-thick{color:#f44336}.mat-form-field-appearance-outline.mat-form-field-disabled .mat-form-field-label{color:rgba(0,0,0,.38)}.mat-form-field-appearance-outline.mat-form-field-disabled .mat-form-field-outline{color:rgba(0,0,0,.06)}.mat-icon.mat-primary{color:#3f51b5}.mat-icon.mat-accent{color:#ff4081}.mat-icon.mat-warn{color:#f44336}.mat-form-field-type-mat-native-select .mat-form-field-infix::after{color:rgba(0,0,0,.54)}.mat-form-field-type-mat-native-select.mat-form-field-disabled .mat-form-field-infix::after,.mat-input-element:disabled{color:rgba(0,0,0,.38)}.mat-input-element{caret-color:#3f51b5}.mat-input-element::-webkit-input-placeholder{color:rgba(0,0,0,.42)}.mat-input-element::-ms-input-placeholder{color:rgba(0,0,0,.42)}.mat-input-element::placeholder{color:rgba(0,0,0,.42)}.mat-input-element::-moz-placeholder{color:rgba(0,0,0,.42)}.mat-input-element::-webkit-input-placeholder{color:rgba(0,0,0,.42)}.mat-input-element:-ms-input-placeholder{color:rgba(0,0,0,.42)}.mat-accent .mat-input-element{caret-color:#ff4081}.mat-form-field-invalid .mat-input-element,.mat-warn .mat-input-element{caret-color:#f44336}.mat-form-field-type-mat-native-select.mat-form-field-invalid .mat-form-field-infix::after{color:#f44336}.mat-list .mat-list-item,.mat-nav-list .mat-list-item,.mat-selection-list .mat-list-item{color:rgba(0,0,0,.87)}.mat-list .mat-list-option,.mat-nav-list .mat-list-option,.mat-selection-list .mat-list-option{color:rgba(0,0,0,.87)}.mat-list .mat-subheader,.mat-nav-list .mat-subheader,.mat-selection-list .mat-subheader{color:rgba(0,0,0,.54)}.mat-list-item-disabled{background-color:#eee}.mat-list-option:focus,.mat-list-option:hover,.mat-nav-list .mat-list-item:focus,.mat-nav-list .mat-list-item:hover{background:rgba(0,0,0,.04)}.mat-menu-panel{background:#fff}.mat-menu-panel:not([class*=mat-elevation-z]){box-shadow:0 2px 4px -1px rgba(0,0,0,.2),0 4px 5px 0 rgba(0,0,0,.14),0 1px 10px 0 rgba(0,0,0,.12)}.mat-menu-item{background:0 0;color:rgba(0,0,0,.87)}.mat-menu-item[disabled],.mat-menu-item[disabled]::after{color:rgba(0,0,0,.38)}.mat-menu-item .mat-icon:not([color]),.mat-menu-item-submenu-trigger::after{color:rgba(0,0,0,.54)}.mat-menu-item-highlighted:not([disabled]),.mat-menu-item.cdk-keyboard-focused:not([disabled]),.mat-menu-item.cdk-program-focused:not([disabled]),.mat-menu-item:hover:not([disabled]){background:rgba(0,0,0,.04)}.mat-paginator{background:#fff}.mat-paginator,.mat-paginator-page-size .mat-select-trigger{color:rgba(0,0,0,.54)}.mat-paginator-decrement,.mat-paginator-increment{border-top:2px solid rgba(0,0,0,.54);border-right:2px solid rgba(0,0,0,.54)}.mat-paginator-first,.mat-paginator-last{border-top:2px solid rgba(0,0,0,.54)}.mat-icon-button[disabled] .mat-paginator-decrement,.mat-icon-button[disabled] .mat-paginator-first,.mat-icon-button[disabled] .mat-paginator-increment,.mat-icon-button[disabled] .mat-paginator-last{border-color:rgba(0,0,0,.38)}.mat-progress-bar-background{fill:#c5cae9}.mat-progress-bar-buffer{background-color:#c5cae9}.mat-progress-bar-fill::after{background-color:#3f51b5}.mat-progress-bar.mat-accent .mat-progress-bar-background{fill:#ff80ab}.mat-progress-bar.mat-accent .mat-progress-bar-buffer{background-color:#ff80ab}.mat-progress-bar.mat-accent .mat-progress-bar-fill::after{background-color:#ff4081}.mat-progress-bar.mat-warn .mat-progress-bar-background{fill:#ffcdd2}.mat-progress-bar.mat-warn .mat-progress-bar-buffer{background-color:#ffcdd2}.mat-progress-bar.mat-warn .mat-progress-bar-fill::after{background-color:#f44336}.mat-progress-spinner circle,.mat-spinner circle{stroke:#3f51b5}.mat-progress-spinner.mat-accent circle,.mat-spinner.mat-accent circle{stroke:#ff4081}.mat-progress-spinner.mat-warn circle,.mat-spinner.mat-warn circle{stroke:#f44336}.mat-radio-outer-circle{border-color:rgba(0,0,0,.54)}.mat-radio-button.mat-primary.mat-radio-checked .mat-radio-outer-circle{border-color:#3f51b5}.mat-radio-button.mat-primary .mat-radio-inner-circle,.mat-radio-button.mat-primary .mat-radio-ripple .mat-ripple-element:not(.mat-radio-persistent-ripple),.mat-radio-button.mat-primary.mat-radio-checked .mat-radio-persistent-ripple,.mat-radio-button.mat-primary:active .mat-radio-persistent-ripple{background-color:#3f51b5}.mat-radio-button.mat-accent.mat-radio-checked .mat-radio-outer-circle{border-color:#ff4081}.mat-radio-button.mat-accent .mat-radio-inner-circle,.mat-radio-button.mat-accent .mat-radio-ripple .mat-ripple-element:not(.mat-radio-persistent-ripple),.mat-radio-button.mat-accent.mat-radio-checked .mat-radio-persistent-ripple,.mat-radio-button.mat-accent:active .mat-radio-persistent-ripple{background-color:#ff4081}.mat-radio-button.mat-warn.mat-radio-checked .mat-radio-outer-circle{border-color:#f44336}.mat-radio-button.mat-warn .mat-radio-inner-circle,.mat-radio-button.mat-warn .mat-radio-ripple .mat-ripple-element:not(.mat-radio-persistent-ripple),.mat-radio-button.mat-warn.mat-radio-checked .mat-radio-persistent-ripple,.mat-radio-button.mat-warn:active .mat-radio-persistent-ripple{background-color:#f44336}.mat-radio-button.mat-radio-disabled .mat-radio-outer-circle,.mat-radio-button.mat-radio-disabled.mat-radio-checked .mat-radio-outer-circle{border-color:rgba(0,0,0,.38)}.mat-radio-button.mat-radio-disabled .mat-radio-inner-circle,.mat-radio-button.mat-radio-disabled .mat-radio-ripple .mat-ripple-element{background-color:rgba(0,0,0,.38)}.mat-radio-button.mat-radio-disabled .mat-radio-label-content{color:rgba(0,0,0,.38)}.mat-radio-button .mat-ripple-element{background-color:#000}.mat-select-value{color:rgba(0,0,0,.87)}.mat-select-placeholder{color:rgba(0,0,0,.42)}.mat-select-disabled .mat-select-value{color:rgba(0,0,0,.38)}.mat-select-arrow{color:rgba(0,0,0,.54)}.mat-select-panel{background:#fff}.mat-select-panel:not([class*=mat-elevation-z]){box-shadow:0 2px 4px -1px rgba(0,0,0,.2),0 4px 5px 0 rgba(0,0,0,.14),0 1px 10px 0 rgba(0,0,0,.12)}.mat-select-panel .mat-option.mat-selected:not(.mat-option-multiple){background:rgba(0,0,0,.12)}.mat-form-field.mat-focused.mat-primary .mat-select-arrow{color:#3f51b5}.mat-form-field.mat-focused.mat-accent .mat-select-arrow{color:#ff4081}.mat-form-field.mat-focused.mat-warn .mat-select-arrow{color:#f44336}.mat-form-field .mat-select.mat-select-invalid .mat-select-arrow{color:#f44336}.mat-form-field .mat-select.mat-select-disabled .mat-select-arrow{color:rgba(0,0,0,.38)}.mat-drawer-container{background-color:#fafafa;color:rgba(0,0,0,.87)}.mat-drawer{background-color:#fff;color:rgba(0,0,0,.87)}.mat-drawer.mat-drawer-push{background-color:#fff}.mat-drawer:not(.mat-drawer-side){box-shadow:0 8px 10px -5px rgba(0,0,0,.2),0 16px 24px 2px rgba(0,0,0,.14),0 6px 30px 5px rgba(0,0,0,.12)}.mat-drawer-side{border-right:solid 1px rgba(0,0,0,.12)}.mat-drawer-side.mat-drawer-end{border-left:solid 1px rgba(0,0,0,.12);border-right:none}[dir=rtl] .mat-drawer-side{border-left:solid 1px rgba(0,0,0,.12);border-right:none}[dir=rtl] .mat-drawer-side.mat-drawer-end{border-left:none;border-right:solid 1px rgba(0,0,0,.12)}.mat-drawer-backdrop.mat-drawer-shown{background-color:rgba(0,0,0,.6)}.mat-slide-toggle.mat-checked:not(.mat-disabled) .mat-slide-toggle-thumb{background-color:#ff4081}.mat-slide-toggle.mat-checked:not(.mat-disabled) .mat-slide-toggle-bar{background-color:rgba(255,64,129,.54)}.mat-slide-toggle.mat-checked:not(.mat-disabled) .mat-ripple-element{background-color:#ff4081}.mat-slide-toggle.mat-primary.mat-checked:not(.mat-disabled) .mat-slide-toggle-thumb{background-color:#3f51b5}.mat-slide-toggle.mat-primary.mat-checked:not(.mat-disabled) .mat-slide-toggle-bar{background-color:rgba(63,81,181,.54)}.mat-slide-toggle.mat-primary.mat-checked:not(.mat-disabled) .mat-ripple-element{background-color:#3f51b5}.mat-slide-toggle.mat-warn.mat-checked:not(.mat-disabled) .mat-slide-toggle-thumb{background-color:#f44336}.mat-slide-toggle.mat-warn.mat-checked:not(.mat-disabled) .mat-slide-toggle-bar{background-color:rgba(244,67,54,.54)}.mat-slide-toggle.mat-warn.mat-checked:not(.mat-disabled) .mat-ripple-element{background-color:#f44336}.mat-slide-toggle:not(.mat-checked) .mat-ripple-element{background-color:#000}.mat-disabled .mat-slide-toggle-thumb{background-color:#bdbdbd}.mat-disabled .mat-slide-toggle-bar{background-color:rgba(0,0,0,.1)}.mat-slide-toggle-thumb{box-shadow:0 2px 1px -1px rgba(0,0,0,.2),0 1px 1px 0 rgba(0,0,0,.14),0 1px 3px 0 rgba(0,0,0,.12);background-color:#fafafa}.mat-slide-toggle-bar{background-color:rgba(0,0,0,.38)}.mat-slider-track-background{background-color:rgba(0,0,0,.26)}.mat-primary .mat-slider-thumb,.mat-primary .mat-slider-thumb-label,.mat-primary .mat-slider-track-fill{background-color:#3f51b5}.mat-primary .mat-slider-thumb-label-text{color:#fff}.mat-accent .mat-slider-thumb,.mat-accent .mat-slider-thumb-label,.mat-accent .mat-slider-track-fill{background-color:#ff4081}.mat-accent .mat-slider-thumb-label-text{color:#fff}.mat-warn .mat-slider-thumb,.mat-warn .mat-slider-thumb-label,.mat-warn .mat-slider-track-fill{background-color:#f44336}.mat-warn .mat-slider-thumb-label-text{color:#fff}.mat-slider-focus-ring{background-color:rgba(255,64,129,.2)}.cdk-focused .mat-slider-track-background,.mat-slider:hover .mat-slider-track-background{background-color:rgba(0,0,0,.38)}.mat-slider-disabled .mat-slider-thumb,.mat-slider-disabled .mat-slider-track-background,.mat-slider-disabled .mat-slider-track-fill{background-color:rgba(0,0,0,.26)}.mat-slider-disabled:hover .mat-slider-track-background{background-color:rgba(0,0,0,.26)}.mat-slider-min-value .mat-slider-focus-ring{background-color:rgba(0,0,0,.12)}.mat-slider-min-value.mat-slider-thumb-label-showing .mat-slider-thumb,.mat-slider-min-value.mat-slider-thumb-label-showing .mat-slider-thumb-label{background-color:rgba(0,0,0,.87)}.mat-slider-min-value.mat-slider-thumb-label-showing.cdk-focused .mat-slider-thumb,.mat-slider-min-value.mat-slider-thumb-label-showing.cdk-focused .mat-slider-thumb-label{background-color:rgba(0,0,0,.26)}.mat-slider-min-value:not(.mat-slider-thumb-label-showing) .mat-slider-thumb{border-color:rgba(0,0,0,.26);background-color:transparent}.mat-slider-min-value:not(.mat-slider-thumb-label-showing).cdk-focused .mat-slider-thumb,.mat-slider-min-value:not(.mat-slider-thumb-label-showing):hover .mat-slider-thumb{border-color:rgba(0,0,0,.38)}.mat-slider-min-value:not(.mat-slider-thumb-label-showing).cdk-focused.mat-slider-disabled .mat-slider-thumb,.mat-slider-min-value:not(.mat-slider-thumb-label-showing):hover.mat-slider-disabled .mat-slider-thumb{border-color:rgba(0,0,0,.26)}.mat-slider-has-ticks .mat-slider-wrapper::after{border-color:rgba(0,0,0,.7)}.mat-slider-horizontal .mat-slider-ticks{background-image:repeating-linear-gradient(to right,rgba(0,0,0,.7),rgba(0,0,0,.7) 2px,transparent 0,transparent);background-image:-moz-repeating-linear-gradient(.0001deg,rgba(0,0,0,.7),rgba(0,0,0,.7) 2px,transparent 0,transparent)}.mat-slider-vertical .mat-slider-ticks{background-image:repeating-linear-gradient(to bottom,rgba(0,0,0,.7),rgba(0,0,0,.7) 2px,transparent 0,transparent)}.mat-step-header.cdk-keyboard-focused,.mat-step-header.cdk-program-focused,.mat-step-header:hover{background-color:rgba(0,0,0,.04)}.mat-step-header .mat-step-label,.mat-step-header .mat-step-optional{color:rgba(0,0,0,.38)}.mat-step-header .mat-step-icon{background-color:rgba(0,0,0,.38);color:#fff}.mat-step-header .mat-step-icon-selected,.mat-step-header .mat-step-icon-state-done,.mat-step-header .mat-step-icon-state-edit{background-color:#3f51b5;color:#fff}.mat-step-header .mat-step-icon-state-error{background-color:transparent;color:#f44336}.mat-step-header .mat-step-label.mat-step-label-active{color:rgba(0,0,0,.87)}.mat-step-header .mat-step-label.mat-step-label-error{color:#f44336}.mat-stepper-horizontal,.mat-stepper-vertical{background-color:#fff}.mat-stepper-vertical-line::before{border-left-color:rgba(0,0,0,.12)}.mat-stepper-horizontal-line{border-top-color:rgba(0,0,0,.12)}.mat-sort-header-arrow{color:#757575}.mat-tab-header,.mat-tab-nav-bar{border-bottom:1px solid rgba(0,0,0,.12)}.mat-tab-group-inverted-header .mat-tab-header,.mat-tab-group-inverted-header .mat-tab-nav-bar{border-top:1px solid rgba(0,0,0,.12);border-bottom:none}.mat-tab-label,.mat-tab-link{color:rgba(0,0,0,.87)}.mat-tab-label.mat-tab-disabled,.mat-tab-link.mat-tab-disabled{color:rgba(0,0,0,.38)}.mat-tab-header-pagination-chevron{border-color:rgba(0,0,0,.87)}.mat-tab-header-pagination-disabled .mat-tab-header-pagination-chevron{border-color:rgba(0,0,0,.38)}.mat-tab-group[class*=mat-background-] .mat-tab-header,.mat-tab-nav-bar[class*=mat-background-]{border-bottom:none;border-top:none}.mat-tab-group.mat-primary .mat-tab-label.cdk-keyboard-focused:not(.mat-tab-disabled),.mat-tab-group.mat-primary .mat-tab-label.cdk-program-focused:not(.mat-tab-disabled),.mat-tab-group.mat-primary .mat-tab-link.cdk-keyboard-focused:not(.mat-tab-disabled),.mat-tab-group.mat-primary .mat-tab-link.cdk-program-focused:not(.mat-tab-disabled),.mat-tab-nav-bar.mat-primary .mat-tab-label.cdk-keyboard-focused:not(.mat-tab-disabled),.mat-tab-nav-bar.mat-primary .mat-tab-label.cdk-program-focused:not(.mat-tab-disabled),.mat-tab-nav-bar.mat-primary .mat-tab-link.cdk-keyboard-focused:not(.mat-tab-disabled),.mat-tab-nav-bar.mat-primary .mat-tab-link.cdk-program-focused:not(.mat-tab-disabled){background-color:rgba(197,202,233,.3)}.mat-tab-group.mat-primary .mat-ink-bar,.mat-tab-nav-bar.mat-primary .mat-ink-bar{background-color:#3f51b5}.mat-tab-group.mat-primary.mat-background-primary .mat-ink-bar,.mat-tab-nav-bar.mat-primary.mat-background-primary .mat-ink-bar{background-color:#fff}.mat-tab-group.mat-accent .mat-tab-label.cdk-keyboard-focused:not(.mat-tab-disabled),.mat-tab-group.mat-accent .mat-tab-label.cdk-program-focused:not(.mat-tab-disabled),.mat-tab-group.mat-accent .mat-tab-link.cdk-keyboard-focused:not(.mat-tab-disabled),.mat-tab-group.mat-accent .mat-tab-link.cdk-program-focused:not(.mat-tab-disabled),.mat-tab-nav-bar.mat-accent .mat-tab-label.cdk-keyboard-focused:not(.mat-tab-disabled),.mat-tab-nav-bar.mat-accent .mat-tab-label.cdk-program-focused:not(.mat-tab-disabled),.mat-tab-nav-bar.mat-accent .mat-tab-link.cdk-keyboard-focused:not(.mat-tab-disabled),.mat-tab-nav-bar.mat-accent .mat-tab-link.cdk-program-focused:not(.mat-tab-disabled){background-color:rgba(255,128,171,.3)}.mat-tab-group.mat-accent .mat-ink-bar,.mat-tab-nav-bar.mat-accent .mat-ink-bar{background-color:#ff4081}.mat-tab-group.mat-accent.mat-background-accent .mat-ink-bar,.mat-tab-nav-bar.mat-accent.mat-background-accent .mat-ink-bar{background-color:#fff}.mat-tab-group.mat-warn .mat-tab-label.cdk-keyboard-focused:not(.mat-tab-disabled),.mat-tab-group.mat-warn .mat-tab-label.cdk-program-focused:not(.mat-tab-disabled),.mat-tab-group.mat-warn .mat-tab-link.cdk-keyboard-focused:not(.mat-tab-disabled),.mat-tab-group.mat-warn .mat-tab-link.cdk-program-focused:not(.mat-tab-disabled),.mat-tab-nav-bar.mat-warn .mat-tab-label.cdk-keyboard-focused:not(.mat-tab-disabled),.mat-tab-nav-bar.mat-warn .mat-tab-label.cdk-program-focused:not(.mat-tab-disabled),.mat-tab-nav-bar.mat-warn .mat-tab-link.cdk-keyboard-focused:not(.mat-tab-disabled),.mat-tab-nav-bar.mat-warn .mat-tab-link.cdk-program-focused:not(.mat-tab-disabled){background-color:rgba(255,205,210,.3)}.mat-tab-group.mat-warn .mat-ink-bar,.mat-tab-nav-bar.mat-warn .mat-ink-bar{background-color:#f44336}.mat-tab-group.mat-warn.mat-background-warn .mat-ink-bar,.mat-tab-nav-bar.mat-warn.mat-background-warn .mat-ink-bar{background-color:#fff}.mat-tab-group.mat-background-primary .mat-tab-label.cdk-keyboard-focused:not(.mat-tab-disabled),.mat-tab-group.mat-background-primary .mat-tab-label.cdk-program-focused:not(.mat-tab-disabled),.mat-tab-group.mat-background-primary .mat-tab-link.cdk-keyboard-focused:not(.mat-tab-disabled),.mat-tab-group.mat-background-primary .mat-tab-link.cdk-program-focused:not(.mat-tab-disabled),.mat-tab-nav-bar.mat-background-primary .mat-tab-label.cdk-keyboard-focused:not(.mat-tab-disabled),.mat-tab-nav-bar.mat-background-primary .mat-tab-label.cdk-program-focused:not(.mat-tab-disabled),.mat-tab-nav-bar.mat-background-primary .mat-tab-link.cdk-keyboard-focused:not(.mat-tab-disabled),.mat-tab-nav-bar.mat-background-primary .mat-tab-link.cdk-program-focused:not(.mat-tab-disabled){background-color:rgba(197,202,233,.3)}.mat-tab-group.mat-background-primary .mat-tab-header,.mat-tab-group.mat-background-primary .mat-tab-links,.mat-tab-nav-bar.mat-background-primary .mat-tab-header,.mat-tab-nav-bar.mat-background-primary .mat-tab-links{background-color:#3f51b5}.mat-tab-group.mat-background-primary .mat-tab-label,.mat-tab-group.mat-background-primary .mat-tab-link,.mat-tab-nav-bar.mat-background-primary .mat-tab-label,.mat-tab-nav-bar.mat-background-primary .mat-tab-link{color:#fff}.mat-tab-group.mat-background-primary .mat-tab-label.mat-tab-disabled,.mat-tab-group.mat-background-primary .mat-tab-link.mat-tab-disabled,.mat-tab-nav-bar.mat-background-primary .mat-tab-label.mat-tab-disabled,.mat-tab-nav-bar.mat-background-primary .mat-tab-link.mat-tab-disabled{color:rgba(255,255,255,.4)}.mat-tab-group.mat-background-primary .mat-tab-header-pagination-chevron,.mat-tab-nav-bar.mat-background-primary .mat-tab-header-pagination-chevron{border-color:#fff}.mat-tab-group.mat-background-primary .mat-tab-header-pagination-disabled .mat-tab-header-pagination-chevron,.mat-tab-nav-bar.mat-background-primary .mat-tab-header-pagination-disabled .mat-tab-header-pagination-chevron{border-color:rgba(255,255,255,.4)}.mat-tab-group.mat-background-primary .mat-ripple-element,.mat-tab-nav-bar.mat-background-primary .mat-ripple-element{background-color:rgba(255,255,255,.12)}.mat-tab-group.mat-background-accent .mat-tab-label.cdk-keyboard-focused:not(.mat-tab-disabled),.mat-tab-group.mat-background-accent .mat-tab-label.cdk-program-focused:not(.mat-tab-disabled),.mat-tab-group.mat-background-accent .mat-tab-link.cdk-keyboard-focused:not(.mat-tab-disabled),.mat-tab-group.mat-background-accent .mat-tab-link.cdk-program-focused:not(.mat-tab-disabled),.mat-tab-nav-bar.mat-background-accent .mat-tab-label.cdk-keyboard-focused:not(.mat-tab-disabled),.mat-tab-nav-bar.mat-background-accent .mat-tab-label.cdk-program-focused:not(.mat-tab-disabled),.mat-tab-nav-bar.mat-background-accent .mat-tab-link.cdk-keyboard-focused:not(.mat-tab-disabled),.mat-tab-nav-bar.mat-background-accent .mat-tab-link.cdk-program-focused:not(.mat-tab-disabled){background-color:rgba(255,128,171,.3)}.mat-tab-group.mat-background-accent .mat-tab-header,.mat-tab-group.mat-background-accent .mat-tab-links,.mat-tab-nav-bar.mat-background-accent .mat-tab-header,.mat-tab-nav-bar.mat-background-accent .mat-tab-links{background-color:#ff4081}.mat-tab-group.mat-background-accent .mat-tab-label,.mat-tab-group.mat-background-accent .mat-tab-link,.mat-tab-nav-bar.mat-background-accent .mat-tab-label,.mat-tab-nav-bar.mat-background-accent .mat-tab-link{color:#fff}.mat-tab-group.mat-background-accent .mat-tab-label.mat-tab-disabled,.mat-tab-group.mat-background-accent .mat-tab-link.mat-tab-disabled,.mat-tab-nav-bar.mat-background-accent .mat-tab-label.mat-tab-disabled,.mat-tab-nav-bar.mat-background-accent .mat-tab-link.mat-tab-disabled{color:rgba(255,255,255,.4)}.mat-tab-group.mat-background-accent .mat-tab-header-pagination-chevron,.mat-tab-nav-bar.mat-background-accent .mat-tab-header-pagination-chevron{border-color:#fff}.mat-tab-group.mat-background-accent .mat-tab-header-pagination-disabled .mat-tab-header-pagination-chevron,.mat-tab-nav-bar.mat-background-accent .mat-tab-header-pagination-disabled .mat-tab-header-pagination-chevron{border-color:rgba(255,255,255,.4)}.mat-tab-group.mat-background-accent .mat-ripple-element,.mat-tab-nav-bar.mat-background-accent .mat-ripple-element{background-color:rgba(255,255,255,.12)}.mat-tab-group.mat-background-warn .mat-tab-label.cdk-keyboard-focused:not(.mat-tab-disabled),.mat-tab-group.mat-background-warn .mat-tab-label.cdk-program-focused:not(.mat-tab-disabled),.mat-tab-group.mat-background-warn .mat-tab-link.cdk-keyboard-focused:not(.mat-tab-disabled),.mat-tab-group.mat-background-warn .mat-tab-link.cdk-program-focused:not(.mat-tab-disabled),.mat-tab-nav-bar.mat-background-warn .mat-tab-label.cdk-keyboard-focused:not(.mat-tab-disabled),.mat-tab-nav-bar.mat-background-warn .mat-tab-label.cdk-program-focused:not(.mat-tab-disabled),.mat-tab-nav-bar.mat-background-warn .mat-tab-link.cdk-keyboard-focused:not(.mat-tab-disabled),.mat-tab-nav-bar.mat-background-warn .mat-tab-link.cdk-program-focused:not(.mat-tab-disabled){background-color:rgba(255,205,210,.3)}.mat-tab-group.mat-background-warn .mat-tab-header,.mat-tab-group.mat-background-warn .mat-tab-links,.mat-tab-nav-bar.mat-background-warn .mat-tab-header,.mat-tab-nav-bar.mat-background-warn .mat-tab-links{background-color:#f44336}.mat-tab-group.mat-background-warn .mat-tab-label,.mat-tab-group.mat-background-warn .mat-tab-link,.mat-tab-nav-bar.mat-background-warn .mat-tab-label,.mat-tab-nav-bar.mat-background-warn .mat-tab-link{color:#fff}.mat-tab-group.mat-background-warn .mat-tab-label.mat-tab-disabled,.mat-tab-group.mat-background-warn .mat-tab-link.mat-tab-disabled,.mat-tab-nav-bar.mat-background-warn .mat-tab-label.mat-tab-disabled,.mat-tab-nav-bar.mat-background-warn .mat-tab-link.mat-tab-disabled{color:rgba(255,255,255,.4)}.mat-tab-group.mat-background-warn .mat-tab-header-pagination-chevron,.mat-tab-nav-bar.mat-background-warn .mat-tab-header-pagination-chevron{border-color:#fff}.mat-tab-group.mat-background-warn .mat-tab-header-pagination-disabled .mat-tab-header-pagination-chevron,.mat-tab-nav-bar.mat-background-warn .mat-tab-header-pagination-disabled .mat-tab-header-pagination-chevron{border-color:rgba(255,255,255,.4)}.mat-tab-group.mat-background-warn .mat-ripple-element,.mat-tab-nav-bar.mat-background-warn .mat-ripple-element{background-color:rgba(255,255,255,.12)}.mat-toolbar{background:#f5f5f5;color:rgba(0,0,0,.87)}.mat-toolbar.mat-primary{background:#3f51b5;color:#fff}.mat-toolbar.mat-accent{background:#ff4081;color:#fff}.mat-toolbar.mat-warn{background:#f44336;color:#fff}.mat-toolbar .mat-focused .mat-form-field-ripple,.mat-toolbar .mat-form-field-ripple,.mat-toolbar .mat-form-field-underline{background-color:currentColor}.mat-toolbar .mat-focused .mat-form-field-label,.mat-toolbar .mat-form-field-label,.mat-toolbar .mat-form-field.mat-focused .mat-select-arrow,.mat-toolbar .mat-select-arrow,.mat-toolbar .mat-select-value{color:inherit}.mat-toolbar .mat-input-element{caret-color:currentColor}.mat-tooltip{background:rgba(97,97,97,.9)}.mat-tree{background:#fff}.mat-nested-tree-node,.mat-tree-node{color:rgba(0,0,0,.87)}.mat-snack-bar-container{color:rgba(255,255,255,.7);background:#323232;box-shadow:0 3px 5px -1px rgba(0,0,0,.2),0 6px 10px 0 rgba(0,0,0,.14),0 1px 18px 0 rgba(0,0,0,.12)}.mat-simple-snackbar-action{color:#ff4081}/*!\n * Bootstrap Reboot v4.1.3 (https://getbootstrap.com/)\n * Copyright 2011-2018 The Bootstrap Authors\n * Copyright 2011-2018 Twitter, Inc.\n * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)\n * Forked from Normalize.css, licensed MIT (https://github.com/necolas/normalize.css/blob/master/LICENSE.md)\n */*,\n*::before,\n*::after {\n  box-sizing: border-box; }html {\n  font-family: sans-serif;\n  line-height: 1.15;\n  -webkit-text-size-adjust: 100%;\n  -ms-text-size-adjust: 100%;\n  -ms-overflow-style: scrollbar;\n  -webkit-tap-highlight-color: rgba(0, 0, 0, 0); }@-ms-viewport {\n  width: device-width; }article, aside, figcaption, figure, footer, header, hgroup, main, nav, section {\n  display: block; }body {\n  margin: 0;\n  font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\";\n  font-size: 1rem;\n  font-weight: 400;\n  line-height: 1.5;\n  color: #212529;\n  text-align: left;\n  background-color: #fff; }[tabindex=\"-1\"]:focus {\n  outline: 0 !important; }hr {\n  box-sizing: content-box;\n  height: 0;\n  overflow: visible; }h1, h2, h3, h4, h5, h6 {\n  margin-top: 0;\n  margin-bottom: 0.5rem; }p {\n  margin-top: 0;\n  margin-bottom: 1rem; }abbr[title],\nabbr[data-original-title] {\n  text-decoration: underline;\n  -webkit-text-decoration: underline dotted;\n          text-decoration: underline dotted;\n  cursor: help;\n  border-bottom: 0; }address {\n  margin-bottom: 1rem;\n  font-style: normal;\n  line-height: inherit; }ol,\nul,\ndl {\n  margin-top: 0;\n  margin-bottom: 1rem; }ol ol,\nul ul,\nol ul,\nul ol {\n  margin-bottom: 0; }dt {\n  font-weight: 700; }dd {\n  margin-bottom: .5rem;\n  margin-left: 0; }blockquote {\n  margin: 0 0 1rem; }dfn {\n  font-style: italic; }b,\nstrong {\n  font-weight: bolder; }small {\n  font-size: 80%; }sub,\nsup {\n  position: relative;\n  font-size: 75%;\n  line-height: 0;\n  vertical-align: baseline; }sub {\n  bottom: -.25em; }sup {\n  top: -.5em; }a {\n  color: #007bff;\n  text-decoration: none;\n  background-color: transparent;\n  -webkit-text-decoration-skip: objects; }a:hover {\n    color: #0056b3;\n    text-decoration: underline; }a:not([href]):not([tabindex]) {\n  color: inherit;\n  text-decoration: none; }a:not([href]):not([tabindex]):hover, a:not([href]):not([tabindex]):focus {\n    color: inherit;\n    text-decoration: none; }a:not([href]):not([tabindex]):focus {\n    outline: 0; }pre,\ncode,\nkbd,\nsamp {\n  font-family: SFMono-Regular, Menlo, Monaco, Consolas, \"Liberation Mono\", \"Courier New\", monospace;\n  font-size: 1em; }pre {\n  margin-top: 0;\n  margin-bottom: 1rem;\n  overflow: auto;\n  -ms-overflow-style: scrollbar; }figure {\n  margin: 0 0 1rem; }img {\n  vertical-align: middle;\n  border-style: none; }svg {\n  overflow: hidden;\n  vertical-align: middle; }table {\n  border-collapse: collapse; }caption {\n  padding-top: 0.75rem;\n  padding-bottom: 0.75rem;\n  color: #6c757d;\n  text-align: left;\n  caption-side: bottom; }th {\n  text-align: inherit; }label {\n  display: inline-block;\n  margin-bottom: 0.5rem; }button {\n  border-radius: 0; }button:focus {\n  outline: 1px dotted;\n  outline: 5px auto -webkit-focus-ring-color; }input,\nbutton,\nselect,\noptgroup,\ntextarea {\n  margin: 0;\n  font-family: inherit;\n  font-size: inherit;\n  line-height: inherit; }button,\ninput {\n  overflow: visible; }button,\nselect {\n  text-transform: none; }button,\nhtml [type=\"button\"],\n[type=\"reset\"],\n[type=\"submit\"] {\n  -webkit-appearance: button; }button::-moz-focus-inner,\n[type=\"button\"]::-moz-focus-inner,\n[type=\"reset\"]::-moz-focus-inner,\n[type=\"submit\"]::-moz-focus-inner {\n  padding: 0;\n  border-style: none; }input[type=\"radio\"],\ninput[type=\"checkbox\"] {\n  box-sizing: border-box;\n  padding: 0; }input[type=\"date\"],\ninput[type=\"time\"],\ninput[type=\"datetime-local\"],\ninput[type=\"month\"] {\n  -webkit-appearance: listbox; }textarea {\n  overflow: auto;\n  resize: vertical; }fieldset {\n  min-width: 0;\n  padding: 0;\n  margin: 0;\n  border: 0; }legend {\n  display: block;\n  width: 100%;\n  max-width: 100%;\n  padding: 0;\n  margin-bottom: .5rem;\n  font-size: 1.5rem;\n  line-height: inherit;\n  color: inherit;\n  white-space: normal; }progress {\n  vertical-align: baseline; }[type=\"number\"]::-webkit-inner-spin-button,\n[type=\"number\"]::-webkit-outer-spin-button {\n  height: auto; }[type=\"search\"] {\n  outline-offset: -2px;\n  -webkit-appearance: none; }[type=\"search\"]::-webkit-search-cancel-button,\n[type=\"search\"]::-webkit-search-decoration {\n  -webkit-appearance: none; }::-webkit-file-upload-button {\n  font: inherit;\n  -webkit-appearance: button; }output {\n  display: inline-block; }summary {\n  display: list-item;\n  cursor: pointer; }template {\n  display: none; }[hidden] {\n  display: none !important; }/*!\n * Bootstrap Grid v4.1.3 (https://getbootstrap.com/)\n * Copyright 2011-2018 The Bootstrap Authors\n * Copyright 2011-2018 Twitter, Inc.\n * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)\n */@-ms-viewport {\n  width: device-width; }html {\n  box-sizing: border-box;\n  -ms-overflow-style: scrollbar; }*,\n*::before,\n*::after {\n  box-sizing: inherit; }.container {\n  width: 100%;\n  padding-right: 15px;\n  padding-left: 15px;\n  margin-right: auto;\n  margin-left: auto; }@media (min-width: 576px) {\n    .container {\n      max-width: 540px; } }@media (min-width: 768px) {\n    .container {\n      max-width: 720px; } }@media (min-width: 992px) {\n    .container {\n      max-width: 960px; } }@media (min-width: 1200px) {\n    .container {\n      max-width: 1140px; } }.container-fluid {\n  width: 100%;\n  padding-right: 15px;\n  padding-left: 15px;\n  margin-right: auto;\n  margin-left: auto; }.row {\n  display: flex;\n  flex-wrap: wrap;\n  margin-right: -15px;\n  margin-left: -15px; }.no-gutters {\n  margin-right: 0;\n  margin-left: 0; }.no-gutters > .col,\n  .no-gutters > [class*=\"col-\"] {\n    padding-right: 0;\n    padding-left: 0; }.col-1, .col-2, .col-3, .col-4, .col-5, .col-6, .col-7, .col-8, .col-9, .col-10, .col-11, .col-12, .col,\n.col-auto, .col-sm-1, .col-sm-2, .col-sm-3, .col-sm-4, .col-sm-5, .col-sm-6, .col-sm-7, .col-sm-8, .col-sm-9, .col-sm-10, .col-sm-11, .col-sm-12, .col-sm,\n.col-sm-auto, .col-md-1, .col-md-2, .col-md-3, .col-md-4, .col-md-5, .col-md-6, .col-md-7, .col-md-8, .col-md-9, .col-md-10, .col-md-11, .col-md-12, .col-md,\n.col-md-auto, .col-lg-1, .col-lg-2, .col-lg-3, .col-lg-4, .col-lg-5, .col-lg-6, .col-lg-7, .col-lg-8, .col-lg-9, .col-lg-10, .col-lg-11, .col-lg-12, .col-lg,\n.col-lg-auto, .col-xl-1, .col-xl-2, .col-xl-3, .col-xl-4, .col-xl-5, .col-xl-6, .col-xl-7, .col-xl-8, .col-xl-9, .col-xl-10, .col-xl-11, .col-xl-12, .col-xl,\n.col-xl-auto {\n  position: relative;\n  width: 100%;\n  min-height: 1px;\n  padding-right: 15px;\n  padding-left: 15px; }.col {\n  flex-basis: 0;\n  flex-grow: 1;\n  max-width: 100%; }.col-auto {\n  flex: 0 0 auto;\n  width: auto;\n  max-width: none; }.col-1 {\n  flex: 0 0 8.33333333%;\n  max-width: 8.33333333%; }.col-2 {\n  flex: 0 0 16.66666667%;\n  max-width: 16.66666667%; }.col-3 {\n  flex: 0 0 25%;\n  max-width: 25%; }.col-4 {\n  flex: 0 0 33.33333333%;\n  max-width: 33.33333333%; }.col-5 {\n  flex: 0 0 41.66666667%;\n  max-width: 41.66666667%; }.col-6 {\n  flex: 0 0 50%;\n  max-width: 50%; }.col-7 {\n  flex: 0 0 58.33333333%;\n  max-width: 58.33333333%; }.col-8 {\n  flex: 0 0 66.66666667%;\n  max-width: 66.66666667%; }.col-9 {\n  flex: 0 0 75%;\n  max-width: 75%; }.col-10 {\n  flex: 0 0 83.33333333%;\n  max-width: 83.33333333%; }.col-11 {\n  flex: 0 0 91.66666667%;\n  max-width: 91.66666667%; }.col-12 {\n  flex: 0 0 100%;\n  max-width: 100%; }.order-first {\n  order: -1; }.order-last {\n  order: 13; }.order-0 {\n  order: 0; }.order-1 {\n  order: 1; }.order-2 {\n  order: 2; }.order-3 {\n  order: 3; }.order-4 {\n  order: 4; }.order-5 {\n  order: 5; }.order-6 {\n  order: 6; }.order-7 {\n  order: 7; }.order-8 {\n  order: 8; }.order-9 {\n  order: 9; }.order-10 {\n  order: 10; }.order-11 {\n  order: 11; }.order-12 {\n  order: 12; }.offset-1 {\n  margin-left: 8.33333333%; }.offset-2 {\n  margin-left: 16.66666667%; }.offset-3 {\n  margin-left: 25%; }.offset-4 {\n  margin-left: 33.33333333%; }.offset-5 {\n  margin-left: 41.66666667%; }.offset-6 {\n  margin-left: 50%; }.offset-7 {\n  margin-left: 58.33333333%; }.offset-8 {\n  margin-left: 66.66666667%; }.offset-9 {\n  margin-left: 75%; }.offset-10 {\n  margin-left: 83.33333333%; }.offset-11 {\n  margin-left: 91.66666667%; }@media (min-width: 576px) {\n  .col-sm {\n    flex-basis: 0;\n    flex-grow: 1;\n    max-width: 100%; }\n  .col-sm-auto {\n    flex: 0 0 auto;\n    width: auto;\n    max-width: none; }\n  .col-sm-1 {\n    flex: 0 0 8.33333333%;\n    max-width: 8.33333333%; }\n  .col-sm-2 {\n    flex: 0 0 16.66666667%;\n    max-width: 16.66666667%; }\n  .col-sm-3 {\n    flex: 0 0 25%;\n    max-width: 25%; }\n  .col-sm-4 {\n    flex: 0 0 33.33333333%;\n    max-width: 33.33333333%; }\n  .col-sm-5 {\n    flex: 0 0 41.66666667%;\n    max-width: 41.66666667%; }\n  .col-sm-6 {\n    flex: 0 0 50%;\n    max-width: 50%; }\n  .col-sm-7 {\n    flex: 0 0 58.33333333%;\n    max-width: 58.33333333%; }\n  .col-sm-8 {\n    flex: 0 0 66.66666667%;\n    max-width: 66.66666667%; }\n  .col-sm-9 {\n    flex: 0 0 75%;\n    max-width: 75%; }\n  .col-sm-10 {\n    flex: 0 0 83.33333333%;\n    max-width: 83.33333333%; }\n  .col-sm-11 {\n    flex: 0 0 91.66666667%;\n    max-width: 91.66666667%; }\n  .col-sm-12 {\n    flex: 0 0 100%;\n    max-width: 100%; }\n  .order-sm-first {\n    order: -1; }\n  .order-sm-last {\n    order: 13; }\n  .order-sm-0 {\n    order: 0; }\n  .order-sm-1 {\n    order: 1; }\n  .order-sm-2 {\n    order: 2; }\n  .order-sm-3 {\n    order: 3; }\n  .order-sm-4 {\n    order: 4; }\n  .order-sm-5 {\n    order: 5; }\n  .order-sm-6 {\n    order: 6; }\n  .order-sm-7 {\n    order: 7; }\n  .order-sm-8 {\n    order: 8; }\n  .order-sm-9 {\n    order: 9; }\n  .order-sm-10 {\n    order: 10; }\n  .order-sm-11 {\n    order: 11; }\n  .order-sm-12 {\n    order: 12; }\n  .offset-sm-0 {\n    margin-left: 0; }\n  .offset-sm-1 {\n    margin-left: 8.33333333%; }\n  .offset-sm-2 {\n    margin-left: 16.66666667%; }\n  .offset-sm-3 {\n    margin-left: 25%; }\n  .offset-sm-4 {\n    margin-left: 33.33333333%; }\n  .offset-sm-5 {\n    margin-left: 41.66666667%; }\n  .offset-sm-6 {\n    margin-left: 50%; }\n  .offset-sm-7 {\n    margin-left: 58.33333333%; }\n  .offset-sm-8 {\n    margin-left: 66.66666667%; }\n  .offset-sm-9 {\n    margin-left: 75%; }\n  .offset-sm-10 {\n    margin-left: 83.33333333%; }\n  .offset-sm-11 {\n    margin-left: 91.66666667%; } }@media (min-width: 768px) {\n  .col-md {\n    flex-basis: 0;\n    flex-grow: 1;\n    max-width: 100%; }\n  .col-md-auto {\n    flex: 0 0 auto;\n    width: auto;\n    max-width: none; }\n  .col-md-1 {\n    flex: 0 0 8.33333333%;\n    max-width: 8.33333333%; }\n  .col-md-2 {\n    flex: 0 0 16.66666667%;\n    max-width: 16.66666667%; }\n  .col-md-3 {\n    flex: 0 0 25%;\n    max-width: 25%; }\n  .col-md-4 {\n    flex: 0 0 33.33333333%;\n    max-width: 33.33333333%; }\n  .col-md-5 {\n    flex: 0 0 41.66666667%;\n    max-width: 41.66666667%; }\n  .col-md-6 {\n    flex: 0 0 50%;\n    max-width: 50%; }\n  .col-md-7 {\n    flex: 0 0 58.33333333%;\n    max-width: 58.33333333%; }\n  .col-md-8 {\n    flex: 0 0 66.66666667%;\n    max-width: 66.66666667%; }\n  .col-md-9 {\n    flex: 0 0 75%;\n    max-width: 75%; }\n  .col-md-10 {\n    flex: 0 0 83.33333333%;\n    max-width: 83.33333333%; }\n  .col-md-11 {\n    flex: 0 0 91.66666667%;\n    max-width: 91.66666667%; }\n  .col-md-12 {\n    flex: 0 0 100%;\n    max-width: 100%; }\n  .order-md-first {\n    order: -1; }\n  .order-md-last {\n    order: 13; }\n  .order-md-0 {\n    order: 0; }\n  .order-md-1 {\n    order: 1; }\n  .order-md-2 {\n    order: 2; }\n  .order-md-3 {\n    order: 3; }\n  .order-md-4 {\n    order: 4; }\n  .order-md-5 {\n    order: 5; }\n  .order-md-6 {\n    order: 6; }\n  .order-md-7 {\n    order: 7; }\n  .order-md-8 {\n    order: 8; }\n  .order-md-9 {\n    order: 9; }\n  .order-md-10 {\n    order: 10; }\n  .order-md-11 {\n    order: 11; }\n  .order-md-12 {\n    order: 12; }\n  .offset-md-0 {\n    margin-left: 0; }\n  .offset-md-1 {\n    margin-left: 8.33333333%; }\n  .offset-md-2 {\n    margin-left: 16.66666667%; }\n  .offset-md-3 {\n    margin-left: 25%; }\n  .offset-md-4 {\n    margin-left: 33.33333333%; }\n  .offset-md-5 {\n    margin-left: 41.66666667%; }\n  .offset-md-6 {\n    margin-left: 50%; }\n  .offset-md-7 {\n    margin-left: 58.33333333%; }\n  .offset-md-8 {\n    margin-left: 66.66666667%; }\n  .offset-md-9 {\n    margin-left: 75%; }\n  .offset-md-10 {\n    margin-left: 83.33333333%; }\n  .offset-md-11 {\n    margin-left: 91.66666667%; } }@media (min-width: 992px) {\n  .col-lg {\n    flex-basis: 0;\n    flex-grow: 1;\n    max-width: 100%; }\n  .col-lg-auto {\n    flex: 0 0 auto;\n    width: auto;\n    max-width: none; }\n  .col-lg-1 {\n    flex: 0 0 8.33333333%;\n    max-width: 8.33333333%; }\n  .col-lg-2 {\n    flex: 0 0 16.66666667%;\n    max-width: 16.66666667%; }\n  .col-lg-3 {\n    flex: 0 0 25%;\n    max-width: 25%; }\n  .col-lg-4 {\n    flex: 0 0 33.33333333%;\n    max-width: 33.33333333%; }\n  .col-lg-5 {\n    flex: 0 0 41.66666667%;\n    max-width: 41.66666667%; }\n  .col-lg-6 {\n    flex: 0 0 50%;\n    max-width: 50%; }\n  .col-lg-7 {\n    flex: 0 0 58.33333333%;\n    max-width: 58.33333333%; }\n  .col-lg-8 {\n    flex: 0 0 66.66666667%;\n    max-width: 66.66666667%; }\n  .col-lg-9 {\n    flex: 0 0 75%;\n    max-width: 75%; }\n  .col-lg-10 {\n    flex: 0 0 83.33333333%;\n    max-width: 83.33333333%; }\n  .col-lg-11 {\n    flex: 0 0 91.66666667%;\n    max-width: 91.66666667%; }\n  .col-lg-12 {\n    flex: 0 0 100%;\n    max-width: 100%; }\n  .order-lg-first {\n    order: -1; }\n  .order-lg-last {\n    order: 13; }\n  .order-lg-0 {\n    order: 0; }\n  .order-lg-1 {\n    order: 1; }\n  .order-lg-2 {\n    order: 2; }\n  .order-lg-3 {\n    order: 3; }\n  .order-lg-4 {\n    order: 4; }\n  .order-lg-5 {\n    order: 5; }\n  .order-lg-6 {\n    order: 6; }\n  .order-lg-7 {\n    order: 7; }\n  .order-lg-8 {\n    order: 8; }\n  .order-lg-9 {\n    order: 9; }\n  .order-lg-10 {\n    order: 10; }\n  .order-lg-11 {\n    order: 11; }\n  .order-lg-12 {\n    order: 12; }\n  .offset-lg-0 {\n    margin-left: 0; }\n  .offset-lg-1 {\n    margin-left: 8.33333333%; }\n  .offset-lg-2 {\n    margin-left: 16.66666667%; }\n  .offset-lg-3 {\n    margin-left: 25%; }\n  .offset-lg-4 {\n    margin-left: 33.33333333%; }\n  .offset-lg-5 {\n    margin-left: 41.66666667%; }\n  .offset-lg-6 {\n    margin-left: 50%; }\n  .offset-lg-7 {\n    margin-left: 58.33333333%; }\n  .offset-lg-8 {\n    margin-left: 66.66666667%; }\n  .offset-lg-9 {\n    margin-left: 75%; }\n  .offset-lg-10 {\n    margin-left: 83.33333333%; }\n  .offset-lg-11 {\n    margin-left: 91.66666667%; } }@media (min-width: 1200px) {\n  .col-xl {\n    flex-basis: 0;\n    flex-grow: 1;\n    max-width: 100%; }\n  .col-xl-auto {\n    flex: 0 0 auto;\n    width: auto;\n    max-width: none; }\n  .col-xl-1 {\n    flex: 0 0 8.33333333%;\n    max-width: 8.33333333%; }\n  .col-xl-2 {\n    flex: 0 0 16.66666667%;\n    max-width: 16.66666667%; }\n  .col-xl-3 {\n    flex: 0 0 25%;\n    max-width: 25%; }\n  .col-xl-4 {\n    flex: 0 0 33.33333333%;\n    max-width: 33.33333333%; }\n  .col-xl-5 {\n    flex: 0 0 41.66666667%;\n    max-width: 41.66666667%; }\n  .col-xl-6 {\n    flex: 0 0 50%;\n    max-width: 50%; }\n  .col-xl-7 {\n    flex: 0 0 58.33333333%;\n    max-width: 58.33333333%; }\n  .col-xl-8 {\n    flex: 0 0 66.66666667%;\n    max-width: 66.66666667%; }\n  .col-xl-9 {\n    flex: 0 0 75%;\n    max-width: 75%; }\n  .col-xl-10 {\n    flex: 0 0 83.33333333%;\n    max-width: 83.33333333%; }\n  .col-xl-11 {\n    flex: 0 0 91.66666667%;\n    max-width: 91.66666667%; }\n  .col-xl-12 {\n    flex: 0 0 100%;\n    max-width: 100%; }\n  .order-xl-first {\n    order: -1; }\n  .order-xl-last {\n    order: 13; }\n  .order-xl-0 {\n    order: 0; }\n  .order-xl-1 {\n    order: 1; }\n  .order-xl-2 {\n    order: 2; }\n  .order-xl-3 {\n    order: 3; }\n  .order-xl-4 {\n    order: 4; }\n  .order-xl-5 {\n    order: 5; }\n  .order-xl-6 {\n    order: 6; }\n  .order-xl-7 {\n    order: 7; }\n  .order-xl-8 {\n    order: 8; }\n  .order-xl-9 {\n    order: 9; }\n  .order-xl-10 {\n    order: 10; }\n  .order-xl-11 {\n    order: 11; }\n  .order-xl-12 {\n    order: 12; }\n  .offset-xl-0 {\n    margin-left: 0; }\n  .offset-xl-1 {\n    margin-left: 8.33333333%; }\n  .offset-xl-2 {\n    margin-left: 16.66666667%; }\n  .offset-xl-3 {\n    margin-left: 25%; }\n  .offset-xl-4 {\n    margin-left: 33.33333333%; }\n  .offset-xl-5 {\n    margin-left: 41.66666667%; }\n  .offset-xl-6 {\n    margin-left: 50%; }\n  .offset-xl-7 {\n    margin-left: 58.33333333%; }\n  .offset-xl-8 {\n    margin-left: 66.66666667%; }\n  .offset-xl-9 {\n    margin-left: 75%; }\n  .offset-xl-10 {\n    margin-left: 83.33333333%; }\n  .offset-xl-11 {\n    margin-left: 91.66666667%; } }.d-none {\n  display: none !important; }.d-inline {\n  display: inline !important; }.d-inline-block {\n  display: inline-block !important; }.d-block {\n  display: block !important; }.d-table {\n  display: table !important; }.d-table-row {\n  display: table-row !important; }.d-table-cell {\n  display: table-cell !important; }.d-flex {\n  display: flex !important; }.d-inline-flex {\n  display: inline-flex !important; }@media (min-width: 576px) {\n  .d-sm-none {\n    display: none !important; }\n  .d-sm-inline {\n    display: inline !important; }\n  .d-sm-inline-block {\n    display: inline-block !important; }\n  .d-sm-block {\n    display: block !important; }\n  .d-sm-table {\n    display: table !important; }\n  .d-sm-table-row {\n    display: table-row !important; }\n  .d-sm-table-cell {\n    display: table-cell !important; }\n  .d-sm-flex {\n    display: flex !important; }\n  .d-sm-inline-flex {\n    display: inline-flex !important; } }@media (min-width: 768px) {\n  .d-md-none {\n    display: none !important; }\n  .d-md-inline {\n    display: inline !important; }\n  .d-md-inline-block {\n    display: inline-block !important; }\n  .d-md-block {\n    display: block !important; }\n  .d-md-table {\n    display: table !important; }\n  .d-md-table-row {\n    display: table-row !important; }\n  .d-md-table-cell {\n    display: table-cell !important; }\n  .d-md-flex {\n    display: flex !important; }\n  .d-md-inline-flex {\n    display: inline-flex !important; } }@media (min-width: 992px) {\n  .d-lg-none {\n    display: none !important; }\n  .d-lg-inline {\n    display: inline !important; }\n  .d-lg-inline-block {\n    display: inline-block !important; }\n  .d-lg-block {\n    display: block !important; }\n  .d-lg-table {\n    display: table !important; }\n  .d-lg-table-row {\n    display: table-row !important; }\n  .d-lg-table-cell {\n    display: table-cell !important; }\n  .d-lg-flex {\n    display: flex !important; }\n  .d-lg-inline-flex {\n    display: inline-flex !important; } }@media (min-width: 1200px) {\n  .d-xl-none {\n    display: none !important; }\n  .d-xl-inline {\n    display: inline !important; }\n  .d-xl-inline-block {\n    display: inline-block !important; }\n  .d-xl-block {\n    display: block !important; }\n  .d-xl-table {\n    display: table !important; }\n  .d-xl-table-row {\n    display: table-row !important; }\n  .d-xl-table-cell {\n    display: table-cell !important; }\n  .d-xl-flex {\n    display: flex !important; }\n  .d-xl-inline-flex {\n    display: inline-flex !important; } }@media print {\n  .d-print-none {\n    display: none !important; }\n  .d-print-inline {\n    display: inline !important; }\n  .d-print-inline-block {\n    display: inline-block !important; }\n  .d-print-block {\n    display: block !important; }\n  .d-print-table {\n    display: table !important; }\n  .d-print-table-row {\n    display: table-row !important; }\n  .d-print-table-cell {\n    display: table-cell !important; }\n  .d-print-flex {\n    display: flex !important; }\n  .d-print-inline-flex {\n    display: inline-flex !important; } }.flex-row {\n  flex-direction: row !important; }.flex-column {\n  flex-direction: column !important; }.flex-row-reverse {\n  flex-direction: row-reverse !important; }.flex-column-reverse {\n  flex-direction: column-reverse !important; }.flex-wrap {\n  flex-wrap: wrap !important; }.flex-nowrap {\n  flex-wrap: nowrap !important; }.flex-wrap-reverse {\n  flex-wrap: wrap-reverse !important; }.flex-fill {\n  flex: 1 1 auto !important; }.flex-grow-0 {\n  flex-grow: 0 !important; }.flex-grow-1 {\n  flex-grow: 1 !important; }.flex-shrink-0 {\n  flex-shrink: 0 !important; }.flex-shrink-1 {\n  flex-shrink: 1 !important; }.justify-content-start {\n  justify-content: flex-start !important; }.justify-content-end {\n  justify-content: flex-end !important; }.justify-content-center {\n  justify-content: center !important; }.justify-content-between {\n  justify-content: space-between !important; }.justify-content-around {\n  justify-content: space-around !important; }.align-items-start {\n  align-items: flex-start !important; }.align-items-end {\n  align-items: flex-end !important; }.align-items-center {\n  align-items: center !important; }.align-items-baseline {\n  align-items: baseline !important; }.align-items-stretch {\n  align-items: stretch !important; }.align-content-start {\n  align-content: flex-start !important; }.align-content-end {\n  align-content: flex-end !important; }.align-content-center {\n  align-content: center !important; }.align-content-between {\n  align-content: space-between !important; }.align-content-around {\n  align-content: space-around !important; }.align-content-stretch {\n  align-content: stretch !important; }.align-self-auto {\n  align-self: auto !important; }.align-self-start {\n  align-self: flex-start !important; }.align-self-end {\n  align-self: flex-end !important; }.align-self-center {\n  align-self: center !important; }.align-self-baseline {\n  align-self: baseline !important; }.align-self-stretch {\n  align-self: stretch !important; }@media (min-width: 576px) {\n  .flex-sm-row {\n    flex-direction: row !important; }\n  .flex-sm-column {\n    flex-direction: column !important; }\n  .flex-sm-row-reverse {\n    flex-direction: row-reverse !important; }\n  .flex-sm-column-reverse {\n    flex-direction: column-reverse !important; }\n  .flex-sm-wrap {\n    flex-wrap: wrap !important; }\n  .flex-sm-nowrap {\n    flex-wrap: nowrap !important; }\n  .flex-sm-wrap-reverse {\n    flex-wrap: wrap-reverse !important; }\n  .flex-sm-fill {\n    flex: 1 1 auto !important; }\n  .flex-sm-grow-0 {\n    flex-grow: 0 !important; }\n  .flex-sm-grow-1 {\n    flex-grow: 1 !important; }\n  .flex-sm-shrink-0 {\n    flex-shrink: 0 !important; }\n  .flex-sm-shrink-1 {\n    flex-shrink: 1 !important; }\n  .justify-content-sm-start {\n    justify-content: flex-start !important; }\n  .justify-content-sm-end {\n    justify-content: flex-end !important; }\n  .justify-content-sm-center {\n    justify-content: center !important; }\n  .justify-content-sm-between {\n    justify-content: space-between !important; }\n  .justify-content-sm-around {\n    justify-content: space-around !important; }\n  .align-items-sm-start {\n    align-items: flex-start !important; }\n  .align-items-sm-end {\n    align-items: flex-end !important; }\n  .align-items-sm-center {\n    align-items: center !important; }\n  .align-items-sm-baseline {\n    align-items: baseline !important; }\n  .align-items-sm-stretch {\n    align-items: stretch !important; }\n  .align-content-sm-start {\n    align-content: flex-start !important; }\n  .align-content-sm-end {\n    align-content: flex-end !important; }\n  .align-content-sm-center {\n    align-content: center !important; }\n  .align-content-sm-between {\n    align-content: space-between !important; }\n  .align-content-sm-around {\n    align-content: space-around !important; }\n  .align-content-sm-stretch {\n    align-content: stretch !important; }\n  .align-self-sm-auto {\n    align-self: auto !important; }\n  .align-self-sm-start {\n    align-self: flex-start !important; }\n  .align-self-sm-end {\n    align-self: flex-end !important; }\n  .align-self-sm-center {\n    align-self: center !important; }\n  .align-self-sm-baseline {\n    align-self: baseline !important; }\n  .align-self-sm-stretch {\n    align-self: stretch !important; } }@media (min-width: 768px) {\n  .flex-md-row {\n    flex-direction: row !important; }\n  .flex-md-column {\n    flex-direction: column !important; }\n  .flex-md-row-reverse {\n    flex-direction: row-reverse !important; }\n  .flex-md-column-reverse {\n    flex-direction: column-reverse !important; }\n  .flex-md-wrap {\n    flex-wrap: wrap !important; }\n  .flex-md-nowrap {\n    flex-wrap: nowrap !important; }\n  .flex-md-wrap-reverse {\n    flex-wrap: wrap-reverse !important; }\n  .flex-md-fill {\n    flex: 1 1 auto !important; }\n  .flex-md-grow-0 {\n    flex-grow: 0 !important; }\n  .flex-md-grow-1 {\n    flex-grow: 1 !important; }\n  .flex-md-shrink-0 {\n    flex-shrink: 0 !important; }\n  .flex-md-shrink-1 {\n    flex-shrink: 1 !important; }\n  .justify-content-md-start {\n    justify-content: flex-start !important; }\n  .justify-content-md-end {\n    justify-content: flex-end !important; }\n  .justify-content-md-center {\n    justify-content: center !important; }\n  .justify-content-md-between {\n    justify-content: space-between !important; }\n  .justify-content-md-around {\n    justify-content: space-around !important; }\n  .align-items-md-start {\n    align-items: flex-start !important; }\n  .align-items-md-end {\n    align-items: flex-end !important; }\n  .align-items-md-center {\n    align-items: center !important; }\n  .align-items-md-baseline {\n    align-items: baseline !important; }\n  .align-items-md-stretch {\n    align-items: stretch !important; }\n  .align-content-md-start {\n    align-content: flex-start !important; }\n  .align-content-md-end {\n    align-content: flex-end !important; }\n  .align-content-md-center {\n    align-content: center !important; }\n  .align-content-md-between {\n    align-content: space-between !important; }\n  .align-content-md-around {\n    align-content: space-around !important; }\n  .align-content-md-stretch {\n    align-content: stretch !important; }\n  .align-self-md-auto {\n    align-self: auto !important; }\n  .align-self-md-start {\n    align-self: flex-start !important; }\n  .align-self-md-end {\n    align-self: flex-end !important; }\n  .align-self-md-center {\n    align-self: center !important; }\n  .align-self-md-baseline {\n    align-self: baseline !important; }\n  .align-self-md-stretch {\n    align-self: stretch !important; } }@media (min-width: 992px) {\n  .flex-lg-row {\n    flex-direction: row !important; }\n  .flex-lg-column {\n    flex-direction: column !important; }\n  .flex-lg-row-reverse {\n    flex-direction: row-reverse !important; }\n  .flex-lg-column-reverse {\n    flex-direction: column-reverse !important; }\n  .flex-lg-wrap {\n    flex-wrap: wrap !important; }\n  .flex-lg-nowrap {\n    flex-wrap: nowrap !important; }\n  .flex-lg-wrap-reverse {\n    flex-wrap: wrap-reverse !important; }\n  .flex-lg-fill {\n    flex: 1 1 auto !important; }\n  .flex-lg-grow-0 {\n    flex-grow: 0 !important; }\n  .flex-lg-grow-1 {\n    flex-grow: 1 !important; }\n  .flex-lg-shrink-0 {\n    flex-shrink: 0 !important; }\n  .flex-lg-shrink-1 {\n    flex-shrink: 1 !important; }\n  .justify-content-lg-start {\n    justify-content: flex-start !important; }\n  .justify-content-lg-end {\n    justify-content: flex-end !important; }\n  .justify-content-lg-center {\n    justify-content: center !important; }\n  .justify-content-lg-between {\n    justify-content: space-between !important; }\n  .justify-content-lg-around {\n    justify-content: space-around !important; }\n  .align-items-lg-start {\n    align-items: flex-start !important; }\n  .align-items-lg-end {\n    align-items: flex-end !important; }\n  .align-items-lg-center {\n    align-items: center !important; }\n  .align-items-lg-baseline {\n    align-items: baseline !important; }\n  .align-items-lg-stretch {\n    align-items: stretch !important; }\n  .align-content-lg-start {\n    align-content: flex-start !important; }\n  .align-content-lg-end {\n    align-content: flex-end !important; }\n  .align-content-lg-center {\n    align-content: center !important; }\n  .align-content-lg-between {\n    align-content: space-between !important; }\n  .align-content-lg-around {\n    align-content: space-around !important; }\n  .align-content-lg-stretch {\n    align-content: stretch !important; }\n  .align-self-lg-auto {\n    align-self: auto !important; }\n  .align-self-lg-start {\n    align-self: flex-start !important; }\n  .align-self-lg-end {\n    align-self: flex-end !important; }\n  .align-self-lg-center {\n    align-self: center !important; }\n  .align-self-lg-baseline {\n    align-self: baseline !important; }\n  .align-self-lg-stretch {\n    align-self: stretch !important; } }@media (min-width: 1200px) {\n  .flex-xl-row {\n    flex-direction: row !important; }\n  .flex-xl-column {\n    flex-direction: column !important; }\n  .flex-xl-row-reverse {\n    flex-direction: row-reverse !important; }\n  .flex-xl-column-reverse {\n    flex-direction: column-reverse !important; }\n  .flex-xl-wrap {\n    flex-wrap: wrap !important; }\n  .flex-xl-nowrap {\n    flex-wrap: nowrap !important; }\n  .flex-xl-wrap-reverse {\n    flex-wrap: wrap-reverse !important; }\n  .flex-xl-fill {\n    flex: 1 1 auto !important; }\n  .flex-xl-grow-0 {\n    flex-grow: 0 !important; }\n  .flex-xl-grow-1 {\n    flex-grow: 1 !important; }\n  .flex-xl-shrink-0 {\n    flex-shrink: 0 !important; }\n  .flex-xl-shrink-1 {\n    flex-shrink: 1 !important; }\n  .justify-content-xl-start {\n    justify-content: flex-start !important; }\n  .justify-content-xl-end {\n    justify-content: flex-end !important; }\n  .justify-content-xl-center {\n    justify-content: center !important; }\n  .justify-content-xl-between {\n    justify-content: space-between !important; }\n  .justify-content-xl-around {\n    justify-content: space-around !important; }\n  .align-items-xl-start {\n    align-items: flex-start !important; }\n  .align-items-xl-end {\n    align-items: flex-end !important; }\n  .align-items-xl-center {\n    align-items: center !important; }\n  .align-items-xl-baseline {\n    align-items: baseline !important; }\n  .align-items-xl-stretch {\n    align-items: stretch !important; }\n  .align-content-xl-start {\n    align-content: flex-start !important; }\n  .align-content-xl-end {\n    align-content: flex-end !important; }\n  .align-content-xl-center {\n    align-content: center !important; }\n  .align-content-xl-between {\n    align-content: space-between !important; }\n  .align-content-xl-around {\n    align-content: space-around !important; }\n  .align-content-xl-stretch {\n    align-content: stretch !important; }\n  .align-self-xl-auto {\n    align-self: auto !important; }\n  .align-self-xl-start {\n    align-self: flex-start !important; }\n  .align-self-xl-end {\n    align-self: flex-end !important; }\n  .align-self-xl-center {\n    align-self: center !important; }\n  .align-self-xl-baseline {\n    align-self: baseline !important; }\n  .align-self-xl-stretch {\n    align-self: stretch !important; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9AYW5ndWxhci9tYXRlcmlhbC9wcmVidWlsdC10aGVtZXMvaW5kaWdvLXBpbmsuY3NzIiwiL2hvbWUveGFuZGVyL2dvL3NyYy9naXRodWIuY29tL3hhbmRlcmZsb29kL25vdGVib29rL3VpL25vdGVib29rL25vZGVfbW9kdWxlcy9ib290c3RyYXAvc2Nzcy9ib290c3RyYXAtcmVib290LnNjc3MiLCIvaG9tZS94YW5kZXIvZ28vc3JjL2dpdGh1Yi5jb20veGFuZGVyZmxvb2Qvbm90ZWJvb2svdWkvbm90ZWJvb2svbm9kZV9tb2R1bGVzL2Jvb3RzdHJhcC9zY3NzL19yZWJvb3Quc2NzcyIsIi9ob21lL3hhbmRlci9nby9zcmMvZ2l0aHViLmNvbS94YW5kZXJmbG9vZC9ub3RlYm9vay91aS9ub3RlYm9vay9ub2RlX21vZHVsZXMvYm9vdHN0cmFwL3Njc3MvX3ZhcmlhYmxlcy5zY3NzIiwic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiLCIvaG9tZS94YW5kZXIvZ28vc3JjL2dpdGh1Yi5jb20veGFuZGVyZmxvb2Qvbm90ZWJvb2svdWkvbm90ZWJvb2svbm9kZV9tb2R1bGVzL2Jvb3RzdHJhcC9zY3NzL21peGlucy9faG92ZXIuc2NzcyIsIi9ob21lL3hhbmRlci9nby9zcmMvZ2l0aHViLmNvbS94YW5kZXJmbG9vZC9ub3RlYm9vay91aS9ub3RlYm9vay9ub2RlX21vZHVsZXMvYm9vdHN0cmFwL3Njc3MvYm9vdHN0cmFwLWdyaWQuc2NzcyIsIi9ob21lL3hhbmRlci9nby9zcmMvZ2l0aHViLmNvbS94YW5kZXJmbG9vZC9ub3RlYm9vay91aS9ub3RlYm9vay9ub2RlX21vZHVsZXMvYm9vdHN0cmFwL3Njc3MvX2dyaWQuc2NzcyIsIi9ob21lL3hhbmRlci9nby9zcmMvZ2l0aHViLmNvbS94YW5kZXJmbG9vZC9ub3RlYm9vay91aS9ub3RlYm9vay9ub2RlX21vZHVsZXMvYm9vdHN0cmFwL3Njc3MvbWl4aW5zL19ncmlkLnNjc3MiLCIvaG9tZS94YW5kZXIvZ28vc3JjL2dpdGh1Yi5jb20veGFuZGVyZmxvb2Qvbm90ZWJvb2svdWkvbm90ZWJvb2svbm9kZV9tb2R1bGVzL2Jvb3RzdHJhcC9zY3NzL21peGlucy9fYnJlYWtwb2ludHMuc2NzcyIsIi9ob21lL3hhbmRlci9nby9zcmMvZ2l0aHViLmNvbS94YW5kZXJmbG9vZC9ub3RlYm9vay91aS9ub3RlYm9vay9ub2RlX21vZHVsZXMvYm9vdHN0cmFwL3Njc3MvbWl4aW5zL19ncmlkLWZyYW1ld29yay5zY3NzIiwiL2hvbWUveGFuZGVyL2dvL3NyYy9naXRodWIuY29tL3hhbmRlcmZsb29kL25vdGVib29rL3VpL25vdGVib29rL25vZGVfbW9kdWxlcy9ib290c3RyYXAvc2Nzcy91dGlsaXRpZXMvX2Rpc3BsYXkuc2NzcyIsIi9ob21lL3hhbmRlci9nby9zcmMvZ2l0aHViLmNvbS94YW5kZXJmbG9vZC9ub3RlYm9vay91aS9ub3RlYm9vay9ub2RlX21vZHVsZXMvYm9vdHN0cmFwL3Njc3MvdXRpbGl0aWVzL19mbGV4LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsbUJBQW1CLGdCQUFnQixlQUFlLDhDQUE4QyxDQUFDLG9DQUFvQyxhQUFhLENBQUMsb0NBQW9DLGNBQWMsQ0FBQyx5Q0FBeUMsc0RBQXNELGVBQWUsQ0FBQyxzQ0FBc0Msc0RBQXNELGVBQWUsQ0FBQyw2Q0FBNkMsc0RBQXNELGVBQWUsQ0FBQyw2Q0FBNkMsc0RBQXNELGVBQWUsQ0FBQywyQkFBMkIseURBQXlELGVBQWUsQ0FBQywyQkFBMkIsd0RBQXdELGVBQWUsQ0FBQyw2QkFBNkIscURBQXFELENBQUMsc0NBQXNDLHFEQUFxRCxDQUFDLDRDQUE0QyxlQUFlLENBQUMsd0JBQXdCLHFEQUFxRCxDQUFDLDhDQUE4Qyx3REFBd0QsZ0JBQWdCLHFCQUFxQixDQUFDLDhDQUE4QyxzREFBc0QsZ0JBQWdCLHFCQUFxQixDQUFDLDhDQUE4QyxzREFBc0QsZ0JBQWdCLHNCQUFzQixDQUFDLDhDQUE4QyxzREFBc0QsZUFBZSxD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RTtJQUFpQyxnQ0FBK0IsRUFBSTtFQUVwRTtJQUFrQyxxQ0FBb0MsRUFBSTtFQUMxRTtJQUFrQyxtQ0FBa0MsRUFBSTtFQUN4RTtJQUFrQyxpQ0FBZ0MsRUFBSTtFQUN0RTtJQUFrQyx3Q0FBdUMsRUFBSTtFQUM3RTtJQUFrQyx1Q0FBc0MsRUFBSTtFQUM1RTtJQUFrQyxrQ0FBaUMsRUFBSTtFQUV2RTtJQUFnQyw0QkFBMkIsRUFBSTtFQUMvRDtJQUFnQyxrQ0FBaUMsRUFBSTtFQUNyRTtJQUFnQyxnQ0FBK0IsRUFBSTtFQUNuRTtJQUFnQyw4QkFBNkIsRUFBSTtFQUNqRTtJQUFnQyxnQ0FBK0IsRUFBSTtFQUNuRTtJQUFnQywrQkFBOEIsRUFBSSxFQUFBIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1hdC1iYWRnZS1jb250ZW50e2ZvbnQtd2VpZ2h0OjYwMDtmb250LXNpemU6MTJweDtmb250LWZhbWlseTpSb2JvdG8sXCJIZWx2ZXRpY2EgTmV1ZVwiLHNhbnMtc2VyaWZ9Lm1hdC1iYWRnZS1zbWFsbCAubWF0LWJhZGdlLWNvbnRlbnR7Zm9udC1zaXplOjZweH0ubWF0LWJhZGdlLWxhcmdlIC5tYXQtYmFkZ2UtY29udGVudHtmb250LXNpemU6MjRweH0ubWF0LWgxLC5tYXQtaGVhZGxpbmUsLm1hdC10eXBvZ3JhcGh5IGgxe2ZvbnQ6NDAwIDI0cHgvMzJweCBSb2JvdG8sXCJIZWx2ZXRpY2EgTmV1ZVwiLHNhbnMtc2VyaWY7bWFyZ2luOjAgMCAxNnB4fS5tYXQtaDIsLm1hdC10aXRsZSwubWF0LXR5cG9ncmFwaHkgaDJ7Zm9udDo1MDAgMjBweC8zMnB4IFJvYm90byxcIkhlbHZldGljYSBOZXVlXCIsc2Fucy1zZXJpZjttYXJnaW46MCAwIDE2cHh9Lm1hdC1oMywubWF0LXN1YmhlYWRpbmctMiwubWF0LXR5cG9ncmFwaHkgaDN7Zm9udDo0MDAgMTZweC8yOHB4IFJvYm90byxcIkhlbHZldGljYSBOZXVlXCIsc2Fucy1zZXJpZjttYXJnaW46MCAwIDE2cHh9Lm1hdC1oNCwubWF0LXN1YmhlYWRpbmctMSwubWF0LXR5cG9ncmFwaHkgaDR7Zm9udDo0MDAgMTVweC8yNHB4IFJvYm90byxcIkhlbHZldGljYSBOZXVlXCIsc2Fucy1zZXJpZjttYXJnaW46MCAwIDE2cHh9Lm1hdC1oNSwubWF0LXR5cG9ncmFwaHkgaDV7Zm9udDo0MDAgMTEuNjJweC8yMHB4IFJvYm90byxcIkhlbHZldGljYSBOZXVlXCIsc2Fucy1zZXJpZjttYXJnaW46MCAwIDEycHh9Lm1hdC1oNiwubWF0LXR5cG9ncmFwaHkgaDZ7Zm9udDo0MDAgOS4zOHB4LzIwcHggUm9ib3RvLFwiSGVsdmV0aWNhIE5ldWVcIixzYW5zLXNlcmlmO21hcmdpbjowIDAgMTJweH0ubWF0LWJvZHktMiwubWF0LWJvZHktc3Ryb25ne2ZvbnQ6NTAwIDE0cHgvMjRweCBSb2JvdG8sXCJIZWx2ZXRpY2EgTmV1ZVwiLHNhbnMtc2VyaWZ9Lm1hdC1ib2R5LC5tYXQtYm9keS0xLC5tYXQtdHlwb2dyYXBoeXtmb250OjQwMCAxNHB4LzIwcHggUm9ib3RvLFwiSGVsdmV0aWNhIE5ldWVcIixzYW5zLXNlcmlmfS5tYXQtYm9keSBwLC5tYXQtYm9keS0xIHAsLm1hdC10eXBvZ3JhcGh5IHB7bWFyZ2luOjAgMCAxMnB4fS5tYXQtY2FwdGlvbiwubWF0LXNtYWxse2ZvbnQ6NDAwIDEycHgvMjBweCBSb2JvdG8sXCJIZWx2ZXRpY2EgTmV1ZVwiLHNhbnMtc2VyaWZ9Lm1hdC1kaXNwbGF5LTQsLm1hdC10eXBvZ3JhcGh5IC5tYXQtZGlzcGxheS00e2ZvbnQ6MzAwIDExMnB4LzExMnB4IFJvYm90byxcIkhlbHZldGljYSBOZXVlXCIsc2Fucy1zZXJpZjttYXJnaW46MCAwIDU2cHg7bGV0dGVyLXNwYWNpbmc6LS4wNWVtfS5tYXQtZGlzcGxheS0zLC5tYXQtdHlwb2dyYXBoeSAubWF0LWRpc3BsYXktM3tmb250OjQwMCA1NnB4LzU2cHggUm9ib3RvLFwiSGVsdmV0aWNhIE5ldWVcIixzYW5zLXNlcmlmO21hcmdpbjowIDAgNjRweDtsZXR0ZXItc3BhY2luZzotLjAyZW19Lm1hdC1kaXNwbGF5LTIsLm1hdC10eXBvZ3JhcGh5IC5tYXQtZGlzcGxheS0ye2ZvbnQ6NDAwIDQ1cHgvNDhweCBSb2JvdG8sXCJIZWx2ZXRpY2EgTmV1ZVwiLHNhbnMtc2VyaWY7bWFyZ2luOjAgMCA2NHB4O2xldHRlci1zcGFjaW5nOi0uMDA1ZW19Lm1hdC1kaXNwbGF5LTEsLm1hdC10eXBvZ3JhcGh5IC5tYXQtZGlzcGxheS0xe2ZvbnQ6NDAwIDM0cHgvNDBweCBSb2JvdG8sXCJIZWx2ZXRpY2EgTmV1ZVwiLHNhbnMtc2VyaWY7bWFyZ2luOjAgMCA2NHB4fS5tYXQtYm90dG9tLXNoZWV0LWNvbnRhaW5lcntmb250OjQwMCAxNHB4LzIwcHggUm9ib3RvLFwiSGVsdmV0aWNhIE5ldWVcIixzYW5zLXNlcmlmfS5tYXQtYnV0dG9uLC5tYXQtZmFiLC5tYXQtZmxhdC1idXR0b24sLm1hdC1pY29uLWJ1dHRvbiwubWF0LW1pbmktZmFiLC5tYXQtcmFpc2VkLWJ1dHRvbiwubWF0LXN0cm9rZWQtYnV0dG9ue2ZvbnQtZmFtaWx5OlJvYm90byxcIkhlbHZldGljYSBOZXVlXCIsc2Fucy1zZXJpZjtmb250LXNpemU6MTRweDtmb250LXdlaWdodDo1MDB9Lm1hdC1idXR0b24tdG9nZ2xle2ZvbnQtZmFtaWx5OlJvYm90byxcIkhlbHZldGljYSBOZXVlXCIsc2Fucy1zZXJpZn0ubWF0LWNhcmR7Zm9udC1mYW1pbHk6Um9ib3RvLFwiSGVsdmV0aWNhIE5ldWVcIixzYW5zLXNlcmlmfS5tYXQtY2FyZC10aXRsZXtmb250LXNpemU6MjRweDtmb250LXdlaWdodDo1MDB9Lm1hdC1jYXJkLWhlYWRlciAubWF0LWNhcmQtdGl0bGV7Zm9udC1zaXplOjIwcHh9Lm1hdC1jYXJkLWNvbnRlbnQsLm1hdC1jYXJkLXN1YnRpdGxle2ZvbnQtc2l6ZToxNHB4fS5tYXQtY2hlY2tib3h7Zm9udC1mYW1pbHk6Um9ib3RvLFwiSGVsdmV0aWNhIE5ldWVcIixzYW5zLXNlcmlmfS5tYXQtY2hlY2tib3gtbGF5b3V0IC5tYXQtY2hlY2tib3gtbGFiZWx7bGluZS1oZWlnaHQ6MjRweH0ubWF0LWNoaXB7Zm9udC1zaXplOjE0cHg7Zm9udC13ZWlnaHQ6NTAwfS5tYXQtY2hpcCAubWF0LWNoaXAtcmVtb3ZlLm1hdC1pY29uLC5tYXQtY2hpcCAubWF0LWNoaXAtdHJhaWxpbmctaWNvbi5tYXQtaWNvbntmb250LXNpemU6MThweH0ubWF0LXRhYmxle2ZvbnQtZmFtaWx5OlJvYm90byxcIkhlbHZldGljYSBOZXVlXCIsc2Fucy1zZXJpZn0ubWF0LWhlYWRlci1jZWxse2ZvbnQtc2l6ZToxMnB4O2ZvbnQtd2VpZ2h0OjUwMH0ubWF0LWNlbGwsLm1hdC1mb290ZXItY2VsbHtmb250LXNpemU6MTRweH0ubWF0LWNhbGVuZGFye2ZvbnQtZmFtaWx5OlJvYm90byxcIkhlbHZldGljYSBOZXVlXCIsc2Fucy1zZXJpZn0ubWF0LWNhbGVuZGFyLWJvZHl7Zm9udC1zaXplOjEzcHh9Lm1hdC1jYWxlbmRhci1ib2R5LWxhYmVsLC5tYXQtY2FsZW5kYXItcGVyaW9kLWJ1dHRvbntmb250LXNpemU6MTRweDtmb250LXdlaWdodDo1MDB9Lm1hdC1jYWxlbmRhci10YWJsZS1oZWFkZXIgdGh7Zm9udC1zaXplOjExcHg7Zm9udC13ZWlnaHQ6NDAwfS5tYXQtZGlhbG9nLXRpdGxle2ZvbnQ6NTAwIDIwcHgvMzJweCBSb2JvdG8sXCJIZWx2ZXRpY2EgTmV1ZVwiLHNhbnMtc2VyaWZ9Lm1hdC1leHBhbnNpb24tcGFuZWwtaGVhZGVye2ZvbnQtZmFtaWx5OlJvYm90byxcIkhlbHZldGljYSBOZXVlXCIsc2Fucy1zZXJpZjtmb250LXNpemU6MTVweDtmb250LXdlaWdodDo0MDB9Lm1hdC1leHBhbnNpb24tcGFuZWwtY29udGVudHtmb250OjQwMCAxNHB4LzIwcHggUm9ib3RvLFwiSGVsdmV0aWNhIE5ldWVcIixzYW5zLXNlcmlmfS5tYXQtZm9ybS1maWVsZHtmb250LXNpemU6aW5oZXJpdDtmb250LXdlaWdodDo0MDA7bGluZS1oZWlnaHQ6MS4xMjU7Zm9udC1mYW1pbHk6Um9ib3RvLFwiSGVsdmV0aWNhIE5ldWVcIixzYW5zLXNlcmlmfS5tYXQtZm9ybS1maWVsZC13cmFwcGVye3BhZGRpbmctYm90dG9tOjEuMzQzNzVlbX0ubWF0LWZvcm0tZmllbGQtcHJlZml4IC5tYXQtaWNvbiwubWF0LWZvcm0tZmllbGQtc3VmZml4IC5tYXQtaWNvbntmb250LXNpemU6MTUwJTtsaW5lLWhlaWdodDoxLjEyNX0ubWF0LWZvcm0tZmllbGQtcHJlZml4IC5tYXQtaWNvbi1idXR0b24sLm1hdC1mb3JtLWZpZWxkLXN1ZmZpeCAubWF0LWljb24tYnV0dG9ue2hlaWdodDoxLjVlbTt3aWR0aDoxLjVlbX0ubWF0LWZvcm0tZmllbGQtcHJlZml4IC5tYXQtaWNvbi1idXR0b24gLm1hdC1pY29uLC5tYXQtZm9ybS1maWVsZC1zdWZmaXggLm1hdC1pY29uLWJ1dHRvbiAubWF0LWljb257aGVpZ2h0OjEuMTI1ZW07bGluZS1oZWlnaHQ6MS4xMjV9Lm1hdC1mb3JtLWZpZWxkLWluZml4e3BhZGRpbmc6LjVlbSAwO2JvcmRlci10b3A6Ljg0Mzc1ZW0gc29saWQgdHJhbnNwYXJlbnR9Lm1hdC1mb3JtLWZpZWxkLWNhbi1mbG9hdCAubWF0LWlucHV0LXNlcnZlcjpmb2N1cysubWF0LWZvcm0tZmllbGQtbGFiZWwtd3JhcHBlciAubWF0LWZvcm0tZmllbGQtbGFiZWwsLm1hdC1mb3JtLWZpZWxkLWNhbi1mbG9hdC5tYXQtZm9ybS1maWVsZC1zaG91bGQtZmxvYXQgLm1hdC1mb3JtLWZpZWxkLWxhYmVse3RyYW5zZm9ybTp0cmFuc2xhdGVZKC0xLjM0Mzc1ZW0pIHNjYWxlKC43NSk7d2lkdGg6MTMzLjMzMzMzJX0ubWF0LWZvcm0tZmllbGQtY2FuLWZsb2F0IC5tYXQtaW5wdXQtc2VydmVyW2xhYmVsXTpub3QoOmxhYmVsLXNob3duKSsubWF0LWZvcm0tZmllbGQtbGFiZWwtd3JhcHBlciAubWF0LWZvcm0tZmllbGQtbGFiZWx7dHJhbnNmb3JtOnRyYW5zbGF0ZVkoLTEuMzQzNzRlbSkgc2NhbGUoLjc1KTt3aWR0aDoxMzMuMzMzMzQlfS5tYXQtZm9ybS1maWVsZC1sYWJlbC13cmFwcGVye3RvcDotLjg0Mzc1ZW07cGFkZGluZy10b3A6Ljg0Mzc1ZW19Lm1hdC1mb3JtLWZpZWxkLWxhYmVse3RvcDoxLjM0Mzc1ZW19Lm1hdC1mb3JtLWZpZWxkLXVuZGVybGluZXtib3R0b206MS4zNDM3NWVtfS5tYXQtZm9ybS1maWVsZC1zdWJzY3JpcHQtd3JhcHBlcntmb250LXNpemU6NzUlO21hcmdpbi10b3A6LjY2NjY3ZW07dG9wOmNhbGMoMTAwJSAtIDEuNzkxNjdlbSl9Lm1hdC1mb3JtLWZpZWxkLWFwcGVhcmFuY2UtbGVnYWN5IC5tYXQtZm9ybS1maWVsZC13cmFwcGVye3BhZGRpbmctYm90dG9tOjEuMjVlbX0ubWF0LWZvcm0tZmllbGQtYXBwZWFyYW5jZS1sZWdhY3kgLm1hdC1mb3JtLWZpZWxkLWluZml4e3BhZGRpbmc6LjQzNzVlbSAwfS5tYXQtZm9ybS1maWVsZC1hcHBlYXJhbmNlLWxlZ2FjeS5tYXQtZm9ybS1maWVsZC1jYW4tZmxvYXQgLm1hdC1pbnB1dC1zZXJ2ZXI6Zm9jdXMrLm1hdC1mb3JtLWZpZWxkLWxhYmVsLXdyYXBwZXIgLm1hdC1mb3JtLWZpZWxkLWxhYmVsLC5tYXQtZm9ybS1maWVsZC1hcHBlYXJhbmNlLWxlZ2FjeS5tYXQtZm9ybS1maWVsZC1jYW4tZmxvYXQubWF0LWZvcm0tZmllbGQtc2hvdWxkLWZsb2F0IC5tYXQtZm9ybS1maWVsZC1sYWJlbHt0cmFuc2Zvcm06dHJhbnNsYXRlWSgtMS4yODEyNWVtKSBzY2FsZSguNzUpIHBlcnNwZWN0aXZlKDEwMHB4KSB0cmFuc2xhdGVaKC4wMDFweCk7LW1zLXRyYW5zZm9ybTp0cmFuc2xhdGVZKC0xLjI4MTI1ZW0pIHNjYWxlKC43NSk7d2lkdGg6MTMzLjMzMzMzJX0ubWF0LWZvcm0tZmllbGQtYXBwZWFyYW5jZS1sZWdhY3kubWF0LWZvcm0tZmllbGQtY2FuLWZsb2F0IC5tYXQtZm9ybS1maWVsZC1hdXRvZmlsbC1jb250cm9sOi13ZWJraXQtYXV0b2ZpbGwrLm1hdC1mb3JtLWZpZWxkLWxhYmVsLXdyYXBwZXIgLm1hdC1mb3JtLWZpZWxkLWxhYmVse3RyYW5zZm9ybTp0cmFuc2xhdGVZKC0xLjI4MTI1ZW0pIHNjYWxlKC43NSkgcGVyc3BlY3RpdmUoMTAwcHgpIHRyYW5zbGF0ZVooLjAwMTAxcHgpOy1tcy10cmFuc2Zvcm06dHJhbnNsYXRlWSgtMS4yODEyNGVtKSBzY2FsZSguNzUpO3dpZHRoOjEzMy4zMzMzNCV9Lm1hdC1mb3JtLWZpZWxkLWFwcGVhcmFuY2UtbGVnYWN5Lm1hdC1mb3JtLWZpZWxkLWNhbi1mbG9hdCAubWF0LWlucHV0LXNlcnZlcltsYWJlbF06bm90KDpsYWJlbC1zaG93bikrLm1hdC1mb3JtLWZpZWxkLWxhYmVsLXdyYXBwZXIgLm1hdC1mb3JtLWZpZWxkLWxhYmVse3RyYW5zZm9ybTp0cmFuc2xhdGVZKC0xLjI4MTI1ZW0pIHNjYWxlKC43NSkgcGVyc3BlY3RpdmUoMTAwcHgpIHRyYW5zbGF0ZVooLjAwMTAycHgpOy1tcy10cmFuc2Zvcm06dHJhbnNsYXRlWSgtMS4yODEyM2VtKSBzY2FsZSguNzUpO3dpZHRoOjEzMy4zMzMzNSV9Lm1hdC1mb3JtLWZpZWxkLWFwcGVhcmFuY2UtbGVnYWN5IC5tYXQtZm9ybS1maWVsZC1sYWJlbHt0b3A6MS4yODEyNWVtfS5tYXQtZm9ybS1maWVsZC1hcHBlYXJhbmNlLWxlZ2FjeSAubWF0LWZvcm0tZmllbGQtdW5kZXJsaW5le2JvdHRvbToxLjI1ZW19Lm1hdC1mb3JtLWZpZWxkLWFwcGVhcmFuY2UtbGVnYWN5IC5tYXQtZm9ybS1maWVsZC1zdWJzY3JpcHQtd3JhcHBlcnttYXJnaW4tdG9wOi41NDE2N2VtO3RvcDpjYWxjKDEwMCUgLSAxLjY2NjY3ZW0pfUBtZWRpYSBwcmludHsubWF0LWZvcm0tZmllbGQtYXBwZWFyYW5jZS1sZWdhY3kubWF0LWZvcm0tZmllbGQtY2FuLWZsb2F0IC5tYXQtaW5wdXQtc2VydmVyOmZvY3VzKy5tYXQtZm9ybS1maWVsZC1sYWJlbC13cmFwcGVyIC5tYXQtZm9ybS1maWVsZC1sYWJlbCwubWF0LWZvcm0tZmllbGQtYXBwZWFyYW5jZS1sZWdhY3kubWF0LWZvcm0tZmllbGQtY2FuLWZsb2F0Lm1hdC1mb3JtLWZpZWxkLXNob3VsZC1mbG9hdCAubWF0LWZvcm0tZmllbGQtbGFiZWx7dHJhbnNmb3JtOnRyYW5zbGF0ZVkoLTEuMjgxMjJlbSkgc2NhbGUoLjc1KX0ubWF0LWZvcm0tZmllbGQtYXBwZWFyYW5jZS1sZWdhY3kubWF0LWZvcm0tZmllbGQtY2FuLWZsb2F0IC5tYXQtZm9ybS1maWVsZC1hdXRvZmlsbC1jb250cm9sOi13ZWJraXQtYXV0b2ZpbGwrLm1hdC1mb3JtLWZpZWxkLWxhYmVsLXdyYXBwZXIgLm1hdC1mb3JtLWZpZWxkLWxhYmVse3RyYW5zZm9ybTp0cmFuc2xhdGVZKC0xLjI4MTIxZW0pIHNjYWxlKC43NSl9Lm1hdC1mb3JtLWZpZWxkLWFwcGVhcmFuY2UtbGVnYWN5Lm1hdC1mb3JtLWZpZWxkLWNhbi1mbG9hdCAubWF0LWlucHV0LXNlcnZlcltsYWJlbF06bm90KDpsYWJlbC1zaG93bikrLm1hdC1mb3JtLWZpZWxkLWxhYmVsLXdyYXBwZXIgLm1hdC1mb3JtLWZpZWxkLWxhYmVse3RyYW5zZm9ybTp0cmFuc2xhdGVZKC0xLjI4MTJlbSkgc2NhbGUoLjc1KX19Lm1hdC1mb3JtLWZpZWxkLWFwcGVhcmFuY2UtZmlsbCAubWF0LWZvcm0tZmllbGQtaW5maXh7cGFkZGluZzouMjVlbSAwIC43NWVtIDB9Lm1hdC1mb3JtLWZpZWxkLWFwcGVhcmFuY2UtZmlsbCAubWF0LWZvcm0tZmllbGQtbGFiZWx7dG9wOjEuMDkzNzVlbTttYXJnaW4tdG9wOi0uNWVtfS5tYXQtZm9ybS1maWVsZC1hcHBlYXJhbmNlLWZpbGwubWF0LWZvcm0tZmllbGQtY2FuLWZsb2F0IC5tYXQtaW5wdXQtc2VydmVyOmZvY3VzKy5tYXQtZm9ybS1maWVsZC1sYWJlbC13cmFwcGVyIC5tYXQtZm9ybS1maWVsZC1sYWJlbCwubWF0LWZvcm0tZmllbGQtYXBwZWFyYW5jZS1maWxsLm1hdC1mb3JtLWZpZWxkLWNhbi1mbG9hdC5tYXQtZm9ybS1maWVsZC1zaG91bGQtZmxvYXQgLm1hdC1mb3JtLWZpZWxkLWxhYmVse3RyYW5zZm9ybTp0cmFuc2xhdGVZKC0uNTkzNzVlbSkgc2NhbGUoLjc1KTt3aWR0aDoxMzMuMzMzMzMlfS5tYXQtZm9ybS1maWVsZC1hcHBlYXJhbmNlLWZpbGwubWF0LWZvcm0tZmllbGQtY2FuLWZsb2F0IC5tYXQtaW5wdXQtc2VydmVyW2xhYmVsXTpub3QoOmxhYmVsLXNob3duKSsubWF0LWZvcm0tZmllbGQtbGFiZWwtd3JhcHBlciAubWF0LWZvcm0tZmllbGQtbGFiZWx7dHJhbnNmb3JtOnRyYW5zbGF0ZVkoLS41OTM3NGVtKSBzY2FsZSguNzUpO3dpZHRoOjEzMy4zMzMzNCV9Lm1hdC1mb3JtLWZpZWxkLWFwcGVhcmFuY2Utb3V0bGluZSAubWF0LWZvcm0tZmllbGQtaW5maXh7cGFkZGluZzoxZW0gMCAxZW0gMH0ubWF0LWZvcm0tZmllbGQtYXBwZWFyYW5jZS1vdXRsaW5lIC5tYXQtZm9ybS1maWVsZC1sYWJlbHt0b3A6MS44NDM3NWVtO21hcmdpbi10b3A6LS4yNWVtfS5tYXQtZm9ybS1maWVsZC1hcHBlYXJhbmNlLW91dGxpbmUubWF0LWZvcm0tZmllbGQtY2FuLWZsb2F0IC5tYXQtaW5wdXQtc2VydmVyOmZvY3VzKy5tYXQtZm9ybS1maWVsZC1sYWJlbC13cmFwcGVyIC5tYXQtZm9ybS1maWVsZC1sYWJlbCwubWF0LWZvcm0tZmllbGQtYXBwZWFyYW5jZS1vdXRsaW5lLm1hdC1mb3JtLWZpZWxkLWNhbi1mbG9hdC5tYXQtZm9ybS1maWVsZC1zaG91bGQtZmxvYXQgLm1hdC1mb3JtLWZpZWxkLWxhYmVse3RyYW5zZm9ybTp0cmFuc2xhdGVZKC0xLjU5Mzc1ZW0pIHNjYWxlKC43NSk7d2lkdGg6MTMzLjMzMzMzJX0ubWF0LWZvcm0tZmllbGQtYXBwZWFyYW5jZS1vdXRsaW5lLm1hdC1mb3JtLWZpZWxkLWNhbi1mbG9hdCAubWF0LWlucHV0LXNlcnZlcltsYWJlbF06bm90KDpsYWJlbC1zaG93bikrLm1hdC1mb3JtLWZpZWxkLWxhYmVsLXdyYXBwZXIgLm1hdC1mb3JtLWZpZWxkLWxhYmVse3RyYW5zZm9ybTp0cmFuc2xhdGVZKC0xLjU5Mzc0ZW0pIHNjYWxlKC43NSk7d2lkdGg6MTMzLjMzMzM0JX0ubWF0LWdyaWQtdGlsZS1mb290ZXIsLm1hdC1ncmlkLXRpbGUtaGVhZGVye2ZvbnQtc2l6ZToxNHB4fS5tYXQtZ3JpZC10aWxlLWZvb3RlciAubWF0LWxpbmUsLm1hdC1ncmlkLXRpbGUtaGVhZGVyIC5tYXQtbGluZXt3aGl0ZS1zcGFjZTpub3dyYXA7b3ZlcmZsb3c6aGlkZGVuO3RleHQtb3ZlcmZsb3c6ZWxsaXBzaXM7ZGlzcGxheTpibG9jaztib3gtc2l6aW5nOmJvcmRlci1ib3h9Lm1hdC1ncmlkLXRpbGUtZm9vdGVyIC5tYXQtbGluZTpudGgtY2hpbGQobisyKSwubWF0LWdyaWQtdGlsZS1oZWFkZXIgLm1hdC1saW5lOm50aC1jaGlsZChuKzIpe2ZvbnQtc2l6ZToxMnB4fWlucHV0Lm1hdC1pbnB1dC1lbGVtZW50e21hcmdpbi10b3A6LS4wNjI1ZW19Lm1hdC1tZW51LWl0ZW17Zm9udC1mYW1pbHk6Um9ib3RvLFwiSGVsdmV0aWNhIE5ldWVcIixzYW5zLXNlcmlmO2ZvbnQtc2l6ZToxNHB4O2ZvbnQtd2VpZ2h0OjQwMH0ubWF0LXBhZ2luYXRvciwubWF0LXBhZ2luYXRvci1wYWdlLXNpemUgLm1hdC1zZWxlY3QtdHJpZ2dlcntmb250LWZhbWlseTpSb2JvdG8sXCJIZWx2ZXRpY2EgTmV1ZVwiLHNhbnMtc2VyaWY7Zm9udC1zaXplOjEycHh9Lm1hdC1yYWRpby1idXR0b257Zm9udC1mYW1pbHk6Um9ib3RvLFwiSGVsdmV0aWNhIE5ldWVcIixzYW5zLXNlcmlmfS5tYXQtc2VsZWN0e2ZvbnQtZmFtaWx5OlJvYm90byxcIkhlbHZldGljYSBOZXVlXCIsc2Fucy1zZXJpZn0ubWF0LXNlbGVjdC10cmlnZ2Vye2hlaWdodDoxLjEyNWVtfS5tYXQtc2xpZGUtdG9nZ2xlLWNvbnRlbnR7Zm9udC1mYW1pbHk6Um9ib3RvLFwiSGVsdmV0aWNhIE5ldWVcIixzYW5zLXNlcmlmfS5tYXQtc2xpZGVyLXRodW1iLWxhYmVsLXRleHR7Zm9udC1mYW1pbHk6Um9ib3RvLFwiSGVsdmV0aWNhIE5ldWVcIixzYW5zLXNlcmlmO2ZvbnQtc2l6ZToxMnB4O2ZvbnQtd2VpZ2h0OjUwMH0ubWF0LXN0ZXBwZXItaG9yaXpvbnRhbCwubWF0LXN0ZXBwZXItdmVydGljYWx7Zm9udC1mYW1pbHk6Um9ib3RvLFwiSGVsdmV0aWNhIE5ldWVcIixzYW5zLXNlcmlmfS5tYXQtc3RlcC1sYWJlbHtmb250LXNpemU6MTRweDtmb250LXdlaWdodDo0MDB9Lm1hdC1zdGVwLXN1Yi1sYWJlbC1lcnJvcntmb250LXdlaWdodDo0MDB9Lm1hdC1zdGVwLWxhYmVsLWVycm9ye2ZvbnQtc2l6ZToxNHB4fS5tYXQtc3RlcC1sYWJlbC1zZWxlY3RlZHtmb250LXNpemU6MTRweDtmb250LXdlaWdodDo1MDB9Lm1hdC10YWItZ3JvdXB7Zm9udC1mYW1pbHk6Um9ib3RvLFwiSGVsdmV0aWNhIE5ldWVcIixzYW5zLXNlcmlmfS5tYXQtdGFiLWxhYmVsLC5tYXQtdGFiLWxpbmt7Zm9udC1mYW1pbHk6Um9ib3RvLFwiSGVsdmV0aWNhIE5ldWVcIixzYW5zLXNlcmlmO2ZvbnQtc2l6ZToxNHB4O2ZvbnQtd2VpZ2h0OjUwMH0ubWF0LXRvb2xiYXIsLm1hdC10b29sYmFyIGgxLC5tYXQtdG9vbGJhciBoMiwubWF0LXRvb2xiYXIgaDMsLm1hdC10b29sYmFyIGg0LC5tYXQtdG9vbGJhciBoNSwubWF0LXRvb2xiYXIgaDZ7Zm9udDo1MDAgMjBweC8zMnB4IFJvYm90byxcIkhlbHZldGljYSBOZXVlXCIsc2Fucy1zZXJpZjttYXJnaW46MH0ubWF0LXRvb2x0aXB7Zm9udC1mYW1pbHk6Um9ib3RvLFwiSGVsdmV0aWNhIE5ldWVcIixzYW5zLXNlcmlmO2ZvbnQtc2l6ZToxMHB4O3BhZGRpbmctdG9wOjZweDtwYWRkaW5nLWJvdHRvbTo2cHh9Lm1hdC10b29sdGlwLWhhbmRzZXR7Zm9udC1zaXplOjE0cHg7cGFkZGluZy10b3A6OHB4O3BhZGRpbmctYm90dG9tOjhweH0ubWF0LWxpc3QtaXRlbXtmb250LWZhbWlseTpSb2JvdG8sXCJIZWx2ZXRpY2EgTmV1ZVwiLHNhbnMtc2VyaWZ9Lm1hdC1saXN0LW9wdGlvbntmb250LWZhbWlseTpSb2JvdG8sXCJIZWx2ZXRpY2EgTmV1ZVwiLHNhbnMtc2VyaWZ9Lm1hdC1saXN0IC5tYXQtbGlzdC1pdGVtLC5tYXQtbmF2LWxpc3QgLm1hdC1saXN0LWl0ZW0sLm1hdC1zZWxlY3Rpb24tbGlzdCAubWF0LWxpc3QtaXRlbXtmb250LXNpemU6MTZweH0ubWF0LWxpc3QgLm1hdC1saXN0LWl0ZW0gLm1hdC1saW5lLC5tYXQtbmF2LWxpc3QgLm1hdC1saXN0LWl0ZW0gLm1hdC1saW5lLC5tYXQtc2VsZWN0aW9uLWxpc3QgLm1hdC1saXN0LWl0ZW0gLm1hdC1saW5le3doaXRlLXNwYWNlOm5vd3JhcDtvdmVyZmxvdzpoaWRkZW47dGV4dC1vdmVyZmxvdzplbGxpcHNpcztkaXNwbGF5OmJsb2NrO2JveC1zaXppbmc6Ym9yZGVyLWJveH0ubWF0LWxpc3QgLm1hdC1saXN0LWl0ZW0gLm1hdC1saW5lOm50aC1jaGlsZChuKzIpLC5tYXQtbmF2LWxpc3QgLm1hdC1saXN0LWl0ZW0gLm1hdC1saW5lOm50aC1jaGlsZChuKzIpLC5tYXQtc2VsZWN0aW9uLWxpc3QgLm1hdC1saXN0LWl0ZW0gLm1hdC1saW5lOm50aC1jaGlsZChuKzIpe2ZvbnQtc2l6ZToxNHB4fS5tYXQtbGlzdCAubWF0LWxpc3Qtb3B0aW9uLC5tYXQtbmF2LWxpc3QgLm1hdC1saXN0LW9wdGlvbiwubWF0LXNlbGVjdGlvbi1saXN0IC5tYXQtbGlzdC1vcHRpb257Zm9udC1zaXplOjE2cHh9Lm1hdC1saXN0IC5tYXQtbGlzdC1vcHRpb24gLm1hdC1saW5lLC5tYXQtbmF2LWxpc3QgLm1hdC1saXN0LW9wdGlvbiAubWF0LWxpbmUsLm1hdC1zZWxlY3Rpb24tbGlzdCAubWF0LWxpc3Qtb3B0aW9uIC5tYXQtbGluZXt3aGl0ZS1zcGFjZTpub3dyYXA7b3ZlcmZsb3c6aGlkZGVuO3RleHQtb3ZlcmZsb3c6ZWxsaXBzaXM7ZGlzcGxheTpibG9jaztib3gtc2l6aW5nOmJvcmRlci1ib3h9Lm1hdC1saXN0IC5tYXQtbGlzdC1vcHRpb24gLm1hdC1saW5lOm50aC1jaGlsZChuKzIpLC5tYXQtbmF2LWxpc3QgLm1hdC1saXN0LW9wdGlvbiAubWF0LWxpbmU6bnRoLWNoaWxkKG4rMiksLm1hdC1zZWxlY3Rpb24tbGlzdCAubWF0LWxpc3Qtb3B0aW9uIC5tYXQtbGluZTpudGgtY2hpbGQobisyKXtmb250LXNpemU6MTRweH0ubWF0LWxpc3QgLm1hdC1zdWJoZWFkZXIsLm1hdC1uYXYtbGlzdCAubWF0LXN1YmhlYWRlciwubWF0LXNlbGVjdGlvbi1saXN0IC5tYXQtc3ViaGVhZGVye2ZvbnQtZmFtaWx5OlJvYm90byxcIkhlbHZldGljYSBOZXVlXCIsc2Fucy1zZXJpZjtmb250LXNpemU6MTRweDtmb250LXdlaWdodDo1MDB9Lm1hdC1saXN0W2RlbnNlXSAubWF0LWxpc3QtaXRlbSwubWF0LW5hdi1saXN0W2RlbnNlXSAubWF0LWxpc3QtaXRlbSwubWF0LXNlbGVjdGlvbi1saXN0W2RlbnNlXSAubWF0LWxpc3QtaXRlbXtmb250LXNpemU6MTJweH0ubWF0LWxpc3RbZGVuc2VdIC5tYXQtbGlzdC1pdGVtIC5tYXQtbGluZSwubWF0LW5hdi1saXN0W2RlbnNlXSAubWF0LWxpc3QtaXRlbSAubWF0LWxpbmUsLm1hdC1zZWxlY3Rpb24tbGlzdFtkZW5zZV0gLm1hdC1saXN0LWl0ZW0gLm1hdC1saW5le3doaXRlLXNwYWNlOm5vd3JhcDtvdmVyZmxvdzpoaWRkZW47dGV4dC1vdmVyZmxvdzplbGxpcHNpcztkaXNwbGF5OmJsb2NrO2JveC1zaXppbmc6Ym9yZGVyLWJveH0ubWF0LWxpc3RbZGVuc2VdIC5tYXQtbGlzdC1pdGVtIC5tYXQtbGluZTpudGgtY2hpbGQobisyKSwubWF0LW5hdi1saXN0W2RlbnNlXSAubWF0LWxpc3QtaXRlbSAubWF0LWxpbmU6bnRoLWNoaWxkKG4rMiksLm1hdC1zZWxlY3Rpb24tbGlzdFtkZW5zZV0gLm1hdC1saXN0LWl0ZW0gLm1hdC1saW5lOm50aC1jaGlsZChuKzIpe2ZvbnQtc2l6ZToxMnB4fS5tYXQtbGlzdFtkZW5zZV0gLm1hdC1saXN0LW9wdGlvbiwubWF0LW5hdi1saXN0W2RlbnNlXSAubWF0LWxpc3Qtb3B0aW9uLC5tYXQtc2VsZWN0aW9uLWxpc3RbZGVuc2VdIC5tYXQtbGlzdC1vcHRpb257Zm9udC1zaXplOjEycHh9Lm1hdC1saXN0W2RlbnNlXSAubWF0LWxpc3Qtb3B0aW9uIC5tYXQtbGluZSwubWF0LW5hdi1saXN0W2RlbnNlXSAubWF0LWxpc3Qtb3B0aW9uIC5tYXQtbGluZSwubWF0LXNlbGVjdGlvbi1saXN0W2RlbnNlXSAubWF0LWxpc3Qtb3B0aW9uIC5tYXQtbGluZXt3aGl0ZS1zcGFjZTpub3dyYXA7b3ZlcmZsb3c6aGlkZGVuO3RleHQtb3ZlcmZsb3c6ZWxsaXBzaXM7ZGlzcGxheTpibG9jaztib3gtc2l6aW5nOmJvcmRlci1ib3h9Lm1hdC1saXN0W2RlbnNlXSAubWF0LWxpc3Qtb3B0aW9uIC5tYXQtbGluZTpudGgtY2hpbGQobisyKSwubWF0LW5hdi1saXN0W2RlbnNlXSAubWF0LWxpc3Qtb3B0aW9uIC5tYXQtbGluZTpudGgtY2hpbGQobisyKSwubWF0LXNlbGVjdGlvbi1saXN0W2RlbnNlXSAubWF0LWxpc3Qtb3B0aW9uIC5tYXQtbGluZTpudGgtY2hpbGQobisyKXtmb250LXNpemU6MTJweH0ubWF0LWxpc3RbZGVuc2VdIC5tYXQtc3ViaGVhZGVyLC5tYXQtbmF2LWxpc3RbZGVuc2VdIC5tYXQtc3ViaGVhZGVyLC5tYXQtc2VsZWN0aW9uLWxpc3RbZGVuc2VdIC5tYXQtc3ViaGVhZGVye2ZvbnQtZmFtaWx5OlJvYm90byxcIkhlbHZldGljYSBOZXVlXCIsc2Fucy1zZXJpZjtmb250LXNpemU6MTJweDtmb250LXdlaWdodDo1MDB9Lm1hdC1vcHRpb257Zm9udC1mYW1pbHk6Um9ib3RvLFwiSGVsdmV0aWNhIE5ldWVcIixzYW5zLXNlcmlmO2ZvbnQtc2l6ZToxNnB4fS5tYXQtb3B0Z3JvdXAtbGFiZWx7Zm9udDo1MDAgMTRweC8yNHB4IFJvYm90byxcIkhlbHZldGljYSBOZXVlXCIsc2Fucy1zZXJpZn0ubWF0LXNpbXBsZS1zbmFja2Jhcntmb250LWZhbWlseTpSb2JvdG8sXCJIZWx2ZXRpY2EgTmV1ZVwiLHNhbnMtc2VyaWY7Zm9udC1zaXplOjE0cHh9Lm1hdC1zaW1wbGUtc25hY2tiYXItYWN0aW9ue2xpbmUtaGVpZ2h0OjE7Zm9udC1mYW1pbHk6aW5oZXJpdDtmb250LXNpemU6aW5oZXJpdDtmb250LXdlaWdodDo1MDB9Lm1hdC10cmVle2ZvbnQtZmFtaWx5OlJvYm90byxcIkhlbHZldGljYSBOZXVlXCIsc2Fucy1zZXJpZn0ubWF0LW5lc3RlZC10cmVlLW5vZGUsLm1hdC10cmVlLW5vZGV7Zm9udC13ZWlnaHQ6NDAwO2ZvbnQtc2l6ZToxNHB4fS5tYXQtcmlwcGxle292ZXJmbG93OmhpZGRlbjtwb3NpdGlvbjpyZWxhdGl2ZX0ubWF0LXJpcHBsZS5tYXQtcmlwcGxlLXVuYm91bmRlZHtvdmVyZmxvdzp2aXNpYmxlfS5tYXQtcmlwcGxlLWVsZW1lbnR7cG9zaXRpb246YWJzb2x1dGU7Ym9yZGVyLXJhZGl1czo1MCU7cG9pbnRlci1ldmVudHM6bm9uZTt0cmFuc2l0aW9uOm9wYWNpdHksdHJhbnNmb3JtIDBzIGN1YmljLWJlemllcigwLDAsLjIsMSk7dHJhbnNmb3JtOnNjYWxlKDApfUBtZWRpYSBzY3JlZW4gYW5kICgtbXMtaGlnaC1jb250cmFzdDphY3RpdmUpey5tYXQtcmlwcGxlLWVsZW1lbnR7ZGlzcGxheTpub25lfX0uY2RrLXZpc3VhbGx5LWhpZGRlbntib3JkZXI6MDtjbGlwOnJlY3QoMCAwIDAgMCk7aGVpZ2h0OjFweDttYXJnaW46LTFweDtvdmVyZmxvdzpoaWRkZW47cGFkZGluZzowO3Bvc2l0aW9uOmFic29sdXRlO3dpZHRoOjFweDtvdXRsaW5lOjA7LXdlYmtpdC1hcHBlYXJhbmNlOm5vbmU7LW1vei1hcHBlYXJhbmNlOm5vbmV9LmNkay1nbG9iYWwtb3ZlcmxheS13cmFwcGVyLC5jZGstb3ZlcmxheS1jb250YWluZXJ7cG9pbnRlci1ldmVudHM6bm9uZTt0b3A6MDtsZWZ0OjA7aGVpZ2h0OjEwMCU7d2lkdGg6MTAwJX0uY2RrLW92ZXJsYXktY29udGFpbmVye3Bvc2l0aW9uOmZpeGVkO3otaW5kZXg6MTAwMH0uY2RrLW92ZXJsYXktY29udGFpbmVyOmVtcHR5e2Rpc3BsYXk6bm9uZX0uY2RrLWdsb2JhbC1vdmVybGF5LXdyYXBwZXJ7ZGlzcGxheTpmbGV4O3Bvc2l0aW9uOmFic29sdXRlO3otaW5kZXg6MTAwMH0uY2RrLW92ZXJsYXktcGFuZXtwb3NpdGlvbjphYnNvbHV0ZTtwb2ludGVyLWV2ZW50czphdXRvO2JveC1zaXppbmc6Ym9yZGVyLWJveDt6LWluZGV4OjEwMDA7ZGlzcGxheTpmbGV4O21heC13aWR0aDoxMDAlO21heC1oZWlnaHQ6MTAwJX0uY2RrLW92ZXJsYXktYmFja2Ryb3B7cG9zaXRpb246YWJzb2x1dGU7dG9wOjA7Ym90dG9tOjA7bGVmdDowO3JpZ2h0OjA7ei1pbmRleDoxMDAwO3BvaW50ZXItZXZlbnRzOmF1dG87LXdlYmtpdC10YXAtaGlnaGxpZ2h0LWNvbG9yOnRyYW5zcGFyZW50O3RyYW5zaXRpb246b3BhY2l0eSAuNHMgY3ViaWMtYmV6aWVyKC4yNSwuOCwuMjUsMSk7b3BhY2l0eTowfS5jZGstb3ZlcmxheS1iYWNrZHJvcC5jZGstb3ZlcmxheS1iYWNrZHJvcC1zaG93aW5ne29wYWNpdHk6MX1AbWVkaWEgc2NyZWVuIGFuZCAoLW1zLWhpZ2gtY29udHJhc3Q6YWN0aXZlKXsuY2RrLW92ZXJsYXktYmFja2Ryb3AuY2RrLW92ZXJsYXktYmFja2Ryb3Atc2hvd2luZ3tvcGFjaXR5Oi42fX0uY2RrLW92ZXJsYXktZGFyay1iYWNrZHJvcHtiYWNrZ3JvdW5kOnJnYmEoMCwwLDAsLjMyKX0uY2RrLW92ZXJsYXktdHJhbnNwYXJlbnQtYmFja2Ryb3AsLmNkay1vdmVybGF5LXRyYW5zcGFyZW50LWJhY2tkcm9wLmNkay1vdmVybGF5LWJhY2tkcm9wLXNob3dpbmd7b3BhY2l0eTowfS5jZGstb3ZlcmxheS1jb25uZWN0ZWQtcG9zaXRpb24tYm91bmRpbmctYm94e3Bvc2l0aW9uOmFic29sdXRlO3otaW5kZXg6MTAwMDtkaXNwbGF5OmZsZXg7ZmxleC1kaXJlY3Rpb246Y29sdW1uO21pbi13aWR0aDoxcHg7bWluLWhlaWdodDoxcHh9LmNkay1nbG9iYWwtc2Nyb2xsYmxvY2t7cG9zaXRpb246Zml4ZWQ7d2lkdGg6MTAwJTtvdmVyZmxvdy15OnNjcm9sbH1Aa2V5ZnJhbWVzIGNkay10ZXh0LWZpZWxkLWF1dG9maWxsLXN0YXJ0ey8qISovfUBrZXlmcmFtZXMgY2RrLXRleHQtZmllbGQtYXV0b2ZpbGwtZW5key8qISovfS5jZGstdGV4dC1maWVsZC1hdXRvZmlsbC1tb25pdG9yZWQ6LXdlYmtpdC1hdXRvZmlsbHthbmltYXRpb24tbmFtZTpjZGstdGV4dC1maWVsZC1hdXRvZmlsbC1zdGFydH0uY2RrLXRleHQtZmllbGQtYXV0b2ZpbGwtbW9uaXRvcmVkOm5vdCg6LXdlYmtpdC1hdXRvZmlsbCl7YW5pbWF0aW9uLW5hbWU6Y2RrLXRleHQtZmllbGQtYXV0b2ZpbGwtZW5kfXRleHRhcmVhLmNkay10ZXh0YXJlYS1hdXRvc2l6ZXtyZXNpemU6bm9uZX10ZXh0YXJlYS5jZGstdGV4dGFyZWEtYXV0b3NpemUtbWVhc3VyaW5ne2hlaWdodDphdXRvIWltcG9ydGFudDtvdmVyZmxvdzpoaWRkZW4haW1wb3J0YW50O3BhZGRpbmc6MnB4IDAhaW1wb3J0YW50O2JveC1zaXppbmc6Y29udGVudC1ib3ghaW1wb3J0YW50fS5tYXQtcmlwcGxlLWVsZW1lbnR7YmFja2dyb3VuZC1jb2xvcjpyZ2JhKDAsMCwwLC4xKX0ubWF0LW9wdGlvbntjb2xvcjpyZ2JhKDAsMCwwLC44Nyl9Lm1hdC1vcHRpb246Zm9jdXM6bm90KC5tYXQtb3B0aW9uLWRpc2FibGVkKSwubWF0LW9wdGlvbjpob3Zlcjpub3QoLm1hdC1vcHRpb24tZGlzYWJsZWQpe2JhY2tncm91bmQ6cmdiYSgwLDAsMCwuMDQpfS5tYXQtb3B0aW9uLm1hdC1zZWxlY3RlZDpub3QoLm1hdC1vcHRpb24tbXVsdGlwbGUpOm5vdCgubWF0LW9wdGlvbi1kaXNhYmxlZCl7YmFja2dyb3VuZDpyZ2JhKDAsMCwwLC4wNCl9Lm1hdC1vcHRpb24ubWF0LWFjdGl2ZXtiYWNrZ3JvdW5kOnJnYmEoMCwwLDAsLjA0KTtjb2xvcjpyZ2JhKDAsMCwwLC44Nyl9Lm1hdC1vcHRpb24ubWF0LW9wdGlvbi1kaXNhYmxlZHtjb2xvcjpyZ2JhKDAsMCwwLC4zOCl9Lm1hdC1wcmltYXJ5IC5tYXQtb3B0aW9uLm1hdC1zZWxlY3RlZDpub3QoLm1hdC1vcHRpb24tZGlzYWJsZWQpe2NvbG9yOiMzZjUxYjV9Lm1hdC1hY2NlbnQgLm1hdC1vcHRpb24ubWF0LXNlbGVjdGVkOm5vdCgubWF0LW9wdGlvbi1kaXNhYmxlZCl7Y29sb3I6I2ZmNDA4MX0ubWF0LXdhcm4gLm1hdC1vcHRpb24ubWF0LXNlbGVjdGVkOm5vdCgubWF0LW9wdGlvbi1kaXNhYmxlZCl7Y29sb3I6I2Y0NDMzNn0ubWF0LW9wdGdyb3VwLWxhYmVse2NvbG9yOnJnYmEoMCwwLDAsLjU0KX0ubWF0LW9wdGdyb3VwLWRpc2FibGVkIC5tYXQtb3B0Z3JvdXAtbGFiZWx7Y29sb3I6cmdiYSgwLDAsMCwuMzgpfS5tYXQtcHNldWRvLWNoZWNrYm94e2NvbG9yOnJnYmEoMCwwLDAsLjU0KX0ubWF0LXBzZXVkby1jaGVja2JveDo6YWZ0ZXJ7Y29sb3I6I2ZhZmFmYX0ubWF0LWFjY2VudCAubWF0LXBzZXVkby1jaGVja2JveC1jaGVja2VkLC5tYXQtYWNjZW50IC5tYXQtcHNldWRvLWNoZWNrYm94LWluZGV0ZXJtaW5hdGUsLm1hdC1wc2V1ZG8tY2hlY2tib3gtY2hlY2tlZCwubWF0LXBzZXVkby1jaGVja2JveC1pbmRldGVybWluYXRle2JhY2tncm91bmQ6I2ZmNDA4MX0ubWF0LXByaW1hcnkgLm1hdC1wc2V1ZG8tY2hlY2tib3gtY2hlY2tlZCwubWF0LXByaW1hcnkgLm1hdC1wc2V1ZG8tY2hlY2tib3gtaW5kZXRlcm1pbmF0ZXtiYWNrZ3JvdW5kOiMzZjUxYjV9Lm1hdC13YXJuIC5tYXQtcHNldWRvLWNoZWNrYm94LWNoZWNrZWQsLm1hdC13YXJuIC5tYXQtcHNldWRvLWNoZWNrYm94LWluZGV0ZXJtaW5hdGV7YmFja2dyb3VuZDojZjQ0MzM2fS5tYXQtcHNldWRvLWNoZWNrYm94LWNoZWNrZWQubWF0LXBzZXVkby1jaGVja2JveC1kaXNhYmxlZHtiYWNrZ3JvdW5kOiNiMGIwYjB9Lm1hdC1lbGV2YXRpb24tejB7Ym94LXNoYWRvdzowIDAgMCAwIHJnYmEoMCwwLDAsLjIpLDAgMCAwIDAgcmdiYSgwLDAsMCwuMTQpLDAgMCAwIDAgcmdiYSgwLDAsMCwuMTIpfS5tYXQtZWxldmF0aW9uLXoxe2JveC1zaGFkb3c6MCAycHggMXB4IC0xcHggcmdiYSgwLDAsMCwuMiksMCAxcHggMXB4IDAgcmdiYSgwLDAsMCwuMTQpLDAgMXB4IDNweCAwIHJnYmEoMCwwLDAsLjEyKX0ubWF0LWVsZXZhdGlvbi16Mntib3gtc2hhZG93OjAgM3B4IDFweCAtMnB4IHJnYmEoMCwwLDAsLjIpLDAgMnB4IDJweCAwIHJnYmEoMCwwLDAsLjE0KSwwIDFweCA1cHggMCByZ2JhKDAsMCwwLC4xMil9Lm1hdC1lbGV2YXRpb24tejN7Ym94LXNoYWRvdzowIDNweCAzcHggLTJweCByZ2JhKDAsMCwwLC4yKSwwIDNweCA0cHggMCByZ2JhKDAsMCwwLC4xNCksMCAxcHggOHB4IDAgcmdiYSgwLDAsMCwuMTIpfS5tYXQtZWxldmF0aW9uLXo0e2JveC1zaGFkb3c6MCAycHggNHB4IC0xcHggcmdiYSgwLDAsMCwuMiksMCA0cHggNXB4IDAgcmdiYSgwLDAsMCwuMTQpLDAgMXB4IDEwcHggMCByZ2JhKDAsMCwwLC4xMil9Lm1hdC1lbGV2YXRpb24tejV7Ym94LXNoYWRvdzowIDNweCA1cHggLTFweCByZ2JhKDAsMCwwLC4yKSwwIDVweCA4cHggMCByZ2JhKDAsMCwwLC4xNCksMCAxcHggMTRweCAwIHJnYmEoMCwwLDAsLjEyKX0ubWF0LWVsZXZhdGlvbi16Nntib3gtc2hhZG93OjAgM3B4IDVweCAtMXB4IHJnYmEoMCwwLDAsLjIpLDAgNnB4IDEwcHggMCByZ2JhKDAsMCwwLC4xNCksMCAxcHggMThweCAwIHJnYmEoMCwwLDAsLjEyKX0ubWF0LWVsZXZhdGlvbi16N3tib3gtc2hhZG93OjAgNHB4IDVweCAtMnB4IHJnYmEoMCwwLDAsLjIpLDAgN3B4IDEwcHggMXB4IHJnYmEoMCwwLDAsLjE0KSwwIDJweCAxNnB4IDFweCByZ2JhKDAsMCwwLC4xMil9Lm1hdC1lbGV2YXRpb24tejh7Ym94LXNoYWRvdzowIDVweCA1cHggLTNweCByZ2JhKDAsMCwwLC4yKSwwIDhweCAxMHB4IDFweCByZ2JhKDAsMCwwLC4xNCksMCAzcHggMTRweCAycHggcmdiYSgwLDAsMCwuMTIpfS5tYXQtZWxldmF0aW9uLXo5e2JveC1zaGFkb3c6MCA1cHggNnB4IC0zcHggcmdiYSgwLDAsMCwuMiksMCA5cHggMTJweCAxcHggcmdiYSgwLDAsMCwuMTQpLDAgM3B4IDE2cHggMnB4IHJnYmEoMCwwLDAsLjEyKX0ubWF0LWVsZXZhdGlvbi16MTB7Ym94LXNoYWRvdzowIDZweCA2cHggLTNweCByZ2JhKDAsMCwwLC4yKSwwIDEwcHggMTRweCAxcHggcmdiYSgwLDAsMCwuMTQpLDAgNHB4IDE4cHggM3B4IHJnYmEoMCwwLDAsLjEyKX0ubWF0LWVsZXZhdGlvbi16MTF7Ym94LXNoYWRvdzowIDZweCA3cHggLTRweCByZ2JhKDAsMCwwLC4yKSwwIDExcHggMTVweCAxcHggcmdiYSgwLDAsMCwuMTQpLDAgNHB4IDIwcHggM3B4IHJnYmEoMCwwLDAsLjEyKX0ubWF0LWVsZXZhdGlvbi16MTJ7Ym94LXNoYWRvdzowIDdweCA4cHggLTRweCByZ2JhKDAsMCwwLC4yKSwwIDEycHggMTdweCAycHggcmdiYSgwLDAsMCwuMTQpLDAgNXB4IDIycHggNHB4IHJnYmEoMCwwLDAsLjEyKX0ubWF0LWVsZXZhdGlvbi16MTN7Ym94LXNoYWRvdzowIDdweCA4cHggLTRweCByZ2JhKDAsMCwwLC4yKSwwIDEzcHggMTlweCAycHggcmdiYSgwLDAsMCwuMTQpLDAgNXB4IDI0cHggNHB4IHJnYmEoMCwwLDAsLjEyKX0ubWF0LWVsZXZhdGlvbi16MTR7Ym94LXNoYWRvdzowIDdweCA5cHggLTRweCByZ2JhKDAsMCwwLC4yKSwwIDE0cHggMjFweCAycHggcmdiYSgwLDAsMCwuMTQpLDAgNXB4IDI2cHggNHB4IHJnYmEoMCwwLDAsLjEyKX0ubWF0LWVsZXZhdGlvbi16MTV7Ym94LXNoYWRvdzowIDhweCA5cHggLTVweCByZ2JhKDAsMCwwLC4yKSwwIDE1cHggMjJweCAycHggcmdiYSgwLDAsMCwuMTQpLDAgNnB4IDI4cHggNXB4IHJnYmEoMCwwLDAsLjEyKX0ubWF0LWVsZXZhdGlvbi16MTZ7Ym94LXNoYWRvdzowIDhweCAxMHB4IC01cHggcmdiYSgwLDAsMCwuMiksMCAxNnB4IDI0cHggMnB4IHJnYmEoMCwwLDAsLjE0KSwwIDZweCAzMHB4IDVweCByZ2JhKDAsMCwwLC4xMil9Lm1hdC1lbGV2YXRpb24tejE3e2JveC1zaGFkb3c6MCA4cHggMTFweCAtNXB4IHJnYmEoMCwwLDAsLjIpLDAgMTdweCAyNnB4IDJweCByZ2JhKDAsMCwwLC4xNCksMCA2cHggMzJweCA1cHggcmdiYSgwLDAsMCwuMTIpfS5tYXQtZWxldmF0aW9uLXoxOHtib3gtc2hhZG93OjAgOXB4IDExcHggLTVweCByZ2JhKDAsMCwwLC4yKSwwIDE4cHggMjhweCAycHggcmdiYSgwLDAsMCwuMTQpLDAgN3B4IDM0cHggNnB4IHJnYmEoMCwwLDAsLjEyKX0ubWF0LWVsZXZhdGlvbi16MTl7Ym94LXNoYWRvdzowIDlweCAxMnB4IC02cHggcmdiYSgwLDAsMCwuMiksMCAxOXB4IDI5cHggMnB4IHJnYmEoMCwwLDAsLjE0KSwwIDdweCAzNnB4IDZweCByZ2JhKDAsMCwwLC4xMil9Lm1hdC1lbGV2YXRpb24tejIwe2JveC1zaGFkb3c6MCAxMHB4IDEzcHggLTZweCByZ2JhKDAsMCwwLC4yKSwwIDIwcHggMzFweCAzcHggcmdiYSgwLDAsMCwuMTQpLDAgOHB4IDM4cHggN3B4IHJnYmEoMCwwLDAsLjEyKX0ubWF0LWVsZXZhdGlvbi16MjF7Ym94LXNoYWRvdzowIDEwcHggMTNweCAtNnB4IHJnYmEoMCwwLDAsLjIpLDAgMjFweCAzM3B4IDNweCByZ2JhKDAsMCwwLC4xNCksMCA4cHggNDBweCA3cHggcmdiYSgwLDAsMCwuMTIpfS5tYXQtZWxldmF0aW9uLXoyMntib3gtc2hhZG93OjAgMTBweCAxNHB4IC02cHggcmdiYSgwLDAsMCwuMiksMCAyMnB4IDM1cHggM3B4IHJnYmEoMCwwLDAsLjE0KSwwIDhweCA0MnB4IDdweCByZ2JhKDAsMCwwLC4xMil9Lm1hdC1lbGV2YXRpb24tejIze2JveC1zaGFkb3c6MCAxMXB4IDE0cHggLTdweCByZ2JhKDAsMCwwLC4yKSwwIDIzcHggMzZweCAzcHggcmdiYSgwLDAsMCwuMTQpLDAgOXB4IDQ0cHggOHB4IHJnYmEoMCwwLDAsLjEyKX0ubWF0LWVsZXZhdGlvbi16MjR7Ym94LXNoYWRvdzowIDExcHggMTVweCAtN3B4IHJnYmEoMCwwLDAsLjIpLDAgMjRweCAzOHB4IDNweCByZ2JhKDAsMCwwLC4xNCksMCA5cHggNDZweCA4cHggcmdiYSgwLDAsMCwuMTIpfS5tYXQtYXBwLWJhY2tncm91bmR7YmFja2dyb3VuZC1jb2xvcjojZmFmYWZhO2NvbG9yOnJnYmEoMCwwLDAsLjg3KX0ubWF0LXRoZW1lLWxvYWRlZC1tYXJrZXJ7ZGlzcGxheTpub25lfS5tYXQtYXV0b2NvbXBsZXRlLXBhbmVse2JhY2tncm91bmQ6I2ZmZjtjb2xvcjpyZ2JhKDAsMCwwLC44Nyl9Lm1hdC1hdXRvY29tcGxldGUtcGFuZWw6bm90KFtjbGFzcyo9bWF0LWVsZXZhdGlvbi16XSl7Ym94LXNoYWRvdzowIDJweCA0cHggLTFweCByZ2JhKDAsMCwwLC4yKSwwIDRweCA1cHggMCByZ2JhKDAsMCwwLC4xNCksMCAxcHggMTBweCAwIHJnYmEoMCwwLDAsLjEyKX0ubWF0LWF1dG9jb21wbGV0ZS1wYW5lbCAubWF0LW9wdGlvbi5tYXQtc2VsZWN0ZWQ6bm90KC5tYXQtYWN0aXZlKTpub3QoOmhvdmVyKXtiYWNrZ3JvdW5kOiNmZmZ9Lm1hdC1hdXRvY29tcGxldGUtcGFuZWwgLm1hdC1vcHRpb24ubWF0LXNlbGVjdGVkOm5vdCgubWF0LWFjdGl2ZSk6bm90KDpob3Zlcik6bm90KC5tYXQtb3B0aW9uLWRpc2FibGVkKXtjb2xvcjpyZ2JhKDAsMCwwLC44Nyl9Lm1hdC1iYWRnZS1jb250ZW50e2NvbG9yOiNmZmY7YmFja2dyb3VuZDojM2Y1MWI1fS5tYXQtYmFkZ2UtYWNjZW50IC5tYXQtYmFkZ2UtY29udGVudHtiYWNrZ3JvdW5kOiNmZjQwODE7Y29sb3I6I2ZmZn0ubWF0LWJhZGdlLXdhcm4gLm1hdC1iYWRnZS1jb250ZW50e2NvbG9yOiNmZmY7YmFja2dyb3VuZDojZjQ0MzM2fS5tYXQtYmFkZ2V7cG9zaXRpb246cmVsYXRpdmV9Lm1hdC1iYWRnZS1oaWRkZW4gLm1hdC1iYWRnZS1jb250ZW50e2Rpc3BsYXk6bm9uZX0ubWF0LWJhZGdlLWRpc2FibGVkIC5tYXQtYmFkZ2UtY29udGVudHtiYWNrZ3JvdW5kOiNiOWI5Yjk7Y29sb3I6cmdiYSgwLDAsMCwuMzgpfS5tYXQtYmFkZ2UtY29udGVudHtwb3NpdGlvbjphYnNvbHV0ZTt0ZXh0LWFsaWduOmNlbnRlcjtkaXNwbGF5OmlubGluZS1ibG9jaztib3JkZXItcmFkaXVzOjUwJTt0cmFuc2l0aW9uOnRyYW5zZm9ybSAuMnMgZWFzZS1pbi1vdXQ7dHJhbnNmb3JtOnNjYWxlKC42KTtvdmVyZmxvdzpoaWRkZW47d2hpdGUtc3BhY2U6bm93cmFwO3RleHQtb3ZlcmZsb3c6ZWxsaXBzaXM7cG9pbnRlci1ldmVudHM6bm9uZX0ubWF0LWJhZGdlLWNvbnRlbnQubWF0LWJhZGdlLWFjdGl2ZXt0cmFuc2Zvcm06bm9uZX0ubWF0LWJhZGdlLXNtYWxsIC5tYXQtYmFkZ2UtY29udGVudHt3aWR0aDoxNnB4O2hlaWdodDoxNnB4O2xpbmUtaGVpZ2h0OjE2cHh9QG1lZGlhIHNjcmVlbiBhbmQgKC1tcy1oaWdoLWNvbnRyYXN0OmFjdGl2ZSl7Lm1hdC1iYWRnZS1zbWFsbCAubWF0LWJhZGdlLWNvbnRlbnR7b3V0bGluZTpzb2xpZCAxcHg7Ym9yZGVyLXJhZGl1czowfX0ubWF0LWJhZGdlLXNtYWxsLm1hdC1iYWRnZS1hYm92ZSAubWF0LWJhZGdlLWNvbnRlbnR7dG9wOi04cHh9Lm1hdC1iYWRnZS1zbWFsbC5tYXQtYmFkZ2UtYmVsb3cgLm1hdC1iYWRnZS1jb250ZW50e2JvdHRvbTotOHB4fS5tYXQtYmFkZ2Utc21hbGwubWF0LWJhZGdlLWJlZm9yZSAubWF0LWJhZGdlLWNvbnRlbnR7bGVmdDotMTZweH1bZGlyPXJ0bF0gLm1hdC1iYWRnZS1zbWFsbC5tYXQtYmFkZ2UtYmVmb3JlIC5tYXQtYmFkZ2UtY29udGVudHtsZWZ0OmF1dG87cmlnaHQ6LTE2cHh9Lm1hdC1iYWRnZS1zbWFsbC5tYXQtYmFkZ2UtYWZ0ZXIgLm1hdC1iYWRnZS1jb250ZW50e3JpZ2h0Oi0xNnB4fVtkaXI9cnRsXSAubWF0LWJhZGdlLXNtYWxsLm1hdC1iYWRnZS1hZnRlciAubWF0LWJhZGdlLWNvbnRlbnR7cmlnaHQ6YXV0bztsZWZ0Oi0xNnB4fS5tYXQtYmFkZ2Utc21hbGwubWF0LWJhZGdlLW92ZXJsYXAubWF0LWJhZGdlLWJlZm9yZSAubWF0LWJhZGdlLWNvbnRlbnR7bGVmdDotOHB4fVtkaXI9cnRsXSAubWF0LWJhZGdlLXNtYWxsLm1hdC1iYWRnZS1vdmVybGFwLm1hdC1iYWRnZS1iZWZvcmUgLm1hdC1iYWRnZS1jb250ZW50e2xlZnQ6YXV0bztyaWdodDotOHB4fS5tYXQtYmFkZ2Utc21hbGwubWF0LWJhZGdlLW92ZXJsYXAubWF0LWJhZGdlLWFmdGVyIC5tYXQtYmFkZ2UtY29udGVudHtyaWdodDotOHB4fVtkaXI9cnRsXSAubWF0LWJhZGdlLXNtYWxsLm1hdC1iYWRnZS1vdmVybGFwLm1hdC1iYWRnZS1hZnRlciAubWF0LWJhZGdlLWNvbnRlbnR7cmlnaHQ6YXV0bztsZWZ0Oi04cHh9Lm1hdC1iYWRnZS1tZWRpdW0gLm1hdC1iYWRnZS1jb250ZW50e3dpZHRoOjIycHg7aGVpZ2h0OjIycHg7bGluZS1oZWlnaHQ6MjJweH1AbWVkaWEgc2NyZWVuIGFuZCAoLW1zLWhpZ2gtY29udHJhc3Q6YWN0aXZlKXsubWF0LWJhZGdlLW1lZGl1bSAubWF0LWJhZGdlLWNvbnRlbnR7b3V0bGluZTpzb2xpZCAxcHg7Ym9yZGVyLXJhZGl1czowfX0ubWF0LWJhZGdlLW1lZGl1bS5tYXQtYmFkZ2UtYWJvdmUgLm1hdC1iYWRnZS1jb250ZW50e3RvcDotMTFweH0ubWF0LWJhZGdlLW1lZGl1bS5tYXQtYmFkZ2UtYmVsb3cgLm1hdC1iYWRnZS1jb250ZW50e2JvdHRvbTotMTFweH0ubWF0LWJhZGdlLW1lZGl1bS5tYXQtYmFkZ2UtYmVmb3JlIC5tYXQtYmFkZ2UtY29udGVudHtsZWZ0Oi0yMnB4fVtkaXI9cnRsXSAubWF0LWJhZGdlLW1lZGl1bS5tYXQtYmFkZ2UtYmVmb3JlIC5tYXQtYmFkZ2UtY29udGVudHtsZWZ0OmF1dG87cmlnaHQ6LTIycHh9Lm1hdC1iYWRnZS1tZWRpdW0ubWF0LWJhZGdlLWFmdGVyIC5tYXQtYmFkZ2UtY29udGVudHtyaWdodDotMjJweH1bZGlyPXJ0bF0gLm1hdC1iYWRnZS1tZWRpdW0ubWF0LWJhZGdlLWFmdGVyIC5tYXQtYmFkZ2UtY29udGVudHtyaWdodDphdXRvO2xlZnQ6LTIycHh9Lm1hdC1iYWRnZS1tZWRpdW0ubWF0LWJhZGdlLW92ZXJsYXAubWF0LWJhZGdlLWJlZm9yZSAubWF0LWJhZGdlLWNvbnRlbnR7bGVmdDotMTFweH1bZGlyPXJ0bF0gLm1hdC1iYWRnZS1tZWRpdW0ubWF0LWJhZGdlLW92ZXJsYXAubWF0LWJhZGdlLWJlZm9yZSAubWF0LWJhZGdlLWNvbnRlbnR7bGVmdDphdXRvO3JpZ2h0Oi0xMXB4fS5tYXQtYmFkZ2UtbWVkaXVtLm1hdC1iYWRnZS1vdmVybGFwLm1hdC1iYWRnZS1hZnRlciAubWF0LWJhZGdlLWNvbnRlbnR7cmlnaHQ6LTExcHh9W2Rpcj1ydGxdIC5tYXQtYmFkZ2UtbWVkaXVtLm1hdC1iYWRnZS1vdmVybGFwLm1hdC1iYWRnZS1hZnRlciAubWF0LWJhZGdlLWNvbnRlbnR7cmlnaHQ6YXV0bztsZWZ0Oi0xMXB4fS5tYXQtYmFkZ2UtbGFyZ2UgLm1hdC1iYWRnZS1jb250ZW50e3dpZHRoOjI4cHg7aGVpZ2h0OjI4cHg7bGluZS1oZWlnaHQ6MjhweH1AbWVkaWEgc2NyZWVuIGFuZCAoLW1zLWhpZ2gtY29udHJhc3Q6YWN0aXZlKXsubWF0LWJhZGdlLWxhcmdlIC5tYXQtYmFkZ2UtY29udGVudHtvdXRsaW5lOnNvbGlkIDFweDtib3JkZXItcmFkaXVzOjB9fS5tYXQtYmFkZ2UtbGFyZ2UubWF0LWJhZGdlLWFib3ZlIC5tYXQtYmFkZ2UtY29udGVudHt0b3A6LTE0cHh9Lm1hdC1iYWRnZS1sYXJnZS5tYXQtYmFkZ2UtYmVsb3cgLm1hdC1iYWRnZS1jb250ZW50e2JvdHRvbTotMTRweH0ubWF0LWJhZGdlLWxhcmdlLm1hdC1iYWRnZS1iZWZvcmUgLm1hdC1iYWRnZS1jb250ZW50e2xlZnQ6LTI4cHh9W2Rpcj1ydGxdIC5tYXQtYmFkZ2UtbGFyZ2UubWF0LWJhZGdlLWJlZm9yZSAubWF0LWJhZGdlLWNvbnRlbnR7bGVmdDphdXRvO3JpZ2h0Oi0yOHB4fS5tYXQtYmFkZ2UtbGFyZ2UubWF0LWJhZGdlLWFmdGVyIC5tYXQtYmFkZ2UtY29udGVudHtyaWdodDotMjhweH1bZGlyPXJ0bF0gLm1hdC1iYWRnZS1sYXJnZS5tYXQtYmFkZ2UtYWZ0ZXIgLm1hdC1iYWRnZS1jb250ZW50e3JpZ2h0OmF1dG87bGVmdDotMjhweH0ubWF0LWJhZGdlLWxhcmdlLm1hdC1iYWRnZS1vdmVybGFwLm1hdC1iYWRnZS1iZWZvcmUgLm1hdC1iYWRnZS1jb250ZW50e2xlZnQ6LTE0cHh9W2Rpcj1ydGxdIC5tYXQtYmFkZ2UtbGFyZ2UubWF0LWJhZGdlLW92ZXJsYXAubWF0LWJhZGdlLWJlZm9yZSAubWF0LWJhZGdlLWNvbnRlbnR7bGVmdDphdXRvO3JpZ2h0Oi0xNHB4fS5tYXQtYmFkZ2UtbGFyZ2UubWF0LWJhZGdlLW92ZXJsYXAubWF0LWJhZGdlLWFmdGVyIC5tYXQtYmFkZ2UtY29udGVudHtyaWdodDotMTRweH1bZGlyPXJ0bF0gLm1hdC1iYWRnZS1sYXJnZS5tYXQtYmFkZ2Utb3ZlcmxhcC5tYXQtYmFkZ2UtYWZ0ZXIgLm1hdC1iYWRnZS1jb250ZW50e3JpZ2h0OmF1dG87bGVmdDotMTRweH0ubWF0LWJvdHRvbS1zaGVldC1jb250YWluZXJ7Ym94LXNoYWRvdzowIDhweCAxMHB4IC01cHggcmdiYSgwLDAsMCwuMiksMCAxNnB4IDI0cHggMnB4IHJnYmEoMCwwLDAsLjE0KSwwIDZweCAzMHB4IDVweCByZ2JhKDAsMCwwLC4xMik7YmFja2dyb3VuZDojZmZmO2NvbG9yOnJnYmEoMCwwLDAsLjg3KX0ubWF0LWJ1dHRvbiwubWF0LWljb24tYnV0dG9uLC5tYXQtc3Ryb2tlZC1idXR0b257Y29sb3I6aW5oZXJpdDtiYWNrZ3JvdW5kOjAgMH0ubWF0LWJ1dHRvbi5tYXQtcHJpbWFyeSwubWF0LWljb24tYnV0dG9uLm1hdC1wcmltYXJ5LC5tYXQtc3Ryb2tlZC1idXR0b24ubWF0LXByaW1hcnl7Y29sb3I6IzNmNTFiNX0ubWF0LWJ1dHRvbi5tYXQtYWNjZW50LC5tYXQtaWNvbi1idXR0b24ubWF0LWFjY2VudCwubWF0LXN0cm9rZWQtYnV0dG9uLm1hdC1hY2NlbnR7Y29sb3I6I2ZmNDA4MX0ubWF0LWJ1dHRvbi5tYXQtd2FybiwubWF0LWljb24tYnV0dG9uLm1hdC13YXJuLC5tYXQtc3Ryb2tlZC1idXR0b24ubWF0LXdhcm57Y29sb3I6I2Y0NDMzNn0ubWF0LWJ1dHRvbi5tYXQtYWNjZW50W2Rpc2FibGVkXSwubWF0LWJ1dHRvbi5tYXQtcHJpbWFyeVtkaXNhYmxlZF0sLm1hdC1idXR0b24ubWF0LXdhcm5bZGlzYWJsZWRdLC5tYXQtYnV0dG9uW2Rpc2FibGVkXVtkaXNhYmxlZF0sLm1hdC1pY29uLWJ1dHRvbi5tYXQtYWNjZW50W2Rpc2FibGVkXSwubWF0LWljb24tYnV0dG9uLm1hdC1wcmltYXJ5W2Rpc2FibGVkXSwubWF0LWljb24tYnV0dG9uLm1hdC13YXJuW2Rpc2FibGVkXSwubWF0LWljb24tYnV0dG9uW2Rpc2FibGVkXVtkaXNhYmxlZF0sLm1hdC1zdHJva2VkLWJ1dHRvbi5tYXQtYWNjZW50W2Rpc2FibGVkXSwubWF0LXN0cm9rZWQtYnV0dG9uLm1hdC1wcmltYXJ5W2Rpc2FibGVkXSwubWF0LXN0cm9rZWQtYnV0dG9uLm1hdC13YXJuW2Rpc2FibGVkXSwubWF0LXN0cm9rZWQtYnV0dG9uW2Rpc2FibGVkXVtkaXNhYmxlZF17Y29sb3I6cmdiYSgwLDAsMCwuMjYpfS5tYXQtYnV0dG9uLm1hdC1wcmltYXJ5IC5tYXQtYnV0dG9uLWZvY3VzLW92ZXJsYXksLm1hdC1pY29uLWJ1dHRvbi5tYXQtcHJpbWFyeSAubWF0LWJ1dHRvbi1mb2N1cy1vdmVybGF5LC5tYXQtc3Ryb2tlZC1idXR0b24ubWF0LXByaW1hcnkgLm1hdC1idXR0b24tZm9jdXMtb3ZlcmxheXtiYWNrZ3JvdW5kLWNvbG9yOiMzZjUxYjV9Lm1hdC1idXR0b24ubWF0LWFjY2VudCAubWF0LWJ1dHRvbi1mb2N1cy1vdmVybGF5LC5tYXQtaWNvbi1idXR0b24ubWF0LWFjY2VudCAubWF0LWJ1dHRvbi1mb2N1cy1vdmVybGF5LC5tYXQtc3Ryb2tlZC1idXR0b24ubWF0LWFjY2VudCAubWF0LWJ1dHRvbi1mb2N1cy1vdmVybGF5e2JhY2tncm91bmQtY29sb3I6I2ZmNDA4MX0ubWF0LWJ1dHRvbi5tYXQtd2FybiAubWF0LWJ1dHRvbi1mb2N1cy1vdmVybGF5LC5tYXQtaWNvbi1idXR0b24ubWF0LXdhcm4gLm1hdC1idXR0b24tZm9jdXMtb3ZlcmxheSwubWF0LXN0cm9rZWQtYnV0dG9uLm1hdC13YXJuIC5tYXQtYnV0dG9uLWZvY3VzLW92ZXJsYXl7YmFja2dyb3VuZC1jb2xvcjojZjQ0MzM2fS5tYXQtYnV0dG9uW2Rpc2FibGVkXSAubWF0LWJ1dHRvbi1mb2N1cy1vdmVybGF5LC5tYXQtaWNvbi1idXR0b25bZGlzYWJsZWRdIC5tYXQtYnV0dG9uLWZvY3VzLW92ZXJsYXksLm1hdC1zdHJva2VkLWJ1dHRvbltkaXNhYmxlZF0gLm1hdC1idXR0b24tZm9jdXMtb3ZlcmxheXtiYWNrZ3JvdW5kLWNvbG9yOnRyYW5zcGFyZW50fS5tYXQtYnV0dG9uLm1hdC1wcmltYXJ5IC5tYXQtcmlwcGxlLWVsZW1lbnQsLm1hdC1pY29uLWJ1dHRvbi5tYXQtcHJpbWFyeSAubWF0LXJpcHBsZS1lbGVtZW50LC5tYXQtc3Ryb2tlZC1idXR0b24ubWF0LXByaW1hcnkgLm1hdC1yaXBwbGUtZWxlbWVudHtiYWNrZ3JvdW5kLWNvbG9yOnJnYmEoNjMsODEsMTgxLC4xKX0ubWF0LWJ1dHRvbi5tYXQtYWNjZW50IC5tYXQtcmlwcGxlLWVsZW1lbnQsLm1hdC1pY29uLWJ1dHRvbi5tYXQtYWNjZW50IC5tYXQtcmlwcGxlLWVsZW1lbnQsLm1hdC1zdHJva2VkLWJ1dHRvbi5tYXQtYWNjZW50IC5tYXQtcmlwcGxlLWVsZW1lbnR7YmFja2dyb3VuZC1jb2xvcjpyZ2JhKDI1NSw2NCwxMjksLjEpfS5tYXQtYnV0dG9uLm1hdC13YXJuIC5tYXQtcmlwcGxlLWVsZW1lbnQsLm1hdC1pY29uLWJ1dHRvbi5tYXQtd2FybiAubWF0LXJpcHBsZS1lbGVtZW50LC5tYXQtc3Ryb2tlZC1idXR0b24ubWF0LXdhcm4gLm1hdC1yaXBwbGUtZWxlbWVudHtiYWNrZ3JvdW5kLWNvbG9yOnJnYmEoMjQ0LDY3LDU0LC4xKX0ubWF0LWJ1dHRvbi1mb2N1cy1vdmVybGF5e2JhY2tncm91bmQ6IzAwMH0ubWF0LXN0cm9rZWQtYnV0dG9uOm5vdChbZGlzYWJsZWRdKXtib3JkZXItY29sb3I6cmdiYSgwLDAsMCwuMTIpfS5tYXQtZmFiLC5tYXQtZmxhdC1idXR0b24sLm1hdC1taW5pLWZhYiwubWF0LXJhaXNlZC1idXR0b257Y29sb3I6cmdiYSgwLDAsMCwuODcpO2JhY2tncm91bmQtY29sb3I6I2ZmZn0ubWF0LWZhYi5tYXQtcHJpbWFyeSwubWF0LWZsYXQtYnV0dG9uLm1hdC1wcmltYXJ5LC5tYXQtbWluaS1mYWIubWF0LXByaW1hcnksLm1hdC1yYWlzZWQtYnV0dG9uLm1hdC1wcmltYXJ5e2NvbG9yOiNmZmZ9Lm1hdC1mYWIubWF0LWFjY2VudCwubWF0LWZsYXQtYnV0dG9uLm1hdC1hY2NlbnQsLm1hdC1taW5pLWZhYi5tYXQtYWNjZW50LC5tYXQtcmFpc2VkLWJ1dHRvbi5tYXQtYWNjZW50e2NvbG9yOiNmZmZ9Lm1hdC1mYWIubWF0LXdhcm4sLm1hdC1mbGF0LWJ1dHRvbi5tYXQtd2FybiwubWF0LW1pbmktZmFiLm1hdC13YXJuLC5tYXQtcmFpc2VkLWJ1dHRvbi5tYXQtd2Fybntjb2xvcjojZmZmfS5tYXQtZmFiLm1hdC1hY2NlbnRbZGlzYWJsZWRdLC5tYXQtZmFiLm1hdC1wcmltYXJ5W2Rpc2FibGVkXSwubWF0LWZhYi5tYXQtd2FybltkaXNhYmxlZF0sLm1hdC1mYWJbZGlzYWJsZWRdW2Rpc2FibGVkXSwubWF0LWZsYXQtYnV0dG9uLm1hdC1hY2NlbnRbZGlzYWJsZWRdLC5tYXQtZmxhdC1idXR0b24ubWF0LXByaW1hcnlbZGlzYWJsZWRdLC5tYXQtZmxhdC1idXR0b24ubWF0LXdhcm5bZGlzYWJsZWRdLC5tYXQtZmxhdC1idXR0b25bZGlzYWJsZWRdW2Rpc2FibGVkXSwubWF0LW1pbmktZmFiLm1hdC1hY2NlbnRbZGlzYWJsZWRdLC5tYXQtbWluaS1mYWIubWF0LXByaW1hcnlbZGlzYWJsZWRdLC5tYXQtbWluaS1mYWIubWF0LXdhcm5bZGlzYWJsZWRdLC5tYXQtbWluaS1mYWJbZGlzYWJsZWRdW2Rpc2FibGVkXSwubWF0LXJhaXNlZC1idXR0b24ubWF0LWFjY2VudFtkaXNhYmxlZF0sLm1hdC1yYWlzZWQtYnV0dG9uLm1hdC1wcmltYXJ5W2Rpc2FibGVkXSwubWF0LXJhaXNlZC1idXR0b24ubWF0LXdhcm5bZGlzYWJsZWRdLC5tYXQtcmFpc2VkLWJ1dHRvbltkaXNhYmxlZF1bZGlzYWJsZWRde2NvbG9yOnJnYmEoMCwwLDAsLjI2KX0ubWF0LWZhYi5tYXQtcHJpbWFyeSwubWF0LWZsYXQtYnV0dG9uLm1hdC1wcmltYXJ5LC5tYXQtbWluaS1mYWIubWF0LXByaW1hcnksLm1hdC1yYWlzZWQtYnV0dG9uLm1hdC1wcmltYXJ5e2JhY2tncm91bmQtY29sb3I6IzNmNTFiNX0ubWF0LWZhYi5tYXQtYWNjZW50LC5tYXQtZmxhdC1idXR0b24ubWF0LWFjY2VudCwubWF0LW1pbmktZmFiLm1hdC1hY2NlbnQsLm1hdC1yYWlzZWQtYnV0dG9uLm1hdC1hY2NlbnR7YmFja2dyb3VuZC1jb2xvcjojZmY0MDgxfS5tYXQtZmFiLm1hdC13YXJuLC5tYXQtZmxhdC1idXR0b24ubWF0LXdhcm4sLm1hdC1taW5pLWZhYi5tYXQtd2FybiwubWF0LXJhaXNlZC1idXR0b24ubWF0LXdhcm57YmFja2dyb3VuZC1jb2xvcjojZjQ0MzM2fS5tYXQtZmFiLm1hdC1hY2NlbnRbZGlzYWJsZWRdLC5tYXQtZmFiLm1hdC1wcmltYXJ5W2Rpc2FibGVkXSwubWF0LWZhYi5tYXQtd2FybltkaXNhYmxlZF0sLm1hdC1mYWJbZGlzYWJsZWRdW2Rpc2FibGVkXSwubWF0LWZsYXQtYnV0dG9uLm1hdC1hY2NlbnRbZGlzYWJsZWRdLC5tYXQtZmxhdC1idXR0b24ubWF0LXByaW1hcnlbZGlzYWJsZWRdLC5tYXQtZmxhdC1idXR0b24ubWF0LXdhcm5bZGlzYWJsZWRdLC5tYXQtZmxhdC1idXR0b25bZGlzYWJsZWRdW2Rpc2FibGVkXSwubWF0LW1pbmktZmFiLm1hdC1hY2NlbnRbZGlzYWJsZWRdLC5tYXQtbWluaS1mYWIubWF0LXByaW1hcnlbZGlzYWJsZWRdLC5tYXQtbWluaS1mYWIubWF0LXdhcm5bZGlzYWJsZWRdLC5tYXQtbWluaS1mYWJbZGlzYWJsZWRdW2Rpc2FibGVkXSwubWF0LXJhaXNlZC1idXR0b24ubWF0LWFjY2VudFtkaXNhYmxlZF0sLm1hdC1yYWlzZWQtYnV0dG9uLm1hdC1wcmltYXJ5W2Rpc2FibGVkXSwubWF0LXJhaXNlZC1idXR0b24ubWF0LXdhcm5bZGlzYWJsZWRdLC5tYXQtcmFpc2VkLWJ1dHRvbltkaXNhYmxlZF1bZGlzYWJsZWRde2JhY2tncm91bmQtY29sb3I6cmdiYSgwLDAsMCwuMTIpfS5tYXQtZmFiLm1hdC1wcmltYXJ5IC5tYXQtcmlwcGxlLWVsZW1lbnQsLm1hdC1mbGF0LWJ1dHRvbi5tYXQtcHJpbWFyeSAubWF0LXJpcHBsZS1lbGVtZW50LC5tYXQtbWluaS1mYWIubWF0LXByaW1hcnkgLm1hdC1yaXBwbGUtZWxlbWVudCwubWF0LXJhaXNlZC1idXR0b24ubWF0LXByaW1hcnkgLm1hdC1yaXBwbGUtZWxlbWVudHtiYWNrZ3JvdW5kLWNvbG9yOnJnYmEoMjU1LDI1NSwyNTUsLjEpfS5tYXQtZmFiLm1hdC1hY2NlbnQgLm1hdC1yaXBwbGUtZWxlbWVudCwubWF0LWZsYXQtYnV0dG9uLm1hdC1hY2NlbnQgLm1hdC1yaXBwbGUtZWxlbWVudCwubWF0LW1pbmktZmFiLm1hdC1hY2NlbnQgLm1hdC1yaXBwbGUtZWxlbWVudCwubWF0LXJhaXNlZC1idXR0b24ubWF0LWFjY2VudCAubWF0LXJpcHBsZS1lbGVtZW50e2JhY2tncm91bmQtY29sb3I6cmdiYSgyNTUsMjU1LDI1NSwuMSl9Lm1hdC1mYWIubWF0LXdhcm4gLm1hdC1yaXBwbGUtZWxlbWVudCwubWF0LWZsYXQtYnV0dG9uLm1hdC13YXJuIC5tYXQtcmlwcGxlLWVsZW1lbnQsLm1hdC1taW5pLWZhYi5tYXQtd2FybiAubWF0LXJpcHBsZS1lbGVtZW50LC5tYXQtcmFpc2VkLWJ1dHRvbi5tYXQtd2FybiAubWF0LXJpcHBsZS1lbGVtZW50e2JhY2tncm91bmQtY29sb3I6cmdiYSgyNTUsMjU1LDI1NSwuMSl9Lm1hdC1pY29uLWJ1dHRvbi5tYXQtcHJpbWFyeSAubWF0LXJpcHBsZS1lbGVtZW50e2JhY2tncm91bmQtY29sb3I6cmdiYSg2Myw4MSwxODEsLjIpfS5tYXQtaWNvbi1idXR0b24ubWF0LWFjY2VudCAubWF0LXJpcHBsZS1lbGVtZW50e2JhY2tncm91bmQtY29sb3I6cmdiYSgyNTUsNjQsMTI5LC4yKX0ubWF0LWljb24tYnV0dG9uLm1hdC13YXJuIC5tYXQtcmlwcGxlLWVsZW1lbnR7YmFja2dyb3VuZC1jb2xvcjpyZ2JhKDI0NCw2Nyw1NCwuMil9Lm1hdC1mbGF0LWJ1dHRvbjpub3QoW2NsYXNzKj1tYXQtZWxldmF0aW9uLXpdKSwubWF0LXN0cm9rZWQtYnV0dG9uOm5vdChbY2xhc3MqPW1hdC1lbGV2YXRpb24tel0pe2JveC1zaGFkb3c6MCAwIDAgMCByZ2JhKDAsMCwwLC4yKSwwIDAgMCAwIHJnYmEoMCwwLDAsLjE0KSwwIDAgMCAwIHJnYmEoMCwwLDAsLjEyKX0ubWF0LXJhaXNlZC1idXR0b246bm90KFtjbGFzcyo9bWF0LWVsZXZhdGlvbi16XSl7Ym94LXNoYWRvdzowIDNweCAxcHggLTJweCByZ2JhKDAsMCwwLC4yKSwwIDJweCAycHggMCByZ2JhKDAsMCwwLC4xNCksMCAxcHggNXB4IDAgcmdiYSgwLDAsMCwuMTIpfS5tYXQtcmFpc2VkLWJ1dHRvbjpub3QoW2Rpc2FibGVkXSk6YWN0aXZlOm5vdChbY2xhc3MqPW1hdC1lbGV2YXRpb24tel0pe2JveC1zaGFkb3c6MCA1cHggNXB4IC0zcHggcmdiYSgwLDAsMCwuMiksMCA4cHggMTBweCAxcHggcmdiYSgwLDAsMCwuMTQpLDAgM3B4IDE0cHggMnB4IHJnYmEoMCwwLDAsLjEyKX0ubWF0LXJhaXNlZC1idXR0b25bZGlzYWJsZWRdOm5vdChbY2xhc3MqPW1hdC1lbGV2YXRpb24tel0pe2JveC1zaGFkb3c6MCAwIDAgMCByZ2JhKDAsMCwwLC4yKSwwIDAgMCAwIHJnYmEoMCwwLDAsLjE0KSwwIDAgMCAwIHJnYmEoMCwwLDAsLjEyKX0ubWF0LWZhYjpub3QoW2NsYXNzKj1tYXQtZWxldmF0aW9uLXpdKSwubWF0LW1pbmktZmFiOm5vdChbY2xhc3MqPW1hdC1lbGV2YXRpb24tel0pe2JveC1zaGFkb3c6MCAzcHggNXB4IC0xcHggcmdiYSgwLDAsMCwuMiksMCA2cHggMTBweCAwIHJnYmEoMCwwLDAsLjE0KSwwIDFweCAxOHB4IDAgcmdiYSgwLDAsMCwuMTIpfS5tYXQtZmFiOm5vdChbZGlzYWJsZWRdKTphY3RpdmU6bm90KFtjbGFzcyo9bWF0LWVsZXZhdGlvbi16XSksLm1hdC1taW5pLWZhYjpub3QoW2Rpc2FibGVkXSk6YWN0aXZlOm5vdChbY2xhc3MqPW1hdC1lbGV2YXRpb24tel0pe2JveC1zaGFkb3c6MCA3cHggOHB4IC00cHggcmdiYSgwLDAsMCwuMiksMCAxMnB4IDE3cHggMnB4IHJnYmEoMCwwLDAsLjE0KSwwIDVweCAyMnB4IDRweCByZ2JhKDAsMCwwLC4xMil9Lm1hdC1mYWJbZGlzYWJsZWRdOm5vdChbY2xhc3MqPW1hdC1lbGV2YXRpb24tel0pLC5tYXQtbWluaS1mYWJbZGlzYWJsZWRdOm5vdChbY2xhc3MqPW1hdC1lbGV2YXRpb24tel0pe2JveC1zaGFkb3c6MCAwIDAgMCByZ2JhKDAsMCwwLC4yKSwwIDAgMCAwIHJnYmEoMCwwLDAsLjE0KSwwIDAgMCAwIHJnYmEoMCwwLDAsLjEyKX0ubWF0LWJ1dHRvbi10b2dnbGUtZ3JvdXAsLm1hdC1idXR0b24tdG9nZ2xlLXN0YW5kYWxvbmV7Ym94LXNoYWRvdzowIDNweCAxcHggLTJweCByZ2JhKDAsMCwwLC4yKSwwIDJweCAycHggMCByZ2JhKDAsMCwwLC4xNCksMCAxcHggNXB4IDAgcmdiYSgwLDAsMCwuMTIpfS5tYXQtYnV0dG9uLXRvZ2dsZS1ncm91cC1hcHBlYXJhbmNlLXN0YW5kYXJkLC5tYXQtYnV0dG9uLXRvZ2dsZS1zdGFuZGFsb25lLm1hdC1idXR0b24tdG9nZ2xlLWFwcGVhcmFuY2Utc3RhbmRhcmR7Ym94LXNoYWRvdzpub25lfS5tYXQtYnV0dG9uLXRvZ2dsZXtjb2xvcjpyZ2JhKDAsMCwwLC4zOCl9Lm1hdC1idXR0b24tdG9nZ2xlIC5tYXQtYnV0dG9uLXRvZ2dsZS1mb2N1cy1vdmVybGF5e2JhY2tncm91bmQtY29sb3I6cmdiYSgwLDAsMCwuMTIpfS5tYXQtYnV0dG9uLXRvZ2dsZS1hcHBlYXJhbmNlLXN0YW5kYXJke2NvbG9yOnJnYmEoMCwwLDAsLjg3KTtiYWNrZ3JvdW5kOiNmZmZ9Lm1hdC1idXR0b24tdG9nZ2xlLWFwcGVhcmFuY2Utc3RhbmRhcmQgLm1hdC1idXR0b24tdG9nZ2xlLWZvY3VzLW92ZXJsYXl7YmFja2dyb3VuZC1jb2xvcjojMDAwfS5tYXQtYnV0dG9uLXRvZ2dsZS1ncm91cC1hcHBlYXJhbmNlLXN0YW5kYXJkIC5tYXQtYnV0dG9uLXRvZ2dsZSsubWF0LWJ1dHRvbi10b2dnbGV7Ym9yZGVyLWxlZnQ6c29saWQgMXB4IHJnYmEoMCwwLDAsLjEyKX1bZGlyPXJ0bF0gLm1hdC1idXR0b24tdG9nZ2xlLWdyb3VwLWFwcGVhcmFuY2Utc3RhbmRhcmQgLm1hdC1idXR0b24tdG9nZ2xlKy5tYXQtYnV0dG9uLXRvZ2dsZXtib3JkZXItbGVmdDpub25lO2JvcmRlci1yaWdodDpzb2xpZCAxcHggcmdiYSgwLDAsMCwuMTIpfS5tYXQtYnV0dG9uLXRvZ2dsZS1ncm91cC1hcHBlYXJhbmNlLXN0YW5kYXJkLm1hdC1idXR0b24tdG9nZ2xlLXZlcnRpY2FsIC5tYXQtYnV0dG9uLXRvZ2dsZSsubWF0LWJ1dHRvbi10b2dnbGV7Ym9yZGVyLWxlZnQ6bm9uZTtib3JkZXItcmlnaHQ6bm9uZTtib3JkZXItdG9wOnNvbGlkIDFweCByZ2JhKDAsMCwwLC4xMil9Lm1hdC1idXR0b24tdG9nZ2xlLWNoZWNrZWR7YmFja2dyb3VuZC1jb2xvcjojZTBlMGUwO2NvbG9yOnJnYmEoMCwwLDAsLjU0KX0ubWF0LWJ1dHRvbi10b2dnbGUtY2hlY2tlZC5tYXQtYnV0dG9uLXRvZ2dsZS1hcHBlYXJhbmNlLXN0YW5kYXJke2NvbG9yOnJnYmEoMCwwLDAsLjg3KX0ubWF0LWJ1dHRvbi10b2dnbGUtZGlzYWJsZWR7Y29sb3I6cmdiYSgwLDAsMCwuMjYpO2JhY2tncm91bmQtY29sb3I6I2VlZX0ubWF0LWJ1dHRvbi10b2dnbGUtZGlzYWJsZWQubWF0LWJ1dHRvbi10b2dnbGUtYXBwZWFyYW5jZS1zdGFuZGFyZHtiYWNrZ3JvdW5kOiNmZmZ9Lm1hdC1idXR0b24tdG9nZ2xlLWRpc2FibGVkLm1hdC1idXR0b24tdG9nZ2xlLWNoZWNrZWR7YmFja2dyb3VuZC1jb2xvcjojYmRiZGJkfS5tYXQtYnV0dG9uLXRvZ2dsZS1ncm91cC1hcHBlYXJhbmNlLXN0YW5kYXJkLC5tYXQtYnV0dG9uLXRvZ2dsZS1zdGFuZGFsb25lLm1hdC1idXR0b24tdG9nZ2xlLWFwcGVhcmFuY2Utc3RhbmRhcmR7Ym9yZGVyOnNvbGlkIDFweCByZ2JhKDAsMCwwLC4xMil9Lm1hdC1jYXJke2JhY2tncm91bmQ6I2ZmZjtjb2xvcjpyZ2JhKDAsMCwwLC44Nyl9Lm1hdC1jYXJkOm5vdChbY2xhc3MqPW1hdC1lbGV2YXRpb24tel0pe2JveC1zaGFkb3c6MCAycHggMXB4IC0xcHggcmdiYSgwLDAsMCwuMiksMCAxcHggMXB4IDAgcmdiYSgwLDAsMCwuMTQpLDAgMXB4IDNweCAwIHJnYmEoMCwwLDAsLjEyKX0ubWF0LWNhcmQubWF0LWNhcmQtZmxhdDpub3QoW2NsYXNzKj1tYXQtZWxldmF0aW9uLXpdKXtib3gtc2hhZG93OjAgMCAwIDAgcmdiYSgwLDAsMCwuMiksMCAwIDAgMCByZ2JhKDAsMCwwLC4xNCksMCAwIDAgMCByZ2JhKDAsMCwwLC4xMil9Lm1hdC1jYXJkLXN1YnRpdGxle2NvbG9yOnJnYmEoMCwwLDAsLjU0KX0ubWF0LWNoZWNrYm94LWZyYW1le2JvcmRlci1jb2xvcjpyZ2JhKDAsMCwwLC41NCl9Lm1hdC1jaGVja2JveC1jaGVja21hcmt7ZmlsbDojZmFmYWZhfS5tYXQtY2hlY2tib3gtY2hlY2ttYXJrLXBhdGh7c3Ryb2tlOiNmYWZhZmEhaW1wb3J0YW50fUBtZWRpYSBzY3JlZW4gYW5kICgtbXMtaGlnaC1jb250cmFzdDpibGFjay1vbi13aGl0ZSl7Lm1hdC1jaGVja2JveC1jaGVja21hcmstcGF0aHtzdHJva2U6IzAwMCFpbXBvcnRhbnR9fS5tYXQtY2hlY2tib3gtbWl4ZWRtYXJre2JhY2tncm91bmQtY29sb3I6I2ZhZmFmYX0ubWF0LWNoZWNrYm94LWNoZWNrZWQubWF0LXByaW1hcnkgLm1hdC1jaGVja2JveC1iYWNrZ3JvdW5kLC5tYXQtY2hlY2tib3gtaW5kZXRlcm1pbmF0ZS5tYXQtcHJpbWFyeSAubWF0LWNoZWNrYm94LWJhY2tncm91bmR7YmFja2dyb3VuZC1jb2xvcjojM2Y1MWI1fS5tYXQtY2hlY2tib3gtY2hlY2tlZC5tYXQtYWNjZW50IC5tYXQtY2hlY2tib3gtYmFja2dyb3VuZCwubWF0LWNoZWNrYm94LWluZGV0ZXJtaW5hdGUubWF0LWFjY2VudCAubWF0LWNoZWNrYm94LWJhY2tncm91bmR7YmFja2dyb3VuZC1jb2xvcjojZmY0MDgxfS5tYXQtY2hlY2tib3gtY2hlY2tlZC5tYXQtd2FybiAubWF0LWNoZWNrYm94LWJhY2tncm91bmQsLm1hdC1jaGVja2JveC1pbmRldGVybWluYXRlLm1hdC13YXJuIC5tYXQtY2hlY2tib3gtYmFja2dyb3VuZHtiYWNrZ3JvdW5kLWNvbG9yOiNmNDQzMzZ9Lm1hdC1jaGVja2JveC1kaXNhYmxlZC5tYXQtY2hlY2tib3gtY2hlY2tlZDpub3QoLm1hdC1jaGVja2JveC1pbmRldGVybWluYXRlKSAubWF0LWNoZWNrYm94LWJhY2tncm91bmR7YmFja2dyb3VuZC1jb2xvcjojYjBiMGIwfS5tYXQtY2hlY2tib3gtZGlzYWJsZWQ6bm90KC5tYXQtY2hlY2tib3gtY2hlY2tlZCkgLm1hdC1jaGVja2JveC1mcmFtZXtib3JkZXItY29sb3I6I2IwYjBiMH0ubWF0LWNoZWNrYm94LWRpc2FibGVkIC5tYXQtY2hlY2tib3gtbGFiZWx7Y29sb3I6I2IwYjBiMH1AbWVkaWEgc2NyZWVuIGFuZCAoLW1zLWhpZ2gtY29udHJhc3Q6YWN0aXZlKXsubWF0LWNoZWNrYm94LWRpc2FibGVke29wYWNpdHk6LjV9fUBtZWRpYSBzY3JlZW4gYW5kICgtbXMtaGlnaC1jb250cmFzdDphY3RpdmUpey5tYXQtY2hlY2tib3gtYmFja2dyb3VuZHtiYWNrZ3JvdW5kOjAgMH19Lm1hdC1jaGVja2JveDpub3QoLm1hdC1jaGVja2JveC1kaXNhYmxlZCkubWF0LXByaW1hcnkgLm1hdC1jaGVja2JveC1yaXBwbGUgLm1hdC1yaXBwbGUtZWxlbWVudHtiYWNrZ3JvdW5kLWNvbG9yOiMzZjUxYjV9Lm1hdC1jaGVja2JveDpub3QoLm1hdC1jaGVja2JveC1kaXNhYmxlZCkubWF0LWFjY2VudCAubWF0LWNoZWNrYm94LXJpcHBsZSAubWF0LXJpcHBsZS1lbGVtZW50e2JhY2tncm91bmQtY29sb3I6I2ZmNDA4MX0ubWF0LWNoZWNrYm94Om5vdCgubWF0LWNoZWNrYm94LWRpc2FibGVkKS5tYXQtd2FybiAubWF0LWNoZWNrYm94LXJpcHBsZSAubWF0LXJpcHBsZS1lbGVtZW50e2JhY2tncm91bmQtY29sb3I6I2Y0NDMzNn0ubWF0LWNoaXAubWF0LXN0YW5kYXJkLWNoaXB7YmFja2dyb3VuZC1jb2xvcjojZTBlMGUwO2NvbG9yOnJnYmEoMCwwLDAsLjg3KX0ubWF0LWNoaXAubWF0LXN0YW5kYXJkLWNoaXAgLm1hdC1jaGlwLXJlbW92ZXtjb2xvcjpyZ2JhKDAsMCwwLC44Nyk7b3BhY2l0eTouNH0ubWF0LWNoaXAubWF0LXN0YW5kYXJkLWNoaXAgLm1hdC1jaGlwLXJlbW92ZTpob3ZlcntvcGFjaXR5Oi41NH0ubWF0LWNoaXAubWF0LXN0YW5kYXJkLWNoaXA6Zm9jdXN7Ym94LXNoYWRvdzowIDNweCAzcHggLTJweCByZ2JhKDAsMCwwLC4yKSwwIDNweCA0cHggMCByZ2JhKDAsMCwwLC4xNCksMCAxcHggOHB4IDAgcmdiYSgwLDAsMCwuMTIpfS5tYXQtY2hpcC5tYXQtc3RhbmRhcmQtY2hpcC5tYXQtY2hpcC1zZWxlY3RlZC5tYXQtcHJpbWFyeXtiYWNrZ3JvdW5kLWNvbG9yOiMzZjUxYjU7Y29sb3I6I2ZmZn0ubWF0LWNoaXAubWF0LXN0YW5kYXJkLWNoaXAubWF0LWNoaXAtc2VsZWN0ZWQubWF0LXByaW1hcnkgLm1hdC1jaGlwLXJlbW92ZXtjb2xvcjojZmZmO29wYWNpdHk6LjR9Lm1hdC1jaGlwLm1hdC1zdGFuZGFyZC1jaGlwLm1hdC1jaGlwLXNlbGVjdGVkLm1hdC1wcmltYXJ5IC5tYXQtY2hpcC1yZW1vdmU6aG92ZXJ7b3BhY2l0eTouNTR9Lm1hdC1jaGlwLm1hdC1zdGFuZGFyZC1jaGlwLm1hdC1jaGlwLXNlbGVjdGVkLm1hdC13YXJue2JhY2tncm91bmQtY29sb3I6I2Y0NDMzNjtjb2xvcjojZmZmfS5tYXQtY2hpcC5tYXQtc3RhbmRhcmQtY2hpcC5tYXQtY2hpcC1zZWxlY3RlZC5tYXQtd2FybiAubWF0LWNoaXAtcmVtb3Zle2NvbG9yOiNmZmY7b3BhY2l0eTouNH0ubWF0LWNoaXAubWF0LXN0YW5kYXJkLWNoaXAubWF0LWNoaXAtc2VsZWN0ZWQubWF0LXdhcm4gLm1hdC1jaGlwLXJlbW92ZTpob3ZlcntvcGFjaXR5Oi41NH0ubWF0LWNoaXAubWF0LXN0YW5kYXJkLWNoaXAubWF0LWNoaXAtc2VsZWN0ZWQubWF0LWFjY2VudHtiYWNrZ3JvdW5kLWNvbG9yOiNmZjQwODE7Y29sb3I6I2ZmZn0ubWF0LWNoaXAubWF0LXN0YW5kYXJkLWNoaXAubWF0LWNoaXAtc2VsZWN0ZWQubWF0LWFjY2VudCAubWF0LWNoaXAtcmVtb3Zle2NvbG9yOiNmZmY7b3BhY2l0eTouNH0ubWF0LWNoaXAubWF0LXN0YW5kYXJkLWNoaXAubWF0LWNoaXAtc2VsZWN0ZWQubWF0LWFjY2VudCAubWF0LWNoaXAtcmVtb3ZlOmhvdmVye29wYWNpdHk6LjU0fS5tYXQtdGFibGV7YmFja2dyb3VuZDojZmZmfS5tYXQtdGFibGUgdGJvZHksLm1hdC10YWJsZSB0Zm9vdCwubWF0LXRhYmxlIHRoZWFkLC5tYXQtdGFibGUtc3RpY2t5LFttYXQtZm9vdGVyLXJvd10sW21hdC1oZWFkZXItcm93XSxbbWF0LXJvd10sbWF0LWZvb3Rlci1yb3csbWF0LWhlYWRlci1yb3csbWF0LXJvd3tiYWNrZ3JvdW5kOmluaGVyaXR9bWF0LWZvb3Rlci1yb3csbWF0LWhlYWRlci1yb3csbWF0LXJvdyx0ZC5tYXQtY2VsbCx0ZC5tYXQtZm9vdGVyLWNlbGwsdGgubWF0LWhlYWRlci1jZWxse2JvcmRlci1ib3R0b20tY29sb3I6cmdiYSgwLDAsMCwuMTIpfS5tYXQtaGVhZGVyLWNlbGx7Y29sb3I6cmdiYSgwLDAsMCwuNTQpfS5tYXQtY2VsbCwubWF0LWZvb3Rlci1jZWxse2NvbG9yOnJnYmEoMCwwLDAsLjg3KX0ubWF0LWNhbGVuZGFyLWFycm93e2JvcmRlci10b3AtY29sb3I6cmdiYSgwLDAsMCwuNTQpfS5tYXQtZGF0ZXBpY2tlci1jb250ZW50IC5tYXQtY2FsZW5kYXItbmV4dC1idXR0b24sLm1hdC1kYXRlcGlja2VyLWNvbnRlbnQgLm1hdC1jYWxlbmRhci1wcmV2aW91cy1idXR0b24sLm1hdC1kYXRlcGlja2VyLXRvZ2dsZXtjb2xvcjpyZ2JhKDAsMCwwLC41NCl9Lm1hdC1jYWxlbmRhci10YWJsZS1oZWFkZXJ7Y29sb3I6cmdiYSgwLDAsMCwuMzgpfS5tYXQtY2FsZW5kYXItdGFibGUtaGVhZGVyLWRpdmlkZXI6OmFmdGVye2JhY2tncm91bmQ6cmdiYSgwLDAsMCwuMTIpfS5tYXQtY2FsZW5kYXItYm9keS1sYWJlbHtjb2xvcjpyZ2JhKDAsMCwwLC41NCl9Lm1hdC1jYWxlbmRhci1ib2R5LWNlbGwtY29udGVudHtjb2xvcjpyZ2JhKDAsMCwwLC44Nyk7Ym9yZGVyLWNvbG9yOnRyYW5zcGFyZW50fS5tYXQtY2FsZW5kYXItYm9keS1kaXNhYmxlZD4ubWF0LWNhbGVuZGFyLWJvZHktY2VsbC1jb250ZW50Om5vdCgubWF0LWNhbGVuZGFyLWJvZHktc2VsZWN0ZWQpe2NvbG9yOnJnYmEoMCwwLDAsLjM4KX0uY2RrLWtleWJvYXJkLWZvY3VzZWQgLm1hdC1jYWxlbmRhci1ib2R5LWFjdGl2ZT4ubWF0LWNhbGVuZGFyLWJvZHktY2VsbC1jb250ZW50Om5vdCgubWF0LWNhbGVuZGFyLWJvZHktc2VsZWN0ZWQpLC5jZGstcHJvZ3JhbS1mb2N1c2VkIC5tYXQtY2FsZW5kYXItYm9keS1hY3RpdmU+Lm1hdC1jYWxlbmRhci1ib2R5LWNlbGwtY29udGVudDpub3QoLm1hdC1jYWxlbmRhci1ib2R5LXNlbGVjdGVkKSwubWF0LWNhbGVuZGFyLWJvZHktY2VsbDpub3QoLm1hdC1jYWxlbmRhci1ib2R5LWRpc2FibGVkKTpob3Zlcj4ubWF0LWNhbGVuZGFyLWJvZHktY2VsbC1jb250ZW50Om5vdCgubWF0LWNhbGVuZGFyLWJvZHktc2VsZWN0ZWQpe2JhY2tncm91bmQtY29sb3I6cmdiYSgwLDAsMCwuMDQpfS5tYXQtY2FsZW5kYXItYm9keS10b2RheTpub3QoLm1hdC1jYWxlbmRhci1ib2R5LXNlbGVjdGVkKXtib3JkZXItY29sb3I6cmdiYSgwLDAsMCwuMzgpfS5tYXQtY2FsZW5kYXItYm9keS1kaXNhYmxlZD4ubWF0LWNhbGVuZGFyLWJvZHktdG9kYXk6bm90KC5tYXQtY2FsZW5kYXItYm9keS1zZWxlY3RlZCl7Ym9yZGVyLWNvbG9yOnJnYmEoMCwwLDAsLjE4KX0ubWF0LWNhbGVuZGFyLWJvZHktc2VsZWN0ZWR7YmFja2dyb3VuZC1jb2xvcjojM2Y1MWI1O2NvbG9yOiNmZmZ9Lm1hdC1jYWxlbmRhci1ib2R5LWRpc2FibGVkPi5tYXQtY2FsZW5kYXItYm9keS1zZWxlY3RlZHtiYWNrZ3JvdW5kLWNvbG9yOnJnYmEoNjMsODEsMTgxLC40KX0ubWF0LWNhbGVuZGFyLWJvZHktdG9kYXkubWF0LWNhbGVuZGFyLWJvZHktc2VsZWN0ZWR7Ym94LXNoYWRvdzppbnNldCAwIDAgMCAxcHggI2ZmZn0ubWF0LWRhdGVwaWNrZXItY29udGVudHtib3gtc2hhZG93OjAgMnB4IDRweCAtMXB4IHJnYmEoMCwwLDAsLjIpLDAgNHB4IDVweCAwIHJnYmEoMCwwLDAsLjE0KSwwIDFweCAxMHB4IDAgcmdiYSgwLDAsMCwuMTIpO2JhY2tncm91bmQtY29sb3I6I2ZmZjtjb2xvcjpyZ2JhKDAsMCwwLC44Nyl9Lm1hdC1kYXRlcGlja2VyLWNvbnRlbnQubWF0LWFjY2VudCAubWF0LWNhbGVuZGFyLWJvZHktc2VsZWN0ZWR7YmFja2dyb3VuZC1jb2xvcjojZmY0MDgxO2NvbG9yOiNmZmZ9Lm1hdC1kYXRlcGlja2VyLWNvbnRlbnQubWF0LWFjY2VudCAubWF0LWNhbGVuZGFyLWJvZHktZGlzYWJsZWQ+Lm1hdC1jYWxlbmRhci1ib2R5LXNlbGVjdGVke2JhY2tncm91bmQtY29sb3I6cmdiYSgyNTUsNjQsMTI5LC40KX0ubWF0LWRhdGVwaWNrZXItY29udGVudC5tYXQtYWNjZW50IC5tYXQtY2FsZW5kYXItYm9keS10b2RheS5tYXQtY2FsZW5kYXItYm9keS1zZWxlY3RlZHtib3gtc2hhZG93Omluc2V0IDAgMCAwIDFweCAjZmZmfS5tYXQtZGF0ZXBpY2tlci1jb250ZW50Lm1hdC13YXJuIC5tYXQtY2FsZW5kYXItYm9keS1zZWxlY3RlZHtiYWNrZ3JvdW5kLWNvbG9yOiNmNDQzMzY7Y29sb3I6I2ZmZn0ubWF0LWRhdGVwaWNrZXItY29udGVudC5tYXQtd2FybiAubWF0LWNhbGVuZGFyLWJvZHktZGlzYWJsZWQ+Lm1hdC1jYWxlbmRhci1ib2R5LXNlbGVjdGVke2JhY2tncm91bmQtY29sb3I6cmdiYSgyNDQsNjcsNTQsLjQpfS5tYXQtZGF0ZXBpY2tlci1jb250ZW50Lm1hdC13YXJuIC5tYXQtY2FsZW5kYXItYm9keS10b2RheS5tYXQtY2FsZW5kYXItYm9keS1zZWxlY3RlZHtib3gtc2hhZG93Omluc2V0IDAgMCAwIDFweCAjZmZmfS5tYXQtZGF0ZXBpY2tlci1jb250ZW50LXRvdWNoe2JveC1zaGFkb3c6MCAwIDAgMCByZ2JhKDAsMCwwLC4yKSwwIDAgMCAwIHJnYmEoMCwwLDAsLjE0KSwwIDAgMCAwIHJnYmEoMCwwLDAsLjEyKX0ubWF0LWRhdGVwaWNrZXItdG9nZ2xlLWFjdGl2ZXtjb2xvcjojM2Y1MWI1fS5tYXQtZGF0ZXBpY2tlci10b2dnbGUtYWN0aXZlLm1hdC1hY2NlbnR7Y29sb3I6I2ZmNDA4MX0ubWF0LWRhdGVwaWNrZXItdG9nZ2xlLWFjdGl2ZS5tYXQtd2Fybntjb2xvcjojZjQ0MzM2fS5tYXQtZGlhbG9nLWNvbnRhaW5lcntib3gtc2hhZG93OjAgMTFweCAxNXB4IC03cHggcmdiYSgwLDAsMCwuMiksMCAyNHB4IDM4cHggM3B4IHJnYmEoMCwwLDAsLjE0KSwwIDlweCA0NnB4IDhweCByZ2JhKDAsMCwwLC4xMik7YmFja2dyb3VuZDojZmZmO2NvbG9yOnJnYmEoMCwwLDAsLjg3KX0ubWF0LWRpdmlkZXJ7Ym9yZGVyLXRvcC1jb2xvcjpyZ2JhKDAsMCwwLC4xMil9Lm1hdC1kaXZpZGVyLXZlcnRpY2Fse2JvcmRlci1yaWdodC1jb2xvcjpyZ2JhKDAsMCwwLC4xMil9Lm1hdC1leHBhbnNpb24tcGFuZWx7YmFja2dyb3VuZDojZmZmO2NvbG9yOnJnYmEoMCwwLDAsLjg3KX0ubWF0LWV4cGFuc2lvbi1wYW5lbDpub3QoW2NsYXNzKj1tYXQtZWxldmF0aW9uLXpdKXtib3gtc2hhZG93OjAgM3B4IDFweCAtMnB4IHJnYmEoMCwwLDAsLjIpLDAgMnB4IDJweCAwIHJnYmEoMCwwLDAsLjE0KSwwIDFweCA1cHggMCByZ2JhKDAsMCwwLC4xMil9Lm1hdC1hY3Rpb24tcm93e2JvcmRlci10b3AtY29sb3I6cmdiYSgwLDAsMCwuMTIpfS5tYXQtZXhwYW5zaW9uLXBhbmVsOm5vdCgubWF0LWV4cGFuZGVkKSAubWF0LWV4cGFuc2lvbi1wYW5lbC1oZWFkZXI6bm90KFthcmlhLWRpc2FibGVkPXRydWVdKS5jZGsta2V5Ym9hcmQtZm9jdXNlZCwubWF0LWV4cGFuc2lvbi1wYW5lbDpub3QoLm1hdC1leHBhbmRlZCkgLm1hdC1leHBhbnNpb24tcGFuZWwtaGVhZGVyOm5vdChbYXJpYS1kaXNhYmxlZD10cnVlXSkuY2RrLXByb2dyYW0tZm9jdXNlZCwubWF0LWV4cGFuc2lvbi1wYW5lbDpub3QoLm1hdC1leHBhbmRlZCkgLm1hdC1leHBhbnNpb24tcGFuZWwtaGVhZGVyOm5vdChbYXJpYS1kaXNhYmxlZD10cnVlXSk6aG92ZXJ7YmFja2dyb3VuZDpyZ2JhKDAsMCwwLC4wNCl9QG1lZGlhIChob3Zlcjpub25lKXsubWF0LWV4cGFuc2lvbi1wYW5lbDpub3QoLm1hdC1leHBhbmRlZCk6bm90KFthcmlhLWRpc2FibGVkPXRydWVdKSAubWF0LWV4cGFuc2lvbi1wYW5lbC1oZWFkZXI6aG92ZXJ7YmFja2dyb3VuZDojZmZmfX0ubWF0LWV4cGFuc2lvbi1wYW5lbC1oZWFkZXItdGl0bGV7Y29sb3I6cmdiYSgwLDAsMCwuODcpfS5tYXQtZXhwYW5zaW9uLWluZGljYXRvcjo6YWZ0ZXIsLm1hdC1leHBhbnNpb24tcGFuZWwtaGVhZGVyLWRlc2NyaXB0aW9ue2NvbG9yOnJnYmEoMCwwLDAsLjU0KX0ubWF0LWV4cGFuc2lvbi1wYW5lbC1oZWFkZXJbYXJpYS1kaXNhYmxlZD10cnVlXXtjb2xvcjpyZ2JhKDAsMCwwLC4yNil9Lm1hdC1leHBhbnNpb24tcGFuZWwtaGVhZGVyW2FyaWEtZGlzYWJsZWQ9dHJ1ZV0gLm1hdC1leHBhbnNpb24tcGFuZWwtaGVhZGVyLWRlc2NyaXB0aW9uLC5tYXQtZXhwYW5zaW9uLXBhbmVsLWhlYWRlclthcmlhLWRpc2FibGVkPXRydWVdIC5tYXQtZXhwYW5zaW9uLXBhbmVsLWhlYWRlci10aXRsZXtjb2xvcjppbmhlcml0fS5tYXQtZm9ybS1maWVsZC1sYWJlbHtjb2xvcjpyZ2JhKDAsMCwwLC42KX0ubWF0LWhpbnR7Y29sb3I6cmdiYSgwLDAsMCwuNil9Lm1hdC1mb3JtLWZpZWxkLm1hdC1mb2N1c2VkIC5tYXQtZm9ybS1maWVsZC1sYWJlbHtjb2xvcjojM2Y1MWI1fS5tYXQtZm9ybS1maWVsZC5tYXQtZm9jdXNlZCAubWF0LWZvcm0tZmllbGQtbGFiZWwubWF0LWFjY2VudHtjb2xvcjojZmY0MDgxfS5tYXQtZm9ybS1maWVsZC5tYXQtZm9jdXNlZCAubWF0LWZvcm0tZmllbGQtbGFiZWwubWF0LXdhcm57Y29sb3I6I2Y0NDMzNn0ubWF0LWZvY3VzZWQgLm1hdC1mb3JtLWZpZWxkLXJlcXVpcmVkLW1hcmtlcntjb2xvcjojZmY0MDgxfS5tYXQtZm9ybS1maWVsZC1yaXBwbGV7YmFja2dyb3VuZC1jb2xvcjpyZ2JhKDAsMCwwLC44Nyl9Lm1hdC1mb3JtLWZpZWxkLm1hdC1mb2N1c2VkIC5tYXQtZm9ybS1maWVsZC1yaXBwbGV7YmFja2dyb3VuZC1jb2xvcjojM2Y1MWI1fS5tYXQtZm9ybS1maWVsZC5tYXQtZm9jdXNlZCAubWF0LWZvcm0tZmllbGQtcmlwcGxlLm1hdC1hY2NlbnR7YmFja2dyb3VuZC1jb2xvcjojZmY0MDgxfS5tYXQtZm9ybS1maWVsZC5tYXQtZm9jdXNlZCAubWF0LWZvcm0tZmllbGQtcmlwcGxlLm1hdC13YXJue2JhY2tncm91bmQtY29sb3I6I2Y0NDMzNn0ubWF0LWZvcm0tZmllbGQubWF0LWZvcm0tZmllbGQtaW52YWxpZCAubWF0LWZvcm0tZmllbGQtbGFiZWx7Y29sb3I6I2Y0NDMzNn0ubWF0LWZvcm0tZmllbGQubWF0LWZvcm0tZmllbGQtaW52YWxpZCAubWF0LWZvcm0tZmllbGQtbGFiZWwgLm1hdC1mb3JtLWZpZWxkLXJlcXVpcmVkLW1hcmtlciwubWF0LWZvcm0tZmllbGQubWF0LWZvcm0tZmllbGQtaW52YWxpZCAubWF0LWZvcm0tZmllbGQtbGFiZWwubWF0LWFjY2VudHtjb2xvcjojZjQ0MzM2fS5tYXQtZm9ybS1maWVsZC5tYXQtZm9ybS1maWVsZC1pbnZhbGlkIC5tYXQtZm9ybS1maWVsZC1yaXBwbGUsLm1hdC1mb3JtLWZpZWxkLm1hdC1mb3JtLWZpZWxkLWludmFsaWQgLm1hdC1mb3JtLWZpZWxkLXJpcHBsZS5tYXQtYWNjZW50e2JhY2tncm91bmQtY29sb3I6I2Y0NDMzNn0ubWF0LWVycm9ye2NvbG9yOiNmNDQzMzZ9Lm1hdC1mb3JtLWZpZWxkLWFwcGVhcmFuY2UtbGVnYWN5IC5tYXQtZm9ybS1maWVsZC1sYWJlbHtjb2xvcjpyZ2JhKDAsMCwwLC41NCl9Lm1hdC1mb3JtLWZpZWxkLWFwcGVhcmFuY2UtbGVnYWN5IC5tYXQtaGludHtjb2xvcjpyZ2JhKDAsMCwwLC41NCl9Lm1hdC1mb3JtLWZpZWxkLWFwcGVhcmFuY2UtbGVnYWN5IC5tYXQtZm9ybS1maWVsZC11bmRlcmxpbmV7YmFja2dyb3VuZC1jb2xvcjpyZ2JhKDAsMCwwLC40Mil9Lm1hdC1mb3JtLWZpZWxkLWFwcGVhcmFuY2UtbGVnYWN5Lm1hdC1mb3JtLWZpZWxkLWRpc2FibGVkIC5tYXQtZm9ybS1maWVsZC11bmRlcmxpbmV7YmFja2dyb3VuZC1pbWFnZTpsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQscmdiYSgwLDAsMCwuNDIpIDAscmdiYSgwLDAsMCwuNDIpIDMzJSx0cmFuc3BhcmVudCAwKTtiYWNrZ3JvdW5kLXNpemU6NHB4IDEwMCU7YmFja2dyb3VuZC1yZXBlYXQ6cmVwZWF0LXh9Lm1hdC1mb3JtLWZpZWxkLWFwcGVhcmFuY2Utc3RhbmRhcmQgLm1hdC1mb3JtLWZpZWxkLXVuZGVybGluZXtiYWNrZ3JvdW5kLWNvbG9yOnJnYmEoMCwwLDAsLjQyKX0ubWF0LWZvcm0tZmllbGQtYXBwZWFyYW5jZS1zdGFuZGFyZC5tYXQtZm9ybS1maWVsZC1kaXNhYmxlZCAubWF0LWZvcm0tZmllbGQtdW5kZXJsaW5le2JhY2tncm91bmQtaW1hZ2U6bGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LHJnYmEoMCwwLDAsLjQyKSAwLHJnYmEoMCwwLDAsLjQyKSAzMyUsdHJhbnNwYXJlbnQgMCk7YmFja2dyb3VuZC1zaXplOjRweCAxMDAlO2JhY2tncm91bmQtcmVwZWF0OnJlcGVhdC14fS5tYXQtZm9ybS1maWVsZC1hcHBlYXJhbmNlLWZpbGwgLm1hdC1mb3JtLWZpZWxkLWZsZXh7YmFja2dyb3VuZC1jb2xvcjpyZ2JhKDAsMCwwLC4wNCl9Lm1hdC1mb3JtLWZpZWxkLWFwcGVhcmFuY2UtZmlsbC5tYXQtZm9ybS1maWVsZC1kaXNhYmxlZCAubWF0LWZvcm0tZmllbGQtZmxleHtiYWNrZ3JvdW5kLWNvbG9yOnJnYmEoMCwwLDAsLjAyKX0ubWF0LWZvcm0tZmllbGQtYXBwZWFyYW5jZS1maWxsIC5tYXQtZm9ybS1maWVsZC11bmRlcmxpbmU6OmJlZm9yZXtiYWNrZ3JvdW5kLWNvbG9yOnJnYmEoMCwwLDAsLjQyKX0ubWF0LWZvcm0tZmllbGQtYXBwZWFyYW5jZS1maWxsLm1hdC1mb3JtLWZpZWxkLWRpc2FibGVkIC5tYXQtZm9ybS1maWVsZC1sYWJlbHtjb2xvcjpyZ2JhKDAsMCwwLC4zOCl9Lm1hdC1mb3JtLWZpZWxkLWFwcGVhcmFuY2UtZmlsbC5tYXQtZm9ybS1maWVsZC1kaXNhYmxlZCAubWF0LWZvcm0tZmllbGQtdW5kZXJsaW5lOjpiZWZvcmV7YmFja2dyb3VuZC1jb2xvcjp0cmFuc3BhcmVudH0ubWF0LWZvcm0tZmllbGQtYXBwZWFyYW5jZS1vdXRsaW5lIC5tYXQtZm9ybS1maWVsZC1vdXRsaW5le2NvbG9yOnJnYmEoMCwwLDAsLjEyKX0ubWF0LWZvcm0tZmllbGQtYXBwZWFyYW5jZS1vdXRsaW5lIC5tYXQtZm9ybS1maWVsZC1vdXRsaW5lLXRoaWNre2NvbG9yOnJnYmEoMCwwLDAsLjg3KX0ubWF0LWZvcm0tZmllbGQtYXBwZWFyYW5jZS1vdXRsaW5lLm1hdC1mb2N1c2VkIC5tYXQtZm9ybS1maWVsZC1vdXRsaW5lLXRoaWNre2NvbG9yOiMzZjUxYjV9Lm1hdC1mb3JtLWZpZWxkLWFwcGVhcmFuY2Utb3V0bGluZS5tYXQtZm9jdXNlZC5tYXQtYWNjZW50IC5tYXQtZm9ybS1maWVsZC1vdXRsaW5lLXRoaWNre2NvbG9yOiNmZjQwODF9Lm1hdC1mb3JtLWZpZWxkLWFwcGVhcmFuY2Utb3V0bGluZS5tYXQtZm9jdXNlZC5tYXQtd2FybiAubWF0LWZvcm0tZmllbGQtb3V0bGluZS10aGlja3tjb2xvcjojZjQ0MzM2fS5tYXQtZm9ybS1maWVsZC1hcHBlYXJhbmNlLW91dGxpbmUubWF0LWZvcm0tZmllbGQtaW52YWxpZC5tYXQtZm9ybS1maWVsZC1pbnZhbGlkIC5tYXQtZm9ybS1maWVsZC1vdXRsaW5lLXRoaWNre2NvbG9yOiNmNDQzMzZ9Lm1hdC1mb3JtLWZpZWxkLWFwcGVhcmFuY2Utb3V0bGluZS5tYXQtZm9ybS1maWVsZC1kaXNhYmxlZCAubWF0LWZvcm0tZmllbGQtbGFiZWx7Y29sb3I6cmdiYSgwLDAsMCwuMzgpfS5tYXQtZm9ybS1maWVsZC1hcHBlYXJhbmNlLW91dGxpbmUubWF0LWZvcm0tZmllbGQtZGlzYWJsZWQgLm1hdC1mb3JtLWZpZWxkLW91dGxpbmV7Y29sb3I6cmdiYSgwLDAsMCwuMDYpfS5tYXQtaWNvbi5tYXQtcHJpbWFyeXtjb2xvcjojM2Y1MWI1fS5tYXQtaWNvbi5tYXQtYWNjZW50e2NvbG9yOiNmZjQwODF9Lm1hdC1pY29uLm1hdC13YXJue2NvbG9yOiNmNDQzMzZ9Lm1hdC1mb3JtLWZpZWxkLXR5cGUtbWF0LW5hdGl2ZS1zZWxlY3QgLm1hdC1mb3JtLWZpZWxkLWluZml4OjphZnRlcntjb2xvcjpyZ2JhKDAsMCwwLC41NCl9Lm1hdC1mb3JtLWZpZWxkLXR5cGUtbWF0LW5hdGl2ZS1zZWxlY3QubWF0LWZvcm0tZmllbGQtZGlzYWJsZWQgLm1hdC1mb3JtLWZpZWxkLWluZml4OjphZnRlciwubWF0LWlucHV0LWVsZW1lbnQ6ZGlzYWJsZWR7Y29sb3I6cmdiYSgwLDAsMCwuMzgpfS5tYXQtaW5wdXQtZWxlbWVudHtjYXJldC1jb2xvcjojM2Y1MWI1fS5tYXQtaW5wdXQtZWxlbWVudDo6cGxhY2Vob2xkZXJ7Y29sb3I6cmdiYSgwLDAsMCwuNDIpfS5tYXQtaW5wdXQtZWxlbWVudDo6LW1vei1wbGFjZWhvbGRlcntjb2xvcjpyZ2JhKDAsMCwwLC40Mil9Lm1hdC1pbnB1dC1lbGVtZW50Ojotd2Via2l0LWlucHV0LXBsYWNlaG9sZGVye2NvbG9yOnJnYmEoMCwwLDAsLjQyKX0ubWF0LWlucHV0LWVsZW1lbnQ6LW1zLWlucHV0LXBsYWNlaG9sZGVye2NvbG9yOnJnYmEoMCwwLDAsLjQyKX0ubWF0LWFjY2VudCAubWF0LWlucHV0LWVsZW1lbnR7Y2FyZXQtY29sb3I6I2ZmNDA4MX0ubWF0LWZvcm0tZmllbGQtaW52YWxpZCAubWF0LWlucHV0LWVsZW1lbnQsLm1hdC13YXJuIC5tYXQtaW5wdXQtZWxlbWVudHtjYXJldC1jb2xvcjojZjQ0MzM2fS5tYXQtZm9ybS1maWVsZC10eXBlLW1hdC1uYXRpdmUtc2VsZWN0Lm1hdC1mb3JtLWZpZWxkLWludmFsaWQgLm1hdC1mb3JtLWZpZWxkLWluZml4OjphZnRlcntjb2xvcjojZjQ0MzM2fS5tYXQtbGlzdCAubWF0LWxpc3QtaXRlbSwubWF0LW5hdi1saXN0IC5tYXQtbGlzdC1pdGVtLC5tYXQtc2VsZWN0aW9uLWxpc3QgLm1hdC1saXN0LWl0ZW17Y29sb3I6cmdiYSgwLDAsMCwuODcpfS5tYXQtbGlzdCAubWF0LWxpc3Qtb3B0aW9uLC5tYXQtbmF2LWxpc3QgLm1hdC1saXN0LW9wdGlvbiwubWF0LXNlbGVjdGlvbi1saXN0IC5tYXQtbGlzdC1vcHRpb257Y29sb3I6cmdiYSgwLDAsMCwuODcpfS5tYXQtbGlzdCAubWF0LXN1YmhlYWRlciwubWF0LW5hdi1saXN0IC5tYXQtc3ViaGVhZGVyLC5tYXQtc2VsZWN0aW9uLWxpc3QgLm1hdC1zdWJoZWFkZXJ7Y29sb3I6cmdiYSgwLDAsMCwuNTQpfS5tYXQtbGlzdC1pdGVtLWRpc2FibGVke2JhY2tncm91bmQtY29sb3I6I2VlZX0ubWF0LWxpc3Qtb3B0aW9uOmZvY3VzLC5tYXQtbGlzdC1vcHRpb246aG92ZXIsLm1hdC1uYXYtbGlzdCAubWF0LWxpc3QtaXRlbTpmb2N1cywubWF0LW5hdi1saXN0IC5tYXQtbGlzdC1pdGVtOmhvdmVye2JhY2tncm91bmQ6cmdiYSgwLDAsMCwuMDQpfS5tYXQtbWVudS1wYW5lbHtiYWNrZ3JvdW5kOiNmZmZ9Lm1hdC1tZW51LXBhbmVsOm5vdChbY2xhc3MqPW1hdC1lbGV2YXRpb24tel0pe2JveC1zaGFkb3c6MCAycHggNHB4IC0xcHggcmdiYSgwLDAsMCwuMiksMCA0cHggNXB4IDAgcmdiYSgwLDAsMCwuMTQpLDAgMXB4IDEwcHggMCByZ2JhKDAsMCwwLC4xMil9Lm1hdC1tZW51LWl0ZW17YmFja2dyb3VuZDowIDA7Y29sb3I6cmdiYSgwLDAsMCwuODcpfS5tYXQtbWVudS1pdGVtW2Rpc2FibGVkXSwubWF0LW1lbnUtaXRlbVtkaXNhYmxlZF06OmFmdGVye2NvbG9yOnJnYmEoMCwwLDAsLjM4KX0ubWF0LW1lbnUtaXRlbSAubWF0LWljb246bm90KFtjb2xvcl0pLC5tYXQtbWVudS1pdGVtLXN1Ym1lbnUtdHJpZ2dlcjo6YWZ0ZXJ7Y29sb3I6cmdiYSgwLDAsMCwuNTQpfS5tYXQtbWVudS1pdGVtLWhpZ2hsaWdodGVkOm5vdChbZGlzYWJsZWRdKSwubWF0LW1lbnUtaXRlbS5jZGsta2V5Ym9hcmQtZm9jdXNlZDpub3QoW2Rpc2FibGVkXSksLm1hdC1tZW51LWl0ZW0uY2RrLXByb2dyYW0tZm9jdXNlZDpub3QoW2Rpc2FibGVkXSksLm1hdC1tZW51LWl0ZW06aG92ZXI6bm90KFtkaXNhYmxlZF0pe2JhY2tncm91bmQ6cmdiYSgwLDAsMCwuMDQpfS5tYXQtcGFnaW5hdG9ye2JhY2tncm91bmQ6I2ZmZn0ubWF0LXBhZ2luYXRvciwubWF0LXBhZ2luYXRvci1wYWdlLXNpemUgLm1hdC1zZWxlY3QtdHJpZ2dlcntjb2xvcjpyZ2JhKDAsMCwwLC41NCl9Lm1hdC1wYWdpbmF0b3ItZGVjcmVtZW50LC5tYXQtcGFnaW5hdG9yLWluY3JlbWVudHtib3JkZXItdG9wOjJweCBzb2xpZCByZ2JhKDAsMCwwLC41NCk7Ym9yZGVyLXJpZ2h0OjJweCBzb2xpZCByZ2JhKDAsMCwwLC41NCl9Lm1hdC1wYWdpbmF0b3ItZmlyc3QsLm1hdC1wYWdpbmF0b3ItbGFzdHtib3JkZXItdG9wOjJweCBzb2xpZCByZ2JhKDAsMCwwLC41NCl9Lm1hdC1pY29uLWJ1dHRvbltkaXNhYmxlZF0gLm1hdC1wYWdpbmF0b3ItZGVjcmVtZW50LC5tYXQtaWNvbi1idXR0b25bZGlzYWJsZWRdIC5tYXQtcGFnaW5hdG9yLWZpcnN0LC5tYXQtaWNvbi1idXR0b25bZGlzYWJsZWRdIC5tYXQtcGFnaW5hdG9yLWluY3JlbWVudCwubWF0LWljb24tYnV0dG9uW2Rpc2FibGVkXSAubWF0LXBhZ2luYXRvci1sYXN0e2JvcmRlci1jb2xvcjpyZ2JhKDAsMCwwLC4zOCl9Lm1hdC1wcm9ncmVzcy1iYXItYmFja2dyb3VuZHtmaWxsOiNjNWNhZTl9Lm1hdC1wcm9ncmVzcy1iYXItYnVmZmVye2JhY2tncm91bmQtY29sb3I6I2M1Y2FlOX0ubWF0LXByb2dyZXNzLWJhci1maWxsOjphZnRlcntiYWNrZ3JvdW5kLWNvbG9yOiMzZjUxYjV9Lm1hdC1wcm9ncmVzcy1iYXIubWF0LWFjY2VudCAubWF0LXByb2dyZXNzLWJhci1iYWNrZ3JvdW5ke2ZpbGw6I2ZmODBhYn0ubWF0LXByb2dyZXNzLWJhci5tYXQtYWNjZW50IC5tYXQtcHJvZ3Jlc3MtYmFyLWJ1ZmZlcntiYWNrZ3JvdW5kLWNvbG9yOiNmZjgwYWJ9Lm1hdC1wcm9ncmVzcy1iYXIubWF0LWFjY2VudCAubWF0LXByb2dyZXNzLWJhci1maWxsOjphZnRlcntiYWNrZ3JvdW5kLWNvbG9yOiNmZjQwODF9Lm1hdC1wcm9ncmVzcy1iYXIubWF0LXdhcm4gLm1hdC1wcm9ncmVzcy1iYXItYmFja2dyb3VuZHtmaWxsOiNmZmNkZDJ9Lm1hdC1wcm9ncmVzcy1iYXIubWF0LXdhcm4gLm1hdC1wcm9ncmVzcy1iYXItYnVmZmVye2JhY2tncm91bmQtY29sb3I6I2ZmY2RkMn0ubWF0LXByb2dyZXNzLWJhci5tYXQtd2FybiAubWF0LXByb2dyZXNzLWJhci1maWxsOjphZnRlcntiYWNrZ3JvdW5kLWNvbG9yOiNmNDQzMzZ9Lm1hdC1wcm9ncmVzcy1zcGlubmVyIGNpcmNsZSwubWF0LXNwaW5uZXIgY2lyY2xle3N0cm9rZTojM2Y1MWI1fS5tYXQtcHJvZ3Jlc3Mtc3Bpbm5lci5tYXQtYWNjZW50IGNpcmNsZSwubWF0LXNwaW5uZXIubWF0LWFjY2VudCBjaXJjbGV7c3Ryb2tlOiNmZjQwODF9Lm1hdC1wcm9ncmVzcy1zcGlubmVyLm1hdC13YXJuIGNpcmNsZSwubWF0LXNwaW5uZXIubWF0LXdhcm4gY2lyY2xle3N0cm9rZTojZjQ0MzM2fS5tYXQtcmFkaW8tb3V0ZXItY2lyY2xle2JvcmRlci1jb2xvcjpyZ2JhKDAsMCwwLC41NCl9Lm1hdC1yYWRpby1idXR0b24ubWF0LXByaW1hcnkubWF0LXJhZGlvLWNoZWNrZWQgLm1hdC1yYWRpby1vdXRlci1jaXJjbGV7Ym9yZGVyLWNvbG9yOiMzZjUxYjV9Lm1hdC1yYWRpby1idXR0b24ubWF0LXByaW1hcnkgLm1hdC1yYWRpby1pbm5lci1jaXJjbGUsLm1hdC1yYWRpby1idXR0b24ubWF0LXByaW1hcnkgLm1hdC1yYWRpby1yaXBwbGUgLm1hdC1yaXBwbGUtZWxlbWVudDpub3QoLm1hdC1yYWRpby1wZXJzaXN0ZW50LXJpcHBsZSksLm1hdC1yYWRpby1idXR0b24ubWF0LXByaW1hcnkubWF0LXJhZGlvLWNoZWNrZWQgLm1hdC1yYWRpby1wZXJzaXN0ZW50LXJpcHBsZSwubWF0LXJhZGlvLWJ1dHRvbi5tYXQtcHJpbWFyeTphY3RpdmUgLm1hdC1yYWRpby1wZXJzaXN0ZW50LXJpcHBsZXtiYWNrZ3JvdW5kLWNvbG9yOiMzZjUxYjV9Lm1hdC1yYWRpby1idXR0b24ubWF0LWFjY2VudC5tYXQtcmFkaW8tY2hlY2tlZCAubWF0LXJhZGlvLW91dGVyLWNpcmNsZXtib3JkZXItY29sb3I6I2ZmNDA4MX0ubWF0LXJhZGlvLWJ1dHRvbi5tYXQtYWNjZW50IC5tYXQtcmFkaW8taW5uZXItY2lyY2xlLC5tYXQtcmFkaW8tYnV0dG9uLm1hdC1hY2NlbnQgLm1hdC1yYWRpby1yaXBwbGUgLm1hdC1yaXBwbGUtZWxlbWVudDpub3QoLm1hdC1yYWRpby1wZXJzaXN0ZW50LXJpcHBsZSksLm1hdC1yYWRpby1idXR0b24ubWF0LWFjY2VudC5tYXQtcmFkaW8tY2hlY2tlZCAubWF0LXJhZGlvLXBlcnNpc3RlbnQtcmlwcGxlLC5tYXQtcmFkaW8tYnV0dG9uLm1hdC1hY2NlbnQ6YWN0aXZlIC5tYXQtcmFkaW8tcGVyc2lzdGVudC1yaXBwbGV7YmFja2dyb3VuZC1jb2xvcjojZmY0MDgxfS5tYXQtcmFkaW8tYnV0dG9uLm1hdC13YXJuLm1hdC1yYWRpby1jaGVja2VkIC5tYXQtcmFkaW8tb3V0ZXItY2lyY2xle2JvcmRlci1jb2xvcjojZjQ0MzM2fS5tYXQtcmFkaW8tYnV0dG9uLm1hdC13YXJuIC5tYXQtcmFkaW8taW5uZXItY2lyY2xlLC5tYXQtcmFkaW8tYnV0dG9uLm1hdC13YXJuIC5tYXQtcmFkaW8tcmlwcGxlIC5tYXQtcmlwcGxlLWVsZW1lbnQ6bm90KC5tYXQtcmFkaW8tcGVyc2lzdGVudC1yaXBwbGUpLC5tYXQtcmFkaW8tYnV0dG9uLm1hdC13YXJuLm1hdC1yYWRpby1jaGVja2VkIC5tYXQtcmFkaW8tcGVyc2lzdGVudC1yaXBwbGUsLm1hdC1yYWRpby1idXR0b24ubWF0LXdhcm46YWN0aXZlIC5tYXQtcmFkaW8tcGVyc2lzdGVudC1yaXBwbGV7YmFja2dyb3VuZC1jb2xvcjojZjQ0MzM2fS5tYXQtcmFkaW8tYnV0dG9uLm1hdC1yYWRpby1kaXNhYmxlZCAubWF0LXJhZGlvLW91dGVyLWNpcmNsZSwubWF0LXJhZGlvLWJ1dHRvbi5tYXQtcmFkaW8tZGlzYWJsZWQubWF0LXJhZGlvLWNoZWNrZWQgLm1hdC1yYWRpby1vdXRlci1jaXJjbGV7Ym9yZGVyLWNvbG9yOnJnYmEoMCwwLDAsLjM4KX0ubWF0LXJhZGlvLWJ1dHRvbi5tYXQtcmFkaW8tZGlzYWJsZWQgLm1hdC1yYWRpby1pbm5lci1jaXJjbGUsLm1hdC1yYWRpby1idXR0b24ubWF0LXJhZGlvLWRpc2FibGVkIC5tYXQtcmFkaW8tcmlwcGxlIC5tYXQtcmlwcGxlLWVsZW1lbnR7YmFja2dyb3VuZC1jb2xvcjpyZ2JhKDAsMCwwLC4zOCl9Lm1hdC1yYWRpby1idXR0b24ubWF0LXJhZGlvLWRpc2FibGVkIC5tYXQtcmFkaW8tbGFiZWwtY29udGVudHtjb2xvcjpyZ2JhKDAsMCwwLC4zOCl9Lm1hdC1yYWRpby1idXR0b24gLm1hdC1yaXBwbGUtZWxlbWVudHtiYWNrZ3JvdW5kLWNvbG9yOiMwMDB9Lm1hdC1zZWxlY3QtdmFsdWV7Y29sb3I6cmdiYSgwLDAsMCwuODcpfS5tYXQtc2VsZWN0LXBsYWNlaG9sZGVye2NvbG9yOnJnYmEoMCwwLDAsLjQyKX0ubWF0LXNlbGVjdC1kaXNhYmxlZCAubWF0LXNlbGVjdC12YWx1ZXtjb2xvcjpyZ2JhKDAsMCwwLC4zOCl9Lm1hdC1zZWxlY3QtYXJyb3d7Y29sb3I6cmdiYSgwLDAsMCwuNTQpfS5tYXQtc2VsZWN0LXBhbmVse2JhY2tncm91bmQ6I2ZmZn0ubWF0LXNlbGVjdC1wYW5lbDpub3QoW2NsYXNzKj1tYXQtZWxldmF0aW9uLXpdKXtib3gtc2hhZG93OjAgMnB4IDRweCAtMXB4IHJnYmEoMCwwLDAsLjIpLDAgNHB4IDVweCAwIHJnYmEoMCwwLDAsLjE0KSwwIDFweCAxMHB4IDAgcmdiYSgwLDAsMCwuMTIpfS5tYXQtc2VsZWN0LXBhbmVsIC5tYXQtb3B0aW9uLm1hdC1zZWxlY3RlZDpub3QoLm1hdC1vcHRpb24tbXVsdGlwbGUpe2JhY2tncm91bmQ6cmdiYSgwLDAsMCwuMTIpfS5tYXQtZm9ybS1maWVsZC5tYXQtZm9jdXNlZC5tYXQtcHJpbWFyeSAubWF0LXNlbGVjdC1hcnJvd3tjb2xvcjojM2Y1MWI1fS5tYXQtZm9ybS1maWVsZC5tYXQtZm9jdXNlZC5tYXQtYWNjZW50IC5tYXQtc2VsZWN0LWFycm93e2NvbG9yOiNmZjQwODF9Lm1hdC1mb3JtLWZpZWxkLm1hdC1mb2N1c2VkLm1hdC13YXJuIC5tYXQtc2VsZWN0LWFycm93e2NvbG9yOiNmNDQzMzZ9Lm1hdC1mb3JtLWZpZWxkIC5tYXQtc2VsZWN0Lm1hdC1zZWxlY3QtaW52YWxpZCAubWF0LXNlbGVjdC1hcnJvd3tjb2xvcjojZjQ0MzM2fS5tYXQtZm9ybS1maWVsZCAubWF0LXNlbGVjdC5tYXQtc2VsZWN0LWRpc2FibGVkIC5tYXQtc2VsZWN0LWFycm93e2NvbG9yOnJnYmEoMCwwLDAsLjM4KX0ubWF0LWRyYXdlci1jb250YWluZXJ7YmFja2dyb3VuZC1jb2xvcjojZmFmYWZhO2NvbG9yOnJnYmEoMCwwLDAsLjg3KX0ubWF0LWRyYXdlcntiYWNrZ3JvdW5kLWNvbG9yOiNmZmY7Y29sb3I6cmdiYSgwLDAsMCwuODcpfS5tYXQtZHJhd2VyLm1hdC1kcmF3ZXItcHVzaHtiYWNrZ3JvdW5kLWNvbG9yOiNmZmZ9Lm1hdC1kcmF3ZXI6bm90KC5tYXQtZHJhd2VyLXNpZGUpe2JveC1zaGFkb3c6MCA4cHggMTBweCAtNXB4IHJnYmEoMCwwLDAsLjIpLDAgMTZweCAyNHB4IDJweCByZ2JhKDAsMCwwLC4xNCksMCA2cHggMzBweCA1cHggcmdiYSgwLDAsMCwuMTIpfS5tYXQtZHJhd2VyLXNpZGV7Ym9yZGVyLXJpZ2h0OnNvbGlkIDFweCByZ2JhKDAsMCwwLC4xMil9Lm1hdC1kcmF3ZXItc2lkZS5tYXQtZHJhd2VyLWVuZHtib3JkZXItbGVmdDpzb2xpZCAxcHggcmdiYSgwLDAsMCwuMTIpO2JvcmRlci1yaWdodDpub25lfVtkaXI9cnRsXSAubWF0LWRyYXdlci1zaWRle2JvcmRlci1sZWZ0OnNvbGlkIDFweCByZ2JhKDAsMCwwLC4xMik7Ym9yZGVyLXJpZ2h0Om5vbmV9W2Rpcj1ydGxdIC5tYXQtZHJhd2VyLXNpZGUubWF0LWRyYXdlci1lbmR7Ym9yZGVyLWxlZnQ6bm9uZTtib3JkZXItcmlnaHQ6c29saWQgMXB4IHJnYmEoMCwwLDAsLjEyKX0ubWF0LWRyYXdlci1iYWNrZHJvcC5tYXQtZHJhd2VyLXNob3due2JhY2tncm91bmQtY29sb3I6cmdiYSgwLDAsMCwuNil9Lm1hdC1zbGlkZS10b2dnbGUubWF0LWNoZWNrZWQ6bm90KC5tYXQtZGlzYWJsZWQpIC5tYXQtc2xpZGUtdG9nZ2xlLXRodW1ie2JhY2tncm91bmQtY29sb3I6I2ZmNDA4MX0ubWF0LXNsaWRlLXRvZ2dsZS5tYXQtY2hlY2tlZDpub3QoLm1hdC1kaXNhYmxlZCkgLm1hdC1zbGlkZS10b2dnbGUtYmFye2JhY2tncm91bmQtY29sb3I6cmdiYSgyNTUsNjQsMTI5LC41NCl9Lm1hdC1zbGlkZS10b2dnbGUubWF0LWNoZWNrZWQ6bm90KC5tYXQtZGlzYWJsZWQpIC5tYXQtcmlwcGxlLWVsZW1lbnR7YmFja2dyb3VuZC1jb2xvcjojZmY0MDgxfS5tYXQtc2xpZGUtdG9nZ2xlLm1hdC1wcmltYXJ5Lm1hdC1jaGVja2VkOm5vdCgubWF0LWRpc2FibGVkKSAubWF0LXNsaWRlLXRvZ2dsZS10aHVtYntiYWNrZ3JvdW5kLWNvbG9yOiMzZjUxYjV9Lm1hdC1zbGlkZS10b2dnbGUubWF0LXByaW1hcnkubWF0LWNoZWNrZWQ6bm90KC5tYXQtZGlzYWJsZWQpIC5tYXQtc2xpZGUtdG9nZ2xlLWJhcntiYWNrZ3JvdW5kLWNvbG9yOnJnYmEoNjMsODEsMTgxLC41NCl9Lm1hdC1zbGlkZS10b2dnbGUubWF0LXByaW1hcnkubWF0LWNoZWNrZWQ6bm90KC5tYXQtZGlzYWJsZWQpIC5tYXQtcmlwcGxlLWVsZW1lbnR7YmFja2dyb3VuZC1jb2xvcjojM2Y1MWI1fS5tYXQtc2xpZGUtdG9nZ2xlLm1hdC13YXJuLm1hdC1jaGVja2VkOm5vdCgubWF0LWRpc2FibGVkKSAubWF0LXNsaWRlLXRvZ2dsZS10aHVtYntiYWNrZ3JvdW5kLWNvbG9yOiNmNDQzMzZ9Lm1hdC1zbGlkZS10b2dnbGUubWF0LXdhcm4ubWF0LWNoZWNrZWQ6bm90KC5tYXQtZGlzYWJsZWQpIC5tYXQtc2xpZGUtdG9nZ2xlLWJhcntiYWNrZ3JvdW5kLWNvbG9yOnJnYmEoMjQ0LDY3LDU0LC41NCl9Lm1hdC1zbGlkZS10b2dnbGUubWF0LXdhcm4ubWF0LWNoZWNrZWQ6bm90KC5tYXQtZGlzYWJsZWQpIC5tYXQtcmlwcGxlLWVsZW1lbnR7YmFja2dyb3VuZC1jb2xvcjojZjQ0MzM2fS5tYXQtc2xpZGUtdG9nZ2xlOm5vdCgubWF0LWNoZWNrZWQpIC5tYXQtcmlwcGxlLWVsZW1lbnR7YmFja2dyb3VuZC1jb2xvcjojMDAwfS5tYXQtZGlzYWJsZWQgLm1hdC1zbGlkZS10b2dnbGUtdGh1bWJ7YmFja2dyb3VuZC1jb2xvcjojYmRiZGJkfS5tYXQtZGlzYWJsZWQgLm1hdC1zbGlkZS10b2dnbGUtYmFye2JhY2tncm91bmQtY29sb3I6cmdiYSgwLDAsMCwuMSl9Lm1hdC1zbGlkZS10b2dnbGUtdGh1bWJ7Ym94LXNoYWRvdzowIDJweCAxcHggLTFweCByZ2JhKDAsMCwwLC4yKSwwIDFweCAxcHggMCByZ2JhKDAsMCwwLC4xNCksMCAxcHggM3B4IDAgcmdiYSgwLDAsMCwuMTIpO2JhY2tncm91bmQtY29sb3I6I2ZhZmFmYX0ubWF0LXNsaWRlLXRvZ2dsZS1iYXJ7YmFja2dyb3VuZC1jb2xvcjpyZ2JhKDAsMCwwLC4zOCl9Lm1hdC1zbGlkZXItdHJhY2stYmFja2dyb3VuZHtiYWNrZ3JvdW5kLWNvbG9yOnJnYmEoMCwwLDAsLjI2KX0ubWF0LXByaW1hcnkgLm1hdC1zbGlkZXItdGh1bWIsLm1hdC1wcmltYXJ5IC5tYXQtc2xpZGVyLXRodW1iLWxhYmVsLC5tYXQtcHJpbWFyeSAubWF0LXNsaWRlci10cmFjay1maWxse2JhY2tncm91bmQtY29sb3I6IzNmNTFiNX0ubWF0LXByaW1hcnkgLm1hdC1zbGlkZXItdGh1bWItbGFiZWwtdGV4dHtjb2xvcjojZmZmfS5tYXQtYWNjZW50IC5tYXQtc2xpZGVyLXRodW1iLC5tYXQtYWNjZW50IC5tYXQtc2xpZGVyLXRodW1iLWxhYmVsLC5tYXQtYWNjZW50IC5tYXQtc2xpZGVyLXRyYWNrLWZpbGx7YmFja2dyb3VuZC1jb2xvcjojZmY0MDgxfS5tYXQtYWNjZW50IC5tYXQtc2xpZGVyLXRodW1iLWxhYmVsLXRleHR7Y29sb3I6I2ZmZn0ubWF0LXdhcm4gLm1hdC1zbGlkZXItdGh1bWIsLm1hdC13YXJuIC5tYXQtc2xpZGVyLXRodW1iLWxhYmVsLC5tYXQtd2FybiAubWF0LXNsaWRlci10cmFjay1maWxse2JhY2tncm91bmQtY29sb3I6I2Y0NDMzNn0ubWF0LXdhcm4gLm1hdC1zbGlkZXItdGh1bWItbGFiZWwtdGV4dHtjb2xvcjojZmZmfS5tYXQtc2xpZGVyLWZvY3VzLXJpbmd7YmFja2dyb3VuZC1jb2xvcjpyZ2JhKDI1NSw2NCwxMjksLjIpfS5jZGstZm9jdXNlZCAubWF0LXNsaWRlci10cmFjay1iYWNrZ3JvdW5kLC5tYXQtc2xpZGVyOmhvdmVyIC5tYXQtc2xpZGVyLXRyYWNrLWJhY2tncm91bmR7YmFja2dyb3VuZC1jb2xvcjpyZ2JhKDAsMCwwLC4zOCl9Lm1hdC1zbGlkZXItZGlzYWJsZWQgLm1hdC1zbGlkZXItdGh1bWIsLm1hdC1zbGlkZXItZGlzYWJsZWQgLm1hdC1zbGlkZXItdHJhY2stYmFja2dyb3VuZCwubWF0LXNsaWRlci1kaXNhYmxlZCAubWF0LXNsaWRlci10cmFjay1maWxse2JhY2tncm91bmQtY29sb3I6cmdiYSgwLDAsMCwuMjYpfS5tYXQtc2xpZGVyLWRpc2FibGVkOmhvdmVyIC5tYXQtc2xpZGVyLXRyYWNrLWJhY2tncm91bmR7YmFja2dyb3VuZC1jb2xvcjpyZ2JhKDAsMCwwLC4yNil9Lm1hdC1zbGlkZXItbWluLXZhbHVlIC5tYXQtc2xpZGVyLWZvY3VzLXJpbmd7YmFja2dyb3VuZC1jb2xvcjpyZ2JhKDAsMCwwLC4xMil9Lm1hdC1zbGlkZXItbWluLXZhbHVlLm1hdC1zbGlkZXItdGh1bWItbGFiZWwtc2hvd2luZyAubWF0LXNsaWRlci10aHVtYiwubWF0LXNsaWRlci1taW4tdmFsdWUubWF0LXNsaWRlci10aHVtYi1sYWJlbC1zaG93aW5nIC5tYXQtc2xpZGVyLXRodW1iLWxhYmVse2JhY2tncm91bmQtY29sb3I6cmdiYSgwLDAsMCwuODcpfS5tYXQtc2xpZGVyLW1pbi12YWx1ZS5tYXQtc2xpZGVyLXRodW1iLWxhYmVsLXNob3dpbmcuY2RrLWZvY3VzZWQgLm1hdC1zbGlkZXItdGh1bWIsLm1hdC1zbGlkZXItbWluLXZhbHVlLm1hdC1zbGlkZXItdGh1bWItbGFiZWwtc2hvd2luZy5jZGstZm9jdXNlZCAubWF0LXNsaWRlci10aHVtYi1sYWJlbHtiYWNrZ3JvdW5kLWNvbG9yOnJnYmEoMCwwLDAsLjI2KX0ubWF0LXNsaWRlci1taW4tdmFsdWU6bm90KC5tYXQtc2xpZGVyLXRodW1iLWxhYmVsLXNob3dpbmcpIC5tYXQtc2xpZGVyLXRodW1ie2JvcmRlci1jb2xvcjpyZ2JhKDAsMCwwLC4yNik7YmFja2dyb3VuZC1jb2xvcjp0cmFuc3BhcmVudH0ubWF0LXNsaWRlci1taW4tdmFsdWU6bm90KC5tYXQtc2xpZGVyLXRodW1iLWxhYmVsLXNob3dpbmcpLmNkay1mb2N1c2VkIC5tYXQtc2xpZGVyLXRodW1iLC5tYXQtc2xpZGVyLW1pbi12YWx1ZTpub3QoLm1hdC1zbGlkZXItdGh1bWItbGFiZWwtc2hvd2luZyk6aG92ZXIgLm1hdC1zbGlkZXItdGh1bWJ7Ym9yZGVyLWNvbG9yOnJnYmEoMCwwLDAsLjM4KX0ubWF0LXNsaWRlci1taW4tdmFsdWU6bm90KC5tYXQtc2xpZGVyLXRodW1iLWxhYmVsLXNob3dpbmcpLmNkay1mb2N1c2VkLm1hdC1zbGlkZXItZGlzYWJsZWQgLm1hdC1zbGlkZXItdGh1bWIsLm1hdC1zbGlkZXItbWluLXZhbHVlOm5vdCgubWF0LXNsaWRlci10aHVtYi1sYWJlbC1zaG93aW5nKTpob3Zlci5tYXQtc2xpZGVyLWRpc2FibGVkIC5tYXQtc2xpZGVyLXRodW1ie2JvcmRlci1jb2xvcjpyZ2JhKDAsMCwwLC4yNil9Lm1hdC1zbGlkZXItaGFzLXRpY2tzIC5tYXQtc2xpZGVyLXdyYXBwZXI6OmFmdGVye2JvcmRlci1jb2xvcjpyZ2JhKDAsMCwwLC43KX0ubWF0LXNsaWRlci1ob3Jpem9udGFsIC5tYXQtc2xpZGVyLXRpY2tze2JhY2tncm91bmQtaW1hZ2U6cmVwZWF0aW5nLWxpbmVhci1ncmFkaWVudCh0byByaWdodCxyZ2JhKDAsMCwwLC43KSxyZ2JhKDAsMCwwLC43KSAycHgsdHJhbnNwYXJlbnQgMCx0cmFuc3BhcmVudCk7YmFja2dyb3VuZC1pbWFnZTotbW96LXJlcGVhdGluZy1saW5lYXItZ3JhZGllbnQoLjAwMDFkZWcscmdiYSgwLDAsMCwuNykscmdiYSgwLDAsMCwuNykgMnB4LHRyYW5zcGFyZW50IDAsdHJhbnNwYXJlbnQpfS5tYXQtc2xpZGVyLXZlcnRpY2FsIC5tYXQtc2xpZGVyLXRpY2tze2JhY2tncm91bmQtaW1hZ2U6cmVwZWF0aW5nLWxpbmVhci1ncmFkaWVudCh0byBib3R0b20scmdiYSgwLDAsMCwuNykscmdiYSgwLDAsMCwuNykgMnB4LHRyYW5zcGFyZW50IDAsdHJhbnNwYXJlbnQpfS5tYXQtc3RlcC1oZWFkZXIuY2RrLWtleWJvYXJkLWZvY3VzZWQsLm1hdC1zdGVwLWhlYWRlci5jZGstcHJvZ3JhbS1mb2N1c2VkLC5tYXQtc3RlcC1oZWFkZXI6aG92ZXJ7YmFja2dyb3VuZC1jb2xvcjpyZ2JhKDAsMCwwLC4wNCl9Lm1hdC1zdGVwLWhlYWRlciAubWF0LXN0ZXAtbGFiZWwsLm1hdC1zdGVwLWhlYWRlciAubWF0LXN0ZXAtb3B0aW9uYWx7Y29sb3I6cmdiYSgwLDAsMCwuMzgpfS5tYXQtc3RlcC1oZWFkZXIgLm1hdC1zdGVwLWljb257YmFja2dyb3VuZC1jb2xvcjpyZ2JhKDAsMCwwLC4zOCk7Y29sb3I6I2ZmZn0ubWF0LXN0ZXAtaGVhZGVyIC5tYXQtc3RlcC1pY29uLXNlbGVjdGVkLC5tYXQtc3RlcC1oZWFkZXIgLm1hdC1zdGVwLWljb24tc3RhdGUtZG9uZSwubWF0LXN0ZXAtaGVhZGVyIC5tYXQtc3RlcC1pY29uLXN0YXRlLWVkaXR7YmFja2dyb3VuZC1jb2xvcjojM2Y1MWI1O2NvbG9yOiNmZmZ9Lm1hdC1zdGVwLWhlYWRlciAubWF0LXN0ZXAtaWNvbi1zdGF0ZS1lcnJvcntiYWNrZ3JvdW5kLWNvbG9yOnRyYW5zcGFyZW50O2NvbG9yOiNmNDQzMzZ9Lm1hdC1zdGVwLWhlYWRlciAubWF0LXN0ZXAtbGFiZWwubWF0LXN0ZXAtbGFiZWwtYWN0aXZle2NvbG9yOnJnYmEoMCwwLDAsLjg3KX0ubWF0LXN0ZXAtaGVhZGVyIC5tYXQtc3RlcC1sYWJlbC5tYXQtc3RlcC1sYWJlbC1lcnJvcntjb2xvcjojZjQ0MzM2fS5tYXQtc3RlcHBlci1ob3Jpem9udGFsLC5tYXQtc3RlcHBlci12ZXJ0aWNhbHtiYWNrZ3JvdW5kLWNvbG9yOiNmZmZ9Lm1hdC1zdGVwcGVyLXZlcnRpY2FsLWxpbmU6OmJlZm9yZXtib3JkZXItbGVmdC1jb2xvcjpyZ2JhKDAsMCwwLC4xMil9Lm1hdC1zdGVwcGVyLWhvcml6b250YWwtbGluZXtib3JkZXItdG9wLWNvbG9yOnJnYmEoMCwwLDAsLjEyKX0ubWF0LXNvcnQtaGVhZGVyLWFycm93e2NvbG9yOiM3NTc1NzV9Lm1hdC10YWItaGVhZGVyLC5tYXQtdGFiLW5hdi1iYXJ7Ym9yZGVyLWJvdHRvbToxcHggc29saWQgcmdiYSgwLDAsMCwuMTIpfS5tYXQtdGFiLWdyb3VwLWludmVydGVkLWhlYWRlciAubWF0LXRhYi1oZWFkZXIsLm1hdC10YWItZ3JvdXAtaW52ZXJ0ZWQtaGVhZGVyIC5tYXQtdGFiLW5hdi1iYXJ7Ym9yZGVyLXRvcDoxcHggc29saWQgcmdiYSgwLDAsMCwuMTIpO2JvcmRlci1ib3R0b206bm9uZX0ubWF0LXRhYi1sYWJlbCwubWF0LXRhYi1saW5re2NvbG9yOnJnYmEoMCwwLDAsLjg3KX0ubWF0LXRhYi1sYWJlbC5tYXQtdGFiLWRpc2FibGVkLC5tYXQtdGFiLWxpbmsubWF0LXRhYi1kaXNhYmxlZHtjb2xvcjpyZ2JhKDAsMCwwLC4zOCl9Lm1hdC10YWItaGVhZGVyLXBhZ2luYXRpb24tY2hldnJvbntib3JkZXItY29sb3I6cmdiYSgwLDAsMCwuODcpfS5tYXQtdGFiLWhlYWRlci1wYWdpbmF0aW9uLWRpc2FibGVkIC5tYXQtdGFiLWhlYWRlci1wYWdpbmF0aW9uLWNoZXZyb257Ym9yZGVyLWNvbG9yOnJnYmEoMCwwLDAsLjM4KX0ubWF0LXRhYi1ncm91cFtjbGFzcyo9bWF0LWJhY2tncm91bmQtXSAubWF0LXRhYi1oZWFkZXIsLm1hdC10YWItbmF2LWJhcltjbGFzcyo9bWF0LWJhY2tncm91bmQtXXtib3JkZXItYm90dG9tOm5vbmU7Ym9yZGVyLXRvcDpub25lfS5tYXQtdGFiLWdyb3VwLm1hdC1wcmltYXJ5IC5tYXQtdGFiLWxhYmVsLmNkay1rZXlib2FyZC1mb2N1c2VkOm5vdCgubWF0LXRhYi1kaXNhYmxlZCksLm1hdC10YWItZ3JvdXAubWF0LXByaW1hcnkgLm1hdC10YWItbGFiZWwuY2RrLXByb2dyYW0tZm9jdXNlZDpub3QoLm1hdC10YWItZGlzYWJsZWQpLC5tYXQtdGFiLWdyb3VwLm1hdC1wcmltYXJ5IC5tYXQtdGFiLWxpbmsuY2RrLWtleWJvYXJkLWZvY3VzZWQ6bm90KC5tYXQtdGFiLWRpc2FibGVkKSwubWF0LXRhYi1ncm91cC5tYXQtcHJpbWFyeSAubWF0LXRhYi1saW5rLmNkay1wcm9ncmFtLWZvY3VzZWQ6bm90KC5tYXQtdGFiLWRpc2FibGVkKSwubWF0LXRhYi1uYXYtYmFyLm1hdC1wcmltYXJ5IC5tYXQtdGFiLWxhYmVsLmNkay1rZXlib2FyZC1mb2N1c2VkOm5vdCgubWF0LXRhYi1kaXNhYmxlZCksLm1hdC10YWItbmF2LWJhci5tYXQtcHJpbWFyeSAubWF0LXRhYi1sYWJlbC5jZGstcHJvZ3JhbS1mb2N1c2VkOm5vdCgubWF0LXRhYi1kaXNhYmxlZCksLm1hdC10YWItbmF2LWJhci5tYXQtcHJpbWFyeSAubWF0LXRhYi1saW5rLmNkay1rZXlib2FyZC1mb2N1c2VkOm5vdCgubWF0LXRhYi1kaXNhYmxlZCksLm1hdC10YWItbmF2LWJhci5tYXQtcHJpbWFyeSAubWF0LXRhYi1saW5rLmNkay1wcm9ncmFtLWZvY3VzZWQ6bm90KC5tYXQtdGFiLWRpc2FibGVkKXtiYWNrZ3JvdW5kLWNvbG9yOnJnYmEoMTk3LDIwMiwyMzMsLjMpfS5tYXQtdGFiLWdyb3VwLm1hdC1wcmltYXJ5IC5tYXQtaW5rLWJhciwubWF0LXRhYi1uYXYtYmFyLm1hdC1wcmltYXJ5IC5tYXQtaW5rLWJhcntiYWNrZ3JvdW5kLWNvbG9yOiMzZjUxYjV9Lm1hdC10YWItZ3JvdXAubWF0LXByaW1hcnkubWF0LWJhY2tncm91bmQtcHJpbWFyeSAubWF0LWluay1iYXIsLm1hdC10YWItbmF2LWJhci5tYXQtcHJpbWFyeS5tYXQtYmFja2dyb3VuZC1wcmltYXJ5IC5tYXQtaW5rLWJhcntiYWNrZ3JvdW5kLWNvbG9yOiNmZmZ9Lm1hdC10YWItZ3JvdXAubWF0LWFjY2VudCAubWF0LXRhYi1sYWJlbC5jZGsta2V5Ym9hcmQtZm9jdXNlZDpub3QoLm1hdC10YWItZGlzYWJsZWQpLC5tYXQtdGFiLWdyb3VwLm1hdC1hY2NlbnQgLm1hdC10YWItbGFiZWwuY2RrLXByb2dyYW0tZm9jdXNlZDpub3QoLm1hdC10YWItZGlzYWJsZWQpLC5tYXQtdGFiLWdyb3VwLm1hdC1hY2NlbnQgLm1hdC10YWItbGluay5jZGsta2V5Ym9hcmQtZm9jdXNlZDpub3QoLm1hdC10YWItZGlzYWJsZWQpLC5tYXQtdGFiLWdyb3VwLm1hdC1hY2NlbnQgLm1hdC10YWItbGluay5jZGstcHJvZ3JhbS1mb2N1c2VkOm5vdCgubWF0LXRhYi1kaXNhYmxlZCksLm1hdC10YWItbmF2LWJhci5tYXQtYWNjZW50IC5tYXQtdGFiLWxhYmVsLmNkay1rZXlib2FyZC1mb2N1c2VkOm5vdCgubWF0LXRhYi1kaXNhYmxlZCksLm1hdC10YWItbmF2LWJhci5tYXQtYWNjZW50IC5tYXQtdGFiLWxhYmVsLmNkay1wcm9ncmFtLWZvY3VzZWQ6bm90KC5tYXQtdGFiLWRpc2FibGVkKSwubWF0LXRhYi1uYXYtYmFyLm1hdC1hY2NlbnQgLm1hdC10YWItbGluay5jZGsta2V5Ym9hcmQtZm9jdXNlZDpub3QoLm1hdC10YWItZGlzYWJsZWQpLC5tYXQtdGFiLW5hdi1iYXIubWF0LWFjY2VudCAubWF0LXRhYi1saW5rLmNkay1wcm9ncmFtLWZvY3VzZWQ6bm90KC5tYXQtdGFiLWRpc2FibGVkKXtiYWNrZ3JvdW5kLWNvbG9yOnJnYmEoMjU1LDEyOCwxNzEsLjMpfS5tYXQtdGFiLWdyb3VwLm1hdC1hY2NlbnQgLm1hdC1pbmstYmFyLC5tYXQtdGFiLW5hdi1iYXIubWF0LWFjY2VudCAubWF0LWluay1iYXJ7YmFja2dyb3VuZC1jb2xvcjojZmY0MDgxfS5tYXQtdGFiLWdyb3VwLm1hdC1hY2NlbnQubWF0LWJhY2tncm91bmQtYWNjZW50IC5tYXQtaW5rLWJhciwubWF0LXRhYi1uYXYtYmFyLm1hdC1hY2NlbnQubWF0LWJhY2tncm91bmQtYWNjZW50IC5tYXQtaW5rLWJhcntiYWNrZ3JvdW5kLWNvbG9yOiNmZmZ9Lm1hdC10YWItZ3JvdXAubWF0LXdhcm4gLm1hdC10YWItbGFiZWwuY2RrLWtleWJvYXJkLWZvY3VzZWQ6bm90KC5tYXQtdGFiLWRpc2FibGVkKSwubWF0LXRhYi1ncm91cC5tYXQtd2FybiAubWF0LXRhYi1sYWJlbC5jZGstcHJvZ3JhbS1mb2N1c2VkOm5vdCgubWF0LXRhYi1kaXNhYmxlZCksLm1hdC10YWItZ3JvdXAubWF0LXdhcm4gLm1hdC10YWItbGluay5jZGsta2V5Ym9hcmQtZm9jdXNlZDpub3QoLm1hdC10YWItZGlzYWJsZWQpLC5tYXQtdGFiLWdyb3VwLm1hdC13YXJuIC5tYXQtdGFiLWxpbmsuY2RrLXByb2dyYW0tZm9jdXNlZDpub3QoLm1hdC10YWItZGlzYWJsZWQpLC5tYXQtdGFiLW5hdi1iYXIubWF0LXdhcm4gLm1hdC10YWItbGFiZWwuY2RrLWtleWJvYXJkLWZvY3VzZWQ6bm90KC5tYXQtdGFiLWRpc2FibGVkKSwubWF0LXRhYi1uYXYtYmFyLm1hdC13YXJuIC5tYXQtdGFiLWxhYmVsLmNkay1wcm9ncmFtLWZvY3VzZWQ6bm90KC5tYXQtdGFiLWRpc2FibGVkKSwubWF0LXRhYi1uYXYtYmFyLm1hdC13YXJuIC5tYXQtdGFiLWxpbmsuY2RrLWtleWJvYXJkLWZvY3VzZWQ6bm90KC5tYXQtdGFiLWRpc2FibGVkKSwubWF0LXRhYi1uYXYtYmFyLm1hdC13YXJuIC5tYXQtdGFiLWxpbmsuY2RrLXByb2dyYW0tZm9jdXNlZDpub3QoLm1hdC10YWItZGlzYWJsZWQpe2JhY2tncm91bmQtY29sb3I6cmdiYSgyNTUsMjA1LDIxMCwuMyl9Lm1hdC10YWItZ3JvdXAubWF0LXdhcm4gLm1hdC1pbmstYmFyLC5tYXQtdGFiLW5hdi1iYXIubWF0LXdhcm4gLm1hdC1pbmstYmFye2JhY2tncm91bmQtY29sb3I6I2Y0NDMzNn0ubWF0LXRhYi1ncm91cC5tYXQtd2Fybi5tYXQtYmFja2dyb3VuZC13YXJuIC5tYXQtaW5rLWJhciwubWF0LXRhYi1uYXYtYmFyLm1hdC13YXJuLm1hdC1iYWNrZ3JvdW5kLXdhcm4gLm1hdC1pbmstYmFye2JhY2tncm91bmQtY29sb3I6I2ZmZn0ubWF0LXRhYi1ncm91cC5tYXQtYmFja2dyb3VuZC1wcmltYXJ5IC5tYXQtdGFiLWxhYmVsLmNkay1rZXlib2FyZC1mb2N1c2VkOm5vdCgubWF0LXRhYi1kaXNhYmxlZCksLm1hdC10YWItZ3JvdXAubWF0LWJhY2tncm91bmQtcHJpbWFyeSAubWF0LXRhYi1sYWJlbC5jZGstcHJvZ3JhbS1mb2N1c2VkOm5vdCgubWF0LXRhYi1kaXNhYmxlZCksLm1hdC10YWItZ3JvdXAubWF0LWJhY2tncm91bmQtcHJpbWFyeSAubWF0LXRhYi1saW5rLmNkay1rZXlib2FyZC1mb2N1c2VkOm5vdCgubWF0LXRhYi1kaXNhYmxlZCksLm1hdC10YWItZ3JvdXAubWF0LWJhY2tncm91bmQtcHJpbWFyeSAubWF0LXRhYi1saW5rLmNkay1wcm9ncmFtLWZvY3VzZWQ6bm90KC5tYXQtdGFiLWRpc2FibGVkKSwubWF0LXRhYi1uYXYtYmFyLm1hdC1iYWNrZ3JvdW5kLXByaW1hcnkgLm1hdC10YWItbGFiZWwuY2RrLWtleWJvYXJkLWZvY3VzZWQ6bm90KC5tYXQtdGFiLWRpc2FibGVkKSwubWF0LXRhYi1uYXYtYmFyLm1hdC1iYWNrZ3JvdW5kLXByaW1hcnkgLm1hdC10YWItbGFiZWwuY2RrLXByb2dyYW0tZm9jdXNlZDpub3QoLm1hdC10YWItZGlzYWJsZWQpLC5tYXQtdGFiLW5hdi1iYXIubWF0LWJhY2tncm91bmQtcHJpbWFyeSAubWF0LXRhYi1saW5rLmNkay1rZXlib2FyZC1mb2N1c2VkOm5vdCgubWF0LXRhYi1kaXNhYmxlZCksLm1hdC10YWItbmF2LWJhci5tYXQtYmFja2dyb3VuZC1wcmltYXJ5IC5tYXQtdGFiLWxpbmsuY2RrLXByb2dyYW0tZm9jdXNlZDpub3QoLm1hdC10YWItZGlzYWJsZWQpe2JhY2tncm91bmQtY29sb3I6cmdiYSgxOTcsMjAyLDIzMywuMyl9Lm1hdC10YWItZ3JvdXAubWF0LWJhY2tncm91bmQtcHJpbWFyeSAubWF0LXRhYi1oZWFkZXIsLm1hdC10YWItZ3JvdXAubWF0LWJhY2tncm91bmQtcHJpbWFyeSAubWF0LXRhYi1saW5rcywubWF0LXRhYi1uYXYtYmFyLm1hdC1iYWNrZ3JvdW5kLXByaW1hcnkgLm1hdC10YWItaGVhZGVyLC5tYXQtdGFiLW5hdi1iYXIubWF0LWJhY2tncm91bmQtcHJpbWFyeSAubWF0LXRhYi1saW5rc3tiYWNrZ3JvdW5kLWNvbG9yOiMzZjUxYjV9Lm1hdC10YWItZ3JvdXAubWF0LWJhY2tncm91bmQtcHJpbWFyeSAubWF0LXRhYi1sYWJlbCwubWF0LXRhYi1ncm91cC5tYXQtYmFja2dyb3VuZC1wcmltYXJ5IC5tYXQtdGFiLWxpbmssLm1hdC10YWItbmF2LWJhci5tYXQtYmFja2dyb3VuZC1wcmltYXJ5IC5tYXQtdGFiLWxhYmVsLC5tYXQtdGFiLW5hdi1iYXIubWF0LWJhY2tncm91bmQtcHJpbWFyeSAubWF0LXRhYi1saW5re2NvbG9yOiNmZmZ9Lm1hdC10YWItZ3JvdXAubWF0LWJhY2tncm91bmQtcHJpbWFyeSAubWF0LXRhYi1sYWJlbC5tYXQtdGFiLWRpc2FibGVkLC5tYXQtdGFiLWdyb3VwLm1hdC1iYWNrZ3JvdW5kLXByaW1hcnkgLm1hdC10YWItbGluay5tYXQtdGFiLWRpc2FibGVkLC5tYXQtdGFiLW5hdi1iYXIubWF0LWJhY2tncm91bmQtcHJpbWFyeSAubWF0LXRhYi1sYWJlbC5tYXQtdGFiLWRpc2FibGVkLC5tYXQtdGFiLW5hdi1iYXIubWF0LWJhY2tncm91bmQtcHJpbWFyeSAubWF0LXRhYi1saW5rLm1hdC10YWItZGlzYWJsZWR7Y29sb3I6cmdiYSgyNTUsMjU1LDI1NSwuNCl9Lm1hdC10YWItZ3JvdXAubWF0LWJhY2tncm91bmQtcHJpbWFyeSAubWF0LXRhYi1oZWFkZXItcGFnaW5hdGlvbi1jaGV2cm9uLC5tYXQtdGFiLW5hdi1iYXIubWF0LWJhY2tncm91bmQtcHJpbWFyeSAubWF0LXRhYi1oZWFkZXItcGFnaW5hdGlvbi1jaGV2cm9ue2JvcmRlci1jb2xvcjojZmZmfS5tYXQtdGFiLWdyb3VwLm1hdC1iYWNrZ3JvdW5kLXByaW1hcnkgLm1hdC10YWItaGVhZGVyLXBhZ2luYXRpb24tZGlzYWJsZWQgLm1hdC10YWItaGVhZGVyLXBhZ2luYXRpb24tY2hldnJvbiwubWF0LXRhYi1uYXYtYmFyLm1hdC1iYWNrZ3JvdW5kLXByaW1hcnkgLm1hdC10YWItaGVhZGVyLXBhZ2luYXRpb24tZGlzYWJsZWQgLm1hdC10YWItaGVhZGVyLXBhZ2luYXRpb24tY2hldnJvbntib3JkZXItY29sb3I6cmdiYSgyNTUsMjU1LDI1NSwuNCl9Lm1hdC10YWItZ3JvdXAubWF0LWJhY2tncm91bmQtcHJpbWFyeSAubWF0LXJpcHBsZS1lbGVtZW50LC5tYXQtdGFiLW5hdi1iYXIubWF0LWJhY2tncm91bmQtcHJpbWFyeSAubWF0LXJpcHBsZS1lbGVtZW50e2JhY2tncm91bmQtY29sb3I6cmdiYSgyNTUsMjU1LDI1NSwuMTIpfS5tYXQtdGFiLWdyb3VwLm1hdC1iYWNrZ3JvdW5kLWFjY2VudCAubWF0LXRhYi1sYWJlbC5jZGsta2V5Ym9hcmQtZm9jdXNlZDpub3QoLm1hdC10YWItZGlzYWJsZWQpLC5tYXQtdGFiLWdyb3VwLm1hdC1iYWNrZ3JvdW5kLWFjY2VudCAubWF0LXRhYi1sYWJlbC5jZGstcHJvZ3JhbS1mb2N1c2VkOm5vdCgubWF0LXRhYi1kaXNhYmxlZCksLm1hdC10YWItZ3JvdXAubWF0LWJhY2tncm91bmQtYWNjZW50IC5tYXQtdGFiLWxpbmsuY2RrLWtleWJvYXJkLWZvY3VzZWQ6bm90KC5tYXQtdGFiLWRpc2FibGVkKSwubWF0LXRhYi1ncm91cC5tYXQtYmFja2dyb3VuZC1hY2NlbnQgLm1hdC10YWItbGluay5jZGstcHJvZ3JhbS1mb2N1c2VkOm5vdCgubWF0LXRhYi1kaXNhYmxlZCksLm1hdC10YWItbmF2LWJhci5tYXQtYmFja2dyb3VuZC1hY2NlbnQgLm1hdC10YWItbGFiZWwuY2RrLWtleWJvYXJkLWZvY3VzZWQ6bm90KC5tYXQtdGFiLWRpc2FibGVkKSwubWF0LXRhYi1uYXYtYmFyLm1hdC1iYWNrZ3JvdW5kLWFjY2VudCAubWF0LXRhYi1sYWJlbC5jZGstcHJvZ3JhbS1mb2N1c2VkOm5vdCgubWF0LXRhYi1kaXNhYmxlZCksLm1hdC10YWItbmF2LWJhci5tYXQtYmFja2dyb3VuZC1hY2NlbnQgLm1hdC10YWItbGluay5jZGsta2V5Ym9hcmQtZm9jdXNlZDpub3QoLm1hdC10YWItZGlzYWJsZWQpLC5tYXQtdGFiLW5hdi1iYXIubWF0LWJhY2tncm91bmQtYWNjZW50IC5tYXQtdGFiLWxpbmsuY2RrLXByb2dyYW0tZm9jdXNlZDpub3QoLm1hdC10YWItZGlzYWJsZWQpe2JhY2tncm91bmQtY29sb3I6cmdiYSgyNTUsMTI4LDE3MSwuMyl9Lm1hdC10YWItZ3JvdXAubWF0LWJhY2tncm91bmQtYWNjZW50IC5tYXQtdGFiLWhlYWRlciwubWF0LXRhYi1ncm91cC5tYXQtYmFja2dyb3VuZC1hY2NlbnQgLm1hdC10YWItbGlua3MsLm1hdC10YWItbmF2LWJhci5tYXQtYmFja2dyb3VuZC1hY2NlbnQgLm1hdC10YWItaGVhZGVyLC5tYXQtdGFiLW5hdi1iYXIubWF0LWJhY2tncm91bmQtYWNjZW50IC5tYXQtdGFiLWxpbmtze2JhY2tncm91bmQtY29sb3I6I2ZmNDA4MX0ubWF0LXRhYi1ncm91cC5tYXQtYmFja2dyb3VuZC1hY2NlbnQgLm1hdC10YWItbGFiZWwsLm1hdC10YWItZ3JvdXAubWF0LWJhY2tncm91bmQtYWNjZW50IC5tYXQtdGFiLWxpbmssLm1hdC10YWItbmF2LWJhci5tYXQtYmFja2dyb3VuZC1hY2NlbnQgLm1hdC10YWItbGFiZWwsLm1hdC10YWItbmF2LWJhci5tYXQtYmFja2dyb3VuZC1hY2NlbnQgLm1hdC10YWItbGlua3tjb2xvcjojZmZmfS5tYXQtdGFiLWdyb3VwLm1hdC1iYWNrZ3JvdW5kLWFjY2VudCAubWF0LXRhYi1sYWJlbC5tYXQtdGFiLWRpc2FibGVkLC5tYXQtdGFiLWdyb3VwLm1hdC1iYWNrZ3JvdW5kLWFjY2VudCAubWF0LXRhYi1saW5rLm1hdC10YWItZGlzYWJsZWQsLm1hdC10YWItbmF2LWJhci5tYXQtYmFja2dyb3VuZC1hY2NlbnQgLm1hdC10YWItbGFiZWwubWF0LXRhYi1kaXNhYmxlZCwubWF0LXRhYi1uYXYtYmFyLm1hdC1iYWNrZ3JvdW5kLWFjY2VudCAubWF0LXRhYi1saW5rLm1hdC10YWItZGlzYWJsZWR7Y29sb3I6cmdiYSgyNTUsMjU1LDI1NSwuNCl9Lm1hdC10YWItZ3JvdXAubWF0LWJhY2tncm91bmQtYWNjZW50IC5tYXQtdGFiLWhlYWRlci1wYWdpbmF0aW9uLWNoZXZyb24sLm1hdC10YWItbmF2LWJhci5tYXQtYmFja2dyb3VuZC1hY2NlbnQgLm1hdC10YWItaGVhZGVyLXBhZ2luYXRpb24tY2hldnJvbntib3JkZXItY29sb3I6I2ZmZn0ubWF0LXRhYi1ncm91cC5tYXQtYmFja2dyb3VuZC1hY2NlbnQgLm1hdC10YWItaGVhZGVyLXBhZ2luYXRpb24tZGlzYWJsZWQgLm1hdC10YWItaGVhZGVyLXBhZ2luYXRpb24tY2hldnJvbiwubWF0LXRhYi1uYXYtYmFyLm1hdC1iYWNrZ3JvdW5kLWFjY2VudCAubWF0LXRhYi1oZWFkZXItcGFnaW5hdGlvbi1kaXNhYmxlZCAubWF0LXRhYi1oZWFkZXItcGFnaW5hdGlvbi1jaGV2cm9ue2JvcmRlci1jb2xvcjpyZ2JhKDI1NSwyNTUsMjU1LC40KX0ubWF0LXRhYi1ncm91cC5tYXQtYmFja2dyb3VuZC1hY2NlbnQgLm1hdC1yaXBwbGUtZWxlbWVudCwubWF0LXRhYi1uYXYtYmFyLm1hdC1iYWNrZ3JvdW5kLWFjY2VudCAubWF0LXJpcHBsZS1lbGVtZW50e2JhY2tncm91bmQtY29sb3I6cmdiYSgyNTUsMjU1LDI1NSwuMTIpfS5tYXQtdGFiLWdyb3VwLm1hdC1iYWNrZ3JvdW5kLXdhcm4gLm1hdC10YWItbGFiZWwuY2RrLWtleWJvYXJkLWZvY3VzZWQ6bm90KC5tYXQtdGFiLWRpc2FibGVkKSwubWF0LXRhYi1ncm91cC5tYXQtYmFja2dyb3VuZC13YXJuIC5tYXQtdGFiLWxhYmVsLmNkay1wcm9ncmFtLWZvY3VzZWQ6bm90KC5tYXQtdGFiLWRpc2FibGVkKSwubWF0LXRhYi1ncm91cC5tYXQtYmFja2dyb3VuZC13YXJuIC5tYXQtdGFiLWxpbmsuY2RrLWtleWJvYXJkLWZvY3VzZWQ6bm90KC5tYXQtdGFiLWRpc2FibGVkKSwubWF0LXRhYi1ncm91cC5tYXQtYmFja2dyb3VuZC13YXJuIC5tYXQtdGFiLWxpbmsuY2RrLXByb2dyYW0tZm9jdXNlZDpub3QoLm1hdC10YWItZGlzYWJsZWQpLC5tYXQtdGFiLW5hdi1iYXIubWF0LWJhY2tncm91bmQtd2FybiAubWF0LXRhYi1sYWJlbC5jZGsta2V5Ym9hcmQtZm9jdXNlZDpub3QoLm1hdC10YWItZGlzYWJsZWQpLC5tYXQtdGFiLW5hdi1iYXIubWF0LWJhY2tncm91bmQtd2FybiAubWF0LXRhYi1sYWJlbC5jZGstcHJvZ3JhbS1mb2N1c2VkOm5vdCgubWF0LXRhYi1kaXNhYmxlZCksLm1hdC10YWItbmF2LWJhci5tYXQtYmFja2dyb3VuZC13YXJuIC5tYXQtdGFiLWxpbmsuY2RrLWtleWJvYXJkLWZvY3VzZWQ6bm90KC5tYXQtdGFiLWRpc2FibGVkKSwubWF0LXRhYi1uYXYtYmFyLm1hdC1iYWNrZ3JvdW5kLXdhcm4gLm1hdC10YWItbGluay5jZGstcHJvZ3JhbS1mb2N1c2VkOm5vdCgubWF0LXRhYi1kaXNhYmxlZCl7YmFja2dyb3VuZC1jb2xvcjpyZ2JhKDI1NSwyMDUsMjEwLC4zKX0ubWF0LXRhYi1ncm91cC5tYXQtYmFja2dyb3VuZC13YXJuIC5tYXQtdGFiLWhlYWRlciwubWF0LXRhYi1ncm91cC5tYXQtYmFja2dyb3VuZC13YXJuIC5tYXQtdGFiLWxpbmtzLC5tYXQtdGFiLW5hdi1iYXIubWF0LWJhY2tncm91bmQtd2FybiAubWF0LXRhYi1oZWFkZXIsLm1hdC10YWItbmF2LWJhci5tYXQtYmFja2dyb3VuZC13YXJuIC5tYXQtdGFiLWxpbmtze2JhY2tncm91bmQtY29sb3I6I2Y0NDMzNn0ubWF0LXRhYi1ncm91cC5tYXQtYmFja2dyb3VuZC13YXJuIC5tYXQtdGFiLWxhYmVsLC5tYXQtdGFiLWdyb3VwLm1hdC1iYWNrZ3JvdW5kLXdhcm4gLm1hdC10YWItbGluaywubWF0LXRhYi1uYXYtYmFyLm1hdC1iYWNrZ3JvdW5kLXdhcm4gLm1hdC10YWItbGFiZWwsLm1hdC10YWItbmF2LWJhci5tYXQtYmFja2dyb3VuZC13YXJuIC5tYXQtdGFiLWxpbmt7Y29sb3I6I2ZmZn0ubWF0LXRhYi1ncm91cC5tYXQtYmFja2dyb3VuZC13YXJuIC5tYXQtdGFiLWxhYmVsLm1hdC10YWItZGlzYWJsZWQsLm1hdC10YWItZ3JvdXAubWF0LWJhY2tncm91bmQtd2FybiAubWF0LXRhYi1saW5rLm1hdC10YWItZGlzYWJsZWQsLm1hdC10YWItbmF2LWJhci5tYXQtYmFja2dyb3VuZC13YXJuIC5tYXQtdGFiLWxhYmVsLm1hdC10YWItZGlzYWJsZWQsLm1hdC10YWItbmF2LWJhci5tYXQtYmFja2dyb3VuZC13YXJuIC5tYXQtdGFiLWxpbmsubWF0LXRhYi1kaXNhYmxlZHtjb2xvcjpyZ2JhKDI1NSwyNTUsMjU1LC40KX0ubWF0LXRhYi1ncm91cC5tYXQtYmFja2dyb3VuZC13YXJuIC5tYXQtdGFiLWhlYWRlci1wYWdpbmF0aW9uLWNoZXZyb24sLm1hdC10YWItbmF2LWJhci5tYXQtYmFja2dyb3VuZC13YXJuIC5tYXQtdGFiLWhlYWRlci1wYWdpbmF0aW9uLWNoZXZyb257Ym9yZGVyLWNvbG9yOiNmZmZ9Lm1hdC10YWItZ3JvdXAubWF0LWJhY2tncm91bmQtd2FybiAubWF0LXRhYi1oZWFkZXItcGFnaW5hdGlvbi1kaXNhYmxlZCAubWF0LXRhYi1oZWFkZXItcGFnaW5hdGlvbi1jaGV2cm9uLC5tYXQtdGFiLW5hdi1iYXIubWF0LWJhY2tncm91bmQtd2FybiAubWF0LXRhYi1oZWFkZXItcGFnaW5hdGlvbi1kaXNhYmxlZCAubWF0LXRhYi1oZWFkZXItcGFnaW5hdGlvbi1jaGV2cm9ue2JvcmRlci1jb2xvcjpyZ2JhKDI1NSwyNTUsMjU1LC40KX0ubWF0LXRhYi1ncm91cC5tYXQtYmFja2dyb3VuZC13YXJuIC5tYXQtcmlwcGxlLWVsZW1lbnQsLm1hdC10YWItbmF2LWJhci5tYXQtYmFja2dyb3VuZC13YXJuIC5tYXQtcmlwcGxlLWVsZW1lbnR7YmFja2dyb3VuZC1jb2xvcjpyZ2JhKDI1NSwyNTUsMjU1LC4xMil9Lm1hdC10b29sYmFye2JhY2tncm91bmQ6I2Y1ZjVmNTtjb2xvcjpyZ2JhKDAsMCwwLC44Nyl9Lm1hdC10b29sYmFyLm1hdC1wcmltYXJ5e2JhY2tncm91bmQ6IzNmNTFiNTtjb2xvcjojZmZmfS5tYXQtdG9vbGJhci5tYXQtYWNjZW50e2JhY2tncm91bmQ6I2ZmNDA4MTtjb2xvcjojZmZmfS5tYXQtdG9vbGJhci5tYXQtd2FybntiYWNrZ3JvdW5kOiNmNDQzMzY7Y29sb3I6I2ZmZn0ubWF0LXRvb2xiYXIgLm1hdC1mb2N1c2VkIC5tYXQtZm9ybS1maWVsZC1yaXBwbGUsLm1hdC10b29sYmFyIC5tYXQtZm9ybS1maWVsZC1yaXBwbGUsLm1hdC10b29sYmFyIC5tYXQtZm9ybS1maWVsZC11bmRlcmxpbmV7YmFja2dyb3VuZC1jb2xvcjpjdXJyZW50Q29sb3J9Lm1hdC10b29sYmFyIC5tYXQtZm9jdXNlZCAubWF0LWZvcm0tZmllbGQtbGFiZWwsLm1hdC10b29sYmFyIC5tYXQtZm9ybS1maWVsZC1sYWJlbCwubWF0LXRvb2xiYXIgLm1hdC1mb3JtLWZpZWxkLm1hdC1mb2N1c2VkIC5tYXQtc2VsZWN0LWFycm93LC5tYXQtdG9vbGJhciAubWF0LXNlbGVjdC1hcnJvdywubWF0LXRvb2xiYXIgLm1hdC1zZWxlY3QtdmFsdWV7Y29sb3I6aW5oZXJpdH0ubWF0LXRvb2xiYXIgLm1hdC1pbnB1dC1lbGVtZW50e2NhcmV0LWNvbG9yOmN1cnJlbnRDb2xvcn0ubWF0LXRvb2x0aXB7YmFja2dyb3VuZDpyZ2JhKDk3LDk3LDk3LC45KX0ubWF0LXRyZWV7YmFja2dyb3VuZDojZmZmfS5tYXQtbmVzdGVkLXRyZWUtbm9kZSwubWF0LXRyZWUtbm9kZXtjb2xvcjpyZ2JhKDAsMCwwLC44Nyl9Lm1hdC1zbmFjay1iYXItY29udGFpbmVye2NvbG9yOnJnYmEoMjU1LDI1NSwyNTUsLjcpO2JhY2tncm91bmQ6IzMyMzIzMjtib3gtc2hhZG93OjAgM3B4IDVweCAtMXB4IHJnYmEoMCwwLDAsLjIpLDAgNnB4IDEwcHggMCByZ2JhKDAsMCwwLC4xNCksMCAxcHggMThweCAwIHJnYmEoMCwwLDAsLjEyKX0ubWF0LXNpbXBsZS1zbmFja2Jhci1hY3Rpb257Y29sb3I6I2ZmNDA4MX0iLCIvKiFcbiAqIEJvb3RzdHJhcCBSZWJvb3QgdjQuMS4zIChodHRwczovL2dldGJvb3RzdHJhcC5jb20vKVxuICogQ29weXJpZ2h0IDIwMTEtMjAxOCBUaGUgQm9vdHN0cmFwIEF1dGhvcnNcbiAqIENvcHlyaWdodCAyMDExLTIwMTggVHdpdHRlciwgSW5jLlxuICogTGljZW5zZWQgdW5kZXIgTUlUIChodHRwczovL2dpdGh1Yi5jb20vdHdicy9ib290c3RyYXAvYmxvYi9tYXN0ZXIvTElDRU5TRSlcbiAqIEZvcmtlZCBmcm9tIE5vcm1hbGl6ZS5jc3MsIGxpY2Vuc2VkIE1JVCAoaHR0cHM6Ly9naXRodWIuY29tL25lY29sYXMvbm9ybWFsaXplLmNzcy9ibG9iL21hc3Rlci9MSUNFTlNFLm1kKVxuICovXG5cbkBpbXBvcnQgXCJmdW5jdGlvbnNcIjtcbkBpbXBvcnQgXCJ2YXJpYWJsZXNcIjtcbkBpbXBvcnQgXCJtaXhpbnNcIjtcbkBpbXBvcnQgXCJyZWJvb3RcIjtcbiIsIi8vIHN0eWxlbGludC1kaXNhYmxlIGF0LXJ1bGUtbm8tdmVuZG9yLXByZWZpeCwgZGVjbGFyYXRpb24tbm8taW1wb3J0YW50LCBzZWxlY3Rvci1uby1xdWFsaWZ5aW5nLXR5cGUsIHByb3BlcnR5LW5vLXZlbmRvci1wcmVmaXhcblxuLy8gUmVib290XG4vL1xuLy8gTm9ybWFsaXphdGlvbiBvZiBIVE1MIGVsZW1lbnRzLCBtYW51YWxseSBmb3JrZWQgZnJvbSBOb3JtYWxpemUuY3NzIHRvIHJlbW92ZVxuLy8gc3R5bGVzIHRhcmdldGluZyBpcnJlbGV2YW50IGJyb3dzZXJzIHdoaWxlIGFwcGx5aW5nIG5ldyBzdHlsZXMuXG4vL1xuLy8gTm9ybWFsaXplIGlzIGxpY2Vuc2VkIE1JVC4gaHR0cHM6Ly9naXRodWIuY29tL25lY29sYXMvbm9ybWFsaXplLmNzc1xuXG5cbi8vIERvY3VtZW50XG4vL1xuLy8gMS4gQ2hhbmdlIGZyb20gYGJveC1zaXppbmc6IGNvbnRlbnQtYm94YCBzbyB0aGF0IGB3aWR0aGAgaXMgbm90IGFmZmVjdGVkIGJ5IGBwYWRkaW5nYCBvciBgYm9yZGVyYC5cbi8vIDIuIENoYW5nZSB0aGUgZGVmYXVsdCBmb250IGZhbWlseSBpbiBhbGwgYnJvd3NlcnMuXG4vLyAzLiBDb3JyZWN0IHRoZSBsaW5lIGhlaWdodCBpbiBhbGwgYnJvd3NlcnMuXG4vLyA0LiBQcmV2ZW50IGFkanVzdG1lbnRzIG9mIGZvbnQgc2l6ZSBhZnRlciBvcmllbnRhdGlvbiBjaGFuZ2VzIGluIElFIG9uIFdpbmRvd3MgUGhvbmUgYW5kIGluIGlPUy5cbi8vIDUuIFNldHRpbmcgQHZpZXdwb3J0IGNhdXNlcyBzY3JvbGxiYXJzIHRvIG92ZXJsYXAgY29udGVudCBpbiBJRTExIGFuZCBFZGdlLCBzb1xuLy8gICAgd2UgZm9yY2UgYSBub24tb3ZlcmxhcHBpbmcsIG5vbi1hdXRvLWhpZGluZyBzY3JvbGxiYXIgdG8gY291bnRlcmFjdC5cbi8vIDYuIENoYW5nZSB0aGUgZGVmYXVsdCB0YXAgaGlnaGxpZ2h0IHRvIGJlIGNvbXBsZXRlbHkgdHJhbnNwYXJlbnQgaW4gaU9TLlxuXG4qLFxuKjo6YmVmb3JlLFxuKjo6YWZ0ZXIge1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94OyAvLyAxXG59XG5cbmh0bWwge1xuICBmb250LWZhbWlseTogc2Fucy1zZXJpZjsgLy8gMlxuICBsaW5lLWhlaWdodDogMS4xNTsgLy8gM1xuICAtd2Via2l0LXRleHQtc2l6ZS1hZGp1c3Q6IDEwMCU7IC8vIDRcbiAgLW1zLXRleHQtc2l6ZS1hZGp1c3Q6IDEwMCU7IC8vIDRcbiAgLW1zLW92ZXJmbG93LXN0eWxlOiBzY3JvbGxiYXI7IC8vIDVcbiAgLXdlYmtpdC10YXAtaGlnaGxpZ2h0LWNvbG9yOiByZ2JhKCRibGFjaywgMCk7IC8vIDZcbn1cblxuLy8gSUUxMCsgZG9lc24ndCBob25vciBgPG1ldGEgbmFtZT1cInZpZXdwb3J0XCI+YCBpbiBzb21lIGNhc2VzLlxuQGF0LXJvb3Qge1xuICBALW1zLXZpZXdwb3J0IHtcbiAgICB3aWR0aDogZGV2aWNlLXdpZHRoO1xuICB9XG59XG5cbi8vIHN0eWxlbGludC1kaXNhYmxlIHNlbGVjdG9yLWxpc3QtY29tbWEtbmV3bGluZS1hZnRlclxuLy8gU2hpbSBmb3IgXCJuZXdcIiBIVE1MNSBzdHJ1Y3R1cmFsIGVsZW1lbnRzIHRvIGRpc3BsYXkgY29ycmVjdGx5IChJRTEwLCBvbGRlciBicm93c2VycylcbmFydGljbGUsIGFzaWRlLCBmaWdjYXB0aW9uLCBmaWd1cmUsIGZvb3RlciwgaGVhZGVyLCBoZ3JvdXAsIG1haW4sIG5hdiwgc2VjdGlvbiB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuLy8gc3R5bGVsaW50LWVuYWJsZSBzZWxlY3Rvci1saXN0LWNvbW1hLW5ld2xpbmUtYWZ0ZXJcblxuLy8gQm9keVxuLy9cbi8vIDEuIFJlbW92ZSB0aGUgbWFyZ2luIGluIGFsbCBicm93c2Vycy5cbi8vIDIuIEFzIGEgYmVzdCBwcmFjdGljZSwgYXBwbHkgYSBkZWZhdWx0IGBiYWNrZ3JvdW5kLWNvbG9yYC5cbi8vIDMuIFNldCBhbiBleHBsaWNpdCBpbml0aWFsIHRleHQtYWxpZ24gdmFsdWUgc28gdGhhdCB3ZSBjYW4gbGF0ZXIgdXNlIHRoZVxuLy8gICAgdGhlIGBpbmhlcml0YCB2YWx1ZSBvbiB0aGluZ3MgbGlrZSBgPHRoPmAgZWxlbWVudHMuXG5cbmJvZHkge1xuICBtYXJnaW46IDA7IC8vIDFcbiAgZm9udC1mYW1pbHk6ICRmb250LWZhbWlseS1iYXNlO1xuICBmb250LXNpemU6ICRmb250LXNpemUtYmFzZTtcbiAgZm9udC13ZWlnaHQ6ICRmb250LXdlaWdodC1iYXNlO1xuICBsaW5lLWhlaWdodDogJGxpbmUtaGVpZ2h0LWJhc2U7XG4gIGNvbG9yOiAkYm9keS1jb2xvcjtcbiAgdGV4dC1hbGlnbjogbGVmdDsgLy8gM1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAkYm9keS1iZzsgLy8gMlxufVxuXG4vLyBTdXBwcmVzcyB0aGUgZm9jdXMgb3V0bGluZSBvbiBlbGVtZW50cyB0aGF0IGNhbm5vdCBiZSBhY2Nlc3NlZCB2aWEga2V5Ym9hcmQuXG4vLyBUaGlzIHByZXZlbnRzIGFuIHVud2FudGVkIGZvY3VzIG91dGxpbmUgZnJvbSBhcHBlYXJpbmcgYXJvdW5kIGVsZW1lbnRzIHRoYXRcbi8vIG1pZ2h0IHN0aWxsIHJlc3BvbmQgdG8gcG9pbnRlciBldmVudHMuXG4vL1xuLy8gQ3JlZGl0OiBodHRwczovL2dpdGh1Yi5jb20vc3VpdGNzcy9iYXNlXG5bdGFiaW5kZXg9XCItMVwiXTpmb2N1cyB7XG4gIG91dGxpbmU6IDAgIWltcG9ydGFudDtcbn1cblxuXG4vLyBDb250ZW50IGdyb3VwaW5nXG4vL1xuLy8gMS4gQWRkIHRoZSBjb3JyZWN0IGJveCBzaXppbmcgaW4gRmlyZWZveC5cbi8vIDIuIFNob3cgdGhlIG92ZXJmbG93IGluIEVkZ2UgYW5kIElFLlxuXG5ociB7XG4gIGJveC1zaXppbmc6IGNvbnRlbnQtYm94OyAvLyAxXG4gIGhlaWdodDogMDsgLy8gMVxuICBvdmVyZmxvdzogdmlzaWJsZTsgLy8gMlxufVxuXG5cbi8vXG4vLyBUeXBvZ3JhcGh5XG4vL1xuXG4vLyBSZW1vdmUgdG9wIG1hcmdpbnMgZnJvbSBoZWFkaW5nc1xuLy9cbi8vIEJ5IGRlZmF1bHQsIGA8aDE+YC1gPGg2PmAgYWxsIHJlY2VpdmUgdG9wIGFuZCBib3R0b20gbWFyZ2lucy4gV2UgbnVrZSB0aGUgdG9wXG4vLyBtYXJnaW4gZm9yIGVhc2llciBjb250cm9sIHdpdGhpbiB0eXBlIHNjYWxlcyBhcyBpdCBhdm9pZHMgbWFyZ2luIGNvbGxhcHNpbmcuXG4vLyBzdHlsZWxpbnQtZGlzYWJsZSBzZWxlY3Rvci1saXN0LWNvbW1hLW5ld2xpbmUtYWZ0ZXJcbmgxLCBoMiwgaDMsIGg0LCBoNSwgaDYge1xuICBtYXJnaW4tdG9wOiAwO1xuICBtYXJnaW4tYm90dG9tOiAkaGVhZGluZ3MtbWFyZ2luLWJvdHRvbTtcbn1cbi8vIHN0eWxlbGludC1lbmFibGUgc2VsZWN0b3ItbGlzdC1jb21tYS1uZXdsaW5lLWFmdGVyXG5cbi8vIFJlc2V0IG1hcmdpbnMgb24gcGFyYWdyYXBoc1xuLy9cbi8vIFNpbWlsYXJseSwgdGhlIHRvcCBtYXJnaW4gb24gYDxwPmBzIGdldCByZXNldC4gSG93ZXZlciwgd2UgYWxzbyByZXNldCB0aGVcbi8vIGJvdHRvbSBtYXJnaW4gdG8gdXNlIGByZW1gIHVuaXRzIGluc3RlYWQgb2YgYGVtYC5cbnAge1xuICBtYXJnaW4tdG9wOiAwO1xuICBtYXJnaW4tYm90dG9tOiAkcGFyYWdyYXBoLW1hcmdpbi1ib3R0b207XG59XG5cbi8vIEFiYnJldmlhdGlvbnNcbi8vXG4vLyAxLiBSZW1vdmUgdGhlIGJvdHRvbSBib3JkZXIgaW4gRmlyZWZveCAzOS0uXG4vLyAyLiBBZGQgdGhlIGNvcnJlY3QgdGV4dCBkZWNvcmF0aW9uIGluIENocm9tZSwgRWRnZSwgSUUsIE9wZXJhLCBhbmQgU2FmYXJpLlxuLy8gMy4gQWRkIGV4cGxpY2l0IGN1cnNvciB0byBpbmRpY2F0ZSBjaGFuZ2VkIGJlaGF2aW9yLlxuLy8gNC4gRHVwbGljYXRlIGJlaGF2aW9yIHRvIHRoZSBkYXRhLSogYXR0cmlidXRlIGZvciBvdXIgdG9vbHRpcCBwbHVnaW5cblxuYWJiclt0aXRsZV0sXG5hYmJyW2RhdGEtb3JpZ2luYWwtdGl0bGVdIHsgLy8gNFxuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTsgLy8gMlxuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZSBkb3R0ZWQ7IC8vIDJcbiAgY3Vyc29yOiBoZWxwOyAvLyAzXG4gIGJvcmRlci1ib3R0b206IDA7IC8vIDFcbn1cblxuYWRkcmVzcyB7XG4gIG1hcmdpbi1ib3R0b206IDFyZW07XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgbGluZS1oZWlnaHQ6IGluaGVyaXQ7XG59XG5cbm9sLFxudWwsXG5kbCB7XG4gIG1hcmdpbi10b3A6IDA7XG4gIG1hcmdpbi1ib3R0b206IDFyZW07XG59XG5cbm9sIG9sLFxudWwgdWwsXG5vbCB1bCxcbnVsIG9sIHtcbiAgbWFyZ2luLWJvdHRvbTogMDtcbn1cblxuZHQge1xuICBmb250LXdlaWdodDogJGR0LWZvbnQtd2VpZ2h0O1xufVxuXG5kZCB7XG4gIG1hcmdpbi1ib3R0b206IC41cmVtO1xuICBtYXJnaW4tbGVmdDogMDsgLy8gVW5kbyBicm93c2VyIGRlZmF1bHRcbn1cblxuYmxvY2txdW90ZSB7XG4gIG1hcmdpbjogMCAwIDFyZW07XG59XG5cbmRmbiB7XG4gIGZvbnQtc3R5bGU6IGl0YWxpYzsgLy8gQWRkIHRoZSBjb3JyZWN0IGZvbnQgc3R5bGUgaW4gQW5kcm9pZCA0LjMtXG59XG5cbi8vIHN0eWxlbGludC1kaXNhYmxlIGZvbnQtd2VpZ2h0LW5vdGF0aW9uXG5iLFxuc3Ryb25nIHtcbiAgZm9udC13ZWlnaHQ6IGJvbGRlcjsgLy8gQWRkIHRoZSBjb3JyZWN0IGZvbnQgd2VpZ2h0IGluIENocm9tZSwgRWRnZSwgYW5kIFNhZmFyaVxufVxuLy8gc3R5bGVsaW50LWVuYWJsZSBmb250LXdlaWdodC1ub3RhdGlvblxuXG5zbWFsbCB7XG4gIGZvbnQtc2l6ZTogODAlOyAvLyBBZGQgdGhlIGNvcnJlY3QgZm9udCBzaXplIGluIGFsbCBicm93c2Vyc1xufVxuXG4vL1xuLy8gUHJldmVudCBgc3ViYCBhbmQgYHN1cGAgZWxlbWVudHMgZnJvbSBhZmZlY3RpbmcgdGhlIGxpbmUgaGVpZ2h0IGluXG4vLyBhbGwgYnJvd3NlcnMuXG4vL1xuXG5zdWIsXG5zdXAge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGZvbnQtc2l6ZTogNzUlO1xuICBsaW5lLWhlaWdodDogMDtcbiAgdmVydGljYWwtYWxpZ246IGJhc2VsaW5lO1xufVxuXG5zdWIgeyBib3R0b206IC0uMjVlbTsgfVxuc3VwIHsgdG9wOiAtLjVlbTsgfVxuXG5cbi8vXG4vLyBMaW5rc1xuLy9cblxuYSB7XG4gIGNvbG9yOiAkbGluay1jb2xvcjtcbiAgdGV4dC1kZWNvcmF0aW9uOiAkbGluay1kZWNvcmF0aW9uO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDsgLy8gUmVtb3ZlIHRoZSBncmF5IGJhY2tncm91bmQgb24gYWN0aXZlIGxpbmtzIGluIElFIDEwLlxuICAtd2Via2l0LXRleHQtZGVjb3JhdGlvbi1za2lwOiBvYmplY3RzOyAvLyBSZW1vdmUgZ2FwcyBpbiBsaW5rcyB1bmRlcmxpbmUgaW4gaU9TIDgrIGFuZCBTYWZhcmkgOCsuXG5cbiAgQGluY2x1ZGUgaG92ZXIge1xuICAgIGNvbG9yOiAkbGluay1ob3Zlci1jb2xvcjtcbiAgICB0ZXh0LWRlY29yYXRpb246ICRsaW5rLWhvdmVyLWRlY29yYXRpb247XG4gIH1cbn1cblxuLy8gQW5kIHVuZG8gdGhlc2Ugc3R5bGVzIGZvciBwbGFjZWhvbGRlciBsaW5rcy9uYW1lZCBhbmNob3JzICh3aXRob3V0IGhyZWYpXG4vLyB3aGljaCBoYXZlIG5vdCBiZWVuIG1hZGUgZXhwbGljaXRseSBrZXlib2FyZC1mb2N1c2FibGUgKHdpdGhvdXQgdGFiaW5kZXgpLlxuLy8gSXQgd291bGQgYmUgbW9yZSBzdHJhaWdodGZvcndhcmQgdG8ganVzdCB1c2UgYVtocmVmXSBpbiBwcmV2aW91cyBibG9jaywgYnV0IHRoYXRcbi8vIGNhdXNlcyBzcGVjaWZpY2l0eSBpc3N1ZXMgaW4gbWFueSBvdGhlciBzdHlsZXMgdGhhdCBhcmUgdG9vIGNvbXBsZXggdG8gZml4LlxuLy8gU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS90d2JzL2Jvb3RzdHJhcC9pc3N1ZXMvMTk0MDJcblxuYTpub3QoW2hyZWZdKTpub3QoW3RhYmluZGV4XSkge1xuICBjb2xvcjogaW5oZXJpdDtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuXG4gIEBpbmNsdWRlIGhvdmVyLWZvY3VzIHtcbiAgICBjb2xvcjogaW5oZXJpdDtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIH1cblxuICAmOmZvY3VzIHtcbiAgICBvdXRsaW5lOiAwO1xuICB9XG59XG5cblxuLy9cbi8vIENvZGVcbi8vXG5cbnByZSxcbmNvZGUsXG5rYmQsXG5zYW1wIHtcbiAgZm9udC1mYW1pbHk6ICRmb250LWZhbWlseS1tb25vc3BhY2U7XG4gIGZvbnQtc2l6ZTogMWVtOyAvLyBDb3JyZWN0IHRoZSBvZGQgYGVtYCBmb250IHNpemluZyBpbiBhbGwgYnJvd3NlcnMuXG59XG5cbnByZSB7XG4gIC8vIFJlbW92ZSBicm93c2VyIGRlZmF1bHQgdG9wIG1hcmdpblxuICBtYXJnaW4tdG9wOiAwO1xuICAvLyBSZXNldCBicm93c2VyIGRlZmF1bHQgb2YgYDFlbWAgdG8gdXNlIGByZW1gc1xuICBtYXJnaW4tYm90dG9tOiAxcmVtO1xuICAvLyBEb24ndCBhbGxvdyBjb250ZW50IHRvIGJyZWFrIG91dHNpZGVcbiAgb3ZlcmZsb3c6IGF1dG87XG4gIC8vIFdlIGhhdmUgQHZpZXdwb3J0IHNldCB3aGljaCBjYXVzZXMgc2Nyb2xsYmFycyB0byBvdmVybGFwIGNvbnRlbnQgaW4gSUUxMSBhbmQgRWRnZSwgc29cbiAgLy8gd2UgZm9yY2UgYSBub24tb3ZlcmxhcHBpbmcsIG5vbi1hdXRvLWhpZGluZyBzY3JvbGxiYXIgdG8gY291bnRlcmFjdC5cbiAgLW1zLW92ZXJmbG93LXN0eWxlOiBzY3JvbGxiYXI7XG59XG5cblxuLy9cbi8vIEZpZ3VyZXNcbi8vXG5cbmZpZ3VyZSB7XG4gIC8vIEFwcGx5IGEgY29uc2lzdGVudCBtYXJnaW4gc3RyYXRlZ3kgKG1hdGNoZXMgb3VyIHR5cGUgc3R5bGVzKS5cbiAgbWFyZ2luOiAwIDAgMXJlbTtcbn1cblxuXG4vL1xuLy8gSW1hZ2VzIGFuZCBjb250ZW50XG4vL1xuXG5pbWcge1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICBib3JkZXItc3R5bGU6IG5vbmU7IC8vIFJlbW92ZSB0aGUgYm9yZGVyIG9uIGltYWdlcyBpbnNpZGUgbGlua3MgaW4gSUUgMTAtLlxufVxuXG5zdmcge1xuICAvLyBXb3JrYXJvdW5kIGZvciB0aGUgU1ZHIG92ZXJmbG93IGJ1ZyBpbiBJRTEwLzExIGlzIHN0aWxsIHJlcXVpcmVkLlxuICAvLyBTZWUgaHR0cHM6Ly9naXRodWIuY29tL3R3YnMvYm9vdHN0cmFwL2lzc3Vlcy8yNjg3OFxuICBvdmVyZmxvdzogaGlkZGVuO1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xufVxuXG5cbi8vXG4vLyBUYWJsZXNcbi8vXG5cbnRhYmxlIHtcbiAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTsgLy8gUHJldmVudCBkb3VibGUgYm9yZGVyc1xufVxuXG5jYXB0aW9uIHtcbiAgcGFkZGluZy10b3A6ICR0YWJsZS1jZWxsLXBhZGRpbmc7XG4gIHBhZGRpbmctYm90dG9tOiAkdGFibGUtY2VsbC1wYWRkaW5nO1xuICBjb2xvcjogJHRhYmxlLWNhcHRpb24tY29sb3I7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIGNhcHRpb24tc2lkZTogYm90dG9tO1xufVxuXG50aCB7XG4gIC8vIE1hdGNoZXMgZGVmYXVsdCBgPHRkPmAgYWxpZ25tZW50IGJ5IGluaGVyaXRpbmcgZnJvbSB0aGUgYDxib2R5PmAsIG9yIHRoZVxuICAvLyBjbG9zZXN0IHBhcmVudCB3aXRoIGEgc2V0IGB0ZXh0LWFsaWduYC5cbiAgdGV4dC1hbGlnbjogaW5oZXJpdDtcbn1cblxuXG4vL1xuLy8gRm9ybXNcbi8vXG5cbmxhYmVsIHtcbiAgLy8gQWxsb3cgbGFiZWxzIHRvIHVzZSBgbWFyZ2luYCBmb3Igc3BhY2luZy5cbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBtYXJnaW4tYm90dG9tOiAkbGFiZWwtbWFyZ2luLWJvdHRvbTtcbn1cblxuLy8gUmVtb3ZlIHRoZSBkZWZhdWx0IGBib3JkZXItcmFkaXVzYCB0aGF0IG1hY09TIENocm9tZSBhZGRzLlxuLy9cbi8vIERldGFpbHMgYXQgaHR0cHM6Ly9naXRodWIuY29tL3R3YnMvYm9vdHN0cmFwL2lzc3Vlcy8yNDA5M1xuYnV0dG9uIHtcbiAgYm9yZGVyLXJhZGl1czogMDtcbn1cblxuLy8gV29yayBhcm91bmQgYSBGaXJlZm94L0lFIGJ1ZyB3aGVyZSB0aGUgdHJhbnNwYXJlbnQgYGJ1dHRvbmAgYmFja2dyb3VuZFxuLy8gcmVzdWx0cyBpbiBhIGxvc3Mgb2YgdGhlIGRlZmF1bHQgYGJ1dHRvbmAgZm9jdXMgc3R5bGVzLlxuLy9cbi8vIENyZWRpdDogaHR0cHM6Ly9naXRodWIuY29tL3N1aXRjc3MvYmFzZS9cbmJ1dHRvbjpmb2N1cyB7XG4gIG91dGxpbmU6IDFweCBkb3R0ZWQ7XG4gIG91dGxpbmU6IDVweCBhdXRvIC13ZWJraXQtZm9jdXMtcmluZy1jb2xvcjtcbn1cblxuaW5wdXQsXG5idXR0b24sXG5zZWxlY3QsXG5vcHRncm91cCxcbnRleHRhcmVhIHtcbiAgbWFyZ2luOiAwOyAvLyBSZW1vdmUgdGhlIG1hcmdpbiBpbiBGaXJlZm94IGFuZCBTYWZhcmlcbiAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XG4gIGZvbnQtc2l6ZTogaW5oZXJpdDtcbiAgbGluZS1oZWlnaHQ6IGluaGVyaXQ7XG59XG5cbmJ1dHRvbixcbmlucHV0IHtcbiAgb3ZlcmZsb3c6IHZpc2libGU7IC8vIFNob3cgdGhlIG92ZXJmbG93IGluIEVkZ2Vcbn1cblxuYnV0dG9uLFxuc2VsZWN0IHtcbiAgdGV4dC10cmFuc2Zvcm06IG5vbmU7IC8vIFJlbW92ZSB0aGUgaW5oZXJpdGFuY2Ugb2YgdGV4dCB0cmFuc2Zvcm0gaW4gRmlyZWZveFxufVxuXG4vLyAxLiBQcmV2ZW50IGEgV2ViS2l0IGJ1ZyB3aGVyZSAoMikgZGVzdHJveXMgbmF0aXZlIGBhdWRpb2AgYW5kIGB2aWRlb2Bcbi8vICAgIGNvbnRyb2xzIGluIEFuZHJvaWQgNC5cbi8vIDIuIENvcnJlY3QgdGhlIGluYWJpbGl0eSB0byBzdHlsZSBjbGlja2FibGUgdHlwZXMgaW4gaU9TIGFuZCBTYWZhcmkuXG5idXR0b24sXG5odG1sIFt0eXBlPVwiYnV0dG9uXCJdLCAvLyAxXG5bdHlwZT1cInJlc2V0XCJdLFxuW3R5cGU9XCJzdWJtaXRcIl0ge1xuICAtd2Via2l0LWFwcGVhcmFuY2U6IGJ1dHRvbjsgLy8gMlxufVxuXG4vLyBSZW1vdmUgaW5uZXIgYm9yZGVyIGFuZCBwYWRkaW5nIGZyb20gRmlyZWZveCwgYnV0IGRvbid0IHJlc3RvcmUgdGhlIG91dGxpbmUgbGlrZSBOb3JtYWxpemUuXG5idXR0b246Oi1tb3otZm9jdXMtaW5uZXIsXG5bdHlwZT1cImJ1dHRvblwiXTo6LW1vei1mb2N1cy1pbm5lcixcblt0eXBlPVwicmVzZXRcIl06Oi1tb3otZm9jdXMtaW5uZXIsXG5bdHlwZT1cInN1Ym1pdFwiXTo6LW1vei1mb2N1cy1pbm5lciB7XG4gIHBhZGRpbmc6IDA7XG4gIGJvcmRlci1zdHlsZTogbm9uZTtcbn1cblxuaW5wdXRbdHlwZT1cInJhZGlvXCJdLFxuaW5wdXRbdHlwZT1cImNoZWNrYm94XCJdIHtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDsgLy8gMS4gQWRkIHRoZSBjb3JyZWN0IGJveCBzaXppbmcgaW4gSUUgMTAtXG4gIHBhZGRpbmc6IDA7IC8vIDIuIFJlbW92ZSB0aGUgcGFkZGluZyBpbiBJRSAxMC1cbn1cblxuXG5pbnB1dFt0eXBlPVwiZGF0ZVwiXSxcbmlucHV0W3R5cGU9XCJ0aW1lXCJdLFxuaW5wdXRbdHlwZT1cImRhdGV0aW1lLWxvY2FsXCJdLFxuaW5wdXRbdHlwZT1cIm1vbnRoXCJdIHtcbiAgLy8gUmVtb3ZlIHRoZSBkZWZhdWx0IGFwcGVhcmFuY2Ugb2YgdGVtcG9yYWwgaW5wdXRzIHRvIGF2b2lkIGEgTW9iaWxlIFNhZmFyaVxuICAvLyBidWcgd2hlcmUgc2V0dGluZyBhIGN1c3RvbSBsaW5lLWhlaWdodCBwcmV2ZW50cyB0ZXh0IGZyb20gYmVpbmcgdmVydGljYWxseVxuICAvLyBjZW50ZXJlZCB3aXRoaW4gdGhlIGlucHV0LlxuICAvLyBTZWUgaHR0cHM6Ly9idWdzLndlYmtpdC5vcmcvc2hvd19idWcuY2dpP2lkPTEzOTg0OFxuICAvLyBhbmQgaHR0cHM6Ly9naXRodWIuY29tL3R3YnMvYm9vdHN0cmFwL2lzc3Vlcy8xMTI2NlxuICAtd2Via2l0LWFwcGVhcmFuY2U6IGxpc3Rib3g7XG59XG5cbnRleHRhcmVhIHtcbiAgb3ZlcmZsb3c6IGF1dG87IC8vIFJlbW92ZSB0aGUgZGVmYXVsdCB2ZXJ0aWNhbCBzY3JvbGxiYXIgaW4gSUUuXG4gIC8vIFRleHRhcmVhcyBzaG91bGQgcmVhbGx5IG9ubHkgcmVzaXplIHZlcnRpY2FsbHkgc28gdGhleSBkb24ndCBicmVhayB0aGVpciAoaG9yaXpvbnRhbCkgY29udGFpbmVycy5cbiAgcmVzaXplOiB2ZXJ0aWNhbDtcbn1cblxuZmllbGRzZXQge1xuICAvLyBCcm93c2VycyBzZXQgYSBkZWZhdWx0IGBtaW4td2lkdGg6IG1pbi1jb250ZW50O2Agb24gZmllbGRzZXRzLFxuICAvLyB1bmxpa2UgZS5nLiBgPGRpdj5gcywgd2hpY2ggaGF2ZSBgbWluLXdpZHRoOiAwO2AgYnkgZGVmYXVsdC5cbiAgLy8gU28gd2UgcmVzZXQgdGhhdCB0byBlbnN1cmUgZmllbGRzZXRzIGJlaGF2ZSBtb3JlIGxpa2UgYSBzdGFuZGFyZCBibG9jayBlbGVtZW50LlxuICAvLyBTZWUgaHR0cHM6Ly9naXRodWIuY29tL3R3YnMvYm9vdHN0cmFwL2lzc3Vlcy8xMjM1OVxuICAvLyBhbmQgaHR0cHM6Ly9odG1sLnNwZWMud2hhdHdnLm9yZy9tdWx0aXBhZ2UvI3RoZS1maWVsZHNldC1hbmQtbGVnZW5kLWVsZW1lbnRzXG4gIG1pbi13aWR0aDogMDtcbiAgLy8gUmVzZXQgdGhlIGRlZmF1bHQgb3V0bGluZSBiZWhhdmlvciBvZiBmaWVsZHNldHMgc28gdGhleSBkb24ndCBhZmZlY3QgcGFnZSBsYXlvdXQuXG4gIHBhZGRpbmc6IDA7XG4gIG1hcmdpbjogMDtcbiAgYm9yZGVyOiAwO1xufVxuXG4vLyAxLiBDb3JyZWN0IHRoZSB0ZXh0IHdyYXBwaW5nIGluIEVkZ2UgYW5kIElFLlxuLy8gMi4gQ29ycmVjdCB0aGUgY29sb3IgaW5oZXJpdGFuY2UgZnJvbSBgZmllbGRzZXRgIGVsZW1lbnRzIGluIElFLlxubGVnZW5kIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXgtd2lkdGg6IDEwMCU7IC8vIDFcbiAgcGFkZGluZzogMDtcbiAgbWFyZ2luLWJvdHRvbTogLjVyZW07XG4gIGZvbnQtc2l6ZTogMS41cmVtO1xuICBsaW5lLWhlaWdodDogaW5oZXJpdDtcbiAgY29sb3I6IGluaGVyaXQ7IC8vIDJcbiAgd2hpdGUtc3BhY2U6IG5vcm1hbDsgLy8gMVxufVxuXG5wcm9ncmVzcyB7XG4gIHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTsgLy8gQWRkIHRoZSBjb3JyZWN0IHZlcnRpY2FsIGFsaWdubWVudCBpbiBDaHJvbWUsIEZpcmVmb3gsIGFuZCBPcGVyYS5cbn1cblxuLy8gQ29ycmVjdCB0aGUgY3Vyc29yIHN0eWxlIG9mIGluY3JlbWVudCBhbmQgZGVjcmVtZW50IGJ1dHRvbnMgaW4gQ2hyb21lLlxuW3R5cGU9XCJudW1iZXJcIl06Oi13ZWJraXQtaW5uZXItc3Bpbi1idXR0b24sXG5bdHlwZT1cIm51bWJlclwiXTo6LXdlYmtpdC1vdXRlci1zcGluLWJ1dHRvbiB7XG4gIGhlaWdodDogYXV0bztcbn1cblxuW3R5cGU9XCJzZWFyY2hcIl0ge1xuICAvLyBUaGlzIG92ZXJyaWRlcyB0aGUgZXh0cmEgcm91bmRlZCBjb3JuZXJzIG9uIHNlYXJjaCBpbnB1dHMgaW4gaU9TIHNvIHRoYXQgb3VyXG4gIC8vIGAuZm9ybS1jb250cm9sYCBjbGFzcyBjYW4gcHJvcGVybHkgc3R5bGUgdGhlbS4gTm90ZSB0aGF0IHRoaXMgY2Fubm90IHNpbXBseVxuICAvLyBiZSBhZGRlZCB0byBgLmZvcm0tY29udHJvbGAgYXMgaXQncyBub3Qgc3BlY2lmaWMgZW5vdWdoLiBGb3IgZGV0YWlscywgc2VlXG4gIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS90d2JzL2Jvb3RzdHJhcC9pc3N1ZXMvMTE1ODYuXG4gIG91dGxpbmUtb2Zmc2V0OiAtMnB4OyAvLyAyLiBDb3JyZWN0IHRoZSBvdXRsaW5lIHN0eWxlIGluIFNhZmFyaS5cbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xufVxuXG4vL1xuLy8gUmVtb3ZlIHRoZSBpbm5lciBwYWRkaW5nIGFuZCBjYW5jZWwgYnV0dG9ucyBpbiBDaHJvbWUgYW5kIFNhZmFyaSBvbiBtYWNPUy5cbi8vXG5cblt0eXBlPVwic2VhcmNoXCJdOjotd2Via2l0LXNlYXJjaC1jYW5jZWwtYnV0dG9uLFxuW3R5cGU9XCJzZWFyY2hcIl06Oi13ZWJraXQtc2VhcmNoLWRlY29yYXRpb24ge1xuICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XG59XG5cbi8vXG4vLyAxLiBDb3JyZWN0IHRoZSBpbmFiaWxpdHkgdG8gc3R5bGUgY2xpY2thYmxlIHR5cGVzIGluIGlPUyBhbmQgU2FmYXJpLlxuLy8gMi4gQ2hhbmdlIGZvbnQgcHJvcGVydGllcyB0byBgaW5oZXJpdGAgaW4gU2FmYXJpLlxuLy9cblxuOjotd2Via2l0LWZpbGUtdXBsb2FkLWJ1dHRvbiB7XG4gIGZvbnQ6IGluaGVyaXQ7IC8vIDJcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBidXR0b247IC8vIDFcbn1cblxuLy9cbi8vIENvcnJlY3QgZWxlbWVudCBkaXNwbGF5c1xuLy9cblxub3V0cHV0IHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xufVxuXG5zdW1tYXJ5IHtcbiAgZGlzcGxheTogbGlzdC1pdGVtOyAvLyBBZGQgdGhlIGNvcnJlY3QgZGlzcGxheSBpbiBhbGwgYnJvd3NlcnNcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG50ZW1wbGF0ZSB7XG4gIGRpc3BsYXk6IG5vbmU7IC8vIEFkZCB0aGUgY29ycmVjdCBkaXNwbGF5IGluIElFXG59XG5cbi8vIEFsd2F5cyBoaWRlIGFuIGVsZW1lbnQgd2l0aCB0aGUgYGhpZGRlbmAgSFRNTCBhdHRyaWJ1dGUgKGZyb20gUHVyZUNTUykuXG4vLyBOZWVkZWQgZm9yIHByb3BlciBkaXNwbGF5IGluIElFIDEwLS5cbltoaWRkZW5dIHtcbiAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xufVxuIiwiLy8gVmFyaWFibGVzXG4vL1xuLy8gVmFyaWFibGVzIHNob3VsZCBmb2xsb3cgdGhlIGAkY29tcG9uZW50LXN0YXRlLXByb3BlcnR5LXNpemVgIGZvcm11bGEgZm9yXG4vLyBjb25zaXN0ZW50IG5hbWluZy4gRXg6ICRuYXYtbGluay1kaXNhYmxlZC1jb2xvciBhbmQgJG1vZGFsLWNvbnRlbnQtYm94LXNoYWRvdy14cy5cblxuXG4vL1xuLy8gQ29sb3Igc3lzdGVtXG4vL1xuXG4kd2hpdGU6ICAgICNmZmYgIWRlZmF1bHQ7XG4kZ3JheS0xMDA6ICNmOGY5ZmEgIWRlZmF1bHQ7XG4kZ3JheS0yMDA6ICNlOWVjZWYgIWRlZmF1bHQ7XG4kZ3JheS0zMDA6ICNkZWUyZTYgIWRlZmF1bHQ7XG4kZ3JheS00MDA6ICNjZWQ0ZGEgIWRlZmF1bHQ7XG4kZ3JheS01MDA6ICNhZGI1YmQgIWRlZmF1bHQ7XG4kZ3JheS02MDA6ICM2Yzc1N2QgIWRlZmF1bHQ7XG4kZ3JheS03MDA6ICM0OTUwNTcgIWRlZmF1bHQ7XG4kZ3JheS04MDA6ICMzNDNhNDAgIWRlZmF1bHQ7XG4kZ3JheS05MDA6ICMyMTI1MjkgIWRlZmF1bHQ7XG4kYmxhY2s6ICAgICMwMDAgIWRlZmF1bHQ7XG5cbiRncmF5czogKCkgIWRlZmF1bHQ7XG4vLyBzdHlsZWxpbnQtZGlzYWJsZS1uZXh0LWxpbmUgc2Nzcy9kb2xsYXItdmFyaWFibGUtZGVmYXVsdFxuJGdyYXlzOiBtYXAtbWVyZ2UoXG4gIChcbiAgICBcIjEwMFwiOiAkZ3JheS0xMDAsXG4gICAgXCIyMDBcIjogJGdyYXktMjAwLFxuICAgIFwiMzAwXCI6ICRncmF5LTMwMCxcbiAgICBcIjQwMFwiOiAkZ3JheS00MDAsXG4gICAgXCI1MDBcIjogJGdyYXktNTAwLFxuICAgIFwiNjAwXCI6ICRncmF5LTYwMCxcbiAgICBcIjcwMFwiOiAkZ3JheS03MDAsXG4gICAgXCI4MDBcIjogJGdyYXktODAwLFxuICAgIFwiOTAwXCI6ICRncmF5LTkwMFxuICApLFxuICAkZ3JheXNcbik7XG5cblxuJGJsdWU6ICAgICMwMDdiZmYgIWRlZmF1bHQ7XG4kaW5kaWdvOiAgIzY2MTBmMiAhZGVmYXVsdDtcbiRwdXJwbGU6ICAjNmY0MmMxICFkZWZhdWx0O1xuJHBpbms6ICAgICNlODNlOGMgIWRlZmF1bHQ7XG4kcmVkOiAgICAgI2RjMzU0NSAhZGVmYXVsdDtcbiRvcmFuZ2U6ICAjZmQ3ZTE0ICFkZWZhdWx0O1xuJHllbGxvdzogICNmZmMxMDcgIWRlZmF1bHQ7XG4kZ3JlZW46ICAgIzI4YTc0NSAhZGVmYXVsdDtcbiR0ZWFsOiAgICAjMjBjOTk3ICFkZWZhdWx0O1xuJGN5YW46ICAgICMxN2EyYjggIWRlZmF1bHQ7XG5cbiRjb2xvcnM6ICgpICFkZWZhdWx0O1xuLy8gc3R5bGVsaW50LWRpc2FibGUtbmV4dC1saW5lIHNjc3MvZG9sbGFyLXZhcmlhYmxlLWRlZmF1bHRcbiRjb2xvcnM6IG1hcC1tZXJnZShcbiAgKFxuICAgIFwiYmx1ZVwiOiAgICAgICAkYmx1ZSxcbiAgICBcImluZGlnb1wiOiAgICAgJGluZGlnbyxcbiAgICBcInB1cnBsZVwiOiAgICAgJHB1cnBsZSxcbiAgICBcInBpbmtcIjogICAgICAgJHBpbmssXG4gICAgXCJyZWRcIjogICAgICAgICRyZWQsXG4gICAgXCJvcmFuZ2VcIjogICAgICRvcmFuZ2UsXG4gICAgXCJ5ZWxsb3dcIjogICAgICR5ZWxsb3csXG4gICAgXCJncmVlblwiOiAgICAgICRncmVlbixcbiAgICBcInRlYWxcIjogICAgICAgJHRlYWwsXG4gICAgXCJjeWFuXCI6ICAgICAgICRjeWFuLFxuICAgIFwid2hpdGVcIjogICAgICAkd2hpdGUsXG4gICAgXCJncmF5XCI6ICAgICAgICRncmF5LTYwMCxcbiAgICBcImdyYXktZGFya1wiOiAgJGdyYXktODAwXG4gICksXG4gICRjb2xvcnNcbik7XG5cbiRwcmltYXJ5OiAgICAgICAkYmx1ZSAhZGVmYXVsdDtcbiRzZWNvbmRhcnk6ICAgICAkZ3JheS02MDAgIWRlZmF1bHQ7XG4kc3VjY2VzczogICAgICAgJGdyZWVuICFkZWZhdWx0O1xuJGluZm86ICAgICAgICAgICRjeWFuICFkZWZhdWx0O1xuJHdhcm5pbmc6ICAgICAgICR5ZWxsb3cgIWRlZmF1bHQ7XG4kZGFuZ2VyOiAgICAgICAgJHJlZCAhZGVmYXVsdDtcbiRsaWdodDogICAgICAgICAkZ3JheS0xMDAgIWRlZmF1bHQ7XG4kZGFyazogICAgICAgICAgJGdyYXktODAwICFkZWZhdWx0O1xuXG4kdGhlbWUtY29sb3JzOiAoKSAhZGVmYXVsdDtcbi8vIHN0eWxlbGludC1kaXNhYmxlLW5leHQtbGluZSBzY3NzL2RvbGxhci12YXJpYWJsZS1kZWZhdWx0XG4kdGhlbWUtY29sb3JzOiBtYXAtbWVyZ2UoXG4gIChcbiAgICBcInByaW1hcnlcIjogICAgJHByaW1hcnksXG4gICAgXCJzZWNvbmRhcnlcIjogICRzZWNvbmRhcnksXG4gICAgXCJzdWNjZXNzXCI6ICAgICRzdWNjZXNzLFxuICAgIFwiaW5mb1wiOiAgICAgICAkaW5mbyxcbiAgICBcIndhcm5pbmdcIjogICAgJHdhcm5pbmcsXG4gICAgXCJkYW5nZXJcIjogICAgICRkYW5nZXIsXG4gICAgXCJsaWdodFwiOiAgICAgICRsaWdodCxcbiAgICBcImRhcmtcIjogICAgICAgJGRhcmtcbiAgKSxcbiAgJHRoZW1lLWNvbG9yc1xuKTtcblxuLy8gU2V0IGEgc3BlY2lmaWMganVtcCBwb2ludCBmb3IgcmVxdWVzdGluZyBjb2xvciBqdW1wc1xuJHRoZW1lLWNvbG9yLWludGVydmFsOiAgICAgIDglICFkZWZhdWx0O1xuXG4vLyBUaGUgeWlxIGxpZ2h0bmVzcyB2YWx1ZSB0aGF0IGRldGVybWluZXMgd2hlbiB0aGUgbGlnaHRuZXNzIG9mIGNvbG9yIGNoYW5nZXMgZnJvbSBcImRhcmtcIiB0byBcImxpZ2h0XCIuIEFjY2VwdGFibGUgdmFsdWVzIGFyZSBiZXR3ZWVuIDAgYW5kIDI1NS5cbiR5aXEtY29udHJhc3RlZC10aHJlc2hvbGQ6ICAxNTAgIWRlZmF1bHQ7XG5cbi8vIEN1c3RvbWl6ZSB0aGUgbGlnaHQgYW5kIGRhcmsgdGV4dCBjb2xvcnMgZm9yIHVzZSBpbiBvdXIgWUlRIGNvbG9yIGNvbnRyYXN0IGZ1bmN0aW9uLlxuJHlpcS10ZXh0LWRhcms6ICAgICAgICAgICAgICRncmF5LTkwMCAhZGVmYXVsdDtcbiR5aXEtdGV4dC1saWdodDogICAgICAgICAgICAkd2hpdGUgIWRlZmF1bHQ7XG5cbi8vIE9wdGlvbnNcbi8vXG4vLyBRdWlja2x5IG1vZGlmeSBnbG9iYWwgc3R5bGluZyBieSBlbmFibGluZyBvciBkaXNhYmxpbmcgb3B0aW9uYWwgZmVhdHVyZXMuXG5cbiRlbmFibGUtY2FyZXQ6ICAgICAgICAgICAgICB0cnVlICFkZWZhdWx0O1xuJGVuYWJsZS1yb3VuZGVkOiAgICAgICAgICAgIHRydWUgIWRlZmF1bHQ7XG4kZW5hYmxlLXNoYWRvd3M6ICAgICAgICAgICAgZmFsc2UgIWRlZmF1bHQ7XG4kZW5hYmxlLWdyYWRpZW50czogICAgICAgICAgZmFsc2UgIWRlZmF1bHQ7XG4kZW5hYmxlLXRyYW5zaXRpb25zOiAgICAgICAgdHJ1ZSAhZGVmYXVsdDtcbiRlbmFibGUtaG92ZXItbWVkaWEtcXVlcnk6ICBmYWxzZSAhZGVmYXVsdDsgLy8gRGVwcmVjYXRlZCwgbm8gbG9uZ2VyIGFmZmVjdHMgYW55IGNvbXBpbGVkIENTU1xuJGVuYWJsZS1ncmlkLWNsYXNzZXM6ICAgICAgIHRydWUgIWRlZmF1bHQ7XG4kZW5hYmxlLXByaW50LXN0eWxlczogICAgICAgdHJ1ZSAhZGVmYXVsdDtcblxuXG4vLyBTcGFjaW5nXG4vL1xuLy8gQ29udHJvbCB0aGUgZGVmYXVsdCBzdHlsaW5nIG9mIG1vc3QgQm9vdHN0cmFwIGVsZW1lbnRzIGJ5IG1vZGlmeWluZyB0aGVzZVxuLy8gdmFyaWFibGVzLiBNb3N0bHkgZm9jdXNlZCBvbiBzcGFjaW5nLlxuLy8gWW91IGNhbiBhZGQgbW9yZSBlbnRyaWVzIHRvIHRoZSAkc3BhY2VycyBtYXAsIHNob3VsZCB5b3UgbmVlZCBtb3JlIHZhcmlhdGlvbi5cblxuJHNwYWNlcjogMXJlbSAhZGVmYXVsdDtcbiRzcGFjZXJzOiAoKSAhZGVmYXVsdDtcbi8vIHN0eWxlbGludC1kaXNhYmxlLW5leHQtbGluZSBzY3NzL2RvbGxhci12YXJpYWJsZS1kZWZhdWx0XG4kc3BhY2VyczogbWFwLW1lcmdlKFxuICAoXG4gICAgMDogMCxcbiAgICAxOiAoJHNwYWNlciAqIC4yNSksXG4gICAgMjogKCRzcGFjZXIgKiAuNSksXG4gICAgMzogJHNwYWNlcixcbiAgICA0OiAoJHNwYWNlciAqIDEuNSksXG4gICAgNTogKCRzcGFjZXIgKiAzKVxuICApLFxuICAkc3BhY2Vyc1xuKTtcblxuLy8gVGhpcyB2YXJpYWJsZSBhZmZlY3RzIHRoZSBgLmgtKmAgYW5kIGAudy0qYCBjbGFzc2VzLlxuJHNpemVzOiAoKSAhZGVmYXVsdDtcbi8vIHN0eWxlbGludC1kaXNhYmxlLW5leHQtbGluZSBzY3NzL2RvbGxhci12YXJpYWJsZS1kZWZhdWx0XG4kc2l6ZXM6IG1hcC1tZXJnZShcbiAgKFxuICAgIDI1OiAyNSUsXG4gICAgNTA6IDUwJSxcbiAgICA3NTogNzUlLFxuICAgIDEwMDogMTAwJSxcbiAgICBhdXRvOiBhdXRvXG4gICksXG4gICRzaXplc1xuKTtcblxuLy8gQm9keVxuLy9cbi8vIFNldHRpbmdzIGZvciB0aGUgYDxib2R5PmAgZWxlbWVudC5cblxuJGJvZHktYmc6ICAgICAgICAgICAgICAgICAgICR3aGl0ZSAhZGVmYXVsdDtcbiRib2R5LWNvbG9yOiAgICAgICAgICAgICAgICAkZ3JheS05MDAgIWRlZmF1bHQ7XG5cbi8vIExpbmtzXG4vL1xuLy8gU3R5bGUgYW5jaG9yIGVsZW1lbnRzLlxuXG4kbGluay1jb2xvcjogICAgICAgICAgICAgICAgdGhlbWUtY29sb3IoXCJwcmltYXJ5XCIpICFkZWZhdWx0O1xuJGxpbmstZGVjb3JhdGlvbjogICAgICAgICAgIG5vbmUgIWRlZmF1bHQ7XG4kbGluay1ob3Zlci1jb2xvcjogICAgICAgICAgZGFya2VuKCRsaW5rLWNvbG9yLCAxNSUpICFkZWZhdWx0O1xuJGxpbmstaG92ZXItZGVjb3JhdGlvbjogICAgIHVuZGVybGluZSAhZGVmYXVsdDtcblxuLy8gUGFyYWdyYXBoc1xuLy9cbi8vIFN0eWxlIHAgZWxlbWVudC5cblxuJHBhcmFncmFwaC1tYXJnaW4tYm90dG9tOiAgIDFyZW0gIWRlZmF1bHQ7XG5cblxuLy8gR3JpZCBicmVha3BvaW50c1xuLy9cbi8vIERlZmluZSB0aGUgbWluaW11bSBkaW1lbnNpb25zIGF0IHdoaWNoIHlvdXIgbGF5b3V0IHdpbGwgY2hhbmdlLFxuLy8gYWRhcHRpbmcgdG8gZGlmZmVyZW50IHNjcmVlbiBzaXplcywgZm9yIHVzZSBpbiBtZWRpYSBxdWVyaWVzLlxuXG4kZ3JpZC1icmVha3BvaW50czogKFxuICB4czogMCxcbiAgc206IDU3NnB4LFxuICBtZDogNzY4cHgsXG4gIGxnOiA5OTJweCxcbiAgeGw6IDEyMDBweFxuKSAhZGVmYXVsdDtcblxuQGluY2x1ZGUgX2Fzc2VydC1hc2NlbmRpbmcoJGdyaWQtYnJlYWtwb2ludHMsIFwiJGdyaWQtYnJlYWtwb2ludHNcIik7XG5AaW5jbHVkZSBfYXNzZXJ0LXN0YXJ0cy1hdC16ZXJvKCRncmlkLWJyZWFrcG9pbnRzKTtcblxuXG4vLyBHcmlkIGNvbnRhaW5lcnNcbi8vXG4vLyBEZWZpbmUgdGhlIG1heGltdW0gd2lkdGggb2YgYC5jb250YWluZXJgIGZvciBkaWZmZXJlbnQgc2NyZWVuIHNpemVzLlxuXG4kY29udGFpbmVyLW1heC13aWR0aHM6IChcbiAgc206IDU0MHB4LFxuICBtZDogNzIwcHgsXG4gIGxnOiA5NjBweCxcbiAgeGw6IDExNDBweFxuKSAhZGVmYXVsdDtcblxuQGluY2x1ZGUgX2Fzc2VydC1hc2NlbmRpbmcoJGNvbnRhaW5lci1tYXgtd2lkdGhzLCBcIiRjb250YWluZXItbWF4LXdpZHRoc1wiKTtcblxuXG4vLyBHcmlkIGNvbHVtbnNcbi8vXG4vLyBTZXQgdGhlIG51bWJlciBvZiBjb2x1bW5zIGFuZCBzcGVjaWZ5IHRoZSB3aWR0aCBvZiB0aGUgZ3V0dGVycy5cblxuJGdyaWQtY29sdW1uczogICAgICAgICAgICAgICAgMTIgIWRlZmF1bHQ7XG4kZ3JpZC1ndXR0ZXItd2lkdGg6ICAgICAgICAgICAzMHB4ICFkZWZhdWx0O1xuXG4vLyBDb21wb25lbnRzXG4vL1xuLy8gRGVmaW5lIGNvbW1vbiBwYWRkaW5nIGFuZCBib3JkZXIgcmFkaXVzIHNpemVzIGFuZCBtb3JlLlxuXG4kbGluZS1oZWlnaHQtbGc6ICAgICAgICAgICAgICAxLjUgIWRlZmF1bHQ7XG4kbGluZS1oZWlnaHQtc206ICAgICAgICAgICAgICAxLjUgIWRlZmF1bHQ7XG5cbiRib3JkZXItd2lkdGg6ICAgICAgICAgICAgICAgIDFweCAhZGVmYXVsdDtcbiRib3JkZXItY29sb3I6ICAgICAgICAgICAgICAgICRncmF5LTMwMCAhZGVmYXVsdDtcblxuJGJvcmRlci1yYWRpdXM6ICAgICAgICAgICAgICAgLjI1cmVtICFkZWZhdWx0O1xuJGJvcmRlci1yYWRpdXMtbGc6ICAgICAgICAgICAgLjNyZW0gIWRlZmF1bHQ7XG4kYm9yZGVyLXJhZGl1cy1zbTogICAgICAgICAgICAuMnJlbSAhZGVmYXVsdDtcblxuJGJveC1zaGFkb3ctc206ICAgICAgICAgICAgICAgMCAuMTI1cmVtIC4yNXJlbSByZ2JhKCRibGFjaywgLjA3NSkgIWRlZmF1bHQ7XG4kYm94LXNoYWRvdzogICAgICAgICAgICAgICAgICAwIC41cmVtIDFyZW0gcmdiYSgkYmxhY2ssIC4xNSkgIWRlZmF1bHQ7XG4kYm94LXNoYWRvdy1sZzogICAgICAgICAgICAgICAwIDFyZW0gM3JlbSByZ2JhKCRibGFjaywgLjE3NSkgIWRlZmF1bHQ7XG5cbiRjb21wb25lbnQtYWN0aXZlLWNvbG9yOiAgICAgICR3aGl0ZSAhZGVmYXVsdDtcbiRjb21wb25lbnQtYWN0aXZlLWJnOiAgICAgICAgIHRoZW1lLWNvbG9yKFwicHJpbWFyeVwiKSAhZGVmYXVsdDtcblxuJGNhcmV0LXdpZHRoOiAgICAgICAgICAgICAgICAgLjNlbSAhZGVmYXVsdDtcblxuJHRyYW5zaXRpb24tYmFzZTogICAgICAgICAgICAgYWxsIC4ycyBlYXNlLWluLW91dCAhZGVmYXVsdDtcbiR0cmFuc2l0aW9uLWZhZGU6ICAgICAgICAgICAgIG9wYWNpdHkgLjE1cyBsaW5lYXIgIWRlZmF1bHQ7XG4kdHJhbnNpdGlvbi1jb2xsYXBzZTogICAgICAgICBoZWlnaHQgLjM1cyBlYXNlICFkZWZhdWx0O1xuXG5cbi8vIEZvbnRzXG4vL1xuLy8gRm9udCwgbGluZS1oZWlnaHQsIGFuZCBjb2xvciBmb3IgYm9keSB0ZXh0LCBoZWFkaW5ncywgYW5kIG1vcmUuXG5cbi8vIHN0eWxlbGludC1kaXNhYmxlIHZhbHVlLWtleXdvcmQtY2FzZVxuJGZvbnQtZmFtaWx5LXNhbnMtc2VyaWY6ICAgICAgLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCBcIlNlZ29lIFVJXCIsIFJvYm90bywgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBBcmlhbCwgc2Fucy1zZXJpZiwgXCJBcHBsZSBDb2xvciBFbW9qaVwiLCBcIlNlZ29lIFVJIEVtb2ppXCIsIFwiU2Vnb2UgVUkgU3ltYm9sXCIsIFwiTm90byBDb2xvciBFbW9qaVwiICFkZWZhdWx0O1xuJGZvbnQtZmFtaWx5LW1vbm9zcGFjZTogICAgICAgU0ZNb25vLVJlZ3VsYXIsIE1lbmxvLCBNb25hY28sIENvbnNvbGFzLCBcIkxpYmVyYXRpb24gTW9ub1wiLCBcIkNvdXJpZXIgTmV3XCIsIG1vbm9zcGFjZSAhZGVmYXVsdDtcbiRmb250LWZhbWlseS1iYXNlOiAgICAgICAgICAgICRmb250LWZhbWlseS1zYW5zLXNlcmlmICFkZWZhdWx0O1xuLy8gc3R5bGVsaW50LWVuYWJsZSB2YWx1ZS1rZXl3b3JkLWNhc2VcblxuJGZvbnQtc2l6ZS1iYXNlOiAgICAgICAgICAgICAgMXJlbSAhZGVmYXVsdDsgLy8gQXNzdW1lcyB0aGUgYnJvd3NlciBkZWZhdWx0LCB0eXBpY2FsbHkgYDE2cHhgXG4kZm9udC1zaXplLWxnOiAgICAgICAgICAgICAgICAoJGZvbnQtc2l6ZS1iYXNlICogMS4yNSkgIWRlZmF1bHQ7XG4kZm9udC1zaXplLXNtOiAgICAgICAgICAgICAgICAoJGZvbnQtc2l6ZS1iYXNlICogLjg3NSkgIWRlZmF1bHQ7XG5cbiRmb250LXdlaWdodC1saWdodDogICAgICAgICAgIDMwMCAhZGVmYXVsdDtcbiRmb250LXdlaWdodC1ub3JtYWw6ICAgICAgICAgIDQwMCAhZGVmYXVsdDtcbiRmb250LXdlaWdodC1ib2xkOiAgICAgICAgICAgIDcwMCAhZGVmYXVsdDtcblxuJGZvbnQtd2VpZ2h0LWJhc2U6ICAgICAgICAgICAgJGZvbnQtd2VpZ2h0LW5vcm1hbCAhZGVmYXVsdDtcbiRsaW5lLWhlaWdodC1iYXNlOiAgICAgICAgICAgIDEuNSAhZGVmYXVsdDtcblxuJGgxLWZvbnQtc2l6ZTogICAgICAgICAgICAgICAgJGZvbnQtc2l6ZS1iYXNlICogMi41ICFkZWZhdWx0O1xuJGgyLWZvbnQtc2l6ZTogICAgICAgICAgICAgICAgJGZvbnQtc2l6ZS1iYXNlICogMiAhZGVmYXVsdDtcbiRoMy1mb250LXNpemU6ICAgICAgICAgICAgICAgICRmb250LXNpemUtYmFzZSAqIDEuNzUgIWRlZmF1bHQ7XG4kaDQtZm9udC1zaXplOiAgICAgICAgICAgICAgICAkZm9udC1zaXplLWJhc2UgKiAxLjUgIWRlZmF1bHQ7XG4kaDUtZm9udC1zaXplOiAgICAgICAgICAgICAgICAkZm9udC1zaXplLWJhc2UgKiAxLjI1ICFkZWZhdWx0O1xuJGg2LWZvbnQtc2l6ZTogICAgICAgICAgICAgICAgJGZvbnQtc2l6ZS1iYXNlICFkZWZhdWx0O1xuXG4kaGVhZGluZ3MtbWFyZ2luLWJvdHRvbTogICAgICAoJHNwYWNlciAvIDIpICFkZWZhdWx0O1xuJGhlYWRpbmdzLWZvbnQtZmFtaWx5OiAgICAgICAgaW5oZXJpdCAhZGVmYXVsdDtcbiRoZWFkaW5ncy1mb250LXdlaWdodDogICAgICAgIDUwMCAhZGVmYXVsdDtcbiRoZWFkaW5ncy1saW5lLWhlaWdodDogICAgICAgIDEuMiAhZGVmYXVsdDtcbiRoZWFkaW5ncy1jb2xvcjogICAgICAgICAgICAgIGluaGVyaXQgIWRlZmF1bHQ7XG5cbiRkaXNwbGF5MS1zaXplOiAgICAgICAgICAgICAgIDZyZW0gIWRlZmF1bHQ7XG4kZGlzcGxheTItc2l6ZTogICAgICAgICAgICAgICA1LjVyZW0gIWRlZmF1bHQ7XG4kZGlzcGxheTMtc2l6ZTogICAgICAgICAgICAgICA0LjVyZW0gIWRlZmF1bHQ7XG4kZGlzcGxheTQtc2l6ZTogICAgICAgICAgICAgICAzLjVyZW0gIWRlZmF1bHQ7XG5cbiRkaXNwbGF5MS13ZWlnaHQ6ICAgICAgICAgICAgIDMwMCAhZGVmYXVsdDtcbiRkaXNwbGF5Mi13ZWlnaHQ6ICAgICAgICAgICAgIDMwMCAhZGVmYXVsdDtcbiRkaXNwbGF5My13ZWlnaHQ6ICAgICAgICAgICAgIDMwMCAhZGVmYXVsdDtcbiRkaXNwbGF5NC13ZWlnaHQ6ICAgICAgICAgICAgIDMwMCAhZGVmYXVsdDtcbiRkaXNwbGF5LWxpbmUtaGVpZ2h0OiAgICAgICAgICRoZWFkaW5ncy1saW5lLWhlaWdodCAhZGVmYXVsdDtcblxuJGxlYWQtZm9udC1zaXplOiAgICAgICAgICAgICAgKCRmb250LXNpemUtYmFzZSAqIDEuMjUpICFkZWZhdWx0O1xuJGxlYWQtZm9udC13ZWlnaHQ6ICAgICAgICAgICAgMzAwICFkZWZhdWx0O1xuXG4kc21hbGwtZm9udC1zaXplOiAgICAgICAgICAgICA4MCUgIWRlZmF1bHQ7XG5cbiR0ZXh0LW11dGVkOiAgICAgICAgICAgICAgICAgICRncmF5LTYwMCAhZGVmYXVsdDtcblxuJGJsb2NrcXVvdGUtc21hbGwtY29sb3I6ICAgICAgJGdyYXktNjAwICFkZWZhdWx0O1xuJGJsb2NrcXVvdGUtZm9udC1zaXplOiAgICAgICAgKCRmb250LXNpemUtYmFzZSAqIDEuMjUpICFkZWZhdWx0O1xuXG4kaHItYm9yZGVyLWNvbG9yOiAgICAgICAgICAgICByZ2JhKCRibGFjaywgLjEpICFkZWZhdWx0O1xuJGhyLWJvcmRlci13aWR0aDogICAgICAgICAgICAgJGJvcmRlci13aWR0aCAhZGVmYXVsdDtcblxuJG1hcmstcGFkZGluZzogICAgICAgICAgICAgICAgLjJlbSAhZGVmYXVsdDtcblxuJGR0LWZvbnQtd2VpZ2h0OiAgICAgICAgICAgICAgJGZvbnQtd2VpZ2h0LWJvbGQgIWRlZmF1bHQ7XG5cbiRrYmQtYm94LXNoYWRvdzogICAgICAgICAgICAgIGluc2V0IDAgLS4xcmVtIDAgcmdiYSgkYmxhY2ssIC4yNSkgIWRlZmF1bHQ7XG4kbmVzdGVkLWtiZC1mb250LXdlaWdodDogICAgICAkZm9udC13ZWlnaHQtYm9sZCAhZGVmYXVsdDtcblxuJGxpc3QtaW5saW5lLXBhZGRpbmc6ICAgICAgICAgLjVyZW0gIWRlZmF1bHQ7XG5cbiRtYXJrLWJnOiAgICAgICAgICAgICAgICAgICAgICNmY2Y4ZTMgIWRlZmF1bHQ7XG5cbiRoci1tYXJnaW4teTogICAgICAgICAgICAgICAgICRzcGFjZXIgIWRlZmF1bHQ7XG5cblxuLy8gVGFibGVzXG4vL1xuLy8gQ3VzdG9taXplcyB0aGUgYC50YWJsZWAgY29tcG9uZW50IHdpdGggYmFzaWMgdmFsdWVzLCBlYWNoIHVzZWQgYWNyb3NzIGFsbCB0YWJsZSB2YXJpYXRpb25zLlxuXG4kdGFibGUtY2VsbC1wYWRkaW5nOiAgICAgICAgICAuNzVyZW0gIWRlZmF1bHQ7XG4kdGFibGUtY2VsbC1wYWRkaW5nLXNtOiAgICAgICAuM3JlbSAhZGVmYXVsdDtcblxuJHRhYmxlLWJnOiAgICAgICAgICAgICAgICAgICAgdHJhbnNwYXJlbnQgIWRlZmF1bHQ7XG4kdGFibGUtYWNjZW50LWJnOiAgICAgICAgICAgICByZ2JhKCRibGFjaywgLjA1KSAhZGVmYXVsdDtcbiR0YWJsZS1ob3Zlci1iZzogICAgICAgICAgICAgIHJnYmEoJGJsYWNrLCAuMDc1KSAhZGVmYXVsdDtcbiR0YWJsZS1hY3RpdmUtYmc6ICAgICAgICAgICAgICR0YWJsZS1ob3Zlci1iZyAhZGVmYXVsdDtcblxuJHRhYmxlLWJvcmRlci13aWR0aDogICAgICAgICAgJGJvcmRlci13aWR0aCAhZGVmYXVsdDtcbiR0YWJsZS1ib3JkZXItY29sb3I6ICAgICAgICAgICRncmF5LTMwMCAhZGVmYXVsdDtcblxuJHRhYmxlLWhlYWQtYmc6ICAgICAgICAgICAgICAgJGdyYXktMjAwICFkZWZhdWx0O1xuJHRhYmxlLWhlYWQtY29sb3I6ICAgICAgICAgICAgJGdyYXktNzAwICFkZWZhdWx0O1xuXG4kdGFibGUtZGFyay1iZzogICAgICAgICAgICAgICAkZ3JheS05MDAgIWRlZmF1bHQ7XG4kdGFibGUtZGFyay1hY2NlbnQtYmc6ICAgICAgICByZ2JhKCR3aGl0ZSwgLjA1KSAhZGVmYXVsdDtcbiR0YWJsZS1kYXJrLWhvdmVyLWJnOiAgICAgICAgIHJnYmEoJHdoaXRlLCAuMDc1KSAhZGVmYXVsdDtcbiR0YWJsZS1kYXJrLWJvcmRlci1jb2xvcjogICAgIGxpZ2h0ZW4oJGdyYXktOTAwLCA3LjUlKSAhZGVmYXVsdDtcbiR0YWJsZS1kYXJrLWNvbG9yOiAgICAgICAgICAgICRib2R5LWJnICFkZWZhdWx0O1xuXG4kdGFibGUtc3RyaXBlZC1vcmRlcjogICAgICAgICBvZGQgIWRlZmF1bHQ7XG5cbiR0YWJsZS1jYXB0aW9uLWNvbG9yOiAgICAgICAgICR0ZXh0LW11dGVkICFkZWZhdWx0O1xuXG4vLyBCdXR0b25zICsgRm9ybXNcbi8vXG4vLyBTaGFyZWQgdmFyaWFibGVzIHRoYXQgYXJlIHJlYXNzaWduZWQgdG8gYCRpbnB1dC1gIGFuZCBgJGJ0bi1gIHNwZWNpZmljIHZhcmlhYmxlcy5cblxuJGlucHV0LWJ0bi1wYWRkaW5nLXk6ICAgICAgICAgLjM3NXJlbSAhZGVmYXVsdDtcbiRpbnB1dC1idG4tcGFkZGluZy14OiAgICAgICAgIC43NXJlbSAhZGVmYXVsdDtcbiRpbnB1dC1idG4tbGluZS1oZWlnaHQ6ICAgICAgICRsaW5lLWhlaWdodC1iYXNlICFkZWZhdWx0O1xuXG4kaW5wdXQtYnRuLWZvY3VzLXdpZHRoOiAgICAgICAuMnJlbSAhZGVmYXVsdDtcbiRpbnB1dC1idG4tZm9jdXMtY29sb3I6ICAgICAgIHJnYmEoJGNvbXBvbmVudC1hY3RpdmUtYmcsIC4yNSkgIWRlZmF1bHQ7XG4kaW5wdXQtYnRuLWZvY3VzLWJveC1zaGFkb3c6ICAwIDAgMCAkaW5wdXQtYnRuLWZvY3VzLXdpZHRoICRpbnB1dC1idG4tZm9jdXMtY29sb3IgIWRlZmF1bHQ7XG5cbiRpbnB1dC1idG4tcGFkZGluZy15LXNtOiAgICAgIC4yNXJlbSAhZGVmYXVsdDtcbiRpbnB1dC1idG4tcGFkZGluZy14LXNtOiAgICAgIC41cmVtICFkZWZhdWx0O1xuJGlucHV0LWJ0bi1saW5lLWhlaWdodC1zbTogICAgJGxpbmUtaGVpZ2h0LXNtICFkZWZhdWx0O1xuXG4kaW5wdXQtYnRuLXBhZGRpbmcteS1sZzogICAgICAuNXJlbSAhZGVmYXVsdDtcbiRpbnB1dC1idG4tcGFkZGluZy14LWxnOiAgICAgIDFyZW0gIWRlZmF1bHQ7XG4kaW5wdXQtYnRuLWxpbmUtaGVpZ2h0LWxnOiAgICAkbGluZS1oZWlnaHQtbGcgIWRlZmF1bHQ7XG5cbiRpbnB1dC1idG4tYm9yZGVyLXdpZHRoOiAgICAgICRib3JkZXItd2lkdGggIWRlZmF1bHQ7XG5cblxuLy8gQnV0dG9uc1xuLy9cbi8vIEZvciBlYWNoIG9mIEJvb3RzdHJhcCdzIGJ1dHRvbnMsIGRlZmluZSB0ZXh0LCBiYWNrZ3JvdW5kLCBhbmQgYm9yZGVyIGNvbG9yLlxuXG4kYnRuLXBhZGRpbmcteTogICAgICAgICAgICAgICAkaW5wdXQtYnRuLXBhZGRpbmcteSAhZGVmYXVsdDtcbiRidG4tcGFkZGluZy14OiAgICAgICAgICAgICAgICRpbnB1dC1idG4tcGFkZGluZy14ICFkZWZhdWx0O1xuJGJ0bi1saW5lLWhlaWdodDogICAgICAgICAgICAgJGlucHV0LWJ0bi1saW5lLWhlaWdodCAhZGVmYXVsdDtcblxuJGJ0bi1wYWRkaW5nLXktc206ICAgICAgICAgICAgJGlucHV0LWJ0bi1wYWRkaW5nLXktc20gIWRlZmF1bHQ7XG4kYnRuLXBhZGRpbmcteC1zbTogICAgICAgICAgICAkaW5wdXQtYnRuLXBhZGRpbmcteC1zbSAhZGVmYXVsdDtcbiRidG4tbGluZS1oZWlnaHQtc206ICAgICAgICAgICRpbnB1dC1idG4tbGluZS1oZWlnaHQtc20gIWRlZmF1bHQ7XG5cbiRidG4tcGFkZGluZy15LWxnOiAgICAgICAgICAgICRpbnB1dC1idG4tcGFkZGluZy15LWxnICFkZWZhdWx0O1xuJGJ0bi1wYWRkaW5nLXgtbGc6ICAgICAgICAgICAgJGlucHV0LWJ0bi1wYWRkaW5nLXgtbGcgIWRlZmF1bHQ7XG4kYnRuLWxpbmUtaGVpZ2h0LWxnOiAgICAgICAgICAkaW5wdXQtYnRuLWxpbmUtaGVpZ2h0LWxnICFkZWZhdWx0O1xuXG4kYnRuLWJvcmRlci13aWR0aDogICAgICAgICAgICAkaW5wdXQtYnRuLWJvcmRlci13aWR0aCAhZGVmYXVsdDtcblxuJGJ0bi1mb250LXdlaWdodDogICAgICAgICAgICAgJGZvbnQtd2VpZ2h0LW5vcm1hbCAhZGVmYXVsdDtcbiRidG4tYm94LXNoYWRvdzogICAgICAgICAgICAgIGluc2V0IDAgMXB4IDAgcmdiYSgkd2hpdGUsIC4xNSksIDAgMXB4IDFweCByZ2JhKCRibGFjaywgLjA3NSkgIWRlZmF1bHQ7XG4kYnRuLWZvY3VzLXdpZHRoOiAgICAgICAgICAgICAkaW5wdXQtYnRuLWZvY3VzLXdpZHRoICFkZWZhdWx0O1xuJGJ0bi1mb2N1cy1ib3gtc2hhZG93OiAgICAgICAgJGlucHV0LWJ0bi1mb2N1cy1ib3gtc2hhZG93ICFkZWZhdWx0O1xuJGJ0bi1kaXNhYmxlZC1vcGFjaXR5OiAgICAgICAgLjY1ICFkZWZhdWx0O1xuJGJ0bi1hY3RpdmUtYm94LXNoYWRvdzogICAgICAgaW5zZXQgMCAzcHggNXB4IHJnYmEoJGJsYWNrLCAuMTI1KSAhZGVmYXVsdDtcblxuJGJ0bi1saW5rLWRpc2FibGVkLWNvbG9yOiAgICAgJGdyYXktNjAwICFkZWZhdWx0O1xuXG4kYnRuLWJsb2NrLXNwYWNpbmcteTogICAgICAgICAuNXJlbSAhZGVmYXVsdDtcblxuLy8gQWxsb3dzIGZvciBjdXN0b21pemluZyBidXR0b24gcmFkaXVzIGluZGVwZW5kZW50bHkgZnJvbSBnbG9iYWwgYm9yZGVyIHJhZGl1c1xuJGJ0bi1ib3JkZXItcmFkaXVzOiAgICAgICAgICAgJGJvcmRlci1yYWRpdXMgIWRlZmF1bHQ7XG4kYnRuLWJvcmRlci1yYWRpdXMtbGc6ICAgICAgICAkYm9yZGVyLXJhZGl1cy1sZyAhZGVmYXVsdDtcbiRidG4tYm9yZGVyLXJhZGl1cy1zbTogICAgICAgICRib3JkZXItcmFkaXVzLXNtICFkZWZhdWx0O1xuXG4kYnRuLXRyYW5zaXRpb246ICAgICAgICAgICAgICBjb2xvciAuMTVzIGVhc2UtaW4tb3V0LCBiYWNrZ3JvdW5kLWNvbG9yIC4xNXMgZWFzZS1pbi1vdXQsIGJvcmRlci1jb2xvciAuMTVzIGVhc2UtaW4tb3V0LCBib3gtc2hhZG93IC4xNXMgZWFzZS1pbi1vdXQgIWRlZmF1bHQ7XG5cblxuLy8gRm9ybXNcblxuJGxhYmVsLW1hcmdpbi1ib3R0b206ICAgICAgICAgICAgICAgICAgIC41cmVtICFkZWZhdWx0O1xuXG4kaW5wdXQtcGFkZGluZy15OiAgICAgICAgICAgICAgICAgICAgICAgJGlucHV0LWJ0bi1wYWRkaW5nLXkgIWRlZmF1bHQ7XG4kaW5wdXQtcGFkZGluZy14OiAgICAgICAgICAgICAgICAgICAgICAgJGlucHV0LWJ0bi1wYWRkaW5nLXggIWRlZmF1bHQ7XG4kaW5wdXQtbGluZS1oZWlnaHQ6ICAgICAgICAgICAgICAgICAgICAgJGlucHV0LWJ0bi1saW5lLWhlaWdodCAhZGVmYXVsdDtcblxuJGlucHV0LXBhZGRpbmcteS1zbTogICAgICAgICAgICAgICAgICAgICRpbnB1dC1idG4tcGFkZGluZy15LXNtICFkZWZhdWx0O1xuJGlucHV0LXBhZGRpbmcteC1zbTogICAgICAgICAgICAgICAgICAgICRpbnB1dC1idG4tcGFkZGluZy14LXNtICFkZWZhdWx0O1xuJGlucHV0LWxpbmUtaGVpZ2h0LXNtOiAgICAgICAgICAgICAgICAgICRpbnB1dC1idG4tbGluZS1oZWlnaHQtc20gIWRlZmF1bHQ7XG5cbiRpbnB1dC1wYWRkaW5nLXktbGc6ICAgICAgICAgICAgICAgICAgICAkaW5wdXQtYnRuLXBhZGRpbmcteS1sZyAhZGVmYXVsdDtcbiRpbnB1dC1wYWRkaW5nLXgtbGc6ICAgICAgICAgICAgICAgICAgICAkaW5wdXQtYnRuLXBhZGRpbmcteC1sZyAhZGVmYXVsdDtcbiRpbnB1dC1saW5lLWhlaWdodC1sZzogICAgICAgICAgICAgICAgICAkaW5wdXQtYnRuLWxpbmUtaGVpZ2h0LWxnICFkZWZhdWx0O1xuXG4kaW5wdXQtYmc6ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJHdoaXRlICFkZWZhdWx0O1xuJGlucHV0LWRpc2FibGVkLWJnOiAgICAgICAgICAgICAgICAgICAgICRncmF5LTIwMCAhZGVmYXVsdDtcblxuJGlucHV0LWNvbG9yOiAgICAgICAgICAgICAgICAgICAgICAgICAgICRncmF5LTcwMCAhZGVmYXVsdDtcbiRpbnB1dC1ib3JkZXItY29sb3I6ICAgICAgICAgICAgICAgICAgICAkZ3JheS00MDAgIWRlZmF1bHQ7XG4kaW5wdXQtYm9yZGVyLXdpZHRoOiAgICAgICAgICAgICAgICAgICAgJGlucHV0LWJ0bi1ib3JkZXItd2lkdGggIWRlZmF1bHQ7XG4kaW5wdXQtYm94LXNoYWRvdzogICAgICAgICAgICAgICAgICAgICAgaW5zZXQgMCAxcHggMXB4IHJnYmEoJGJsYWNrLCAuMDc1KSAhZGVmYXVsdDtcblxuJGlucHV0LWJvcmRlci1yYWRpdXM6ICAgICAgICAgICAgICAgICAgICRib3JkZXItcmFkaXVzICFkZWZhdWx0O1xuJGlucHV0LWJvcmRlci1yYWRpdXMtbGc6ICAgICAgICAgICAgICAgICRib3JkZXItcmFkaXVzLWxnICFkZWZhdWx0O1xuJGlucHV0LWJvcmRlci1yYWRpdXMtc206ICAgICAgICAgICAgICAgICRib3JkZXItcmFkaXVzLXNtICFkZWZhdWx0O1xuXG4kaW5wdXQtZm9jdXMtYmc6ICAgICAgICAgICAgICAgICAgICAgICAgJGlucHV0LWJnICFkZWZhdWx0O1xuJGlucHV0LWZvY3VzLWJvcmRlci1jb2xvcjogICAgICAgICAgICAgIGxpZ2h0ZW4oJGNvbXBvbmVudC1hY3RpdmUtYmcsIDI1JSkgIWRlZmF1bHQ7XG4kaW5wdXQtZm9jdXMtY29sb3I6ICAgICAgICAgICAgICAgICAgICAgJGlucHV0LWNvbG9yICFkZWZhdWx0O1xuJGlucHV0LWZvY3VzLXdpZHRoOiAgICAgICAgICAgICAgICAgICAgICRpbnB1dC1idG4tZm9jdXMtd2lkdGggIWRlZmF1bHQ7XG4kaW5wdXQtZm9jdXMtYm94LXNoYWRvdzogICAgICAgICAgICAgICAgJGlucHV0LWJ0bi1mb2N1cy1ib3gtc2hhZG93ICFkZWZhdWx0O1xuXG4kaW5wdXQtcGxhY2Vob2xkZXItY29sb3I6ICAgICAgICAgICAgICAgJGdyYXktNjAwICFkZWZhdWx0O1xuJGlucHV0LXBsYWludGV4dC1jb2xvcjogICAgICAgICAgICAgICAgICRib2R5LWNvbG9yICFkZWZhdWx0O1xuXG4kaW5wdXQtaGVpZ2h0LWJvcmRlcjogICAgICAgICAgICAgICAgICAgJGlucHV0LWJvcmRlci13aWR0aCAqIDIgIWRlZmF1bHQ7XG5cbiRpbnB1dC1oZWlnaHQtaW5uZXI6ICAgICAgICAgICAgICAgICAgICAoJGZvbnQtc2l6ZS1iYXNlICogJGlucHV0LWJ0bi1saW5lLWhlaWdodCkgKyAoJGlucHV0LWJ0bi1wYWRkaW5nLXkgKiAyKSAhZGVmYXVsdDtcbiRpbnB1dC1oZWlnaHQ6ICAgICAgICAgICAgICAgICAgICAgICAgICBjYWxjKCN7JGlucHV0LWhlaWdodC1pbm5lcn0gKyAjeyRpbnB1dC1oZWlnaHQtYm9yZGVyfSkgIWRlZmF1bHQ7XG5cbiRpbnB1dC1oZWlnaHQtaW5uZXItc206ICAgICAgICAgICAgICAgICAoJGZvbnQtc2l6ZS1zbSAqICRpbnB1dC1idG4tbGluZS1oZWlnaHQtc20pICsgKCRpbnB1dC1idG4tcGFkZGluZy15LXNtICogMikgIWRlZmF1bHQ7XG4kaW5wdXQtaGVpZ2h0LXNtOiAgICAgICAgICAgICAgICAgICAgICAgY2FsYygjeyRpbnB1dC1oZWlnaHQtaW5uZXItc219ICsgI3skaW5wdXQtaGVpZ2h0LWJvcmRlcn0pICFkZWZhdWx0O1xuXG4kaW5wdXQtaGVpZ2h0LWlubmVyLWxnOiAgICAgICAgICAgICAgICAgKCRmb250LXNpemUtbGcgKiAkaW5wdXQtYnRuLWxpbmUtaGVpZ2h0LWxnKSArICgkaW5wdXQtYnRuLXBhZGRpbmcteS1sZyAqIDIpICFkZWZhdWx0O1xuJGlucHV0LWhlaWdodC1sZzogICAgICAgICAgICAgICAgICAgICAgIGNhbGMoI3skaW5wdXQtaGVpZ2h0LWlubmVyLWxnfSArICN7JGlucHV0LWhlaWdodC1ib3JkZXJ9KSAhZGVmYXVsdDtcblxuJGlucHV0LXRyYW5zaXRpb246ICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci1jb2xvciAuMTVzIGVhc2UtaW4tb3V0LCBib3gtc2hhZG93IC4xNXMgZWFzZS1pbi1vdXQgIWRlZmF1bHQ7XG5cbiRmb3JtLXRleHQtbWFyZ2luLXRvcDogICAgICAgICAgICAgICAgICAuMjVyZW0gIWRlZmF1bHQ7XG5cbiRmb3JtLWNoZWNrLWlucHV0LWd1dHRlcjogICAgICAgICAgICAgICAxLjI1cmVtICFkZWZhdWx0O1xuJGZvcm0tY2hlY2staW5wdXQtbWFyZ2luLXk6ICAgICAgICAgICAgIC4zcmVtICFkZWZhdWx0O1xuJGZvcm0tY2hlY2staW5wdXQtbWFyZ2luLXg6ICAgICAgICAgICAgIC4yNXJlbSAhZGVmYXVsdDtcblxuJGZvcm0tY2hlY2staW5saW5lLW1hcmdpbi14OiAgICAgICAgICAgIC43NXJlbSAhZGVmYXVsdDtcbiRmb3JtLWNoZWNrLWlubGluZS1pbnB1dC1tYXJnaW4teDogICAgICAuMzEyNXJlbSAhZGVmYXVsdDtcblxuJGZvcm0tZ3JvdXAtbWFyZ2luLWJvdHRvbTogICAgICAgICAgICAgIDFyZW0gIWRlZmF1bHQ7XG5cbiRpbnB1dC1ncm91cC1hZGRvbi1jb2xvcjogICAgICAgICAgICAgICAkaW5wdXQtY29sb3IgIWRlZmF1bHQ7XG4kaW5wdXQtZ3JvdXAtYWRkb24tYmc6ICAgICAgICAgICAgICAgICAgJGdyYXktMjAwICFkZWZhdWx0O1xuJGlucHV0LWdyb3VwLWFkZG9uLWJvcmRlci1jb2xvcjogICAgICAgICRpbnB1dC1ib3JkZXItY29sb3IgIWRlZmF1bHQ7XG5cbiRjdXN0b20tZm9ybXMtdHJhbnNpdGlvbjogICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yIC4xNXMgZWFzZS1pbi1vdXQsIGJvcmRlci1jb2xvciAuMTVzIGVhc2UtaW4tb3V0LCBib3gtc2hhZG93IC4xNXMgZWFzZS1pbi1vdXQgIWRlZmF1bHQ7XG5cbiRjdXN0b20tY29udHJvbC1ndXR0ZXI6ICAgICAgICAgICAgICAgICAxLjVyZW0gIWRlZmF1bHQ7XG4kY3VzdG9tLWNvbnRyb2wtc3BhY2VyLXg6ICAgICAgICAgICAgICAgMXJlbSAhZGVmYXVsdDtcblxuJGN1c3RvbS1jb250cm9sLWluZGljYXRvci1zaXplOiAgICAgICAgIDFyZW0gIWRlZmF1bHQ7XG4kY3VzdG9tLWNvbnRyb2wtaW5kaWNhdG9yLWJnOiAgICAgICAgICAgJGdyYXktMzAwICFkZWZhdWx0O1xuJGN1c3RvbS1jb250cm9sLWluZGljYXRvci1iZy1zaXplOiAgICAgIDUwJSA1MCUgIWRlZmF1bHQ7XG4kY3VzdG9tLWNvbnRyb2wtaW5kaWNhdG9yLWJveC1zaGFkb3c6ICAgaW5zZXQgMCAuMjVyZW0gLjI1cmVtIHJnYmEoJGJsYWNrLCAuMSkgIWRlZmF1bHQ7XG5cbiRjdXN0b20tY29udHJvbC1pbmRpY2F0b3ItZGlzYWJsZWQtYmc6ICAgICAgICAgICRncmF5LTIwMCAhZGVmYXVsdDtcbiRjdXN0b20tY29udHJvbC1sYWJlbC1kaXNhYmxlZC1jb2xvcjogICAgICAgICAgICRncmF5LTYwMCAhZGVmYXVsdDtcblxuJGN1c3RvbS1jb250cm9sLWluZGljYXRvci1jaGVja2VkLWNvbG9yOiAgICAgICAgJGNvbXBvbmVudC1hY3RpdmUtY29sb3IgIWRlZmF1bHQ7XG4kY3VzdG9tLWNvbnRyb2wtaW5kaWNhdG9yLWNoZWNrZWQtYmc6ICAgICAgICAgICAkY29tcG9uZW50LWFjdGl2ZS1iZyAhZGVmYXVsdDtcbiRjdXN0b20tY29udHJvbC1pbmRpY2F0b3ItY2hlY2tlZC1kaXNhYmxlZC1iZzogIHJnYmEodGhlbWUtY29sb3IoXCJwcmltYXJ5XCIpLCAuNSkgIWRlZmF1bHQ7XG4kY3VzdG9tLWNvbnRyb2wtaW5kaWNhdG9yLWNoZWNrZWQtYm94LXNoYWRvdzogICBub25lICFkZWZhdWx0O1xuXG4kY3VzdG9tLWNvbnRyb2wtaW5kaWNhdG9yLWZvY3VzLWJveC1zaGFkb3c6ICAgICAwIDAgMCAxcHggJGJvZHktYmcsICRpbnB1dC1idG4tZm9jdXMtYm94LXNoYWRvdyAhZGVmYXVsdDtcblxuJGN1c3RvbS1jb250cm9sLWluZGljYXRvci1hY3RpdmUtY29sb3I6ICAgICAgICAgJGNvbXBvbmVudC1hY3RpdmUtY29sb3IgIWRlZmF1bHQ7XG4kY3VzdG9tLWNvbnRyb2wtaW5kaWNhdG9yLWFjdGl2ZS1iZzogICAgICAgICAgICBsaWdodGVuKCRjb21wb25lbnQtYWN0aXZlLWJnLCAzNSUpICFkZWZhdWx0O1xuJGN1c3RvbS1jb250cm9sLWluZGljYXRvci1hY3RpdmUtYm94LXNoYWRvdzogICAgbm9uZSAhZGVmYXVsdDtcblxuJGN1c3RvbS1jaGVja2JveC1pbmRpY2F0b3ItYm9yZGVyLXJhZGl1czogICAgICAgJGJvcmRlci1yYWRpdXMgIWRlZmF1bHQ7XG4kY3VzdG9tLWNoZWNrYm94LWluZGljYXRvci1pY29uLWNoZWNrZWQ6ICAgICAgICBzdHItcmVwbGFjZSh1cmwoXCJkYXRhOmltYWdlL3N2Zyt4bWw7Y2hhcnNldD11dGY4LCUzQ3N2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHZpZXdCb3g9JzAgMCA4IDgnJTNFJTNDcGF0aCBmaWxsPScjeyRjdXN0b20tY29udHJvbC1pbmRpY2F0b3ItY2hlY2tlZC1jb2xvcn0nIGQ9J002LjU2NC43NWwtMy41OSAzLjYxMi0xLjUzOC0xLjU1TDAgNC4yNiAyLjk3NCA3LjI1IDggMi4xOTN6Jy8lM0UlM0Mvc3ZnJTNFXCIpLCBcIiNcIiwgXCIlMjNcIikgIWRlZmF1bHQ7XG5cbiRjdXN0b20tY2hlY2tib3gtaW5kaWNhdG9yLWluZGV0ZXJtaW5hdGUtYmc6ICAgICAgICAgICRjb21wb25lbnQtYWN0aXZlLWJnICFkZWZhdWx0O1xuJGN1c3RvbS1jaGVja2JveC1pbmRpY2F0b3ItaW5kZXRlcm1pbmF0ZS1jb2xvcjogICAgICAgJGN1c3RvbS1jb250cm9sLWluZGljYXRvci1jaGVja2VkLWNvbG9yICFkZWZhdWx0O1xuJGN1c3RvbS1jaGVja2JveC1pbmRpY2F0b3ItaWNvbi1pbmRldGVybWluYXRlOiAgICAgICAgc3RyLXJlcGxhY2UodXJsKFwiZGF0YTppbWFnZS9zdmcreG1sO2NoYXJzZXQ9dXRmOCwlM0NzdmcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB2aWV3Qm94PScwIDAgNCA0JyUzRSUzQ3BhdGggc3Ryb2tlPScjeyRjdXN0b20tY2hlY2tib3gtaW5kaWNhdG9yLWluZGV0ZXJtaW5hdGUtY29sb3J9JyBkPSdNMCAyaDQnLyUzRSUzQy9zdmclM0VcIiksIFwiI1wiLCBcIiUyM1wiKSAhZGVmYXVsdDtcbiRjdXN0b20tY2hlY2tib3gtaW5kaWNhdG9yLWluZGV0ZXJtaW5hdGUtYm94LXNoYWRvdzogIG5vbmUgIWRlZmF1bHQ7XG5cbiRjdXN0b20tcmFkaW8taW5kaWNhdG9yLWJvcmRlci1yYWRpdXM6ICAgICAgICAgIDUwJSAhZGVmYXVsdDtcbiRjdXN0b20tcmFkaW8taW5kaWNhdG9yLWljb24tY2hlY2tlZDogICAgICAgICAgIHN0ci1yZXBsYWNlKHVybChcImRhdGE6aW1hZ2Uvc3ZnK3htbDtjaGFyc2V0PXV0ZjgsJTNDc3ZnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zycgdmlld0JveD0nLTQgLTQgOCA4JyUzRSUzQ2NpcmNsZSByPSczJyBmaWxsPScjeyRjdXN0b20tY29udHJvbC1pbmRpY2F0b3ItY2hlY2tlZC1jb2xvcn0nLyUzRSUzQy9zdmclM0VcIiksIFwiI1wiLCBcIiUyM1wiKSAhZGVmYXVsdDtcblxuJGN1c3RvbS1zZWxlY3QtcGFkZGluZy15OiAgICAgICAgICAgLjM3NXJlbSAhZGVmYXVsdDtcbiRjdXN0b20tc2VsZWN0LXBhZGRpbmcteDogICAgICAgICAgIC43NXJlbSAhZGVmYXVsdDtcbiRjdXN0b20tc2VsZWN0LWhlaWdodDogICAgICAgICAgICAgICRpbnB1dC1oZWlnaHQgIWRlZmF1bHQ7XG4kY3VzdG9tLXNlbGVjdC1pbmRpY2F0b3ItcGFkZGluZzogICAxcmVtICFkZWZhdWx0OyAvLyBFeHRyYSBwYWRkaW5nIHRvIGFjY291bnQgZm9yIHRoZSBwcmVzZW5jZSBvZiB0aGUgYmFja2dyb3VuZC1pbWFnZSBiYXNlZCBpbmRpY2F0b3JcbiRjdXN0b20tc2VsZWN0LWxpbmUtaGVpZ2h0OiAgICAgICAgICRpbnB1dC1idG4tbGluZS1oZWlnaHQgIWRlZmF1bHQ7XG4kY3VzdG9tLXNlbGVjdC1jb2xvcjogICAgICAgICAgICAgICAkaW5wdXQtY29sb3IgIWRlZmF1bHQ7XG4kY3VzdG9tLXNlbGVjdC1kaXNhYmxlZC1jb2xvcjogICAgICAkZ3JheS02MDAgIWRlZmF1bHQ7XG4kY3VzdG9tLXNlbGVjdC1iZzogICAgICAgICAgICAgICAgICAkaW5wdXQtYmcgIWRlZmF1bHQ7XG4kY3VzdG9tLXNlbGVjdC1kaXNhYmxlZC1iZzogICAgICAgICAkZ3JheS0yMDAgIWRlZmF1bHQ7XG4kY3VzdG9tLXNlbGVjdC1iZy1zaXplOiAgICAgICAgICAgICA4cHggMTBweCAhZGVmYXVsdDsgLy8gSW4gcGl4ZWxzIGJlY2F1c2UgaW1hZ2UgZGltZW5zaW9uc1xuJGN1c3RvbS1zZWxlY3QtaW5kaWNhdG9yLWNvbG9yOiAgICAgJGdyYXktODAwICFkZWZhdWx0O1xuJGN1c3RvbS1zZWxlY3QtaW5kaWNhdG9yOiAgICAgICAgICAgc3RyLXJlcGxhY2UodXJsKFwiZGF0YTppbWFnZS9zdmcreG1sO2NoYXJzZXQ9dXRmOCwlM0NzdmcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB2aWV3Qm94PScwIDAgNCA1JyUzRSUzQ3BhdGggZmlsbD0nI3skY3VzdG9tLXNlbGVjdC1pbmRpY2F0b3ItY29sb3J9JyBkPSdNMiAwTDAgMmg0em0wIDVMMCAzaDR6Jy8lM0UlM0Mvc3ZnJTNFXCIpLCBcIiNcIiwgXCIlMjNcIikgIWRlZmF1bHQ7XG4kY3VzdG9tLXNlbGVjdC1ib3JkZXItd2lkdGg6ICAgICAgICAkaW5wdXQtYnRuLWJvcmRlci13aWR0aCAhZGVmYXVsdDtcbiRjdXN0b20tc2VsZWN0LWJvcmRlci1jb2xvcjogICAgICAgICRpbnB1dC1ib3JkZXItY29sb3IgIWRlZmF1bHQ7XG4kY3VzdG9tLXNlbGVjdC1ib3JkZXItcmFkaXVzOiAgICAgICAkYm9yZGVyLXJhZGl1cyAhZGVmYXVsdDtcbiRjdXN0b20tc2VsZWN0LWJveC1zaGFkb3c6ICAgICAgICAgIGluc2V0IDAgMXB4IDJweCByZ2JhKCRibGFjaywgLjA3NSkgIWRlZmF1bHQ7XG5cbiRjdXN0b20tc2VsZWN0LWZvY3VzLWJvcmRlci1jb2xvcjogICRpbnB1dC1mb2N1cy1ib3JkZXItY29sb3IgIWRlZmF1bHQ7XG4kY3VzdG9tLXNlbGVjdC1mb2N1cy13aWR0aDogICAgICAgICAkaW5wdXQtYnRuLWZvY3VzLXdpZHRoICFkZWZhdWx0O1xuJGN1c3RvbS1zZWxlY3QtZm9jdXMtYm94LXNoYWRvdzogICAgMCAwIDAgJGN1c3RvbS1zZWxlY3QtZm9jdXMtd2lkdGggcmdiYSgkY3VzdG9tLXNlbGVjdC1mb2N1cy1ib3JkZXItY29sb3IsIC41KSAhZGVmYXVsdDtcblxuJGN1c3RvbS1zZWxlY3QtZm9udC1zaXplLXNtOiAgICAgICAgNzUlICFkZWZhdWx0O1xuJGN1c3RvbS1zZWxlY3QtaGVpZ2h0LXNtOiAgICAgICAgICAgJGlucHV0LWhlaWdodC1zbSAhZGVmYXVsdDtcblxuJGN1c3RvbS1zZWxlY3QtZm9udC1zaXplLWxnOiAgICAgICAgMTI1JSAhZGVmYXVsdDtcbiRjdXN0b20tc2VsZWN0LWhlaWdodC1sZzogICAgICAgICAgICRpbnB1dC1oZWlnaHQtbGcgIWRlZmF1bHQ7XG5cbiRjdXN0b20tcmFuZ2UtdHJhY2std2lkdGg6ICAgICAgICAgIDEwMCUgIWRlZmF1bHQ7XG4kY3VzdG9tLXJhbmdlLXRyYWNrLWhlaWdodDogICAgICAgICAuNXJlbSAhZGVmYXVsdDtcbiRjdXN0b20tcmFuZ2UtdHJhY2stY3Vyc29yOiAgICAgICAgIHBvaW50ZXIgIWRlZmF1bHQ7XG4kY3VzdG9tLXJhbmdlLXRyYWNrLWJnOiAgICAgICAgICAgICAkZ3JheS0zMDAgIWRlZmF1bHQ7XG4kY3VzdG9tLXJhbmdlLXRyYWNrLWJvcmRlci1yYWRpdXM6ICAxcmVtICFkZWZhdWx0O1xuJGN1c3RvbS1yYW5nZS10cmFjay1ib3gtc2hhZG93OiAgICAgaW5zZXQgMCAuMjVyZW0gLjI1cmVtIHJnYmEoJGJsYWNrLCAuMSkgIWRlZmF1bHQ7XG5cbiRjdXN0b20tcmFuZ2UtdGh1bWItd2lkdGg6ICAgICAgICAgICAgICAgICAgIDFyZW0gIWRlZmF1bHQ7XG4kY3VzdG9tLXJhbmdlLXRodW1iLWhlaWdodDogICAgICAgICAgICAgICAgICAkY3VzdG9tLXJhbmdlLXRodW1iLXdpZHRoICFkZWZhdWx0O1xuJGN1c3RvbS1yYW5nZS10aHVtYi1iZzogICAgICAgICAgICAgICAgICAgICAgJGNvbXBvbmVudC1hY3RpdmUtYmcgIWRlZmF1bHQ7XG4kY3VzdG9tLXJhbmdlLXRodW1iLWJvcmRlcjogICAgICAgICAgICAgICAgICAwICFkZWZhdWx0O1xuJGN1c3RvbS1yYW5nZS10aHVtYi1ib3JkZXItcmFkaXVzOiAgICAgICAgICAgMXJlbSAhZGVmYXVsdDtcbiRjdXN0b20tcmFuZ2UtdGh1bWItYm94LXNoYWRvdzogICAgICAgICAgICAgIDAgLjFyZW0gLjI1cmVtIHJnYmEoJGJsYWNrLCAuMSkgIWRlZmF1bHQ7XG4kY3VzdG9tLXJhbmdlLXRodW1iLWZvY3VzLWJveC1zaGFkb3c6ICAgICAgICAwIDAgMCAxcHggJGJvZHktYmcsICRpbnB1dC1idG4tZm9jdXMtYm94LXNoYWRvdyAhZGVmYXVsdDtcbiRjdXN0b20tcmFuZ2UtdGh1bWItZm9jdXMtYm94LXNoYWRvdy13aWR0aDogICRpbnB1dC1idG4tZm9jdXMtd2lkdGggIWRlZmF1bHQ7IC8vIEZvciBmb2N1cyBib3ggc2hhZG93IGlzc3VlIGluIElFL0VkZ2VcbiRjdXN0b20tcmFuZ2UtdGh1bWItYWN0aXZlLWJnOiAgICAgICAgICAgICAgIGxpZ2h0ZW4oJGNvbXBvbmVudC1hY3RpdmUtYmcsIDM1JSkgIWRlZmF1bHQ7XG5cbiRjdXN0b20tZmlsZS1oZWlnaHQ6ICAgICAgICAgICAgICAgICRpbnB1dC1oZWlnaHQgIWRlZmF1bHQ7XG4kY3VzdG9tLWZpbGUtaGVpZ2h0LWlubmVyOiAgICAgICAgICAkaW5wdXQtaGVpZ2h0LWlubmVyICFkZWZhdWx0O1xuJGN1c3RvbS1maWxlLWZvY3VzLWJvcmRlci1jb2xvcjogICAgJGlucHV0LWZvY3VzLWJvcmRlci1jb2xvciAhZGVmYXVsdDtcbiRjdXN0b20tZmlsZS1mb2N1cy1ib3gtc2hhZG93OiAgICAgICRpbnB1dC1idG4tZm9jdXMtYm94LXNoYWRvdyAhZGVmYXVsdDtcbiRjdXN0b20tZmlsZS1kaXNhYmxlZC1iZzogICAgICAgICAgICRpbnB1dC1kaXNhYmxlZC1iZyAhZGVmYXVsdDtcblxuJGN1c3RvbS1maWxlLXBhZGRpbmcteTogICAgICAgICAgICAgJGlucHV0LWJ0bi1wYWRkaW5nLXkgIWRlZmF1bHQ7XG4kY3VzdG9tLWZpbGUtcGFkZGluZy14OiAgICAgICAgICAgICAkaW5wdXQtYnRuLXBhZGRpbmcteCAhZGVmYXVsdDtcbiRjdXN0b20tZmlsZS1saW5lLWhlaWdodDogICAgICAgICAgICRpbnB1dC1idG4tbGluZS1oZWlnaHQgIWRlZmF1bHQ7XG4kY3VzdG9tLWZpbGUtY29sb3I6ICAgICAgICAgICAgICAgICAkaW5wdXQtY29sb3IgIWRlZmF1bHQ7XG4kY3VzdG9tLWZpbGUtYmc6ICAgICAgICAgICAgICAgICAgICAkaW5wdXQtYmcgIWRlZmF1bHQ7XG4kY3VzdG9tLWZpbGUtYm9yZGVyLXdpZHRoOiAgICAgICAgICAkaW5wdXQtYnRuLWJvcmRlci13aWR0aCAhZGVmYXVsdDtcbiRjdXN0b20tZmlsZS1ib3JkZXItY29sb3I6ICAgICAgICAgICRpbnB1dC1ib3JkZXItY29sb3IgIWRlZmF1bHQ7XG4kY3VzdG9tLWZpbGUtYm9yZGVyLXJhZGl1czogICAgICAgICAkaW5wdXQtYm9yZGVyLXJhZGl1cyAhZGVmYXVsdDtcbiRjdXN0b20tZmlsZS1ib3gtc2hhZG93OiAgICAgICAgICAgICRpbnB1dC1ib3gtc2hhZG93ICFkZWZhdWx0O1xuJGN1c3RvbS1maWxlLWJ1dHRvbi1jb2xvcjogICAgICAgICAgJGN1c3RvbS1maWxlLWNvbG9yICFkZWZhdWx0O1xuJGN1c3RvbS1maWxlLWJ1dHRvbi1iZzogICAgICAgICAgICAgJGlucHV0LWdyb3VwLWFkZG9uLWJnICFkZWZhdWx0O1xuJGN1c3RvbS1maWxlLXRleHQ6IChcbiAgZW46IFwiQnJvd3NlXCJcbikgIWRlZmF1bHQ7XG5cblxuLy8gRm9ybSB2YWxpZGF0aW9uXG4kZm9ybS1mZWVkYmFjay1tYXJnaW4tdG9wOiAgICAgICAgICAkZm9ybS10ZXh0LW1hcmdpbi10b3AgIWRlZmF1bHQ7XG4kZm9ybS1mZWVkYmFjay1mb250LXNpemU6ICAgICAgICAgICAkc21hbGwtZm9udC1zaXplICFkZWZhdWx0O1xuJGZvcm0tZmVlZGJhY2stdmFsaWQtY29sb3I6ICAgICAgICAgdGhlbWUtY29sb3IoXCJzdWNjZXNzXCIpICFkZWZhdWx0O1xuJGZvcm0tZmVlZGJhY2staW52YWxpZC1jb2xvcjogICAgICAgdGhlbWUtY29sb3IoXCJkYW5nZXJcIikgIWRlZmF1bHQ7XG5cblxuLy8gRHJvcGRvd25zXG4vL1xuLy8gRHJvcGRvd24gbWVudSBjb250YWluZXIgYW5kIGNvbnRlbnRzLlxuXG4kZHJvcGRvd24tbWluLXdpZHRoOiAgICAgICAgICAgICAgICAxMHJlbSAhZGVmYXVsdDtcbiRkcm9wZG93bi1wYWRkaW5nLXk6ICAgICAgICAgICAgICAgIC41cmVtICFkZWZhdWx0O1xuJGRyb3Bkb3duLXNwYWNlcjogICAgICAgICAgICAgICAgICAgLjEyNXJlbSAhZGVmYXVsdDtcbiRkcm9wZG93bi1iZzogICAgICAgICAgICAgICAgICAgICAgICR3aGl0ZSAhZGVmYXVsdDtcbiRkcm9wZG93bi1ib3JkZXItY29sb3I6ICAgICAgICAgICAgIHJnYmEoJGJsYWNrLCAuMTUpICFkZWZhdWx0O1xuJGRyb3Bkb3duLWJvcmRlci1yYWRpdXM6ICAgICAgICAgICAgJGJvcmRlci1yYWRpdXMgIWRlZmF1bHQ7XG4kZHJvcGRvd24tYm9yZGVyLXdpZHRoOiAgICAgICAgICAgICAkYm9yZGVyLXdpZHRoICFkZWZhdWx0O1xuJGRyb3Bkb3duLWRpdmlkZXItYmc6ICAgICAgICAgICAgICAgJGdyYXktMjAwICFkZWZhdWx0O1xuJGRyb3Bkb3duLWJveC1zaGFkb3c6ICAgICAgICAgICAgICAgMCAuNXJlbSAxcmVtIHJnYmEoJGJsYWNrLCAuMTc1KSAhZGVmYXVsdDtcblxuJGRyb3Bkb3duLWxpbmstY29sb3I6ICAgICAgICAgICAgICAgJGdyYXktOTAwICFkZWZhdWx0O1xuJGRyb3Bkb3duLWxpbmstaG92ZXItY29sb3I6ICAgICAgICAgZGFya2VuKCRncmF5LTkwMCwgNSUpICFkZWZhdWx0O1xuJGRyb3Bkb3duLWxpbmstaG92ZXItYmc6ICAgICAgICAgICAgJGdyYXktMTAwICFkZWZhdWx0O1xuXG4kZHJvcGRvd24tbGluay1hY3RpdmUtY29sb3I6ICAgICAgICAkY29tcG9uZW50LWFjdGl2ZS1jb2xvciAhZGVmYXVsdDtcbiRkcm9wZG93bi1saW5rLWFjdGl2ZS1iZzogICAgICAgICAgICRjb21wb25lbnQtYWN0aXZlLWJnICFkZWZhdWx0O1xuXG4kZHJvcGRvd24tbGluay1kaXNhYmxlZC1jb2xvcjogICAgICAkZ3JheS02MDAgIWRlZmF1bHQ7XG5cbiRkcm9wZG93bi1pdGVtLXBhZGRpbmcteTogICAgICAgICAgIC4yNXJlbSAhZGVmYXVsdDtcbiRkcm9wZG93bi1pdGVtLXBhZGRpbmcteDogICAgICAgICAgIDEuNXJlbSAhZGVmYXVsdDtcblxuJGRyb3Bkb3duLWhlYWRlci1jb2xvcjogICAgICAgICAgICAgJGdyYXktNjAwICFkZWZhdWx0O1xuXG5cbi8vIFotaW5kZXggbWFzdGVyIGxpc3Rcbi8vXG4vLyBXYXJuaW5nOiBBdm9pZCBjdXN0b21pemluZyB0aGVzZSB2YWx1ZXMuIFRoZXkncmUgdXNlZCBmb3IgYSBiaXJkJ3MgZXllIHZpZXdcbi8vIG9mIGNvbXBvbmVudHMgZGVwZW5kZW50IG9uIHRoZSB6LWF4aXMgYW5kIGFyZSBkZXNpZ25lZCB0byBhbGwgd29yayB0b2dldGhlci5cblxuJHppbmRleC1kcm9wZG93bjogICAgICAgICAgICAgICAgICAgMTAwMCAhZGVmYXVsdDtcbiR6aW5kZXgtc3RpY2t5OiAgICAgICAgICAgICAgICAgICAgIDEwMjAgIWRlZmF1bHQ7XG4kemluZGV4LWZpeGVkOiAgICAgICAgICAgICAgICAgICAgICAxMDMwICFkZWZhdWx0O1xuJHppbmRleC1tb2RhbC1iYWNrZHJvcDogICAgICAgICAgICAgMTA0MCAhZGVmYXVsdDtcbiR6aW5kZXgtbW9kYWw6ICAgICAgICAgICAgICAgICAgICAgIDEwNTAgIWRlZmF1bHQ7XG4kemluZGV4LXBvcG92ZXI6ICAgICAgICAgICAgICAgICAgICAxMDYwICFkZWZhdWx0O1xuJHppbmRleC10b29sdGlwOiAgICAgICAgICAgICAgICAgICAgMTA3MCAhZGVmYXVsdDtcblxuLy8gTmF2c1xuXG4kbmF2LWxpbmstcGFkZGluZy15OiAgICAgICAgICAgICAgICAuNXJlbSAhZGVmYXVsdDtcbiRuYXYtbGluay1wYWRkaW5nLXg6ICAgICAgICAgICAgICAgIDFyZW0gIWRlZmF1bHQ7XG4kbmF2LWxpbmstZGlzYWJsZWQtY29sb3I6ICAgICAgICAgICAkZ3JheS02MDAgIWRlZmF1bHQ7XG5cbiRuYXYtdGFicy1ib3JkZXItY29sb3I6ICAgICAgICAgICAgICRncmF5LTMwMCAhZGVmYXVsdDtcbiRuYXYtdGFicy1ib3JkZXItd2lkdGg6ICAgICAgICAgICAgICRib3JkZXItd2lkdGggIWRlZmF1bHQ7XG4kbmF2LXRhYnMtYm9yZGVyLXJhZGl1czogICAgICAgICAgICAkYm9yZGVyLXJhZGl1cyAhZGVmYXVsdDtcbiRuYXYtdGFicy1saW5rLWhvdmVyLWJvcmRlci1jb2xvcjogICRncmF5LTIwMCAkZ3JheS0yMDAgJG5hdi10YWJzLWJvcmRlci1jb2xvciAhZGVmYXVsdDtcbiRuYXYtdGFicy1saW5rLWFjdGl2ZS1jb2xvcjogICAgICAgICRncmF5LTcwMCAhZGVmYXVsdDtcbiRuYXYtdGFicy1saW5rLWFjdGl2ZS1iZzogICAgICAgICAgICRib2R5LWJnICFkZWZhdWx0O1xuJG5hdi10YWJzLWxpbmstYWN0aXZlLWJvcmRlci1jb2xvcjogJGdyYXktMzAwICRncmF5LTMwMCAkbmF2LXRhYnMtbGluay1hY3RpdmUtYmcgIWRlZmF1bHQ7XG5cbiRuYXYtcGlsbHMtYm9yZGVyLXJhZGl1czogICAgICAgICAgICRib3JkZXItcmFkaXVzICFkZWZhdWx0O1xuJG5hdi1waWxscy1saW5rLWFjdGl2ZS1jb2xvcjogICAgICAgJGNvbXBvbmVudC1hY3RpdmUtY29sb3IgIWRlZmF1bHQ7XG4kbmF2LXBpbGxzLWxpbmstYWN0aXZlLWJnOiAgICAgICAgICAkY29tcG9uZW50LWFjdGl2ZS1iZyAhZGVmYXVsdDtcblxuJG5hdi1kaXZpZGVyLWNvbG9yOiAgICAgICAgICAgICAgICAgJGdyYXktMjAwICFkZWZhdWx0O1xuJG5hdi1kaXZpZGVyLW1hcmdpbi15OiAgICAgICAgICAgICAgKCRzcGFjZXIgLyAyKSAhZGVmYXVsdDtcblxuLy8gTmF2YmFyXG5cbiRuYXZiYXItcGFkZGluZy15OiAgICAgICAgICAgICAgICAgICgkc3BhY2VyIC8gMikgIWRlZmF1bHQ7XG4kbmF2YmFyLXBhZGRpbmcteDogICAgICAgICAgICAgICAgICAkc3BhY2VyICFkZWZhdWx0O1xuXG4kbmF2YmFyLW5hdi1saW5rLXBhZGRpbmcteDogICAgICAgICAuNXJlbSAhZGVmYXVsdDtcblxuJG5hdmJhci1icmFuZC1mb250LXNpemU6ICAgICAgICAgICAgJGZvbnQtc2l6ZS1sZyAhZGVmYXVsdDtcbi8vIENvbXB1dGUgdGhlIG5hdmJhci1icmFuZCBwYWRkaW5nLXkgc28gdGhlIG5hdmJhci1icmFuZCB3aWxsIGhhdmUgdGhlIHNhbWUgaGVpZ2h0IGFzIG5hdmJhci10ZXh0IGFuZCBuYXYtbGlua1xuJG5hdi1saW5rLWhlaWdodDogICAgICAgICAgICAgICAgICAgKCRmb250LXNpemUtYmFzZSAqICRsaW5lLWhlaWdodC1iYXNlICsgJG5hdi1saW5rLXBhZGRpbmcteSAqIDIpICFkZWZhdWx0O1xuJG5hdmJhci1icmFuZC1oZWlnaHQ6ICAgICAgICAgICAgICAgJG5hdmJhci1icmFuZC1mb250LXNpemUgKiAkbGluZS1oZWlnaHQtYmFzZSAhZGVmYXVsdDtcbiRuYXZiYXItYnJhbmQtcGFkZGluZy15OiAgICAgICAgICAgICgkbmF2LWxpbmstaGVpZ2h0IC0gJG5hdmJhci1icmFuZC1oZWlnaHQpIC8gMiAhZGVmYXVsdDtcblxuJG5hdmJhci10b2dnbGVyLXBhZGRpbmcteTogICAgICAgICAgLjI1cmVtICFkZWZhdWx0O1xuJG5hdmJhci10b2dnbGVyLXBhZGRpbmcteDogICAgICAgICAgLjc1cmVtICFkZWZhdWx0O1xuJG5hdmJhci10b2dnbGVyLWZvbnQtc2l6ZTogICAgICAgICAgJGZvbnQtc2l6ZS1sZyAhZGVmYXVsdDtcbiRuYXZiYXItdG9nZ2xlci1ib3JkZXItcmFkaXVzOiAgICAgICRidG4tYm9yZGVyLXJhZGl1cyAhZGVmYXVsdDtcblxuJG5hdmJhci1kYXJrLWNvbG9yOiAgICAgICAgICAgICAgICAgcmdiYSgkd2hpdGUsIC41KSAhZGVmYXVsdDtcbiRuYXZiYXItZGFyay1ob3Zlci1jb2xvcjogICAgICAgICAgIHJnYmEoJHdoaXRlLCAuNzUpICFkZWZhdWx0O1xuJG5hdmJhci1kYXJrLWFjdGl2ZS1jb2xvcjogICAgICAgICAgJHdoaXRlICFkZWZhdWx0O1xuJG5hdmJhci1kYXJrLWRpc2FibGVkLWNvbG9yOiAgICAgICAgcmdiYSgkd2hpdGUsIC4yNSkgIWRlZmF1bHQ7XG4kbmF2YmFyLWRhcmstdG9nZ2xlci1pY29uLWJnOiAgICAgICBzdHItcmVwbGFjZSh1cmwoXCJkYXRhOmltYWdlL3N2Zyt4bWw7Y2hhcnNldD11dGY4LCUzQ3N2ZyB2aWV3Qm94PScwIDAgMzAgMzAnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyclM0UlM0NwYXRoIHN0cm9rZT0nI3skbmF2YmFyLWRhcmstY29sb3J9JyBzdHJva2Utd2lkdGg9JzInIHN0cm9rZS1saW5lY2FwPSdyb3VuZCcgc3Ryb2tlLW1pdGVybGltaXQ9JzEwJyBkPSdNNCA3aDIyTTQgMTVoMjJNNCAyM2gyMicvJTNFJTNDL3N2ZyUzRVwiKSwgXCIjXCIsIFwiJTIzXCIpICFkZWZhdWx0O1xuJG5hdmJhci1kYXJrLXRvZ2dsZXItYm9yZGVyLWNvbG9yOiAgcmdiYSgkd2hpdGUsIC4xKSAhZGVmYXVsdDtcblxuJG5hdmJhci1saWdodC1jb2xvcjogICAgICAgICAgICAgICAgcmdiYSgkYmxhY2ssIC41KSAhZGVmYXVsdDtcbiRuYXZiYXItbGlnaHQtaG92ZXItY29sb3I6ICAgICAgICAgIHJnYmEoJGJsYWNrLCAuNykgIWRlZmF1bHQ7XG4kbmF2YmFyLWxpZ2h0LWFjdGl2ZS1jb2xvcjogICAgICAgICByZ2JhKCRibGFjaywgLjkpICFkZWZhdWx0O1xuJG5hdmJhci1saWdodC1kaXNhYmxlZC1jb2xvcjogICAgICAgcmdiYSgkYmxhY2ssIC4zKSAhZGVmYXVsdDtcbiRuYXZiYXItbGlnaHQtdG9nZ2xlci1pY29uLWJnOiAgICAgIHN0ci1yZXBsYWNlKHVybChcImRhdGE6aW1hZ2Uvc3ZnK3htbDtjaGFyc2V0PXV0ZjgsJTNDc3ZnIHZpZXdCb3g9JzAgMCAzMCAzMCcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyUzRSUzQ3BhdGggc3Ryb2tlPScjeyRuYXZiYXItbGlnaHQtY29sb3J9JyBzdHJva2Utd2lkdGg9JzInIHN0cm9rZS1saW5lY2FwPSdyb3VuZCcgc3Ryb2tlLW1pdGVybGltaXQ9JzEwJyBkPSdNNCA3aDIyTTQgMTVoMjJNNCAyM2gyMicvJTNFJTNDL3N2ZyUzRVwiKSwgXCIjXCIsIFwiJTIzXCIpICFkZWZhdWx0O1xuJG5hdmJhci1saWdodC10b2dnbGVyLWJvcmRlci1jb2xvcjogcmdiYSgkYmxhY2ssIC4xKSAhZGVmYXVsdDtcblxuLy8gUGFnaW5hdGlvblxuXG4kcGFnaW5hdGlvbi1wYWRkaW5nLXk6ICAgICAgICAgICAgICAuNXJlbSAhZGVmYXVsdDtcbiRwYWdpbmF0aW9uLXBhZGRpbmcteDogICAgICAgICAgICAgIC43NXJlbSAhZGVmYXVsdDtcbiRwYWdpbmF0aW9uLXBhZGRpbmcteS1zbTogICAgICAgICAgIC4yNXJlbSAhZGVmYXVsdDtcbiRwYWdpbmF0aW9uLXBhZGRpbmcteC1zbTogICAgICAgICAgIC41cmVtICFkZWZhdWx0O1xuJHBhZ2luYXRpb24tcGFkZGluZy15LWxnOiAgICAgICAgICAgLjc1cmVtICFkZWZhdWx0O1xuJHBhZ2luYXRpb24tcGFkZGluZy14LWxnOiAgICAgICAgICAgMS41cmVtICFkZWZhdWx0O1xuJHBhZ2luYXRpb24tbGluZS1oZWlnaHQ6ICAgICAgICAgICAgMS4yNSAhZGVmYXVsdDtcblxuJHBhZ2luYXRpb24tY29sb3I6ICAgICAgICAgICAgICAgICAgJGxpbmstY29sb3IgIWRlZmF1bHQ7XG4kcGFnaW5hdGlvbi1iZzogICAgICAgICAgICAgICAgICAgICAkd2hpdGUgIWRlZmF1bHQ7XG4kcGFnaW5hdGlvbi1ib3JkZXItd2lkdGg6ICAgICAgICAgICAkYm9yZGVyLXdpZHRoICFkZWZhdWx0O1xuJHBhZ2luYXRpb24tYm9yZGVyLWNvbG9yOiAgICAgICAgICAgJGdyYXktMzAwICFkZWZhdWx0O1xuXG4kcGFnaW5hdGlvbi1mb2N1cy1ib3gtc2hhZG93OiAgICAgICAkaW5wdXQtYnRuLWZvY3VzLWJveC1zaGFkb3cgIWRlZmF1bHQ7XG4kcGFnaW5hdGlvbi1mb2N1cy1vdXRsaW5lOiAgICAgICAgICAwICFkZWZhdWx0O1xuXG4kcGFnaW5hdGlvbi1ob3Zlci1jb2xvcjogICAgICAgICAgICAkbGluay1ob3Zlci1jb2xvciAhZGVmYXVsdDtcbiRwYWdpbmF0aW9uLWhvdmVyLWJnOiAgICAgICAgICAgICAgICRncmF5LTIwMCAhZGVmYXVsdDtcbiRwYWdpbmF0aW9uLWhvdmVyLWJvcmRlci1jb2xvcjogICAgICRncmF5LTMwMCAhZGVmYXVsdDtcblxuJHBhZ2luYXRpb24tYWN0aXZlLWNvbG9yOiAgICAgICAgICAgJGNvbXBvbmVudC1hY3RpdmUtY29sb3IgIWRlZmF1bHQ7XG4kcGFnaW5hdGlvbi1hY3RpdmUtYmc6ICAgICAgICAgICAgICAkY29tcG9uZW50LWFjdGl2ZS1iZyAhZGVmYXVsdDtcbiRwYWdpbmF0aW9uLWFjdGl2ZS1ib3JkZXItY29sb3I6ICAgICRwYWdpbmF0aW9uLWFjdGl2ZS1iZyAhZGVmYXVsdDtcblxuJHBhZ2luYXRpb24tZGlzYWJsZWQtY29sb3I6ICAgICAgICAgJGdyYXktNjAwICFkZWZhdWx0O1xuJHBhZ2luYXRpb24tZGlzYWJsZWQtYmc6ICAgICAgICAgICAgJHdoaXRlICFkZWZhdWx0O1xuJHBhZ2luYXRpb24tZGlzYWJsZWQtYm9yZGVyLWNvbG9yOiAgJGdyYXktMzAwICFkZWZhdWx0O1xuXG5cbi8vIEp1bWJvdHJvblxuXG4kanVtYm90cm9uLXBhZGRpbmc6ICAgICAgICAgICAgICAgICAycmVtICFkZWZhdWx0O1xuJGp1bWJvdHJvbi1iZzogICAgICAgICAgICAgICAgICAgICAgJGdyYXktMjAwICFkZWZhdWx0O1xuXG5cbi8vIENhcmRzXG5cbiRjYXJkLXNwYWNlci15OiAgICAgICAgICAgICAgICAgICAgIC43NXJlbSAhZGVmYXVsdDtcbiRjYXJkLXNwYWNlci14OiAgICAgICAgICAgICAgICAgICAgIDEuMjVyZW0gIWRlZmF1bHQ7XG4kY2FyZC1ib3JkZXItd2lkdGg6ICAgICAgICAgICAgICAgICAkYm9yZGVyLXdpZHRoICFkZWZhdWx0O1xuJGNhcmQtYm9yZGVyLXJhZGl1czogICAgICAgICAgICAgICAgJGJvcmRlci1yYWRpdXMgIWRlZmF1bHQ7XG4kY2FyZC1ib3JkZXItY29sb3I6ICAgICAgICAgICAgICAgICByZ2JhKCRibGFjaywgLjEyNSkgIWRlZmF1bHQ7XG4kY2FyZC1pbm5lci1ib3JkZXItcmFkaXVzOiAgICAgICAgICBjYWxjKCN7JGNhcmQtYm9yZGVyLXJhZGl1c30gLSAjeyRjYXJkLWJvcmRlci13aWR0aH0pICFkZWZhdWx0O1xuJGNhcmQtY2FwLWJnOiAgICAgICAgICAgICAgICAgICAgICAgcmdiYSgkYmxhY2ssIC4wMykgIWRlZmF1bHQ7XG4kY2FyZC1iZzogICAgICAgICAgICAgICAgICAgICAgICAgICAkd2hpdGUgIWRlZmF1bHQ7XG5cbiRjYXJkLWltZy1vdmVybGF5LXBhZGRpbmc6ICAgICAgICAgIDEuMjVyZW0gIWRlZmF1bHQ7XG5cbiRjYXJkLWdyb3VwLW1hcmdpbjogICAgICAgICAgICAgICAgICgkZ3JpZC1ndXR0ZXItd2lkdGggLyAyKSAhZGVmYXVsdDtcbiRjYXJkLWRlY2stbWFyZ2luOiAgICAgICAgICAgICAgICAgICRjYXJkLWdyb3VwLW1hcmdpbiAhZGVmYXVsdDtcblxuJGNhcmQtY29sdW1ucy1jb3VudDogICAgICAgICAgICAgICAgMyAhZGVmYXVsdDtcbiRjYXJkLWNvbHVtbnMtZ2FwOiAgICAgICAgICAgICAgICAgIDEuMjVyZW0gIWRlZmF1bHQ7XG4kY2FyZC1jb2x1bW5zLW1hcmdpbjogICAgICAgICAgICAgICAkY2FyZC1zcGFjZXIteSAhZGVmYXVsdDtcblxuXG4vLyBUb29sdGlwc1xuXG4kdG9vbHRpcC1mb250LXNpemU6ICAgICAgICAgICAgICAgICAkZm9udC1zaXplLXNtICFkZWZhdWx0O1xuJHRvb2x0aXAtbWF4LXdpZHRoOiAgICAgICAgICAgICAgICAgMjAwcHggIWRlZmF1bHQ7XG4kdG9vbHRpcC1jb2xvcjogICAgICAgICAgICAgICAgICAgICAkd2hpdGUgIWRlZmF1bHQ7XG4kdG9vbHRpcC1iZzogICAgICAgICAgICAgICAgICAgICAgICAkYmxhY2sgIWRlZmF1bHQ7XG4kdG9vbHRpcC1ib3JkZXItcmFkaXVzOiAgICAgICAgICAgICAkYm9yZGVyLXJhZGl1cyAhZGVmYXVsdDtcbiR0b29sdGlwLW9wYWNpdHk6ICAgICAgICAgICAgICAgICAgIC45ICFkZWZhdWx0O1xuJHRvb2x0aXAtcGFkZGluZy15OiAgICAgICAgICAgICAgICAgLjI1cmVtICFkZWZhdWx0O1xuJHRvb2x0aXAtcGFkZGluZy14OiAgICAgICAgICAgICAgICAgLjVyZW0gIWRlZmF1bHQ7XG4kdG9vbHRpcC1tYXJnaW46ICAgICAgICAgICAgICAgICAgICAwICFkZWZhdWx0O1xuXG4kdG9vbHRpcC1hcnJvdy13aWR0aDogICAgICAgICAgICAgICAuOHJlbSAhZGVmYXVsdDtcbiR0b29sdGlwLWFycm93LWhlaWdodDogICAgICAgICAgICAgIC40cmVtICFkZWZhdWx0O1xuJHRvb2x0aXAtYXJyb3ctY29sb3I6ICAgICAgICAgICAgICAgJHRvb2x0aXAtYmcgIWRlZmF1bHQ7XG5cblxuLy8gUG9wb3ZlcnNcblxuJHBvcG92ZXItZm9udC1zaXplOiAgICAgICAgICAgICAgICAgJGZvbnQtc2l6ZS1zbSAhZGVmYXVsdDtcbiRwb3BvdmVyLWJnOiAgICAgICAgICAgICAgICAgICAgICAgICR3aGl0ZSAhZGVmYXVsdDtcbiRwb3BvdmVyLW1heC13aWR0aDogICAgICAgICAgICAgICAgIDI3NnB4ICFkZWZhdWx0O1xuJHBvcG92ZXItYm9yZGVyLXdpZHRoOiAgICAgICAgICAgICAgJGJvcmRlci13aWR0aCAhZGVmYXVsdDtcbiRwb3BvdmVyLWJvcmRlci1jb2xvcjogICAgICAgICAgICAgIHJnYmEoJGJsYWNrLCAuMikgIWRlZmF1bHQ7XG4kcG9wb3Zlci1ib3JkZXItcmFkaXVzOiAgICAgICAgICAgICAkYm9yZGVyLXJhZGl1cy1sZyAhZGVmYXVsdDtcbiRwb3BvdmVyLWJveC1zaGFkb3c6ICAgICAgICAgICAgICAgIDAgLjI1cmVtIC41cmVtIHJnYmEoJGJsYWNrLCAuMikgIWRlZmF1bHQ7XG5cbiRwb3BvdmVyLWhlYWRlci1iZzogICAgICAgICAgICAgICAgIGRhcmtlbigkcG9wb3Zlci1iZywgMyUpICFkZWZhdWx0O1xuJHBvcG92ZXItaGVhZGVyLWNvbG9yOiAgICAgICAgICAgICAgJGhlYWRpbmdzLWNvbG9yICFkZWZhdWx0O1xuJHBvcG92ZXItaGVhZGVyLXBhZGRpbmcteTogICAgICAgICAgLjVyZW0gIWRlZmF1bHQ7XG4kcG9wb3Zlci1oZWFkZXItcGFkZGluZy14OiAgICAgICAgICAuNzVyZW0gIWRlZmF1bHQ7XG5cbiRwb3BvdmVyLWJvZHktY29sb3I6ICAgICAgICAgICAgICAgICRib2R5LWNvbG9yICFkZWZhdWx0O1xuJHBvcG92ZXItYm9keS1wYWRkaW5nLXk6ICAgICAgICAgICAgJHBvcG92ZXItaGVhZGVyLXBhZGRpbmcteSAhZGVmYXVsdDtcbiRwb3BvdmVyLWJvZHktcGFkZGluZy14OiAgICAgICAgICAgICRwb3BvdmVyLWhlYWRlci1wYWRkaW5nLXggIWRlZmF1bHQ7XG5cbiRwb3BvdmVyLWFycm93LXdpZHRoOiAgICAgICAgICAgICAgIDFyZW0gIWRlZmF1bHQ7XG4kcG9wb3Zlci1hcnJvdy1oZWlnaHQ6ICAgICAgICAgICAgICAuNXJlbSAhZGVmYXVsdDtcbiRwb3BvdmVyLWFycm93LWNvbG9yOiAgICAgICAgICAgICAgICRwb3BvdmVyLWJnICFkZWZhdWx0O1xuXG4kcG9wb3Zlci1hcnJvdy1vdXRlci1jb2xvcjogICAgICAgICBmYWRlLWluKCRwb3BvdmVyLWJvcmRlci1jb2xvciwgLjA1KSAhZGVmYXVsdDtcblxuXG4vLyBCYWRnZXNcblxuJGJhZGdlLWZvbnQtc2l6ZTogICAgICAgICAgICAgICAgICAgNzUlICFkZWZhdWx0O1xuJGJhZGdlLWZvbnQtd2VpZ2h0OiAgICAgICAgICAgICAgICAgJGZvbnQtd2VpZ2h0LWJvbGQgIWRlZmF1bHQ7XG4kYmFkZ2UtcGFkZGluZy15OiAgICAgICAgICAgICAgICAgICAuMjVlbSAhZGVmYXVsdDtcbiRiYWRnZS1wYWRkaW5nLXg6ICAgICAgICAgICAgICAgICAgIC40ZW0gIWRlZmF1bHQ7XG4kYmFkZ2UtYm9yZGVyLXJhZGl1czogICAgICAgICAgICAgICAkYm9yZGVyLXJhZGl1cyAhZGVmYXVsdDtcblxuJGJhZGdlLXBpbGwtcGFkZGluZy14OiAgICAgICAgICAgICAgLjZlbSAhZGVmYXVsdDtcbi8vIFVzZSBhIGhpZ2hlciB0aGFuIG5vcm1hbCB2YWx1ZSB0byBlbnN1cmUgY29tcGxldGVseSByb3VuZGVkIGVkZ2VzIHdoZW5cbi8vIGN1c3RvbWl6aW5nIHBhZGRpbmcgb3IgZm9udC1zaXplIG9uIGxhYmVscy5cbiRiYWRnZS1waWxsLWJvcmRlci1yYWRpdXM6ICAgICAgICAgIDEwcmVtICFkZWZhdWx0O1xuXG5cbi8vIE1vZGFsc1xuXG4vLyBQYWRkaW5nIGFwcGxpZWQgdG8gdGhlIG1vZGFsIGJvZHlcbiRtb2RhbC1pbm5lci1wYWRkaW5nOiAgICAgICAgICAgICAgIDFyZW0gIWRlZmF1bHQ7XG5cbiRtb2RhbC1kaWFsb2ctbWFyZ2luOiAgICAgICAgICAgICAgIC41cmVtICFkZWZhdWx0O1xuJG1vZGFsLWRpYWxvZy1tYXJnaW4teS1zbS11cDogICAgICAgMS43NXJlbSAhZGVmYXVsdDtcblxuJG1vZGFsLXRpdGxlLWxpbmUtaGVpZ2h0OiAgICAgICAgICAgJGxpbmUtaGVpZ2h0LWJhc2UgIWRlZmF1bHQ7XG5cbiRtb2RhbC1jb250ZW50LWJnOiAgICAgICAgICAgICAgICAgICR3aGl0ZSAhZGVmYXVsdDtcbiRtb2RhbC1jb250ZW50LWJvcmRlci1jb2xvcjogICAgICAgIHJnYmEoJGJsYWNrLCAuMikgIWRlZmF1bHQ7XG4kbW9kYWwtY29udGVudC1ib3JkZXItd2lkdGg6ICAgICAgICAkYm9yZGVyLXdpZHRoICFkZWZhdWx0O1xuJG1vZGFsLWNvbnRlbnQtYm9yZGVyLXJhZGl1czogICAgICAgJGJvcmRlci1yYWRpdXMtbGcgIWRlZmF1bHQ7XG4kbW9kYWwtY29udGVudC1ib3gtc2hhZG93LXhzOiAgICAgICAwIC4yNXJlbSAuNXJlbSByZ2JhKCRibGFjaywgLjUpICFkZWZhdWx0O1xuJG1vZGFsLWNvbnRlbnQtYm94LXNoYWRvdy1zbS11cDogICAgMCAuNXJlbSAxcmVtIHJnYmEoJGJsYWNrLCAuNSkgIWRlZmF1bHQ7XG5cbiRtb2RhbC1iYWNrZHJvcC1iZzogICAgICAgICAgICAgICAgICRibGFjayAhZGVmYXVsdDtcbiRtb2RhbC1iYWNrZHJvcC1vcGFjaXR5OiAgICAgICAgICAgIC41ICFkZWZhdWx0O1xuJG1vZGFsLWhlYWRlci1ib3JkZXItY29sb3I6ICAgICAgICAgJGdyYXktMjAwICFkZWZhdWx0O1xuJG1vZGFsLWZvb3Rlci1ib3JkZXItY29sb3I6ICAgICAgICAgJG1vZGFsLWhlYWRlci1ib3JkZXItY29sb3IgIWRlZmF1bHQ7XG4kbW9kYWwtaGVhZGVyLWJvcmRlci13aWR0aDogICAgICAgICAkbW9kYWwtY29udGVudC1ib3JkZXItd2lkdGggIWRlZmF1bHQ7XG4kbW9kYWwtZm9vdGVyLWJvcmRlci13aWR0aDogICAgICAgICAkbW9kYWwtaGVhZGVyLWJvcmRlci13aWR0aCAhZGVmYXVsdDtcbiRtb2RhbC1oZWFkZXItcGFkZGluZzogICAgICAgICAgICAgIDFyZW0gIWRlZmF1bHQ7XG5cbiRtb2RhbC1sZzogICAgICAgICAgICAgICAgICAgICAgICAgIDgwMHB4ICFkZWZhdWx0O1xuJG1vZGFsLW1kOiAgICAgICAgICAgICAgICAgICAgICAgICAgNTAwcHggIWRlZmF1bHQ7XG4kbW9kYWwtc206ICAgICAgICAgICAgICAgICAgICAgICAgICAzMDBweCAhZGVmYXVsdDtcblxuJG1vZGFsLXRyYW5zaXRpb246ICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtIC4zcyBlYXNlLW91dCAhZGVmYXVsdDtcblxuXG4vLyBBbGVydHNcbi8vXG4vLyBEZWZpbmUgYWxlcnQgY29sb3JzLCBib3JkZXIgcmFkaXVzLCBhbmQgcGFkZGluZy5cblxuJGFsZXJ0LXBhZGRpbmcteTogICAgICAgICAgICAgICAgICAgLjc1cmVtICFkZWZhdWx0O1xuJGFsZXJ0LXBhZGRpbmcteDogICAgICAgICAgICAgICAgICAgMS4yNXJlbSAhZGVmYXVsdDtcbiRhbGVydC1tYXJnaW4tYm90dG9tOiAgICAgICAgICAgICAgIDFyZW0gIWRlZmF1bHQ7XG4kYWxlcnQtYm9yZGVyLXJhZGl1czogICAgICAgICAgICAgICAkYm9yZGVyLXJhZGl1cyAhZGVmYXVsdDtcbiRhbGVydC1saW5rLWZvbnQtd2VpZ2h0OiAgICAgICAgICAgICRmb250LXdlaWdodC1ib2xkICFkZWZhdWx0O1xuJGFsZXJ0LWJvcmRlci13aWR0aDogICAgICAgICAgICAgICAgJGJvcmRlci13aWR0aCAhZGVmYXVsdDtcblxuJGFsZXJ0LWJnLWxldmVsOiAgICAgICAgICAgICAgICAgICAgLTEwICFkZWZhdWx0O1xuJGFsZXJ0LWJvcmRlci1sZXZlbDogICAgICAgICAgICAgICAgLTkgIWRlZmF1bHQ7XG4kYWxlcnQtY29sb3ItbGV2ZWw6ICAgICAgICAgICAgICAgICA2ICFkZWZhdWx0O1xuXG5cbi8vIFByb2dyZXNzIGJhcnNcblxuJHByb2dyZXNzLWhlaWdodDogICAgICAgICAgICAgICAgICAgMXJlbSAhZGVmYXVsdDtcbiRwcm9ncmVzcy1mb250LXNpemU6ICAgICAgICAgICAgICAgICgkZm9udC1zaXplLWJhc2UgKiAuNzUpICFkZWZhdWx0O1xuJHByb2dyZXNzLWJnOiAgICAgICAgICAgICAgICAgICAgICAgJGdyYXktMjAwICFkZWZhdWx0O1xuJHByb2dyZXNzLWJvcmRlci1yYWRpdXM6ICAgICAgICAgICAgJGJvcmRlci1yYWRpdXMgIWRlZmF1bHQ7XG4kcHJvZ3Jlc3MtYm94LXNoYWRvdzogICAgICAgICAgICAgICBpbnNldCAwIC4xcmVtIC4xcmVtIHJnYmEoJGJsYWNrLCAuMSkgIWRlZmF1bHQ7XG4kcHJvZ3Jlc3MtYmFyLWNvbG9yOiAgICAgICAgICAgICAgICAkd2hpdGUgIWRlZmF1bHQ7XG4kcHJvZ3Jlc3MtYmFyLWJnOiAgICAgICAgICAgICAgICAgICB0aGVtZS1jb2xvcihcInByaW1hcnlcIikgIWRlZmF1bHQ7XG4kcHJvZ3Jlc3MtYmFyLWFuaW1hdGlvbi10aW1pbmc6ICAgICAxcyBsaW5lYXIgaW5maW5pdGUgIWRlZmF1bHQ7XG4kcHJvZ3Jlc3MtYmFyLXRyYW5zaXRpb246ICAgICAgICAgICB3aWR0aCAuNnMgZWFzZSAhZGVmYXVsdDtcblxuLy8gTGlzdCBncm91cFxuXG4kbGlzdC1ncm91cC1iZzogICAgICAgICAgICAgICAgICAgICAkd2hpdGUgIWRlZmF1bHQ7XG4kbGlzdC1ncm91cC1ib3JkZXItY29sb3I6ICAgICAgICAgICByZ2JhKCRibGFjaywgLjEyNSkgIWRlZmF1bHQ7XG4kbGlzdC1ncm91cC1ib3JkZXItd2lkdGg6ICAgICAgICAgICAkYm9yZGVyLXdpZHRoICFkZWZhdWx0O1xuJGxpc3QtZ3JvdXAtYm9yZGVyLXJhZGl1czogICAgICAgICAgJGJvcmRlci1yYWRpdXMgIWRlZmF1bHQ7XG5cbiRsaXN0LWdyb3VwLWl0ZW0tcGFkZGluZy15OiAgICAgICAgIC43NXJlbSAhZGVmYXVsdDtcbiRsaXN0LWdyb3VwLWl0ZW0tcGFkZGluZy14OiAgICAgICAgIDEuMjVyZW0gIWRlZmF1bHQ7XG5cbiRsaXN0LWdyb3VwLWhvdmVyLWJnOiAgICAgICAgICAgICAgICRncmF5LTEwMCAhZGVmYXVsdDtcbiRsaXN0LWdyb3VwLWFjdGl2ZS1jb2xvcjogICAgICAgICAgICRjb21wb25lbnQtYWN0aXZlLWNvbG9yICFkZWZhdWx0O1xuJGxpc3QtZ3JvdXAtYWN0aXZlLWJnOiAgICAgICAgICAgICAgJGNvbXBvbmVudC1hY3RpdmUtYmcgIWRlZmF1bHQ7XG4kbGlzdC1ncm91cC1hY3RpdmUtYm9yZGVyLWNvbG9yOiAgICAkbGlzdC1ncm91cC1hY3RpdmUtYmcgIWRlZmF1bHQ7XG5cbiRsaXN0LWdyb3VwLWRpc2FibGVkLWNvbG9yOiAgICAgICAgICRncmF5LTYwMCAhZGVmYXVsdDtcbiRsaXN0LWdyb3VwLWRpc2FibGVkLWJnOiAgICAgICAgICAgICRsaXN0LWdyb3VwLWJnICFkZWZhdWx0O1xuXG4kbGlzdC1ncm91cC1hY3Rpb24tY29sb3I6ICAgICAgICAgICAkZ3JheS03MDAgIWRlZmF1bHQ7XG4kbGlzdC1ncm91cC1hY3Rpb24taG92ZXItY29sb3I6ICAgICAkbGlzdC1ncm91cC1hY3Rpb24tY29sb3IgIWRlZmF1bHQ7XG5cbiRsaXN0LWdyb3VwLWFjdGlvbi1hY3RpdmUtY29sb3I6ICAgICRib2R5LWNvbG9yICFkZWZhdWx0O1xuJGxpc3QtZ3JvdXAtYWN0aW9uLWFjdGl2ZS1iZzogICAgICAgJGdyYXktMjAwICFkZWZhdWx0O1xuXG5cbi8vIEltYWdlIHRodW1ibmFpbHNcblxuJHRodW1ibmFpbC1wYWRkaW5nOiAgICAgICAgICAgICAgICAgLjI1cmVtICFkZWZhdWx0O1xuJHRodW1ibmFpbC1iZzogICAgICAgICAgICAgICAgICAgICAgJGJvZHktYmcgIWRlZmF1bHQ7XG4kdGh1bWJuYWlsLWJvcmRlci13aWR0aDogICAgICAgICAgICAkYm9yZGVyLXdpZHRoICFkZWZhdWx0O1xuJHRodW1ibmFpbC1ib3JkZXItY29sb3I6ICAgICAgICAgICAgJGdyYXktMzAwICFkZWZhdWx0O1xuJHRodW1ibmFpbC1ib3JkZXItcmFkaXVzOiAgICAgICAgICAgJGJvcmRlci1yYWRpdXMgIWRlZmF1bHQ7XG4kdGh1bWJuYWlsLWJveC1zaGFkb3c6ICAgICAgICAgICAgICAwIDFweCAycHggcmdiYSgkYmxhY2ssIC4wNzUpICFkZWZhdWx0O1xuXG5cbi8vIEZpZ3VyZXNcblxuJGZpZ3VyZS1jYXB0aW9uLWZvbnQtc2l6ZTogICAgICAgICAgOTAlICFkZWZhdWx0O1xuJGZpZ3VyZS1jYXB0aW9uLWNvbG9yOiAgICAgICAgICAgICAgJGdyYXktNjAwICFkZWZhdWx0O1xuXG5cbi8vIEJyZWFkY3J1bWJzXG5cbiRicmVhZGNydW1iLXBhZGRpbmcteTogICAgICAgICAgICAgIC43NXJlbSAhZGVmYXVsdDtcbiRicmVhZGNydW1iLXBhZGRpbmcteDogICAgICAgICAgICAgIDFyZW0gIWRlZmF1bHQ7XG4kYnJlYWRjcnVtYi1pdGVtLXBhZGRpbmc6ICAgICAgICAgICAuNXJlbSAhZGVmYXVsdDtcblxuJGJyZWFkY3J1bWItbWFyZ2luLWJvdHRvbTogICAgICAgICAgMXJlbSAhZGVmYXVsdDtcblxuJGJyZWFkY3J1bWItYmc6ICAgICAgICAgICAgICAgICAgICAgJGdyYXktMjAwICFkZWZhdWx0O1xuJGJyZWFkY3J1bWItZGl2aWRlci1jb2xvcjogICAgICAgICAgJGdyYXktNjAwICFkZWZhdWx0O1xuJGJyZWFkY3J1bWItYWN0aXZlLWNvbG9yOiAgICAgICAgICAgJGdyYXktNjAwICFkZWZhdWx0O1xuJGJyZWFkY3J1bWItZGl2aWRlcjogICAgICAgICAgICAgICAgcXVvdGUoXCIvXCIpICFkZWZhdWx0O1xuXG4kYnJlYWRjcnVtYi1ib3JkZXItcmFkaXVzOiAgICAgICAgICAkYm9yZGVyLXJhZGl1cyAhZGVmYXVsdDtcblxuXG4vLyBDYXJvdXNlbFxuXG4kY2Fyb3VzZWwtY29udHJvbC1jb2xvcjogICAgICAgICAgICAkd2hpdGUgIWRlZmF1bHQ7XG4kY2Fyb3VzZWwtY29udHJvbC13aWR0aDogICAgICAgICAgICAxNSUgIWRlZmF1bHQ7XG4kY2Fyb3VzZWwtY29udHJvbC1vcGFjaXR5OiAgICAgICAgICAuNSAhZGVmYXVsdDtcblxuJGNhcm91c2VsLWluZGljYXRvci13aWR0aDogICAgICAgICAgMzBweCAhZGVmYXVsdDtcbiRjYXJvdXNlbC1pbmRpY2F0b3ItaGVpZ2h0OiAgICAgICAgIDNweCAhZGVmYXVsdDtcbiRjYXJvdXNlbC1pbmRpY2F0b3Itc3BhY2VyOiAgICAgICAgIDNweCAhZGVmYXVsdDtcbiRjYXJvdXNlbC1pbmRpY2F0b3ItYWN0aXZlLWJnOiAgICAgICR3aGl0ZSAhZGVmYXVsdDtcblxuJGNhcm91c2VsLWNhcHRpb24td2lkdGg6ICAgICAgICAgICAgNzAlICFkZWZhdWx0O1xuJGNhcm91c2VsLWNhcHRpb24tY29sb3I6ICAgICAgICAgICAgJHdoaXRlICFkZWZhdWx0O1xuXG4kY2Fyb3VzZWwtY29udHJvbC1pY29uLXdpZHRoOiAgICAgICAyMHB4ICFkZWZhdWx0O1xuXG4kY2Fyb3VzZWwtY29udHJvbC1wcmV2LWljb24tYmc6ICAgICBzdHItcmVwbGFjZSh1cmwoXCJkYXRhOmltYWdlL3N2Zyt4bWw7Y2hhcnNldD11dGY4LCUzQ3N2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIGZpbGw9JyN7JGNhcm91c2VsLWNvbnRyb2wtY29sb3J9JyB2aWV3Qm94PScwIDAgOCA4JyUzRSUzQ3BhdGggZD0nTTUuMjUgMGwtNCA0IDQgNCAxLjUtMS41LTIuNS0yLjUgMi41LTIuNS0xLjUtMS41eicvJTNFJTNDL3N2ZyUzRVwiKSwgXCIjXCIsIFwiJTIzXCIpICFkZWZhdWx0O1xuJGNhcm91c2VsLWNvbnRyb2wtbmV4dC1pY29uLWJnOiAgICAgc3RyLXJlcGxhY2UodXJsKFwiZGF0YTppbWFnZS9zdmcreG1sO2NoYXJzZXQ9dXRmOCwlM0NzdmcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyBmaWxsPScjeyRjYXJvdXNlbC1jb250cm9sLWNvbG9yfScgdmlld0JveD0nMCAwIDggOCclM0UlM0NwYXRoIGQ9J00yLjc1IDBsLTEuNSAxLjUgMi41IDIuNS0yLjUgMi41IDEuNSAxLjUgNC00LTQtNHonLyUzRSUzQy9zdmclM0VcIiksIFwiI1wiLCBcIiUyM1wiKSAhZGVmYXVsdDtcblxuJGNhcm91c2VsLXRyYW5zaXRpb246ICAgICAgICAgICAgICAgdHJhbnNmb3JtIC42cyBlYXNlICFkZWZhdWx0OyAvLyBEZWZpbmUgdHJhbnNmb3JtIHRyYW5zaXRpb24gZmlyc3QgaWYgdXNpbmcgbXVsdGlwbGUgdHJhbnNpdGlvbnMgKGUuZy4sIGB0cmFuc2Zvcm0gMnMgZWFzZSwgb3BhY2l0eSAuNXMgZWFzZS1vdXRgKVxuXG5cbi8vIENsb3NlXG5cbiRjbG9zZS1mb250LXNpemU6ICAgICAgICAgICAgICAgICAgICRmb250LXNpemUtYmFzZSAqIDEuNSAhZGVmYXVsdDtcbiRjbG9zZS1mb250LXdlaWdodDogICAgICAgICAgICAgICAgICRmb250LXdlaWdodC1ib2xkICFkZWZhdWx0O1xuJGNsb3NlLWNvbG9yOiAgICAgICAgICAgICAgICAgICAgICAgJGJsYWNrICFkZWZhdWx0O1xuJGNsb3NlLXRleHQtc2hhZG93OiAgICAgICAgICAgICAgICAgMCAxcHggMCAkd2hpdGUgIWRlZmF1bHQ7XG5cbi8vIENvZGVcblxuJGNvZGUtZm9udC1zaXplOiAgICAgICAgICAgICAgICAgICAgODcuNSUgIWRlZmF1bHQ7XG4kY29kZS1jb2xvcjogICAgICAgICAgICAgICAgICAgICAgICAkcGluayAhZGVmYXVsdDtcblxuJGtiZC1wYWRkaW5nLXk6ICAgICAgICAgICAgICAgICAgICAgLjJyZW0gIWRlZmF1bHQ7XG4ka2JkLXBhZGRpbmcteDogICAgICAgICAgICAgICAgICAgICAuNHJlbSAhZGVmYXVsdDtcbiRrYmQtZm9udC1zaXplOiAgICAgICAgICAgICAgICAgICAgICRjb2RlLWZvbnQtc2l6ZSAhZGVmYXVsdDtcbiRrYmQtY29sb3I6ICAgICAgICAgICAgICAgICAgICAgICAgICR3aGl0ZSAhZGVmYXVsdDtcbiRrYmQtYmc6ICAgICAgICAgICAgICAgICAgICAgICAgICAgICRncmF5LTkwMCAhZGVmYXVsdDtcblxuJHByZS1jb2xvcjogICAgICAgICAgICAgICAgICAgICAgICAgJGdyYXktOTAwICFkZWZhdWx0O1xuJHByZS1zY3JvbGxhYmxlLW1heC1oZWlnaHQ6ICAgICAgICAgMzQwcHggIWRlZmF1bHQ7XG5cblxuLy8gUHJpbnRpbmdcbiRwcmludC1wYWdlLXNpemU6ICAgICAgICAgICAgICAgICAgIGEzICFkZWZhdWx0O1xuJHByaW50LWJvZHktbWluLXdpZHRoOiAgICAgICAgICAgICAgbWFwLWdldCgkZ3JpZC1icmVha3BvaW50cywgXCJsZ1wiKSAhZGVmYXVsdDtcbiIsIkBpbXBvcnQgdXJsKH5AYW5ndWxhci9tYXRlcmlhbC9wcmVidWlsdC10aGVtZXMvaW5kaWdvLXBpbmsuY3NzKTtcbi8qIVxuICogQm9vdHN0cmFwIFJlYm9vdCB2NC4xLjMgKGh0dHBzOi8vZ2V0Ym9vdHN0cmFwLmNvbS8pXG4gKiBDb3B5cmlnaHQgMjAxMS0yMDE4IFRoZSBCb290c3RyYXAgQXV0aG9yc1xuICogQ29weXJpZ2h0IDIwMTEtMjAxOCBUd2l0dGVyLCBJbmMuXG4gKiBMaWNlbnNlZCB1bmRlciBNSVQgKGh0dHBzOi8vZ2l0aHViLmNvbS90d2JzL2Jvb3RzdHJhcC9ibG9iL21hc3Rlci9MSUNFTlNFKVxuICogRm9ya2VkIGZyb20gTm9ybWFsaXplLmNzcywgbGljZW5zZWQgTUlUIChodHRwczovL2dpdGh1Yi5jb20vbmVjb2xhcy9ub3JtYWxpemUuY3NzL2Jsb2IvbWFzdGVyL0xJQ0VOU0UubWQpXG4gKi9cbiosXG4qOjpiZWZvcmUsXG4qOjphZnRlciB7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7IH1cblxuaHRtbCB7XG4gIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xuICBsaW5lLWhlaWdodDogMS4xNTtcbiAgLXdlYmtpdC10ZXh0LXNpemUtYWRqdXN0OiAxMDAlO1xuICAtbXMtdGV4dC1zaXplLWFkanVzdDogMTAwJTtcbiAgLW1zLW92ZXJmbG93LXN0eWxlOiBzY3JvbGxiYXI7XG4gIC13ZWJraXQtdGFwLWhpZ2hsaWdodC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwKTsgfVxuXG5ALW1zLXZpZXdwb3J0IHtcbiAgd2lkdGg6IGRldmljZS13aWR0aDsgfVxuXG5hcnRpY2xlLCBhc2lkZSwgZmlnY2FwdGlvbiwgZmlndXJlLCBmb290ZXIsIGhlYWRlciwgaGdyb3VwLCBtYWluLCBuYXYsIHNlY3Rpb24ge1xuICBkaXNwbGF5OiBibG9jazsgfVxuXG5ib2R5IHtcbiAgbWFyZ2luOiAwO1xuICBmb250LWZhbWlseTogLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCBcIlNlZ29lIFVJXCIsIFJvYm90bywgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBBcmlhbCwgc2Fucy1zZXJpZiwgXCJBcHBsZSBDb2xvciBFbW9qaVwiLCBcIlNlZ29lIFVJIEVtb2ppXCIsIFwiU2Vnb2UgVUkgU3ltYm9sXCIsIFwiTm90byBDb2xvciBFbW9qaVwiO1xuICBmb250LXNpemU6IDFyZW07XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGxpbmUtaGVpZ2h0OiAxLjU7XG4gIGNvbG9yOiAjMjEyNTI5O1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmOyB9XG5cblt0YWJpbmRleD1cIi0xXCJdOmZvY3VzIHtcbiAgb3V0bGluZTogMCAhaW1wb3J0YW50OyB9XG5cbmhyIHtcbiAgYm94LXNpemluZzogY29udGVudC1ib3g7XG4gIGhlaWdodDogMDtcbiAgb3ZlcmZsb3c6IHZpc2libGU7IH1cblxuaDEsIGgyLCBoMywgaDQsIGg1LCBoNiB7XG4gIG1hcmdpbi10b3A6IDA7XG4gIG1hcmdpbi1ib3R0b206IDAuNXJlbTsgfVxuXG5wIHtcbiAgbWFyZ2luLXRvcDogMDtcbiAgbWFyZ2luLWJvdHRvbTogMXJlbTsgfVxuXG5hYmJyW3RpdGxlXSxcbmFiYnJbZGF0YS1vcmlnaW5hbC10aXRsZV0ge1xuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmUgZG90dGVkO1xuICBjdXJzb3I6IGhlbHA7XG4gIGJvcmRlci1ib3R0b206IDA7IH1cblxuYWRkcmVzcyB7XG4gIG1hcmdpbi1ib3R0b206IDFyZW07XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgbGluZS1oZWlnaHQ6IGluaGVyaXQ7IH1cblxub2wsXG51bCxcbmRsIHtcbiAgbWFyZ2luLXRvcDogMDtcbiAgbWFyZ2luLWJvdHRvbTogMXJlbTsgfVxuXG5vbCBvbCxcbnVsIHVsLFxub2wgdWwsXG51bCBvbCB7XG4gIG1hcmdpbi1ib3R0b206IDA7IH1cblxuZHQge1xuICBmb250LXdlaWdodDogNzAwOyB9XG5cbmRkIHtcbiAgbWFyZ2luLWJvdHRvbTogLjVyZW07XG4gIG1hcmdpbi1sZWZ0OiAwOyB9XG5cbmJsb2NrcXVvdGUge1xuICBtYXJnaW46IDAgMCAxcmVtOyB9XG5cbmRmbiB7XG4gIGZvbnQtc3R5bGU6IGl0YWxpYzsgfVxuXG5iLFxuc3Ryb25nIHtcbiAgZm9udC13ZWlnaHQ6IGJvbGRlcjsgfVxuXG5zbWFsbCB7XG4gIGZvbnQtc2l6ZTogODAlOyB9XG5cbnN1YixcbnN1cCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZm9udC1zaXplOiA3NSU7XG4gIGxpbmUtaGVpZ2h0OiAwO1xuICB2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7IH1cblxuc3ViIHtcbiAgYm90dG9tOiAtLjI1ZW07IH1cblxuc3VwIHtcbiAgdG9wOiAtLjVlbTsgfVxuXG5hIHtcbiAgY29sb3I6ICMwMDdiZmY7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIC13ZWJraXQtdGV4dC1kZWNvcmF0aW9uLXNraXA6IG9iamVjdHM7IH1cbiAgYTpob3ZlciB7XG4gICAgY29sb3I6ICMwMDU2YjM7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7IH1cblxuYTpub3QoW2hyZWZdKTpub3QoW3RhYmluZGV4XSkge1xuICBjb2xvcjogaW5oZXJpdDtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lOyB9XG4gIGE6bm90KFtocmVmXSk6bm90KFt0YWJpbmRleF0pOmhvdmVyLCBhOm5vdChbaHJlZl0pOm5vdChbdGFiaW5kZXhdKTpmb2N1cyB7XG4gICAgY29sb3I6IGluaGVyaXQ7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lOyB9XG4gIGE6bm90KFtocmVmXSk6bm90KFt0YWJpbmRleF0pOmZvY3VzIHtcbiAgICBvdXRsaW5lOiAwOyB9XG5cbnByZSxcbmNvZGUsXG5rYmQsXG5zYW1wIHtcbiAgZm9udC1mYW1pbHk6IFNGTW9uby1SZWd1bGFyLCBNZW5sbywgTW9uYWNvLCBDb25zb2xhcywgXCJMaWJlcmF0aW9uIE1vbm9cIiwgXCJDb3VyaWVyIE5ld1wiLCBtb25vc3BhY2U7XG4gIGZvbnQtc2l6ZTogMWVtOyB9XG5cbnByZSB7XG4gIG1hcmdpbi10b3A6IDA7XG4gIG1hcmdpbi1ib3R0b206IDFyZW07XG4gIG92ZXJmbG93OiBhdXRvO1xuICAtbXMtb3ZlcmZsb3ctc3R5bGU6IHNjcm9sbGJhcjsgfVxuXG5maWd1cmUge1xuICBtYXJnaW46IDAgMCAxcmVtOyB9XG5cbmltZyB7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gIGJvcmRlci1zdHlsZTogbm9uZTsgfVxuXG5zdmcge1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlOyB9XG5cbnRhYmxlIHtcbiAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTsgfVxuXG5jYXB0aW9uIHtcbiAgcGFkZGluZy10b3A6IDAuNzVyZW07XG4gIHBhZGRpbmctYm90dG9tOiAwLjc1cmVtO1xuICBjb2xvcjogIzZjNzU3ZDtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgY2FwdGlvbi1zaWRlOiBib3R0b207IH1cblxudGgge1xuICB0ZXh0LWFsaWduOiBpbmhlcml0OyB9XG5cbmxhYmVsIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBtYXJnaW4tYm90dG9tOiAwLjVyZW07IH1cblxuYnV0dG9uIHtcbiAgYm9yZGVyLXJhZGl1czogMDsgfVxuXG5idXR0b246Zm9jdXMge1xuICBvdXRsaW5lOiAxcHggZG90dGVkO1xuICBvdXRsaW5lOiA1cHggYXV0byAtd2Via2l0LWZvY3VzLXJpbmctY29sb3I7IH1cblxuaW5wdXQsXG5idXR0b24sXG5zZWxlY3QsXG5vcHRncm91cCxcbnRleHRhcmVhIHtcbiAgbWFyZ2luOiAwO1xuICBmb250LWZhbWlseTogaW5oZXJpdDtcbiAgZm9udC1zaXplOiBpbmhlcml0O1xuICBsaW5lLWhlaWdodDogaW5oZXJpdDsgfVxuXG5idXR0b24sXG5pbnB1dCB7XG4gIG92ZXJmbG93OiB2aXNpYmxlOyB9XG5cbmJ1dHRvbixcbnNlbGVjdCB7XG4gIHRleHQtdHJhbnNmb3JtOiBub25lOyB9XG5cbmJ1dHRvbixcbmh0bWwgW3R5cGU9XCJidXR0b25cIl0sXG5bdHlwZT1cInJlc2V0XCJdLFxuW3R5cGU9XCJzdWJtaXRcIl0ge1xuICAtd2Via2l0LWFwcGVhcmFuY2U6IGJ1dHRvbjsgfVxuXG5idXR0b246Oi1tb3otZm9jdXMtaW5uZXIsXG5bdHlwZT1cImJ1dHRvblwiXTo6LW1vei1mb2N1cy1pbm5lcixcblt0eXBlPVwicmVzZXRcIl06Oi1tb3otZm9jdXMtaW5uZXIsXG5bdHlwZT1cInN1Ym1pdFwiXTo6LW1vei1mb2N1cy1pbm5lciB7XG4gIHBhZGRpbmc6IDA7XG4gIGJvcmRlci1zdHlsZTogbm9uZTsgfVxuXG5pbnB1dFt0eXBlPVwicmFkaW9cIl0sXG5pbnB1dFt0eXBlPVwiY2hlY2tib3hcIl0ge1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBwYWRkaW5nOiAwOyB9XG5cbmlucHV0W3R5cGU9XCJkYXRlXCJdLFxuaW5wdXRbdHlwZT1cInRpbWVcIl0sXG5pbnB1dFt0eXBlPVwiZGF0ZXRpbWUtbG9jYWxcIl0sXG5pbnB1dFt0eXBlPVwibW9udGhcIl0ge1xuICAtd2Via2l0LWFwcGVhcmFuY2U6IGxpc3Rib3g7IH1cblxudGV4dGFyZWEge1xuICBvdmVyZmxvdzogYXV0bztcbiAgcmVzaXplOiB2ZXJ0aWNhbDsgfVxuXG5maWVsZHNldCB7XG4gIG1pbi13aWR0aDogMDtcbiAgcGFkZGluZzogMDtcbiAgbWFyZ2luOiAwO1xuICBib3JkZXI6IDA7IH1cblxubGVnZW5kIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXgtd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmc6IDA7XG4gIG1hcmdpbi1ib3R0b206IC41cmVtO1xuICBmb250LXNpemU6IDEuNXJlbTtcbiAgbGluZS1oZWlnaHQ6IGluaGVyaXQ7XG4gIGNvbG9yOiBpbmhlcml0O1xuICB3aGl0ZS1zcGFjZTogbm9ybWFsOyB9XG5cbnByb2dyZXNzIHtcbiAgdmVydGljYWwtYWxpZ246IGJhc2VsaW5lOyB9XG5cblt0eXBlPVwibnVtYmVyXCJdOjotd2Via2l0LWlubmVyLXNwaW4tYnV0dG9uLFxuW3R5cGU9XCJudW1iZXJcIl06Oi13ZWJraXQtb3V0ZXItc3Bpbi1idXR0b24ge1xuICBoZWlnaHQ6IGF1dG87IH1cblxuW3R5cGU9XCJzZWFyY2hcIl0ge1xuICBvdXRsaW5lLW9mZnNldDogLTJweDtcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lOyB9XG5cblt0eXBlPVwic2VhcmNoXCJdOjotd2Via2l0LXNlYXJjaC1jYW5jZWwtYnV0dG9uLFxuW3R5cGU9XCJzZWFyY2hcIl06Oi13ZWJraXQtc2VhcmNoLWRlY29yYXRpb24ge1xuICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7IH1cblxuOjotd2Via2l0LWZpbGUtdXBsb2FkLWJ1dHRvbiB7XG4gIGZvbnQ6IGluaGVyaXQ7XG4gIC13ZWJraXQtYXBwZWFyYW5jZTogYnV0dG9uOyB9XG5cbm91dHB1dCB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jazsgfVxuXG5zdW1tYXJ5IHtcbiAgZGlzcGxheTogbGlzdC1pdGVtO1xuICBjdXJzb3I6IHBvaW50ZXI7IH1cblxudGVtcGxhdGUge1xuICBkaXNwbGF5OiBub25lOyB9XG5cbltoaWRkZW5dIHtcbiAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50OyB9XG5cbi8qIVxuICogQm9vdHN0cmFwIEdyaWQgdjQuMS4zIChodHRwczovL2dldGJvb3RzdHJhcC5jb20vKVxuICogQ29weXJpZ2h0IDIwMTEtMjAxOCBUaGUgQm9vdHN0cmFwIEF1dGhvcnNcbiAqIENvcHlyaWdodCAyMDExLTIwMTggVHdpdHRlciwgSW5jLlxuICogTGljZW5zZWQgdW5kZXIgTUlUIChodHRwczovL2dpdGh1Yi5jb20vdHdicy9ib290c3RyYXAvYmxvYi9tYXN0ZXIvTElDRU5TRSlcbiAqL1xuQC1tcy12aWV3cG9ydCB7XG4gIHdpZHRoOiBkZXZpY2Utd2lkdGg7IH1cblxuaHRtbCB7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIC1tcy1vdmVyZmxvdy1zdHlsZTogc2Nyb2xsYmFyOyB9XG5cbiosXG4qOjpiZWZvcmUsXG4qOjphZnRlciB7XG4gIGJveC1zaXppbmc6IGluaGVyaXQ7IH1cblxuLmNvbnRhaW5lciB7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nLXJpZ2h0OiAxNXB4O1xuICBwYWRkaW5nLWxlZnQ6IDE1cHg7XG4gIG1hcmdpbi1yaWdodDogYXV0bztcbiAgbWFyZ2luLWxlZnQ6IGF1dG87IH1cbiAgQG1lZGlhIChtaW4td2lkdGg6IDU3NnB4KSB7XG4gICAgLmNvbnRhaW5lciB7XG4gICAgICBtYXgtd2lkdGg6IDU0MHB4OyB9IH1cbiAgQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSB7XG4gICAgLmNvbnRhaW5lciB7XG4gICAgICBtYXgtd2lkdGg6IDcyMHB4OyB9IH1cbiAgQG1lZGlhIChtaW4td2lkdGg6IDk5MnB4KSB7XG4gICAgLmNvbnRhaW5lciB7XG4gICAgICBtYXgtd2lkdGg6IDk2MHB4OyB9IH1cbiAgQG1lZGlhIChtaW4td2lkdGg6IDEyMDBweCkge1xuICAgIC5jb250YWluZXIge1xuICAgICAgbWF4LXdpZHRoOiAxMTQwcHg7IH0gfVxuXG4uY29udGFpbmVyLWZsdWlkIHtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmctcmlnaHQ6IDE1cHg7XG4gIHBhZGRpbmctbGVmdDogMTVweDtcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICBtYXJnaW4tbGVmdDogYXV0bzsgfVxuXG4ucm93IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC13cmFwOiB3cmFwO1xuICBtYXJnaW4tcmlnaHQ6IC0xNXB4O1xuICBtYXJnaW4tbGVmdDogLTE1cHg7IH1cblxuLm5vLWd1dHRlcnMge1xuICBtYXJnaW4tcmlnaHQ6IDA7XG4gIG1hcmdpbi1sZWZ0OiAwOyB9XG4gIC5uby1ndXR0ZXJzID4gLmNvbCxcbiAgLm5vLWd1dHRlcnMgPiBbY2xhc3MqPVwiY29sLVwiXSB7XG4gICAgcGFkZGluZy1yaWdodDogMDtcbiAgICBwYWRkaW5nLWxlZnQ6IDA7IH1cblxuLmNvbC0xLCAuY29sLTIsIC5jb2wtMywgLmNvbC00LCAuY29sLTUsIC5jb2wtNiwgLmNvbC03LCAuY29sLTgsIC5jb2wtOSwgLmNvbC0xMCwgLmNvbC0xMSwgLmNvbC0xMiwgLmNvbCxcbi5jb2wtYXV0bywgLmNvbC1zbS0xLCAuY29sLXNtLTIsIC5jb2wtc20tMywgLmNvbC1zbS00LCAuY29sLXNtLTUsIC5jb2wtc20tNiwgLmNvbC1zbS03LCAuY29sLXNtLTgsIC5jb2wtc20tOSwgLmNvbC1zbS0xMCwgLmNvbC1zbS0xMSwgLmNvbC1zbS0xMiwgLmNvbC1zbSxcbi5jb2wtc20tYXV0bywgLmNvbC1tZC0xLCAuY29sLW1kLTIsIC5jb2wtbWQtMywgLmNvbC1tZC00LCAuY29sLW1kLTUsIC5jb2wtbWQtNiwgLmNvbC1tZC03LCAuY29sLW1kLTgsIC5jb2wtbWQtOSwgLmNvbC1tZC0xMCwgLmNvbC1tZC0xMSwgLmNvbC1tZC0xMiwgLmNvbC1tZCxcbi5jb2wtbWQtYXV0bywgLmNvbC1sZy0xLCAuY29sLWxnLTIsIC5jb2wtbGctMywgLmNvbC1sZy00LCAuY29sLWxnLTUsIC5jb2wtbGctNiwgLmNvbC1sZy03LCAuY29sLWxnLTgsIC5jb2wtbGctOSwgLmNvbC1sZy0xMCwgLmNvbC1sZy0xMSwgLmNvbC1sZy0xMiwgLmNvbC1sZyxcbi5jb2wtbGctYXV0bywgLmNvbC14bC0xLCAuY29sLXhsLTIsIC5jb2wteGwtMywgLmNvbC14bC00LCAuY29sLXhsLTUsIC5jb2wteGwtNiwgLmNvbC14bC03LCAuY29sLXhsLTgsIC5jb2wteGwtOSwgLmNvbC14bC0xMCwgLmNvbC14bC0xMSwgLmNvbC14bC0xMiwgLmNvbC14bCxcbi5jb2wteGwtYXV0byB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgd2lkdGg6IDEwMCU7XG4gIG1pbi1oZWlnaHQ6IDFweDtcbiAgcGFkZGluZy1yaWdodDogMTVweDtcbiAgcGFkZGluZy1sZWZ0OiAxNXB4OyB9XG5cbi5jb2wge1xuICBmbGV4LWJhc2lzOiAwO1xuICBmbGV4LWdyb3c6IDE7XG4gIG1heC13aWR0aDogMTAwJTsgfVxuXG4uY29sLWF1dG8ge1xuICBmbGV4OiAwIDAgYXV0bztcbiAgd2lkdGg6IGF1dG87XG4gIG1heC13aWR0aDogbm9uZTsgfVxuXG4uY29sLTEge1xuICBmbGV4OiAwIDAgOC4zMzMzMzMzMyU7XG4gIG1heC13aWR0aDogOC4zMzMzMzMzMyU7IH1cblxuLmNvbC0yIHtcbiAgZmxleDogMCAwIDE2LjY2NjY2NjY3JTtcbiAgbWF4LXdpZHRoOiAxNi42NjY2NjY2NyU7IH1cblxuLmNvbC0zIHtcbiAgZmxleDogMCAwIDI1JTtcbiAgbWF4LXdpZHRoOiAyNSU7IH1cblxuLmNvbC00IHtcbiAgZmxleDogMCAwIDMzLjMzMzMzMzMzJTtcbiAgbWF4LXdpZHRoOiAzMy4zMzMzMzMzMyU7IH1cblxuLmNvbC01IHtcbiAgZmxleDogMCAwIDQxLjY2NjY2NjY3JTtcbiAgbWF4LXdpZHRoOiA0MS42NjY2NjY2NyU7IH1cblxuLmNvbC02IHtcbiAgZmxleDogMCAwIDUwJTtcbiAgbWF4LXdpZHRoOiA1MCU7IH1cblxuLmNvbC03IHtcbiAgZmxleDogMCAwIDU4LjMzMzMzMzMzJTtcbiAgbWF4LXdpZHRoOiA1OC4zMzMzMzMzMyU7IH1cblxuLmNvbC04IHtcbiAgZmxleDogMCAwIDY2LjY2NjY2NjY3JTtcbiAgbWF4LXdpZHRoOiA2Ni42NjY2NjY2NyU7IH1cblxuLmNvbC05IHtcbiAgZmxleDogMCAwIDc1JTtcbiAgbWF4LXdpZHRoOiA3NSU7IH1cblxuLmNvbC0xMCB7XG4gIGZsZXg6IDAgMCA4My4zMzMzMzMzMyU7XG4gIG1heC13aWR0aDogODMuMzMzMzMzMzMlOyB9XG5cbi5jb2wtMTEge1xuICBmbGV4OiAwIDAgOTEuNjY2NjY2NjclO1xuICBtYXgtd2lkdGg6IDkxLjY2NjY2NjY3JTsgfVxuXG4uY29sLTEyIHtcbiAgZmxleDogMCAwIDEwMCU7XG4gIG1heC13aWR0aDogMTAwJTsgfVxuXG4ub3JkZXItZmlyc3Qge1xuICBvcmRlcjogLTE7IH1cblxuLm9yZGVyLWxhc3Qge1xuICBvcmRlcjogMTM7IH1cblxuLm9yZGVyLTAge1xuICBvcmRlcjogMDsgfVxuXG4ub3JkZXItMSB7XG4gIG9yZGVyOiAxOyB9XG5cbi5vcmRlci0yIHtcbiAgb3JkZXI6IDI7IH1cblxuLm9yZGVyLTMge1xuICBvcmRlcjogMzsgfVxuXG4ub3JkZXItNCB7XG4gIG9yZGVyOiA0OyB9XG5cbi5vcmRlci01IHtcbiAgb3JkZXI6IDU7IH1cblxuLm9yZGVyLTYge1xuICBvcmRlcjogNjsgfVxuXG4ub3JkZXItNyB7XG4gIG9yZGVyOiA3OyB9XG5cbi5vcmRlci04IHtcbiAgb3JkZXI6IDg7IH1cblxuLm9yZGVyLTkge1xuICBvcmRlcjogOTsgfVxuXG4ub3JkZXItMTAge1xuICBvcmRlcjogMTA7IH1cblxuLm9yZGVyLTExIHtcbiAgb3JkZXI6IDExOyB9XG5cbi5vcmRlci0xMiB7XG4gIG9yZGVyOiAxMjsgfVxuXG4ub2Zmc2V0LTEge1xuICBtYXJnaW4tbGVmdDogOC4zMzMzMzMzMyU7IH1cblxuLm9mZnNldC0yIHtcbiAgbWFyZ2luLWxlZnQ6IDE2LjY2NjY2NjY3JTsgfVxuXG4ub2Zmc2V0LTMge1xuICBtYXJnaW4tbGVmdDogMjUlOyB9XG5cbi5vZmZzZXQtNCB7XG4gIG1hcmdpbi1sZWZ0OiAzMy4zMzMzMzMzMyU7IH1cblxuLm9mZnNldC01IHtcbiAgbWFyZ2luLWxlZnQ6IDQxLjY2NjY2NjY3JTsgfVxuXG4ub2Zmc2V0LTYge1xuICBtYXJnaW4tbGVmdDogNTAlOyB9XG5cbi5vZmZzZXQtNyB7XG4gIG1hcmdpbi1sZWZ0OiA1OC4zMzMzMzMzMyU7IH1cblxuLm9mZnNldC04IHtcbiAgbWFyZ2luLWxlZnQ6IDY2LjY2NjY2NjY3JTsgfVxuXG4ub2Zmc2V0LTkge1xuICBtYXJnaW4tbGVmdDogNzUlOyB9XG5cbi5vZmZzZXQtMTAge1xuICBtYXJnaW4tbGVmdDogODMuMzMzMzMzMzMlOyB9XG5cbi5vZmZzZXQtMTEge1xuICBtYXJnaW4tbGVmdDogOTEuNjY2NjY2NjclOyB9XG5cbkBtZWRpYSAobWluLXdpZHRoOiA1NzZweCkge1xuICAuY29sLXNtIHtcbiAgICBmbGV4LWJhc2lzOiAwO1xuICAgIGZsZXgtZ3JvdzogMTtcbiAgICBtYXgtd2lkdGg6IDEwMCU7IH1cbiAgLmNvbC1zbS1hdXRvIHtcbiAgICBmbGV4OiAwIDAgYXV0bztcbiAgICB3aWR0aDogYXV0bztcbiAgICBtYXgtd2lkdGg6IG5vbmU7IH1cbiAgLmNvbC1zbS0xIHtcbiAgICBmbGV4OiAwIDAgOC4zMzMzMzMzMyU7XG4gICAgbWF4LXdpZHRoOiA4LjMzMzMzMzMzJTsgfVxuICAuY29sLXNtLTIge1xuICAgIGZsZXg6IDAgMCAxNi42NjY2NjY2NyU7XG4gICAgbWF4LXdpZHRoOiAxNi42NjY2NjY2NyU7IH1cbiAgLmNvbC1zbS0zIHtcbiAgICBmbGV4OiAwIDAgMjUlO1xuICAgIG1heC13aWR0aDogMjUlOyB9XG4gIC5jb2wtc20tNCB7XG4gICAgZmxleDogMCAwIDMzLjMzMzMzMzMzJTtcbiAgICBtYXgtd2lkdGg6IDMzLjMzMzMzMzMzJTsgfVxuICAuY29sLXNtLTUge1xuICAgIGZsZXg6IDAgMCA0MS42NjY2NjY2NyU7XG4gICAgbWF4LXdpZHRoOiA0MS42NjY2NjY2NyU7IH1cbiAgLmNvbC1zbS02IHtcbiAgICBmbGV4OiAwIDAgNTAlO1xuICAgIG1heC13aWR0aDogNTAlOyB9XG4gIC5jb2wtc20tNyB7XG4gICAgZmxleDogMCAwIDU4LjMzMzMzMzMzJTtcbiAgICBtYXgtd2lkdGg6IDU4LjMzMzMzMzMzJTsgfVxuICAuY29sLXNtLTgge1xuICAgIGZsZXg6IDAgMCA2Ni42NjY2NjY2NyU7XG4gICAgbWF4LXdpZHRoOiA2Ni42NjY2NjY2NyU7IH1cbiAgLmNvbC1zbS05IHtcbiAgICBmbGV4OiAwIDAgNzUlO1xuICAgIG1heC13aWR0aDogNzUlOyB9XG4gIC5jb2wtc20tMTAge1xuICAgIGZsZXg6IDAgMCA4My4zMzMzMzMzMyU7XG4gICAgbWF4LXdpZHRoOiA4My4zMzMzMzMzMyU7IH1cbiAgLmNvbC1zbS0xMSB7XG4gICAgZmxleDogMCAwIDkxLjY2NjY2NjY3JTtcbiAgICBtYXgtd2lkdGg6IDkxLjY2NjY2NjY3JTsgfVxuICAuY29sLXNtLTEyIHtcbiAgICBmbGV4OiAwIDAgMTAwJTtcbiAgICBtYXgtd2lkdGg6IDEwMCU7IH1cbiAgLm9yZGVyLXNtLWZpcnN0IHtcbiAgICBvcmRlcjogLTE7IH1cbiAgLm9yZGVyLXNtLWxhc3Qge1xuICAgIG9yZGVyOiAxMzsgfVxuICAub3JkZXItc20tMCB7XG4gICAgb3JkZXI6IDA7IH1cbiAgLm9yZGVyLXNtLTEge1xuICAgIG9yZGVyOiAxOyB9XG4gIC5vcmRlci1zbS0yIHtcbiAgICBvcmRlcjogMjsgfVxuICAub3JkZXItc20tMyB7XG4gICAgb3JkZXI6IDM7IH1cbiAgLm9yZGVyLXNtLTQge1xuICAgIG9yZGVyOiA0OyB9XG4gIC5vcmRlci1zbS01IHtcbiAgICBvcmRlcjogNTsgfVxuICAub3JkZXItc20tNiB7XG4gICAgb3JkZXI6IDY7IH1cbiAgLm9yZGVyLXNtLTcge1xuICAgIG9yZGVyOiA3OyB9XG4gIC5vcmRlci1zbS04IHtcbiAgICBvcmRlcjogODsgfVxuICAub3JkZXItc20tOSB7XG4gICAgb3JkZXI6IDk7IH1cbiAgLm9yZGVyLXNtLTEwIHtcbiAgICBvcmRlcjogMTA7IH1cbiAgLm9yZGVyLXNtLTExIHtcbiAgICBvcmRlcjogMTE7IH1cbiAgLm9yZGVyLXNtLTEyIHtcbiAgICBvcmRlcjogMTI7IH1cbiAgLm9mZnNldC1zbS0wIHtcbiAgICBtYXJnaW4tbGVmdDogMDsgfVxuICAub2Zmc2V0LXNtLTEge1xuICAgIG1hcmdpbi1sZWZ0OiA4LjMzMzMzMzMzJTsgfVxuICAub2Zmc2V0LXNtLTIge1xuICAgIG1hcmdpbi1sZWZ0OiAxNi42NjY2NjY2NyU7IH1cbiAgLm9mZnNldC1zbS0zIHtcbiAgICBtYXJnaW4tbGVmdDogMjUlOyB9XG4gIC5vZmZzZXQtc20tNCB7XG4gICAgbWFyZ2luLWxlZnQ6IDMzLjMzMzMzMzMzJTsgfVxuICAub2Zmc2V0LXNtLTUge1xuICAgIG1hcmdpbi1sZWZ0OiA0MS42NjY2NjY2NyU7IH1cbiAgLm9mZnNldC1zbS02IHtcbiAgICBtYXJnaW4tbGVmdDogNTAlOyB9XG4gIC5vZmZzZXQtc20tNyB7XG4gICAgbWFyZ2luLWxlZnQ6IDU4LjMzMzMzMzMzJTsgfVxuICAub2Zmc2V0LXNtLTgge1xuICAgIG1hcmdpbi1sZWZ0OiA2Ni42NjY2NjY2NyU7IH1cbiAgLm9mZnNldC1zbS05IHtcbiAgICBtYXJnaW4tbGVmdDogNzUlOyB9XG4gIC5vZmZzZXQtc20tMTAge1xuICAgIG1hcmdpbi1sZWZ0OiA4My4zMzMzMzMzMyU7IH1cbiAgLm9mZnNldC1zbS0xMSB7XG4gICAgbWFyZ2luLWxlZnQ6IDkxLjY2NjY2NjY3JTsgfSB9XG5cbkBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkge1xuICAuY29sLW1kIHtcbiAgICBmbGV4LWJhc2lzOiAwO1xuICAgIGZsZXgtZ3JvdzogMTtcbiAgICBtYXgtd2lkdGg6IDEwMCU7IH1cbiAgLmNvbC1tZC1hdXRvIHtcbiAgICBmbGV4OiAwIDAgYXV0bztcbiAgICB3aWR0aDogYXV0bztcbiAgICBtYXgtd2lkdGg6IG5vbmU7IH1cbiAgLmNvbC1tZC0xIHtcbiAgICBmbGV4OiAwIDAgOC4zMzMzMzMzMyU7XG4gICAgbWF4LXdpZHRoOiA4LjMzMzMzMzMzJTsgfVxuICAuY29sLW1kLTIge1xuICAgIGZsZXg6IDAgMCAxNi42NjY2NjY2NyU7XG4gICAgbWF4LXdpZHRoOiAxNi42NjY2NjY2NyU7IH1cbiAgLmNvbC1tZC0zIHtcbiAgICBmbGV4OiAwIDAgMjUlO1xuICAgIG1heC13aWR0aDogMjUlOyB9XG4gIC5jb2wtbWQtNCB7XG4gICAgZmxleDogMCAwIDMzLjMzMzMzMzMzJTtcbiAgICBtYXgtd2lkdGg6IDMzLjMzMzMzMzMzJTsgfVxuICAuY29sLW1kLTUge1xuICAgIGZsZXg6IDAgMCA0MS42NjY2NjY2NyU7XG4gICAgbWF4LXdpZHRoOiA0MS42NjY2NjY2NyU7IH1cbiAgLmNvbC1tZC02IHtcbiAgICBmbGV4OiAwIDAgNTAlO1xuICAgIG1heC13aWR0aDogNTAlOyB9XG4gIC5jb2wtbWQtNyB7XG4gICAgZmxleDogMCAwIDU4LjMzMzMzMzMzJTtcbiAgICBtYXgtd2lkdGg6IDU4LjMzMzMzMzMzJTsgfVxuICAuY29sLW1kLTgge1xuICAgIGZsZXg6IDAgMCA2Ni42NjY2NjY2NyU7XG4gICAgbWF4LXdpZHRoOiA2Ni42NjY2NjY2NyU7IH1cbiAgLmNvbC1tZC05IHtcbiAgICBmbGV4OiAwIDAgNzUlO1xuICAgIG1heC13aWR0aDogNzUlOyB9XG4gIC5jb2wtbWQtMTAge1xuICAgIGZsZXg6IDAgMCA4My4zMzMzMzMzMyU7XG4gICAgbWF4LXdpZHRoOiA4My4zMzMzMzMzMyU7IH1cbiAgLmNvbC1tZC0xMSB7XG4gICAgZmxleDogMCAwIDkxLjY2NjY2NjY3JTtcbiAgICBtYXgtd2lkdGg6IDkxLjY2NjY2NjY3JTsgfVxuICAuY29sLW1kLTEyIHtcbiAgICBmbGV4OiAwIDAgMTAwJTtcbiAgICBtYXgtd2lkdGg6IDEwMCU7IH1cbiAgLm9yZGVyLW1kLWZpcnN0IHtcbiAgICBvcmRlcjogLTE7IH1cbiAgLm9yZGVyLW1kLWxhc3Qge1xuICAgIG9yZGVyOiAxMzsgfVxuICAub3JkZXItbWQtMCB7XG4gICAgb3JkZXI6IDA7IH1cbiAgLm9yZGVyLW1kLTEge1xuICAgIG9yZGVyOiAxOyB9XG4gIC5vcmRlci1tZC0yIHtcbiAgICBvcmRlcjogMjsgfVxuICAub3JkZXItbWQtMyB7XG4gICAgb3JkZXI6IDM7IH1cbiAgLm9yZGVyLW1kLTQge1xuICAgIG9yZGVyOiA0OyB9XG4gIC5vcmRlci1tZC01IHtcbiAgICBvcmRlcjogNTsgfVxuICAub3JkZXItbWQtNiB7XG4gICAgb3JkZXI6IDY7IH1cbiAgLm9yZGVyLW1kLTcge1xuICAgIG9yZGVyOiA3OyB9XG4gIC5vcmRlci1tZC04IHtcbiAgICBvcmRlcjogODsgfVxuICAub3JkZXItbWQtOSB7XG4gICAgb3JkZXI6IDk7IH1cbiAgLm9yZGVyLW1kLTEwIHtcbiAgICBvcmRlcjogMTA7IH1cbiAgLm9yZGVyLW1kLTExIHtcbiAgICBvcmRlcjogMTE7IH1cbiAgLm9yZGVyLW1kLTEyIHtcbiAgICBvcmRlcjogMTI7IH1cbiAgLm9mZnNldC1tZC0wIHtcbiAgICBtYXJnaW4tbGVmdDogMDsgfVxuICAub2Zmc2V0LW1kLTEge1xuICAgIG1hcmdpbi1sZWZ0OiA4LjMzMzMzMzMzJTsgfVxuICAub2Zmc2V0LW1kLTIge1xuICAgIG1hcmdpbi1sZWZ0OiAxNi42NjY2NjY2NyU7IH1cbiAgLm9mZnNldC1tZC0zIHtcbiAgICBtYXJnaW4tbGVmdDogMjUlOyB9XG4gIC5vZmZzZXQtbWQtNCB7XG4gICAgbWFyZ2luLWxlZnQ6IDMzLjMzMzMzMzMzJTsgfVxuICAub2Zmc2V0LW1kLTUge1xuICAgIG1hcmdpbi1sZWZ0OiA0MS42NjY2NjY2NyU7IH1cbiAgLm9mZnNldC1tZC02IHtcbiAgICBtYXJnaW4tbGVmdDogNTAlOyB9XG4gIC5vZmZzZXQtbWQtNyB7XG4gICAgbWFyZ2luLWxlZnQ6IDU4LjMzMzMzMzMzJTsgfVxuICAub2Zmc2V0LW1kLTgge1xuICAgIG1hcmdpbi1sZWZ0OiA2Ni42NjY2NjY2NyU7IH1cbiAgLm9mZnNldC1tZC05IHtcbiAgICBtYXJnaW4tbGVmdDogNzUlOyB9XG4gIC5vZmZzZXQtbWQtMTAge1xuICAgIG1hcmdpbi1sZWZ0OiA4My4zMzMzMzMzMyU7IH1cbiAgLm9mZnNldC1tZC0xMSB7XG4gICAgbWFyZ2luLWxlZnQ6IDkxLjY2NjY2NjY3JTsgfSB9XG5cbkBtZWRpYSAobWluLXdpZHRoOiA5OTJweCkge1xuICAuY29sLWxnIHtcbiAgICBmbGV4LWJhc2lzOiAwO1xuICAgIGZsZXgtZ3JvdzogMTtcbiAgICBtYXgtd2lkdGg6IDEwMCU7IH1cbiAgLmNvbC1sZy1hdXRvIHtcbiAgICBmbGV4OiAwIDAgYXV0bztcbiAgICB3aWR0aDogYXV0bztcbiAgICBtYXgtd2lkdGg6IG5vbmU7IH1cbiAgLmNvbC1sZy0xIHtcbiAgICBmbGV4OiAwIDAgOC4zMzMzMzMzMyU7XG4gICAgbWF4LXdpZHRoOiA4LjMzMzMzMzMzJTsgfVxuICAuY29sLWxnLTIge1xuICAgIGZsZXg6IDAgMCAxNi42NjY2NjY2NyU7XG4gICAgbWF4LXdpZHRoOiAxNi42NjY2NjY2NyU7IH1cbiAgLmNvbC1sZy0zIHtcbiAgICBmbGV4OiAwIDAgMjUlO1xuICAgIG1heC13aWR0aDogMjUlOyB9XG4gIC5jb2wtbGctNCB7XG4gICAgZmxleDogMCAwIDMzLjMzMzMzMzMzJTtcbiAgICBtYXgtd2lkdGg6IDMzLjMzMzMzMzMzJTsgfVxuICAuY29sLWxnLTUge1xuICAgIGZsZXg6IDAgMCA0MS42NjY2NjY2NyU7XG4gICAgbWF4LXdpZHRoOiA0MS42NjY2NjY2NyU7IH1cbiAgLmNvbC1sZy02IHtcbiAgICBmbGV4OiAwIDAgNTAlO1xuICAgIG1heC13aWR0aDogNTAlOyB9XG4gIC5jb2wtbGctNyB7XG4gICAgZmxleDogMCAwIDU4LjMzMzMzMzMzJTtcbiAgICBtYXgtd2lkdGg6IDU4LjMzMzMzMzMzJTsgfVxuICAuY29sLWxnLTgge1xuICAgIGZsZXg6IDAgMCA2Ni42NjY2NjY2NyU7XG4gICAgbWF4LXdpZHRoOiA2Ni42NjY2NjY2NyU7IH1cbiAgLmNvbC1sZy05IHtcbiAgICBmbGV4OiAwIDAgNzUlO1xuICAgIG1heC13aWR0aDogNzUlOyB9XG4gIC5jb2wtbGctMTAge1xuICAgIGZsZXg6IDAgMCA4My4zMzMzMzMzMyU7XG4gICAgbWF4LXdpZHRoOiA4My4zMzMzMzMzMyU7IH1cbiAgLmNvbC1sZy0xMSB7XG4gICAgZmxleDogMCAwIDkxLjY2NjY2NjY3JTtcbiAgICBtYXgtd2lkdGg6IDkxLjY2NjY2NjY3JTsgfVxuICAuY29sLWxnLTEyIHtcbiAgICBmbGV4OiAwIDAgMTAwJTtcbiAgICBtYXgtd2lkdGg6IDEwMCU7IH1cbiAgLm9yZGVyLWxnLWZpcnN0IHtcbiAgICBvcmRlcjogLTE7IH1cbiAgLm9yZGVyLWxnLWxhc3Qge1xuICAgIG9yZGVyOiAxMzsgfVxuICAub3JkZXItbGctMCB7XG4gICAgb3JkZXI6IDA7IH1cbiAgLm9yZGVyLWxnLTEge1xuICAgIG9yZGVyOiAxOyB9XG4gIC5vcmRlci1sZy0yIHtcbiAgICBvcmRlcjogMjsgfVxuICAub3JkZXItbGctMyB7XG4gICAgb3JkZXI6IDM7IH1cbiAgLm9yZGVyLWxnLTQge1xuICAgIG9yZGVyOiA0OyB9XG4gIC5vcmRlci1sZy01IHtcbiAgICBvcmRlcjogNTsgfVxuICAub3JkZXItbGctNiB7XG4gICAgb3JkZXI6IDY7IH1cbiAgLm9yZGVyLWxnLTcge1xuICAgIG9yZGVyOiA3OyB9XG4gIC5vcmRlci1sZy04IHtcbiAgICBvcmRlcjogODsgfVxuICAub3JkZXItbGctOSB7XG4gICAgb3JkZXI6IDk7IH1cbiAgLm9yZGVyLWxnLTEwIHtcbiAgICBvcmRlcjogMTA7IH1cbiAgLm9yZGVyLWxnLTExIHtcbiAgICBvcmRlcjogMTE7IH1cbiAgLm9yZGVyLWxnLTEyIHtcbiAgICBvcmRlcjogMTI7IH1cbiAgLm9mZnNldC1sZy0wIHtcbiAgICBtYXJnaW4tbGVmdDogMDsgfVxuICAub2Zmc2V0LWxnLTEge1xuICAgIG1hcmdpbi1sZWZ0OiA4LjMzMzMzMzMzJTsgfVxuICAub2Zmc2V0LWxnLTIge1xuICAgIG1hcmdpbi1sZWZ0OiAxNi42NjY2NjY2NyU7IH1cbiAgLm9mZnNldC1sZy0zIHtcbiAgICBtYXJnaW4tbGVmdDogMjUlOyB9XG4gIC5vZmZzZXQtbGctNCB7XG4gICAgbWFyZ2luLWxlZnQ6IDMzLjMzMzMzMzMzJTsgfVxuICAub2Zmc2V0LWxnLTUge1xuICAgIG1hcmdpbi1sZWZ0OiA0MS42NjY2NjY2NyU7IH1cbiAgLm9mZnNldC1sZy02IHtcbiAgICBtYXJnaW4tbGVmdDogNTAlOyB9XG4gIC5vZmZzZXQtbGctNyB7XG4gICAgbWFyZ2luLWxlZnQ6IDU4LjMzMzMzMzMzJTsgfVxuICAub2Zmc2V0LWxnLTgge1xuICAgIG1hcmdpbi1sZWZ0OiA2Ni42NjY2NjY2NyU7IH1cbiAgLm9mZnNldC1sZy05IHtcbiAgICBtYXJnaW4tbGVmdDogNzUlOyB9XG4gIC5vZmZzZXQtbGctMTAge1xuICAgIG1hcmdpbi1sZWZ0OiA4My4zMzMzMzMzMyU7IH1cbiAgLm9mZnNldC1sZy0xMSB7XG4gICAgbWFyZ2luLWxlZnQ6IDkxLjY2NjY2NjY3JTsgfSB9XG5cbkBtZWRpYSAobWluLXdpZHRoOiAxMjAwcHgpIHtcbiAgLmNvbC14bCB7XG4gICAgZmxleC1iYXNpczogMDtcbiAgICBmbGV4LWdyb3c6IDE7XG4gICAgbWF4LXdpZHRoOiAxMDAlOyB9XG4gIC5jb2wteGwtYXV0byB7XG4gICAgZmxleDogMCAwIGF1dG87XG4gICAgd2lkdGg6IGF1dG87XG4gICAgbWF4LXdpZHRoOiBub25lOyB9XG4gIC5jb2wteGwtMSB7XG4gICAgZmxleDogMCAwIDguMzMzMzMzMzMlO1xuICAgIG1heC13aWR0aDogOC4zMzMzMzMzMyU7IH1cbiAgLmNvbC14bC0yIHtcbiAgICBmbGV4OiAwIDAgMTYuNjY2NjY2NjclO1xuICAgIG1heC13aWR0aDogMTYuNjY2NjY2NjclOyB9XG4gIC5jb2wteGwtMyB7XG4gICAgZmxleDogMCAwIDI1JTtcbiAgICBtYXgtd2lkdGg6IDI1JTsgfVxuICAuY29sLXhsLTQge1xuICAgIGZsZXg6IDAgMCAzMy4zMzMzMzMzMyU7XG4gICAgbWF4LXdpZHRoOiAzMy4zMzMzMzMzMyU7IH1cbiAgLmNvbC14bC01IHtcbiAgICBmbGV4OiAwIDAgNDEuNjY2NjY2NjclO1xuICAgIG1heC13aWR0aDogNDEuNjY2NjY2NjclOyB9XG4gIC5jb2wteGwtNiB7XG4gICAgZmxleDogMCAwIDUwJTtcbiAgICBtYXgtd2lkdGg6IDUwJTsgfVxuICAuY29sLXhsLTcge1xuICAgIGZsZXg6IDAgMCA1OC4zMzMzMzMzMyU7XG4gICAgbWF4LXdpZHRoOiA1OC4zMzMzMzMzMyU7IH1cbiAgLmNvbC14bC04IHtcbiAgICBmbGV4OiAwIDAgNjYuNjY2NjY2NjclO1xuICAgIG1heC13aWR0aDogNjYuNjY2NjY2NjclOyB9XG4gIC5jb2wteGwtOSB7XG4gICAgZmxleDogMCAwIDc1JTtcbiAgICBtYXgtd2lkdGg6IDc1JTsgfVxuICAuY29sLXhsLTEwIHtcbiAgICBmbGV4OiAwIDAgODMuMzMzMzMzMzMlO1xuICAgIG1heC13aWR0aDogODMuMzMzMzMzMzMlOyB9XG4gIC5jb2wteGwtMTEge1xuICAgIGZsZXg6IDAgMCA5MS42NjY2NjY2NyU7XG4gICAgbWF4LXdpZHRoOiA5MS42NjY2NjY2NyU7IH1cbiAgLmNvbC14bC0xMiB7XG4gICAgZmxleDogMCAwIDEwMCU7XG4gICAgbWF4LXdpZHRoOiAxMDAlOyB9XG4gIC5vcmRlci14bC1maXJzdCB7XG4gICAgb3JkZXI6IC0xOyB9XG4gIC5vcmRlci14bC1sYXN0IHtcbiAgICBvcmRlcjogMTM7IH1cbiAgLm9yZGVyLXhsLTAge1xuICAgIG9yZGVyOiAwOyB9XG4gIC5vcmRlci14bC0xIHtcbiAgICBvcmRlcjogMTsgfVxuICAub3JkZXIteGwtMiB7XG4gICAgb3JkZXI6IDI7IH1cbiAgLm9yZGVyLXhsLTMge1xuICAgIG9yZGVyOiAzOyB9XG4gIC5vcmRlci14bC00IHtcbiAgICBvcmRlcjogNDsgfVxuICAub3JkZXIteGwtNSB7XG4gICAgb3JkZXI6IDU7IH1cbiAgLm9yZGVyLXhsLTYge1xuICAgIG9yZGVyOiA2OyB9XG4gIC5vcmRlci14bC03IHtcbiAgICBvcmRlcjogNzsgfVxuICAub3JkZXIteGwtOCB7XG4gICAgb3JkZXI6IDg7IH1cbiAgLm9yZGVyLXhsLTkge1xuICAgIG9yZGVyOiA5OyB9XG4gIC5vcmRlci14bC0xMCB7XG4gICAgb3JkZXI6IDEwOyB9XG4gIC5vcmRlci14bC0xMSB7XG4gICAgb3JkZXI6IDExOyB9XG4gIC5vcmRlci14bC0xMiB7XG4gICAgb3JkZXI6IDEyOyB9XG4gIC5vZmZzZXQteGwtMCB7XG4gICAgbWFyZ2luLWxlZnQ6IDA7IH1cbiAgLm9mZnNldC14bC0xIHtcbiAgICBtYXJnaW4tbGVmdDogOC4zMzMzMzMzMyU7IH1cbiAgLm9mZnNldC14bC0yIHtcbiAgICBtYXJnaW4tbGVmdDogMTYuNjY2NjY2NjclOyB9XG4gIC5vZmZzZXQteGwtMyB7XG4gICAgbWFyZ2luLWxlZnQ6IDI1JTsgfVxuICAub2Zmc2V0LXhsLTQge1xuICAgIG1hcmdpbi1sZWZ0OiAzMy4zMzMzMzMzMyU7IH1cbiAgLm9mZnNldC14bC01IHtcbiAgICBtYXJnaW4tbGVmdDogNDEuNjY2NjY2NjclOyB9XG4gIC5vZmZzZXQteGwtNiB7XG4gICAgbWFyZ2luLWxlZnQ6IDUwJTsgfVxuICAub2Zmc2V0LXhsLTcge1xuICAgIG1hcmdpbi1sZWZ0OiA1OC4zMzMzMzMzMyU7IH1cbiAgLm9mZnNldC14bC04IHtcbiAgICBtYXJnaW4tbGVmdDogNjYuNjY2NjY2NjclOyB9XG4gIC5vZmZzZXQteGwtOSB7XG4gICAgbWFyZ2luLWxlZnQ6IDc1JTsgfVxuICAub2Zmc2V0LXhsLTEwIHtcbiAgICBtYXJnaW4tbGVmdDogODMuMzMzMzMzMzMlOyB9XG4gIC5vZmZzZXQteGwtMTEge1xuICAgIG1hcmdpbi1sZWZ0OiA5MS42NjY2NjY2NyU7IH0gfVxuXG4uZC1ub25lIHtcbiAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50OyB9XG5cbi5kLWlubGluZSB7XG4gIGRpc3BsYXk6IGlubGluZSAhaW1wb3J0YW50OyB9XG5cbi5kLWlubGluZS1ibG9jayB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jayAhaW1wb3J0YW50OyB9XG5cbi5kLWJsb2NrIHtcbiAgZGlzcGxheTogYmxvY2sgIWltcG9ydGFudDsgfVxuXG4uZC10YWJsZSB7XG4gIGRpc3BsYXk6IHRhYmxlICFpbXBvcnRhbnQ7IH1cblxuLmQtdGFibGUtcm93IHtcbiAgZGlzcGxheTogdGFibGUtcm93ICFpbXBvcnRhbnQ7IH1cblxuLmQtdGFibGUtY2VsbCB7XG4gIGRpc3BsYXk6IHRhYmxlLWNlbGwgIWltcG9ydGFudDsgfVxuXG4uZC1mbGV4IHtcbiAgZGlzcGxheTogZmxleCAhaW1wb3J0YW50OyB9XG5cbi5kLWlubGluZS1mbGV4IHtcbiAgZGlzcGxheTogaW5saW5lLWZsZXggIWltcG9ydGFudDsgfVxuXG5AbWVkaWEgKG1pbi13aWR0aDogNTc2cHgpIHtcbiAgLmQtc20tbm9uZSB7XG4gICAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50OyB9XG4gIC5kLXNtLWlubGluZSB7XG4gICAgZGlzcGxheTogaW5saW5lICFpbXBvcnRhbnQ7IH1cbiAgLmQtc20taW5saW5lLWJsb2NrIHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2sgIWltcG9ydGFudDsgfVxuICAuZC1zbS1ibG9jayB7XG4gICAgZGlzcGxheTogYmxvY2sgIWltcG9ydGFudDsgfVxuICAuZC1zbS10YWJsZSB7XG4gICAgZGlzcGxheTogdGFibGUgIWltcG9ydGFudDsgfVxuICAuZC1zbS10YWJsZS1yb3cge1xuICAgIGRpc3BsYXk6IHRhYmxlLXJvdyAhaW1wb3J0YW50OyB9XG4gIC5kLXNtLXRhYmxlLWNlbGwge1xuICAgIGRpc3BsYXk6IHRhYmxlLWNlbGwgIWltcG9ydGFudDsgfVxuICAuZC1zbS1mbGV4IHtcbiAgICBkaXNwbGF5OiBmbGV4ICFpbXBvcnRhbnQ7IH1cbiAgLmQtc20taW5saW5lLWZsZXgge1xuICAgIGRpc3BsYXk6IGlubGluZS1mbGV4ICFpbXBvcnRhbnQ7IH0gfVxuXG5AbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHtcbiAgLmQtbWQtbm9uZSB7XG4gICAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50OyB9XG4gIC5kLW1kLWlubGluZSB7XG4gICAgZGlzcGxheTogaW5saW5lICFpbXBvcnRhbnQ7IH1cbiAgLmQtbWQtaW5saW5lLWJsb2NrIHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2sgIWltcG9ydGFudDsgfVxuICAuZC1tZC1ibG9jayB7XG4gICAgZGlzcGxheTogYmxvY2sgIWltcG9ydGFudDsgfVxuICAuZC1tZC10YWJsZSB7XG4gICAgZGlzcGxheTogdGFibGUgIWltcG9ydGFudDsgfVxuICAuZC1tZC10YWJsZS1yb3cge1xuICAgIGRpc3BsYXk6IHRhYmxlLXJvdyAhaW1wb3J0YW50OyB9XG4gIC5kLW1kLXRhYmxlLWNlbGwge1xuICAgIGRpc3BsYXk6IHRhYmxlLWNlbGwgIWltcG9ydGFudDsgfVxuICAuZC1tZC1mbGV4IHtcbiAgICBkaXNwbGF5OiBmbGV4ICFpbXBvcnRhbnQ7IH1cbiAgLmQtbWQtaW5saW5lLWZsZXgge1xuICAgIGRpc3BsYXk6IGlubGluZS1mbGV4ICFpbXBvcnRhbnQ7IH0gfVxuXG5AbWVkaWEgKG1pbi13aWR0aDogOTkycHgpIHtcbiAgLmQtbGctbm9uZSB7XG4gICAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50OyB9XG4gIC5kLWxnLWlubGluZSB7XG4gICAgZGlzcGxheTogaW5saW5lICFpbXBvcnRhbnQ7IH1cbiAgLmQtbGctaW5saW5lLWJsb2NrIHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2sgIWltcG9ydGFudDsgfVxuICAuZC1sZy1ibG9jayB7XG4gICAgZGlzcGxheTogYmxvY2sgIWltcG9ydGFudDsgfVxuICAuZC1sZy10YWJsZSB7XG4gICAgZGlzcGxheTogdGFibGUgIWltcG9ydGFudDsgfVxuICAuZC1sZy10YWJsZS1yb3cge1xuICAgIGRpc3BsYXk6IHRhYmxlLXJvdyAhaW1wb3J0YW50OyB9XG4gIC5kLWxnLXRhYmxlLWNlbGwge1xuICAgIGRpc3BsYXk6IHRhYmxlLWNlbGwgIWltcG9ydGFudDsgfVxuICAuZC1sZy1mbGV4IHtcbiAgICBkaXNwbGF5OiBmbGV4ICFpbXBvcnRhbnQ7IH1cbiAgLmQtbGctaW5saW5lLWZsZXgge1xuICAgIGRpc3BsYXk6IGlubGluZS1mbGV4ICFpbXBvcnRhbnQ7IH0gfVxuXG5AbWVkaWEgKG1pbi13aWR0aDogMTIwMHB4KSB7XG4gIC5kLXhsLW5vbmUge1xuICAgIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDsgfVxuICAuZC14bC1pbmxpbmUge1xuICAgIGRpc3BsYXk6IGlubGluZSAhaW1wb3J0YW50OyB9XG4gIC5kLXhsLWlubGluZS1ibG9jayB7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrICFpbXBvcnRhbnQ7IH1cbiAgLmQteGwtYmxvY2sge1xuICAgIGRpc3BsYXk6IGJsb2NrICFpbXBvcnRhbnQ7IH1cbiAgLmQteGwtdGFibGUge1xuICAgIGRpc3BsYXk6IHRhYmxlICFpbXBvcnRhbnQ7IH1cbiAgLmQteGwtdGFibGUtcm93IHtcbiAgICBkaXNwbGF5OiB0YWJsZS1yb3cgIWltcG9ydGFudDsgfVxuICAuZC14bC10YWJsZS1jZWxsIHtcbiAgICBkaXNwbGF5OiB0YWJsZS1jZWxsICFpbXBvcnRhbnQ7IH1cbiAgLmQteGwtZmxleCB7XG4gICAgZGlzcGxheTogZmxleCAhaW1wb3J0YW50OyB9XG4gIC5kLXhsLWlubGluZS1mbGV4IHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtZmxleCAhaW1wb3J0YW50OyB9IH1cblxuQG1lZGlhIHByaW50IHtcbiAgLmQtcHJpbnQtbm9uZSB7XG4gICAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50OyB9XG4gIC5kLXByaW50LWlubGluZSB7XG4gICAgZGlzcGxheTogaW5saW5lICFpbXBvcnRhbnQ7IH1cbiAgLmQtcHJpbnQtaW5saW5lLWJsb2NrIHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2sgIWltcG9ydGFudDsgfVxuICAuZC1wcmludC1ibG9jayB7XG4gICAgZGlzcGxheTogYmxvY2sgIWltcG9ydGFudDsgfVxuICAuZC1wcmludC10YWJsZSB7XG4gICAgZGlzcGxheTogdGFibGUgIWltcG9ydGFudDsgfVxuICAuZC1wcmludC10YWJsZS1yb3cge1xuICAgIGRpc3BsYXk6IHRhYmxlLXJvdyAhaW1wb3J0YW50OyB9XG4gIC5kLXByaW50LXRhYmxlLWNlbGwge1xuICAgIGRpc3BsYXk6IHRhYmxlLWNlbGwgIWltcG9ydGFudDsgfVxuICAuZC1wcmludC1mbGV4IHtcbiAgICBkaXNwbGF5OiBmbGV4ICFpbXBvcnRhbnQ7IH1cbiAgLmQtcHJpbnQtaW5saW5lLWZsZXgge1xuICAgIGRpc3BsYXk6IGlubGluZS1mbGV4ICFpbXBvcnRhbnQ7IH0gfVxuXG4uZmxleC1yb3cge1xuICBmbGV4LWRpcmVjdGlvbjogcm93ICFpbXBvcnRhbnQ7IH1cblxuLmZsZXgtY29sdW1uIHtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbiAhaW1wb3J0YW50OyB9XG5cbi5mbGV4LXJvdy1yZXZlcnNlIHtcbiAgZmxleC1kaXJlY3Rpb246IHJvdy1yZXZlcnNlICFpbXBvcnRhbnQ7IH1cblxuLmZsZXgtY29sdW1uLXJldmVyc2Uge1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uLXJldmVyc2UgIWltcG9ydGFudDsgfVxuXG4uZmxleC13cmFwIHtcbiAgZmxleC13cmFwOiB3cmFwICFpbXBvcnRhbnQ7IH1cblxuLmZsZXgtbm93cmFwIHtcbiAgZmxleC13cmFwOiBub3dyYXAgIWltcG9ydGFudDsgfVxuXG4uZmxleC13cmFwLXJldmVyc2Uge1xuICBmbGV4LXdyYXA6IHdyYXAtcmV2ZXJzZSAhaW1wb3J0YW50OyB9XG5cbi5mbGV4LWZpbGwge1xuICBmbGV4OiAxIDEgYXV0byAhaW1wb3J0YW50OyB9XG5cbi5mbGV4LWdyb3ctMCB7XG4gIGZsZXgtZ3JvdzogMCAhaW1wb3J0YW50OyB9XG5cbi5mbGV4LWdyb3ctMSB7XG4gIGZsZXgtZ3JvdzogMSAhaW1wb3J0YW50OyB9XG5cbi5mbGV4LXNocmluay0wIHtcbiAgZmxleC1zaHJpbms6IDAgIWltcG9ydGFudDsgfVxuXG4uZmxleC1zaHJpbmstMSB7XG4gIGZsZXgtc2hyaW5rOiAxICFpbXBvcnRhbnQ7IH1cblxuLmp1c3RpZnktY29udGVudC1zdGFydCB7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydCAhaW1wb3J0YW50OyB9XG5cbi5qdXN0aWZ5LWNvbnRlbnQtZW5kIHtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZCAhaW1wb3J0YW50OyB9XG5cbi5qdXN0aWZ5LWNvbnRlbnQtY2VudGVyIHtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXIgIWltcG9ydGFudDsgfVxuXG4uanVzdGlmeS1jb250ZW50LWJldHdlZW4ge1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW4gIWltcG9ydGFudDsgfVxuXG4uanVzdGlmeS1jb250ZW50LWFyb3VuZCB7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kICFpbXBvcnRhbnQ7IH1cblxuLmFsaWduLWl0ZW1zLXN0YXJ0IHtcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQgIWltcG9ydGFudDsgfVxuXG4uYWxpZ24taXRlbXMtZW5kIHtcbiAgYWxpZ24taXRlbXM6IGZsZXgtZW5kICFpbXBvcnRhbnQ7IH1cblxuLmFsaWduLWl0ZW1zLWNlbnRlciB7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXIgIWltcG9ydGFudDsgfVxuXG4uYWxpZ24taXRlbXMtYmFzZWxpbmUge1xuICBhbGlnbi1pdGVtczogYmFzZWxpbmUgIWltcG9ydGFudDsgfVxuXG4uYWxpZ24taXRlbXMtc3RyZXRjaCB7XG4gIGFsaWduLWl0ZW1zOiBzdHJldGNoICFpbXBvcnRhbnQ7IH1cblxuLmFsaWduLWNvbnRlbnQtc3RhcnQge1xuICBhbGlnbi1jb250ZW50OiBmbGV4LXN0YXJ0ICFpbXBvcnRhbnQ7IH1cblxuLmFsaWduLWNvbnRlbnQtZW5kIHtcbiAgYWxpZ24tY29udGVudDogZmxleC1lbmQgIWltcG9ydGFudDsgfVxuXG4uYWxpZ24tY29udGVudC1jZW50ZXIge1xuICBhbGlnbi1jb250ZW50OiBjZW50ZXIgIWltcG9ydGFudDsgfVxuXG4uYWxpZ24tY29udGVudC1iZXR3ZWVuIHtcbiAgYWxpZ24tY29udGVudDogc3BhY2UtYmV0d2VlbiAhaW1wb3J0YW50OyB9XG5cbi5hbGlnbi1jb250ZW50LWFyb3VuZCB7XG4gIGFsaWduLWNvbnRlbnQ6IHNwYWNlLWFyb3VuZCAhaW1wb3J0YW50OyB9XG5cbi5hbGlnbi1jb250ZW50LXN0cmV0Y2gge1xuICBhbGlnbi1jb250ZW50OiBzdHJldGNoICFpbXBvcnRhbnQ7IH1cblxuLmFsaWduLXNlbGYtYXV0byB7XG4gIGFsaWduLXNlbGY6IGF1dG8gIWltcG9ydGFudDsgfVxuXG4uYWxpZ24tc2VsZi1zdGFydCB7XG4gIGFsaWduLXNlbGY6IGZsZXgtc3RhcnQgIWltcG9ydGFudDsgfVxuXG4uYWxpZ24tc2VsZi1lbmQge1xuICBhbGlnbi1zZWxmOiBmbGV4LWVuZCAhaW1wb3J0YW50OyB9XG5cbi5hbGlnbi1zZWxmLWNlbnRlciB7XG4gIGFsaWduLXNlbGY6IGNlbnRlciAhaW1wb3J0YW50OyB9XG5cbi5hbGlnbi1zZWxmLWJhc2VsaW5lIHtcbiAgYWxpZ24tc2VsZjogYmFzZWxpbmUgIWltcG9ydGFudDsgfVxuXG4uYWxpZ24tc2VsZi1zdHJldGNoIHtcbiAgYWxpZ24tc2VsZjogc3RyZXRjaCAhaW1wb3J0YW50OyB9XG5cbkBtZWRpYSAobWluLXdpZHRoOiA1NzZweCkge1xuICAuZmxleC1zbS1yb3cge1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3cgIWltcG9ydGFudDsgfVxuICAuZmxleC1zbS1jb2x1bW4ge1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW4gIWltcG9ydGFudDsgfVxuICAuZmxleC1zbS1yb3ctcmV2ZXJzZSB7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdy1yZXZlcnNlICFpbXBvcnRhbnQ7IH1cbiAgLmZsZXgtc20tY29sdW1uLXJldmVyc2Uge1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW4tcmV2ZXJzZSAhaW1wb3J0YW50OyB9XG4gIC5mbGV4LXNtLXdyYXAge1xuICAgIGZsZXgtd3JhcDogd3JhcCAhaW1wb3J0YW50OyB9XG4gIC5mbGV4LXNtLW5vd3JhcCB7XG4gICAgZmxleC13cmFwOiBub3dyYXAgIWltcG9ydGFudDsgfVxuICAuZmxleC1zbS13cmFwLXJldmVyc2Uge1xuICAgIGZsZXgtd3JhcDogd3JhcC1yZXZlcnNlICFpbXBvcnRhbnQ7IH1cbiAgLmZsZXgtc20tZmlsbCB7XG4gICAgZmxleDogMSAxIGF1dG8gIWltcG9ydGFudDsgfVxuICAuZmxleC1zbS1ncm93LTAge1xuICAgIGZsZXgtZ3JvdzogMCAhaW1wb3J0YW50OyB9XG4gIC5mbGV4LXNtLWdyb3ctMSB7XG4gICAgZmxleC1ncm93OiAxICFpbXBvcnRhbnQ7IH1cbiAgLmZsZXgtc20tc2hyaW5rLTAge1xuICAgIGZsZXgtc2hyaW5rOiAwICFpbXBvcnRhbnQ7IH1cbiAgLmZsZXgtc20tc2hyaW5rLTEge1xuICAgIGZsZXgtc2hyaW5rOiAxICFpbXBvcnRhbnQ7IH1cbiAgLmp1c3RpZnktY29udGVudC1zbS1zdGFydCB7XG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0ICFpbXBvcnRhbnQ7IH1cbiAgLmp1c3RpZnktY29udGVudC1zbS1lbmQge1xuICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQgIWltcG9ydGFudDsgfVxuICAuanVzdGlmeS1jb250ZW50LXNtLWNlbnRlciB7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXIgIWltcG9ydGFudDsgfVxuICAuanVzdGlmeS1jb250ZW50LXNtLWJldHdlZW4ge1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbiAhaW1wb3J0YW50OyB9XG4gIC5qdXN0aWZ5LWNvbnRlbnQtc20tYXJvdW5kIHtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZCAhaW1wb3J0YW50OyB9XG4gIC5hbGlnbi1pdGVtcy1zbS1zdGFydCB7XG4gICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQgIWltcG9ydGFudDsgfVxuICAuYWxpZ24taXRlbXMtc20tZW5kIHtcbiAgICBhbGlnbi1pdGVtczogZmxleC1lbmQgIWltcG9ydGFudDsgfVxuICAuYWxpZ24taXRlbXMtc20tY2VudGVyIHtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyICFpbXBvcnRhbnQ7IH1cbiAgLmFsaWduLWl0ZW1zLXNtLWJhc2VsaW5lIHtcbiAgICBhbGlnbi1pdGVtczogYmFzZWxpbmUgIWltcG9ydGFudDsgfVxuICAuYWxpZ24taXRlbXMtc20tc3RyZXRjaCB7XG4gICAgYWxpZ24taXRlbXM6IHN0cmV0Y2ggIWltcG9ydGFudDsgfVxuICAuYWxpZ24tY29udGVudC1zbS1zdGFydCB7XG4gICAgYWxpZ24tY29udGVudDogZmxleC1zdGFydCAhaW1wb3J0YW50OyB9XG4gIC5hbGlnbi1jb250ZW50LXNtLWVuZCB7XG4gICAgYWxpZ24tY29udGVudDogZmxleC1lbmQgIWltcG9ydGFudDsgfVxuICAuYWxpZ24tY29udGVudC1zbS1jZW50ZXIge1xuICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlciAhaW1wb3J0YW50OyB9XG4gIC5hbGlnbi1jb250ZW50LXNtLWJldHdlZW4ge1xuICAgIGFsaWduLWNvbnRlbnQ6IHNwYWNlLWJldHdlZW4gIWltcG9ydGFudDsgfVxuICAuYWxpZ24tY29udGVudC1zbS1hcm91bmQge1xuICAgIGFsaWduLWNvbnRlbnQ6IHNwYWNlLWFyb3VuZCAhaW1wb3J0YW50OyB9XG4gIC5hbGlnbi1jb250ZW50LXNtLXN0cmV0Y2gge1xuICAgIGFsaWduLWNvbnRlbnQ6IHN0cmV0Y2ggIWltcG9ydGFudDsgfVxuICAuYWxpZ24tc2VsZi1zbS1hdXRvIHtcbiAgICBhbGlnbi1zZWxmOiBhdXRvICFpbXBvcnRhbnQ7IH1cbiAgLmFsaWduLXNlbGYtc20tc3RhcnQge1xuICAgIGFsaWduLXNlbGY6IGZsZXgtc3RhcnQgIWltcG9ydGFudDsgfVxuICAuYWxpZ24tc2VsZi1zbS1lbmQge1xuICAgIGFsaWduLXNlbGY6IGZsZXgtZW5kICFpbXBvcnRhbnQ7IH1cbiAgLmFsaWduLXNlbGYtc20tY2VudGVyIHtcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXIgIWltcG9ydGFudDsgfVxuICAuYWxpZ24tc2VsZi1zbS1iYXNlbGluZSB7XG4gICAgYWxpZ24tc2VsZjogYmFzZWxpbmUgIWltcG9ydGFudDsgfVxuICAuYWxpZ24tc2VsZi1zbS1zdHJldGNoIHtcbiAgICBhbGlnbi1zZWxmOiBzdHJldGNoICFpbXBvcnRhbnQ7IH0gfVxuXG5AbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHtcbiAgLmZsZXgtbWQtcm93IHtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93ICFpbXBvcnRhbnQ7IH1cbiAgLmZsZXgtbWQtY29sdW1uIHtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uICFpbXBvcnRhbnQ7IH1cbiAgLmZsZXgtbWQtcm93LXJldmVyc2Uge1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3ctcmV2ZXJzZSAhaW1wb3J0YW50OyB9XG4gIC5mbGV4LW1kLWNvbHVtbi1yZXZlcnNlIHtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uLXJldmVyc2UgIWltcG9ydGFudDsgfVxuICAuZmxleC1tZC13cmFwIHtcbiAgICBmbGV4LXdyYXA6IHdyYXAgIWltcG9ydGFudDsgfVxuICAuZmxleC1tZC1ub3dyYXAge1xuICAgIGZsZXgtd3JhcDogbm93cmFwICFpbXBvcnRhbnQ7IH1cbiAgLmZsZXgtbWQtd3JhcC1yZXZlcnNlIHtcbiAgICBmbGV4LXdyYXA6IHdyYXAtcmV2ZXJzZSAhaW1wb3J0YW50OyB9XG4gIC5mbGV4LW1kLWZpbGwge1xuICAgIGZsZXg6IDEgMSBhdXRvICFpbXBvcnRhbnQ7IH1cbiAgLmZsZXgtbWQtZ3Jvdy0wIHtcbiAgICBmbGV4LWdyb3c6IDAgIWltcG9ydGFudDsgfVxuICAuZmxleC1tZC1ncm93LTEge1xuICAgIGZsZXgtZ3JvdzogMSAhaW1wb3J0YW50OyB9XG4gIC5mbGV4LW1kLXNocmluay0wIHtcbiAgICBmbGV4LXNocmluazogMCAhaW1wb3J0YW50OyB9XG4gIC5mbGV4LW1kLXNocmluay0xIHtcbiAgICBmbGV4LXNocmluazogMSAhaW1wb3J0YW50OyB9XG4gIC5qdXN0aWZ5LWNvbnRlbnQtbWQtc3RhcnQge1xuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydCAhaW1wb3J0YW50OyB9XG4gIC5qdXN0aWZ5LWNvbnRlbnQtbWQtZW5kIHtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kICFpbXBvcnRhbnQ7IH1cbiAgLmp1c3RpZnktY29udGVudC1tZC1jZW50ZXIge1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyICFpbXBvcnRhbnQ7IH1cbiAgLmp1c3RpZnktY29udGVudC1tZC1iZXR3ZWVuIHtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW4gIWltcG9ydGFudDsgfVxuICAuanVzdGlmeS1jb250ZW50LW1kLWFyb3VuZCB7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQgIWltcG9ydGFudDsgfVxuICAuYWxpZ24taXRlbXMtbWQtc3RhcnQge1xuICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0ICFpbXBvcnRhbnQ7IH1cbiAgLmFsaWduLWl0ZW1zLW1kLWVuZCB7XG4gICAgYWxpZ24taXRlbXM6IGZsZXgtZW5kICFpbXBvcnRhbnQ7IH1cbiAgLmFsaWduLWl0ZW1zLW1kLWNlbnRlciB7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlciAhaW1wb3J0YW50OyB9XG4gIC5hbGlnbi1pdGVtcy1tZC1iYXNlbGluZSB7XG4gICAgYWxpZ24taXRlbXM6IGJhc2VsaW5lICFpbXBvcnRhbnQ7IH1cbiAgLmFsaWduLWl0ZW1zLW1kLXN0cmV0Y2gge1xuICAgIGFsaWduLWl0ZW1zOiBzdHJldGNoICFpbXBvcnRhbnQ7IH1cbiAgLmFsaWduLWNvbnRlbnQtbWQtc3RhcnQge1xuICAgIGFsaWduLWNvbnRlbnQ6IGZsZXgtc3RhcnQgIWltcG9ydGFudDsgfVxuICAuYWxpZ24tY29udGVudC1tZC1lbmQge1xuICAgIGFsaWduLWNvbnRlbnQ6IGZsZXgtZW5kICFpbXBvcnRhbnQ7IH1cbiAgLmFsaWduLWNvbnRlbnQtbWQtY2VudGVyIHtcbiAgICBhbGlnbi1jb250ZW50OiBjZW50ZXIgIWltcG9ydGFudDsgfVxuICAuYWxpZ24tY29udGVudC1tZC1iZXR3ZWVuIHtcbiAgICBhbGlnbi1jb250ZW50OiBzcGFjZS1iZXR3ZWVuICFpbXBvcnRhbnQ7IH1cbiAgLmFsaWduLWNvbnRlbnQtbWQtYXJvdW5kIHtcbiAgICBhbGlnbi1jb250ZW50OiBzcGFjZS1hcm91bmQgIWltcG9ydGFudDsgfVxuICAuYWxpZ24tY29udGVudC1tZC1zdHJldGNoIHtcbiAgICBhbGlnbi1jb250ZW50OiBzdHJldGNoICFpbXBvcnRhbnQ7IH1cbiAgLmFsaWduLXNlbGYtbWQtYXV0byB7XG4gICAgYWxpZ24tc2VsZjogYXV0byAhaW1wb3J0YW50OyB9XG4gIC5hbGlnbi1zZWxmLW1kLXN0YXJ0IHtcbiAgICBhbGlnbi1zZWxmOiBmbGV4LXN0YXJ0ICFpbXBvcnRhbnQ7IH1cbiAgLmFsaWduLXNlbGYtbWQtZW5kIHtcbiAgICBhbGlnbi1zZWxmOiBmbGV4LWVuZCAhaW1wb3J0YW50OyB9XG4gIC5hbGlnbi1zZWxmLW1kLWNlbnRlciB7XG4gICAgYWxpZ24tc2VsZjogY2VudGVyICFpbXBvcnRhbnQ7IH1cbiAgLmFsaWduLXNlbGYtbWQtYmFzZWxpbmUge1xuICAgIGFsaWduLXNlbGY6IGJhc2VsaW5lICFpbXBvcnRhbnQ7IH1cbiAgLmFsaWduLXNlbGYtbWQtc3RyZXRjaCB7XG4gICAgYWxpZ24tc2VsZjogc3RyZXRjaCAhaW1wb3J0YW50OyB9IH1cblxuQG1lZGlhIChtaW4td2lkdGg6IDk5MnB4KSB7XG4gIC5mbGV4LWxnLXJvdyB7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdyAhaW1wb3J0YW50OyB9XG4gIC5mbGV4LWxnLWNvbHVtbiB7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbiAhaW1wb3J0YW50OyB9XG4gIC5mbGV4LWxnLXJvdy1yZXZlcnNlIHtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93LXJldmVyc2UgIWltcG9ydGFudDsgfVxuICAuZmxleC1sZy1jb2x1bW4tcmV2ZXJzZSB7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbi1yZXZlcnNlICFpbXBvcnRhbnQ7IH1cbiAgLmZsZXgtbGctd3JhcCB7XG4gICAgZmxleC13cmFwOiB3cmFwICFpbXBvcnRhbnQ7IH1cbiAgLmZsZXgtbGctbm93cmFwIHtcbiAgICBmbGV4LXdyYXA6IG5vd3JhcCAhaW1wb3J0YW50OyB9XG4gIC5mbGV4LWxnLXdyYXAtcmV2ZXJzZSB7XG4gICAgZmxleC13cmFwOiB3cmFwLXJldmVyc2UgIWltcG9ydGFudDsgfVxuICAuZmxleC1sZy1maWxsIHtcbiAgICBmbGV4OiAxIDEgYXV0byAhaW1wb3J0YW50OyB9XG4gIC5mbGV4LWxnLWdyb3ctMCB7XG4gICAgZmxleC1ncm93OiAwICFpbXBvcnRhbnQ7IH1cbiAgLmZsZXgtbGctZ3Jvdy0xIHtcbiAgICBmbGV4LWdyb3c6IDEgIWltcG9ydGFudDsgfVxuICAuZmxleC1sZy1zaHJpbmstMCB7XG4gICAgZmxleC1zaHJpbms6IDAgIWltcG9ydGFudDsgfVxuICAuZmxleC1sZy1zaHJpbmstMSB7XG4gICAgZmxleC1zaHJpbms6IDEgIWltcG9ydGFudDsgfVxuICAuanVzdGlmeS1jb250ZW50LWxnLXN0YXJ0IHtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQgIWltcG9ydGFudDsgfVxuICAuanVzdGlmeS1jb250ZW50LWxnLWVuZCB7XG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZCAhaW1wb3J0YW50OyB9XG4gIC5qdXN0aWZ5LWNvbnRlbnQtbGctY2VudGVyIHtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlciAhaW1wb3J0YW50OyB9XG4gIC5qdXN0aWZ5LWNvbnRlbnQtbGctYmV0d2VlbiB7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuICFpbXBvcnRhbnQ7IH1cbiAgLmp1c3RpZnktY29udGVudC1sZy1hcm91bmQge1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kICFpbXBvcnRhbnQ7IH1cbiAgLmFsaWduLWl0ZW1zLWxnLXN0YXJ0IHtcbiAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydCAhaW1wb3J0YW50OyB9XG4gIC5hbGlnbi1pdGVtcy1sZy1lbmQge1xuICAgIGFsaWduLWl0ZW1zOiBmbGV4LWVuZCAhaW1wb3J0YW50OyB9XG4gIC5hbGlnbi1pdGVtcy1sZy1jZW50ZXIge1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXIgIWltcG9ydGFudDsgfVxuICAuYWxpZ24taXRlbXMtbGctYmFzZWxpbmUge1xuICAgIGFsaWduLWl0ZW1zOiBiYXNlbGluZSAhaW1wb3J0YW50OyB9XG4gIC5hbGlnbi1pdGVtcy1sZy1zdHJldGNoIHtcbiAgICBhbGlnbi1pdGVtczogc3RyZXRjaCAhaW1wb3J0YW50OyB9XG4gIC5hbGlnbi1jb250ZW50LWxnLXN0YXJ0IHtcbiAgICBhbGlnbi1jb250ZW50OiBmbGV4LXN0YXJ0ICFpbXBvcnRhbnQ7IH1cbiAgLmFsaWduLWNvbnRlbnQtbGctZW5kIHtcbiAgICBhbGlnbi1jb250ZW50OiBmbGV4LWVuZCAhaW1wb3J0YW50OyB9XG4gIC5hbGlnbi1jb250ZW50LWxnLWNlbnRlciB7XG4gICAgYWxpZ24tY29udGVudDogY2VudGVyICFpbXBvcnRhbnQ7IH1cbiAgLmFsaWduLWNvbnRlbnQtbGctYmV0d2VlbiB7XG4gICAgYWxpZ24tY29udGVudDogc3BhY2UtYmV0d2VlbiAhaW1wb3J0YW50OyB9XG4gIC5hbGlnbi1jb250ZW50LWxnLWFyb3VuZCB7XG4gICAgYWxpZ24tY29udGVudDogc3BhY2UtYXJvdW5kICFpbXBvcnRhbnQ7IH1cbiAgLmFsaWduLWNvbnRlbnQtbGctc3RyZXRjaCB7XG4gICAgYWxpZ24tY29udGVudDogc3RyZXRjaCAhaW1wb3J0YW50OyB9XG4gIC5hbGlnbi1zZWxmLWxnLWF1dG8ge1xuICAgIGFsaWduLXNlbGY6IGF1dG8gIWltcG9ydGFudDsgfVxuICAuYWxpZ24tc2VsZi1sZy1zdGFydCB7XG4gICAgYWxpZ24tc2VsZjogZmxleC1zdGFydCAhaW1wb3J0YW50OyB9XG4gIC5hbGlnbi1zZWxmLWxnLWVuZCB7XG4gICAgYWxpZ24tc2VsZjogZmxleC1lbmQgIWltcG9ydGFudDsgfVxuICAuYWxpZ24tc2VsZi1sZy1jZW50ZXIge1xuICAgIGFsaWduLXNlbGY6IGNlbnRlciAhaW1wb3J0YW50OyB9XG4gIC5hbGlnbi1zZWxmLWxnLWJhc2VsaW5lIHtcbiAgICBhbGlnbi1zZWxmOiBiYXNlbGluZSAhaW1wb3J0YW50OyB9XG4gIC5hbGlnbi1zZWxmLWxnLXN0cmV0Y2gge1xuICAgIGFsaWduLXNlbGY6IHN0cmV0Y2ggIWltcG9ydGFudDsgfSB9XG5cbkBtZWRpYSAobWluLXdpZHRoOiAxMjAwcHgpIHtcbiAgLmZsZXgteGwtcm93IHtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93ICFpbXBvcnRhbnQ7IH1cbiAgLmZsZXgteGwtY29sdW1uIHtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uICFpbXBvcnRhbnQ7IH1cbiAgLmZsZXgteGwtcm93LXJldmVyc2Uge1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3ctcmV2ZXJzZSAhaW1wb3J0YW50OyB9XG4gIC5mbGV4LXhsLWNvbHVtbi1yZXZlcnNlIHtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uLXJldmVyc2UgIWltcG9ydGFudDsgfVxuICAuZmxleC14bC13cmFwIHtcbiAgICBmbGV4LXdyYXA6IHdyYXAgIWltcG9ydGFudDsgfVxuICAuZmxleC14bC1ub3dyYXAge1xuICAgIGZsZXgtd3JhcDogbm93cmFwICFpbXBvcnRhbnQ7IH1cbiAgLmZsZXgteGwtd3JhcC1yZXZlcnNlIHtcbiAgICBmbGV4LXdyYXA6IHdyYXAtcmV2ZXJzZSAhaW1wb3J0YW50OyB9XG4gIC5mbGV4LXhsLWZpbGwge1xuICAgIGZsZXg6IDEgMSBhdXRvICFpbXBvcnRhbnQ7IH1cbiAgLmZsZXgteGwtZ3Jvdy0wIHtcbiAgICBmbGV4LWdyb3c6IDAgIWltcG9ydGFudDsgfVxuICAuZmxleC14bC1ncm93LTEge1xuICAgIGZsZXgtZ3JvdzogMSAhaW1wb3J0YW50OyB9XG4gIC5mbGV4LXhsLXNocmluay0wIHtcbiAgICBmbGV4LXNocmluazogMCAhaW1wb3J0YW50OyB9XG4gIC5mbGV4LXhsLXNocmluay0xIHtcbiAgICBmbGV4LXNocmluazogMSAhaW1wb3J0YW50OyB9XG4gIC5qdXN0aWZ5LWNvbnRlbnQteGwtc3RhcnQge1xuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydCAhaW1wb3J0YW50OyB9XG4gIC5qdXN0aWZ5LWNvbnRlbnQteGwtZW5kIHtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kICFpbXBvcnRhbnQ7IH1cbiAgLmp1c3RpZnktY29udGVudC14bC1jZW50ZXIge1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyICFpbXBvcnRhbnQ7IH1cbiAgLmp1c3RpZnktY29udGVudC14bC1iZXR3ZWVuIHtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW4gIWltcG9ydGFudDsgfVxuICAuanVzdGlmeS1jb250ZW50LXhsLWFyb3VuZCB7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQgIWltcG9ydGFudDsgfVxuICAuYWxpZ24taXRlbXMteGwtc3RhcnQge1xuICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0ICFpbXBvcnRhbnQ7IH1cbiAgLmFsaWduLWl0ZW1zLXhsLWVuZCB7XG4gICAgYWxpZ24taXRlbXM6IGZsZXgtZW5kICFpbXBvcnRhbnQ7IH1cbiAgLmFsaWduLWl0ZW1zLXhsLWNlbnRlciB7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlciAhaW1wb3J0YW50OyB9XG4gIC5hbGlnbi1pdGVtcy14bC1iYXNlbGluZSB7XG4gICAgYWxpZ24taXRlbXM6IGJhc2VsaW5lICFpbXBvcnRhbnQ7IH1cbiAgLmFsaWduLWl0ZW1zLXhsLXN0cmV0Y2gge1xuICAgIGFsaWduLWl0ZW1zOiBzdHJldGNoICFpbXBvcnRhbnQ7IH1cbiAgLmFsaWduLWNvbnRlbnQteGwtc3RhcnQge1xuICAgIGFsaWduLWNvbnRlbnQ6IGZsZXgtc3RhcnQgIWltcG9ydGFudDsgfVxuICAuYWxpZ24tY29udGVudC14bC1lbmQge1xuICAgIGFsaWduLWNvbnRlbnQ6IGZsZXgtZW5kICFpbXBvcnRhbnQ7IH1cbiAgLmFsaWduLWNvbnRlbnQteGwtY2VudGVyIHtcbiAgICBhbGlnbi1jb250ZW50OiBjZW50ZXIgIWltcG9ydGFudDsgfVxuICAuYWxpZ24tY29udGVudC14bC1iZXR3ZWVuIHtcbiAgICBhbGlnbi1jb250ZW50OiBzcGFjZS1iZXR3ZWVuICFpbXBvcnRhbnQ7IH1cbiAgLmFsaWduLWNvbnRlbnQteGwtYXJvdW5kIHtcbiAgICBhbGlnbi1jb250ZW50OiBzcGFjZS1hcm91bmQgIWltcG9ydGFudDsgfVxuICAuYWxpZ24tY29udGVudC14bC1zdHJldGNoIHtcbiAgICBhbGlnbi1jb250ZW50OiBzdHJldGNoICFpbXBvcnRhbnQ7IH1cbiAgLmFsaWduLXNlbGYteGwtYXV0byB7XG4gICAgYWxpZ24tc2VsZjogYXV0byAhaW1wb3J0YW50OyB9XG4gIC5hbGlnbi1zZWxmLXhsLXN0YXJ0IHtcbiAgICBhbGlnbi1zZWxmOiBmbGV4LXN0YXJ0ICFpbXBvcnRhbnQ7IH1cbiAgLmFsaWduLXNlbGYteGwtZW5kIHtcbiAgICBhbGlnbi1zZWxmOiBmbGV4LWVuZCAhaW1wb3J0YW50OyB9XG4gIC5hbGlnbi1zZWxmLXhsLWNlbnRlciB7XG4gICAgYWxpZ24tc2VsZjogY2VudGVyICFpbXBvcnRhbnQ7IH1cbiAgLmFsaWduLXNlbGYteGwtYmFzZWxpbmUge1xuICAgIGFsaWduLXNlbGY6IGJhc2VsaW5lICFpbXBvcnRhbnQ7IH1cbiAgLmFsaWduLXNlbGYteGwtc3RyZXRjaCB7XG4gICAgYWxpZ24tc2VsZjogc3RyZXRjaCAhaW1wb3J0YW50OyB9IH1cbiIsIi8vIEhvdmVyIG1peGluIGFuZCBgJGVuYWJsZS1ob3Zlci1tZWRpYS1xdWVyeWAgYXJlIGRlcHJlY2F0ZWQuXG4vL1xuLy8gT3JpZ2luYWxseSBhZGRlZCBkdXJpbmcgb3VyIGFscGhhcyBhbmQgbWFpbnRhaW5lZCBkdXJpbmcgYmV0YXMsIHRoaXMgbWl4aW4gd2FzXG4vLyBkZXNpZ25lZCB0byBwcmV2ZW50IGA6aG92ZXJgIHN0aWNraW5lc3Mgb24gaU9TLWFuIGlzc3VlIHdoZXJlIGhvdmVyIHN0eWxlc1xuLy8gd291bGQgcGVyc2lzdCBhZnRlciBpbml0aWFsIHRvdWNoLlxuLy9cbi8vIEZvciBiYWNrd2FyZCBjb21wYXRpYmlsaXR5LCB3ZSd2ZSBrZXB0IHRoZXNlIG1peGlucyBhbmQgdXBkYXRlZCB0aGVtIHRvXG4vLyBhbHdheXMgcmV0dXJuIHRoZWlyIHJlZ3VsYXIgcHNldWRvLWNsYXNzZXMgaW5zdGVhZCBvZiBhIHNoaW1tZWQgbWVkaWEgcXVlcnkuXG4vL1xuLy8gSXNzdWU6IGh0dHBzOi8vZ2l0aHViLmNvbS90d2JzL2Jvb3RzdHJhcC9pc3N1ZXMvMjUxOTVcblxuQG1peGluIGhvdmVyIHtcbiAgJjpob3ZlciB7IEBjb250ZW50OyB9XG59XG5cbkBtaXhpbiBob3Zlci1mb2N1cyB7XG4gICY6aG92ZXIsXG4gICY6Zm9jdXMge1xuICAgIEBjb250ZW50O1xuICB9XG59XG5cbkBtaXhpbiBwbGFpbi1ob3Zlci1mb2N1cyB7XG4gICYsXG4gICY6aG92ZXIsXG4gICY6Zm9jdXMge1xuICAgIEBjb250ZW50O1xuICB9XG59XG5cbkBtaXhpbiBob3Zlci1mb2N1cy1hY3RpdmUge1xuICAmOmhvdmVyLFxuICAmOmZvY3VzLFxuICAmOmFjdGl2ZSB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbn1cbiIsIi8qIVxuICogQm9vdHN0cmFwIEdyaWQgdjQuMS4zIChodHRwczovL2dldGJvb3RzdHJhcC5jb20vKVxuICogQ29weXJpZ2h0IDIwMTEtMjAxOCBUaGUgQm9vdHN0cmFwIEF1dGhvcnNcbiAqIENvcHlyaWdodCAyMDExLTIwMTggVHdpdHRlciwgSW5jLlxuICogTGljZW5zZWQgdW5kZXIgTUlUIChodHRwczovL2dpdGh1Yi5jb20vdHdicy9ib290c3RyYXAvYmxvYi9tYXN0ZXIvTElDRU5TRSlcbiAqL1xuXG5AYXQtcm9vdCB7XG4gIEAtbXMtdmlld3BvcnQgeyB3aWR0aDogZGV2aWNlLXdpZHRoOyB9IC8vIHN0eWxlbGludC1kaXNhYmxlLWxpbmUgYXQtcnVsZS1uby12ZW5kb3ItcHJlZml4XG59XG5cbmh0bWwge1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAtbXMtb3ZlcmZsb3ctc3R5bGU6IHNjcm9sbGJhcjtcbn1cblxuKixcbio6OmJlZm9yZSxcbio6OmFmdGVyIHtcbiAgYm94LXNpemluZzogaW5oZXJpdDtcbn1cblxuQGltcG9ydCBcImZ1bmN0aW9uc1wiO1xuQGltcG9ydCBcInZhcmlhYmxlc1wiO1xuXG5AaW1wb3J0IFwibWl4aW5zL2JyZWFrcG9pbnRzXCI7XG5AaW1wb3J0IFwibWl4aW5zL2dyaWQtZnJhbWV3b3JrXCI7XG5AaW1wb3J0IFwibWl4aW5zL2dyaWRcIjtcblxuQGltcG9ydCBcImdyaWRcIjtcbkBpbXBvcnQgXCJ1dGlsaXRpZXMvZGlzcGxheVwiO1xuQGltcG9ydCBcInV0aWxpdGllcy9mbGV4XCI7XG4iLCIvLyBDb250YWluZXIgd2lkdGhzXG4vL1xuLy8gU2V0IHRoZSBjb250YWluZXIgd2lkdGgsIGFuZCBvdmVycmlkZSBpdCBmb3IgZml4ZWQgbmF2YmFycyBpbiBtZWRpYSBxdWVyaWVzLlxuXG5AaWYgJGVuYWJsZS1ncmlkLWNsYXNzZXMge1xuICAuY29udGFpbmVyIHtcbiAgICBAaW5jbHVkZSBtYWtlLWNvbnRhaW5lcigpO1xuICAgIEBpbmNsdWRlIG1ha2UtY29udGFpbmVyLW1heC13aWR0aHMoKTtcbiAgfVxufVxuXG4vLyBGbHVpZCBjb250YWluZXJcbi8vXG4vLyBVdGlsaXplcyB0aGUgbWl4aW4gbWVhbnQgZm9yIGZpeGVkIHdpZHRoIGNvbnRhaW5lcnMsIGJ1dCB3aXRoIDEwMCUgd2lkdGggZm9yXG4vLyBmbHVpZCwgZnVsbCB3aWR0aCBsYXlvdXRzLlxuXG5AaWYgJGVuYWJsZS1ncmlkLWNsYXNzZXMge1xuICAuY29udGFpbmVyLWZsdWlkIHtcbiAgICBAaW5jbHVkZSBtYWtlLWNvbnRhaW5lcigpO1xuICB9XG59XG5cbi8vIFJvd1xuLy9cbi8vIFJvd3MgY29udGFpbiBhbmQgY2xlYXIgdGhlIGZsb2F0cyBvZiB5b3VyIGNvbHVtbnMuXG5cbkBpZiAkZW5hYmxlLWdyaWQtY2xhc3NlcyB7XG4gIC5yb3cge1xuICAgIEBpbmNsdWRlIG1ha2Utcm93KCk7XG4gIH1cblxuICAvLyBSZW1vdmUgdGhlIG5lZ2F0aXZlIG1hcmdpbiBmcm9tIGRlZmF1bHQgLnJvdywgdGhlbiB0aGUgaG9yaXpvbnRhbCBwYWRkaW5nXG4gIC8vIGZyb20gYWxsIGltbWVkaWF0ZSBjaGlsZHJlbiBjb2x1bW5zICh0byBwcmV2ZW50IHJ1bmF3YXkgc3R5bGUgaW5oZXJpdGFuY2UpLlxuICAubm8tZ3V0dGVycyB7XG4gICAgbWFyZ2luLXJpZ2h0OiAwO1xuICAgIG1hcmdpbi1sZWZ0OiAwO1xuXG4gICAgPiAuY29sLFxuICAgID4gW2NsYXNzKj1cImNvbC1cIl0ge1xuICAgICAgcGFkZGluZy1yaWdodDogMDtcbiAgICAgIHBhZGRpbmctbGVmdDogMDtcbiAgICB9XG4gIH1cbn1cblxuLy8gQ29sdW1uc1xuLy9cbi8vIENvbW1vbiBzdHlsZXMgZm9yIHNtYWxsIGFuZCBsYXJnZSBncmlkIGNvbHVtbnNcblxuQGlmICRlbmFibGUtZ3JpZC1jbGFzc2VzIHtcbiAgQGluY2x1ZGUgbWFrZS1ncmlkLWNvbHVtbnMoKTtcbn1cbiIsIi8vLyBHcmlkIHN5c3RlbVxuLy9cbi8vIEdlbmVyYXRlIHNlbWFudGljIGdyaWQgY29sdW1ucyB3aXRoIHRoZXNlIG1peGlucy5cblxuQG1peGluIG1ha2UtY29udGFpbmVyKCkge1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZy1yaWdodDogKCRncmlkLWd1dHRlci13aWR0aCAvIDIpO1xuICBwYWRkaW5nLWxlZnQ6ICgkZ3JpZC1ndXR0ZXItd2lkdGggLyAyKTtcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICBtYXJnaW4tbGVmdDogYXV0bztcbn1cblxuXG4vLyBGb3IgZWFjaCBicmVha3BvaW50LCBkZWZpbmUgdGhlIG1heGltdW0gd2lkdGggb2YgdGhlIGNvbnRhaW5lciBpbiBhIG1lZGlhIHF1ZXJ5XG5AbWl4aW4gbWFrZS1jb250YWluZXItbWF4LXdpZHRocygkbWF4LXdpZHRoczogJGNvbnRhaW5lci1tYXgtd2lkdGhzLCAkYnJlYWtwb2ludHM6ICRncmlkLWJyZWFrcG9pbnRzKSB7XG4gIEBlYWNoICRicmVha3BvaW50LCAkY29udGFpbmVyLW1heC13aWR0aCBpbiAkbWF4LXdpZHRocyB7XG4gICAgQGluY2x1ZGUgbWVkaWEtYnJlYWtwb2ludC11cCgkYnJlYWtwb2ludCwgJGJyZWFrcG9pbnRzKSB7XG4gICAgICBtYXgtd2lkdGg6ICRjb250YWluZXItbWF4LXdpZHRoO1xuICAgIH1cbiAgfVxufVxuXG5AbWl4aW4gbWFrZS1yb3coKSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtd3JhcDogd3JhcDtcbiAgbWFyZ2luLXJpZ2h0OiAoJGdyaWQtZ3V0dGVyLXdpZHRoIC8gLTIpO1xuICBtYXJnaW4tbGVmdDogKCRncmlkLWd1dHRlci13aWR0aCAvIC0yKTtcbn1cblxuQG1peGluIG1ha2UtY29sLXJlYWR5KCkge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIC8vIFByZXZlbnQgY29sdW1ucyBmcm9tIGJlY29taW5nIHRvbyBuYXJyb3cgd2hlbiBhdCBzbWFsbGVyIGdyaWQgdGllcnMgYnlcbiAgLy8gYWx3YXlzIHNldHRpbmcgYHdpZHRoOiAxMDAlO2AuIFRoaXMgd29ya3MgYmVjYXVzZSB3ZSB1c2UgYGZsZXhgIHZhbHVlc1xuICAvLyBsYXRlciBvbiB0byBvdmVycmlkZSB0aGlzIGluaXRpYWwgd2lkdGguXG4gIHdpZHRoOiAxMDAlO1xuICBtaW4taGVpZ2h0OiAxcHg7IC8vIFByZXZlbnQgY29sbGFwc2luZ1xuICBwYWRkaW5nLXJpZ2h0OiAoJGdyaWQtZ3V0dGVyLXdpZHRoIC8gMik7XG4gIHBhZGRpbmctbGVmdDogKCRncmlkLWd1dHRlci13aWR0aCAvIDIpO1xufVxuXG5AbWl4aW4gbWFrZS1jb2woJHNpemUsICRjb2x1bW5zOiAkZ3JpZC1jb2x1bW5zKSB7XG4gIGZsZXg6IDAgMCBwZXJjZW50YWdlKCRzaXplIC8gJGNvbHVtbnMpO1xuICAvLyBBZGQgYSBgbWF4LXdpZHRoYCB0byBlbnN1cmUgY29udGVudCB3aXRoaW4gZWFjaCBjb2x1bW4gZG9lcyBub3QgYmxvdyBvdXRcbiAgLy8gdGhlIHdpZHRoIG9mIHRoZSBjb2x1bW4uIEFwcGxpZXMgdG8gSUUxMCsgYW5kIEZpcmVmb3guIENocm9tZSBhbmQgU2FmYXJpXG4gIC8vIGRvIG5vdCBhcHBlYXIgdG8gcmVxdWlyZSB0aGlzLlxuICBtYXgtd2lkdGg6IHBlcmNlbnRhZ2UoJHNpemUgLyAkY29sdW1ucyk7XG59XG5cbkBtaXhpbiBtYWtlLWNvbC1vZmZzZXQoJHNpemUsICRjb2x1bW5zOiAkZ3JpZC1jb2x1bW5zKSB7XG4gICRudW06ICRzaXplIC8gJGNvbHVtbnM7XG4gIG1hcmdpbi1sZWZ0OiBpZigkbnVtID09IDAsIDAsIHBlcmNlbnRhZ2UoJG51bSkpO1xufVxuIiwiLy8gQnJlYWtwb2ludCB2aWV3cG9ydCBzaXplcyBhbmQgbWVkaWEgcXVlcmllcy5cbi8vXG4vLyBCcmVha3BvaW50cyBhcmUgZGVmaW5lZCBhcyBhIG1hcCBvZiAobmFtZTogbWluaW11bSB3aWR0aCksIG9yZGVyIGZyb20gc21hbGwgdG8gbGFyZ2U6XG4vL1xuLy8gICAgKHhzOiAwLCBzbTogNTc2cHgsIG1kOiA3NjhweCwgbGc6IDk5MnB4LCB4bDogMTIwMHB4KVxuLy9cbi8vIFRoZSBtYXAgZGVmaW5lZCBpbiB0aGUgYCRncmlkLWJyZWFrcG9pbnRzYCBnbG9iYWwgdmFyaWFibGUgaXMgdXNlZCBhcyB0aGUgYCRicmVha3BvaW50c2AgYXJndW1lbnQgYnkgZGVmYXVsdC5cblxuLy8gTmFtZSBvZiB0aGUgbmV4dCBicmVha3BvaW50LCBvciBudWxsIGZvciB0aGUgbGFzdCBicmVha3BvaW50LlxuLy9cbi8vICAgID4+IGJyZWFrcG9pbnQtbmV4dChzbSlcbi8vICAgIG1kXG4vLyAgICA+PiBicmVha3BvaW50LW5leHQoc20sICh4czogMCwgc206IDU3NnB4LCBtZDogNzY4cHgsIGxnOiA5OTJweCwgeGw6IDEyMDBweCkpXG4vLyAgICBtZFxuLy8gICAgPj4gYnJlYWtwb2ludC1uZXh0KHNtLCAkYnJlYWtwb2ludC1uYW1lczogKHhzIHNtIG1kIGxnIHhsKSlcbi8vICAgIG1kXG5AZnVuY3Rpb24gYnJlYWtwb2ludC1uZXh0KCRuYW1lLCAkYnJlYWtwb2ludHM6ICRncmlkLWJyZWFrcG9pbnRzLCAkYnJlYWtwb2ludC1uYW1lczogbWFwLWtleXMoJGJyZWFrcG9pbnRzKSkge1xuICAkbjogaW5kZXgoJGJyZWFrcG9pbnQtbmFtZXMsICRuYW1lKTtcbiAgQHJldHVybiBpZigkbiA8IGxlbmd0aCgkYnJlYWtwb2ludC1uYW1lcyksIG50aCgkYnJlYWtwb2ludC1uYW1lcywgJG4gKyAxKSwgbnVsbCk7XG59XG5cbi8vIE1pbmltdW0gYnJlYWtwb2ludCB3aWR0aC4gTnVsbCBmb3IgdGhlIHNtYWxsZXN0IChmaXJzdCkgYnJlYWtwb2ludC5cbi8vXG4vLyAgICA+PiBicmVha3BvaW50LW1pbihzbSwgKHhzOiAwLCBzbTogNTc2cHgsIG1kOiA3NjhweCwgbGc6IDk5MnB4LCB4bDogMTIwMHB4KSlcbi8vICAgIDU3NnB4XG5AZnVuY3Rpb24gYnJlYWtwb2ludC1taW4oJG5hbWUsICRicmVha3BvaW50czogJGdyaWQtYnJlYWtwb2ludHMpIHtcbiAgJG1pbjogbWFwLWdldCgkYnJlYWtwb2ludHMsICRuYW1lKTtcbiAgQHJldHVybiBpZigkbWluICE9IDAsICRtaW4sIG51bGwpO1xufVxuXG4vLyBNYXhpbXVtIGJyZWFrcG9pbnQgd2lkdGguIE51bGwgZm9yIHRoZSBsYXJnZXN0IChsYXN0KSBicmVha3BvaW50LlxuLy8gVGhlIG1heGltdW0gdmFsdWUgaXMgY2FsY3VsYXRlZCBhcyB0aGUgbWluaW11bSBvZiB0aGUgbmV4dCBvbmUgbGVzcyAwLjAycHhcbi8vIHRvIHdvcmsgYXJvdW5kIHRoZSBsaW1pdGF0aW9ucyBvZiBgbWluLWAgYW5kIGBtYXgtYCBwcmVmaXhlcyBhbmQgdmlld3BvcnRzIHdpdGggZnJhY3Rpb25hbCB3aWR0aHMuXG4vLyBTZWUgaHR0cHM6Ly93d3cudzMub3JnL1RSL21lZGlhcXVlcmllcy00LyNtcS1taW4tbWF4XG4vLyBVc2VzIDAuMDJweCByYXRoZXIgdGhhbiAwLjAxcHggdG8gd29yayBhcm91bmQgYSBjdXJyZW50IHJvdW5kaW5nIGJ1ZyBpbiBTYWZhcmkuXG4vLyBTZWUgaHR0cHM6Ly9idWdzLndlYmtpdC5vcmcvc2hvd19idWcuY2dpP2lkPTE3ODI2MVxuLy9cbi8vICAgID4+IGJyZWFrcG9pbnQtbWF4KHNtLCAoeHM6IDAsIHNtOiA1NzZweCwgbWQ6IDc2OHB4LCBsZzogOTkycHgsIHhsOiAxMjAwcHgpKVxuLy8gICAgNzY3Ljk4cHhcbkBmdW5jdGlvbiBicmVha3BvaW50LW1heCgkbmFtZSwgJGJyZWFrcG9pbnRzOiAkZ3JpZC1icmVha3BvaW50cykge1xuICAkbmV4dDogYnJlYWtwb2ludC1uZXh0KCRuYW1lLCAkYnJlYWtwb2ludHMpO1xuICBAcmV0dXJuIGlmKCRuZXh0LCBicmVha3BvaW50LW1pbigkbmV4dCwgJGJyZWFrcG9pbnRzKSAtIC4wMnB4LCBudWxsKTtcbn1cblxuLy8gUmV0dXJucyBhIGJsYW5rIHN0cmluZyBpZiBzbWFsbGVzdCBicmVha3BvaW50LCBvdGhlcndpc2UgcmV0dXJucyB0aGUgbmFtZSB3aXRoIGEgZGFzaCBpbiBmcm9udC5cbi8vIFVzZWZ1bCBmb3IgbWFraW5nIHJlc3BvbnNpdmUgdXRpbGl0aWVzLlxuLy9cbi8vICAgID4+IGJyZWFrcG9pbnQtaW5maXgoeHMsICh4czogMCwgc206IDU3NnB4LCBtZDogNzY4cHgsIGxnOiA5OTJweCwgeGw6IDEyMDBweCkpXG4vLyAgICBcIlwiICAoUmV0dXJucyBhIGJsYW5rIHN0cmluZylcbi8vICAgID4+IGJyZWFrcG9pbnQtaW5maXgoc20sICh4czogMCwgc206IDU3NnB4LCBtZDogNzY4cHgsIGxnOiA5OTJweCwgeGw6IDEyMDBweCkpXG4vLyAgICBcIi1zbVwiXG5AZnVuY3Rpb24gYnJlYWtwb2ludC1pbmZpeCgkbmFtZSwgJGJyZWFrcG9pbnRzOiAkZ3JpZC1icmVha3BvaW50cykge1xuICBAcmV0dXJuIGlmKGJyZWFrcG9pbnQtbWluKCRuYW1lLCAkYnJlYWtwb2ludHMpID09IG51bGwsIFwiXCIsIFwiLSN7JG5hbWV9XCIpO1xufVxuXG4vLyBNZWRpYSBvZiBhdCBsZWFzdCB0aGUgbWluaW11bSBicmVha3BvaW50IHdpZHRoLiBObyBxdWVyeSBmb3IgdGhlIHNtYWxsZXN0IGJyZWFrcG9pbnQuXG4vLyBNYWtlcyB0aGUgQGNvbnRlbnQgYXBwbHkgdG8gdGhlIGdpdmVuIGJyZWFrcG9pbnQgYW5kIHdpZGVyLlxuQG1peGluIG1lZGlhLWJyZWFrcG9pbnQtdXAoJG5hbWUsICRicmVha3BvaW50czogJGdyaWQtYnJlYWtwb2ludHMpIHtcbiAgJG1pbjogYnJlYWtwb2ludC1taW4oJG5hbWUsICRicmVha3BvaW50cyk7XG4gIEBpZiAkbWluIHtcbiAgICBAbWVkaWEgKG1pbi13aWR0aDogJG1pbikge1xuICAgICAgQGNvbnRlbnQ7XG4gICAgfVxuICB9IEBlbHNlIHtcbiAgICBAY29udGVudDtcbiAgfVxufVxuXG4vLyBNZWRpYSBvZiBhdCBtb3N0IHRoZSBtYXhpbXVtIGJyZWFrcG9pbnQgd2lkdGguIE5vIHF1ZXJ5IGZvciB0aGUgbGFyZ2VzdCBicmVha3BvaW50LlxuLy8gTWFrZXMgdGhlIEBjb250ZW50IGFwcGx5IHRvIHRoZSBnaXZlbiBicmVha3BvaW50IGFuZCBuYXJyb3dlci5cbkBtaXhpbiBtZWRpYS1icmVha3BvaW50LWRvd24oJG5hbWUsICRicmVha3BvaW50czogJGdyaWQtYnJlYWtwb2ludHMpIHtcbiAgJG1heDogYnJlYWtwb2ludC1tYXgoJG5hbWUsICRicmVha3BvaW50cyk7XG4gIEBpZiAkbWF4IHtcbiAgICBAbWVkaWEgKG1heC13aWR0aDogJG1heCkge1xuICAgICAgQGNvbnRlbnQ7XG4gICAgfVxuICB9IEBlbHNlIHtcbiAgICBAY29udGVudDtcbiAgfVxufVxuXG4vLyBNZWRpYSB0aGF0IHNwYW5zIG11bHRpcGxlIGJyZWFrcG9pbnQgd2lkdGhzLlxuLy8gTWFrZXMgdGhlIEBjb250ZW50IGFwcGx5IGJldHdlZW4gdGhlIG1pbiBhbmQgbWF4IGJyZWFrcG9pbnRzXG5AbWl4aW4gbWVkaWEtYnJlYWtwb2ludC1iZXR3ZWVuKCRsb3dlciwgJHVwcGVyLCAkYnJlYWtwb2ludHM6ICRncmlkLWJyZWFrcG9pbnRzKSB7XG4gICRtaW46IGJyZWFrcG9pbnQtbWluKCRsb3dlciwgJGJyZWFrcG9pbnRzKTtcbiAgJG1heDogYnJlYWtwb2ludC1tYXgoJHVwcGVyLCAkYnJlYWtwb2ludHMpO1xuXG4gIEBpZiAkbWluICE9IG51bGwgYW5kICRtYXggIT0gbnVsbCB7XG4gICAgQG1lZGlhIChtaW4td2lkdGg6ICRtaW4pIGFuZCAobWF4LXdpZHRoOiAkbWF4KSB7XG4gICAgICBAY29udGVudDtcbiAgICB9XG4gIH0gQGVsc2UgaWYgJG1heCA9PSBudWxsIHtcbiAgICBAaW5jbHVkZSBtZWRpYS1icmVha3BvaW50LXVwKCRsb3dlciwgJGJyZWFrcG9pbnRzKSB7XG4gICAgICBAY29udGVudDtcbiAgICB9XG4gIH0gQGVsc2UgaWYgJG1pbiA9PSBudWxsIHtcbiAgICBAaW5jbHVkZSBtZWRpYS1icmVha3BvaW50LWRvd24oJHVwcGVyLCAkYnJlYWtwb2ludHMpIHtcbiAgICAgIEBjb250ZW50O1xuICAgIH1cbiAgfVxufVxuXG4vLyBNZWRpYSBiZXR3ZWVuIHRoZSBicmVha3BvaW50J3MgbWluaW11bSBhbmQgbWF4aW11bSB3aWR0aHMuXG4vLyBObyBtaW5pbXVtIGZvciB0aGUgc21hbGxlc3QgYnJlYWtwb2ludCwgYW5kIG5vIG1heGltdW0gZm9yIHRoZSBsYXJnZXN0IG9uZS5cbi8vIE1ha2VzIHRoZSBAY29udGVudCBhcHBseSBvbmx5IHRvIHRoZSBnaXZlbiBicmVha3BvaW50LCBub3Qgdmlld3BvcnRzIGFueSB3aWRlciBvciBuYXJyb3dlci5cbkBtaXhpbiBtZWRpYS1icmVha3BvaW50LW9ubHkoJG5hbWUsICRicmVha3BvaW50czogJGdyaWQtYnJlYWtwb2ludHMpIHtcbiAgJG1pbjogYnJlYWtwb2ludC1taW4oJG5hbWUsICRicmVha3BvaW50cyk7XG4gICRtYXg6IGJyZWFrcG9pbnQtbWF4KCRuYW1lLCAkYnJlYWtwb2ludHMpO1xuXG4gIEBpZiAkbWluICE9IG51bGwgYW5kICRtYXggIT0gbnVsbCB7XG4gICAgQG1lZGlhIChtaW4td2lkdGg6ICRtaW4pIGFuZCAobWF4LXdpZHRoOiAkbWF4KSB7XG4gICAgICBAY29udGVudDtcbiAgICB9XG4gIH0gQGVsc2UgaWYgJG1heCA9PSBudWxsIHtcbiAgICBAaW5jbHVkZSBtZWRpYS1icmVha3BvaW50LXVwKCRuYW1lLCAkYnJlYWtwb2ludHMpIHtcbiAgICAgIEBjb250ZW50O1xuICAgIH1cbiAgfSBAZWxzZSBpZiAkbWluID09IG51bGwge1xuICAgIEBpbmNsdWRlIG1lZGlhLWJyZWFrcG9pbnQtZG93bigkbmFtZSwgJGJyZWFrcG9pbnRzKSB7XG4gICAgICBAY29udGVudDtcbiAgICB9XG4gIH1cbn1cbiIsIi8vIEZyYW1ld29yayBncmlkIGdlbmVyYXRpb25cbi8vXG4vLyBVc2VkIG9ubHkgYnkgQm9vdHN0cmFwIHRvIGdlbmVyYXRlIHRoZSBjb3JyZWN0IG51bWJlciBvZiBncmlkIGNsYXNzZXMgZ2l2ZW5cbi8vIGFueSB2YWx1ZSBvZiBgJGdyaWQtY29sdW1uc2AuXG5cbkBtaXhpbiBtYWtlLWdyaWQtY29sdW1ucygkY29sdW1uczogJGdyaWQtY29sdW1ucywgJGd1dHRlcjogJGdyaWQtZ3V0dGVyLXdpZHRoLCAkYnJlYWtwb2ludHM6ICRncmlkLWJyZWFrcG9pbnRzKSB7XG4gIC8vIENvbW1vbiBwcm9wZXJ0aWVzIGZvciBhbGwgYnJlYWtwb2ludHNcbiAgJWdyaWQtY29sdW1uIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbWluLWhlaWdodDogMXB4OyAvLyBQcmV2ZW50IGNvbHVtbnMgZnJvbSBjb2xsYXBzaW5nIHdoZW4gZW1wdHlcbiAgICBwYWRkaW5nLXJpZ2h0OiAoJGd1dHRlciAvIDIpO1xuICAgIHBhZGRpbmctbGVmdDogKCRndXR0ZXIgLyAyKTtcbiAgfVxuXG4gIEBlYWNoICRicmVha3BvaW50IGluIG1hcC1rZXlzKCRicmVha3BvaW50cykge1xuICAgICRpbmZpeDogYnJlYWtwb2ludC1pbmZpeCgkYnJlYWtwb2ludCwgJGJyZWFrcG9pbnRzKTtcblxuICAgIC8vIEFsbG93IGNvbHVtbnMgdG8gc3RyZXRjaCBmdWxsIHdpZHRoIGJlbG93IHRoZWlyIGJyZWFrcG9pbnRzXG4gICAgQGZvciAkaSBmcm9tIDEgdGhyb3VnaCAkY29sdW1ucyB7XG4gICAgICAuY29sI3skaW5maXh9LSN7JGl9IHtcbiAgICAgICAgQGV4dGVuZCAlZ3JpZC1jb2x1bW47XG4gICAgICB9XG4gICAgfVxuICAgIC5jb2wjeyRpbmZpeH0sXG4gICAgLmNvbCN7JGluZml4fS1hdXRvIHtcbiAgICAgIEBleHRlbmQgJWdyaWQtY29sdW1uO1xuICAgIH1cblxuICAgIEBpbmNsdWRlIG1lZGlhLWJyZWFrcG9pbnQtdXAoJGJyZWFrcG9pbnQsICRicmVha3BvaW50cykge1xuICAgICAgLy8gUHJvdmlkZSBiYXNpYyBgLmNvbC17YnB9YCBjbGFzc2VzIGZvciBlcXVhbC13aWR0aCBmbGV4Ym94IGNvbHVtbnNcbiAgICAgIC5jb2wjeyRpbmZpeH0ge1xuICAgICAgICBmbGV4LWJhc2lzOiAwO1xuICAgICAgICBmbGV4LWdyb3c6IDE7XG4gICAgICAgIG1heC13aWR0aDogMTAwJTtcbiAgICAgIH1cbiAgICAgIC5jb2wjeyRpbmZpeH0tYXV0byB7XG4gICAgICAgIGZsZXg6IDAgMCBhdXRvO1xuICAgICAgICB3aWR0aDogYXV0bztcbiAgICAgICAgbWF4LXdpZHRoOiBub25lOyAvLyBSZXNldCBlYXJsaWVyIGdyaWQgdGllcnNcbiAgICAgIH1cblxuICAgICAgQGZvciAkaSBmcm9tIDEgdGhyb3VnaCAkY29sdW1ucyB7XG4gICAgICAgIC5jb2wjeyRpbmZpeH0tI3skaX0ge1xuICAgICAgICAgIEBpbmNsdWRlIG1ha2UtY29sKCRpLCAkY29sdW1ucyk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLm9yZGVyI3skaW5maXh9LWZpcnN0IHsgb3JkZXI6IC0xOyB9XG5cbiAgICAgIC5vcmRlciN7JGluZml4fS1sYXN0IHsgb3JkZXI6ICRjb2x1bW5zICsgMTsgfVxuXG4gICAgICBAZm9yICRpIGZyb20gMCB0aHJvdWdoICRjb2x1bW5zIHtcbiAgICAgICAgLm9yZGVyI3skaW5maXh9LSN7JGl9IHsgb3JkZXI6ICRpOyB9XG4gICAgICB9XG5cbiAgICAgIC8vIGAkY29sdW1ucyAtIDFgIGJlY2F1c2Ugb2Zmc2V0dGluZyBieSB0aGUgd2lkdGggb2YgYW4gZW50aXJlIHJvdyBpc24ndCBwb3NzaWJsZVxuICAgICAgQGZvciAkaSBmcm9tIDAgdGhyb3VnaCAoJGNvbHVtbnMgLSAxKSB7XG4gICAgICAgIEBpZiBub3QgKCRpbmZpeCA9PSBcIlwiIGFuZCAkaSA9PSAwKSB7IC8vIEF2b2lkIGVtaXR0aW5nIHVzZWxlc3MgLm9mZnNldC0wXG4gICAgICAgICAgLm9mZnNldCN7JGluZml4fS0jeyRpfSB7XG4gICAgICAgICAgICBAaW5jbHVkZSBtYWtlLWNvbC1vZmZzZXQoJGksICRjb2x1bW5zKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbiIsIi8vIHN0eWxlbGludC1kaXNhYmxlIGRlY2xhcmF0aW9uLW5vLWltcG9ydGFudFxuXG4vL1xuLy8gVXRpbGl0aWVzIGZvciBjb21tb24gYGRpc3BsYXlgIHZhbHVlc1xuLy9cblxuQGVhY2ggJGJyZWFrcG9pbnQgaW4gbWFwLWtleXMoJGdyaWQtYnJlYWtwb2ludHMpIHtcbiAgQGluY2x1ZGUgbWVkaWEtYnJlYWtwb2ludC11cCgkYnJlYWtwb2ludCkge1xuICAgICRpbmZpeDogYnJlYWtwb2ludC1pbmZpeCgkYnJlYWtwb2ludCwgJGdyaWQtYnJlYWtwb2ludHMpO1xuXG4gICAgLmQjeyRpbmZpeH0tbm9uZSAgICAgICAgIHsgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50OyB9XG4gICAgLmQjeyRpbmZpeH0taW5saW5lICAgICAgIHsgZGlzcGxheTogaW5saW5lICFpbXBvcnRhbnQ7IH1cbiAgICAuZCN7JGluZml4fS1pbmxpbmUtYmxvY2sgeyBkaXNwbGF5OiBpbmxpbmUtYmxvY2sgIWltcG9ydGFudDsgfVxuICAgIC5kI3skaW5maXh9LWJsb2NrICAgICAgICB7IGRpc3BsYXk6IGJsb2NrICFpbXBvcnRhbnQ7IH1cbiAgICAuZCN7JGluZml4fS10YWJsZSAgICAgICAgeyBkaXNwbGF5OiB0YWJsZSAhaW1wb3J0YW50OyB9XG4gICAgLmQjeyRpbmZpeH0tdGFibGUtcm93ICAgIHsgZGlzcGxheTogdGFibGUtcm93ICFpbXBvcnRhbnQ7IH1cbiAgICAuZCN7JGluZml4fS10YWJsZS1jZWxsICAgeyBkaXNwbGF5OiB0YWJsZS1jZWxsICFpbXBvcnRhbnQ7IH1cbiAgICAuZCN7JGluZml4fS1mbGV4ICAgICAgICAgeyBkaXNwbGF5OiBmbGV4ICFpbXBvcnRhbnQ7IH1cbiAgICAuZCN7JGluZml4fS1pbmxpbmUtZmxleCAgeyBkaXNwbGF5OiBpbmxpbmUtZmxleCAhaW1wb3J0YW50OyB9XG4gIH1cbn1cblxuXG4vL1xuLy8gVXRpbGl0aWVzIGZvciB0b2dnbGluZyBgZGlzcGxheWAgaW4gcHJpbnRcbi8vXG5cbkBtZWRpYSBwcmludCB7XG4gIC5kLXByaW50LW5vbmUgICAgICAgICB7IGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDsgfVxuICAuZC1wcmludC1pbmxpbmUgICAgICAgeyBkaXNwbGF5OiBpbmxpbmUgIWltcG9ydGFudDsgfVxuICAuZC1wcmludC1pbmxpbmUtYmxvY2sgeyBkaXNwbGF5OiBpbmxpbmUtYmxvY2sgIWltcG9ydGFudDsgfVxuICAuZC1wcmludC1ibG9jayAgICAgICAgeyBkaXNwbGF5OiBibG9jayAhaW1wb3J0YW50OyB9XG4gIC5kLXByaW50LXRhYmxlICAgICAgICB7IGRpc3BsYXk6IHRhYmxlICFpbXBvcnRhbnQ7IH1cbiAgLmQtcHJpbnQtdGFibGUtcm93ICAgIHsgZGlzcGxheTogdGFibGUtcm93ICFpbXBvcnRhbnQ7IH1cbiAgLmQtcHJpbnQtdGFibGUtY2VsbCAgIHsgZGlzcGxheTogdGFibGUtY2VsbCAhaW1wb3J0YW50OyB9XG4gIC5kLXByaW50LWZsZXggICAgICAgICB7IGRpc3BsYXk6IGZsZXggIWltcG9ydGFudDsgfVxuICAuZC1wcmludC1pbmxpbmUtZmxleCAgeyBkaXNwbGF5OiBpbmxpbmUtZmxleCAhaW1wb3J0YW50OyB9XG59XG4iLCIvLyBzdHlsZWxpbnQtZGlzYWJsZSBkZWNsYXJhdGlvbi1uby1pbXBvcnRhbnRcblxuLy8gRmxleCB2YXJpYXRpb25cbi8vXG4vLyBDdXN0b20gc3R5bGVzIGZvciBhZGRpdGlvbmFsIGZsZXggYWxpZ25tZW50IG9wdGlvbnMuXG5cbkBlYWNoICRicmVha3BvaW50IGluIG1hcC1rZXlzKCRncmlkLWJyZWFrcG9pbnRzKSB7XG4gIEBpbmNsdWRlIG1lZGlhLWJyZWFrcG9pbnQtdXAoJGJyZWFrcG9pbnQpIHtcbiAgICAkaW5maXg6IGJyZWFrcG9pbnQtaW5maXgoJGJyZWFrcG9pbnQsICRncmlkLWJyZWFrcG9pbnRzKTtcblxuICAgIC5mbGV4I3skaW5maXh9LXJvdyAgICAgICAgICAgIHsgZmxleC1kaXJlY3Rpb246IHJvdyAhaW1wb3J0YW50OyB9XG4gICAgLmZsZXgjeyRpbmZpeH0tY29sdW1uICAgICAgICAgeyBmbGV4LWRpcmVjdGlvbjogY29sdW1uICFpbXBvcnRhbnQ7IH1cbiAgICAuZmxleCN7JGluZml4fS1yb3ctcmV2ZXJzZSAgICB7IGZsZXgtZGlyZWN0aW9uOiByb3ctcmV2ZXJzZSAhaW1wb3J0YW50OyB9XG4gICAgLmZsZXgjeyRpbmZpeH0tY29sdW1uLXJldmVyc2UgeyBmbGV4LWRpcmVjdGlvbjogY29sdW1uLXJldmVyc2UgIWltcG9ydGFudDsgfVxuXG4gICAgLmZsZXgjeyRpbmZpeH0td3JhcCAgICAgICAgIHsgZmxleC13cmFwOiB3cmFwICFpbXBvcnRhbnQ7IH1cbiAgICAuZmxleCN7JGluZml4fS1ub3dyYXAgICAgICAgeyBmbGV4LXdyYXA6IG5vd3JhcCAhaW1wb3J0YW50OyB9XG4gICAgLmZsZXgjeyRpbmZpeH0td3JhcC1yZXZlcnNlIHsgZmxleC13cmFwOiB3cmFwLXJldmVyc2UgIWltcG9ydGFudDsgfVxuICAgIC5mbGV4I3skaW5maXh9LWZpbGwgICAgICAgICB7IGZsZXg6IDEgMSBhdXRvICFpbXBvcnRhbnQ7IH1cbiAgICAuZmxleCN7JGluZml4fS1ncm93LTAgICAgICAgeyBmbGV4LWdyb3c6IDAgIWltcG9ydGFudDsgfVxuICAgIC5mbGV4I3skaW5maXh9LWdyb3ctMSAgICAgICB7IGZsZXgtZ3JvdzogMSAhaW1wb3J0YW50OyB9XG4gICAgLmZsZXgjeyRpbmZpeH0tc2hyaW5rLTAgICAgIHsgZmxleC1zaHJpbms6IDAgIWltcG9ydGFudDsgfVxuICAgIC5mbGV4I3skaW5maXh9LXNocmluay0xICAgICB7IGZsZXgtc2hyaW5rOiAxICFpbXBvcnRhbnQ7IH1cblxuICAgIC5qdXN0aWZ5LWNvbnRlbnQjeyRpbmZpeH0tc3RhcnQgICB7IGp1c3RpZnktY29udGVudDogZmxleC1zdGFydCAhaW1wb3J0YW50OyB9XG4gICAgLmp1c3RpZnktY29udGVudCN7JGluZml4fS1lbmQgICAgIHsganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZCAhaW1wb3J0YW50OyB9XG4gICAgLmp1c3RpZnktY29udGVudCN7JGluZml4fS1jZW50ZXIgIHsganVzdGlmeS1jb250ZW50OiBjZW50ZXIgIWltcG9ydGFudDsgfVxuICAgIC5qdXN0aWZ5LWNvbnRlbnQjeyRpbmZpeH0tYmV0d2VlbiB7IGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbiAhaW1wb3J0YW50OyB9XG4gICAgLmp1c3RpZnktY29udGVudCN7JGluZml4fS1hcm91bmQgIHsganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQgIWltcG9ydGFudDsgfVxuXG4gICAgLmFsaWduLWl0ZW1zI3skaW5maXh9LXN0YXJ0ICAgIHsgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQgIWltcG9ydGFudDsgfVxuICAgIC5hbGlnbi1pdGVtcyN7JGluZml4fS1lbmQgICAgICB7IGFsaWduLWl0ZW1zOiBmbGV4LWVuZCAhaW1wb3J0YW50OyB9XG4gICAgLmFsaWduLWl0ZW1zI3skaW5maXh9LWNlbnRlciAgIHsgYWxpZ24taXRlbXM6IGNlbnRlciAhaW1wb3J0YW50OyB9XG4gICAgLmFsaWduLWl0ZW1zI3skaW5maXh9LWJhc2VsaW5lIHsgYWxpZ24taXRlbXM6IGJhc2VsaW5lICFpbXBvcnRhbnQ7IH1cbiAgICAuYWxpZ24taXRlbXMjeyRpbmZpeH0tc3RyZXRjaCAgeyBhbGlnbi1pdGVtczogc3RyZXRjaCAhaW1wb3J0YW50OyB9XG5cbiAgICAuYWxpZ24tY29udGVudCN7JGluZml4fS1zdGFydCAgIHsgYWxpZ24tY29udGVudDogZmxleC1zdGFydCAhaW1wb3J0YW50OyB9XG4gICAgLmFsaWduLWNvbnRlbnQjeyRpbmZpeH0tZW5kICAgICB7IGFsaWduLWNvbnRlbnQ6IGZsZXgtZW5kICFpbXBvcnRhbnQ7IH1cbiAgICAuYWxpZ24tY29udGVudCN7JGluZml4fS1jZW50ZXIgIHsgYWxpZ24tY29udGVudDogY2VudGVyICFpbXBvcnRhbnQ7IH1cbiAgICAuYWxpZ24tY29udGVudCN7JGluZml4fS1iZXR3ZWVuIHsgYWxpZ24tY29udGVudDogc3BhY2UtYmV0d2VlbiAhaW1wb3J0YW50OyB9XG4gICAgLmFsaWduLWNvbnRlbnQjeyRpbmZpeH0tYXJvdW5kICB7IGFsaWduLWNvbnRlbnQ6IHNwYWNlLWFyb3VuZCAhaW1wb3J0YW50OyB9XG4gICAgLmFsaWduLWNvbnRlbnQjeyRpbmZpeH0tc3RyZXRjaCB7IGFsaWduLWNvbnRlbnQ6IHN0cmV0Y2ggIWltcG9ydGFudDsgfVxuXG4gICAgLmFsaWduLXNlbGYjeyRpbmZpeH0tYXV0byAgICAgeyBhbGlnbi1zZWxmOiBhdXRvICFpbXBvcnRhbnQ7IH1cbiAgICAuYWxpZ24tc2VsZiN7JGluZml4fS1zdGFydCAgICB7IGFsaWduLXNlbGY6IGZsZXgtc3RhcnQgIWltcG9ydGFudDsgfVxuICAgIC5hbGlnbi1zZWxmI3skaW5maXh9LWVuZCAgICAgIHsgYWxpZ24tc2VsZjogZmxleC1lbmQgIWltcG9ydGFudDsgfVxuICAgIC5hbGlnbi1zZWxmI3skaW5maXh9LWNlbnRlciAgIHsgYWxpZ24tc2VsZjogY2VudGVyICFpbXBvcnRhbnQ7IH1cbiAgICAuYWxpZ24tc2VsZiN7JGluZml4fS1iYXNlbGluZSB7IGFsaWduLXNlbGY6IGJhc2VsaW5lICFpbXBvcnRhbnQ7IH1cbiAgICAuYWxpZ24tc2VsZiN7JGluZml4fS1zdHJldGNoICB7IGFsaWduLXNlbGY6IHN0cmV0Y2ggIWltcG9ydGFudDsgfVxuICB9XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _store_app_actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./store/app.actions */ "./src/app/store/app.actions.ts");
/* harmony import */ var _store_app_selectors__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./store/app.selectors */ "./src/app/store/app.selectors.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var AppComponent = /** @class */ (function () {
    function AppComponent(store, router) {
        this.store = store;
        this.router = router;
        this.title = 'Notebook';
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.showNew = this.store.select(Object(_store_app_selectors__WEBPACK_IMPORTED_MODULE_5__["getEntryFormState"])(""))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["combineLatest"])(this.router.events, function (formState, _) { return !formState && (_this.router.url == '/log'); }));
        this.store.dispatch(new _store_app_actions__WEBPACK_IMPORTED_MODULE_4__["GetItems"]());
        this.store.dispatch(new _store_app_actions__WEBPACK_IMPORTED_MODULE_4__["GetEntries"]());
    };
    AppComponent.prototype.dispatchNew = function () {
        this.store.dispatch(new _store_app_actions__WEBPACK_IMPORTED_MODULE_4__["NewEntry"]());
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")],
        }),
        __metadata("design:paramtypes", [_ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/expansion */ "./node_modules/@angular/material/esm5/expansion.es5.js");
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/grid-list */ "./node_modules/@angular/material/esm5/grid-list.es5.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/esm5/icon.es5.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/esm5/card.es5.js");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/tabs */ "./node_modules/@angular/material/esm5/tabs.es5.js");
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/datepicker */ "./node_modules/@angular/material/esm5/datepicker.es5.js");
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/autocomplete */ "./node_modules/@angular/material/esm5/autocomplete.es5.js");
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/radio */ "./node_modules/@angular/material/esm5/radio.es5.js");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/menu */ "./node_modules/@angular/material/esm5/menu.es5.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/esm5/table.es5.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _mocks_backend_mock__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./mocks/backend.mock */ "./src/app/mocks/backend.mock.ts");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/fesm5/effects.js");
/* harmony import */ var _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @ngrx/store-devtools */ "./node_modules/@ngrx/store-devtools/fesm5/store-devtools.js");
/* harmony import */ var _store_app_reducers__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./store/app.reducers */ "./src/app/store/app.reducers.ts");
/* harmony import */ var _store_app_effects__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./store/app.effects */ "./src/app/store/app.effects.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _entry_list_entry_list_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./entry-list/entry-list.component */ "./src/app/entry-list/entry-list.component.ts");
/* harmony import */ var _entry_entry_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./entry/entry.component */ "./src/app/entry/entry.component.ts");
/* harmony import */ var _transaction_transaction_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./transaction/transaction.component */ "./src/app/transaction/transaction.component.ts");
/* harmony import */ var _item_selector_item_selector_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./item-selector/item-selector.component */ "./src/app/item-selector/item-selector.component.ts");
/* harmony import */ var _item_form_dialog_item_form_dialog_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./item-form-dialog/item-form-dialog.component */ "./src/app/item-form-dialog/item-form-dialog.component.ts");
/* harmony import */ var _item_form_item_form_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./item-form/item-form.component */ "./src/app/item-form/item-form.component.ts");
/* harmony import */ var _item_properties_item_properties_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./item-properties/item-properties.component */ "./src/app/item-properties/item-properties.component.ts");
/* harmony import */ var _item_properties_form_item_properties_form_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./item-properties-form/item-properties-form.component */ "./src/app/item-properties-form/item-properties-form.component.ts");
/* harmony import */ var _inventory_inventory_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./inventory/inventory.component */ "./src/app/inventory/inventory.component.ts");
/* harmony import */ var _nav_menu_nav_menu_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./nav-menu/nav-menu.component */ "./src/app/nav-menu/nav-menu.component.ts");
/* harmony import */ var _nav_menu_item_item_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./nav-menu/item/item.component */ "./src/app/nav-menu/item/item.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


// component libraries















// http stuff


// ngrx





// components












var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_24__["AppComponent"],
                _entry_list_entry_list_component__WEBPACK_IMPORTED_MODULE_25__["EntryListComponent"],
                _entry_entry_component__WEBPACK_IMPORTED_MODULE_26__["EntryComponent"],
                _transaction_transaction_component__WEBPACK_IMPORTED_MODULE_27__["TransactionComponent"],
                _item_selector_item_selector_component__WEBPACK_IMPORTED_MODULE_28__["ItemSelectorComponent"],
                _item_form_item_form_component__WEBPACK_IMPORTED_MODULE_30__["ItemFormComponent"],
                _item_form_dialog_item_form_dialog_component__WEBPACK_IMPORTED_MODULE_29__["ItemFormDialog"],
                _item_properties_item_properties_component__WEBPACK_IMPORTED_MODULE_31__["ItemPropertiesComponent"],
                _item_properties_form_item_properties_form_component__WEBPACK_IMPORTED_MODULE_32__["ItemPropertiesFormComponent"],
                _item_form_dialog_item_form_dialog_component__WEBPACK_IMPORTED_MODULE_29__["ItemFormDialog"],
                _inventory_inventory_component__WEBPACK_IMPORTED_MODULE_33__["InventoryComponent"],
                _nav_menu_nav_menu_component__WEBPACK_IMPORTED_MODULE_34__["NavMenuComponent"],
                _nav_menu_item_item_component__WEBPACK_IMPORTED_MODULE_35__["ItemComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_15__["AppRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_17__["HttpClientModule"],
                _ngrx_store__WEBPACK_IMPORTED_MODULE_19__["StoreModule"].forRoot({ app: _store_app_reducers__WEBPACK_IMPORTED_MODULE_22__["AppReducer"] }),
                _ngrx_effects__WEBPACK_IMPORTED_MODULE_20__["EffectsModule"].forRoot([_store_app_effects__WEBPACK_IMPORTED_MODULE_23__["AppEffects"]]),
                !_environments_environment__WEBPACK_IMPORTED_MODULE_16__["environment"].production ? _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_21__["StoreDevtoolsModule"].instrument({ maxAge: 50 }) : [],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatFormFieldModule"], _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatInputModule"], _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatButtonModule"],
                _angular_material_expansion__WEBPACK_IMPORTED_MODULE_5__["MatExpansionModule"],
                _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_6__["MatGridListModule"],
                _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__["MatIconModule"],
                _angular_material_card__WEBPACK_IMPORTED_MODULE_8__["MatCardModule"],
                _angular_material_tabs__WEBPACK_IMPORTED_MODULE_9__["MatTabsModule"],
                _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_10__["MatDatepickerModule"], _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatNativeDateModule"],
                _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_11__["MatAutocompleteModule"],
                _angular_material_radio__WEBPACK_IMPORTED_MODULE_12__["MatRadioModule"],
                _angular_material_menu__WEBPACK_IMPORTED_MODULE_13__["MatMenuModule"],
                _angular_material_table__WEBPACK_IMPORTED_MODULE_14__["MatTableModule"]
            ],
            entryComponents: [_item_form_dialog_item_form_dialog_component__WEBPACK_IMPORTED_MODULE_29__["ItemFormDialog"]],
            providers: [_mocks_backend_mock__WEBPACK_IMPORTED_MODULE_18__["mockBackendProvider"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_24__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/entry-list/entry-list.component.html":
/*!******************************************************!*\
  !*** ./src/app/entry-list/entry-list.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-entry *ngFor=\"let entry of (entries | async)\" [uuid]=\"entry.uuid\" [expanded]=\"true\"></app-entry>\n"

/***/ }),

/***/ "./src/app/entry-list/entry-list.component.scss":
/*!******************************************************!*\
  !*** ./src/app/entry-list/entry-list.component.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2VudHJ5LWxpc3QvZW50cnktbGlzdC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/entry-list/entry-list.component.ts":
/*!****************************************************!*\
  !*** ./src/app/entry-list/entry-list.component.ts ***!
  \****************************************************/
/*! exports provided: EntryListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EntryListComponent", function() { return EntryListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _store_app_selectors__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../store/app.selectors */ "./src/app/store/app.selectors.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var EntryListComponent = /** @class */ (function () {
    function EntryListComponent(store) {
        this.store = store;
        this.entries = this.store.select(_store_app_selectors__WEBPACK_IMPORTED_MODULE_3__["getEntriesArray"]);
    }
    EntryListComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"])
    ], EntryListComponent.prototype, "entries", void 0);
    EntryListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-entry-list',
            template: __webpack_require__(/*! ./entry-list.component.html */ "./src/app/entry-list/entry-list.component.html"),
            styles: [__webpack_require__(/*! ./entry-list.component.scss */ "./src/app/entry-list/entry-list.component.scss")]
        }),
        __metadata("design:paramtypes", [_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["Store"]])
    ], EntryListComponent);
    return EntryListComponent;
}());



/***/ }),

/***/ "./src/app/entry/entry.component.html":
/*!********************************************!*\
  !*** ./src/app/entry/entry.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-expansion-panel class=\"transaction\" [(expanded)]=\"expanded\">\n  <mat-expansion-panel-header style=\"background-color: #EEEEEE;\">\n    <mat-panel-title>\n      <mat-icon>note</mat-icon>\n    </mat-panel-title>\n    <mat-panel-description>\n    <div *ngIf=\"(editing | async)\" (click)=\"$event.stopPropagation()\">\n      <mat-form-field style=\"width: 100px;\">\n        <input matInput [value]=\"subject?.moment\" [matDatepicker]=\"picker\" placeholder=\"Choose a date\" focused=\"true\" (dateInput)=\"setDate($event)\">\n        <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\n        <mat-datepicker #picker></mat-datepicker>\n      </mat-form-field>\n      <mat-form-field style=\"width: 40px;\">\n        <input matInput type=\"number\" step=\"1\" min=\"1\" max=\"24\" [(ngModel)]=\"formHours\">\n      </mat-form-field>:\n      <mat-form-field style=\"width: 40px;\">\n        <input matInput type=\"number\" step=\"1\" min=\"0\" max=\"59\" [(ngModel)]=\"formMinutes\">\n      </mat-form-field>\n    </div>\n    <div *ngIf=\"!(editing | async)\">\n      {{ momentString() }}\n    </div>\n    </mat-panel-description>\n  </mat-expansion-panel-header>\n\n  <mat-grid-list cols=\"2\" [rowHeight]=\"gridListAspectRatio\">\n    <mat-grid-tile *ngFor=\"let transaction of subject?.transactions\">\n      <app-transaction [transaction]=\"transaction\" [editMode]=\"editing | async\" (remove)=\"delete($event)\"></app-transaction>\n    </mat-grid-tile>\n  </mat-grid-list>\n\n  <mat-action-row>\n    <div *ngIf=\"(editing | async)\">\n      <button mat-button size=\"small\" (click)=\"add()\">Add</button>\n      <button mat-button size=\"small\" color=\"primary\" (click)=\"dispatchCancel();\">Cancel</button>\n      <button mat-button size=\"small\" color=\"primary\" (click)=\"dispatchSave();\">Save</button>\n    </div>\n    <div *ngIf=\"!(editing | async)\">\n      <button mat-button size=\"small\" color=\"primary\" (click)=\"dispatchEdit();\">\n        Edit\n      </button>\n    </div>\n  </mat-action-row>\n</mat-expansion-panel>\n"

/***/ }),

/***/ "./src/app/entry/entry.component.scss":
/*!********************************************!*\
  !*** ./src/app/entry/entry.component.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2VudHJ5L2VudHJ5LmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/entry/entry.component.ts":
/*!******************************************!*\
  !*** ./src/app/entry/entry.component.ts ***!
  \******************************************/
/*! exports provided: EntryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EntryComponent", function() { return EntryComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _store_app_selectors__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../store/app.selectors */ "./src/app/store/app.selectors.ts");
/* harmony import */ var _store_app_actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../store/app.actions */ "./src/app/store/app.actions.ts");
/* harmony import */ var _models_entry_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../models/entry.model */ "./src/app/models/entry.model.ts");
/* harmony import */ var _models_transaction_model__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../models/transaction.model */ "./src/app/models/transaction.model.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var EntryComponent = /** @class */ (function () {
    function EntryComponent(store) {
        this.store = store;
        this.uuid = null;
        this.gridListAspectRatio = '1:1';
    }
    EntryComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.editing = this.store.select(Object(_store_app_selectors__WEBPACK_IMPORTED_MODULE_3__["getEntryFormStateEditing"])(this.uuid))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["startWith"])(false));
        this.loading = this.store.select(Object(_store_app_selectors__WEBPACK_IMPORTED_MODULE_3__["getEntryFormStateLoading"])(this.uuid))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["startWith"])(false));
        this.subjectObs = this.store.select(Object(_store_app_selectors__WEBPACK_IMPORTED_MODULE_3__["getEntryFormStateSubject"])(this.uuid));
        var eAugmented = this.editing.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["startWith"])(false));
        this.subjectObs.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["combineLatest"])(eAugmented, function (s, e) { return ({ s: s, e: e }); })).subscribe(function (data) {
            if (data.s)
                _this.storedSubject = _models_entry_model__WEBPACK_IMPORTED_MODULE_5__["Entry"].copy(data.s);
            if (data.e) {
                _this.formDate = _this.storedSubject.moment;
                _this.formHours = _this.storedSubject.moment.getHours();
                _this.formMinutes = _this.storedSubject.moment.getMinutes();
                _this.gridListAspectRatio = '1:1';
            }
            else {
                _this.subject = _this.storedSubject;
                _this.gridListAspectRatio = '3:1';
            }
        });
    };
    EntryComponent.prototype.setDate = function (date) {
        this.formDate = date.value;
    };
    EntryComponent.prototype.dispatchEdit = function () {
        this.store.dispatch(new _store_app_actions__WEBPACK_IMPORTED_MODULE_4__["EditEntry"](this.subject));
    };
    EntryComponent.prototype.dispatchCancel = function () {
        this.store.dispatch(new _store_app_actions__WEBPACK_IMPORTED_MODULE_4__["CancelEntry"](this.subject));
    };
    EntryComponent.prototype.dispatchSave = function () {
        this.subject.moment = new Date(this.formDate.getFullYear(), this.formDate.getMonth(), this.formDate.getDate(), this.formHours, this.formMinutes);
        this.store.dispatch(this.subject.uuid ?
            new _store_app_actions__WEBPACK_IMPORTED_MODULE_4__["UpdateEntry"](this.subject) :
            new _store_app_actions__WEBPACK_IMPORTED_MODULE_4__["CreateEntry"](this.subject));
    };
    EntryComponent.prototype.delete = function (transaction) {
        this.subject.transactions
            = this.subject.transactions.filter(function (t) { return (t != transaction); });
    };
    EntryComponent.prototype.add = function () {
        this.subject.transactions.push(new _models_transaction_model__WEBPACK_IMPORTED_MODULE_6__["Transaction"]);
    };
    EntryComponent.prototype.momentString = function () {
        var mString = "AM";
        var hour = this.subject.moment.getHours();
        if (hour > 12) {
            hour -= 12;
            mString = "PM";
        }
        var minute = "" + this.subject.moment.getMinutes();
        if (minute.length < 2) {
            minute = "0" + minute;
        }
        return (this.subject.moment.getMonth() + 1) + '/' +
            this.subject.moment.getDate() + '/' +
            this.subject.moment.getFullYear() + ' ' +
            hour + ':' + minute + mString;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], EntryComponent.prototype, "uuid", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], EntryComponent.prototype, "expanded", void 0);
    EntryComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-entry',
            template: __webpack_require__(/*! ./entry.component.html */ "./src/app/entry/entry.component.html"),
            styles: [__webpack_require__(/*! ./entry.component.scss */ "./src/app/entry/entry.component.scss")]
        }),
        __metadata("design:paramtypes", [_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["Store"]])
    ], EntryComponent);
    return EntryComponent;
}());



/***/ }),

/***/ "./src/app/inventory/inventory.component.html":
/*!****************************************************!*\
  !*** ./src/app/inventory/inventory.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<table mat-table [dataSource]=\"items | async\" class=\"mat-elevation-z8\">\n\n  <!--- Note that these columns can be defined in any order.\n        The actual rendered columns are set as a property on the row definition\" -->\n\n  <!-- Name Column -->\n  <ng-container matColumnDef=\"name\">\n    <th mat-header-cell *matHeaderCellDef> Name </th>\n    <td mat-cell *matCellDef=\"let item\"> {{item.name}} </td>\n  </ng-container>\n\n  <!-- Num remaining -->\n  <ng-container matColumnDef=\"number\">\n    <th mat-header-cell *matHeaderCellDef> # </th>\n    <td mat-cell *matCellDef=\"let item\"> {{item.numRemaining}} </td>\n  </ng-container>\n\n  <!-- Num produced -->\n  <ng-container matColumnDef=\"numberTotal\">\n    <th mat-header-cell *matHeaderCellDef> # Total </th>\n    <td mat-cell *matCellDef=\"let item\"> {{item.numProduced}} </td>\n  </ng-container>\n\n  <!-- Last modified -->\n  <ng-container matColumnDef=\"lastUsed\">\n    <th mat-header-cell *matHeaderCellDef> Last Used </th>\n    <td mat-cell *matCellDef=\"let item\"> {{item.lastUsed}} </td>\n  </ng-container>\n\n  <!-- TODO several property colums -->\n\n  <!-- Controls -->\n  <ng-container matColumnDef=\"editButton\">\n    <th mat-header-cell *matHeaderCellDef></th>\n    <td mat-cell *matCellDef=\"let item\">\n      <button mat-button (click)=\"dispatchEditItem(item)\">Edit</button>\n    </td>\n  </ng-container>\n  <ng-container matColumnDef=\"deleteButton\">\n    <th mat-header-cell *matHeaderCellDef></th>\n    <td mat-cell *matCellDef=\"let item\">\n      <button mat-button (click)=\"dispatchDeleteItem(item)\">Delete</button>\n    </td>\n  </ng-container>\n\n  <!-- TODO sortable header -->\n  <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n  <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n\n  <!-- TODO .pagination -->\n</table>\n"

/***/ }),

/***/ "./src/app/inventory/inventory.component.scss":
/*!****************************************************!*\
  !*** ./src/app/inventory/inventory.component.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".mat-cell {\n  padding: 5px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3hhbmRlci9nby9zcmMvZ2l0aHViLmNvbS94YW5kZXJmbG9vZC9ub3RlYm9vay91aS9ub3RlYm9vay9zcmMvYXBwL2ludmVudG9yeS9pbnZlbnRvcnkuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFZLEVBQ2IiLCJmaWxlIjoic3JjL2FwcC9pbnZlbnRvcnkvaW52ZW50b3J5LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1hdC1jZWxsIHtcbiAgcGFkZGluZzogNXB4O1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/inventory/inventory.component.ts":
/*!**************************************************!*\
  !*** ./src/app/inventory/inventory.component.ts ***!
  \**************************************************/
/*! exports provided: InventoryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InventoryComponent", function() { return InventoryComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _store_app_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../store/app.actions */ "./src/app/store/app.actions.ts");
/* harmony import */ var _store_app_selectors__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../store/app.selectors */ "./src/app/store/app.selectors.ts");
/* harmony import */ var _item_form_dialog_item_form_dialog_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../item-form-dialog/item-form-dialog.component */ "./src/app/item-form-dialog/item-form-dialog.component.ts");
/* harmony import */ var _item_form_item_form_ref__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../item-form/item-form-ref */ "./src/app/item-form/item-form-ref.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var InventoryComponent = /** @class */ (function () {
    function InventoryComponent(store, itemFormRef) {
        this.store = store;
        this.itemFormRef = itemFormRef;
        this.displayedColumns = ['name', 'number', 'numberTotal', 'lastUsed', 'editButton', 'deleteButton'];
        this.items = this.store.select(_store_app_selectors__WEBPACK_IMPORTED_MODULE_3__["getItemsArray"]);
    }
    InventoryComponent.prototype.ngOnInit = function () { };
    InventoryComponent.prototype.dispatchEditItem = function (item) {
        this.itemFormRef.showDialog(new _item_form_dialog_item_form_dialog_component__WEBPACK_IMPORTED_MODULE_4__["ItemFormDialogData"](item));
    };
    InventoryComponent.prototype.dispatchDeleteItem = function (item) {
        // TODO prompt
        this.store.dispatch(new _store_app_actions__WEBPACK_IMPORTED_MODULE_2__["DeleteItem"](item));
    };
    InventoryComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-inventory',
            template: __webpack_require__(/*! ./inventory.component.html */ "./src/app/inventory/inventory.component.html"),
            styles: [__webpack_require__(/*! ./inventory.component.scss */ "./src/app/inventory/inventory.component.scss")]
        }),
        __metadata("design:paramtypes", [_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["Store"],
            _item_form_item_form_ref__WEBPACK_IMPORTED_MODULE_5__["ItemFormRef"]])
    ], InventoryComponent);
    return InventoryComponent;
}());



/***/ }),

/***/ "./src/app/item-form-dialog/item-form-dialog.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/item-form-dialog/item-form-dialog.component.ts ***!
  \****************************************************************/
/*! exports provided: ItemFormDialogData, ItemFormDialog */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItemFormDialogData", function() { return ItemFormDialogData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItemFormDialog", function() { return ItemFormDialog; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};


var ItemFormDialogData = /** @class */ (function () {
    function ItemFormDialogData(item, onSuccess) {
        if (onSuccess === void 0) { onSuccess = function (item) { return null; }; }
        this.item = item;
        this.onSuccess = onSuccess;
    }
    return ItemFormDialogData;
}());

var ItemFormDialog = /** @class */ (function () {
    function ItemFormDialog(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
    }
    ItemFormDialog.prototype.close = function () { this.dialogRef.close(); };
    ItemFormDialog = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-new-item-dialog',
            template: '<app-item-form (canceled)="close()" [item]="data.item" (success)="data.onSuccess($event)"></app-item-form>'
        }),
        __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"],
            ItemFormDialogData])
    ], ItemFormDialog);
    return ItemFormDialog;
}());



/***/ }),

/***/ "./src/app/item-form/item-form-ref.ts":
/*!********************************************!*\
  !*** ./src/app/item-form/item-form-ref.ts ***!
  \********************************************/
/*! exports provided: ItemFormRef */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItemFormRef", function() { return ItemFormRef; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _item_form_dialog_item_form_dialog_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../item-form-dialog/item-form-dialog.component */ "./src/app/item-form-dialog/item-form-dialog.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ItemFormRef = /** @class */ (function () {
    function ItemFormRef(itemFormDialog) {
        this.itemFormDialog = itemFormDialog;
    }
    ItemFormRef.prototype.showDialog = function (data) {
        this.itemFormDialog.open(_item_form_dialog_item_form_dialog_component__WEBPACK_IMPORTED_MODULE_2__["ItemFormDialog"], {
            width: '50vw',
            maxWidth: '400px',
            minWidth: '350px',
            restoreFocus: false,
            data: data,
        });
    };
    ItemFormRef.prototype.closeDialog = function () {
        this.itemFormDialog.closeAll();
    };
    ItemFormRef = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({ providedIn: 'root' }),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialog"]])
    ], ItemFormRef);
    return ItemFormRef;
}());



/***/ }),

/***/ "./src/app/item-form/item-form.component.html":
/*!****************************************************!*\
  !*** ./src/app/item-form/item-form.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1 mat-dialog-title>New Item</h1>\n\n<div mat-dialog-content>\n  <input matInput placeholder=\"Name\" aria-label=\"Name\" [(ngModel)]=\"item.name\" style=\"background-color: #EEEEEE;\" #ctrl=\"ngModel\" required/>\n\n  <app-item-properties-form [properties]=\"item.properties\"></app-item-properties-form>\n</div>\n\n<div mat-dialog-actions>\n  <button mat-button (click)=\"dispatchCancel()\">Cancel</button>\n  <button mat-button (click)=\"dispatchSave()\">Save</button>\n</div>\n"

/***/ }),

/***/ "./src/app/item-form/item-form.component.scss":
/*!****************************************************!*\
  !*** ./src/app/item-form/item-form.component.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2l0ZW0tZm9ybS9pdGVtLWZvcm0uY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/item-form/item-form.component.ts":
/*!**************************************************!*\
  !*** ./src/app/item-form/item-form.component.ts ***!
  \**************************************************/
/*! exports provided: ItemFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItemFormComponent", function() { return ItemFormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _item_properties_form_item_properties_form_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../item-properties-form/item-properties-form.component */ "./src/app/item-properties-form/item-properties-form.component.ts");
/* harmony import */ var _store_app_selectors__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../store/app.selectors */ "./src/app/store/app.selectors.ts");
/* harmony import */ var _store_app_actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../store/app.actions */ "./src/app/store/app.actions.ts");
/* harmony import */ var _models_item_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../models/item.model */ "./src/app/models/item.model.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ItemFormComponent = /** @class */ (function () {
    function ItemFormComponent(store) {
        this.store = store;
        this.success = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.canceled = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.loading = store.select(_store_app_selectors__WEBPACK_IMPORTED_MODULE_3__["getItemFormLoading"]);
        this.error = store.select(_store_app_selectors__WEBPACK_IMPORTED_MODULE_3__["getItemFormError"]);
    }
    ItemFormComponent.prototype.ngOnInit = function () {
        if (this.item) {
            this.item = _models_item_model__WEBPACK_IMPORTED_MODULE_5__["Item"].copy(this.item);
        }
        else {
            this.item = new _models_item_model__WEBPACK_IMPORTED_MODULE_5__["Item"]();
        }
    };
    ItemFormComponent.prototype.dispatchCancel = function () {
        this.canceled.emit();
        this.store.dispatch(new _store_app_actions__WEBPACK_IMPORTED_MODULE_4__["CancelItem"]());
    };
    ItemFormComponent.prototype.dispatchSave = function () {
        var _this = this;
        this.item.properties = this.propertiesForm.properties;
        this.store.dispatch(this.item.uuid ?
            new _store_app_actions__WEBPACK_IMPORTED_MODULE_4__["UpdateItem"](this.item, function (item) { return _this.success.emit(item); }) :
            new _store_app_actions__WEBPACK_IMPORTED_MODULE_4__["CreateItem"](this.item, function (item) { return _this.success.emit(item); }));
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_item_properties_form_item_properties_form_component__WEBPACK_IMPORTED_MODULE_2__["ItemPropertiesFormComponent"]),
        __metadata("design:type", _item_properties_form_item_properties_form_component__WEBPACK_IMPORTED_MODULE_2__["ItemPropertiesFormComponent"])
    ], ItemFormComponent.prototype, "propertiesForm", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], ItemFormComponent.prototype, "success", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], ItemFormComponent.prototype, "canceled", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _models_item_model__WEBPACK_IMPORTED_MODULE_5__["Item"])
    ], ItemFormComponent.prototype, "item", void 0);
    ItemFormComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-item-form',
            template: __webpack_require__(/*! ./item-form.component.html */ "./src/app/item-form/item-form.component.html"),
            styles: [__webpack_require__(/*! ./item-form.component.scss */ "./src/app/item-form/item-form.component.scss")]
        }),
        __metadata("design:paramtypes", [_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["Store"]])
    ], ItemFormComponent);
    return ItemFormComponent;
}());



/***/ }),

/***/ "./src/app/item-properties-form/item-properties-form.component.html":
/*!**************************************************************************!*\
  !*** ./src/app/item-properties-form/item-properties-form.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div style=\"margin-top: 5px;\">\n  <div *ngFor=\"let property of propertiesArray; let i = index\">\n    {{i}}:<span style=\"padding-left: 5px; margin: 0 auto;\">\n      <input matInput size=\"10\" type=\"text\" [(ngModel)]=\"property.name\" style=\"background-color: #EEEEEE; width: 100px; margin: 0 auto;\">\n    </span><span style=\"padding: 3px; margin: 0;\"></span><span style=\"padding-right: 5px; margin: 0 auto;\">\n      <input matInput size=\"10\" type=\"text\" [(ngModel)]=\"property.value\" style=\"background-color: #EEEEEE; width: 100px; margin: 0 auto;\">\n    </span><button mat-button (click)=\"removeProperty(i)\" [disabled]=\"propertiesArray.length == 1\" style=\"background-color: #CCCCCC; min-width: 0;\">-</button>\n  </div>\n  <div style=\"text-align: right;\">\n    <button mat-button (click)=\"addProperty()\" style=\"background-color: #CCCCCC; min-width: 0;\">+</button>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/item-properties-form/item-properties-form.component.scss":
/*!**************************************************************************!*\
  !*** ./src/app/item-properties-form/item-properties-form.component.scss ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2l0ZW0tcHJvcGVydGllcy1mb3JtL2l0ZW0tcHJvcGVydGllcy1mb3JtLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/item-properties-form/item-properties-form.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/item-properties-form/item-properties-form.component.ts ***!
  \************************************************************************/
/*! exports provided: ItemPropertiesFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItemPropertiesFormComponent", function() { return ItemPropertiesFormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _models_item_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models/item.model */ "./src/app/models/item.model.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ItemPropertiesFormComponent = /** @class */ (function () {
    function ItemPropertiesFormComponent() {
        this.propertiesArray = [];
    }
    Object.defineProperty(ItemPropertiesFormComponent.prototype, "properties", {
        get: function () {
            return this.propertiesArray.filter(function (p) { return (p.name.length > 0) || (p.value.length > 0); }).map(function (p) { return _models_item_model__WEBPACK_IMPORTED_MODULE_1__["ItemProperty"].copy(p); });
        },
        set: function (ary) {
            this.propertiesArray = ary.slice();
            this.ensureNonempty();
        },
        enumerable: true,
        configurable: true
    });
    ItemPropertiesFormComponent.prototype.ngOnInit = function () {
        this.ensureNonempty();
    };
    ItemPropertiesFormComponent.prototype.addProperty = function () {
        this.propertiesArray.push(new _models_item_model__WEBPACK_IMPORTED_MODULE_1__["ItemProperty"]());
    };
    ItemPropertiesFormComponent.prototype.removeProperty = function (i) {
        this.propertiesArray.splice(i, 1);
        this.ensureNonempty();
    };
    ItemPropertiesFormComponent.prototype.ensureNonempty = function () {
        if (this.propertiesArray.length == 0)
            this.propertiesArray.push(new _models_item_model__WEBPACK_IMPORTED_MODULE_1__["ItemProperty"]());
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array),
        __metadata("design:paramtypes", [Array])
    ], ItemPropertiesFormComponent.prototype, "properties", null);
    ItemPropertiesFormComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-item-properties-form',
            template: __webpack_require__(/*! ./item-properties-form.component.html */ "./src/app/item-properties-form/item-properties-form.component.html"),
            styles: [__webpack_require__(/*! ./item-properties-form.component.scss */ "./src/app/item-properties-form/item-properties-form.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ItemPropertiesFormComponent);
    return ItemPropertiesFormComponent;
}());



/***/ }),

/***/ "./src/app/item-properties/item-properties.component.html":
/*!****************************************************************!*\
  !*** ./src/app/item-properties/item-properties.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div style=\"margin-top: 5px;\">\n  <div *ngFor=\"let property of properties\">\n    <span style=\"text-align: left; padding-left: 5px;\">\n      <small>{{ property.name }}</small>\n    </span><span style=\"float: right; padding-right: 5px;\">\n      <small>{{ property.value }}</small>\n    </span>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/item-properties/item-properties.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/item-properties/item-properties.component.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2l0ZW0tcHJvcGVydGllcy9pdGVtLXByb3BlcnRpZXMuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/item-properties/item-properties.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/item-properties/item-properties.component.ts ***!
  \**************************************************************/
/*! exports provided: ItemPropertiesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItemPropertiesComponent", function() { return ItemPropertiesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ItemPropertiesComponent = /** @class */ (function () {
    function ItemPropertiesComponent() {
    }
    ItemPropertiesComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], ItemPropertiesComponent.prototype, "properties", void 0);
    ItemPropertiesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-item-properties',
            template: __webpack_require__(/*! ./item-properties.component.html */ "./src/app/item-properties/item-properties.component.html"),
            styles: [__webpack_require__(/*! ./item-properties.component.scss */ "./src/app/item-properties/item-properties.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ItemPropertiesComponent);
    return ItemPropertiesComponent;
}());



/***/ }),

/***/ "./src/app/item-selector/item-selector.component.html":
/*!************************************************************!*\
  !*** ./src/app/item-selector/item-selector.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-form-field style=\"width: 100%;\">\n  <div style=\"position: relative; width: 100%;\">\n    <div style=\"position: relative;  width: 100%; height: 100%; z-index: 0; margin: 0px; padding: 0px;\">\n      <input matInput #querybox placeholder=\"Item\" aria-label=\"Item\" [matAutocomplete]=\"auto\" [formControl]=\"queryCtrl\" style=\"background-color: #EEEEEE;\" (focus)=\"queryBox.nativeElement.select()\" />\n    </div>\n    <div [hidden]=\"hideOverlay()\" style=\"position: absolute; top: 0px; left: 0px; width: 100%; height: 100%; z-index: 1; background-color: #E1E1E1;\">\n      <span>{{selectedItem?.name}}</span> |\n      <small>{{selectedItem?.numRemaining}} remaining</small>\n    </div>\n  </div>\n  <mat-autocomplete #auto=\"matAutocomplete\" [displayWith]=\"itemName\" (optionSelected)=\"optionSelected($event)\">\n    <mat-option *ngIf=\"allowNew\" (click)=\"stopStoringText()\">New item...</mat-option>\n    <mat-option *ngFor=\"let item of filteredItems\" [value]=\"item\">\n      <span>{{item.name}}</span> |\n      <small>{{item.numRemaining}} remaining</small>\n    </mat-option>\n  </mat-autocomplete>\n</mat-form-field>\n"

/***/ }),

/***/ "./src/app/item-selector/item-selector.component.scss":
/*!************************************************************!*\
  !*** ./src/app/item-selector/item-selector.component.scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2l0ZW0tc2VsZWN0b3IvaXRlbS1zZWxlY3Rvci5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/item-selector/item-selector.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/item-selector/item-selector.component.ts ***!
  \**********************************************************/
/*! exports provided: ItemSelectorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItemSelectorComponent", function() { return ItemSelectorComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _store_app_selectors__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../store/app.selectors */ "./src/app/store/app.selectors.ts");
/* harmony import */ var _models_item_model__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../models/item.model */ "./src/app/models/item.model.ts");
/* harmony import */ var _item_form_item_form_ref__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../item-form/item-form-ref */ "./src/app/item-form/item-form-ref.ts");
/* harmony import */ var _item_form_dialog_item_form_dialog_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../item-form-dialog/item-form-dialog.component */ "./src/app/item-form-dialog/item-form-dialog.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var ItemSelectorComponent = /** @class */ (function () {
    function ItemSelectorComponent(store, itemFormRef) {
        this.store = store;
        this.itemFormRef = itemFormRef;
        this.uuidChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.itemsRepository = this.store.select(_store_app_selectors__WEBPACK_IMPORTED_MODULE_5__["getItemsRepository"]);
        this.queryCtrl = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]();
        this.uuidCtrl = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]();
        //by the time optionSelected is called, angular-mat has already
        //overwritten the value in the textbox, so we need to store it
        this.textOnNewClick = "";
        this.storingText = true;
    }
    Object.defineProperty(ItemSelectorComponent.prototype, "uuid", {
        get: function () {
            return this.uuidVal;
        },
        set: function (u) {
            this.uuidVal = u;
            this.uuidChange.emit(u);
        },
        enumerable: true,
        configurable: true
    });
    ItemSelectorComponent.prototype.ngOnInit = function () {
        var _this = this;
        var uuidSubscriber;
        this.uuidObs = rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"].create(function (subscriber, _) {
            uuidSubscriber = subscriber;
        }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["startWith"])(this.uuid), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["share"])());
        this.uuidChange.subscribe(function (u) { return uuidSubscriber.next(u); });
        this.uuidObs.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["combineLatest"])(this.itemsRepository, function (uuid, repo) { return uuid ? repo.fetch(uuid) : null; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["filter"])(function (item) { return !!item; })).subscribe(function (item) {
            _this.selectedItem = item;
        });
        var textObs = this.queryCtrl.valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["startWith"])(""), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["share"])());
        textObs.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (value) { if (_this.storingText)
            _this.textOnNewClick = value; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (value) { return value ? value : ""; }), //coerce to string
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["combineLatest"])(this.itemsRepository, this.filterItems)).subscribe(function (items) { return _this.filteredItems = items; });
    };
    ItemSelectorComponent.prototype.optionSelected = function ($event) {
        var _this = this;
        if ($event.option.value) {
            this.uuid = $event.option.value.uuid;
        }
        else {
            this.itemFormRef.showDialog(new _item_form_dialog_item_form_dialog_component__WEBPACK_IMPORTED_MODULE_8__["ItemFormDialogData"](new _models_item_model__WEBPACK_IMPORTED_MODULE_6__["Item"](this.textOnNewClick), function (item) { return _this.uuid = item.uuid; }));
            this.startStoringText();
        }
    };
    ItemSelectorComponent.prototype.startStoringText = function () {
        this.storingText = true;
    };
    ItemSelectorComponent.prototype.stopStoringText = function () {
        this.storingText = false;
    };
    ItemSelectorComponent.prototype.itemName = function (item) {
        if (!item) {
            return this.queryCtrl ? this.queryCtrl.value : "";
        }
        return item.name;
    };
    ItemSelectorComponent.prototype.filterItems = function (q, repo) {
        //TODO fuzzy matching
        if (q.length == 0)
            return repo.all();
        return repo.all().filter(function (item) {
            return item.name.toLowerCase().indexOf(q) === 0;
        });
    };
    ItemSelectorComponent.prototype.hideOverlay = function () {
        return (this.queryBox.nativeElement === this.queryBox.nativeElement.ownerDocument.activeElement)
            || !this.selectedItem;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], ItemSelectorComponent.prototype, "allowNew", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], ItemSelectorComponent.prototype, "uuidChange", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String),
        __metadata("design:paramtypes", [String])
    ], ItemSelectorComponent.prototype, "uuid", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('querybox'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], ItemSelectorComponent.prototype, "queryBox", void 0);
    ItemSelectorComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-item-selector',
            template: __webpack_require__(/*! ./item-selector.component.html */ "./src/app/item-selector/item-selector.component.html"),
            styles: [__webpack_require__(/*! ./item-selector.component.scss */ "./src/app/item-selector/item-selector.component.scss")]
        }),
        __metadata("design:paramtypes", [_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["Store"],
            _item_form_item_form_ref__WEBPACK_IMPORTED_MODULE_7__["ItemFormRef"]])
    ], ItemSelectorComponent);
    return ItemSelectorComponent;
}());



/***/ }),

/***/ "./src/app/mocks/backend.mock.ts":
/*!***************************************!*\
  !*** ./src/app/mocks/backend.mock.ts ***!
  \***************************************/
/*! exports provided: MockBackendInterceptor, mockBackendProvider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MockBackendInterceptor", function() { return MockBackendInterceptor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mockBackendProvider", function() { return mockBackendProvider; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _models_item_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../models/item.model */ "./src/app/models/item.model.ts");
/* harmony import */ var _models_entry_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../models/entry.model */ "./src/app/models/entry.model.ts");
/* harmony import */ var _models_transaction_model__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../models/transaction.model */ "./src/app/models/transaction.model.ts");
/* harmony import */ var _db_mock__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./db.mock */ "./src/app/mocks/db.mock.ts");
//adapted from
//http://jasonwatmore.com/post/2018/06/22/angular-6-mock-backend-example-for-backendless-development
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var MockBackendInterceptor = /** @class */ (function () {
    function MockBackendInterceptor() {
        var boroDish = new _models_item_model__WEBPACK_IMPORTED_MODULE_4__["Item"]("borosilicate dish, 60mm", "item-0", 10, 5);
        var pp5Dish = new _models_item_model__WEBPACK_IMPORTED_MODULE_4__["Item"]("PP5 dish, 45mm", "item-1", 10, 6);
        var hwfpJar = new _models_item_model__WEBPACK_IMPORTED_MODULE_4__["Item"]("HWFP jar, 1 qt", "item-2", 10, 8, [
            new _models_item_model__WEBPACK_IMPORTED_MODULE_4__["ItemProperty"]("createdat", "02/13/4392 32:21:64"),
        ]);
        var no17LC = new _models_item_model__WEBPACK_IMPORTED_MODULE_4__["Item"]("item-3", "#17 LC", 10, 6);
        var no17HWFP = new _models_item_model__WEBPACK_IMPORTED_MODULE_4__["Item"]("item-4", "#17 HWFP jar, 1 qt", 72, 12);
        this.items = new _db_mock__WEBPACK_IMPORTED_MODULE_7__["MockDB"]([boroDish, pp5Dish, hwfpJar, no17LC, no17HWFP]);
        this.entries = new _db_mock__WEBPACK_IMPORTED_MODULE_7__["MockDB"]([
            new _models_entry_model__WEBPACK_IMPORTED_MODULE_5__["Entry"]([
                new _models_transaction_model__WEBPACK_IMPORTED_MODULE_6__["Transaction"](hwfpJar.uuid, _models_transaction_model__WEBPACK_IMPORTED_MODULE_6__["TransactionType"].Consumed, 10),
                new _models_transaction_model__WEBPACK_IMPORTED_MODULE_6__["Transaction"](no17LC.uuid, _models_transaction_model__WEBPACK_IMPORTED_MODULE_6__["TransactionType"].Consumed, 1),
                new _models_transaction_model__WEBPACK_IMPORTED_MODULE_6__["Transaction"](no17HWFP.uuid, _models_transaction_model__WEBPACK_IMPORTED_MODULE_6__["TransactionType"].Produced, 10),
            ], new Date, "entry1"),
            new _models_entry_model__WEBPACK_IMPORTED_MODULE_5__["Entry"]([
                new _models_transaction_model__WEBPACK_IMPORTED_MODULE_6__["Transaction"](boroDish.uuid, _models_transaction_model__WEBPACK_IMPORTED_MODULE_6__["TransactionType"].Produced, 40),
                new _models_transaction_model__WEBPACK_IMPORTED_MODULE_6__["Transaction"](pp5Dish.uuid, _models_transaction_model__WEBPACK_IMPORTED_MODULE_6__["TransactionType"].Produced, 40)
            ], new Date, "entry2")
        ]);
    }
    MockBackendInterceptor.prototype.intercept = function (request, next) {
        var _this = this;
        // array in local storage for registered items
        // wrap in delayed observable to simulate server api call
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(null).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["mergeMap"])(function () {
            // console.log("mocking request:", request.method, request.url, request.body);
            // authenticate
            // if (request.url.endsWith('/users/authenticate') && request.method === 'POST') {
            //   // find if any user matches login credentials
            //   let filteredUsers = users.filter(user => {
            //     return user.username === request.body.username && user.password === request.body.password;
            //   });
            //   if (filteredUsers.length) {
            //     // if login details are valid return 200 OK with user details and fake jwt token
            //     let user = filteredUsers[0];
            //     let body = {
            //       uuid: user.uuid,
            //       username: user.username,
            //       firstName: user.firstName,
            //       lastName: user.lastName,
            //       token: 'fake-jwt-token'
            //     };
            //     return of(new HttpResponse({ status: 200, body: body }));
            //   } else {
            //     // else return 400 bad request
            //     return throwError({ error: { message: 'Username or password is incorrect' } });
            //   }
            // } //TODO
            // get items
            if (request.url.endsWith('/api/items') && request.method === 'GET') {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpResponse"]({ status: 200, body: _this.items.all().map(function (item) { return _models_item_model__WEBPACK_IMPORTED_MODULE_4__["Item"].copy(item); }) }));
            }
            // get item by uuid
            if (request.url.match(/\/api\/items\/[\da-f\-]+$/) && request.method === 'GET') {
                // find item by uuid in items array
                var urlParts = request.url.split('/');
                var uuid = urlParts[urlParts.length - 1];
                var item = _this.items.fetch(uuid);
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpResponse"]({ status: 200, body: _models_item_model__WEBPACK_IMPORTED_MODULE_4__["Item"].fromObject(item) }));
            }
            // create
            if (request.url.endsWith('/api/items') && request.method === 'POST') {
                // save new item
                var item = _this.items.insert(_models_item_model__WEBPACK_IMPORTED_MODULE_4__["Item"].fromObject(request.body));
                // respond 200 OK
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpResponse"]({ status: 200, body: item }));
            }
            // update
            if (request.url.endsWith('/api/items') && request.method === 'PATCH') {
                // save new item
                var item = _this.items.update(_models_item_model__WEBPACK_IMPORTED_MODULE_4__["Item"].fromObject(request.body));
                // respond 200 OK
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpResponse"]({ status: 200, body: item }));
            }
            // delete item
            if (request.url.match(/\/items\/[\da-f\-]+$/) && request.method === 'DELETE') {
                // find item by uuid in items array
                var urlParts = request.url.split('/');
                var uuid = urlParts[urlParts.length - 1];
                _this.items.delete(uuid);
                // respond 200 OK
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpResponse"]({ status: 200 }));
            }
            // get entries
            if (request.url.endsWith('/api/entries') && request.method === 'GET') {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpResponse"]({ status: 200, body: _this.entries.all().map(function (entry) { return _models_entry_model__WEBPACK_IMPORTED_MODULE_5__["Entry"].copy(entry); }) }));
            }
            // get entry by uuid
            if (request.url.match(/\/api\/entries\/[\da-f\-]+$/) && request.method === 'GET') {
                // find entry by uuid in entries array
                var urlParts = request.url.split('/');
                var uuid = urlParts[urlParts.length - 1];
                var entry = _this.entries.fetch(uuid);
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpResponse"]({ status: 200, body: _models_entry_model__WEBPACK_IMPORTED_MODULE_5__["Entry"].copy(entry) }));
            }
            // create entry
            if (request.url.endsWith('/api/entries') && request.method === 'POST') {
                // save new entry
                var entry = _this.entries.insert(_models_entry_model__WEBPACK_IMPORTED_MODULE_5__["Entry"].fromObject(request.body));
                // respond 200 OK
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpResponse"]({ status: 200, body: entry }));
            }
            // update entry
            if (request.url.endsWith('/api/entries') && request.method === 'PATCH') {
                // save new entry
                var entry = _this.entries.update(_models_entry_model__WEBPACK_IMPORTED_MODULE_5__["Entry"].fromObject(request.body));
                // respond 200 OK
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpResponse"]({ status: 200, body: entry }));
            }
            // delete entry
            if (request.url.match(/\/entries\/[\da-f\-]+$/) && request.method === 'DELETE') {
                // find entry by uuid in entries array
                var urlParts = request.url.split('/');
                var uuid = urlParts[urlParts.length - 1];
                _this.entries.delete(uuid);
                // respond 200 OK
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpResponse"]({ status: 200 }));
            }
            // pass through any requests not handled above
            return next.handle(request);
        }))
            // call materialize and dematerialize to ensure delay even if an error is thrown (https://github.com/Reactive-Extensions/RxJS/issues/648)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["materialize"])())
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["delay"])(500))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["dematerialize"])());
    };
    MockBackendInterceptor = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], MockBackendInterceptor);
    return MockBackendInterceptor;
}());

var mockBackendProvider = {
    // use fake backend in place of Http service for backend-less development
    provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HTTP_INTERCEPTORS"],
    useClass: MockBackendInterceptor,
    multi: true
};


/***/ }),

/***/ "./src/app/mocks/db.mock.ts":
/*!**********************************!*\
  !*** ./src/app/mocks/db.mock.ts ***!
  \**********************************/
/*! exports provided: MockDB */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MockDB", function() { return MockDB; });
var uuid = __webpack_require__(/*! uuidv4 */ "./node_modules/uuidv4/dist/uuidv4.js");
var MockDB = /** @class */ (function () {
    function MockDB(ts) {
        var _this = this;
        this.ts = ts;
        this.index = {};
        this.array = ts || [];
        this.array = (ts || []).map(function (t) {
            t.uuid = uuid();
            _this.index[t.uuid] = t;
            return t;
        });
    }
    MockDB.prototype.all = function () { return this.array; };
    MockDB.prototype.fetch = function (uuid) {
        var res = this.index[uuid];
        if (!res)
            throw 'TODO 404';
        return res;
    };
    MockDB.prototype.insert = function (t) {
        if (t.uuid.length != 0) {
            throw "TODO 400 cannot create item with UUID";
        }
        t.uuid = uuid();
        this.array.push(t);
        this.index[t.uuid] = t;
        return t;
    };
    MockDB.prototype.update = function (obj) {
        if (!obj.uuid.length) {
            throw "TODO 400 cannot update item without UUID";
        }
        var subject = this.index[obj.uuid];
        if (!subject)
            throw "TODO 404";
        Object.assign(subject, obj);
        return subject;
    };
    MockDB.prototype.delete = function (uuid) {
        var deleted = false;
        for (var i = 0; i < this.array.length; i++) {
            var item = this.array[i];
            if (item.uuid === uuid) {
                // delete item
                this.array.splice(i, 1);
                deleted = true;
                break;
            }
        }
        if (!deleted) {
            throw "TODO: uuid not found";
        }
        this.index[uuid] = undefined;
    };
    return MockDB;
}());



/***/ }),

/***/ "./src/app/models/entry.model.ts":
/*!***************************************!*\
  !*** ./src/app/models/entry.model.ts ***!
  \***************************************/
/*! exports provided: Entry */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Entry", function() { return Entry; });
/* harmony import */ var _transaction_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./transaction.model */ "./src/app/models/transaction.model.ts");

var Entry = /** @class */ (function () {
    function Entry(transactions, moment, uuid) {
        this.transactions = transactions;
        this.moment = moment;
        this.uuid = "";
        this.transactions = transactions ? transactions : [];
        this.moment = moment ? moment : new Date();
        if (uuid)
            this.uuid = uuid;
    }
    Entry.fromObject = function (o) {
        return new Entry(o.transactions.map(function (t) { return _transaction_model__WEBPACK_IMPORTED_MODULE_0__["Transaction"].fromObject(t); }), new Date(o.moment), o.uuid);
    };
    Entry.copy = function (entry) {
        return Entry.fromObject(entry);
    };
    return Entry;
}());



/***/ }),

/***/ "./src/app/models/item.model.ts":
/*!**************************************!*\
  !*** ./src/app/models/item.model.ts ***!
  \**************************************/
/*! exports provided: Item, ItemProperty */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Item", function() { return Item; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItemProperty", function() { return ItemProperty; });
var Item = /** @class */ (function () {
    function Item(name, uuid, numProduced, numRemaining, properties) {
        this.name = name;
        this.numProduced = numProduced;
        this.numRemaining = numRemaining;
        this.properties = properties;
        this.uuid = "";
        this.name = name || "";
        this.uuid = uuid || "";
        this.numProduced = numProduced || 0;
        this.numRemaining = numRemaining || 0;
        this.properties = properties || [];
    }
    Item.prototype.copy = function () {
        return Item.fromObject(this);
    };
    Item.fromObject = function (o) {
        return new Item(o.name, o.uuid, o.numProduced, o.numRemaining, o.properties.map(function (p) { return ItemProperty.fromObject(p); }));
    };
    Item.copy = function (item) {
        return Item.fromObject(item);
    };
    return Item;
}());

var ItemProperty = /** @class */ (function () {
    function ItemProperty(name, value) {
        this.name = name;
        this.value = value;
        this.name = this.name || "";
        this.value = this.value || "";
    }
    ItemProperty.fromObject = function (p) {
        return new ItemProperty(p.name, p.value);
    };
    ItemProperty.copy = function (ps) {
        return ItemProperty.fromObject(ps);
    };
    return ItemProperty;
}());



/***/ }),

/***/ "./src/app/models/transaction.model.ts":
/*!*********************************************!*\
  !*** ./src/app/models/transaction.model.ts ***!
  \*********************************************/
/*! exports provided: Transaction, TransactionType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Transaction", function() { return Transaction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TransactionType", function() { return TransactionType; });
var Transaction = /** @class */ (function () {
    function Transaction(itemUUID, type, count) {
        this.itemUUID = itemUUID;
        this.type = type;
        this.count = count;
        this.itemUUID = itemUUID || null;
        this.type = type && type || TransactionType.Produced;
        this.count = count && count || 5;
    }
    Transaction.fromObject = function (o) {
        return new Transaction(o.itemUUID, o.type, o.count);
    };
    Transaction.copy = function (transaction) {
        return Transaction.fromObject(transaction);
    };
    return Transaction;
}());

var TransactionType;
(function (TransactionType) {
    TransactionType["Produced"] = "Produced";
    TransactionType["Consumed"] = "Consumed";
})(TransactionType || (TransactionType = {}));


/***/ }),

/***/ "./src/app/nav-menu/item/item.component.html":
/*!***************************************************!*\
  !*** ./src/app/nav-menu/item/item.component.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<button mat-menu-item (click)=\"router.navigate([href])\" [disabled]=\"router.url == href\">{{ text }}</button>\n"

/***/ }),

/***/ "./src/app/nav-menu/item/item.component.ts":
/*!*************************************************!*\
  !*** ./src/app/nav-menu/item/item.component.ts ***!
  \*************************************************/
/*! exports provided: ItemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItemComponent", function() { return ItemComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ItemComponent = /** @class */ (function () {
    function ItemComponent(router) {
        this.router = router;
    }
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], ItemComponent.prototype, "href", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], ItemComponent.prototype, "text", void 0);
    ItemComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-nav-item',
            template: __webpack_require__(/*! ./item.component.html */ "./src/app/nav-menu/item/item.component.html"),
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], ItemComponent);
    return ItemComponent;
}());



/***/ }),

/***/ "./src/app/nav-menu/nav-menu.component.html":
/*!**************************************************!*\
  !*** ./src/app/nav-menu/nav-menu.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<button mat-icon-button [matMenuTriggerFor]=\"menu\">\n  <mat-icon>more_vert</mat-icon>\n</button>\n<mat-menu #menu=\"matMenu\">\n  <app-nav-item [href]=\"'log'\" [text]=\"'Log'\"></app-nav-item>\n  <app-nav-item [href]=\"'inventory'\" [text]=\"'Inventory'\"></app-nav-item>\n</mat-menu>\n"

/***/ }),

/***/ "./src/app/nav-menu/nav-menu.component.scss":
/*!**************************************************!*\
  !*** ./src/app/nav-menu/nav-menu.component.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL25hdi1tZW51L25hdi1tZW51LmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/nav-menu/nav-menu.component.ts":
/*!************************************************!*\
  !*** ./src/app/nav-menu/nav-menu.component.ts ***!
  \************************************************/
/*! exports provided: NavMenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavMenuComponent", function() { return NavMenuComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NavMenuComponent = /** @class */ (function () {
    function NavMenuComponent() {
    }
    NavMenuComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-nav-menu',
            template: __webpack_require__(/*! ./nav-menu.component.html */ "./src/app/nav-menu/nav-menu.component.html"),
            styles: [__webpack_require__(/*! ./nav-menu.component.scss */ "./src/app/nav-menu/nav-menu.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], NavMenuComponent);
    return NavMenuComponent;
}());



/***/ }),

/***/ "./src/app/service/entry.service.ts":
/*!******************************************!*\
  !*** ./src/app/service/entry.service.ts ***!
  \******************************************/
/*! exports provided: EntryService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EntryService", function() { return EntryService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _models_entry_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../models/entry.model */ "./src/app/models/entry.model.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ 'Content-Type': 'application/json' })
};
var EntryService = /** @class */ (function () {
    function EntryService(http) {
        this.http = http;
        this.entriesURL = '/api/entries';
    }
    EntryService.prototype.log = function (message) {
        console.log("EntryService: " + message);
    };
    EntryService.prototype.getEntries = function () {
        return this.http.get(this.entriesURL)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (entries) { return entries.map(function (entry) { return _models_entry_model__WEBPACK_IMPORTED_MODULE_3__["Entry"].fromObject(entry); }); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError('getEntries', [])));
    };
    /** GET entry by uuid. Will 404 if uuid not found */
    EntryService.prototype.getEntry = function (uuid) {
        var url = this.entriesURL + "/" + uuid;
        return this.http.get(url).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (entry) { return _models_entry_model__WEBPACK_IMPORTED_MODULE_3__["Entry"].fromObject(entry); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError("getEntry uuid=" + uuid)));
    };
    //////// Save methods //////////
    /** POST: create a new entry */
    EntryService.prototype.createEntry = function (entry) {
        return this.http.post(this.entriesURL, entry, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (entry) { return _models_entry_model__WEBPACK_IMPORTED_MODULE_3__["Entry"].fromObject(entry); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError('createEntry')));
    };
    /** POST: update an existing entry */
    EntryService.prototype.updateEntry = function (entry) {
        return this.http.patch(this.entriesURL, entry, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (entry) { return _models_entry_model__WEBPACK_IMPORTED_MODULE_3__["Entry"].fromObject(entry); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError('updateEntry')));
    };
    /** DELETE: delete the entry from the server */
    EntryService.prototype.deleteEntry = function (entry) {
        var uuid = typeof entry === 'string' ? entry : entry.uuid;
        var url = this.entriesURL + "/" + uuid;
        return this.http.delete(url, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (entry) { return _models_entry_model__WEBPACK_IMPORTED_MODULE_3__["Entry"].fromObject(entry); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError('deleteEntry')));
    };
    /**
     * Handle Http operation that failed.
     * Let the app continue.
     * @param operation - name of the operation that failed
     * @param result - optional value to return as the observable result
     */
    EntryService.prototype.handleError = function (operation, result) {
        var _this = this;
        if (operation === void 0) { operation = 'operation'; }
        return function (error) {
            console.error(error); // log to console instead
            _this.log(operation + " failed: " + error.message);
            // Let the app keep running by returning an empty result.
            throw (error);
            // return of(result as T);
        };
    };
    EntryService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({ providedIn: 'root' }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], EntryService);
    return EntryService;
}());



/***/ }),

/***/ "./src/app/service/item.service.ts":
/*!*****************************************!*\
  !*** ./src/app/service/item.service.ts ***!
  \*****************************************/
/*! exports provided: ItemService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItemService", function() { return ItemService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _models_item_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../models/item.model */ "./src/app/models/item.model.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ 'Content-Type': 'application/json' })
};
var ItemService = /** @class */ (function () {
    function ItemService(http) {
        this.http = http;
        this.itemsURL = '/api/items';
    }
    ItemService.prototype.log = function (message) {
        console.log("ItemService: " + message);
    };
    ItemService.prototype.getItems = function () {
        return this.http.get(this.itemsURL)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (items) { return items.map(function (item) { return _models_item_model__WEBPACK_IMPORTED_MODULE_3__["Item"].fromObject(item); }); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError('getItems', [])));
    };
    /** GET item by uuid. Will 404 if uuid not found */
    ItemService.prototype.getItem = function (uuid) {
        var url = this.itemsURL + "/" + uuid;
        return this.http.get(url).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (item) { return _models_item_model__WEBPACK_IMPORTED_MODULE_3__["Item"].fromObject(item); }), // returns a {0|1} element array
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError("getItem uuid=" + uuid)));
    };
    //////// Save methods //////////
    /** POST: create a new item */
    ItemService.prototype.createItem = function (item) {
        return this.http.post(this.itemsURL, item, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (item) { return _models_item_model__WEBPACK_IMPORTED_MODULE_3__["Item"].fromObject(item); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError('createItem')));
    };
    /** PATCH: update an existing item */
    ItemService.prototype.updateItem = function (item) {
        return this.http.patch(this.itemsURL, item, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (item) { return _models_item_model__WEBPACK_IMPORTED_MODULE_3__["Item"].fromObject(item); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError('updateItem')));
    };
    /** DELETE: delete the item from the server */
    ItemService.prototype.deleteItem = function (item) {
        var uuid = typeof item === 'string' ? item : item.uuid;
        var url = this.itemsURL + "/" + uuid;
        return this.http.delete(url, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (item) { return _models_item_model__WEBPACK_IMPORTED_MODULE_3__["Item"].fromObject(item); }), // returns a {0|1} element array
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError('deleteItem')));
    };
    /**
     * Handle Http operation that failed.
     * Let the app continue.
     * @param operation - name of the operation that failed
     * @param result - optional value to return as the observable result
     */
    ItemService.prototype.handleError = function (operation, result) {
        var _this = this;
        if (operation === void 0) { operation = 'operation'; }
        return function (error) {
            console.error(error); // log to console instead
            _this.log(operation + " failed: " + error.message);
            // Let the app keep running by returning an empty result.
            throw (error);
            // return of(result as T);
        };
    };
    ItemService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({ providedIn: 'root' }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], ItemService);
    return ItemService;
}());



/***/ }),

/***/ "./src/app/store/app.actions.ts":
/*!**************************************!*\
  !*** ./src/app/store/app.actions.ts ***!
  \**************************************/
/*! exports provided: GET_ENTRIES, GET_ENTRIES_SUCCESS, GET_ENTRIES_ERROR, GET_ITEMS, GET_ITEMS_SUCCESS, GET_ITEMS_ERROR, CREATE_ENTRY, CREATE_ENTRY_SUCCESS, CREATE_ENTRY_ERROR, UPDATE_ENTRY, UPDATE_ENTRY_SUCCESS, UPDATE_ENTRY_ERROR, SAVE_ITEM, SAVE_ITEM_SUCCESS, SAVE_ITEM_ERROR, CREATE_ITEM, CREATE_ITEM_SUCCESS, CREATE_ITEM_ERROR, UPDATE_ITEM, UPDATE_ITEM_SUCCESS, UPDATE_ITEM_ERROR, DELETE_ENTRY, DELETE_ENTRY_SUCCESS, DELETE_ENTRY_ERROR, DELETE_ITEM, DELETE_ITEM_SUCCESS, DELETE_ITEM_ERROR, NEW_ENTRY, EDIT_ENTRY, CANCEL_ENTRY, NEW_ITEM, EDIT_ITEM, CANCEL_ITEM, DISPLAY_ITEM_FORM_DIALOG, GetEntries, GetEntriesSuccess, GetEntriesError, GetItems, GetItemsSuccess, GetItemsError, CreateEntry, CreateEntrySuccess, CreateEntryError, UpdateEntry, UpdateEntrySuccess, UpdateEntryError, CreateItem, CreateItemSuccess, CreateItemError, UpdateItem, UpdateItemSuccess, UpdateItemError, DeleteEntry, DeleteEntrySuccess, DeleteEntryError, DeleteItem, DeleteItemSuccess, DeleteItemError, NewEntry, EditEntry, CancelEntry, CancelItem */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_ENTRIES", function() { return GET_ENTRIES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_ENTRIES_SUCCESS", function() { return GET_ENTRIES_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_ENTRIES_ERROR", function() { return GET_ENTRIES_ERROR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_ITEMS", function() { return GET_ITEMS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_ITEMS_SUCCESS", function() { return GET_ITEMS_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_ITEMS_ERROR", function() { return GET_ITEMS_ERROR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CREATE_ENTRY", function() { return CREATE_ENTRY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CREATE_ENTRY_SUCCESS", function() { return CREATE_ENTRY_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CREATE_ENTRY_ERROR", function() { return CREATE_ENTRY_ERROR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UPDATE_ENTRY", function() { return UPDATE_ENTRY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UPDATE_ENTRY_SUCCESS", function() { return UPDATE_ENTRY_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UPDATE_ENTRY_ERROR", function() { return UPDATE_ENTRY_ERROR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SAVE_ITEM", function() { return SAVE_ITEM; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SAVE_ITEM_SUCCESS", function() { return SAVE_ITEM_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SAVE_ITEM_ERROR", function() { return SAVE_ITEM_ERROR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CREATE_ITEM", function() { return CREATE_ITEM; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CREATE_ITEM_SUCCESS", function() { return CREATE_ITEM_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CREATE_ITEM_ERROR", function() { return CREATE_ITEM_ERROR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UPDATE_ITEM", function() { return UPDATE_ITEM; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UPDATE_ITEM_SUCCESS", function() { return UPDATE_ITEM_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UPDATE_ITEM_ERROR", function() { return UPDATE_ITEM_ERROR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DELETE_ENTRY", function() { return DELETE_ENTRY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DELETE_ENTRY_SUCCESS", function() { return DELETE_ENTRY_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DELETE_ENTRY_ERROR", function() { return DELETE_ENTRY_ERROR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DELETE_ITEM", function() { return DELETE_ITEM; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DELETE_ITEM_SUCCESS", function() { return DELETE_ITEM_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DELETE_ITEM_ERROR", function() { return DELETE_ITEM_ERROR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NEW_ENTRY", function() { return NEW_ENTRY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EDIT_ENTRY", function() { return EDIT_ENTRY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CANCEL_ENTRY", function() { return CANCEL_ENTRY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NEW_ITEM", function() { return NEW_ITEM; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EDIT_ITEM", function() { return EDIT_ITEM; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CANCEL_ITEM", function() { return CANCEL_ITEM; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DISPLAY_ITEM_FORM_DIALOG", function() { return DISPLAY_ITEM_FORM_DIALOG; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetEntries", function() { return GetEntries; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetEntriesSuccess", function() { return GetEntriesSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetEntriesError", function() { return GetEntriesError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetItems", function() { return GetItems; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetItemsSuccess", function() { return GetItemsSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetItemsError", function() { return GetItemsError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateEntry", function() { return CreateEntry; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateEntrySuccess", function() { return CreateEntrySuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateEntryError", function() { return CreateEntryError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateEntry", function() { return UpdateEntry; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateEntrySuccess", function() { return UpdateEntrySuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateEntryError", function() { return UpdateEntryError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateItem", function() { return CreateItem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateItemSuccess", function() { return CreateItemSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateItemError", function() { return CreateItemError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateItem", function() { return UpdateItem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateItemSuccess", function() { return UpdateItemSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateItemError", function() { return UpdateItemError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeleteEntry", function() { return DeleteEntry; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeleteEntrySuccess", function() { return DeleteEntrySuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeleteEntryError", function() { return DeleteEntryError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeleteItem", function() { return DeleteItem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeleteItemSuccess", function() { return DeleteItemSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeleteItemError", function() { return DeleteItemError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewEntry", function() { return NewEntry; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditEntry", function() { return EditEntry; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CancelEntry", function() { return CancelEntry; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CancelItem", function() { return CancelItem; });
// HTTP ACTIONS //
var GET_ENTRIES = '[App] GET_ENTRIES';
var GET_ENTRIES_SUCCESS = "[App] GET_ENTRIES_SUCCESS";
var GET_ENTRIES_ERROR = "[App] GET_ENTRIES_ERROR";
var GET_ITEMS = '[App] GET_ITEMS';
var GET_ITEMS_SUCCESS = "[App] GET_ITEMS_SUCCESS";
var GET_ITEMS_ERROR = "[App] GET_ITEMS_ERROR";
var CREATE_ENTRY = '[App] CREATE_ENTRY';
var CREATE_ENTRY_SUCCESS = "[App] CREATE_ENTRY_SUCCESS";
var CREATE_ENTRY_ERROR = "[App] CREATE_ENTRY_ERROR";
var UPDATE_ENTRY = '[App] UPDATE_ENTRY';
var UPDATE_ENTRY_SUCCESS = "[App] UPDATE_ENTRY_SUCCESS";
var UPDATE_ENTRY_ERROR = "[App] UPDATE_ENTRY_ERROR";
var SAVE_ITEM = '[App] SAVE_ITEM';
var SAVE_ITEM_SUCCESS = "[App] SAVE_ITEM_SUCCESS";
var SAVE_ITEM_ERROR = "[App] SAVE_ITEM_ERROR";
var CREATE_ITEM = '[App] CREATE_ITEM';
var CREATE_ITEM_SUCCESS = "[App] CREATE_ITEM_SUCCESS";
var CREATE_ITEM_ERROR = "[App] CREATE_ITEM_ERROR";
var UPDATE_ITEM = '[App] UPDATE_ITEM';
var UPDATE_ITEM_SUCCESS = "[App] UPDATE_ITEM_SUCCESS";
var UPDATE_ITEM_ERROR = "[App] UPDATE_ITEM_ERROR";
var DELETE_ENTRY = '[App] DELETE_ENTRY';
var DELETE_ENTRY_SUCCESS = "[App] DELETE_ENTRY_SUCCESS";
var DELETE_ENTRY_ERROR = "[App] DELETE_ENTRY_ERROR";
var DELETE_ITEM = '[App] DELETE_ITEM';
var DELETE_ITEM_SUCCESS = "[App] DELETE_ITEM_SUCCESS";
var DELETE_ITEM_ERROR = "[App] DELETE_ITEM_ERROR";
// UI ACTIONS //
var NEW_ENTRY = '[App] NEW_ENTRY';
var EDIT_ENTRY = '[App] EDIT_ENTRY';
var CANCEL_ENTRY = '[App] CANCEL_ENTRY';
var NEW_ITEM = '[App] NEW_ITEM';
var EDIT_ITEM = '[App] EDIT_ITEM';
var CANCEL_ITEM = '[App] CANCEL_ITEM';
var DISPLAY_ITEM_FORM_DIALOG = '[App] DISPLAY_ITEM_FORM_DIALOG';
// load the full entries index
var GetEntries = /** @class */ (function () {
    function GetEntries() {
        this.type = GET_ENTRIES;
    }
    return GetEntries;
}());

var GetEntriesSuccess = /** @class */ (function () {
    function GetEntriesSuccess(entries) {
        this.entries = entries;
        this.type = GET_ENTRIES_SUCCESS;
    }
    return GetEntriesSuccess;
}());

var GetEntriesError = /** @class */ (function () {
    function GetEntriesError(error) {
        this.error = error;
        this.type = GET_ENTRIES_ERROR;
    }
    return GetEntriesError;
}());

// load the full items index
var GetItems = /** @class */ (function () {
    function GetItems() {
        this.type = GET_ITEMS;
    }
    return GetItems;
}());

var GetItemsSuccess = /** @class */ (function () {
    function GetItemsSuccess(items) {
        this.items = items;
        this.type = GET_ITEMS_SUCCESS;
    }
    return GetItemsSuccess;
}());

var GetItemsError = /** @class */ (function () {
    function GetItemsError(error) {
        this.error = error;
        this.type = GET_ITEMS_ERROR;
    }
    return GetItemsError;
}());

// create an entry
var CreateEntry = /** @class */ (function () {
    function CreateEntry(entry) {
        this.entry = entry;
        this.type = CREATE_ENTRY;
    }
    return CreateEntry;
}());

var CreateEntrySuccess = /** @class */ (function () {
    // the uuid of the EntryForm to be updated may not match the entry.
    // e.g. for a new entry, uuid="", but entry has a uuid now.
    function CreateEntrySuccess(uuid, entry) {
        this.uuid = uuid;
        this.entry = entry;
        this.type = CREATE_ENTRY_SUCCESS;
    }
    return CreateEntrySuccess;
}());

var CreateEntryError = /** @class */ (function () {
    function CreateEntryError(entry, error) {
        this.entry = entry;
        this.error = error;
        this.type = CREATE_ENTRY_ERROR;
    }
    return CreateEntryError;
}());

// save an entry
var UpdateEntry = /** @class */ (function () {
    function UpdateEntry(entry) {
        this.entry = entry;
        this.type = UPDATE_ENTRY;
    }
    return UpdateEntry;
}());

var UpdateEntrySuccess = /** @class */ (function () {
    // the uuid of the EntryForm to be updated may not match the entry.
    // e.g. for a new entry, uuid="", but entry has a uuid now.
    function UpdateEntrySuccess(uuid, entry) {
        this.uuid = uuid;
        this.entry = entry;
        this.type = UPDATE_ENTRY_SUCCESS;
    }
    return UpdateEntrySuccess;
}());

var UpdateEntryError = /** @class */ (function () {
    function UpdateEntryError(entry, error) {
        this.entry = entry;
        this.error = error;
        this.type = UPDATE_ENTRY_ERROR;
    }
    return UpdateEntryError;
}());

// create an item
var CreateItem = /** @class */ (function () {
    function CreateItem(item, onSuccess) {
        this.item = item;
        this.onSuccess = onSuccess;
        this.type = CREATE_ITEM;
    }
    return CreateItem;
}());

var CreateItemSuccess = /** @class */ (function () {
    function CreateItemSuccess(item) {
        this.item = item;
        this.type = CREATE_ITEM_SUCCESS;
    }
    return CreateItemSuccess;
}());

var CreateItemError = /** @class */ (function () {
    function CreateItemError(item, error) {
        this.item = item;
        this.error = error;
        this.type = CREATE_ITEM_ERROR;
    }
    return CreateItemError;
}());

// update an item
var UpdateItem = /** @class */ (function () {
    function UpdateItem(item, onSuccess) {
        this.item = item;
        this.onSuccess = onSuccess;
        this.type = UPDATE_ITEM;
    }
    return UpdateItem;
}());

var UpdateItemSuccess = /** @class */ (function () {
    function UpdateItemSuccess(item) {
        this.item = item;
        this.type = UPDATE_ITEM_SUCCESS;
    }
    return UpdateItemSuccess;
}());

var UpdateItemError = /** @class */ (function () {
    function UpdateItemError(item, error) {
        this.item = item;
        this.error = error;
        this.type = UPDATE_ITEM_ERROR;
    }
    return UpdateItemError;
}());

// delete an entry
var DeleteEntry = /** @class */ (function () {
    function DeleteEntry(entry) {
        this.entry = entry;
        this.type = DELETE_ENTRY;
    }
    return DeleteEntry;
}());

var DeleteEntrySuccess = /** @class */ (function () {
    function DeleteEntrySuccess(entry) {
        this.entry = entry;
        this.type = DELETE_ENTRY_SUCCESS;
    }
    return DeleteEntrySuccess;
}());

var DeleteEntryError = /** @class */ (function () {
    function DeleteEntryError(entry, error) {
        this.entry = entry;
        this.error = error;
        this.type = DELETE_ENTRY_ERROR;
    }
    return DeleteEntryError;
}());

// delete an item
var DeleteItem = /** @class */ (function () {
    function DeleteItem(item) {
        this.item = item;
        this.type = DELETE_ITEM;
    }
    return DeleteItem;
}());

var DeleteItemSuccess = /** @class */ (function () {
    function DeleteItemSuccess(item) {
        this.item = item;
        this.type = DELETE_ITEM_SUCCESS;
    }
    return DeleteItemSuccess;
}());

var DeleteItemError = /** @class */ (function () {
    function DeleteItemError(item, error) {
        this.item = item;
        this.error = error;
        this.type = DELETE_ITEM_ERROR;
    }
    return DeleteItemError;
}());

// start editing a new entry
var NewEntry = /** @class */ (function () {
    function NewEntry() {
        this.type = NEW_ENTRY;
    }
    return NewEntry;
}());

// start editing a new item
var EditEntry = /** @class */ (function () {
    function EditEntry(entry) {
        this.entry = entry;
        this.type = EDIT_ENTRY;
    }
    return EditEntry;
}());

// stop editing a new entry
var CancelEntry = /** @class */ (function () {
    function CancelEntry(entry) {
        this.entry = entry;
        this.type = CANCEL_ENTRY;
    }
    return CancelEntry;
}());

// stop editing a new item
var CancelItem = /** @class */ (function () {
    function CancelItem() {
        this.type = CANCEL_ITEM;
    }
    return CancelItem;
}());



/***/ }),

/***/ "./src/app/store/app.effects.ts":
/*!**************************************!*\
  !*** ./src/app/store/app.effects.ts ***!
  \**************************************/
/*! exports provided: AppEffects */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppEffects", function() { return AppEffects; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/fesm5/effects.js");
/* harmony import */ var _item_form_item_form_ref__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../item-form/item-form-ref */ "./src/app/item-form/item-form-ref.ts");
/* harmony import */ var _service_item_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../service/item.service */ "./src/app/service/item.service.ts");
/* harmony import */ var _service_entry_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../service/entry.service */ "./src/app/service/entry.service.ts");
/* harmony import */ var _app_actions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app.actions */ "./src/app/store/app.actions.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var INIT_ACTION_TYPE = '@ngrx/store/init';
var AppEffects = /** @class */ (function () {
    function AppEffects(itemService, entryService, itemFormRef, actions$) {
        var _this = this;
        this.itemService = itemService;
        this.entryService = entryService;
        this.itemFormRef = itemFormRef;
        this.actions$ = actions$;
        // INITIALIZE //
        this.Initialize = this.actions$.ofType(INIT_ACTION_TYPE)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function () { return [new _app_actions__WEBPACK_IMPORTED_MODULE_7__["GetEntries"](), new _app_actions__WEBPACK_IMPORTED_MODULE_7__["GetItems"]()]; }));
        // GET ALL //
        this.GetEntries = this.actions$.ofType(_app_actions__WEBPACK_IMPORTED_MODULE_7__["GET_ENTRIES"])
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["mergeMap"])(function (action) {
            return _this.entryService.getEntries().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (entries) { return new _app_actions__WEBPACK_IMPORTED_MODULE_7__["GetEntriesSuccess"](entries); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(function () { return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(new _app_actions__WEBPACK_IMPORTED_MODULE_7__["GetEntriesError"]("Failed to fetch entries.")); }));
        }));
        this.GetItems = this.actions$.ofType(_app_actions__WEBPACK_IMPORTED_MODULE_7__["GET_ITEMS"])
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["mergeMap"])(function (action) {
            return _this.itemService.getItems().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (items) { return new _app_actions__WEBPACK_IMPORTED_MODULE_7__["GetItemsSuccess"](items); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(function () { return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(new _app_actions__WEBPACK_IMPORTED_MODULE_7__["GetItemsError"]("Failed to fetch items.")); }));
        }));
        // SINGLE ITEM //
        this.CreateItem = this.actions$.ofType(_app_actions__WEBPACK_IMPORTED_MODULE_7__["CREATE_ITEM"])
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["mergeMap"])(function (action) {
            return _this.itemService.createItem(action.item).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(function () { return _this.itemFormRef.closeDialog(); }), // close the dialog
            Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (item) { return new _app_actions__WEBPACK_IMPORTED_MODULE_7__["CreateItemSuccess"](item); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(function (item) { return action.onSuccess(item.item); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(function () { return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(new _app_actions__WEBPACK_IMPORTED_MODULE_7__["CreateItemError"](action.item, "Failed to create item.")); }));
        }));
        this.UpdateItem = this.actions$.ofType(_app_actions__WEBPACK_IMPORTED_MODULE_7__["UPDATE_ITEM"])
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["mergeMap"])(function (action) {
            return _this.itemService.updateItem(action.item).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(function () { return _this.itemFormRef.closeDialog(); }), // close the dialog
            Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (item) { return new _app_actions__WEBPACK_IMPORTED_MODULE_7__["UpdateItemSuccess"](item); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(function (item) { return action.onSuccess(item.item); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(function () { return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(new _app_actions__WEBPACK_IMPORTED_MODULE_7__["UpdateItemError"](action.item, "Failed to update item.")); }));
        }));
        // SINGLE ENTRY //
        this.CreateEntry = this.actions$.ofType(_app_actions__WEBPACK_IMPORTED_MODULE_7__["CREATE_ENTRY"])
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["mergeMap"])(function (action) {
            return _this.entryService.createEntry(action.entry).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (entry) { return new _app_actions__WEBPACK_IMPORTED_MODULE_7__["UpdateEntrySuccess"](action.entry.uuid, entry); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(function () { return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(new _app_actions__WEBPACK_IMPORTED_MODULE_7__["UpdateEntryError"](action.entry, "Failed to create entry.")); }));
        }));
        this.UpdateEntry = this.actions$.ofType(_app_actions__WEBPACK_IMPORTED_MODULE_7__["UPDATE_ENTRY"])
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["mergeMap"])(function (action) {
            return _this.entryService.updateEntry(action.entry).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (entry) { return new _app_actions__WEBPACK_IMPORTED_MODULE_7__["UpdateEntrySuccess"](action.entry.uuid, entry); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(function () { return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(new _app_actions__WEBPACK_IMPORTED_MODULE_7__["UpdateEntryError"](action.entry, "Failed to update entry.")); }));
        }));
        // DELETE //
        this.DeleteEntry = this.actions$.ofType(_app_actions__WEBPACK_IMPORTED_MODULE_7__["DELETE_ENTRY"])
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["mergeMap"])(function (action) {
            return _this.entryService.deleteEntry(action.entry).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (entry) { return new _app_actions__WEBPACK_IMPORTED_MODULE_7__["DeleteEntrySuccess"](entry); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(function () { return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(new _app_actions__WEBPACK_IMPORTED_MODULE_7__["DeleteEntryError"](action.entry, "Failed to delete entry.")); }));
        }));
        this.DeleteItem = this.actions$.ofType(_app_actions__WEBPACK_IMPORTED_MODULE_7__["DELETE_ITEM"])
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["mergeMap"])(function (action) {
            return _this.itemService.deleteItem(action.item).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (item) { return new _app_actions__WEBPACK_IMPORTED_MODULE_7__["DeleteEntrySuccess"](item); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(function () {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(new _app_actions__WEBPACK_IMPORTED_MODULE_7__["DeleteEntryError"](action.item, "Failed to delete item."));
            }));
        }));
    }
    __decorate([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["Effect"])(),
        __metadata("design:type", rxjs__WEBPACK_IMPORTED_MODULE_1__["Observable"])
    ], AppEffects.prototype, "Initialize", void 0);
    __decorate([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["Effect"])(),
        __metadata("design:type", rxjs__WEBPACK_IMPORTED_MODULE_1__["Observable"])
    ], AppEffects.prototype, "GetEntries", void 0);
    __decorate([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["Effect"])(),
        __metadata("design:type", rxjs__WEBPACK_IMPORTED_MODULE_1__["Observable"])
    ], AppEffects.prototype, "GetItems", void 0);
    __decorate([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["Effect"])(),
        __metadata("design:type", rxjs__WEBPACK_IMPORTED_MODULE_1__["Observable"])
    ], AppEffects.prototype, "CreateItem", void 0);
    __decorate([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["Effect"])(),
        __metadata("design:type", rxjs__WEBPACK_IMPORTED_MODULE_1__["Observable"])
    ], AppEffects.prototype, "UpdateItem", void 0);
    __decorate([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["Effect"])(),
        __metadata("design:type", rxjs__WEBPACK_IMPORTED_MODULE_1__["Observable"])
    ], AppEffects.prototype, "CreateEntry", void 0);
    __decorate([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["Effect"])(),
        __metadata("design:type", rxjs__WEBPACK_IMPORTED_MODULE_1__["Observable"])
    ], AppEffects.prototype, "UpdateEntry", void 0);
    __decorate([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["Effect"])(),
        __metadata("design:type", rxjs__WEBPACK_IMPORTED_MODULE_1__["Observable"])
    ], AppEffects.prototype, "DeleteEntry", void 0);
    __decorate([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["Effect"])(),
        __metadata("design:type", rxjs__WEBPACK_IMPORTED_MODULE_1__["Observable"])
    ], AppEffects.prototype, "DeleteItem", void 0);
    AppEffects = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_service_item_service__WEBPACK_IMPORTED_MODULE_5__["ItemService"],
            _service_entry_service__WEBPACK_IMPORTED_MODULE_6__["EntryService"],
            _item_form_item_form_ref__WEBPACK_IMPORTED_MODULE_4__["ItemFormRef"],
            _ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["Actions"]])
    ], AppEffects);
    return AppEffects;
}());



/***/ }),

/***/ "./src/app/store/app.reducers.ts":
/*!***************************************!*\
  !*** ./src/app/store/app.reducers.ts ***!
  \***************************************/
/*! exports provided: AppReducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppReducer", function() { return AppReducer; });
/* harmony import */ var _app_state__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.state */ "./src/app/store/app.state.ts");
/* harmony import */ var _app_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.actions */ "./src/app/store/app.actions.ts");
/* harmony import */ var _models_entry_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../models/entry.model */ "./src/app/models/entry.model.ts");
/* harmony import */ var _models_transaction_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../models/transaction.model */ "./src/app/models/transaction.model.ts");
/* harmony import */ var _repository__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./repository */ "./src/app/store/repository.ts");
var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};





var defaultState = _app_state__WEBPACK_IMPORTED_MODULE_0__["AppState"].default().app;
function AppReducer(state, action) {
    // console.log("reducing", state, action);
    if (state === void 0) { state = defaultState; }
    switch (action.type) {
        /////////////////
        // get entries //
        /////////////////
        case _app_actions__WEBPACK_IMPORTED_MODULE_1__["GET_ENTRIES"]: {
            return __assign({}, state, { entries: __assign({}, state.entries, { loading: true }) });
        }
        case _app_actions__WEBPACK_IMPORTED_MODULE_1__["GET_ENTRIES_SUCCESS"]: {
            return __assign({}, state, { entries: __assign({}, state.entries, { loading: false, repository: new _repository__WEBPACK_IMPORTED_MODULE_4__["Repository"](action.entries.map(function (entry) { return new _app_state__WEBPACK_IMPORTED_MODULE_0__["EntryFormState"](entry); })) }) });
        }
        case _app_actions__WEBPACK_IMPORTED_MODULE_1__["GET_ENTRIES_ERROR"]: {
            return __assign({}, state, { entries: __assign({}, state.entries, { loading: false }) });
        }
        ///////////////
        // get items //
        ///////////////
        case _app_actions__WEBPACK_IMPORTED_MODULE_1__["GET_ITEMS"]: {
            return __assign({}, state, { items: __assign({}, state.items, { loading: true }) });
        }
        case _app_actions__WEBPACK_IMPORTED_MODULE_1__["GET_ITEMS_SUCCESS"]: {
            return __assign({}, state, { items: __assign({}, state.items, { loading: false, repository: new _repository__WEBPACK_IMPORTED_MODULE_4__["Repository"](action.items) }) });
        }
        case _app_actions__WEBPACK_IMPORTED_MODULE_1__["GET_ITEMS_ERROR"]: {
            return __assign({}, state, { items: __assign({}, state.items, { loading: false }) });
        }
        //////////////////
        // create entry //
        //////////////////
        case _app_actions__WEBPACK_IMPORTED_MODULE_1__["CREATE_ENTRY"]: {
            return __assign({}, state, { entries: __assign({}, state.entries, { repository: state.entries.repository.update(action.entry.uuid, {
                        loading: true,
                    }) }) });
        }
        case _app_actions__WEBPACK_IMPORTED_MODULE_1__["CREATE_ENTRY_SUCCESS"]: {
            return __assign({}, state, { entries: __assign({}, state.entries, { repository: state.entries.repository.update(action.uuid, {
                        subject: action.entry,
                        loading: false,
                        editing: false,
                    }) }) });
        }
        case _app_actions__WEBPACK_IMPORTED_MODULE_1__["CREATE_ENTRY_ERROR"]: {
            return __assign({}, state, { entries: __assign({}, state.entries, { repository: state.entries.repository.update(action.entry.uuid, {
                        loading: false,
                    }) }) });
        }
        //////////////////
        // update entry //
        //////////////////
        case _app_actions__WEBPACK_IMPORTED_MODULE_1__["UPDATE_ENTRY"]: {
            return __assign({}, state, { entries: __assign({}, state.entries, { repository: state.entries.repository.update(action.entry.uuid, {
                        loading: true,
                    }) }) });
        }
        case _app_actions__WEBPACK_IMPORTED_MODULE_1__["UPDATE_ENTRY_SUCCESS"]: {
            return __assign({}, state, { entries: __assign({}, state.entries, { repository: state.entries.repository.update(action.uuid, {
                        subject: action.entry,
                        loading: false,
                        editing: false,
                    }) }) });
        }
        case _app_actions__WEBPACK_IMPORTED_MODULE_1__["UPDATE_ENTRY_ERROR"]: {
            return __assign({}, state, { entries: __assign({}, state.entries, { repository: state.entries.repository.update(action.entry.uuid, {
                        loading: false,
                    }) }) });
        }
        /////////////////
        // create item //
        /////////////////
        case _app_actions__WEBPACK_IMPORTED_MODULE_1__["CREATE_ITEM"]: {
            return __assign({}, state, { itemForm: __assign({}, state.itemForm, { loading: true }) });
        }
        case _app_actions__WEBPACK_IMPORTED_MODULE_1__["CREATE_ITEM_SUCCESS"]: {
            return __assign({}, state, { itemForm: __assign({}, state.itemForm, { loading: false }), items: __assign({}, state.items, { repository: state.items.repository.save(action.item) }) });
        }
        case _app_actions__WEBPACK_IMPORTED_MODULE_1__["CREATE_ITEM_ERROR"]: {
            return __assign({}, state, { itemForm: __assign({}, state.itemForm, { loading: false, error: action.error }) });
        }
        /////////////////
        // update item //
        /////////////////
        case _app_actions__WEBPACK_IMPORTED_MODULE_1__["UPDATE_ITEM"]: {
            return __assign({}, state, { itemForm: __assign({}, state.itemForm, { loading: true }) });
        }
        case _app_actions__WEBPACK_IMPORTED_MODULE_1__["UPDATE_ITEM_SUCCESS"]: {
            return __assign({}, state, { itemForm: __assign({}, state.itemForm, { loading: false }), items: __assign({}, state.items, { repository: state.items.repository.save(action.item) }) });
        }
        case _app_actions__WEBPACK_IMPORTED_MODULE_1__["UPDATE_ITEM_ERROR"]: {
            return __assign({}, state, { itemForm: __assign({}, state.itemForm, { loading: false, error: action.error }) });
        }
        //////////////////
        // delete entry //
        //////////////////
        case _app_actions__WEBPACK_IMPORTED_MODULE_1__["DELETE_ENTRY"]: {
            return __assign({}, state, { entries: __assign({}, state.entries, { repository: state.entries.repository.update(action.entry.uuid, {
                        loading: true,
                    }) }) });
        }
        case _app_actions__WEBPACK_IMPORTED_MODULE_1__["DELETE_ENTRY_SUCCESS"]: {
            //TODO temporarily replace with delete marker
            // remove it a second later
            return __assign({}, state, { entries: __assign({}, state.entries, { repository: state.entries.repository.delete(action.entry.uuid) }) });
        }
        case _app_actions__WEBPACK_IMPORTED_MODULE_1__["DELETE_ENTRY_ERROR"]: {
            return __assign({}, state, { entries: __assign({}, state.entries, { repository: state.entries.repository.update(action.entry.uuid, {
                        loading: false,
                    }) }) });
        }
        /////////////////
        // delete item //
        /////////////////
        case _app_actions__WEBPACK_IMPORTED_MODULE_1__["DELETE_ITEM"]: {
            return __assign({}, state, { itemForm: __assign({}, state.itemForm, { loading: true }) });
        }
        case _app_actions__WEBPACK_IMPORTED_MODULE_1__["DELETE_ITEM_SUCCESS"]: {
            //TODO temporarily replace with delete marker
            // remove it a second later
            return __assign({}, state, { itemForm: __assign({}, state.itemForm, { loading: false }), items: __assign({}, state.items, { repository: state.items.repository.delete(action.item.uuid) }) });
        }
        case _app_actions__WEBPACK_IMPORTED_MODULE_1__["DELETE_ITEM_ERROR"]: {
            return __assign({}, state, { itemForm: __assign({}, state.itemForm, { loading: false }) });
        }
        ///////////////
        // new entry //
        ///////////////
        case _app_actions__WEBPACK_IMPORTED_MODULE_1__["NEW_ENTRY"]: {
            return __assign({}, state, { entries: __assign({}, state.entries, { repository: state.entries.repository.save(new _app_state__WEBPACK_IMPORTED_MODULE_0__["EntryFormState"](new _models_entry_model__WEBPACK_IMPORTED_MODULE_2__["Entry"]([new _models_transaction_model__WEBPACK_IMPORTED_MODULE_3__["Transaction"]()]), true)) }) });
        }
        case _app_actions__WEBPACK_IMPORTED_MODULE_1__["EDIT_ENTRY"]: {
            return __assign({}, state, { entries: __assign({}, state.entries, { repository: state.entries.repository.update(action.entry.uuid, {
                        editing: true,
                    }) }) });
        }
        case _app_actions__WEBPACK_IMPORTED_MODULE_1__["CANCEL_ENTRY"]: {
            if (action.entry.uuid.length > 0) {
                return __assign({}, state, { entries: __assign({}, state.entries, { repository: state.entries.repository.update(action.entry.uuid, {
                            editing: false,
                        }) }) });
            }
            else {
                return __assign({}, state, { entries: __assign({}, state.entries, { repository: state.entries.repository.delete("") }) });
            }
        }
        //////////////
        // new item //
        //////////////
        case _app_actions__WEBPACK_IMPORTED_MODULE_1__["CANCEL_ITEM"]: {
            return state;
        }
        default:
            return state;
    }
}


/***/ }),

/***/ "./src/app/store/app.selectors.ts":
/*!****************************************!*\
  !*** ./src/app/store/app.selectors.ts ***!
  \****************************************/
/*! exports provided: getDataState, getEntriesStoreState, getEntryLoading, getEntriesRepository, getEntriesArray, getItemsStoreState, getItemsLoading, getItemsRepository, getItemsArray, getItemData, getEntryFormState, getEntryFormStateEditing, getEntryFormStateLoading, getEntryFormStateSubject, getEntryFormStateError, getItemFormState, getItemFormLoading, getItemFormError */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDataState", function() { return getDataState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getEntriesStoreState", function() { return getEntriesStoreState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getEntryLoading", function() { return getEntryLoading; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getEntriesRepository", function() { return getEntriesRepository; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getEntriesArray", function() { return getEntriesArray; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getItemsStoreState", function() { return getItemsStoreState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getItemsLoading", function() { return getItemsLoading; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getItemsRepository", function() { return getItemsRepository; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getItemsArray", function() { return getItemsArray; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getItemData", function() { return getItemData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getEntryFormState", function() { return getEntryFormState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getEntryFormStateEditing", function() { return getEntryFormStateEditing; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getEntryFormStateLoading", function() { return getEntryFormStateLoading; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getEntryFormStateSubject", function() { return getEntryFormStateSubject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getEntryFormStateError", function() { return getEntryFormStateError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getItemFormState", function() { return getItemFormState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getItemFormLoading", function() { return getItemFormLoading; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getItemFormError", function() { return getItemFormError; });
/* harmony import */ var reselect__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! reselect */ "./node_modules/reselect/es/index.js");

var getDataState = function (state) { return state.app; };
/////////////////
// data stores //
/////////////////
//entry forms
var getEntriesStoreState = Object(reselect__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getDataState, function (state) { return state.entries; });
var getEntryLoading = Object(reselect__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getEntriesStoreState, function (entries) { return entries.loading; });
var getEntriesRepository = Object(reselect__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getEntriesStoreState, function (entries) { return entries.repository; });
var getEntriesArray = Object(reselect__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getEntriesRepository, function (repo) { return repo.all(); });
//items
var getItemsStoreState = Object(reselect__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getDataState, function (state) { return state.items; });
var getItemsLoading = Object(reselect__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getItemsStoreState, function (items) { return items.loading; });
var getItemsRepository = Object(reselect__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getItemsStoreState, function (entries) { return entries.repository; });
var getItemsArray = Object(reselect__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getItemsRepository, function (repo) { return repo.all(); });
var getItemData = function (uuid) { return Object(reselect__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getItemsRepository, function (repo) {
    var item = repo.fetch(uuid);
    return item ? item.copy() : item;
}); };
///////////
// forms //
///////////
//entries
var getEntryFormState = function (uuid) { return Object(reselect__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getDataState, function (state) {
    var efs = state.entries.repository.fetch(uuid);
    return efs ? efs.copy() : efs;
}); };
var getEntryFormStateEditing = function (uuid) { return Object(reselect__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getEntryFormState(uuid), function (formState) { return formState ? formState.editing : false; }); };
var getEntryFormStateLoading = function (uuid) { return Object(reselect__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getEntryFormState(uuid), function (formState) { return formState ? formState.loading : false; }); };
var getEntryFormStateSubject = function (uuid) { return Object(reselect__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getEntryFormState(uuid), function (formState) { return formState ? formState.subject : null; }); };
var getEntryFormStateError = function (uuid) { return Object(reselect__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getEntryFormState(uuid), function (formState) { return formState ? formState.error : ""; }); };
//items
var getItemFormState = Object(reselect__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getDataState, function (state) { return state.itemForm; });
var getItemFormLoading = Object(reselect__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getItemFormState, function (state) { return state.loading; });
var getItemFormError = Object(reselect__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getItemFormState, function (state) { return state.error; });


/***/ }),

/***/ "./src/app/store/app.state.ts":
/*!************************************!*\
  !*** ./src/app/store/app.state.ts ***!
  \************************************/
/*! exports provided: AppState, EntriesAndItemsManager, EntriesData, ItemsData, EntryFormState, ItemFormState */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppState", function() { return AppState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EntriesAndItemsManager", function() { return EntriesAndItemsManager; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EntriesData", function() { return EntriesData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItemsData", function() { return ItemsData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EntryFormState", function() { return EntryFormState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItemFormState", function() { return ItemFormState; });
/* harmony import */ var _models_entry_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../models/entry.model */ "./src/app/models/entry.model.ts");
/* harmony import */ var _repository__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./repository */ "./src/app/store/repository.ts");


/////////////////////
// TOP-LEVEL STATE //
/////////////////////
var AppState = /** @class */ (function () {
    function AppState(app) {
        this.app = app;
    }
    AppState.default = function () {
        return new AppState(EntriesAndItemsManager.default());
    };
    return AppState;
}());

///////////////////
// FEATURE STATE //
///////////////////
var EntriesAndItemsManager = /** @class */ (function () {
    function EntriesAndItemsManager(entries, items, itemForm) {
        this.entries = entries;
        this.items = items;
        this.itemForm = itemForm;
    }
    EntriesAndItemsManager.default = function () {
        return new EntriesAndItemsManager(EntriesData.default(), ItemsData.default(), ItemFormState.default());
    };
    return EntriesAndItemsManager;
}());

/////////////
// DETAILS //
/////////////
var EntriesData = /** @class */ (function () {
    function EntriesData(
    // entries are edited in their view, so we need one formstate per entry
    repository, loading, error) {
        this.repository = repository;
        this.loading = loading;
        this.error = error;
        this.repository = this.repository || new _repository__WEBPACK_IMPORTED_MODULE_1__["Repository"]();
        this.loading = this.loading || false;
        this.error = this.error || null;
    }
    EntriesData.default = function () {
        return new EntriesData();
    };
    return EntriesData;
}());

var ItemsData = /** @class */ (function () {
    function ItemsData(repository, loading, error) {
        this.repository = repository;
        this.loading = loading;
        this.error = error;
        this.repository = this.repository || new _repository__WEBPACK_IMPORTED_MODULE_1__["Repository"]();
        this.loading = this.loading || false;
        this.error = this.error || null;
    }
    ItemsData.default = function () {
        return new ItemsData();
    };
    return ItemsData;
}());

var EntryFormState = /** @class */ (function () {
    function EntryFormState(subject, editing, loading, error, uuid) {
        this.subject = subject;
        this.editing = editing;
        this.loading = loading;
        this.error = error;
        this.subject = this.subject || new _models_entry_model__WEBPACK_IMPORTED_MODULE_0__["Entry"]();
        this.editing = this.editing || false;
        this.loading = this.loading || false;
        this.error = this.error || null;
        this.uuid = this.uuid || "";
    }
    Object.defineProperty(EntryFormState.prototype, "uuid", {
        get: function () { return this.subject.uuid; },
        set: function (u) { this.subject.uuid = u; },
        enumerable: true,
        configurable: true
    });
    EntryFormState.prototype.copy = function () {
        return new EntryFormState(this.subject, this.editing, this.loading, this.error, this.uuid);
    };
    EntryFormState.default = function () {
        return new EntryFormState(null, false);
    };
    return EntryFormState;
}());

var ItemFormState = /** @class */ (function () {
    function ItemFormState(loading, error) {
        this.loading = loading;
        this.error = error;
        this.loading = this.loading || false;
        this.error = this.error || null;
    }
    ItemFormState.default = function () {
        return new ItemFormState();
    };
    return ItemFormState;
}());



/***/ }),

/***/ "./src/app/store/repository.ts":
/*!*************************************!*\
  !*** ./src/app/store/repository.ts ***!
  \*************************************/
/*! exports provided: Repository */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Repository", function() { return Repository; });
var Repository = /** @class */ (function () {
    function Repository(array) {
        var _this = this;
        this.array = array;
        this.index = {};
        this.array = this.array || [];
        this.array.forEach(function (t) {
            _this.index[t.uuid] = t;
        });
    }
    Repository.prototype.all = function () { return this.array; };
    Repository.prototype.fetch = function (uuid) { return this.index[uuid]; };
    // MUTATORS //
    Repository.prototype.save = function (t) {
        var index = this.findIndex(t.uuid);
        if (index < 0) { //update
            return this.push(t);
        }
        else { //insert
            return this.replaceIndex(index, t);
        }
    };
    Repository.prototype.update = function (uuid, update) {
        var index = this.findIndex(uuid);
        if (index < 0) {
            return this.push(update);
        }
        else {
            var obj = this.array[index].copy();
            Object.assign(obj, update);
            return this.replaceIndex(index, obj);
        }
    };
    Repository.prototype.delete = function (uuid) {
        var index = -1;
        for (var i = 0; i < this.array.length; i++) {
            if (this.array[i].uuid == uuid) {
                index = i;
                break;
            }
        }
        if (index < 0) {
            throw "TODO: uuid not found";
        }
        return new Repository(this.array.slice(0, index).concat(this.array.slice(index + 1)));
    };
    Repository.prototype.findIndex = function (uuid) {
        for (var i = 0; i < this.array.length; i++) {
            if (this.array[i].uuid == uuid) {
                return i;
            }
        }
        return -1;
    };
    Repository.prototype.replaceIndex = function (index, t) {
        var array = this.array.slice();
        array[index] = t;
        return new Repository(array);
    };
    Repository.prototype.push = function (t) {
        return new Repository([t].concat(this.array));
    };
    return Repository;
}());



/***/ }),

/***/ "./src/app/transaction/transaction.component.html":
/*!********************************************************!*\
  !*** ./src/app/transaction/transaction.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card>\n  <mat-card-header>\n    <div mat-card-avatar>\n      <mat-icon>\n        <div *ngIf=\"transaction.type == transactionType.Produced\">exposure_plus_1</div>\n        <div *ngIf=\"transaction.type == transactionType.Consumed\">exposure_neg_1</div>\n      </mat-icon>\n    </div>\n    <mat-card-title>\n      <p>{{ transaction.type }} {{ transaction.count }} of {{ item?.name }}</p>\n    </mat-card-title>\n  </mat-card-header>\n\n  <mat-card-content>\n    <div *ngIf=\"editMode\">\n      <mat-radio-group style=\"width: 100%;\" [(ngModel)]=\"transaction.type\">\n        <div style=\"display: inline-block; width: 50%; text-align: center;\">\n          <mat-radio-button [value]=\"transactionType.Produced\">\n            Produced\n          </mat-radio-button>\n        </div><div style=\"display: inline-block; width: 50%; text-align: center;\">\n          <mat-radio-button [value]=\"transactionType.Consumed\">\n            Consumed\n          </mat-radio-button>\n        </div>\n      </mat-radio-group>\n\n      <div>\n        <app-item-selector style=\"width: 100%;\" [uuid]=\"itemUUID\" (uuidChange)=\"itemUUID = $event; countInput.focus();\" [allowNew]=\"transaction.type == transactionType.Produced\"></app-item-selector>\n      </div>\n\n      <div style=\"background-color: #EEEEEE;\">\n        <input matInput #countInput type=\"number\" [(ngModel)]=\"transaction.count\"/>\n      </div>\n\n      <app-item-properties [properties]=\"item?.properties\"></app-item-properties>\n\n      <mat-card-actions>\n        <button mat-button (click)=\"remove.emit(transaction)\">Remove</button>\n      </mat-card-actions>\n    </div>\n  </mat-card-content>\n</mat-card>\n"

/***/ }),

/***/ "./src/app/transaction/transaction.component.scss":
/*!********************************************************!*\
  !*** ./src/app/transaction/transaction.component.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "mat-card {\n  background-color: #DDDDDDDD;\n  width: 350px; }\n\nmat-tab {\n  width: 100px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3hhbmRlci9nby9zcmMvZ2l0aHViLmNvbS94YW5kZXJmbG9vZC9ub3RlYm9vay91aS9ub3RlYm9vay9zcmMvYXBwL3RyYW5zYWN0aW9uL3RyYW5zYWN0aW9uLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsNEJBQTJCO0VBQzNCLGFBQVksRUFDYjs7QUFFRDtFQUNFLGFBQVksRUFDYiIsImZpbGUiOiJzcmMvYXBwL3RyYW5zYWN0aW9uL3RyYW5zYWN0aW9uLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsibWF0LWNhcmQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjREREREREREQ7XG4gIHdpZHRoOiAzNTBweDtcbn1cblxubWF0LXRhYiB7XG4gIHdpZHRoOiAxMDBweDtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/transaction/transaction.component.ts":
/*!******************************************************!*\
  !*** ./src/app/transaction/transaction.component.ts ***!
  \******************************************************/
/*! exports provided: TransactionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TransactionComponent", function() { return TransactionComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _store_app_selectors__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../store/app.selectors */ "./src/app/store/app.selectors.ts");
/* harmony import */ var _models_transaction_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../models/transaction.model */ "./src/app/models/transaction.model.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var TransactionComponent = /** @class */ (function () {
    function TransactionComponent(store) {
        this.store = store;
        this.remove = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        //make these available in the view renderer
        this.transactionType = _models_transaction_model__WEBPACK_IMPORTED_MODULE_5__["TransactionType"];
        this.types = Object.values(_models_transaction_model__WEBPACK_IMPORTED_MODULE_5__["TransactionType"]);
    }
    Object.defineProperty(TransactionComponent.prototype, "itemUUID", {
        get: function () {
            return this.transaction.itemUUID;
        },
        set: function (u) {
            this.transaction.itemUUID = u;
            this.itemUUIDSubscriber.next(u);
        },
        enumerable: true,
        configurable: true
    });
    TransactionComponent.prototype.ngOnInit = function () {
        var _this = this;
        rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"].create(function (subscriber, _) {
            _this.itemUUIDSubscriber = subscriber;
        }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["startWith"])(this.transaction.itemUUID), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(function (uuid) { return _this.store.select(Object(_store_app_selectors__WEBPACK_IMPORTED_MODULE_4__["getItemData"])(uuid)); })).subscribe(function (item) { return _this.item = item; });
    };
    TransactionComponent.prototype.uuidChange = function (uuid) {
        this.itemUUID = uuid;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _models_transaction_model__WEBPACK_IMPORTED_MODULE_5__["Transaction"])
    ], TransactionComponent.prototype, "transaction", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], TransactionComponent.prototype, "editMode", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], TransactionComponent.prototype, "remove", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String),
        __metadata("design:paramtypes", [String])
    ], TransactionComponent.prototype, "itemUUID", null);
    TransactionComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-transaction',
            template: __webpack_require__(/*! ./transaction.component.html */ "./src/app/transaction/transaction.component.html"),
            styles: [__webpack_require__(/*! ./transaction.component.scss */ "./src/app/transaction/transaction.component.scss")]
        }),
        __metadata("design:paramtypes", [_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["Store"]])
    ], TransactionComponent);
    return TransactionComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/xander/go/src/github.com/xanderflood/notebook/ui/notebook/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map