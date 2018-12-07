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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _authors_authors_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./authors/authors.component */ "./src/app/authors/authors.component.ts");
/* harmony import */ var _detail_author_detail_author_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./detail-author/detail-author.component */ "./src/app/detail-author/detail-author.component.ts");
/* harmony import */ var _book_book_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./book/book.component */ "./src/app/book/book.component.ts");






var routes = [
    {
        path: 'authors',
        component: _authors_authors_component__WEBPACK_IMPORTED_MODULE_3__["AuthorsComponent"]
    },
    {
        path: 'author/:id',
        component: _detail_author_detail_author_component__WEBPACK_IMPORTED_MODULE_4__["DetailAuthorComponent"]
    },
    {
        path: 'book',
        component: _book_book_component__WEBPACK_IMPORTED_MODULE_5__["BookComponent"]
    }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
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

module.exports = "<div id=\"container\">\n  <app-sidebar></app-sidebar>\n\n  <div id=\"content\">\n    <router-outlet></router-outlet>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'bookManager';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./sidebar/sidebar.component */ "./src/app/sidebar/sidebar.component.ts");
/* harmony import */ var _authors_authors_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./authors/authors.component */ "./src/app/authors/authors.component.ts");
/* harmony import */ var _book_book_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./book/book.component */ "./src/app/book/book.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _detail_author_detail_author_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./detail-author/detail-author.component */ "./src/app/detail-author/detail-author.component.ts");
/* harmony import */ var _detail_book_detail_book_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./detail-book/detail-book.component */ "./src/app/detail-book/detail-book.component.ts");












var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_6__["SidebarComponent"],
                _authors_authors_component__WEBPACK_IMPORTED_MODULE_7__["AuthorsComponent"],
                _book_book_component__WEBPACK_IMPORTED_MODULE_8__["BookComponent"],
                _detail_author_detail_author_component__WEBPACK_IMPORTED_MODULE_10__["DetailAuthorComponent"],
                _detail_book_detail_book_component__WEBPACK_IMPORTED_MODULE_11__["DetailBookComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/authors/authors.component.html":
/*!************************************************!*\
  !*** ./src/app/authors/authors.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>Authors</h1>\n\n<form>\n  <form (ngSubmit)=\"onSubmit()\">\n    <div class=\"form-group\">\n      <label for=\"name\">Name</label>\n      <input type=\"text\" class=\"form-control\" id=\"name\" required [(ngModel)]=\"author.name\" name=\"name\">\n    </div>\n\n    <div class=\"form-group\">\n      <label for=\"description\">Description</label>\n      <input type=\"text\" class=\"form-control\" id=\"description\" required [(ngModel)]=\"author.age\" name=\"description\">\n    </div>\n\n  <button type=\"submit\" class=\"btn btn-success\">Add Author</button>\n\n</form>\n\n<ul>\n  <li *ngFor=\"let author of authors$\">\n      <a routerLink=\"/author/{{author.authorid}}\">{{author.idAuthor}}</a>\n      <a routerLink=\"/author/{{author.authorid}}\">{{author.name}}</a>\n  </li>\n</ul>"

/***/ }),

/***/ "./src/app/authors/authors.component.scss":
/*!************************************************!*\
  !*** ./src/app/authors/authors.component.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2F1dGhvcnMvYXV0aG9ycy5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/authors/authors.component.ts":
/*!**********************************************!*\
  !*** ./src/app/authors/authors.component.ts ***!
  \**********************************************/
/*! exports provided: AuthorsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthorsComponent", function() { return AuthorsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_data_author_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/data.author.service */ "./src/app/services/data.author.service.ts");
/* harmony import */ var _classes_Author__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../classes/Author */ "./src/app/classes/Author.ts");




var AuthorsComponent = /** @class */ (function () {
    function AuthorsComponent(data) {
        this.data = data;
        this.author = new _classes_Author__WEBPACK_IMPORTED_MODULE_3__["Author"]();
    }
    AuthorsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.data.getAuthors().subscribe(function (data) { return _this.authors$ = data; });
    };
    AuthorsComponent.prototype.save = function () {
        this.data.saveAuthor(this.author).subscribe(function (data) { return console.log(data); }, function (error) { return console.log(error); });
        this.author = new _classes_Author__WEBPACK_IMPORTED_MODULE_3__["Author"]();
    };
    AuthorsComponent.prototype.onSubmit = function () {
        this.save();
    };
    AuthorsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-authors',
            template: __webpack_require__(/*! ./authors.component.html */ "./src/app/authors/authors.component.html"),
            styles: [__webpack_require__(/*! ./authors.component.scss */ "./src/app/authors/authors.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_data_author_service__WEBPACK_IMPORTED_MODULE_2__["DataAuthorService"]])
    ], AuthorsComponent);
    return AuthorsComponent;
}());



