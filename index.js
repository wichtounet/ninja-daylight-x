var counter_device = require('./lib/counter_device');
var state_device = require('./lib/state_device');
var util = require('util')
var stream = require('stream')
var config_handlers = require('./lib/config-handlers');

util.inherits(daylight_x_driver,stream);

function daylight_x_driver(opts,app) {
    var self = this;

    app.on('client::up',function(){
        if (!opts.is_init) {
            opts.latitude = 0.1;
            opts.longitude = 0.1;
            opts.is_init = true;
            self.save();
        }

        var sd = new state_device(opts, app);
        self.emit('register', new counter_device(opts, app, sd));
        self.emit('register', sd);
    });
};

daylight_x_driver.prototype.config = function(rpc,cb) {
    var self = this;

    if (!rpc) {
        return config_handlers.menu.call(this, this.opts, cb);
    } else if (typeof config_handlers[rpc.method] === "function") {
        return config_handlers[rpc.method].call(this, this.opts, rpc.params, cb);
    } else {
        return cb(true);
    }
};

module.exports = daylight_x_driver;
