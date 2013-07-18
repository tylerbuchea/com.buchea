/** Namespace **/
var App = function() {

    // BQuery ;-)
    var $ = function(selector) {
        return document.querySelector(selector);
    };

    // Random Number
    var randNum = function(range) {
        return Math.round(Math.random() * (range.max - range.min) + range.min);
    };

    // Organize Profiles
    var organizeProfiles = function(seed) {
        var theList = $('.container');
        var randomBuchea = $('.buchea:nth-child('+seed+')');

        theList.insertBefore(randomBuchea, theList.firstChild);
    };

    // Init
    this.init = function() {

        organizeProfiles( randNum({min: 1, max: 3}) );

    };

};

/** Initialize **/
var app = new App();
app.init();