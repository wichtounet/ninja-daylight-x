var stream = require('stream');
var util = require('util');
var sun_calc = require('suncalc');

util.inherits(counter_device,stream);

module.exports=counter_device;

function diff(from, to){
    if(to.getHours() < from.getHours()){
        return (24 + to.getHours() - from.getHours()) * 60 + to.getMinutes() - from.getMinutes();
    } else {
        return (to.getHours() - from.getHours()) * 60 + to.getMinutes() - from.getMinutes();
    }
}

function counter_device(opts, app, sd, rcd) {
    var self = this;

    this.readable = true;
    this.writeable = false;

    this.G = "daylightXChangeTimer";
    this.V = 0;
    this.D = 9001;
    this.name = "Daylight change timer"

    process.nextTick(function() {
        setInterval(function() {
            var longitude = parseFloat(opts.longitude);
            var latitude = parseFloat(opts.latitude);

            var now = new Date(); 
            var tomorrow = new Date();
            tomorrow.setDate(now.getDate() + 1);
            var yesterday = new Date();
            yesterday.setDate(now.getDate() - 1);

            var times = sun_calc.getTimes(now, latitude, longitude); 
            var times_tomorrow = sun_calc.getTimes(tomorrow, latitude, longitude);
            var times_yesterday = sun_calc.getTimes(yesterday, latitude, longitude);

            var sunrise_today = times.sunriseEnd;
            var sunset_today = times.sunsetStart;
            var sunrise_tomorrow = times_tomorrow.sunriseEnd;
            var sunset_yesterday = times_yesterday.sunsetStart;

            if(now <= sunrise_today){
                self.emit('data', diff(now, sunrise_today));
                rcd.emit('data', diff(sunset_yesterday, now));
                sd.emit('data', 'night');
            } else if(now >= sunrise_today && now <= sunset_today){
                self.emit('data', diff(now, sunset_today));
                rcd.emit('data', diff(sunrise_today, now));
                sd.emit('data', 'day');
            } else {
                self.emit('data', diff(now, sunrise_tomorrow));
                rcd.emit('data', diff(sunset_today, now));
                sd.emit('data', 'night');
            }

        }, 60000);
    });
};
