// var winston=require('winston');
//
// winston.remove(winston.transports.Console);
// winston.add(winston.transports.Console, {timestamp: true});
// winston.add(winston.transports.File, {filename: 'winstonbasic.log'});
//
// module.exports=winston;

const winston = require('winston');
require('winston-daily-rotate-file');

function getLogger() {

    var transport = new (winston.transports.DailyRotateFile)({
        filename: 'winstonbasic.log',
        datePattern: 'yyyy-MM-dd.',
        prepend: true,
        level: 'info'
    });

    return new (winston.Logger)({
        transports: [
            transport
        ]
    });
}

module.exports = getLogger;
