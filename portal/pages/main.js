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
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<div style=\"text-align:center\">\n  <h1>\n   {{ title }}\n  </h1>\n</div>\n<p></p>\n<app-player></app-player>\n"

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
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'Audio Convert & Play Toolkit';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
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
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _player_player_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./player/player.component */ "./src/app/player/player.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
                _player_player_component__WEBPACK_IMPORTED_MODULE_3__["PlayerComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/player/player.component.css":
/*!*********************************************!*\
  !*** ./src/app/player/player.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "html,\r\nbody {\r\n  height: 100%;\r\n}\r\n\r\nbody {\r\n  display: flex;\r\n  align-items: center;\r\n  padding-top: 40px;\r\n  padding-bottom: 40px;\r\n  background-color: #f5f5f5;\r\n}\r\n\r\n.form-signin {\r\n  width: 100%;\r\n  max-width: 530px;\r\n  padding: 15px;\r\n  margin: auto;\r\n}\r\n\r\n.btn-file {\r\n  position: relative;\r\n  overflow: hidden;\r\n}\r\n\r\n.btn-file input[type=file] {\r\n  position: absolute;\r\n  top: 0;\r\n  right: 0;\r\n  min-width: 100%;\r\n  min-height: 100%;\r\n  font-size: 100px;\r\n  text-align: right;\r\n  filter: alpha(opacity=0);\r\n  opacity: 0;\r\n  background: red;\r\n  cursor: inherit;\r\n  display: block;\r\n}\r\n\r\ninput[readonly] {\r\n  background-color: white !important;\r\n  cursor: text !important;\r\n}\r\n"

/***/ }),

/***/ "./src/app/player/player.component.html":
/*!**********************************************!*\
  !*** ./src/app/player/player.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form class=\"form-signin\">\r\n  <div>\r\n    <h4>Select a File</h4>\r\n    <div class=\"input-group\">\r\n                <span class=\"input-group-btn\">\r\n                    <span class=\"btn btn-primary btn-file\">\r\n                        Browse… <input type=\"file\" single=\"\" (change)=\"browseFile($event)\">\r\n                    </span>\r\n                </span>\r\n      <input type=\"text\" class=\"form-control\" readonly=\"\" required=\"\" value=\"{{selectedFile.name}}\">\r\n    </div>\r\n  </div>\r\n  <p></p>\r\n  <select class=\"custom-select d-block w-100\" id=\"codecSelect\" required=\"\" (change)=\"codecChange($event)\">\r\n    <option value=\"\">Choose Codec...</option>\r\n    <option *ngFor=\"let codec of codecList\" [ngValue]=\"codec\">{{codec}}</option>\r\n  </select>\r\n  <p></p>\r\n  <select class=\"custom-select d-block w-100\" id=\"para\" required=\"\" (change)=\"paraChange($event)\">\r\n    <option value=\"\">Choose Parameter...</option>\r\n    <option *ngFor=\"let para of paraList\" [ngValue]=\"para\">{{para}}</option>\r\n  </select>\r\n  <p></p>\r\n  <select class=\"custom-select d-block w-100\" id=\"Container\" required=\"\" (change)=\"containerChange($event)\">\r\n    <option value=\"\">Choose Container...</option>\r\n    <option *ngFor=\"let container of containerList\">{{container}}</option>\r\n  </select>\r\n  <p></p>\r\n  <p></p>\r\n  <button type=\"button\" class=\"btn btn-lg btn-primary btn-block\" (click)=\"sendToServer()\">Covert & Play</button>\r\n  <p class=\"mt-5 mb-3 text-muted\">© 2018</p>\r\n</form>\r\n"

/***/ }),

/***/ "./src/app/player/player.component.ts":
/*!********************************************!*\
  !*** ./src/app/player/player.component.ts ***!
  \********************************************/
/*! exports provided: PlayerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlayerComponent", function() { return PlayerComponent; });
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

var PlayerComponent = /** @class */ (function () {
    function PlayerComponent() {
        this.codecList = [];
        this.paraList = [];
        this.containerList = [];
        this.selectedFile = null;
        this.ws = null;
    }
    PlayerComponent.prototype.ngOnInit = function () {
        this.codecList.push('Speex');
        this.paraList.push('NB');
        this.paraList.push('WB');
        this.paraList.push('UWB');
        this.containerList.push('None');
        this.containerList.push('Nuance Frame');
    };
    PlayerComponent.prototype.browseFile = function (fileInput) {
        console.log('browser file');
        this.selectedFile = fileInput.target.files[0];
    };
    PlayerComponent.prototype.sendToServer = function () {
        var _this = this;
        console.log('sending to server');
        console.log(this.selectedCodec);
        var query_begin = {
            message: 'query_begin',
            codec: this.selectedCodec,
            parameter: this.selectedParameter,
            container: this.selectedContainer
        };
        var fr = new FileReader();
        fr.readAsArrayBuffer(this.selectedFile);
        var query_end = {
            message: 'query_end',
        };
        this.ws = new WebSocket('ws://' + location.host + '/ws');
        this.ws.binaryType = 'arraybuffer';
        this.ws.onopen = function () {
            _this.ws.send(JSON.stringify(query_begin));
            _this.ws.send(fr.result);
            _this.ws.send(JSON.stringify(query_end));
        };
        var _ws = this.ws;
        var rate = 8000;
        this.ws.onmessage = function (event) {
            console.log(event.data);
            if (typeof (event.data) === 'string') {
                var res = JSON.parse(event.data);
                if (res['message'] === 'res_begin') {
                    console.log('res_begin');
                    rate = res['rate'];
                }
                if (res['message'] === 'res_end') {
                    console.log('res_end');
                    _ws.close();
                }
            }
            else {
                var pcm16Buffer = new Int16Array(event.data);
                var audioToPlay = new Float32Array(pcm16Buffer.length);
                for (var i = 0; i < pcm16Buffer.length; i++) {
                    audioToPlay[i] = pcm16Buffer[i] / 32768;
                }
                // audioToPlay.set(event.data, 0);
                var audioContext = new (window.AudioContext || window.webkitAudioContext)();
                var audioBuffer = audioContext.createBuffer(1, audioToPlay.length, rate);
                var source = audioContext.createBufferSource();
                audioBuffer.getChannelData(0).set(audioToPlay);
                source.buffer = audioBuffer;
                source.connect(audioContext.destination);
                source.start(0);
            }
        };
    };
    PlayerComponent.prototype.codecChange = function ($event) {
        var index = $event.target.selectedIndex - 1;
        if (index >= 0 && index < this.codecList.length) {
            this.selectedCodec = this.codecList[index];
        }
        else {
            this.selectedCodec = this.codecList[0];
        }
    };
    PlayerComponent.prototype.paraChange = function ($event) {
        var index = $event.target.selectedIndex - 1;
        if (index >= 0 && index < this.paraList.length) {
            this.selectedParameter = this.paraList[index];
        }
        else {
            this.selectedParameter = this.paraList[0];
        }
    };
    PlayerComponent.prototype.containerChange = function ($event) {
        var index = $event.target.selectedIndex - 1;
        if (index >= 0 && index < this.containerList.length) {
            this.selectedContainer = this.containerList[index];
        }
        else {
            this.selectedContainer = this.containerList[0];
        }
    };
    PlayerComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-player',
            template: __webpack_require__(/*! ./player.component.html */ "./src/app/player/player.component.html"),
            styles: [__webpack_require__(/*! ./player.component.css */ "./src/app/player/player.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], PlayerComponent);
    return PlayerComponent;
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
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
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
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\Codes\github\audio-convert-web\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map