function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }

function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }

function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }

function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }

function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function _$$_lazy_route_resource_lazy_recursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./src/app/about/about.component.ts":
  /*!******************************************!*\
    !*** ./src/app/about/about.component.ts ***!
    \******************************************/

  /*! exports provided: AboutComponent */

  /***/
  function _src_app_about_aboutComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AboutComponent", function () {
      return AboutComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var AboutComponent = /*#__PURE__*/function () {
      function AboutComponent() {
        _classCallCheck(this, AboutComponent);
      }

      return _createClass(AboutComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);
    }();

    AboutComponent.ɵfac = function AboutComponent_Factory(t) {
      return new (t || AboutComponent)();
    };

    AboutComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AboutComponent,
      selectors: [["app-about"]],
      decls: 58,
      vars: 0,
      consts: [["id", "about", 1, "about"], [1, "light-2"], [1, "container"], [1, "ball-1"], [1, "big-ball-1"], [1, "ball-4"], [1, "col-12"], [1, "col-12", "text-center"], [1, "know-img-1", "text-center"], [1, "row"], [1, "col-lg-3", "col-sm-12", "col-md-3"], ["src", "assets\\img\\html.png", "alt", "", 1, "img-fluid"], ["src", "assets\\img\\css.png", "alt", "", 1, "img-fluid"], ["src", "assets\\img\\bootstrap.png", "alt", "", 1, "img-fluid"], ["src", "assets\\img\\js.png", "alt", "", 1, "img-fluid"], [1, "know-img-2", "text-center"], ["src", "assets\\img\\git.png", "alt", "", 1, "img-fluid"], ["src", "assets\\img\\github.png", "alt", "", 1, "img-fluid"], ["src", "assets\\img\\npm.png", "alt", "", 1, "img-fluid"], ["src", "assets\\img\\notion.png", "alt", "", 1, "img-fluid"], [1, "current-learn"], ["src", "assets\\img\\angular.png", "alt", "", 1, "img-fluid"], ["src", "assets\\img\\typescript.png", "alt", "", 1, "img-fluid"], [1, "will-learn-img"], ["src", "assets\\img\\php.png", "alt", "", 1, "img-fluid"], ["src", "assets\\img\\database.webp", "alt", "", 1, "img-fluid"], ["src", "assets\\img\\wordpress.png", "alt", "", 1, "img-fluid"], ["src", "assets\\img\\laravel-1-logo.png", "alt", "", 1, "img-fluid"]],
      template: function AboutComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "I'm Omar Waheed AbdElbary. I'm a Front-End Developer. Passionate front-end developer creating engaging and userfriendly web applications. I Proficient in HTML, CSS, JavaScript, and various front-end frameworks. Strong understanding of UI/UX principles and a keen eye for design. Committed to delivering high-quality code and continuously expanding knowledge in the ever-evolving field of web development. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "knowledge");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "img", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "img", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "img", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "img", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "img", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "img", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "img", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "img", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Current Learning");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](41, "img", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](43, "img", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "I Will Learn");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](51, "img", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](53, "img", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](55, "img", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](57, "img", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: [".light-2[_ngcontent-%COMP%] {\r\n  position: absolute;\r\n  width: 100%;\r\n  height: auto;\r\n  top: 0;\r\n  overflow-x: clip;\r\n  background-color: red;\r\n}\r\n\r\n\r\n.light-2[_ngcontent-%COMP%]::after{\r\n  content: '';\r\n  width: 350px !important;\r\n  height: 500px;\r\n  position: absolute;\r\n  background-color: #009bff;\r\n  filter: blur(150px);\r\n  border-radius: 50%;\r\n}\r\n\r\n\r\n.light-2[_ngcontent-%COMP%]::after {\r\n  right: -290px;\r\n  top: -207px;\r\n}\r\n\r\n\r\n.about[_ngcontent-%COMP%] {\r\n  background-color: #080c2f ;\r\n  width: 100%;\r\n  height: auto;\r\n  position: relative;\r\n  padding-top: 100px;\r\n  border-bottom: 1px solid royalblue;\r\n\r\n}\r\n\r\n\r\n.about[_ngcontent-%COMP%]   .ball-4[_ngcontent-%COMP%] {\r\n  top: 30%;\r\n  right: 100px;\r\n}\r\n\r\n\r\n.ball-1[_ngcontent-%COMP%] {\r\n  right: 100px;\r\n}\r\n\r\n\r\n.big-ball-1[_ngcontent-%COMP%] {\r\n  top: 60%;\r\n  left: 100px;\r\n}\r\n\r\n\r\n\r\n\r\n\r\n.about[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n  text-align: center;\r\n  color: #ffffff;\r\n  font-size: 19px;\r\n  margin-top: 35px;\r\n  margin-bottom: 100px;\r\n}\r\n\r\n\r\n.about[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\r\n  text-align: center;\r\n  color: #ffffff;\r\n  font-size: 30px;\r\n  margin-top: 35px;\r\n  margin-bottom: 35px;\r\n\r\n}\r\n\r\n\r\n.about[_ngcontent-%COMP%]   .know-img-1[_ngcontent-%COMP%]  {\r\n  width: 100%;\r\n  height: auto;\r\n  margin-top: 50px;\r\n\r\n\r\n}\r\n\r\n\r\n.about[_ngcontent-%COMP%]   .know-img-2[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n  height: auto;\r\n  margin-top: 25px;\r\n  margin-bottom: 50px;\r\n\r\n\r\n}\r\n\r\n\r\n.about[_ngcontent-%COMP%]   .know-img-1[_ngcontent-%COMP%]   .img-fluid[_ngcontent-%COMP%]  {\r\n  width: 45%;\r\n  height: auto;\r\n  border-radius: 100px;\r\n  cursor: pointer;\r\n}\r\n\r\n\r\n.about[_ngcontent-%COMP%]   .know-img-2[_ngcontent-%COMP%]   .img-fluid[_ngcontent-%COMP%] {\r\n  width: 45%;\r\n  height: auto;\r\n  border-radius: 100px;\r\n  cursor: pointer;\r\n\r\n}\r\n\r\n\r\n.about[_ngcontent-%COMP%]   .current-learn[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n  height: auto;\r\n  margin-top: 30px !important;\r\n  margin: auto;\r\n\r\n}\r\n\r\n\r\n.about[_ngcontent-%COMP%]   .current-learn[_ngcontent-%COMP%]   .img-fluid[_ngcontent-%COMP%] {\r\n  width: 45%;\r\n  height: auto;\r\n  border-radius: 100px;\r\n  cursor: pointer;\r\n  margin-left: 350px;\r\n}\r\n\r\n\r\n.about[_ngcontent-%COMP%]   .will-learn-img[_ngcontent-%COMP%] {\r\n  margin-top: 50px;\r\n  width: 100%;\r\n  height: auto;\r\n}\r\n\r\n\r\n.about[_ngcontent-%COMP%]   .will-learn-img[_ngcontent-%COMP%]   .img-fluid[_ngcontent-%COMP%] {\r\n  width: 45%;\r\n  height: auto;\r\n  border-radius: 100px;\r\n  cursor: pointer;\r\n  margin-left: 55px;\r\n  margin-bottom: 50px;\r\n}\r\n\r\n\r\n@media (max-width :750px) {\r\n\r\n\r\n.about[_ngcontent-%COMP%]   .know-img-1[_ngcontent-%COMP%]   {\r\n  width: 100%;\r\n  height: auto;\r\n\r\n\r\n}\r\n\r\n.about[_ngcontent-%COMP%]   .know-img-2[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n  height: auto;\r\n\r\n}\r\n\r\n.about[_ngcontent-%COMP%]   .know-img-1[_ngcontent-%COMP%]   .img-fluid[_ngcontent-%COMP%]  {\r\n  width: 40% !important;\r\n  height: auto;\r\n  border-radius: 70px;\r\n\r\n  margin-bottom: 15px;\r\n}\r\n\r\n.about[_ngcontent-%COMP%]   .know-img-2[_ngcontent-%COMP%]   .img-fluid[_ngcontent-%COMP%] {\r\n  width: 40%;\r\n  height: auto;\r\n  border-radius: 70px;\r\n  margin-bottom: 15px;\r\n\r\n}\r\n\r\n.about[_ngcontent-%COMP%]   .current-learn[_ngcontent-%COMP%]   .img-fluid[_ngcontent-%COMP%] {\r\n  width: 40% !important;\r\n  height: auto;\r\n  border-radius: 70px;\r\n  margin-bottom: 15px;\r\n}\r\n\r\n.about[_ngcontent-%COMP%]   .current-learn[_ngcontent-%COMP%]   .img-fluid[_ngcontent-%COMP%] {\r\n  width: 40%  !important;\r\n  height: auto;\r\n  border-radius: 70px;\r\n  margin-bottom: 15px;\r\n  margin-left: 110px;\r\n\r\n}\r\n\r\n\r\n.about[_ngcontent-%COMP%]   .will-learn-img[_ngcontent-%COMP%]   .img-fluid[_ngcontent-%COMP%] {\r\n  width: 40%;\r\n  height: auto;\r\n  border-radius: 70px;\r\n  margin-bottom: 20px;\r\n  margin-left: 100px;\r\n\r\n}\r\n\r\n\r\n\r\n}\r\n\r\n\r\n@media (min-width : 751px) and (max-width : 950px) {\r\n\r\n  .about[_ngcontent-%COMP%]   .know-img-1[_ngcontent-%COMP%]  {\r\n      width: 100%;\r\n      height: auto;\r\n      margin-top: 50px;\r\n\r\n  }\r\n\r\n  .about[_ngcontent-%COMP%]   .know-img-2[_ngcontent-%COMP%] {\r\n      width: 100%;\r\n      height: auto;\r\n      margin-top: 35px;\r\n  }\r\n\r\n  .about[_ngcontent-%COMP%]   .know-img-1[_ngcontent-%COMP%]   .img-fluid[_ngcontent-%COMP%] {\r\n      width: 70%;\r\n      height: auto;\r\n      border-radius: 100px;\r\n\r\n  }\r\n\r\n  .about[_ngcontent-%COMP%]   .know-img-2[_ngcontent-%COMP%]   .img-fluid[_ngcontent-%COMP%] {\r\n\r\n      width: 70%;\r\n      height: auto;\r\n      border-radius: 100px;\r\n\r\n  }\r\n\r\n  .about[_ngcontent-%COMP%]   .current-learn[_ngcontent-%COMP%]   .img-fluid[_ngcontent-%COMP%] {\r\n      width: 70%;\r\n      height: auto;\r\n      border-radius: 100px;\r\n      margin-left: 170px;\r\n\r\n  }\r\n\r\n\r\n  .about[_ngcontent-%COMP%]   .will-learn-img[_ngcontent-%COMP%]   .img-fluid[_ngcontent-%COMP%] {\r\n      width: 70%;\r\n      height: auto;\r\n      border-radius: 100px;\r\n      margin-left: 40px;\r\n      margin-bottom: 50px;\r\n  }\r\n\r\n\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWJvdXQvYWJvdXQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBSUE7RUFDRSxrQkFBa0I7RUFDbEIsV0FBVztFQUNYLFlBQVk7RUFDWixNQUFNO0VBQ04sZ0JBQWdCO0VBQ2hCLHFCQUFxQjtBQUN2Qjs7O0FBR0E7RUFDRSxXQUFXO0VBQ1gsdUJBQXVCO0VBQ3ZCLGFBQWE7RUFDYixrQkFBa0I7RUFDbEIseUJBQXlCO0VBQ3pCLG1CQUFtQjtFQUNuQixrQkFBa0I7QUFDcEI7OztBQUdBO0VBQ0UsYUFBYTtFQUNiLFdBQVc7QUFDYjs7O0FBR0E7RUFDRSwwQkFBMEI7RUFDMUIsV0FBVztFQUNYLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLGtDQUFrQzs7QUFFcEM7OztBQUVBO0VBQ0UsUUFBUTtFQUNSLFlBQVk7QUFDZDs7O0FBRUE7RUFDRSxZQUFZO0FBQ2Q7OztBQUVBO0VBQ0UsUUFBUTtFQUNSLFdBQVc7QUFDYjs7O0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBbUZHOzs7QUFHSDtFQUNFLGtCQUFrQjtFQUNsQixjQUFjO0VBQ2QsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixvQkFBb0I7QUFDdEI7OztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGNBQWM7RUFDZCxlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLG1CQUFtQjs7QUFFckI7OztBQUVBO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWixnQkFBZ0I7OztBQUdsQjs7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLGdCQUFnQjtFQUNoQixtQkFBbUI7OztBQUdyQjs7O0FBRUE7RUFDRSxVQUFVO0VBQ1YsWUFBWTtFQUNaLG9CQUFvQjtFQUNwQixlQUFlO0FBQ2pCOzs7QUFFQTtFQUNFLFVBQVU7RUFDVixZQUFZO0VBQ1osb0JBQW9CO0VBQ3BCLGVBQWU7O0FBRWpCOzs7QUFFQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0VBQ1osMkJBQTJCO0VBQzNCLFlBQVk7O0FBRWQ7OztBQUVBO0VBQ0UsVUFBVTtFQUNWLFlBQVk7RUFDWixvQkFBb0I7RUFDcEIsZUFBZTtFQUNmLGtCQUFrQjtBQUNwQjs7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsV0FBVztFQUNYLFlBQVk7QUFDZDs7O0FBRUE7RUFDRSxVQUFVO0VBQ1YsWUFBWTtFQUNaLG9CQUFvQjtFQUNwQixlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLG1CQUFtQjtBQUNyQjs7O0FBSUE7OztBQUdBO0VBQ0UsV0FBVztFQUNYLFlBQVk7OztBQUdkOztBQUVBO0VBQ0UsV0FBVztFQUNYLFlBQVk7O0FBRWQ7O0FBRUE7RUFDRSxxQkFBcUI7RUFDckIsWUFBWTtFQUNaLG1CQUFtQjs7RUFFbkIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsVUFBVTtFQUNWLFlBQVk7RUFDWixtQkFBbUI7RUFDbkIsbUJBQW1COztBQUVyQjs7QUFFQTtFQUNFLHFCQUFxQjtFQUNyQixZQUFZO0VBQ1osbUJBQW1CO0VBQ25CLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLHNCQUFzQjtFQUN0QixZQUFZO0VBQ1osbUJBQW1CO0VBQ25CLG1CQUFtQjtFQUNuQixrQkFBa0I7O0FBRXBCOzs7QUFHQTtFQUNFLFVBQVU7RUFDVixZQUFZO0VBQ1osbUJBQW1CO0VBQ25CLG1CQUFtQjtFQUNuQixrQkFBa0I7O0FBRXBCOzs7O0FBSUE7OztBQUdBOztFQUVFO01BQ0ksV0FBVztNQUNYLFlBQVk7TUFDWixnQkFBZ0I7O0VBRXBCOztFQUVBO01BQ0ksV0FBVztNQUNYLFlBQVk7TUFDWixnQkFBZ0I7RUFDcEI7O0VBRUE7TUFDSSxVQUFVO01BQ1YsWUFBWTtNQUNaLG9CQUFvQjs7RUFFeEI7O0VBRUE7O01BRUksVUFBVTtNQUNWLFlBQVk7TUFDWixvQkFBb0I7O0VBRXhCOztFQUVBO01BQ0ksVUFBVTtNQUNWLFlBQVk7TUFDWixvQkFBb0I7TUFDcEIsa0JBQWtCOztFQUV0Qjs7O0VBR0E7TUFDSSxVQUFVO01BQ1YsWUFBWTtNQUNaLG9CQUFvQjtNQUNwQixpQkFBaUI7TUFDakIsbUJBQW1CO0VBQ3ZCOzs7QUFHRiIsImZpbGUiOiJzcmMvYXBwL2Fib3V0L2Fib3V0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuXHJcblxyXG5cclxuLmxpZ2h0LTIge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IGF1dG87XHJcbiAgdG9wOiAwO1xyXG4gIG92ZXJmbG93LXg6IGNsaXA7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xyXG59XHJcblxyXG5cclxuLmxpZ2h0LTI6OmFmdGVye1xyXG4gIGNvbnRlbnQ6ICcnO1xyXG4gIHdpZHRoOiAzNTBweCAhaW1wb3J0YW50O1xyXG4gIGhlaWdodDogNTAwcHg7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDliZmY7XHJcbiAgZmlsdGVyOiBibHVyKDE1MHB4KTtcclxuICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbn1cclxuXHJcblxyXG4ubGlnaHQtMjo6YWZ0ZXIge1xyXG4gIHJpZ2h0OiAtMjkwcHg7XHJcbiAgdG9wOiAtMjA3cHg7XHJcbn1cclxuXHJcblxyXG4uYWJvdXQge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMwODBjMmYgO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogYXV0bztcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgcGFkZGluZy10b3A6IDEwMHB4O1xyXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByb3lhbGJsdWU7XHJcblxyXG59XHJcblxyXG4uYWJvdXQgLmJhbGwtNCB7XHJcbiAgdG9wOiAzMCU7XHJcbiAgcmlnaHQ6IDEwMHB4O1xyXG59XHJcblxyXG4uYmFsbC0xIHtcclxuICByaWdodDogMTAwcHg7XHJcbn1cclxuXHJcbi5iaWctYmFsbC0xIHtcclxuICB0b3A6IDYwJTtcclxuICBsZWZ0OiAxMDBweDtcclxufVxyXG5cclxuLyogLmFib3V0IGgyIHtcclxuXHJcbiAgbWFyZ2luOiAgYXV0byA7XHJcbiAgYm9yZGVyOiAycHggc29saWQgIzAwNmVmZjtcclxuICBwYWRkaW5nOiAxMHB4IDIwcHg7XHJcbiAgZm9udC1zaXplOiAzMHB4O1xyXG4gIHdpZHRoOiBmaXQtY29udGVudDtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgei1pbmRleDogMTtcclxuICB0cmFuc2l0aW9uOiAxcztcclxuICBjb2xvcjogI2ZmZjtcclxufVxyXG5cclxuXHJcbi5hYm91dCBoMjo6YmVmb3JlLFxyXG4uYWJvdXQgaDI6OmFmdGVyIHtcclxuICBjb250ZW50OiBcIlwiO1xyXG4gIHdpZHRoOiAxMnB4O1xyXG4gIGhlaWdodDogMTJweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA5YmZmO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgdG9wOiA1MCU7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xyXG4gIHRyYW5zaXRpb246IDFzO1xyXG59XHJcbi5hYm91dCBoMjo6YmVmb3JlIHtcclxuICBsZWZ0OiAtMzBweDtcclxufVxyXG5cclxuLmFib3V0IGgyOjphZnRlciB7XHJcbiAgcmlnaHQ6IC0zMHB4O1xyXG59XHJcbi5hYm91dCBoMjpob3Zlcjo6YmVmb3JlIHtcclxuICB6LWluZGV4OiAtMTtcclxuICBhbmltYXRpb246IGxlZnQtbW92ZSAxcyBsaW5lYXIgZm9yd2FyZHM7XHJcbiAgdHJhbnNpdGlvbjogMXM7XHJcbn1cclxuLmFib3V0IGgyOmhvdmVyOjphZnRlciB7XHJcbiAgei1pbmRleDogLTE7XHJcbiAgYW5pbWF0aW9uOiByaWdodC1tb3ZlIDFzIGxpbmVhciBmb3J3YXJkcztcclxuICB0cmFuc2l0aW9uOiAxcztcclxuXHJcbn1cclxuXHJcblxyXG5Aa2V5ZnJhbWVzIGxlZnQtbW92ZSB7XHJcbiAgNTAlIHtcclxuICBsZWZ0OiAwO1xyXG4gIHdpZHRoOiAxMnB4O1xyXG4gIGhlaWdodDogMTJweDtcclxuICB0cmFuc2l0aW9uOiAxcztcclxufVxyXG5cclxuICAxMDAlIHtcclxuICBsZWZ0OiAwO1xyXG4gIGJvcmRlci1yYWRpdXM6IDA7XHJcbiAgd2lkdGg6IDUwJTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgdHJhbnNpdGlvbjogMXM7XHJcblxyXG59XHJcblxyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIHJpZ2h0LW1vdmUge1xyXG4gIDUwJSB7XHJcbiAgcmlnaHQ6IDA7XHJcbiAgd2lkdGg6IDEycHg7XHJcbiAgaGVpZ2h0OiAxMnB4O1xyXG4gIHRyYW5zaXRpb246IDFzO1xyXG5cclxufVxyXG5cclxuICAxMDAlIHtcclxuICByaWdodDogMDtcclxuICBib3JkZXItcmFkaXVzOiAwO1xyXG4gIHdpZHRoOiA1MCU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIHRyYW5zaXRpb246IDFzO1xyXG5cclxufVxyXG5cclxufSAqL1xyXG5cclxuXHJcbi5hYm91dCBwIHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgY29sb3I6ICNmZmZmZmY7XHJcbiAgZm9udC1zaXplOiAxOXB4O1xyXG4gIG1hcmdpbi10b3A6IDM1cHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogMTAwcHg7XHJcbn1cclxuXHJcbi5hYm91dCBoMyB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGNvbG9yOiAjZmZmZmZmO1xyXG4gIGZvbnQtc2l6ZTogMzBweDtcclxuICBtYXJnaW4tdG9wOiAzNXB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDM1cHg7XHJcblxyXG59XHJcblxyXG4uYWJvdXQgLmtub3ctaW1nLTEgIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IGF1dG87XHJcbiAgbWFyZ2luLXRvcDogNTBweDtcclxuXHJcblxyXG59XHJcblxyXG4uYWJvdXQgLmtub3ctaW1nLTIge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogYXV0bztcclxuICBtYXJnaW4tdG9wOiAyNXB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDUwcHg7XHJcblxyXG5cclxufVxyXG5cclxuLmFib3V0IC5rbm93LWltZy0xIC5pbWctZmx1aWQgIHtcclxuICB3aWR0aDogNDUlO1xyXG4gIGhlaWdodDogYXV0bztcclxuICBib3JkZXItcmFkaXVzOiAxMDBweDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi5hYm91dCAua25vdy1pbWctMiAuaW1nLWZsdWlkIHtcclxuICB3aWR0aDogNDUlO1xyXG4gIGhlaWdodDogYXV0bztcclxuICBib3JkZXItcmFkaXVzOiAxMDBweDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcblxyXG59XHJcblxyXG4uYWJvdXQgLmN1cnJlbnQtbGVhcm4ge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogYXV0bztcclxuICBtYXJnaW4tdG9wOiAzMHB4ICFpbXBvcnRhbnQ7XHJcbiAgbWFyZ2luOiBhdXRvO1xyXG5cclxufVxyXG5cclxuLmFib3V0IC5jdXJyZW50LWxlYXJuIC5pbWctZmx1aWQge1xyXG4gIHdpZHRoOiA0NSU7XHJcbiAgaGVpZ2h0OiBhdXRvO1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwMHB4O1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBtYXJnaW4tbGVmdDogMzUwcHg7XHJcbn1cclxuXHJcbi5hYm91dCAud2lsbC1sZWFybi1pbWcge1xyXG4gIG1hcmdpbi10b3A6IDUwcHg7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiBhdXRvO1xyXG59XHJcblxyXG4uYWJvdXQgLndpbGwtbGVhcm4taW1nIC5pbWctZmx1aWQge1xyXG4gIHdpZHRoOiA0NSU7XHJcbiAgaGVpZ2h0OiBhdXRvO1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwMHB4O1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBtYXJnaW4tbGVmdDogNTVweDtcclxuICBtYXJnaW4tYm90dG9tOiA1MHB4O1xyXG59XHJcblxyXG5cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoIDo3NTBweCkge1xyXG5cclxuXHJcbi5hYm91dCAua25vdy1pbWctMSAgIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IGF1dG87XHJcblxyXG5cclxufVxyXG5cclxuLmFib3V0IC5rbm93LWltZy0yIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IGF1dG87XHJcblxyXG59XHJcblxyXG4uYWJvdXQgLmtub3ctaW1nLTEgLmltZy1mbHVpZCAge1xyXG4gIHdpZHRoOiA0MCUgIWltcG9ydGFudDtcclxuICBoZWlnaHQ6IGF1dG87XHJcbiAgYm9yZGVyLXJhZGl1czogNzBweDtcclxuXHJcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcclxufVxyXG5cclxuLmFib3V0IC5rbm93LWltZy0yIC5pbWctZmx1aWQge1xyXG4gIHdpZHRoOiA0MCU7XHJcbiAgaGVpZ2h0OiBhdXRvO1xyXG4gIGJvcmRlci1yYWRpdXM6IDcwcHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcclxuXHJcbn1cclxuXHJcbi5hYm91dCAuY3VycmVudC1sZWFybiAuaW1nLWZsdWlkIHtcclxuICB3aWR0aDogNDAlICFpbXBvcnRhbnQ7XHJcbiAgaGVpZ2h0OiBhdXRvO1xyXG4gIGJvcmRlci1yYWRpdXM6IDcwcHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcclxufVxyXG5cclxuLmFib3V0IC5jdXJyZW50LWxlYXJuIC5pbWctZmx1aWQge1xyXG4gIHdpZHRoOiA0MCUgICFpbXBvcnRhbnQ7XHJcbiAgaGVpZ2h0OiBhdXRvO1xyXG4gIGJvcmRlci1yYWRpdXM6IDcwcHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcclxuICBtYXJnaW4tbGVmdDogMTEwcHg7XHJcblxyXG59XHJcblxyXG5cclxuLmFib3V0IC53aWxsLWxlYXJuLWltZyAuaW1nLWZsdWlkIHtcclxuICB3aWR0aDogNDAlO1xyXG4gIGhlaWdodDogYXV0bztcclxuICBib3JkZXItcmFkaXVzOiA3MHB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgbWFyZ2luLWxlZnQ6IDEwMHB4O1xyXG5cclxufVxyXG5cclxuXHJcblxyXG59XHJcblxyXG5cclxuQG1lZGlhIChtaW4td2lkdGggOiA3NTFweCkgYW5kIChtYXgtd2lkdGggOiA5NTBweCkge1xyXG5cclxuICAuYWJvdXQgLmtub3ctaW1nLTEgIHtcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgIGhlaWdodDogYXV0bztcclxuICAgICAgbWFyZ2luLXRvcDogNTBweDtcclxuXHJcbiAgfVxyXG5cclxuICAuYWJvdXQgLmtub3ctaW1nLTIge1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgICBtYXJnaW4tdG9wOiAzNXB4O1xyXG4gIH1cclxuXHJcbiAgLmFib3V0IC5rbm93LWltZy0xIC5pbWctZmx1aWQge1xyXG4gICAgICB3aWR0aDogNzAlO1xyXG4gICAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDEwMHB4O1xyXG5cclxuICB9XHJcblxyXG4gIC5hYm91dCAua25vdy1pbWctMiAuaW1nLWZsdWlkIHtcclxuXHJcbiAgICAgIHdpZHRoOiA3MCU7XHJcbiAgICAgIGhlaWdodDogYXV0bztcclxuICAgICAgYm9yZGVyLXJhZGl1czogMTAwcHg7XHJcblxyXG4gIH1cclxuXHJcbiAgLmFib3V0IC5jdXJyZW50LWxlYXJuIC5pbWctZmx1aWQge1xyXG4gICAgICB3aWR0aDogNzAlO1xyXG4gICAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDEwMHB4O1xyXG4gICAgICBtYXJnaW4tbGVmdDogMTcwcHg7XHJcblxyXG4gIH1cclxuXHJcblxyXG4gIC5hYm91dCAud2lsbC1sZWFybi1pbWcgLmltZy1mbHVpZCB7XHJcbiAgICAgIHdpZHRoOiA3MCU7XHJcbiAgICAgIGhlaWdodDogYXV0bztcclxuICAgICAgYm9yZGVyLXJhZGl1czogMTAwcHg7XHJcbiAgICAgIG1hcmdpbi1sZWZ0OiA0MHB4O1xyXG4gICAgICBtYXJnaW4tYm90dG9tOiA1MHB4O1xyXG4gIH1cclxuXHJcblxyXG59XHJcbiJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AboutComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-about',
          templateUrl: './about.component.html',
          styleUrls: ['./about.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function _src_app_appRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _workgallery_workgallery_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./workgallery/workgallery.component */
    "./src/app/workgallery/workgallery.component.ts");
    /* harmony import */


    var _home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./home/home.component */
    "./src/app/home/home.component.ts");
    /* harmony import */


    var _about_about_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./about/about.component */
    "./src/app/about/about.component.ts");
    /* harmony import */


    var _notfound_notfound_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./notfound/notfound.component */
    "./src/app/notfound/notfound.component.ts");

    var routes = [{
      path: "home",
      component: _home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"]
    }, {
      path: "",
      component: _home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"]
    }, {
      path: "about",
      component: _about_about_component__WEBPACK_IMPORTED_MODULE_4__["AboutComponent"]
    }, {
      path: "workgallery",
      component: _workgallery_workgallery_component__WEBPACK_IMPORTED_MODULE_2__["WorkgalleryComponent"]
    }, {
      path: "**",
      component: _notfound_notfound_component__WEBPACK_IMPORTED_MODULE_5__["NotfoundComponent"]
    }];

    var AppRoutingModule = /*#__PURE__*/_createClass(function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    });

    AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: AppRoutingModule
    });
    AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function AppRoutingModule_Factory(t) {
        return new (t || AppRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function _src_app_appComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./navbar/navbar.component */
    "./src/app/navbar/navbar.component.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _footer_footer_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./footer/footer.component */
    "./src/app/footer/footer.component.ts");

    var AppComponent = /*#__PURE__*/_createClass(function AppComponent() {
      _classCallCheck(this, AppComponent);

      this.title = 'portfolio-app';
    });

    AppComponent.ɵfac = function AppComponent_Factory(t) {
      return new (t || AppComponent)();
    };

    AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AppComponent,
      selectors: [["app-root"]],
      decls: 3,
      vars: 0,
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-navbar");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "router-outlet");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-footer");
        }
      },
      directives: [_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_1__["NavbarComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_3__["FooterComponent"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-root',
          templateUrl: './app.component.html',
          styleUrls: ['./app.component.css']
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function _src_app_appModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./navbar/navbar.component */
    "./src/app/navbar/navbar.component.ts");
    /* harmony import */


    var _home_home_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./home/home.component */
    "./src/app/home/home.component.ts");
    /* harmony import */


    var _about_about_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./about/about.component */
    "./src/app/about/about.component.ts");
    /* harmony import */


    var _workgallery_workgallery_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./workgallery/workgallery.component */
    "./src/app/workgallery/workgallery.component.ts");
    /* harmony import */


    var _notfound_notfound_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./notfound/notfound.component */
    "./src/app/notfound/notfound.component.ts");
    /* harmony import */


    var _footer_footer_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./footer/footer.component */
    "./src/app/footer/footer.component.ts");

    var AppModule = /*#__PURE__*/_createClass(function AppModule() {
      _classCallCheck(this, AppModule);
    });

    AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: AppModule,
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
    });
    AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function AppModule_Factory(t) {
        return new (t || AppModule)();
      },
      providers: [],
      imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, {
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_4__["NavbarComponent"], _home_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"], _about_about_component__WEBPACK_IMPORTED_MODULE_6__["AboutComponent"], _workgallery_workgallery_component__WEBPACK_IMPORTED_MODULE_7__["WorkgalleryComponent"], _notfound_notfound_component__WEBPACK_IMPORTED_MODULE_8__["NotfoundComponent"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_9__["FooterComponent"]],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_4__["NavbarComponent"], _home_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"], _about_about_component__WEBPACK_IMPORTED_MODULE_6__["AboutComponent"], _workgallery_workgallery_component__WEBPACK_IMPORTED_MODULE_7__["WorkgalleryComponent"], _notfound_notfound_component__WEBPACK_IMPORTED_MODULE_8__["NotfoundComponent"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_9__["FooterComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"]],
          providers: [],
          bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/footer/footer.component.ts":
  /*!********************************************!*\
    !*** ./src/app/footer/footer.component.ts ***!
    \********************************************/

  /*! exports provided: FooterComponent */

  /***/
  function _src_app_footer_footerComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FooterComponent", function () {
      return FooterComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var FooterComponent = /*#__PURE__*/function () {
      function FooterComponent() {
        _classCallCheck(this, FooterComponent);
      }

      return _createClass(FooterComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);
    }();

    FooterComponent.ɵfac = function FooterComponent_Factory(t) {
      return new (t || FooterComponent)();
    };

    FooterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: FooterComponent,
      selectors: [["app-footer"]],
      decls: 32,
      vars: 0,
      consts: [["id", "contact", 1, "contact-me"], [1, "container"], [1, "col-12", "text-center"], ["src", "assets\\img\\logo-3.jpg", "alt", "", 1, "img-fluid"], [1, "ball-1"], [1, "big-ball-2"], [1, "ball-4"], [1, "col-12"], [1, "social-icon-info"], [1, "row"], ["href", "https://www.facebook.com/profile.php?id=100007884046851&mibextid=ZbWKwL"], [1, "fa-brands", "fa-facebook"], ["href", "https://www.instagram.com/omar.wa7eed/"], [1, "fa-brands", "fa-square-instagram"], ["href", "https://www.linkedin.com/in/omar-waheed-abdelbary-939a9b248?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"], [1, "fa-brands", "fa-linkedin"], ["href", "https://github.com/Omar-abdelbary"], [1, "fa-brands", "fa-square-github"], ["href", "mailto:omararabdelbary124@gmail.com"], [1, "fa-regular", "fa-envelope"], ["href", "https://wa.me/+2001554535132"], [1, "fa-brands", "fa-square-whatsapp"]],
      template: function FooterComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "footer", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "ul");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "i", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "a", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "i", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "a", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "i", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "a", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "i", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "a", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "i", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "a", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "i", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, " Omar Waheed AbdElbary Portfolio. 2025");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: [".contact-me[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n  height: 68vh;\r\n  position: relative;\r\n  background-color: rgb(8,12,47) ;\r\n  padding-top: 90px;\r\n  color: white !important;\r\n}\r\n\r\n\r\n\r\n.contact-me[_ngcontent-%COMP%]   .ball-1[_ngcontent-%COMP%] {\r\n  right: 300px;\r\n}\r\n\r\n\r\n\r\n.contact-me[_ngcontent-%COMP%]   .big-ball-2[_ngcontent-%COMP%] {\r\n  right: 200px;\r\n  top: 180px;\r\n}\r\n\r\n\r\n\r\n.contact-me[_ngcontent-%COMP%]   .ball-4[_ngcontent-%COMP%] {\r\n  top: 200px;\r\n  right: 100px;\r\n}\r\n\r\n\r\n\r\n.contact-me[_ngcontent-%COMP%]   .img-fluid[_ngcontent-%COMP%] {\r\n  width: 30%;\r\n  height: auto;\r\n  cursor: pointer;\r\n\r\n}\r\n\r\n\r\n\r\n.contact-me[_ngcontent-%COMP%]   .social-icon-info[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n  height: auto;\r\n  margin-top: 50px !important;\r\n\r\n\r\n}\r\n\r\n\r\n\r\n.contact-me[_ngcontent-%COMP%]   .social-icon-info[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  list-style-type: none;\r\n  width: 40%;\r\n  height: auto;\r\n\r\n  margin: auto;\r\n}\r\n\r\n\r\n\r\n.contact-me[_ngcontent-%COMP%]   .social-icon-info[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\r\n  text-decoration: none;\r\n}\r\n\r\n\r\n\r\n.contact-me[_ngcontent-%COMP%]   .social-icon-info[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n  padding: 10px ;\r\n  text-align: center;\r\n  font-size: 30px;\r\n  color: #006eff !important;\r\n  margin-left: 30px;\r\n\r\n}\r\n\r\n\r\n\r\n.contact-me[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\r\n\r\n  margin-top: 20px;\r\n  font-size: 20px;\r\n  \r\n  color: white !important ;\r\n  padding-bottom: 50px;\r\n}\r\n\r\n\r\n\r\n@media (max-width : 767px) {\r\n\r\n  .contact-me[_ngcontent-%COMP%] {\r\n    height: 53vh;\r\n  }\r\n\r\n  .contact-me[_ngcontent-%COMP%]   .img-fluid[_ngcontent-%COMP%] {\r\n      width: 80%;\r\n  }\r\n  .contact-me[_ngcontent-%COMP%]   .social-icon-info[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\r\n      width: 100%;\r\n      height: auto;\r\n  }\r\n  .contact-me[_ngcontent-%COMP%]   .social-icon-info[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n      margin-left: 10px;\r\n  }\r\n}\r\n\r\n\r\n\r\n@media (min-width : 768px) and (max-width : 1023px) {\r\n\r\n\r\n  .contact-me[_ngcontent-%COMP%] {\r\n    height: 45vh;\r\n  }\r\n\r\n  .contact-me[_ngcontent-%COMP%]   .img-fluid[_ngcontent-%COMP%] {\r\n      width: 80%;\r\n  }\r\n  .contact-me[_ngcontent-%COMP%]   .social-icon-info[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\r\n      width: 100%;\r\n      height: auto;\r\n  }\r\n  .contact-me[_ngcontent-%COMP%]   .social-icon-info[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n      margin-left: 60px;\r\n  }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUdBO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsK0JBQStCO0VBQy9CLGlCQUFpQjtFQUNqQix1QkFBdUI7QUFDekI7Ozs7QUFJQTtFQUNFLFlBQVk7QUFDZDs7OztBQUVBO0VBQ0UsWUFBWTtFQUNaLFVBQVU7QUFDWjs7OztBQUVBO0VBQ0UsVUFBVTtFQUNWLFlBQVk7QUFDZDs7OztBQUVBO0VBQ0UsVUFBVTtFQUNWLFlBQVk7RUFDWixlQUFlOztBQUVqQjs7OztBQUdBO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWiwyQkFBMkI7OztBQUc3Qjs7OztBQUVBO0VBQ0UsYUFBYTtFQUNiLHFCQUFxQjtFQUNyQixVQUFVO0VBQ1YsWUFBWTs7RUFFWixZQUFZO0FBQ2Q7Ozs7QUFFQTtFQUNFLHFCQUFxQjtBQUN2Qjs7OztBQUVBO0VBQ0UsY0FBYztFQUNkLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2YseUJBQXlCO0VBQ3pCLGlCQUFpQjs7QUFFbkI7Ozs7QUFHQTs7RUFFRSxnQkFBZ0I7RUFDaEIsZUFBZTtFQUNmLGdDQUFnQztFQUNoQyx3QkFBd0I7RUFDeEIsb0JBQW9CO0FBQ3RCOzs7O0FBRUE7O0VBRUU7SUFDRSxZQUFZO0VBQ2Q7O0VBRUE7TUFDSSxVQUFVO0VBQ2Q7RUFDQTtNQUNJLFdBQVc7TUFDWCxZQUFZO0VBQ2hCO0VBQ0E7TUFDSSxpQkFBaUI7RUFDckI7QUFDRjs7OztBQUlBOzs7RUFHRTtJQUNFLFlBQVk7RUFDZDs7RUFFQTtNQUNJLFVBQVU7RUFDZDtFQUNBO01BQ0ksV0FBVztNQUNYLFlBQVk7RUFDaEI7RUFDQTtNQUNJLGlCQUFpQjtFQUNyQjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcblxyXG5cclxuLmNvbnRhY3QtbWUge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogNjh2aDtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDgsMTIsNDcpIDtcclxuICBwYWRkaW5nLXRvcDogOTBweDtcclxuICBjb2xvcjogd2hpdGUgIWltcG9ydGFudDtcclxufVxyXG5cclxuXHJcblxyXG4uY29udGFjdC1tZSAuYmFsbC0xIHtcclxuICByaWdodDogMzAwcHg7XHJcbn1cclxuXHJcbi5jb250YWN0LW1lIC5iaWctYmFsbC0yIHtcclxuICByaWdodDogMjAwcHg7XHJcbiAgdG9wOiAxODBweDtcclxufVxyXG5cclxuLmNvbnRhY3QtbWUgLmJhbGwtNCB7XHJcbiAgdG9wOiAyMDBweDtcclxuICByaWdodDogMTAwcHg7XHJcbn1cclxuXHJcbi5jb250YWN0LW1lIC5pbWctZmx1aWQge1xyXG4gIHdpZHRoOiAzMCU7XHJcbiAgaGVpZ2h0OiBhdXRvO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuXHJcbn1cclxuXHJcblxyXG4uY29udGFjdC1tZSAuc29jaWFsLWljb24taW5mbyB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiBhdXRvO1xyXG4gIG1hcmdpbi10b3A6IDUwcHggIWltcG9ydGFudDtcclxuXHJcblxyXG59XHJcblxyXG4uY29udGFjdC1tZSAuc29jaWFsLWljb24taW5mbyB1bCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XHJcbiAgd2lkdGg6IDQwJTtcclxuICBoZWlnaHQ6IGF1dG87XHJcblxyXG4gIG1hcmdpbjogYXV0bztcclxufVxyXG5cclxuLmNvbnRhY3QtbWUgLnNvY2lhbC1pY29uLWluZm8gdWwgbGkge1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxufVxyXG5cclxuLmNvbnRhY3QtbWUgLnNvY2lhbC1pY29uLWluZm8gdWwgbGkgYSB7XHJcbiAgcGFkZGluZzogMTBweCA7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGZvbnQtc2l6ZTogMzBweDtcclxuICBjb2xvcjogIzAwNmVmZiAhaW1wb3J0YW50O1xyXG4gIG1hcmdpbi1sZWZ0OiAzMHB4O1xyXG5cclxufVxyXG5cclxuXHJcbi5jb250YWN0LW1lIGgzIHtcclxuXHJcbiAgbWFyZ2luLXRvcDogMjBweDtcclxuICBmb250LXNpemU6IDIwcHg7XHJcbiAgLyogY29sb3I6ICMwMDZlZmYgIWltcG9ydGFudCA7ICovXHJcbiAgY29sb3I6IHdoaXRlICFpbXBvcnRhbnQgO1xyXG4gIHBhZGRpbmctYm90dG9tOiA1MHB4O1xyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aCA6IDc2N3B4KSB7XHJcblxyXG4gIC5jb250YWN0LW1lIHtcclxuICAgIGhlaWdodDogNTN2aDtcclxuICB9XHJcblxyXG4gIC5jb250YWN0LW1lIC5pbWctZmx1aWQge1xyXG4gICAgICB3aWR0aDogODAlO1xyXG4gIH1cclxuICAuY29udGFjdC1tZSAuc29jaWFsLWljb24taW5mbyB1bCB7XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICBoZWlnaHQ6IGF1dG87XHJcbiAgfVxyXG4gIC5jb250YWN0LW1lIC5zb2NpYWwtaWNvbi1pbmZvIHVsIGxpIGEge1xyXG4gICAgICBtYXJnaW4tbGVmdDogMTBweDtcclxuICB9XHJcbn1cclxuXHJcblxyXG5cclxuQG1lZGlhIChtaW4td2lkdGggOiA3NjhweCkgYW5kIChtYXgtd2lkdGggOiAxMDIzcHgpIHtcclxuXHJcblxyXG4gIC5jb250YWN0LW1lIHtcclxuICAgIGhlaWdodDogNDV2aDtcclxuICB9XHJcblxyXG4gIC5jb250YWN0LW1lIC5pbWctZmx1aWQge1xyXG4gICAgICB3aWR0aDogODAlO1xyXG4gIH1cclxuICAuY29udGFjdC1tZSAuc29jaWFsLWljb24taW5mbyB1bCB7XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICBoZWlnaHQ6IGF1dG87XHJcbiAgfVxyXG4gIC5jb250YWN0LW1lIC5zb2NpYWwtaWNvbi1pbmZvIHVsIGxpIGEge1xyXG4gICAgICBtYXJnaW4tbGVmdDogNjBweDtcclxuICB9XHJcbn1cclxuIl19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FooterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-footer',
          templateUrl: './footer.component.html',
          styleUrls: ['./footer.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/home/home.component.ts":
  /*!****************************************!*\
    !*** ./src/app/home/home.component.ts ***!
    \****************************************/

  /*! exports provided: HomeComponent */

  /***/
  function _src_app_home_homeComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomeComponent", function () {
      return HomeComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var HomeComponent = /*#__PURE__*/function () {
      function HomeComponent() {
        _classCallCheck(this, HomeComponent);
      }

      return _createClass(HomeComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);
    }();

    HomeComponent.ɵfac = function HomeComponent_Factory(t) {
      return new (t || HomeComponent)();
    };

    HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: HomeComponent,
      selectors: [["app-home"]],
      decls: 27,
      vars: 0,
      consts: [["id", "home", 1, "home"], [1, "light-1"], [1, "container"], [1, "ball-1"], [1, "ball-2"], [1, "ball-3"], [1, "row"], [1, "col-lg-6", "col-sm-12", "col-md-12", "order-lg-1", "order-2"], [1, "info-1"], [1, "btn"], ["href", "assets/img/Omar Waheed_cv.pdf", "download", ""], [1, "col-lg-6", "col-sm-12", "col-md-12", "order-lg-2", "order-1"], [1, "info-2"], ["src", "assets\\img\\3.jpg", "alt", "", 1, "img-fluid"]],
      template: function HomeComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Hi,");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "I'm Omar Waheed AbdElbary.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, " I'm a ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Front-End Developer.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Hello Friends, I'm junior Web Developer ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, " and learning increasingly.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "button", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "a", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, " Download CV");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "img", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: [".home[_ngcontent-%COMP%] {\r\n\r\n  width: 100%;\r\n  margin: auto;\r\n  transition: 1s;\r\n  position: relative;\r\n  background-color: rgba(6, 14, 57, 0.7411764706) ;\r\n  height: 18%;\r\n  margin-top: 80px;\r\n  padding-bottom: 100px;\r\n\r\n\r\n\r\n\r\n}\r\n\r\n\r\n\r\n.home[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\r\n  margin-top: 130px;\r\n  margin-bottom: 22px;\r\n  font-size: 22px;\r\n  font-weight: bold;\r\n  color: #fff;\r\n}\r\n\r\n\r\n\r\n.home[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\r\n  font-size: 25px;\r\n  color: #050823;\r\n}\r\n\r\n\r\n\r\n.home[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\r\n  color: #fff;\r\n  font-size: 25px;\r\n\r\n}\r\n\r\n\r\n\r\n.home[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n  margin-top: 60px;\r\n  color: #fff;\r\n  font-size: 16px;\r\n\r\n}\r\n\r\n\r\n\r\n.btn[_ngcontent-%COMP%] {\r\n  text-transform: uppercase;\r\n  text-decoration: none;\r\n  border: 2px solid #006eff;\r\n  padding: 10px 20px;\r\n  font-size: 17px;\r\n  font-weight: bold;\r\n  background: transparent;\r\n  position: relative;\r\n  transition: all 1s;\r\n  overflow: hidden;\r\n  z-index: 1;\r\n}\r\n\r\n\r\n\r\n.btn[_ngcontent-%COMP%]:hover {\r\n  color: white !important;\r\n}\r\n\r\n\r\n\r\n.btn[_ngcontent-%COMP%]::before {\r\n  content: '';\r\n  position: absolute;\r\n  height: 100%;\r\n  width: 0%;\r\n  top: 0;\r\n  left: -40px;\r\n  transform: skewX(45deg);\r\n  background-color: #006eff;\r\n  z-index: -1;\r\n  transition: all 1s;\r\n}\r\n\r\n\r\n\r\n.btn[_ngcontent-%COMP%]:hover::before {\r\n  width: 160%;\r\n}\r\n\r\n\r\n\r\n.btn[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n  color: #fff;\r\n}\r\n\r\n\r\n\r\n.btn[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\r\n  text-decoration: none;\r\n  color: #fff;\r\n}\r\n\r\n\r\n\r\n.home[_ngcontent-%COMP%]   .info-2[_ngcontent-%COMP%] {\r\n  text-align: center;\r\n}\r\n\r\n\r\n\r\n.home[_ngcontent-%COMP%]   .info-2[_ngcontent-%COMP%]   .img-fluid[_ngcontent-%COMP%] {\r\n  width: 60%;\r\n  height: auto;\r\n  border-radius: 20px 100px 10px 100px;\r\n  margin-top: 80px;\r\n}\r\n\r\n\r\n\r\n.home[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]  {\r\n  font-size: 30px;\r\n  color: #006eff;\r\n  cursor: pointer;\r\n  transition: 1ms;\r\n  animation-name: down ;\r\n  animation-duration: 5s;\r\n  animation-iteration-count: infinite;\r\n\r\n}\r\n\r\n\r\n\r\n@keyframes down {\r\n  25% {\r\n      transform: translateY(-10px);\r\n  }\r\n\r\n  50% {\r\n      transform: translateY(0px) ;\r\n  }\r\n\r\n  100% {\r\n      transform: translateY(-10px);\r\n  }\r\n}\r\n\r\n\r\n\r\n@media (max-width : 767px) {\r\n\r\n  .light-1[_ngcontent-%COMP%]::after {\r\n  content: '';\r\n  width: 500px;\r\n  height: 290px;\r\n  position: absolute;\r\n  background-color: #009bff;\r\n  filter: blur(150px);\r\n  border-radius: 50%;\r\n}\r\n\r\n\r\n  .home[_ngcontent-%COMP%] {\r\n      width: 100%;\r\n      height: 20%;\r\n      margin-top: 68px;\r\n  }\r\n\r\n  .info-2[_ngcontent-%COMP%] {\r\n      text-align: center;\r\n      margin-top: 15px;\r\n  }\r\n\r\n  .info-2[_ngcontent-%COMP%]   .img-fluid[_ngcontent-%COMP%] {\r\n      width: 70% !important;\r\n      height: auto;\r\n      margin-top: 100px;\r\n      z-index: 22222222222222;\r\n  }\r\n\r\n\r\n\r\n  .home[_ngcontent-%COMP%]   .info-1[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\r\n      margin-top: 50px;\r\n      margin-bottom: 22px;\r\n      font-size: 21px;\r\n      font-weight: bold;\r\n      color: #fff;\r\n  }\r\n\r\n\r\n  .home[_ngcontent-%COMP%]   .info-1[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n      margin-top: 30px;\r\n      color: #fff;\r\n      font-size: 17px;\r\n\r\n  }\r\n\r\n  .home[_ngcontent-%COMP%]   .info-1[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\r\n      margin-left: 105px;\r\n  }\r\n\r\n}\r\n\r\n\r\n\r\n@media (min-width : 768px) and (max-width : 1023px) {\r\n\r\n  .light-1[_ngcontent-%COMP%]::after {\r\n      content: '';\r\n      width: 500px;\r\n      height: 290px;\r\n      position: absolute;\r\n      background-color: #009bff;\r\n      filter: blur(150px);\r\n      border-radius: 50%;\r\n  }\r\n\r\n  .home[_ngcontent-%COMP%] {\r\n      width: 100%;\r\n      height: 30%;\r\n      overflow: hidden;\r\n  }\r\n\r\n  .home[_ngcontent-%COMP%]   .info-2[_ngcontent-%COMP%] {\r\n      text-align: center;\r\n      margin-top: 15px;\r\n  }\r\n\r\n  .home[_ngcontent-%COMP%]   .info-2[_ngcontent-%COMP%]   .img-fluid[_ngcontent-%COMP%] {\r\n      width: 50% ;\r\n      height: auto;\r\n      margin-top: 40px;\r\n  }\r\n\r\n  .home[_ngcontent-%COMP%]   .info-1[_ngcontent-%COMP%] {\r\n      text-align: center;\r\n  }\r\n  .home[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\r\n      margin-top: 50px;\r\n      margin-bottom: 22px;\r\n      font-size: 22px;\r\n      font-weight: bold;\r\n      color: #fff;\r\n  }\r\n\r\n  .home[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\r\n      color: #006eff;\r\n  }\r\n\r\n  .home[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n      margin-top: 30px;\r\n      color: #fff;\r\n      font-size: 16px;\r\n\r\n  }\r\n\r\n\r\n\r\n\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUlBOztFQUVFLFdBQVc7RUFDWCxZQUFZO0VBQ1osY0FBYztFQUNkLGtCQUFrQjtFQUNsQixnREFBZ0Q7RUFDaEQsV0FBVztFQUNYLGdCQUFnQjtFQUNoQixxQkFBcUI7Ozs7O0FBS3ZCOzs7O0FBSUE7RUFDRSxpQkFBaUI7RUFDakIsbUJBQW1CO0VBQ25CLGVBQWU7RUFDZixpQkFBaUI7RUFDakIsV0FBVztBQUNiOzs7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsY0FBYztBQUNoQjs7OztBQUVBO0VBQ0UsV0FBVztFQUNYLGVBQWU7O0FBRWpCOzs7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsV0FBVztFQUNYLGVBQWU7O0FBRWpCOzs7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIscUJBQXFCO0VBQ3JCLHlCQUF5QjtFQUN6QixrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLGlCQUFpQjtFQUNqQix1QkFBdUI7RUFDdkIsa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsVUFBVTtBQUNaOzs7O0FBRUE7RUFDRSx1QkFBdUI7QUFDekI7Ozs7QUFFQTtFQUNFLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLFNBQVM7RUFDVCxNQUFNO0VBQ04sV0FBVztFQUNYLHVCQUF1QjtFQUN2Qix5QkFBeUI7RUFDekIsV0FBVztFQUNYLGtCQUFrQjtBQUNwQjs7OztBQUVBO0VBQ0UsV0FBVztBQUNiOzs7O0FBRUE7RUFDRSxXQUFXO0FBQ2I7Ozs7QUFFQTtFQUNFLHFCQUFxQjtFQUNyQixXQUFXO0FBQ2I7Ozs7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQjs7OztBQUNBO0VBQ0UsVUFBVTtFQUNWLFlBQVk7RUFDWixvQ0FBb0M7RUFDcEMsZ0JBQWdCO0FBQ2xCOzs7O0FBR0E7RUFDRSxlQUFlO0VBQ2YsY0FBYztFQUNkLGVBQWU7RUFDZixlQUFlO0VBQ2YscUJBQXFCO0VBQ3JCLHNCQUFzQjtFQUN0QixtQ0FBbUM7O0FBRXJDOzs7O0FBR0E7RUFDRTtNQUNJLDRCQUE0QjtFQUNoQzs7RUFFQTtNQUNJLDJCQUEyQjtFQUMvQjs7RUFFQTtNQUNJLDRCQUE0QjtFQUNoQztBQUNGOzs7O0FBSUE7O0VBRUU7RUFDQSxXQUFXO0VBQ1gsWUFBWTtFQUNaLGFBQWE7RUFDYixrQkFBa0I7RUFDbEIseUJBQXlCO0VBQ3pCLG1CQUFtQjtFQUNuQixrQkFBa0I7QUFDcEI7OztFQUdFO01BQ0ksV0FBVztNQUNYLFdBQVc7TUFDWCxnQkFBZ0I7RUFDcEI7O0VBRUE7TUFDSSxrQkFBa0I7TUFDbEIsZ0JBQWdCO0VBQ3BCOztFQUVBO01BQ0kscUJBQXFCO01BQ3JCLFlBQVk7TUFDWixpQkFBaUI7TUFDakIsdUJBQXVCO0VBQzNCOzs7O0VBSUE7TUFDSSxnQkFBZ0I7TUFDaEIsbUJBQW1CO01BQ25CLGVBQWU7TUFDZixpQkFBaUI7TUFDakIsV0FBVztFQUNmOzs7RUFHQTtNQUNJLGdCQUFnQjtNQUNoQixXQUFXO01BQ1gsZUFBZTs7RUFFbkI7O0VBRUE7TUFDSSxrQkFBa0I7RUFDdEI7O0FBRUY7Ozs7QUFLQTs7RUFFRTtNQUNJLFdBQVc7TUFDWCxZQUFZO01BQ1osYUFBYTtNQUNiLGtCQUFrQjtNQUNsQix5QkFBeUI7TUFDekIsbUJBQW1CO01BQ25CLGtCQUFrQjtFQUN0Qjs7RUFFQTtNQUNJLFdBQVc7TUFDWCxXQUFXO01BQ1gsZ0JBQWdCO0VBQ3BCOztFQUVBO01BQ0ksa0JBQWtCO01BQ2xCLGdCQUFnQjtFQUNwQjs7RUFFQTtNQUNJLFdBQVc7TUFDWCxZQUFZO01BQ1osZ0JBQWdCO0VBQ3BCOztFQUVBO01BQ0ksa0JBQWtCO0VBQ3RCO0VBQ0E7TUFDSSxnQkFBZ0I7TUFDaEIsbUJBQW1CO01BQ25CLGVBQWU7TUFDZixpQkFBaUI7TUFDakIsV0FBVztFQUNmOztFQUVBO01BQ0ksY0FBYztFQUNsQjs7RUFFQTtNQUNJLGdCQUFnQjtNQUNoQixXQUFXO01BQ1gsZUFBZTs7RUFFbkI7Ozs7O0FBS0YiLCJmaWxlIjoic3JjL2FwcC9ob21lL2hvbWUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5cclxuXHJcblxyXG4uaG9tZSB7XHJcblxyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIG1hcmdpbjogYXV0bztcclxuICB0cmFuc2l0aW9uOiAxcztcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSg2LCAxNCwgNTcsIDAuNzQxMTc2NDcwNikgO1xyXG4gIGhlaWdodDogMTglO1xyXG4gIG1hcmdpbi10b3A6IDgwcHg7XHJcbiAgcGFkZGluZy1ib3R0b206IDEwMHB4O1xyXG5cclxuXHJcblxyXG5cclxufVxyXG5cclxuXHJcblxyXG4uaG9tZSBoMSB7XHJcbiAgbWFyZ2luLXRvcDogMTMwcHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogMjJweDtcclxuICBmb250LXNpemU6IDIycHg7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgY29sb3I6ICNmZmY7XHJcbn1cclxuXHJcbi5ob21lIGgyIHtcclxuICBmb250LXNpemU6IDI1cHg7XHJcbiAgY29sb3I6ICMwNTA4MjM7XHJcbn1cclxuXHJcbi5ob21lIGgyIHNwYW4ge1xyXG4gIGNvbG9yOiAjZmZmO1xyXG4gIGZvbnQtc2l6ZTogMjVweDtcclxuXHJcbn1cclxuXHJcbi5ob21lIHAge1xyXG4gIG1hcmdpbi10b3A6IDYwcHg7XHJcbiAgY29sb3I6ICNmZmY7XHJcbiAgZm9udC1zaXplOiAxNnB4O1xyXG5cclxufVxyXG5cclxuLmJ0biB7XHJcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgYm9yZGVyOiAycHggc29saWQgIzAwNmVmZjtcclxuICBwYWRkaW5nOiAxMHB4IDIwcHg7XHJcbiAgZm9udC1zaXplOiAxN3B4O1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB0cmFuc2l0aW9uOiBhbGwgMXM7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICB6LWluZGV4OiAxO1xyXG59XHJcblxyXG4uYnRuOmhvdmVyIHtcclxuICBjb2xvcjogd2hpdGUgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmJ0bjo6YmVmb3JlIHtcclxuICBjb250ZW50OiAnJztcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIHdpZHRoOiAwJTtcclxuICB0b3A6IDA7XHJcbiAgbGVmdDogLTQwcHg7XHJcbiAgdHJhbnNmb3JtOiBza2V3WCg0NWRlZyk7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwNmVmZjtcclxuICB6LWluZGV4OiAtMTtcclxuICB0cmFuc2l0aW9uOiBhbGwgMXM7XHJcbn1cclxuXHJcbi5idG46aG92ZXI6OmJlZm9yZSB7XHJcbiAgd2lkdGg6IDE2MCU7XHJcbn1cclxuXHJcbi5idG4gYSB7XHJcbiAgY29sb3I6ICNmZmY7XHJcbn1cclxuXHJcbi5idG4gYTpob3ZlciB7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gIGNvbG9yOiAjZmZmO1xyXG59XHJcblxyXG4uaG9tZSAuaW5mby0yIHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuLmhvbWUgLmluZm8tMiAuaW1nLWZsdWlkIHtcclxuICB3aWR0aDogNjAlO1xyXG4gIGhlaWdodDogYXV0bztcclxuICBib3JkZXItcmFkaXVzOiAyMHB4IDEwMHB4IDEwcHggMTAwcHg7XHJcbiAgbWFyZ2luLXRvcDogODBweDtcclxufVxyXG5cclxuXHJcbi5ob21lIGEgaSAge1xyXG4gIGZvbnQtc2l6ZTogMzBweDtcclxuICBjb2xvcjogIzAwNmVmZjtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgdHJhbnNpdGlvbjogMW1zO1xyXG4gIGFuaW1hdGlvbi1uYW1lOiBkb3duIDtcclxuICBhbmltYXRpb24tZHVyYXRpb246IDVzO1xyXG4gIGFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IGluZmluaXRlO1xyXG5cclxufVxyXG5cclxuXHJcbkBrZXlmcmFtZXMgZG93biB7XHJcbiAgMjUlIHtcclxuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xMHB4KTtcclxuICB9XHJcblxyXG4gIDUwJSB7XHJcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwcHgpIDtcclxuICB9XHJcblxyXG4gIDEwMCUge1xyXG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTEwcHgpO1xyXG4gIH1cclxufVxyXG5cclxuXHJcblxyXG5AbWVkaWEgKG1heC13aWR0aCA6IDc2N3B4KSB7XHJcblxyXG4gIC5saWdodC0xOjphZnRlciB7XHJcbiAgY29udGVudDogJyc7XHJcbiAgd2lkdGg6IDUwMHB4O1xyXG4gIGhlaWdodDogMjkwcHg7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDliZmY7XHJcbiAgZmlsdGVyOiBibHVyKDE1MHB4KTtcclxuICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbn1cclxuXHJcblxyXG4gIC5ob21lIHtcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgIGhlaWdodDogMjAlO1xyXG4gICAgICBtYXJnaW4tdG9wOiA2OHB4O1xyXG4gIH1cclxuXHJcbiAgLmluZm8tMiB7XHJcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgbWFyZ2luLXRvcDogMTVweDtcclxuICB9XHJcblxyXG4gIC5pbmZvLTIgLmltZy1mbHVpZCB7XHJcbiAgICAgIHdpZHRoOiA3MCUgIWltcG9ydGFudDtcclxuICAgICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgICBtYXJnaW4tdG9wOiAxMDBweDtcclxuICAgICAgei1pbmRleDogMjIyMjIyMjIyMjIyMjI7XHJcbiAgfVxyXG5cclxuXHJcblxyXG4gIC5ob21lIC5pbmZvLTEgaDEge1xyXG4gICAgICBtYXJnaW4tdG9wOiA1MHB4O1xyXG4gICAgICBtYXJnaW4tYm90dG9tOiAyMnB4O1xyXG4gICAgICBmb250LXNpemU6IDIxcHg7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICBjb2xvcjogI2ZmZjtcclxuICB9XHJcblxyXG5cclxuICAuaG9tZSAuaW5mby0xIHAge1xyXG4gICAgICBtYXJnaW4tdG9wOiAzMHB4O1xyXG4gICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgZm9udC1zaXplOiAxN3B4O1xyXG5cclxuICB9XHJcblxyXG4gIC5ob21lIC5pbmZvLTEgLmJ0biB7XHJcbiAgICAgIG1hcmdpbi1sZWZ0OiAxMDVweDtcclxuICB9XHJcblxyXG59XHJcblxyXG5cclxuXHJcblxyXG5AbWVkaWEgKG1pbi13aWR0aCA6IDc2OHB4KSBhbmQgKG1heC13aWR0aCA6IDEwMjNweCkge1xyXG5cclxuICAubGlnaHQtMTo6YWZ0ZXIge1xyXG4gICAgICBjb250ZW50OiAnJztcclxuICAgICAgd2lkdGg6IDUwMHB4O1xyXG4gICAgICBoZWlnaHQ6IDI5MHB4O1xyXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDliZmY7XHJcbiAgICAgIGZpbHRlcjogYmx1cigxNTBweCk7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICB9XHJcblxyXG4gIC5ob21lIHtcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgIGhlaWdodDogMzAlO1xyXG4gICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIH1cclxuXHJcbiAgLmhvbWUgLmluZm8tMiB7XHJcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgbWFyZ2luLXRvcDogMTVweDtcclxuICB9XHJcblxyXG4gIC5ob21lIC5pbmZvLTIgLmltZy1mbHVpZCB7XHJcbiAgICAgIHdpZHRoOiA1MCUgO1xyXG4gICAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICAgIG1hcmdpbi10b3A6IDQwcHg7XHJcbiAgfVxyXG5cclxuICAuaG9tZSAuaW5mby0xIHtcclxuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIH1cclxuICAuaG9tZSBoMSB7XHJcbiAgICAgIG1hcmdpbi10b3A6IDUwcHg7XHJcbiAgICAgIG1hcmdpbi1ib3R0b206IDIycHg7XHJcbiAgICAgIGZvbnQtc2l6ZTogMjJweDtcclxuICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgIGNvbG9yOiAjZmZmO1xyXG4gIH1cclxuXHJcbiAgLmhvbWUgaDIge1xyXG4gICAgICBjb2xvcjogIzAwNmVmZjtcclxuICB9XHJcblxyXG4gIC5ob21lIHAge1xyXG4gICAgICBtYXJnaW4tdG9wOiAzMHB4O1xyXG4gICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG5cclxuICB9XHJcblxyXG5cclxuXHJcblxyXG59XHJcblxyXG5cclxuXHJcbiJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-home',
          templateUrl: './home.component.html',
          styleUrls: ['./home.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/navbar/navbar.component.ts":
  /*!********************************************!*\
    !*** ./src/app/navbar/navbar.component.ts ***!
    \********************************************/

  /*! exports provided: NavbarComponent */

  /***/
  function _src_app_navbar_navbarComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NavbarComponent", function () {
      return NavbarComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var NavbarComponent = /*#__PURE__*/function () {
      function NavbarComponent() {
        _classCallCheck(this, NavbarComponent);
      }

      return _createClass(NavbarComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);
    }();

    NavbarComponent.ɵfac = function NavbarComponent_Factory(t) {
      return new (t || NavbarComponent)();
    };

    NavbarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: NavbarComponent,
      selectors: [["app-navbar"]],
      decls: 19,
      vars: 0,
      consts: [[1, "header"], [1, "container-fluied"], [1, "navbar", "navbar-expand-lg"], [1, "logo"], ["type", "button", "data-toggle", "collapse", "data-target", "#navbarSupportedContent", "aria-controls", "navbarSupportedContent", "aria-expanded", "false", "aria-label", "Toggle navigation", 1, "navbar-toggler"], [1, "fa-solid", "fa-bars-staggered"], ["id", "navbarSupportedContent", 1, "collapse", "navbar-collapse"], [1, "navbar-nav", "ml-auto"], [1, "nav-item", "active"], ["routerLink", "/home", 1, "nav-link"], [1, "nav-item"], ["routerLink", "/about", 1, "nav-link"], ["routerLink", "/workgallery", 1, "nav-link"]],
      template: function NavbarComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "header", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "nav", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Omar Waheed");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "i", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "ul", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "li", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Home ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "li", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "a", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "About");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "li", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "a", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "WorkGallery");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"]],
      styles: [".header[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n  height: auto;\r\n  flex-wrap: nowrap;\r\n  background-color:  rgb(9,21,62) ;\r\n  padding-bottom: 12px;\r\n  position: fixed;\r\n  top: 0;\r\n  right: 0;\r\n  left: 0;\r\n  z-index: 999999999999999999999999999999999999999;\r\n}\r\n\r\n.header[_ngcontent-%COMP%]   .navbar[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n  height: auto;\r\n\r\n}\r\n\r\n.header[_ngcontent-%COMP%]   .navbar[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\r\n  font-size: 23px;\r\n  color: rgb(255, 255, 255);\r\n  font-weight: bold;\r\n  margin-top: 25px;\r\n  margin-left: 20px;\r\n  cursor: pointer;\r\n}\r\n\r\n.header[_ngcontent-%COMP%]   .navbar[_ngcontent-%COMP%]   .navbar-toggler[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\r\n  color: rgb(255, 255, 255);\r\n  font-size: 22px;\r\n  font-weight: bold;\r\n  cursor: pointer;\r\n  margin-top: 20px;\r\n}\r\n\r\n.header[_ngcontent-%COMP%]   .navbar[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%] {\r\n  margin-top: 17px;\r\n\r\n}\r\n\r\n.header[_ngcontent-%COMP%]   .navbar[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%] {\r\n  color: rgb(255, 255, 255);\r\n  margin-right: 25px;\r\n  font-size: 18px;\r\n  position: relative;\r\n}\r\n\r\n.header[_ngcontent-%COMP%]   .navbar[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%]:before {\r\n  position: absolute !important;\r\n  content: '' !important;\r\n  left: 0 !important;\r\n  bottom: 0 !important;\r\n  height: 2px !important;\r\n  width: 100% !important;\r\n  background-color: #009bff !important ;\r\n  transform: scaleX(0) !important;\r\n  transform-origin: center !important;\r\n  transition: transform .8s linear !important;\r\n}\r\n\r\n.header[_ngcontent-%COMP%]   .navbar[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%]:hover:before {\r\n  transform: scaleX(1) !important;\r\n    transform-origin: left !important;\r\n}\r\n\r\n\r\n\r\n@media (max-width:767px) {\r\n\r\n\r\n\r\n  .header[_ngcontent-%COMP%]   .navbar[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%] {\r\n    text-align: center !important;\r\n  }\r\n\r\n  .header[_ngcontent-%COMP%]   .navbar[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%] {\r\n    margin-bottom: 20px;\r\n  }\r\n\r\n  .header[_ngcontent-%COMP%]   .navbar[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%] {\r\n    position: relative;\r\n\r\n  }\r\n\r\n  .header[_ngcontent-%COMP%]   .navbar[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%]:before {\r\n    position: absolute !important;\r\n    content: '' !important;\r\n    left: 126px !important;\r\n    bottom: 0 !important;\r\n    height: 2px !important;\r\n    width: 22% !important;\r\n    transform: scaleX(0) !important;\r\n    transform-origin: center !important;\r\n    transition: transform .8s linear !important;\r\n  }\r\n\r\n\r\n\r\n}\r\n\r\n\r\n\r\n@media (min-width:768px) and (max-width:1023px) {\r\n\r\n\r\n  .header[_ngcontent-%COMP%]   .navbar[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%] {\r\n    text-align: center !important;\r\n  }\r\n\r\n  .header[_ngcontent-%COMP%]   .navbar[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%] {\r\n    margin-bottom: 20px;\r\n  }\r\n\r\n  .header[_ngcontent-%COMP%]   .navbar[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%] {\r\n    position: relative;\r\n\r\n  }\r\n\r\n  .header[_ngcontent-%COMP%]   .navbar[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%]:before {\r\n    position: absolute !important;\r\n    content: '' !important;\r\n    left: 330px !important;\r\n    bottom: 0 !important;\r\n    height: 2px !important;\r\n    width: 13% !important;\r\n    transform: scaleX(0) !important;\r\n    transform-origin: center !important;\r\n    transition: transform .8s linear !important;\r\n  }\r\n\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmF2YmFyL25hdmJhci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLGlCQUFpQjtFQUNqQixnQ0FBZ0M7RUFDaEMsb0JBQW9CO0VBQ3BCLGVBQWU7RUFDZixNQUFNO0VBQ04sUUFBUTtFQUNSLE9BQU87RUFDUCxnREFBZ0Q7QUFDbEQ7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsWUFBWTs7QUFFZDs7QUFFQTtFQUNFLGVBQWU7RUFDZix5QkFBeUI7RUFDekIsaUJBQWlCO0VBQ2pCLGdCQUFnQjtFQUNoQixpQkFBaUI7RUFDakIsZUFBZTtBQUNqQjs7QUFHQTtFQUNFLHlCQUF5QjtFQUN6QixlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLGVBQWU7RUFDZixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxnQkFBZ0I7O0FBRWxCOztBQUlBO0VBQ0UseUJBQXlCO0VBQ3pCLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2Ysa0JBQWtCO0FBQ3BCOztBQUdBO0VBQ0UsNkJBQTZCO0VBQzdCLHNCQUFzQjtFQUN0QixrQkFBa0I7RUFDbEIsb0JBQW9CO0VBQ3BCLHNCQUFzQjtFQUN0QixzQkFBc0I7RUFDdEIscUNBQXFDO0VBQ3JDLCtCQUErQjtFQUMvQixtQ0FBbUM7RUFDbkMsMkNBQTJDO0FBQzdDOztBQUdBO0VBQ0UsK0JBQStCO0lBQzdCLGlDQUFpQztBQUNyQzs7QUFHQSxrQ0FBa0M7O0FBQ2xDOzs7O0VBSUU7SUFDRSw2QkFBNkI7RUFDL0I7O0VBRUE7SUFDRSxtQkFBbUI7RUFDckI7O0VBRUE7SUFDRSxrQkFBa0I7O0VBRXBCOztFQUVBO0lBQ0UsNkJBQTZCO0lBQzdCLHNCQUFzQjtJQUN0QixzQkFBc0I7SUFDdEIsb0JBQW9CO0lBQ3BCLHNCQUFzQjtJQUN0QixxQkFBcUI7SUFDckIsK0JBQStCO0lBQy9CLG1DQUFtQztJQUNuQywyQ0FBMkM7RUFDN0M7Ozs7QUFJRjs7QUFHQSw0Q0FBNEM7O0FBRTVDOzs7RUFHRTtJQUNFLDZCQUE2QjtFQUMvQjs7RUFFQTtJQUNFLG1CQUFtQjtFQUNyQjs7RUFFQTtJQUNFLGtCQUFrQjs7RUFFcEI7O0VBRUE7SUFDRSw2QkFBNkI7SUFDN0Isc0JBQXNCO0lBQ3RCLHNCQUFzQjtJQUN0QixvQkFBb0I7SUFDcEIsc0JBQXNCO0lBQ3RCLHFCQUFxQjtJQUNyQiwrQkFBK0I7SUFDL0IsbUNBQW1DO0lBQ25DLDJDQUEyQztFQUM3Qzs7QUFFRiIsImZpbGUiOiJzcmMvYXBwL25hdmJhci9uYXZiYXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5cclxuLmhlYWRlciB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiBhdXRvO1xyXG4gIGZsZXgtd3JhcDogbm93cmFwO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICByZ2IoOSwyMSw2MikgO1xyXG4gIHBhZGRpbmctYm90dG9tOiAxMnB4O1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICB0b3A6IDA7XHJcbiAgcmlnaHQ6IDA7XHJcbiAgbGVmdDogMDtcclxuICB6LWluZGV4OiA5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk7XHJcbn1cclxuXHJcbi5oZWFkZXIgLm5hdmJhciB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiBhdXRvO1xyXG5cclxufVxyXG5cclxuLmhlYWRlciAubmF2YmFyIC5sb2dvIGgxIHtcclxuICBmb250LXNpemU6IDIzcHg7XHJcbiAgY29sb3I6IHJnYigyNTUsIDI1NSwgMjU1KTtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICBtYXJnaW4tdG9wOiAyNXB4O1xyXG4gIG1hcmdpbi1sZWZ0OiAyMHB4O1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuXHJcbi5oZWFkZXIgLm5hdmJhciAubmF2YmFyLXRvZ2dsZXIgaSB7XHJcbiAgY29sb3I6IHJnYigyNTUsIDI1NSwgMjU1KTtcclxuICBmb250LXNpemU6IDIycHg7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIG1hcmdpbi10b3A6IDIwcHg7XHJcbn1cclxuXHJcbi5oZWFkZXIgLm5hdmJhciAubmF2YmFyLW5hdiB7XHJcbiAgbWFyZ2luLXRvcDogMTdweDtcclxuXHJcbn1cclxuXHJcblxyXG5cclxuLmhlYWRlciAubmF2YmFyIC5uYXZiYXItbmF2IC5uYXYtaXRlbSAubmF2LWxpbmsge1xyXG4gIGNvbG9yOiByZ2IoMjU1LCAyNTUsIDI1NSk7XHJcbiAgbWFyZ2luLXJpZ2h0OiAyNXB4O1xyXG4gIGZvbnQtc2l6ZTogMThweDtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuXHJcblxyXG4uaGVhZGVyIC5uYXZiYXIgLm5hdmJhci1uYXYgLm5hdi1pdGVtIC5uYXYtbGluazpiZWZvcmUge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZSAhaW1wb3J0YW50O1xyXG4gIGNvbnRlbnQ6ICcnICFpbXBvcnRhbnQ7XHJcbiAgbGVmdDogMCAhaW1wb3J0YW50O1xyXG4gIGJvdHRvbTogMCAhaW1wb3J0YW50O1xyXG4gIGhlaWdodDogMnB4ICFpbXBvcnRhbnQ7XHJcbiAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA5YmZmICFpbXBvcnRhbnQgO1xyXG4gIHRyYW5zZm9ybTogc2NhbGVYKDApICFpbXBvcnRhbnQ7XHJcbiAgdHJhbnNmb3JtLW9yaWdpbjogY2VudGVyICFpbXBvcnRhbnQ7XHJcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIC44cyBsaW5lYXIgIWltcG9ydGFudDtcclxufVxyXG5cclxuXHJcbi5oZWFkZXIgLm5hdmJhciAubmF2YmFyLW5hdiAubmF2LWl0ZW0gLm5hdi1saW5rOmhvdmVyOmJlZm9yZSB7XHJcbiAgdHJhbnNmb3JtOiBzY2FsZVgoMSkgIWltcG9ydGFudDtcclxuICAgIHRyYW5zZm9ybS1vcmlnaW46IGxlZnQgIWltcG9ydGFudDtcclxufVxyXG5cclxuXHJcbi8qIHJlc3BvbnNpdmUgZm9yICBzY3JlZW4gcGhvbmVzICovXHJcbkBtZWRpYSAobWF4LXdpZHRoOjc2N3B4KSB7XHJcblxyXG5cclxuXHJcbiAgLmhlYWRlciAubmF2YmFyIC5uYXZiYXItbmF2IC5uYXYtaXRlbSB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXIgIWltcG9ydGFudDtcclxuICB9XHJcblxyXG4gIC5oZWFkZXIgLm5hdmJhciAubmF2YmFyLW5hdiAubmF2LWl0ZW0ge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICB9XHJcblxyXG4gIC5oZWFkZXIgLm5hdmJhciAubmF2YmFyLW5hdiAubmF2LWl0ZW0gLm5hdi1saW5rIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHJcbiAgfVxyXG5cclxuICAuaGVhZGVyIC5uYXZiYXIgLm5hdmJhci1uYXYgLm5hdi1pdGVtIC5uYXYtbGluazpiZWZvcmUge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlICFpbXBvcnRhbnQ7XHJcbiAgICBjb250ZW50OiAnJyAhaW1wb3J0YW50O1xyXG4gICAgbGVmdDogMTI2cHggIWltcG9ydGFudDtcclxuICAgIGJvdHRvbTogMCAhaW1wb3J0YW50O1xyXG4gICAgaGVpZ2h0OiAycHggIWltcG9ydGFudDtcclxuICAgIHdpZHRoOiAyMiUgIWltcG9ydGFudDtcclxuICAgIHRyYW5zZm9ybTogc2NhbGVYKDApICFpbXBvcnRhbnQ7XHJcbiAgICB0cmFuc2Zvcm0tb3JpZ2luOiBjZW50ZXIgIWltcG9ydGFudDtcclxuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAuOHMgbGluZWFyICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG5cclxuXHJcblxyXG59XHJcblxyXG5cclxuLyogIHJlc3BvbnNpdmUgZm9yIHNjcmVlbiB0YWJzIGFuZCB0YWJsZXRzICovXHJcblxyXG5AbWVkaWEgKG1pbi13aWR0aDo3NjhweCkgYW5kIChtYXgtd2lkdGg6MTAyM3B4KSB7XHJcblxyXG5cclxuICAuaGVhZGVyIC5uYXZiYXIgLm5hdmJhci1uYXYgLm5hdi1pdGVtIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlciAhaW1wb3J0YW50O1xyXG4gIH1cclxuXHJcbiAgLmhlYWRlciAubmF2YmFyIC5uYXZiYXItbmF2IC5uYXYtaXRlbSB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gIH1cclxuXHJcbiAgLmhlYWRlciAubmF2YmFyIC5uYXZiYXItbmF2IC5uYXYtaXRlbSAubmF2LWxpbmsge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG5cclxuICB9XHJcblxyXG4gIC5oZWFkZXIgLm5hdmJhciAubmF2YmFyLW5hdiAubmF2LWl0ZW0gLm5hdi1saW5rOmJlZm9yZSB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGUgIWltcG9ydGFudDtcclxuICAgIGNvbnRlbnQ6ICcnICFpbXBvcnRhbnQ7XHJcbiAgICBsZWZ0OiAzMzBweCAhaW1wb3J0YW50O1xyXG4gICAgYm90dG9tOiAwICFpbXBvcnRhbnQ7XHJcbiAgICBoZWlnaHQ6IDJweCAhaW1wb3J0YW50O1xyXG4gICAgd2lkdGg6IDEzJSAhaW1wb3J0YW50O1xyXG4gICAgdHJhbnNmb3JtOiBzY2FsZVgoMCkgIWltcG9ydGFudDtcclxuICAgIHRyYW5zZm9ybS1vcmlnaW46IGNlbnRlciAhaW1wb3J0YW50O1xyXG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIC44cyBsaW5lYXIgIWltcG9ydGFudDtcclxuICB9XHJcblxyXG59XHJcbiJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NavbarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-navbar',
          templateUrl: './navbar.component.html',
          styleUrls: ['./navbar.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/notfound/notfound.component.ts":
  /*!************************************************!*\
    !*** ./src/app/notfound/notfound.component.ts ***!
    \************************************************/

  /*! exports provided: NotfoundComponent */

  /***/
  function _src_app_notfound_notfoundComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NotfoundComponent", function () {
      return NotfoundComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var NotfoundComponent = /*#__PURE__*/function () {
      function NotfoundComponent() {
        _classCallCheck(this, NotfoundComponent);
      }

      return _createClass(NotfoundComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);
    }();

    NotfoundComponent.ɵfac = function NotfoundComponent_Factory(t) {
      return new (t || NotfoundComponent)();
    };

    NotfoundComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: NotfoundComponent,
      selectors: [["app-notfound"]],
      decls: 6,
      vars: 0,
      consts: [[1, "not-found"], [1, "container"], [1, "col-12", "text-center"], ["src", "assets\\img\\404.png", "alt", "", 1, "img-fluid"]],
      template: function NotfoundComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " Oops......This Page Not Found");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: [".not-found[_ngcontent-%COMP%] {\r\n  margin-top: 72px;\r\n  width: 100%;\r\n  height: auto;\r\n  text-align: center;\r\n  padding-bottom: 20px;\r\n\r\n}\r\n\r\n\r\n\r\n\r\n.not-found[_ngcontent-%COMP%]   .img-fluid[_ngcontent-%COMP%] {\r\n  width: 65%;\r\n  height: auto;\r\n  margin-top: 50px;\r\n  margin-bottom: 30px;\r\n  border-radius: 25px;\r\n\r\n}\r\n\r\n\r\n\r\n\r\n.not-found[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\r\n  font-size: 25px;\r\n  font-weight: bold;\r\n  color: white;\r\n  text-decoration: underline;\r\n  margin-top: 25px;\r\n\r\n}\r\n\r\n\r\n\r\n\r\n@media (max-width : 767px) {\r\n\r\n\r\n  .not-found[_ngcontent-%COMP%]   .img-fluid[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n    height: auto;\r\n\r\n  }\r\n\r\n}\r\n\r\n\r\n\r\n\r\n@media (min-width : 768px) and (max-width : 1023px) {\r\n\r\n  .not-found[_ngcontent-%COMP%]   .img-fluid[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n    height: auto;\r\n\r\n  }\r\n\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbm90Zm91bmQvbm90Zm91bmQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUVBLHlCQUF5Qjs7Ozs7QUFLekI7RUFDRSxnQkFBZ0I7RUFDaEIsV0FBVztFQUNYLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsb0JBQW9COztBQUV0Qjs7Ozs7QUFFQTtFQUNFLFVBQVU7RUFDVixZQUFZO0VBQ1osZ0JBQWdCO0VBQ2hCLG1CQUFtQjtFQUNuQixtQkFBbUI7O0FBRXJCOzs7OztBQUVBO0VBQ0UsZUFBZTtFQUNmLGlCQUFpQjtFQUNqQixZQUFZO0VBQ1osMEJBQTBCO0VBQzFCLGdCQUFnQjs7QUFFbEI7Ozs7O0FBR0E7OztFQUdFO0lBQ0UsV0FBVztJQUNYLFlBQVk7O0VBRWQ7O0FBRUY7Ozs7O0FBR0E7O0VBRUU7SUFDRSxXQUFXO0lBQ1gsWUFBWTs7RUFFZDs7QUFFRiIsImZpbGUiOiJzcmMvYXBwL25vdGZvdW5kL25vdGZvdW5kLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuXHJcbi8qICBub3QtZm91bmQgY29tcG9uZW50ICovXHJcblxyXG5cclxuXHJcblxyXG4ubm90LWZvdW5kIHtcclxuICBtYXJnaW4tdG9wOiA3MnB4O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogYXV0bztcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgcGFkZGluZy1ib3R0b206IDIwcHg7XHJcblxyXG59XHJcblxyXG4ubm90LWZvdW5kIC5pbWctZmx1aWQge1xyXG4gIHdpZHRoOiA2NSU7XHJcbiAgaGVpZ2h0OiBhdXRvO1xyXG4gIG1hcmdpbi10b3A6IDUwcHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogMzBweDtcclxuICBib3JkZXItcmFkaXVzOiAyNXB4O1xyXG5cclxufVxyXG5cclxuLm5vdC1mb3VuZCBoMyB7XHJcbiAgZm9udC1zaXplOiAyNXB4O1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcclxuICBtYXJnaW4tdG9wOiAyNXB4O1xyXG5cclxufVxyXG5cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoIDogNzY3cHgpIHtcclxuXHJcblxyXG4gIC5ub3QtZm91bmQgLmltZy1mbHVpZCB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogYXV0bztcclxuXHJcbiAgfVxyXG5cclxufVxyXG5cclxuXHJcbkBtZWRpYSAobWluLXdpZHRoIDogNzY4cHgpIGFuZCAobWF4LXdpZHRoIDogMTAyM3B4KSB7XHJcblxyXG4gIC5ub3QtZm91bmQgLmltZy1mbHVpZCB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogYXV0bztcclxuXHJcbiAgfVxyXG5cclxufVxyXG4iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NotfoundComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-notfound',
          templateUrl: './notfound.component.html',
          styleUrls: ['./notfound.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/workgallery/workgallery.component.ts":
  /*!******************************************************!*\
    !*** ./src/app/workgallery/workgallery.component.ts ***!
    \******************************************************/

  /*! exports provided: WorkgalleryComponent */

  /***/
  function _src_app_workgallery_workgalleryComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "WorkgalleryComponent", function () {
      return WorkgalleryComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var WorkgalleryComponent = /*#__PURE__*/function () {
      function WorkgalleryComponent() {
        _classCallCheck(this, WorkgalleryComponent);
      }

      return _createClass(WorkgalleryComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);
    }();

    WorkgalleryComponent.ɵfac = function WorkgalleryComponent_Factory(t) {
      return new (t || WorkgalleryComponent)();
    };

    WorkgalleryComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: WorkgalleryComponent,
      selectors: [["app-workgallery"]],
      decls: 141,
      vars: 0,
      consts: [["id", "work-gallery", 1, "work-gallery"], [1, "light-3"], [1, "container"], [1, "ball-1"], [1, "big-ball-1"], [1, "ball-4"], [1, "col-12"], [1, "gallery-info"], [1, "row"], [1, "col-lg-4", "col-sm-12", "col-md-6"], [1, "img-info"], ["src", "assets\\img\\portfolio.jpg", "alt", "", 1, "img-fluid"], [1, "icon-info"], ["href", "https://omar-abdelbary.github.io/MyPortfolio/"], [1, "fa-solid", "fa-globe"], ["href", "https://github.com/Omar-abdelbary/MyPortfolio"], [1, "fa-solid", "fa-code"], ["src", "assets\\img\\rapid.jpg", "alt", "", 1, "img-fluid"], ["href", "https://omar-abdelbary.github.io/RAPID/"], ["href", "https://github.com/Omar-abdelbary/RAPID"], ["src", "assets\\img\\herobiz.jpg", "alt", "", 1, "img-fluid"], ["href", "https://omar-abdelbary.github.io/HeroBiz/"], ["href", "https://github.com/Omar-abdelbary/HeroBiz"], ["src", "assets\\img\\sigmaStar.jpg", "alt", "", 1, "img-fluid"], ["href", "https://omar-abdelbary.github.io/sigma-star/"], ["href", "https://github.com/Omar-abdelbary/sigma-star"], ["src", "assets\\img\\rolex.jpg", "alt", "", 1, "img-fluid"], ["href", "https://omar-abdelbary.github.io/Rolex/"], ["href", "https://github.com/Omar-abdelbary/Rolex"], ["src", "assets\\img\\shokran.jpg", "alt", "", 1, "img-fluid"], ["href", "https://omar-abdelbary.github.io/Shokran/"], ["href", "https://github.com/Omar-abdelbary/Shokran"], ["src", "assets\\img\\new biz.jpg", "alt", "", 1, "img-fluid"], ["href", "https://omar-abdelbary.github.io/NEWBIZ/"], ["href", "https://github.com/Omar-abdelbary/NEWBIZ"], ["src", "assets\\img\\yummy.jpg", "alt", "", 1, "img-fluid"], ["href", "https://omar-abdelbary.github.io/Yummy/"], ["href", "https://github.com/Omar-abdelbary/Yummy"], ["src", "assets\\img\\tm.jpg", "alt", "", 1, "img-fluid"], ["href", "https://omar-abdelbary.github.io/TypeMaster-Pre-LaunchLandingPage/"], ["href", "https://github.com/Omar-abdelbary/TypeMaster-Pre-LaunchLandingPage"], ["src", "assets\\img\\snipper.jpg", "alt", "", 1, "img-fluid"], ["href", "https://omar-abdelbary.github.io/Snipper/"], ["href", "https://github.com/Omar-abdelbary/Snipper"], ["src", "assets\\img\\snap.jpg", "alt", "", 1, "img-fluid"], ["href", "https://omar-abdelbary.github.io/snap/"], ["href", "https://github.com/Omar-abdelbary/snap"], ["src", "assets\\img\\w..jpg", "alt", "", 1, "img-fluid"], ["href", "https://omar-abdelbary.github.io/W./"], ["href", "https://github.com/Omar-abdelbary/W."], ["src", "assets\\img\\iphone13.jpg", "alt", "", 1, "img-fluid"], ["href", "https://omar-abdelbary.github.io/IPHONE-13/"], ["href", "https://github.com/Omar-abdelbary/IPHONE-13"], ["src", "assets\\img\\fiber.jpg", "alt", "", 1, "img-fluid"], ["href", "https://omar-abdelbary.github.io/Fiber/"], ["href", "https://github.com/Omar-abdelbary/Fiber"], ["src", "assets\\img\\web.po.jpg", "alt", "", 1, "img-fluid"], ["href", "https://omar-abdelbary.github.io/Web-Developer-Portfolio-Challenge/"], ["href", "https://github.com/Omar-abdelbary/Web-Developer-Portfolio-Challenge"]],
      template: function WorkgalleryComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "img", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "a", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "i", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "a", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "i", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "img", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "a", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "i", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "a", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "i", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "img", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "a", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "i", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "a", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "i", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](38, "img", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "a", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](41, "i", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "a", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](43, "i", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](46, "img", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "a", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](49, "i", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "a", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](51, "i", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](54, "img", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "a", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](57, "i", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "a", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](59, "i", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](65, "img", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "a", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](68, "i", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "a", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](70, "i", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](73, "img", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "a", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](76, "i", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "a", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](78, "i", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](81, "img", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "a", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](84, "i", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "a", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](86, "i", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](92, "img", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "a", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](95, "i", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "a", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](97, "i", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](100, "img", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "a", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](103, "i", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](104, "a", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](105, "i", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](106, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](107, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](108, "img", 47);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](109, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](110, "a", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](111, "i", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](112, "a", 49);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](113, "i", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](114, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](115, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](116, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](117, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](118, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](119, "img", 50);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](120, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](121, "a", 51);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](122, "i", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](123, "a", 52);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](124, "i", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](125, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](126, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](127, "img", 53);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](128, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](129, "a", 54);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](130, "i", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](131, "a", 55);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](132, "i", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](133, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](134, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](135, "img", 56);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](136, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](137, "a", 57);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](138, "i", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](139, "a", 58);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](140, "i", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: [".work-gallery[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n  height: auto;\r\n  position: relative;\r\n  background-color: #050823;\r\n  padding-bottom: 60px;\r\n\r\n  padding-top: 90px;\r\n  margin-top: 90px;\r\n\r\n}\r\n\r\n\r\n.work-gallery[_ngcontent-%COMP%]   .light-3[_ngcontent-%COMP%] {\r\n  position: absolute;\r\n  width: 100%;\r\n  height: auto;\r\n  top: 0;\r\n  overflow-x: clip;\r\n}\r\n\r\n\r\n.light-3[_ngcontent-%COMP%]::after {\r\n  content: '';\r\n  width: 350px;\r\n  height: 500px;\r\n  position: absolute;\r\n  background-color: #009bff;\r\n  filter: blur(150px);\r\n  border-radius: 50%;\r\n}\r\n\r\n\r\n.work-gallery[_ngcontent-%COMP%]   .light-3[_ngcontent-%COMP%]::after {\r\n  left: -290px;\r\n  top: -293px;\r\n}\r\n\r\n\r\n.work-gallery[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\r\n  margin: auto;\r\n  border: 2px solid #006eff;\r\n  padding: 10px 20px;\r\n  font-size: 30px;\r\n  width: -moz-fit-content;\r\n  width: fit-content;\r\n  position: relative;\r\n  z-index: 1;\r\n  transition: 1s;\r\n  color: #fff;\r\n}\r\n\r\n\r\n.work-gallery[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]::before, .work-gallery[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]::after {\r\n  content: \"\";\r\n  width: 12px;\r\n  height: 12px;\r\n  background-color: #009bff;\r\n  position: absolute;\r\n  border-radius: 50%;\r\n  top: 50%;\r\n  transform: translateY(-50%);\r\n  transition: 1s;\r\n}\r\n\r\n\r\n.work-gallery[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]::before {\r\n  left: -30px;\r\n}\r\n\r\n\r\n.work-gallery[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]::after {\r\n  right: -30px;\r\n}\r\n\r\n\r\n.work-gallery[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]:hover::before {\r\n  z-index: -1;\r\n  animation: left-move 1s linear forwards;\r\n  transition: 1s;\r\n}\r\n\r\n\r\n.work-gallery[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]:hover::after {\r\n  z-index: -1;\r\n  animation: right-move 1s linear forwards;\r\n  transition: 1s;\r\n\r\n}\r\n\r\n\r\n@keyframes left-move {\r\n  50% {\r\n  left: 0;\r\n  width: 12px;\r\n  height: 12px;\r\n  transition: 1s;\r\n}\r\n\r\n  100% {\r\n  left: 0;\r\n  border-radius: 0;\r\n  width: 50%;\r\n  height: 100%;\r\n  transition: 1s;\r\n\r\n}\r\n\r\n}\r\n\r\n\r\n@keyframes right-move {\r\n  50% {\r\n  right: 0;\r\n  width: 12px;\r\n  height: 12px;\r\n  transition: 1s;\r\n\r\n}\r\n\r\n  100% {\r\n  right: 0;\r\n  border-radius: 0;\r\n  width: 50%;\r\n  height: 100%;\r\n  transition: 1s;\r\n\r\n}\r\n\r\n}\r\n\r\n\r\n.work-gallery[_ngcontent-%COMP%]   .gallery-info[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n  height: auto;\r\n  margin-top: 40px;\r\n}\r\n\r\n\r\n.work-gallery[_ngcontent-%COMP%]   .gallery-info[_ngcontent-%COMP%]   .img-info[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n  height: auto;\r\n  background-color: #006eff;\r\n  padding: 10px;\r\n  cursor: pointer;\r\n  position: relative;\r\n  overflow: hidden;\r\n}\r\n\r\n\r\n.work-gallery[_ngcontent-%COMP%]   .gallery-info[_ngcontent-%COMP%]   .img-info[_ngcontent-%COMP%]:hover   .icon-info[_ngcontent-%COMP%] {\r\n  bottom: 25px;\r\n  transition: 1s;\r\n}\r\n\r\n\r\n.work-gallery[_ngcontent-%COMP%]   .gallery-info[_ngcontent-%COMP%]   .img-info[_ngcontent-%COMP%]   .img-fluid[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n  height: auto;\r\n}\r\n\r\n\r\n.work-gallery[_ngcontent-%COMP%]   .gallery-info[_ngcontent-%COMP%]   .icon-info[_ngcontent-%COMP%] {\r\n\r\n  position: absolute;\r\n  bottom: -200px;\r\n  left: 100px;\r\n  transition: 1s;\r\n\r\n}\r\n\r\n\r\n.work-gallery[_ngcontent-%COMP%]   .gallery-info[_ngcontent-%COMP%]   .icon-info[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n  color: #050823;\r\n  background-color: #8084dc;\r\n  font-size: 25px;\r\n  margin: 0px 10px;\r\n  padding: 10px;\r\n  border-radius: 50px;\r\n\r\n}\r\n\r\n\r\n.work-gallery[_ngcontent-%COMP%]   .gallery-info[_ngcontent-%COMP%]   .icon-info[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\r\n  text-decoration: none;\r\n\r\n}\r\n\r\n\r\n@media (max-width :767px) {\r\n\r\n  .work-gallery[_ngcontent-%COMP%] {\r\n    padding-top: 40px;\r\n  }\r\n  .work-gallery[_ngcontent-%COMP%]   .gallery-info[_ngcontent-%COMP%]   .img-info[_ngcontent-%COMP%] {\r\n      margin-bottom: 20px;\r\n  }\r\n\r\n\r\n\r\n}\r\n\r\n\r\n@media (min-width : 768px) and (max-width : 1023px) {\r\n  .work-gallery[_ngcontent-%COMP%]   .gallery-info[_ngcontent-%COMP%]   .img-info[_ngcontent-%COMP%] {\r\n      margin-bottom: 20px;\r\n  }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvd29ya2dhbGxlcnkvd29ya2dhbGxlcnkuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFHQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLHlCQUF5QjtFQUN6QixvQkFBb0I7O0VBRXBCLGlCQUFpQjtFQUNqQixnQkFBZ0I7O0FBRWxCOzs7QUFHQTtFQUNFLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsWUFBWTtFQUNaLE1BQU07RUFDTixnQkFBZ0I7QUFDbEI7OztBQUVBO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWixhQUFhO0VBQ2Isa0JBQWtCO0VBQ2xCLHlCQUF5QjtFQUN6QixtQkFBbUI7RUFDbkIsa0JBQWtCO0FBQ3BCOzs7QUFHQTtFQUNFLFlBQVk7RUFDWixXQUFXO0FBQ2I7OztBQUlBO0VBQ0UsWUFBWTtFQUNaLHlCQUF5QjtFQUN6QixrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLHVCQUFrQjtFQUFsQixrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLFVBQVU7RUFDVixjQUFjO0VBQ2QsV0FBVztBQUNiOzs7QUFHQTs7RUFFRSxXQUFXO0VBQ1gsV0FBVztFQUNYLFlBQVk7RUFDWix5QkFBeUI7RUFDekIsa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixRQUFRO0VBQ1IsMkJBQTJCO0VBQzNCLGNBQWM7QUFDaEI7OztBQUVBO0VBQ0UsV0FBVztBQUNiOzs7QUFFQTtFQUNFLFlBQVk7QUFDZDs7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsdUNBQXVDO0VBQ3ZDLGNBQWM7QUFDaEI7OztBQUNBO0VBQ0UsV0FBVztFQUNYLHdDQUF3QztFQUN4QyxjQUFjOztBQUVoQjs7O0FBR0E7RUFDRTtFQUNBLE9BQU87RUFDUCxXQUFXO0VBQ1gsWUFBWTtFQUNaLGNBQWM7QUFDaEI7O0VBRUU7RUFDQSxPQUFPO0VBQ1AsZ0JBQWdCO0VBQ2hCLFVBQVU7RUFDVixZQUFZO0VBQ1osY0FBYzs7QUFFaEI7O0FBRUE7OztBQUVBO0VBQ0U7RUFDQSxRQUFRO0VBQ1IsV0FBVztFQUNYLFlBQVk7RUFDWixjQUFjOztBQUVoQjs7RUFFRTtFQUNBLFFBQVE7RUFDUixnQkFBZ0I7RUFDaEIsVUFBVTtFQUNWLFlBQVk7RUFDWixjQUFjOztBQUVoQjs7QUFFQTs7O0FBR0E7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLGdCQUFnQjtBQUNsQjs7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLHlCQUF5QjtFQUN6QixhQUFhO0VBQ2IsZUFBZTtFQUNmLGtCQUFrQjtFQUNsQixnQkFBZ0I7QUFDbEI7OztBQUVBO0VBQ0UsWUFBWTtFQUNaLGNBQWM7QUFDaEI7OztBQUVBO0VBQ0UsV0FBVztFQUNYLFlBQVk7QUFDZDs7O0FBRUE7O0VBRUUsa0JBQWtCO0VBQ2xCLGNBQWM7RUFDZCxXQUFXO0VBQ1gsY0FBYzs7QUFFaEI7OztBQUVBO0VBQ0UsY0FBYztFQUNkLHlCQUF5QjtFQUN6QixlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLGFBQWE7RUFDYixtQkFBbUI7O0FBRXJCOzs7QUFFQTtFQUNFLHFCQUFxQjs7QUFFdkI7OztBQVFBOztFQUVFO0lBQ0UsaUJBQWlCO0VBQ25CO0VBQ0E7TUFDSSxtQkFBbUI7RUFDdkI7Ozs7QUFJRjs7O0FBTUE7RUFDRTtNQUNJLG1CQUFtQjtFQUN2QjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvd29ya2dhbGxlcnkvd29ya2dhbGxlcnkuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5cclxuXHJcbi53b3JrLWdhbGxlcnkge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogYXV0bztcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzA1MDgyMztcclxuICBwYWRkaW5nLWJvdHRvbTogNjBweDtcclxuXHJcbiAgcGFkZGluZy10b3A6IDkwcHg7XHJcbiAgbWFyZ2luLXRvcDogOTBweDtcclxuXHJcbn1cclxuXHJcblxyXG4ud29yay1nYWxsZXJ5IC5saWdodC0zIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiBhdXRvO1xyXG4gIHRvcDogMDtcclxuICBvdmVyZmxvdy14OiBjbGlwO1xyXG59XHJcblxyXG4ubGlnaHQtMzo6YWZ0ZXIge1xyXG4gIGNvbnRlbnQ6ICcnO1xyXG4gIHdpZHRoOiAzNTBweDtcclxuICBoZWlnaHQ6IDUwMHB4O1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA5YmZmO1xyXG4gIGZpbHRlcjogYmx1cigxNTBweCk7XHJcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG59XHJcblxyXG5cclxuLndvcmstZ2FsbGVyeSAubGlnaHQtMzo6YWZ0ZXIge1xyXG4gIGxlZnQ6IC0yOTBweDtcclxuICB0b3A6IC0yOTNweDtcclxufVxyXG5cclxuXHJcblxyXG4ud29yay1nYWxsZXJ5IGgzIHtcclxuICBtYXJnaW46IGF1dG87XHJcbiAgYm9yZGVyOiAycHggc29saWQgIzAwNmVmZjtcclxuICBwYWRkaW5nOiAxMHB4IDIwcHg7XHJcbiAgZm9udC1zaXplOiAzMHB4O1xyXG4gIHdpZHRoOiBmaXQtY29udGVudDtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgei1pbmRleDogMTtcclxuICB0cmFuc2l0aW9uOiAxcztcclxuICBjb2xvcjogI2ZmZjtcclxufVxyXG5cclxuXHJcbi53b3JrLWdhbGxlcnkgaDM6OmJlZm9yZSxcclxuLndvcmstZ2FsbGVyeSBoMzo6YWZ0ZXIge1xyXG4gIGNvbnRlbnQ6IFwiXCI7XHJcbiAgd2lkdGg6IDEycHg7XHJcbiAgaGVpZ2h0OiAxMnB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDliZmY7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICB0b3A6IDUwJTtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XHJcbiAgdHJhbnNpdGlvbjogMXM7XHJcbn1cclxuXHJcbi53b3JrLWdhbGxlcnkgaDM6OmJlZm9yZSB7XHJcbiAgbGVmdDogLTMwcHg7XHJcbn1cclxuXHJcbi53b3JrLWdhbGxlcnkgaDM6OmFmdGVyIHtcclxuICByaWdodDogLTMwcHg7XHJcbn1cclxuXHJcbi53b3JrLWdhbGxlcnkgaDM6aG92ZXI6OmJlZm9yZSB7XHJcbiAgei1pbmRleDogLTE7XHJcbiAgYW5pbWF0aW9uOiBsZWZ0LW1vdmUgMXMgbGluZWFyIGZvcndhcmRzO1xyXG4gIHRyYW5zaXRpb246IDFzO1xyXG59XHJcbi53b3JrLWdhbGxlcnkgaDM6aG92ZXI6OmFmdGVyIHtcclxuICB6LWluZGV4OiAtMTtcclxuICBhbmltYXRpb246IHJpZ2h0LW1vdmUgMXMgbGluZWFyIGZvcndhcmRzO1xyXG4gIHRyYW5zaXRpb246IDFzO1xyXG5cclxufVxyXG5cclxuXHJcbkBrZXlmcmFtZXMgbGVmdC1tb3ZlIHtcclxuICA1MCUge1xyXG4gIGxlZnQ6IDA7XHJcbiAgd2lkdGg6IDEycHg7XHJcbiAgaGVpZ2h0OiAxMnB4O1xyXG4gIHRyYW5zaXRpb246IDFzO1xyXG59XHJcblxyXG4gIDEwMCUge1xyXG4gIGxlZnQ6IDA7XHJcbiAgYm9yZGVyLXJhZGl1czogMDtcclxuICB3aWR0aDogNTAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICB0cmFuc2l0aW9uOiAxcztcclxuXHJcbn1cclxuXHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgcmlnaHQtbW92ZSB7XHJcbiAgNTAlIHtcclxuICByaWdodDogMDtcclxuICB3aWR0aDogMTJweDtcclxuICBoZWlnaHQ6IDEycHg7XHJcbiAgdHJhbnNpdGlvbjogMXM7XHJcblxyXG59XHJcblxyXG4gIDEwMCUge1xyXG4gIHJpZ2h0OiAwO1xyXG4gIGJvcmRlci1yYWRpdXM6IDA7XHJcbiAgd2lkdGg6IDUwJTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgdHJhbnNpdGlvbjogMXM7XHJcblxyXG59XHJcblxyXG59XHJcblxyXG5cclxuLndvcmstZ2FsbGVyeSAuZ2FsbGVyeS1pbmZvIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IGF1dG87XHJcbiAgbWFyZ2luLXRvcDogNDBweDtcclxufVxyXG5cclxuLndvcmstZ2FsbGVyeSAuZ2FsbGVyeS1pbmZvIC5pbWctaW5mbyB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiBhdXRvO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDZlZmY7XHJcbiAgcGFkZGluZzogMTBweDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbn1cclxuXHJcbi53b3JrLWdhbGxlcnkgLmdhbGxlcnktaW5mbyAuaW1nLWluZm86aG92ZXIgLmljb24taW5mbyB7XHJcbiAgYm90dG9tOiAyNXB4O1xyXG4gIHRyYW5zaXRpb246IDFzO1xyXG59XHJcblxyXG4ud29yay1nYWxsZXJ5IC5nYWxsZXJ5LWluZm8gLmltZy1pbmZvIC5pbWctZmx1aWQge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogYXV0bztcclxufVxyXG5cclxuLndvcmstZ2FsbGVyeSAuZ2FsbGVyeS1pbmZvIC5pY29uLWluZm8ge1xyXG5cclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgYm90dG9tOiAtMjAwcHg7XHJcbiAgbGVmdDogMTAwcHg7XHJcbiAgdHJhbnNpdGlvbjogMXM7XHJcblxyXG59XHJcblxyXG4ud29yay1nYWxsZXJ5IC5nYWxsZXJ5LWluZm8gLmljb24taW5mbyBhIHtcclxuICBjb2xvcjogIzA1MDgyMztcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjODA4NGRjO1xyXG4gIGZvbnQtc2l6ZTogMjVweDtcclxuICBtYXJnaW46IDBweCAxMHB4O1xyXG4gIHBhZGRpbmc6IDEwcHg7XHJcbiAgYm9yZGVyLXJhZGl1czogNTBweDtcclxuXHJcbn1cclxuXHJcbi53b3JrLWdhbGxlcnkgLmdhbGxlcnktaW5mbyAuaWNvbi1pbmZvIGE6aG92ZXIge1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuXHJcbn1cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoIDo3NjdweCkge1xyXG5cclxuICAud29yay1nYWxsZXJ5IHtcclxuICAgIHBhZGRpbmctdG9wOiA0MHB4O1xyXG4gIH1cclxuICAud29yay1nYWxsZXJ5IC5nYWxsZXJ5LWluZm8gLmltZy1pbmZvIHtcclxuICAgICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICB9XHJcblxyXG5cclxuXHJcbn1cclxuXHJcblxyXG5cclxuXHJcblxyXG5AbWVkaWEgKG1pbi13aWR0aCA6IDc2OHB4KSBhbmQgKG1heC13aWR0aCA6IDEwMjNweCkge1xyXG4gIC53b3JrLWdhbGxlcnkgLmdhbGxlcnktaW5mbyAuaW1nLWluZm8ge1xyXG4gICAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gIH1cclxufVxyXG4iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](WorkgalleryComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-workgallery',
          templateUrl: './workgallery.component.html',
          styleUrls: ['./workgallery.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function _src_environments_environmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    }); // This file can be replaced during build by using the `fileReplacements` array.
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

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function _src_mainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
    }

    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
      return console.error(err);
    });
    /***/

  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! D:\SIMPLE PORTFOLIO ANGULAR\portfolio-app\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map