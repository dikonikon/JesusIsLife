var CallbackQueue = require('./CallbackQueue');
var nextTick = require('./nextTick');
var Scheduler = (function () {
    function Scheduler() {
        this._callbacks = new CallbackQueue();
    }
    Scheduler.schedule = function (callback) {
        return scheduler.schedule(callback);
    };
    Scheduler.prototype.schedule = function (callback) {
        var _this = this;
        var handle = this._callbacks.add(callback);
        nextTick(function () {
            _this._callbacks.drain();
        });
        return handle;
    };
    return Scheduler;
})();
var scheduler = new Scheduler();
module.exports = Scheduler;
//# sourceMappingURL=Scheduler.js.map