var config_messages = require('./config-messages');

exports.menu = function(opts, cb) {
    var returnMenu = config_messages.menu;
    returnMenu.contents[1].value = opts.latitude;
    returnMenu.contents[2].value = opts.longitude;
    cb(null,config_messages.menu);
};

exports.echo = function(opts,params,cb) {
    opts.latitude = params.latitude;
    opts.longitude = params.longitude;
    this.save();

    cb(null, config_messages.echo);
};
