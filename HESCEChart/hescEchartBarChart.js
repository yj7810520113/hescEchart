/**
 * Created by WebStorm
 * User:maomao,http://www.mmcode.top
 * Date:2017/4/11
 * Time:15:34
 **/
// Inspired by D3.js、Echart、RChart.
(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
        typeof define === 'function' && define.amd ? define(['exports'], factory) :
            (factory((global.hescEchart = global.hescEchart || {})));
}(this, (function (exports) {
    'use strict';
    // var version = "0.0.1";

    var test=function (){
        return version;
    }

    exports.test = test;
    //exports.version=version;
    //  exports.json = json;
    // exports.map = map$1;
    //  exports.dispatch = dispatch;
    // Object.defineProperty(exports, '__esModule', { value: true });

})));