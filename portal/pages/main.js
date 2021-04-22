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
        this.title = 'Audio Online Player';
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

module.exports = "html,\nbody {\n  height: 100%;\n}\n\nbody {\n  display: flex;\n  align-items: center;\n  padding-top: 40px;\n  padding-bottom: 40px;\n  background-color: #f5f5f5;\n}\n\n.form-signin {\n  width: 100%;\n  max-width: 530px;\n  padding: 15px;\n  margin: auto;\n}\n\n.btn-file {\n  position: relative;\n  overflow: hidden;\n}\n\n.btn-file input[type=file] {\n  position: absolute;\n  top: 0;\n  right: 0;\n  min-width: 100%;\n  min-height: 100%;\n  font-size: 100px;\n  text-align: right;\n  filter: alpha(opacity=0);\n  opacity: 0;\n  background: red;\n  cursor: inherit;\n  display: block;\n}\n\ninput[readonly] {\n  background-color: white !important;\n  cursor: text !important;\n}\n\n.spinner {\n  margin: 100px auto 0;\n  width: 150px;\n  text-align: center;\n}\n\n.spinner > div {\n  width: 30px;\n  height: 30px;\n  background-color: #007bff;\n\n  border-radius: 100%;\n  display: inline-block;\n  -webkit-animation: bouncedelay 1.4s infinite ease-in-out;\n  animation: bouncedelay 1.4s infinite ease-in-out;\n  /* Prevent first frame from flickering when animation starts */\n  -webkit-animation-fill-mode: both;\n  animation-fill-mode: both;\n}\n\n.spinner .bounce1 {\n  -webkit-animation-delay: -0.32s;\n  animation-delay: -0.32s;\n}\n\n.spinner .bounce2 {\n  -webkit-animation-delay: -0.16s;\n  animation-delay: -0.16s;\n}\n\n@-webkit-keyframes bouncedelay {\n  0%, 80%, 100% { -webkit-transform: scale(0.0) }\n  40% { -webkit-transform: scale(1.0) }\n}\n\n@keyframes bouncedelay {\n  0%, 80%, 100% {\n    transform: scale(0.0);\n    -webkit-transform: scale(0.0);\n  } 40% {\n      transform: scale(1.0);\n      -webkit-transform: scale(1.0);\n    }\n}\n"

/***/ }),