/***/ }),

/***/ "./src/app/book/book.component.html":
/*!******************************************!*\
  !*** ./src/app/book/book.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  book works!\n</p>\n"

/***/ }),

/***/ "./src/app/book/book.component.scss":
/*!******************************************!*\
  !*** ./src/app/book/book.component.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Jvb2svYm9vay5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/book/book.component.ts":
/*!****************************************!*\
  !*** ./src/app/book/book.component.ts ***!
  \****************************************/
/*! exports provided: BookComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BookComponent", function() { return BookComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var BookComponent = /** @class */ (function () {
    function BookComponent() {
    }
    BookComponent.prototype.ngOnInit = function () {
    };
    BookComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-book',
            template: __webpack_require__(/*! ./book.component.html */ "./src/app/book/book.component.html"),
            styles: [__webpack_require__(/*! ./book.component.scss */ "./src/app/book/book.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], BookComponent);
    return BookComponent;
}());



/***/ }),

/***/ "./src/app/classes/Author.ts":
/*!***********************************!*\
  !*** ./src/app/classes/Author.ts ***!
  \***********************************/
/*! exports provided: Author */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Author", function() { return Author; });
var Author = /** @class */ (function () {
    function Author() {
    }
    return Author;
}());



/***/ }),

/***/ "./src/app/detail-author/detail-author.component.html":
/*!************************************************************!*\
  !*** ./src/app/detail-author/detail-author.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  detail-author works!\n</p>\n"

/***/ }),

/***/ "./src/app/detail-author/detail-author.component.scss":
/*!************************************************************!*\
  !*** ./src/app/detail-author/detail-author.component.scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2RldGFpbC1hdXRob3IvZGV0YWlsLWF1dGhvci5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/detail-author/detail-author.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/detail-author/detail-author.component.ts ***!
  \**********************************************************/
/*! exports provided: DetailAuthorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailAuthorComponent", function() { return DetailAuthorComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var DetailAuthorComponent = /** @class */ (function () {
    function DetailAuthorComponent() {
    }
    DetailAuthorComponent.prototype.ngOnInit = function () {
    };
    DetailAuthorComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-detail-author',
            template: __webpack_require__(/*! ./detail-author.component.html */ "./src/app/detail-author/detail-author.component.html"),
            styles: [__webpack_require__(/*! ./detail-author.component.scss */ "./src/app/detail-author/detail-author.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], DetailAuthorComponent);
    return DetailAuthorComponent;
}());



/***/ }),

/***/ "./src/app/detail-book/detail-book.component.html":
/*!********************************************************!*\
  !*** ./src/app/detail-book/detail-book.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  detail-book works!\n</p>\n"

/***/ }),

/***/ "./src/app/detail-book/detail-book.component.scss":
/*!********************************************************!*\
  !*** ./src/app/detail-book/detail-book.component.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2RldGFpbC1ib29rL2RldGFpbC1ib29rLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/detail-book/detail-book.component.ts":
/*!******************************************************!*\
  !*** ./src/app/detail-book/detail-book.component.ts ***!
  \******************************************************/
/*! exports provided: DetailBookComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailBookComponent", function() { return DetailBookComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var DetailBookComponent = /** @class */ (function () {
    function DetailBookComponent() {
    }
    DetailBookComponent.prototype.ngOnInit = function () {
    };
    DetailBookComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-detail-book',
            template: __webpack_require__(/*! ./detail-book.component.html */ "./src/app/detail-book/detail-book.component.html"),
            styles: [__webpack_require__(/*! ./detail-book.component.scss */ "./src/app/detail-book/detail-book.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], DetailBookComponent);
    return DetailBookComponent;
}());



/***/ }),

/***/ "./src/app/services/data.author.service.ts":
/*!*************************************************!*\
  !*** ./src/app/services/data.author.service.ts ***!
  \*************************************************/
