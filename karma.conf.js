const KarmaConfig = require('./karma.common.js');
module.exports = function(config) {

    config.set(KarmaConfig({
        browsers: ['ChromeHeadless', 'Firefox']
    }, config));
}