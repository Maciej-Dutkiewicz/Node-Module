var os = require('os');
function OStime () {
    var time = os.uptime();
        if (time < 60) {
            console.log(os.uptime());
        }
        else if (time < 3600) {
            var min = Math.floor((time%3600)/60);
            var sec = Math.floor((time%3600)%60);
            console.log(min + ' minutes ' + sec + ' seconds')
        }
        else {
            var h = Math.floor(time/3600);
            var min = Math.floor((time%3600)/60);
            var sec = Math.floor((time%3600)%60);
            console.log(h + ' hours ' + min + ' minutes ' + sec + ' seconds')
        }
}
exports.print = OStime;