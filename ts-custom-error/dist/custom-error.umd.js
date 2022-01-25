(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
    typeof define === 'function' && define.amd ? define(['exports'], factory) :
    (factory((global.tsCustomError = {})));
}(this, (function (exports) {
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



    //# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInV0aWxzLnRzKG9yaWdpbmFsKSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLFNBQVMsU0FBUyxNQUFRLEVBQUEsV0FBVztJQUN4QyxHQUFBLENBQUksaUJBQWlCLE1BQUEsQ0FBTztJQUM1QixjQUFBLEdBQ00sY0FBQSxDQUFlLFFBQVEsY0FDdEIsTUFBQSxDQUFPLFNBQVAsQ0FBQSxDQUFBLENBQW1CO0FBQzlCOztBQUNBLE9BQU8sU0FBUyxTQUFTLE1BQVEsRUFBQSxJQUFJO0lBQ2pDLElBQUksRUFBQSxDQUFBLEdBQUEsQ0FBTyxJQUFBLENBQUssR0FBRztRQUFFLEVBQUEsQ0FBQSxDQUFBLENBQUssTUFBQSxDQUFPO0lBQXJDO0lBQ0ksR0FBQSxDQUFJLG9CQUFvQixLQUFBLENBQU07SUFDOUIsaUJBQUEsQ0FBQSxFQUFBLENBQXFCLGlCQUFBLENBQWtCLFFBQVE7QUFDbkQ7O0FBVkEiLCJmaWxlIjoidXRpbHMudHMob3JpZ2luYWwpIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGZ1bmN0aW9uIGZpeFByb3RvKHRhcmdldCwgcHJvdG90eXBlKSB7XHJcbiAgICB2YXIgc2V0UHJvdG90eXBlT2YgPSBPYmplY3Quc2V0UHJvdG90eXBlT2Y7XHJcbiAgICBzZXRQcm90b3R5cGVPZlxyXG4gICAgICAgID8gc2V0UHJvdG90eXBlT2YodGFyZ2V0LCBwcm90b3R5cGUpXHJcbiAgICAgICAgOiAodGFyZ2V0Ll9fcHJvdG9fXyA9IHByb3RvdHlwZSk7XHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIGZpeFN0YWNrKHRhcmdldCwgZm4pIHtcclxuICAgIGlmIChmbiA9PT0gdm9pZCAwKSB7IGZuID0gdGFyZ2V0LmNvbnN0cnVjdG9yOyB9XHJcbiAgICB2YXIgY2FwdHVyZVN0YWNrVHJhY2UgPSBFcnJvci5jYXB0dXJlU3RhY2tUcmFjZTtcclxuICAgIGNhcHR1cmVTdGFja1RyYWNlICYmIGNhcHR1cmVTdGFja1RyYWNlKHRhcmdldCwgZm4pO1xyXG59XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXV0aWxzLmpzLm1hcCJdfQ==

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


    //# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImN1c3RvbS1lcnJvci50cyhvcmlnaW5hbCkiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsWUFBWSxhQUFhO0FBQ3pCLFFBQVMsVUFBVSxlQUFnQjtBQUNuQyxHQUFBLENBQUksZUFBZSxVQUFVLFFBQVE7SUFDakMsT0FBQSxDQUFRLFNBQVIsQ0FBa0IsYUFBYTtJQUMvQixTQUFTLFlBQVksU0FBUztRQUMxQixHQUFBLENBQUksYUFBYSxJQUFBLENBQUs7UUFDdEIsR0FBQSxDQUFJLFFBQVEsTUFBQSxDQUFPLElBQVAsQ0FBWSxNQUFNLFFBQWxCLENBQUEsRUFBQSxDQUE4QjtRQUMxQyxLQUFBLENBQU0sSUFBTixDQUFBLENBQUEsQ0FBYSxVQUFBLENBQVc7UUFDeEIsUUFBQSxDQUFTLE9BQU8sVUFBQSxDQUFXO1FBQzNCLFFBQUEsQ0FBUztRQUNULE9BQU87SUFDZjs7SUFDSSxPQUFPO0FBQ1gsRUFYbUIsQ0FXakI7QUFDRixPQUFBLENBQVM7QUFkVCIsImZpbGUiOiJjdXN0b20tZXJyb3IudHMob3JpZ2luYWwpIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgdHNsaWJfMSBmcm9tIFwidHNsaWJcIjtcclxuaW1wb3J0IHsgZml4UHJvdG8sIGZpeFN0YWNrIH0gZnJvbSAnLi91dGlscyc7XHJcbnZhciBDdXN0b21FcnJvciA9IChmdW5jdGlvbiAoX3N1cGVyKSB7XHJcbiAgICB0c2xpYl8xLl9fZXh0ZW5kcyhDdXN0b21FcnJvciwgX3N1cGVyKTtcclxuICAgIGZ1bmN0aW9uIEN1c3RvbUVycm9yKG1lc3NhZ2UpIHtcclxuICAgICAgICB2YXIgX25ld1RhcmdldCA9IHRoaXMuY29uc3RydWN0b3I7XHJcbiAgICAgICAgdmFyIF90aGlzID0gX3N1cGVyLmNhbGwodGhpcywgbWVzc2FnZSkgfHwgdGhpcztcclxuICAgICAgICBfdGhpcy5uYW1lID0gX25ld1RhcmdldC5uYW1lO1xyXG4gICAgICAgIGZpeFByb3RvKF90aGlzLCBfbmV3VGFyZ2V0LnByb3RvdHlwZSk7XHJcbiAgICAgICAgZml4U3RhY2soX3RoaXMpO1xyXG4gICAgICAgIHJldHVybiBfdGhpcztcclxuICAgIH1cclxuICAgIHJldHVybiBDdXN0b21FcnJvcjtcclxufShFcnJvcikpO1xyXG5leHBvcnQgeyBDdXN0b21FcnJvciB9O1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1jdXN0b20tZXJyb3IuanMubWFwIl19

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



    //# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZhY3RvcnkudHMob3JpZ2luYWwpIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLFFBQVMsZUFBZ0I7QUFDekIsT0FBTyxTQUFTLG1CQUFtQixFQUFJLEVBQUEsUUFBUTtJQUMzQyxJQUFJLE1BQUEsQ0FBQSxHQUFBLENBQVcsSUFBQSxDQUFLLEdBQUc7UUFBRSxNQUFBLENBQUEsQ0FBQSxDQUFTO0lBQXRDO0lBQ0ksU0FBUyxjQUFjO1FBQ25CLEdBQUEsQ0FBSSxPQUFPO1FBQ1gsS0FBSyxHQUFBLENBQUksS0FBSyxFQUFHLEVBQUEsQ0FBQSxDQUFBLENBQUssU0FBQSxDQUFVLFFBQVEsRUFBQSxJQUFNO1lBQzFDLElBQUEsQ0FBSyxHQUFMLENBQUEsQ0FBQSxDQUFXLFNBQUEsQ0FBVTtRQUNqQztRQUNRLElBQUksRUFBRSxJQUFBLENBQUEsVUFBQSxDQUFnQjtZQUNsQixPQUFPLEtBQUssV0FBQSxDQUFZLElBQVosQ0FBaUIsS0FBakIsQ0FBdUIsYUFBYSxDQUFDLElBQUEsQ0FBSyxFQUFOLENBQVMsTUFBVCxDQUFnQixPQUF6RDtRQUNYLE1BQUEsQ0FBTyxLQUFQLENBQWEsTUFBTTtRQUNuQixFQUFBLENBQUcsS0FBSCxDQUFTLE1BQU07UUFDZixJQUFBLENBQUssSUFBTCxDQUFBLENBQUEsQ0FBWSxFQUFBLENBQUcsSUFBSCxDQUFBLEVBQUEsQ0FBVyxNQUFBLENBQU87UUFDOUIsUUFBQSxDQUFTLE1BQU07SUFDdkI7O0lBQ0ksT0FBTyxNQUFBLENBQU8sZ0JBQVAsQ0FBd0IsYUFBYTtRQUN4QyxXQUFXO1lBQ1AsT0FBTyxNQUFBLENBQU8sTUFBUCxDQUFjLE1BQUEsQ0FBTyxXQUFXO2dCQUNuQyxhQUFhO29CQUNULE9BQU8sV0FERSxDQUFBO29CQUVULFVBQVUsSUFGRCxDQUFBO29CQUdULGNBQWM7Ozs7O0FBS2xDOztBQTFCQSIsImZpbGUiOiJmYWN0b3J5LnRzKG9yaWdpbmFsKSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGZpeFN0YWNrIH0gZnJvbSAnLi91dGlscyc7XHJcbmV4cG9ydCBmdW5jdGlvbiBjdXN0b21FcnJvckZhY3RvcnkoZm4sIHBhcmVudCkge1xyXG4gICAgaWYgKHBhcmVudCA9PT0gdm9pZCAwKSB7IHBhcmVudCA9IEVycm9yOyB9XHJcbiAgICBmdW5jdGlvbiBDdXN0b21FcnJvcigpIHtcclxuICAgICAgICB2YXIgYXJncyA9IFtdO1xyXG4gICAgICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBhcmd1bWVudHMubGVuZ3RoOyBfaSsrKSB7XHJcbiAgICAgICAgICAgIGFyZ3NbX2ldID0gYXJndW1lbnRzW19pXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKCEodGhpcyBpbnN0YW5jZW9mIEN1c3RvbUVycm9yKSlcclxuICAgICAgICAgICAgcmV0dXJuIG5ldyAoQ3VzdG9tRXJyb3IuYmluZC5hcHBseShDdXN0b21FcnJvciwgW3ZvaWQgMF0uY29uY2F0KGFyZ3MpKSkoKTtcclxuICAgICAgICBwYXJlbnQuYXBwbHkodGhpcywgYXJncyk7XHJcbiAgICAgICAgZm4uYXBwbHkodGhpcywgYXJncyk7XHJcbiAgICAgICAgdGhpcy5uYW1lID0gZm4ubmFtZSB8fCBwYXJlbnQubmFtZTtcclxuICAgICAgICBmaXhTdGFjayh0aGlzLCBDdXN0b21FcnJvcik7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gT2JqZWN0LmRlZmluZVByb3BlcnRpZXMoQ3VzdG9tRXJyb3IsIHtcclxuICAgICAgICBwcm90b3R5cGU6IHtcclxuICAgICAgICAgICAgdmFsdWU6IE9iamVjdC5jcmVhdGUocGFyZW50LnByb3RvdHlwZSwge1xyXG4gICAgICAgICAgICAgICAgY29uc3RydWN0b3I6IHtcclxuICAgICAgICAgICAgICAgICAgICB2YWx1ZTogQ3VzdG9tRXJyb3IsXHJcbiAgICAgICAgICAgICAgICAgICAgd3JpdGFibGU6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgfSksXHJcbiAgICAgICAgfSxcclxuICAgIH0pO1xyXG59XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWZhY3RvcnkuanMubWFwIl19

    //# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LnRzKG9yaWdpbmFsKSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxjQUFjLGdCQUFBO0FBQ2QsY0FBYyxXQUFBO0FBRGQiLCJmaWxlIjoiaW5kZXgudHMob3JpZ2luYWwpIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0ICogZnJvbSAnLi9jdXN0b20tZXJyb3InO1xyXG5leHBvcnQgKiBmcm9tICcuL2ZhY3RvcnknO1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1pbmRleC5qcy5tYXAiXX0=

    exports.CustomError = CustomError;
    exports.customErrorFactory = customErrorFactory;

})));
//# sourceMappingURL=custom-error.umd.js.map
