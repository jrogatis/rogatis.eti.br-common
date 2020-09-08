"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.NotAuthorizedErr = void 0;
var custom_error_1 = require("./custom-error");
var NotAuthorizedErr = /** @class */ (function (_super) {
    __extends(NotAuthorizedErr, _super);
    function NotAuthorizedErr() {
        var _this = _super.call(this, 'Not authorized') || this;
        _this.statusCode = 401;
        // Only because we are extending a built in class
        Object.setPrototypeOf(_this, NotAuthorizedErr.prototype);
        return _this;
    }
    NotAuthorizedErr.prototype.serializeErrors = function () {
        return [
            {
                message: 'Not Authorized',
            },
        ];
    };
    return NotAuthorizedErr;
}(custom_error_1.CustomError));
exports.NotAuthorizedErr = NotAuthorizedErr;