/*! exports provided: DataAuthorService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataAuthorService", function() { return DataAuthorService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var DataAuthorService = /** @class */ (function () {
    function DataAuthorService(http) {
        this.http = http;
        this.baseUrl = 'http://localhost:8080/api/';
    }
    DataAuthorService.prototype.getAuthors = function () {
        return this.http.get("" + this.baseUrl + 'authors');
    };
    DataAuthorService.prototype.getAuthorById = function (id) {
        return this.http.get("" + this.baseUrl + ("author/" + id));
    };
    DataAuthorService.prototype.saveAuthor = function (author) {
        return this.http.post("" + this.baseUrl + "/author", author);
    };
    DataAuthorService.prototype.deleteAuthor = function (id) {
        return this.http.delete(this.baseUrl + "/" + id, { responseType: 'text' });
    };
    DataAuthorService.prototype.updateAuthor = function (id, author) {
        return this.http.put(this.baseUrl + "/" + id, author);
    };
    DataAuthorService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], DataAuthorService);
    return DataAuthorService;
}());



/***/ }),

/***/ "./src/app/sidebar/sidebar.component.html":
/*!************************************************!*\
  !*** ./src/app/sidebar/sidebar.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav>\n  <ul>\n    <li>\n      <a routerLink=\"\">\n        <i class=\"material-icons\">supervised_user_circle</i>\n      </a>\n    </li>\n\n    <li>\n      <a routerLink=\"authors\">\n        <i class=\"material-icons\">message</i>\n      </a>\n    </li>\n\n    <li>\n      <a routerLink=\"authors\">\n        <i class=\"material-icons\">search</i>\n      </a>\n    </li>\n\n    <li>\n      <a routerLink=\"author/\">\n        <i class=\"material-icons\">library_books</i>\n      </a>\n    </li>\n  </ul>\n</nav>\n"

/***/ }),

/***/ "./src/app/sidebar/sidebar.component.scss":
/*!************************************************!*\
  !*** ./src/app/sidebar/sidebar.component.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "nav {\n  background: #2D2E2E;\n  height: 100%; }\n  nav ul {\n    list-style-type: none;\n    padding: 0;\n    margin: 0; }\n  nav ul li a {\n      color: #fff;\n      padding: 20px;\n      display: block; }\n  nav ul li .activated {\n      background-color: #00a8ff; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2RhbmllbC9wcm9ncmFtYXMvYW5ndWxhci1zcHJpbmcvYW5ndWxhckJvb2tNYW5hZ2VyL2Jvb2tNYW5hZ2VyL3NyYy9hcHAvc2lkZWJhci9zaWRlYmFyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksb0JBQW1CO0VBQ25CLGFBQVksRUFvQmY7RUF0QkQ7SUFLUSxzQkFBcUI7SUFDckIsV0FBVTtJQUNWLFVBQVMsRUFjWjtFQXJCTDtNQVlnQixZQUFXO01BQ1gsY0FBYTtNQUNiLGVBQWMsRUFDakI7RUFmYjtNQWtCZ0IsMEJBQXlCLEVBQzVCIiwiZmlsZSI6InNyYy9hcHAvc2lkZWJhci9zaWRlYmFyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsibmF2e1xuICAgIGJhY2tncm91bmQ6ICMyRDJFMkU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuXG4gICAgdWx7XG4gICAgICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcbiAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgbWFyZ2luOiAwO1xuXG4gICAgICAgIGxpe1xuXG4gICAgICAgICAgICBhe1xuICAgICAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDIwcHg7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7ICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAuYWN0aXZhdGVke1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMwMGE4ZmY7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59Il19 */"

/***/ }),

/***/ "./src/app/sidebar/sidebar.component.ts":
/*!**********************************************!*\
  !*** ./src/app/sidebar/sidebar.component.ts ***!
  \**********************************************/
/*! exports provided: SidebarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidebarComponent", function() { return SidebarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var SidebarComponent = /** @class */ (function () {
    function SidebarComponent() {
    }
    SidebarComponent.prototype.ngOnInit = function () {
    };
    SidebarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-sidebar',
            template: __webpack_require__(/*! ./sidebar.component.html */ "./src/app/sidebar/sidebar.component.html"),
            styles: [__webpack_require__(/*! ./sidebar.component.scss */ "./src/app/sidebar/sidebar.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], SidebarComponent);
    return SidebarComponent;
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

module.exports = __webpack_require__(/*! /home/daniel/programas/angular-spring/angularBookManager/bookManager/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map