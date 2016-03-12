(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
/*!
  * domready (c) Dustin Diaz 2014 - License MIT
  */
!function (name, definition) {

  if (typeof module != 'undefined') module.exports = definition()
  else if (typeof define == 'function' && typeof define.amd == 'object') define(definition)
  else this[name] = definition()

}('domready', function () {

  var fns = [], listener
    , doc = document
    , hack = doc.documentElement.doScroll
    , domContentLoaded = 'DOMContentLoaded'
    , loaded = (hack ? /^loaded|^c/ : /^loaded|^i|^c/).test(doc.readyState)


  if (!loaded)
  doc.addEventListener(domContentLoaded, listener = function () {
    doc.removeEventListener(domContentLoaded, listener)
    loaded = 1
    while (listener = fns.shift()) listener()
  })

  return function (fn) {
    loaded ? setTimeout(fn, 0) : fns.push(fn)
  }

});

},{}],2:[function(require,module,exports){
'use strict';

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _domready = require('domready');

var _domready2 = _interopRequireDefault(_domready);

var _modulesNav = require('./modules/Nav');

var _modulesNav2 = _interopRequireDefault(_modulesNav);

(0, _domready2['default'])(function () {
  new _modulesNav2['default'](document.getElementById('js-nav'));
});

},{"./modules/Nav":3,"domready":1}],3:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _utils = require('../utils');

var Nav = (function () {
  function Nav() {
    var _this = this;

    _classCallCheck(this, Nav);

    var nav = document.getElementById('js-nav');
    var sub1 = document.querySelectorAll('#js-nav-sub1 > li > a');
    var sub2 = document.querySelectorAll('#js-nav-sub2 > li > a');
    var sub3 = document.querySelectorAll('#js-nav-sub3 > li > a');

    if (sub1.length) {
      (0, _utils.forEach)(sub1, function (i, el) {
        el.addEventListener('click', _this.handleSubClick.bind(_this, nav, el), false);
      });
    }

    if (sub2.length) {
      (0, _utils.forEach)(sub2, function (i, el) {
        el.addEventListener('click', _this.handleSubClick.bind(_this, nav, el), false);
      });
    }

    if (sub3.length) {
      (0, _utils.forEach)(sub3, function (i, el) {
        el.addEventListener('click', _this.handleSubClick.bind(_this, nav, el), false);
      });
    }
  }

  _createClass(Nav, [{
    key: 'handleSubClick',
    value: function handleSubClick(nav, el, e) {
      e.preventDefault();

      // Check if not back button!
      if (el.classList.contains('Nav-link--back')) {
        el.addEventListener('click', this.handleBackClick.bind(this, nav), false);
        return;
      }

      // Check if next element exist
      if (el.nextSibling !== null) {
        if (nav.classList.contains('Nav-depth-2')) {
          nav.classList.add('Nav-depth-3');
        } else {
          nav.classList.add('Nav-depth-2');
        }

        el.nextSibling.classList.add('isActive');
      } else {
        console.log('not back button & no subs');
      }
    }
  }, {
    key: 'handleBackClick',
    value: function handleBackClick(nav, e) {
      e.preventDefault();

      if (nav.classList.contains('Nav-depth-3')) {
        nav.classList.remove('Nav-depth-3');
      } else {
        nav.classList.remove('Nav-depth-2');
      }
    }
  }]);

  return Nav;
})();

exports['default'] = Nav;
module.exports = exports['default'];

},{"../utils":4}],4:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports.getActiveBreakpoint = getActiveBreakpoint;
exports.forEach = forEach;

