var stream = require('stream');
var util = require('util');

util.inherits(state_device,stream);

module.exports=state_device;

function state_device(opts, app) {
    this.readable = true;
    this.writeable = false;

    this.G = "daylightXState";
    this.V = 0;
    this.D = 244;
    this.name = "Daylight state"
};