/***/ "./src/app/player/player.component.html":
/*!**********************************************!*\
  !*** ./src/app/player/player.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form class=\"form-signin\">\n  <div>\n    <h4>Select a File</h4>\n    <div class=\"input-group\">\n                <span class=\"input-group-btn\">\n                    <span class=\"btn btn-primary btn-file\">\n                        Browse… <input type=\"file\" single=\"\" (change)=\"browseFile($event)\">\n                    </span>\n                </span>\n      <input type=\"text\" class=\"form-control\" readonly=\"\" required=\"\" value=\"{{fileName}}\">\n    </div>\n  </div>\n  <p></p>\n  <select class=\"custom-select d-block w-100\" id=\"codecSelect\" required=\"\" (change)=\"codecChange($event)\">\n    <option value=\"\">Choose Codec...</option>\n    <option *ngFor=\"let codec of codecList\" [ngValue]=\"codec\">{{codec}}</option>\n  </select>\n  <p></p>\n  <select class=\"custom-select d-block w-100\" id=\"para\" required=\"\" (change)=\"paraChange($event)\">\n    <option value=\"\">Choose Parameter...</option>\n    <option *ngFor=\"let para of paraList\" [ngValue]=\"para\">{{para}}</option>\n  </select>\n  <p></p>\n  <select class=\"custom-select d-block w-100\" id=\"Container\" required=\"\" (change)=\"containerChange($event)\">\n    <option value=\"\">Choose Container...</option>\n    <option *ngFor=\"let container of containerList\">{{container}}</option>\n  </select>\n  <p></p>\n  <p></p>\n  <button type=\"button\" class=\"btn btn-lg btn-primary btn-block\" (click)=\"sendToServer()\">Play audio!</button>\n\n  <div class=\"spinner\" *ngIf=\"showLoading\">\n    <div class=\"bounce1\"></div>\n    <div class=\"bounce2\"></div>\n    <div class=\"bounce3\"></div>\n  </div>\n  <p></p>\n  <p></p>\n  <input  #ramSelector name=\"ram\" type=\"range\" id=\"myRange\" value=\"{{customProgress}}\" max=\"100\" class=\"custom-range\" (change)=\"setRam(ramSelector.value)\" *ngIf=\"showPlayer\">\n  <h6 *ngIf=\"showPlayer\">{{tip}}</h6>\n  <p class=\"text-danger\" *ngIf=\"showError\"><strong>Error Occurred!</strong></p>\n  <a href=\"/Opus.Nuance_Frame\">Demo Opus file with Nuance Frame</a>\n  <p></p>\n  <a href=\"/Speex.Nuance_Frame\">Demo Speex file with Nuance Frame</a>\n  <p class=\"mt-5 mb-3 text-muted\">© 2018-2021</p>\n</form>\n"

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
        this.fileName = '';
        this.ws = null;
        this.showLoading = false;
        this.showPlayer = false;
        this.showError = false;
        this.playing = false;
        this.customProgress = 0;
        this.customProgressStep = 0;
        this.tip = '';
        this.audioContext = null;
        this.source = null;
        this.audioBuffer = null;
        this.audioContext = new (window.AudioContext || window.webkitAudioContext)();
        this.startTimer();
    }
    PlayerComponent.prototype.ngOnInit = function () {
        this.codecList.push('Speex');
        this.codecList.push('Opus');
        this.showLoading = false;
    };
    PlayerComponent.prototype.browseFile = function (fileInput) {
        console.log('browser file');
        this.selectedFile = fileInput.target.files[0];
        this.fileName = this.selectedFile.name;
        this.showLoading = false;
    };
    PlayerComponent.prototype.sendToServer = function () {
        var _this = this;
        var _t = this;
        this.customProgress = 0;
        this.customProgressStep = 0;
        this.showPlayer = false;
        this.showLoading = true;
        this.showError = false;
        this.tip = "";
        console.log('sending to server');
        console.log(this.selectedCodec);
        this.stop();
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
        var _ws = this.ws;
        this.ws = new WebSocket('wss://' + location.host + '/ws');
        // this.ws = new WebSocket('wss://' + 'audio.yxzhm.com' + '/ws');
        this.ws.binaryType = 'arraybuffer';
        this.ws.onopen = function () {
            _this.ws.send(JSON.stringify(query_begin));
            _this.ws.send(fr.result);
            _this.ws.send(JSON.stringify(query_end));
        };
        var rate = 8000;
        this.ws.onerror = function (event) {
            _t.showLoading = false;
            console.log('websocket error');
        };
        this.ws.onclose = function (event) {
            _t.showLoading = false;
            if (!_t.showPlayer) {
                _t.showError = true;
            }
            console.log('ws closed');
        };
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
                    _t.showLoading = false;
                    this.close();
                }
            }
            else {
                var pcm16Buffer = new Int16Array(event.data);
                var audioToPlay = new Float32Array(pcm16Buffer.length);
                for (var i = 0; i < pcm16Buffer.length; i++) {
                    audioToPlay[i] = pcm16Buffer[i] / 32768;
                }
                _t.audioBuffer = _t.audioContext.createBuffer(1, audioToPlay.length, rate);
                _t.audioBuffer.getChannelData(0).set(audioToPlay);
                _t.play(0);
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
        this.paraList = [];
        this.containerList = [];
        if (this.selectedCodec === 'Speex') {
            this.paraList.push('NB');
            this.paraList.push('WB');
            this.paraList.push('UWB');
            this.containerList.push('None');
            this.containerList.push('Nuance Frame');
        }
        if (this.selectedCodec === 'Opus') {
            this.paraList.push('8K');
            this.paraList.push('12K');
            this.paraList.push('16K');
            this.paraList.push('24K');
            this.paraList.push('48K');
            this.containerList.push('Nuance Frame');
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
    PlayerComponent.prototype.play = function (progress) {
        var _t = this;
        this.stop();
        this.source = this.audioContext.createBufferSource();
        this.source.buffer = this.audioBuffer;
        this.source.connect(this.audioContext.destination);
        this.source.onended = function (event) {
            _t.playing = false;
            console.log('Play Stopped');
        };
        if (this.source.buffer.duration > 1) {
            this.showPlayer = true;
            this.tip = this.source.buffer.duration + "s";
            var offset = ((this.source.buffer.duration * progress) / 100).toFixed(2);
            console.log("progress " + progress);
            console.log('Play Starting, the duration is ' + this.source.buffer.duration + ' the offset is ' + offset);
            this.customProgress = +progress;
            this.customProgressStep = +((100 / this.source.buffer.duration).toFixed(0));
            this.playing = true;
            this.source.start(0, offset);
        }
        else {
            _t.showError = true;
        }
    };
    PlayerComponent.prototype.stop = function () {
        if (this.playing) {
            console.log('Play Stopping ');
            this.source.stop(0);
            this.source.disconnect();
        }
    };
    PlayerComponent.prototype.setRam = function (value) {
        console.log('Play audio at ' + value + '%');
        this.play(value);
    };
    PlayerComponent.prototype.startTimer = function () {
        var _t = this;
        this.pauseTimer();
        this.interval = setInterval(function () {
            // console.log("Timer Progress is "+_t.customProgress);
            // console.log("Timer Progress step is "+_t.customProgressStep);
            if (_t.customProgressStep > 0 && _t.customProgress < 100) {
                _t.customProgress = _t.customProgress + _t.customProgressStep;
            }
        }, 1000);
    };
    PlayerComponent.prototype.pauseTimer = function () {
        console.log('pauseTimer');
        if (this.interval != null) {
            clearInterval(this.interval);
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

module.exports = __webpack_require__(/*! /Users/andy/Codes/src/github.com/yxzhm/audio-convert-web/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map