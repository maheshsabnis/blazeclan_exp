"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classPrivateMethodGet(receiver, privateSet, fn) { if (!privateSet.has(receiver)) { throw new TypeError("attempted to get private field on non-instance"); } return fn; }

function _classPrivateFieldGet(receiver, privateMap) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "get"); return _classApplyDescriptorGet(receiver, descriptor); }

function _classApplyDescriptorGet(receiver, descriptor) { if (descriptor.get) { return descriptor.get.call(receiver); } return descriptor.value; }

function _classPrivateFieldSet(receiver, privateMap, value) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "set"); _classApplyDescriptorSet(receiver, descriptor, value); return value; }

function _classExtractFieldDescriptor(receiver, privateMap, action) { if (!privateMap.has(receiver)) { throw new TypeError("attempted to " + action + " private field on non-instance"); } return privateMap.get(receiver); }

function _classApplyDescriptorSet(receiver, descriptor, value) { if (descriptor.set) { descriptor.set.call(receiver, value); } else { if (!descriptor.writable) { throw new TypeError("attempted to set read only private field"); } descriptor.value = value; } }

var _privateValue = /*#__PURE__*/new WeakMap();

var _checkValue = /*#__PURE__*/new WeakSet();

var SimpleClass = /*#__PURE__*/function () {
  // defining the private membefr
  // defining public members in constructor()
  function SimpleClass(a, b) {
    _classCallCheck(this, SimpleClass);

    _checkValue.add(this);

    _privateValue.set(this, {
      writable: true,
      value: 0
    });

    this.x = a;
    this.y = b; // lets initialize theprivate member

    _classPrivateFieldSet(this, _privateValue, a);
  } // public method


  _createClass(SimpleClass, [{
    key: "squareAdd",
    value: function squareAdd() {
      return this.x * this.x + this.y * this.y;
    } // private method

  }, {
    key: "getPower",
    value: function getPower(x) {
      if (!_classPrivateMethodGet(this, _checkValue, _checkValue2).call(this)) {
        _classPrivateFieldSet(this, _privateValue, 1);

        return Math.pow(_classPrivateFieldGet(this, _privateValue), x); // return 1
      } else {
        return Math.pow(_classPrivateFieldGet(this, _privateValue), x);
      }
    } // defining properties
    // setter property to ser value of the Private variable

  }, {
    key: "privateValue",
    get: // return value of the private variable
    function get() {
      return _classPrivateFieldGet(this, _privateValue);
    },
    set: function set(v) {
      _classPrivateFieldSet(this, _privateValue, v);
    }
  }]);

  return SimpleClass;
}();

function _checkValue2() {
  if (_classPrivateFieldGet(this, _privateValue) <= 0) {
    return false;
  }

  return true;
}

var obj = new SimpleClass(0, 200);
console.log("Square add = ".concat(obj.squareAdd()));
console.log("Get Power ".concat(obj.getPower(3)));
obj.privateValue = 500;
console.log("Private Value =  ".concat(obj.privateValue));
