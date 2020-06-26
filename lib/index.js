"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Planet = /*#__PURE__*/function () {
  function Planet(mass, moons) {
    _classCallCheck(this, Planet);

    this.mass = mass;
    this.moons = moons || 0;
  }

  _createClass(Planet, [{
    key: "reportMoons",
    value: function reportMoons() {
      console.log("I have ".concat(this.moons, " moons."));
    }
  }]);

  return Planet;
}(); // Yeah, Jupiter really does have (at least) 67 moons.


var jupiter = new Planet('Pretty Big', 67);
jupiter.reportMoons();