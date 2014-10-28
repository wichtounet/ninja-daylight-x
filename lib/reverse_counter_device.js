var stream = require('stream');
var util = require('util');

util.inherits(reverse_counter_device,stream);

module.exports=reverse_counter_device;

function reverse_counter_device(opts, app) {
    this.readable = true;
    this.writeable = false;

    this.G = "daylightXChangeReverseTimer";
    this.V = 0;
    this.D = 9001;
    this.name = "Daylight reverse change timer"
};
