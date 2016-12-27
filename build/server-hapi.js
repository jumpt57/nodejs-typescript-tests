"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var hapi = require("hapi");
var HapiServer = (function (_super) {
    __extends(HapiServer, _super);
    function HapiServer(port) {
        var _this = _super.call(this) || this;
        _this.portServer = port;
        return _this;
    }
    HapiServer.prototype.onStart = function () {
        var _this = this;
        this.connection({
            port: this.portServer
        });
        this.start(function (err) {
            if (err) {
                throw err;
            }
            console.log('Server running at : ' + _this.info.uri);
        });
    };
    return HapiServer;
}(hapi.Server));
var server = new HapiServer(8080).onStart();
//# sourceMappingURL=server-hapi.js.map