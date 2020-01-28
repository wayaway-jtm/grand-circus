// creating a class that implements an interface
var Sauce = /** @class */ (function () {
    // automatically assigning arguments passed in to constructor as properties
    function Sauce(name, spiceLevel, awesome) {
        this.name = name;
        this.spiceLevel = spiceLevel;
        this.awesome = awesome;
    }
    // NOTE: All things defined in interface must be implemented in its class
    Sauce.prototype.meltYourEyes = function (name) {
        console.log(name);
        return this.spiceLevel > 5;
    };
    return Sauce;
}());
// Specifying types for:
// variables
var sauces = [
    new Sauce('Siracha', 4, true),
    new Sauce('Carolina Reaper Sauce', 8, true),
    new Sauce('Tabasco', 2, false),
    new Sauce('Ketchup', -2, true)
];
// parameters in function       // return type
function getSauceByName(s, name) {
    // do my stuff
    return s[0];
}