function getActiveBreakpoint() {
  return window.getComputedStyle(document.documentElement, ':after').getPropertyValue('content').replace(/['"]/g, '');
}

function forEach(array, callback, scope) {
  for (var i = 0, len = array.length; i < len; i++) {
    callback.call(scope, i, array[i]);
  }
}

},{}]},{},[2])
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJub2RlX21vZHVsZXMvZG9tcmVhZHkvcmVhZHkuanMiLCIvVXNlcnMvTmVyaWp1cy9TaXRlcy9MZWFybi9tdWx0aS1uZXN0ZWQtbmF2L3NyYy9qcy9tYWluLmpzIiwiL1VzZXJzL05lcmlqdXMvU2l0ZXMvTGVhcm4vbXVsdGktbmVzdGVkLW5hdi9zcmMvanMvbW9kdWxlcy9OYXYuanMiLCIvVXNlcnMvTmVyaWp1cy9TaXRlcy9MZWFybi9tdWx0aS1uZXN0ZWQtbmF2L3NyYy9qcy91dGlscy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzlCQSxZQUFZLENBQUM7Ozs7d0JBQ1EsVUFBVTs7OzswQkFDZixlQUFlOzs7O0FBRS9CLDJCQUFTLFlBQU07QUFDYiw4QkFBUSxRQUFRLENBQUMsY0FBYyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7Q0FDNUMsQ0FBQyxDQUFDOzs7Ozs7Ozs7Ozs7O3FCQ05xQixVQUFVOztJQUViLEdBQUc7QUFDVixXQURPLEdBQUcsR0FDUDs7OzBCQURJLEdBQUc7O0FBRXBCLFFBQU0sR0FBRyxHQUFHLFFBQVEsQ0FBQyxjQUFjLENBQUMsUUFBUSxDQUFDLENBQUM7QUFDOUMsUUFBTSxJQUFJLEdBQUcsUUFBUSxDQUFDLGdCQUFnQixDQUFDLHVCQUF1QixDQUFDLENBQUM7QUFDaEUsUUFBTSxJQUFJLEdBQUcsUUFBUSxDQUFDLGdCQUFnQixDQUFDLHVCQUF1QixDQUFDLENBQUM7QUFDaEUsUUFBTSxJQUFJLEdBQUcsUUFBUSxDQUFDLGdCQUFnQixDQUFDLHVCQUF1QixD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QUcsRUFBRSxDQUFDLEVBQUUsRUFBRTtBQUNoRCxZQUFRLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDLEVBQUUsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7R0FDbkM7Q0FDRiIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCIvKiFcbiAgKiBkb21yZWFkeSAoYykgRHVzdGluIERpYXogMjAxNCAtIExpY2Vuc2UgTUlUXG4gICovXG4hZnVuY3Rpb24gKG5hbWUsIGRlZmluaXRpb24pIHtcblxuICBpZiAodHlwZW9mIG1vZHVsZSAhPSAndW5kZWZpbmVkJykgbW9kdWxlLmV4cG9ydHMgPSBkZWZpbml0aW9uKClcbiAgZWxzZSBpZiAodHlwZW9mIGRlZmluZSA9PSAnZnVuY3Rpb24nICYmIHR5cGVvZiBkZWZpbmUuYW1kID09ICdvYmplY3QnKSBkZWZpbmUoZGVmaW5pdGlvbilcbiAgZWxzZSB0aGlzW25hbWVdID0gZGVmaW5pdGlvbigpXG5cbn0oJ2RvbXJlYWR5JywgZnVuY3Rpb24gKCkge1xuXG4gIHZhciBmbnMgPSBbXSwgbGlzdGVuZXJcbiAgICAsIGRvYyA9IGRvY3VtZW50XG4gICAgLCBoYWNrID0gZG9jLmRvY3VtZW50RWxlbWVudC5kb1Njcm9sbFxuICAgICwgZG9tQ29udGVudExvYWRlZCA9ICdET01Db250ZW50TG9hZGVkJ1xuICAgICwgbG9hZGVkID0gKGhhY2sgPyAvXmxvYWRlZHxeYy8gOiAvXmxvYWRlZHxeaXxeYy8pLnRlc3QoZG9jLnJlYWR5U3RhdGUpXG5cblxuICBpZiAoIWxvYWRlZClcbiAgZG9jLmFkZEV2ZW50TGlzdGVuZXIoZG9tQ29udGVudExvYWRlZCwgbGlzdGVuZXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgZG9jLnJlbW92ZUV2ZW50TGlzdGVuZXIoZG9tQ29udGVudExvYWRlZCwgbGlzdGVuZXIpXG4gICAgbG9hZGVkID0gMVxuICAgIHdoaWxlIChsaXN0ZW5lciA9IGZucy5zaGlmdCgpKSBsaXN0ZW5lcigpXG4gIH0pXG5cbiAgcmV0dXJuIGZ1bmN0aW9uIChmbikge1xuICAgIGxvYWRlZCA/IHNldFRpbWVvdXQoZm4sIDApIDogZm5zLnB1c2goZm4pXG4gIH1cblxufSk7XG4iLCIndXNlIHN0cmljdCc7XG5pbXBvcnQgZG9tcmVhZHkgZnJvbSAnZG9tcmVhZHknO1xuaW1wb3J0IE5hdiBmcm9tICcuL21vZHVsZXMvTmF2JztcblxuZG9tcmVhZHkoKCkgPT4ge1xuICBuZXcgTmF2KGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdqcy1uYXYnKSk7XG59KTtcbiIsImltcG9ydCB7IGZvckVhY2ggfSBmcm9tICcuLi91dGlscyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE5hdiB7XG4gIGNvbnN0cnVjdG9yICgpIHtcbiAgICBjb25zdCBuYXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnanMtbmF2Jyk7XG4gICAgY29uc3Qgc3ViMSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJyNqcy1uYXYtc3ViMSA+IGxpID4gYScpO1xuICAgIGNvbnN0IHN1YjIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcjanMtbmF2LXN1YjIgPiBsaSA+IGEnKTtcbiAgICBjb25zdCBzdWIzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnI2pzLW5hdi1zdWIzID4gbGkgPiBhJyk7XG5cbiAgICBpZiAoc3ViMS5sZW5ndGgpIHtcbiAgICAgIGZvckVhY2goc3ViMSwgKGksIGVsKSA9PiB7XG4gICAgICAgIGVsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5oYW5kbGVTdWJDbGljay5iaW5kKHRoaXMsIG5hdiwgZWwpLCBmYWxzZSk7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZiAoc3ViMi5sZW5ndGgpIHtcbiAgICAgIGZvckVhY2goc3ViMiwgKGksIGVsKSA9PiB7XG4gICAgICAgIGVsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5oYW5kbGVTdWJDbGljay5iaW5kKHRoaXMsIG5hdiwgZWwpLCBmYWxzZSk7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZiAoc3ViMy5sZW5ndGgpIHtcbiAgICAgIGZvckVhY2goc3ViMywgKGksIGVsKSA9PiB7XG4gICAgICAgIGVsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5oYW5kbGVTdWJDbGljay5iaW5kKHRoaXMsIG5hdiwgZWwpLCBmYWxzZSk7XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBoYW5kbGVTdWJDbGljayAobmF2LCBlbCwgZSkge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcblxuICAgIC8vIENoZWNrIGlmIG5vdCBiYWNrIGJ1dHRvbiFcbiAgICBpZiAoZWwuY2xhc3NMaXN0LmNvbnRhaW5zKCdOYXYtbGluay0tYmFjaycpKSB7XG4gICAgICBlbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMuaGFuZGxlQmFja0NsaWNrLmJpbmQodGhpcywgbmF2KSwgZmFsc2UpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIC8vIENoZWNrIGlmIG5leHQgZWxlbWVudCBleGlzdFxuICAgIGlmIChlbC5uZXh0U2libGluZyAhPT0gbnVsbCkge1xuICAgICAgaWYgKG5hdi5jbGFzc0xpc3QuY29udGFpbnMoJ05hdi1kZXB0aC0yJykpIHtcbiAgICAgICAgbmF2LmNsYXNzTGlzdC5hZGQoJ05hdi1kZXB0aC0zJyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBuYXYuY2xhc3NMaXN0LmFkZCgnTmF2LWRlcHRoLTInKTtcbiAgICAgIH1cblxuICAgICAgZWwubmV4dFNpYmxpbmcuY2xhc3NMaXN0LmFkZCgnaXNBY3RpdmUnKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc29sZS5sb2coJ25vdCBiYWNrIGJ1dHRvbiAmIG5vIHN1YnMnKTtcbiAgICB9XG4gIH1cblxuICBoYW5kbGVCYWNrQ2xpY2sgKG5hdiwgZSkge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcblxuICAgIGlmIChuYXYuY2xhc3NMaXN0LmNvbnRhaW5zKCdOYXYtZGVwdGgtMycpKSB7XG4gICAgICBuYXYuY2xhc3NMaXN0LnJlbW92ZSgnTmF2LWRlcHRoLTMnKTtcbiAgICB9IGVsc2Uge1xuICAgICAgbmF2LmNsYXNzTGlzdC5yZW1vdmUoJ05hdi1kZXB0aC0yJyk7XG4gICAgfVxuICB9XG59XG4iLCJleHBvcnQgZnVuY3Rpb24gZ2V0QWN0aXZlQnJlYWtwb2ludCAoKSB7XG4gIHJldHVybiB3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQsICc6YWZ0ZXInKS5nZXRQcm9wZXJ0eVZhbHVlKCdjb250ZW50JykucmVwbGFjZSgvWydcIl0vZywgJycpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZm9yRWFjaCAoYXJyYXksIGNhbGxiYWNrLCBzY29wZSkge1xuICBmb3IgKGxldCBpID0gMCwgbGVuID0gYXJyYXkubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcbiAgICBjYWxsYmFjay5jYWxsKHNjb3BlLCBpLCBhcnJheVtpXSk7XG4gIH1cbn1cbiJdfQ==
