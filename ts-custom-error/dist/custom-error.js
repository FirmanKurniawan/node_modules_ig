/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = Object.setPrototypeOf ||
    ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
    function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

function fixProto(target, prototype) {
    var setPrototypeOf = Object.setPrototypeOf;
    setPrototypeOf ? setPrototypeOf(target, prototype) : (target.__proto__ = prototype);
}

function fixStack(target, fn) {
    if (fn === void 0) {
        fn = target.constructor;
    }
    var captureStackTrace = Error.captureStackTrace;
    captureStackTrace && captureStackTrace(target, fn);
}

var CustomError = (function (_super) {
    __extends(CustomError, _super);
    function CustomError(message) {
        var _newTarget = this.constructor;
        var _this = _super.call(this, message) || this;
        _this.name = _newTarget.name;
        fixProto(_this, _newTarget.prototype);
        fixStack(_this);
        return _this;
    }
    
    return CustomError;
})(Error);

function customErrorFactory(fn, parent) {
    if (parent === void 0) {
        parent = Error;
    }
    function CustomError() {
        var args = [];
        for (var _i = 0;_i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        if (!(this instanceof CustomError)) 
            return new (CustomError.bind.apply(CustomError, [void 0].concat(args)))();
        parent.apply(this, args);
        fn.apply(this, args);
        this.name = fn.name || parent.name;
        fixStack(this, CustomError);
    }
    
    return Object.defineProperties(CustomError, {
        prototype: {
            value: Object.create(parent.prototype, {
                constructor: {
                    value: CustomError,
                    writable: true,
                    configurable: true
                }
            })
        }
    });
}

exports.CustomError = CustomError;
exports.customErrorFactory = customErrorFactory;
//# sourceMappingURL=custom-error.js.map
