(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
module.exports = { "default": require("core-js/library/fn/get-iterator"), __esModule: true };
},{"core-js/library/fn/get-iterator":5}],2:[function(require,module,exports){
module.exports = { "default": require("core-js/library/fn/symbol"), __esModule: true };
},{"core-js/library/fn/symbol":6}],3:[function(require,module,exports){
module.exports = { "default": require("core-js/library/fn/symbol/iterator"), __esModule: true };
},{"core-js/library/fn/symbol/iterator":7}],4:[function(require,module,exports){
"use strict";

exports.__esModule = true;

var _iterator = require("babel-runtime/core-js/symbol/iterator");

var _iterator2 = _interopRequireDefault(_iterator);

var _symbol = require("babel-runtime/core-js/symbol");

var _symbol2 = _interopRequireDefault(_symbol);

var _typeof = typeof _symbol2.default === "function" && typeof _iterator2.default === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default ? "symbol" : typeof obj; };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = typeof _symbol2.default === "function" && _typeof(_iterator2.default) === "symbol" ? function (obj) {
  return typeof obj === "undefined" ? "undefined" : _typeof(obj);
} : function (obj) {
  return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof(obj);
};
},{"babel-runtime/core-js/symbol":2,"babel-runtime/core-js/symbol/iterator":3}],5:[function(require,module,exports){
require('../modules/web.dom.iterable');
require('../modules/es6.string.iterator');
module.exports = require('../modules/core.get-iterator');
},{"../modules/core.get-iterator":66,"../modules/es6.string.iterator":69,"../modules/web.dom.iterable":73}],6:[function(require,module,exports){
require('../../modules/es6.symbol');
require('../../modules/es6.object.to-string');
require('../../modules/es7.symbol.async-iterator');
require('../../modules/es7.symbol.observable');
module.exports = require('../../modules/_core').Symbol;
},{"../../modules/_core":14,"../../modules/es6.object.to-string":68,"../../modules/es6.symbol":70,"../../modules/es7.symbol.async-iterator":71,"../../modules/es7.symbol.observable":72}],7:[function(require,module,exports){
require('../../modules/es6.string.iterator');
require('../../modules/web.dom.iterable');
module.exports = require('../../modules/_wks-ext').f('iterator');
},{"../../modules/_wks-ext":63,"../../modules/es6.string.iterator":69,"../../modules/web.dom.iterable":73}],8:[function(require,module,exports){
module.exports = function(it){
  if(typeof it != 'function')throw TypeError(it + ' is not a function!');
  return it;
};
},{}],9:[function(require,module,exports){
module.exports = function(){ /* empty */ };
},{}],10:[function(require,module,exports){
var isObject = require('./_is-object');
module.exports = function(it){
  if(!isObject(it))throw TypeError(it + ' is not an object!');
  return it;
};
},{"./_is-object":30}],11:[function(require,module,exports){
// false -> Array#indexOf
// true  -> Array#includes
var toIObject = require('./_to-iobject')
  , toLength  = require('./_to-length')
  , toIndex   = require('./_to-index');
module.exports = function(IS_INCLUDES){
  return function($this, el, fromIndex){
    var O      = toIObject($this)
      , length = toLength(O.length)
      , index  = toIndex(fromIndex, length)
      , value;
    // Array#includes uses SameValueZero equality algorithm
    if(IS_INCLUDES && el != el)while(length > index){
      value = O[index++];
      if(value != value)return true;
    // Array#toIndex ignores holes, Array#includes - not
    } else for(;length > index; index++)if(IS_INCLUDES || index in O){
      if(O[index] === el)return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};
},{"./_to-index":55,"./_to-iobject":57,"./_to-length":58}],12:[function(require,module,exports){
// getting tag from 19.1.3.6 Object.prototype.toString()
var cof = require('./_cof')
  , TAG = require('./_wks')('toStringTag')
  // ES3 wrong here
  , ARG = cof(function(){ return arguments; }()) == 'Arguments';

// fallback for IE11 Script Access Denied error
var tryGet = function(it, key){
  try {
    return it[key];
  } catch(e){ /* empty */ }
};

module.exports = function(it){
  var O, T, B;
  return it === undefined ? 'Undefined' : it === null ? 'Null'
    // @@toStringTag case
    : typeof (T = tryGet(O = Object(it), TAG)) == 'string' ? T
    // builtinTag case
    : ARG ? cof(O)
    // ES3 arguments fallback
    : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
};
},{"./_cof":13,"./_wks":64}],13:[function(require,module,exports){
var toString = {}.toString;

module.exports = function(it){
  return toString.call(it).slice(8, -1);
};
},{}],14:[function(require,module,exports){
var core = module.exports = {version: '2.4.0'};
if(typeof __e == 'number')__e = core; // eslint-disable-line no-undef
},{}],15:[function(require,module,exports){
// optional / simple context binding
var aFunction = require('./_a-function');
module.exports = function(fn, that, length){
  aFunction(fn);
  if(that === undefined)return fn;
  switch(length){
    case 1: return function(a){
      return fn.call(that, a);
    };
    case 2: return function(a, b){
      return fn.call(that, a, b);
    };
    case 3: return function(a, b, c){
      return fn.call(that, a, b, c);
    };
  }
  return function(/* ...args */){
    return fn.apply(that, arguments);
  };
};
},{"./_a-function":8}],16:[function(require,module,exports){
// 7.2.1 RequireObjectCoercible(argument)
module.exports = function(it){
  if(it == undefined)throw TypeError("Can't call method on  " + it);
  return it;
};
},{}],17:[function(require,module,exports){
// Thank's IE8 for his funny defineProperty
module.exports = !require('./_fails')(function(){
  return Object.defineProperty({}, 'a', {get: function(){ return 7; }}).a != 7;
});
},{"./_fails":22}],18:[function(require,module,exports){
var isObject = require('./_is-object')
  , document = require('./_global').document
  // in old IE typeof document.createElement is 'object'
  , is = isObject(document) && isObject(document.createElement);
module.exports = function(it){
  return is ? document.createElement(it) : {};
};
},{"./_global":23,"./_is-object":30}],19:[function(require,module,exports){
// IE 8- don't enum bug keys
module.exports = (
  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
).split(',');
},{}],20:[function(require,module,exports){
// all enumerable object keys, includes symbols
var getKeys = require('./_object-keys')
  , gOPS    = require('./_object-gops')
  , pIE     = require('./_object-pie');
module.exports = function(it){
  var result     = getKeys(it)
    , getSymbols = gOPS.f;
  if(getSymbols){
    var symbols = getSymbols(it)
      , isEnum  = pIE.f
      , i       = 0
      , key;
    while(symbols.length > i)if(isEnum.call(it, key = symbols[i++]))result.push(key);
  } return result;
};
},{"./_object-gops":44,"./_object-keys":47,"./_object-pie":48}],21:[function(require,module,exports){
var global    = require('./_global')
  , core      = require('./_core')
  , ctx       = require('./_ctx')
  , hide      = require('./_hide')
  , PROTOTYPE = 'prototype';

var $export = function(type, name, source){
  var IS_FORCED = type & $export.F
    , IS_GLOBAL = type & $export.G
    , IS_STATIC = type & $export.S
    , IS_PROTO  = type & $export.P
    , IS_BIND   = type & $export.B
    , IS_WRAP   = type & $export.W
    , exports   = IS_GLOBAL ? core : core[name] || (core[name] = {})
    , expProto  = exports[PROTOTYPE]
    , target    = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE]
    , key, own, out;
  if(IS_GLOBAL)source = name;
  for(key in source){
    // contains in native
    own = !IS_FORCED && target && target[key] !== undefined;
    if(own && key in exports)continue;
    // export native or passed
    out = own ? target[key] : source[key];
    // prevent global pollution for namespaces
    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
    // bind timers to global for call from export context
    : IS_BIND && own ? ctx(out, global)
    // wrap global constructors for prevent change them in library
    : IS_WRAP && target[key] == out ? (function(C){
      var F = function(a, b, c){
        if(this instanceof C){
          switch(arguments.length){
            case 0: return new C;
            case 1: return new C(a);
            case 2: return new C(a, b);
          } return new C(a, b, c);
        } return C.apply(this, arguments);
      };
      F[PROTOTYPE] = C[PROTOTYPE];
      return F;
    // make static versions for prototype methods
    })(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
    // export proto methods to core.%CONSTRUCTOR%.methods.%NAME%
    if(IS_PROTO){
      (exports.virtual || (exports.virtual = {}))[key] = out;
      // export proto methods to core.%CONSTRUCTOR%.prototype.%NAME%
      if(type & $export.R && expProto && !expProto[key])hide(expProto, key, out);
    }
  }
};
// type bitmap
$export.F = 1;   // forced
$export.G = 2;   // global
$export.S = 4;   // static
$export.P = 8;   // proto
$export.B = 16;  // bind
$export.W = 32;  // wrap
$export.U = 64;  // safe
$export.R = 128; // real proto method for `library` 
module.exports = $export;
},{"./_core":14,"./_ctx":15,"./_global":23,"./_hide":25}],22:[function(require,module,exports){
module.exports = function(exec){
  try {
    return !!exec();
  } catch(e){
    return true;
  }
};
},{}],23:[function(require,module,exports){
// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self : Function('return this')();
if(typeof __g == 'number')__g = global; // eslint-disable-line no-undef
},{}],24:[function(require,module,exports){
var hasOwnProperty = {}.hasOwnProperty;
module.exports = function(it, key){
  return hasOwnProperty.call(it, key);
};
},{}],25:[function(require,module,exports){
var dP         = require('./_object-dp')
  , createDesc = require('./_property-desc');
module.exports = require('./_descriptors') ? function(object, key, value){
  return dP.f(object, key, createDesc(1, value));
} : function(object, key, value){
  object[key] = value;
  return object;
};
},{"./_descriptors":17,"./_object-dp":39,"./_property-desc":49}],26:[function(require,module,exports){
module.exports = require('./_global').document && document.documentElement;
},{"./_global":23}],27:[function(require,module,exports){
module.exports = !require('./_descriptors') && !require('./_fails')(function(){
  return Object.defineProperty(require('./_dom-create')('div'), 'a', {get: function(){ return 7; }}).a != 7;
});
},{"./_descriptors":17,"./_dom-create":18,"./_fails":22}],28:[function(require,module,exports){
// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof = require('./_cof');
module.exports = Object('z').propertyIsEnumerable(0) ? Object : function(it){
  return cof(it) == 'String' ? it.split('') : Object(it);
};
},{"./_cof":13}],29:[function(require,module,exports){
// 7.2.2 IsArray(argument)
var cof = require('./_cof');
module.exports = Array.isArray || function isArray(arg){
  return cof(arg) == 'Array';
};
},{"./_cof":13}],30:[function(require,module,exports){
module.exports = function(it){
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};
},{}],31:[function(require,module,exports){
'use strict';
var create         = require('./_object-create')
  , descriptor     = require('./_property-desc')
  , setToStringTag = require('./_set-to-string-tag')
  , IteratorPrototype = {};

// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
require('./_hide')(IteratorPrototype, require('./_wks')('iterator'), function(){ return this; });

module.exports = function(Constructor, NAME, next){
  Constructor.prototype = create(IteratorPrototype, {next: descriptor(1, next)});
  setToStringTag(Constructor, NAME + ' Iterator');
};
},{"./_hide":25,"./_object-create":38,"./_property-desc":49,"./_set-to-string-tag":51,"./_wks":64}],32:[function(require,module,exports){
'use strict';
var LIBRARY        = require('./_library')
  , $export        = require('./_export')
  , redefine       = require('./_redefine')
  , hide           = require('./_hide')
  , has            = require('./_has')
  , Iterators      = require('./_iterators')
  , $iterCreate    = require('./_iter-create')
  , setToStringTag = require('./_set-to-string-tag')
  , getPrototypeOf = require('./_object-gpo')
  , ITERATOR       = require('./_wks')('iterator')
  , BUGGY          = !([].keys && 'next' in [].keys()) // Safari has buggy iterators w/o `next`
  , FF_ITERATOR    = '@@iterator'
  , KEYS           = 'keys'
  , VALUES         = 'values';

var returnThis = function(){ return this; };

module.exports = function(Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED){
  $iterCreate(Constructor, NAME, next);
  var getMethod = function(kind){
    if(!BUGGY && kind in proto)return proto[kind];
    switch(kind){
      case KEYS: return function keys(){ return new Constructor(this, kind); };
      case VALUES: return function values(){ return new Constructor(this, kind); };
    } return function entries(){ return new Constructor(this, kind); };
  };
  var TAG        = NAME + ' Iterator'
    , DEF_VALUES = DEFAULT == VALUES
    , VALUES_BUG = false
    , proto      = Base.prototype
    , $native    = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT]
    , $default   = $native || getMethod(DEFAULT)
    , $entries   = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined
    , $anyNative = NAME == 'Array' ? proto.entries || $native : $native
    , methods, key, IteratorPrototype;
  // Fix native
  if($anyNative){
    IteratorPrototype = getPrototypeOf($anyNative.call(new Base));
    if(IteratorPrototype !== Object.prototype){
      // Set @@toStringTag to native iterators
      setToStringTag(IteratorPrototype, TAG, true);
      // fix for some old engines
      if(!LIBRARY && !has(IteratorPrototype, ITERATOR))hide(IteratorPrototype, ITERATOR, returnThis);
    }
  }
  // fix Array#{values, @@iterator}.name in V8 / FF
  if(DEF_VALUES && $native && $native.name !== VALUES){
    VALUES_BUG = true;
    $default = function values(){ return $native.call(this); };
  }
  // Define iterator
  if((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])){
    hide(proto, ITERATOR, $default);
  }
  // Plug for library
  Iterators[NAME] = $default;
  Iterators[TAG]  = returnThis;
  if(DEFAULT){
    methods = {
      values:  DEF_VALUES ? $default : getMethod(VALUES),
      keys:    IS_SET     ? $default : getMethod(KEYS),
      entries: $entries
    };
    if(FORCED)for(key in methods){
      if(!(key in proto))redefine(proto, key, methods[key]);
    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
  }
  return methods;
};
},{"./_export":21,"./_has":24,"./_hide":25,"./_iter-create":31,"./_iterators":34,"./_library":36,"./_object-gpo":45,"./_redefine":50,"./_set-to-string-tag":51,"./_wks":64}],33:[function(require,module,exports){
module.exports = function(done, value){
  return {value: value, done: !!done};
};
},{}],34:[function(require,module,exports){
module.exports = {};
},{}],35:[function(require,module,exports){
var getKeys   = require('./_object-keys')
  , toIObject = require('./_to-iobject');
module.exports = function(object, el){
  var O      = toIObject(object)
    , keys   = getKeys(O)
    , length = keys.length
    , index  = 0
    , key;
  while(length > index)if(O[key = keys[index++]] === el)return key;
};
},{"./_object-keys":47,"./_to-iobject":57}],36:[function(require,module,exports){
module.exports = true;
},{}],37:[function(require,module,exports){
var META     = require('./_uid')('meta')
  , isObject = require('./_is-object')
  , has      = require('./_has')
  , setDesc  = require('./_object-dp').f
  , id       = 0;
var isExtensible = Object.isExtensible || function(){
  return true;
};
var FREEZE = !require('./_fails')(function(){
  return isExtensible(Object.preventExtensions({}));
});
var setMeta = function(it){
  setDesc(it, META, {value: {
    i: 'O' + ++id, // object ID
    w: {}          // weak collections IDs
  }});
};
var fastKey = function(it, create){
  // return primitive with prefix
  if(!isObject(it))return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;
  if(!has(it, META)){
    // can't set metadata to uncaught frozen object
    if(!isExtensible(it))return 'F';
    // not necessary to add metadata
    if(!create)return 'E';
    // add missing metadata
    setMeta(it);
  // return object ID
  } return it[META].i;
};
var getWeak = function(it, create){
  if(!has(it, META)){
    // can't set metadata to uncaught frozen object
    if(!isExtensible(it))return true;
    // not necessary to add metadata
    if(!create)return false;
    // add missing metadata
    setMeta(it);
  // return hash weak collections IDs
  } return it[META].w;
};
// add metadata on freeze-family methods calling
var onFreeze = function(it){
  if(FREEZE && meta.NEED && isExtensible(it) && !has(it, META))setMeta(it);
  return it;
};
var meta = module.exports = {
  KEY:      META,
  NEED:     false,
  fastKey:  fastKey,
  getWeak:  getWeak,
  onFreeze: onFreeze
};
},{"./_fails":22,"./_has":24,"./_is-object":30,"./_object-dp":39,"./_uid":61}],38:[function(require,module,exports){
// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
var anObject    = require('./_an-object')
  , dPs         = require('./_object-dps')
  , enumBugKeys = require('./_enum-bug-keys')
  , IE_PROTO    = require('./_shared-key')('IE_PROTO')
  , Empty       = function(){ /* empty */ }
  , PROTOTYPE   = 'prototype';

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var createDict = function(){
  // Thrash, waste and sodomy: IE GC bug
  var iframe = require('./_dom-create')('iframe')
    , i      = enumBugKeys.length
    , gt     = '>'
    , iframeDocument;
  iframe.style.display = 'none';
  require('./_html').appendChild(iframe);
  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
  // createDict = iframe.contentWindow.Object;
  // html.removeChild(iframe);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write('<script>document.F=Object</script' + gt);
  iframeDocument.close();
  createDict = iframeDocument.F;
  while(i--)delete createDict[PROTOTYPE][enumBugKeys[i]];
  return createDict();
};

module.exports = Object.create || function create(O, Properties){
  var result;
  if(O !== null){
    Empty[PROTOTYPE] = anObject(O);
    result = new Empty;
    Empty[PROTOTYPE] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO] = O;
  } else result = createDict();
  return Properties === undefined ? result : dPs(result, Properties);
};
},{"./_an-object":10,"./_dom-create":18,"./_enum-bug-keys":19,"./_html":26,"./_object-dps":40,"./_shared-key":52}],39:[function(require,module,exports){
var anObject       = require('./_an-object')
  , IE8_DOM_DEFINE = require('./_ie8-dom-define')
  , toPrimitive    = require('./_to-primitive')
  , dP             = Object.defineProperty;

exports.f = require('./_descriptors') ? Object.defineProperty : function defineProperty(O, P, Attributes){
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if(IE8_DOM_DEFINE)try {
    return dP(O, P, Attributes);
  } catch(e){ /* empty */ }
  if('get' in Attributes || 'set' in Attributes)throw TypeError('Accessors not supported!');
  if('value' in Attributes)O[P] = Attributes.value;
  return O;
};
},{"./_an-object":10,"./_descriptors":17,"./_ie8-dom-define":27,"./_to-primitive":60}],40:[function(require,module,exports){
var dP       = require('./_object-dp')
  , anObject = require('./_an-object')
  , getKeys  = require('./_object-keys');

module.exports = require('./_descriptors') ? Object.defineProperties : function defineProperties(O, Properties){
  anObject(O);
  var keys   = getKeys(Properties)
    , length = keys.length
    , i = 0
    , P;
  while(length > i)dP.f(O, P = keys[i++], Properties[P]);
  return O;
};
},{"./_an-object":10,"./_descriptors":17,"./_object-dp":39,"./_object-keys":47}],41:[function(require,module,exports){
var pIE            = require('./_object-pie')
  , createDesc     = require('./_property-desc')
  , toIObject      = require('./_to-iobject')
  , toPrimitive    = require('./_to-primitive')
  , has            = require('./_has')
  , IE8_DOM_DEFINE = require('./_ie8-dom-define')
  , gOPD           = Object.getOwnPropertyDescriptor;

exports.f = require('./_descriptors') ? gOPD : function getOwnPropertyDescriptor(O, P){
  O = toIObject(O);
  P = toPrimitive(P, true);
  if(IE8_DOM_DEFINE)try {
    return gOPD(O, P);
  } catch(e){ /* empty */ }
  if(has(O, P))return createDesc(!pIE.f.call(O, P), O[P]);
};
},{"./_descriptors":17,"./_has":24,"./_ie8-dom-define":27,"./_object-pie":48,"./_property-desc":49,"./_to-iobject":57,"./_to-primitive":60}],42:[function(require,module,exports){
// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
var toIObject = require('./_to-iobject')
  , gOPN      = require('./_object-gopn').f
  , toString  = {}.toString;

var windowNames = typeof window == 'object' && window && Object.getOwnPropertyNames
  ? Object.getOwnPropertyNames(window) : [];

var getWindowNames = function(it){
  try {
    return gOPN(it);
  } catch(e){
    return windowNames.slice();
  }
};

module.exports.f = function getOwnPropertyNames(it){
  return windowNames && toString.call(it) == '[object Window]' ? getWindowNames(it) : gOPN(toIObject(it));
};

},{"./_object-gopn":43,"./_to-iobject":57}],43:[function(require,module,exports){
// 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)
var $keys      = require('./_object-keys-internal')
  , hiddenKeys = require('./_enum-bug-keys').concat('length', 'prototype');

exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O){
  return $keys(O, hiddenKeys);
};
},{"./_enum-bug-keys":19,"./_object-keys-internal":46}],44:[function(require,module,exports){
exports.f = Object.getOwnPropertySymbols;
},{}],45:[function(require,module,exports){
// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
var has         = require('./_has')
  , toObject    = require('./_to-object')
  , IE_PROTO    = require('./_shared-key')('IE_PROTO')
  , ObjectProto = Object.prototype;

module.exports = Object.getPrototypeOf || function(O){
  O = toObject(O);
  if(has(O, IE_PROTO))return O[IE_PROTO];
  if(typeof O.constructor == 'function' && O instanceof O.constructor){
    return O.constructor.prototype;
  } return O instanceof Object ? ObjectProto : null;
};
},{"./_has":24,"./_shared-key":52,"./_to-object":59}],46:[function(require,module,exports){
var has          = require('./_has')
  , toIObject    = require('./_to-iobject')
  , arrayIndexOf = require('./_array-includes')(false)
  , IE_PROTO     = require('./_shared-key')('IE_PROTO');

module.exports = function(object, names){
  var O      = toIObject(object)
    , i      = 0
    , result = []
    , key;
  for(key in O)if(key != IE_PROTO)has(O, key) && result.push(key);
  // Don't enum bug & hidden keys
  while(names.length > i)if(has(O, key = names[i++])){
    ~arrayIndexOf(result, key) || result.push(key);
  }
  return result;
};
},{"./_array-includes":11,"./_has":24,"./_shared-key":52,"./_to-iobject":57}],47:[function(require,module,exports){
// 19.1.2.14 / 15.2.3.14 Object.keys(O)
var $keys       = require('./_object-keys-internal')
  , enumBugKeys = require('./_enum-bug-keys');

module.exports = Object.keys || function keys(O){
  return $keys(O, enumBugKeys);
};
},{"./_enum-bug-keys":19,"./_object-keys-internal":46}],48:[function(require,module,exports){
exports.f = {}.propertyIsEnumerable;
},{}],49:[function(require,module,exports){
module.exports = function(bitmap, value){
  return {
    enumerable  : !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable    : !(bitmap & 4),
    value       : value
  };
};
},{}],50:[function(require,module,exports){
module.exports = require('./_hide');
},{"./_hide":25}],51:[function(require,module,exports){
var def = require('./_object-dp').f
  , has = require('./_has')
  , TAG = require('./_wks')('toStringTag');

module.exports = function(it, tag, stat){
  if(it && !has(it = stat ? it : it.prototype, TAG))def(it, TAG, {configurable: true, value: tag});
};
},{"./_has":24,"./_object-dp":39,"./_wks":64}],52:[function(require,module,exports){
var shared = require('./_shared')('keys')
  , uid    = require('./_uid');
module.exports = function(key){
  return shared[key] || (shared[key] = uid(key));
};
},{"./_shared":53,"./_uid":61}],53:[function(require,module,exports){
var global = require('./_global')
  , SHARED = '__core-js_shared__'
  , store  = global[SHARED] || (global[SHARED] = {});
module.exports = function(key){
  return store[key] || (store[key] = {});
};
},{"./_global":23}],54:[function(require,module,exports){
var toInteger = require('./_to-integer')
  , defined   = require('./_defined');
// true  -> String#at
// false -> String#codePointAt
module.exports = function(TO_STRING){
  return function(that, pos){
    var s = String(defined(that))
      , i = toInteger(pos)
      , l = s.length
      , a, b;
    if(i < 0 || i >= l)return TO_STRING ? '' : undefined;
    a = s.charCodeAt(i);
    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
      ? TO_STRING ? s.charAt(i) : a
      : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
  };
};
},{"./_defined":16,"./_to-integer":56}],55:[function(require,module,exports){
var toInteger = require('./_to-integer')
  , max       = Math.max
  , min       = Math.min;
module.exports = function(index, length){
  index = toInteger(index);
  return index < 0 ? max(index + length, 0) : min(index, length);
};
},{"./_to-integer":56}],56:[function(require,module,exports){
// 7.1.4 ToInteger
var ceil  = Math.ceil
  , floor = Math.floor;
module.exports = function(it){
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};
},{}],57:[function(require,module,exports){
// to indexed object, toObject with fallback for non-array-like ES3 strings
var IObject = require('./_iobject')
  , defined = require('./_defined');
module.exports = function(it){
  return IObject(defined(it));
};
},{"./_defined":16,"./_iobject":28}],58:[function(require,module,exports){
// 7.1.15 ToLength
var toInteger = require('./_to-integer')
  , min       = Math.min;
module.exports = function(it){
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};
},{"./_to-integer":56}],59:[function(require,module,exports){
// 7.1.13 ToObject(argument)
var defined = require('./_defined');
module.exports = function(it){
  return Object(defined(it));
};
},{"./_defined":16}],60:[function(require,module,exports){
// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = require('./_is-object');
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function(it, S){
  if(!isObject(it))return it;
  var fn, val;
  if(S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it)))return val;
  if(typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it)))return val;
  if(!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it)))return val;
  throw TypeError("Can't convert object to primitive value");
};
},{"./_is-object":30}],61:[function(require,module,exports){
var id = 0
  , px = Math.random();
module.exports = function(key){
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};
},{}],62:[function(require,module,exports){
var global         = require('./_global')
  , core           = require('./_core')
  , LIBRARY        = require('./_library')
  , wksExt         = require('./_wks-ext')
  , defineProperty = require('./_object-dp').f;
module.exports = function(name){
  var $Symbol = core.Symbol || (core.Symbol = LIBRARY ? {} : global.Symbol || {});
  if(name.charAt(0) != '_' && !(name in $Symbol))defineProperty($Symbol, name, {value: wksExt.f(name)});
};
},{"./_core":14,"./_global":23,"./_library":36,"./_object-dp":39,"./_wks-ext":63}],63:[function(require,module,exports){
exports.f = require('./_wks');
},{"./_wks":64}],64:[function(require,module,exports){
var store      = require('./_shared')('wks')
  , uid        = require('./_uid')
  , Symbol     = require('./_global').Symbol
  , USE_SYMBOL = typeof Symbol == 'function';

var $exports = module.exports = function(name){
  return store[name] || (store[name] =
    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
};

$exports.store = store;
},{"./_global":23,"./_shared":53,"./_uid":61}],65:[function(require,module,exports){
var classof   = require('./_classof')
  , ITERATOR  = require('./_wks')('iterator')
  , Iterators = require('./_iterators');
module.exports = require('./_core').getIteratorMethod = function(it){
  if(it != undefined)return it[ITERATOR]
    || it['@@iterator']
    || Iterators[classof(it)];
};
},{"./_classof":12,"./_core":14,"./_iterators":34,"./_wks":64}],66:[function(require,module,exports){
var anObject = require('./_an-object')
  , get      = require('./core.get-iterator-method');
module.exports = require('./_core').getIterator = function(it){
  var iterFn = get(it);
  if(typeof iterFn != 'function')throw TypeError(it + ' is not iterable!');
  return anObject(iterFn.call(it));
};
},{"./_an-object":10,"./_core":14,"./core.get-iterator-method":65}],67:[function(require,module,exports){
'use strict';
var addToUnscopables = require('./_add-to-unscopables')
  , step             = require('./_iter-step')
  , Iterators        = require('./_iterators')
  , toIObject        = require('./_to-iobject');

// 22.1.3.4 Array.prototype.entries()
// 22.1.3.13 Array.prototype.keys()
// 22.1.3.29 Array.prototype.values()
// 22.1.3.30 Array.prototype[@@iterator]()
module.exports = require('./_iter-define')(Array, 'Array', function(iterated, kind){
  this._t = toIObject(iterated); // target
  this._i = 0;                   // next index
  this._k = kind;                // kind
// 22.1.5.2.1 %ArrayIteratorPrototype%.next()
}, function(){
  var O     = this._t
    , kind  = this._k
    , index = this._i++;
  if(!O || index >= O.length){
    this._t = undefined;
    return step(1);
  }
  if(kind == 'keys'  )return step(0, index);
  if(kind == 'values')return step(0, O[index]);
  return step(0, [index, O[index]]);
}, 'values');

// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
Iterators.Arguments = Iterators.Array;

addToUnscopables('keys');
addToUnscopables('values');
addToUnscopables('entries');
},{"./_add-to-unscopables":9,"./_iter-define":32,"./_iter-step":33,"./_iterators":34,"./_to-iobject":57}],68:[function(require,module,exports){

},{}],69:[function(require,module,exports){
'use strict';
var $at  = require('./_string-at')(true);

// 21.1.3.27 String.prototype[@@iterator]()
require('./_iter-define')(String, 'String', function(iterated){
  this._t = String(iterated); // target
  this._i = 0;                // next index
// 21.1.5.2.1 %StringIteratorPrototype%.next()
}, function(){
  var O     = this._t
    , index = this._i
    , point;
  if(index >= O.length)return {value: undefined, done: true};
  point = $at(O, index);
  this._i += point.length;
  return {value: point, done: false};
});
},{"./_iter-define":32,"./_string-at":54}],70:[function(require,module,exports){
'use strict';
// ECMAScript 6 symbols shim
var global         = require('./_global')
  , has            = require('./_has')
  , DESCRIPTORS    = require('./_descriptors')
  , $export        = require('./_export')
  , redefine       = require('./_redefine')
  , META           = require('./_meta').KEY
  , $fails         = require('./_fails')
  , shared         = require('./_shared')
  , setToStringTag = require('./_set-to-string-tag')
  , uid            = require('./_uid')
  , wks            = require('./_wks')
  , wksExt         = require('./_wks-ext')
  , wksDefine      = require('./_wks-define')
  , keyOf          = require('./_keyof')
  , enumKeys       = require('./_enum-keys')
  , isArray        = require('./_is-array')
  , anObject       = require('./_an-object')
  , toIObject      = require('./_to-iobject')
  , toPrimitive    = require('./_to-primitive')
  , createDesc     = require('./_property-desc')
  , _create        = require('./_object-create')
  , gOPNExt        = require('./_object-gopn-ext')
  , $GOPD          = require('./_object-gopd')
  , $DP            = require('./_object-dp')
  , $keys          = require('./_object-keys')
  , gOPD           = $GOPD.f
  , dP             = $DP.f
  , gOPN           = gOPNExt.f
  , $Symbol        = global.Symbol
  , $JSON          = global.JSON
  , _stringify     = $JSON && $JSON.stringify
  , PROTOTYPE      = 'prototype'
  , HIDDEN         = wks('_hidden')
  , TO_PRIMITIVE   = wks('toPrimitive')
  , isEnum         = {}.propertyIsEnumerable
  , SymbolRegistry = shared('symbol-registry')
  , AllSymbols     = shared('symbols')
  , OPSymbols      = shared('op-symbols')
  , ObjectProto    = Object[PROTOTYPE]
  , USE_NATIVE     = typeof $Symbol == 'function'
  , QObject        = global.QObject;
// Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173
var setter = !QObject || !QObject[PROTOTYPE] || !QObject[PROTOTYPE].findChild;

// fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
var setSymbolDesc = DESCRIPTORS && $fails(function(){
  return _create(dP({}, 'a', {
    get: function(){ return dP(this, 'a', {value: 7}).a; }
  })).a != 7;
}) ? function(it, key, D){
  var protoDesc = gOPD(ObjectProto, key);
  if(protoDesc)delete ObjectProto[key];
  dP(it, key, D);
  if(protoDesc && it !== ObjectProto)dP(ObjectProto, key, protoDesc);
} : dP;

var wrap = function(tag){
  var sym = AllSymbols[tag] = _create($Symbol[PROTOTYPE]);
  sym._k = tag;
  return sym;
};

var isSymbol = USE_NATIVE && typeof $Symbol.iterator == 'symbol' ? function(it){
  return typeof it == 'symbol';
} : function(it){
  return it instanceof $Symbol;
};

var $defineProperty = function defineProperty(it, key, D){
  if(it === ObjectProto)$defineProperty(OPSymbols, key, D);
  anObject(it);
  key = toPrimitive(key, true);
  anObject(D);
  if(has(AllSymbols, key)){
    if(!D.enumerable){
      if(!has(it, HIDDEN))dP(it, HIDDEN, createDesc(1, {}));
      it[HIDDEN][key] = true;
    } else {
      if(has(it, HIDDEN) && it[HIDDEN][key])it[HIDDEN][key] = false;
      D = _create(D, {enumerable: createDesc(0, false)});
    } return setSymbolDesc(it, key, D);
  } return dP(it, key, D);
};
var $defineProperties = function defineProperties(it, P){
  anObject(it);
  var keys = enumKeys(P = toIObject(P))
    , i    = 0
    , l = keys.length
    , key;
  while(l > i)$defineProperty(it, key = keys[i++], P[key]);
  return it;
};
var $create = function create(it, P){
  return P === undefined ? _create(it) : $defineProperties(_create(it), P);
};
var $propertyIsEnumerable = function propertyIsEnumerable(key){
  var E = isEnum.call(this, key = toPrimitive(key, true));
  if(this === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key))return false;
  return E || !has(this, key) || !has(AllSymbols, key) || has(this, HIDDEN) && this[HIDDEN][key] ? E : true;
};
var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(it, key){
  it  = toIObject(it);
  key = toPrimitive(key, true);
  if(it === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key))return;
  var D = gOPD(it, key);
  if(D && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key]))D.enumerable = true;
  return D;
};
var $getOwnPropertyNames = function getOwnPropertyNames(it){
  var names  = gOPN(toIObject(it))
    , result = []
    , i      = 0
    , key;
  while(names.length > i){
    if(!has(AllSymbols, key = names[i++]) && key != HIDDEN && key != META)result.push(key);
  } return result;
};
var $getOwnPropertySymbols = function getOwnPropertySymbols(it){
  var IS_OP  = it === ObjectProto
    , names  = gOPN(IS_OP ? OPSymbols : toIObject(it))
    , result = []
    , i      = 0
    , key;
  while(names.length > i){
    if(has(AllSymbols, key = names[i++]) && (IS_OP ? has(ObjectProto, key) : true))result.push(AllSymbols[key]);
  } return result;
};

// 19.4.1.1 Symbol([description])
if(!USE_NATIVE){
  $Symbol = function Symbol(){
    if(this instanceof $Symbol)throw TypeError('Symbol is not a constructor!');
    var tag = uid(arguments.length > 0 ? arguments[0] : undefined);
    var $set = function(value){
      if(this === ObjectProto)$set.call(OPSymbols, value);
      if(has(this, HIDDEN) && has(this[HIDDEN], tag))this[HIDDEN][tag] = false;
      setSymbolDesc(this, tag, createDesc(1, value));
    };
    if(DESCRIPTORS && setter)setSymbolDesc(ObjectProto, tag, {configurable: true, set: $set});
    return wrap(tag);
  };
  redefine($Symbol[PROTOTYPE], 'toString', function toString(){
    return this._k;
  });

  $GOPD.f = $getOwnPropertyDescriptor;
  $DP.f   = $defineProperty;
  require('./_object-gopn').f = gOPNExt.f = $getOwnPropertyNames;
  require('./_object-pie').f  = $propertyIsEnumerable;
  require('./_object-gops').f = $getOwnPropertySymbols;

  if(DESCRIPTORS && !require('./_library')){
    redefine(ObjectProto, 'propertyIsEnumerable', $propertyIsEnumerable, true);
  }

  wksExt.f = function(name){
    return wrap(wks(name));
  }
}

$export($export.G + $export.W + $export.F * !USE_NATIVE, {Symbol: $Symbol});

for(var symbols = (
  // 19.4.2.2, 19.4.2.3, 19.4.2.4, 19.4.2.6, 19.4.2.8, 19.4.2.9, 19.4.2.10, 19.4.2.11, 19.4.2.12, 19.4.2.13, 19.4.2.14
  'hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables'
).split(','), i = 0; symbols.length > i; )wks(symbols[i++]);

for(var symbols = $keys(wks.store), i = 0; symbols.length > i; )wksDefine(symbols[i++]);

$export($export.S + $export.F * !USE_NATIVE, 'Symbol', {
  // 19.4.2.1 Symbol.for(key)
  'for': function(key){
    return has(SymbolRegistry, key += '')
      ? SymbolRegistry[key]
      : SymbolRegistry[key] = $Symbol(key);
  },
  // 19.4.2.5 Symbol.keyFor(sym)
  keyFor: function keyFor(key){
    if(isSymbol(key))return keyOf(SymbolRegistry, key);
    throw TypeError(key + ' is not a symbol!');
  },
  useSetter: function(){ setter = true; },
  useSimple: function(){ setter = false; }
});

$export($export.S + $export.F * !USE_NATIVE, 'Object', {
  // 19.1.2.2 Object.create(O [, Properties])
  create: $create,
  // 19.1.2.4 Object.defineProperty(O, P, Attributes)
  defineProperty: $defineProperty,
  // 19.1.2.3 Object.defineProperties(O, Properties)
  defineProperties: $defineProperties,
  // 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
  getOwnPropertyDescriptor: $getOwnPropertyDescriptor,
  // 19.1.2.7 Object.getOwnPropertyNames(O)
  getOwnPropertyNames: $getOwnPropertyNames,
  // 19.1.2.8 Object.getOwnPropertySymbols(O)
  getOwnPropertySymbols: $getOwnPropertySymbols
});

// 24.3.2 JSON.stringify(value [, replacer [, space]])
$JSON && $export($export.S + $export.F * (!USE_NATIVE || $fails(function(){
  var S = $Symbol();
  // MS Edge converts symbol values to JSON as {}
  // WebKit converts symbol values to JSON as null
  // V8 throws on boxed symbols
  return _stringify([S]) != '[null]' || _stringify({a: S}) != '{}' || _stringify(Object(S)) != '{}';
})), 'JSON', {
  stringify: function stringify(it){
    if(it === undefined || isSymbol(it))return; // IE8 returns string on undefined
    var args = [it]
      , i    = 1
      , replacer, $replacer;
    while(arguments.length > i)args.push(arguments[i++]);
    replacer = args[1];
    if(typeof replacer == 'function')$replacer = replacer;
    if($replacer || !isArray(replacer))replacer = function(key, value){
      if($replacer)value = $replacer.call(this, key, value);
      if(!isSymbol(value))return value;
    };
    args[1] = replacer;
    return _stringify.apply($JSON, args);
  }
});

// 19.4.3.4 Symbol.prototype[@@toPrimitive](hint)
$Symbol[PROTOTYPE][TO_PRIMITIVE] || require('./_hide')($Symbol[PROTOTYPE], TO_PRIMITIVE, $Symbol[PROTOTYPE].valueOf);
// 19.4.3.5 Symbol.prototype[@@toStringTag]
setToStringTag($Symbol, 'Symbol');
// 20.2.1.9 Math[@@toStringTag]
setToStringTag(Math, 'Math', true);
// 24.3.3 JSON[@@toStringTag]
setToStringTag(global.JSON, 'JSON', true);
},{"./_an-object":10,"./_descriptors":17,"./_enum-keys":20,"./_export":21,"./_fails":22,"./_global":23,"./_has":24,"./_hide":25,"./_is-array":29,"./_keyof":35,"./_library":36,"./_meta":37,"./_object-create":38,"./_object-dp":39,"./_object-gopd":41,"./_object-gopn":43,"./_object-gopn-ext":42,"./_object-gops":44,"./_object-keys":47,"./_object-pie":48,"./_property-desc":49,"./_redefine":50,"./_set-to-string-tag":51,"./_shared":53,"./_to-iobject":57,"./_to-primitive":60,"./_uid":61,"./_wks":64,"./_wks-define":62,"./_wks-ext":63}],71:[function(require,module,exports){
require('./_wks-define')('asyncIterator');
},{"./_wks-define":62}],72:[function(require,module,exports){
require('./_wks-define')('observable');
},{"./_wks-define":62}],73:[function(require,module,exports){
require('./es6.array.iterator');
var global        = require('./_global')
  , hide          = require('./_hide')
  , Iterators     = require('./_iterators')
  , TO_STRING_TAG = require('./_wks')('toStringTag');

for(var collections = ['NodeList', 'DOMTokenList', 'MediaList', 'StyleSheetList', 'CSSRuleList'], i = 0; i < 5; i++){
  var NAME       = collections[i]
    , Collection = global[NAME]
    , proto      = Collection && Collection.prototype;
  if(proto && !proto[TO_STRING_TAG])hide(proto, TO_STRING_TAG, NAME);
  Iterators[NAME] = Iterators.Array;
}
},{"./_global":23,"./_hide":25,"./_iterators":34,"./_wks":64,"./es6.array.iterator":67}],74:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * Indicates that navigation was caused by a call to history.push.
 */
var PUSH = exports.PUSH = 'PUSH';

/**
 * Indicates that navigation was caused by a call to history.replace.
 */
var REPLACE = exports.REPLACE = 'REPLACE';

/**
 * Indicates that navigation was caused by some other action such
 * as using a browser's back/forward buttons and/or manually manipulating
 * the URL in a browser's location bar. This is the default.
 *
 * See https://developer.mozilla.org/en-US/docs/Web/API/WindowEventHandlers/onpopstate
 * for more information.
 */
var POP = exports.POP = 'POP';
},{}],75:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var loopAsync = exports.loopAsync = function loopAsync(turns, work, callback) {
  var currentTurn = 0,
      isDone = false;
  var isSync = false,
      hasNext = false,
      doneArgs = void 0;

  var done = function done() {
    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    isDone = true;

    if (isSync) {
      // Iterate instead of recursing if possible.
      doneArgs = args;
      return;
    }

    callback.apply(undefined, args);
  };

  var next = function next() {
    if (isDone) return;

    hasNext = true;

    if (isSync) return; // Iterate instead of recursing if possible.

    isSync = true;

    while (!isDone && currentTurn < turns && hasNext) {
      hasNext = false;
      work(currentTurn++, next, done);
    }

    isSync = false;

    if (isDone) {
      // This means the loop finished synchronously.
      callback.apply(undefined, _toConsumableArray(doneArgs));
      return;
    }

    if (currentTurn >= turns && hasNext) {
      isDone = true;
      callback();
    }
  };

  next();
};
},{}],76:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.go = exports.replaceLocation = exports.pushLocation = exports.startListener = exports.getUserConfirmation = exports.getCurrentLocation = undefined;

var _LocationUtils = require('./LocationUtils');

var _DOMUtils = require('./DOMUtils');

var _DOMStateStorage = require('./DOMStateStorage');

var _PathUtils = require('./PathUtils');

/* eslint-disable no-alert */


var PopStateEvent = 'popstate';

var _createLocation = function _createLocation(historyState) {
  var key = historyState && historyState.key;

  return (0, _LocationUtils.createLocation)({
    pathname: window.location.pathname,
    search: window.location.search,
    hash: window.location.hash,
    state: key ? (0, _DOMStateStorage.readState)(key) : undefined
  }, undefined, key);
};

var getCurrentLocation = exports.getCurrentLocation = function getCurrentLocation() {
  var historyState = void 0;
  try {
    historyState = window.history.state || {};
  } catch (error) {
    // IE 11 sometimes throws when accessing window.history.state
    // See https://github.com/mjackson/history/pull/289
    historyState = {};
  }

  return _createLocation(historyState);
};

var getUserConfirmation = exports.getUserConfirmation = function getUserConfirmation(message, callback) {
  return callback(window.confirm(message));
};

var startListener = exports.startListener = function startListener(listener) {
  var handlePopState = function handlePopState(event) {
    if (event.state !== undefined) // Ignore extraneous popstate events in WebKit
      listener(_createLocation(event.state));
  };

  (0, _DOMUtils.addEventListener)(window, PopStateEvent, handlePopState);

  return function () {
    return (0, _DOMUtils.removeEventListener)(window, PopStateEvent, handlePopState);
  };
};

var updateLocation = function updateLocation(location, updateState) {
  var state = location.state;
  var key = location.key;


  if (state !== undefined) (0, _DOMStateStorage.saveState)(key, state);

  updateState({ key: key }, (0, _PathUtils.createPath)(location));
};

var pushLocation = exports.pushLocation = function pushLocation(location) {
  return updateLocation(location, function (state, path) {
    return window.history.pushState(state, null, path);
  });
};

var replaceLocation = exports.replaceLocation = function replaceLocation(location) {
  return updateLocation(location, function (state, path) {
    return window.history.replaceState(state, null, path);
  });
};

var go = exports.go = function go(n) {
  if (n) window.history.go(n);
};
},{"./DOMStateStorage":77,"./DOMUtils":78,"./LocationUtils":81,"./PathUtils":82}],77:[function(require,module,exports){
(function (process){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.readState = exports.saveState = undefined;

var _warning = require('warning');

var _warning2 = _interopRequireDefault(_warning);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var QuotaExceededErrors = ['QuotaExceededError', 'QUOTA_EXCEEDED_ERR']; /* eslint-disable no-empty */


var SecurityError = 'SecurityError';
var KeyPrefix = '@@History/';

var createKey = function createKey(key) {
  return KeyPrefix + key;
};

var saveState = exports.saveState = function saveState(key, state) {
  if (!window.sessionStorage) {
    // Session storage is not available or hidden.
    // sessionStorage is undefined in Internet Explorer when served via file protocol.
    process.env.NODE_ENV !== 'production' ? (0, _warning2.default)(false, '[history] Unable to save state; sessionStorage is not available') : void 0;
    return;
  }

  try {
    if (state == null) {
      window.sessionStorage.removeItem(createKey(key));
    } else {
      window.sessionStorage.setItem(createKey(key), JSON.stringify(state));
    }
  } catch (error) {
    if (error.name === SecurityError) {
      // Blocking cookies in Chrome/Firefox/Safari throws SecurityError on any
      // attempt to access window.sessionStorage.
      process.env.NODE_ENV !== 'production' ? (0, _warning2.default)(false, '[history] Unable to save state; sessionStorage is not available due to security settings') : void 0;

      return;
    }

    if (QuotaExceededErrors.indexOf(error.name) >= 0 && window.sessionStorage.length === 0) {
      // Safari "private mode" throws QuotaExceededError.
      process.env.NODE_ENV !== 'production' ? (0, _warning2.default)(false, '[history] Unable to save state; sessionStorage is not available in Safari private mode') : void 0;

      return;
    }

    throw error;
  }
};

var readState = exports.readState = function readState(key) {
  var json = void 0;
  try {
    json = window.sessionStorage.getItem(createKey(key));
  } catch (error) {
    if (error.name === SecurityError) {
      // Blocking cookies in Chrome/Firefox/Safari throws SecurityError on any
      // attempt to access window.sessionStorage.
      process.env.NODE_ENV !== 'production' ? (0, _warning2.default)(false, '[history] Unable to read state; sessionStorage is not available due to security settings') : void 0;

      return undefined;
    }
  }

  if (json) {
    try {
      return JSON.parse(json);
    } catch (error) {
      // Ignore invalid JSON.
    }
  }

  return undefined;
};
}).call(this,require('_process'))

},{"_process":103,"warning":102}],78:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var addEventListener = exports.addEventListener = function addEventListener(node, event, listener) {
  return node.addEventListener ? node.addEventListener(event, listener, false) : node.attachEvent('on' + event, listener);
};

var removeEventListener = exports.removeEventListener = function removeEventListener(node, event, listener) {
  return node.removeEventListener ? node.removeEventListener(event, listener, false) : node.detachEvent('on' + event, listener);
};

/**
 * Returns true if the HTML5 history API is supported. Taken from Modernizr.
 *
 * https://github.com/Modernizr/Modernizr/blob/master/LICENSE
 * https://github.com/Modernizr/Modernizr/blob/master/feature-detects/history.js
 * changed to avoid false negatives for Windows Phones: https://github.com/reactjs/react-router/issues/586
 */
var supportsHistory = exports.supportsHistory = function supportsHistory() {
  var ua = window.navigator.userAgent;

  if ((ua.indexOf('Android 2.') !== -1 || ua.indexOf('Android 4.0') !== -1) && ua.indexOf('Mobile Safari') !== -1 && ua.indexOf('Chrome') === -1 && ua.indexOf('Windows Phone') === -1) return false;

  return window.history && 'pushState' in window.history;
};

/**
 * Returns false if using go(n) with hash history causes a full page reload.
 */
var supportsGoWithoutReloadUsingHash = exports.supportsGoWithoutReloadUsingHash = function supportsGoWithoutReloadUsingHash() {
  return window.navigator.userAgent.indexOf('Firefox') === -1;
};
},{}],79:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var canUseDOM = exports.canUseDOM = !!(typeof window !== 'undefined' && window.document && window.document.createElement);
},{}],80:[function(require,module,exports){
(function (process){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.replaceLocation = exports.pushLocation = exports.startListener = exports.getCurrentLocation = exports.go = exports.getUserConfirmation = undefined;

var _BrowserProtocol = require('./BrowserProtocol');

Object.defineProperty(exports, 'getUserConfirmation', {
  enumerable: true,
  get: function get() {
    return _BrowserProtocol.getUserConfirmation;
  }
});
Object.defineProperty(exports, 'go', {
  enumerable: true,
  get: function get() {
    return _BrowserProtocol.go;
  }
});

var _warning = require('warning');

var _warning2 = _interopRequireDefault(_warning);

var _LocationUtils = require('./LocationUtils');

var _DOMUtils = require('./DOMUtils');

var _DOMStateStorage = require('./DOMStateStorage');

var _PathUtils = require('./PathUtils');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var HashChangeEvent = 'hashchange';

var getHashPath = function getHashPath() {
  // We can't use window.location.hash here because it's not
  // consistent across browsers - Firefox will pre-decode it!
  var href = window.location.href;
  var index = href.indexOf('#');
  return index === -1 ? '' : href.substring(index + 1);
};

var pushHashPath = function pushHashPath(path) {
  return window.location.hash = path;
};

var replaceHashPath = function replaceHashPath(path) {
  var i = window.location.href.indexOf('#');

  window.location.replace(window.location.href.slice(0, i >= 0 ? i : 0) + '#' + path);
};

var ensureSlash = function ensureSlash() {
  var path = getHashPath();

  if ((0, _PathUtils.isAbsolutePath)(path)) return true;

  replaceHashPath('/' + path);

  return false;
};

var getCurrentLocation = exports.getCurrentLocation = function getCurrentLocation(queryKey) {
  var path = getHashPath();
  var key = (0, _PathUtils.getQueryStringValueFromPath)(path, queryKey);

  var state = void 0;
  if (key) {
    path = (0, _PathUtils.stripQueryStringValueFromPath)(path, queryKey);
    state = (0, _DOMStateStorage.readState)(key);
  }

  var init = (0, _PathUtils.parsePath)(path);
  init.state = state;

  return (0, _LocationUtils.createLocation)(init, undefined, key);
};

var prevLocation = void 0;

var startListener = exports.startListener = function startListener(listener, queryKey) {
  var handleHashChange = function handleHashChange() {
    if (!ensureSlash()) return; // Hash path must always begin with a /

    var currentLocation = getCurrentLocation(queryKey);

    if (prevLocation && currentLocation.key && prevLocation.key === currentLocation.key) return; // Ignore extraneous hashchange events

    prevLocation = currentLocation;

    listener(currentLocation);
  };

  ensureSlash();
  (0, _DOMUtils.addEventListener)(window, HashChangeEvent, handleHashChange);

  return function () {
    return (0, _DOMUtils.removeEventListener)(window, HashChangeEvent, handleHashChange);
  };
};

var updateLocation = function updateLocation(location, queryKey, updateHash) {
  var state = location.state;
  var key = location.key;

  var path = (0, _PathUtils.createPath)(location);

  if (state !== undefined) {
    path = (0, _PathUtils.addQueryStringValueToPath)(path, queryKey, key);
    (0, _DOMStateStorage.saveState)(key, state);
  }

  prevLocation = location;

  updateHash(path);
};

var pushLocation = exports.pushLocation = function pushLocation(location, queryKey) {
  return updateLocation(location, queryKey, function (path) {
    if (getHashPath() !== path) {
      pushHashPath(path);
    } else {
      process.env.NODE_ENV !== 'production' ? (0, _warning2.default)(false, 'You cannot PUSH the same path using hash history') : void 0;
    }
  });
};

var replaceLocation = exports.replaceLocation = function replaceLocation(location, queryKey) {
  return updateLocation(location, queryKey, function (path) {
    if (getHashPath() !== path) replaceHashPath(path);
  });
};
}).call(this,require('_process'))

},{"./BrowserProtocol":76,"./DOMStateStorage":77,"./DOMUtils":78,"./LocationUtils":81,"./PathUtils":82,"_process":103,"warning":102}],81:[function(require,module,exports){
(function (process){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.locationsAreEqual = exports.statesAreEqual = exports.createLocation = exports.createQuery = undefined;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _invariant = require('invariant');

var _invariant2 = _interopRequireDefault(_invariant);

var _PathUtils = require('./PathUtils');

var _Actions = require('./Actions');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var createQuery = exports.createQuery = function createQuery(props) {
  return _extends(Object.create(null), props);
};

var createLocation = exports.createLocation = function createLocation() {
  var input = arguments.length <= 0 || arguments[0] === undefined ? '/' : arguments[0];
  var action = arguments.length <= 1 || arguments[1] === undefined ? _Actions.POP : arguments[1];
  var key = arguments.length <= 2 || arguments[2] === undefined ? null : arguments[2];

  var object = typeof input === 'string' ? (0, _PathUtils.parsePath)(input) : input;

  var pathname = object.pathname || '/';
  var search = object.search || '';
  var hash = object.hash || '';
  var state = object.state;

  return {
    pathname: pathname,
    search: search,
    hash: hash,
    state: state,
    action: action,
    key: key
  };
};

var isDate = function isDate(object) {
  return Object.prototype.toString.call(object) === '[object Date]';
};

var statesAreEqual = exports.statesAreEqual = function statesAreEqual(a, b) {
  if (a === b) return true;

  var typeofA = typeof a === 'undefined' ? 'undefined' : _typeof(a);
  var typeofB = typeof b === 'undefined' ? 'undefined' : _typeof(b);

  if (typeofA !== typeofB) return false;

  !(typeofA !== 'function') ? process.env.NODE_ENV !== 'production' ? (0, _invariant2.default)(false, 'You must not store functions in location state') : (0, _invariant2.default)(false) : void 0;

  // Not the same object, but same type.
  if (typeofA === 'object') {
    !!(isDate(a) && isDate(b)) ? process.env.NODE_ENV !== 'production' ? (0, _invariant2.default)(false, 'You must not store Date objects in location state') : (0, _invariant2.default)(false) : void 0;

    if (!Array.isArray(a)) return Object.keys(a).every(function (key) {
      return statesAreEqual(a[key], b[key]);
    });

    return Array.isArray(b) && a.length === b.length && a.every(function (item, index) {
      return statesAreEqual(item, b[index]);
    });
  }

  // All other serializable types (string, number, boolean)
  // should be strict equal.
  return false;
};

var locationsAreEqual = exports.locationsAreEqual = function locationsAreEqual(a, b) {
  return a.key === b.key &&
  // a.action === b.action && // Different action !== location change.
  a.pathname === b.pathname && a.search === b.search && a.hash === b.hash && statesAreEqual(a.state, b.state);
};
}).call(this,require('_process'))

},{"./Actions":74,"./PathUtils":82,"_process":103,"invariant":93}],82:[function(require,module,exports){
(function (process){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createPath = exports.parsePath = exports.getQueryStringValueFromPath = exports.stripQueryStringValueFromPath = exports.addQueryStringValueToPath = exports.isAbsolutePath = undefined;

var _warning = require('warning');

var _warning2 = _interopRequireDefault(_warning);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var isAbsolutePath = exports.isAbsolutePath = function isAbsolutePath(path) {
  return typeof path === 'string' && path.charAt(0) === '/';
};

var addQueryStringValueToPath = exports.addQueryStringValueToPath = function addQueryStringValueToPath(path, key, value) {
  var _parsePath = parsePath(path);

  var pathname = _parsePath.pathname;
  var search = _parsePath.search;
  var hash = _parsePath.hash;


  return createPath({
    pathname: pathname,
    search: search + (search.indexOf('?') === -1 ? '?' : '&') + key + '=' + value,
    hash: hash
  });
};

var stripQueryStringValueFromPath = exports.stripQueryStringValueFromPath = function stripQueryStringValueFromPath(path, key) {
  var _parsePath2 = parsePath(path);

  var pathname = _parsePath2.pathname;
  var search = _parsePath2.search;
  var hash = _parsePath2.hash;


  return createPath({
    pathname: pathname,
    search: search.replace(new RegExp('([?&])' + key + '=[a-zA-Z0-9]+(&?)'), function (match, prefix, suffix) {
      return prefix === '?' ? prefix : suffix;
    }),
    hash: hash
  });
};

var getQueryStringValueFromPath = exports.getQueryStringValueFromPath = function getQueryStringValueFromPath(path, key) {
  var _parsePath3 = parsePath(path);

  var search = _parsePath3.search;

  var match = search.match(new RegExp('[?&]' + key + '=([a-zA-Z0-9]+)'));
  return match && match[1];
};

var extractPath = function extractPath(string) {
  var match = string.match(/^(https?:)?\/\/[^\/]*/);
  return match == null ? string : string.substring(match[0].length);
};

var parsePath = exports.parsePath = function parsePath(path) {
  var pathname = extractPath(path);
  var search = '';
  var hash = '';

  process.env.NODE_ENV !== 'production' ? (0, _warning2.default)(path === pathname, 'A path must be pathname + search + hash only, not a full URL like "%s"', path) : void 0;

  var hashIndex = pathname.indexOf('#');
  if (hashIndex !== -1) {
    hash = pathname.substring(hashIndex);
    pathname = pathname.substring(0, hashIndex);
  }

  var searchIndex = pathname.indexOf('?');
  if (searchIndex !== -1) {
    search = pathname.substring(searchIndex);
    pathname = pathname.substring(0, searchIndex);
  }

  if (pathname === '') pathname = '/';

  return {
    pathname: pathname,
    search: search,
    hash: hash
  };
};

var createPath = exports.createPath = function createPath(location) {
  if (location == null || typeof location === 'string') return location;

  var basename = location.basename;
  var pathname = location.pathname;
  var search = location.search;
  var hash = location.hash;

  var path = (basename || '') + pathname;

  if (search && search !== '?') path += search;

  if (hash) path += hash;

  return path;
};
}).call(this,require('_process'))

},{"_process":103,"warning":102}],83:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.replaceLocation = exports.pushLocation = exports.getCurrentLocation = exports.go = exports.getUserConfirmation = undefined;

var _BrowserProtocol = require('./BrowserProtocol');

Object.defineProperty(exports, 'getUserConfirmation', {
  enumerable: true,
  get: function get() {
    return _BrowserProtocol.getUserConfirmation;
  }
});
Object.defineProperty(exports, 'go', {
  enumerable: true,
  get: function get() {
    return _BrowserProtocol.go;
  }
});

var _LocationUtils = require('./LocationUtils');

var _PathUtils = require('./PathUtils');

var getCurrentLocation = exports.getCurrentLocation = function getCurrentLocation() {
  return (0, _LocationUtils.createLocation)(window.location);
};

var pushLocation = exports.pushLocation = function pushLocation(location) {
  window.location.href = (0, _PathUtils.createPath)(location);
  return false; // Don't update location
};

var replaceLocation = exports.replaceLocation = function replaceLocation(location) {
  window.location.replace((0, _PathUtils.createPath)(location));
  return false; // Don't update location
};
},{"./BrowserProtocol":76,"./LocationUtils":81,"./PathUtils":82}],84:[function(require,module,exports){
(function (process){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _invariant = require('invariant');

var _invariant2 = _interopRequireDefault(_invariant);

var _ExecutionEnvironment = require('./ExecutionEnvironment');

var _BrowserProtocol = require('./BrowserProtocol');

var BrowserProtocol = _interopRequireWildcard(_BrowserProtocol);

var _RefreshProtocol = require('./RefreshProtocol');

var RefreshProtocol = _interopRequireWildcard(_RefreshProtocol);

var _DOMUtils = require('./DOMUtils');

var _createHistory = require('./createHistory');

var _createHistory2 = _interopRequireDefault(_createHistory);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Creates and returns a history object that uses HTML5's history API
 * (pushState, replaceState, and the popstate event) to manage history.
 * This is the recommended method of managing history in browsers because
 * it provides the cleanest URLs.
 *
 * Note: In browsers that do not support the HTML5 history API full
 * page reloads will be used to preserve clean URLs. You can force this
 * behavior using { forceRefresh: true } in options.
 */
var createBrowserHistory = function createBrowserHistory() {
  var options = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

  !_ExecutionEnvironment.canUseDOM ? process.env.NODE_ENV !== 'production' ? (0, _invariant2.default)(false, 'Browser history needs a DOM') : (0, _invariant2.default)(false) : void 0;

  var useRefresh = options.forceRefresh || !(0, _DOMUtils.supportsHistory)();
  var Protocol = useRefresh ? RefreshProtocol : BrowserProtocol;

  var getUserConfirmation = Protocol.getUserConfirmation;
  var getCurrentLocation = Protocol.getCurrentLocation;
  var pushLocation = Protocol.pushLocation;
  var replaceLocation = Protocol.replaceLocation;
  var go = Protocol.go;


  var history = (0, _createHistory2.default)(_extends({
    getUserConfirmation: getUserConfirmation }, options, {
    getCurrentLocation: getCurrentLocation,
    pushLocation: pushLocation,
    replaceLocation: replaceLocation,
    go: go
  }));

  var listenerCount = 0,
      stopListener = void 0;

  var startListener = function startListener(listener, before) {
    if (++listenerCount === 1) stopListener = BrowserProtocol.startListener(history.transitionTo);

    var unlisten = before ? history.listenBefore(listener) : history.listen(listener);

    return function () {
      unlisten();

      if (--listenerCount === 0) stopListener();
    };
  };

  var listenBefore = function listenBefore(listener) {
    return startListener(listener, true);
  };

  var listen = function listen(listener) {
    return startListener(listener, false);
  };

  return _extends({}, history, {
    listenBefore: listenBefore,
    listen: listen
  });
};

exports.default = createBrowserHistory;
}).call(this,require('_process'))

},{"./BrowserProtocol":76,"./DOMUtils":78,"./ExecutionEnvironment":79,"./RefreshProtocol":83,"./createHistory":86,"_process":103,"invariant":93}],85:[function(require,module,exports){
(function (process){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _warning = require('warning');

var _warning2 = _interopRequireDefault(_warning);

var _invariant = require('invariant');

var _invariant2 = _interopRequireDefault(_invariant);

var _ExecutionEnvironment = require('./ExecutionEnvironment');

var _DOMUtils = require('./DOMUtils');

var _HashProtocol = require('./HashProtocol');

var HashProtocol = _interopRequireWildcard(_HashProtocol);

var _createHistory = require('./createHistory');

var _createHistory2 = _interopRequireDefault(_createHistory);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var DefaultQueryKey = '_k';

var createHashHistory = function createHashHistory() {
  var options = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

  !_ExecutionEnvironment.canUseDOM ? process.env.NODE_ENV !== 'production' ? (0, _invariant2.default)(false, 'Hash history needs a DOM') : (0, _invariant2.default)(false) : void 0;

  var queryKey = options.queryKey;


  process.env.NODE_ENV !== 'production' ? (0, _warning2.default)(queryKey !== false, 'Using { queryKey: false } no longer works. Instead, just don\'t ' + 'use location state if you don\'t want a key in your URL query string') : void 0;

  if (typeof queryKey !== 'string') queryKey = DefaultQueryKey;

  var getUserConfirmation = HashProtocol.getUserConfirmation;


  var getCurrentLocation = function getCurrentLocation() {
    return HashProtocol.getCurrentLocation(queryKey);
  };

  var pushLocation = function pushLocation(location) {
    return HashProtocol.pushLocation(location, queryKey);
  };

  var replaceLocation = function replaceLocation(location) {
    return HashProtocol.replaceLocation(location, queryKey);
  };

  var history = (0, _createHistory2.default)(_extends({
    getUserConfirmation: getUserConfirmation }, options, {
    getCurrentLocation: getCurrentLocation,
    pushLocation: pushLocation,
    replaceLocation: replaceLocation,
    go: HashProtocol.go
  }));

  var listenerCount = 0,
      stopListener = void 0;

  var startListener = function startListener(listener, before) {
    if (++listenerCount === 1) stopListener = HashProtocol.startListener(history.transitionTo, queryKey);

    var unlisten = before ? history.listenBefore(listener) : history.listen(listener);

    return function () {
      unlisten();

      if (--listenerCount === 0) stopListener();
    };
  };

  var listenBefore = function listenBefore(listener) {
    return startListener(listener, true);
  };

  var listen = function listen(listener) {
    return startListener(listener, false);
  };

  var goIsSupportedWithoutReload = (0, _DOMUtils.supportsGoWithoutReloadUsingHash)();

  var go = function go(n) {
    process.env.NODE_ENV !== 'production' ? (0, _warning2.default)(goIsSupportedWithoutReload, 'Hash history go(n) causes a full page reload in this browser') : void 0;

    history.go(n);
  };

  var createHref = function createHref(path) {
    return '#' + history.createHref(path);
  };

  return _extends({}, history, {
    listenBefore: listenBefore,
    listen: listen,
    go: go,
    createHref: createHref
  });
};

exports.default = createHashHistory;
}).call(this,require('_process'))

},{"./DOMUtils":78,"./ExecutionEnvironment":79,"./HashProtocol":80,"./createHistory":86,"_process":103,"invariant":93,"warning":102}],86:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _AsyncUtils = require('./AsyncUtils');

var _PathUtils = require('./PathUtils');

var _runTransitionHook = require('./runTransitionHook');

var _runTransitionHook2 = _interopRequireDefault(_runTransitionHook);

var _Actions = require('./Actions');

var _LocationUtils = require('./LocationUtils');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var createHistory = function createHistory() {
  var options = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
  var getCurrentLocation = options.getCurrentLocation;
  var getUserConfirmation = options.getUserConfirmation;
  var pushLocation = options.pushLocation;
  var replaceLocation = options.replaceLocation;
  var go = options.go;
  var keyLength = options.keyLength;


  var currentLocation = void 0;
  var pendingLocation = void 0;
  var beforeListeners = [];
  var listeners = [];
  var allKeys = [];

  var getCurrentIndex = function getCurrentIndex() {
    if (pendingLocation && pendingLocation.action === _Actions.POP) return allKeys.indexOf(pendingLocation.key);

    if (currentLocation) return allKeys.indexOf(currentLocation.key);

    return -1;
  };

  var updateLocation = function updateLocation(nextLocation) {
    currentLocation = nextLocation;

    var currentIndex = getCurrentIndex();

    if (currentLocation.action === _Actions.PUSH) {
      allKeys = [].concat(_toConsumableArray(allKeys.slice(0, currentIndex + 1)), [currentLocation.key]);
    } else if (currentLocation.action === _Actions.REPLACE) {
      allKeys[currentIndex] = currentLocation.key;
    }

    listeners.forEach(function (listener) {
      return listener(currentLocation);
    });
  };

  var listenBefore = function listenBefore(listener) {
    beforeListeners.push(listener);

    return function () {
      return beforeListeners = beforeListeners.filter(function (item) {
        return item !== listener;
      });
    };
  };

  var listen = function listen(listener) {
    listeners.push(listener);

    return function () {
      return listeners = listeners.filter(function (item) {
        return item !== listener;
      });
    };
  };

  var confirmTransitionTo = function confirmTransitionTo(location, callback) {
    (0, _AsyncUtils.loopAsync)(beforeListeners.length, function (index, next, done) {
      (0, _runTransitionHook2.default)(beforeListeners[index], location, function (result) {
        return result != null ? done(result) : next();
      });
    }, function (message) {
      if (getUserConfirmation && typeof message === 'string') {
        getUserConfirmation(message, function (ok) {
          return callback(ok !== false);
        });
      } else {
        callback(message !== false);
      }
    });
  };

  var transitionTo = function transitionTo(nextLocation) {
    if (currentLocation && (0, _LocationUtils.locationsAreEqual)(currentLocation, nextLocation) || pendingLocation && (0, _LocationUtils.locationsAreEqual)(pendingLocation, nextLocation)) return; // Nothing to do

    pendingLocation = nextLocation;

    confirmTransitionTo(nextLocation, function (ok) {
      if (pendingLocation !== nextLocation) return; // Transition was interrupted during confirmation

      pendingLocation = null;

      if (ok) {
        // Treat PUSH to same path like REPLACE to be consistent with browsers
        if (nextLocation.action === _Actions.PUSH) {
          var prevPath = (0, _PathUtils.createPath)(currentLocation);
          var nextPath = (0, _PathUtils.createPath)(nextLocation);

          if (nextPath === prevPath && (0, _LocationUtils.statesAreEqual)(currentLocation.state, nextLocation.state)) nextLocation.action = _Actions.REPLACE;
        }

        if (nextLocation.action === _Actions.POP) {
          updateLocation(nextLocation);
        } else if (nextLocation.action === _Actions.PUSH) {
          if (pushLocation(nextLocation) !== false) updateLocation(nextLocation);
        } else if (nextLocation.action === _Actions.REPLACE) {
          if (replaceLocation(nextLocation) !== false) updateLocation(nextLocation);
        }
      } else if (currentLocation && nextLocation.action === _Actions.POP) {
        var prevIndex = allKeys.indexOf(currentLocation.key);
        var nextIndex = allKeys.indexOf(nextLocation.key);

        if (prevIndex !== -1 && nextIndex !== -1) go(prevIndex - nextIndex); // Restore the URL
      }
    });
  };

  var push = function push(input) {
    return transitionTo(createLocation(input, _Actions.PUSH));
  };

  var replace = function replace(input) {
    return transitionTo(createLocation(input, _Actions.REPLACE));
  };

  var goBack = function goBack() {
    return go(-1);
  };

  var goForward = function goForward() {
    return go(1);
  };

  var createKey = function createKey() {
    return Math.random().toString(36).substr(2, keyLength || 6);
  };

  var createHref = function createHref(location) {
    return (0, _PathUtils.createPath)(location);
  };

  var createLocation = function createLocation(location, action) {
    var key = arguments.length <= 2 || arguments[2] === undefined ? createKey() : arguments[2];
    return (0, _LocationUtils.createLocation)(location, action, key);
  };

  return {
    getCurrentLocation: getCurrentLocation,
    listenBefore: listenBefore,
    listen: listen,
    transitionTo: transitionTo,
    push: push,
    replace: replace,
    go: go,
    goBack: goBack,
    goForward: goForward,
    createKey: createKey,
    createPath: _PathUtils.createPath,
    createHref: createHref,
    createLocation: createLocation
  };
};

exports.default = createHistory;
},{"./Actions":74,"./AsyncUtils":75,"./LocationUtils":81,"./PathUtils":82,"./runTransitionHook":89}],87:[function(require,module,exports){
(function (process){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _warning = require('warning');

var _warning2 = _interopRequireDefault(_warning);

var _invariant = require('invariant');

var _invariant2 = _interopRequireDefault(_invariant);

var _LocationUtils = require('./LocationUtils');

var _PathUtils = require('./PathUtils');

var _createHistory = require('./createHistory');

var _createHistory2 = _interopRequireDefault(_createHistory);

var _Actions = require('./Actions');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var createStateStorage = function createStateStorage(entries) {
  return entries.filter(function (entry) {
    return entry.state;
  }).reduce(function (memo, entry) {
    memo[entry.key] = entry.state;
    return memo;
  }, {});
};

var createMemoryHistory = function createMemoryHistory() {
  var options = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

  if (Array.isArray(options)) {
    options = { entries: options };
  } else if (typeof options === 'string') {
    options = { entries: [options] };
  }

  var getCurrentLocation = function getCurrentLocation() {
    var entry = entries[current];
    var path = (0, _PathUtils.createPath)(entry);

    var key = void 0,
        state = void 0;
    if (entry.key) {
      key = entry.key;
      state = readState(key);
    }

    var init = (0, _PathUtils.parsePath)(path);

    return (0, _LocationUtils.createLocation)(_extends({}, init, { state: state }), undefined, key);
  };

  var canGo = function canGo(n) {
    var index = current + n;
    return index >= 0 && index < entries.length;
  };

  var go = function go(n) {
    if (!n) return;

    if (!canGo(n)) {
      process.env.NODE_ENV !== 'production' ? (0, _warning2.default)(false, 'Cannot go(%s) there is not enough history', n) : void 0;

      return;
    }

    current += n;
    var currentLocation = getCurrentLocation();

    // Change action to POP
    history.transitionTo(_extends({}, currentLocation, { action: _Actions.POP }));
  };

  var pushLocation = function pushLocation(location) {
    current += 1;

    if (current < entries.length) entries.splice(current);

    entries.push(location);

    saveState(location.key, location.state);
  };

  var replaceLocation = function replaceLocation(location) {
    entries[current] = location;
    saveState(location.key, location.state);
  };

  var history = (0, _createHistory2.default)(_extends({}, options, {
    getCurrentLocation: getCurrentLocation,
    pushLocation: pushLocation,
    replaceLocation: replaceLocation,
    go: go
  }));

  var _options = options;
  var entries = _options.entries;
  var current = _options.current;


  if (typeof entries === 'string') {
    entries = [entries];
  } else if (!Array.isArray(entries)) {
    entries = ['/'];
  }

  entries = entries.map(function (entry) {
    return (0, _LocationUtils.createLocation)(entry);
  });

  if (current == null) {
    current = entries.length - 1;
  } else {
    !(current >= 0 && current < entries.length) ? process.env.NODE_ENV !== 'production' ? (0, _invariant2.default)(false, 'Current index must be >= 0 and < %s, was %s', entries.length, current) : (0, _invariant2.default)(false) : void 0;
  }

  var storage = createStateStorage(entries);

  var saveState = function saveState(key, state) {
    return storage[key] = state;
  };

  var readState = function readState(key) {
    return storage[key];
  };

  return history;
};

exports.default = createMemoryHistory;
}).call(this,require('_process'))

},{"./Actions":74,"./LocationUtils":81,"./PathUtils":82,"./createHistory":86,"_process":103,"invariant":93,"warning":102}],88:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.locationsAreEqual = exports.Actions = exports.useQueries = exports.useBeforeUnload = exports.useBasename = exports.createMemoryHistory = exports.createHashHistory = exports.createHistory = undefined;

var _LocationUtils = require('./LocationUtils');

Object.defineProperty(exports, 'locationsAreEqual', {
  enumerable: true,
  get: function get() {
    return _LocationUtils.locationsAreEqual;
  }
});

var _createBrowserHistory = require('./createBrowserHistory');

var _createBrowserHistory2 = _interopRequireDefault(_createBrowserHistory);

var _createHashHistory2 = require('./createHashHistory');

var _createHashHistory3 = _interopRequireDefault(_createHashHistory2);

var _createMemoryHistory2 = require('./createMemoryHistory');

var _createMemoryHistory3 = _interopRequireDefault(_createMemoryHistory2);

var _useBasename2 = require('./useBasename');

var _useBasename3 = _interopRequireDefault(_useBasename2);

var _useBeforeUnload2 = require('./useBeforeUnload');

var _useBeforeUnload3 = _interopRequireDefault(_useBeforeUnload2);

var _useQueries2 = require('./useQueries');

var _useQueries3 = _interopRequireDefault(_useQueries2);

var _Actions2 = require('./Actions');

var _Actions3 = _interopRequireDefault(_Actions2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.createHistory = _createBrowserHistory2.default;
exports.createHashHistory = _createHashHistory3.default;
exports.createMemoryHistory = _createMemoryHistory3.default;
exports.useBasename = _useBasename3.default;
exports.useBeforeUnload = _useBeforeUnload3.default;
exports.useQueries = _useQueries3.default;
exports.Actions = _Actions3.default;
},{"./Actions":74,"./LocationUtils":81,"./createBrowserHistory":84,"./createHashHistory":85,"./createMemoryHistory":87,"./useBasename":90,"./useBeforeUnload":91,"./useQueries":92}],89:[function(require,module,exports){
(function (process){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _warning = require('warning');

var _warning2 = _interopRequireDefault(_warning);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var runTransitionHook = function runTransitionHook(hook, location, callback) {
  var result = hook(location, callback);

  if (hook.length < 2) {
    // Assume the hook runs synchronously and automatically
    // call the callback with the return value.
    callback(result);
  } else {
    process.env.NODE_ENV !== 'production' ? (0, _warning2.default)(result === undefined, 'You should not "return" in a transition hook with a callback argument; ' + 'call the callback instead') : void 0;
  }
};

exports.default = runTransitionHook;
}).call(this,require('_process'))

},{"_process":103,"warning":102}],90:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _runTransitionHook = require('./runTransitionHook');

var _runTransitionHook2 = _interopRequireDefault(_runTransitionHook);

var _PathUtils = require('./PathUtils');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var useBasename = function useBasename(createHistory) {
  return function () {
    var options = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

    var history = createHistory(options);
    var basename = options.basename;


    var addBasename = function addBasename(location) {
      if (!location) return location;

      if (basename && location.basename == null) {
        if (location.pathname.indexOf(basename) === 0) {
          location.pathname = location.pathname.substring(basename.length);
          location.basename = basename;

          if (location.pathname === '') location.pathname = '/';
        } else {
          location.basename = '';
        }
      }

      return location;
    };

    var prependBasename = function prependBasename(location) {
      if (!basename) return location;

      var object = typeof location === 'string' ? (0, _PathUtils.parsePath)(location) : location;
      var pname = object.pathname;
      var normalizedBasename = basename.slice(-1) === '/' ? basename : basename + '/';
      var normalizedPathname = pname.charAt(0) === '/' ? pname.slice(1) : pname;
      var pathname = normalizedBasename + normalizedPathname;

      return _extends({}, location, {
        pathname: pathname
      });
    };

    // Override all read methods with basename-aware versions.
    var getCurrentLocation = function getCurrentLocation() {
      return addBasename(history.getCurrentLocation());
    };

    var listenBefore = function listenBefore(hook) {
      return history.listenBefore(function (location, callback) {
        return (0, _runTransitionHook2.default)(hook, addBasename(location), callback);
      });
    };

    var listen = function listen(listener) {
      return history.listen(function (location) {
        return listener(addBasename(location));
      });
    };

    // Override all write methods with basename-aware versions.
    var push = function push(location) {
      return history.push(prependBasename(location));
    };

    var replace = function replace(location) {
      return history.replace(prependBasename(location));
    };

    var createPath = function createPath(location) {
      return history.createPath(prependBasename(location));
    };

    var createHref = function createHref(location) {
      return history.createHref(prependBasename(location));
    };

    var createLocation = function createLocation(location) {
      for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        args[_key - 1] = arguments[_key];
      }

      return addBasename(history.createLocation.apply(history, [prependBasename(location)].concat(args)));
    };

    return _extends({}, history, {
      getCurrentLocation: getCurrentLocation,
      listenBefore: listenBefore,
      listen: listen,
      push: push,
      replace: replace,
      createPath: createPath,
      createHref: createHref,
      createLocation: createLocation
    });
  };
};

exports.default = useBasename;
},{"./PathUtils":82,"./runTransitionHook":89}],91:[function(require,module,exports){
(function (process){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _invariant = require('invariant');

var _invariant2 = _interopRequireDefault(_invariant);

var _DOMUtils = require('./DOMUtils');

var _ExecutionEnvironment = require('./ExecutionEnvironment');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var startListener = function startListener(getPromptMessage) {
  var handleBeforeUnload = function handleBeforeUnload(event) {
    var message = getPromptMessage();

    if (typeof message === 'string') {
      (event || window.event).returnValue = message;
      return message;
    }

    return undefined;
  };

  (0, _DOMUtils.addEventListener)(window, 'beforeunload', handleBeforeUnload);

  return function () {
    return (0, _DOMUtils.removeEventListener)(window, 'beforeunload', handleBeforeUnload);
  };
};

/**
 * Returns a new createHistory function that can be used to create
 * history objects that know how to use the beforeunload event in web
 * browsers to cancel navigation.
 */
var useBeforeUnload = function useBeforeUnload(createHistory) {
  !_ExecutionEnvironment.canUseDOM ? process.env.NODE_ENV !== 'production' ? (0, _invariant2.default)(false, 'useBeforeUnload only works in DOM environments') : (0, _invariant2.default)(false) : void 0;

  return function (options) {
    var history = createHistory(options);

    var listeners = [];
    var stopListener = void 0;

    var getPromptMessage = function getPromptMessage() {
      var message = void 0;
      for (var i = 0, len = listeners.length; message == null && i < len; ++i) {
        message = listeners[i].call();
      }return message;
    };

    var listenBeforeUnload = function listenBeforeUnload(listener) {
      if (listeners.push(listener) === 1) stopListener = startListener(getPromptMessage);

      return function () {
        listeners = listeners.filter(function (item) {
          return item !== listener;
        });

        if (listeners.length === 0 && stopListener) {
          stopListener();
          stopListener = null;
        }
      };
    };

    return _extends({}, history, {
      listenBeforeUnload: listenBeforeUnload
    });
  };
};

exports.default = useBeforeUnload;
}).call(this,require('_process'))

},{"./DOMUtils":78,"./ExecutionEnvironment":79,"_process":103,"invariant":93}],92:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _queryString = require('query-string');

var _runTransitionHook = require('./runTransitionHook');

var _runTransitionHook2 = _interopRequireDefault(_runTransitionHook);

var _LocationUtils = require('./LocationUtils');

var _PathUtils = require('./PathUtils');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var defaultStringifyQuery = function defaultStringifyQuery(query) {
  return (0, _queryString.stringify)(query).replace(/%20/g, '+');
};

var defaultParseQueryString = _queryString.parse;

/**
 * Returns a new createHistory function that may be used to create
 * history objects that know how to handle URL queries.
 */
var useQueries = function useQueries(createHistory) {
  return function () {
    var options = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

    var history = createHistory(options);
    var stringifyQuery = options.stringifyQuery;
    var parseQueryString = options.parseQueryString;


    if (typeof stringifyQuery !== 'function') stringifyQuery = defaultStringifyQuery;

    if (typeof parseQueryString !== 'function') parseQueryString = defaultParseQueryString;

    var decodeQuery = function decodeQuery(location) {
      if (!location) return location;

      if (location.query == null) location.query = parseQueryString(location.search.substring(1));

      return location;
    };

    var encodeQuery = function encodeQuery(location, query) {
      if (query == null) return location;

      var object = typeof location === 'string' ? (0, _PathUtils.parsePath)(location) : location;
      var queryString = stringifyQuery(query);
      var search = queryString ? '?' + queryString : '';

      return _extends({}, object, {
        search: search
      });
    };

    // Override all read methods with query-aware versions.
    var getCurrentLocation = function getCurrentLocation() {
      return decodeQuery(history.getCurrentLocation());
    };

    var listenBefore = function listenBefore(hook) {
      return history.listenBefore(function (location, callback) {
        return (0, _runTransitionHook2.default)(hook, decodeQuery(location), callback);
      });
    };

    var listen = function listen(listener) {
      return history.listen(function (location) {
        return listener(decodeQuery(location));
      });
    };

    // Override all write methods with query-aware versions.
    var push = function push(location) {
      return history.push(encodeQuery(location, location.query));
    };

    var replace = function replace(location) {
      return history.replace(encodeQuery(location, location.query));
    };

    var createPath = function createPath(location) {
      return history.createPath(encodeQuery(location, location.query));
    };

    var createHref = function createHref(location) {
      return history.createHref(encodeQuery(location, location.query));
    };

    var createLocation = function createLocation(location) {
      for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        args[_key - 1] = arguments[_key];
      }

      var newLocation = history.createLocation.apply(history, [encodeQuery(location, location.query)].concat(args));

      if (location.query) newLocation.query = (0, _LocationUtils.createQuery)(location.query);

      return decodeQuery(newLocation);
    };

    return _extends({}, history, {
      getCurrentLocation: getCurrentLocation,
      listenBefore: listenBefore,
      listen: listen,
      push: push,
      replace: replace,
      createPath: createPath,
      createHref: createHref,
      createLocation: createLocation
    });
  };
};

exports.default = useQueries;
},{"./LocationUtils":81,"./PathUtils":82,"./runTransitionHook":89,"query-string":96}],93:[function(require,module,exports){
(function (process){
/**
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */

'use strict';

/**
 * Use invariant() to assert state which your program assumes to be true.
 *
 * Provide sprintf-style format (only %s is supported) and arguments
 * to provide information about what broke and what you were
 * expecting.
 *
 * The invariant message will be stripped in production, but the invariant
 * will remain to ensure logic does not differ in production.
 */

var invariant = function(condition, format, a, b, c, d, e, f) {
  if (process.env.NODE_ENV !== 'production') {
    if (format === undefined) {
      throw new Error('invariant requires an error message argument');
    }
  }

  if (!condition) {
    var error;
    if (format === undefined) {
      error = new Error(
        'Minified exception occurred; use the non-minified dev environment ' +
        'for the full error message and additional helpful warnings.'
      );
    } else {
      var args = [a, b, c, d, e, f];
      var argIndex = 0;
      error = new Error(
        format.replace(/%s/g, function() { return args[argIndex++]; })
      );
      error.name = 'Invariant Violation';
    }

    error.framesToPop = 1; // we don't care about invariant's own frame
    throw error;
  }
};

module.exports = invariant;

}).call(this,require('_process'))

},{"_process":103}],94:[function(require,module,exports){
var isarray = require('isarray')

/**
 * Expose `pathToRegexp`.
 */
module.exports = pathToRegexp
module.exports.parse = parse
module.exports.compile = compile
module.exports.tokensToFunction = tokensToFunction
module.exports.tokensToRegExp = tokensToRegExp

/**
 * The main path matching regexp utility.
 *
 * @type {RegExp}
 */
var PATH_REGEXP = new RegExp([
  // Match escaped characters that would otherwise appear in future matches.
  // This allows the user to escape special characters that won't transform.
  '(\\\\.)',
  // Match Express-style parameters and un-named parameters with a prefix
  // and optional suffixes. Matches appear as:
  //
  // "/:test(\\d+)?" => ["/", "test", "\d+", undefined, "?", undefined]
  // "/route(\\d+)"  => [undefined, undefined, undefined, "\d+", undefined, undefined]
  // "/*"            => ["/", undefined, undefined, undefined, undefined, "*"]
  '([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))'
].join('|'), 'g')

/**
 * Parse a string for the raw tokens.
 *
 * @param  {string} str
 * @return {!Array}
 */
function parse (str) {
  var tokens = []
  var key = 0
  var index = 0
  var path = ''
  var res

  while ((res = PATH_REGEXP.exec(str)) != null) {
    var m = res[0]
    var escaped = res[1]
    var offset = res.index
    path += str.slice(index, offset)
    index = offset + m.length

    // Ignore already escaped sequences.
    if (escaped) {
      path += escaped[1]
      continue
    }

    var next = str[index]
    var prefix = res[2]
    var name = res[3]
    var capture = res[4]
    var group = res[5]
    var modifier = res[6]
    var asterisk = res[7]

    // Push the current path onto the tokens.
    if (path) {
      tokens.push(path)
      path = ''
    }

    var partial = prefix != null && next != null && next !== prefix
    var repeat = modifier === '+' || modifier === '*'
    var optional = modifier === '?' || modifier === '*'
    var delimiter = res[2] || '/'
    var pattern = capture || group || (asterisk ? '.*' : '[^' + delimiter + ']+?')

    tokens.push({
      name: name || key++,
      prefix: prefix || '',
      delimiter: delimiter,
      optional: optional,
      repeat: repeat,
      partial: partial,
      asterisk: !!asterisk,
      pattern: escapeGroup(pattern)
    })
  }

  // Match any characters still remaining.
  if (index < str.length) {
    path += str.substr(index)
  }

  // If the path exists, push it onto the end.
  if (path) {
    tokens.push(path)
  }

  return tokens
}

/**
 * Compile a string to a template function for the path.
 *
 * @param  {string}             str
 * @return {!function(Object=, Object=)}
 */
function compile (str) {
  return tokensToFunction(parse(str))
}

/**
 * Prettier encoding of URI path segments.
 *
 * @param  {string}
 * @return {string}
 */
function encodeURIComponentPretty (str) {
  return encodeURI(str).replace(/[\/?#]/g, function (c) {
    return '%' + c.charCodeAt(0).toString(16).toUpperCase()
  })
}

/**
 * Encode the asterisk parameter. Similar to `pretty`, but allows slashes.
 *
 * @param  {string}
 * @return {string}
 */
function encodeAsterisk (str) {
  return encodeURI(str).replace(/[?#]/g, function (c) {
    return '%' + c.charCodeAt(0).toString(16).toUpperCase()
  })
}

/**
 * Expose a method for transforming tokens into the path function.
 */
function tokensToFunction (tokens) {
  // Compile all the tokens into regexps.
  var matches = new Array(tokens.length)

  // Compile all the patterns before compilation.
  for (var i = 0; i < tokens.length; i++) {
    if (typeof tokens[i] === 'object') {
      matches[i] = new RegExp('^(?:' + tokens[i].pattern + ')$')
    }
  }

  return function (obj, opts) {
    var path = ''
    var data = obj || {}
    var options = opts || {}
    var encode = options.pretty ? encodeURIComponentPretty : encodeURIComponent

    for (var i = 0; i < tokens.length; i++) {
      var token = tokens[i]

      if (typeof token === 'string') {
        path += token

        continue
      }

      var value = data[token.name]
      var segment

      if (value == null) {
        if (token.optional) {
          // Prepend partial segment prefixes.
          if (token.partial) {
            path += token.prefix
          }

          continue
        } else {
          throw new TypeError('Expected "' + token.name + '" to be defined')
        }
      }

      if (isarray(value)) {
        if (!token.repeat) {
          throw new TypeError('Expected "' + token.name + '" to not repeat, but received `' + JSON.stringify(value) + '`')
        }

        if (value.length === 0) {
          if (token.optional) {
            continue
          } else {
            throw new TypeError('Expected "' + token.name + '" to not be empty')
          }
        }

        for (var j = 0; j < value.length; j++) {
          segment = encode(value[j])

          if (!matches[i].test(segment)) {
            throw new TypeError('Expected all "' + token.name + '" to match "' + token.pattern + '", but received `' + JSON.stringify(segment) + '`')
          }

          path += (j === 0 ? token.prefix : token.delimiter) + segment
        }

        continue
      }

      segment = token.asterisk ? encodeAsterisk(value) : encode(value)

      if (!matches[i].test(segment)) {
        throw new TypeError('Expected "' + token.name + '" to match "' + token.pattern + '", but received "' + segment + '"')
      }

      path += token.prefix + segment
    }

    return path
  }
}

/**
 * Escape a regular expression string.
 *
 * @param  {string} str
 * @return {string}
 */
function escapeString (str) {
  return str.replace(/([.+*?=^!:${}()[\]|\/\\])/g, '\\$1')
}

/**
 * Escape the capturing group by escaping special characters and meaning.
 *
 * @param  {string} group
 * @return {string}
 */
function escapeGroup (group) {
  return group.replace(/([=!:$\/()])/g, '\\$1')
}

/**
 * Attach the keys as a property of the regexp.
 *
 * @param  {!RegExp} re
 * @param  {Array}   keys
 * @return {!RegExp}
 */
function attachKeys (re, keys) {
  re.keys = keys
  return re
}

/**
 * Get the flags for a regexp from the options.
 *
 * @param  {Object} options
 * @return {string}
 */
function flags (options) {
  return options.sensitive ? '' : 'i'
}

/**
 * Pull out keys from a regexp.
 *
 * @param  {!RegExp} path
 * @param  {!Array}  keys
 * @return {!RegExp}
 */
function regexpToRegexp (path, keys) {
  // Use a negative lookahead to match only capturing groups.
  var groups = path.source.match(/\((?!\?)/g)

  if (groups) {
    for (var i = 0; i < groups.length; i++) {
      keys.push({
        name: i,
        prefix: null,
        delimiter: null,
        optional: false,
        repeat: false,
        partial: false,
        asterisk: false,
        pattern: null
      })
    }
  }

  return attachKeys(path, keys)
}

/**
 * Transform an array into a regexp.
 *
 * @param  {!Array}  path
 * @param  {Array}   keys
 * @param  {!Object} options
 * @return {!RegExp}
 */
function arrayToRegexp (path, keys, options) {
  var parts = []

  for (var i = 0; i < path.length; i++) {
    parts.push(pathToRegexp(path[i], keys, options).source)
  }

  var regexp = new RegExp('(?:' + parts.join('|') + ')', flags(options))

  return attachKeys(regexp, keys)
}

/**
 * Create a path regexp from string input.
 *
 * @param  {string}  path
 * @param  {!Array}  keys
 * @param  {!Object} options
 * @return {!RegExp}
 */
function stringToRegexp (path, keys, options) {
  var tokens = parse(path)
  var re = tokensToRegExp(tokens, options)

  // Attach keys back to the regexp.
  for (var i = 0; i < tokens.length; i++) {
    if (typeof tokens[i] !== 'string') {
      keys.push(tokens[i])
    }
  }

  return attachKeys(re, keys)
}

/**
 * Expose a function for taking tokens and returning a RegExp.
 *
 * @param  {!Array}  tokens
 * @param  {Object=} options
 * @return {!RegExp}
 */
function tokensToRegExp (tokens, options) {
  options = options || {}

  var strict = options.strict
  var end = options.end !== false
  var route = ''
  var lastToken = tokens[tokens.length - 1]
  var endsWithSlash = typeof lastToken === 'string' && /\/$/.test(lastToken)

  // Iterate over the tokens and create our regexp string.
  for (var i = 0; i < tokens.length; i++) {
    var token = tokens[i]

    if (typeof token === 'string') {
      route += escapeString(token)
    } else {
      var prefix = escapeString(token.prefix)
      var capture = '(?:' + token.pattern + ')'

      if (token.repeat) {
        capture += '(?:' + prefix + capture + ')*'
      }

      if (token.optional) {
        if (!token.partial) {
          capture = '(?:' + prefix + '(' + capture + '))?'
        } else {
          capture = prefix + '(' + capture + ')?'
        }
      } else {
        capture = prefix + '(' + capture + ')'
      }

      route += capture
    }
  }

  // In non-strict mode we allow a slash at the end of match. If the path to
  // match already ends with a slash, we remove it for consistency. The slash
  // is valid at the end of a path match, not in the middle. This is important
  // in non-ending mode, where "/test/" shouldn't match "/test//route".
  if (!strict) {
    route = (endsWithSlash ? route.slice(0, -2) : route) + '(?:\\/(?=$))?'
  }

  if (end) {
    route += '$'
  } else {
    // In non-ending mode, we need the capturing groups to match as much as
    // possible by using a positive lookahead to the end or next path segment.
    route += strict && endsWithSlash ? '' : '(?=\\/|$)'
  }

  return new RegExp('^' + route, flags(options))
}

/**
 * Normalize the given path string, returning a regular expression.
 *
 * An empty array can be passed in for the keys, which will hold the
 * placeholder key descriptions. For example, using `/user/:id`, `keys` will
 * contain `[{ name: 'id', delimiter: '/', optional: false, repeat: false }]`.
 *
 * @param  {(string|RegExp|Array)} path
 * @param  {(Array|Object)=}       keys
 * @param  {Object=}               options
 * @return {!RegExp}
 */
function pathToRegexp (path, keys, options) {
  keys = keys || []

  if (!isarray(keys)) {
    options = /** @type {!Object} */ (keys)
    keys = []
  } else if (!options) {
    options = {}
  }

  if (path instanceof RegExp) {
    return regexpToRegexp(path, /** @type {!Array} */ (keys))
  }

  if (isarray(path)) {
    return arrayToRegexp(/** @type {!Array} */ (path), /** @type {!Array} */ (keys), options)
  }

  return stringToRegexp(/** @type {string} */ (path), /** @type {!Array} */ (keys), options)
}

},{"isarray":95}],95:[function(require,module,exports){
module.exports = Array.isArray || function (arr) {
  return Object.prototype.toString.call(arr) == '[object Array]';
};

},{}],96:[function(require,module,exports){
'use strict';
var strictUriEncode = require('strict-uri-encode');

function encode(value, strict) {
	return strict ? strictUriEncode(value) : encodeURIComponent(value);
}

exports.extract = function (str) {
	return str.split('?')[1] || '';
};

exports.parse = function (str) {
	// Create an object with no prototype
	// https://github.com/sindresorhus/query-string/issues/47
	var ret = Object.create(null);

	if (typeof str !== 'string') {
		return ret;
	}

	str = str.trim().replace(/^(\?|#|&)/, '');

	if (!str) {
		return ret;
	}

	str.split('&').forEach(function (param) {
		var parts = param.replace(/\+/g, ' ').split('=');
		// Firefox (pre 40) decodes `%3D` to `=`
		// https://github.com/sindresorhus/query-string/pull/37
		var key = parts.shift();
		var val = parts.length > 0 ? parts.join('=') : undefined;

		key = decodeURIComponent(key);

		// missing `=` should be `null`:
		// http://w3.org/TR/2012/WD-url-20120524/#collect-url-parameters
		val = val === undefined ? null : decodeURIComponent(val);

		if (ret[key] === undefined) {
			ret[key] = val;
		} else if (Array.isArray(ret[key])) {
			ret[key].push(val);
		} else {
			ret[key] = [ret[key], val];
		}
	});

	return ret;
};

exports.stringify = function (obj, opts) {
	opts = opts || {};

	var strict = opts.strict !== false;

	return obj ? Object.keys(obj).sort().map(function (key) {
		var val = obj[key];

		if (val === undefined) {
			return '';
		}

		if (val === null) {
			return key;
		}

		if (Array.isArray(val)) {
			var result = [];

			val.slice().sort().forEach(function (val2) {
				if (val2 === undefined) {
					return;
				}

				if (val2 === null) {
					result.push(encode(key, strict));
				} else {
					result.push(encode(key, strict) + '=' + encode(val2, strict));
				}
			});

			return result.join('&');
		}

		return encode(key, strict) + '=' + encode(val, strict);
	}).filter(function (x) {
		return x.length > 0;
	}).join('&') : '';
};

},{"strict-uri-encode":98}],97:[function(require,module,exports){
(function (process,global){
(function (global, undefined) {
    "use strict";

    if (global.setImmediate) {
        return;
    }

    var nextHandle = 1; // Spec says greater than zero
    var tasksByHandle = {};
    var currentlyRunningATask = false;
    var doc = global.document;
    var setImmediate;

    function addFromSetImmediateArguments(args) {
        tasksByHandle[nextHandle] = partiallyApplied.apply(undefined, args);
        return nextHandle++;
    }

    // This function accepts the same arguments as setImmediate, but
    // returns a function that requires no arguments.
    function partiallyApplied(handler) {
        var args = [].slice.call(arguments, 1);
        return function() {
            if (typeof handler === "function") {
                handler.apply(undefined, args);
            } else {
                (new Function("" + handler))();
            }
        };
    }

    function runIfPresent(handle) {
        // From the spec: "Wait until any invocations of this algorithm started before this one have completed."
        // So if we're currently running a task, we'll need to delay this invocation.
        if (currentlyRunningATask) {
            // Delay by doing a setTimeout. setImmediate was tried instead, but in Firefox 7 it generated a
            // "too much recursion" error.
            setTimeout(partiallyApplied(runIfPresent, handle), 0);
        } else {
            var task = tasksByHandle[handle];
            if (task) {
                currentlyRunningATask = true;
                try {
                    task();
                } finally {
                    clearImmediate(handle);
                    currentlyRunningATask = false;
                }
            }
        }
    }

    function clearImmediate(handle) {
        delete tasksByHandle[handle];
    }

    function installNextTickImplementation() {
        setImmediate = function() {
            var handle = addFromSetImmediateArguments(arguments);
            process.nextTick(partiallyApplied(runIfPresent, handle));
            return handle;
        };
    }

    function canUsePostMessage() {
        // The test against `importScripts` prevents this implementation from being installed inside a web worker,
        // where `global.postMessage` means something completely different and can't be used for this purpose.
        if (global.postMessage && !global.importScripts) {
            var postMessageIsAsynchronous = true;
            var oldOnMessage = global.onmessage;
            global.onmessage = function() {
                postMessageIsAsynchronous = false;
            };
            global.postMessage("", "*");
            global.onmessage = oldOnMessage;
            return postMessageIsAsynchronous;
        }
    }

    function installPostMessageImplementation() {
        // Installs an event handler on `global` for the `message` event: see
        // * https://developer.mozilla.org/en/DOM/window.postMessage
        // * http://www.whatwg.org/specs/web-apps/current-work/multipage/comms.html#crossDocumentMessages

        var messagePrefix = "setImmediate$" + Math.random() + "$";
        var onGlobalMessage = function(event) {
            if (event.source === global &&
                typeof event.data === "string" &&
                event.data.indexOf(messagePrefix) === 0) {
                runIfPresent(+event.data.slice(messagePrefix.length));
            }
        };

        if (global.addEventListener) {
            global.addEventListener("message", onGlobalMessage, false);
        } else {
            global.attachEvent("onmessage", onGlobalMessage);
        }

        setImmediate = function() {
            var handle = addFromSetImmediateArguments(arguments);
            global.postMessage(messagePrefix + handle, "*");
            return handle;
        };
    }

    function installMessageChannelImplementation() {
        var channel = new MessageChannel();
        channel.port1.onmessage = function(event) {
            var handle = event.data;
            runIfPresent(handle);
        };

        setImmediate = function() {
            var handle = addFromSetImmediateArguments(arguments);
            channel.port2.postMessage(handle);
            return handle;
        };
    }

    function installReadyStateChangeImplementation() {
        var html = doc.documentElement;
        setImmediate = function() {
            var handle = addFromSetImmediateArguments(arguments);
            // Create a <script> element; its readystatechange event will be fired asynchronously once it is inserted
            // into the document. Do so, thus queuing up the task. Remember to clean up once it's been called.
            var script = doc.createElement("script");
            script.onreadystatechange = function () {
                runIfPresent(handle);
                script.onreadystatechange = null;
                html.removeChild(script);
                script = null;
            };
            html.appendChild(script);
            return handle;
        };
    }

    function installSetTimeoutImplementation() {
        setImmediate = function() {
            var handle = addFromSetImmediateArguments(arguments);
            setTimeout(partiallyApplied(runIfPresent, handle), 0);
            return handle;
        };
    }

    // If supported, we should attach to the prototype of global, since that is where setTimeout et al. live.
    var attachTo = Object.getPrototypeOf && Object.getPrototypeOf(global);
    attachTo = attachTo && attachTo.setTimeout ? attachTo : global;

    // Don't get fooled by e.g. browserify environments.
    if ({}.toString.call(global.process) === "[object process]") {
        // For Node.js before 0.9
        installNextTickImplementation();

    } else if (canUsePostMessage()) {
        // For non-IE10 modern browsers
        installPostMessageImplementation();

    } else if (global.MessageChannel) {
        // For web workers, where supported
        installMessageChannelImplementation();

    } else if (doc && "onreadystatechange" in doc.createElement("script")) {
        // For IE 6–8
        installReadyStateChangeImplementation();

    } else {
        // For older browsers
        installSetTimeoutImplementation();
    }

    attachTo.setImmediate = setImmediate;
    attachTo.clearImmediate = clearImmediate;
}(typeof self === "undefined" ? typeof global === "undefined" ? this : global : self));

}).call(this,require('_process'),typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{"_process":103}],98:[function(require,module,exports){
'use strict';
module.exports = function (str) {
	return encodeURIComponent(str).replace(/[!'()*]/g, function (c) {
		return '%' + c.charCodeAt(0).toString(16).toUpperCase();
	});
};

},{}],99:[function(require,module,exports){
var Vue // late bind
var map = window.__VUE_HOT_MAP__ = Object.create(null)
var installed = false
var isBrowserify = false
var initHookName = 'beforeCreate'

exports.install = function (vue, browserify) {
  if (installed) return
  installed = true

  Vue = vue
  isBrowserify = browserify

  // compat with < 2.0.0-alpha.7
  if (Vue.config._lifecycleHooks.indexOf('init') > -1) {
    initHookName = 'init'
  }

  exports.compatible = Number(Vue.version.split('.')[0]) >= 2
  if (!exports.compatible) {
    console.warn(
      '[HMR] You are using a version of vue-hot-reload-api that is ' +
      'only compatible with Vue.js core ^2.0.0.'
    )
    return
  }
}

/**
 * Create a record for a hot module, which keeps track of its constructor
 * and instances
 *
 * @param {String} id
 * @param {Object} options
 */

exports.createRecord = function (id, options) {
  var Ctor = null
  if (typeof options === 'function') {
    Ctor = options
    options = Ctor.options
  }
  makeOptionsHot(id, options)
  map[id] = {
    Ctor: Vue.extend(options),
    instances: []
  }
}

/**
 * Make a Component options object hot.
 *
 * @param {String} id
 * @param {Object} options
 */

function makeOptionsHot (id, options) {
  injectHook(options, initHookName, function () {
    map[id].instances.push(this)
  })
  injectHook(options, 'beforeDestroy', function () {
    var instances = map[id].instances
    instances.splice(instances.indexOf(this), 1)
  })
}

/**
 * Inject a hook to a hot reloadable component so that
 * we can keep track of it.
 *
 * @param {Object} options
 * @param {String} name
 * @param {Function} hook
 */

function injectHook (options, name, hook) {
  var existing = options[name]
  options[name] = existing
    ? Array.isArray(existing)
      ? existing.concat(hook)
      : [existing, hook]
    : [hook]
}

function tryWrap (fn) {
  return function (id, arg) {
    try { fn(id, arg) } catch (e) {
      console.error(e)
      console.warn('Something went wrong during Vue component hot-reload. Full reload required.')
    }
  }
}

exports.rerender = tryWrap(function (id, fns) {
  var record = map[id]
  record.Ctor.options.render = fns.render
  record.Ctor.options.staticRenderFns = fns.staticRenderFns
  record.instances.slice().forEach(function (instance) {
    instance.$options.render = fns.render
    instance.$options.staticRenderFns = fns.staticRenderFns
    instance._staticTrees = [] // reset static trees
    instance.$forceUpdate()
    // force update on direct children for potential slot content update
    instance.$children.forEach(function (child) {
      if (Object.keys(child.$slots).length > 0) {
        child.$forceUpdate()
      }
    })
  })
})

exports.reload = tryWrap(function (id, options) {
  makeOptionsHot(id, options)
  var record = map[id]
  record.Ctor.extendOptions = options
  var newCtor = Vue.extend(options)
  record.Ctor.options = newCtor.options
  record.Ctor.cid = newCtor.cid
  if (newCtor.release) {
    // temporary global mixin strategy used in < 2.0.0-alpha.6
    newCtor.release()
  }
  record.instances.slice().forEach(function (instance) {
    if (instance.$parent) {
      instance.$parent.$forceUpdate()
    } else {
      console.warn('Root or manually mounted instance modified. Full reload required.')
    }
  })
})

},{}],100:[function(require,module,exports){
(function (process,global){
'use strict';

/**
 * Convert a value to a string that is actually rendered.
 */
function _toString(val) {
  return val == null ? '' : typeof val === 'object' ? JSON.stringify(val, null, 2) : String(val);
}

/**
 * Convert a input value to a number for persistence.
 * If the conversion fails, return original string.
 */
function toNumber(val) {
  var n = parseFloat(val, 10);
  return n || n === 0 ? n : val;
}

/**
 * Make a map and return a function for checking if a key
 * is in that map.
 */
function makeMap(str, expectsLowerCase) {
  var map = Object.create(null);
  var list = str.split(',');
  for (var i = 0; i < list.length; i++) {
    map[list[i]] = true;
  }
  return expectsLowerCase ? function (val) {
    return map[val.toLowerCase()];
  } : function (val) {
    return map[val];
  };
}

/**
 * Check if a tag is a built-in tag.
 */
var isBuiltInTag = makeMap('slot,component,render,transition', true);

/**
 * Remove an item from an array
 */
function remove(arr, item) {
  if (arr.length) {
    var index = arr.indexOf(item);
    if (index > -1) {
      return arr.splice(index, 1);
    }
  }
}

/**
 * Check whether the object has the property.
 */
var hasOwnProperty = Object.prototype.hasOwnProperty;
function hasOwn(obj, key) {
  return hasOwnProperty.call(obj, key);
}

/**
 * Check if value is primitive
 */
function isPrimitive(value) {
  return typeof value === 'string' || typeof value === 'number';
}

/**
 * Create a cached version of a pure function.
 */
function cached(fn) {
  var cache = Object.create(null);
  return function cachedFn(str) {
    var hit = cache[str];
    return hit || (cache[str] = fn(str));
  };
}

/**
 * Camelize a hyphen-delmited string.
 */
var camelizeRE = /-(\w)/g;
var camelize = cached(function (str) {
  return str.replace(camelizeRE, function (_, c) {
    return c ? c.toUpperCase() : '';
  });
});

/**
 * Capitalize a string.
 */
var capitalize = cached(function (str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
});

/**
 * Hyphenate a camelCase string.
 */
var hyphenateRE = /([^-])([A-Z])/g;
var hyphenate = cached(function (str) {
  return str.replace(hyphenateRE, '$1-$2').replace(hyphenateRE, '$1-$2').toLowerCase();
});

/**
 * Simple bind, faster than native
 */
function bind(fn, ctx) {
  return function (a) {
    var l = arguments.length;
    return l ? l > 1 ? fn.apply(ctx, arguments) : fn.call(ctx, a) : fn.call(ctx);
  };
}

/**
 * Convert an Array-like object to a real Array.
 */
function toArray(list, start) {
  start = start || 0;
  var i = list.length - start;
  var ret = new Array(i);
  while (i--) {
    ret[i] = list[i + start];
  }
  return ret;
}

/**
 * Mix properties into target object.
 */
function extend(to, _from) {
  for (var _key in _from) {
    to[_key] = _from[_key];
  }
  return to;
}

/**
 * Quick object check - this is primarily used to tell
 * Objects from primitive values when we know the value
 * is a JSON-compliant type.
 */
function isObject(obj) {
  return obj !== null && typeof obj === 'object';
}

/**
 * Strict object type check. Only returns true
 * for plain JavaScript objects.
 */
var toString = Object.prototype.toString;
var OBJECT_STRING = '[object Object]';
function isPlainObject(obj) {
  return toString.call(obj) === OBJECT_STRING;
}

/**
 * Merge an Array of Objects into a single Object.
 */
function toObject(arr) {
  var res = arr[0] || {};
  for (var i = 1; i < arr.length; i++) {
    if (arr[i]) {
      extend(res, arr[i]);
    }
  }
  return res;
}

/**
 * Perform no operation.
 */
function noop() {}

/**
 * Always return false.
 */
var no = function no() {
  return false;
};

/**
 * Generate a static keys string from compiler modules.
 */
function genStaticKeys(modules) {
  return modules.reduce(function (keys, m) {
    return keys.concat(m.staticKeys || []);
  }, []).join(',');
}

var config = {
  /**
   * Option merge strategies (used in core/util/options)
   */
  optionMergeStrategies: Object.create(null),

  /**
   * Whether to suppress warnings.
   */
  silent: false,

  /**
   * Whether to enable devtools
   */
  devtools: process.env.NODE_ENV !== 'production',

  /**
   * Error handler for watcher errors
   */
  errorHandler: null,

  /**
   * Ignore certain custom elements
   */
  ignoredElements: null,

  /**
   * Custom user key aliases for v-on
   */
  keyCodes: Object.create(null),

  /**
   * Check if a tag is reserved so that it cannot be registered as a
   * component. This is platform-dependent and may be overwritten.
   */
  isReservedTag: no,

  /**
   * Check if a tag is an unknown element.
   * Platform-dependent.
   */
  isUnknownElement: no,

  /**
   * Get the namespace of an element
   */
  getTagNamespace: noop,

  /**
   * Check if an attribute must be bound using property, e.g. value
   * Platform-dependent.
   */
  mustUseProp: no,

  /**
   * List of asset types that a component can own.
   */
  _assetTypes: ['component', 'directive', 'transition', 'filter'],

  /**
   * List of lifecycle hooks.
   */
  _lifecycleHooks: ['beforeCreate', 'created', 'beforeMount', 'mounted', 'beforeUpdate', 'updated', 'beforeDestroy', 'destroyed', 'activated', 'deactivated'],

  /**
   * Max circular updates allowed in a scheduler flush cycle.
   */
  _maxUpdateCount: 100,

  /**
   * Server rendering?
   */
  _isServer: process.env.VUE_ENV === 'server'
};

/**
 * Check if a string starts with $ or _
 */
function isReserved(str) {
  var c = (str + '').charCodeAt(0);
  return c === 0x24 || c === 0x5F;
}

/**
 * Define a property.
 */
function def(obj, key, val, enumerable) {
  Object.defineProperty(obj, key, {
    value: val,
    enumerable: !!enumerable,
    writable: true,
    configurable: true
  });
}

/**
 * Parse simple path.
 */
var bailRE = /[^\w\.\$]/;
function parsePath(path) {
  if (bailRE.test(path)) {
    return;
  } else {
    var _ret = function () {
      var segments = path.split('.');
      return {
        v: function v(obj) {
          for (var i = 0; i < segments.length; i++) {
            if (!obj) return;
            obj = obj[segments[i]];
          }
          return obj;
        }
      };
    }();

    if (typeof _ret === "object") return _ret.v;
  }
}

/* global MutationObserver */
// can we use __proto__?
var hasProto = '__proto__' in {};

// Browser environment sniffing
var inBrowser = typeof window !== 'undefined' && Object.prototype.toString.call(window) !== '[object Object]';

// detect devtools
var devtools = inBrowser && window.__VUE_DEVTOOLS_GLOBAL_HOOK__;

// UA sniffing for working around browser-specific quirks
var UA = inBrowser && window.navigator.userAgent.toLowerCase();
var isIos = UA && /(iphone|ipad|ipod|ios)/i.test(UA);
var iosVersionMatch = UA && isIos && UA.match(/os ([\d_]+)/);
var iosVersion = iosVersionMatch && iosVersionMatch[1].split('_');

// MutationObserver is unreliable in iOS 9.3 UIWebView
// detecting it by checking presence of IndexedDB
// ref #3027
var hasMutationObserverBug = iosVersion && Number(iosVersion[0]) >= 9 && Number(iosVersion[1]) >= 3 && !window.indexedDB;

/**
 * Defer a task to execute it asynchronously. Ideally this
 * should be executed as a microtask, so we leverage
 * MutationObserver if it's available, and fallback to
 * setTimeout(0).
 *
 * @param {Function} cb
 * @param {Object} ctx
 */
var nextTick = function () {
  var callbacks = [];
  var pending = false;
  var timerFunc = void 0;
  function nextTickHandler() {
    pending = false;
    var copies = callbacks.slice(0);
    callbacks = [];
    for (var i = 0; i < copies.length; i++) {
      copies[i]();
    }
  }

  /* istanbul ignore else */
  if (typeof MutationObserver !== 'undefined' && !hasMutationObserverBug) {
    (function () {
      var counter = 1;
      var observer = new MutationObserver(nextTickHandler);
      var textNode = document.createTextNode(String(counter));
      observer.observe(textNode, {
        characterData: true
      });
      timerFunc = function timerFunc() {
        counter = (counter + 1) % 2;
        textNode.data = String(counter);
      };
    })();
  } else {
    // webpack attempts to inject a shim for setImmediate
    // if it is used as a global, so we have to work around that to
    // avoid bundling unnecessary code.
    var context = inBrowser ? window : typeof global !== 'undefined' ? global : {};
    timerFunc = context.setImmediate || setTimeout;
  }
  return function (cb, ctx) {
    var func = ctx ? function () {
      cb.call(ctx);
    } : cb;
    callbacks.push(func);
    if (pending) return;
    pending = true;
    timerFunc(nextTickHandler, 0);
  };
}();

var _Set = void 0;
/* istanbul ignore if */
if (typeof Set !== 'undefined' && /native code/.test(Set.toString())) {
  // use native Set when available.
  _Set = Set;
} else {
  // a non-standard Set polyfill that only works with primitive keys.
  _Set = function () {
    function Set() {
      this.set = Object.create(null);
    }

    Set.prototype.has = function has(key) {
      return this.set[key] !== undefined;
    };

    Set.prototype.add = function add(key) {
      this.set[key] = 1;
    };

    Set.prototype.clear = function clear() {
      this.set = Object.create(null);
    };

    return Set;
  }();
}

var hasProxy = void 0;
var proxyHandlers = void 0;
var initProxy = void 0;
if (process.env.NODE_ENV !== 'production') {
  (function () {
    var allowedGlobals = makeMap('Infinity,undefined,NaN,isFinite,isNaN,' + 'parseFloat,parseInt,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,' + 'Math,Number,Date,Array,Object,Boolean,String,RegExp,Map,Set,JSON,Intl,' + 'require,__webpack_require__' // for Webpack/Browserify
    );

    hasProxy = typeof Proxy !== 'undefined' && Proxy.toString().match(/native code/);

    proxyHandlers = {
      has: function has(target, key) {
        var has = key in target;
        var isAllowedGlobal = allowedGlobals(key);
        if (!has && !isAllowedGlobal) {
          warn('Trying to access non-existent property "' + key + '" while rendering. ' + 'Make sure to declare reactive data properties in the data option.', target);
        }
        return !isAllowedGlobal;
      }
    };

    initProxy = function initProxy(vm) {
      if (hasProxy) {
        vm._renderProxy = new Proxy(vm, proxyHandlers);
      } else {
        vm._renderProxy = vm;
      }
    };
  })();
}

var uid$2 = 0;

/**
 * A dep is an observable that can have multiple
 * directives subscribing to it.
 */

var Dep = function () {
  function Dep() {
    this.id = uid$2++;
    this.subs = [];
  }

  Dep.prototype.addSub = function addSub(sub) {
    this.subs.push(sub);
  };

  Dep.prototype.removeSub = function removeSub(sub) {
    remove(this.subs, sub);
  };

  Dep.prototype.depend = function depend() {
    if (Dep.target) {
      Dep.target.addDep(this);
    }
  };

  Dep.prototype.notify = function notify() {
    // stablize the subscriber list first
    var subs = this.subs.slice();
    for (var i = 0, l = subs.length; i < l; i++) {
      subs[i].update();
    }
  };

  return Dep;
}();

Dep.target = null;
var targetStack = [];

function pushTarget(_target) {
  if (Dep.target) targetStack.push(Dep.target);
  Dep.target = _target;
}

function popTarget() {
  Dep.target = targetStack.pop();
}

// We have two separate queues: one for internal component re-render updates
// and one for user watcher registered via $watch(). We want to guarantee
// re-render updates to be called before user watchers so that when user
// watchers are triggered, the DOM would already be in updated state.

var queue = [];
var userQueue = [];
var has = {};
var circular = {};
var waiting = false;

/**
 * Reset the scheduler's state.
 */
function resetSchedulerState() {
  queue.length = 0;
  userQueue.length = 0;
  has = {};
  if (process.env.NODE_ENV !== 'production') {
    circular = {};
  }
  waiting = false;
}

/**
 * Flush both queues and run the watchers.
 */
function flushSchedulerQueue() {
  runSchedulerQueue(queue.sort(queueSorter));
  runSchedulerQueue(userQueue);
  // user watchers triggered more watchers,
  // keep flushing until it depletes
  if (queue.length) {
    return flushSchedulerQueue();
  }
  // devtool hook
  /* istanbul ignore if */
  if (devtools && config.devtools) {
    devtools.emit('flush');
  }
  resetSchedulerState();
}

/**
 * Sort queue before flush.
 * This ensures components are updated from parent to child
 * so there will be no duplicate updates, e.g. a child was
 * pushed into the queue first and then its parent's props
 * changed.
 */
function queueSorter(a, b) {
  return a.id - b.id;
}

/**
 * Run the watchers in a single queue.
 */
function runSchedulerQueue(queue) {
  // do not cache length because more watchers might be pushed
  // as we run existing watchers
  for (var i = 0; i < queue.length; i++) {
    var watcher = queue[i];
    var id = watcher.id;
    has[id] = null;
    watcher.run();
    // in dev build, check and stop circular updates.
    if (process.env.NODE_ENV !== 'production' && has[id] != null) {
      circular[id] = (circular[id] || 0) + 1;
      if (circular[id] > config._maxUpdateCount) {
        warn('You may have an infinite update loop for watcher ' + 'with expression "' + watcher.expression + '"', watcher.vm);
        break;
      }
    }
  }
  queue.length = 0;
}

/**
 * Push a watcher into the watcher queue.
 * Jobs with duplicate IDs will be skipped unless it's
 * pushed when the queue is being flushed.
 */
function queueWatcher(watcher) {
  var id = watcher.id;
  if (has[id] == null) {
    // push watcher into appropriate queue
    var q = watcher.user ? userQueue : queue;
    has[id] = true;
    q.push(watcher);
    // queue the flush
    if (!waiting) {
      waiting = true;
      nextTick(flushSchedulerQueue);
    }
  }
}

var uid$1 = 0;

/**
 * A watcher parses an expression, collects dependencies,
 * and fires callback when the expression value changes.
 * This is used for both the $watch() api and directives.
 */

var Watcher = function () {
  function Watcher(vm, expOrFn, cb) {
    var options = arguments.length <= 3 || arguments[3] === undefined ? {} : arguments[3];

    this.vm = vm;
    vm._watchers.push(this);
    // options
    this.deep = !!options.deep;
    this.user = !!options.user;
    this.lazy = !!options.lazy;
    this.sync = !!options.sync;
    this.expression = expOrFn.toString();
    this.cb = cb;
    this.id = ++uid$1; // uid for batching
    this.active = true;
    this.dirty = this.lazy; // for lazy watchers
    this.deps = [];
    this.newDeps = [];
    this.depIds = new _Set();
    this.newDepIds = new _Set();
    // parse expression for getter
    if (typeof expOrFn === 'function') {
      this.getter = expOrFn;
    } else {
      this.getter = parsePath(expOrFn);
      if (!this.getter) {
        this.getter = function () {};
        process.env.NODE_ENV !== 'production' && warn('Failed watching path: "' + expOrFn + '" ' + 'Watcher only accepts simple dot-delimited paths. ' + 'For full control, use a function instead.', vm);
      }
    }
    this.value = this.lazy ? undefined : this.get();
  }

  /**
   * Evaluate the getter, and re-collect dependencies.
   */


  Watcher.prototype.get = function get() {
    pushTarget(this);
    var value = void 0;
    try {
      value = this.getter.call(this.vm, this.vm);
    } catch (e) {
      if (process.env.NODE_ENV !== 'production') {
        if (this.user) {
          warn('Error when evaluating watcher with getter: ' + this.expression, this.vm);
        } else {
          warn('Error during component render', this.vm);
        }
      }
      /* istanbul ignore else */
      if (config.errorHandler) {
        config.errorHandler.call(null, e, this.vm);
      } else {
        throw e;
      }
      // return old value when evaluation fails so the current UI is preserved
      // if the error was somehow handled by user
      value = this.value;
    }
    // "touch" every property so they are all tracked as
    // dependencies for deep watching
    if (this.deep) {
      traverse(value);
    }
    popTarget();
    this.cleanupDeps();
    return value;
  };

  /**
   * Add a dependency to this directive.
   */


  Watcher.prototype.addDep = function addDep(dep) {
    var id = dep.id;
    if (!this.newDepIds.has(id)) {
      this.newDepIds.add(id);
      this.newDeps.push(dep);
      if (!this.depIds.has(id)) {
        dep.addSub(this);
      }
    }
  };

  /**
   * Clean up for dependency collection.
   */


  Watcher.prototype.cleanupDeps = function cleanupDeps() {
    var i = this.deps.length;
    while (i--) {
      var dep = this.deps[i];
      if (!this.newDepIds.has(dep.id)) {
        dep.removeSub(this);
      }
    }
    var tmp = this.depIds;
    this.depIds = this.newDepIds;
    this.newDepIds = tmp;
    this.newDepIds.clear();
    tmp = this.deps;
    this.deps = this.newDeps;
    this.newDeps = tmp;
    this.newDeps.length = 0;
  };

  /**
   * Subscriber interface.
   * Will be called when a dependency changes.
   */


  Watcher.prototype.update = function update() {
    /* istanbul ignore else */
    if (this.lazy) {
      this.dirty = true;
    } else if (this.sync) {
      this.run();
    } else {
      queueWatcher(this);
    }
  };

  /**
   * Scheduler job interface.
   * Will be called by the scheduler.
   */


  Watcher.prototype.run = function run() {
    if (this.active) {
      var value = this.get();
      if (value !== this.value ||
      // Deep watchers and watchers on Object/Arrays should fire even
      // when the value is the same, because the value may
      // have mutated.
      isObject(value) || this.deep) {
        // set new value
        var oldValue = this.value;
        this.value = value;
        if (this.user) {
          try {
            this.cb.call(this.vm, value, oldValue);
          } catch (e) {
            process.env.NODE_ENV !== 'production' && warn('Error in watcher "' + this.expression + '"', this.vm);
            /* istanbul ignore else */
            if (config.errorHandler) {
              config.errorHandler.call(null, e, this.vm);
            } else {
              throw e;
            }
          }
        } else {
          this.cb.call(this.vm, value, oldValue);
        }
      }
    }
  };

  /**
   * Evaluate the value of the watcher.
   * This only gets called for lazy watchers.
   */


  Watcher.prototype.evaluate = function evaluate() {
    this.value = this.get();
    this.dirty = false;
  };

  /**
   * Depend on all deps collected by this watcher.
   */


  Watcher.prototype.depend = function depend() {
    var i = this.deps.length;
    while (i--) {
      this.deps[i].depend();
    }
  };

  /**
   * Remove self from all dependencies' subcriber list.
   */


  Watcher.prototype.teardown = function teardown() {
    if (this.active) {
      // remove self from vm's watcher list
      // this is a somewhat expensive operation so we skip it
      // if the vm is being destroyed or is performing a v-for
      // re-render (the watcher list is then filtered by v-for).
      if (!this.vm._isBeingDestroyed && !this.vm._vForRemoving) {
        remove(this.vm._watchers, this);
      }
      var i = this.deps.length;
      while (i--) {
        this.deps[i].removeSub(this);
      }
      this.active = false;
    }
  };

  return Watcher;
}();

var seenObjects = new _Set();
function traverse(val, seen) {
  var i = void 0,
      keys = void 0;
  if (!seen) {
    seen = seenObjects;
    seen.clear();
  }
  var isA = Array.isArray(val);
  var isO = isObject(val);
  if ((isA || isO) && Object.isExtensible(val)) {
    if (val.__ob__) {
      var depId = val.__ob__.dep.id;
      if (seen.has(depId)) {
        return;
      } else {
        seen.add(depId);
      }
    }
    if (isA) {
      i = val.length;
      while (i--) {
        traverse(val[i], seen);
      }
    } else if (isO) {
      keys = Object.keys(val);
      i = keys.length;
      while (i--) {
        traverse(val[keys[i]], seen);
      }
    }
  }
}

var arrayProto = Array.prototype;
var arrayMethods = Object.create(arrayProto)

/**
 * Intercept mutating methods and emit events
 */
;['push', 'pop', 'shift', 'unshift', 'splice', 'sort', 'reverse'].forEach(function (method) {
  // cache original method
  var original = arrayProto[method];
  def(arrayMethods, method, function mutator() {
    // avoid leaking arguments:
    // http://jsperf.com/closure-with-arguments
    var i = arguments.length;
    var args = new Array(i);
    while (i--) {
      args[i] = arguments[i];
    }
    var result = original.apply(this, args);
    var ob = this.__ob__;
    var inserted = void 0;
    switch (method) {
      case 'push':
        inserted = args;
        break;
      case 'unshift':
        inserted = args;
        break;
      case 'splice':
        inserted = args.slice(2);
        break;
    }
    if (inserted) ob.observeArray(inserted);
    // notify change
    ob.dep.notify();
    return result;
  });
});

var arrayKeys = Object.getOwnPropertyNames(arrayMethods);

/**
 * By default, when a reactive property is set, the new value is
 * also converted to become reactive. However when passing down props,
 * we don't want to force conversion because the value may be a nested value
 * under a frozen data structure. Converting it would defeat the optimization.
 */
var observerState = {
  shouldConvert: true,
  isSettingProps: false
};

/**
 * Observer class that are attached to each observed
 * object. Once attached, the observer converts target
 * object's property keys into getter/setters that
 * collect dependencies and dispatches updates.
 */
var Observer = function () {
  // number of vms that has this object as root $data

  function Observer(value) {
    this.value = value;
    this.dep = new Dep();
    this.vmCount = 0;
    def(value, '__ob__', this);
    if (Array.isArray(value)) {
      var augment = hasProto ? protoAugment : copyAugment;
      augment(value, arrayMethods, arrayKeys);
      this.observeArray(value);
    } else {
      this.walk(value);
    }
  }

  /**
   * Walk through each property and convert them into
   * getter/setters. This method should only be called when
   * value type is Object.
   */


  Observer.prototype.walk = function walk(obj) {
    var val = this.value;
    for (var key in obj) {
      defineReactive(val, key, obj[key]);
    }
  };

  /**
   * Observe a list of Array items.
   */


  Observer.prototype.observeArray = function observeArray(items) {
    for (var i = 0, l = items.length; i < l; i++) {
      observe(items[i]);
    }
  };

  return Observer;
}();

// helpers

/**
 * Augment an target Object or Array by intercepting
 * the prototype chain using __proto__
 */
function protoAugment(target, src) {
  /* eslint-disable no-proto */
  target.__proto__ = src;
  /* eslint-enable no-proto */
}

/**
 * Augment an target Object or Array by defining
 * hidden properties.
 *
 * istanbul ignore next
 */
function copyAugment(target, src, keys) {
  for (var i = 0, l = keys.length; i < l; i++) {
    var key = keys[i];
    def(target, key, src[key]);
  }
}

/**
 * Attempt to create an observer instance for a value,
 * returns the new observer if successfully observed,
 * or the existing observer if the value already has one.
 */
function observe(value) {
  if (!isObject(value)) {
    return;
  }
  var ob = void 0;
  if (hasOwn(value, '__ob__') && value.__ob__ instanceof Observer) {
    ob = value.__ob__;
  } else if (observerState.shouldConvert && !config._isServer && (Array.isArray(value) || isPlainObject(value)) && Object.isExtensible(value) && !value._isVue) {
    ob = new Observer(value);
  }
  return ob;
}

/**
 * Define a reactive property on an Object.
 */
function defineReactive(obj, key, val, customSetter) {
  var dep = new Dep();

  var property = Object.getOwnPropertyDescriptor(obj, key);
  if (property && property.configurable === false) {
    return;
  }

  // cater for pre-defined getter/setters
  var getter = property && property.get;
  var setter = property && property.set;

  var childOb = observe(val);
  Object.defineProperty(obj, key, {
    enumerable: true,
    configurable: true,
    get: function reactiveGetter() {
      var value = getter ? getter.call(obj) : val;
      if (Dep.target) {
        dep.depend();
        if (childOb) {
          childOb.dep.depend();
        }
        if (Array.isArray(value)) {
          for (var e, i = 0, l = value.length; i < l; i++) {
            e = value[i];
            e && e.__ob__ && e.__ob__.dep.depend();
          }
        }
      }
      return value;
    },
    set: function reactiveSetter(newVal) {
      var value = getter ? getter.call(obj) : val;
      if (newVal === value) {
        return;
      }
      if (process.env.NODE_ENV !== 'production' && customSetter) {
        customSetter();
      }
      if (setter) {
        setter.call(obj, newVal);
      } else {
        val = newVal;
      }
      childOb = observe(newVal);
      dep.notify();
    }
  });
}

/**
 * Set a property on an object. Adds the new property and
 * triggers change notification if the property doesn't
 * already exist.
 */
function set(obj, key, val) {
  if (Array.isArray(obj)) {
    obj.splice(key, 1, val);
    return val;
  }
  if (hasOwn(obj, key)) {
    obj[key] = val;
    return;
  }
  var ob = obj.__ob__;
  if (obj._isVue || ob && ob.vmCount) {
    process.env.NODE_ENV !== 'production' && warn('Avoid adding reactive properties to a Vue instance or its root $data ' + 'at runtime - delcare it upfront in the data option.');
    return;
  }
  if (!ob) {
    obj[key] = val;
    return;
  }
  defineReactive(ob.value, key, val);
  ob.dep.notify();
  return val;
}

/**
 * Delete a property and trigger change if necessary.
 */
function del(obj, key) {
  var ob = obj.__ob__;
  if (obj._isVue || ob && ob.vmCount) {
    process.env.NODE_ENV !== 'production' && warn('Avoid deleting properties on a Vue instance or its root $data ' + '- just set it to null.');
    return;
  }
  if (!hasOwn(obj, key)) {
    return;
  }
  delete obj[key];
  if (!ob) {
    return;
  }
  ob.dep.notify();
}

function initState(vm) {
  vm._watchers = [];
  initProps(vm);
  initData(vm);
  initComputed(vm);
  initMethods(vm);
  initWatch(vm);
}

function initProps(vm) {
  var props = vm.$options.props;
  var propsData = vm.$options.propsData;
  if (props) {
    var keys = vm.$options._propKeys = Object.keys(props);
    var isRoot = !vm.$parent;
    // root instance props should be converted
    observerState.shouldConvert = isRoot;

    var _loop = function _loop(i) {
      var key = keys[i];
      /* istanbul ignore else */
      if (process.env.NODE_ENV !== 'production') {
        defineReactive(vm, key, validateProp(key, props, propsData, vm), function () {
          if (vm.$parent && !observerState.isSettingProps) {
            warn('Avoid mutating a prop directly since the value will be ' + 'overwritten whenever the parent component re-renders. ' + 'Instead, use a data or computed property based on the prop\'s ' + ('value. Prop being mutated: "' + key + '"'), vm);
          }
        });
      } else {
        defineReactive(vm, key, validateProp(key, props, propsData, vm));
      }
    };

    for (var i = 0; i < keys.length; i++) {
      _loop(i);
    }
    observerState.shouldConvert = true;
  }
}

function initData(vm) {
  var data = vm.$options.data;
  data = vm._data = typeof data === 'function' ? data.call(vm) : data || {};
  if (!isPlainObject(data)) {
    data = {};
    process.env.NODE_ENV !== 'production' && warn('data functions should return an object.', vm);
  }
  // proxy data on instance
  var keys = Object.keys(data);
  var props = vm.$options.props;
  var i = keys.length;
  while (i--) {
    if (props && hasOwn(props, keys[i])) {
      process.env.NODE_ENV !== 'production' && warn('The data property "' + keys[i] + '" is already declared as a prop. ' + 'Use prop default value instead.', vm);
    } else {
      proxy(vm, keys[i]);
    }
  }
  // observe data
  observe(data);
  data.__ob__ && data.__ob__.vmCount++;
}

var computedSharedDefinition = {
  enumerable: true,
  configurable: true,
  get: noop,
  set: noop
};

function initComputed(vm) {
  var computed = vm.$options.computed;
  if (computed) {
    for (var _key in computed) {
      var userDef = computed[_key];
      if (typeof userDef === 'function') {
        computedSharedDefinition.get = makeComputedGetter(userDef, vm);
        computedSharedDefinition.set = noop;
      } else {
        computedSharedDefinition.get = userDef.get ? userDef.cache !== false ? makeComputedGetter(userDef.get, vm) : bind(userDef.get, vm) : noop;
        computedSharedDefinition.set = userDef.set ? bind(userDef.set, vm) : noop;
      }
      Object.defineProperty(vm, _key, computedSharedDefinition);
    }
  }
}

function makeComputedGetter(getter, owner) {
  var watcher = new Watcher(owner, getter, noop, {
    lazy: true
  });
  return function computedGetter() {
    if (watcher.dirty) {
      watcher.evaluate();
    }
    if (Dep.target) {
      watcher.depend();
    }
    return watcher.value;
  };
}

function initMethods(vm) {
  var methods = vm.$options.methods;
  if (methods) {
    for (var _key2 in methods) {
      vm[_key2] = bind(methods[_key2], vm);
    }
  }
}

function initWatch(vm) {
  var watch = vm.$options.watch;
  if (watch) {
    for (var _key3 in watch) {
      var handler = watch[_key3];
      if (Array.isArray(handler)) {
        for (var i = 0; i < handler.length; i++) {
          createWatcher(vm, _key3, handler[i]);
        }
      } else {
        createWatcher(vm, _key3, handler);
      }
    }
  }
}

function createWatcher(vm, key, handler) {
  var options = void 0;
  if (isPlainObject(handler)) {
    options = handler;
    handler = handler.handler;
  }
  if (typeof handler === 'string') {
    handler = vm[handler];
  }
  vm.$watch(key, handler, options);
}

function stateMixin(Vue) {
  // flow somehow has problems with directly declared definition object
  // when using Object.defineProperty, so we have to procedurally build up
  // the object here.
  var dataDef = {};
  dataDef.get = function () {
    return this._data;
  };
  if (process.env.NODE_ENV !== 'production') {
    dataDef.set = function (newData) {
      warn('Avoid replacing instance root $data. ' + 'Use nested data properties instead.', this);
    };
  }
  Object.defineProperty(Vue.prototype, '$data', dataDef);

  Vue.prototype.$watch = function (expOrFn, cb, options) {
    var vm = this;
    options = options || {};
    options.user = true;
    var watcher = new Watcher(vm, expOrFn, cb, options);
    if (options.immediate) {
      cb.call(vm, watcher.value);
    }
    return function unwatchFn() {
      watcher.teardown();
    };
  };
}

function proxy(vm, key) {
  if (!isReserved(key)) {
    Object.defineProperty(vm, key, {
      configurable: true,
      enumerable: true,
      get: function proxyGetter() {
        return vm._data[key];
      },
      set: function proxySetter(val) {
        vm._data[key] = val;
      }
    });
  }
}

var VNode = function VNode(tag, data, children, text, elm, ns, context, host, componentOptions) {
  this.tag = tag;
  this.data = data;
  this.children = children;
  this.text = text;
  this.elm = elm;
  this.ns = ns;
  this.context = context;
  this.host = host;
  this.key = data && data.key;
  this.componentOptions = componentOptions;
  this.child = undefined;
  this.parent = undefined;
  this.raw = false;
  // apply construct hook.
  // this is applied during render, before patch happens.
  // unlike other hooks, this is applied on both client and server.
  var constructHook = data && data.hook && data.hook.construct;
  if (constructHook) {
    constructHook(this);
  }
};

var emptyVNode = function emptyVNode() {
  return new VNode(undefined, undefined, undefined, '');
};

function normalizeChildren(children, ns) {
  // invoke children thunks.
  // components always receive their children as thunks so that they
  // can perform the actual render inside their own dependency collection cycle.
  if (typeof children === 'function') {
    children = children();
  }
  if (isPrimitive(children)) {
    return [createTextVNode(children)];
  }
  if (Array.isArray(children)) {
    var res = [];
    for (var i = 0, l = children.length; i < l; i++) {
      var c = children[i];
      var last = res[res.length - 1];
      //  nested
      if (Array.isArray(c)) {
        res.push.apply(res, normalizeChildren(c));
      } else if (isPrimitive(c)) {
        if (last && last.text) {
          last.text += String(c);
        } else {
          // convert primitive to vnode
          res.push(createTextVNode(c));
        }
      } else if (c instanceof VNode) {
        if (c.text && last && last.text) {
          last.text += c.text;
        } else {
          // inherit parent namespace
          if (ns) {
            applyNS(c, ns);
          }
          res.push(c);
        }
      }
    }
    return res;
  }
}

function createTextVNode(val) {
  return new VNode(undefined, undefined, undefined, String(val));
}

function applyNS(vnode, ns) {
  if (vnode.tag && !vnode.ns) {
    vnode.ns = ns;
    if (vnode.children) {
      for (var i = 0, l = vnode.children.length; i < l; i++) {
        applyNS(vnode.children[i], ns);
      }
    }
  }
}

// in case the child is also an abstract component, e.g. <transition-control>
// we want to recrusively retrieve the real component to be rendered
function getRealChild(vnode) {
  var compOptions = vnode && vnode.componentOptions;
  if (compOptions && compOptions.Ctor.options._abstract) {
    return getRealChild(compOptions.propsData && compOptions.propsData.child);
  } else {
    return vnode;
  }
}

function updateListeners(on, oldOn, add, remove) {
  var name = void 0,
      cur = void 0,
      old = void 0,
      fn = void 0,
      event = void 0,
      capture = void 0;
  for (name in on) {
    cur = on[name];
    old = oldOn[name];
    if (!old) {
      capture = name.charAt(0) === '!';
      event = capture ? name.slice(1) : name;
      if (Array.isArray(cur)) {
        add(event, cur.invoker = arrInvoker(cur), capture);
      } else {
        fn = cur;
        cur = on[name] = {};
        cur.fn = fn;
        add(event, cur.invoker = fnInvoker(cur), capture);
      }
    } else if (Array.isArray(old)) {
      old.length = cur.length;
      for (var i = 0; i < old.length; i++) {
        old[i] = cur[i];
      }on[name] = old;
    } else {
      old.fn = cur;
      on[name] = old;
    }
  }
  for (name in oldOn) {
    if (!on[name]) {
      event = name.charAt(0) === '!' ? name.slice(1) : name;
      remove(event, oldOn[name].invoker);
    }
  }
}

function arrInvoker(arr) {
  return function (ev) {
    var single = arguments.length === 1;
    for (var i = 0; i < arr.length; i++) {
      single ? arr[i](ev) : arr[i].apply(null, arguments);
    }
  };
}

function fnInvoker(o) {
  return function (ev) {
    var single = arguments.length === 1;
    single ? o.fn(ev) : o.fn.apply(null, arguments);
  };
}

function initLifecycle(vm) {
  var options = vm.$options;

  vm.$parent = options.parent;
  vm.$root = vm.$parent ? vm.$parent.$root : vm;
  if (vm.$parent && !options._abstract) {
    vm.$parent.$children.push(vm);
  }

  vm.$children = [];
  vm.$refs = {};

  vm._watcher = null;
  vm._inactive = false;
  vm._isMounted = false;
  vm._isDestroyed = false;
  vm._isBeingDestroyed = false;
}

function lifecycleMixin(Vue) {
  Vue.prototype._mount = function (el, hydrating) {
    var vm = this;
    vm.$el = el;
    if (!vm.$options.render) {
      vm.$options.render = emptyVNode;
      if (process.env.NODE_ENV !== 'production') {
        /* istanbul ignore if */
        if (vm.$options.template) {
          warn('You are using the runtime-only build of Vue where the template ' + 'option is not available. Either pre-compile the templates into ' + 'render functions, or use the compiler-included build.', vm);
        } else {
          warn('Failed to mount component: template or render function not defined.', vm);
        }
      }
    }
    callHook(vm, 'beforeMount');
    vm._watcher = new Watcher(vm, function () {
      vm._update(vm._render(), hydrating);
    }, noop);
    hydrating = false;
    // root instance, call mounted on self
    // mounted is called for child components in its inserted hook
    if (vm.$root === vm) {
      vm._isMounted = true;
      callHook(vm, 'mounted');
    }
    return vm;
  };

  Vue.prototype._update = function (vnode, hydrating) {
    var vm = this;
    if (vm._isMounted) {
      callHook(vm, 'beforeUpdate');
    }
    var prevEl = vm.$el;
    if (!vm._vnode) {
      // Vue.prototype.__patch__ is injected in entry points
      // based on the rendering backend used.
      vm.$el = vm.__patch__(vm.$el, vnode, hydrating);
    } else {
      vm.$el = vm.__patch__(vm._vnode, vnode);
    }
    vm._vnode = vnode;
    // update __vue__ reference
    if (prevEl) {
      prevEl.__vue__ = null;
    }
    if (vm.$el) {
      vm.$el.__vue__ = vm;
    }
    // if parent is an HOC, update its $el as well
    if (vm.$vnode && vm.$parent && vm.$vnode === vm.$parent._vnode) {
      vm.$parent.$el = vm.$el;
    }
    if (vm._isMounted) {
      callHook(vm, 'updated');
    }
  };

  Vue.prototype._updateFromParent = function (propsData, listeners, parentVnode, renderChildren) {
    var vm = this;
    vm.$options._parentVnode = parentVnode;
    vm.$options._renderChildren = renderChildren;
    // update props
    if (propsData && vm.$options.props) {
      observerState.shouldConvert = false;
      if (process.env.NODE_ENV !== 'production') {
        observerState.isSettingProps = true;
      }
      var propKeys = vm.$options._propKeys || [];
      for (var i = 0; i < propKeys.length; i++) {
        var key = propKeys[i];
        vm[key] = validateProp(key, vm.$options.props, propsData, vm);
      }
      observerState.shouldConvert = true;
      if (process.env.NODE_ENV !== 'production') {
        observerState.isSettingProps = false;
      }
    }
    // update listeners
    if (listeners) {
      var oldListeners = vm.$options._parentListeners;
      vm.$options._parentListeners = listeners;
      vm._updateListeners(listeners, oldListeners);
    }
  };

  Vue.prototype.$forceUpdate = function () {
    var vm = this;
    if (vm._watcher) {
      vm._watcher.update();
    }
    if (vm._watchers.length) {
      for (var i = 0; i < vm._watchers.length; i++) {
        vm._watchers[i].update(true /* shallow */);
      }
    }
  };

  Vue.prototype.$destroy = function () {
    var vm = this;
    if (vm._isBeingDestroyed) {
      return;
    }
    callHook(vm, 'beforeDestroy');
    vm._isBeingDestroyed = true;
    // remove self from parent
    var parent = vm.$parent;
    if (parent && !parent._isBeingDestroyed && !vm.$options._abstract) {
      remove(parent.$children, vm);
    }
    // teardown watchers
    if (vm._watcher) {
      vm._watcher.teardown();
    }
    var i = vm._watchers.length;
    while (i--) {
      vm._watchers[i].teardown();
    }
    // remove reference from data ob
    // frozen object may not have observer.
    if (vm._data.__ob__) {
      vm._data.__ob__.vmCount--;
    }
    // call the last hook...
    vm._isDestroyed = true;
    callHook(vm, 'destroyed');
    // turn off all instance listeners.
    vm.$off();
    // remove __vue__ reference
    if (vm.$el) {
      vm.$el.__vue__ = null;
    }
  };
}

function callHook(vm, hook) {
  vm.$emit('pre-hook:' + hook);
  var handlers = vm.$options[hook];
  if (handlers) {
    for (var i = 0, j = handlers.length; i < j; i++) {
      handlers[i].call(vm);
    }
  }
  vm.$emit('hook:' + hook);
}

var hooks = { init: init, prepatch: prepatch, insert: insert, destroy: destroy };
var hooksToMerge = Object.keys(hooks);

function createComponent(Ctor, data, parent, context, host, _children, tag) {
  // ensure children is a thunk
  if (process.env.NODE_ENV !== 'production' && _children && typeof _children !== 'function') {
    warn('A component\'s children should be a function that returns the ' + 'children array. This allows the component to track the children ' + 'dependencies and optimizes re-rendering.');
  }

  if (!Ctor) {
    return;
  }

  if (isObject(Ctor)) {
    Ctor = Vue.extend(Ctor);
  }

  if (typeof Ctor !== 'function') {
    if (process.env.NODE_ENV !== 'production') {
      warn('Invalid Component definition: ' + Ctor, parent);
    }
    return;
  }

  // async component
  if (!Ctor.cid) {
    if (Ctor.resolved) {
      Ctor = Ctor.resolved;
    } else {
      Ctor = resolveAsyncComponent(Ctor, function () {
        // it's ok to queue this on every render because
        // $forceUpdate is buffered. this is only called
        // if the
        parent.$forceUpdate();
      });
      if (!Ctor) {
        // return nothing if this is indeed an async component
        // wait for the callback to trigger parent update.
        return;
      }
    }
  }

  data = data || {};

  // extract props
  var propsData = extractProps(data, Ctor);

  // functional component
  if (Ctor.options.functional) {
    var _ret = function () {
      var props = {};
      var propOptions = Ctor.options.props;
      if (propOptions) {
        Object.keys(propOptions).forEach(function (key) {
          props[key] = validateProp(key, propOptions, propsData);
        });
      }
      return {
        v: Ctor.options.render.call(null, parent.$createElement, { props: props, parent: parent, data: data, children: function children() {
            return normalizeChildren(_children);
          } })
      };
    }();

    if (typeof _ret === "object") return _ret.v;
  }

  // merge component management hooks onto the placeholder node
  mergeHooks(data);

  // extract listeners, since these needs to be treated as
  // child component listeners instead of DOM listeners
  var listeners = data.on;
  if (listeners) {
    delete data.on;
  }

  // return a placeholder vnode
  var name = Ctor.options.name || tag;
  var vnode = new VNode('vue-component-' + Ctor.cid + (name ? '-' + name : ''), data, undefined, undefined, undefined, undefined, context, host, { Ctor: Ctor, propsData: propsData, listeners: listeners, parent: parent, tag: tag, children: _children });
  return vnode;
}

function createComponentInstanceForVnode(vnode // we know it's MountedComponentVNode but flow doesn't
) {
  var vnodeComponentOptions = vnode.componentOptions;
  var options = {
    _isComponent: true,
    parent: vnodeComponentOptions.parent,
    propsData: vnodeComponentOptions.propsData,
    _componentTag: vnodeComponentOptions.tag,
    _parentVnode: vnode,
    _parentListeners: vnodeComponentOptions.listeners,
    _renderChildren: vnodeComponentOptions.children
  };
  // check inline-template render functions
  var inlineTemplate = vnode.data.inlineTemplate;
  if (inlineTemplate) {
    options.render = inlineTemplate.render;
    options.staticRenderFns = inlineTemplate.staticRenderFns;
  }
  return new vnodeComponentOptions.Ctor(options);
}

function init(vnode, hydrating) {
  if (!vnode.child) {
    var child = vnode.child = createComponentInstanceForVnode(vnode);
    child.$mount(hydrating ? vnode.elm : undefined, hydrating);
  }
}

function prepatch(oldVnode, vnode) {
  var options = vnode.componentOptions;
  vnode.child = oldVnode.child;
  vnode.child._updateFromParent(options.propsData, // updated props
  options.listeners, // updated listeners
  vnode, // new parent vnode
  options.children // new children
  );
}

function insert(vnode) {
  if (!vnode.child._isMounted) {
    vnode.child._isMounted = true;
    callHook(vnode.child, 'mounted');
  }
  if (vnode.data.keepAlive) {
    vnode.child._inactive = false;
    callHook(vnode.child, 'activated');
  }
}

function destroy(vnode) {
  if (!vnode.child._isDestroyed) {
    if (!vnode.data.keepAlive) {
      vnode.child.$destroy();
    } else {
      vnode.child._inactive = true;
      callHook(vnode.child, 'deactivated');
    }
  }
}

function resolveAsyncComponent(factory, cb) {
  if (factory.requested) {
    // pool callbacks
    factory.pendingCallbacks.push(cb);
  } else {
    var _ret2 = function () {
      factory.requested = true;
      var cbs = factory.pendingCallbacks = [cb];
      var sync = true;
      factory(
      // resolve
      function (res) {
        if (isObject(res)) {
          res = Vue.extend(res);
        }
        // cache resolved
        factory.resolved = res;
        // invoke callbacks only if this is not a synchronous resolve
        // (async resolves are shimmed as synchronous during SSR)
        if (!sync) {
          for (var i = 0, l = cbs.length; i < l; i++) {
            cbs[i](res);
          }
        }
      },
      // reject
      function (reason) {
        process.env.NODE_ENV !== 'production' && warn('Failed to resolve async component: ' + factory + (reason ? '\nReason: ' + reason : ''));
      });
      sync = false;
      // return in case resolved synchronously
      return {
        v: factory.resolved
      };
    }();

    if (typeof _ret2 === "object") return _ret2.v;
  }
}

function extractProps(data, Ctor) {
  // we are only extrating raw values here.
  // validation and default values are handled in the child
  // component itself.
  var propOptions = Ctor.options.props;
  if (!propOptions) {
    return;
  }
  var res = {};
  var attrs = data.attrs;
  var props = data.props;
  var staticAttrs = data.staticAttrs;
  if (!attrs && !props && !staticAttrs) {
    return res;
  }
  for (var key in propOptions) {
    var altKey = hyphenate(key);
    checkProp(res, attrs, key, altKey) || checkProp(res, props, key, altKey) || checkProp(res, staticAttrs, key, altKey);
  }
  return res;
}

function checkProp(res, hash, key, altKey) {
  if (hash) {
    if (hasOwn(hash, key)) {
      res[key] = hash[key];
      delete hash[key];
      return true;
    } else if (hasOwn(hash, altKey)) {
      res[key] = hash[altKey];
      delete hash[altKey];
      return true;
    }
  }
  return false;
}

function mergeHooks(data) {
  if (data.hook) {
    for (var i = 0; i < hooksToMerge.length; i++) {
      var key = hooksToMerge[i];
      var fromParent = data.hook[key];
      var ours = hooks[key];
      data.hook[key] = fromParent ? mergeHook$1(ours, fromParent) : ours;
    }
  } else {
    data.hook = hooks;
  }
}

function mergeHook$1(a, b) {
  // since all hooks have at most two args, use fixed args
  // to avoid having to use fn.apply().
  return function (_, __) {
    a(_, __);
    b(_, __);
  };
}

// wrapper function for providing a more flexible interface
// without getting yelled at by flow
function createElement(tag, data, children) {
  if (data && (Array.isArray(data) || typeof data !== 'object')) {
    children = data;
    data = undefined;
  }
  return _createElement.call(this, tag, data, children);
}

function _createElement(tag, data, children) {
  // make sure to expose real self instead of proxy
  var context = this._self;
  var parent = renderState.activeInstance;
  var host = context !== parent ? parent : undefined;
  if (!parent) {
    process.env.NODE_ENV !== 'production' && warn('createElement cannot be called outside of component ' + 'render functions.');
    return;
  }
  if (!tag) {
    // in case of component :is set to falsy value
    return emptyVNode();
  }
  if (typeof tag === 'string') {
    var Ctor = void 0;
    if (config.isReservedTag(tag)) {
      // platform built-in elements
      return new VNode(tag, data, normalizeChildren(children), undefined, undefined, undefined, context, host);
    } else if (Ctor = resolveAsset(context.$options, 'components', tag)) {
      // component
      return createComponent(Ctor, data, parent, context, host, children, tag);
    } else {
      // unknown or namespaced elements
      // check at runtime because it may get assigned a namespace when its
      // parent normalizes children
      var ns = config.getTagNamespace(tag);
      return new VNode(tag, data, normalizeChildren(children, ns), undefined, undefined, ns, context, host);
    }
  } else {
    // direct component options / constructor
    return createComponent(tag, data, parent, context, host, children);
  }
}

var renderState = {
  activeInstance: null
};

function initRender(vm) {
  vm.$vnode = null; // the placeholder node in parent tree
  vm._vnode = null; // the root of the child tree
  vm._staticTrees = null;
  vm.$slots = {};
  // bind the public createElement fn to this instance
  // so that we get proper render context inside it.
  vm.$createElement = bind(createElement, vm);
  if (vm.$options.el) {
    vm.$mount(vm.$options.el);
  }
}

function renderMixin(Vue) {
  Vue.prototype.$nextTick = function (fn) {
    nextTick(fn, this);
  };

  Vue.prototype._render = function () {
    var vm = this;

    // set current active instance
    var prev = renderState.activeInstance;
    renderState.activeInstance = vm;

    var _vm$$options = vm.$options;
    var render = _vm$$options.render;
    var staticRenderFns = _vm$$options.staticRenderFns;
    var _renderChildren = _vm$$options._renderChildren;
    var _parentVnode = _vm$$options._parentVnode;


    if (staticRenderFns && !this._staticTrees) {
      this._staticTrees = [];
    }
    // set parent vnode. this allows render functions to have access
    // to the data on the placeholder node.
    this.$vnode = _parentVnode;
    // resolve slots. becaues slots are rendered in parent scope,
    // we set the activeInstance to parent.
    if (_renderChildren) {
      resolveSlots(vm, _renderChildren);
    }
    // render self
    var vnode = render.call(vm._renderProxy, vm.$createElement);
    // return empty vnode in case the render function errored out
    if (!(vnode instanceof VNode)) {
      if (process.env.NODE_ENV !== 'production' && Array.isArray(vnode)) {
        warn('Multiple root nodes returned from render function. Render function ' + 'should return a single root node.', vm);
      }
      vnode = emptyVNode();
    }
    // set parent
    vnode.parent = _parentVnode;
    // restore render state
    renderState.activeInstance = prev;
    return vnode;
  };

  // shorthands used in render functions
  Vue.prototype._h = createElement;
  // toString for mustaches
  Vue.prototype._s = _toString;
  // number conversion
  Vue.prototype._n = toNumber;

  //
  Vue.prototype._m = function renderStatic(index) {
    return this._staticTrees[index] || (this._staticTrees[index] = this.$options.staticRenderFns[index].call(this._renderProxy));
  };

  // filter resolution helper
  var identity = function identity(_) {
    return _;
  };
  Vue.prototype._f = function resolveFilter(id) {
    return resolveAsset(this.$options, 'filters', id, true) || identity;
  };

  // render v-for
  Vue.prototype._l = function renderList(val, render) {
    var ret = void 0,
        i = void 0,
        l = void 0,
        keys = void 0,
        key = void 0;
    if (Array.isArray(val)) {
      ret = new Array(val.length);
      for (i = 0, l = val.length; i < l; i++) {
        ret[i] = render(val[i], i);
      }
    } else if (typeof val === 'number') {
      ret = new Array(val);
      for (i = 0; i < val; i++) {
        ret[i] = render(i + 1, i);
      }
    } else if (isObject(val)) {
      keys = Object.keys(val);
      ret = new Array(keys.length);
      for (i = 0, l = keys.length; i < l; i++) {
        key = keys[i];
        ret[i] = render(val[key], key, i);
      }
    }
    return ret;
  };

  // apply v-bind object
  Vue.prototype._b = function bindProps(vnode, value) {
    if (value) {
      if (!isObject(value)) {
        process.env.NODE_ENV !== 'production' && warn('v-bind without argument expects an Object or Array value', this);
      } else {
        if (Array.isArray(value)) {
          value = toObject(value);
        }
        var data = vnode.data;
        for (var key in value) {
          var hash = config.mustUseProp(key) ? data.props || (data.props = {}) : data.attrs || (data.attrs = {});
          hash[key] = value[key];
        }
      }
    }
  };

  // expose v-on keyCodes
  Vue.prototype._k = function getKeyCodes(key) {
    return config.keyCodes[key];
  };
}

function resolveSlots(vm, renderChildren) {
  if (renderChildren) {
    var children = normalizeChildren(renderChildren) || [];
    var slots = {};
    var defaultSlot = [];
    var name = void 0,
        child = void 0;
    for (var i = 0, l = children.length; i < l; i++) {
      child = children[i];
      if (name = child.data && child.data.slot) {
        var slot = slots[name] || (slots[name] = []);
        if (child.tag === 'template') {
          slot.push.apply(slot, child.children);
        } else {
          slot.push(child);
        }
      } else {
        defaultSlot.push(child);
      }
    }
    if (defaultSlot.length && !(defaultSlot.length === 1 && defaultSlot[0].text === ' ')) {
      slots['default'] = defaultSlot;
    }
    vm.$slots = slots;
  }
}

function initEvents(vm) {
  vm._events = Object.create(null);
  // init parent attached events
  var listeners = vm.$options._parentListeners;
  var on = bind(vm.$on, vm);
  var off = bind(vm.$off, vm);
  vm._updateListeners = function (listeners, oldListeners) {
    updateListeners(listeners, oldListeners || {}, on, off);
  };
  if (listeners) {
    vm._updateListeners(listeners);
  }
}

function eventsMixin(Vue) {
  Vue.prototype.$on = function (event, fn) {
    var vm = this;(vm._events[event] || (vm._events[event] = [])).push(fn);
    return vm;
  };

  Vue.prototype.$once = function (event, fn) {
    var vm = this;
    function on() {
      vm.$off(event, on);
      fn.apply(vm, arguments);
    }
    on.fn = fn;
    vm.$on(event, on);
    return vm;
  };

  Vue.prototype.$off = function (event, fn) {
    var vm = this;
    // all
    if (!arguments.length) {
      vm._events = Object.create(null);
      return vm;
    }
    // specific event
    var cbs = vm._events[event];
    if (!cbs) {
      return vm;
    }
    if (arguments.length === 1) {
      vm._events[event] = null;
      return vm;
    }
    // specific handler
    var cb = void 0;
    var i = cbs.length;
    while (i--) {
      cb = cbs[i];
      if (cb === fn || cb.fn === fn) {
        cbs.splice(i, 1);
        break;
      }
    }
    return vm;
  };

  Vue.prototype.$emit = function (event) {
    var vm = this;
    var cbs = vm._events[event];
    if (cbs) {
      cbs = cbs.length > 1 ? toArray(cbs) : cbs;
      var args = toArray(arguments, 1);
      for (var i = 0, l = cbs.length; i < l; i++) {
        cbs[i].apply(vm, args);
      }
    }
    return vm;
  };
}

var uid = 0;

function initMixin(Vue) {
  Vue.prototype._init = function (options) {
    var vm = this;
    // a uid
    vm._uid = uid++;
    // a flag to avoid this being observed
    vm._isVue = true;
    // merge options
    if (options && options._isComponent) {
      // optimize internal component instantiation
      // since dynamic options merging is pretty slow, and none of the
      // internal component options needs special treatment.
      initInternalComponent(vm, options);
    } else {
      vm.$options = mergeOptions(resolveConstructorOptions(vm), options || {}, vm);
    }
    /* istanbul ignore else */
    if (process.env.NODE_ENV !== 'production') {
      initProxy(vm);
    } else {
      vm._renderProxy = vm;
    }
    // expose real self
    vm._self = vm;
    initLifecycle(vm);
    initEvents(vm);
    callHook(vm, 'beforeCreate');
    initState(vm);
    callHook(vm, 'created');
    initRender(vm);
  };

  function initInternalComponent(vm, options) {
    var opts = vm.$options = Object.create(resolveConstructorOptions(vm));
    // doing this because it's faster than dynamic enumeration.
    opts.parent = options.parent;
    opts.propsData = options.propsData;
    opts._parentVnode = options._parentVnode;
    opts._parentListeners = options._parentListeners;
    opts._renderChildren = options._renderChildren;
    opts._componentTag = options._componentTag;
    if (options.render) {
      opts.render = options.render;
      opts.staticRenderFns = options.staticRenderFns;
    }
  }

  function resolveConstructorOptions(vm) {
    var Ctor = vm.constructor;
    var options = Ctor.options;
    if (Ctor.super) {
      var superOptions = Ctor.super.options;
      var cachedSuperOptions = Ctor.superOptions;
      if (superOptions !== cachedSuperOptions) {
        // super option changed
        Ctor.superOptions = superOptions;
        options = Ctor.options = mergeOptions(superOptions, Ctor.extendOptions);
        if (options.name) {
          options.components[options.name] = Ctor;
        }
      }
    }
    return options;
  }
}

function Vue(options) {
  this._init(options);
}

initMixin(Vue);
stateMixin(Vue);
eventsMixin(Vue);
lifecycleMixin(Vue);
renderMixin(Vue);

var warn = void 0;
var formatComponentName = void 0;

if (process.env.NODE_ENV !== 'production') {
  (function () {
    var hasConsole = typeof console !== 'undefined';

    warn = function warn(msg, vm) {
      if (hasConsole && !config.silent) {
        console.error('[Vue warn]: ' + msg + (vm ? formatComponentName(vm) : ''));
      }
    };

    formatComponentName = function formatComponentName(vm) {
      if (vm.$root === vm) {
        return ' (found in root instance)';
      }
      var name = vm._isVue ? vm.$options.name || vm.$options._componentTag : vm.name;
      return name ? ' (found in component: <' + hyphenate(name) + '>)' : ' (found in anonymous component. Use the "name" option for better debugging messages)';
    };
  })();
}

/**
 * Option overwriting strategies are functions that handle
 * how to merge a parent option value and a child option
 * value into the final value.
 */
var strats = config.optionMergeStrategies;

/**
 * Options with restrictions
 */
if (process.env.NODE_ENV !== 'production') {
  strats.el = strats.propsData = function (parent, child, vm, key) {
    if (!vm) {
      warn('option "' + key + '" can only be used during instance ' + 'creation with the `new` keyword.');
    }
    return defaultStrat(parent, child);
  };

  strats.name = function (parent, child, vm) {
    if (vm) {
      warn('options "name" can only be used as a component definition option, ' + 'not during instance creation.');
    }
    return defaultStrat(parent, child);
  };
}

/**
 * Helper that recursively merges two data objects together.
 */
function mergeData(to, from) {
  var key = void 0,
      toVal = void 0,
      fromVal = void 0;
  for (key in from) {
    toVal = to[key];
    fromVal = from[key];
    if (!hasOwn(to, key)) {
      set(to, key, fromVal);
    } else if (isObject(toVal) && isObject(fromVal)) {
      mergeData(toVal, fromVal);
    }
  }
  return to;
}

/**
 * Data
 */
strats.data = function (parentVal, childVal, vm) {
  if (!vm) {
    // in a Vue.extend merge, both should be functions
    if (!childVal) {
      return parentVal;
    }
    if (typeof childVal !== 'function') {
      process.env.NODE_ENV !== 'production' && warn('The "data" option should be a function ' + 'that returns a per-instance value in component ' + 'definitions.', vm);
      return parentVal;
    }
    if (!parentVal) {
      return childVal;
    }
    // when parentVal & childVal are both present,
    // we need to return a function that returns the
    // merged result of both functions... no need to
    // check if parentVal is a function here because
    // it has to be a function to pass previous merges.
    return function mergedDataFn() {
      return mergeData(childVal.call(this), parentVal.call(this));
    };
  } else if (parentVal || childVal) {
    return function mergedInstanceDataFn() {
      // instance merge
      var instanceData = typeof childVal === 'function' ? childVal.call(vm) : childVal;
      var defaultData = typeof parentVal === 'function' ? parentVal.call(vm) : undefined;
      if (instanceData) {
        return mergeData(instanceData, defaultData);
      } else {
        return defaultData;
      }
    };
  }
};

/**
 * Hooks and param attributes are merged as arrays.
 */
function mergeHook(parentVal, childVal) {
  return childVal ? parentVal ? parentVal.concat(childVal) : Array.isArray(childVal) ? childVal : [childVal] : parentVal;
}

config._lifecycleHooks.forEach(function (hook) {
  strats[hook] = mergeHook;
});

/**
 * Assets
 *
 * When a vm is present (instance creation), we need to do
 * a three-way merge between constructor options, instance
 * options and parent options.
 */
function mergeAssets(parentVal, childVal) {
  var res = Object.create(parentVal || null);
  return childVal ? extend(res, childVal) : res;
}

config._assetTypes.forEach(function (type) {
  strats[type + 's'] = mergeAssets;
});

/**
 * Watchers.
 *
 * Watchers hashes should not overwrite one
 * another, so we merge them as arrays.
 */
strats.watch = function (parentVal, childVal) {
  /* istanbul ignore if */
  if (!childVal) return parentVal;
  if (!parentVal) return childVal;
  var ret = {};
  extend(ret, parentVal);
  for (var key in childVal) {
    var parent = ret[key];
    var child = childVal[key];
    if (parent && !Array.isArray(parent)) {
      parent = [parent];
    }
    ret[key] = parent ? parent.concat(child) : [child];
  }
  return ret;
};

/**
 * Other object hashes.
 */
strats.props = strats.methods = strats.computed = function (parentVal, childVal) {
  if (!childVal) return parentVal;
  if (!parentVal) return childVal;
  var ret = Object.create(null);
  extend(ret, parentVal);
  extend(ret, childVal);
  return ret;
};

/**
 * Default strategy.
 */
var defaultStrat = function defaultStrat(parentVal, childVal) {
  return childVal === undefined ? parentVal : childVal;
};

/**
 * Make sure component options get converted to actual
 * constructors.
 */
function normalizeComponents(options) {
  if (options.components) {
    var components = options.components;
    var def = void 0;
    for (var key in components) {
      var lower = key.toLowerCase();
      if (isBuiltInTag(lower) || config.isReservedTag(lower)) {
        process.env.NODE_ENV !== 'production' && warn('Do not use built-in or reserved HTML elements as component ' + 'id: ' + key);
        continue;
      }
      def = components[key];
      if (isPlainObject(def)) {
        components[key] = Vue.extend(def);
      }
    }
  }
}

/**
 * Ensure all props option syntax are normalized into the
 * Object-based format.
 */
function normalizeProps(options) {
  var props = options.props;
  if (!props) return;
  var res = {};
  var i = void 0,
      val = void 0,
      name = void 0;
  if (Array.isArray(props)) {
    i = props.length;
    while (i--) {
      val = props[i];
      if (typeof val === 'string') {
        name = camelize(val);
        res[name] = { type: null };
      } else if (process.env.NODE_ENV !== 'production') {
        warn('props must be strings when using array syntax.');
      }
    }
  } else if (isPlainObject(props)) {
    for (var key in props) {
      val = props[key];
      name = camelize(key);
      res[name] = isPlainObject(val) ? val : { type: val };
    }
  }
  options.props = res;
}

/**
 * Normalize raw function directives into object format.
 */
function normalizeDirectives(options) {
  var dirs = options.directives;
  if (dirs) {
    for (var key in dirs) {
      var def = dirs[key];
      if (typeof def === 'function') {
        dirs[key] = { bind: def, update: def };
      }
    }
  }
}

/**
 * Merge two option objects into a new one.
 * Core utility used in both instantiation and inheritance.
 */
function mergeOptions(parent, child, vm) {
  normalizeComponents(child);
  normalizeProps(child);
  normalizeDirectives(child);
  var extendsFrom = child.extends;
  if (extendsFrom) {
    parent = typeof extendsFrom === 'function' ? mergeOptions(parent, extendsFrom.options, vm) : mergeOptions(parent, extendsFrom, vm);
  }
  if (child.mixins) {
    for (var i = 0, l = child.mixins.length; i < l; i++) {
      var mixin = child.mixins[i];
      if (mixin.prototype instanceof Vue) {
        mixin = mixin.options;
      }
      parent = mergeOptions(parent, mixin, vm);
    }
  }
  var options = {};
  var key = void 0;
  for (key in parent) {
    mergeField(key);
  }
  for (key in child) {
    if (!hasOwn(parent, key)) {
      mergeField(key);
    }
  }
  function mergeField(key) {
    var strat = strats[key] || defaultStrat;
    options[key] = strat(parent[key], child[key], vm, key);
  }
  return options;
}

/**
 * Resolve an asset.
 * This function is used because child instances need access
 * to assets defined in its ancestor chain.
 */
function resolveAsset(options, type, id, warnMissing) {
  /* istanbul ignore if */
  if (typeof id !== 'string') {
    return;
  }
  var assets = options[type];
  var res = assets[id] ||
  // camelCase ID
  assets[camelize(id)] ||
  // Pascal Case ID
  assets[capitalize(camelize(id))];
  if (process.env.NODE_ENV !== 'production' && warnMissing && !res) {
    warn('Failed to resolve ' + type.slice(0, -1) + ': ' + id, options);
  }
  return res;
}

function validateProp(key, propOptions, propsData, vm) {
  /* istanbul ignore if */
  if (!propsData) return;
  var prop = propOptions[key];
  var absent = !hasOwn(propsData, key);
  var value = propsData[key];
  // handle boolean props
  if (prop.type === Boolean) {
    if (absent && !hasOwn(prop, 'default')) {
      value = false;
    } else if (value === '' || value === hyphenate(key)) {
      value = true;
    }
  }
  // check default value
  if (value === undefined) {
    value = getPropDefaultValue(vm, prop, key);
    // since the default value is a fresh copy,
    // make sure to observe it.
    observerState.shouldConvert = true;
    observe(value);
    observerState.shouldConvert = false;
  }
  if (process.env.NODE_ENV !== 'production') {
    assertProp(prop, key, value, vm, absent);
  }
  return value;
}

/**
 * Get the default value of a prop.
 */
function getPropDefaultValue(vm, prop, name) {
  // no default, return undefined
  if (!hasOwn(prop, 'default')) {
    return undefined;
  }
  var def = prop.default;
  // warn against non-factory defaults for Object & Array
  if (isObject(def)) {
    process.env.NODE_ENV !== 'production' && warn('Invalid default value for prop "' + name + '": ' + 'Props with type Object/Array must use a factory function ' + 'to return the default value.', vm);
  }
  // call factory function for non-Function types
  return typeof def === 'function' && prop.type !== Function ? def.call(vm) : def;
}

/**
 * Assert whether a prop is valid.
 */
function assertProp(prop, name, value, vm, absent) {
  if (prop.required && absent) {
    warn('Missing required prop: "' + name + '"', vm);
    return;
  }
  if (value == null && !prop.required) {
    return;
  }
  var type = prop.type;
  var valid = !type;
  var expectedTypes = [];
  if (type) {
    if (!Array.isArray(type)) {
      type = [type];
    }
    for (var i = 0; i < type.length && !valid; i++) {
      var assertedType = assertType(value, type[i]);
      expectedTypes.push(assertedType.expectedType);
      valid = assertedType.valid;
    }
  }
  if (!valid) {
    warn('Invalid prop: type check failed for prop "' + name + '".' + ' Expected ' + expectedTypes.map(capitalize).join(', ') + ', got ' + Object.prototype.toString.call(value).slice(8, -1) + '.', vm);
    return;
  }
  var validator = prop.validator;
  if (validator) {
    if (!validator(value)) {
      warn('Invalid prop: custom validator check failed for prop "' + name + '".', vm);
    }
  }
}

/**
 * Assert the type of a value
 */
function assertType(value, type) {
  var valid = void 0;
  var expectedType = void 0;
  if (type === String) {
    expectedType = 'string';
    valid = typeof value === expectedType;
  } else if (type === Number) {
    expectedType = 'number';
    valid = typeof value === expectedType;
  } else if (type === Boolean) {
    expectedType = 'boolean';
    valid = typeof value === expectedType;
  } else if (type === Function) {
    expectedType = 'function';
    valid = typeof value === expectedType;
  } else if (type === Object) {
    expectedType = 'Object';
    valid = isPlainObject(value);
  } else if (type === Array) {
    expectedType = 'Array';
    valid = Array.isArray(value);
  } else {
    expectedType = type.name || type.toString();
    valid = value instanceof type;
  }
  return {
    valid: valid,
    expectedType: expectedType
  };
}



var util = Object.freeze({
	defineReactive: defineReactive,
	_toString: _toString,
	toNumber: toNumber,
	makeMap: makeMap,
	isBuiltInTag: isBuiltInTag,
	remove: remove,
	hasOwn: hasOwn,
	isPrimitive: isPrimitive,
	cached: cached,
	camelize: camelize,
	capitalize: capitalize,
	hyphenate: hyphenate,
	bind: bind,
	toArray: toArray,
	extend: extend,
	isObject: isObject,
	isPlainObject: isPlainObject,
	toObject: toObject,
	noop: noop,
	no: no,
	genStaticKeys: genStaticKeys,
	isReserved: isReserved,
	def: def,
	parsePath: parsePath,
	hasProto: hasProto,
	inBrowser: inBrowser,
	devtools: devtools,
	UA: UA,
	nextTick: nextTick,
	get _Set () { return _Set; },
	mergeOptions: mergeOptions,
	resolveAsset: resolveAsset,
	get warn () { return warn; },
	validateProp: validateProp
});

function initUse(Vue) {
  Vue.use = function (plugin) {
    /* istanbul ignore if */
    if (plugin.installed) {
      return;
    }
    // additional parameters
    var args = toArray(arguments, 1);
    args.unshift(this);
    if (typeof plugin.install === 'function') {
      plugin.install.apply(plugin, args);
    } else {
      plugin.apply(null, args);
    }
    plugin.installed = true;
    return this;
  };
}

function initMixin$1(Vue) {
  Vue.mixin = function (mixin) {
    Vue.options = mergeOptions(Vue.options, mixin);
  };
}

function initExtend(Vue) {
  /**
   * Each instance constructor, including Vue, has a unique
   * cid. This enables us to create wrapped "child
   * constructors" for prototypal inheritance and cache them.
   */
  Vue.cid = 0;
  var cid = 1;

  /**
   * Class inheritance
   */
  Vue.extend = function (extendOptions) {
    extendOptions = extendOptions || {};
    var Super = this;
    var isFirstExtend = Super.cid === 0;
    if (isFirstExtend && extendOptions._Ctor) {
      return extendOptions._Ctor;
    }
    var name = extendOptions.name || Super.options.name;
    if (process.env.NODE_ENV !== 'production') {
      if (!/^[a-zA-Z][\w-]*$/.test(name)) {
        warn('Invalid component name: "' + name + '". Component names ' + 'can only contain alphanumeric characaters and the hyphen.');
        name = null;
      }
    }
    var Sub = function VueComponent(options) {
      this._init(options);
    };
    Sub.prototype = Object.create(Super.prototype);
    Sub.prototype.constructor = Sub;
    Sub.cid = cid++;
    Sub.options = mergeOptions(Super.options, extendOptions);
    Sub['super'] = Super;
    // allow further extension
    Sub.extend = Super.extend;
    // create asset registers, so extended classes
    // can have their private assets too.
    config._assetTypes.forEach(function (type) {
      Sub[type] = Super[type];
    });
    // enable recursive self-lookup
    if (name) {
      Sub.options.components[name] = Sub;
    }
    // keep a reference to the super options at extension time.
    // later at instantiation we can check if Super's options have
    // been updated.
    Sub.superOptions = Super.options;
    Sub.extendOptions = extendOptions;
    // cache constructor
    if (isFirstExtend) {
      extendOptions._Ctor = Sub;
    }
    return Sub;
  };
}

function initAssetRegisters(Vue) {
  /**
   * Create asset registration methods.
   */
  config._assetTypes.forEach(function (type) {
    Vue[type] = function (id, definition) {
      if (!definition) {
        return this.options[type + 's'][id];
      } else {
        /* istanbul ignore if */
        if (process.env.NODE_ENV !== 'production') {
          if (type === 'component' && config.isReservedTag(id)) {
            warn('Do not use built-in or reserved HTML elements as component ' + 'id: ' + id);
          }
        }
        if (type === 'component' && isPlainObject(definition)) {
          definition.name = definition.name || id;
          definition = Vue.extend(definition);
        }
        if (type === 'directive' && typeof definition === 'function') {
          definition = { bind: definition, update: definition };
        }
        this.options[type + 's'][id] = definition;
        return definition;
      }
    };
  });
}

var KeepAlive = {
  name: 'keep-alive',
  _abstract: true,
  props: {
    child: Object
  },
  created: function created() {
    this.cache = Object.create(null);
  },
  render: function render() {
    var rawChild = this.child;
    var realChild = getRealChild(this.child);
    var cid = realChild.componentOptions.Ctor.cid;
    if (this.cache[cid]) {
      var child = realChild.child = this.cache[cid].child;
      realChild.elm = this.$el = child.$el;
    } else {
      this.cache[cid] = realChild;
    }
    realChild.data.keepAlive = true;
    return rawChild;
  },
  destroyed: function destroyed() {
    for (var key in this.cache) {
      var vnode = this.cache[key];
      callHook(vnode.child, 'deactivated');
      vnode.child.$destroy();
    }
  }
};

var builtInComponents = {
  KeepAlive: KeepAlive
};

function initGlobalAPI(Vue) {
  // config
  var configDef = {};
  configDef.get = function () {
    return config;
  };
  if (process.env.NODE_ENV !== 'production') {
    configDef.set = function () {
      warn('Do not replace the Vue.config object, set individual fields instead.');
    };
  }
  Object.defineProperty(Vue, 'config', configDef);
  Vue.util = util;
  Vue.set = set;
  Vue.delete = del;
  Vue.nextTick = nextTick;

  Vue.options = Object.create(null);
  config._assetTypes.forEach(function (type) {
    Vue.options[type + 's'] = Object.create(null);
  });

  extend(Vue.options.components, builtInComponents);

  initUse(Vue);
  initMixin$1(Vue);
  initExtend(Vue);
  initAssetRegisters(Vue);
}

initGlobalAPI(Vue);

Object.defineProperty(Vue.prototype, '$isServer', {
  get: function get() {
    return config._isServer;
  }
});

Vue.version = '2.0.0-beta.1';

// attributes that should be using props for binding
var mustUseProp = makeMap('value,selected,checked,muted');

var isEnumeratedAttr = makeMap('contenteditable,draggable,spellcheck');

var isBooleanAttr = makeMap('allowfullscreen,async,autofocus,autoplay,checked,compact,controls,declare,' + 'default,defaultchecked,defaultmuted,defaultselected,defer,disabled,' + 'enabled,formnovalidate,hidden,indeterminate,inert,ismap,itemscope,loop,multiple,' + 'muted,nohref,noresize,noshade,novalidate,nowrap,open,pauseonexit,readonly,' + 'required,reversed,scoped,seamless,selected,sortable,translate,' + 'truespeed,typemustmatch,visible');

var isAttr = makeMap('accept,accept-charset,accesskey,action,align,alt,async,autocomplete,' + 'autofocus,autoplay,autosave,bgcolor,border,buffered,challenge,charset,' + 'checked,cite,class,code,codebase,color,cols,colspan,content,http-equiv,' + 'name,contenteditable,contextmenu,controls,coords,data,datetime,default,' + 'defer,dir,dirname,disabled,download,draggable,dropzone,enctype,method,for,' + 'form,formaction,headers,<th>,height,hidden,high,href,hreflang,http-equiv,' + 'icon,id,ismap,itemprop,keytype,kind,label,lang,language,list,loop,low,' + 'manifest,max,maxlength,media,method,GET,POST,min,multiple,email,file,' + 'muted,name,novalidate,open,optimum,pattern,ping,placeholder,poster,' + 'preload,radiogroup,readonly,rel,required,reversed,rows,rowspan,sandbox,' + 'scope,scoped,seamless,selected,shape,size,type,text,password,sizes,span,' + 'spellcheck,src,srcdoc,srclang,srcset,start,step,style,summary,tabindex,' + 'target,title,type,usemap,value,width,wrap');

var xlinkNS = 'http://www.w3.org/1999/xlink';

var isXlink = function isXlink(name) {
  return name.charAt(5) === ':' && name.slice(0, 5) === 'xlink';
};

var getXlinkProp = function getXlinkProp(name) {
  return isXlink(name) ? name.slice(6, name.length) : '';
};

var isFalsyAttrValue = function isFalsyAttrValue(val) {
  return val == null || val === false;
};

function genClassForVnode(vnode) {
  var data = vnode.data;
  // Important: check if this is a component container node
  // or a child component root node
  var i = void 0;
  if ((i = vnode.child) && (i = i._vnode.data)) {
    data = mergeClassData(i, data);
  }
  if ((i = vnode.parent) && (i = i.data)) {
    data = mergeClassData(data, i);
  }
  return genClassFromData(data);
}

function mergeClassData(child, parent) {
  return {
    staticClass: concat(child.staticClass, parent.staticClass),
    class: child.class ? [child.class, parent.class] : parent.class
  };
}

function genClassFromData(data) {
  var dynamicClass = data.class;
  var staticClass = data.staticClass;
  if (staticClass || dynamicClass) {
    return concat(staticClass, stringifyClass(dynamicClass));
  }
  /* istanbul ignore next */
  return '';
}

function concat(a, b) {
  return a ? b ? a + ' ' + b : a : b || '';
}

function stringifyClass(value) {
  var res = '';
  if (!value) {
    return res;
  }
  if (typeof value === 'string') {
    return value;
  }
  if (Array.isArray(value)) {
    var stringified = void 0;
    for (var i = 0, l = value.length; i < l; i++) {
      if (value[i]) {
        if (stringified = stringifyClass(value[i])) {
          res += stringified + ' ';
        }
      }
    }
    return res.slice(0, -1);
  }
  if (isObject(value)) {
    for (var key in value) {
      if (value[key]) res += key + ' ';
    }
    return res.slice(0, -1);
  }
  /* istanbul ignore next */
  return res;
}

var namespaceMap = {
  svg: 'http://www.w3.org/2000/svg',
  math: 'http://www.w3.org/1998/Math/MathML'
};

var isReservedTag = makeMap('html,base,head,link,meta,style,title,' + 'address,article,footer,header,h1,h2,h3,h4,h5,h6,hgroup,nav,section,' + 'div,dd,dl,dt,figcaption,figure,hr,img,li,main,ol,p,pre,ul,' + 'a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,rtc,ruby,' + 's,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,' + 'embed,object,param,source,canvas,script,noscript,del,ins,' + 'caption,col,colgroup,table,thead,tbody,td,th,tr,' + 'button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,' + 'output,progress,select,textarea,' + 'details,dialog,menu,menuitem,summary,' + 'content,element,shadow,template');

var isUnaryTag = makeMap('area,base,br,col,embed,frame,hr,img,input,isindex,keygen,' + 'link,meta,param,source,track,wbr', true);

// Elements that you can, intentionally, leave open
// (and which close themselves)
var canBeLeftOpenTag = makeMap('colgroup,dd,dt,li,options,p,td,tfoot,th,thead,tr,source', true);

// HTML5 tags https://html.spec.whatwg.org/multipage/indices.html#elements-3
// Phrasing Content https://html.spec.whatwg.org/multipage/dom.html#phrasing-content
var isNonPhrasingTag = makeMap('address,article,aside,base,blockquote,body,caption,col,colgroup,dd,' + 'details,dialog,div,dl,dt,fieldset,figcaption,figure,footer,form,' + 'h1,h2,h3,h4,h5,h6,head,header,hgroup,hr,html,legend,li,menuitem,meta,' + 'optgroup,option,param,rp,rt,source,style,summary,tbody,td,tfoot,th,thead,' + 'title,tr,track', true);

// this map covers namespace elements that can appear as template root nodes
var isSVG = makeMap('svg,g,defs,symbol,use,image,text,circle,ellipse,' + 'line,path,polygon,polyline,rect', true);

function getTagNamespace(tag) {
  if (isSVG(tag)) {
    return 'svg';
  }
  // basic support for MathML
  // note it doesn't support other MathML elements being component roots
  if (tag === 'math') {
    return 'math';
  }
}

var unknownElementCache = Object.create(null);
function isUnknownElement(tag) {
  /* istanbul ignore if */
  if (!inBrowser) {
    return true;
  }
  tag = tag.toLowerCase();
  /* istanbul ignore if */
  if (unknownElementCache[tag] != null) {
    return unknownElementCache[tag];
  }
  var el = document.createElement(tag);
  if (tag.indexOf('-') > -1) {
    // http://stackoverflow.com/a/28210364/1070244
    return unknownElementCache[tag] = el.constructor === window.HTMLUnknownElement || el.constructor === window.HTMLElement;
  } else {
    return unknownElementCache[tag] = /HTMLUnknownElement/.test(el.toString());
  }
}

var UA$1 = inBrowser && window.navigator.userAgent.toLowerCase();
var isIE = UA$1 && /msie|trident/.test(UA$1);
var isIE9 = UA$1 && UA$1.indexOf('msie 9.0') > 0;
var isAndroid = UA$1 && UA$1.indexOf('android') > 0;

/**
 * Query an element selector if it's not an element already.
 */
function query(el) {
  if (typeof el === 'string') {
    var selector = el;
    el = document.querySelector(el);
    if (!el) {
      process.env.NODE_ENV !== 'production' && warn('Cannot find element: ' + selector);
      return document.createElement('div');
    }
  }
  return el;
}

function createElement$1(tagName) {
  return document.createElement(tagName);
}

function createElementNS(namespace, tagName) {
  return document.createElementNS(namespaceMap[namespace], tagName);
}

function createTextNode(text) {
  return document.createTextNode(text);
}

function insertBefore(parentNode, newNode, referenceNode) {
  parentNode.insertBefore(newNode, referenceNode);
}

function removeChild(node, child) {
  node.removeChild(child);
}

function appendChild(node, child) {
  node.appendChild(child);
}

function parentNode(node) {
  return node.parentNode;
}

function nextSibling(node) {
  return node.nextSibling;
}

function tagName(node) {
  return node.tagName;
}

function setTextContent(node, text) {
  node.textContent = text;
}

function childNodes(node) {
  return node.childNodes;
}

function setAttribute(node, key, val) {
  node.setAttribute(key, val);
}

var nodeOps = Object.freeze({
  createElement: createElement$1,
  createElementNS: createElementNS,
  createTextNode: createTextNode,
  insertBefore: insertBefore,
  removeChild: removeChild,
  appendChild: appendChild,
  parentNode: parentNode,
  nextSibling: nextSibling,
  tagName: tagName,
  setTextContent: setTextContent,
  childNodes: childNodes,
  setAttribute: setAttribute
});

var emptyData = {};
var emptyNode = new VNode('', emptyData, []);
var hooks$1 = ['create', 'update', 'postpatch', 'remove', 'destroy'];

function isUndef(s) {
  return s == null;
}

function isDef(s) {
  return s != null;
}

function sameVnode(vnode1, vnode2) {
  return vnode1.key === vnode2.key && vnode1.tag === vnode2.tag && !vnode1.data === !vnode2.data;
}

function createKeyToOldIdx(children, beginIdx, endIdx) {
  var i = void 0,
      key = void 0;
  var map = {};
  for (i = beginIdx; i <= endIdx; ++i) {
    key = children[i].key;
    if (isDef(key)) map[key] = i;
  }
  return map;
}

function createPatchFunction(backend) {
  var i = void 0,
      j = void 0;
  var cbs = {};

  var modules = backend.modules;
  var nodeOps = backend.nodeOps;


  for (i = 0; i < hooks$1.length; ++i) {
    cbs[hooks$1[i]] = [];
    for (j = 0; j < modules.length; ++j) {
      if (modules[j][hooks$1[i]] !== undefined) cbs[hooks$1[i]].push(modules[j][hooks$1[i]]);
    }
  }

  function emptyNodeAt(elm) {
    return new VNode(nodeOps.tagName(elm).toLowerCase(), {}, [], undefined, elm);
  }

  function createRmCb(childElm, listeners) {
    function remove() {
      if (--remove.listeners === 0) {
        removeElement(childElm);
      }
    }
    remove.listeners = listeners;
    return remove;
  }

  function removeElement(el) {
    var parent = nodeOps.parentNode(el);
    nodeOps.removeChild(parent, el);
  }

  function createElm(vnode, insertedVnodeQueue) {
    var i = void 0,
        elm = void 0;
    var data = vnode.data;
    if (isDef(data)) {
      if (isDef(i = data.hook) && isDef(i = i.init)) i(vnode);
      // after calling the init hook, if the vnode is a child component
      // it should've created a child instance and mounted it. the child
      // component also has set the placeholder vnode's elm.
      // in that case we can just return the element and be done.
      if (isDef(i = vnode.child)) {
        vnode.elm = vnode.child.$el;
        invokeCreateHooks(vnode, insertedVnodeQueue);
        setScope(vnode);
        return vnode.elm;
      }
    }
    var children = vnode.children;
    var tag = vnode.tag;
    if (isDef(tag)) {
      if (process.env.NODE_ENV !== 'production') {
        if (!vnode.ns && !(config.ignoredElements && config.ignoredElements.indexOf(tag) > -1) && config.isUnknownElement(tag)) {
          warn('Unknown custom element: <' + tag + '> - did you ' + 'register the component correctly? For recursive components, ' + 'make sure to provide the "name" option.', vnode.context);
        }
      }
      elm = vnode.elm = vnode.ns ? nodeOps.createElementNS(vnode.ns, tag) : nodeOps.createElement(tag);
      setScope(vnode);
      if (Array.isArray(children)) {
        for (i = 0; i < children.length; ++i) {
          nodeOps.appendChild(elm, createElm(children[i], insertedVnodeQueue));
        }
      } else if (isPrimitive(vnode.text)) {
        nodeOps.appendChild(elm, nodeOps.createTextNode(vnode.text));
      }
      if (isDef(data)) {
        invokeCreateHooks(vnode, insertedVnodeQueue);
      }
    } else {
      elm = vnode.elm = nodeOps.createTextNode(vnode.text);
    }
    return vnode.elm;
  }

  function invokeCreateHooks(vnode, insertedVnodeQueue) {
    for (var _i = 0; _i < cbs.create.length; ++_i) {
      cbs.create[_i](emptyNode, vnode);
    }
    i = vnode.data.hook; // Reuse variable
    if (isDef(i)) {
      if (i.create) i.create(emptyNode, vnode);
      if (i.insert) insertedVnodeQueue.push(vnode);
    }
  }

  // set scope id attribute for scoped CSS.
  // this is implemented as a special case to avoid the overhead
  // of going through the normal attribute patching process.
  function setScope(vnode) {
    var i = void 0;
    if (isDef(i = vnode.host) && isDef(i = i.$options._scopeId)) {
      nodeOps.setAttribute(vnode.elm, i, '');
    }
    if (isDef(i = vnode.context) && isDef(i = i.$options._scopeId)) {
      nodeOps.setAttribute(vnode.elm, i, '');
    }
  }

  function addVnodes(parentElm, before, vnodes, startIdx, endIdx, insertedVnodeQueue) {
    for (; startIdx <= endIdx; ++startIdx) {
      nodeOps.insertBefore(parentElm, createElm(vnodes[startIdx], insertedVnodeQueue), before);
    }
  }

  function invokeDestroyHook(vnode) {
    var i = void 0,
        j = void 0;
    var data = vnode.data;
    if (isDef(data)) {
      if (isDef(i = data.hook) && isDef(i = i.destroy)) i(vnode);
      for (i = 0; i < cbs.destroy.length; ++i) {
        cbs.destroy[i](vnode);
      }
    }
    if (isDef(i = vnode.child) && !data.keepAlive) {
      invokeDestroyHook(i._vnode);
    }
    if (isDef(i = vnode.children)) {
      for (j = 0; j < vnode.children.length; ++j) {
        invokeDestroyHook(vnode.children[j]);
      }
    }
  }

  function removeVnodes(parentElm, vnodes, startIdx, endIdx) {
    for (; startIdx <= endIdx; ++startIdx) {
      var ch = vnodes[startIdx];
      if (isDef(ch)) {
        if (isDef(ch.tag)) {
          invokeDestroyHook(ch);
          removeAndInvokeRemoveHook(ch);
        } else {
          // Text node
          nodeOps.removeChild(parentElm, ch.elm);
        }
      }
    }
  }

  function removeAndInvokeRemoveHook(vnode, rm) {
    if (rm || isDef(vnode.data)) {
      var listeners = cbs.remove.length + 1;
      if (!rm) {
        // directly removing
        rm = createRmCb(vnode.elm, listeners);
      } else {
        // we have a recursively passed down rm callback
        // increase the listeners count
        rm.listeners += listeners;
      }
      // recursively invoke hooks on child component root node
      if (isDef(i = vnode.child) && isDef(i = i._vnode) && isDef(i.data)) {
        removeAndInvokeRemoveHook(i, rm);
      }
      for (i = 0; i < cbs.remove.length; ++i) {
        cbs.remove[i](vnode, rm);
      }
      if (isDef(i = vnode.data.hook) && isDef(i = i.remove)) {
        i(vnode, rm);
      } else {
        rm();
      }
    } else {
      removeElement(vnode.elm);
    }
  }

  function updateChildren(parentElm, oldCh, newCh, insertedVnodeQueue) {
    var oldStartIdx = 0;
    var newStartIdx = 0;
    var oldEndIdx = oldCh.length - 1;
    var oldStartVnode = oldCh[0];
    var oldEndVnode = oldCh[oldEndIdx];
    var newEndIdx = newCh.length - 1;
    var newStartVnode = newCh[0];
    var newEndVnode = newCh[newEndIdx];
    var oldKeyToIdx = void 0,
        idxInOld = void 0,
        elmToMove = void 0,
        before = void 0;

    while (oldStartIdx <= oldEndIdx && newStartIdx <= newEndIdx) {
      if (isUndef(oldStartVnode)) {
        oldStartVnode = oldCh[++oldStartIdx]; // Vnode has been moved left
      } else if (isUndef(oldEndVnode)) {
        oldEndVnode = oldCh[--oldEndIdx];
      } else if (sameVnode(oldStartVnode, newStartVnode)) {
        patchVnode(oldStartVnode, newStartVnode, insertedVnodeQueue);
        oldStartVnode = oldCh[++oldStartIdx];
        newStartVnode = newCh[++newStartIdx];
      } else if (sameVnode(oldEndVnode, newEndVnode)) {
        patchVnode(oldEndVnode, newEndVnode, insertedVnodeQueue);
        oldEndVnode = oldCh[--oldEndIdx];
        newEndVnode = newCh[--newEndIdx];
      } else if (sameVnode(oldStartVnode, newEndVnode)) {
        // Vnode moved right
        patchVnode(oldStartVnode, newEndVnode, insertedVnodeQueue);
        nodeOps.insertBefore(parentElm, oldStartVnode.elm, nodeOps.nextSibling(oldEndVnode.elm));
        oldStartVnode = oldCh[++oldStartIdx];
        newEndVnode = newCh[--newEndIdx];
      } else if (sameVnode(oldEndVnode, newStartVnode)) {
        // Vnode moved left
        patchVnode(oldEndVnode, newStartVnode, insertedVnodeQueue);
        nodeOps.insertBefore(parentElm, oldEndVnode.elm, oldStartVnode.elm);
        oldEndVnode = oldCh[--oldEndIdx];
        newStartVnode = newCh[++newStartIdx];
      } else {
        if (isUndef(oldKeyToIdx)) oldKeyToIdx = createKeyToOldIdx(oldCh, oldStartIdx, oldEndIdx);
        idxInOld = oldKeyToIdx[newStartVnode.key];
        if (isUndef(idxInOld)) {
          // New element
          nodeOps.insertBefore(parentElm, createElm(newStartVnode, insertedVnodeQueue), oldStartVnode.elm);
          newStartVnode = newCh[++newStartIdx];
        } else {
          elmToMove = oldCh[idxInOld];
          /* istanbul ignore if */
          if (process.env.NODE_ENV !== 'production' && !elmToMove) {
            warn('It seems there are duplicate keys that is causing an update error. ' + 'Make sure each v-for item has a unique key.');
          }
          if (elmToMove.tag !== newStartVnode.tag) {
            // same key but different element. treat as new element
            nodeOps.insertBefore(parentElm, createElm(newStartVnode, insertedVnodeQueue), oldStartVnode.elm);
            newStartVnode = newCh[++newStartIdx];
          } else {
            patchVnode(elmToMove, newStartVnode, insertedVnodeQueue);
            oldCh[idxInOld] = undefined;
            nodeOps.insertBefore(parentElm, newStartVnode.elm, oldStartVnode.elm);
            newStartVnode = newCh[++newStartIdx];
          }
        }
      }
    }
    if (oldStartIdx > oldEndIdx) {
      before = isUndef(newCh[newEndIdx + 1]) ? null : newCh[newEndIdx + 1].elm;
      addVnodes(parentElm, before, newCh, newStartIdx, newEndIdx, insertedVnodeQueue);
    } else if (newStartIdx > newEndIdx) {
      removeVnodes(parentElm, oldCh, oldStartIdx, oldEndIdx);
    }
  }

  function patchVnode(oldVnode, vnode, insertedVnodeQueue) {
    if (oldVnode === vnode) return;
    var i = void 0,
        hook = void 0;
    var hasData = isDef(i = vnode.data);
    if (hasData && isDef(hook = i.hook) && isDef(i = hook.prepatch)) {
      i(oldVnode, vnode);
    }
    var elm = vnode.elm = oldVnode.elm;
    var oldCh = oldVnode.children;
    var ch = vnode.children;
    if (hasData) {
      for (i = 0; i < cbs.update.length; ++i) {
        cbs.update[i](oldVnode, vnode);
      }if (isDef(hook) && isDef(i = hook.update)) i(oldVnode, vnode);
    }
    if (isUndef(vnode.text)) {
      if (isDef(oldCh) && isDef(ch)) {
        if (oldCh !== ch) updateChildren(elm, oldCh, ch, insertedVnodeQueue);
      } else if (isDef(ch)) {
        if (isDef(oldVnode.text)) nodeOps.setTextContent(elm, '');
        addVnodes(elm, null, ch, 0, ch.length - 1, insertedVnodeQueue);
      } else if (isDef(oldCh)) {
        removeVnodes(elm, oldCh, 0, oldCh.length - 1);
      } else if (isDef(oldVnode.text)) {
        nodeOps.setTextContent(elm, '');
      }
    } else if (oldVnode.text !== vnode.text) {
      nodeOps.setTextContent(elm, vnode.text);
    }
    if (hasData) {
      for (i = 0; i < cbs.postpatch.length; ++i) {
        cbs.postpatch[i](oldVnode, vnode);
      }if (isDef(hook) && isDef(i = hook.postpatch)) i(oldVnode, vnode);
    }
  }

  function invokeInsertHook(queue) {
    for (var _i2 = 0; _i2 < queue.length; ++_i2) {
      queue[_i2].data.hook.insert(queue[_i2]);
    }
  }

  function hydrate(elm, vnode, insertedVnodeQueue) {
    if (process.env.NODE_ENV !== 'production') {
      if (!assertNodeMatch(elm, vnode)) {
        return false;
      }
    }
    vnode.elm = elm;
    var tag = vnode.tag;
    var data = vnode.data;
    var children = vnode.children;

    if (isDef(data)) {
      if (isDef(i = data.hook) && isDef(i = i.init)) i(vnode, true /* hydrating */);
      if (isDef(i = vnode.child)) {
        // child component. it should have hydrated its own tree.
        invokeCreateHooks(vnode, insertedVnodeQueue);
        return true;
      }
    }
    if (isDef(tag)) {
      if (isDef(children)) {
        var childNodes = nodeOps.childNodes(elm);
        for (var _i3 = 0; _i3 < children.length; _i3++) {
          var success = hydrate(childNodes[_i3], children[_i3], insertedVnodeQueue);
          if (!success) {
            return false;
          }
        }
      }
      if (isDef(data)) {
        invokeCreateHooks(vnode, insertedVnodeQueue);
      }
    }
    return true;
  }

  function assertNodeMatch(node, vnode) {
    if (vnode.tag) {
      if (vnode.tag.indexOf('vue-component') === 0) {
        return true;
      } else {
        var childNodes = nodeOps.childNodes(node);
        return vnode.tag === nodeOps.tagName(node).toLowerCase() && (vnode.children ? vnode.children.length === childNodes.length : childNodes.length === 0);
      }
    } else {
      return _toString(vnode.text) === node.data;
    }
  }

  return function patch(oldVnode, vnode, hydrating) {
    var elm = void 0,
        parent = void 0;
    var insertedVnodeQueue = [];

    if (!oldVnode) {
      // empty mount, create new root element
      createElm(vnode, insertedVnodeQueue);
    } else {
      var isRealElement = isDef(oldVnode.nodeType);
      if (!isRealElement && sameVnode(oldVnode, vnode)) {
        patchVnode(oldVnode, vnode, insertedVnodeQueue);
      } else {
        if (isRealElement) {
          // mounting to a real element
          // check if this is server-rendered content and if we can perform
          // a successful hydration.
          if (oldVnode.hasAttribute('server-rendered')) {
            oldVnode.removeAttribute('server-rendered');
            hydrating = true;
          }
          if (hydrating) {
            if (hydrate(oldVnode, vnode, insertedVnodeQueue)) {
              invokeInsertHook(insertedVnodeQueue);
              return oldVnode;
            } else if (process.env.NODE_ENV !== 'production') {
              warn('The client-side rendered virtual DOM tree is not matching ' + 'server-rendered content. Bailing hydration and performing ' + 'full client-side render.');
            }
          }
          // either not server-rendered, or hydration failed.
          // create an empty node and replace it
          oldVnode = emptyNodeAt(oldVnode);
        }
        elm = oldVnode.elm;
        parent = nodeOps.parentNode(elm);

        createElm(vnode, insertedVnodeQueue);

        // component root element replaced.
        // update parent placeholder node element.
        if (vnode.parent) {
          vnode.parent.elm = vnode.elm;
          for (var _i4 = 0; _i4 < cbs.create.length; ++_i4) {
            cbs.create[_i4](emptyNode, vnode.parent);
          }
        }

        if (parent !== null) {
          nodeOps.insertBefore(parent, vnode.elm, nodeOps.nextSibling(elm));
          removeVnodes(parent, [oldVnode], 0, 0);
        } else if (isDef(oldVnode.tag)) {
          invokeDestroyHook(oldVnode);
        }
      }
    }

    invokeInsertHook(insertedVnodeQueue);
    return vnode.elm;
  };
}

var directives = {
  create: function bindDirectives(oldVnode, vnode) {
    applyDirectives(oldVnode, vnode, 'bind');
  },
  update: function updateDirectives(oldVnode, vnode) {
    applyDirectives(oldVnode, vnode, 'update');
  },
  postpatch: function postupdateDirectives(oldVnode, vnode) {
    applyDirectives(oldVnode, vnode, 'componentUpdated');
  },
  destroy: function unbindDirectives(vnode) {
    applyDirectives(vnode, vnode, 'unbind');
  }
};

var emptyModifiers = Object.create(null);

function applyDirectives(oldVnode, vnode, hook) {
  var dirs = vnode.data.directives;
  if (dirs) {
    var oldDirs = oldVnode.data.directives;
    var isUpdate = hook === 'update';
    for (var i = 0; i < dirs.length; i++) {
      var dir = dirs[i];
      var def = resolveAsset(vnode.context.$options, 'directives', dir.name, true);
      var fn = def && def[hook];
      if (fn) {
        if (isUpdate && oldDirs) {
          dir.oldValue = oldDirs[i].value;
        }
        if (!dir.modifiers) {
          dir.modifiers = emptyModifiers;
        }
        fn(vnode.elm, dir, vnode, oldVnode);
      }
    }
  }
}

var ref = {
  create: function create(_, vnode) {
    registerRef(vnode);
  },
  update: function update(oldVnode, vnode) {
    if (oldVnode.data.ref !== vnode.data.ref) {
      registerRef(oldVnode, true);
      registerRef(vnode);
    }
  },
  destroy: function destroy(vnode) {
    registerRef(vnode, true);
  }
};

function registerRef(vnode, isRemoval) {
  var key = vnode.data.ref;
  if (!key) return;

  var vm = vnode.context;
  var ref = vnode.child || vnode.elm;
  var refs = vm.$refs;
  if (isRemoval) {
    if (Array.isArray(refs[key])) {
      remove(refs[key], ref);
    } else if (refs[key] === ref) {
      refs[key] = undefined;
    }
  } else {
    if (vnode.data.refInFor) {
      if (Array.isArray(refs[key])) {
        refs[key].push(ref);
      } else {
        refs[key] = [ref];
      }
    } else {
      refs[key] = ref;
    }
  }
}

var baseModules = [ref, directives];

function updateAttrs(oldVnode, vnode) {
  if (!oldVnode.data.attrs && !vnode.data.attrs) {
    return;
  }
  var key = void 0,
      cur = void 0,
      old = void 0;
  var elm = vnode.elm;
  var oldAttrs = oldVnode.data.attrs || {};
  var attrs = vnode.data.attrs || {};

  for (key in attrs) {
    cur = attrs[key];
    old = oldAttrs[key];
    if (old !== cur) {
      setAttr(elm, key, cur);
    }
  }
  for (key in oldAttrs) {
    if (attrs[key] == null) {
      if (isXlink(key)) {
        elm.removeAttributeNS(xlinkNS, getXlinkProp(key));
      } else if (!isEnumeratedAttr(key)) {
        elm.removeAttribute(key);
      }
    }
  }
}

function setAttr(el, key, value) {
  if (isBooleanAttr(key)) {
    // set attribute for blank value
    // e.g. <option disabled>Select one</option>
    if (isFalsyAttrValue(value)) {
      el.removeAttribute(key);
    } else {
      el.setAttribute(key, key);
    }
  } else if (isEnumeratedAttr(key)) {
    el.setAttribute(key, isFalsyAttrValue(value) || value === 'false' ? 'false' : 'true');
  } else if (isXlink(key)) {
    if (isFalsyAttrValue(value)) {
      el.removeAttributeNS(xlinkNS, getXlinkProp(key));
    } else {
      el.setAttributeNS(xlinkNS, key, value);
    }
  } else {
    if (isFalsyAttrValue(value)) {
      el.removeAttribute(key);
    } else {
      el.setAttribute(key, value);
    }
  }
}

var attrs = {
  create: function create(_, vnode) {
    var attrs = vnode.data.staticAttrs;
    if (attrs) {
      for (var key in attrs) {
        setAttr(vnode.elm, key, attrs[key]);
      }
    }
    updateAttrs(_, vnode);
  },
  update: updateAttrs
};

function updateClass(oldVnode, vnode) {
  var el = vnode.elm;
  var data = vnode.data;
  if (!data.staticClass && !data.class) {
    return;
  }

  var cls = genClassForVnode(vnode);

  // handle transition classes
  var transitionClass = el._transitionClasses;
  if (transitionClass) {
    cls = concat(cls, stringifyClass(transitionClass));
  }

  // set the class
  if (cls !== el._prevClass) {
    el.setAttribute('class', cls);
    el._prevClass = cls;
  }
}

var klass = {
  create: updateClass,
  update: updateClass
};

function updateDOMListeners(oldVnode, vnode) {
  if (!oldVnode.data.on && !vnode.data.on) {
    return;
  }
  var on = vnode.data.on || {};
  var oldOn = oldVnode.data.on || {};
  var add = vnode.elm._v_add || (vnode.elm._v_add = function (event, handler, capture) {
    vnode.elm.addEventListener(event, handler, capture);
  });
  var remove = vnode.elm._v_remove || (vnode.elm._v_remove = function (event, handler) {
    vnode.elm.removeEventListener(event, handler);
  });
  updateListeners(on, oldOn, add, remove);
}

var events = {
  create: updateDOMListeners,
  update: updateDOMListeners
};

function updateProps(oldVnode, vnode) {
  if (!oldVnode.data.props && !vnode.data.props) {
    return;
  }
  var key = void 0,
      cur = void 0;
  var elm = vnode.elm;
  var oldProps = oldVnode.data.props || {};
  var props = vnode.data.props || {};

  for (key in oldProps) {
    if (props[key] == null) {
      elm[key] = undefined;
    }
  }
  for (key in props) {
    cur = props[key];
    if (key === 'value') {
      // store value as _value as well since
      // non-string values will be stringified
      elm._value = cur;
      // avoid resetting cursor position when value is the same
      if (elm.value != cur) {
        // eslint-disable-line
        elm.value = cur;
      }
    } else {
      elm[key] = cur;
    }
  }
}

var props = {
  create: updateProps,
  update: updateProps
};

var prefixes = ['Webkit', 'Moz', 'ms'];

var testEl = void 0;
var normalize = cached(function (prop) {
  testEl = testEl || document.createElement('div');
  prop = camelize(prop);
  if (prop !== 'filter' && prop in testEl.style) {
    return prop;
  }
  var upper = prop.charAt(0).toUpperCase() + prop.slice(1);
  for (var i = 0; i < prefixes.length; i++) {
    var prefixed = prefixes[i] + upper;
    if (prefixed in testEl.style) {
      return prefixed;
    }
  }
});

function updateStyle(oldVnode, vnode) {
  if (!oldVnode.data.style && !vnode.data.style) {
    return;
  }
  var cur = void 0,
      name = void 0;
  var elm = vnode.elm;
  var oldStyle = oldVnode.data.style || {};
  var style = vnode.data.style || {};

  // handle array syntax
  if (Array.isArray(style)) {
    style = vnode.data.style = toObject(style);
  }

  for (name in oldStyle) {
    if (!style[name]) {
      elm.style[normalize(name)] = '';
    }
  }
  for (name in style) {
    cur = style[name];
    if (cur !== oldStyle[name]) {
      // ie9 setting to null has no effect, must use empty string
      elm.style[normalize(name)] = cur || '';
    }
  }
  // clone the style for future updates,
  // in case the user mutates the style object in-place.
  vnode.data.style = extend({}, style);
}

var style = {
  create: updateStyle,
  update: updateStyle
};

/**
 * Add class with compatibility for SVG since classList is not supported on
 * SVG elements in IE
 */
function addClass(el, cls) {
  /* istanbul ignore else */
  if (el.classList) {
    if (cls.indexOf(' ') > -1) {
      cls.split(/\s+/).forEach(function (c) {
        return el.classList.add(c);
      });
    } else {
      el.classList.add(cls);
    }
  } else {
    var cur = ' ' + el.getAttribute('class') + ' ';
    if (cur.indexOf(' ' + cls + ' ') < 0) {
      el.setAttribute('class', (cur + cls).trim());
    }
  }
}

/**
 * Remove class with compatibility for SVG since classList is not supported on
 * SVG elements in IE
 */
function removeClass(el, cls) {
  /* istanbul ignore else */
  if (el.classList) {
    if (cls.indexOf(' ') > -1) {
      cls.split(/\s+/).forEach(function (c) {
        return el.classList.remove(c);
      });
    } else {
      el.classList.remove(cls);
    }
  } else {
    var cur = ' ' + el.getAttribute('class') + ' ';
    var tar = ' ' + cls + ' ';
    while (cur.indexOf(tar) >= 0) {
      cur = cur.replace(tar, ' ');
    }
    el.setAttribute('class', cur.trim());
  }
}

var hasTransition = inBrowser && !isIE9;
var TRANSITION = 'transition';
var ANIMATION = 'animation';

// Transition property/event sniffing
var transitionProp = 'transition';
var transitionEndEvent = 'transitionend';
var animationProp = 'animation';
var animationEndEvent = 'animationend';
if (hasTransition) {
  /* istanbul ignore if */
  if (window.ontransitionend === undefined && window.onwebkittransitionend !== undefined) {
    transitionProp = 'WebkitTransition';
    transitionEndEvent = 'webkitTransitionEnd';
  }
  if (window.onanimationend === undefined && window.onwebkitanimationend !== undefined) {
    animationProp = 'WebkitAnimation';
    animationEndEvent = 'webkitAnimationEnd';
  }
}

var raf = inBrowser && window.requestAnimationFrame || setTimeout;
function nextFrame(fn) {
  raf(function () {
    raf(fn);
  });
}

function enter(vnode) {
  var el = vnode.elm;
  var vm = vnode.context;
  // call leave callback now
  if (el._leaveCb) {
    el._leaveCb.cancelled = true;
    el._leaveCb();
  }

  var data = vnode.data.transition;
  if (!data) {
    return;
  }

  var _resolveTransition = resolveTransition(data, vnode.context);

  var css = _resolveTransition.css;
  var enterClass = _resolveTransition.enterClass;
  var enterActiveClass = _resolveTransition.enterActiveClass;
  var appearClass = _resolveTransition.appearClass;
  var appearActiveClass = _resolveTransition.appearActiveClass;
  var beforeEnter = _resolveTransition.beforeEnter;
  var enter = _resolveTransition.enter;
  var afterEnter = _resolveTransition.afterEnter;
  var enterCancelled = _resolveTransition.enterCancelled;
  var beforeAppear = _resolveTransition.beforeAppear;
  var appear = _resolveTransition.appear;
  var afterAppear = _resolveTransition.afterAppear;
  var appearCancelled = _resolveTransition.appearCancelled;


  var isAppear = !vnode.context.$root._isMounted;
  if (isAppear && !appear && appear !== '') {
    return;
  }

  var startClass = isAppear ? appearClass : enterClass;
  var activeClass = isAppear ? appearActiveClass : enterActiveClass;
  var beforeEnterHook = isAppear ? beforeAppear || beforeEnter : beforeEnter;
  var enterHook = isAppear ? typeof appear === 'function' ? appear : enter : enter;
  var afterEnterHook = isAppear ? afterAppear || afterEnter : afterEnter;
  var enterCancelledHook = isAppear ? appearCancelled || enterCancelled : enterCancelled;

  var expectsCSS = css !== false;
  var userWantsControl = enterHook && enterHook.length > 2;
  var cb = el._enterCb = once(function () {
    if (expectsCSS) {
      removeTransitionClass(el, activeClass);
    }
    if (cb.cancelled) {
      if (expectsCSS) {
        removeTransitionClass(el, startClass);
      }
      enterCancelledHook && enterCancelledHook(el, vm);
    } else {
      afterEnterHook && afterEnterHook(el, vm);
    }
    el._enterCb = null;
  });

  beforeEnterHook && beforeEnterHook(el, vm);
  if (expectsCSS) {
    addTransitionClass(el, startClass);
    addTransitionClass(el, activeClass);
    nextFrame(function () {
      removeTransitionClass(el, startClass);
      if (!cb.cancelled && !userWantsControl) {
        whenTransitionEnds(el, cb);
      }
    });
  }
  enterHook && enterHook(el, vm, cb);
  if (!expectsCSS && !userWantsControl) {
    cb();
  }
}

function leave(vnode, rm) {
  var el = vnode.elm;
  var vm = vnode.context;
  // call enter callback now
  if (el._enterCb) {
    el._enterCb.cancelled = true;
    el._enterCb();
  }
  var data = vnode.data.transition;
  if (!data) {
    return rm();
  }

  var _resolveTransition2 = resolveTransition(data, vnode.context);

  var css = _resolveTransition2.css;
  var leaveClass = _resolveTransition2.leaveClass;
  var leaveActiveClass = _resolveTransition2.leaveActiveClass;
  var beforeLeave = _resolveTransition2.beforeLeave;
  var leave = _resolveTransition2.leave;
  var afterLeave = _resolveTransition2.afterLeave;
  var leaveCancelled = _resolveTransition2.leaveCancelled;
  var delayLeave = _resolveTransition2.delayLeave;


  var expectsCSS = css !== false;
  var userWantsControl = leave && leave.length > 2;
  var cb = el._leaveCb = once(function () {
    if (expectsCSS) {
      removeTransitionClass(el, leaveActiveClass);
    }
    if (cb.cancelled) {
      if (expectsCSS) {
        removeTransitionClass(el, leaveClass);
      }
      leaveCancelled && leaveCancelled(el, vm);
    } else {
      rm();
      afterLeave && afterLeave(el, vm);
    }
    el._leaveCb = null;
  });

  if (delayLeave) {
    delayLeave(performLeave);
  } else {
    performLeave();
  }

  function performLeave() {
    beforeLeave && beforeLeave(el, vm);
    if (expectsCSS) {
      addTransitionClass(el, leaveClass);
      addTransitionClass(el, leaveActiveClass);
      nextFrame(function () {
        removeTransitionClass(el, leaveClass);
        if (!cb.cancelled && !userWantsControl) {
          whenTransitionEnds(el, cb);
        }
      });
    }
    leave && leave(el, vm, cb);
    if (!expectsCSS && !userWantsControl) {
      cb();
    }
  }
}

function resolveTransition(id, context) {
  var def = void 0;
  if (id && typeof id === 'string') {
    def = resolveAsset(context.$options, 'transitions', id);
    return def ? ensureTransitionClasses(def.name || id, def) : autoCssTransition(id);
  } else if (typeof id === 'object') {
    // inline transition object
    if (id.name) {
      def = resolveAsset(context.$options, 'transitions', id.name);
    }
    def = def ? extend(ensureTransitionClasses(id.name, def), id) : ensureTransitionClasses(id.name, id);
    // extra hooks to be merged
    // added by <transition-control>
    if (id.hooks) {
      for (var key in id.hooks) {
        mergeHook$2(def, key, id.hooks[key]);
      }
    }
    return def;
  } else {
    return autoCssTransition('v');
  }
}

function ensureTransitionClasses(name, def) {
  name = name || 'v';
  var res = {};
  if (def.css !== false) {
    extend(res, autoCssTransition(name));
  }
  extend(res, def);
  return res;
}

var autoCssTransition = cached(function (name) {
  return {
    enterClass: name + '-enter',
    leaveClass: name + '-leave',
    appearClass: name + '-enter',
    enterActiveClass: name + '-enter-active',
    leaveActiveClass: name + '-leave-active',
    appearActiveClass: name + '-enter-active'
  };
});

function mergeHook$2(def, key, hook) {
  var oldHook = def[key];
  if (oldHook) {
    def[key] = function () {
      oldHook.apply(this, arguments);
      hook();
    };
  } else {
    def[key] = hook;
  }
}

function addTransitionClass(el, cls) {
  (el._transitionClasses || (el._transitionClasses = [])).push(cls);
  addClass(el, cls);
}

function removeTransitionClass(el, cls) {
  remove(el._transitionClasses, cls);
  removeClass(el, cls);
}

function whenTransitionEnds(el, cb) {
  var _getTransitionInfo = getTransitionInfo(el);

  var type = _getTransitionInfo.type;
  var timeout = _getTransitionInfo.timeout;
  var propCount = _getTransitionInfo.propCount;

  if (!type) return cb();
  var event = type === TRANSITION ? transitionEndEvent : animationEndEvent;
  var ended = 0;
  var end = function end() {
    el.removeEventListener(event, onEnd);
    cb();
  };
  var onEnd = function onEnd() {
    if (++ended >= propCount) {
      end();
    }
  };
  setTimeout(function () {
    if (ended < propCount) {
      end();
    }
  }, timeout + 1);
  el.addEventListener(event, onEnd);
}

function getTransitionInfo(el) {
  var styles = window.getComputedStyle(el);
  // 1. determine the maximum duration (timeout)
  var transitioneDelays = styles[transitionProp + 'Delay'].split(', ');
  var transitionDurations = styles[transitionProp + 'Duration'].split(', ');
  var animationDelays = styles[animationProp + 'Delay'].split(', ');
  var animationDurations = styles[animationProp + 'Duration'].split(', ');
  var transitionTimeout = getTimeout(transitioneDelays, transitionDurations);
  var animationTimeout = getTimeout(animationDelays, animationDurations);
  var timeout = Math.max(transitionTimeout, animationTimeout);
  var type = timeout > 0 ? transitionTimeout > animationTimeout ? TRANSITION : ANIMATION : null;
  var propCount = type ? type === TRANSITION ? transitionDurations.length : animationDurations.length : 0;
  return {
    type: type,
    timeout: timeout,
    propCount: propCount
  };
}

function getTimeout(delays, durations) {
  return Math.max.apply(null, durations.map(function (d, i) {
    return toMs(d) + toMs(delays[i]);
  }));
}

function toMs(s) {
  return Number(s.slice(0, -1)) * 1000;
}

function once(fn) {
  var called = false;
  return function () {
    if (!called) {
      called = true;
      fn();
    }
  };
}

function shouldSkipTransition(vnode) {
  return !!(
  // if this is a component root node and the compoennt's
  // parent container node also has transition, skip.
  vnode.parent && vnode.parent.data.transition ||
  // if the element has v-show, let the runtime directive
  // call the hooks instead
  vnode.data.show);
}

var transition = hasTransition ? {
  create: function create(_, vnode) {
    if (!shouldSkipTransition(vnode)) {
      enter(vnode);
    }
  },
  remove: function remove(vnode, rm) {
    if (!shouldSkipTransition(vnode)) {
      leave(vnode, rm);
    } else {
      rm();
    }
  }
} : {};

var platformModules = [attrs, klass, events, props, style, transition];

// the directive module should be applied last, after all
// built-in modules have been applied.
var modules = platformModules.concat(baseModules);

var patch = createPatchFunction({ nodeOps: nodeOps, modules: modules });

var modelableTagRE = /^input|select|textarea|vue-component-[0-9]+(-[0-9a-zA-Z_\-]*)?$/;

/* istanbul ignore if */
if (isIE9) {
  // http://www.matts411.com/post/internet-explorer-9-oninput/
  document.addEventListener('selectionchange', function () {
    var el = document.activeElement;
    if (el && el.vmodel) {
      trigger(el, 'input');
    }
  });
}

var model = {
  bind: function bind(el, binding, vnode) {
    if (process.env.NODE_ENV !== 'production') {
      if (!modelableTagRE.test(vnode.tag)) {
        warn('v-model is not supported on element type: <' + vnode.tag + '>. ' + 'If you are working with contenteditable, it\'s recommended to ' + 'wrap a library dedicated for that purpose inside a custom component.', vnode.context);
      }
    }
    if (vnode.tag === 'select') {
      setSelected(el, binding, vnode.context);
    } else {
      if (!isAndroid) {
        el.addEventListener('compositionstart', onCompositionStart);
        el.addEventListener('compositionend', onCompositionEnd);
      }
      /* istanbul ignore if */
      if (isIE9) {
        el.vmodel = true;
      }
    }
  },
  componentUpdated: function componentUpdated(el, binding, vnode) {
    if (vnode.tag === 'select') {
      setSelected(el, binding, vnode.context);
      // in case the options rendered by v-for have changed,
      // it's possible that the value is out-of-sync with the rendered options.
      // detect such cases and filter out values that no longer has a matchig
      // option in the DOM.
      var needReset = el.multiple ? binding.value.some(function (v) {
        return hasNoMatchingOption(v, el.options);
      }) : hasNoMatchingOption(binding.value, el.options);
      if (needReset) {
        trigger(el, 'change');
      }
    }
  }
};

function setSelected(el, binding, vm) {
  var value = binding.value;
  var isMultiple = el.multiple;
  if (!isMultiple) {
    el.selectedIndex = -1;
  } else if (!Array.isArray(value)) {
    process.env.NODE_ENV !== 'production' && warn('<select multiple v-model="' + binding.expression + '"> ' + ('expects an Array value for its binding, but got ' + Object.prototype.toString.call(value).slice(8, -1)), vm);
    return;
  }
  for (var i = 0, l = el.options.length; i < l; i++) {
    var option = el.options[i];
    if (isMultiple) {
      option.selected = value.indexOf(getValue(option)) > -1;
    } else {
      if (getValue(option) === value) {
        el.selectedIndex = i;
        break;
      }
    }
  }
}

function hasNoMatchingOption(value, options) {
  for (var i = 0, l = options.length; i < l; i++) {
    if (getValue(options[i]) === value) {
      return false;
    }
  }
  return true;
}

function getValue(option) {
  return '_value' in option ? option._value : option.value || option.text;
}

function onCompositionStart(e) {
  e.target.composing = true;
}

function onCompositionEnd(e) {
  e.target.composing = false;
  trigger(e.target, 'input');
}

function trigger(el, type) {
  var e = document.createEvent('HTMLEvents');
  e.initEvent(type, true, true);
  el.dispatchEvent(e);
}

var show = {
  bind: function bind(el, _ref, vnode) {
    var value = _ref.value;

    var transition = getTransition(vnode);
    if (value && transition && transition.appear && !isIE9) {
      enter(vnode);
    }
    el.style.display = value ? '' : 'none';
  },
  update: function update(el, _ref2, vnode) {
    var value = _ref2.value;

    var transition = getTransition(vnode);
    if (transition && !isIE9) {
      if (value) {
        enter(vnode);
        el.style.display = '';
      } else {
        leave(vnode, function () {
          el.style.display = 'none';
        });
      }
    } else {
      el.style.display = value ? '' : 'none';
    }
  }
};

function getTransition(vnode) {
  var parent = vnode.parent;
  return parent && parent.data.transition != null ? parent.data.transition : vnode.data.transition;
}

var platformDirectives = {
  model: model,
  show: show
};

var TransitionControl = {
  name: 'transition-control',
  _abstract: true,
  props: {
    child: Object,
    mode: {
      validator: function validator(val) {
        /* istanbul ignore if */
        if (val && val !== 'out-in' && val !== 'in-out') {
          warn('transition-mode must be either "out-in" or "in-out".');
          return false;
        }
        return true;
      }
    }
  },
  render: function render() {
    var _this = this;

    var oldChild = this._vnode;
    var newChild = getRealChild(this.child);
    if (oldChild && oldChild.data && (oldChild.tag !== newChild.tag || oldChild.key !== newChild.key)) {
      if (this.mode === 'out-in') {
        // return empty node
        // and queue an update when the leave finishes
        return addHook(oldChild, {
          afterLeave: function afterLeave() {
            _this.$forceUpdate();
          }
        });
      } else if (this.mode === 'in-out') {
        (function () {
          var delayedLeave = void 0;
          var performLeave = function performLeave() {
            delayedLeave();
          };
          addHook(newChild, {
            afterEnter: performLeave,
            enterCancelled: performLeave
          });
          addHook(oldChild, {
            delayLeave: function delayLeave(leave) {
              delayedLeave = leave;
            }
          });
        })();
      }
    }
    return newChild;
  }
};

function addHook(vnode, hooks) {
  /* istanbul ignore if */
  if (!vnode.data || !vnode.data.transition) {
    return;
  }
  var trans = vnode.data.transition;
  /* istanbul ignore else */
  if (typeof trans === 'string') {
    trans = vnode.data.transition = { name: trans };
  } else if (typeof trans !== 'object') {
    trans = vnode.data.transition = { name: 'v' };
  }
  trans.hooks = hooks;
}

var platformComponents = {
  TransitionControl: TransitionControl
};

// install platform specific utils
Vue.config.isUnknownElement = isUnknownElement;
Vue.config.isReservedTag = isReservedTag;
Vue.config.getTagNamespace = getTagNamespace;
Vue.config.mustUseProp = mustUseProp;

// install platform runtime directives & components
extend(Vue.options.directives, platformDirectives);
extend(Vue.options.components, platformComponents);

// install platform patch function
Vue.prototype.__patch__ = config._isServer ? noop : patch;

// wrap mount
Vue.prototype.$mount = function (el, hydrating) {
  el = el && !config._isServer ? query(el) : undefined;
  return this._mount(el, hydrating);
};

// devtools global hook
/* istanbul ignore next */
setTimeout(function () {
  if (config.devtools) {
    if (devtools) {
      devtools.emit('init', Vue);
    } else if (process.env.NODE_ENV !== 'production' && inBrowser && /Chrome\/\d+/.test(window.navigator.userAgent)) {
      console.log('Download the Vue Devtools for a better development experience:\n' + 'https://github.com/vuejs/vue-devtools');
    }
  }
}, 0);

module.exports = Vue;
}).call(this,require('_process'),typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{"_process":103}],101:[function(require,module,exports){
var inserted = exports.cache = {}

function noop () {}

exports.insert = function (css) {
  if (inserted[css]) return noop
  inserted[css] = true

  var elem = document.createElement('style')
  elem.setAttribute('type', 'text/css')

  if ('textContent' in elem) {
    elem.textContent = css
  } else {
    elem.styleSheet.cssText = css
  }

  document.getElementsByTagName('head')[0].appendChild(elem)
  return function () {
    document.getElementsByTagName('head')[0].removeChild(elem)
    inserted[css] = false
  }
}

},{}],102:[function(require,module,exports){
(function (process){
/**
 * Copyright 2014-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */

'use strict';

/**
 * Similar to invariant but only logs a warning if the condition is not met.
 * This can be used to log issues in development environments in critical
 * paths. Removing the logging code for production environments will keep the
 * same logic and follow the same code paths.
 */

var warning = function() {};

if (process.env.NODE_ENV !== 'production') {
  warning = function(condition, format, args) {
    var len = arguments.length;
    args = new Array(len > 2 ? len - 2 : 0);
    for (var key = 2; key < len; key++) {
      args[key - 2] = arguments[key];
    }
    if (format === undefined) {
      throw new Error(
        '`warning(condition, format, ...args)` requires a warning ' +
        'message argument'
      );
    }

    if (format.length < 10 || (/^[s\W]*$/).test(format)) {
      throw new Error(
        'The warning format should be able to uniquely identify this ' +
        'warning. Please, use a more descriptive format than: ' + format
      );
    }

    if (!condition) {
      var argIndex = 0;
      var message = 'Warning: ' +
        format.replace(/%s/g, function() {
          return args[argIndex++];
        });
      if (typeof console !== 'undefined') {
        console.error(message);
      }
      try {
        // This error was thrown as a convenience so that you can use this stack
        // to find the callsite that caused this warning to fire.
        throw new Error(message);
      } catch(x) {}
    }
  };
}

module.exports = warning;

}).call(this,require('_process'))

},{"_process":103}],103:[function(require,module,exports){
// shim for using process in browser

var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

(function () {
  try {
    cachedSetTimeout = setTimeout;
  } catch (e) {
    cachedSetTimeout = function () {
      throw new Error('setTimeout is not defined');
    }
  }
  try {
    cachedClearTimeout = clearTimeout;
  } catch (e) {
    cachedClearTimeout = function () {
      throw new Error('clearTimeout is not defined');
    }
  }
} ())
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = cachedSetTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    cachedClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        cachedSetTimeout(drainQueue, 0);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };

},{}],104:[function(require,module,exports){
(function(factory) {
    'use strict';
    if (typeof define === 'function' && define.amd) {
        define([], function(){
            return factory(window, document);
        });
    } else if (typeof exports !== 'undefined') {
        module.exports = factory(window, document);
    } else {
        window.wysiwyg = factory(window, document);
    }
})(function(window, document){
    'use strict';

    // http://stackoverflow.com/questions/97962/debounce-clicks-when-submitting-a-web-form
    var debounce = function( callback, wait, cancelprevious )
    {
        var timeout;
        return function()
        {
            if( timeout )
            {
                if( ! cancelprevious )
                    return ;
                clearTimeout( timeout );
            }
            var context = this,
                args = arguments;
            timeout = setTimeout(
                function()
                {
                    timeout = null;
                    callback.apply( context, args );
                }, wait );
        };
    };

    // http://stackoverflow.com/questions/12949590/how-to-detach-event-in-ie-6-7-8-9-using-javascript
    var addEvent = function( element, type, handler, useCapture )
    {
        if( element.addEventListener ) {
            element.addEventListener( type, handler, useCapture ? true : false );
        }
        else if( element.attachEvent ) {
            element.attachEvent( 'on' + type, handler );
        }
        else if( element != window )
            element['on' + type] = handler;
    };
    var removeEvent = function( element, type, handler, useCapture )
    {
        if( element.removeEventListener ) {
            element.removeEventListener( type, handler, useCapture ? true : false );
        }
        else if( element.detachEvent) {
            element.detachEvent( 'on' + type, handler );
        }
        else if( element != window )
            element['on' + type] = null;
    };
    // http://www.cristinawithout.com/content/function-trigger-events-javascript
    var fireEvent = function( element, type, bubbles, cancelable )
    {
        if( document.createEvent ) {
            var event = document.createEvent('Event');
            event.initEvent( type, bubbles !== undefined ? bubbles : true, cancelable !== undefined ? cancelable : false );
            element.dispatchEvent(event);
        }
        else if( document.createEventObject ) { //IE
            var event = document.createEventObject();
            element.fireEvent( 'on' + type, event );
        }
        else if( typeof(element['on' + type]) == 'function' )
            element['on' + type]();
    };
    // prevent default
    var cancelEvent = function( e )
    {
        if( e.preventDefault )
            e.preventDefault();
        else
            e.returnValue = false;
        if( e.stopPropagation )
            e.stopPropagation();
        else
            e.cancelBubble = true;
        return false;
    };

    // http://stackoverflow.com/questions/13377887/javascript-node-undefined-in-ie8-and-under
    var Node_ELEMENT_NODE = typeof(Node) != 'undefined' ? Node.ELEMENT_NODE : 1;
    var Node_TEXT_NODE = typeof(Node) != 'undefined' ? Node.TEXT_NODE : 3;

    // http://stackoverflow.com/questions/2234979/how-to-check-in-javascript-if-one-element-is-a-child-of-another
    var isOrContainsNode = function( ancestor, descendant )
    {
        var node = descendant;
        while( node )
        {
            if( node === ancestor )
                return true;
            node = node.parentNode;
        }
        return false;
    };

    // http://stackoverflow.com/questions/667951/how-to-get-nodes-lying-inside-a-range-with-javascript
    var nextNode = function( node, container )
    {
        if( node.firstChild )
            return node.firstChild;
        while( node )
        {
            if( node == container ) // do not walk out of the container
                return null;
            if( node.nextSibling )
                return node.nextSibling;
            node = node.parentNode;
        }
        return null;
    };

    // save/restore selection
    // http://stackoverflow.com/questions/13949059/persisting-the-changes-of-range-objects-after-selection-in-html/13950376#13950376
    var saveSelection = function( containerNode )
    {
        if( window.getSelection )
        {
            var sel = window.getSelection();
            if( sel.rangeCount > 0 )
                return sel.getRangeAt(0);
        }
        else if( document.selection )
        {
            var sel = document.selection;
            return sel.createRange();
        }
        return null;
    };
    var restoreSelection = function( containerNode, savedSel )
    {
        if( ! savedSel )
            return;
        if( window.getSelection )
        {
            var sel = window.getSelection();
            sel.removeAllRanges();
            sel.addRange(savedSel);
        }
        else if( document.selection )
        {
            savedSel.select();
        }
    };

    // http://stackoverflow.com/questions/12603397/calculate-width-height-of-the-selected-text-javascript
    // http://stackoverflow.com/questions/6846230/coordinates-of-selected-text-in-browser-page
    var getSelectionRect = function()
    {
        if( window.getSelection )
        {
            var sel = window.getSelection();
            if( ! sel.rangeCount )
                return false;
            var range = sel.getRangeAt(0).cloneRange();
            if( range.getBoundingClientRect ) // Missing for Firefox 3.5+3.6
            {
                var rect = range.getBoundingClientRect();
                // Safari 5.1 returns null, IE9 returns 0/0/0/0 if image selected
                if( rect && rect.left && rect.top && rect.right && rect.bottom )
                    return {
                        // Modern browsers return floating-point numbers
                        left: parseInt(rect.left),
                        top: parseInt(rect.top),
                        width: parseInt(rect.right - rect.left),
                        height: parseInt(rect.bottom - rect.top)
                    };
                // on Webkit 'range.getBoundingClientRect()' sometimes return 0/0/0/0 - but 'range.getClientRects()' works
                var rects = range.getClientRects ? range.getClientRects() : [];
                for( var i=0; i < rects.length; ++i )
                {
                    var rect = rects[i];
                    if( rect.left && rect.top && rect.right && rect.bottom )
                        return {
                            // Modern browsers return floating-point numbers
                            left: parseInt(rect.left),
                            top: parseInt(rect.top),
                            width: parseInt(rect.right - rect.left),
                            height: parseInt(rect.bottom - rect.top)
                        };
                }
            }
            /*
            // Fall back to inserting a temporary element (only for Firefox 3.5 and 3.6)
            var span = document.createElement('span');
            if( span.getBoundingClientRect )
            {
                // Ensure span has dimensions and position by
                // adding a zero-width space character
                span.appendChild( document.createTextNode('\u200b') );
                range.insertNode( span );
                var rect = span.getBoundingClientRect();
                var spanParent = span.parentNode;
                spanParent.removeChild( span );
                // Glue any broken text nodes back together
                spanParent.normalize();
                return {
                    left: parseInt(rect.left),
                    top: parseInt(rect.top),
                    width: parseInt(rect.right - rect.left),
                    height: parseInt(rect.bottom - rect.top)
                };
            }
            */
        }
        else if( document.selection )
        {
            var sel = document.selection;
            if( sel.type != 'Control' )
            {
                var range = sel.createRange();
                // IE8 return 0/0/0/0 if caret right before newline
                if( range.boundingLeft || range.boundingTop || range.boundingWidth || range.boundingHeight )
                    return {
                        left: range.boundingLeft,
                        top: range.boundingTop,
                        width: range.boundingWidth,
                        height: range.boundingHeight
                    };
            }
        }
        return false;
    };

    var getSelectionCollapsed = function( containerNode )
    {
        if( window.getSelection )
        {
            var sel = window.getSelection();
            if( sel.isCollapsed )
                return true;
            return false;
        }
        else if( document.selection )
        {
            var sel = document.selection;
            if( sel.type == 'Text' )
            {
                var range = document.selection.createRange();
                var textrange = document.body.createTextRange();
                textrange.moveToElementText(containerNode);
                textrange.setEndPoint('EndToStart', range);
                return range.htmlText.length == 0;
            }
            if( sel.type == 'Control' ) // e.g. an image selected
                return false;
            // sel.type == 'None' -> collapsed selection
        }
        return true;
    };

    // http://stackoverflow.com/questions/7781963/js-get-array-of-all-selected-nodes-in-contenteditable-div
    var getSelectedNodes = function( containerNode )
    {
        if( window.getSelection )
        {
            var sel = window.getSelection();
            if( ! sel.rangeCount )
                return [];
            var nodes = [];
            for( var i=0; i < sel.rangeCount; ++i )
            {
                var range = sel.getRangeAt(i),
                    node = range.startContainer,
                    endNode = range.endContainer;
                while( node )
                {
                    // add this node?
                    if( node != containerNode )
                    {
                        var node_inside_selection = false;
                        if( sel.containsNode )
                            node_inside_selection = sel.containsNode( node, true );
                        else // IE11
                        {
                            // http://stackoverflow.com/questions/5884210/how-to-find-if-a-htmlelement-is-enclosed-in-selected-text
                            var noderange = document.createRange();
                            noderange.selectNodeContents( node );
                            for( var i=0; i < sel.rangeCount; ++i )
                            {
                                var range = sel.getRangeAt(i);
                                // start after or end before -> skip node
                                if( range.compareBoundaryPoints(range.END_TO_START,noderange) >= 0 &&
                                    range.compareBoundaryPoints(range.START_TO_END,noderange) <= 0 )
                                {
                                    node_inside_selection = true;
                                    break;
                                }
                            }
                        }
                        if( node_inside_selection )
                            nodes.push( node );
                    }
                    node = nextNode( node, node == endNode ? endNode : containerNode );
                }
            }
            // Fallback
            if( nodes.length == 0 && isOrContainsNode(containerNode,sel.focusNode) && sel.focusNode != containerNode )
                nodes.push( sel.focusNode );
            return nodes;
        }
        else if( document.selection )
        {
            var sel = document.selection;
            if( sel.type == 'Text' )
            {
                var nodes = [];
                var ranges = sel.createRangeCollection();
                for( var i=0; i < ranges.length; ++i )
                {
                    var range = ranges[i],
                        parentNode = range.parentElement(),
                        node = parentNode;
                    while( node )
                    {
                        // No clue how to detect whether a TextNode is within the selection...
                        // ElementNode is easy: http://stackoverflow.com/questions/5884210/how-to-find-if-a-htmlelement-is-enclosed-in-selected-text
                        var noderange = range.duplicate();
                        noderange.moveToElementText( node.nodeType != Node_ELEMENT_NODE ? node.parentNode : node );
                        // start after or end before -> skip node
                        if( noderange.compareEndPoints('EndToStart',range) >= 0 &&
                            noderange.compareEndPoints('StartToEnd',range) <= 0 )
                        {
                            // no "Array.indexOf()" in IE8
                            var in_array = false;
                            for( var j=0; j < nodes.length; ++j )
                            {
                                if( nodes[j] !== node )
                                    continue;
                                in_array = true;
                                break;
                            }
                            if( ! in_array )
                                nodes.push( node );
                        }
                        node = nextNode( node, parentNode );
                    }
                }
                // Fallback
                if( nodes.length == 0 && isOrContainsNode(containerNode,document.activeElement) && document.activeElement != containerNode )
                    nodes.push( document.activeElement );
                return nodes;
            }
            if( sel.type == 'Control' ) // e.g. an image selected
            {
                var nodes = [];
                // http://msdn.microsoft.com/en-us/library/ie/hh826021%28v=vs.85%29.aspx
                var range = sel.createRange();
                for( var i=0; i < range.length; ++i )
                    nodes.push( range(i) );
                return nodes;
            }
        }
        return [];
    };

    // http://stackoverflow.com/questions/8513368/collapse-selection-to-start-of-selection-not-div
    var collapseSelectionEnd = function()
    {
        if( window.getSelection )
        {
            var sel = window.getSelection();
            if( ! sel.isCollapsed )
            {
                // Form-submits via Enter throw 'NS_ERROR_FAILURE' on Firefox 34
                try {
                    sel.collapseToEnd();
                }
                catch( e ) {
                }
            }
        }
        else if( document.selection )
        {
            var sel = document.selection;
            if( sel.type != 'Control' )
            {
                var range = sel.createRange();
                range.collapse(false);
                range.select();
            }
        }
    };

    // http://stackoverflow.com/questions/15157435/get-last-character-before-caret-position-in-javascript
    // http://stackoverflow.com/questions/11247737/how-can-i-get-the-word-that-the-caret-is-upon-inside-a-contenteditable-div
    var expandSelectionCaret = function( containerNode, preceding, following )
    {
        if( window.getSelection )
        {
            var sel = window.getSelection();
            if( sel.modify )
            {
                for( var i=0; i < preceding; ++i )
                    sel.modify('extend', 'backward', 'character');
                for( var i=0; i < following; ++i )
                    sel.modify('extend', 'forward', 'character');
            }
            else
            {
                // not so easy if the steps would cover multiple nodes ...
                var range = sel.getRangeAt(0);
                range.setStart( range.startContainer, range.startOffset - preceding );
                range.setEnd( range.endContainer, range.endOffset + following );
                sel.removeAllRanges();
                sel.addRange(range);
            }
        }
        else if( document.selection )
        {
            var sel = document.selection;
            if( sel.type != 'Control' )
            {
                var range = sel.createRange();
                range.collapse(true);
                range.moveStart('character', -preceding);
                range.moveEnd('character', following);
                range.select();
            }
        }
    };

    // http://stackoverflow.com/questions/4652734/return-html-from-a-user-selected-text/4652824#4652824
    var getSelectionHtml = function( containerNode )
    {
        if( getSelectionCollapsed( containerNode ) )
            return null;
        if( window.getSelection )
        {
            var sel = window.getSelection();
            if( sel.rangeCount )
            {
                var container = document.createElement('div'),
                    len = sel.rangeCount;
                for( var i=0; i < len; ++i )
                {
                    var contents = sel.getRangeAt(i).cloneContents();
                    container.appendChild(contents);
                }
                return container.innerHTML;
            }
        }
        else if( document.selection )
        {
            var sel = document.selection;
            if( sel.type == 'Text' )
            {
                var range = sel.createRange();
                return range.htmlText;
            }
        }
        return null;
    };

    var selectionInside = function( containerNode, force )
    {
        // selection inside editor?
        if( window.getSelection )
        {
            var sel = window.getSelection();
            if( isOrContainsNode(containerNode,sel.anchorNode) && isOrContainsNode(containerNode,sel.focusNode) )
                return true;
            // selection at least partly outside editor
            if( ! force )
                return false;
            // force selection to editor
            var range = document.createRange();
            range.selectNodeContents( containerNode );
            range.collapse( false );
            sel.removeAllRanges();
            sel.addRange(range);
        }
        else if( document.selection )
        {
            var sel = document.selection;
            if( sel.type == 'Control' ) // e.g. an image selected
            {
                // http://msdn.microsoft.com/en-us/library/ie/hh826021%28v=vs.85%29.aspx
                var range = sel.createRange();
                if( range.length != 0 && isOrContainsNode(containerNode,range(0)) ) // test only the first element
                    return true;
            }
            else //if( sel.type == 'Text' || sel.type == 'None' )
            {
                // Range of container
                // http://stackoverflow.com/questions/12243898/how-to-select-all-text-in-contenteditable-div
                var rangeContainer = document.body.createTextRange();
                rangeContainer.moveToElementText(containerNode);
                // Compare with selection range
                var range = sel.createRange();
                if( rangeContainer.inRange(range) )
                    return true;
            }
            // selection at least partly outside editor
            if( ! force )
                return false;
            // force selection to editor
            // http://stackoverflow.com/questions/12243898/how-to-select-all-text-in-contenteditable-div
            var range = document.body.createTextRange();
            range.moveToElementText(containerNode);
            range.setEndPoint('StartToEnd',range); // collapse
            range.select();
        }
        return true;
    };

    /*
    var clipSelectionTo = function( containerNode )
    {
        if( window.getSelection && containerNode.compareDocumentPosition )
        {
            var sel = window.getSelection();
            var left_node = sel.anchorNode,
                left_offset = sel.anchorOffset,
                right_node = sel.focusNode,
                right_offset = sel.focusOffset;
            // http://stackoverflow.com/questions/10710733/dom-determine-if-the-anchornode-or-focusnode-is-on-the-left-side
            if( (left_node == right_node && left_offset > right_offset) ||
                (left_node.compareDocumentPosition(right_node) & Node.DOCUMENT_POSITION_PRECEDING) )
            {
                // Right-to-left selection
                left_node = sel.focusNode;
                left_offset = sel.focusOffset;
                right_node = sel.anchorNode,
                right_offset = sel.anchorOffset;
            }
            // Speed up: selection inside editor
            var left_inside = isOrContainsNode(containerNode,left_node),
                right_inside = isOrContainsNode(containerNode,right_node);
            if( left_inside && right_inside )
                return true;
            // Selection before/after container?
            if( ! left_inside && containerNode.compareDocumentPosition(left_node) & Node.DOCUMENT_POSITION_FOLLOWING )
                return false; // selection after
            if( ! right_inside && containerNode.compareDocumentPosition(right_node) & Node.DOCUMENT_POSITION_PRECEDING )
                return false; // selection before
            // Selection partly before/after container
            // http://stackoverflow.com/questions/12243898/how-to-select-all-text-in-contenteditable-div
            var range = document.createRange();
            range.selectNodeContents( containerNode );
            if( left_inside )
                range.setStart( left_node, left_offset );
            if( right_inside )
                range.setEnd( right_node, right_offset );
            sel.removeAllRanges();
            sel.addRange(range);
            return true;
        }
        else if( document.selection )
        {
            var sel = document.selection;
            if( sel.type == 'Text' )
            {
                // Range of container
                // http://stackoverflow.com/questions/12243898/how-to-select-all-text-in-contenteditable-div
                var rangeContainer = document.body.createTextRange();
                rangeContainer.moveToElementText(containerNode);
                // Compare with selection range
                var range = sel.createRange();
                if( rangeContainer.inRange(range) )
                    return true;
                // Selection before/after container?
                if( rangeContainer.compareEndPoints('StartToEnd',range) > 0 )
                    return false;
                if( rangeContainer.compareEndPoints('EndToStart',range) < 0 )
                    return false;
                // Selection partly before/after container
                if( rangeContainer.compareEndPoints('StartToStart',range) > 0 )
                    range.setEndPoint('StartToStart',rangeContainer);
                if( rangeContainer.compareEndPoints('EndToEnd',range) < 0 )
                    range.setEndPoint('EndToEnd',rangeContainer);
                // select range
                range.select();
                return true;
            }
        }
        return true;
    };
    */

    // http://stackoverflow.com/questions/6690752/insert-html-at-caret-in-a-contenteditable-div/6691294#6691294
    // http://stackoverflow.com/questions/4823691/insert-an-html-element-in-a-contenteditable-element
    // http://stackoverflow.com/questions/6139107/programatically-select-text-in-a-contenteditable-html-element
    var pasteHtmlAtCaret = function( containerNode, html )
    {
        if( window.getSelection )
        {
            // IE9 and non-IE
            var sel = window.getSelection();
            if( sel.getRangeAt && sel.rangeCount )
            {
                var range = sel.getRangeAt(0);
                // Range.createContextualFragment() would be useful here but is
                // only relatively recently standardized and is not supported in
                // some browsers (IE9, for one)
                var el = document.createElement('div');
                el.innerHTML = html;
                var frag = document.createDocumentFragment(), node, lastNode;
                while ( (node = el.firstChild) ) {
                    lastNode = frag.appendChild(node);
                }
                if( isOrContainsNode(containerNode, range.commonAncestorContainer) )
                {
                    range.deleteContents();
                    range.insertNode(frag);
                }
                else {
                    containerNode.appendChild(frag);
                }
                // Preserve the selection
                if( lastNode )
                {
                    range = range.cloneRange();
                    range.setStartAfter(lastNode);
                    range.collapse(true);
                    sel.removeAllRanges();
                    sel.addRange(range);
                }
            }
        }
        else if( document.selection )
        {
            // IE <= 8
            var sel = document.selection;
            if( sel.type != 'Control' )
            {
                var originalRange = sel.createRange();
                originalRange.collapse(true);
                var range = sel.createRange();
                if( isOrContainsNode(containerNode, range.parentElement()) )
                    range.pasteHTML( html );
                else // simply append to Editor
                {
                    var textRange = document.body.createTextRange();
                    textRange.moveToElementText(containerNode);
                    textRange.collapse(false);
                    textRange.select();
                    textRange.pasteHTML( html );
                }
                // Preserve the selection
                range = sel.createRange();
                range.setEndPoint('StartToEnd', originalRange);
                range.select();
            }
        }
    };

    // Interface: Create wysiwyg
    var wysiwyg = function( option )
    {
        // Options
        option = option || {};
        var option_element = option.element || null;
        if( typeof(option_element) == 'string' )
            option_element = document.getElementById( option_element );
        var option_onkeydown = option.onKeyDown || null;
        var option_onkeypress = option.onKeyPress || null;
        var option_onkeyup = option.onKeyUp || null;
        var option_onselection = option.onSelection || null;
        var option_onplaceholder = option.onPlaceholder || null;
        var option_onclosepopup = option.onClosepopup || null;
        var option_hijackcontextmenu = option.hijackContextmenu || false;

        // Keep textarea if browser can't handle content-editable
        var is_textarea = option_element.nodeName == 'TEXTAREA' || option_element.nodeName == 'INPUT';
        if( is_textarea )
        {
            // http://stackoverflow.com/questions/1882205/how-do-i-detect-support-for-contenteditable-via-javascript
            var canContentEditable = 'contentEditable' in document.body;
            if( canContentEditable )
            {
                // Sniffer useragent...
                var webkit = navigator.userAgent.match(/(?:iPad|iPhone|Android).* AppleWebKit\/([^ ]+)/);
                if( webkit && 420 <= parseInt(webkit[1]) && parseInt(webkit[1]) < 534 ) // iPhone 1 was Webkit/420
                    canContentEditable = false;
            }
            if( ! canContentEditable )
            {
                // Keep textarea
                var node_textarea = option_element;
                // Add a 'newline' after each '<br>'
                var newlineAfterBR = function( html ) {
                    return html.replace(/<br[ \/]*>\n?/gi,'<br>\n');
                };
                node_textarea.value = newlineAfterBR( node_textarea.value );
                // Command structure
                var dummy_this = function() {
                    return this;
                };
                var dummy_null = function() {
                    return null;
                };
                return {
                    legacy: true,
                    // properties
                    getElement: function()
                    {
                        return node_textarea;
                    },
                    getHTML: function()
                    {
                        return node_textarea.value;
                    },
                    setHTML: function( html )
                    {
                        node_textarea.value = newlineAfterBR( html );
                        return this;
                    },
                    getSelectedHTML: dummy_null,
                    sync: dummy_this,
                    // selection and popup
                    collapseSelection: dummy_this,
                    expandSelection: dummy_this,
                    openPopup: dummy_null,
                    closePopup: dummy_this,
                    // exec commands
                    removeFormat: dummy_this,
                    bold: dummy_this,
                    italic: dummy_this,
                    underline: dummy_this,
                    strikethrough: dummy_this,
                    forecolor: dummy_this,
                    highlight: dummy_this,
                    fontName: dummy_this,
                    fontSize: dummy_this,
                    subscript: dummy_this,
                    superscript: dummy_this,
                    align: dummy_this,
                    format: dummy_this,
                    indent: dummy_this,
                    insertLink: dummy_this,
                    insertImage: dummy_this,
                    insertHTML: dummy_this,
                    insertList: dummy_this
                };
            }
        }

        // create content-editable
        var node_textarea = null,
            node_wysiwyg = null;
        if( is_textarea )
        {
            // Textarea
            node_textarea = option_element;
            node_textarea.style.display = 'none';

            // Contenteditable
            node_wysiwyg = document.createElement( 'DIV' );
            node_wysiwyg.innerHTML = node_textarea.value;
            var parent = node_textarea.parentNode,
                next = node_textarea.nextSibling;
            if( next )
                parent.insertBefore( node_wysiwyg, next );
            else
                parent.appendChild( node_wysiwyg );
        }
        else
            node_wysiwyg = option_element;
        node_wysiwyg.setAttribute( 'contentEditable', 'true' ); // IE7 is case sensitive

        // IE8 uses 'document' instead of 'window'
        // http://tanalin.com/en/articles/ie-version-js/
        var window_ie8 = (document.all && !document.addEventListener) ? document : window;

        // Sync Editor with Textarea
        var syncTextarea = null;
        if( is_textarea )
        {
            var previous_html = node_wysiwyg.innerHTML;
            syncTextarea = function()
            {
                var new_html = node_wysiwyg.innerHTML;
                if( new_html == previous_html )
                    return ;
                // HTML changed
                node_textarea.value = new_html;
                previous_html = new_html;
                // Event Handler
                fireEvent( node_textarea, 'change', false );
            };
        }

        // Show placeholder
        var showPlaceholder;
        if( option_onplaceholder )
        {
            var placeholder_visible = false;
            showPlaceholder = function()
            {
                // Test if wysiwyg has content
                var wysiwyg_empty = true;
                var node = node_wysiwyg;
                while( node )
                {
                    node = nextNode( node, node_wysiwyg );
                    // Test if node contains something visible
                    if( ! node )
                        ;
                    else if( node.nodeType == Node_ELEMENT_NODE )
                    {
                        if( node.nodeName == 'IMG' )
                        {
                            wysiwyg_empty = false;
                            break;
                        }
                    }
                    else if( node.nodeType == Node_TEXT_NODE )
                    {
                        var text = node.nodeValue;
                        if( text && text.search(/[^\s]/) != -1 )
                        {
                            wysiwyg_empty = false;
                            break;
                        }
                    }
                }
                if( placeholder_visible != wysiwyg_empty )
                {
                    option_onplaceholder( wysiwyg_empty );
                    placeholder_visible = wysiwyg_empty;
                }
            };
            showPlaceholder();
        }

        // Handle selection
        var popup_saved_selection = null, // preserve selection during popup
            handleSelection = null,
            debounced_handleSelection = null;
        if( option_onselection )
        {
            handleSelection = function( clientX, clientY, rightclick )
            {
                // Detect collapsed selection
                var collapsed = getSelectionCollapsed( node_wysiwyg );
                // List of all selected nodes
                var nodes = getSelectedNodes( node_wysiwyg );
                // Rectangle of the selection
                var rect = (clientX === null || clientY === null) ? null :
                            {
                                left: clientX,
                                top: clientY,
                                width: 0,
                                height: 0
                            };
                var selectionRect = getSelectionRect();
                if( selectionRect )
                    rect = selectionRect;
                if( rect )
                {
                    // So far 'rect' is relative to viewport
                    if( node_wysiwyg.getBoundingClientRect )
                    {
                        // Make it relative to the editor via 'getBoundingClientRect()'
                        var boundingrect = node_wysiwyg.getBoundingClientRect();
                        rect.left -= parseInt(boundingrect.left);
                        rect.top -= parseInt(boundingrect.top);
                    }
                    else
                    {
                        var node = node_wysiwyg,
                            offsetLeft = 0,
                            offsetTop = 0,
                            fixed = false;
                        do {
                            offsetLeft += node.offsetLeft ? parseInt(node.offsetLeft) : 0;
                            offsetTop += node.offsetTop ? parseInt(node.offsetTop) : 0;
                            if( node.style.position == 'fixed' )
                                fixed = true;
                        }
                        while( node = node.offsetParent );
                        rect.left -= offsetLeft - (fixed ? 0 : window.pageXOffset);
                        rect.top -= offsetTop - (fixed ? 0 : window.pageYOffset);
                    }
                    // Trim rectangle to the editor
                    if( rect.left < 0 )
                        rect.left = 0;
                    if( rect.top < 0 )
                        rect.top = 0;
                    if( rect.width > node_wysiwyg.offsetWidth )
                        rect.width = node_wysiwyg.offsetWidth;
                    if( rect.height > node_wysiwyg.offsetHeight )
                        rect.height = node_wysiwyg.offsetHeight;
                }
                else if( nodes.length )
                {
                    // What else could we do? Offset of first element...
                    for( var i=0; i < nodes.length; ++i )
                    {
                        var node = nodes[i];
                        if( node.nodeType != Node_ELEMENT_NODE )
                            continue;
                        rect = {
                                left: node.offsetLeft,
                                top: node.offsetTop,
                                width: node.offsetWidth,
                                height: node.offsetHeight
                            };
                        break;
                    }
                }
                // Callback
                option_onselection( collapsed, rect, nodes, rightclick );
            };
            debounced_handleSelection = debounce( handleSelection, 1 );
        }

        // Open popup
        var node_popup = null;
        var popupClickClose = function( e )
        {
            // http://www.quirksmode.org/js/events_properties.html
            if( !e )
                var e = window.event;
            var target = e.target || e.srcElement;
            if( target.nodeType == Node_TEXT_NODE ) // defeat Safari bug
                target = target.parentNode;
            // Click within popup?
            if( isOrContainsNode(node_popup,target) )
                return ;
            // close popup
            popupClose();
        };
        var popupOpen = function()
        {
            // Already open?
            if( node_popup )
                return node_popup;

            // Global click closes popup
            addEvent( window_ie8, 'mousedown', popupClickClose, true );

            // Create popup element
            node_popup = document.createElement( 'DIV' );
            var parent = node_wysiwyg.parentNode,
                next = node_wysiwyg.nextSibling;
            if( next )
                parent.insertBefore( node_popup, next );
            else
                parent.appendChild( node_popup );
            return node_popup;
        };
        var popupClose = function()
        {
            if( ! node_popup )
                return ;
            node_popup.parentNode.removeChild( node_popup );
            node_popup = null;
            removeEvent( window_ie8, 'mousedown', popupClickClose, true );
            if( option_onclosepopup )
                option_onclosepopup();
        };

        // Focus/Blur events
        addEvent( node_wysiwyg, 'focus', function()
        {
            // forward focus/blur to the textarea
            if( node_textarea )
                fireEvent( node_textarea, 'focus', false );
        });
        addEvent( node_wysiwyg, 'blur', function()
        {
            // sync textarea immediately
            if( syncTextarea )
                syncTextarea();
            // forward focus/blur to the textarea
            if( node_textarea )
                fireEvent( node_textarea, 'blur', false );
        });

        // Change events
        var debounced_changeHandler = null;
        if( showPlaceholder || syncTextarea )
        {
            // debounce 'syncTextarea' a second time, because 'innerHTML' is quite burdensome
            var debounced_syncTextarea = syncTextarea ? debounce( syncTextarea, 250, true ) : null; // high timeout is save, because of "onblur" fires immediately
            var changeHandler = function( e )
            {
                if( showPlaceholder )
                    showPlaceholder();
                if( debounced_syncTextarea )
                    debounced_syncTextarea();
            };
            debounced_changeHandler = debounce( changeHandler, 1 );

            // Catch change events
            // http://stackoverflow.com/questions/1391278/contenteditable-change-events/1411296#1411296
            // http://stackoverflow.com/questions/8694054/onchange-event-with-contenteditable/8694125#8694125
            // https://github.com/mindmup/bootstrap-wysiwyg/pull/50/files
            // http://codebits.glennjones.net/editing/events-contenteditable.htm
            addEvent( node_wysiwyg, 'input', debounced_changeHandler );
            addEvent( node_wysiwyg, 'DOMNodeInserted', debounced_changeHandler );
            addEvent( node_wysiwyg, 'DOMNodeRemoved', debounced_changeHandler );
            addEvent( node_wysiwyg, 'DOMSubtreeModified', debounced_changeHandler );
            addEvent( node_wysiwyg, 'DOMCharacterDataModified', debounced_changeHandler ); // polyfill input in IE 9-10
            addEvent( node_wysiwyg, 'propertychange', debounced_changeHandler );
            addEvent( node_wysiwyg, 'textInput', debounced_changeHandler );
            addEvent( node_wysiwyg, 'paste', debounced_changeHandler );
            addEvent( node_wysiwyg, 'cut', debounced_changeHandler );
            addEvent( node_wysiwyg, 'drop', debounced_changeHandler );
        }

        // Key events
        // http://sandbox.thewikies.com/html5-experiments/key-events.html
        var keyHandler = function( e, phase )
        {
            // http://www.quirksmode.org/js/events_properties.html
            if( !e )
                var e = window.event;
            // https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent
            // http://stackoverflow.com/questions/1444477/keycode-and-charcode
            // http://stackoverflow.com/questions/4285627/javascript-keycode-vs-charcode-utter-confusion
            // http://unixpapa.com/js/key.html
            var key = e.which || e.keyCode,
                character = String.fromCharCode(key || e.charCode),
                shiftKey = e.shiftKey || false,
                altKey = e.altKey || false,
                ctrlKey = e.ctrlKey || false,
                metaKey = e.metaKey || false;
             if( phase == 1 )
            {
                // Callback
                if( option_onkeydown && option_onkeydown(key, character, shiftKey, altKey, ctrlKey, metaKey) === false )
                    return cancelEvent( e ); // dismiss key
            }
            else if( phase == 2 )
            {
                // Callback
                if( option_onkeypress && option_onkeypress(key, character, shiftKey, altKey, ctrlKey, metaKey) === false )
                    return cancelEvent( e ); // dismiss key
            }
            else if( phase == 3 )
            {
                // Callback
                if( option_onkeyup && option_onkeyup(key, character, shiftKey, altKey, ctrlKey, metaKey) === false )
                    return cancelEvent( e ); // dismiss key
            }

            // Keys can change the selection
            if( phase == 2 || phase == 3 )
            {
                popup_saved_selection = null;
                if( debounced_handleSelection )
                    debounced_handleSelection( null, null, false );
            }
            // Most keys can cause text-changes
            if( phase == 2 && debounced_changeHandler )
            {
                switch( key )
                {
                    case 33: // pageUp
                    case 34: // pageDown
                    case 35: // end
                    case 36: // home
                    case 37: // left
                    case 38: // up
                    case 39: // right
                    case 40: // down
                        // cursors do not
                        break;
                    default:
                        // call change handler
                        debounced_changeHandler();
                        break;
                }
            }
        };
        addEvent( node_wysiwyg, 'keydown', function( e )
        {
            return keyHandler( e, 1 );
        });
        addEvent( node_wysiwyg, 'keypress', function( e )
        {
            return keyHandler( e, 2 );
        });
        addEvent( node_wysiwyg, 'keyup', function( e )
        {
            return keyHandler( e, 3 );
        });

        // Mouse events
        var mouseHandler = function( e, rightclick )
        {
            // http://www.quirksmode.org/js/events_properties.html
            if( !e )
                var e = window.event;
            // mouse position
            var clientX = null,
                clientY = null;
            if( e.clientX && e.clientY )
            {
                clientX = e.clientX;
                clientY = e.clientY;
            }
            else if( e.pageX && e.pageY )
            {
                clientX = e.pageX - window.pageXOffset;
                clientY = e.pageY - window.pageYOffset;
            }
            // mouse button
            if( e.which && e.which == 3 )
                rightclick = true;
            else if( e.button && e.button == 2 )
                rightclick = true;

            // remove event handler
            removeEvent( window_ie8, 'mouseup', mouseHandler );
            // Callback selection
            popup_saved_selection = null;
            if( ! option_hijackcontextmenu && rightclick )
                return ;
            if( debounced_handleSelection )
                debounced_handleSelection( clientX, clientY, rightclick );
        };
        addEvent( node_wysiwyg, 'mousedown', function( e )
        {
            // catch event if 'mouseup' outside 'node_wysiwyg'
            removeEvent( window_ie8, 'mouseup', mouseHandler );
            addEvent( window_ie8, 'mouseup', mouseHandler );
        });
        addEvent( node_wysiwyg, 'mouseup', function( e )
        {
            mouseHandler( e );
            // Trigger change
            if( debounced_changeHandler )
                debounced_changeHandler();
        });
        addEvent( node_wysiwyg, 'dblclick', function( e )
        {
            mouseHandler( e );
        });
        addEvent( node_wysiwyg, 'selectionchange',  function( e )
        {
            mouseHandler( e );
        });
        if( option_hijackcontextmenu )
        {
            addEvent( node_wysiwyg, 'contextmenu', function( e )
            {
                mouseHandler( e, true );
                return cancelEvent( e );
            });
        }


        // exec command
        // https://developer.mozilla.org/en-US/docs/Web/API/document.execCommand
        // http://www.quirksmode.org/dom/execCommand.html
        var execCommand = function( command, param, force_selection )
        {
            // give selection to contenteditable element
            restoreSelection( node_wysiwyg, popup_saved_selection );
            if( ! selectionInside(node_wysiwyg, force_selection) ) // returns 'selection inside editor'
                return false;
            // for webkit, mozilla, opera
            if( window.getSelection )
            {
                // Buggy, call within 'try/catch'
                try {
                    if( document.queryCommandSupported && ! document.queryCommandSupported(command) )
                        return false;
                    return document.execCommand( command, false, param );
                }
                catch( e ) {
                }
            }
            // for IE
            else if( document.selection )
            {
                var sel = document.selection;
                if( sel.type != 'None' )
                {
                    var range = sel.createRange();
                    // Buggy, call within 'try/catch'
                    try {
                        if( ! range.queryCommandEnabled(command) )
                            return false;
                        return range.execCommand( command, false, param );
                    }
                    catch( e ) {
                    }
                }
            }
            return false;
        };

        // Workaround IE11 - https://github.com/wysiwygjs/wysiwyg.js/issues/14
        var trailingDiv = null;
        var IEtrailingDIV = function()
        {
            // Detect IE - http://stackoverflow.com/questions/17907445/how-to-detect-ie11
            if( document.all || !!window.MSInputMethodContext )
            {
                trailingDiv = document.createElement( 'DIV' );
                node_wysiwyg.appendChild( trailingDiv );
            }
        };
        // Command structure
        var callUpdates = function( selection_destroyed )
        {
            // Remove IE11 workaround
            if( trailingDiv )
            {
                node_wysiwyg.removeChild( trailingDiv );
                trailingDiv = null;
            }
            // change-handler
            if( debounced_changeHandler )
                debounced_changeHandler();
            // handle saved selection
            if( selection_destroyed )
            {
                collapseSelectionEnd();
                popup_saved_selection = null; // selection destroyed
            }
            else if( popup_saved_selection )
                popup_saved_selection = saveSelection( node_wysiwyg );
        };
        return {
            // properties
            getElement: function()
            {
                return node_wysiwyg;
            },
            getHTML: function()
            {
                return node_wysiwyg.innerHTML;
            },
            setHTML: function( html )
            {
                node_wysiwyg.innerHTML = html;
                callUpdates( true ); // selection destroyed
                return this;
            },
            getSelectedHTML: function()
            {
                restoreSelection( node_wysiwyg, popup_saved_selection );
                if( ! selectionInside(node_wysiwyg) )
                    return null;
                return getSelectionHtml( node_wysiwyg );
            },
            sync: function()
            {
                if( syncTextarea )
                    syncTextarea();
                return this;
            },
            // selection and popup
            collapseSelection: function()
            {
                collapseSelectionEnd();
                popup_saved_selection = null; // selection destroyed
                return this;
            },
            expandSelection: function( preceding, following )
            {
                restoreSelection( node_wysiwyg, popup_saved_selection );
                if( ! selectionInside(node_wysiwyg) )
                    return this;
                expandSelectionCaret( node_wysiwyg, preceding, following );
                popup_saved_selection = saveSelection( node_wysiwyg ); // save new selection
                return this;
            },
            openPopup: function()
            {
                if( ! popup_saved_selection )
                    popup_saved_selection = saveSelection( node_wysiwyg ); // save current selection
                return popupOpen();
            },
            closePopup: function()
            {
                popupClose();
                return this;
            },
            removeFormat: function()
            {
                execCommand( 'removeFormat' );
                execCommand( 'unlink' );
                callUpdates();
                return this;
            },
            bold: function()
            {
                execCommand( 'bold' );
                callUpdates();
                return this;
            },
            italic: function()
            {
                execCommand( 'italic' );
                callUpdates();
                return this;
            },
            underline: function()
            {
                execCommand( 'underline' );
                callUpdates();
                return this;
            },
            strikethrough: function()
            {
                execCommand( 'strikeThrough' );
                callUpdates();
                return this;
            },
            forecolor: function( color )
            {
                execCommand( 'foreColor', color );
                callUpdates();
                return this;
            },
            highlight: function( color )
            {
                // http://stackoverflow.com/questions/2756931/highlight-the-text-of-the-dom-range-element
                if( ! execCommand('hiliteColor',color) ) // some browsers apply 'backColor' to the whole block
                    execCommand( 'backColor', color );
                callUpdates();
                return this;
            },
            fontName: function( name )
            {
                execCommand( 'fontName', name );
                callUpdates();
                return this;
            },
            fontSize: function( size )
            {
                execCommand( 'fontSize', size );
                callUpdates();
                return this;
            },
            subscript: function()
            {
                execCommand( 'subscript' );
                callUpdates();
                return this;
            },
            superscript: function()
            {
                execCommand( 'superscript' );
                callUpdates();
                return this;
            },
            align: function( align )
            {
                IEtrailingDIV();
                if( align == 'left' )
                    execCommand( 'justifyLeft' );
                else if( align == 'center' )
                    execCommand( 'justifyCenter' );
                else if( align == 'right' )
                    execCommand( 'justifyRight' );
                else if( align == 'justify' )
                    execCommand( 'justifyFull' );
                callUpdates();
                return this;
            },
            format: function( tagname )
            {
                IEtrailingDIV();
                execCommand( 'formatBlock', tagname );
                callUpdates();
                return this;
            },
            indent: function( outdent )
            {
                IEtrailingDIV();
                execCommand( outdent ? 'outdent' : 'indent' );
                callUpdates();
                return this;
            },
            insertLink: function( url )
            {
                execCommand( 'createLink', url );
                callUpdates( true ); // selection destroyed
                return this;
            },
            insertImage: function( url )
            {
                execCommand( 'insertImage', url, true );
                callUpdates( true ); // selection destroyed
                return this;
            },
            insertHTML: function( html )
            {
                if( ! execCommand('insertHTML', html, true) )
                {
                    // IE 11 still does not support 'insertHTML'
                    restoreSelection( node_wysiwyg, popup_saved_selection );
                    selectionInside( node_wysiwyg, true );
                    pasteHtmlAtCaret( node_wysiwyg, html );
                }
                callUpdates( true ); // selection destroyed
                return this;
            },
            insertList: function( ordered )
            {
                IEtrailingDIV();
                execCommand( ordered ? 'insertOrderedList' : 'insertUnorderedList' );
                callUpdates();
                return this;
            }
        };
    };

    return wysiwyg;
});

},{}],105:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _vue = require('vue');

var _vue2 = _interopRequireDefault(_vue);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = new _vue2.default();

},{"vue":100}],106:[function(require,module,exports){
;(function(){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _bus = require('../bus');

var _bus2 = _interopRequireDefault(_bus);

var _history = require('../history');

var _history2 = _interopRequireDefault(_history);

var _util = require('../util');

var _notaEditor = require('./nota-editor.vue');

var _notaEditor2 = _interopRequireDefault(_notaEditor);

var _notaList = require('./nota-list.vue');

var _notaList2 = _interopRequireDefault(_notaList);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  name: 'nota-app',
  components: { NotaEditor: _notaEditor2.default, NotaList: _notaList2.default },

  data: function data(_) {
    return {
      editing: false,

      items: [{
        type: 'nota',
        id: '1',
        title: 'The Silmarillion',
        content: '<p>duup</p><p>lex</p>'
      }, {
        type: 'nota',
        id: '2',
        title: '不思議の国のアリス',
        content: '<p>hely</p>'
      }, {
        type: 'nota',
        id: '3',
        title: 'Warning!!',
        content: '<p>tropic</p>'
      }, {
        type: 'folder',
        id: '4',
        title: 'other'
      }, {
        type: 'nota',
        id: '5',
        parent: '4',
        title: 'Don\'t Panic',
        content: '<p>yuna</p>'
      }, {
        type: 'folder',
        id: '6',
        parent: '4',
        title: 'else'
      }, {
        type: 'nota',
        id: '7',
        parent: '6',
        title: 'Sometimes',
        content: '<p>yuna</p>'
      }, {
        type: 'folder',
        id: '8',
        parent: '6',
        title: 'another'
      }, {
        type: 'nota',
        id: '9',
        parent: '8',
        title: '1',
        content: '<p>yuna</p>'
      }]
    };
  },

  created: function created() {
    _bus2.default.$on('historychange', this.historychange);
  },


  methods: {
    historychange: function historychange(_ref) {
      var params = _ref.params;

      if (!params.id) return;

      var item = this.items.find(function (item) {
        return item.id === params.id;
      });
      if (!item || item.type !== 'nota') return;

      this.editing = item;
    },
    add: function add(type) {
      var item = {
        type: type,
        title: '',
        id: (0, _util.ID)()
      };

      this.items.push(item);

      if (type === 'nota') {
        item.content = '';
        this.editing = item;

        _history2.default.push((0, _history.href)({ name: 'item', params: item }));
      }

      _bus2.default.$emit('newItem', { id: item.id });
    }
  }
};
})()
if (module.exports.__esModule) module.exports = module.exports.default
var __vue__options__ = (typeof module.exports === "function"? module.exports.options: module.exports)
if (__vue__options__.functional) {console.error("[vueify] functional components are not supported and should be defined in plain js files using render functions.")}
__vue__options__.render = function(){with(this){return _h('main',[_h('aside',{staticAttrs:{"am-nota":"aside"}},function(){return [_h('nota-list',{attrs:{"items":items}})," ",_h('button',{staticAttrs:{"type":"button"},on:{"click":function($event){add( "nota" )}}},[_m(0)," New note\n    "])," ",_h('button',{staticAttrs:{"type":"button"},on:{"click":function($event){add( "folder" )}}},[_m(1)," New folder\n    "])]})," ",_h('nota-editor',{directives:[{name:"show",value:(editing),expression:"editing"}],transition:"editor",show:true,attrs:{"editing":editing}})])}}
__vue__options__.staticRenderFns = [function(){with(this){return _h('span',{staticClass:"material-icons"},["note_add"])}},function(){with(this){return _h('span',{staticClass:"material-icons"},["create_new_folder"])}}]
if (module.hot) {(function () {  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), true)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-1", __vue__options__)
  } else {
    hotAPI.rerender("data-v-1", __vue__options__)
  }
})()}

},{"../bus":105,"../history":110,"../util":113,"./nota-editor.vue":108,"./nota-list.vue":109,"vue":100,"vue-hot-reload-api":99}],107:[function(require,module,exports){
var __vueify_style_dispose__ = require("vueify/lib/insert-css").insert("[ contenteditable ] a {\n  text-decoration: underline;\n  cursor: pointer;\n  display: inline-block;\n  margin: 0;\n}")
;(function(){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _wysiwyg = require('wysiwyg.js');

var _wysiwyg2 = _interopRequireDefault(_wysiwyg);

var _util = require('../util');

var _bus = require('../bus');

var _bus2 = _interopRequireDefault(_bus);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var linked = _util.autolink;
var editor = void 0;

exports.default = {
  name: 'nota-editable',
  props: ['value'],

  mounted: function mounted() {
    editor = (0, _wysiwyg2.default)({
      element: this.$refs.editor
    });
  },


  methods: {
    keyup: function keyup(event) {
      var keyPressed = key(event);
      var activateKeys = ['space', 'enter'];
      if (!activateKeys.includes(keyPressed)) return;

      var caretPos = rangy.saveSelection();
      var editorContent = editor.getHTML().replace(/&nbsp;/g, (match, offset));
      var linkedContent = linked(editorContent);
      console.log(linkedContent);
      editor.setHTML(linkedContent.replace(/ /g, '&nbsp;'));
      rangy.restoreSelection(caretPos);
    },
    blur: function blur() {
      if (!editor) return;

      editor.setHTML(linked(editor.getHTML()));
    }
  }
};
})()
if (module.exports.__esModule) module.exports = module.exports.default
var __vue__options__ = (typeof module.exports === "function"? module.exports.options: module.exports)
if (__vue__options__.functional) {console.error("[vueify] functional components are not supported and should be defined in plain js files using render functions.")}
__vue__options__.render = function(){with(this){return _h('div',{ref:"editor",staticAttrs:{"contenteditable":""},on:{"blur":blur}})}}
__vue__options__.staticRenderFns = []
if (module.hot) {(function () {  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), true)
  if (!hotAPI.compatible) return
  module.hot.accept()
  module.hot.dispose(__vueify_style_dispose__)
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-4", __vue__options__)
  } else {
    hotAPI.reload("data-v-4", __vue__options__)
  }
})()}

},{"../bus":105,"../util":113,"vue":100,"vue-hot-reload-api":99,"vueify/lib/insert-css":101,"wysiwyg.js":104}],108:[function(require,module,exports){
;(function(){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _bus = require('../bus');

var _bus2 = _interopRequireDefault(_bus);

var _notaEditable = require('./nota-editable.vue');

var _notaEditable2 = _interopRequireDefault(_notaEditable);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  name: 'nota-editor',
  props: ['editing'],
  components: { NotaEditable: _notaEditable2.default }
};
})()
if (module.exports.__esModule) module.exports = module.exports.default
var __vue__options__ = (typeof module.exports === "function"? module.exports.options: module.exports)
if (__vue__options__.functional) {console.error("[vueify] functional components are not supported and should be defined in plain js files using render functions.")}
__vue__options__.render = function(){with(this){return _h('div',{staticAttrs:{"am-nota":"editor"}},[_h('header',{props:{"textContent":_s(editing.title)},staticAttrs:{"am-nota":"editor-title"}})," ",_h('nota-editable',{directives:[{name:"model",value:(editing.content),expression:"editing.content"}],props:{"value":(editing.content)},on:{"input":function($event){editing.content=$event}}})])}}
__vue__options__.staticRenderFns = []
if (module.hot) {(function () {  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), true)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-2", __vue__options__)
  } else {
    hotAPI.reload("data-v-2", __vue__options__)
  }
})()}

},{"../bus":105,"./nota-editable.vue":107,"vue":100,"vue-hot-reload-api":99}],109:[function(require,module,exports){
var __vueify_style_dispose__ = require("vueify/lib/insert-css").insert("[am-nota=list]:focus {\n  outline: none;\n}\n.material-icons {\n  font-size: inherit;\n  margin-right: 5px;\n}\n.material-icons,\n.material-icons + span {\n  display: inline-block;\n  vertical-align: middle;\n}\na {\n  color: inherit;\n  text-decoration: none;\n  margin: 0.5em 0;\n  display: block;\n}")
;(function(){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _bus = require('../bus');

var _bus2 = _interopRequireDefault(_bus);

var _util = require('../util');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function hasNoParent(_ref) {
  var parent = _ref.parent;

  return !parent;
}

exports.default = {
  name: 'nota-list',
  props: ['items'],

  data: function data(_) {
    return {
      filter: hasNoParent,
      currentFolder: null,
      lastTarget: null,
      lastValue: null
    };
  },

  computed: {
    results: function results() {
      return this.items.filter(this.filter);
    }
  },

  created: function created() {
    var _this = this;

    _bus2.default.$on('historychange', this.historychange);

    _bus2.default.$on('newItem', function (_ref2) {
      var id = _ref2.id;
      return _this.$nextTick(function (_) {
        return _this.focus({ target: document.getElementById(id) });
      });
    });
  },


  methods: {
    hasNoParent: hasNoParent,
    isChildOf: function isChildOf(id) {
      return function (_ref3) {
        var parent = _ref3.parent;
        return parent === id;
      };
    },

    historychange: function historychange(_ref4) {
      var _ref4$state = _ref4.state;
      var state = _ref4$state === undefined ? {} : _ref4$state;
      var params = _ref4.params;

      if (!params.id) {
        this.filter = this.hasNoParent;
        return;
      }

      var item = this.getItemById(params.id);
      var id = item.id;
      var type = item.type;
      var parent = item.parent;


      if (type === 'nota') {
        id = parent;
      } else {
        this.$el.tabIndex = 0;
        this.$el.focus();
      }

      this.filter = this.isChildOf(id);
    },
    getItemById: function getItemById($id) {
      return this.items.find(function (_ref5) {
        var id = _ref5.id;
        return id === $id;
      });
    },
    focus: function focus(_ref6) {
      var target = _ref6.target;

      if (target.tagName !== 'INPUT') return;

      target.readOnly = false;
      target.focus();
      target.select();
    },
    blur: function blur(_ref7) {
      var target = _ref7.target;

      if (target.tagName !== 'INPUT') return;

      target.readOnly = true;
      target.blur();
    },
    edit: function edit(event) {
      var target = event.target;


      if (this.lastTarget) {
        this.lastTarget.readOnly = true;
        this.lastTarget = null;
      }

      if (target.tagName !== 'INPUT') return;
      if (!event.shiftKey) return;

      event.preventDefault();
      event.stopPropagation();

      this.focus(event);

      this.lastTarget = target;
      this.lastValue = target.value;
    },
    cancel: function cancel(_ref8) {
      var target = _ref8.target;

      this.blur(target);

      if (!this.lastValue) return;

      this.getItemById(target.dataset.id).title = this.lastValue;
      this.lastValue = null;
    },
    keyup: function keyup(event) {
      var target = event.target;


      if (target.tagName !== 'INPUT') return;

      var keyPressed = (0, _util.key)(event);

      if (keyPressed === 'escape') {
        this.cancel(event);
      } else if (keyPressed === 'enter') {
        target.parentElement.click();

        if (event.shiftKey) {
          this.edit(event);
        }
      }
    }
  }
};
})()
if (module.exports.__esModule) module.exports = module.exports.default
var __vue__options__ = (typeof module.exports === "function"? module.exports.options: module.exports)
if (__vue__options__.functional) {console.error("[vueify] functional components are not supported and should be defined in plain js files using render functions.")}
__vue__options__.render = function(){with(this){return _h('nav',{staticAttrs:{"am-nota":"list"},on:{"!click":function($event){edit( $event )},"keyup":function($event){keyup( $event )},"focusout":function($event){blur( $event )}}},[(results)&&_l((results),function(item){return [_h('a',{directives:[{name:"href",value:({ name: "item", params: { id: item.id } }),expression:"{ name: \"item\", params: { id: item.id } }"}],attrs:{"data-type":item.type},staticAttrs:{"am-nota":"item"}},[_h('span',{staticClass:"material-icons"},["\n        "+_s(item.type === 'folder' ? 'folder' : 'note')+"\n      "])," ",_h('input',{directives:[{name:"model",value:(item.title),expression:"item.title"}],props:{"value":_s(item.title)},attrs:{"data-id":item.id,"id":item.id},staticAttrs:{"readonly":""},on:{"input":function($event){if($event.target.composing)return;item.title=$event.target.value}}})])]})])}}
__vue__options__.staticRenderFns = []
if (module.hot) {(function () {  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), true)
  if (!hotAPI.compatible) return
  module.hot.accept()
  module.hot.dispose(__vueify_style_dispose__)
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-3", __vue__options__)
  } else {
    hotAPI.reload("data-v-3", __vue__options__)
  }
})()}

},{"../bus":105,"../util":113,"vue":100,"vue-hot-reload-api":99,"vueify/lib/insert-css":101}],110:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.href = undefined;

var _vue = require('vue');

var _vue2 = _interopRequireDefault(_vue);

var _router = require('./router');

var _router2 = _interopRequireDefault(_router);

var _bus = require('./bus');

var _bus2 = _interopRequireDefault(_bus);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_vue2.default.use(_router2.default);

exports.default = (0, _router2.default)({
  routes: [{ name: 'item', path: '/:id' }],

  bus: _bus2.default
});
exports.href = _router.href;

},{"./bus":105,"./router":112,"vue":100}],111:[function(require,module,exports){
'use strict';

require('setimmediate');

var _history = require('./history');

var _history2 = _interopRequireDefault(_history);

var _vue = require('vue');

var _vue2 = _interopRequireDefault(_vue);

var _notaApp = require('./components/nota-app.vue');

var _notaApp2 = _interopRequireDefault(_notaApp);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var nota = window.nota = _history2.default;

nota.app = new _vue2.default({
  el: 'main',

  render: function render(h) {
    return h(_notaApp2.default);
  }
});

nota.start();

},{"./components/nota-app.vue":106,"./history":110,"setimmediate":97,"vue":100}],112:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getIterator2 = require('babel-runtime/core-js/get-iterator');

var _getIterator3 = _interopRequireDefault(_getIterator2);

var _typeof2 = require('babel-runtime/helpers/typeof');

var _typeof3 = _interopRequireDefault(_typeof2);

exports.default = Router;
exports.href = href;

var _history = require('history');

var _pathToRegexp = require('path-to-regexp');

var _pathToRegexp2 = _interopRequireDefault(_pathToRegexp);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var history = void 0;
var toPath = {};

function Router() {
  var _ref = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

  var _ref$basename = _ref.basename;
  var basename = _ref$basename === undefined ? '/' : _ref$basename;
  var _ref$routes = _ref.routes;
  var routes = _ref$routes === undefined ? [] : _ref$routes;
  var bus = _ref.bus;

  if (!Router.installed) {
    throw new Error('Please install the Router with Vue.use() before creating an instance.');
  }

  if ((typeof bus === 'undefined' ? 'undefined' : (0, _typeof3.default)(bus)) !== 'object') {
    throw new Error('Please provide an event bus as the `bus` option');
  }

  history = (0, _history.useBasename)(_history.createHistory)({
    basename: basename
  });

  history.listen(function (location) {
    bus.$emit('historychange', matchRoutes(location, routes));
  });

  // match initial route
  var initial = matchRoutes(history.getCurrentLocation(), routes);
  history.start = function (_) {
    return bus.$emit('historychange', initial);
  };

  return history;
}

function href(_ref2) {
  var name = _ref2.name;
  var params = _ref2.params;

  return toPath[name](params);
}

Router.install = function install(Vue) {
  function click(event) {
    event.preventDefault();

    history.push({
      pathname: normalisePathname(event.currentTarget.pathname)
    });
  }

  function setHref(el, route) {
    el.setAttribute('href', href(route));
  }

  Vue.directive('href', {
    bind: function bind(el, _ref3) {
      var value = _ref3.value;

      setHref(el, value);
      el.addEventListener('click', click);
    },
    unbind: function unbind(el) {
      el.removeEventListener('click', click);
    },
    update: function update(el, _ref4) {
      var value = _ref4.value;

      setHref(el, value);
    }
  });
};

function matchRoutes(_ref5, routes) {
  var state = _ref5.state;
  var pathname = _ref5.pathname;

  var matched = {
    name: null,
    params: {},
    state: state
  };

  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = (0, _getIterator3.default)(routes), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var _step$value = _step.value;
      var name = _step$value.name;
      var path = _step$value.path;

      var keys = [];
      var match = (0, _pathToRegexp2.default)(path, keys).exec('/' + pathname);

      toPath[name] = toPath[name] || _pathToRegexp2.default.compile(path);
      if (!match || !match.every(Boolean)) continue;
      matched.name = name;

      var index = 1;
      var _iteratorNormalCompletion2 = true;
      var _didIteratorError2 = false;
      var _iteratorError2 = undefined;

      try {
        for (var _iterator2 = (0, _getIterator3.default)(keys), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
          var key = _step2.value;

          matched.params[key.name] = decodeURIComponent(match[index++]);
        }
      } catch (err) {
        _didIteratorError2 = true;
        _iteratorError2 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion2 && _iterator2.return) {
            _iterator2.return();
          }
        } finally {
          if (_didIteratorError2) {
            throw _iteratorError2;
          }
        }
      }
    }
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator.return) {
        _iterator.return();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }

  return matched;
}

function normalisePathname(pathname) {
  return pathname[0] === '/' ? pathname : '/' + pathname;
}

},{"babel-runtime/core-js/get-iterator":1,"babel-runtime/helpers/typeof":4,"history":88,"path-to-regexp":94}],113:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.key = key;
exports.ID = ID;
exports.slugify = slugify;
exports.autolink = autolink;
// eslint-disable-next-line max-len
var keymap = ['', '', '', 'CANCEL', '', '', 'HELP', '', 'BACK_SPACE', 'TAB', '', '', 'CLEAR', 'ENTER', 'RETURN', '', 'SHIFT', 'CONTROL', 'ALT', 'PAUSE', 'CAPS_LOCK', 'KANA', 'EISU', 'JUNJA', 'FINAL', 'HANJA', '', 'ESCAPE', 'CONVERT', 'NONCONVERT', 'ACCEPT', 'MODECHANGE', 'SPACE', 'PAGE_UP', 'PAGE_DOWN', 'END', 'HOME', 'LEFT', 'UP', 'RIGHT', 'DOWN', 'SELECT', 'PRINT', 'EXECUTE', 'PRINTSCREEN', 'INSERT', 'DELETE', '', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'COLON', 'SEMICOLON', 'LESS_THAN', 'EQUALS', 'GREATER_THAN', 'QUESTION_MARK', 'AT', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', 'WIN', '', 'CONTEXT_MENU', '', 'SLEEP', 'NUMPAD0', 'NUMPAD1', 'NUMPAD2', 'NUMPAD3', 'NUMPAD4', 'NUMPAD5', 'NUMPAD6', 'NUMPAD7', 'NUMPAD8', 'NUMPAD9', 'MULTIPLY', 'ADD', 'SEPARATOR', 'SUBTRACT', 'DECIMAL', 'DIVIDE', 'F1', 'F2', 'F3', 'F4', 'F5', 'F6', 'F7', 'F8', 'F9', 'F10', 'F11', 'F12', 'F13', 'F14', 'F15', 'F16', 'F17', 'F18', 'F19', 'F20', 'F21', 'F22', 'F23', 'F24', '', '', '', '', '', '', '', '', 'NUM_LOCK', 'SCROLL_LOCK', 'WIN_OEM_FJ_JISHO', 'WIN_OEM_FJ_MASSHOU', 'WIN_OEM_FJ_TOUROKU', 'WIN_OEM_FJ_LOYA', 'WIN_OEM_FJ_ROYA', '', '', '', '', '', '', '', '', '', 'CIRCUMFLEX', 'EXCLAMATION', 'DOUBLE_QUOTE', 'HASH', 'DOLLAR', 'PERCENT', 'AMPERSAND', 'UNDERSCORE', 'OPEN_PAREN', 'CLOSE_PAREN', 'ASTERISK', 'PLUS', 'PIPE', 'HYPHEN_MINUS', 'OPEN_CURLY_BRACKET', 'CLOSE_CURLY_BRACKET', 'TILDE', '', '', '', '', 'VOLUME_MUTE', 'VOLUME_DOWN', 'VOLUME_UP', '', '', 'SEMICOLON', 'EQUALS', 'COMMA', 'MINUS', 'PERIOD', 'SLASH', 'BACK_QUOTE', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', 'OPEN_BRACKET', 'BACK_SLASH', 'CLOSE_BRACKET', 'QUOTE', '', 'META', 'ALTGR', '', 'WIN_ICO_HELP', 'WIN_ICO_00', '', 'WIN_ICO_CLEAR', '', '', 'WIN_OEM_RESET', 'WIN_OEM_JUMP', 'WIN_OEM_PA1', 'WIN_OEM_PA2', 'WIN_OEM_PA3', 'WIN_OEM_WSCTRL', 'WIN_OEM_CUSEL', 'WIN_OEM_ATTN', 'WIN_OEM_FINISH', 'WIN_OEM_COPY', 'WIN_OEM_AUTO', 'WIN_OEM_ENLW', 'WIN_OEM_BACKTAB', 'ATTN', 'CRSEL', 'EXSEL', 'EREOF', 'PLAY', 'ZOOM', '', 'PA1', 'WIN_OEM_CLEAR', ''];

var lower = function lower(str) {
  return (str || '').toLowerCase();
};

function key(_ref) {
  var keyCode = _ref.keyCode;

  return lower(keymap[keyCode]);
}

var $chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWYZ_-~@!+'.split('');

function ID() {
  var $length = 10;
  var $res = '';

  var entropy = $chars.length;

  while ($res.length < $length) {
    $res += $chars[Math.floor(Math.random() * entropy)];
  }

  return $res;
}

function slugify(title) {
  // eslint-disable-next-line prefer-template
  return (title + '').toLowerCase().replace(/\s+/g, '-').replace(/[!"'£$%\^&*()_+=\/\\|`¬/><.,{}[\]:;]/g, '').replace(/\-\-+/g, '-').replace(/^-+/, '').replace(/-+$/, '');
}

// eslint-disable-next-line max-len
var urlRx = /(^|[\s\n]|&nbsp;|<[A-Za-z]*\/?>)((?:https?|ftp):\/\/[\-A-Z0-9+\u0026\u2019@#\/%?=()~_|!:,.;]*[\-A-Z0-9+\u0026@#\/%=~()_|])/gi;

// originally bryanwoods/autolink-js
function autolink(string) {
  return string.replace(urlRx, '$1<a href="$2">$2</a>');

  /* callback = option["callback"];
  linkAttributes = ((function() {
    var results;
    results = [];
    for (k in option) {
      v = option[k];
      if (k !== 'callback') {
        results.push(" " + k + "='" + v + "'");
      }
    }
    return results;
  })()).join('');
  return this.replace(pattern, function(match, space, url) {
    var link;
    link = (typeof callback === "function" ? callback(url) : void 0) || ("<a href='" + url + "'" + linkAttributes + ">" + url + "</a>");
    return "" + space + link;
  });*/
}

},{}]},{},[111])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy93YXRjaGlmeS9ub2RlX21vZHVsZXMvYnJvd3Nlci1wYWNrL19wcmVsdWRlLmpzIiwibm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvY29yZS1qcy9nZXQtaXRlcmF0b3IuanMiLCJub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9jb3JlLWpzL3N5bWJvbC5qcyIsIm5vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL2NvcmUtanMvc3ltYm9sL2l0ZXJhdG9yLmpzIiwibm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvaGVscGVycy90eXBlb2YuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L2ZuL2dldC1pdGVyYXRvci5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvZm4vc3ltYm9sL2luZGV4LmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9mbi9zeW1ib2wvaXRlcmF0b3IuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2EtZnVuY3Rpb24uanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2FkZC10by11bnNjb3BhYmxlcy5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fYW4tb2JqZWN0LmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19hcnJheS1pbmNsdWRlcy5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fY2xhc3NvZi5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fY29mLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19jb3JlLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19jdHguanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2RlZmluZWQuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2Rlc2NyaXB0b3JzLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19kb20tY3JlYXRlLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19lbnVtLWJ1Zy1rZXlzLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19lbnVtLWtleXMuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2V4cG9ydC5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fZmFpbHMuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2dsb2JhbC5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faGFzLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19oaWRlLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19odG1sLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pZTgtZG9tLWRlZmluZS5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faW9iamVjdC5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faXMtYXJyYXkuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2lzLW9iamVjdC5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faXRlci1jcmVhdGUuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2l0ZXItZGVmaW5lLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pdGVyLXN0ZXAuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2l0ZXJhdG9ycy5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fa2V5b2YuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2xpYnJhcnkuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX21ldGEuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1jcmVhdGUuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1kcC5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWRwcy5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWdvcGQuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1nb3BuLWV4dC5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWdvcG4uanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1nb3BzLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3QtZ3BvLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3Qta2V5cy1pbnRlcm5hbC5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWtleXMuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1waWUuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3Byb3BlcnR5LWRlc2MuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3JlZGVmaW5lLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19zZXQtdG8tc3RyaW5nLXRhZy5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fc2hhcmVkLWtleS5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fc2hhcmVkLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19zdHJpbmctYXQuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3RvLWluZGV4LmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL190by1pbnRlZ2VyLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL190by1pb2JqZWN0LmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL190by1sZW5ndGguanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3RvLW9iamVjdC5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fdG8tcHJpbWl0aXZlLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL191aWQuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3drcy1kZWZpbmUuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3drcy1leHQuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3drcy5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9jb3JlLmdldC1pdGVyYXRvci1tZXRob2QuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvY29yZS5nZXQtaXRlcmF0b3IuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM2LmFycmF5Lml0ZXJhdG9yLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNi5vYmplY3QudG8tc3RyaW5nLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNi5zdHJpbmcuaXRlcmF0b3IuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM2LnN5bWJvbC5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczcuc3ltYm9sLmFzeW5jLWl0ZXJhdG9yLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNy5zeW1ib2wub2JzZXJ2YWJsZS5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy93ZWIuZG9tLml0ZXJhYmxlLmpzIiwibm9kZV9tb2R1bGVzL2hpc3RvcnkvbGliL0FjdGlvbnMuanMiLCJub2RlX21vZHVsZXMvaGlzdG9yeS9saWIvQXN5bmNVdGlscy5qcyIsIm5vZGVfbW9kdWxlcy9oaXN0b3J5L2xpYi9Ccm93c2VyUHJvdG9jb2wuanMiLCJub2RlX21vZHVsZXMvaGlzdG9yeS9saWIvRE9NU3RhdGVTdG9yYWdlLmpzIiwibm9kZV9tb2R1bGVzL2hpc3RvcnkvbGliL0RPTVV0aWxzLmpzIiwibm9kZV9tb2R1bGVzL2hpc3RvcnkvbGliL0V4ZWN1dGlvbkVudmlyb25tZW50LmpzIiwibm9kZV9tb2R1bGVzL2hpc3RvcnkvbGliL0hhc2hQcm90b2NvbC5qcyIsIm5vZGVfbW9kdWxlcy9oaXN0b3J5L2xpYi9Mb2NhdGlvblV0aWxzLmpzIiwibm9kZV9tb2R1bGVzL2hpc3RvcnkvbGliL1BhdGhVdGlscy5qcyIsIm5vZGVfbW9kdWxlcy9oaXN0b3J5L2xpYi9SZWZyZXNoUHJvdG9jb2wuanMiLCJub2RlX21vZHVsZXMvaGlzdG9yeS9saWIvY3JlYXRlQnJvd3Nlckhpc3RvcnkuanMiLCJub2RlX21vZHVsZXMvaGlzdG9yeS9saWIvY3JlYXRlSGFzaEhpc3RvcnkuanMiLCJub2RlX21vZHVsZXMvaGlzdG9yeS9saWIvY3JlYXRlSGlzdG9yeS5qcyIsIm5vZGVfbW9kdWxlcy9oaXN0b3J5L2xpYi9jcmVhdGVNZW1vcnlIaXN0b3J5LmpzIiwibm9kZV9tb2R1bGVzL2hpc3RvcnkvbGliL2luZGV4LmpzIiwibm9kZV9tb2R1bGVzL2hpc3RvcnkvbGliL3J1blRyYW5zaXRpb25Ib29rLmpzIiwibm9kZV9tb2R1bGVzL2hpc3RvcnkvbGliL3VzZUJhc2VuYW1lLmpzIiwibm9kZV9tb2R1bGVzL2hpc3RvcnkvbGliL3VzZUJlZm9yZVVubG9hZC5qcyIsIm5vZGVfbW9kdWxlcy9oaXN0b3J5L2xpYi91c2VRdWVyaWVzLmpzIiwibm9kZV9tb2R1bGVzL2ludmFyaWFudC9icm93c2VyLmpzIiwibm9kZV9tb2R1bGVzL3BhdGgtdG8tcmVnZXhwL2luZGV4LmpzIiwibm9kZV9tb2R1bGVzL3BhdGgtdG8tcmVnZXhwL25vZGVfbW9kdWxlcy9pc2FycmF5L2luZGV4LmpzIiwibm9kZV9tb2R1bGVzL3F1ZXJ5LXN0cmluZy9pbmRleC5qcyIsIm5vZGVfbW9kdWxlcy9zZXRpbW1lZGlhdGUvc2V0SW1tZWRpYXRlLmpzIiwibm9kZV9tb2R1bGVzL3N0cmljdC11cmktZW5jb2RlL2luZGV4LmpzIiwibm9kZV9tb2R1bGVzL3Z1ZS1ob3QtcmVsb2FkLWFwaS9pbmRleC5qcyIsIm5vZGVfbW9kdWxlcy92dWUvZGlzdC92dWUuY29tbW9uLmpzIiwibm9kZV9tb2R1bGVzL3Z1ZWlmeS9saWIvaW5zZXJ0LWNzcy5qcyIsIm5vZGVfbW9kdWxlcy93YXJuaW5nL2Jyb3dzZXIuanMiLCJub2RlX21vZHVsZXMvd2F0Y2hpZnkvbm9kZV9tb2R1bGVzL3Byb2Nlc3MvYnJvd3Nlci5qcyIsIm5vZGVfbW9kdWxlcy93eXNpd3lnLmpzL3NyYy93eXNpd3lnLmpzIiwic3JjL2J1cy5qcyIsInNyYy9jb21wb25lbnRzL25vdGEtYXBwLnZ1ZT8xZGEzNzViMSIsInNyYy9jb21wb25lbnRzL25vdGEtZWRpdGFibGUudnVlPzYwMzg2Zjk2Iiwic3JjL2NvbXBvbmVudHMvbm90YS1lZGl0b3IudnVlPzU1NjBkMDFhIiwic3JjL2NvbXBvbmVudHMvbm90YS1saXN0LnZ1ZT83NzczMWJlMiIsInNyYy9oaXN0b3J5LmpzIiwic3JjL21haW4uanMiLCJzcmMvcm91dGVyLmpzIiwic3JjL3V0aWwuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUNBQTs7QUNBQTs7QUNBQTs7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDcEJBO0FBQ0E7QUFDQTs7QUNGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ0pBO0FBQ0E7QUFDQTs7QUNGQTtBQUNBO0FBQ0E7QUFDQTs7QUNIQTs7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ0pBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNwQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN0QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNKQTtBQUNBOztBQ0RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDbkJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDSkE7QUFDQTtBQUNBO0FBQ0E7O0FDSEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDTkE7QUFDQTtBQUNBO0FBQ0E7O0FDSEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzVEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNOQTtBQUNBO0FBQ0E7QUFDQTs7QUNIQTtBQUNBO0FBQ0E7QUFDQTs7QUNIQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1BBOztBQ0FBO0FBQ0E7QUFDQTs7QUNGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ0pBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDSkE7QUFDQTtBQUNBOztBQ0ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1pBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3JFQTtBQUNBO0FBQ0E7O0FDRkE7O0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDVEE7O0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNwREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDdkNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1pBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDbkJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ05BOztBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1pBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDaEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ05BOztBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDUEE7O0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDTkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNKQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDTEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNoQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDTkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ0xBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNMQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDTEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNKQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDWEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNKQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDUkE7O0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNWQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1BBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ05BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2pDQTs7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2hCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMxT0E7O0FDQUE7O0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDWkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3ZCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM1REE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FDckZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQ2hGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNqQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUNMQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7QUN2SUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7OztBQ25GQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FDMUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FDdENBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7O0FDOUZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUNoSEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUNuTEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQzNJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUNwREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUN4QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUM5R0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQy9FQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQzFIQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQ25EQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMxYUE7QUFDQTtBQUNBO0FBQ0E7O0FDSEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQzFGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FDL0tBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ05BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQ2xJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FDenlJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQ3ZCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQzVEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDdkhBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7QUMxNENBOzs7Ozs7a0JBQ2UsbUI7Ozs7Ozs7Ozs7QUNrQmY7Ozs7QUFDQTs7OztBQUNBOztBQUVBOzs7O0FBQ0E7Ozs7Ozs7QUFHQTtBQUNBOztBQUVBO0FBQUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQU1BO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUxBO0FBT0E7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFMQTtBQU9BO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTEE7QUE1Q0E7QUFBQTs7QUFxREE7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQUE7O0FBQ0E7O0FBRUE7QUFBQTtBQUFBO0FBQ0E7O0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTs7QUFNQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFHQTs7QUFFQTtBQUNBO0FBN0JBO0FBN0RBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDckJBOzs7O0FBQ0E7O0FBQ0E7Ozs7OztBQUVBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBREE7QUFHQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQW5CQTtBQVZBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0hBOzs7O0FBQ0E7Ozs7Ozs7QUFHQTtBQUNBO0FBQ0E7QUFIQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1NBOzs7O0FBQ0E7Ozs7QUFFQTtBQUFBOztBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFBQTs7QUFPQTtBQUNBO0FBQ0E7QUFDQTtBQUhBOztBQU1BO0FBQUE7O0FBQ0E7O0FBRUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQURBO0FBS0E7OztBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBRUE7QUFBQTtBQUFBO0FBQUE7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFOQTtBQUFBO0FBQUE7OztBQVNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBRUE7QUFBQTs7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQUE7O0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFBQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQUE7O0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFBQTs7O0FBR0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQXhGQTtBQTNCQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM1QkE7Ozs7QUFDQTs7OztBQUdBOzs7Ozs7QUFGQSxjQUFJLEdBQUo7O2tCQUllLHNCQUFPO0FBQ3BCLFVBQVEsQ0FDTixFQUFFLE1BQU0sTUFBUixFQUFnQixNQUFNLE1BQXRCLEVBRE0sQ0FEWTs7QUFLcEI7QUFMb0IsQ0FBUCxDO1FBUU4sSTs7Ozs7QUNkVDs7QUFFQTs7OztBQUNBOzs7O0FBRUE7Ozs7OztBQUVBLElBQU0sT0FBTyxPQUFPLElBQVAsb0JBQWI7O0FBRUEsS0FBSyxHQUFMLEdBQVcsa0JBQVE7QUFDakIsTUFBSSxNQURhOztBQUdqQixVQUFRO0FBQUEsV0FBSyxvQkFBTDtBQUFBO0FBSFMsQ0FBUixDQUFYOztBQU1BLEtBQUssS0FBTDs7Ozs7Ozs7Ozs7Ozs7Ozs7a0JDVHdCLE07UUFnQ1IsSSxHQUFBLEk7O0FBdENoQjs7QUFDQTs7Ozs7O0FBRUEsSUFBSSxnQkFBSjtBQUNBLElBQU0sU0FBUyxFQUFmOztBQUVlLFNBQVMsTUFBVCxHQUlQO0FBQUEsbUVBQUosRUFBSTs7QUFBQSwyQkFITixRQUdNO0FBQUEsTUFITixRQUdNLGlDQUhLLEdBR0w7QUFBQSx5QkFGTixNQUVNO0FBQUEsTUFGTixNQUVNLCtCQUZHLEVBRUg7QUFBQSxNQUROLEdBQ00sUUFETixHQUNNOztBQUNOLE1BQUssQ0FBRSxPQUFPLFNBQWQsRUFBMEI7QUFDeEIsVUFBTSxJQUFJLEtBQUosQ0FDSix1RUFESSxDQUFOO0FBR0Q7O0FBRUQsTUFBSyxRQUFPLEdBQVAsdURBQU8sR0FBUCxPQUFlLFFBQXBCLEVBQStCO0FBQzdCLFVBQU0sSUFBSSxLQUFKLENBQ0osaURBREksQ0FBTjtBQUdEOztBQUVELFlBQVUsa0RBQTZCO0FBQ3JDO0FBRHFDLEdBQTdCLENBQVY7O0FBSUEsVUFBUSxNQUFSLENBQWdCLG9CQUFZO0FBQzFCLFFBQUksS0FBSixDQUFXLGVBQVgsRUFBNEIsWUFBYSxRQUFiLEVBQXVCLE1BQXZCLENBQTVCO0FBQ0QsR0FGRDs7O0FBS0EsTUFBTSxVQUFVLFlBQWEsUUFBUSxrQkFBUixFQUFiLEVBQTJDLE1BQTNDLENBQWhCO0FBQ0EsVUFBUSxLQUFSLEdBQWdCO0FBQUEsV0FBSyxJQUFJLEtBQUosQ0FBVyxlQUFYLEVBQTRCLE9BQTVCLENBQUw7QUFBQSxHQUFoQjs7QUFFQSxTQUFPLE9BQVA7QUFDRDs7QUFFTSxTQUFTLElBQVQsUUFBZ0M7QUFBQSxNQUFoQixJQUFnQixTQUFoQixJQUFnQjtBQUFBLE1BQVYsTUFBVSxTQUFWLE1BQVU7O0FBQ3JDLFNBQU8sT0FBTyxJQUFQLEVBQWEsTUFBYixDQUFQO0FBQ0Q7O0FBRUQsT0FBTyxPQUFQLEdBQWlCLFNBQVMsT0FBVCxDQUFrQixHQUFsQixFQUF3QjtBQUN2QyxXQUFTLEtBQVQsQ0FBZ0IsS0FBaEIsRUFBd0I7QUFDdEIsVUFBTSxjQUFOOztBQUVBLFlBQVEsSUFBUixDQUFhO0FBQ1gsZ0JBQVUsa0JBQW1CLE1BQU0sYUFBTixDQUFvQixRQUF2QztBQURDLEtBQWI7QUFHRDs7QUFFRCxXQUFTLE9BQVQsQ0FBa0IsRUFBbEIsRUFBc0IsS0FBdEIsRUFBOEI7QUFDNUIsT0FBRyxZQUFILENBQWlCLE1BQWpCLEVBQXlCLEtBQUssS0FBTCxDQUF6QjtBQUNEOztBQUVELE1BQUksU0FBSixDQUFlLE1BQWYsRUFBdUI7QUFDckIsUUFEcUIsZ0JBQ2YsRUFEZSxTQUNDO0FBQUEsVUFBVixLQUFVLFNBQVYsS0FBVTs7QUFDcEIsY0FBUyxFQUFULEVBQWEsS0FBYjtBQUNBLFNBQUcsZ0JBQUgsQ0FBcUIsT0FBckIsRUFBOEIsS0FBOUI7QUFDRCxLQUpvQjtBQU1yQixVQU5xQixrQkFNYixFQU5hLEVBTVI7QUFDWCxTQUFHLG1CQUFILENBQXdCLE9BQXhCLEVBQWlDLEtBQWpDO0FBQ0QsS0FSb0I7QUFVckIsVUFWcUIsa0JBVWIsRUFWYSxTQVVHO0FBQUEsVUFBVixLQUFVLFNBQVYsS0FBVTs7QUFDdEIsY0FBUyxFQUFULEVBQWEsS0FBYjtBQUNEO0FBWm9CLEdBQXZCO0FBY0QsQ0EzQkQ7O0FBNkJBLFNBQVMsV0FBVCxRQUEyQyxNQUEzQyxFQUFvRDtBQUFBLE1BQTVCLEtBQTRCLFNBQTVCLEtBQTRCO0FBQUEsTUFBckIsUUFBcUIsU0FBckIsUUFBcUI7O0FBQ2xELE1BQU0sVUFBVTtBQUNkLFVBQU0sSUFEUTtBQUVkLFlBQVEsRUFGTTtBQUdkO0FBSGMsR0FBaEI7O0FBRGtEO0FBQUE7QUFBQTs7QUFBQTtBQU9sRCxvREFBOEIsTUFBOUIsNEdBQXVDO0FBQUE7QUFBQSxVQUF6QixJQUF5QixlQUF6QixJQUF5QjtBQUFBLFVBQW5CLElBQW1CLGVBQW5CLElBQW1COztBQUNyQyxVQUFNLE9BQU8sRUFBYjtBQUNBLFVBQU0sUUFBUSw0QkFBVSxJQUFWLEVBQWdCLElBQWhCLEVBQXVCLElBQXZCLENBQTZCLE1BQU0sUUFBbkMsQ0FBZDs7QUFFQSxhQUFPLElBQVAsSUFBZSxPQUFPLElBQVAsS0FBZ0IsdUJBQVMsT0FBVCxDQUFrQixJQUFsQixDQUEvQjtBQUNBLFVBQU0sQ0FBQyxLQUFGLElBQWEsQ0FBQyxNQUFNLEtBQU4sQ0FBWSxPQUFaLENBQW5CLEVBQTJDO0FBQzNDLGNBQVEsSUFBUixHQUFlLElBQWY7O0FBRUEsVUFBSSxRQUFRLENBQVo7QUFScUM7QUFBQTtBQUFBOztBQUFBO0FBU3JDLHlEQUFtQixJQUFuQixpSEFBMEI7QUFBQSxjQUFkLEdBQWM7O0FBQ3hCLGtCQUFRLE1BQVIsQ0FBZSxJQUFJLElBQW5CLElBQTJCLG1CQUFvQixNQUFNLE9BQU4sQ0FBcEIsQ0FBM0I7QUFDRDtBQVhvQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBWXRDO0FBbkJpRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOztBQXFCbEQsU0FBTyxPQUFQO0FBQ0Q7O0FBRUQsU0FBUyxpQkFBVCxDQUE0QixRQUE1QixFQUF1QztBQUNyQyxTQUFPLFNBQVMsQ0FBVCxNQUFnQixHQUFoQixHQUFzQixRQUF0QixHQUFpQyxNQUFNLFFBQTlDO0FBQ0Q7Ozs7Ozs7O1FDNUZlLEcsR0FBQSxHO1FBTUEsRSxHQUFBLEU7UUFhQSxPLEdBQUEsTztRQWVBLFEsR0FBQSxROztBQXRDaEIsSUFBTSxTQUFTLENBQUUsRUFBRixFQUFNLEVBQU4sRUFBVSxFQUFWLEVBQWMsUUFBZCxFQUF3QixFQUF4QixFQUE0QixFQUE1QixFQUFnQyxNQUFoQyxFQUF3QyxFQUF4QyxFQUE0QyxZQUE1QyxFQUEwRCxLQUExRCxFQUFpRSxFQUFqRSxFQUFxRSxFQUFyRSxFQUF5RSxPQUF6RSxFQUFrRixPQUFsRixFQUEyRixRQUEzRixFQUFxRyxFQUFyRyxFQUF5RyxPQUF6RyxFQUFrSCxTQUFsSCxFQUE2SCxLQUE3SCxFQUFvSSxPQUFwSSxFQUE2SSxXQUE3SSxFQUEwSixNQUExSixFQUFrSyxNQUFsSyxFQUEwSyxPQUExSyxFQUFtTCxPQUFuTCxFQUE0TCxPQUE1TCxFQUFxTSxFQUFyTSxFQUF5TSxRQUF6TSxFQUFtTixTQUFuTixFQUE4TixZQUE5TixFQUE0TyxRQUE1TyxFQUFzUCxZQUF0UCxFQUFvUSxPQUFwUSxFQUE2USxTQUE3USxFQUF3UixXQUF4UixFQUFxUyxLQUFyUyxFQUE0UyxNQUE1UyxFQUFvVCxNQUFwVCxFQUE0VCxJQUE1VCxFQUFrVSxPQUFsVSxFQUEyVSxNQUEzVSxFQUFtVixRQUFuVixFQUE2VixPQUE3VixFQUFzVyxTQUF0VyxFQUFpWCxhQUFqWCxFQUFnWSxRQUFoWSxFQUEwWSxRQUExWSxFQUFvWixFQUFwWixFQUF3WixHQUF4WixFQUE2WixHQUE3WixFQUFrYSxHQUFsYSxFQUF1YSxHQUF2YSxFQUE0YSxHQUE1YSxFQUFpYixHQUFqYixFQUFzYixHQUF0YixFQUEyYixHQUEzYixFQUFnYyxHQUFoYyxFQUFxYyxHQUFyYyxFQUEwYyxPQUExYyxFQUFtZCxXQUFuZCxFQUFnZSxXQUFoZSxFQUE2ZSxRQUE3ZSxFQUF1ZixjQUF2ZixFQUF1Z0IsZUFBdmdCLEVBQXdoQixJQUF4aEIsRUFBOGhCLEdBQTloQixFQUFtaUIsR0FBbmlCLEVBQXdpQixHQUF4aUIsRUFBNmlCLEdBQTdpQixFQUFrakIsR0FBbGpCLEVBQXVqQixHQUF2akIsRUFBNGpCLEdBQTVqQixFQUFpa0IsR0FBamtCLEVBQXNrQixHQUF0a0IsRUFBMmtCLEdBQTNrQixFQUFnbEIsR0FBaGxCLEVBQXFsQixHQUFybEIsRUFBMGxCLEdBQTFsQixFQUErbEIsR0FBL2xCLEVBQW9tQixHQUFwbUIsRUFBeW1CLEdBQXptQixFQUE4bUIsR0FBOW1CLEVBQW1uQixHQUFubkIsRUFBd25CLEdBQXhuQixFQUE2bkIsR0FBN25CLEVBQWtvQixHQUFsb0IsRUFBdW9CLEdBQXZvQixFQUE0b0IsR0FBNW9CLEVBQWlwQixHQUFqcEIsRUFBc3BCLEdBQXRwQixFQUEycEIsR0FBM3BCLEVBQWdxQixLQUFocUIsRUFBdXFCLEVBQXZxQixFQUEycUIsY0FBM3FCLEVBQTJyQixFQUEzckIsRUFBK3JCLE9BQS9yQixFQUF3c0IsU0FBeHNCLEVBQW10QixTQUFudEIsRUFBOHRCLFNBQTl0QixFQUF5dUIsU0FBenVCLEVBQW92QixTQUFwdkIsRUFBK3ZCLFNBQS92QixFQUEwd0IsU0FBMXdCLEVBQXF4QixTQUFyeEIsRUFBZ3lCLFNBQWh5QixFQUEyeUIsU0FBM3lCLEVBQXN6QixVQUF0ekIsRUFBazBCLEtBQWwwQixFQUF5MEIsV0FBejBCLEVBQXMxQixVQUF0MUIsRUFBazJCLFNBQWwyQixFQUE2MkIsUUFBNzJCLEVBQXUzQixJQUF2M0IsRUFBNjNCLElBQTczQixFQUFtNEIsSUFBbjRCLEVBQXk0QixJQUF6NEIsRUFBKzRCLElBQS80QixFQUFxNUIsSUFBcjVCLEVBQTI1QixJQUEzNUIsRUFBaTZCLElBQWo2QixFQUF1NkIsSUFBdjZCLEVBQTY2QixLQUE3NkIsRUFBbzdCLEtBQXA3QixFQUEyN0IsS0FBMzdCLEVBQWs4QixLQUFsOEIsRUFBeThCLEtBQXo4QixFQUFnOUIsS0FBaDlCLEVBQXU5QixLQUF2OUIsRUFBODlCLEtBQTk5QixFQUFxK0IsS0FBcitCLEVBQTQrQixLQUE1K0IsRUFBbS9CLEtBQW4vQixFQUEwL0IsS0FBMS9CLEVBQWlnQyxLQUFqZ0MsRUFBd2dDLEtBQXhnQyxFQUErZ0MsS0FBL2dDLEVBQXNoQyxFQUF0aEMsRUFBMGhDLEVBQTFoQyxFQUE4aEMsRUFBOWhDLEVBQWtpQyxFQUFsaUMsRUFBc2lDLEVBQXRpQyxFQUEwaUMsRUFBMWlDLEVBQThpQyxFQUE5aUMsRUFBa2pDLEVBQWxqQyxFQUFzakMsVUFBdGpDLEVBQWtrQyxhQUFsa0MsRUFBaWxDLGtCQUFqbEMsRUFBcW1DLG9CQUFybUMsRUFBMm5DLG9CQUEzbkMsRUFBaXBDLGlCQUFqcEMsRUFBb3FDLGlCQUFwcUMsRUFBdXJDLEVBQXZyQyxFQUEyckMsRUFBM3JDLEVBQStyQyxFQUEvckMsRUFBbXNDLEVBQW5zQyxFQUF1c0MsRUFBdnNDLEVBQTJzQyxFQUEzc0MsRUFBK3NDLEVBQS9zQyxFQUFtdEMsRUFBbnRDLEVBQXV0QyxFQUF2dEMsRUFBMnRDLFlBQTN0QyxFQUF5dUMsYUFBenVDLEVBQXd2QyxjQUF4dkMsRUFBd3dDLE1BQXh3QyxFQUFneEMsUUFBaHhDLEVBQTB4QyxTQUExeEMsRUFBcXlDLFdBQXJ5QyxFQUFrekMsWUFBbHpDLEVBQWcwQyxZQUFoMEMsRUFBODBDLGFBQTkwQyxFQUE2MUMsVUFBNzFDLEVBQXkyQyxNQUF6MkMsRUFBaTNDLE1BQWozQyxFQUF5M0MsY0FBejNDLEVBQXk0QyxvQkFBejRDLEVBQSs1QyxxQkFBLzVDLEVBQXM3QyxPQUF0N0MsRUFBKzdDLEVBQS83QyxFQUFtOEMsRUFBbjhDLEVBQXU4QyxFQUF2OEMsRUFBMjhDLEVBQTM4QyxFQUErOEMsYUFBLzhDLEVBQTg5QyxhQUE5OUMsRUFBNitDLFdBQTcrQyxFQUEwL0MsRUFBMS9DLEVBQTgvQyxFQUE5L0MsRUFBa2dELFdBQWxnRCxFQUErZ0QsUUFBL2dELEVBQXloRCxPQUF6aEQsRUFBa2lELE9BQWxpRCxFQUEyaUQsUUFBM2lELEVBQXFqRCxPQUFyakQsRUFBOGpELFlBQTlqRCxFQUE0a0QsRUFBNWtELEVBQWdsRCxFQUFobEQsRUFBb2xELEVBQXBsRCxFQUF3bEQsRUFBeGxELEVBQTRsRCxFQUE1bEQsRUFBZ21ELEVBQWhtRCxFQUFvbUQsRUFBcG1ELEVBQXdtRCxFQUF4bUQsRUFBNG1ELEVBQTVtRCxFQUFnbkQsRUFBaG5ELEVBQW9uRCxFQUFwbkQsRUFBd25ELEVBQXhuRCxFQUE0bkQsRUFBNW5ELEVBQWdvRCxFQUFob0QsRUFBb29ELEVBQXBvRCxFQUF3b0QsRUFBeG9ELEVBQTRvRCxFQUE1b0QsRUFBZ3BELEVBQWhwRCxFQUFvcEQsRUFBcHBELEVBQXdwRCxFQUF4cEQsRUFBNHBELEVBQTVwRCxFQUFncUQsRUFBaHFELEVBQW9xRCxFQUFwcUQsRUFBd3FELEVBQXhxRCxFQUE0cUQsRUFBNXFELEVBQWdyRCxFQUFockQsRUFBb3JELGNBQXByRCxFQUFvc0QsWUFBcHNELEVBQWt0RCxlQUFsdEQsRUFBbXVELE9BQW51RCxFQUE0dUQsRUFBNXVELEVBQWd2RCxNQUFodkQsRUFBd3ZELE9BQXh2RCxFQUFpd0QsRUFBandELEVBQXF3RCxjQUFyd0QsRUFBcXhELFlBQXJ4RCxFQUFteUQsRUFBbnlELEVBQXV5RCxlQUF2eUQsRUFBd3pELEVBQXh6RCxFQUE0ekQsRUFBNXpELEVBQWcwRCxlQUFoMEQsRUFBaTFELGNBQWoxRCxFQUFpMkQsYUFBajJELEVBQWczRCxhQUFoM0QsRUFBKzNELGFBQS8zRCxFQUE4NEQsZ0JBQTk0RCxFQUFnNkQsZUFBaDZELEVBQWk3RCxjQUFqN0QsRUFBaThELGdCQUFqOEQsRUFBbTlELGNBQW45RCxFQUFtK0QsY0FBbitELEVBQW0vRCxjQUFuL0QsRUFBbWdFLGlCQUFuZ0UsRUFBc2hFLE1BQXRoRSxFQUE4aEUsT0FBOWhFLEVBQXVpRSxPQUF2aUUsRUFBZ2pFLE9BQWhqRSxFQUF5akUsTUFBempFLEVBQWlrRSxNQUFqa0UsRUFBeWtFLEVBQXprRSxFQUE2a0UsS0FBN2tFLEVBQW9sRSxlQUFwbEUsRUFBcW1FLEVBQXJtRSxDQUFmOztBQUVBLElBQU0sUUFBUSxTQUFSLEtBQVE7QUFBQSxTQUFPLENBQUUsT0FBTyxFQUFULEVBQWMsV0FBZCxFQUFQO0FBQUEsQ0FBZDs7QUFFTyxTQUFTLEdBQVQsT0FBMEI7QUFBQSxNQUFYLE9BQVcsUUFBWCxPQUFXOztBQUMvQixTQUFPLE1BQU8sT0FBTyxPQUFQLENBQVAsQ0FBUDtBQUNEOztBQUVELElBQU0sU0FBUyw0REFBNEQsS0FBNUQsQ0FBa0UsRUFBbEUsQ0FBZjs7QUFFTyxTQUFTLEVBQVQsR0FBYztBQUNuQixNQUFNLFVBQVUsRUFBaEI7QUFDQSxNQUFJLE9BQU8sRUFBWDs7QUFFQSxNQUFNLFVBQVUsT0FBTyxNQUF2Qjs7QUFFQSxTQUFRLEtBQUssTUFBTCxHQUFjLE9BQXRCLEVBQWdDO0FBQzlCLFlBQVEsT0FBTyxLQUFLLEtBQUwsQ0FBWSxLQUFLLE1BQUwsS0FBZ0IsT0FBNUIsQ0FBUCxDQUFSO0FBQ0Q7O0FBRUQsU0FBTyxJQUFQO0FBQ0Q7O0FBRU0sU0FBUyxPQUFULENBQWtCLEtBQWxCLEVBQTBCOztBQUUvQixTQUFPLENBQUUsUUFBUSxFQUFWLEVBQ0osV0FESSxHQUVKLE9BRkksQ0FFSSxNQUZKLEVBRVksR0FGWixFQUdKLE9BSEksQ0FHSSx1Q0FISixFQUc2QyxFQUg3QyxFQUlKLE9BSkksQ0FJSSxRQUpKLEVBSWMsR0FKZCxFQUtKLE9BTEksQ0FLSSxLQUxKLEVBS1csRUFMWCxFQU1KLE9BTkksQ0FNSSxLQU5KLEVBTVcsRUFOWCxDQUFQO0FBT0Q7OztBQUdELElBQU0sUUFBUSw4SEFBZDs7O0FBR08sU0FBUyxRQUFULENBQW1CLE1BQW5CLEVBQTRCO0FBQ2pDLFNBQU8sT0FBTyxPQUFQLENBQWdCLEtBQWhCLEVBQXVCLHVCQUF2QixDQUFQOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBbUJEIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsIm1vZHVsZS5leHBvcnRzID0geyBcImRlZmF1bHRcIjogcmVxdWlyZShcImNvcmUtanMvbGlicmFyeS9mbi9nZXQtaXRlcmF0b3JcIiksIF9fZXNNb2R1bGU6IHRydWUgfTsiLCJtb2R1bGUuZXhwb3J0cyA9IHsgXCJkZWZhdWx0XCI6IHJlcXVpcmUoXCJjb3JlLWpzL2xpYnJhcnkvZm4vc3ltYm9sXCIpLCBfX2VzTW9kdWxlOiB0cnVlIH07IiwibW9kdWxlLmV4cG9ydHMgPSB7IFwiZGVmYXVsdFwiOiByZXF1aXJlKFwiY29yZS1qcy9saWJyYXJ5L2ZuL3N5bWJvbC9pdGVyYXRvclwiKSwgX19lc01vZHVsZTogdHJ1ZSB9OyIsIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG52YXIgX2l0ZXJhdG9yID0gcmVxdWlyZShcImJhYmVsLXJ1bnRpbWUvY29yZS1qcy9zeW1ib2wvaXRlcmF0b3JcIik7XG5cbnZhciBfaXRlcmF0b3IyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfaXRlcmF0b3IpO1xuXG52YXIgX3N5bWJvbCA9IHJlcXVpcmUoXCJiYWJlbC1ydW50aW1lL2NvcmUtanMvc3ltYm9sXCIpO1xuXG52YXIgX3N5bWJvbDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9zeW1ib2wpO1xuXG52YXIgX3R5cGVvZiA9IHR5cGVvZiBfc3ltYm9sMi5kZWZhdWx0ID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIF9pdGVyYXRvcjIuZGVmYXVsdCA9PT0gXCJzeW1ib2xcIiA/IGZ1bmN0aW9uIChvYmopIHsgcmV0dXJuIHR5cGVvZiBvYmo7IH0gOiBmdW5jdGlvbiAob2JqKSB7IHJldHVybiBvYmogJiYgdHlwZW9mIF9zeW1ib2wyLmRlZmF1bHQgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IF9zeW1ib2wyLmRlZmF1bHQgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajsgfTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZXhwb3J0cy5kZWZhdWx0ID0gdHlwZW9mIF9zeW1ib2wyLmRlZmF1bHQgPT09IFwiZnVuY3Rpb25cIiAmJiBfdHlwZW9mKF9pdGVyYXRvcjIuZGVmYXVsdCkgPT09IFwic3ltYm9sXCIgPyBmdW5jdGlvbiAob2JqKSB7XG4gIHJldHVybiB0eXBlb2Ygb2JqID09PSBcInVuZGVmaW5lZFwiID8gXCJ1bmRlZmluZWRcIiA6IF90eXBlb2Yob2JqKTtcbn0gOiBmdW5jdGlvbiAob2JqKSB7XG4gIHJldHVybiBvYmogJiYgdHlwZW9mIF9zeW1ib2wyLmRlZmF1bHQgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IF9zeW1ib2wyLmRlZmF1bHQgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iaiA9PT0gXCJ1bmRlZmluZWRcIiA/IFwidW5kZWZpbmVkXCIgOiBfdHlwZW9mKG9iaik7XG59OyIsInJlcXVpcmUoJy4uL21vZHVsZXMvd2ViLmRvbS5pdGVyYWJsZScpO1xucmVxdWlyZSgnLi4vbW9kdWxlcy9lczYuc3RyaW5nLml0ZXJhdG9yJyk7XG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4uL21vZHVsZXMvY29yZS5nZXQtaXRlcmF0b3InKTsiLCJyZXF1aXJlKCcuLi8uLi9tb2R1bGVzL2VzNi5zeW1ib2wnKTtcbnJlcXVpcmUoJy4uLy4uL21vZHVsZXMvZXM2Lm9iamVjdC50by1zdHJpbmcnKTtcbnJlcXVpcmUoJy4uLy4uL21vZHVsZXMvZXM3LnN5bWJvbC5hc3luYy1pdGVyYXRvcicpO1xucmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9lczcuc3ltYm9sLm9ic2VydmFibGUnKTtcbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9fY29yZScpLlN5bWJvbDsiLCJyZXF1aXJlKCcuLi8uLi9tb2R1bGVzL2VzNi5zdHJpbmcuaXRlcmF0b3InKTtcbnJlcXVpcmUoJy4uLy4uL21vZHVsZXMvd2ViLmRvbS5pdGVyYWJsZScpO1xubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuLi8uLi9tb2R1bGVzL193a3MtZXh0JykuZignaXRlcmF0b3InKTsiLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0KXtcbiAgaWYodHlwZW9mIGl0ICE9ICdmdW5jdGlvbicpdGhyb3cgVHlwZUVycm9yKGl0ICsgJyBpcyBub3QgYSBmdW5jdGlvbiEnKTtcbiAgcmV0dXJuIGl0O1xufTsiLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKCl7IC8qIGVtcHR5ICovIH07IiwidmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi9faXMtb2JqZWN0Jyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0KXtcbiAgaWYoIWlzT2JqZWN0KGl0KSl0aHJvdyBUeXBlRXJyb3IoaXQgKyAnIGlzIG5vdCBhbiBvYmplY3QhJyk7XG4gIHJldHVybiBpdDtcbn07IiwiLy8gZmFsc2UgLT4gQXJyYXkjaW5kZXhPZlxuLy8gdHJ1ZSAgLT4gQXJyYXkjaW5jbHVkZXNcbnZhciB0b0lPYmplY3QgPSByZXF1aXJlKCcuL190by1pb2JqZWN0JylcbiAgLCB0b0xlbmd0aCAgPSByZXF1aXJlKCcuL190by1sZW5ndGgnKVxuICAsIHRvSW5kZXggICA9IHJlcXVpcmUoJy4vX3RvLWluZGV4Jyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKElTX0lOQ0xVREVTKXtcbiAgcmV0dXJuIGZ1bmN0aW9uKCR0aGlzLCBlbCwgZnJvbUluZGV4KXtcbiAgICB2YXIgTyAgICAgID0gdG9JT2JqZWN0KCR0aGlzKVxuICAgICAgLCBsZW5ndGggPSB0b0xlbmd0aChPLmxlbmd0aClcbiAgICAgICwgaW5kZXggID0gdG9JbmRleChmcm9tSW5kZXgsIGxlbmd0aClcbiAgICAgICwgdmFsdWU7XG4gICAgLy8gQXJyYXkjaW5jbHVkZXMgdXNlcyBTYW1lVmFsdWVaZXJvIGVxdWFsaXR5IGFsZ29yaXRobVxuICAgIGlmKElTX0lOQ0xVREVTICYmIGVsICE9IGVsKXdoaWxlKGxlbmd0aCA+IGluZGV4KXtcbiAgICAgIHZhbHVlID0gT1tpbmRleCsrXTtcbiAgICAgIGlmKHZhbHVlICE9IHZhbHVlKXJldHVybiB0cnVlO1xuICAgIC8vIEFycmF5I3RvSW5kZXggaWdub3JlcyBob2xlcywgQXJyYXkjaW5jbHVkZXMgLSBub3RcbiAgICB9IGVsc2UgZm9yKDtsZW5ndGggPiBpbmRleDsgaW5kZXgrKylpZihJU19JTkNMVURFUyB8fCBpbmRleCBpbiBPKXtcbiAgICAgIGlmKE9baW5kZXhdID09PSBlbClyZXR1cm4gSVNfSU5DTFVERVMgfHwgaW5kZXggfHwgMDtcbiAgICB9IHJldHVybiAhSVNfSU5DTFVERVMgJiYgLTE7XG4gIH07XG59OyIsIi8vIGdldHRpbmcgdGFnIGZyb20gMTkuMS4zLjYgT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZygpXG52YXIgY29mID0gcmVxdWlyZSgnLi9fY29mJylcbiAgLCBUQUcgPSByZXF1aXJlKCcuL193a3MnKSgndG9TdHJpbmdUYWcnKVxuICAvLyBFUzMgd3JvbmcgaGVyZVxuICAsIEFSRyA9IGNvZihmdW5jdGlvbigpeyByZXR1cm4gYXJndW1lbnRzOyB9KCkpID09ICdBcmd1bWVudHMnO1xuXG4vLyBmYWxsYmFjayBmb3IgSUUxMSBTY3JpcHQgQWNjZXNzIERlbmllZCBlcnJvclxudmFyIHRyeUdldCA9IGZ1bmN0aW9uKGl0LCBrZXkpe1xuICB0cnkge1xuICAgIHJldHVybiBpdFtrZXldO1xuICB9IGNhdGNoKGUpeyAvKiBlbXB0eSAqLyB9XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0KXtcbiAgdmFyIE8sIFQsIEI7XG4gIHJldHVybiBpdCA9PT0gdW5kZWZpbmVkID8gJ1VuZGVmaW5lZCcgOiBpdCA9PT0gbnVsbCA/ICdOdWxsJ1xuICAgIC8vIEBAdG9TdHJpbmdUYWcgY2FzZVxuICAgIDogdHlwZW9mIChUID0gdHJ5R2V0KE8gPSBPYmplY3QoaXQpLCBUQUcpKSA9PSAnc3RyaW5nJyA/IFRcbiAgICAvLyBidWlsdGluVGFnIGNhc2VcbiAgICA6IEFSRyA/IGNvZihPKVxuICAgIC8vIEVTMyBhcmd1bWVudHMgZmFsbGJhY2tcbiAgICA6IChCID0gY29mKE8pKSA9PSAnT2JqZWN0JyAmJiB0eXBlb2YgTy5jYWxsZWUgPT0gJ2Z1bmN0aW9uJyA/ICdBcmd1bWVudHMnIDogQjtcbn07IiwidmFyIHRvU3RyaW5nID0ge30udG9TdHJpbmc7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXQpe1xuICByZXR1cm4gdG9TdHJpbmcuY2FsbChpdCkuc2xpY2UoOCwgLTEpO1xufTsiLCJ2YXIgY29yZSA9IG1vZHVsZS5leHBvcnRzID0ge3ZlcnNpb246ICcyLjQuMCd9O1xuaWYodHlwZW9mIF9fZSA9PSAnbnVtYmVyJylfX2UgPSBjb3JlOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXVuZGVmIiwiLy8gb3B0aW9uYWwgLyBzaW1wbGUgY29udGV4dCBiaW5kaW5nXG52YXIgYUZ1bmN0aW9uID0gcmVxdWlyZSgnLi9fYS1mdW5jdGlvbicpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihmbiwgdGhhdCwgbGVuZ3RoKXtcbiAgYUZ1bmN0aW9uKGZuKTtcbiAgaWYodGhhdCA9PT0gdW5kZWZpbmVkKXJldHVybiBmbjtcbiAgc3dpdGNoKGxlbmd0aCl7XG4gICAgY2FzZSAxOiByZXR1cm4gZnVuY3Rpb24oYSl7XG4gICAgICByZXR1cm4gZm4uY2FsbCh0aGF0LCBhKTtcbiAgICB9O1xuICAgIGNhc2UgMjogcmV0dXJuIGZ1bmN0aW9uKGEsIGIpe1xuICAgICAgcmV0dXJuIGZuLmNhbGwodGhhdCwgYSwgYik7XG4gICAgfTtcbiAgICBjYXNlIDM6IHJldHVybiBmdW5jdGlvbihhLCBiLCBjKXtcbiAgICAgIHJldHVybiBmbi5jYWxsKHRoYXQsIGEsIGIsIGMpO1xuICAgIH07XG4gIH1cbiAgcmV0dXJuIGZ1bmN0aW9uKC8qIC4uLmFyZ3MgKi8pe1xuICAgIHJldHVybiBmbi5hcHBseSh0aGF0LCBhcmd1bWVudHMpO1xuICB9O1xufTsiLCIvLyA3LjIuMSBSZXF1aXJlT2JqZWN0Q29lcmNpYmxlKGFyZ3VtZW50KVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdCl7XG4gIGlmKGl0ID09IHVuZGVmaW5lZCl0aHJvdyBUeXBlRXJyb3IoXCJDYW4ndCBjYWxsIG1ldGhvZCBvbiAgXCIgKyBpdCk7XG4gIHJldHVybiBpdDtcbn07IiwiLy8gVGhhbmsncyBJRTggZm9yIGhpcyBmdW5ueSBkZWZpbmVQcm9wZXJ0eVxubW9kdWxlLmV4cG9ydHMgPSAhcmVxdWlyZSgnLi9fZmFpbHMnKShmdW5jdGlvbigpe1xuICByZXR1cm4gT2JqZWN0LmRlZmluZVByb3BlcnR5KHt9LCAnYScsIHtnZXQ6IGZ1bmN0aW9uKCl7IHJldHVybiA3OyB9fSkuYSAhPSA3O1xufSk7IiwidmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi9faXMtb2JqZWN0JylcbiAgLCBkb2N1bWVudCA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpLmRvY3VtZW50XG4gIC8vIGluIG9sZCBJRSB0eXBlb2YgZG9jdW1lbnQuY3JlYXRlRWxlbWVudCBpcyAnb2JqZWN0J1xuICAsIGlzID0gaXNPYmplY3QoZG9jdW1lbnQpICYmIGlzT2JqZWN0KGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdCl7XG4gIHJldHVybiBpcyA/IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoaXQpIDoge307XG59OyIsIi8vIElFIDgtIGRvbid0IGVudW0gYnVnIGtleXNcclxubW9kdWxlLmV4cG9ydHMgPSAoXHJcbiAgJ2NvbnN0cnVjdG9yLGhhc093blByb3BlcnR5LGlzUHJvdG90eXBlT2YscHJvcGVydHlJc0VudW1lcmFibGUsdG9Mb2NhbGVTdHJpbmcsdG9TdHJpbmcsdmFsdWVPZidcclxuKS5zcGxpdCgnLCcpOyIsIi8vIGFsbCBlbnVtZXJhYmxlIG9iamVjdCBrZXlzLCBpbmNsdWRlcyBzeW1ib2xzXG52YXIgZ2V0S2V5cyA9IHJlcXVpcmUoJy4vX29iamVjdC1rZXlzJylcbiAgLCBnT1BTICAgID0gcmVxdWlyZSgnLi9fb2JqZWN0LWdvcHMnKVxuICAsIHBJRSAgICAgPSByZXF1aXJlKCcuL19vYmplY3QtcGllJyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0KXtcbiAgdmFyIHJlc3VsdCAgICAgPSBnZXRLZXlzKGl0KVxuICAgICwgZ2V0U3ltYm9scyA9IGdPUFMuZjtcbiAgaWYoZ2V0U3ltYm9scyl7XG4gICAgdmFyIHN5bWJvbHMgPSBnZXRTeW1ib2xzKGl0KVxuICAgICAgLCBpc0VudW0gID0gcElFLmZcbiAgICAgICwgaSAgICAgICA9IDBcbiAgICAgICwga2V5O1xuICAgIHdoaWxlKHN5bWJvbHMubGVuZ3RoID4gaSlpZihpc0VudW0uY2FsbChpdCwga2V5ID0gc3ltYm9sc1tpKytdKSlyZXN1bHQucHVzaChrZXkpO1xuICB9IHJldHVybiByZXN1bHQ7XG59OyIsInZhciBnbG9iYWwgICAgPSByZXF1aXJlKCcuL19nbG9iYWwnKVxuICAsIGNvcmUgICAgICA9IHJlcXVpcmUoJy4vX2NvcmUnKVxuICAsIGN0eCAgICAgICA9IHJlcXVpcmUoJy4vX2N0eCcpXG4gICwgaGlkZSAgICAgID0gcmVxdWlyZSgnLi9faGlkZScpXG4gICwgUFJPVE9UWVBFID0gJ3Byb3RvdHlwZSc7XG5cbnZhciAkZXhwb3J0ID0gZnVuY3Rpb24odHlwZSwgbmFtZSwgc291cmNlKXtcbiAgdmFyIElTX0ZPUkNFRCA9IHR5cGUgJiAkZXhwb3J0LkZcbiAgICAsIElTX0dMT0JBTCA9IHR5cGUgJiAkZXhwb3J0LkdcbiAgICAsIElTX1NUQVRJQyA9IHR5cGUgJiAkZXhwb3J0LlNcbiAgICAsIElTX1BST1RPICA9IHR5cGUgJiAkZXhwb3J0LlBcbiAgICAsIElTX0JJTkQgICA9IHR5cGUgJiAkZXhwb3J0LkJcbiAgICAsIElTX1dSQVAgICA9IHR5cGUgJiAkZXhwb3J0LldcbiAgICAsIGV4cG9ydHMgICA9IElTX0dMT0JBTCA/IGNvcmUgOiBjb3JlW25hbWVdIHx8IChjb3JlW25hbWVdID0ge30pXG4gICAgLCBleHBQcm90byAgPSBleHBvcnRzW1BST1RPVFlQRV1cbiAgICAsIHRhcmdldCAgICA9IElTX0dMT0JBTCA/IGdsb2JhbCA6IElTX1NUQVRJQyA/IGdsb2JhbFtuYW1lXSA6IChnbG9iYWxbbmFtZV0gfHwge30pW1BST1RPVFlQRV1cbiAgICAsIGtleSwgb3duLCBvdXQ7XG4gIGlmKElTX0dMT0JBTClzb3VyY2UgPSBuYW1lO1xuICBmb3Ioa2V5IGluIHNvdXJjZSl7XG4gICAgLy8gY29udGFpbnMgaW4gbmF0aXZlXG4gICAgb3duID0gIUlTX0ZPUkNFRCAmJiB0YXJnZXQgJiYgdGFyZ2V0W2tleV0gIT09IHVuZGVmaW5lZDtcbiAgICBpZihvd24gJiYga2V5IGluIGV4cG9ydHMpY29udGludWU7XG4gICAgLy8gZXhwb3J0IG5hdGl2ZSBvciBwYXNzZWRcbiAgICBvdXQgPSBvd24gPyB0YXJnZXRba2V5XSA6IHNvdXJjZVtrZXldO1xuICAgIC8vIHByZXZlbnQgZ2xvYmFsIHBvbGx1dGlvbiBmb3IgbmFtZXNwYWNlc1xuICAgIGV4cG9ydHNba2V5XSA9IElTX0dMT0JBTCAmJiB0eXBlb2YgdGFyZ2V0W2tleV0gIT0gJ2Z1bmN0aW9uJyA/IHNvdXJjZVtrZXldXG4gICAgLy8gYmluZCB0aW1lcnMgdG8gZ2xvYmFsIGZvciBjYWxsIGZyb20gZXhwb3J0IGNvbnRleHRcbiAgICA6IElTX0JJTkQgJiYgb3duID8gY3R4KG91dCwgZ2xvYmFsKVxuICAgIC8vIHdyYXAgZ2xvYmFsIGNvbnN0cnVjdG9ycyBmb3IgcHJldmVudCBjaGFuZ2UgdGhlbSBpbiBsaWJyYXJ5XG4gICAgOiBJU19XUkFQICYmIHRhcmdldFtrZXldID09IG91dCA/IChmdW5jdGlvbihDKXtcbiAgICAgIHZhciBGID0gZnVuY3Rpb24oYSwgYiwgYyl7XG4gICAgICAgIGlmKHRoaXMgaW5zdGFuY2VvZiBDKXtcbiAgICAgICAgICBzd2l0Y2goYXJndW1lbnRzLmxlbmd0aCl7XG4gICAgICAgICAgICBjYXNlIDA6IHJldHVybiBuZXcgQztcbiAgICAgICAgICAgIGNhc2UgMTogcmV0dXJuIG5ldyBDKGEpO1xuICAgICAgICAgICAgY2FzZSAyOiByZXR1cm4gbmV3IEMoYSwgYik7XG4gICAgICAgICAgfSByZXR1cm4gbmV3IEMoYSwgYiwgYyk7XG4gICAgICAgIH0gcmV0dXJuIEMuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICAgIH07XG4gICAgICBGW1BST1RPVFlQRV0gPSBDW1BST1RPVFlQRV07XG4gICAgICByZXR1cm4gRjtcbiAgICAvLyBtYWtlIHN0YXRpYyB2ZXJzaW9ucyBmb3IgcHJvdG90eXBlIG1ldGhvZHNcbiAgICB9KShvdXQpIDogSVNfUFJPVE8gJiYgdHlwZW9mIG91dCA9PSAnZnVuY3Rpb24nID8gY3R4KEZ1bmN0aW9uLmNhbGwsIG91dCkgOiBvdXQ7XG4gICAgLy8gZXhwb3J0IHByb3RvIG1ldGhvZHMgdG8gY29yZS4lQ09OU1RSVUNUT1IlLm1ldGhvZHMuJU5BTUUlXG4gICAgaWYoSVNfUFJPVE8pe1xuICAgICAgKGV4cG9ydHMudmlydHVhbCB8fCAoZXhwb3J0cy52aXJ0dWFsID0ge30pKVtrZXldID0gb3V0O1xuICAgICAgLy8gZXhwb3J0IHByb3RvIG1ldGhvZHMgdG8gY29yZS4lQ09OU1RSVUNUT1IlLnByb3RvdHlwZS4lTkFNRSVcbiAgICAgIGlmKHR5cGUgJiAkZXhwb3J0LlIgJiYgZXhwUHJvdG8gJiYgIWV4cFByb3RvW2tleV0paGlkZShleHBQcm90bywga2V5LCBvdXQpO1xuICAgIH1cbiAgfVxufTtcbi8vIHR5cGUgYml0bWFwXG4kZXhwb3J0LkYgPSAxOyAgIC8vIGZvcmNlZFxuJGV4cG9ydC5HID0gMjsgICAvLyBnbG9iYWxcbiRleHBvcnQuUyA9IDQ7ICAgLy8gc3RhdGljXG4kZXhwb3J0LlAgPSA4OyAgIC8vIHByb3RvXG4kZXhwb3J0LkIgPSAxNjsgIC8vIGJpbmRcbiRleHBvcnQuVyA9IDMyOyAgLy8gd3JhcFxuJGV4cG9ydC5VID0gNjQ7ICAvLyBzYWZlXG4kZXhwb3J0LlIgPSAxMjg7IC8vIHJlYWwgcHJvdG8gbWV0aG9kIGZvciBgbGlicmFyeWAgXG5tb2R1bGUuZXhwb3J0cyA9ICRleHBvcnQ7IiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihleGVjKXtcbiAgdHJ5IHtcbiAgICByZXR1cm4gISFleGVjKCk7XG4gIH0gY2F0Y2goZSl7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbn07IiwiLy8gaHR0cHM6Ly9naXRodWIuY29tL3psb2lyb2NrL2NvcmUtanMvaXNzdWVzLzg2I2lzc3VlY29tbWVudC0xMTU3NTkwMjhcbnZhciBnbG9iYWwgPSBtb2R1bGUuZXhwb3J0cyA9IHR5cGVvZiB3aW5kb3cgIT0gJ3VuZGVmaW5lZCcgJiYgd2luZG93Lk1hdGggPT0gTWF0aFxuICA/IHdpbmRvdyA6IHR5cGVvZiBzZWxmICE9ICd1bmRlZmluZWQnICYmIHNlbGYuTWF0aCA9PSBNYXRoID8gc2VsZiA6IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5pZih0eXBlb2YgX19nID09ICdudW1iZXInKV9fZyA9IGdsb2JhbDsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby11bmRlZiIsInZhciBoYXNPd25Qcm9wZXJ0eSA9IHt9Lmhhc093blByb3BlcnR5O1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdCwga2V5KXtcbiAgcmV0dXJuIGhhc093blByb3BlcnR5LmNhbGwoaXQsIGtleSk7XG59OyIsInZhciBkUCAgICAgICAgID0gcmVxdWlyZSgnLi9fb2JqZWN0LWRwJylcbiAgLCBjcmVhdGVEZXNjID0gcmVxdWlyZSgnLi9fcHJvcGVydHktZGVzYycpO1xubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL19kZXNjcmlwdG9ycycpID8gZnVuY3Rpb24ob2JqZWN0LCBrZXksIHZhbHVlKXtcbiAgcmV0dXJuIGRQLmYob2JqZWN0LCBrZXksIGNyZWF0ZURlc2MoMSwgdmFsdWUpKTtcbn0gOiBmdW5jdGlvbihvYmplY3QsIGtleSwgdmFsdWUpe1xuICBvYmplY3Rba2V5XSA9IHZhbHVlO1xuICByZXR1cm4gb2JqZWN0O1xufTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpLmRvY3VtZW50ICYmIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudDsiLCJtb2R1bGUuZXhwb3J0cyA9ICFyZXF1aXJlKCcuL19kZXNjcmlwdG9ycycpICYmICFyZXF1aXJlKCcuL19mYWlscycpKGZ1bmN0aW9uKCl7XHJcbiAgcmV0dXJuIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShyZXF1aXJlKCcuL19kb20tY3JlYXRlJykoJ2RpdicpLCAnYScsIHtnZXQ6IGZ1bmN0aW9uKCl7IHJldHVybiA3OyB9fSkuYSAhPSA3O1xyXG59KTsiLCIvLyBmYWxsYmFjayBmb3Igbm9uLWFycmF5LWxpa2UgRVMzIGFuZCBub24tZW51bWVyYWJsZSBvbGQgVjggc3RyaW5nc1xudmFyIGNvZiA9IHJlcXVpcmUoJy4vX2NvZicpO1xubW9kdWxlLmV4cG9ydHMgPSBPYmplY3QoJ3onKS5wcm9wZXJ0eUlzRW51bWVyYWJsZSgwKSA/IE9iamVjdCA6IGZ1bmN0aW9uKGl0KXtcbiAgcmV0dXJuIGNvZihpdCkgPT0gJ1N0cmluZycgPyBpdC5zcGxpdCgnJykgOiBPYmplY3QoaXQpO1xufTsiLCIvLyA3LjIuMiBJc0FycmF5KGFyZ3VtZW50KVxudmFyIGNvZiA9IHJlcXVpcmUoJy4vX2NvZicpO1xubW9kdWxlLmV4cG9ydHMgPSBBcnJheS5pc0FycmF5IHx8IGZ1bmN0aW9uIGlzQXJyYXkoYXJnKXtcbiAgcmV0dXJuIGNvZihhcmcpID09ICdBcnJheSc7XG59OyIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXQpe1xuICByZXR1cm4gdHlwZW9mIGl0ID09PSAnb2JqZWN0JyA/IGl0ICE9PSBudWxsIDogdHlwZW9mIGl0ID09PSAnZnVuY3Rpb24nO1xufTsiLCIndXNlIHN0cmljdCc7XG52YXIgY3JlYXRlICAgICAgICAgPSByZXF1aXJlKCcuL19vYmplY3QtY3JlYXRlJylcbiAgLCBkZXNjcmlwdG9yICAgICA9IHJlcXVpcmUoJy4vX3Byb3BlcnR5LWRlc2MnKVxuICAsIHNldFRvU3RyaW5nVGFnID0gcmVxdWlyZSgnLi9fc2V0LXRvLXN0cmluZy10YWcnKVxuICAsIEl0ZXJhdG9yUHJvdG90eXBlID0ge307XG5cbi8vIDI1LjEuMi4xLjEgJUl0ZXJhdG9yUHJvdG90eXBlJVtAQGl0ZXJhdG9yXSgpXG5yZXF1aXJlKCcuL19oaWRlJykoSXRlcmF0b3JQcm90b3R5cGUsIHJlcXVpcmUoJy4vX3drcycpKCdpdGVyYXRvcicpLCBmdW5jdGlvbigpeyByZXR1cm4gdGhpczsgfSk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oQ29uc3RydWN0b3IsIE5BTUUsIG5leHQpe1xuICBDb25zdHJ1Y3Rvci5wcm90b3R5cGUgPSBjcmVhdGUoSXRlcmF0b3JQcm90b3R5cGUsIHtuZXh0OiBkZXNjcmlwdG9yKDEsIG5leHQpfSk7XG4gIHNldFRvU3RyaW5nVGFnKENvbnN0cnVjdG9yLCBOQU1FICsgJyBJdGVyYXRvcicpO1xufTsiLCIndXNlIHN0cmljdCc7XG52YXIgTElCUkFSWSAgICAgICAgPSByZXF1aXJlKCcuL19saWJyYXJ5JylcbiAgLCAkZXhwb3J0ICAgICAgICA9IHJlcXVpcmUoJy4vX2V4cG9ydCcpXG4gICwgcmVkZWZpbmUgICAgICAgPSByZXF1aXJlKCcuL19yZWRlZmluZScpXG4gICwgaGlkZSAgICAgICAgICAgPSByZXF1aXJlKCcuL19oaWRlJylcbiAgLCBoYXMgICAgICAgICAgICA9IHJlcXVpcmUoJy4vX2hhcycpXG4gICwgSXRlcmF0b3JzICAgICAgPSByZXF1aXJlKCcuL19pdGVyYXRvcnMnKVxuICAsICRpdGVyQ3JlYXRlICAgID0gcmVxdWlyZSgnLi9faXRlci1jcmVhdGUnKVxuICAsIHNldFRvU3RyaW5nVGFnID0gcmVxdWlyZSgnLi9fc2V0LXRvLXN0cmluZy10YWcnKVxuICAsIGdldFByb3RvdHlwZU9mID0gcmVxdWlyZSgnLi9fb2JqZWN0LWdwbycpXG4gICwgSVRFUkFUT1IgICAgICAgPSByZXF1aXJlKCcuL193a3MnKSgnaXRlcmF0b3InKVxuICAsIEJVR0dZICAgICAgICAgID0gIShbXS5rZXlzICYmICduZXh0JyBpbiBbXS5rZXlzKCkpIC8vIFNhZmFyaSBoYXMgYnVnZ3kgaXRlcmF0b3JzIHcvbyBgbmV4dGBcbiAgLCBGRl9JVEVSQVRPUiAgICA9ICdAQGl0ZXJhdG9yJ1xuICAsIEtFWVMgICAgICAgICAgID0gJ2tleXMnXG4gICwgVkFMVUVTICAgICAgICAgPSAndmFsdWVzJztcblxudmFyIHJldHVyblRoaXMgPSBmdW5jdGlvbigpeyByZXR1cm4gdGhpczsgfTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihCYXNlLCBOQU1FLCBDb25zdHJ1Y3RvciwgbmV4dCwgREVGQVVMVCwgSVNfU0VULCBGT1JDRUQpe1xuICAkaXRlckNyZWF0ZShDb25zdHJ1Y3RvciwgTkFNRSwgbmV4dCk7XG4gIHZhciBnZXRNZXRob2QgPSBmdW5jdGlvbihraW5kKXtcbiAgICBpZighQlVHR1kgJiYga2luZCBpbiBwcm90bylyZXR1cm4gcHJvdG9ba2luZF07XG4gICAgc3dpdGNoKGtpbmQpe1xuICAgICAgY2FzZSBLRVlTOiByZXR1cm4gZnVuY3Rpb24ga2V5cygpeyByZXR1cm4gbmV3IENvbnN0cnVjdG9yKHRoaXMsIGtpbmQpOyB9O1xuICAgICAgY2FzZSBWQUxVRVM6IHJldHVybiBmdW5jdGlvbiB2YWx1ZXMoKXsgcmV0dXJuIG5ldyBDb25zdHJ1Y3Rvcih0aGlzLCBraW5kKTsgfTtcbiAgICB9IHJldHVybiBmdW5jdGlvbiBlbnRyaWVzKCl7IHJldHVybiBuZXcgQ29uc3RydWN0b3IodGhpcywga2luZCk7IH07XG4gIH07XG4gIHZhciBUQUcgICAgICAgID0gTkFNRSArICcgSXRlcmF0b3InXG4gICAgLCBERUZfVkFMVUVTID0gREVGQVVMVCA9PSBWQUxVRVNcbiAgICAsIFZBTFVFU19CVUcgPSBmYWxzZVxuICAgICwgcHJvdG8gICAgICA9IEJhc2UucHJvdG90eXBlXG4gICAgLCAkbmF0aXZlICAgID0gcHJvdG9bSVRFUkFUT1JdIHx8IHByb3RvW0ZGX0lURVJBVE9SXSB8fCBERUZBVUxUICYmIHByb3RvW0RFRkFVTFRdXG4gICAgLCAkZGVmYXVsdCAgID0gJG5hdGl2ZSB8fCBnZXRNZXRob2QoREVGQVVMVClcbiAgICAsICRlbnRyaWVzICAgPSBERUZBVUxUID8gIURFRl9WQUxVRVMgPyAkZGVmYXVsdCA6IGdldE1ldGhvZCgnZW50cmllcycpIDogdW5kZWZpbmVkXG4gICAgLCAkYW55TmF0aXZlID0gTkFNRSA9PSAnQXJyYXknID8gcHJvdG8uZW50cmllcyB8fCAkbmF0aXZlIDogJG5hdGl2ZVxuICAgICwgbWV0aG9kcywga2V5LCBJdGVyYXRvclByb3RvdHlwZTtcbiAgLy8gRml4IG5hdGl2ZVxuICBpZigkYW55TmF0aXZlKXtcbiAgICBJdGVyYXRvclByb3RvdHlwZSA9IGdldFByb3RvdHlwZU9mKCRhbnlOYXRpdmUuY2FsbChuZXcgQmFzZSkpO1xuICAgIGlmKEl0ZXJhdG9yUHJvdG90eXBlICE9PSBPYmplY3QucHJvdG90eXBlKXtcbiAgICAgIC8vIFNldCBAQHRvU3RyaW5nVGFnIHRvIG5hdGl2ZSBpdGVyYXRvcnNcbiAgICAgIHNldFRvU3RyaW5nVGFnKEl0ZXJhdG9yUHJvdG90eXBlLCBUQUcsIHRydWUpO1xuICAgICAgLy8gZml4IGZvciBzb21lIG9sZCBlbmdpbmVzXG4gICAgICBpZighTElCUkFSWSAmJiAhaGFzKEl0ZXJhdG9yUHJvdG90eXBlLCBJVEVSQVRPUikpaGlkZShJdGVyYXRvclByb3RvdHlwZSwgSVRFUkFUT1IsIHJldHVyblRoaXMpO1xuICAgIH1cbiAgfVxuICAvLyBmaXggQXJyYXkje3ZhbHVlcywgQEBpdGVyYXRvcn0ubmFtZSBpbiBWOCAvIEZGXG4gIGlmKERFRl9WQUxVRVMgJiYgJG5hdGl2ZSAmJiAkbmF0aXZlLm5hbWUgIT09IFZBTFVFUyl7XG4gICAgVkFMVUVTX0JVRyA9IHRydWU7XG4gICAgJGRlZmF1bHQgPSBmdW5jdGlvbiB2YWx1ZXMoKXsgcmV0dXJuICRuYXRpdmUuY2FsbCh0aGlzKTsgfTtcbiAgfVxuICAvLyBEZWZpbmUgaXRlcmF0b3JcbiAgaWYoKCFMSUJSQVJZIHx8IEZPUkNFRCkgJiYgKEJVR0dZIHx8IFZBTFVFU19CVUcgfHwgIXByb3RvW0lURVJBVE9SXSkpe1xuICAgIGhpZGUocHJvdG8sIElURVJBVE9SLCAkZGVmYXVsdCk7XG4gIH1cbiAgLy8gUGx1ZyBmb3IgbGlicmFyeVxuICBJdGVyYXRvcnNbTkFNRV0gPSAkZGVmYXVsdDtcbiAgSXRlcmF0b3JzW1RBR10gID0gcmV0dXJuVGhpcztcbiAgaWYoREVGQVVMVCl7XG4gICAgbWV0aG9kcyA9IHtcbiAgICAgIHZhbHVlczogIERFRl9WQUxVRVMgPyAkZGVmYXVsdCA6IGdldE1ldGhvZChWQUxVRVMpLFxuICAgICAga2V5czogICAgSVNfU0VUICAgICA/ICRkZWZhdWx0IDogZ2V0TWV0aG9kKEtFWVMpLFxuICAgICAgZW50cmllczogJGVudHJpZXNcbiAgICB9O1xuICAgIGlmKEZPUkNFRClmb3Ioa2V5IGluIG1ldGhvZHMpe1xuICAgICAgaWYoIShrZXkgaW4gcHJvdG8pKXJlZGVmaW5lKHByb3RvLCBrZXksIG1ldGhvZHNba2V5XSk7XG4gICAgfSBlbHNlICRleHBvcnQoJGV4cG9ydC5QICsgJGV4cG9ydC5GICogKEJVR0dZIHx8IFZBTFVFU19CVUcpLCBOQU1FLCBtZXRob2RzKTtcbiAgfVxuICByZXR1cm4gbWV0aG9kcztcbn07IiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihkb25lLCB2YWx1ZSl7XG4gIHJldHVybiB7dmFsdWU6IHZhbHVlLCBkb25lOiAhIWRvbmV9O1xufTsiLCJtb2R1bGUuZXhwb3J0cyA9IHt9OyIsInZhciBnZXRLZXlzICAgPSByZXF1aXJlKCcuL19vYmplY3Qta2V5cycpXG4gICwgdG9JT2JqZWN0ID0gcmVxdWlyZSgnLi9fdG8taW9iamVjdCcpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihvYmplY3QsIGVsKXtcbiAgdmFyIE8gICAgICA9IHRvSU9iamVjdChvYmplY3QpXG4gICAgLCBrZXlzICAgPSBnZXRLZXlzKE8pXG4gICAgLCBsZW5ndGggPSBrZXlzLmxlbmd0aFxuICAgICwgaW5kZXggID0gMFxuICAgICwga2V5O1xuICB3aGlsZShsZW5ndGggPiBpbmRleClpZihPW2tleSA9IGtleXNbaW5kZXgrK11dID09PSBlbClyZXR1cm4ga2V5O1xufTsiLCJtb2R1bGUuZXhwb3J0cyA9IHRydWU7IiwidmFyIE1FVEEgICAgID0gcmVxdWlyZSgnLi9fdWlkJykoJ21ldGEnKVxuICAsIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi9faXMtb2JqZWN0JylcbiAgLCBoYXMgICAgICA9IHJlcXVpcmUoJy4vX2hhcycpXG4gICwgc2V0RGVzYyAgPSByZXF1aXJlKCcuL19vYmplY3QtZHAnKS5mXG4gICwgaWQgICAgICAgPSAwO1xudmFyIGlzRXh0ZW5zaWJsZSA9IE9iamVjdC5pc0V4dGVuc2libGUgfHwgZnVuY3Rpb24oKXtcbiAgcmV0dXJuIHRydWU7XG59O1xudmFyIEZSRUVaRSA9ICFyZXF1aXJlKCcuL19mYWlscycpKGZ1bmN0aW9uKCl7XG4gIHJldHVybiBpc0V4dGVuc2libGUoT2JqZWN0LnByZXZlbnRFeHRlbnNpb25zKHt9KSk7XG59KTtcbnZhciBzZXRNZXRhID0gZnVuY3Rpb24oaXQpe1xuICBzZXREZXNjKGl0LCBNRVRBLCB7dmFsdWU6IHtcbiAgICBpOiAnTycgKyArK2lkLCAvLyBvYmplY3QgSURcbiAgICB3OiB7fSAgICAgICAgICAvLyB3ZWFrIGNvbGxlY3Rpb25zIElEc1xuICB9fSk7XG59O1xudmFyIGZhc3RLZXkgPSBmdW5jdGlvbihpdCwgY3JlYXRlKXtcbiAgLy8gcmV0dXJuIHByaW1pdGl2ZSB3aXRoIHByZWZpeFxuICBpZighaXNPYmplY3QoaXQpKXJldHVybiB0eXBlb2YgaXQgPT0gJ3N5bWJvbCcgPyBpdCA6ICh0eXBlb2YgaXQgPT0gJ3N0cmluZycgPyAnUycgOiAnUCcpICsgaXQ7XG4gIGlmKCFoYXMoaXQsIE1FVEEpKXtcbiAgICAvLyBjYW4ndCBzZXQgbWV0YWRhdGEgdG8gdW5jYXVnaHQgZnJvemVuIG9iamVjdFxuICAgIGlmKCFpc0V4dGVuc2libGUoaXQpKXJldHVybiAnRic7XG4gICAgLy8gbm90IG5lY2Vzc2FyeSB0byBhZGQgbWV0YWRhdGFcbiAgICBpZighY3JlYXRlKXJldHVybiAnRSc7XG4gICAgLy8gYWRkIG1pc3NpbmcgbWV0YWRhdGFcbiAgICBzZXRNZXRhKGl0KTtcbiAgLy8gcmV0dXJuIG9iamVjdCBJRFxuICB9IHJldHVybiBpdFtNRVRBXS5pO1xufTtcbnZhciBnZXRXZWFrID0gZnVuY3Rpb24oaXQsIGNyZWF0ZSl7XG4gIGlmKCFoYXMoaXQsIE1FVEEpKXtcbiAgICAvLyBjYW4ndCBzZXQgbWV0YWRhdGEgdG8gdW5jYXVnaHQgZnJvemVuIG9iamVjdFxuICAgIGlmKCFpc0V4dGVuc2libGUoaXQpKXJldHVybiB0cnVlO1xuICAgIC8vIG5vdCBuZWNlc3NhcnkgdG8gYWRkIG1ldGFkYXRhXG4gICAgaWYoIWNyZWF0ZSlyZXR1cm4gZmFsc2U7XG4gICAgLy8gYWRkIG1pc3NpbmcgbWV0YWRhdGFcbiAgICBzZXRNZXRhKGl0KTtcbiAgLy8gcmV0dXJuIGhhc2ggd2VhayBjb2xsZWN0aW9ucyBJRHNcbiAgfSByZXR1cm4gaXRbTUVUQV0udztcbn07XG4vLyBhZGQgbWV0YWRhdGEgb24gZnJlZXplLWZhbWlseSBtZXRob2RzIGNhbGxpbmdcbnZhciBvbkZyZWV6ZSA9IGZ1bmN0aW9uKGl0KXtcbiAgaWYoRlJFRVpFICYmIG1ldGEuTkVFRCAmJiBpc0V4dGVuc2libGUoaXQpICYmICFoYXMoaXQsIE1FVEEpKXNldE1ldGEoaXQpO1xuICByZXR1cm4gaXQ7XG59O1xudmFyIG1ldGEgPSBtb2R1bGUuZXhwb3J0cyA9IHtcbiAgS0VZOiAgICAgIE1FVEEsXG4gIE5FRUQ6ICAgICBmYWxzZSxcbiAgZmFzdEtleTogIGZhc3RLZXksXG4gIGdldFdlYWs6ICBnZXRXZWFrLFxuICBvbkZyZWV6ZTogb25GcmVlemVcbn07IiwiLy8gMTkuMS4yLjIgLyAxNS4yLjMuNSBPYmplY3QuY3JlYXRlKE8gWywgUHJvcGVydGllc10pXHJcbnZhciBhbk9iamVjdCAgICA9IHJlcXVpcmUoJy4vX2FuLW9iamVjdCcpXHJcbiAgLCBkUHMgICAgICAgICA9IHJlcXVpcmUoJy4vX29iamVjdC1kcHMnKVxyXG4gICwgZW51bUJ1Z0tleXMgPSByZXF1aXJlKCcuL19lbnVtLWJ1Zy1rZXlzJylcclxuICAsIElFX1BST1RPICAgID0gcmVxdWlyZSgnLi9fc2hhcmVkLWtleScpKCdJRV9QUk9UTycpXHJcbiAgLCBFbXB0eSAgICAgICA9IGZ1bmN0aW9uKCl7IC8qIGVtcHR5ICovIH1cclxuICAsIFBST1RPVFlQRSAgID0gJ3Byb3RvdHlwZSc7XHJcblxyXG4vLyBDcmVhdGUgb2JqZWN0IHdpdGggZmFrZSBgbnVsbGAgcHJvdG90eXBlOiB1c2UgaWZyYW1lIE9iamVjdCB3aXRoIGNsZWFyZWQgcHJvdG90eXBlXHJcbnZhciBjcmVhdGVEaWN0ID0gZnVuY3Rpb24oKXtcclxuICAvLyBUaHJhc2gsIHdhc3RlIGFuZCBzb2RvbXk6IElFIEdDIGJ1Z1xyXG4gIHZhciBpZnJhbWUgPSByZXF1aXJlKCcuL19kb20tY3JlYXRlJykoJ2lmcmFtZScpXHJcbiAgICAsIGkgICAgICA9IGVudW1CdWdLZXlzLmxlbmd0aFxyXG4gICAgLCBndCAgICAgPSAnPidcclxuICAgICwgaWZyYW1lRG9jdW1lbnQ7XHJcbiAgaWZyYW1lLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcbiAgcmVxdWlyZSgnLi9faHRtbCcpLmFwcGVuZENoaWxkKGlmcmFtZSk7XHJcbiAgaWZyYW1lLnNyYyA9ICdqYXZhc2NyaXB0Oic7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tc2NyaXB0LXVybFxyXG4gIC8vIGNyZWF0ZURpY3QgPSBpZnJhbWUuY29udGVudFdpbmRvdy5PYmplY3Q7XHJcbiAgLy8gaHRtbC5yZW1vdmVDaGlsZChpZnJhbWUpO1xyXG4gIGlmcmFtZURvY3VtZW50ID0gaWZyYW1lLmNvbnRlbnRXaW5kb3cuZG9jdW1lbnQ7XHJcbiAgaWZyYW1lRG9jdW1lbnQub3BlbigpO1xyXG4gIGlmcmFtZURvY3VtZW50LndyaXRlKCc8c2NyaXB0PmRvY3VtZW50LkY9T2JqZWN0PC9zY3JpcHQnICsgZ3QpO1xyXG4gIGlmcmFtZURvY3VtZW50LmNsb3NlKCk7XHJcbiAgY3JlYXRlRGljdCA9IGlmcmFtZURvY3VtZW50LkY7XHJcbiAgd2hpbGUoaS0tKWRlbGV0ZSBjcmVhdGVEaWN0W1BST1RPVFlQRV1bZW51bUJ1Z0tleXNbaV1dO1xyXG4gIHJldHVybiBjcmVhdGVEaWN0KCk7XHJcbn07XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IE9iamVjdC5jcmVhdGUgfHwgZnVuY3Rpb24gY3JlYXRlKE8sIFByb3BlcnRpZXMpe1xyXG4gIHZhciByZXN1bHQ7XHJcbiAgaWYoTyAhPT0gbnVsbCl7XHJcbiAgICBFbXB0eVtQUk9UT1RZUEVdID0gYW5PYmplY3QoTyk7XHJcbiAgICByZXN1bHQgPSBuZXcgRW1wdHk7XHJcbiAgICBFbXB0eVtQUk9UT1RZUEVdID0gbnVsbDtcclxuICAgIC8vIGFkZCBcIl9fcHJvdG9fX1wiIGZvciBPYmplY3QuZ2V0UHJvdG90eXBlT2YgcG9seWZpbGxcclxuICAgIHJlc3VsdFtJRV9QUk9UT10gPSBPO1xyXG4gIH0gZWxzZSByZXN1bHQgPSBjcmVhdGVEaWN0KCk7XHJcbiAgcmV0dXJuIFByb3BlcnRpZXMgPT09IHVuZGVmaW5lZCA/IHJlc3VsdCA6IGRQcyhyZXN1bHQsIFByb3BlcnRpZXMpO1xyXG59OyIsInZhciBhbk9iamVjdCAgICAgICA9IHJlcXVpcmUoJy4vX2FuLW9iamVjdCcpXG4gICwgSUU4X0RPTV9ERUZJTkUgPSByZXF1aXJlKCcuL19pZTgtZG9tLWRlZmluZScpXG4gICwgdG9QcmltaXRpdmUgICAgPSByZXF1aXJlKCcuL190by1wcmltaXRpdmUnKVxuICAsIGRQICAgICAgICAgICAgID0gT2JqZWN0LmRlZmluZVByb3BlcnR5O1xuXG5leHBvcnRzLmYgPSByZXF1aXJlKCcuL19kZXNjcmlwdG9ycycpID8gT2JqZWN0LmRlZmluZVByb3BlcnR5IDogZnVuY3Rpb24gZGVmaW5lUHJvcGVydHkoTywgUCwgQXR0cmlidXRlcyl7XG4gIGFuT2JqZWN0KE8pO1xuICBQID0gdG9QcmltaXRpdmUoUCwgdHJ1ZSk7XG4gIGFuT2JqZWN0KEF0dHJpYnV0ZXMpO1xuICBpZihJRThfRE9NX0RFRklORSl0cnkge1xuICAgIHJldHVybiBkUChPLCBQLCBBdHRyaWJ1dGVzKTtcbiAgfSBjYXRjaChlKXsgLyogZW1wdHkgKi8gfVxuICBpZignZ2V0JyBpbiBBdHRyaWJ1dGVzIHx8ICdzZXQnIGluIEF0dHJpYnV0ZXMpdGhyb3cgVHlwZUVycm9yKCdBY2Nlc3NvcnMgbm90IHN1cHBvcnRlZCEnKTtcbiAgaWYoJ3ZhbHVlJyBpbiBBdHRyaWJ1dGVzKU9bUF0gPSBBdHRyaWJ1dGVzLnZhbHVlO1xuICByZXR1cm4gTztcbn07IiwidmFyIGRQICAgICAgID0gcmVxdWlyZSgnLi9fb2JqZWN0LWRwJylcclxuICAsIGFuT2JqZWN0ID0gcmVxdWlyZSgnLi9fYW4tb2JqZWN0JylcclxuICAsIGdldEtleXMgID0gcmVxdWlyZSgnLi9fb2JqZWN0LWtleXMnKTtcclxuXHJcbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9fZGVzY3JpcHRvcnMnKSA/IE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzIDogZnVuY3Rpb24gZGVmaW5lUHJvcGVydGllcyhPLCBQcm9wZXJ0aWVzKXtcclxuICBhbk9iamVjdChPKTtcclxuICB2YXIga2V5cyAgID0gZ2V0S2V5cyhQcm9wZXJ0aWVzKVxyXG4gICAgLCBsZW5ndGggPSBrZXlzLmxlbmd0aFxyXG4gICAgLCBpID0gMFxyXG4gICAgLCBQO1xyXG4gIHdoaWxlKGxlbmd0aCA+IGkpZFAuZihPLCBQID0ga2V5c1tpKytdLCBQcm9wZXJ0aWVzW1BdKTtcclxuICByZXR1cm4gTztcclxufTsiLCJ2YXIgcElFICAgICAgICAgICAgPSByZXF1aXJlKCcuL19vYmplY3QtcGllJylcclxuICAsIGNyZWF0ZURlc2MgICAgID0gcmVxdWlyZSgnLi9fcHJvcGVydHktZGVzYycpXHJcbiAgLCB0b0lPYmplY3QgICAgICA9IHJlcXVpcmUoJy4vX3RvLWlvYmplY3QnKVxyXG4gICwgdG9QcmltaXRpdmUgICAgPSByZXF1aXJlKCcuL190by1wcmltaXRpdmUnKVxyXG4gICwgaGFzICAgICAgICAgICAgPSByZXF1aXJlKCcuL19oYXMnKVxyXG4gICwgSUU4X0RPTV9ERUZJTkUgPSByZXF1aXJlKCcuL19pZTgtZG9tLWRlZmluZScpXHJcbiAgLCBnT1BEICAgICAgICAgICA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3I7XHJcblxyXG5leHBvcnRzLmYgPSByZXF1aXJlKCcuL19kZXNjcmlwdG9ycycpID8gZ09QRCA6IGZ1bmN0aW9uIGdldE93blByb3BlcnR5RGVzY3JpcHRvcihPLCBQKXtcclxuICBPID0gdG9JT2JqZWN0KE8pO1xyXG4gIFAgPSB0b1ByaW1pdGl2ZShQLCB0cnVlKTtcclxuICBpZihJRThfRE9NX0RFRklORSl0cnkge1xyXG4gICAgcmV0dXJuIGdPUEQoTywgUCk7XHJcbiAgfSBjYXRjaChlKXsgLyogZW1wdHkgKi8gfVxyXG4gIGlmKGhhcyhPLCBQKSlyZXR1cm4gY3JlYXRlRGVzYyghcElFLmYuY2FsbChPLCBQKSwgT1tQXSk7XHJcbn07IiwiLy8gZmFsbGJhY2sgZm9yIElFMTEgYnVnZ3kgT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMgd2l0aCBpZnJhbWUgYW5kIHdpbmRvd1xudmFyIHRvSU9iamVjdCA9IHJlcXVpcmUoJy4vX3RvLWlvYmplY3QnKVxuICAsIGdPUE4gICAgICA9IHJlcXVpcmUoJy4vX29iamVjdC1nb3BuJykuZlxuICAsIHRvU3RyaW5nICA9IHt9LnRvU3RyaW5nO1xuXG52YXIgd2luZG93TmFtZXMgPSB0eXBlb2Ygd2luZG93ID09ICdvYmplY3QnICYmIHdpbmRvdyAmJiBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lc1xuICA/IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKHdpbmRvdykgOiBbXTtcblxudmFyIGdldFdpbmRvd05hbWVzID0gZnVuY3Rpb24oaXQpe1xuICB0cnkge1xuICAgIHJldHVybiBnT1BOKGl0KTtcbiAgfSBjYXRjaChlKXtcbiAgICByZXR1cm4gd2luZG93TmFtZXMuc2xpY2UoKTtcbiAgfVxufTtcblxubW9kdWxlLmV4cG9ydHMuZiA9IGZ1bmN0aW9uIGdldE93blByb3BlcnR5TmFtZXMoaXQpe1xuICByZXR1cm4gd2luZG93TmFtZXMgJiYgdG9TdHJpbmcuY2FsbChpdCkgPT0gJ1tvYmplY3QgV2luZG93XScgPyBnZXRXaW5kb3dOYW1lcyhpdCkgOiBnT1BOKHRvSU9iamVjdChpdCkpO1xufTtcbiIsIi8vIDE5LjEuMi43IC8gMTUuMi4zLjQgT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMoTylcclxudmFyICRrZXlzICAgICAgPSByZXF1aXJlKCcuL19vYmplY3Qta2V5cy1pbnRlcm5hbCcpXHJcbiAgLCBoaWRkZW5LZXlzID0gcmVxdWlyZSgnLi9fZW51bS1idWcta2V5cycpLmNvbmNhdCgnbGVuZ3RoJywgJ3Byb3RvdHlwZScpO1xyXG5cclxuZXhwb3J0cy5mID0gT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMgfHwgZnVuY3Rpb24gZ2V0T3duUHJvcGVydHlOYW1lcyhPKXtcclxuICByZXR1cm4gJGtleXMoTywgaGlkZGVuS2V5cyk7XHJcbn07IiwiZXhwb3J0cy5mID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9sczsiLCIvLyAxOS4xLjIuOSAvIDE1LjIuMy4yIE9iamVjdC5nZXRQcm90b3R5cGVPZihPKVxyXG52YXIgaGFzICAgICAgICAgPSByZXF1aXJlKCcuL19oYXMnKVxyXG4gICwgdG9PYmplY3QgICAgPSByZXF1aXJlKCcuL190by1vYmplY3QnKVxyXG4gICwgSUVfUFJPVE8gICAgPSByZXF1aXJlKCcuL19zaGFyZWQta2V5JykoJ0lFX1BST1RPJylcclxuICAsIE9iamVjdFByb3RvID0gT2JqZWN0LnByb3RvdHlwZTtcclxuXHJcbm1vZHVsZS5leHBvcnRzID0gT2JqZWN0LmdldFByb3RvdHlwZU9mIHx8IGZ1bmN0aW9uKE8pe1xyXG4gIE8gPSB0b09iamVjdChPKTtcclxuICBpZihoYXMoTywgSUVfUFJPVE8pKXJldHVybiBPW0lFX1BST1RPXTtcclxuICBpZih0eXBlb2YgTy5jb25zdHJ1Y3RvciA9PSAnZnVuY3Rpb24nICYmIE8gaW5zdGFuY2VvZiBPLmNvbnN0cnVjdG9yKXtcclxuICAgIHJldHVybiBPLmNvbnN0cnVjdG9yLnByb3RvdHlwZTtcclxuICB9IHJldHVybiBPIGluc3RhbmNlb2YgT2JqZWN0ID8gT2JqZWN0UHJvdG8gOiBudWxsO1xyXG59OyIsInZhciBoYXMgICAgICAgICAgPSByZXF1aXJlKCcuL19oYXMnKVxyXG4gICwgdG9JT2JqZWN0ICAgID0gcmVxdWlyZSgnLi9fdG8taW9iamVjdCcpXHJcbiAgLCBhcnJheUluZGV4T2YgPSByZXF1aXJlKCcuL19hcnJheS1pbmNsdWRlcycpKGZhbHNlKVxyXG4gICwgSUVfUFJPVE8gICAgID0gcmVxdWlyZSgnLi9fc2hhcmVkLWtleScpKCdJRV9QUk9UTycpO1xyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihvYmplY3QsIG5hbWVzKXtcclxuICB2YXIgTyAgICAgID0gdG9JT2JqZWN0KG9iamVjdClcclxuICAgICwgaSAgICAgID0gMFxyXG4gICAgLCByZXN1bHQgPSBbXVxyXG4gICAgLCBrZXk7XHJcbiAgZm9yKGtleSBpbiBPKWlmKGtleSAhPSBJRV9QUk9UTyloYXMoTywga2V5KSAmJiByZXN1bHQucHVzaChrZXkpO1xyXG4gIC8vIERvbid0IGVudW0gYnVnICYgaGlkZGVuIGtleXNcclxuICB3aGlsZShuYW1lcy5sZW5ndGggPiBpKWlmKGhhcyhPLCBrZXkgPSBuYW1lc1tpKytdKSl7XHJcbiAgICB+YXJyYXlJbmRleE9mKHJlc3VsdCwga2V5KSB8fCByZXN1bHQucHVzaChrZXkpO1xyXG4gIH1cclxuICByZXR1cm4gcmVzdWx0O1xyXG59OyIsIi8vIDE5LjEuMi4xNCAvIDE1LjIuMy4xNCBPYmplY3Qua2V5cyhPKVxyXG52YXIgJGtleXMgICAgICAgPSByZXF1aXJlKCcuL19vYmplY3Qta2V5cy1pbnRlcm5hbCcpXHJcbiAgLCBlbnVtQnVnS2V5cyA9IHJlcXVpcmUoJy4vX2VudW0tYnVnLWtleXMnKTtcclxuXHJcbm1vZHVsZS5leHBvcnRzID0gT2JqZWN0LmtleXMgfHwgZnVuY3Rpb24ga2V5cyhPKXtcclxuICByZXR1cm4gJGtleXMoTywgZW51bUJ1Z0tleXMpO1xyXG59OyIsImV4cG9ydHMuZiA9IHt9LnByb3BlcnR5SXNFbnVtZXJhYmxlOyIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oYml0bWFwLCB2YWx1ZSl7XG4gIHJldHVybiB7XG4gICAgZW51bWVyYWJsZSAgOiAhKGJpdG1hcCAmIDEpLFxuICAgIGNvbmZpZ3VyYWJsZTogIShiaXRtYXAgJiAyKSxcbiAgICB3cml0YWJsZSAgICA6ICEoYml0bWFwICYgNCksXG4gICAgdmFsdWUgICAgICAgOiB2YWx1ZVxuICB9O1xufTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vX2hpZGUnKTsiLCJ2YXIgZGVmID0gcmVxdWlyZSgnLi9fb2JqZWN0LWRwJykuZlxuICAsIGhhcyA9IHJlcXVpcmUoJy4vX2hhcycpXG4gICwgVEFHID0gcmVxdWlyZSgnLi9fd2tzJykoJ3RvU3RyaW5nVGFnJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXQsIHRhZywgc3RhdCl7XG4gIGlmKGl0ICYmICFoYXMoaXQgPSBzdGF0ID8gaXQgOiBpdC5wcm90b3R5cGUsIFRBRykpZGVmKGl0LCBUQUcsIHtjb25maWd1cmFibGU6IHRydWUsIHZhbHVlOiB0YWd9KTtcbn07IiwidmFyIHNoYXJlZCA9IHJlcXVpcmUoJy4vX3NoYXJlZCcpKCdrZXlzJylcclxuICAsIHVpZCAgICA9IHJlcXVpcmUoJy4vX3VpZCcpO1xyXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGtleSl7XHJcbiAgcmV0dXJuIHNoYXJlZFtrZXldIHx8IChzaGFyZWRba2V5XSA9IHVpZChrZXkpKTtcclxufTsiLCJ2YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi9fZ2xvYmFsJylcbiAgLCBTSEFSRUQgPSAnX19jb3JlLWpzX3NoYXJlZF9fJ1xuICAsIHN0b3JlICA9IGdsb2JhbFtTSEFSRURdIHx8IChnbG9iYWxbU0hBUkVEXSA9IHt9KTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oa2V5KXtcbiAgcmV0dXJuIHN0b3JlW2tleV0gfHwgKHN0b3JlW2tleV0gPSB7fSk7XG59OyIsInZhciB0b0ludGVnZXIgPSByZXF1aXJlKCcuL190by1pbnRlZ2VyJylcbiAgLCBkZWZpbmVkICAgPSByZXF1aXJlKCcuL19kZWZpbmVkJyk7XG4vLyB0cnVlICAtPiBTdHJpbmcjYXRcbi8vIGZhbHNlIC0+IFN0cmluZyNjb2RlUG9pbnRBdFxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihUT19TVFJJTkcpe1xuICByZXR1cm4gZnVuY3Rpb24odGhhdCwgcG9zKXtcbiAgICB2YXIgcyA9IFN0cmluZyhkZWZpbmVkKHRoYXQpKVxuICAgICAgLCBpID0gdG9JbnRlZ2VyKHBvcylcbiAgICAgICwgbCA9IHMubGVuZ3RoXG4gICAgICAsIGEsIGI7XG4gICAgaWYoaSA8IDAgfHwgaSA+PSBsKXJldHVybiBUT19TVFJJTkcgPyAnJyA6IHVuZGVmaW5lZDtcbiAgICBhID0gcy5jaGFyQ29kZUF0KGkpO1xuICAgIHJldHVybiBhIDwgMHhkODAwIHx8IGEgPiAweGRiZmYgfHwgaSArIDEgPT09IGwgfHwgKGIgPSBzLmNoYXJDb2RlQXQoaSArIDEpKSA8IDB4ZGMwMCB8fCBiID4gMHhkZmZmXG4gICAgICA/IFRPX1NUUklORyA/IHMuY2hhckF0KGkpIDogYVxuICAgICAgOiBUT19TVFJJTkcgPyBzLnNsaWNlKGksIGkgKyAyKSA6IChhIC0gMHhkODAwIDw8IDEwKSArIChiIC0gMHhkYzAwKSArIDB4MTAwMDA7XG4gIH07XG59OyIsInZhciB0b0ludGVnZXIgPSByZXF1aXJlKCcuL190by1pbnRlZ2VyJylcbiAgLCBtYXggICAgICAgPSBNYXRoLm1heFxuICAsIG1pbiAgICAgICA9IE1hdGgubWluO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpbmRleCwgbGVuZ3RoKXtcbiAgaW5kZXggPSB0b0ludGVnZXIoaW5kZXgpO1xuICByZXR1cm4gaW5kZXggPCAwID8gbWF4KGluZGV4ICsgbGVuZ3RoLCAwKSA6IG1pbihpbmRleCwgbGVuZ3RoKTtcbn07IiwiLy8gNy4xLjQgVG9JbnRlZ2VyXG52YXIgY2VpbCAgPSBNYXRoLmNlaWxcbiAgLCBmbG9vciA9IE1hdGguZmxvb3I7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0KXtcbiAgcmV0dXJuIGlzTmFOKGl0ID0gK2l0KSA/IDAgOiAoaXQgPiAwID8gZmxvb3IgOiBjZWlsKShpdCk7XG59OyIsIi8vIHRvIGluZGV4ZWQgb2JqZWN0LCB0b09iamVjdCB3aXRoIGZhbGxiYWNrIGZvciBub24tYXJyYXktbGlrZSBFUzMgc3RyaW5nc1xudmFyIElPYmplY3QgPSByZXF1aXJlKCcuL19pb2JqZWN0JylcbiAgLCBkZWZpbmVkID0gcmVxdWlyZSgnLi9fZGVmaW5lZCcpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdCl7XG4gIHJldHVybiBJT2JqZWN0KGRlZmluZWQoaXQpKTtcbn07IiwiLy8gNy4xLjE1IFRvTGVuZ3RoXG52YXIgdG9JbnRlZ2VyID0gcmVxdWlyZSgnLi9fdG8taW50ZWdlcicpXG4gICwgbWluICAgICAgID0gTWF0aC5taW47XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0KXtcbiAgcmV0dXJuIGl0ID4gMCA/IG1pbih0b0ludGVnZXIoaXQpLCAweDFmZmZmZmZmZmZmZmZmKSA6IDA7IC8vIHBvdygyLCA1MykgLSAxID09IDkwMDcxOTkyNTQ3NDA5OTFcbn07IiwiLy8gNy4xLjEzIFRvT2JqZWN0KGFyZ3VtZW50KVxudmFyIGRlZmluZWQgPSByZXF1aXJlKCcuL19kZWZpbmVkJyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0KXtcbiAgcmV0dXJuIE9iamVjdChkZWZpbmVkKGl0KSk7XG59OyIsIi8vIDcuMS4xIFRvUHJpbWl0aXZlKGlucHV0IFssIFByZWZlcnJlZFR5cGVdKVxudmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi9faXMtb2JqZWN0Jyk7XG4vLyBpbnN0ZWFkIG9mIHRoZSBFUzYgc3BlYyB2ZXJzaW9uLCB3ZSBkaWRuJ3QgaW1wbGVtZW50IEBAdG9QcmltaXRpdmUgY2FzZVxuLy8gYW5kIHRoZSBzZWNvbmQgYXJndW1lbnQgLSBmbGFnIC0gcHJlZmVycmVkIHR5cGUgaXMgYSBzdHJpbmdcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXQsIFMpe1xuICBpZighaXNPYmplY3QoaXQpKXJldHVybiBpdDtcbiAgdmFyIGZuLCB2YWw7XG4gIGlmKFMgJiYgdHlwZW9mIChmbiA9IGl0LnRvU3RyaW5nKSA9PSAnZnVuY3Rpb24nICYmICFpc09iamVjdCh2YWwgPSBmbi5jYWxsKGl0KSkpcmV0dXJuIHZhbDtcbiAgaWYodHlwZW9mIChmbiA9IGl0LnZhbHVlT2YpID09ICdmdW5jdGlvbicgJiYgIWlzT2JqZWN0KHZhbCA9IGZuLmNhbGwoaXQpKSlyZXR1cm4gdmFsO1xuICBpZighUyAmJiB0eXBlb2YgKGZuID0gaXQudG9TdHJpbmcpID09ICdmdW5jdGlvbicgJiYgIWlzT2JqZWN0KHZhbCA9IGZuLmNhbGwoaXQpKSlyZXR1cm4gdmFsO1xuICB0aHJvdyBUeXBlRXJyb3IoXCJDYW4ndCBjb252ZXJ0IG9iamVjdCB0byBwcmltaXRpdmUgdmFsdWVcIik7XG59OyIsInZhciBpZCA9IDBcbiAgLCBweCA9IE1hdGgucmFuZG9tKCk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGtleSl7XG4gIHJldHVybiAnU3ltYm9sKCcuY29uY2F0KGtleSA9PT0gdW5kZWZpbmVkID8gJycgOiBrZXksICcpXycsICgrK2lkICsgcHgpLnRvU3RyaW5nKDM2KSk7XG59OyIsInZhciBnbG9iYWwgICAgICAgICA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpXHJcbiAgLCBjb3JlICAgICAgICAgICA9IHJlcXVpcmUoJy4vX2NvcmUnKVxyXG4gICwgTElCUkFSWSAgICAgICAgPSByZXF1aXJlKCcuL19saWJyYXJ5JylcclxuICAsIHdrc0V4dCAgICAgICAgID0gcmVxdWlyZSgnLi9fd2tzLWV4dCcpXHJcbiAgLCBkZWZpbmVQcm9wZXJ0eSA9IHJlcXVpcmUoJy4vX29iamVjdC1kcCcpLmY7XHJcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24obmFtZSl7XHJcbiAgdmFyICRTeW1ib2wgPSBjb3JlLlN5bWJvbCB8fCAoY29yZS5TeW1ib2wgPSBMSUJSQVJZID8ge30gOiBnbG9iYWwuU3ltYm9sIHx8IHt9KTtcclxuICBpZihuYW1lLmNoYXJBdCgwKSAhPSAnXycgJiYgIShuYW1lIGluICRTeW1ib2wpKWRlZmluZVByb3BlcnR5KCRTeW1ib2wsIG5hbWUsIHt2YWx1ZTogd2tzRXh0LmYobmFtZSl9KTtcclxufTsiLCJleHBvcnRzLmYgPSByZXF1aXJlKCcuL193a3MnKTsiLCJ2YXIgc3RvcmUgICAgICA9IHJlcXVpcmUoJy4vX3NoYXJlZCcpKCd3a3MnKVxuICAsIHVpZCAgICAgICAgPSByZXF1aXJlKCcuL191aWQnKVxuICAsIFN5bWJvbCAgICAgPSByZXF1aXJlKCcuL19nbG9iYWwnKS5TeW1ib2xcbiAgLCBVU0VfU1lNQk9MID0gdHlwZW9mIFN5bWJvbCA9PSAnZnVuY3Rpb24nO1xuXG52YXIgJGV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKG5hbWUpe1xuICByZXR1cm4gc3RvcmVbbmFtZV0gfHwgKHN0b3JlW25hbWVdID1cbiAgICBVU0VfU1lNQk9MICYmIFN5bWJvbFtuYW1lXSB8fCAoVVNFX1NZTUJPTCA/IFN5bWJvbCA6IHVpZCkoJ1N5bWJvbC4nICsgbmFtZSkpO1xufTtcblxuJGV4cG9ydHMuc3RvcmUgPSBzdG9yZTsiLCJ2YXIgY2xhc3NvZiAgID0gcmVxdWlyZSgnLi9fY2xhc3NvZicpXG4gICwgSVRFUkFUT1IgID0gcmVxdWlyZSgnLi9fd2tzJykoJ2l0ZXJhdG9yJylcbiAgLCBJdGVyYXRvcnMgPSByZXF1aXJlKCcuL19pdGVyYXRvcnMnKTtcbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9fY29yZScpLmdldEl0ZXJhdG9yTWV0aG9kID0gZnVuY3Rpb24oaXQpe1xuICBpZihpdCAhPSB1bmRlZmluZWQpcmV0dXJuIGl0W0lURVJBVE9SXVxuICAgIHx8IGl0WydAQGl0ZXJhdG9yJ11cbiAgICB8fCBJdGVyYXRvcnNbY2xhc3NvZihpdCldO1xufTsiLCJ2YXIgYW5PYmplY3QgPSByZXF1aXJlKCcuL19hbi1vYmplY3QnKVxuICAsIGdldCAgICAgID0gcmVxdWlyZSgnLi9jb3JlLmdldC1pdGVyYXRvci1tZXRob2QnKTtcbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9fY29yZScpLmdldEl0ZXJhdG9yID0gZnVuY3Rpb24oaXQpe1xuICB2YXIgaXRlckZuID0gZ2V0KGl0KTtcbiAgaWYodHlwZW9mIGl0ZXJGbiAhPSAnZnVuY3Rpb24nKXRocm93IFR5cGVFcnJvcihpdCArICcgaXMgbm90IGl0ZXJhYmxlIScpO1xuICByZXR1cm4gYW5PYmplY3QoaXRlckZuLmNhbGwoaXQpKTtcbn07IiwiJ3VzZSBzdHJpY3QnO1xudmFyIGFkZFRvVW5zY29wYWJsZXMgPSByZXF1aXJlKCcuL19hZGQtdG8tdW5zY29wYWJsZXMnKVxuICAsIHN0ZXAgICAgICAgICAgICAgPSByZXF1aXJlKCcuL19pdGVyLXN0ZXAnKVxuICAsIEl0ZXJhdG9ycyAgICAgICAgPSByZXF1aXJlKCcuL19pdGVyYXRvcnMnKVxuICAsIHRvSU9iamVjdCAgICAgICAgPSByZXF1aXJlKCcuL190by1pb2JqZWN0Jyk7XG5cbi8vIDIyLjEuMy40IEFycmF5LnByb3RvdHlwZS5lbnRyaWVzKClcbi8vIDIyLjEuMy4xMyBBcnJheS5wcm90b3R5cGUua2V5cygpXG4vLyAyMi4xLjMuMjkgQXJyYXkucHJvdG90eXBlLnZhbHVlcygpXG4vLyAyMi4xLjMuMzAgQXJyYXkucHJvdG90eXBlW0BAaXRlcmF0b3JdKClcbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9faXRlci1kZWZpbmUnKShBcnJheSwgJ0FycmF5JywgZnVuY3Rpb24oaXRlcmF0ZWQsIGtpbmQpe1xuICB0aGlzLl90ID0gdG9JT2JqZWN0KGl0ZXJhdGVkKTsgLy8gdGFyZ2V0XG4gIHRoaXMuX2kgPSAwOyAgICAgICAgICAgICAgICAgICAvLyBuZXh0IGluZGV4XG4gIHRoaXMuX2sgPSBraW5kOyAgICAgICAgICAgICAgICAvLyBraW5kXG4vLyAyMi4xLjUuMi4xICVBcnJheUl0ZXJhdG9yUHJvdG90eXBlJS5uZXh0KClcbn0sIGZ1bmN0aW9uKCl7XG4gIHZhciBPICAgICA9IHRoaXMuX3RcbiAgICAsIGtpbmQgID0gdGhpcy5fa1xuICAgICwgaW5kZXggPSB0aGlzLl9pKys7XG4gIGlmKCFPIHx8IGluZGV4ID49IE8ubGVuZ3RoKXtcbiAgICB0aGlzLl90ID0gdW5kZWZpbmVkO1xuICAgIHJldHVybiBzdGVwKDEpO1xuICB9XG4gIGlmKGtpbmQgPT0gJ2tleXMnICApcmV0dXJuIHN0ZXAoMCwgaW5kZXgpO1xuICBpZihraW5kID09ICd2YWx1ZXMnKXJldHVybiBzdGVwKDAsIE9baW5kZXhdKTtcbiAgcmV0dXJuIHN0ZXAoMCwgW2luZGV4LCBPW2luZGV4XV0pO1xufSwgJ3ZhbHVlcycpO1xuXG4vLyBhcmd1bWVudHNMaXN0W0BAaXRlcmF0b3JdIGlzICVBcnJheVByb3RvX3ZhbHVlcyUgKDkuNC40LjYsIDkuNC40LjcpXG5JdGVyYXRvcnMuQXJndW1lbnRzID0gSXRlcmF0b3JzLkFycmF5O1xuXG5hZGRUb1Vuc2NvcGFibGVzKCdrZXlzJyk7XG5hZGRUb1Vuc2NvcGFibGVzKCd2YWx1ZXMnKTtcbmFkZFRvVW5zY29wYWJsZXMoJ2VudHJpZXMnKTsiLCIiLCIndXNlIHN0cmljdCc7XG52YXIgJGF0ICA9IHJlcXVpcmUoJy4vX3N0cmluZy1hdCcpKHRydWUpO1xuXG4vLyAyMS4xLjMuMjcgU3RyaW5nLnByb3RvdHlwZVtAQGl0ZXJhdG9yXSgpXG5yZXF1aXJlKCcuL19pdGVyLWRlZmluZScpKFN0cmluZywgJ1N0cmluZycsIGZ1bmN0aW9uKGl0ZXJhdGVkKXtcbiAgdGhpcy5fdCA9IFN0cmluZyhpdGVyYXRlZCk7IC8vIHRhcmdldFxuICB0aGlzLl9pID0gMDsgICAgICAgICAgICAgICAgLy8gbmV4dCBpbmRleFxuLy8gMjEuMS41LjIuMSAlU3RyaW5nSXRlcmF0b3JQcm90b3R5cGUlLm5leHQoKVxufSwgZnVuY3Rpb24oKXtcbiAgdmFyIE8gICAgID0gdGhpcy5fdFxuICAgICwgaW5kZXggPSB0aGlzLl9pXG4gICAgLCBwb2ludDtcbiAgaWYoaW5kZXggPj0gTy5sZW5ndGgpcmV0dXJuIHt2YWx1ZTogdW5kZWZpbmVkLCBkb25lOiB0cnVlfTtcbiAgcG9pbnQgPSAkYXQoTywgaW5kZXgpO1xuICB0aGlzLl9pICs9IHBvaW50Lmxlbmd0aDtcbiAgcmV0dXJuIHt2YWx1ZTogcG9pbnQsIGRvbmU6IGZhbHNlfTtcbn0pOyIsIid1c2Ugc3RyaWN0Jztcbi8vIEVDTUFTY3JpcHQgNiBzeW1ib2xzIHNoaW1cbnZhciBnbG9iYWwgICAgICAgICA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpXG4gICwgaGFzICAgICAgICAgICAgPSByZXF1aXJlKCcuL19oYXMnKVxuICAsIERFU0NSSVBUT1JTICAgID0gcmVxdWlyZSgnLi9fZGVzY3JpcHRvcnMnKVxuICAsICRleHBvcnQgICAgICAgID0gcmVxdWlyZSgnLi9fZXhwb3J0JylcbiAgLCByZWRlZmluZSAgICAgICA9IHJlcXVpcmUoJy4vX3JlZGVmaW5lJylcbiAgLCBNRVRBICAgICAgICAgICA9IHJlcXVpcmUoJy4vX21ldGEnKS5LRVlcbiAgLCAkZmFpbHMgICAgICAgICA9IHJlcXVpcmUoJy4vX2ZhaWxzJylcbiAgLCBzaGFyZWQgICAgICAgICA9IHJlcXVpcmUoJy4vX3NoYXJlZCcpXG4gICwgc2V0VG9TdHJpbmdUYWcgPSByZXF1aXJlKCcuL19zZXQtdG8tc3RyaW5nLXRhZycpXG4gICwgdWlkICAgICAgICAgICAgPSByZXF1aXJlKCcuL191aWQnKVxuICAsIHdrcyAgICAgICAgICAgID0gcmVxdWlyZSgnLi9fd2tzJylcbiAgLCB3a3NFeHQgICAgICAgICA9IHJlcXVpcmUoJy4vX3drcy1leHQnKVxuICAsIHdrc0RlZmluZSAgICAgID0gcmVxdWlyZSgnLi9fd2tzLWRlZmluZScpXG4gICwga2V5T2YgICAgICAgICAgPSByZXF1aXJlKCcuL19rZXlvZicpXG4gICwgZW51bUtleXMgICAgICAgPSByZXF1aXJlKCcuL19lbnVtLWtleXMnKVxuICAsIGlzQXJyYXkgICAgICAgID0gcmVxdWlyZSgnLi9faXMtYXJyYXknKVxuICAsIGFuT2JqZWN0ICAgICAgID0gcmVxdWlyZSgnLi9fYW4tb2JqZWN0JylcbiAgLCB0b0lPYmplY3QgICAgICA9IHJlcXVpcmUoJy4vX3RvLWlvYmplY3QnKVxuICAsIHRvUHJpbWl0aXZlICAgID0gcmVxdWlyZSgnLi9fdG8tcHJpbWl0aXZlJylcbiAgLCBjcmVhdGVEZXNjICAgICA9IHJlcXVpcmUoJy4vX3Byb3BlcnR5LWRlc2MnKVxuICAsIF9jcmVhdGUgICAgICAgID0gcmVxdWlyZSgnLi9fb2JqZWN0LWNyZWF0ZScpXG4gICwgZ09QTkV4dCAgICAgICAgPSByZXF1aXJlKCcuL19vYmplY3QtZ29wbi1leHQnKVxuICAsICRHT1BEICAgICAgICAgID0gcmVxdWlyZSgnLi9fb2JqZWN0LWdvcGQnKVxuICAsICREUCAgICAgICAgICAgID0gcmVxdWlyZSgnLi9fb2JqZWN0LWRwJylcbiAgLCAka2V5cyAgICAgICAgICA9IHJlcXVpcmUoJy4vX29iamVjdC1rZXlzJylcbiAgLCBnT1BEICAgICAgICAgICA9ICRHT1BELmZcbiAgLCBkUCAgICAgICAgICAgICA9ICREUC5mXG4gICwgZ09QTiAgICAgICAgICAgPSBnT1BORXh0LmZcbiAgLCAkU3ltYm9sICAgICAgICA9IGdsb2JhbC5TeW1ib2xcbiAgLCAkSlNPTiAgICAgICAgICA9IGdsb2JhbC5KU09OXG4gICwgX3N0cmluZ2lmeSAgICAgPSAkSlNPTiAmJiAkSlNPTi5zdHJpbmdpZnlcbiAgLCBQUk9UT1RZUEUgICAgICA9ICdwcm90b3R5cGUnXG4gICwgSElEREVOICAgICAgICAgPSB3a3MoJ19oaWRkZW4nKVxuICAsIFRPX1BSSU1JVElWRSAgID0gd2tzKCd0b1ByaW1pdGl2ZScpXG4gICwgaXNFbnVtICAgICAgICAgPSB7fS5wcm9wZXJ0eUlzRW51bWVyYWJsZVxuICAsIFN5bWJvbFJlZ2lzdHJ5ID0gc2hhcmVkKCdzeW1ib2wtcmVnaXN0cnknKVxuICAsIEFsbFN5bWJvbHMgICAgID0gc2hhcmVkKCdzeW1ib2xzJylcbiAgLCBPUFN5bWJvbHMgICAgICA9IHNoYXJlZCgnb3Atc3ltYm9scycpXG4gICwgT2JqZWN0UHJvdG8gICAgPSBPYmplY3RbUFJPVE9UWVBFXVxuICAsIFVTRV9OQVRJVkUgICAgID0gdHlwZW9mICRTeW1ib2wgPT0gJ2Z1bmN0aW9uJ1xuICAsIFFPYmplY3QgICAgICAgID0gZ2xvYmFsLlFPYmplY3Q7XG4vLyBEb24ndCB1c2Ugc2V0dGVycyBpbiBRdCBTY3JpcHQsIGh0dHBzOi8vZ2l0aHViLmNvbS96bG9pcm9jay9jb3JlLWpzL2lzc3Vlcy8xNzNcbnZhciBzZXR0ZXIgPSAhUU9iamVjdCB8fCAhUU9iamVjdFtQUk9UT1RZUEVdIHx8ICFRT2JqZWN0W1BST1RPVFlQRV0uZmluZENoaWxkO1xuXG4vLyBmYWxsYmFjayBmb3Igb2xkIEFuZHJvaWQsIGh0dHBzOi8vY29kZS5nb29nbGUuY29tL3AvdjgvaXNzdWVzL2RldGFpbD9pZD02ODdcbnZhciBzZXRTeW1ib2xEZXNjID0gREVTQ1JJUFRPUlMgJiYgJGZhaWxzKGZ1bmN0aW9uKCl7XG4gIHJldHVybiBfY3JlYXRlKGRQKHt9LCAnYScsIHtcbiAgICBnZXQ6IGZ1bmN0aW9uKCl7IHJldHVybiBkUCh0aGlzLCAnYScsIHt2YWx1ZTogN30pLmE7IH1cbiAgfSkpLmEgIT0gNztcbn0pID8gZnVuY3Rpb24oaXQsIGtleSwgRCl7XG4gIHZhciBwcm90b0Rlc2MgPSBnT1BEKE9iamVjdFByb3RvLCBrZXkpO1xuICBpZihwcm90b0Rlc2MpZGVsZXRlIE9iamVjdFByb3RvW2tleV07XG4gIGRQKGl0LCBrZXksIEQpO1xuICBpZihwcm90b0Rlc2MgJiYgaXQgIT09IE9iamVjdFByb3RvKWRQKE9iamVjdFByb3RvLCBrZXksIHByb3RvRGVzYyk7XG59IDogZFA7XG5cbnZhciB3cmFwID0gZnVuY3Rpb24odGFnKXtcbiAgdmFyIHN5bSA9IEFsbFN5bWJvbHNbdGFnXSA9IF9jcmVhdGUoJFN5bWJvbFtQUk9UT1RZUEVdKTtcbiAgc3ltLl9rID0gdGFnO1xuICByZXR1cm4gc3ltO1xufTtcblxudmFyIGlzU3ltYm9sID0gVVNFX05BVElWRSAmJiB0eXBlb2YgJFN5bWJvbC5pdGVyYXRvciA9PSAnc3ltYm9sJyA/IGZ1bmN0aW9uKGl0KXtcbiAgcmV0dXJuIHR5cGVvZiBpdCA9PSAnc3ltYm9sJztcbn0gOiBmdW5jdGlvbihpdCl7XG4gIHJldHVybiBpdCBpbnN0YW5jZW9mICRTeW1ib2w7XG59O1xuXG52YXIgJGRlZmluZVByb3BlcnR5ID0gZnVuY3Rpb24gZGVmaW5lUHJvcGVydHkoaXQsIGtleSwgRCl7XG4gIGlmKGl0ID09PSBPYmplY3RQcm90bykkZGVmaW5lUHJvcGVydHkoT1BTeW1ib2xzLCBrZXksIEQpO1xuICBhbk9iamVjdChpdCk7XG4gIGtleSA9IHRvUHJpbWl0aXZlKGtleSwgdHJ1ZSk7XG4gIGFuT2JqZWN0KEQpO1xuICBpZihoYXMoQWxsU3ltYm9scywga2V5KSl7XG4gICAgaWYoIUQuZW51bWVyYWJsZSl7XG4gICAgICBpZighaGFzKGl0LCBISURERU4pKWRQKGl0LCBISURERU4sIGNyZWF0ZURlc2MoMSwge30pKTtcbiAgICAgIGl0W0hJRERFTl1ba2V5XSA9IHRydWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmKGhhcyhpdCwgSElEREVOKSAmJiBpdFtISURERU5dW2tleV0paXRbSElEREVOXVtrZXldID0gZmFsc2U7XG4gICAgICBEID0gX2NyZWF0ZShELCB7ZW51bWVyYWJsZTogY3JlYXRlRGVzYygwLCBmYWxzZSl9KTtcbiAgICB9IHJldHVybiBzZXRTeW1ib2xEZXNjKGl0LCBrZXksIEQpO1xuICB9IHJldHVybiBkUChpdCwga2V5LCBEKTtcbn07XG52YXIgJGRlZmluZVByb3BlcnRpZXMgPSBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKGl0LCBQKXtcbiAgYW5PYmplY3QoaXQpO1xuICB2YXIga2V5cyA9IGVudW1LZXlzKFAgPSB0b0lPYmplY3QoUCkpXG4gICAgLCBpICAgID0gMFxuICAgICwgbCA9IGtleXMubGVuZ3RoXG4gICAgLCBrZXk7XG4gIHdoaWxlKGwgPiBpKSRkZWZpbmVQcm9wZXJ0eShpdCwga2V5ID0ga2V5c1tpKytdLCBQW2tleV0pO1xuICByZXR1cm4gaXQ7XG59O1xudmFyICRjcmVhdGUgPSBmdW5jdGlvbiBjcmVhdGUoaXQsIFApe1xuICByZXR1cm4gUCA9PT0gdW5kZWZpbmVkID8gX2NyZWF0ZShpdCkgOiAkZGVmaW5lUHJvcGVydGllcyhfY3JlYXRlKGl0KSwgUCk7XG59O1xudmFyICRwcm9wZXJ0eUlzRW51bWVyYWJsZSA9IGZ1bmN0aW9uIHByb3BlcnR5SXNFbnVtZXJhYmxlKGtleSl7XG4gIHZhciBFID0gaXNFbnVtLmNhbGwodGhpcywga2V5ID0gdG9QcmltaXRpdmUoa2V5LCB0cnVlKSk7XG4gIGlmKHRoaXMgPT09IE9iamVjdFByb3RvICYmIGhhcyhBbGxTeW1ib2xzLCBrZXkpICYmICFoYXMoT1BTeW1ib2xzLCBrZXkpKXJldHVybiBmYWxzZTtcbiAgcmV0dXJuIEUgfHwgIWhhcyh0aGlzLCBrZXkpIHx8ICFoYXMoQWxsU3ltYm9scywga2V5KSB8fCBoYXModGhpcywgSElEREVOKSAmJiB0aGlzW0hJRERFTl1ba2V5XSA/IEUgOiB0cnVlO1xufTtcbnZhciAkZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yID0gZnVuY3Rpb24gZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKGl0LCBrZXkpe1xuICBpdCAgPSB0b0lPYmplY3QoaXQpO1xuICBrZXkgPSB0b1ByaW1pdGl2ZShrZXksIHRydWUpO1xuICBpZihpdCA9PT0gT2JqZWN0UHJvdG8gJiYgaGFzKEFsbFN5bWJvbHMsIGtleSkgJiYgIWhhcyhPUFN5bWJvbHMsIGtleSkpcmV0dXJuO1xuICB2YXIgRCA9IGdPUEQoaXQsIGtleSk7XG4gIGlmKEQgJiYgaGFzKEFsbFN5bWJvbHMsIGtleSkgJiYgIShoYXMoaXQsIEhJRERFTikgJiYgaXRbSElEREVOXVtrZXldKSlELmVudW1lcmFibGUgPSB0cnVlO1xuICByZXR1cm4gRDtcbn07XG52YXIgJGdldE93blByb3BlcnR5TmFtZXMgPSBmdW5jdGlvbiBnZXRPd25Qcm9wZXJ0eU5hbWVzKGl0KXtcbiAgdmFyIG5hbWVzICA9IGdPUE4odG9JT2JqZWN0KGl0KSlcbiAgICAsIHJlc3VsdCA9IFtdXG4gICAgLCBpICAgICAgPSAwXG4gICAgLCBrZXk7XG4gIHdoaWxlKG5hbWVzLmxlbmd0aCA+IGkpe1xuICAgIGlmKCFoYXMoQWxsU3ltYm9scywga2V5ID0gbmFtZXNbaSsrXSkgJiYga2V5ICE9IEhJRERFTiAmJiBrZXkgIT0gTUVUQSlyZXN1bHQucHVzaChrZXkpO1xuICB9IHJldHVybiByZXN1bHQ7XG59O1xudmFyICRnZXRPd25Qcm9wZXJ0eVN5bWJvbHMgPSBmdW5jdGlvbiBnZXRPd25Qcm9wZXJ0eVN5bWJvbHMoaXQpe1xuICB2YXIgSVNfT1AgID0gaXQgPT09IE9iamVjdFByb3RvXG4gICAgLCBuYW1lcyAgPSBnT1BOKElTX09QID8gT1BTeW1ib2xzIDogdG9JT2JqZWN0KGl0KSlcbiAgICAsIHJlc3VsdCA9IFtdXG4gICAgLCBpICAgICAgPSAwXG4gICAgLCBrZXk7XG4gIHdoaWxlKG5hbWVzLmxlbmd0aCA+IGkpe1xuICAgIGlmKGhhcyhBbGxTeW1ib2xzLCBrZXkgPSBuYW1lc1tpKytdKSAmJiAoSVNfT1AgPyBoYXMoT2JqZWN0UHJvdG8sIGtleSkgOiB0cnVlKSlyZXN1bHQucHVzaChBbGxTeW1ib2xzW2tleV0pO1xuICB9IHJldHVybiByZXN1bHQ7XG59O1xuXG4vLyAxOS40LjEuMSBTeW1ib2woW2Rlc2NyaXB0aW9uXSlcbmlmKCFVU0VfTkFUSVZFKXtcbiAgJFN5bWJvbCA9IGZ1bmN0aW9uIFN5bWJvbCgpe1xuICAgIGlmKHRoaXMgaW5zdGFuY2VvZiAkU3ltYm9sKXRocm93IFR5cGVFcnJvcignU3ltYm9sIGlzIG5vdCBhIGNvbnN0cnVjdG9yIScpO1xuICAgIHZhciB0YWcgPSB1aWQoYXJndW1lbnRzLmxlbmd0aCA+IDAgPyBhcmd1bWVudHNbMF0gOiB1bmRlZmluZWQpO1xuICAgIHZhciAkc2V0ID0gZnVuY3Rpb24odmFsdWUpe1xuICAgICAgaWYodGhpcyA9PT0gT2JqZWN0UHJvdG8pJHNldC5jYWxsKE9QU3ltYm9scywgdmFsdWUpO1xuICAgICAgaWYoaGFzKHRoaXMsIEhJRERFTikgJiYgaGFzKHRoaXNbSElEREVOXSwgdGFnKSl0aGlzW0hJRERFTl1bdGFnXSA9IGZhbHNlO1xuICAgICAgc2V0U3ltYm9sRGVzYyh0aGlzLCB0YWcsIGNyZWF0ZURlc2MoMSwgdmFsdWUpKTtcbiAgICB9O1xuICAgIGlmKERFU0NSSVBUT1JTICYmIHNldHRlcilzZXRTeW1ib2xEZXNjKE9iamVjdFByb3RvLCB0YWcsIHtjb25maWd1cmFibGU6IHRydWUsIHNldDogJHNldH0pO1xuICAgIHJldHVybiB3cmFwKHRhZyk7XG4gIH07XG4gIHJlZGVmaW5lKCRTeW1ib2xbUFJPVE9UWVBFXSwgJ3RvU3RyaW5nJywgZnVuY3Rpb24gdG9TdHJpbmcoKXtcbiAgICByZXR1cm4gdGhpcy5faztcbiAgfSk7XG5cbiAgJEdPUEQuZiA9ICRnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3I7XG4gICREUC5mICAgPSAkZGVmaW5lUHJvcGVydHk7XG4gIHJlcXVpcmUoJy4vX29iamVjdC1nb3BuJykuZiA9IGdPUE5FeHQuZiA9ICRnZXRPd25Qcm9wZXJ0eU5hbWVzO1xuICByZXF1aXJlKCcuL19vYmplY3QtcGllJykuZiAgPSAkcHJvcGVydHlJc0VudW1lcmFibGU7XG4gIHJlcXVpcmUoJy4vX29iamVjdC1nb3BzJykuZiA9ICRnZXRPd25Qcm9wZXJ0eVN5bWJvbHM7XG5cbiAgaWYoREVTQ1JJUFRPUlMgJiYgIXJlcXVpcmUoJy4vX2xpYnJhcnknKSl7XG4gICAgcmVkZWZpbmUoT2JqZWN0UHJvdG8sICdwcm9wZXJ0eUlzRW51bWVyYWJsZScsICRwcm9wZXJ0eUlzRW51bWVyYWJsZSwgdHJ1ZSk7XG4gIH1cblxuICB3a3NFeHQuZiA9IGZ1bmN0aW9uKG5hbWUpe1xuICAgIHJldHVybiB3cmFwKHdrcyhuYW1lKSk7XG4gIH1cbn1cblxuJGV4cG9ydCgkZXhwb3J0LkcgKyAkZXhwb3J0LlcgKyAkZXhwb3J0LkYgKiAhVVNFX05BVElWRSwge1N5bWJvbDogJFN5bWJvbH0pO1xuXG5mb3IodmFyIHN5bWJvbHMgPSAoXG4gIC8vIDE5LjQuMi4yLCAxOS40LjIuMywgMTkuNC4yLjQsIDE5LjQuMi42LCAxOS40LjIuOCwgMTkuNC4yLjksIDE5LjQuMi4xMCwgMTkuNC4yLjExLCAxOS40LjIuMTIsIDE5LjQuMi4xMywgMTkuNC4yLjE0XG4gICdoYXNJbnN0YW5jZSxpc0NvbmNhdFNwcmVhZGFibGUsaXRlcmF0b3IsbWF0Y2gscmVwbGFjZSxzZWFyY2gsc3BlY2llcyxzcGxpdCx0b1ByaW1pdGl2ZSx0b1N0cmluZ1RhZyx1bnNjb3BhYmxlcydcbikuc3BsaXQoJywnKSwgaSA9IDA7IHN5bWJvbHMubGVuZ3RoID4gaTsgKXdrcyhzeW1ib2xzW2krK10pO1xuXG5mb3IodmFyIHN5bWJvbHMgPSAka2V5cyh3a3Muc3RvcmUpLCBpID0gMDsgc3ltYm9scy5sZW5ndGggPiBpOyApd2tzRGVmaW5lKHN5bWJvbHNbaSsrXSk7XG5cbiRleHBvcnQoJGV4cG9ydC5TICsgJGV4cG9ydC5GICogIVVTRV9OQVRJVkUsICdTeW1ib2wnLCB7XG4gIC8vIDE5LjQuMi4xIFN5bWJvbC5mb3Ioa2V5KVxuICAnZm9yJzogZnVuY3Rpb24oa2V5KXtcbiAgICByZXR1cm4gaGFzKFN5bWJvbFJlZ2lzdHJ5LCBrZXkgKz0gJycpXG4gICAgICA/IFN5bWJvbFJlZ2lzdHJ5W2tleV1cbiAgICAgIDogU3ltYm9sUmVnaXN0cnlba2V5XSA9ICRTeW1ib2woa2V5KTtcbiAgfSxcbiAgLy8gMTkuNC4yLjUgU3ltYm9sLmtleUZvcihzeW0pXG4gIGtleUZvcjogZnVuY3Rpb24ga2V5Rm9yKGtleSl7XG4gICAgaWYoaXNTeW1ib2woa2V5KSlyZXR1cm4ga2V5T2YoU3ltYm9sUmVnaXN0cnksIGtleSk7XG4gICAgdGhyb3cgVHlwZUVycm9yKGtleSArICcgaXMgbm90IGEgc3ltYm9sIScpO1xuICB9LFxuICB1c2VTZXR0ZXI6IGZ1bmN0aW9uKCl7IHNldHRlciA9IHRydWU7IH0sXG4gIHVzZVNpbXBsZTogZnVuY3Rpb24oKXsgc2V0dGVyID0gZmFsc2U7IH1cbn0pO1xuXG4kZXhwb3J0KCRleHBvcnQuUyArICRleHBvcnQuRiAqICFVU0VfTkFUSVZFLCAnT2JqZWN0Jywge1xuICAvLyAxOS4xLjIuMiBPYmplY3QuY3JlYXRlKE8gWywgUHJvcGVydGllc10pXG4gIGNyZWF0ZTogJGNyZWF0ZSxcbiAgLy8gMTkuMS4yLjQgT2JqZWN0LmRlZmluZVByb3BlcnR5KE8sIFAsIEF0dHJpYnV0ZXMpXG4gIGRlZmluZVByb3BlcnR5OiAkZGVmaW5lUHJvcGVydHksXG4gIC8vIDE5LjEuMi4zIE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKE8sIFByb3BlcnRpZXMpXG4gIGRlZmluZVByb3BlcnRpZXM6ICRkZWZpbmVQcm9wZXJ0aWVzLFxuICAvLyAxOS4xLjIuNiBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKE8sIFApXG4gIGdldE93blByb3BlcnR5RGVzY3JpcHRvcjogJGdldE93blByb3BlcnR5RGVzY3JpcHRvcixcbiAgLy8gMTkuMS4yLjcgT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMoTylcbiAgZ2V0T3duUHJvcGVydHlOYW1lczogJGdldE93blByb3BlcnR5TmFtZXMsXG4gIC8vIDE5LjEuMi44IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMoTylcbiAgZ2V0T3duUHJvcGVydHlTeW1ib2xzOiAkZ2V0T3duUHJvcGVydHlTeW1ib2xzXG59KTtcblxuLy8gMjQuMy4yIEpTT04uc3RyaW5naWZ5KHZhbHVlIFssIHJlcGxhY2VyIFssIHNwYWNlXV0pXG4kSlNPTiAmJiAkZXhwb3J0KCRleHBvcnQuUyArICRleHBvcnQuRiAqICghVVNFX05BVElWRSB8fCAkZmFpbHMoZnVuY3Rpb24oKXtcbiAgdmFyIFMgPSAkU3ltYm9sKCk7XG4gIC8vIE1TIEVkZ2UgY29udmVydHMgc3ltYm9sIHZhbHVlcyB0byBKU09OIGFzIHt9XG4gIC8vIFdlYktpdCBjb252ZXJ0cyBzeW1ib2wgdmFsdWVzIHRvIEpTT04gYXMgbnVsbFxuICAvLyBWOCB0aHJvd3Mgb24gYm94ZWQgc3ltYm9sc1xuICByZXR1cm4gX3N0cmluZ2lmeShbU10pICE9ICdbbnVsbF0nIHx8IF9zdHJpbmdpZnkoe2E6IFN9KSAhPSAne30nIHx8IF9zdHJpbmdpZnkoT2JqZWN0KFMpKSAhPSAne30nO1xufSkpLCAnSlNPTicsIHtcbiAgc3RyaW5naWZ5OiBmdW5jdGlvbiBzdHJpbmdpZnkoaXQpe1xuICAgIGlmKGl0ID09PSB1bmRlZmluZWQgfHwgaXNTeW1ib2woaXQpKXJldHVybjsgLy8gSUU4IHJldHVybnMgc3RyaW5nIG9uIHVuZGVmaW5lZFxuICAgIHZhciBhcmdzID0gW2l0XVxuICAgICAgLCBpICAgID0gMVxuICAgICAgLCByZXBsYWNlciwgJHJlcGxhY2VyO1xuICAgIHdoaWxlKGFyZ3VtZW50cy5sZW5ndGggPiBpKWFyZ3MucHVzaChhcmd1bWVudHNbaSsrXSk7XG4gICAgcmVwbGFjZXIgPSBhcmdzWzFdO1xuICAgIGlmKHR5cGVvZiByZXBsYWNlciA9PSAnZnVuY3Rpb24nKSRyZXBsYWNlciA9IHJlcGxhY2VyO1xuICAgIGlmKCRyZXBsYWNlciB8fCAhaXNBcnJheShyZXBsYWNlcikpcmVwbGFjZXIgPSBmdW5jdGlvbihrZXksIHZhbHVlKXtcbiAgICAgIGlmKCRyZXBsYWNlcil2YWx1ZSA9ICRyZXBsYWNlci5jYWxsKHRoaXMsIGtleSwgdmFsdWUpO1xuICAgICAgaWYoIWlzU3ltYm9sKHZhbHVlKSlyZXR1cm4gdmFsdWU7XG4gICAgfTtcbiAgICBhcmdzWzFdID0gcmVwbGFjZXI7XG4gICAgcmV0dXJuIF9zdHJpbmdpZnkuYXBwbHkoJEpTT04sIGFyZ3MpO1xuICB9XG59KTtcblxuLy8gMTkuNC4zLjQgU3ltYm9sLnByb3RvdHlwZVtAQHRvUHJpbWl0aXZlXShoaW50KVxuJFN5bWJvbFtQUk9UT1RZUEVdW1RPX1BSSU1JVElWRV0gfHwgcmVxdWlyZSgnLi9faGlkZScpKCRTeW1ib2xbUFJPVE9UWVBFXSwgVE9fUFJJTUlUSVZFLCAkU3ltYm9sW1BST1RPVFlQRV0udmFsdWVPZik7XG4vLyAxOS40LjMuNSBTeW1ib2wucHJvdG90eXBlW0BAdG9TdHJpbmdUYWddXG5zZXRUb1N0cmluZ1RhZygkU3ltYm9sLCAnU3ltYm9sJyk7XG4vLyAyMC4yLjEuOSBNYXRoW0BAdG9TdHJpbmdUYWddXG5zZXRUb1N0cmluZ1RhZyhNYXRoLCAnTWF0aCcsIHRydWUpO1xuLy8gMjQuMy4zIEpTT05bQEB0b1N0cmluZ1RhZ11cbnNldFRvU3RyaW5nVGFnKGdsb2JhbC5KU09OLCAnSlNPTicsIHRydWUpOyIsInJlcXVpcmUoJy4vX3drcy1kZWZpbmUnKSgnYXN5bmNJdGVyYXRvcicpOyIsInJlcXVpcmUoJy4vX3drcy1kZWZpbmUnKSgnb2JzZXJ2YWJsZScpOyIsInJlcXVpcmUoJy4vZXM2LmFycmF5Lml0ZXJhdG9yJyk7XG52YXIgZ2xvYmFsICAgICAgICA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpXG4gICwgaGlkZSAgICAgICAgICA9IHJlcXVpcmUoJy4vX2hpZGUnKVxuICAsIEl0ZXJhdG9ycyAgICAgPSByZXF1aXJlKCcuL19pdGVyYXRvcnMnKVxuICAsIFRPX1NUUklOR19UQUcgPSByZXF1aXJlKCcuL193a3MnKSgndG9TdHJpbmdUYWcnKTtcblxuZm9yKHZhciBjb2xsZWN0aW9ucyA9IFsnTm9kZUxpc3QnLCAnRE9NVG9rZW5MaXN0JywgJ01lZGlhTGlzdCcsICdTdHlsZVNoZWV0TGlzdCcsICdDU1NSdWxlTGlzdCddLCBpID0gMDsgaSA8IDU7IGkrKyl7XG4gIHZhciBOQU1FICAgICAgID0gY29sbGVjdGlvbnNbaV1cbiAgICAsIENvbGxlY3Rpb24gPSBnbG9iYWxbTkFNRV1cbiAgICAsIHByb3RvICAgICAgPSBDb2xsZWN0aW9uICYmIENvbGxlY3Rpb24ucHJvdG90eXBlO1xuICBpZihwcm90byAmJiAhcHJvdG9bVE9fU1RSSU5HX1RBR10paGlkZShwcm90bywgVE9fU1RSSU5HX1RBRywgTkFNRSk7XG4gIEl0ZXJhdG9yc1tOQU1FXSA9IEl0ZXJhdG9ycy5BcnJheTtcbn0iLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG4vKipcbiAqIEluZGljYXRlcyB0aGF0IG5hdmlnYXRpb24gd2FzIGNhdXNlZCBieSBhIGNhbGwgdG8gaGlzdG9yeS5wdXNoLlxuICovXG52YXIgUFVTSCA9IGV4cG9ydHMuUFVTSCA9ICdQVVNIJztcblxuLyoqXG4gKiBJbmRpY2F0ZXMgdGhhdCBuYXZpZ2F0aW9uIHdhcyBjYXVzZWQgYnkgYSBjYWxsIHRvIGhpc3RvcnkucmVwbGFjZS5cbiAqL1xudmFyIFJFUExBQ0UgPSBleHBvcnRzLlJFUExBQ0UgPSAnUkVQTEFDRSc7XG5cbi8qKlxuICogSW5kaWNhdGVzIHRoYXQgbmF2aWdhdGlvbiB3YXMgY2F1c2VkIGJ5IHNvbWUgb3RoZXIgYWN0aW9uIHN1Y2hcbiAqIGFzIHVzaW5nIGEgYnJvd3NlcidzIGJhY2svZm9yd2FyZCBidXR0b25zIGFuZC9vciBtYW51YWxseSBtYW5pcHVsYXRpbmdcbiAqIHRoZSBVUkwgaW4gYSBicm93c2VyJ3MgbG9jYXRpb24gYmFyLiBUaGlzIGlzIHRoZSBkZWZhdWx0LlxuICpcbiAqIFNlZSBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvV2luZG93RXZlbnRIYW5kbGVycy9vbnBvcHN0YXRlXG4gKiBmb3IgbW9yZSBpbmZvcm1hdGlvbi5cbiAqL1xudmFyIFBPUCA9IGV4cG9ydHMuUE9QID0gJ1BPUCc7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5cbmZ1bmN0aW9uIF90b0NvbnN1bWFibGVBcnJheShhcnIpIHsgaWYgKEFycmF5LmlzQXJyYXkoYXJyKSkgeyBmb3IgKHZhciBpID0gMCwgYXJyMiA9IEFycmF5KGFyci5sZW5ndGgpOyBpIDwgYXJyLmxlbmd0aDsgaSsrKSB7IGFycjJbaV0gPSBhcnJbaV07IH0gcmV0dXJuIGFycjI7IH0gZWxzZSB7IHJldHVybiBBcnJheS5mcm9tKGFycik7IH0gfVxuXG52YXIgbG9vcEFzeW5jID0gZXhwb3J0cy5sb29wQXN5bmMgPSBmdW5jdGlvbiBsb29wQXN5bmModHVybnMsIHdvcmssIGNhbGxiYWNrKSB7XG4gIHZhciBjdXJyZW50VHVybiA9IDAsXG4gICAgICBpc0RvbmUgPSBmYWxzZTtcbiAgdmFyIGlzU3luYyA9IGZhbHNlLFxuICAgICAgaGFzTmV4dCA9IGZhbHNlLFxuICAgICAgZG9uZUFyZ3MgPSB2b2lkIDA7XG5cbiAgdmFyIGRvbmUgPSBmdW5jdGlvbiBkb25lKCkge1xuICAgIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gQXJyYXkoX2xlbiksIF9rZXkgPSAwOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgICBhcmdzW19rZXldID0gYXJndW1lbnRzW19rZXldO1xuICAgIH1cblxuICAgIGlzRG9uZSA9IHRydWU7XG5cbiAgICBpZiAoaXNTeW5jKSB7XG4gICAgICAvLyBJdGVyYXRlIGluc3RlYWQgb2YgcmVjdXJzaW5nIGlmIHBvc3NpYmxlLlxuICAgICAgZG9uZUFyZ3MgPSBhcmdzO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNhbGxiYWNrLmFwcGx5KHVuZGVmaW5lZCwgYXJncyk7XG4gIH07XG5cbiAgdmFyIG5leHQgPSBmdW5jdGlvbiBuZXh0KCkge1xuICAgIGlmIChpc0RvbmUpIHJldHVybjtcblxuICAgIGhhc05leHQgPSB0cnVlO1xuXG4gICAgaWYgKGlzU3luYykgcmV0dXJuOyAvLyBJdGVyYXRlIGluc3RlYWQgb2YgcmVjdXJzaW5nIGlmIHBvc3NpYmxlLlxuXG4gICAgaXNTeW5jID0gdHJ1ZTtcblxuICAgIHdoaWxlICghaXNEb25lICYmIGN1cnJlbnRUdXJuIDwgdHVybnMgJiYgaGFzTmV4dCkge1xuICAgICAgaGFzTmV4dCA9IGZhbHNlO1xuICAgICAgd29yayhjdXJyZW50VHVybisrLCBuZXh0LCBkb25lKTtcbiAgICB9XG5cbiAgICBpc1N5bmMgPSBmYWxzZTtcblxuICAgIGlmIChpc0RvbmUpIHtcbiAgICAgIC8vIFRoaXMgbWVhbnMgdGhlIGxvb3AgZmluaXNoZWQgc3luY2hyb25vdXNseS5cbiAgICAgIGNhbGxiYWNrLmFwcGx5KHVuZGVmaW5lZCwgX3RvQ29uc3VtYWJsZUFycmF5KGRvbmVBcmdzKSk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKGN1cnJlbnRUdXJuID49IHR1cm5zICYmIGhhc05leHQpIHtcbiAgICAgIGlzRG9uZSA9IHRydWU7XG4gICAgICBjYWxsYmFjaygpO1xuICAgIH1cbiAgfTtcblxuICBuZXh0KCk7XG59OyIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZ28gPSBleHBvcnRzLnJlcGxhY2VMb2NhdGlvbiA9IGV4cG9ydHMucHVzaExvY2F0aW9uID0gZXhwb3J0cy5zdGFydExpc3RlbmVyID0gZXhwb3J0cy5nZXRVc2VyQ29uZmlybWF0aW9uID0gZXhwb3J0cy5nZXRDdXJyZW50TG9jYXRpb24gPSB1bmRlZmluZWQ7XG5cbnZhciBfTG9jYXRpb25VdGlscyA9IHJlcXVpcmUoJy4vTG9jYXRpb25VdGlscycpO1xuXG52YXIgX0RPTVV0aWxzID0gcmVxdWlyZSgnLi9ET01VdGlscycpO1xuXG52YXIgX0RPTVN0YXRlU3RvcmFnZSA9IHJlcXVpcmUoJy4vRE9NU3RhdGVTdG9yYWdlJyk7XG5cbnZhciBfUGF0aFV0aWxzID0gcmVxdWlyZSgnLi9QYXRoVXRpbHMnKTtcblxuLyogZXNsaW50LWRpc2FibGUgbm8tYWxlcnQgKi9cblxuXG52YXIgUG9wU3RhdGVFdmVudCA9ICdwb3BzdGF0ZSc7XG5cbnZhciBfY3JlYXRlTG9jYXRpb24gPSBmdW5jdGlvbiBfY3JlYXRlTG9jYXRpb24oaGlzdG9yeVN0YXRlKSB7XG4gIHZhciBrZXkgPSBoaXN0b3J5U3RhdGUgJiYgaGlzdG9yeVN0YXRlLmtleTtcblxuICByZXR1cm4gKDAsIF9Mb2NhdGlvblV0aWxzLmNyZWF0ZUxvY2F0aW9uKSh7XG4gICAgcGF0aG5hbWU6IHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZSxcbiAgICBzZWFyY2g6IHdpbmRvdy5sb2NhdGlvbi5zZWFyY2gsXG4gICAgaGFzaDogd2luZG93LmxvY2F0aW9uLmhhc2gsXG4gICAgc3RhdGU6IGtleSA/ICgwLCBfRE9NU3RhdGVTdG9yYWdlLnJlYWRTdGF0ZSkoa2V5KSA6IHVuZGVmaW5lZFxuICB9LCB1bmRlZmluZWQsIGtleSk7XG59O1xuXG52YXIgZ2V0Q3VycmVudExvY2F0aW9uID0gZXhwb3J0cy5nZXRDdXJyZW50TG9jYXRpb24gPSBmdW5jdGlvbiBnZXRDdXJyZW50TG9jYXRpb24oKSB7XG4gIHZhciBoaXN0b3J5U3RhdGUgPSB2b2lkIDA7XG4gIHRyeSB7XG4gICAgaGlzdG9yeVN0YXRlID0gd2luZG93Lmhpc3Rvcnkuc3RhdGUgfHwge307XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgLy8gSUUgMTEgc29tZXRpbWVzIHRocm93cyB3aGVuIGFjY2Vzc2luZyB3aW5kb3cuaGlzdG9yeS5zdGF0ZVxuICAgIC8vIFNlZSBodHRwczovL2dpdGh1Yi5jb20vbWphY2tzb24vaGlzdG9yeS9wdWxsLzI4OVxuICAgIGhpc3RvcnlTdGF0ZSA9IHt9O1xuICB9XG5cbiAgcmV0dXJuIF9jcmVhdGVMb2NhdGlvbihoaXN0b3J5U3RhdGUpO1xufTtcblxudmFyIGdldFVzZXJDb25maXJtYXRpb24gPSBleHBvcnRzLmdldFVzZXJDb25maXJtYXRpb24gPSBmdW5jdGlvbiBnZXRVc2VyQ29uZmlybWF0aW9uKG1lc3NhZ2UsIGNhbGxiYWNrKSB7XG4gIHJldHVybiBjYWxsYmFjayh3aW5kb3cuY29uZmlybShtZXNzYWdlKSk7XG59O1xuXG52YXIgc3RhcnRMaXN0ZW5lciA9IGV4cG9ydHMuc3RhcnRMaXN0ZW5lciA9IGZ1bmN0aW9uIHN0YXJ0TGlzdGVuZXIobGlzdGVuZXIpIHtcbiAgdmFyIGhhbmRsZVBvcFN0YXRlID0gZnVuY3Rpb24gaGFuZGxlUG9wU3RhdGUoZXZlbnQpIHtcbiAgICBpZiAoZXZlbnQuc3RhdGUgIT09IHVuZGVmaW5lZCkgLy8gSWdub3JlIGV4dHJhbmVvdXMgcG9wc3RhdGUgZXZlbnRzIGluIFdlYktpdFxuICAgICAgbGlzdGVuZXIoX2NyZWF0ZUxvY2F0aW9uKGV2ZW50LnN0YXRlKSk7XG4gIH07XG5cbiAgKDAsIF9ET01VdGlscy5hZGRFdmVudExpc3RlbmVyKSh3aW5kb3csIFBvcFN0YXRlRXZlbnQsIGhhbmRsZVBvcFN0YXRlKTtcblxuICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiAoMCwgX0RPTVV0aWxzLnJlbW92ZUV2ZW50TGlzdGVuZXIpKHdpbmRvdywgUG9wU3RhdGVFdmVudCwgaGFuZGxlUG9wU3RhdGUpO1xuICB9O1xufTtcblxudmFyIHVwZGF0ZUxvY2F0aW9uID0gZnVuY3Rpb24gdXBkYXRlTG9jYXRpb24obG9jYXRpb24sIHVwZGF0ZVN0YXRlKSB7XG4gIHZhciBzdGF0ZSA9IGxvY2F0aW9uLnN0YXRlO1xuICB2YXIga2V5ID0gbG9jYXRpb24ua2V5O1xuXG5cbiAgaWYgKHN0YXRlICE9PSB1bmRlZmluZWQpICgwLCBfRE9NU3RhdGVTdG9yYWdlLnNhdmVTdGF0ZSkoa2V5LCBzdGF0ZSk7XG5cbiAgdXBkYXRlU3RhdGUoeyBrZXk6IGtleSB9LCAoMCwgX1BhdGhVdGlscy5jcmVhdGVQYXRoKShsb2NhdGlvbikpO1xufTtcblxudmFyIHB1c2hMb2NhdGlvbiA9IGV4cG9ydHMucHVzaExvY2F0aW9uID0gZnVuY3Rpb24gcHVzaExvY2F0aW9uKGxvY2F0aW9uKSB7XG4gIHJldHVybiB1cGRhdGVMb2NhdGlvbihsb2NhdGlvbiwgZnVuY3Rpb24gKHN0YXRlLCBwYXRoKSB7XG4gICAgcmV0dXJuIHdpbmRvdy5oaXN0b3J5LnB1c2hTdGF0ZShzdGF0ZSwgbnVsbCwgcGF0aCk7XG4gIH0pO1xufTtcblxudmFyIHJlcGxhY2VMb2NhdGlvbiA9IGV4cG9ydHMucmVwbGFjZUxvY2F0aW9uID0gZnVuY3Rpb24gcmVwbGFjZUxvY2F0aW9uKGxvY2F0aW9uKSB7XG4gIHJldHVybiB1cGRhdGVMb2NhdGlvbihsb2NhdGlvbiwgZnVuY3Rpb24gKHN0YXRlLCBwYXRoKSB7XG4gICAgcmV0dXJuIHdpbmRvdy5oaXN0b3J5LnJlcGxhY2VTdGF0ZShzdGF0ZSwgbnVsbCwgcGF0aCk7XG4gIH0pO1xufTtcblxudmFyIGdvID0gZXhwb3J0cy5nbyA9IGZ1bmN0aW9uIGdvKG4pIHtcbiAgaWYgKG4pIHdpbmRvdy5oaXN0b3J5LmdvKG4pO1xufTsiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLnJlYWRTdGF0ZSA9IGV4cG9ydHMuc2F2ZVN0YXRlID0gdW5kZWZpbmVkO1xuXG52YXIgX3dhcm5pbmcgPSByZXF1aXJlKCd3YXJuaW5nJyk7XG5cbnZhciBfd2FybmluZzIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF93YXJuaW5nKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxudmFyIFF1b3RhRXhjZWVkZWRFcnJvcnMgPSBbJ1F1b3RhRXhjZWVkZWRFcnJvcicsICdRVU9UQV9FWENFRURFRF9FUlInXTsgLyogZXNsaW50LWRpc2FibGUgbm8tZW1wdHkgKi9cblxuXG52YXIgU2VjdXJpdHlFcnJvciA9ICdTZWN1cml0eUVycm9yJztcbnZhciBLZXlQcmVmaXggPSAnQEBIaXN0b3J5Lyc7XG5cbnZhciBjcmVhdGVLZXkgPSBmdW5jdGlvbiBjcmVhdGVLZXkoa2V5KSB7XG4gIHJldHVybiBLZXlQcmVmaXggKyBrZXk7XG59O1xuXG52YXIgc2F2ZVN0YXRlID0gZXhwb3J0cy5zYXZlU3RhdGUgPSBmdW5jdGlvbiBzYXZlU3RhdGUoa2V5LCBzdGF0ZSkge1xuICBpZiAoIXdpbmRvdy5zZXNzaW9uU3RvcmFnZSkge1xuICAgIC8vIFNlc3Npb24gc3RvcmFnZSBpcyBub3QgYXZhaWxhYmxlIG9yIGhpZGRlbi5cbiAgICAvLyBzZXNzaW9uU3RvcmFnZSBpcyB1bmRlZmluZWQgaW4gSW50ZXJuZXQgRXhwbG9yZXIgd2hlbiBzZXJ2ZWQgdmlhIGZpbGUgcHJvdG9jb2wuXG4gICAgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyA/ICgwLCBfd2FybmluZzIuZGVmYXVsdCkoZmFsc2UsICdbaGlzdG9yeV0gVW5hYmxlIHRvIHNhdmUgc3RhdGU7IHNlc3Npb25TdG9yYWdlIGlzIG5vdCBhdmFpbGFibGUnKSA6IHZvaWQgMDtcbiAgICByZXR1cm47XG4gIH1cblxuICB0cnkge1xuICAgIGlmIChzdGF0ZSA9PSBudWxsKSB7XG4gICAgICB3aW5kb3cuc2Vzc2lvblN0b3JhZ2UucmVtb3ZlSXRlbShjcmVhdGVLZXkoa2V5KSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHdpbmRvdy5zZXNzaW9uU3RvcmFnZS5zZXRJdGVtKGNyZWF0ZUtleShrZXkpLCBKU09OLnN0cmluZ2lmeShzdGF0ZSkpO1xuICAgIH1cbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBpZiAoZXJyb3IubmFtZSA9PT0gU2VjdXJpdHlFcnJvcikge1xuICAgICAgLy8gQmxvY2tpbmcgY29va2llcyBpbiBDaHJvbWUvRmlyZWZveC9TYWZhcmkgdGhyb3dzIFNlY3VyaXR5RXJyb3Igb24gYW55XG4gICAgICAvLyBhdHRlbXB0IHRvIGFjY2VzcyB3aW5kb3cuc2Vzc2lvblN0b3JhZ2UuXG4gICAgICBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nID8gKDAsIF93YXJuaW5nMi5kZWZhdWx0KShmYWxzZSwgJ1toaXN0b3J5XSBVbmFibGUgdG8gc2F2ZSBzdGF0ZTsgc2Vzc2lvblN0b3JhZ2UgaXMgbm90IGF2YWlsYWJsZSBkdWUgdG8gc2VjdXJpdHkgc2V0dGluZ3MnKSA6IHZvaWQgMDtcblxuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmIChRdW90YUV4Y2VlZGVkRXJyb3JzLmluZGV4T2YoZXJyb3IubmFtZSkgPj0gMCAmJiB3aW5kb3cuc2Vzc2lvblN0b3JhZ2UubGVuZ3RoID09PSAwKSB7XG4gICAgICAvLyBTYWZhcmkgXCJwcml2YXRlIG1vZGVcIiB0aHJvd3MgUXVvdGFFeGNlZWRlZEVycm9yLlxuICAgICAgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyA/ICgwLCBfd2FybmluZzIuZGVmYXVsdCkoZmFsc2UsICdbaGlzdG9yeV0gVW5hYmxlIHRvIHNhdmUgc3RhdGU7IHNlc3Npb25TdG9yYWdlIGlzIG5vdCBhdmFpbGFibGUgaW4gU2FmYXJpIHByaXZhdGUgbW9kZScpIDogdm9pZCAwO1xuXG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhyb3cgZXJyb3I7XG4gIH1cbn07XG5cbnZhciByZWFkU3RhdGUgPSBleHBvcnRzLnJlYWRTdGF0ZSA9IGZ1bmN0aW9uIHJlYWRTdGF0ZShrZXkpIHtcbiAgdmFyIGpzb24gPSB2b2lkIDA7XG4gIHRyeSB7XG4gICAganNvbiA9IHdpbmRvdy5zZXNzaW9uU3RvcmFnZS5nZXRJdGVtKGNyZWF0ZUtleShrZXkpKTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBpZiAoZXJyb3IubmFtZSA9PT0gU2VjdXJpdHlFcnJvcikge1xuICAgICAgLy8gQmxvY2tpbmcgY29va2llcyBpbiBDaHJvbWUvRmlyZWZveC9TYWZhcmkgdGhyb3dzIFNlY3VyaXR5RXJyb3Igb24gYW55XG4gICAgICAvLyBhdHRlbXB0IHRvIGFjY2VzcyB3aW5kb3cuc2Vzc2lvblN0b3JhZ2UuXG4gICAgICBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nID8gKDAsIF93YXJuaW5nMi5kZWZhdWx0KShmYWxzZSwgJ1toaXN0b3J5XSBVbmFibGUgdG8gcmVhZCBzdGF0ZTsgc2Vzc2lvblN0b3JhZ2UgaXMgbm90IGF2YWlsYWJsZSBkdWUgdG8gc2VjdXJpdHkgc2V0dGluZ3MnKSA6IHZvaWQgMDtcblxuICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICB9XG4gIH1cblxuICBpZiAoanNvbikge1xuICAgIHRyeSB7XG4gICAgICByZXR1cm4gSlNPTi5wYXJzZShqc29uKTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgLy8gSWdub3JlIGludmFsaWQgSlNPTi5cbiAgICB9XG4gIH1cblxuICByZXR1cm4gdW5kZWZpbmVkO1xufTsiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG52YXIgYWRkRXZlbnRMaXN0ZW5lciA9IGV4cG9ydHMuYWRkRXZlbnRMaXN0ZW5lciA9IGZ1bmN0aW9uIGFkZEV2ZW50TGlzdGVuZXIobm9kZSwgZXZlbnQsIGxpc3RlbmVyKSB7XG4gIHJldHVybiBub2RlLmFkZEV2ZW50TGlzdGVuZXIgPyBub2RlLmFkZEV2ZW50TGlzdGVuZXIoZXZlbnQsIGxpc3RlbmVyLCBmYWxzZSkgOiBub2RlLmF0dGFjaEV2ZW50KCdvbicgKyBldmVudCwgbGlzdGVuZXIpO1xufTtcblxudmFyIHJlbW92ZUV2ZW50TGlzdGVuZXIgPSBleHBvcnRzLnJlbW92ZUV2ZW50TGlzdGVuZXIgPSBmdW5jdGlvbiByZW1vdmVFdmVudExpc3RlbmVyKG5vZGUsIGV2ZW50LCBsaXN0ZW5lcikge1xuICByZXR1cm4gbm9kZS5yZW1vdmVFdmVudExpc3RlbmVyID8gbm9kZS5yZW1vdmVFdmVudExpc3RlbmVyKGV2ZW50LCBsaXN0ZW5lciwgZmFsc2UpIDogbm9kZS5kZXRhY2hFdmVudCgnb24nICsgZXZlbnQsIGxpc3RlbmVyKTtcbn07XG5cbi8qKlxuICogUmV0dXJucyB0cnVlIGlmIHRoZSBIVE1MNSBoaXN0b3J5IEFQSSBpcyBzdXBwb3J0ZWQuIFRha2VuIGZyb20gTW9kZXJuaXpyLlxuICpcbiAqIGh0dHBzOi8vZ2l0aHViLmNvbS9Nb2Rlcm5penIvTW9kZXJuaXpyL2Jsb2IvbWFzdGVyL0xJQ0VOU0VcbiAqIGh0dHBzOi8vZ2l0aHViLmNvbS9Nb2Rlcm5penIvTW9kZXJuaXpyL2Jsb2IvbWFzdGVyL2ZlYXR1cmUtZGV0ZWN0cy9oaXN0b3J5LmpzXG4gKiBjaGFuZ2VkIHRvIGF2b2lkIGZhbHNlIG5lZ2F0aXZlcyBmb3IgV2luZG93cyBQaG9uZXM6IGh0dHBzOi8vZ2l0aHViLmNvbS9yZWFjdGpzL3JlYWN0LXJvdXRlci9pc3N1ZXMvNTg2XG4gKi9cbnZhciBzdXBwb3J0c0hpc3RvcnkgPSBleHBvcnRzLnN1cHBvcnRzSGlzdG9yeSA9IGZ1bmN0aW9uIHN1cHBvcnRzSGlzdG9yeSgpIHtcbiAgdmFyIHVhID0gd2luZG93Lm5hdmlnYXRvci51c2VyQWdlbnQ7XG5cbiAgaWYgKCh1YS5pbmRleE9mKCdBbmRyb2lkIDIuJykgIT09IC0xIHx8IHVhLmluZGV4T2YoJ0FuZHJvaWQgNC4wJykgIT09IC0xKSAmJiB1YS5pbmRleE9mKCdNb2JpbGUgU2FmYXJpJykgIT09IC0xICYmIHVhLmluZGV4T2YoJ0Nocm9tZScpID09PSAtMSAmJiB1YS5pbmRleE9mKCdXaW5kb3dzIFBob25lJykgPT09IC0xKSByZXR1cm4gZmFsc2U7XG5cbiAgcmV0dXJuIHdpbmRvdy5oaXN0b3J5ICYmICdwdXNoU3RhdGUnIGluIHdpbmRvdy5oaXN0b3J5O1xufTtcblxuLyoqXG4gKiBSZXR1cm5zIGZhbHNlIGlmIHVzaW5nIGdvKG4pIHdpdGggaGFzaCBoaXN0b3J5IGNhdXNlcyBhIGZ1bGwgcGFnZSByZWxvYWQuXG4gKi9cbnZhciBzdXBwb3J0c0dvV2l0aG91dFJlbG9hZFVzaW5nSGFzaCA9IGV4cG9ydHMuc3VwcG9ydHNHb1dpdGhvdXRSZWxvYWRVc2luZ0hhc2ggPSBmdW5jdGlvbiBzdXBwb3J0c0dvV2l0aG91dFJlbG9hZFVzaW5nSGFzaCgpIHtcbiAgcmV0dXJuIHdpbmRvdy5uYXZpZ2F0b3IudXNlckFnZW50LmluZGV4T2YoJ0ZpcmVmb3gnKSA9PT0gLTE7XG59OyIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbnZhciBjYW5Vc2VET00gPSBleHBvcnRzLmNhblVzZURPTSA9ICEhKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmIHdpbmRvdy5kb2N1bWVudCAmJiB3aW5kb3cuZG9jdW1lbnQuY3JlYXRlRWxlbWVudCk7IiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5yZXBsYWNlTG9jYXRpb24gPSBleHBvcnRzLnB1c2hMb2NhdGlvbiA9IGV4cG9ydHMuc3RhcnRMaXN0ZW5lciA9IGV4cG9ydHMuZ2V0Q3VycmVudExvY2F0aW9uID0gZXhwb3J0cy5nbyA9IGV4cG9ydHMuZ2V0VXNlckNvbmZpcm1hdGlvbiA9IHVuZGVmaW5lZDtcblxudmFyIF9Ccm93c2VyUHJvdG9jb2wgPSByZXF1aXJlKCcuL0Jyb3dzZXJQcm90b2NvbCcpO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2dldFVzZXJDb25maXJtYXRpb24nLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgIHJldHVybiBfQnJvd3NlclByb3RvY29sLmdldFVzZXJDb25maXJtYXRpb247XG4gIH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdnbycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgcmV0dXJuIF9Ccm93c2VyUHJvdG9jb2wuZ287XG4gIH1cbn0pO1xuXG52YXIgX3dhcm5pbmcgPSByZXF1aXJlKCd3YXJuaW5nJyk7XG5cbnZhciBfd2FybmluZzIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF93YXJuaW5nKTtcblxudmFyIF9Mb2NhdGlvblV0aWxzID0gcmVxdWlyZSgnLi9Mb2NhdGlvblV0aWxzJyk7XG5cbnZhciBfRE9NVXRpbHMgPSByZXF1aXJlKCcuL0RPTVV0aWxzJyk7XG5cbnZhciBfRE9NU3RhdGVTdG9yYWdlID0gcmVxdWlyZSgnLi9ET01TdGF0ZVN0b3JhZ2UnKTtcblxudmFyIF9QYXRoVXRpbHMgPSByZXF1aXJlKCcuL1BhdGhVdGlscycpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG52YXIgSGFzaENoYW5nZUV2ZW50ID0gJ2hhc2hjaGFuZ2UnO1xuXG52YXIgZ2V0SGFzaFBhdGggPSBmdW5jdGlvbiBnZXRIYXNoUGF0aCgpIHtcbiAgLy8gV2UgY2FuJ3QgdXNlIHdpbmRvdy5sb2NhdGlvbi5oYXNoIGhlcmUgYmVjYXVzZSBpdCdzIG5vdFxuICAvLyBjb25zaXN0ZW50IGFjcm9zcyBicm93c2VycyAtIEZpcmVmb3ggd2lsbCBwcmUtZGVjb2RlIGl0IVxuICB2YXIgaHJlZiA9IHdpbmRvdy5sb2NhdGlvbi5ocmVmO1xuICB2YXIgaW5kZXggPSBocmVmLmluZGV4T2YoJyMnKTtcbiAgcmV0dXJuIGluZGV4ID09PSAtMSA/ICcnIDogaHJlZi5zdWJzdHJpbmcoaW5kZXggKyAxKTtcbn07XG5cbnZhciBwdXNoSGFzaFBhdGggPSBmdW5jdGlvbiBwdXNoSGFzaFBhdGgocGF0aCkge1xuICByZXR1cm4gd2luZG93LmxvY2F0aW9uLmhhc2ggPSBwYXRoO1xufTtcblxudmFyIHJlcGxhY2VIYXNoUGF0aCA9IGZ1bmN0aW9uIHJlcGxhY2VIYXNoUGF0aChwYXRoKSB7XG4gIHZhciBpID0gd2luZG93LmxvY2F0aW9uLmhyZWYuaW5kZXhPZignIycpO1xuXG4gIHdpbmRvdy5sb2NhdGlvbi5yZXBsYWNlKHdpbmRvdy5sb2NhdGlvbi5ocmVmLnNsaWNlKDAsIGkgPj0gMCA/IGkgOiAwKSArICcjJyArIHBhdGgpO1xufTtcblxudmFyIGVuc3VyZVNsYXNoID0gZnVuY3Rpb24gZW5zdXJlU2xhc2goKSB7XG4gIHZhciBwYXRoID0gZ2V0SGFzaFBhdGgoKTtcblxuICBpZiAoKDAsIF9QYXRoVXRpbHMuaXNBYnNvbHV0ZVBhdGgpKHBhdGgpKSByZXR1cm4gdHJ1ZTtcblxuICByZXBsYWNlSGFzaFBhdGgoJy8nICsgcGF0aCk7XG5cbiAgcmV0dXJuIGZhbHNlO1xufTtcblxudmFyIGdldEN1cnJlbnRMb2NhdGlvbiA9IGV4cG9ydHMuZ2V0Q3VycmVudExvY2F0aW9uID0gZnVuY3Rpb24gZ2V0Q3VycmVudExvY2F0aW9uKHF1ZXJ5S2V5KSB7XG4gIHZhciBwYXRoID0gZ2V0SGFzaFBhdGgoKTtcbiAgdmFyIGtleSA9ICgwLCBfUGF0aFV0aWxzLmdldFF1ZXJ5U3RyaW5nVmFsdWVGcm9tUGF0aCkocGF0aCwgcXVlcnlLZXkpO1xuXG4gIHZhciBzdGF0ZSA9IHZvaWQgMDtcbiAgaWYgKGtleSkge1xuICAgIHBhdGggPSAoMCwgX1BhdGhVdGlscy5zdHJpcFF1ZXJ5U3RyaW5nVmFsdWVGcm9tUGF0aCkocGF0aCwgcXVlcnlLZXkpO1xuICAgIHN0YXRlID0gKDAsIF9ET01TdGF0ZVN0b3JhZ2UucmVhZFN0YXRlKShrZXkpO1xuICB9XG5cbiAgdmFyIGluaXQgPSAoMCwgX1BhdGhVdGlscy5wYXJzZVBhdGgpKHBhdGgpO1xuICBpbml0LnN0YXRlID0gc3RhdGU7XG5cbiAgcmV0dXJuICgwLCBfTG9jYXRpb25VdGlscy5jcmVhdGVMb2NhdGlvbikoaW5pdCwgdW5kZWZpbmVkLCBrZXkpO1xufTtcblxudmFyIHByZXZMb2NhdGlvbiA9IHZvaWQgMDtcblxudmFyIHN0YXJ0TGlzdGVuZXIgPSBleHBvcnRzLnN0YXJ0TGlzdGVuZXIgPSBmdW5jdGlvbiBzdGFydExpc3RlbmVyKGxpc3RlbmVyLCBxdWVyeUtleSkge1xuICB2YXIgaGFuZGxlSGFzaENoYW5nZSA9IGZ1bmN0aW9uIGhhbmRsZUhhc2hDaGFuZ2UoKSB7XG4gICAgaWYgKCFlbnN1cmVTbGFzaCgpKSByZXR1cm47IC8vIEhhc2ggcGF0aCBtdXN0IGFsd2F5cyBiZWdpbiB3aXRoIGEgL1xuXG4gICAgdmFyIGN1cnJlbnRMb2NhdGlvbiA9IGdldEN1cnJlbnRMb2NhdGlvbihxdWVyeUtleSk7XG5cbiAgICBpZiAocHJldkxvY2F0aW9uICYmIGN1cnJlbnRMb2NhdGlvbi5rZXkgJiYgcHJldkxvY2F0aW9uLmtleSA9PT0gY3VycmVudExvY2F0aW9uLmtleSkgcmV0dXJuOyAvLyBJZ25vcmUgZXh0cmFuZW91cyBoYXNoY2hhbmdlIGV2ZW50c1xuXG4gICAgcHJldkxvY2F0aW9uID0gY3VycmVudExvY2F0aW9uO1xuXG4gICAgbGlzdGVuZXIoY3VycmVudExvY2F0aW9uKTtcbiAgfTtcblxuICBlbnN1cmVTbGFzaCgpO1xuICAoMCwgX0RPTVV0aWxzLmFkZEV2ZW50TGlzdGVuZXIpKHdpbmRvdywgSGFzaENoYW5nZUV2ZW50LCBoYW5kbGVIYXNoQ2hhbmdlKTtcblxuICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiAoMCwgX0RPTVV0aWxzLnJlbW92ZUV2ZW50TGlzdGVuZXIpKHdpbmRvdywgSGFzaENoYW5nZUV2ZW50LCBoYW5kbGVIYXNoQ2hhbmdlKTtcbiAgfTtcbn07XG5cbnZhciB1cGRhdGVMb2NhdGlvbiA9IGZ1bmN0aW9uIHVwZGF0ZUxvY2F0aW9uKGxvY2F0aW9uLCBxdWVyeUtleSwgdXBkYXRlSGFzaCkge1xuICB2YXIgc3RhdGUgPSBsb2NhdGlvbi5zdGF0ZTtcbiAgdmFyIGtleSA9IGxvY2F0aW9uLmtleTtcblxuICB2YXIgcGF0aCA9ICgwLCBfUGF0aFV0aWxzLmNyZWF0ZVBhdGgpKGxvY2F0aW9uKTtcblxuICBpZiAoc3RhdGUgIT09IHVuZGVmaW5lZCkge1xuICAgIHBhdGggPSAoMCwgX1BhdGhVdGlscy5hZGRRdWVyeVN0cmluZ1ZhbHVlVG9QYXRoKShwYXRoLCBxdWVyeUtleSwga2V5KTtcbiAgICAoMCwgX0RPTVN0YXRlU3RvcmFnZS5zYXZlU3RhdGUpKGtleSwgc3RhdGUpO1xuICB9XG5cbiAgcHJldkxvY2F0aW9uID0gbG9jYXRpb247XG5cbiAgdXBkYXRlSGFzaChwYXRoKTtcbn07XG5cbnZhciBwdXNoTG9jYXRpb24gPSBleHBvcnRzLnB1c2hMb2NhdGlvbiA9IGZ1bmN0aW9uIHB1c2hMb2NhdGlvbihsb2NhdGlvbiwgcXVlcnlLZXkpIHtcbiAgcmV0dXJuIHVwZGF0ZUxvY2F0aW9uKGxvY2F0aW9uLCBxdWVyeUtleSwgZnVuY3Rpb24gKHBhdGgpIHtcbiAgICBpZiAoZ2V0SGFzaFBhdGgoKSAhPT0gcGF0aCkge1xuICAgICAgcHVzaEhhc2hQYXRoKHBhdGgpO1xuICAgIH0gZWxzZSB7XG4gICAgICBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nID8gKDAsIF93YXJuaW5nMi5kZWZhdWx0KShmYWxzZSwgJ1lvdSBjYW5ub3QgUFVTSCB0aGUgc2FtZSBwYXRoIHVzaW5nIGhhc2ggaGlzdG9yeScpIDogdm9pZCAwO1xuICAgIH1cbiAgfSk7XG59O1xuXG52YXIgcmVwbGFjZUxvY2F0aW9uID0gZXhwb3J0cy5yZXBsYWNlTG9jYXRpb24gPSBmdW5jdGlvbiByZXBsYWNlTG9jYXRpb24obG9jYXRpb24sIHF1ZXJ5S2V5KSB7XG4gIHJldHVybiB1cGRhdGVMb2NhdGlvbihsb2NhdGlvbiwgcXVlcnlLZXksIGZ1bmN0aW9uIChwYXRoKSB7XG4gICAgaWYgKGdldEhhc2hQYXRoKCkgIT09IHBhdGgpIHJlcGxhY2VIYXNoUGF0aChwYXRoKTtcbiAgfSk7XG59OyIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMubG9jYXRpb25zQXJlRXF1YWwgPSBleHBvcnRzLnN0YXRlc0FyZUVxdWFsID0gZXhwb3J0cy5jcmVhdGVMb2NhdGlvbiA9IGV4cG9ydHMuY3JlYXRlUXVlcnkgPSB1bmRlZmluZWQ7XG5cbnZhciBfdHlwZW9mID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPT09IFwic3ltYm9sXCIgPyBmdW5jdGlvbiAob2JqKSB7IHJldHVybiB0eXBlb2Ygb2JqOyB9IDogZnVuY3Rpb24gKG9iaikgeyByZXR1cm4gb2JqICYmIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqOyB9O1xuXG52YXIgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTsgZm9yICh2YXIga2V5IGluIHNvdXJjZSkgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkgeyB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldOyB9IH0gfSByZXR1cm4gdGFyZ2V0OyB9O1xuXG52YXIgX2ludmFyaWFudCA9IHJlcXVpcmUoJ2ludmFyaWFudCcpO1xuXG52YXIgX2ludmFyaWFudDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9pbnZhcmlhbnQpO1xuXG52YXIgX1BhdGhVdGlscyA9IHJlcXVpcmUoJy4vUGF0aFV0aWxzJyk7XG5cbnZhciBfQWN0aW9ucyA9IHJlcXVpcmUoJy4vQWN0aW9ucycpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG52YXIgY3JlYXRlUXVlcnkgPSBleHBvcnRzLmNyZWF0ZVF1ZXJ5ID0gZnVuY3Rpb24gY3JlYXRlUXVlcnkocHJvcHMpIHtcbiAgcmV0dXJuIF9leHRlbmRzKE9iamVjdC5jcmVhdGUobnVsbCksIHByb3BzKTtcbn07XG5cbnZhciBjcmVhdGVMb2NhdGlvbiA9IGV4cG9ydHMuY3JlYXRlTG9jYXRpb24gPSBmdW5jdGlvbiBjcmVhdGVMb2NhdGlvbigpIHtcbiAgdmFyIGlucHV0ID0gYXJndW1lbnRzLmxlbmd0aCA8PSAwIHx8IGFyZ3VtZW50c1swXSA9PT0gdW5kZWZpbmVkID8gJy8nIDogYXJndW1lbnRzWzBdO1xuICB2YXIgYWN0aW9uID0gYXJndW1lbnRzLmxlbmd0aCA8PSAxIHx8IGFyZ3VtZW50c1sxXSA9PT0gdW5kZWZpbmVkID8gX0FjdGlvbnMuUE9QIDogYXJndW1lbnRzWzFdO1xuICB2YXIga2V5ID0gYXJndW1lbnRzLmxlbmd0aCA8PSAyIHx8IGFyZ3VtZW50c1syXSA9PT0gdW5kZWZpbmVkID8gbnVsbCA6IGFyZ3VtZW50c1syXTtcblxuICB2YXIgb2JqZWN0ID0gdHlwZW9mIGlucHV0ID09PSAnc3RyaW5nJyA/ICgwLCBfUGF0aFV0aWxzLnBhcnNlUGF0aCkoaW5wdXQpIDogaW5wdXQ7XG5cbiAgdmFyIHBhdGhuYW1lID0gb2JqZWN0LnBhdGhuYW1lIHx8ICcvJztcbiAgdmFyIHNlYXJjaCA9IG9iamVjdC5zZWFyY2ggfHwgJyc7XG4gIHZhciBoYXNoID0gb2JqZWN0Lmhhc2ggfHwgJyc7XG4gIHZhciBzdGF0ZSA9IG9iamVjdC5zdGF0ZTtcblxuICByZXR1cm4ge1xuICAgIHBhdGhuYW1lOiBwYXRobmFtZSxcbiAgICBzZWFyY2g6IHNlYXJjaCxcbiAgICBoYXNoOiBoYXNoLFxuICAgIHN0YXRlOiBzdGF0ZSxcbiAgICBhY3Rpb246IGFjdGlvbixcbiAgICBrZXk6IGtleVxuICB9O1xufTtcblxudmFyIGlzRGF0ZSA9IGZ1bmN0aW9uIGlzRGF0ZShvYmplY3QpIHtcbiAgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChvYmplY3QpID09PSAnW29iamVjdCBEYXRlXSc7XG59O1xuXG52YXIgc3RhdGVzQXJlRXF1YWwgPSBleHBvcnRzLnN0YXRlc0FyZUVxdWFsID0gZnVuY3Rpb24gc3RhdGVzQXJlRXF1YWwoYSwgYikge1xuICBpZiAoYSA9PT0gYikgcmV0dXJuIHRydWU7XG5cbiAgdmFyIHR5cGVvZkEgPSB0eXBlb2YgYSA9PT0gJ3VuZGVmaW5lZCcgPyAndW5kZWZpbmVkJyA6IF90eXBlb2YoYSk7XG4gIHZhciB0eXBlb2ZCID0gdHlwZW9mIGIgPT09ICd1bmRlZmluZWQnID8gJ3VuZGVmaW5lZCcgOiBfdHlwZW9mKGIpO1xuXG4gIGlmICh0eXBlb2ZBICE9PSB0eXBlb2ZCKSByZXR1cm4gZmFsc2U7XG5cbiAgISh0eXBlb2ZBICE9PSAnZnVuY3Rpb24nKSA/IHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgPyAoMCwgX2ludmFyaWFudDIuZGVmYXVsdCkoZmFsc2UsICdZb3UgbXVzdCBub3Qgc3RvcmUgZnVuY3Rpb25zIGluIGxvY2F0aW9uIHN0YXRlJykgOiAoMCwgX2ludmFyaWFudDIuZGVmYXVsdCkoZmFsc2UpIDogdm9pZCAwO1xuXG4gIC8vIE5vdCB0aGUgc2FtZSBvYmplY3QsIGJ1dCBzYW1lIHR5cGUuXG4gIGlmICh0eXBlb2ZBID09PSAnb2JqZWN0Jykge1xuICAgICEhKGlzRGF0ZShhKSAmJiBpc0RhdGUoYikpID8gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyA/ICgwLCBfaW52YXJpYW50Mi5kZWZhdWx0KShmYWxzZSwgJ1lvdSBtdXN0IG5vdCBzdG9yZSBEYXRlIG9iamVjdHMgaW4gbG9jYXRpb24gc3RhdGUnKSA6ICgwLCBfaW52YXJpYW50Mi5kZWZhdWx0KShmYWxzZSkgOiB2b2lkIDA7XG5cbiAgICBpZiAoIUFycmF5LmlzQXJyYXkoYSkpIHJldHVybiBPYmplY3Qua2V5cyhhKS5ldmVyeShmdW5jdGlvbiAoa2V5KSB7XG4gICAgICByZXR1cm4gc3RhdGVzQXJlRXF1YWwoYVtrZXldLCBiW2tleV0pO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIEFycmF5LmlzQXJyYXkoYikgJiYgYS5sZW5ndGggPT09IGIubGVuZ3RoICYmIGEuZXZlcnkoZnVuY3Rpb24gKGl0ZW0sIGluZGV4KSB7XG4gICAgICByZXR1cm4gc3RhdGVzQXJlRXF1YWwoaXRlbSwgYltpbmRleF0pO1xuICAgIH0pO1xuICB9XG5cbiAgLy8gQWxsIG90aGVyIHNlcmlhbGl6YWJsZSB0eXBlcyAoc3RyaW5nLCBudW1iZXIsIGJvb2xlYW4pXG4gIC8vIHNob3VsZCBiZSBzdHJpY3QgZXF1YWwuXG4gIHJldHVybiBmYWxzZTtcbn07XG5cbnZhciBsb2NhdGlvbnNBcmVFcXVhbCA9IGV4cG9ydHMubG9jYXRpb25zQXJlRXF1YWwgPSBmdW5jdGlvbiBsb2NhdGlvbnNBcmVFcXVhbChhLCBiKSB7XG4gIHJldHVybiBhLmtleSA9PT0gYi5rZXkgJiZcbiAgLy8gYS5hY3Rpb24gPT09IGIuYWN0aW9uICYmIC8vIERpZmZlcmVudCBhY3Rpb24gIT09IGxvY2F0aW9uIGNoYW5nZS5cbiAgYS5wYXRobmFtZSA9PT0gYi5wYXRobmFtZSAmJiBhLnNlYXJjaCA9PT0gYi5zZWFyY2ggJiYgYS5oYXNoID09PSBiLmhhc2ggJiYgc3RhdGVzQXJlRXF1YWwoYS5zdGF0ZSwgYi5zdGF0ZSk7XG59OyIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuY3JlYXRlUGF0aCA9IGV4cG9ydHMucGFyc2VQYXRoID0gZXhwb3J0cy5nZXRRdWVyeVN0cmluZ1ZhbHVlRnJvbVBhdGggPSBleHBvcnRzLnN0cmlwUXVlcnlTdHJpbmdWYWx1ZUZyb21QYXRoID0gZXhwb3J0cy5hZGRRdWVyeVN0cmluZ1ZhbHVlVG9QYXRoID0gZXhwb3J0cy5pc0Fic29sdXRlUGF0aCA9IHVuZGVmaW5lZDtcblxudmFyIF93YXJuaW5nID0gcmVxdWlyZSgnd2FybmluZycpO1xuXG52YXIgX3dhcm5pbmcyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfd2FybmluZyk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbnZhciBpc0Fic29sdXRlUGF0aCA9IGV4cG9ydHMuaXNBYnNvbHV0ZVBhdGggPSBmdW5jdGlvbiBpc0Fic29sdXRlUGF0aChwYXRoKSB7XG4gIHJldHVybiB0eXBlb2YgcGF0aCA9PT0gJ3N0cmluZycgJiYgcGF0aC5jaGFyQXQoMCkgPT09ICcvJztcbn07XG5cbnZhciBhZGRRdWVyeVN0cmluZ1ZhbHVlVG9QYXRoID0gZXhwb3J0cy5hZGRRdWVyeVN0cmluZ1ZhbHVlVG9QYXRoID0gZnVuY3Rpb24gYWRkUXVlcnlTdHJpbmdWYWx1ZVRvUGF0aChwYXRoLCBrZXksIHZhbHVlKSB7XG4gIHZhciBfcGFyc2VQYXRoID0gcGFyc2VQYXRoKHBhdGgpO1xuXG4gIHZhciBwYXRobmFtZSA9IF9wYXJzZVBhdGgucGF0aG5hbWU7XG4gIHZhciBzZWFyY2ggPSBfcGFyc2VQYXRoLnNlYXJjaDtcbiAgdmFyIGhhc2ggPSBfcGFyc2VQYXRoLmhhc2g7XG5cblxuICByZXR1cm4gY3JlYXRlUGF0aCh7XG4gICAgcGF0aG5hbWU6IHBhdGhuYW1lLFxuICAgIHNlYXJjaDogc2VhcmNoICsgKHNlYXJjaC5pbmRleE9mKCc/JykgPT09IC0xID8gJz8nIDogJyYnKSArIGtleSArICc9JyArIHZhbHVlLFxuICAgIGhhc2g6IGhhc2hcbiAgfSk7XG59O1xuXG52YXIgc3RyaXBRdWVyeVN0cmluZ1ZhbHVlRnJvbVBhdGggPSBleHBvcnRzLnN0cmlwUXVlcnlTdHJpbmdWYWx1ZUZyb21QYXRoID0gZnVuY3Rpb24gc3RyaXBRdWVyeVN0cmluZ1ZhbHVlRnJvbVBhdGgocGF0aCwga2V5KSB7XG4gIHZhciBfcGFyc2VQYXRoMiA9IHBhcnNlUGF0aChwYXRoKTtcblxuICB2YXIgcGF0aG5hbWUgPSBfcGFyc2VQYXRoMi5wYXRobmFtZTtcbiAgdmFyIHNlYXJjaCA9IF9wYXJzZVBhdGgyLnNlYXJjaDtcbiAgdmFyIGhhc2ggPSBfcGFyc2VQYXRoMi5oYXNoO1xuXG5cbiAgcmV0dXJuIGNyZWF0ZVBhdGgoe1xuICAgIHBhdGhuYW1lOiBwYXRobmFtZSxcbiAgICBzZWFyY2g6IHNlYXJjaC5yZXBsYWNlKG5ldyBSZWdFeHAoJyhbPyZdKScgKyBrZXkgKyAnPVthLXpBLVowLTldKygmPyknKSwgZnVuY3Rpb24gKG1hdGNoLCBwcmVmaXgsIHN1ZmZpeCkge1xuICAgICAgcmV0dXJuIHByZWZpeCA9PT0gJz8nID8gcHJlZml4IDogc3VmZml4O1xuICAgIH0pLFxuICAgIGhhc2g6IGhhc2hcbiAgfSk7XG59O1xuXG52YXIgZ2V0UXVlcnlTdHJpbmdWYWx1ZUZyb21QYXRoID0gZXhwb3J0cy5nZXRRdWVyeVN0cmluZ1ZhbHVlRnJvbVBhdGggPSBmdW5jdGlvbiBnZXRRdWVyeVN0cmluZ1ZhbHVlRnJvbVBhdGgocGF0aCwga2V5KSB7XG4gIHZhciBfcGFyc2VQYXRoMyA9IHBhcnNlUGF0aChwYXRoKTtcblxuICB2YXIgc2VhcmNoID0gX3BhcnNlUGF0aDMuc2VhcmNoO1xuXG4gIHZhciBtYXRjaCA9IHNlYXJjaC5tYXRjaChuZXcgUmVnRXhwKCdbPyZdJyArIGtleSArICc9KFthLXpBLVowLTldKyknKSk7XG4gIHJldHVybiBtYXRjaCAmJiBtYXRjaFsxXTtcbn07XG5cbnZhciBleHRyYWN0UGF0aCA9IGZ1bmN0aW9uIGV4dHJhY3RQYXRoKHN0cmluZykge1xuICB2YXIgbWF0Y2ggPSBzdHJpbmcubWF0Y2goL14oaHR0cHM/Oik/XFwvXFwvW15cXC9dKi8pO1xuICByZXR1cm4gbWF0Y2ggPT0gbnVsbCA/IHN0cmluZyA6IHN0cmluZy5zdWJzdHJpbmcobWF0Y2hbMF0ubGVuZ3RoKTtcbn07XG5cbnZhciBwYXJzZVBhdGggPSBleHBvcnRzLnBhcnNlUGF0aCA9IGZ1bmN0aW9uIHBhcnNlUGF0aChwYXRoKSB7XG4gIHZhciBwYXRobmFtZSA9IGV4dHJhY3RQYXRoKHBhdGgpO1xuICB2YXIgc2VhcmNoID0gJyc7XG4gIHZhciBoYXNoID0gJyc7XG5cbiAgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyA/ICgwLCBfd2FybmluZzIuZGVmYXVsdCkocGF0aCA9PT0gcGF0aG5hbWUsICdBIHBhdGggbXVzdCBiZSBwYXRobmFtZSArIHNlYXJjaCArIGhhc2ggb25seSwgbm90IGEgZnVsbCBVUkwgbGlrZSBcIiVzXCInLCBwYXRoKSA6IHZvaWQgMDtcblxuICB2YXIgaGFzaEluZGV4ID0gcGF0aG5hbWUuaW5kZXhPZignIycpO1xuICBpZiAoaGFzaEluZGV4ICE9PSAtMSkge1xuICAgIGhhc2ggPSBwYXRobmFtZS5zdWJzdHJpbmcoaGFzaEluZGV4KTtcbiAgICBwYXRobmFtZSA9IHBhdGhuYW1lLnN1YnN0cmluZygwLCBoYXNoSW5kZXgpO1xuICB9XG5cbiAgdmFyIHNlYXJjaEluZGV4ID0gcGF0aG5hbWUuaW5kZXhPZignPycpO1xuICBpZiAoc2VhcmNoSW5kZXggIT09IC0xKSB7XG4gICAgc2VhcmNoID0gcGF0aG5hbWUuc3Vic3RyaW5nKHNlYXJjaEluZGV4KTtcbiAgICBwYXRobmFtZSA9IHBhdGhuYW1lLnN1YnN0cmluZygwLCBzZWFyY2hJbmRleCk7XG4gIH1cblxuICBpZiAocGF0aG5hbWUgPT09ICcnKSBwYXRobmFtZSA9ICcvJztcblxuICByZXR1cm4ge1xuICAgIHBhdGhuYW1lOiBwYXRobmFtZSxcbiAgICBzZWFyY2g6IHNlYXJjaCxcbiAgICBoYXNoOiBoYXNoXG4gIH07XG59O1xuXG52YXIgY3JlYXRlUGF0aCA9IGV4cG9ydHMuY3JlYXRlUGF0aCA9IGZ1bmN0aW9uIGNyZWF0ZVBhdGgobG9jYXRpb24pIHtcbiAgaWYgKGxvY2F0aW9uID09IG51bGwgfHwgdHlwZW9mIGxvY2F0aW9uID09PSAnc3RyaW5nJykgcmV0dXJuIGxvY2F0aW9uO1xuXG4gIHZhciBiYXNlbmFtZSA9IGxvY2F0aW9uLmJhc2VuYW1lO1xuICB2YXIgcGF0aG5hbWUgPSBsb2NhdGlvbi5wYXRobmFtZTtcbiAgdmFyIHNlYXJjaCA9IGxvY2F0aW9uLnNlYXJjaDtcbiAgdmFyIGhhc2ggPSBsb2NhdGlvbi5oYXNoO1xuXG4gIHZhciBwYXRoID0gKGJhc2VuYW1lIHx8ICcnKSArIHBhdGhuYW1lO1xuXG4gIGlmIChzZWFyY2ggJiYgc2VhcmNoICE9PSAnPycpIHBhdGggKz0gc2VhcmNoO1xuXG4gIGlmIChoYXNoKSBwYXRoICs9IGhhc2g7XG5cbiAgcmV0dXJuIHBhdGg7XG59OyIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMucmVwbGFjZUxvY2F0aW9uID0gZXhwb3J0cy5wdXNoTG9jYXRpb24gPSBleHBvcnRzLmdldEN1cnJlbnRMb2NhdGlvbiA9IGV4cG9ydHMuZ28gPSBleHBvcnRzLmdldFVzZXJDb25maXJtYXRpb24gPSB1bmRlZmluZWQ7XG5cbnZhciBfQnJvd3NlclByb3RvY29sID0gcmVxdWlyZSgnLi9Ccm93c2VyUHJvdG9jb2wnKTtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdnZXRVc2VyQ29uZmlybWF0aW9uJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICByZXR1cm4gX0Jyb3dzZXJQcm90b2NvbC5nZXRVc2VyQ29uZmlybWF0aW9uO1xuICB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnZ28nLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgIHJldHVybiBfQnJvd3NlclByb3RvY29sLmdvO1xuICB9XG59KTtcblxudmFyIF9Mb2NhdGlvblV0aWxzID0gcmVxdWlyZSgnLi9Mb2NhdGlvblV0aWxzJyk7XG5cbnZhciBfUGF0aFV0aWxzID0gcmVxdWlyZSgnLi9QYXRoVXRpbHMnKTtcblxudmFyIGdldEN1cnJlbnRMb2NhdGlvbiA9IGV4cG9ydHMuZ2V0Q3VycmVudExvY2F0aW9uID0gZnVuY3Rpb24gZ2V0Q3VycmVudExvY2F0aW9uKCkge1xuICByZXR1cm4gKDAsIF9Mb2NhdGlvblV0aWxzLmNyZWF0ZUxvY2F0aW9uKSh3aW5kb3cubG9jYXRpb24pO1xufTtcblxudmFyIHB1c2hMb2NhdGlvbiA9IGV4cG9ydHMucHVzaExvY2F0aW9uID0gZnVuY3Rpb24gcHVzaExvY2F0aW9uKGxvY2F0aW9uKSB7XG4gIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gKDAsIF9QYXRoVXRpbHMuY3JlYXRlUGF0aCkobG9jYXRpb24pO1xuICByZXR1cm4gZmFsc2U7IC8vIERvbid0IHVwZGF0ZSBsb2NhdGlvblxufTtcblxudmFyIHJlcGxhY2VMb2NhdGlvbiA9IGV4cG9ydHMucmVwbGFjZUxvY2F0aW9uID0gZnVuY3Rpb24gcmVwbGFjZUxvY2F0aW9uKGxvY2F0aW9uKSB7XG4gIHdpbmRvdy5sb2NhdGlvbi5yZXBsYWNlKCgwLCBfUGF0aFV0aWxzLmNyZWF0ZVBhdGgpKGxvY2F0aW9uKSk7XG4gIHJldHVybiBmYWxzZTsgLy8gRG9uJ3QgdXBkYXRlIGxvY2F0aW9uXG59OyIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07IGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHsgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTsgfSB9IH0gcmV0dXJuIHRhcmdldDsgfTtcblxudmFyIF9pbnZhcmlhbnQgPSByZXF1aXJlKCdpbnZhcmlhbnQnKTtcblxudmFyIF9pbnZhcmlhbnQyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfaW52YXJpYW50KTtcblxudmFyIF9FeGVjdXRpb25FbnZpcm9ubWVudCA9IHJlcXVpcmUoJy4vRXhlY3V0aW9uRW52aXJvbm1lbnQnKTtcblxudmFyIF9Ccm93c2VyUHJvdG9jb2wgPSByZXF1aXJlKCcuL0Jyb3dzZXJQcm90b2NvbCcpO1xuXG52YXIgQnJvd3NlclByb3RvY29sID0gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQoX0Jyb3dzZXJQcm90b2NvbCk7XG5cbnZhciBfUmVmcmVzaFByb3RvY29sID0gcmVxdWlyZSgnLi9SZWZyZXNoUHJvdG9jb2wnKTtcblxudmFyIFJlZnJlc2hQcm90b2NvbCA9IF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKF9SZWZyZXNoUHJvdG9jb2wpO1xuXG52YXIgX0RPTVV0aWxzID0gcmVxdWlyZSgnLi9ET01VdGlscycpO1xuXG52YXIgX2NyZWF0ZUhpc3RvcnkgPSByZXF1aXJlKCcuL2NyZWF0ZUhpc3RvcnknKTtcblxudmFyIF9jcmVhdGVIaXN0b3J5MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2NyZWF0ZUhpc3RvcnkpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChvYmopIHsgaWYgKG9iaiAmJiBvYmouX19lc01vZHVsZSkgeyByZXR1cm4gb2JqOyB9IGVsc2UgeyB2YXIgbmV3T2JqID0ge307IGlmIChvYmogIT0gbnVsbCkgeyBmb3IgKHZhciBrZXkgaW4gb2JqKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBrZXkpKSBuZXdPYmpba2V5XSA9IG9ialtrZXldOyB9IH0gbmV3T2JqLmRlZmF1bHQgPSBvYmo7IHJldHVybiBuZXdPYmo7IH0gfVxuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG4vKipcbiAqIENyZWF0ZXMgYW5kIHJldHVybnMgYSBoaXN0b3J5IG9iamVjdCB0aGF0IHVzZXMgSFRNTDUncyBoaXN0b3J5IEFQSVxuICogKHB1c2hTdGF0ZSwgcmVwbGFjZVN0YXRlLCBhbmQgdGhlIHBvcHN0YXRlIGV2ZW50KSB0byBtYW5hZ2UgaGlzdG9yeS5cbiAqIFRoaXMgaXMgdGhlIHJlY29tbWVuZGVkIG1ldGhvZCBvZiBtYW5hZ2luZyBoaXN0b3J5IGluIGJyb3dzZXJzIGJlY2F1c2VcbiAqIGl0IHByb3ZpZGVzIHRoZSBjbGVhbmVzdCBVUkxzLlxuICpcbiAqIE5vdGU6IEluIGJyb3dzZXJzIHRoYXQgZG8gbm90IHN1cHBvcnQgdGhlIEhUTUw1IGhpc3RvcnkgQVBJIGZ1bGxcbiAqIHBhZ2UgcmVsb2FkcyB3aWxsIGJlIHVzZWQgdG8gcHJlc2VydmUgY2xlYW4gVVJMcy4gWW91IGNhbiBmb3JjZSB0aGlzXG4gKiBiZWhhdmlvciB1c2luZyB7IGZvcmNlUmVmcmVzaDogdHJ1ZSB9IGluIG9wdGlvbnMuXG4gKi9cbnZhciBjcmVhdGVCcm93c2VySGlzdG9yeSA9IGZ1bmN0aW9uIGNyZWF0ZUJyb3dzZXJIaXN0b3J5KCkge1xuICB2YXIgb3B0aW9ucyA9IGFyZ3VtZW50cy5sZW5ndGggPD0gMCB8fCBhcmd1bWVudHNbMF0gPT09IHVuZGVmaW5lZCA/IHt9IDogYXJndW1lbnRzWzBdO1xuXG4gICFfRXhlY3V0aW9uRW52aXJvbm1lbnQuY2FuVXNlRE9NID8gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyA/ICgwLCBfaW52YXJpYW50Mi5kZWZhdWx0KShmYWxzZSwgJ0Jyb3dzZXIgaGlzdG9yeSBuZWVkcyBhIERPTScpIDogKDAsIF9pbnZhcmlhbnQyLmRlZmF1bHQpKGZhbHNlKSA6IHZvaWQgMDtcblxuICB2YXIgdXNlUmVmcmVzaCA9IG9wdGlvbnMuZm9yY2VSZWZyZXNoIHx8ICEoMCwgX0RPTVV0aWxzLnN1cHBvcnRzSGlzdG9yeSkoKTtcbiAgdmFyIFByb3RvY29sID0gdXNlUmVmcmVzaCA/IFJlZnJlc2hQcm90b2NvbCA6IEJyb3dzZXJQcm90b2NvbDtcblxuICB2YXIgZ2V0VXNlckNvbmZpcm1hdGlvbiA9IFByb3RvY29sLmdldFVzZXJDb25maXJtYXRpb247XG4gIHZhciBnZXRDdXJyZW50TG9jYXRpb24gPSBQcm90b2NvbC5nZXRDdXJyZW50TG9jYXRpb247XG4gIHZhciBwdXNoTG9jYXRpb24gPSBQcm90b2NvbC5wdXNoTG9jYXRpb247XG4gIHZhciByZXBsYWNlTG9jYXRpb24gPSBQcm90b2NvbC5yZXBsYWNlTG9jYXRpb247XG4gIHZhciBnbyA9IFByb3RvY29sLmdvO1xuXG5cbiAgdmFyIGhpc3RvcnkgPSAoMCwgX2NyZWF0ZUhpc3RvcnkyLmRlZmF1bHQpKF9leHRlbmRzKHtcbiAgICBnZXRVc2VyQ29uZmlybWF0aW9uOiBnZXRVc2VyQ29uZmlybWF0aW9uIH0sIG9wdGlvbnMsIHtcbiAgICBnZXRDdXJyZW50TG9jYXRpb246IGdldEN1cnJlbnRMb2NhdGlvbixcbiAgICBwdXNoTG9jYXRpb246IHB1c2hMb2NhdGlvbixcbiAgICByZXBsYWNlTG9jYXRpb246IHJlcGxhY2VMb2NhdGlvbixcbiAgICBnbzogZ29cbiAgfSkpO1xuXG4gIHZhciBsaXN0ZW5lckNvdW50ID0gMCxcbiAgICAgIHN0b3BMaXN0ZW5lciA9IHZvaWQgMDtcblxuICB2YXIgc3RhcnRMaXN0ZW5lciA9IGZ1bmN0aW9uIHN0YXJ0TGlzdGVuZXIobGlzdGVuZXIsIGJlZm9yZSkge1xuICAgIGlmICgrK2xpc3RlbmVyQ291bnQgPT09IDEpIHN0b3BMaXN0ZW5lciA9IEJyb3dzZXJQcm90b2NvbC5zdGFydExpc3RlbmVyKGhpc3RvcnkudHJhbnNpdGlvblRvKTtcblxuICAgIHZhciB1bmxpc3RlbiA9IGJlZm9yZSA/IGhpc3RvcnkubGlzdGVuQmVmb3JlKGxpc3RlbmVyKSA6IGhpc3RvcnkubGlzdGVuKGxpc3RlbmVyKTtcblxuICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgICB1bmxpc3RlbigpO1xuXG4gICAgICBpZiAoLS1saXN0ZW5lckNvdW50ID09PSAwKSBzdG9wTGlzdGVuZXIoKTtcbiAgICB9O1xuICB9O1xuXG4gIHZhciBsaXN0ZW5CZWZvcmUgPSBmdW5jdGlvbiBsaXN0ZW5CZWZvcmUobGlzdGVuZXIpIHtcbiAgICByZXR1cm4gc3RhcnRMaXN0ZW5lcihsaXN0ZW5lciwgdHJ1ZSk7XG4gIH07XG5cbiAgdmFyIGxpc3RlbiA9IGZ1bmN0aW9uIGxpc3RlbihsaXN0ZW5lcikge1xuICAgIHJldHVybiBzdGFydExpc3RlbmVyKGxpc3RlbmVyLCBmYWxzZSk7XG4gIH07XG5cbiAgcmV0dXJuIF9leHRlbmRzKHt9LCBoaXN0b3J5LCB7XG4gICAgbGlzdGVuQmVmb3JlOiBsaXN0ZW5CZWZvcmUsXG4gICAgbGlzdGVuOiBsaXN0ZW5cbiAgfSk7XG59O1xuXG5leHBvcnRzLmRlZmF1bHQgPSBjcmVhdGVCcm93c2VySGlzdG9yeTsiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldOyBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7IHRhcmdldFtrZXldID0gc291cmNlW2tleV07IH0gfSB9IHJldHVybiB0YXJnZXQ7IH07XG5cbnZhciBfd2FybmluZyA9IHJlcXVpcmUoJ3dhcm5pbmcnKTtcblxudmFyIF93YXJuaW5nMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3dhcm5pbmcpO1xuXG52YXIgX2ludmFyaWFudCA9IHJlcXVpcmUoJ2ludmFyaWFudCcpO1xuXG52YXIgX2ludmFyaWFudDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9pbnZhcmlhbnQpO1xuXG52YXIgX0V4ZWN1dGlvbkVudmlyb25tZW50ID0gcmVxdWlyZSgnLi9FeGVjdXRpb25FbnZpcm9ubWVudCcpO1xuXG52YXIgX0RPTVV0aWxzID0gcmVxdWlyZSgnLi9ET01VdGlscycpO1xuXG52YXIgX0hhc2hQcm90b2NvbCA9IHJlcXVpcmUoJy4vSGFzaFByb3RvY29sJyk7XG5cbnZhciBIYXNoUHJvdG9jb2wgPSBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChfSGFzaFByb3RvY29sKTtcblxudmFyIF9jcmVhdGVIaXN0b3J5ID0gcmVxdWlyZSgnLi9jcmVhdGVIaXN0b3J5Jyk7XG5cbnZhciBfY3JlYXRlSGlzdG9yeTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jcmVhdGVIaXN0b3J5KTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQob2JqKSB7IGlmIChvYmogJiYgb2JqLl9fZXNNb2R1bGUpIHsgcmV0dXJuIG9iajsgfSBlbHNlIHsgdmFyIG5ld09iaiA9IHt9OyBpZiAob2JqICE9IG51bGwpIHsgZm9yICh2YXIga2V5IGluIG9iaikgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwga2V5KSkgbmV3T2JqW2tleV0gPSBvYmpba2V5XTsgfSB9IG5ld09iai5kZWZhdWx0ID0gb2JqOyByZXR1cm4gbmV3T2JqOyB9IH1cblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxudmFyIERlZmF1bHRRdWVyeUtleSA9ICdfayc7XG5cbnZhciBjcmVhdGVIYXNoSGlzdG9yeSA9IGZ1bmN0aW9uIGNyZWF0ZUhhc2hIaXN0b3J5KCkge1xuICB2YXIgb3B0aW9ucyA9IGFyZ3VtZW50cy5sZW5ndGggPD0gMCB8fCBhcmd1bWVudHNbMF0gPT09IHVuZGVmaW5lZCA/IHt9IDogYXJndW1lbnRzWzBdO1xuXG4gICFfRXhlY3V0aW9uRW52aXJvbm1lbnQuY2FuVXNlRE9NID8gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyA/ICgwLCBfaW52YXJpYW50Mi5kZWZhdWx0KShmYWxzZSwgJ0hhc2ggaGlzdG9yeSBuZWVkcyBhIERPTScpIDogKDAsIF9pbnZhcmlhbnQyLmRlZmF1bHQpKGZhbHNlKSA6IHZvaWQgMDtcblxuICB2YXIgcXVlcnlLZXkgPSBvcHRpb25zLnF1ZXJ5S2V5O1xuXG5cbiAgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyA/ICgwLCBfd2FybmluZzIuZGVmYXVsdCkocXVlcnlLZXkgIT09IGZhbHNlLCAnVXNpbmcgeyBxdWVyeUtleTogZmFsc2UgfSBubyBsb25nZXIgd29ya3MuIEluc3RlYWQsIGp1c3QgZG9uXFwndCAnICsgJ3VzZSBsb2NhdGlvbiBzdGF0ZSBpZiB5b3UgZG9uXFwndCB3YW50IGEga2V5IGluIHlvdXIgVVJMIHF1ZXJ5IHN0cmluZycpIDogdm9pZCAwO1xuXG4gIGlmICh0eXBlb2YgcXVlcnlLZXkgIT09ICdzdHJpbmcnKSBxdWVyeUtleSA9IERlZmF1bHRRdWVyeUtleTtcblxuICB2YXIgZ2V0VXNlckNvbmZpcm1hdGlvbiA9IEhhc2hQcm90b2NvbC5nZXRVc2VyQ29uZmlybWF0aW9uO1xuXG5cbiAgdmFyIGdldEN1cnJlbnRMb2NhdGlvbiA9IGZ1bmN0aW9uIGdldEN1cnJlbnRMb2NhdGlvbigpIHtcbiAgICByZXR1cm4gSGFzaFByb3RvY29sLmdldEN1cnJlbnRMb2NhdGlvbihxdWVyeUtleSk7XG4gIH07XG5cbiAgdmFyIHB1c2hMb2NhdGlvbiA9IGZ1bmN0aW9uIHB1c2hMb2NhdGlvbihsb2NhdGlvbikge1xuICAgIHJldHVybiBIYXNoUHJvdG9jb2wucHVzaExvY2F0aW9uKGxvY2F0aW9uLCBxdWVyeUtleSk7XG4gIH07XG5cbiAgdmFyIHJlcGxhY2VMb2NhdGlvbiA9IGZ1bmN0aW9uIHJlcGxhY2VMb2NhdGlvbihsb2NhdGlvbikge1xuICAgIHJldHVybiBIYXNoUHJvdG9jb2wucmVwbGFjZUxvY2F0aW9uKGxvY2F0aW9uLCBxdWVyeUtleSk7XG4gIH07XG5cbiAgdmFyIGhpc3RvcnkgPSAoMCwgX2NyZWF0ZUhpc3RvcnkyLmRlZmF1bHQpKF9leHRlbmRzKHtcbiAgICBnZXRVc2VyQ29uZmlybWF0aW9uOiBnZXRVc2VyQ29uZmlybWF0aW9uIH0sIG9wdGlvbnMsIHtcbiAgICBnZXRDdXJyZW50TG9jYXRpb246IGdldEN1cnJlbnRMb2NhdGlvbixcbiAgICBwdXNoTG9jYXRpb246IHB1c2hMb2NhdGlvbixcbiAgICByZXBsYWNlTG9jYXRpb246IHJlcGxhY2VMb2NhdGlvbixcbiAgICBnbzogSGFzaFByb3RvY29sLmdvXG4gIH0pKTtcblxuICB2YXIgbGlzdGVuZXJDb3VudCA9IDAsXG4gICAgICBzdG9wTGlzdGVuZXIgPSB2b2lkIDA7XG5cbiAgdmFyIHN0YXJ0TGlzdGVuZXIgPSBmdW5jdGlvbiBzdGFydExpc3RlbmVyKGxpc3RlbmVyLCBiZWZvcmUpIHtcbiAgICBpZiAoKytsaXN0ZW5lckNvdW50ID09PSAxKSBzdG9wTGlzdGVuZXIgPSBIYXNoUHJvdG9jb2wuc3RhcnRMaXN0ZW5lcihoaXN0b3J5LnRyYW5zaXRpb25UbywgcXVlcnlLZXkpO1xuXG4gICAgdmFyIHVubGlzdGVuID0gYmVmb3JlID8gaGlzdG9yeS5saXN0ZW5CZWZvcmUobGlzdGVuZXIpIDogaGlzdG9yeS5saXN0ZW4obGlzdGVuZXIpO1xuXG4gICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAgIHVubGlzdGVuKCk7XG5cbiAgICAgIGlmICgtLWxpc3RlbmVyQ291bnQgPT09IDApIHN0b3BMaXN0ZW5lcigpO1xuICAgIH07XG4gIH07XG5cbiAgdmFyIGxpc3RlbkJlZm9yZSA9IGZ1bmN0aW9uIGxpc3RlbkJlZm9yZShsaXN0ZW5lcikge1xuICAgIHJldHVybiBzdGFydExpc3RlbmVyKGxpc3RlbmVyLCB0cnVlKTtcbiAgfTtcblxuICB2YXIgbGlzdGVuID0gZnVuY3Rpb24gbGlzdGVuKGxpc3RlbmVyKSB7XG4gICAgcmV0dXJuIHN0YXJ0TGlzdGVuZXIobGlzdGVuZXIsIGZhbHNlKTtcbiAgfTtcblxuICB2YXIgZ29Jc1N1cHBvcnRlZFdpdGhvdXRSZWxvYWQgPSAoMCwgX0RPTVV0aWxzLnN1cHBvcnRzR29XaXRob3V0UmVsb2FkVXNpbmdIYXNoKSgpO1xuXG4gIHZhciBnbyA9IGZ1bmN0aW9uIGdvKG4pIHtcbiAgICBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nID8gKDAsIF93YXJuaW5nMi5kZWZhdWx0KShnb0lzU3VwcG9ydGVkV2l0aG91dFJlbG9hZCwgJ0hhc2ggaGlzdG9yeSBnbyhuKSBjYXVzZXMgYSBmdWxsIHBhZ2UgcmVsb2FkIGluIHRoaXMgYnJvd3NlcicpIDogdm9pZCAwO1xuXG4gICAgaGlzdG9yeS5nbyhuKTtcbiAgfTtcblxuICB2YXIgY3JlYXRlSHJlZiA9IGZ1bmN0aW9uIGNyZWF0ZUhyZWYocGF0aCkge1xuICAgIHJldHVybiAnIycgKyBoaXN0b3J5LmNyZWF0ZUhyZWYocGF0aCk7XG4gIH07XG5cbiAgcmV0dXJuIF9leHRlbmRzKHt9LCBoaXN0b3J5LCB7XG4gICAgbGlzdGVuQmVmb3JlOiBsaXN0ZW5CZWZvcmUsXG4gICAgbGlzdGVuOiBsaXN0ZW4sXG4gICAgZ286IGdvLFxuICAgIGNyZWF0ZUhyZWY6IGNyZWF0ZUhyZWZcbiAgfSk7XG59O1xuXG5leHBvcnRzLmRlZmF1bHQgPSBjcmVhdGVIYXNoSGlzdG9yeTsiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfQXN5bmNVdGlscyA9IHJlcXVpcmUoJy4vQXN5bmNVdGlscycpO1xuXG52YXIgX1BhdGhVdGlscyA9IHJlcXVpcmUoJy4vUGF0aFV0aWxzJyk7XG5cbnZhciBfcnVuVHJhbnNpdGlvbkhvb2sgPSByZXF1aXJlKCcuL3J1blRyYW5zaXRpb25Ib29rJyk7XG5cbnZhciBfcnVuVHJhbnNpdGlvbkhvb2syID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcnVuVHJhbnNpdGlvbkhvb2spO1xuXG52YXIgX0FjdGlvbnMgPSByZXF1aXJlKCcuL0FjdGlvbnMnKTtcblxudmFyIF9Mb2NhdGlvblV0aWxzID0gcmVxdWlyZSgnLi9Mb2NhdGlvblV0aWxzJyk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIF90b0NvbnN1bWFibGVBcnJheShhcnIpIHsgaWYgKEFycmF5LmlzQXJyYXkoYXJyKSkgeyBmb3IgKHZhciBpID0gMCwgYXJyMiA9IEFycmF5KGFyci5sZW5ndGgpOyBpIDwgYXJyLmxlbmd0aDsgaSsrKSB7IGFycjJbaV0gPSBhcnJbaV07IH0gcmV0dXJuIGFycjI7IH0gZWxzZSB7IHJldHVybiBBcnJheS5mcm9tKGFycik7IH0gfVxuXG52YXIgY3JlYXRlSGlzdG9yeSA9IGZ1bmN0aW9uIGNyZWF0ZUhpc3RvcnkoKSB7XG4gIHZhciBvcHRpb25zID0gYXJndW1lbnRzLmxlbmd0aCA8PSAwIHx8IGFyZ3VtZW50c1swXSA9PT0gdW5kZWZpbmVkID8ge30gOiBhcmd1bWVudHNbMF07XG4gIHZhciBnZXRDdXJyZW50TG9jYXRpb24gPSBvcHRpb25zLmdldEN1cnJlbnRMb2NhdGlvbjtcbiAgdmFyIGdldFVzZXJDb25maXJtYXRpb24gPSBvcHRpb25zLmdldFVzZXJDb25maXJtYXRpb247XG4gIHZhciBwdXNoTG9jYXRpb24gPSBvcHRpb25zLnB1c2hMb2NhdGlvbjtcbiAgdmFyIHJlcGxhY2VMb2NhdGlvbiA9IG9wdGlvbnMucmVwbGFjZUxvY2F0aW9uO1xuICB2YXIgZ28gPSBvcHRpb25zLmdvO1xuICB2YXIga2V5TGVuZ3RoID0gb3B0aW9ucy5rZXlMZW5ndGg7XG5cblxuICB2YXIgY3VycmVudExvY2F0aW9uID0gdm9pZCAwO1xuICB2YXIgcGVuZGluZ0xvY2F0aW9uID0gdm9pZCAwO1xuICB2YXIgYmVmb3JlTGlzdGVuZXJzID0gW107XG4gIHZhciBsaXN0ZW5lcnMgPSBbXTtcbiAgdmFyIGFsbEtleXMgPSBbXTtcblxuICB2YXIgZ2V0Q3VycmVudEluZGV4ID0gZnVuY3Rpb24gZ2V0Q3VycmVudEluZGV4KCkge1xuICAgIGlmIChwZW5kaW5nTG9jYXRpb24gJiYgcGVuZGluZ0xvY2F0aW9uLmFjdGlvbiA9PT0gX0FjdGlvbnMuUE9QKSByZXR1cm4gYWxsS2V5cy5pbmRleE9mKHBlbmRpbmdMb2NhdGlvbi5rZXkpO1xuXG4gICAgaWYgKGN1cnJlbnRMb2NhdGlvbikgcmV0dXJuIGFsbEtleXMuaW5kZXhPZihjdXJyZW50TG9jYXRpb24ua2V5KTtcblxuICAgIHJldHVybiAtMTtcbiAgfTtcblxuICB2YXIgdXBkYXRlTG9jYXRpb24gPSBmdW5jdGlvbiB1cGRhdGVMb2NhdGlvbihuZXh0TG9jYXRpb24pIHtcbiAgICBjdXJyZW50TG9jYXRpb24gPSBuZXh0TG9jYXRpb247XG5cbiAgICB2YXIgY3VycmVudEluZGV4ID0gZ2V0Q3VycmVudEluZGV4KCk7XG5cbiAgICBpZiAoY3VycmVudExvY2F0aW9uLmFjdGlvbiA9PT0gX0FjdGlvbnMuUFVTSCkge1xuICAgICAgYWxsS2V5cyA9IFtdLmNvbmNhdChfdG9Db25zdW1hYmxlQXJyYXkoYWxsS2V5cy5zbGljZSgwLCBjdXJyZW50SW5kZXggKyAxKSksIFtjdXJyZW50TG9jYXRpb24ua2V5XSk7XG4gICAgfSBlbHNlIGlmIChjdXJyZW50TG9jYXRpb24uYWN0aW9uID09PSBfQWN0aW9ucy5SRVBMQUNFKSB7XG4gICAgICBhbGxLZXlzW2N1cnJlbnRJbmRleF0gPSBjdXJyZW50TG9jYXRpb24ua2V5O1xuICAgIH1cblxuICAgIGxpc3RlbmVycy5mb3JFYWNoKGZ1bmN0aW9uIChsaXN0ZW5lcikge1xuICAgICAgcmV0dXJuIGxpc3RlbmVyKGN1cnJlbnRMb2NhdGlvbik7XG4gICAgfSk7XG4gIH07XG5cbiAgdmFyIGxpc3RlbkJlZm9yZSA9IGZ1bmN0aW9uIGxpc3RlbkJlZm9yZShsaXN0ZW5lcikge1xuICAgIGJlZm9yZUxpc3RlbmVycy5wdXNoKGxpc3RlbmVyKTtcblxuICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gYmVmb3JlTGlzdGVuZXJzID0gYmVmb3JlTGlzdGVuZXJzLmZpbHRlcihmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgICByZXR1cm4gaXRlbSAhPT0gbGlzdGVuZXI7XG4gICAgICB9KTtcbiAgICB9O1xuICB9O1xuXG4gIHZhciBsaXN0ZW4gPSBmdW5jdGlvbiBsaXN0ZW4obGlzdGVuZXIpIHtcbiAgICBsaXN0ZW5lcnMucHVzaChsaXN0ZW5lcik7XG5cbiAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIGxpc3RlbmVycyA9IGxpc3RlbmVycy5maWx0ZXIoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgICAgcmV0dXJuIGl0ZW0gIT09IGxpc3RlbmVyO1xuICAgICAgfSk7XG4gICAgfTtcbiAgfTtcblxuICB2YXIgY29uZmlybVRyYW5zaXRpb25UbyA9IGZ1bmN0aW9uIGNvbmZpcm1UcmFuc2l0aW9uVG8obG9jYXRpb24sIGNhbGxiYWNrKSB7XG4gICAgKDAsIF9Bc3luY1V0aWxzLmxvb3BBc3luYykoYmVmb3JlTGlzdGVuZXJzLmxlbmd0aCwgZnVuY3Rpb24gKGluZGV4LCBuZXh0LCBkb25lKSB7XG4gICAgICAoMCwgX3J1blRyYW5zaXRpb25Ib29rMi5kZWZhdWx0KShiZWZvcmVMaXN0ZW5lcnNbaW5kZXhdLCBsb2NhdGlvbiwgZnVuY3Rpb24gKHJlc3VsdCkge1xuICAgICAgICByZXR1cm4gcmVzdWx0ICE9IG51bGwgPyBkb25lKHJlc3VsdCkgOiBuZXh0KCk7XG4gICAgICB9KTtcbiAgICB9LCBmdW5jdGlvbiAobWVzc2FnZSkge1xuICAgICAgaWYgKGdldFVzZXJDb25maXJtYXRpb24gJiYgdHlwZW9mIG1lc3NhZ2UgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgIGdldFVzZXJDb25maXJtYXRpb24obWVzc2FnZSwgZnVuY3Rpb24gKG9rKSB7XG4gICAgICAgICAgcmV0dXJuIGNhbGxiYWNrKG9rICE9PSBmYWxzZSk7XG4gICAgICAgIH0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY2FsbGJhY2sobWVzc2FnZSAhPT0gZmFsc2UpO1xuICAgICAgfVxuICAgIH0pO1xuICB9O1xuXG4gIHZhciB0cmFuc2l0aW9uVG8gPSBmdW5jdGlvbiB0cmFuc2l0aW9uVG8obmV4dExvY2F0aW9uKSB7XG4gICAgaWYgKGN1cnJlbnRMb2NhdGlvbiAmJiAoMCwgX0xvY2F0aW9uVXRpbHMubG9jYXRpb25zQXJlRXF1YWwpKGN1cnJlbnRMb2NhdGlvbiwgbmV4dExvY2F0aW9uKSB8fCBwZW5kaW5nTG9jYXRpb24gJiYgKDAsIF9Mb2NhdGlvblV0aWxzLmxvY2F0aW9uc0FyZUVxdWFsKShwZW5kaW5nTG9jYXRpb24sIG5leHRMb2NhdGlvbikpIHJldHVybjsgLy8gTm90aGluZyB0byBkb1xuXG4gICAgcGVuZGluZ0xvY2F0aW9uID0gbmV4dExvY2F0aW9uO1xuXG4gICAgY29uZmlybVRyYW5zaXRpb25UbyhuZXh0TG9jYXRpb24sIGZ1bmN0aW9uIChvaykge1xuICAgICAgaWYgKHBlbmRpbmdMb2NhdGlvbiAhPT0gbmV4dExvY2F0aW9uKSByZXR1cm47IC8vIFRyYW5zaXRpb24gd2FzIGludGVycnVwdGVkIGR1cmluZyBjb25maXJtYXRpb25cblxuICAgICAgcGVuZGluZ0xvY2F0aW9uID0gbnVsbDtcblxuICAgICAgaWYgKG9rKSB7XG4gICAgICAgIC8vIFRyZWF0IFBVU0ggdG8gc2FtZSBwYXRoIGxpa2UgUkVQTEFDRSB0byBiZSBjb25zaXN0ZW50IHdpdGggYnJvd3NlcnNcbiAgICAgICAgaWYgKG5leHRMb2NhdGlvbi5hY3Rpb24gPT09IF9BY3Rpb25zLlBVU0gpIHtcbiAgICAgICAgICB2YXIgcHJldlBhdGggPSAoMCwgX1BhdGhVdGlscy5jcmVhdGVQYXRoKShjdXJyZW50TG9jYXRpb24pO1xuICAgICAgICAgIHZhciBuZXh0UGF0aCA9ICgwLCBfUGF0aFV0aWxzLmNyZWF0ZVBhdGgpKG5leHRMb2NhdGlvbik7XG5cbiAgICAgICAgICBpZiAobmV4dFBhdGggPT09IHByZXZQYXRoICYmICgwLCBfTG9jYXRpb25VdGlscy5zdGF0ZXNBcmVFcXVhbCkoY3VycmVudExvY2F0aW9uLnN0YXRlLCBuZXh0TG9jYXRpb24uc3RhdGUpKSBuZXh0TG9jYXRpb24uYWN0aW9uID0gX0FjdGlvbnMuUkVQTEFDRTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChuZXh0TG9jYXRpb24uYWN0aW9uID09PSBfQWN0aW9ucy5QT1ApIHtcbiAgICAgICAgICB1cGRhdGVMb2NhdGlvbihuZXh0TG9jYXRpb24pO1xuICAgICAgICB9IGVsc2UgaWYgKG5leHRMb2NhdGlvbi5hY3Rpb24gPT09IF9BY3Rpb25zLlBVU0gpIHtcbiAgICAgICAgICBpZiAocHVzaExvY2F0aW9uKG5leHRMb2NhdGlvbikgIT09IGZhbHNlKSB1cGRhdGVMb2NhdGlvbihuZXh0TG9jYXRpb24pO1xuICAgICAgICB9IGVsc2UgaWYgKG5leHRMb2NhdGlvbi5hY3Rpb24gPT09IF9BY3Rpb25zLlJFUExBQ0UpIHtcbiAgICAgICAgICBpZiAocmVwbGFjZUxvY2F0aW9uKG5leHRMb2NhdGlvbikgIT09IGZhbHNlKSB1cGRhdGVMb2NhdGlvbihuZXh0TG9jYXRpb24pO1xuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKGN1cnJlbnRMb2NhdGlvbiAmJiBuZXh0TG9jYXRpb24uYWN0aW9uID09PSBfQWN0aW9ucy5QT1ApIHtcbiAgICAgICAgdmFyIHByZXZJbmRleCA9IGFsbEtleXMuaW5kZXhPZihjdXJyZW50TG9jYXRpb24ua2V5KTtcbiAgICAgICAgdmFyIG5leHRJbmRleCA9IGFsbEtleXMuaW5kZXhPZihuZXh0TG9jYXRpb24ua2V5KTtcblxuICAgICAgICBpZiAocHJldkluZGV4ICE9PSAtMSAmJiBuZXh0SW5kZXggIT09IC0xKSBnbyhwcmV2SW5kZXggLSBuZXh0SW5kZXgpOyAvLyBSZXN0b3JlIHRoZSBVUkxcbiAgICAgIH1cbiAgICB9KTtcbiAgfTtcblxuICB2YXIgcHVzaCA9IGZ1bmN0aW9uIHB1c2goaW5wdXQpIHtcbiAgICByZXR1cm4gdHJhbnNpdGlvblRvKGNyZWF0ZUxvY2F0aW9uKGlucHV0LCBfQWN0aW9ucy5QVVNIKSk7XG4gIH07XG5cbiAgdmFyIHJlcGxhY2UgPSBmdW5jdGlvbiByZXBsYWNlKGlucHV0KSB7XG4gICAgcmV0dXJuIHRyYW5zaXRpb25UbyhjcmVhdGVMb2NhdGlvbihpbnB1dCwgX0FjdGlvbnMuUkVQTEFDRSkpO1xuICB9O1xuXG4gIHZhciBnb0JhY2sgPSBmdW5jdGlvbiBnb0JhY2soKSB7XG4gICAgcmV0dXJuIGdvKC0xKTtcbiAgfTtcblxuICB2YXIgZ29Gb3J3YXJkID0gZnVuY3Rpb24gZ29Gb3J3YXJkKCkge1xuICAgIHJldHVybiBnbygxKTtcbiAgfTtcblxuICB2YXIgY3JlYXRlS2V5ID0gZnVuY3Rpb24gY3JlYXRlS2V5KCkge1xuICAgIHJldHVybiBNYXRoLnJhbmRvbSgpLnRvU3RyaW5nKDM2KS5zdWJzdHIoMiwga2V5TGVuZ3RoIHx8IDYpO1xuICB9O1xuXG4gIHZhciBjcmVhdGVIcmVmID0gZnVuY3Rpb24gY3JlYXRlSHJlZihsb2NhdGlvbikge1xuICAgIHJldHVybiAoMCwgX1BhdGhVdGlscy5jcmVhdGVQYXRoKShsb2NhdGlvbik7XG4gIH07XG5cbiAgdmFyIGNyZWF0ZUxvY2F0aW9uID0gZnVuY3Rpb24gY3JlYXRlTG9jYXRpb24obG9jYXRpb24sIGFjdGlvbikge1xuICAgIHZhciBrZXkgPSBhcmd1bWVudHMubGVuZ3RoIDw9IDIgfHwgYXJndW1lbnRzWzJdID09PSB1bmRlZmluZWQgPyBjcmVhdGVLZXkoKSA6IGFyZ3VtZW50c1syXTtcbiAgICByZXR1cm4gKDAsIF9Mb2NhdGlvblV0aWxzLmNyZWF0ZUxvY2F0aW9uKShsb2NhdGlvbiwgYWN0aW9uLCBrZXkpO1xuICB9O1xuXG4gIHJldHVybiB7XG4gICAgZ2V0Q3VycmVudExvY2F0aW9uOiBnZXRDdXJyZW50TG9jYXRpb24sXG4gICAgbGlzdGVuQmVmb3JlOiBsaXN0ZW5CZWZvcmUsXG4gICAgbGlzdGVuOiBsaXN0ZW4sXG4gICAgdHJhbnNpdGlvblRvOiB0cmFuc2l0aW9uVG8sXG4gICAgcHVzaDogcHVzaCxcbiAgICByZXBsYWNlOiByZXBsYWNlLFxuICAgIGdvOiBnbyxcbiAgICBnb0JhY2s6IGdvQmFjayxcbiAgICBnb0ZvcndhcmQ6IGdvRm9yd2FyZCxcbiAgICBjcmVhdGVLZXk6IGNyZWF0ZUtleSxcbiAgICBjcmVhdGVQYXRoOiBfUGF0aFV0aWxzLmNyZWF0ZVBhdGgsXG4gICAgY3JlYXRlSHJlZjogY3JlYXRlSHJlZixcbiAgICBjcmVhdGVMb2NhdGlvbjogY3JlYXRlTG9jYXRpb25cbiAgfTtcbn07XG5cbmV4cG9ydHMuZGVmYXVsdCA9IGNyZWF0ZUhpc3Rvcnk7IiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTsgZm9yICh2YXIga2V5IGluIHNvdXJjZSkgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkgeyB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldOyB9IH0gfSByZXR1cm4gdGFyZ2V0OyB9O1xuXG52YXIgX3dhcm5pbmcgPSByZXF1aXJlKCd3YXJuaW5nJyk7XG5cbnZhciBfd2FybmluZzIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF93YXJuaW5nKTtcblxudmFyIF9pbnZhcmlhbnQgPSByZXF1aXJlKCdpbnZhcmlhbnQnKTtcblxudmFyIF9pbnZhcmlhbnQyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfaW52YXJpYW50KTtcblxudmFyIF9Mb2NhdGlvblV0aWxzID0gcmVxdWlyZSgnLi9Mb2NhdGlvblV0aWxzJyk7XG5cbnZhciBfUGF0aFV0aWxzID0gcmVxdWlyZSgnLi9QYXRoVXRpbHMnKTtcblxudmFyIF9jcmVhdGVIaXN0b3J5ID0gcmVxdWlyZSgnLi9jcmVhdGVIaXN0b3J5Jyk7XG5cbnZhciBfY3JlYXRlSGlzdG9yeTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jcmVhdGVIaXN0b3J5KTtcblxudmFyIF9BY3Rpb25zID0gcmVxdWlyZSgnLi9BY3Rpb25zJyk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbnZhciBjcmVhdGVTdGF0ZVN0b3JhZ2UgPSBmdW5jdGlvbiBjcmVhdGVTdGF0ZVN0b3JhZ2UoZW50cmllcykge1xuICByZXR1cm4gZW50cmllcy5maWx0ZXIoZnVuY3Rpb24gKGVudHJ5KSB7XG4gICAgcmV0dXJuIGVudHJ5LnN0YXRlO1xuICB9KS5yZWR1Y2UoZnVuY3Rpb24gKG1lbW8sIGVudHJ5KSB7XG4gICAgbWVtb1tlbnRyeS5rZXldID0gZW50cnkuc3RhdGU7XG4gICAgcmV0dXJuIG1lbW87XG4gIH0sIHt9KTtcbn07XG5cbnZhciBjcmVhdGVNZW1vcnlIaXN0b3J5ID0gZnVuY3Rpb24gY3JlYXRlTWVtb3J5SGlzdG9yeSgpIHtcbiAgdmFyIG9wdGlvbnMgPSBhcmd1bWVudHMubGVuZ3RoIDw9IDAgfHwgYXJndW1lbnRzWzBdID09PSB1bmRlZmluZWQgPyB7fSA6IGFyZ3VtZW50c1swXTtcblxuICBpZiAoQXJyYXkuaXNBcnJheShvcHRpb25zKSkge1xuICAgIG9wdGlvbnMgPSB7IGVudHJpZXM6IG9wdGlvbnMgfTtcbiAgfSBlbHNlIGlmICh0eXBlb2Ygb3B0aW9ucyA9PT0gJ3N0cmluZycpIHtcbiAgICBvcHRpb25zID0geyBlbnRyaWVzOiBbb3B0aW9uc10gfTtcbiAgfVxuXG4gIHZhciBnZXRDdXJyZW50TG9jYXRpb24gPSBmdW5jdGlvbiBnZXRDdXJyZW50TG9jYXRpb24oKSB7XG4gICAgdmFyIGVudHJ5ID0gZW50cmllc1tjdXJyZW50XTtcbiAgICB2YXIgcGF0aCA9ICgwLCBfUGF0aFV0aWxzLmNyZWF0ZVBhdGgpKGVudHJ5KTtcblxuICAgIHZhciBrZXkgPSB2b2lkIDAsXG4gICAgICAgIHN0YXRlID0gdm9pZCAwO1xuICAgIGlmIChlbnRyeS5rZXkpIHtcbiAgICAgIGtleSA9IGVudHJ5LmtleTtcbiAgICAgIHN0YXRlID0gcmVhZFN0YXRlKGtleSk7XG4gICAgfVxuXG4gICAgdmFyIGluaXQgPSAoMCwgX1BhdGhVdGlscy5wYXJzZVBhdGgpKHBhdGgpO1xuXG4gICAgcmV0dXJuICgwLCBfTG9jYXRpb25VdGlscy5jcmVhdGVMb2NhdGlvbikoX2V4dGVuZHMoe30sIGluaXQsIHsgc3RhdGU6IHN0YXRlIH0pLCB1bmRlZmluZWQsIGtleSk7XG4gIH07XG5cbiAgdmFyIGNhbkdvID0gZnVuY3Rpb24gY2FuR28obikge1xuICAgIHZhciBpbmRleCA9IGN1cnJlbnQgKyBuO1xuICAgIHJldHVybiBpbmRleCA+PSAwICYmIGluZGV4IDwgZW50cmllcy5sZW5ndGg7XG4gIH07XG5cbiAgdmFyIGdvID0gZnVuY3Rpb24gZ28obikge1xuICAgIGlmICghbikgcmV0dXJuO1xuXG4gICAgaWYgKCFjYW5HbyhuKSkge1xuICAgICAgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyA/ICgwLCBfd2FybmluZzIuZGVmYXVsdCkoZmFsc2UsICdDYW5ub3QgZ28oJXMpIHRoZXJlIGlzIG5vdCBlbm91Z2ggaGlzdG9yeScsIG4pIDogdm9pZCAwO1xuXG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY3VycmVudCArPSBuO1xuICAgIHZhciBjdXJyZW50TG9jYXRpb24gPSBnZXRDdXJyZW50TG9jYXRpb24oKTtcblxuICAgIC8vIENoYW5nZSBhY3Rpb24gdG8gUE9QXG4gICAgaGlzdG9yeS50cmFuc2l0aW9uVG8oX2V4dGVuZHMoe30sIGN1cnJlbnRMb2NhdGlvbiwgeyBhY3Rpb246IF9BY3Rpb25zLlBPUCB9KSk7XG4gIH07XG5cbiAgdmFyIHB1c2hMb2NhdGlvbiA9IGZ1bmN0aW9uIHB1c2hMb2NhdGlvbihsb2NhdGlvbikge1xuICAgIGN1cnJlbnQgKz0gMTtcblxuICAgIGlmIChjdXJyZW50IDwgZW50cmllcy5sZW5ndGgpIGVudHJpZXMuc3BsaWNlKGN1cnJlbnQpO1xuXG4gICAgZW50cmllcy5wdXNoKGxvY2F0aW9uKTtcblxuICAgIHNhdmVTdGF0ZShsb2NhdGlvbi5rZXksIGxvY2F0aW9uLnN0YXRlKTtcbiAgfTtcblxuICB2YXIgcmVwbGFjZUxvY2F0aW9uID0gZnVuY3Rpb24gcmVwbGFjZUxvY2F0aW9uKGxvY2F0aW9uKSB7XG4gICAgZW50cmllc1tjdXJyZW50XSA9IGxvY2F0aW9uO1xuICAgIHNhdmVTdGF0ZShsb2NhdGlvbi5rZXksIGxvY2F0aW9uLnN0YXRlKTtcbiAgfTtcblxuICB2YXIgaGlzdG9yeSA9ICgwLCBfY3JlYXRlSGlzdG9yeTIuZGVmYXVsdCkoX2V4dGVuZHMoe30sIG9wdGlvbnMsIHtcbiAgICBnZXRDdXJyZW50TG9jYXRpb246IGdldEN1cnJlbnRMb2NhdGlvbixcbiAgICBwdXNoTG9jYXRpb246IHB1c2hMb2NhdGlvbixcbiAgICByZXBsYWNlTG9jYXRpb246IHJlcGxhY2VMb2NhdGlvbixcbiAgICBnbzogZ29cbiAgfSkpO1xuXG4gIHZhciBfb3B0aW9ucyA9IG9wdGlvbnM7XG4gIHZhciBlbnRyaWVzID0gX29wdGlvbnMuZW50cmllcztcbiAgdmFyIGN1cnJlbnQgPSBfb3B0aW9ucy5jdXJyZW50O1xuXG5cbiAgaWYgKHR5cGVvZiBlbnRyaWVzID09PSAnc3RyaW5nJykge1xuICAgIGVudHJpZXMgPSBbZW50cmllc107XG4gIH0gZWxzZSBpZiAoIUFycmF5LmlzQXJyYXkoZW50cmllcykpIHtcbiAgICBlbnRyaWVzID0gWycvJ107XG4gIH1cblxuICBlbnRyaWVzID0gZW50cmllcy5tYXAoZnVuY3Rpb24gKGVudHJ5KSB7XG4gICAgcmV0dXJuICgwLCBfTG9jYXRpb25VdGlscy5jcmVhdGVMb2NhdGlvbikoZW50cnkpO1xuICB9KTtcblxuICBpZiAoY3VycmVudCA9PSBudWxsKSB7XG4gICAgY3VycmVudCA9IGVudHJpZXMubGVuZ3RoIC0gMTtcbiAgfSBlbHNlIHtcbiAgICAhKGN1cnJlbnQgPj0gMCAmJiBjdXJyZW50IDwgZW50cmllcy5sZW5ndGgpID8gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyA/ICgwLCBfaW52YXJpYW50Mi5kZWZhdWx0KShmYWxzZSwgJ0N1cnJlbnQgaW5kZXggbXVzdCBiZSA+PSAwIGFuZCA8ICVzLCB3YXMgJXMnLCBlbnRyaWVzLmxlbmd0aCwgY3VycmVudCkgOiAoMCwgX2ludmFyaWFudDIuZGVmYXVsdCkoZmFsc2UpIDogdm9pZCAwO1xuICB9XG5cbiAgdmFyIHN0b3JhZ2UgPSBjcmVhdGVTdGF0ZVN0b3JhZ2UoZW50cmllcyk7XG5cbiAgdmFyIHNhdmVTdGF0ZSA9IGZ1bmN0aW9uIHNhdmVTdGF0ZShrZXksIHN0YXRlKSB7XG4gICAgcmV0dXJuIHN0b3JhZ2Vba2V5XSA9IHN0YXRlO1xuICB9O1xuXG4gIHZhciByZWFkU3RhdGUgPSBmdW5jdGlvbiByZWFkU3RhdGUoa2V5KSB7XG4gICAgcmV0dXJuIHN0b3JhZ2Vba2V5XTtcbiAgfTtcblxuICByZXR1cm4gaGlzdG9yeTtcbn07XG5cbmV4cG9ydHMuZGVmYXVsdCA9IGNyZWF0ZU1lbW9yeUhpc3Rvcnk7IiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5sb2NhdGlvbnNBcmVFcXVhbCA9IGV4cG9ydHMuQWN0aW9ucyA9IGV4cG9ydHMudXNlUXVlcmllcyA9IGV4cG9ydHMudXNlQmVmb3JlVW5sb2FkID0gZXhwb3J0cy51c2VCYXNlbmFtZSA9IGV4cG9ydHMuY3JlYXRlTWVtb3J5SGlzdG9yeSA9IGV4cG9ydHMuY3JlYXRlSGFzaEhpc3RvcnkgPSBleHBvcnRzLmNyZWF0ZUhpc3RvcnkgPSB1bmRlZmluZWQ7XG5cbnZhciBfTG9jYXRpb25VdGlscyA9IHJlcXVpcmUoJy4vTG9jYXRpb25VdGlscycpO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2xvY2F0aW9uc0FyZUVxdWFsJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICByZXR1cm4gX0xvY2F0aW9uVXRpbHMubG9jYXRpb25zQXJlRXF1YWw7XG4gIH1cbn0pO1xuXG52YXIgX2NyZWF0ZUJyb3dzZXJIaXN0b3J5ID0gcmVxdWlyZSgnLi9jcmVhdGVCcm93c2VySGlzdG9yeScpO1xuXG52YXIgX2NyZWF0ZUJyb3dzZXJIaXN0b3J5MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2NyZWF0ZUJyb3dzZXJIaXN0b3J5KTtcblxudmFyIF9jcmVhdGVIYXNoSGlzdG9yeTIgPSByZXF1aXJlKCcuL2NyZWF0ZUhhc2hIaXN0b3J5Jyk7XG5cbnZhciBfY3JlYXRlSGFzaEhpc3RvcnkzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfY3JlYXRlSGFzaEhpc3RvcnkyKTtcblxudmFyIF9jcmVhdGVNZW1vcnlIaXN0b3J5MiA9IHJlcXVpcmUoJy4vY3JlYXRlTWVtb3J5SGlzdG9yeScpO1xuXG52YXIgX2NyZWF0ZU1lbW9yeUhpc3RvcnkzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfY3JlYXRlTWVtb3J5SGlzdG9yeTIpO1xuXG52YXIgX3VzZUJhc2VuYW1lMiA9IHJlcXVpcmUoJy4vdXNlQmFzZW5hbWUnKTtcblxudmFyIF91c2VCYXNlbmFtZTMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF91c2VCYXNlbmFtZTIpO1xuXG52YXIgX3VzZUJlZm9yZVVubG9hZDIgPSByZXF1aXJlKCcuL3VzZUJlZm9yZVVubG9hZCcpO1xuXG52YXIgX3VzZUJlZm9yZVVubG9hZDMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF91c2VCZWZvcmVVbmxvYWQyKTtcblxudmFyIF91c2VRdWVyaWVzMiA9IHJlcXVpcmUoJy4vdXNlUXVlcmllcycpO1xuXG52YXIgX3VzZVF1ZXJpZXMzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfdXNlUXVlcmllczIpO1xuXG52YXIgX0FjdGlvbnMyID0gcmVxdWlyZSgnLi9BY3Rpb25zJyk7XG5cbnZhciBfQWN0aW9uczMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9BY3Rpb25zMik7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmV4cG9ydHMuY3JlYXRlSGlzdG9yeSA9IF9jcmVhdGVCcm93c2VySGlzdG9yeTIuZGVmYXVsdDtcbmV4cG9ydHMuY3JlYXRlSGFzaEhpc3RvcnkgPSBfY3JlYXRlSGFzaEhpc3RvcnkzLmRlZmF1bHQ7XG5leHBvcnRzLmNyZWF0ZU1lbW9yeUhpc3RvcnkgPSBfY3JlYXRlTWVtb3J5SGlzdG9yeTMuZGVmYXVsdDtcbmV4cG9ydHMudXNlQmFzZW5hbWUgPSBfdXNlQmFzZW5hbWUzLmRlZmF1bHQ7XG5leHBvcnRzLnVzZUJlZm9yZVVubG9hZCA9IF91c2VCZWZvcmVVbmxvYWQzLmRlZmF1bHQ7XG5leHBvcnRzLnVzZVF1ZXJpZXMgPSBfdXNlUXVlcmllczMuZGVmYXVsdDtcbmV4cG9ydHMuQWN0aW9ucyA9IF9BY3Rpb25zMy5kZWZhdWx0OyIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF93YXJuaW5nID0gcmVxdWlyZSgnd2FybmluZycpO1xuXG52YXIgX3dhcm5pbmcyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfd2FybmluZyk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbnZhciBydW5UcmFuc2l0aW9uSG9vayA9IGZ1bmN0aW9uIHJ1blRyYW5zaXRpb25Ib29rKGhvb2ssIGxvY2F0aW9uLCBjYWxsYmFjaykge1xuICB2YXIgcmVzdWx0ID0gaG9vayhsb2NhdGlvbiwgY2FsbGJhY2spO1xuXG4gIGlmIChob29rLmxlbmd0aCA8IDIpIHtcbiAgICAvLyBBc3N1bWUgdGhlIGhvb2sgcnVucyBzeW5jaHJvbm91c2x5IGFuZCBhdXRvbWF0aWNhbGx5XG4gICAgLy8gY2FsbCB0aGUgY2FsbGJhY2sgd2l0aCB0aGUgcmV0dXJuIHZhbHVlLlxuICAgIGNhbGxiYWNrKHJlc3VsdCk7XG4gIH0gZWxzZSB7XG4gICAgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyA/ICgwLCBfd2FybmluZzIuZGVmYXVsdCkocmVzdWx0ID09PSB1bmRlZmluZWQsICdZb3Ugc2hvdWxkIG5vdCBcInJldHVyblwiIGluIGEgdHJhbnNpdGlvbiBob29rIHdpdGggYSBjYWxsYmFjayBhcmd1bWVudDsgJyArICdjYWxsIHRoZSBjYWxsYmFjayBpbnN0ZWFkJykgOiB2b2lkIDA7XG4gIH1cbn07XG5cbmV4cG9ydHMuZGVmYXVsdCA9IHJ1blRyYW5zaXRpb25Ib29rOyIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07IGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHsgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTsgfSB9IH0gcmV0dXJuIHRhcmdldDsgfTtcblxudmFyIF9ydW5UcmFuc2l0aW9uSG9vayA9IHJlcXVpcmUoJy4vcnVuVHJhbnNpdGlvbkhvb2snKTtcblxudmFyIF9ydW5UcmFuc2l0aW9uSG9vazIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9ydW5UcmFuc2l0aW9uSG9vayk7XG5cbnZhciBfUGF0aFV0aWxzID0gcmVxdWlyZSgnLi9QYXRoVXRpbHMnKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxudmFyIHVzZUJhc2VuYW1lID0gZnVuY3Rpb24gdXNlQmFzZW5hbWUoY3JlYXRlSGlzdG9yeSkge1xuICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgIHZhciBvcHRpb25zID0gYXJndW1lbnRzLmxlbmd0aCA8PSAwIHx8IGFyZ3VtZW50c1swXSA9PT0gdW5kZWZpbmVkID8ge30gOiBhcmd1bWVudHNbMF07XG5cbiAgICB2YXIgaGlzdG9yeSA9IGNyZWF0ZUhpc3Rvcnkob3B0aW9ucyk7XG4gICAgdmFyIGJhc2VuYW1lID0gb3B0aW9ucy5iYXNlbmFtZTtcblxuXG4gICAgdmFyIGFkZEJhc2VuYW1lID0gZnVuY3Rpb24gYWRkQmFzZW5hbWUobG9jYXRpb24pIHtcbiAgICAgIGlmICghbG9jYXRpb24pIHJldHVybiBsb2NhdGlvbjtcblxuICAgICAgaWYgKGJhc2VuYW1lICYmIGxvY2F0aW9uLmJhc2VuYW1lID09IG51bGwpIHtcbiAgICAgICAgaWYgKGxvY2F0aW9uLnBhdGhuYW1lLmluZGV4T2YoYmFzZW5hbWUpID09PSAwKSB7XG4gICAgICAgICAgbG9jYXRpb24ucGF0aG5hbWUgPSBsb2NhdGlvbi5wYXRobmFtZS5zdWJzdHJpbmcoYmFzZW5hbWUubGVuZ3RoKTtcbiAgICAgICAgICBsb2NhdGlvbi5iYXNlbmFtZSA9IGJhc2VuYW1lO1xuXG4gICAgICAgICAgaWYgKGxvY2F0aW9uLnBhdGhuYW1lID09PSAnJykgbG9jYXRpb24ucGF0aG5hbWUgPSAnLyc7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgbG9jYXRpb24uYmFzZW5hbWUgPSAnJztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gbG9jYXRpb247XG4gICAgfTtcblxuICAgIHZhciBwcmVwZW5kQmFzZW5hbWUgPSBmdW5jdGlvbiBwcmVwZW5kQmFzZW5hbWUobG9jYXRpb24pIHtcbiAgICAgIGlmICghYmFzZW5hbWUpIHJldHVybiBsb2NhdGlvbjtcblxuICAgICAgdmFyIG9iamVjdCA9IHR5cGVvZiBsb2NhdGlvbiA9PT0gJ3N0cmluZycgPyAoMCwgX1BhdGhVdGlscy5wYXJzZVBhdGgpKGxvY2F0aW9uKSA6IGxvY2F0aW9uO1xuICAgICAgdmFyIHBuYW1lID0gb2JqZWN0LnBhdGhuYW1lO1xuICAgICAgdmFyIG5vcm1hbGl6ZWRCYXNlbmFtZSA9IGJhc2VuYW1lLnNsaWNlKC0xKSA9PT0gJy8nID8gYmFzZW5hbWUgOiBiYXNlbmFtZSArICcvJztcbiAgICAgIHZhciBub3JtYWxpemVkUGF0aG5hbWUgPSBwbmFtZS5jaGFyQXQoMCkgPT09ICcvJyA/IHBuYW1lLnNsaWNlKDEpIDogcG5hbWU7XG4gICAgICB2YXIgcGF0aG5hbWUgPSBub3JtYWxpemVkQmFzZW5hbWUgKyBub3JtYWxpemVkUGF0aG5hbWU7XG5cbiAgICAgIHJldHVybiBfZXh0ZW5kcyh7fSwgbG9jYXRpb24sIHtcbiAgICAgICAgcGF0aG5hbWU6IHBhdGhuYW1lXG4gICAgICB9KTtcbiAgICB9O1xuXG4gICAgLy8gT3ZlcnJpZGUgYWxsIHJlYWQgbWV0aG9kcyB3aXRoIGJhc2VuYW1lLWF3YXJlIHZlcnNpb25zLlxuICAgIHZhciBnZXRDdXJyZW50TG9jYXRpb24gPSBmdW5jdGlvbiBnZXRDdXJyZW50TG9jYXRpb24oKSB7XG4gICAgICByZXR1cm4gYWRkQmFzZW5hbWUoaGlzdG9yeS5nZXRDdXJyZW50TG9jYXRpb24oKSk7XG4gICAgfTtcblxuICAgIHZhciBsaXN0ZW5CZWZvcmUgPSBmdW5jdGlvbiBsaXN0ZW5CZWZvcmUoaG9vaykge1xuICAgICAgcmV0dXJuIGhpc3RvcnkubGlzdGVuQmVmb3JlKGZ1bmN0aW9uIChsb2NhdGlvbiwgY2FsbGJhY2spIHtcbiAgICAgICAgcmV0dXJuICgwLCBfcnVuVHJhbnNpdGlvbkhvb2syLmRlZmF1bHQpKGhvb2ssIGFkZEJhc2VuYW1lKGxvY2F0aW9uKSwgY2FsbGJhY2spO1xuICAgICAgfSk7XG4gICAgfTtcblxuICAgIHZhciBsaXN0ZW4gPSBmdW5jdGlvbiBsaXN0ZW4obGlzdGVuZXIpIHtcbiAgICAgIHJldHVybiBoaXN0b3J5Lmxpc3RlbihmdW5jdGlvbiAobG9jYXRpb24pIHtcbiAgICAgICAgcmV0dXJuIGxpc3RlbmVyKGFkZEJhc2VuYW1lKGxvY2F0aW9uKSk7XG4gICAgICB9KTtcbiAgICB9O1xuXG4gICAgLy8gT3ZlcnJpZGUgYWxsIHdyaXRlIG1ldGhvZHMgd2l0aCBiYXNlbmFtZS1hd2FyZSB2ZXJzaW9ucy5cbiAgICB2YXIgcHVzaCA9IGZ1bmN0aW9uIHB1c2gobG9jYXRpb24pIHtcbiAgICAgIHJldHVybiBoaXN0b3J5LnB1c2gocHJlcGVuZEJhc2VuYW1lKGxvY2F0aW9uKSk7XG4gICAgfTtcblxuICAgIHZhciByZXBsYWNlID0gZnVuY3Rpb24gcmVwbGFjZShsb2NhdGlvbikge1xuICAgICAgcmV0dXJuIGhpc3RvcnkucmVwbGFjZShwcmVwZW5kQmFzZW5hbWUobG9jYXRpb24pKTtcbiAgICB9O1xuXG4gICAgdmFyIGNyZWF0ZVBhdGggPSBmdW5jdGlvbiBjcmVhdGVQYXRoKGxvY2F0aW9uKSB7XG4gICAgICByZXR1cm4gaGlzdG9yeS5jcmVhdGVQYXRoKHByZXBlbmRCYXNlbmFtZShsb2NhdGlvbikpO1xuICAgIH07XG5cbiAgICB2YXIgY3JlYXRlSHJlZiA9IGZ1bmN0aW9uIGNyZWF0ZUhyZWYobG9jYXRpb24pIHtcbiAgICAgIHJldHVybiBoaXN0b3J5LmNyZWF0ZUhyZWYocHJlcGVuZEJhc2VuYW1lKGxvY2F0aW9uKSk7XG4gICAgfTtcblxuICAgIHZhciBjcmVhdGVMb2NhdGlvbiA9IGZ1bmN0aW9uIGNyZWF0ZUxvY2F0aW9uKGxvY2F0aW9uKSB7XG4gICAgICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IEFycmF5KF9sZW4gPiAxID8gX2xlbiAtIDEgOiAwKSwgX2tleSA9IDE7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICAgICAgYXJnc1tfa2V5IC0gMV0gPSBhcmd1bWVudHNbX2tleV07XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBhZGRCYXNlbmFtZShoaXN0b3J5LmNyZWF0ZUxvY2F0aW9uLmFwcGx5KGhpc3RvcnksIFtwcmVwZW5kQmFzZW5hbWUobG9jYXRpb24pXS5jb25jYXQoYXJncykpKTtcbiAgICB9O1xuXG4gICAgcmV0dXJuIF9leHRlbmRzKHt9LCBoaXN0b3J5LCB7XG4gICAgICBnZXRDdXJyZW50TG9jYXRpb246IGdldEN1cnJlbnRMb2NhdGlvbixcbiAgICAgIGxpc3RlbkJlZm9yZTogbGlzdGVuQmVmb3JlLFxuICAgICAgbGlzdGVuOiBsaXN0ZW4sXG4gICAgICBwdXNoOiBwdXNoLFxuICAgICAgcmVwbGFjZTogcmVwbGFjZSxcbiAgICAgIGNyZWF0ZVBhdGg6IGNyZWF0ZVBhdGgsXG4gICAgICBjcmVhdGVIcmVmOiBjcmVhdGVIcmVmLFxuICAgICAgY3JlYXRlTG9jYXRpb246IGNyZWF0ZUxvY2F0aW9uXG4gICAgfSk7XG4gIH07XG59O1xuXG5leHBvcnRzLmRlZmF1bHQgPSB1c2VCYXNlbmFtZTsiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldOyBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7IHRhcmdldFtrZXldID0gc291cmNlW2tleV07IH0gfSB9IHJldHVybiB0YXJnZXQ7IH07XG5cbnZhciBfaW52YXJpYW50ID0gcmVxdWlyZSgnaW52YXJpYW50Jyk7XG5cbnZhciBfaW52YXJpYW50MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2ludmFyaWFudCk7XG5cbnZhciBfRE9NVXRpbHMgPSByZXF1aXJlKCcuL0RPTVV0aWxzJyk7XG5cbnZhciBfRXhlY3V0aW9uRW52aXJvbm1lbnQgPSByZXF1aXJlKCcuL0V4ZWN1dGlvbkVudmlyb25tZW50Jyk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbnZhciBzdGFydExpc3RlbmVyID0gZnVuY3Rpb24gc3RhcnRMaXN0ZW5lcihnZXRQcm9tcHRNZXNzYWdlKSB7XG4gIHZhciBoYW5kbGVCZWZvcmVVbmxvYWQgPSBmdW5jdGlvbiBoYW5kbGVCZWZvcmVVbmxvYWQoZXZlbnQpIHtcbiAgICB2YXIgbWVzc2FnZSA9IGdldFByb21wdE1lc3NhZ2UoKTtcblxuICAgIGlmICh0eXBlb2YgbWVzc2FnZSA9PT0gJ3N0cmluZycpIHtcbiAgICAgIChldmVudCB8fCB3aW5kb3cuZXZlbnQpLnJldHVyblZhbHVlID0gbWVzc2FnZTtcbiAgICAgIHJldHVybiBtZXNzYWdlO1xuICAgIH1cblxuICAgIHJldHVybiB1bmRlZmluZWQ7XG4gIH07XG5cbiAgKDAsIF9ET01VdGlscy5hZGRFdmVudExpc3RlbmVyKSh3aW5kb3csICdiZWZvcmV1bmxvYWQnLCBoYW5kbGVCZWZvcmVVbmxvYWQpO1xuXG4gIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuICgwLCBfRE9NVXRpbHMucmVtb3ZlRXZlbnRMaXN0ZW5lcikod2luZG93LCAnYmVmb3JldW5sb2FkJywgaGFuZGxlQmVmb3JlVW5sb2FkKTtcbiAgfTtcbn07XG5cbi8qKlxuICogUmV0dXJucyBhIG5ldyBjcmVhdGVIaXN0b3J5IGZ1bmN0aW9uIHRoYXQgY2FuIGJlIHVzZWQgdG8gY3JlYXRlXG4gKiBoaXN0b3J5IG9iamVjdHMgdGhhdCBrbm93IGhvdyB0byB1c2UgdGhlIGJlZm9yZXVubG9hZCBldmVudCBpbiB3ZWJcbiAqIGJyb3dzZXJzIHRvIGNhbmNlbCBuYXZpZ2F0aW9uLlxuICovXG52YXIgdXNlQmVmb3JlVW5sb2FkID0gZnVuY3Rpb24gdXNlQmVmb3JlVW5sb2FkKGNyZWF0ZUhpc3RvcnkpIHtcbiAgIV9FeGVjdXRpb25FbnZpcm9ubWVudC5jYW5Vc2VET00gPyBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nID8gKDAsIF9pbnZhcmlhbnQyLmRlZmF1bHQpKGZhbHNlLCAndXNlQmVmb3JlVW5sb2FkIG9ubHkgd29ya3MgaW4gRE9NIGVudmlyb25tZW50cycpIDogKDAsIF9pbnZhcmlhbnQyLmRlZmF1bHQpKGZhbHNlKSA6IHZvaWQgMDtcblxuICByZXR1cm4gZnVuY3Rpb24gKG9wdGlvbnMpIHtcbiAgICB2YXIgaGlzdG9yeSA9IGNyZWF0ZUhpc3Rvcnkob3B0aW9ucyk7XG5cbiAgICB2YXIgbGlzdGVuZXJzID0gW107XG4gICAgdmFyIHN0b3BMaXN0ZW5lciA9IHZvaWQgMDtcblxuICAgIHZhciBnZXRQcm9tcHRNZXNzYWdlID0gZnVuY3Rpb24gZ2V0UHJvbXB0TWVzc2FnZSgpIHtcbiAgICAgIHZhciBtZXNzYWdlID0gdm9pZCAwO1xuICAgICAgZm9yICh2YXIgaSA9IDAsIGxlbiA9IGxpc3RlbmVycy5sZW5ndGg7IG1lc3NhZ2UgPT0gbnVsbCAmJiBpIDwgbGVuOyArK2kpIHtcbiAgICAgICAgbWVzc2FnZSA9IGxpc3RlbmVyc1tpXS5jYWxsKCk7XG4gICAgICB9cmV0dXJuIG1lc3NhZ2U7XG4gICAgfTtcblxuICAgIHZhciBsaXN0ZW5CZWZvcmVVbmxvYWQgPSBmdW5jdGlvbiBsaXN0ZW5CZWZvcmVVbmxvYWQobGlzdGVuZXIpIHtcbiAgICAgIGlmIChsaXN0ZW5lcnMucHVzaChsaXN0ZW5lcikgPT09IDEpIHN0b3BMaXN0ZW5lciA9IHN0YXJ0TGlzdGVuZXIoZ2V0UHJvbXB0TWVzc2FnZSk7XG5cbiAgICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGxpc3RlbmVycyA9IGxpc3RlbmVycy5maWx0ZXIoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgICAgICByZXR1cm4gaXRlbSAhPT0gbGlzdGVuZXI7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGlmIChsaXN0ZW5lcnMubGVuZ3RoID09PSAwICYmIHN0b3BMaXN0ZW5lcikge1xuICAgICAgICAgIHN0b3BMaXN0ZW5lcigpO1xuICAgICAgICAgIHN0b3BMaXN0ZW5lciA9IG51bGw7XG4gICAgICAgIH1cbiAgICAgIH07XG4gICAgfTtcblxuICAgIHJldHVybiBfZXh0ZW5kcyh7fSwgaGlzdG9yeSwge1xuICAgICAgbGlzdGVuQmVmb3JlVW5sb2FkOiBsaXN0ZW5CZWZvcmVVbmxvYWRcbiAgICB9KTtcbiAgfTtcbn07XG5cbmV4cG9ydHMuZGVmYXVsdCA9IHVzZUJlZm9yZVVubG9hZDsiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldOyBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7IHRhcmdldFtrZXldID0gc291cmNlW2tleV07IH0gfSB9IHJldHVybiB0YXJnZXQ7IH07XG5cbnZhciBfcXVlcnlTdHJpbmcgPSByZXF1aXJlKCdxdWVyeS1zdHJpbmcnKTtcblxudmFyIF9ydW5UcmFuc2l0aW9uSG9vayA9IHJlcXVpcmUoJy4vcnVuVHJhbnNpdGlvbkhvb2snKTtcblxudmFyIF9ydW5UcmFuc2l0aW9uSG9vazIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9ydW5UcmFuc2l0aW9uSG9vayk7XG5cbnZhciBfTG9jYXRpb25VdGlscyA9IHJlcXVpcmUoJy4vTG9jYXRpb25VdGlscycpO1xuXG52YXIgX1BhdGhVdGlscyA9IHJlcXVpcmUoJy4vUGF0aFV0aWxzJyk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbnZhciBkZWZhdWx0U3RyaW5naWZ5UXVlcnkgPSBmdW5jdGlvbiBkZWZhdWx0U3RyaW5naWZ5UXVlcnkocXVlcnkpIHtcbiAgcmV0dXJuICgwLCBfcXVlcnlTdHJpbmcuc3RyaW5naWZ5KShxdWVyeSkucmVwbGFjZSgvJTIwL2csICcrJyk7XG59O1xuXG52YXIgZGVmYXVsdFBhcnNlUXVlcnlTdHJpbmcgPSBfcXVlcnlTdHJpbmcucGFyc2U7XG5cbi8qKlxuICogUmV0dXJucyBhIG5ldyBjcmVhdGVIaXN0b3J5IGZ1bmN0aW9uIHRoYXQgbWF5IGJlIHVzZWQgdG8gY3JlYXRlXG4gKiBoaXN0b3J5IG9iamVjdHMgdGhhdCBrbm93IGhvdyB0byBoYW5kbGUgVVJMIHF1ZXJpZXMuXG4gKi9cbnZhciB1c2VRdWVyaWVzID0gZnVuY3Rpb24gdXNlUXVlcmllcyhjcmVhdGVIaXN0b3J5KSB7XG4gIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIG9wdGlvbnMgPSBhcmd1bWVudHMubGVuZ3RoIDw9IDAgfHwgYXJndW1lbnRzWzBdID09PSB1bmRlZmluZWQgPyB7fSA6IGFyZ3VtZW50c1swXTtcblxuICAgIHZhciBoaXN0b3J5ID0gY3JlYXRlSGlzdG9yeShvcHRpb25zKTtcbiAgICB2YXIgc3RyaW5naWZ5UXVlcnkgPSBvcHRpb25zLnN0cmluZ2lmeVF1ZXJ5O1xuICAgIHZhciBwYXJzZVF1ZXJ5U3RyaW5nID0gb3B0aW9ucy5wYXJzZVF1ZXJ5U3RyaW5nO1xuXG5cbiAgICBpZiAodHlwZW9mIHN0cmluZ2lmeVF1ZXJ5ICE9PSAnZnVuY3Rpb24nKSBzdHJpbmdpZnlRdWVyeSA9IGRlZmF1bHRTdHJpbmdpZnlRdWVyeTtcblxuICAgIGlmICh0eXBlb2YgcGFyc2VRdWVyeVN0cmluZyAhPT0gJ2Z1bmN0aW9uJykgcGFyc2VRdWVyeVN0cmluZyA9IGRlZmF1bHRQYXJzZVF1ZXJ5U3RyaW5nO1xuXG4gICAgdmFyIGRlY29kZVF1ZXJ5ID0gZnVuY3Rpb24gZGVjb2RlUXVlcnkobG9jYXRpb24pIHtcbiAgICAgIGlmICghbG9jYXRpb24pIHJldHVybiBsb2NhdGlvbjtcblxuICAgICAgaWYgKGxvY2F0aW9uLnF1ZXJ5ID09IG51bGwpIGxvY2F0aW9uLnF1ZXJ5ID0gcGFyc2VRdWVyeVN0cmluZyhsb2NhdGlvbi5zZWFyY2guc3Vic3RyaW5nKDEpKTtcblxuICAgICAgcmV0dXJuIGxvY2F0aW9uO1xuICAgIH07XG5cbiAgICB2YXIgZW5jb2RlUXVlcnkgPSBmdW5jdGlvbiBlbmNvZGVRdWVyeShsb2NhdGlvbiwgcXVlcnkpIHtcbiAgICAgIGlmIChxdWVyeSA9PSBudWxsKSByZXR1cm4gbG9jYXRpb247XG5cbiAgICAgIHZhciBvYmplY3QgPSB0eXBlb2YgbG9jYXRpb24gPT09ICdzdHJpbmcnID8gKDAsIF9QYXRoVXRpbHMucGFyc2VQYXRoKShsb2NhdGlvbikgOiBsb2NhdGlvbjtcbiAgICAgIHZhciBxdWVyeVN0cmluZyA9IHN0cmluZ2lmeVF1ZXJ5KHF1ZXJ5KTtcbiAgICAgIHZhciBzZWFyY2ggPSBxdWVyeVN0cmluZyA/ICc/JyArIHF1ZXJ5U3RyaW5nIDogJyc7XG5cbiAgICAgIHJldHVybiBfZXh0ZW5kcyh7fSwgb2JqZWN0LCB7XG4gICAgICAgIHNlYXJjaDogc2VhcmNoXG4gICAgICB9KTtcbiAgICB9O1xuXG4gICAgLy8gT3ZlcnJpZGUgYWxsIHJlYWQgbWV0aG9kcyB3aXRoIHF1ZXJ5LWF3YXJlIHZlcnNpb25zLlxuICAgIHZhciBnZXRDdXJyZW50TG9jYXRpb24gPSBmdW5jdGlvbiBnZXRDdXJyZW50TG9jYXRpb24oKSB7XG4gICAgICByZXR1cm4gZGVjb2RlUXVlcnkoaGlzdG9yeS5nZXRDdXJyZW50TG9jYXRpb24oKSk7XG4gICAgfTtcblxuICAgIHZhciBsaXN0ZW5CZWZvcmUgPSBmdW5jdGlvbiBsaXN0ZW5CZWZvcmUoaG9vaykge1xuICAgICAgcmV0dXJuIGhpc3RvcnkubGlzdGVuQmVmb3JlKGZ1bmN0aW9uIChsb2NhdGlvbiwgY2FsbGJhY2spIHtcbiAgICAgICAgcmV0dXJuICgwLCBfcnVuVHJhbnNpdGlvbkhvb2syLmRlZmF1bHQpKGhvb2ssIGRlY29kZVF1ZXJ5KGxvY2F0aW9uKSwgY2FsbGJhY2spO1xuICAgICAgfSk7XG4gICAgfTtcblxuICAgIHZhciBsaXN0ZW4gPSBmdW5jdGlvbiBsaXN0ZW4obGlzdGVuZXIpIHtcbiAgICAgIHJldHVybiBoaXN0b3J5Lmxpc3RlbihmdW5jdGlvbiAobG9jYXRpb24pIHtcbiAgICAgICAgcmV0dXJuIGxpc3RlbmVyKGRlY29kZVF1ZXJ5KGxvY2F0aW9uKSk7XG4gICAgICB9KTtcbiAgICB9O1xuXG4gICAgLy8gT3ZlcnJpZGUgYWxsIHdyaXRlIG1ldGhvZHMgd2l0aCBxdWVyeS1hd2FyZSB2ZXJzaW9ucy5cbiAgICB2YXIgcHVzaCA9IGZ1bmN0aW9uIHB1c2gobG9jYXRpb24pIHtcbiAgICAgIHJldHVybiBoaXN0b3J5LnB1c2goZW5jb2RlUXVlcnkobG9jYXRpb24sIGxvY2F0aW9uLnF1ZXJ5KSk7XG4gICAgfTtcblxuICAgIHZhciByZXBsYWNlID0gZnVuY3Rpb24gcmVwbGFjZShsb2NhdGlvbikge1xuICAgICAgcmV0dXJuIGhpc3RvcnkucmVwbGFjZShlbmNvZGVRdWVyeShsb2NhdGlvbiwgbG9jYXRpb24ucXVlcnkpKTtcbiAgICB9O1xuXG4gICAgdmFyIGNyZWF0ZVBhdGggPSBmdW5jdGlvbiBjcmVhdGVQYXRoKGxvY2F0aW9uKSB7XG4gICAgICByZXR1cm4gaGlzdG9yeS5jcmVhdGVQYXRoKGVuY29kZVF1ZXJ5KGxvY2F0aW9uLCBsb2NhdGlvbi5xdWVyeSkpO1xuICAgIH07XG5cbiAgICB2YXIgY3JlYXRlSHJlZiA9IGZ1bmN0aW9uIGNyZWF0ZUhyZWYobG9jYXRpb24pIHtcbiAgICAgIHJldHVybiBoaXN0b3J5LmNyZWF0ZUhyZWYoZW5jb2RlUXVlcnkobG9jYXRpb24sIGxvY2F0aW9uLnF1ZXJ5KSk7XG4gICAgfTtcblxuICAgIHZhciBjcmVhdGVMb2NhdGlvbiA9IGZ1bmN0aW9uIGNyZWF0ZUxvY2F0aW9uKGxvY2F0aW9uKSB7XG4gICAgICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IEFycmF5KF9sZW4gPiAxID8gX2xlbiAtIDEgOiAwKSwgX2tleSA9IDE7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICAgICAgYXJnc1tfa2V5IC0gMV0gPSBhcmd1bWVudHNbX2tleV07XG4gICAgICB9XG5cbiAgICAgIHZhciBuZXdMb2NhdGlvbiA9IGhpc3RvcnkuY3JlYXRlTG9jYXRpb24uYXBwbHkoaGlzdG9yeSwgW2VuY29kZVF1ZXJ5KGxvY2F0aW9uLCBsb2NhdGlvbi5xdWVyeSldLmNvbmNhdChhcmdzKSk7XG5cbiAgICAgIGlmIChsb2NhdGlvbi5xdWVyeSkgbmV3TG9jYXRpb24ucXVlcnkgPSAoMCwgX0xvY2F0aW9uVXRpbHMuY3JlYXRlUXVlcnkpKGxvY2F0aW9uLnF1ZXJ5KTtcblxuICAgICAgcmV0dXJuIGRlY29kZVF1ZXJ5KG5ld0xvY2F0aW9uKTtcbiAgICB9O1xuXG4gICAgcmV0dXJuIF9leHRlbmRzKHt9LCBoaXN0b3J5LCB7XG4gICAgICBnZXRDdXJyZW50TG9jYXRpb246IGdldEN1cnJlbnRMb2NhdGlvbixcbiAgICAgIGxpc3RlbkJlZm9yZTogbGlzdGVuQmVmb3JlLFxuICAgICAgbGlzdGVuOiBsaXN0ZW4sXG4gICAgICBwdXNoOiBwdXNoLFxuICAgICAgcmVwbGFjZTogcmVwbGFjZSxcbiAgICAgIGNyZWF0ZVBhdGg6IGNyZWF0ZVBhdGgsXG4gICAgICBjcmVhdGVIcmVmOiBjcmVhdGVIcmVmLFxuICAgICAgY3JlYXRlTG9jYXRpb246IGNyZWF0ZUxvY2F0aW9uXG4gICAgfSk7XG4gIH07XG59O1xuXG5leHBvcnRzLmRlZmF1bHQgPSB1c2VRdWVyaWVzOyIsIi8qKlxuICogQ29weXJpZ2h0IDIwMTMtMjAxNSwgRmFjZWJvb2ssIEluYy5cbiAqIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgQlNELXN0eWxlIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuIEFuIGFkZGl0aW9uYWwgZ3JhbnRcbiAqIG9mIHBhdGVudCByaWdodHMgY2FuIGJlIGZvdW5kIGluIHRoZSBQQVRFTlRTIGZpbGUgaW4gdGhlIHNhbWUgZGlyZWN0b3J5LlxuICovXG5cbid1c2Ugc3RyaWN0JztcblxuLyoqXG4gKiBVc2UgaW52YXJpYW50KCkgdG8gYXNzZXJ0IHN0YXRlIHdoaWNoIHlvdXIgcHJvZ3JhbSBhc3N1bWVzIHRvIGJlIHRydWUuXG4gKlxuICogUHJvdmlkZSBzcHJpbnRmLXN0eWxlIGZvcm1hdCAob25seSAlcyBpcyBzdXBwb3J0ZWQpIGFuZCBhcmd1bWVudHNcbiAqIHRvIHByb3ZpZGUgaW5mb3JtYXRpb24gYWJvdXQgd2hhdCBicm9rZSBhbmQgd2hhdCB5b3Ugd2VyZVxuICogZXhwZWN0aW5nLlxuICpcbiAqIFRoZSBpbnZhcmlhbnQgbWVzc2FnZSB3aWxsIGJlIHN0cmlwcGVkIGluIHByb2R1Y3Rpb24sIGJ1dCB0aGUgaW52YXJpYW50XG4gKiB3aWxsIHJlbWFpbiB0byBlbnN1cmUgbG9naWMgZG9lcyBub3QgZGlmZmVyIGluIHByb2R1Y3Rpb24uXG4gKi9cblxudmFyIGludmFyaWFudCA9IGZ1bmN0aW9uKGNvbmRpdGlvbiwgZm9ybWF0LCBhLCBiLCBjLCBkLCBlLCBmKSB7XG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgaWYgKGZvcm1hdCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ2ludmFyaWFudCByZXF1aXJlcyBhbiBlcnJvciBtZXNzYWdlIGFyZ3VtZW50Jyk7XG4gICAgfVxuICB9XG5cbiAgaWYgKCFjb25kaXRpb24pIHtcbiAgICB2YXIgZXJyb3I7XG4gICAgaWYgKGZvcm1hdCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICBlcnJvciA9IG5ldyBFcnJvcihcbiAgICAgICAgJ01pbmlmaWVkIGV4Y2VwdGlvbiBvY2N1cnJlZDsgdXNlIHRoZSBub24tbWluaWZpZWQgZGV2IGVudmlyb25tZW50ICcgK1xuICAgICAgICAnZm9yIHRoZSBmdWxsIGVycm9yIG1lc3NhZ2UgYW5kIGFkZGl0aW9uYWwgaGVscGZ1bCB3YXJuaW5ncy4nXG4gICAgICApO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgYXJncyA9IFthLCBiLCBjLCBkLCBlLCBmXTtcbiAgICAgIHZhciBhcmdJbmRleCA9IDA7XG4gICAgICBlcnJvciA9IG5ldyBFcnJvcihcbiAgICAgICAgZm9ybWF0LnJlcGxhY2UoLyVzL2csIGZ1bmN0aW9uKCkgeyByZXR1cm4gYXJnc1thcmdJbmRleCsrXTsgfSlcbiAgICAgICk7XG4gICAgICBlcnJvci5uYW1lID0gJ0ludmFyaWFudCBWaW9sYXRpb24nO1xuICAgIH1cblxuICAgIGVycm9yLmZyYW1lc1RvUG9wID0gMTsgLy8gd2UgZG9uJ3QgY2FyZSBhYm91dCBpbnZhcmlhbnQncyBvd24gZnJhbWVcbiAgICB0aHJvdyBlcnJvcjtcbiAgfVxufTtcblxubW9kdWxlLmV4cG9ydHMgPSBpbnZhcmlhbnQ7XG4iLCJ2YXIgaXNhcnJheSA9IHJlcXVpcmUoJ2lzYXJyYXknKVxuXG4vKipcbiAqIEV4cG9zZSBgcGF0aFRvUmVnZXhwYC5cbiAqL1xubW9kdWxlLmV4cG9ydHMgPSBwYXRoVG9SZWdleHBcbm1vZHVsZS5leHBvcnRzLnBhcnNlID0gcGFyc2Vcbm1vZHVsZS5leHBvcnRzLmNvbXBpbGUgPSBjb21waWxlXG5tb2R1bGUuZXhwb3J0cy50b2tlbnNUb0Z1bmN0aW9uID0gdG9rZW5zVG9GdW5jdGlvblxubW9kdWxlLmV4cG9ydHMudG9rZW5zVG9SZWdFeHAgPSB0b2tlbnNUb1JlZ0V4cFxuXG4vKipcbiAqIFRoZSBtYWluIHBhdGggbWF0Y2hpbmcgcmVnZXhwIHV0aWxpdHkuXG4gKlxuICogQHR5cGUge1JlZ0V4cH1cbiAqL1xudmFyIFBBVEhfUkVHRVhQID0gbmV3IFJlZ0V4cChbXG4gIC8vIE1hdGNoIGVzY2FwZWQgY2hhcmFjdGVycyB0aGF0IHdvdWxkIG90aGVyd2lzZSBhcHBlYXIgaW4gZnV0dXJlIG1hdGNoZXMuXG4gIC8vIFRoaXMgYWxsb3dzIHRoZSB1c2VyIHRvIGVzY2FwZSBzcGVjaWFsIGNoYXJhY3RlcnMgdGhhdCB3b24ndCB0cmFuc2Zvcm0uXG4gICcoXFxcXFxcXFwuKScsXG4gIC8vIE1hdGNoIEV4cHJlc3Mtc3R5bGUgcGFyYW1ldGVycyBhbmQgdW4tbmFtZWQgcGFyYW1ldGVycyB3aXRoIGEgcHJlZml4XG4gIC8vIGFuZCBvcHRpb25hbCBzdWZmaXhlcy4gTWF0Y2hlcyBhcHBlYXIgYXM6XG4gIC8vXG4gIC8vIFwiLzp0ZXN0KFxcXFxkKyk/XCIgPT4gW1wiL1wiLCBcInRlc3RcIiwgXCJcXGQrXCIsIHVuZGVmaW5lZCwgXCI/XCIsIHVuZGVmaW5lZF1cbiAgLy8gXCIvcm91dGUoXFxcXGQrKVwiICA9PiBbdW5kZWZpbmVkLCB1bmRlZmluZWQsIHVuZGVmaW5lZCwgXCJcXGQrXCIsIHVuZGVmaW5lZCwgdW5kZWZpbmVkXVxuICAvLyBcIi8qXCIgICAgICAgICAgICA9PiBbXCIvXCIsIHVuZGVmaW5lZCwgdW5kZWZpbmVkLCB1bmRlZmluZWQsIHVuZGVmaW5lZCwgXCIqXCJdXG4gICcoW1xcXFwvLl0pPyg/Oig/OlxcXFw6KFxcXFx3KykoPzpcXFxcKCgoPzpcXFxcXFxcXC58W15cXFxcXFxcXCgpXSkrKVxcXFwpKT98XFxcXCgoKD86XFxcXFxcXFwufFteXFxcXFxcXFwoKV0pKylcXFxcKSkoWysqP10pP3woXFxcXCopKSdcbl0uam9pbignfCcpLCAnZycpXG5cbi8qKlxuICogUGFyc2UgYSBzdHJpbmcgZm9yIHRoZSByYXcgdG9rZW5zLlxuICpcbiAqIEBwYXJhbSAge3N0cmluZ30gc3RyXG4gKiBAcmV0dXJuIHshQXJyYXl9XG4gKi9cbmZ1bmN0aW9uIHBhcnNlIChzdHIpIHtcbiAgdmFyIHRva2VucyA9IFtdXG4gIHZhciBrZXkgPSAwXG4gIHZhciBpbmRleCA9IDBcbiAgdmFyIHBhdGggPSAnJ1xuICB2YXIgcmVzXG5cbiAgd2hpbGUgKChyZXMgPSBQQVRIX1JFR0VYUC5leGVjKHN0cikpICE9IG51bGwpIHtcbiAgICB2YXIgbSA9IHJlc1swXVxuICAgIHZhciBlc2NhcGVkID0gcmVzWzFdXG4gICAgdmFyIG9mZnNldCA9IHJlcy5pbmRleFxuICAgIHBhdGggKz0gc3RyLnNsaWNlKGluZGV4LCBvZmZzZXQpXG4gICAgaW5kZXggPSBvZmZzZXQgKyBtLmxlbmd0aFxuXG4gICAgLy8gSWdub3JlIGFscmVhZHkgZXNjYXBlZCBzZXF1ZW5jZXMuXG4gICAgaWYgKGVzY2FwZWQpIHtcbiAgICAgIHBhdGggKz0gZXNjYXBlZFsxXVxuICAgICAgY29udGludWVcbiAgICB9XG5cbiAgICB2YXIgbmV4dCA9IHN0cltpbmRleF1cbiAgICB2YXIgcHJlZml4ID0gcmVzWzJdXG4gICAgdmFyIG5hbWUgPSByZXNbM11cbiAgICB2YXIgY2FwdHVyZSA9IHJlc1s0XVxuICAgIHZhciBncm91cCA9IHJlc1s1XVxuICAgIHZhciBtb2RpZmllciA9IHJlc1s2XVxuICAgIHZhciBhc3RlcmlzayA9IHJlc1s3XVxuXG4gICAgLy8gUHVzaCB0aGUgY3VycmVudCBwYXRoIG9udG8gdGhlIHRva2Vucy5cbiAgICBpZiAocGF0aCkge1xuICAgICAgdG9rZW5zLnB1c2gocGF0aClcbiAgICAgIHBhdGggPSAnJ1xuICAgIH1cblxuICAgIHZhciBwYXJ0aWFsID0gcHJlZml4ICE9IG51bGwgJiYgbmV4dCAhPSBudWxsICYmIG5leHQgIT09IHByZWZpeFxuICAgIHZhciByZXBlYXQgPSBtb2RpZmllciA9PT0gJysnIHx8IG1vZGlmaWVyID09PSAnKidcbiAgICB2YXIgb3B0aW9uYWwgPSBtb2RpZmllciA9PT0gJz8nIHx8IG1vZGlmaWVyID09PSAnKidcbiAgICB2YXIgZGVsaW1pdGVyID0gcmVzWzJdIHx8ICcvJ1xuICAgIHZhciBwYXR0ZXJuID0gY2FwdHVyZSB8fCBncm91cCB8fCAoYXN0ZXJpc2sgPyAnLionIDogJ1teJyArIGRlbGltaXRlciArICddKz8nKVxuXG4gICAgdG9rZW5zLnB1c2goe1xuICAgICAgbmFtZTogbmFtZSB8fCBrZXkrKyxcbiAgICAgIHByZWZpeDogcHJlZml4IHx8ICcnLFxuICAgICAgZGVsaW1pdGVyOiBkZWxpbWl0ZXIsXG4gICAgICBvcHRpb25hbDogb3B0aW9uYWwsXG4gICAgICByZXBlYXQ6IHJlcGVhdCxcbiAgICAgIHBhcnRpYWw6IHBhcnRpYWwsXG4gICAgICBhc3RlcmlzazogISFhc3RlcmlzayxcbiAgICAgIHBhdHRlcm46IGVzY2FwZUdyb3VwKHBhdHRlcm4pXG4gICAgfSlcbiAgfVxuXG4gIC8vIE1hdGNoIGFueSBjaGFyYWN0ZXJzIHN0aWxsIHJlbWFpbmluZy5cbiAgaWYgKGluZGV4IDwgc3RyLmxlbmd0aCkge1xuICAgIHBhdGggKz0gc3RyLnN1YnN0cihpbmRleClcbiAgfVxuXG4gIC8vIElmIHRoZSBwYXRoIGV4aXN0cywgcHVzaCBpdCBvbnRvIHRoZSBlbmQuXG4gIGlmIChwYXRoKSB7XG4gICAgdG9rZW5zLnB1c2gocGF0aClcbiAgfVxuXG4gIHJldHVybiB0b2tlbnNcbn1cblxuLyoqXG4gKiBDb21waWxlIGEgc3RyaW5nIHRvIGEgdGVtcGxhdGUgZnVuY3Rpb24gZm9yIHRoZSBwYXRoLlxuICpcbiAqIEBwYXJhbSAge3N0cmluZ30gICAgICAgICAgICAgc3RyXG4gKiBAcmV0dXJuIHshZnVuY3Rpb24oT2JqZWN0PSwgT2JqZWN0PSl9XG4gKi9cbmZ1bmN0aW9uIGNvbXBpbGUgKHN0cikge1xuICByZXR1cm4gdG9rZW5zVG9GdW5jdGlvbihwYXJzZShzdHIpKVxufVxuXG4vKipcbiAqIFByZXR0aWVyIGVuY29kaW5nIG9mIFVSSSBwYXRoIHNlZ21lbnRzLlxuICpcbiAqIEBwYXJhbSAge3N0cmluZ31cbiAqIEByZXR1cm4ge3N0cmluZ31cbiAqL1xuZnVuY3Rpb24gZW5jb2RlVVJJQ29tcG9uZW50UHJldHR5IChzdHIpIHtcbiAgcmV0dXJuIGVuY29kZVVSSShzdHIpLnJlcGxhY2UoL1tcXC8/I10vZywgZnVuY3Rpb24gKGMpIHtcbiAgICByZXR1cm4gJyUnICsgYy5jaGFyQ29kZUF0KDApLnRvU3RyaW5nKDE2KS50b1VwcGVyQ2FzZSgpXG4gIH0pXG59XG5cbi8qKlxuICogRW5jb2RlIHRoZSBhc3RlcmlzayBwYXJhbWV0ZXIuIFNpbWlsYXIgdG8gYHByZXR0eWAsIGJ1dCBhbGxvd3Mgc2xhc2hlcy5cbiAqXG4gKiBAcGFyYW0gIHtzdHJpbmd9XG4gKiBAcmV0dXJuIHtzdHJpbmd9XG4gKi9cbmZ1bmN0aW9uIGVuY29kZUFzdGVyaXNrIChzdHIpIHtcbiAgcmV0dXJuIGVuY29kZVVSSShzdHIpLnJlcGxhY2UoL1s/I10vZywgZnVuY3Rpb24gKGMpIHtcbiAgICByZXR1cm4gJyUnICsgYy5jaGFyQ29kZUF0KDApLnRvU3RyaW5nKDE2KS50b1VwcGVyQ2FzZSgpXG4gIH0pXG59XG5cbi8qKlxuICogRXhwb3NlIGEgbWV0aG9kIGZvciB0cmFuc2Zvcm1pbmcgdG9rZW5zIGludG8gdGhlIHBhdGggZnVuY3Rpb24uXG4gKi9cbmZ1bmN0aW9uIHRva2Vuc1RvRnVuY3Rpb24gKHRva2Vucykge1xuICAvLyBDb21waWxlIGFsbCB0aGUgdG9rZW5zIGludG8gcmVnZXhwcy5cbiAgdmFyIG1hdGNoZXMgPSBuZXcgQXJyYXkodG9rZW5zLmxlbmd0aClcblxuICAvLyBDb21waWxlIGFsbCB0aGUgcGF0dGVybnMgYmVmb3JlIGNvbXBpbGF0aW9uLlxuICBmb3IgKHZhciBpID0gMDsgaSA8IHRva2Vucy5sZW5ndGg7IGkrKykge1xuICAgIGlmICh0eXBlb2YgdG9rZW5zW2ldID09PSAnb2JqZWN0Jykge1xuICAgICAgbWF0Y2hlc1tpXSA9IG5ldyBSZWdFeHAoJ14oPzonICsgdG9rZW5zW2ldLnBhdHRlcm4gKyAnKSQnKVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBmdW5jdGlvbiAob2JqLCBvcHRzKSB7XG4gICAgdmFyIHBhdGggPSAnJ1xuICAgIHZhciBkYXRhID0gb2JqIHx8IHt9XG4gICAgdmFyIG9wdGlvbnMgPSBvcHRzIHx8IHt9XG4gICAgdmFyIGVuY29kZSA9IG9wdGlvbnMucHJldHR5ID8gZW5jb2RlVVJJQ29tcG9uZW50UHJldHR5IDogZW5jb2RlVVJJQ29tcG9uZW50XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRva2Vucy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIHRva2VuID0gdG9rZW5zW2ldXG5cbiAgICAgIGlmICh0eXBlb2YgdG9rZW4gPT09ICdzdHJpbmcnKSB7XG4gICAgICAgIHBhdGggKz0gdG9rZW5cblxuICAgICAgICBjb250aW51ZVxuICAgICAgfVxuXG4gICAgICB2YXIgdmFsdWUgPSBkYXRhW3Rva2VuLm5hbWVdXG4gICAgICB2YXIgc2VnbWVudFxuXG4gICAgICBpZiAodmFsdWUgPT0gbnVsbCkge1xuICAgICAgICBpZiAodG9rZW4ub3B0aW9uYWwpIHtcbiAgICAgICAgICAvLyBQcmVwZW5kIHBhcnRpYWwgc2VnbWVudCBwcmVmaXhlcy5cbiAgICAgICAgICBpZiAodG9rZW4ucGFydGlhbCkge1xuICAgICAgICAgICAgcGF0aCArPSB0b2tlbi5wcmVmaXhcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBjb250aW51ZVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ0V4cGVjdGVkIFwiJyArIHRva2VuLm5hbWUgKyAnXCIgdG8gYmUgZGVmaW5lZCcpXG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKGlzYXJyYXkodmFsdWUpKSB7XG4gICAgICAgIGlmICghdG9rZW4ucmVwZWF0KSB7XG4gICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignRXhwZWN0ZWQgXCInICsgdG9rZW4ubmFtZSArICdcIiB0byBub3QgcmVwZWF0LCBidXQgcmVjZWl2ZWQgYCcgKyBKU09OLnN0cmluZ2lmeSh2YWx1ZSkgKyAnYCcpXG4gICAgICAgIH1cblxuICAgICAgICBpZiAodmFsdWUubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgaWYgKHRva2VuLm9wdGlvbmFsKSB7XG4gICAgICAgICAgICBjb250aW51ZVxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdFeHBlY3RlZCBcIicgKyB0b2tlbi5uYW1lICsgJ1wiIHRvIG5vdCBiZSBlbXB0eScpXG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgZm9yICh2YXIgaiA9IDA7IGogPCB2YWx1ZS5sZW5ndGg7IGorKykge1xuICAgICAgICAgIHNlZ21lbnQgPSBlbmNvZGUodmFsdWVbal0pXG5cbiAgICAgICAgICBpZiAoIW1hdGNoZXNbaV0udGVzdChzZWdtZW50KSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignRXhwZWN0ZWQgYWxsIFwiJyArIHRva2VuLm5hbWUgKyAnXCIgdG8gbWF0Y2ggXCInICsgdG9rZW4ucGF0dGVybiArICdcIiwgYnV0IHJlY2VpdmVkIGAnICsgSlNPTi5zdHJpbmdpZnkoc2VnbWVudCkgKyAnYCcpXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcGF0aCArPSAoaiA9PT0gMCA/IHRva2VuLnByZWZpeCA6IHRva2VuLmRlbGltaXRlcikgKyBzZWdtZW50XG4gICAgICAgIH1cblxuICAgICAgICBjb250aW51ZVxuICAgICAgfVxuXG4gICAgICBzZWdtZW50ID0gdG9rZW4uYXN0ZXJpc2sgPyBlbmNvZGVBc3Rlcmlzayh2YWx1ZSkgOiBlbmNvZGUodmFsdWUpXG5cbiAgICAgIGlmICghbWF0Y2hlc1tpXS50ZXN0KHNlZ21lbnQpKSB7XG4gICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ0V4cGVjdGVkIFwiJyArIHRva2VuLm5hbWUgKyAnXCIgdG8gbWF0Y2ggXCInICsgdG9rZW4ucGF0dGVybiArICdcIiwgYnV0IHJlY2VpdmVkIFwiJyArIHNlZ21lbnQgKyAnXCInKVxuICAgICAgfVxuXG4gICAgICBwYXRoICs9IHRva2VuLnByZWZpeCArIHNlZ21lbnRcbiAgICB9XG5cbiAgICByZXR1cm4gcGF0aFxuICB9XG59XG5cbi8qKlxuICogRXNjYXBlIGEgcmVndWxhciBleHByZXNzaW9uIHN0cmluZy5cbiAqXG4gKiBAcGFyYW0gIHtzdHJpbmd9IHN0clxuICogQHJldHVybiB7c3RyaW5nfVxuICovXG5mdW5jdGlvbiBlc2NhcGVTdHJpbmcgKHN0cikge1xuICByZXR1cm4gc3RyLnJlcGxhY2UoLyhbLisqPz1eIToke30oKVtcXF18XFwvXFxcXF0pL2csICdcXFxcJDEnKVxufVxuXG4vKipcbiAqIEVzY2FwZSB0aGUgY2FwdHVyaW5nIGdyb3VwIGJ5IGVzY2FwaW5nIHNwZWNpYWwgY2hhcmFjdGVycyBhbmQgbWVhbmluZy5cbiAqXG4gKiBAcGFyYW0gIHtzdHJpbmd9IGdyb3VwXG4gKiBAcmV0dXJuIHtzdHJpbmd9XG4gKi9cbmZ1bmN0aW9uIGVzY2FwZUdyb3VwIChncm91cCkge1xuICByZXR1cm4gZ3JvdXAucmVwbGFjZSgvKFs9ITokXFwvKCldKS9nLCAnXFxcXCQxJylcbn1cblxuLyoqXG4gKiBBdHRhY2ggdGhlIGtleXMgYXMgYSBwcm9wZXJ0eSBvZiB0aGUgcmVnZXhwLlxuICpcbiAqIEBwYXJhbSAgeyFSZWdFeHB9IHJlXG4gKiBAcGFyYW0gIHtBcnJheX0gICBrZXlzXG4gKiBAcmV0dXJuIHshUmVnRXhwfVxuICovXG5mdW5jdGlvbiBhdHRhY2hLZXlzIChyZSwga2V5cykge1xuICByZS5rZXlzID0ga2V5c1xuICByZXR1cm4gcmVcbn1cblxuLyoqXG4gKiBHZXQgdGhlIGZsYWdzIGZvciBhIHJlZ2V4cCBmcm9tIHRoZSBvcHRpb25zLlxuICpcbiAqIEBwYXJhbSAge09iamVjdH0gb3B0aW9uc1xuICogQHJldHVybiB7c3RyaW5nfVxuICovXG5mdW5jdGlvbiBmbGFncyAob3B0aW9ucykge1xuICByZXR1cm4gb3B0aW9ucy5zZW5zaXRpdmUgPyAnJyA6ICdpJ1xufVxuXG4vKipcbiAqIFB1bGwgb3V0IGtleXMgZnJvbSBhIHJlZ2V4cC5cbiAqXG4gKiBAcGFyYW0gIHshUmVnRXhwfSBwYXRoXG4gKiBAcGFyYW0gIHshQXJyYXl9ICBrZXlzXG4gKiBAcmV0dXJuIHshUmVnRXhwfVxuICovXG5mdW5jdGlvbiByZWdleHBUb1JlZ2V4cCAocGF0aCwga2V5cykge1xuICAvLyBVc2UgYSBuZWdhdGl2ZSBsb29rYWhlYWQgdG8gbWF0Y2ggb25seSBjYXB0dXJpbmcgZ3JvdXBzLlxuICB2YXIgZ3JvdXBzID0gcGF0aC5zb3VyY2UubWF0Y2goL1xcKCg/IVxcPykvZylcblxuICBpZiAoZ3JvdXBzKSB7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBncm91cHMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGtleXMucHVzaCh7XG4gICAgICAgIG5hbWU6IGksXG4gICAgICAgIHByZWZpeDogbnVsbCxcbiAgICAgICAgZGVsaW1pdGVyOiBudWxsLFxuICAgICAgICBvcHRpb25hbDogZmFsc2UsXG4gICAgICAgIHJlcGVhdDogZmFsc2UsXG4gICAgICAgIHBhcnRpYWw6IGZhbHNlLFxuICAgICAgICBhc3RlcmlzazogZmFsc2UsXG4gICAgICAgIHBhdHRlcm46IG51bGxcbiAgICAgIH0pXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGF0dGFjaEtleXMocGF0aCwga2V5cylcbn1cblxuLyoqXG4gKiBUcmFuc2Zvcm0gYW4gYXJyYXkgaW50byBhIHJlZ2V4cC5cbiAqXG4gKiBAcGFyYW0gIHshQXJyYXl9ICBwYXRoXG4gKiBAcGFyYW0gIHtBcnJheX0gICBrZXlzXG4gKiBAcGFyYW0gIHshT2JqZWN0fSBvcHRpb25zXG4gKiBAcmV0dXJuIHshUmVnRXhwfVxuICovXG5mdW5jdGlvbiBhcnJheVRvUmVnZXhwIChwYXRoLCBrZXlzLCBvcHRpb25zKSB7XG4gIHZhciBwYXJ0cyA9IFtdXG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBwYXRoLmxlbmd0aDsgaSsrKSB7XG4gICAgcGFydHMucHVzaChwYXRoVG9SZWdleHAocGF0aFtpXSwga2V5cywgb3B0aW9ucykuc291cmNlKVxuICB9XG5cbiAgdmFyIHJlZ2V4cCA9IG5ldyBSZWdFeHAoJyg/OicgKyBwYXJ0cy5qb2luKCd8JykgKyAnKScsIGZsYWdzKG9wdGlvbnMpKVxuXG4gIHJldHVybiBhdHRhY2hLZXlzKHJlZ2V4cCwga2V5cylcbn1cblxuLyoqXG4gKiBDcmVhdGUgYSBwYXRoIHJlZ2V4cCBmcm9tIHN0cmluZyBpbnB1dC5cbiAqXG4gKiBAcGFyYW0gIHtzdHJpbmd9ICBwYXRoXG4gKiBAcGFyYW0gIHshQXJyYXl9ICBrZXlzXG4gKiBAcGFyYW0gIHshT2JqZWN0fSBvcHRpb25zXG4gKiBAcmV0dXJuIHshUmVnRXhwfVxuICovXG5mdW5jdGlvbiBzdHJpbmdUb1JlZ2V4cCAocGF0aCwga2V5cywgb3B0aW9ucykge1xuICB2YXIgdG9rZW5zID0gcGFyc2UocGF0aClcbiAgdmFyIHJlID0gdG9rZW5zVG9SZWdFeHAodG9rZW5zLCBvcHRpb25zKVxuXG4gIC8vIEF0dGFjaCBrZXlzIGJhY2sgdG8gdGhlIHJlZ2V4cC5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCB0b2tlbnMubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAodHlwZW9mIHRva2Vuc1tpXSAhPT0gJ3N0cmluZycpIHtcbiAgICAgIGtleXMucHVzaCh0b2tlbnNbaV0pXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGF0dGFjaEtleXMocmUsIGtleXMpXG59XG5cbi8qKlxuICogRXhwb3NlIGEgZnVuY3Rpb24gZm9yIHRha2luZyB0b2tlbnMgYW5kIHJldHVybmluZyBhIFJlZ0V4cC5cbiAqXG4gKiBAcGFyYW0gIHshQXJyYXl9ICB0b2tlbnNcbiAqIEBwYXJhbSAge09iamVjdD19IG9wdGlvbnNcbiAqIEByZXR1cm4geyFSZWdFeHB9XG4gKi9cbmZ1bmN0aW9uIHRva2Vuc1RvUmVnRXhwICh0b2tlbnMsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge31cblxuICB2YXIgc3RyaWN0ID0gb3B0aW9ucy5zdHJpY3RcbiAgdmFyIGVuZCA9IG9wdGlvbnMuZW5kICE9PSBmYWxzZVxuICB2YXIgcm91dGUgPSAnJ1xuICB2YXIgbGFzdFRva2VuID0gdG9rZW5zW3Rva2Vucy5sZW5ndGggLSAxXVxuICB2YXIgZW5kc1dpdGhTbGFzaCA9IHR5cGVvZiBsYXN0VG9rZW4gPT09ICdzdHJpbmcnICYmIC9cXC8kLy50ZXN0KGxhc3RUb2tlbilcblxuICAvLyBJdGVyYXRlIG92ZXIgdGhlIHRva2VucyBhbmQgY3JlYXRlIG91ciByZWdleHAgc3RyaW5nLlxuICBmb3IgKHZhciBpID0gMDsgaSA8IHRva2Vucy5sZW5ndGg7IGkrKykge1xuICAgIHZhciB0b2tlbiA9IHRva2Vuc1tpXVxuXG4gICAgaWYgKHR5cGVvZiB0b2tlbiA9PT0gJ3N0cmluZycpIHtcbiAgICAgIHJvdXRlICs9IGVzY2FwZVN0cmluZyh0b2tlbilcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHByZWZpeCA9IGVzY2FwZVN0cmluZyh0b2tlbi5wcmVmaXgpXG4gICAgICB2YXIgY2FwdHVyZSA9ICcoPzonICsgdG9rZW4ucGF0dGVybiArICcpJ1xuXG4gICAgICBpZiAodG9rZW4ucmVwZWF0KSB7XG4gICAgICAgIGNhcHR1cmUgKz0gJyg/OicgKyBwcmVmaXggKyBjYXB0dXJlICsgJykqJ1xuICAgICAgfVxuXG4gICAgICBpZiAodG9rZW4ub3B0aW9uYWwpIHtcbiAgICAgICAgaWYgKCF0b2tlbi5wYXJ0aWFsKSB7XG4gICAgICAgICAgY2FwdHVyZSA9ICcoPzonICsgcHJlZml4ICsgJygnICsgY2FwdHVyZSArICcpKT8nXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgY2FwdHVyZSA9IHByZWZpeCArICcoJyArIGNhcHR1cmUgKyAnKT8nXG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNhcHR1cmUgPSBwcmVmaXggKyAnKCcgKyBjYXB0dXJlICsgJyknXG4gICAgICB9XG5cbiAgICAgIHJvdXRlICs9IGNhcHR1cmVcbiAgICB9XG4gIH1cblxuICAvLyBJbiBub24tc3RyaWN0IG1vZGUgd2UgYWxsb3cgYSBzbGFzaCBhdCB0aGUgZW5kIG9mIG1hdGNoLiBJZiB0aGUgcGF0aCB0b1xuICAvLyBtYXRjaCBhbHJlYWR5IGVuZHMgd2l0aCBhIHNsYXNoLCB3ZSByZW1vdmUgaXQgZm9yIGNvbnNpc3RlbmN5LiBUaGUgc2xhc2hcbiAgLy8gaXMgdmFsaWQgYXQgdGhlIGVuZCBvZiBhIHBhdGggbWF0Y2gsIG5vdCBpbiB0aGUgbWlkZGxlLiBUaGlzIGlzIGltcG9ydGFudFxuICAvLyBpbiBub24tZW5kaW5nIG1vZGUsIHdoZXJlIFwiL3Rlc3QvXCIgc2hvdWxkbid0IG1hdGNoIFwiL3Rlc3QvL3JvdXRlXCIuXG4gIGlmICghc3RyaWN0KSB7XG4gICAgcm91dGUgPSAoZW5kc1dpdGhTbGFzaCA/IHJvdXRlLnNsaWNlKDAsIC0yKSA6IHJvdXRlKSArICcoPzpcXFxcLyg/PSQpKT8nXG4gIH1cblxuICBpZiAoZW5kKSB7XG4gICAgcm91dGUgKz0gJyQnXG4gIH0gZWxzZSB7XG4gICAgLy8gSW4gbm9uLWVuZGluZyBtb2RlLCB3ZSBuZWVkIHRoZSBjYXB0dXJpbmcgZ3JvdXBzIHRvIG1hdGNoIGFzIG11Y2ggYXNcbiAgICAvLyBwb3NzaWJsZSBieSB1c2luZyBhIHBvc2l0aXZlIGxvb2thaGVhZCB0byB0aGUgZW5kIG9yIG5leHQgcGF0aCBzZWdtZW50LlxuICAgIHJvdXRlICs9IHN0cmljdCAmJiBlbmRzV2l0aFNsYXNoID8gJycgOiAnKD89XFxcXC98JCknXG4gIH1cblxuICByZXR1cm4gbmV3IFJlZ0V4cCgnXicgKyByb3V0ZSwgZmxhZ3Mob3B0aW9ucykpXG59XG5cbi8qKlxuICogTm9ybWFsaXplIHRoZSBnaXZlbiBwYXRoIHN0cmluZywgcmV0dXJuaW5nIGEgcmVndWxhciBleHByZXNzaW9uLlxuICpcbiAqIEFuIGVtcHR5IGFycmF5IGNhbiBiZSBwYXNzZWQgaW4gZm9yIHRoZSBrZXlzLCB3aGljaCB3aWxsIGhvbGQgdGhlXG4gKiBwbGFjZWhvbGRlciBrZXkgZGVzY3JpcHRpb25zLiBGb3IgZXhhbXBsZSwgdXNpbmcgYC91c2VyLzppZGAsIGBrZXlzYCB3aWxsXG4gKiBjb250YWluIGBbeyBuYW1lOiAnaWQnLCBkZWxpbWl0ZXI6ICcvJywgb3B0aW9uYWw6IGZhbHNlLCByZXBlYXQ6IGZhbHNlIH1dYC5cbiAqXG4gKiBAcGFyYW0gIHsoc3RyaW5nfFJlZ0V4cHxBcnJheSl9IHBhdGhcbiAqIEBwYXJhbSAgeyhBcnJheXxPYmplY3QpPX0gICAgICAga2V5c1xuICogQHBhcmFtICB7T2JqZWN0PX0gICAgICAgICAgICAgICBvcHRpb25zXG4gKiBAcmV0dXJuIHshUmVnRXhwfVxuICovXG5mdW5jdGlvbiBwYXRoVG9SZWdleHAgKHBhdGgsIGtleXMsIG9wdGlvbnMpIHtcbiAga2V5cyA9IGtleXMgfHwgW11cblxuICBpZiAoIWlzYXJyYXkoa2V5cykpIHtcbiAgICBvcHRpb25zID0gLyoqIEB0eXBlIHshT2JqZWN0fSAqLyAoa2V5cylcbiAgICBrZXlzID0gW11cbiAgfSBlbHNlIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fVxuICB9XG5cbiAgaWYgKHBhdGggaW5zdGFuY2VvZiBSZWdFeHApIHtcbiAgICByZXR1cm4gcmVnZXhwVG9SZWdleHAocGF0aCwgLyoqIEB0eXBlIHshQXJyYXl9ICovIChrZXlzKSlcbiAgfVxuXG4gIGlmIChpc2FycmF5KHBhdGgpKSB7XG4gICAgcmV0dXJuIGFycmF5VG9SZWdleHAoLyoqIEB0eXBlIHshQXJyYXl9ICovIChwYXRoKSwgLyoqIEB0eXBlIHshQXJyYXl9ICovIChrZXlzKSwgb3B0aW9ucylcbiAgfVxuXG4gIHJldHVybiBzdHJpbmdUb1JlZ2V4cCgvKiogQHR5cGUge3N0cmluZ30gKi8gKHBhdGgpLCAvKiogQHR5cGUgeyFBcnJheX0gKi8gKGtleXMpLCBvcHRpb25zKVxufVxuIiwibW9kdWxlLmV4cG9ydHMgPSBBcnJheS5pc0FycmF5IHx8IGZ1bmN0aW9uIChhcnIpIHtcbiAgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChhcnIpID09ICdbb2JqZWN0IEFycmF5XSc7XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xudmFyIHN0cmljdFVyaUVuY29kZSA9IHJlcXVpcmUoJ3N0cmljdC11cmktZW5jb2RlJyk7XG5cbmZ1bmN0aW9uIGVuY29kZSh2YWx1ZSwgc3RyaWN0KSB7XG5cdHJldHVybiBzdHJpY3QgPyBzdHJpY3RVcmlFbmNvZGUodmFsdWUpIDogZW5jb2RlVVJJQ29tcG9uZW50KHZhbHVlKTtcbn1cblxuZXhwb3J0cy5leHRyYWN0ID0gZnVuY3Rpb24gKHN0cikge1xuXHRyZXR1cm4gc3RyLnNwbGl0KCc/JylbMV0gfHwgJyc7XG59O1xuXG5leHBvcnRzLnBhcnNlID0gZnVuY3Rpb24gKHN0cikge1xuXHQvLyBDcmVhdGUgYW4gb2JqZWN0IHdpdGggbm8gcHJvdG90eXBlXG5cdC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9zaW5kcmVzb3JodXMvcXVlcnktc3RyaW5nL2lzc3Vlcy80N1xuXHR2YXIgcmV0ID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcblxuXHRpZiAodHlwZW9mIHN0ciAhPT0gJ3N0cmluZycpIHtcblx0XHRyZXR1cm4gcmV0O1xuXHR9XG5cblx0c3RyID0gc3RyLnRyaW0oKS5yZXBsYWNlKC9eKFxcP3wjfCYpLywgJycpO1xuXG5cdGlmICghc3RyKSB7XG5cdFx0cmV0dXJuIHJldDtcblx0fVxuXG5cdHN0ci5zcGxpdCgnJicpLmZvckVhY2goZnVuY3Rpb24gKHBhcmFtKSB7XG5cdFx0dmFyIHBhcnRzID0gcGFyYW0ucmVwbGFjZSgvXFwrL2csICcgJykuc3BsaXQoJz0nKTtcblx0XHQvLyBGaXJlZm94IChwcmUgNDApIGRlY29kZXMgYCUzRGAgdG8gYD1gXG5cdFx0Ly8gaHR0cHM6Ly9naXRodWIuY29tL3NpbmRyZXNvcmh1cy9xdWVyeS1zdHJpbmcvcHVsbC8zN1xuXHRcdHZhciBrZXkgPSBwYXJ0cy5zaGlmdCgpO1xuXHRcdHZhciB2YWwgPSBwYXJ0cy5sZW5ndGggPiAwID8gcGFydHMuam9pbignPScpIDogdW5kZWZpbmVkO1xuXG5cdFx0a2V5ID0gZGVjb2RlVVJJQ29tcG9uZW50KGtleSk7XG5cblx0XHQvLyBtaXNzaW5nIGA9YCBzaG91bGQgYmUgYG51bGxgOlxuXHRcdC8vIGh0dHA6Ly93My5vcmcvVFIvMjAxMi9XRC11cmwtMjAxMjA1MjQvI2NvbGxlY3QtdXJsLXBhcmFtZXRlcnNcblx0XHR2YWwgPSB2YWwgPT09IHVuZGVmaW5lZCA/IG51bGwgOiBkZWNvZGVVUklDb21wb25lbnQodmFsKTtcblxuXHRcdGlmIChyZXRba2V5XSA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0XHRyZXRba2V5XSA9IHZhbDtcblx0XHR9IGVsc2UgaWYgKEFycmF5LmlzQXJyYXkocmV0W2tleV0pKSB7XG5cdFx0XHRyZXRba2V5XS5wdXNoKHZhbCk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHJldFtrZXldID0gW3JldFtrZXldLCB2YWxdO1xuXHRcdH1cblx0fSk7XG5cblx0cmV0dXJuIHJldDtcbn07XG5cbmV4cG9ydHMuc3RyaW5naWZ5ID0gZnVuY3Rpb24gKG9iaiwgb3B0cykge1xuXHRvcHRzID0gb3B0cyB8fCB7fTtcblxuXHR2YXIgc3RyaWN0ID0gb3B0cy5zdHJpY3QgIT09IGZhbHNlO1xuXG5cdHJldHVybiBvYmogPyBPYmplY3Qua2V5cyhvYmopLnNvcnQoKS5tYXAoZnVuY3Rpb24gKGtleSkge1xuXHRcdHZhciB2YWwgPSBvYmpba2V5XTtcblxuXHRcdGlmICh2YWwgPT09IHVuZGVmaW5lZCkge1xuXHRcdFx0cmV0dXJuICcnO1xuXHRcdH1cblxuXHRcdGlmICh2YWwgPT09IG51bGwpIHtcblx0XHRcdHJldHVybiBrZXk7XG5cdFx0fVxuXG5cdFx0aWYgKEFycmF5LmlzQXJyYXkodmFsKSkge1xuXHRcdFx0dmFyIHJlc3VsdCA9IFtdO1xuXG5cdFx0XHR2YWwuc2xpY2UoKS5zb3J0KCkuZm9yRWFjaChmdW5jdGlvbiAodmFsMikge1xuXHRcdFx0XHRpZiAodmFsMiA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0aWYgKHZhbDIgPT09IG51bGwpIHtcblx0XHRcdFx0XHRyZXN1bHQucHVzaChlbmNvZGUoa2V5LCBzdHJpY3QpKTtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRyZXN1bHQucHVzaChlbmNvZGUoa2V5LCBzdHJpY3QpICsgJz0nICsgZW5jb2RlKHZhbDIsIHN0cmljdCkpO1xuXHRcdFx0XHR9XG5cdFx0XHR9KTtcblxuXHRcdFx0cmV0dXJuIHJlc3VsdC5qb2luKCcmJyk7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIGVuY29kZShrZXksIHN0cmljdCkgKyAnPScgKyBlbmNvZGUodmFsLCBzdHJpY3QpO1xuXHR9KS5maWx0ZXIoZnVuY3Rpb24gKHgpIHtcblx0XHRyZXR1cm4geC5sZW5ndGggPiAwO1xuXHR9KS5qb2luKCcmJykgOiAnJztcbn07XG4iLCIoZnVuY3Rpb24gKGdsb2JhbCwgdW5kZWZpbmVkKSB7XG4gICAgXCJ1c2Ugc3RyaWN0XCI7XG5cbiAgICBpZiAoZ2xvYmFsLnNldEltbWVkaWF0ZSkge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdmFyIG5leHRIYW5kbGUgPSAxOyAvLyBTcGVjIHNheXMgZ3JlYXRlciB0aGFuIHplcm9cbiAgICB2YXIgdGFza3NCeUhhbmRsZSA9IHt9O1xuICAgIHZhciBjdXJyZW50bHlSdW5uaW5nQVRhc2sgPSBmYWxzZTtcbiAgICB2YXIgZG9jID0gZ2xvYmFsLmRvY3VtZW50O1xuICAgIHZhciBzZXRJbW1lZGlhdGU7XG5cbiAgICBmdW5jdGlvbiBhZGRGcm9tU2V0SW1tZWRpYXRlQXJndW1lbnRzKGFyZ3MpIHtcbiAgICAgICAgdGFza3NCeUhhbmRsZVtuZXh0SGFuZGxlXSA9IHBhcnRpYWxseUFwcGxpZWQuYXBwbHkodW5kZWZpbmVkLCBhcmdzKTtcbiAgICAgICAgcmV0dXJuIG5leHRIYW5kbGUrKztcbiAgICB9XG5cbiAgICAvLyBUaGlzIGZ1bmN0aW9uIGFjY2VwdHMgdGhlIHNhbWUgYXJndW1lbnRzIGFzIHNldEltbWVkaWF0ZSwgYnV0XG4gICAgLy8gcmV0dXJucyBhIGZ1bmN0aW9uIHRoYXQgcmVxdWlyZXMgbm8gYXJndW1lbnRzLlxuICAgIGZ1bmN0aW9uIHBhcnRpYWxseUFwcGxpZWQoaGFuZGxlcikge1xuICAgICAgICB2YXIgYXJncyA9IFtdLnNsaWNlLmNhbGwoYXJndW1lbnRzLCAxKTtcbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgaWYgKHR5cGVvZiBoYW5kbGVyID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgICAgICAgICBoYW5kbGVyLmFwcGx5KHVuZGVmaW5lZCwgYXJncyk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIChuZXcgRnVuY3Rpb24oXCJcIiArIGhhbmRsZXIpKSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHJ1bklmUHJlc2VudChoYW5kbGUpIHtcbiAgICAgICAgLy8gRnJvbSB0aGUgc3BlYzogXCJXYWl0IHVudGlsIGFueSBpbnZvY2F0aW9ucyBvZiB0aGlzIGFsZ29yaXRobSBzdGFydGVkIGJlZm9yZSB0aGlzIG9uZSBoYXZlIGNvbXBsZXRlZC5cIlxuICAgICAgICAvLyBTbyBpZiB3ZSdyZSBjdXJyZW50bHkgcnVubmluZyBhIHRhc2ssIHdlJ2xsIG5lZWQgdG8gZGVsYXkgdGhpcyBpbnZvY2F0aW9uLlxuICAgICAgICBpZiAoY3VycmVudGx5UnVubmluZ0FUYXNrKSB7XG4gICAgICAgICAgICAvLyBEZWxheSBieSBkb2luZyBhIHNldFRpbWVvdXQuIHNldEltbWVkaWF0ZSB3YXMgdHJpZWQgaW5zdGVhZCwgYnV0IGluIEZpcmVmb3ggNyBpdCBnZW5lcmF0ZWQgYVxuICAgICAgICAgICAgLy8gXCJ0b28gbXVjaCByZWN1cnNpb25cIiBlcnJvci5cbiAgICAgICAgICAgIHNldFRpbWVvdXQocGFydGlhbGx5QXBwbGllZChydW5JZlByZXNlbnQsIGhhbmRsZSksIDApO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdmFyIHRhc2sgPSB0YXNrc0J5SGFuZGxlW2hhbmRsZV07XG4gICAgICAgICAgICBpZiAodGFzaykge1xuICAgICAgICAgICAgICAgIGN1cnJlbnRseVJ1bm5pbmdBVGFzayA9IHRydWU7XG4gICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgdGFzaygpO1xuICAgICAgICAgICAgICAgIH0gZmluYWxseSB7XG4gICAgICAgICAgICAgICAgICAgIGNsZWFySW1tZWRpYXRlKGhhbmRsZSk7XG4gICAgICAgICAgICAgICAgICAgIGN1cnJlbnRseVJ1bm5pbmdBVGFzayA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGNsZWFySW1tZWRpYXRlKGhhbmRsZSkge1xuICAgICAgICBkZWxldGUgdGFza3NCeUhhbmRsZVtoYW5kbGVdO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGluc3RhbGxOZXh0VGlja0ltcGxlbWVudGF0aW9uKCkge1xuICAgICAgICBzZXRJbW1lZGlhdGUgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIHZhciBoYW5kbGUgPSBhZGRGcm9tU2V0SW1tZWRpYXRlQXJndW1lbnRzKGFyZ3VtZW50cyk7XG4gICAgICAgICAgICBwcm9jZXNzLm5leHRUaWNrKHBhcnRpYWxseUFwcGxpZWQocnVuSWZQcmVzZW50LCBoYW5kbGUpKTtcbiAgICAgICAgICAgIHJldHVybiBoYW5kbGU7XG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gY2FuVXNlUG9zdE1lc3NhZ2UoKSB7XG4gICAgICAgIC8vIFRoZSB0ZXN0IGFnYWluc3QgYGltcG9ydFNjcmlwdHNgIHByZXZlbnRzIHRoaXMgaW1wbGVtZW50YXRpb24gZnJvbSBiZWluZyBpbnN0YWxsZWQgaW5zaWRlIGEgd2ViIHdvcmtlcixcbiAgICAgICAgLy8gd2hlcmUgYGdsb2JhbC5wb3N0TWVzc2FnZWAgbWVhbnMgc29tZXRoaW5nIGNvbXBsZXRlbHkgZGlmZmVyZW50IGFuZCBjYW4ndCBiZSB1c2VkIGZvciB0aGlzIHB1cnBvc2UuXG4gICAgICAgIGlmIChnbG9iYWwucG9zdE1lc3NhZ2UgJiYgIWdsb2JhbC5pbXBvcnRTY3JpcHRzKSB7XG4gICAgICAgICAgICB2YXIgcG9zdE1lc3NhZ2VJc0FzeW5jaHJvbm91cyA9IHRydWU7XG4gICAgICAgICAgICB2YXIgb2xkT25NZXNzYWdlID0gZ2xvYmFsLm9ubWVzc2FnZTtcbiAgICAgICAgICAgIGdsb2JhbC5vbm1lc3NhZ2UgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICBwb3N0TWVzc2FnZUlzQXN5bmNocm9ub3VzID0gZmFsc2U7XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgZ2xvYmFsLnBvc3RNZXNzYWdlKFwiXCIsIFwiKlwiKTtcbiAgICAgICAgICAgIGdsb2JhbC5vbm1lc3NhZ2UgPSBvbGRPbk1lc3NhZ2U7XG4gICAgICAgICAgICByZXR1cm4gcG9zdE1lc3NhZ2VJc0FzeW5jaHJvbm91cztcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGluc3RhbGxQb3N0TWVzc2FnZUltcGxlbWVudGF0aW9uKCkge1xuICAgICAgICAvLyBJbnN0YWxscyBhbiBldmVudCBoYW5kbGVyIG9uIGBnbG9iYWxgIGZvciB0aGUgYG1lc3NhZ2VgIGV2ZW50OiBzZWVcbiAgICAgICAgLy8gKiBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi9ET00vd2luZG93LnBvc3RNZXNzYWdlXG4gICAgICAgIC8vICogaHR0cDovL3d3dy53aGF0d2cub3JnL3NwZWNzL3dlYi1hcHBzL2N1cnJlbnQtd29yay9tdWx0aXBhZ2UvY29tbXMuaHRtbCNjcm9zc0RvY3VtZW50TWVzc2FnZXNcblxuICAgICAgICB2YXIgbWVzc2FnZVByZWZpeCA9IFwic2V0SW1tZWRpYXRlJFwiICsgTWF0aC5yYW5kb20oKSArIFwiJFwiO1xuICAgICAgICB2YXIgb25HbG9iYWxNZXNzYWdlID0gZnVuY3Rpb24oZXZlbnQpIHtcbiAgICAgICAgICAgIGlmIChldmVudC5zb3VyY2UgPT09IGdsb2JhbCAmJlxuICAgICAgICAgICAgICAgIHR5cGVvZiBldmVudC5kYXRhID09PSBcInN0cmluZ1wiICYmXG4gICAgICAgICAgICAgICAgZXZlbnQuZGF0YS5pbmRleE9mKG1lc3NhZ2VQcmVmaXgpID09PSAwKSB7XG4gICAgICAgICAgICAgICAgcnVuSWZQcmVzZW50KCtldmVudC5kYXRhLnNsaWNlKG1lc3NhZ2VQcmVmaXgubGVuZ3RoKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG5cbiAgICAgICAgaWYgKGdsb2JhbC5hZGRFdmVudExpc3RlbmVyKSB7XG4gICAgICAgICAgICBnbG9iYWwuYWRkRXZlbnRMaXN0ZW5lcihcIm1lc3NhZ2VcIiwgb25HbG9iYWxNZXNzYWdlLCBmYWxzZSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBnbG9iYWwuYXR0YWNoRXZlbnQoXCJvbm1lc3NhZ2VcIiwgb25HbG9iYWxNZXNzYWdlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHNldEltbWVkaWF0ZSA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgdmFyIGhhbmRsZSA9IGFkZEZyb21TZXRJbW1lZGlhdGVBcmd1bWVudHMoYXJndW1lbnRzKTtcbiAgICAgICAgICAgIGdsb2JhbC5wb3N0TWVzc2FnZShtZXNzYWdlUHJlZml4ICsgaGFuZGxlLCBcIipcIik7XG4gICAgICAgICAgICByZXR1cm4gaGFuZGxlO1xuICAgICAgICB9O1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGluc3RhbGxNZXNzYWdlQ2hhbm5lbEltcGxlbWVudGF0aW9uKCkge1xuICAgICAgICB2YXIgY2hhbm5lbCA9IG5ldyBNZXNzYWdlQ2hhbm5lbCgpO1xuICAgICAgICBjaGFubmVsLnBvcnQxLm9ubWVzc2FnZSA9IGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgICAgICAgICB2YXIgaGFuZGxlID0gZXZlbnQuZGF0YTtcbiAgICAgICAgICAgIHJ1bklmUHJlc2VudChoYW5kbGUpO1xuICAgICAgICB9O1xuXG4gICAgICAgIHNldEltbWVkaWF0ZSA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgdmFyIGhhbmRsZSA9IGFkZEZyb21TZXRJbW1lZGlhdGVBcmd1bWVudHMoYXJndW1lbnRzKTtcbiAgICAgICAgICAgIGNoYW5uZWwucG9ydDIucG9zdE1lc3NhZ2UoaGFuZGxlKTtcbiAgICAgICAgICAgIHJldHVybiBoYW5kbGU7XG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gaW5zdGFsbFJlYWR5U3RhdGVDaGFuZ2VJbXBsZW1lbnRhdGlvbigpIHtcbiAgICAgICAgdmFyIGh0bWwgPSBkb2MuZG9jdW1lbnRFbGVtZW50O1xuICAgICAgICBzZXRJbW1lZGlhdGUgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIHZhciBoYW5kbGUgPSBhZGRGcm9tU2V0SW1tZWRpYXRlQXJndW1lbnRzKGFyZ3VtZW50cyk7XG4gICAgICAgICAgICAvLyBDcmVhdGUgYSA8c2NyaXB0PiBlbGVtZW50OyBpdHMgcmVhZHlzdGF0ZWNoYW5nZSBldmVudCB3aWxsIGJlIGZpcmVkIGFzeW5jaHJvbm91c2x5IG9uY2UgaXQgaXMgaW5zZXJ0ZWRcbiAgICAgICAgICAgIC8vIGludG8gdGhlIGRvY3VtZW50LiBEbyBzbywgdGh1cyBxdWV1aW5nIHVwIHRoZSB0YXNrLiBSZW1lbWJlciB0byBjbGVhbiB1cCBvbmNlIGl0J3MgYmVlbiBjYWxsZWQuXG4gICAgICAgICAgICB2YXIgc2NyaXB0ID0gZG9jLmNyZWF0ZUVsZW1lbnQoXCJzY3JpcHRcIik7XG4gICAgICAgICAgICBzY3JpcHQub25yZWFkeXN0YXRlY2hhbmdlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIHJ1bklmUHJlc2VudChoYW5kbGUpO1xuICAgICAgICAgICAgICAgIHNjcmlwdC5vbnJlYWR5c3RhdGVjaGFuZ2UgPSBudWxsO1xuICAgICAgICAgICAgICAgIGh0bWwucmVtb3ZlQ2hpbGQoc2NyaXB0KTtcbiAgICAgICAgICAgICAgICBzY3JpcHQgPSBudWxsO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIGh0bWwuYXBwZW5kQ2hpbGQoc2NyaXB0KTtcbiAgICAgICAgICAgIHJldHVybiBoYW5kbGU7XG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gaW5zdGFsbFNldFRpbWVvdXRJbXBsZW1lbnRhdGlvbigpIHtcbiAgICAgICAgc2V0SW1tZWRpYXRlID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICB2YXIgaGFuZGxlID0gYWRkRnJvbVNldEltbWVkaWF0ZUFyZ3VtZW50cyhhcmd1bWVudHMpO1xuICAgICAgICAgICAgc2V0VGltZW91dChwYXJ0aWFsbHlBcHBsaWVkKHJ1bklmUHJlc2VudCwgaGFuZGxlKSwgMCk7XG4gICAgICAgICAgICByZXR1cm4gaGFuZGxlO1xuICAgICAgICB9O1xuICAgIH1cblxuICAgIC8vIElmIHN1cHBvcnRlZCwgd2Ugc2hvdWxkIGF0dGFjaCB0byB0aGUgcHJvdG90eXBlIG9mIGdsb2JhbCwgc2luY2UgdGhhdCBpcyB3aGVyZSBzZXRUaW1lb3V0IGV0IGFsLiBsaXZlLlxuICAgIHZhciBhdHRhY2hUbyA9IE9iamVjdC5nZXRQcm90b3R5cGVPZiAmJiBPYmplY3QuZ2V0UHJvdG90eXBlT2YoZ2xvYmFsKTtcbiAgICBhdHRhY2hUbyA9IGF0dGFjaFRvICYmIGF0dGFjaFRvLnNldFRpbWVvdXQgPyBhdHRhY2hUbyA6IGdsb2JhbDtcblxuICAgIC8vIERvbid0IGdldCBmb29sZWQgYnkgZS5nLiBicm93c2VyaWZ5IGVudmlyb25tZW50cy5cbiAgICBpZiAoe30udG9TdHJpbmcuY2FsbChnbG9iYWwucHJvY2VzcykgPT09IFwiW29iamVjdCBwcm9jZXNzXVwiKSB7XG4gICAgICAgIC8vIEZvciBOb2RlLmpzIGJlZm9yZSAwLjlcbiAgICAgICAgaW5zdGFsbE5leHRUaWNrSW1wbGVtZW50YXRpb24oKTtcblxuICAgIH0gZWxzZSBpZiAoY2FuVXNlUG9zdE1lc3NhZ2UoKSkge1xuICAgICAgICAvLyBGb3Igbm9uLUlFMTAgbW9kZXJuIGJyb3dzZXJzXG4gICAgICAgIGluc3RhbGxQb3N0TWVzc2FnZUltcGxlbWVudGF0aW9uKCk7XG5cbiAgICB9IGVsc2UgaWYgKGdsb2JhbC5NZXNzYWdlQ2hhbm5lbCkge1xuICAgICAgICAvLyBGb3Igd2ViIHdvcmtlcnMsIHdoZXJlIHN1cHBvcnRlZFxuICAgICAgICBpbnN0YWxsTWVzc2FnZUNoYW5uZWxJbXBsZW1lbnRhdGlvbigpO1xuXG4gICAgfSBlbHNlIGlmIChkb2MgJiYgXCJvbnJlYWR5c3RhdGVjaGFuZ2VcIiBpbiBkb2MuY3JlYXRlRWxlbWVudChcInNjcmlwdFwiKSkge1xuICAgICAgICAvLyBGb3IgSUUgNuKAkzhcbiAgICAgICAgaW5zdGFsbFJlYWR5U3RhdGVDaGFuZ2VJbXBsZW1lbnRhdGlvbigpO1xuXG4gICAgfSBlbHNlIHtcbiAgICAgICAgLy8gRm9yIG9sZGVyIGJyb3dzZXJzXG4gICAgICAgIGluc3RhbGxTZXRUaW1lb3V0SW1wbGVtZW50YXRpb24oKTtcbiAgICB9XG5cbiAgICBhdHRhY2hUby5zZXRJbW1lZGlhdGUgPSBzZXRJbW1lZGlhdGU7XG4gICAgYXR0YWNoVG8uY2xlYXJJbW1lZGlhdGUgPSBjbGVhckltbWVkaWF0ZTtcbn0odHlwZW9mIHNlbGYgPT09IFwidW5kZWZpbmVkXCIgPyB0eXBlb2YgZ2xvYmFsID09PSBcInVuZGVmaW5lZFwiID8gdGhpcyA6IGdsb2JhbCA6IHNlbGYpKTtcbiIsIid1c2Ugc3RyaWN0Jztcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHN0cikge1xuXHRyZXR1cm4gZW5jb2RlVVJJQ29tcG9uZW50KHN0cikucmVwbGFjZSgvWyEnKCkqXS9nLCBmdW5jdGlvbiAoYykge1xuXHRcdHJldHVybiAnJScgKyBjLmNoYXJDb2RlQXQoMCkudG9TdHJpbmcoMTYpLnRvVXBwZXJDYXNlKCk7XG5cdH0pO1xufTtcbiIsInZhciBWdWUgLy8gbGF0ZSBiaW5kXG52YXIgbWFwID0gd2luZG93Ll9fVlVFX0hPVF9NQVBfXyA9IE9iamVjdC5jcmVhdGUobnVsbClcbnZhciBpbnN0YWxsZWQgPSBmYWxzZVxudmFyIGlzQnJvd3NlcmlmeSA9IGZhbHNlXG52YXIgaW5pdEhvb2tOYW1lID0gJ2JlZm9yZUNyZWF0ZSdcblxuZXhwb3J0cy5pbnN0YWxsID0gZnVuY3Rpb24gKHZ1ZSwgYnJvd3NlcmlmeSkge1xuICBpZiAoaW5zdGFsbGVkKSByZXR1cm5cbiAgaW5zdGFsbGVkID0gdHJ1ZVxuXG4gIFZ1ZSA9IHZ1ZVxuICBpc0Jyb3dzZXJpZnkgPSBicm93c2VyaWZ5XG5cbiAgLy8gY29tcGF0IHdpdGggPCAyLjAuMC1hbHBoYS43XG4gIGlmIChWdWUuY29uZmlnLl9saWZlY3ljbGVIb29rcy5pbmRleE9mKCdpbml0JykgPiAtMSkge1xuICAgIGluaXRIb29rTmFtZSA9ICdpbml0J1xuICB9XG5cbiAgZXhwb3J0cy5jb21wYXRpYmxlID0gTnVtYmVyKFZ1ZS52ZXJzaW9uLnNwbGl0KCcuJylbMF0pID49IDJcbiAgaWYgKCFleHBvcnRzLmNvbXBhdGlibGUpIHtcbiAgICBjb25zb2xlLndhcm4oXG4gICAgICAnW0hNUl0gWW91IGFyZSB1c2luZyBhIHZlcnNpb24gb2YgdnVlLWhvdC1yZWxvYWQtYXBpIHRoYXQgaXMgJyArXG4gICAgICAnb25seSBjb21wYXRpYmxlIHdpdGggVnVlLmpzIGNvcmUgXjIuMC4wLidcbiAgICApXG4gICAgcmV0dXJuXG4gIH1cbn1cblxuLyoqXG4gKiBDcmVhdGUgYSByZWNvcmQgZm9yIGEgaG90IG1vZHVsZSwgd2hpY2gga2VlcHMgdHJhY2sgb2YgaXRzIGNvbnN0cnVjdG9yXG4gKiBhbmQgaW5zdGFuY2VzXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IGlkXG4gKiBAcGFyYW0ge09iamVjdH0gb3B0aW9uc1xuICovXG5cbmV4cG9ydHMuY3JlYXRlUmVjb3JkID0gZnVuY3Rpb24gKGlkLCBvcHRpb25zKSB7XG4gIHZhciBDdG9yID0gbnVsbFxuICBpZiAodHlwZW9mIG9wdGlvbnMgPT09ICdmdW5jdGlvbicpIHtcbiAgICBDdG9yID0gb3B0aW9uc1xuICAgIG9wdGlvbnMgPSBDdG9yLm9wdGlvbnNcbiAgfVxuICBtYWtlT3B0aW9uc0hvdChpZCwgb3B0aW9ucylcbiAgbWFwW2lkXSA9IHtcbiAgICBDdG9yOiBWdWUuZXh0ZW5kKG9wdGlvbnMpLFxuICAgIGluc3RhbmNlczogW11cbiAgfVxufVxuXG4vKipcbiAqIE1ha2UgYSBDb21wb25lbnQgb3B0aW9ucyBvYmplY3QgaG90LlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBpZFxuICogQHBhcmFtIHtPYmplY3R9IG9wdGlvbnNcbiAqL1xuXG5mdW5jdGlvbiBtYWtlT3B0aW9uc0hvdCAoaWQsIG9wdGlvbnMpIHtcbiAgaW5qZWN0SG9vayhvcHRpb25zLCBpbml0SG9va05hbWUsIGZ1bmN0aW9uICgpIHtcbiAgICBtYXBbaWRdLmluc3RhbmNlcy5wdXNoKHRoaXMpXG4gIH0pXG4gIGluamVjdEhvb2sob3B0aW9ucywgJ2JlZm9yZURlc3Ryb3knLCBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGluc3RhbmNlcyA9IG1hcFtpZF0uaW5zdGFuY2VzXG4gICAgaW5zdGFuY2VzLnNwbGljZShpbnN0YW5jZXMuaW5kZXhPZih0aGlzKSwgMSlcbiAgfSlcbn1cblxuLyoqXG4gKiBJbmplY3QgYSBob29rIHRvIGEgaG90IHJlbG9hZGFibGUgY29tcG9uZW50IHNvIHRoYXRcbiAqIHdlIGNhbiBrZWVwIHRyYWNrIG9mIGl0LlxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSBvcHRpb25zXG4gKiBAcGFyYW0ge1N0cmluZ30gbmFtZVxuICogQHBhcmFtIHtGdW5jdGlvbn0gaG9va1xuICovXG5cbmZ1bmN0aW9uIGluamVjdEhvb2sgKG9wdGlvbnMsIG5hbWUsIGhvb2spIHtcbiAgdmFyIGV4aXN0aW5nID0gb3B0aW9uc1tuYW1lXVxuICBvcHRpb25zW25hbWVdID0gZXhpc3RpbmdcbiAgICA/IEFycmF5LmlzQXJyYXkoZXhpc3RpbmcpXG4gICAgICA/IGV4aXN0aW5nLmNvbmNhdChob29rKVxuICAgICAgOiBbZXhpc3RpbmcsIGhvb2tdXG4gICAgOiBbaG9va11cbn1cblxuZnVuY3Rpb24gdHJ5V3JhcCAoZm4pIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIChpZCwgYXJnKSB7XG4gICAgdHJ5IHsgZm4oaWQsIGFyZykgfSBjYXRjaCAoZSkge1xuICAgICAgY29uc29sZS5lcnJvcihlKVxuICAgICAgY29uc29sZS53YXJuKCdTb21ldGhpbmcgd2VudCB3cm9uZyBkdXJpbmcgVnVlIGNvbXBvbmVudCBob3QtcmVsb2FkLiBGdWxsIHJlbG9hZCByZXF1aXJlZC4nKVxuICAgIH1cbiAgfVxufVxuXG5leHBvcnRzLnJlcmVuZGVyID0gdHJ5V3JhcChmdW5jdGlvbiAoaWQsIGZucykge1xuICB2YXIgcmVjb3JkID0gbWFwW2lkXVxuICByZWNvcmQuQ3Rvci5vcHRpb25zLnJlbmRlciA9IGZucy5yZW5kZXJcbiAgcmVjb3JkLkN0b3Iub3B0aW9ucy5zdGF0aWNSZW5kZXJGbnMgPSBmbnMuc3RhdGljUmVuZGVyRm5zXG4gIHJlY29yZC5pbnN0YW5jZXMuc2xpY2UoKS5mb3JFYWNoKGZ1bmN0aW9uIChpbnN0YW5jZSkge1xuICAgIGluc3RhbmNlLiRvcHRpb25zLnJlbmRlciA9IGZucy5yZW5kZXJcbiAgICBpbnN0YW5jZS4kb3B0aW9ucy5zdGF0aWNSZW5kZXJGbnMgPSBmbnMuc3RhdGljUmVuZGVyRm5zXG4gICAgaW5zdGFuY2UuX3N0YXRpY1RyZWVzID0gW10gLy8gcmVzZXQgc3RhdGljIHRyZWVzXG4gICAgaW5zdGFuY2UuJGZvcmNlVXBkYXRlKClcbiAgICAvLyBmb3JjZSB1cGRhdGUgb24gZGlyZWN0IGNoaWxkcmVuIGZvciBwb3RlbnRpYWwgc2xvdCBjb250ZW50IHVwZGF0ZVxuICAgIGluc3RhbmNlLiRjaGlsZHJlbi5mb3JFYWNoKGZ1bmN0aW9uIChjaGlsZCkge1xuICAgICAgaWYgKE9iamVjdC5rZXlzKGNoaWxkLiRzbG90cykubGVuZ3RoID4gMCkge1xuICAgICAgICBjaGlsZC4kZm9yY2VVcGRhdGUoKVxuICAgICAgfVxuICAgIH0pXG4gIH0pXG59KVxuXG5leHBvcnRzLnJlbG9hZCA9IHRyeVdyYXAoZnVuY3Rpb24gKGlkLCBvcHRpb25zKSB7XG4gIG1ha2VPcHRpb25zSG90KGlkLCBvcHRpb25zKVxuICB2YXIgcmVjb3JkID0gbWFwW2lkXVxuICByZWNvcmQuQ3Rvci5leHRlbmRPcHRpb25zID0gb3B0aW9uc1xuICB2YXIgbmV3Q3RvciA9IFZ1ZS5leHRlbmQob3B0aW9ucylcbiAgcmVjb3JkLkN0b3Iub3B0aW9ucyA9IG5ld0N0b3Iub3B0aW9uc1xuICByZWNvcmQuQ3Rvci5jaWQgPSBuZXdDdG9yLmNpZFxuICBpZiAobmV3Q3Rvci5yZWxlYXNlKSB7XG4gICAgLy8gdGVtcG9yYXJ5IGdsb2JhbCBtaXhpbiBzdHJhdGVneSB1c2VkIGluIDwgMi4wLjAtYWxwaGEuNlxuICAgIG5ld0N0b3IucmVsZWFzZSgpXG4gIH1cbiAgcmVjb3JkLmluc3RhbmNlcy5zbGljZSgpLmZvckVhY2goZnVuY3Rpb24gKGluc3RhbmNlKSB7XG4gICAgaWYgKGluc3RhbmNlLiRwYXJlbnQpIHtcbiAgICAgIGluc3RhbmNlLiRwYXJlbnQuJGZvcmNlVXBkYXRlKClcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc29sZS53YXJuKCdSb290IG9yIG1hbnVhbGx5IG1vdW50ZWQgaW5zdGFuY2UgbW9kaWZpZWQuIEZ1bGwgcmVsb2FkIHJlcXVpcmVkLicpXG4gICAgfVxuICB9KVxufSlcbiIsIid1c2Ugc3RyaWN0JztcblxuLyoqXG4gKiBDb252ZXJ0IGEgdmFsdWUgdG8gYSBzdHJpbmcgdGhhdCBpcyBhY3R1YWxseSByZW5kZXJlZC5cbiAqL1xuZnVuY3Rpb24gX3RvU3RyaW5nKHZhbCkge1xuICByZXR1cm4gdmFsID09IG51bGwgPyAnJyA6IHR5cGVvZiB2YWwgPT09ICdvYmplY3QnID8gSlNPTi5zdHJpbmdpZnkodmFsLCBudWxsLCAyKSA6IFN0cmluZyh2YWwpO1xufVxuXG4vKipcbiAqIENvbnZlcnQgYSBpbnB1dCB2YWx1ZSB0byBhIG51bWJlciBmb3IgcGVyc2lzdGVuY2UuXG4gKiBJZiB0aGUgY29udmVyc2lvbiBmYWlscywgcmV0dXJuIG9yaWdpbmFsIHN0cmluZy5cbiAqL1xuZnVuY3Rpb24gdG9OdW1iZXIodmFsKSB7XG4gIHZhciBuID0gcGFyc2VGbG9hdCh2YWwsIDEwKTtcbiAgcmV0dXJuIG4gfHwgbiA9PT0gMCA/IG4gOiB2YWw7XG59XG5cbi8qKlxuICogTWFrZSBhIG1hcCBhbmQgcmV0dXJuIGEgZnVuY3Rpb24gZm9yIGNoZWNraW5nIGlmIGEga2V5XG4gKiBpcyBpbiB0aGF0IG1hcC5cbiAqL1xuZnVuY3Rpb24gbWFrZU1hcChzdHIsIGV4cGVjdHNMb3dlckNhc2UpIHtcbiAgdmFyIG1hcCA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gIHZhciBsaXN0ID0gc3RyLnNwbGl0KCcsJyk7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIG1hcFtsaXN0W2ldXSA9IHRydWU7XG4gIH1cbiAgcmV0dXJuIGV4cGVjdHNMb3dlckNhc2UgPyBmdW5jdGlvbiAodmFsKSB7XG4gICAgcmV0dXJuIG1hcFt2YWwudG9Mb3dlckNhc2UoKV07XG4gIH0gOiBmdW5jdGlvbiAodmFsKSB7XG4gICAgcmV0dXJuIG1hcFt2YWxdO1xuICB9O1xufVxuXG4vKipcbiAqIENoZWNrIGlmIGEgdGFnIGlzIGEgYnVpbHQtaW4gdGFnLlxuICovXG52YXIgaXNCdWlsdEluVGFnID0gbWFrZU1hcCgnc2xvdCxjb21wb25lbnQscmVuZGVyLHRyYW5zaXRpb24nLCB0cnVlKTtcblxuLyoqXG4gKiBSZW1vdmUgYW4gaXRlbSBmcm9tIGFuIGFycmF5XG4gKi9cbmZ1bmN0aW9uIHJlbW92ZShhcnIsIGl0ZW0pIHtcbiAgaWYgKGFyci5sZW5ndGgpIHtcbiAgICB2YXIgaW5kZXggPSBhcnIuaW5kZXhPZihpdGVtKTtcbiAgICBpZiAoaW5kZXggPiAtMSkge1xuICAgICAgcmV0dXJuIGFyci5zcGxpY2UoaW5kZXgsIDEpO1xuICAgIH1cbiAgfVxufVxuXG4vKipcbiAqIENoZWNrIHdoZXRoZXIgdGhlIG9iamVjdCBoYXMgdGhlIHByb3BlcnR5LlxuICovXG52YXIgaGFzT3duUHJvcGVydHkgPSBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5O1xuZnVuY3Rpb24gaGFzT3duKG9iaiwga2V5KSB7XG4gIHJldHVybiBoYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwga2V5KTtcbn1cblxuLyoqXG4gKiBDaGVjayBpZiB2YWx1ZSBpcyBwcmltaXRpdmVcbiAqL1xuZnVuY3Rpb24gaXNQcmltaXRpdmUodmFsdWUpIHtcbiAgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZycgfHwgdHlwZW9mIHZhbHVlID09PSAnbnVtYmVyJztcbn1cblxuLyoqXG4gKiBDcmVhdGUgYSBjYWNoZWQgdmVyc2lvbiBvZiBhIHB1cmUgZnVuY3Rpb24uXG4gKi9cbmZ1bmN0aW9uIGNhY2hlZChmbikge1xuICB2YXIgY2FjaGUgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuICByZXR1cm4gZnVuY3Rpb24gY2FjaGVkRm4oc3RyKSB7XG4gICAgdmFyIGhpdCA9IGNhY2hlW3N0cl07XG4gICAgcmV0dXJuIGhpdCB8fCAoY2FjaGVbc3RyXSA9IGZuKHN0cikpO1xuICB9O1xufVxuXG4vKipcbiAqIENhbWVsaXplIGEgaHlwaGVuLWRlbG1pdGVkIHN0cmluZy5cbiAqL1xudmFyIGNhbWVsaXplUkUgPSAvLShcXHcpL2c7XG52YXIgY2FtZWxpemUgPSBjYWNoZWQoZnVuY3Rpb24gKHN0cikge1xuICByZXR1cm4gc3RyLnJlcGxhY2UoY2FtZWxpemVSRSwgZnVuY3Rpb24gKF8sIGMpIHtcbiAgICByZXR1cm4gYyA/IGMudG9VcHBlckNhc2UoKSA6ICcnO1xuICB9KTtcbn0pO1xuXG4vKipcbiAqIENhcGl0YWxpemUgYSBzdHJpbmcuXG4gKi9cbnZhciBjYXBpdGFsaXplID0gY2FjaGVkKGZ1bmN0aW9uIChzdHIpIHtcbiAgcmV0dXJuIHN0ci5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIHN0ci5zbGljZSgxKTtcbn0pO1xuXG4vKipcbiAqIEh5cGhlbmF0ZSBhIGNhbWVsQ2FzZSBzdHJpbmcuXG4gKi9cbnZhciBoeXBoZW5hdGVSRSA9IC8oW14tXSkoW0EtWl0pL2c7XG52YXIgaHlwaGVuYXRlID0gY2FjaGVkKGZ1bmN0aW9uIChzdHIpIHtcbiAgcmV0dXJuIHN0ci5yZXBsYWNlKGh5cGhlbmF0ZVJFLCAnJDEtJDInKS5yZXBsYWNlKGh5cGhlbmF0ZVJFLCAnJDEtJDInKS50b0xvd2VyQ2FzZSgpO1xufSk7XG5cbi8qKlxuICogU2ltcGxlIGJpbmQsIGZhc3RlciB0aGFuIG5hdGl2ZVxuICovXG5mdW5jdGlvbiBiaW5kKGZuLCBjdHgpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIChhKSB7XG4gICAgdmFyIGwgPSBhcmd1bWVudHMubGVuZ3RoO1xuICAgIHJldHVybiBsID8gbCA+IDEgPyBmbi5hcHBseShjdHgsIGFyZ3VtZW50cykgOiBmbi5jYWxsKGN0eCwgYSkgOiBmbi5jYWxsKGN0eCk7XG4gIH07XG59XG5cbi8qKlxuICogQ29udmVydCBhbiBBcnJheS1saWtlIG9iamVjdCB0byBhIHJlYWwgQXJyYXkuXG4gKi9cbmZ1bmN0aW9uIHRvQXJyYXkobGlzdCwgc3RhcnQpIHtcbiAgc3RhcnQgPSBzdGFydCB8fCAwO1xuICB2YXIgaSA9IGxpc3QubGVuZ3RoIC0gc3RhcnQ7XG4gIHZhciByZXQgPSBuZXcgQXJyYXkoaSk7XG4gIHdoaWxlIChpLS0pIHtcbiAgICByZXRbaV0gPSBsaXN0W2kgKyBzdGFydF07XG4gIH1cbiAgcmV0dXJuIHJldDtcbn1cblxuLyoqXG4gKiBNaXggcHJvcGVydGllcyBpbnRvIHRhcmdldCBvYmplY3QuXG4gKi9cbmZ1bmN0aW9uIGV4dGVuZCh0bywgX2Zyb20pIHtcbiAgZm9yICh2YXIgX2tleSBpbiBfZnJvbSkge1xuICAgIHRvW19rZXldID0gX2Zyb21bX2tleV07XG4gIH1cbiAgcmV0dXJuIHRvO1xufVxuXG4vKipcbiAqIFF1aWNrIG9iamVjdCBjaGVjayAtIHRoaXMgaXMgcHJpbWFyaWx5IHVzZWQgdG8gdGVsbFxuICogT2JqZWN0cyBmcm9tIHByaW1pdGl2ZSB2YWx1ZXMgd2hlbiB3ZSBrbm93IHRoZSB2YWx1ZVxuICogaXMgYSBKU09OLWNvbXBsaWFudCB0eXBlLlxuICovXG5mdW5jdGlvbiBpc09iamVjdChvYmopIHtcbiAgcmV0dXJuIG9iaiAhPT0gbnVsbCAmJiB0eXBlb2Ygb2JqID09PSAnb2JqZWN0Jztcbn1cblxuLyoqXG4gKiBTdHJpY3Qgb2JqZWN0IHR5cGUgY2hlY2suIE9ubHkgcmV0dXJucyB0cnVlXG4gKiBmb3IgcGxhaW4gSmF2YVNjcmlwdCBvYmplY3RzLlxuICovXG52YXIgdG9TdHJpbmcgPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nO1xudmFyIE9CSkVDVF9TVFJJTkcgPSAnW29iamVjdCBPYmplY3RdJztcbmZ1bmN0aW9uIGlzUGxhaW5PYmplY3Qob2JqKSB7XG4gIHJldHVybiB0b1N0cmluZy5jYWxsKG9iaikgPT09IE9CSkVDVF9TVFJJTkc7XG59XG5cbi8qKlxuICogTWVyZ2UgYW4gQXJyYXkgb2YgT2JqZWN0cyBpbnRvIGEgc2luZ2xlIE9iamVjdC5cbiAqL1xuZnVuY3Rpb24gdG9PYmplY3QoYXJyKSB7XG4gIHZhciByZXMgPSBhcnJbMF0gfHwge307XG4gIGZvciAodmFyIGkgPSAxOyBpIDwgYXJyLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKGFycltpXSkge1xuICAgICAgZXh0ZW5kKHJlcywgYXJyW2ldKTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlcztcbn1cblxuLyoqXG4gKiBQZXJmb3JtIG5vIG9wZXJhdGlvbi5cbiAqL1xuZnVuY3Rpb24gbm9vcCgpIHt9XG5cbi8qKlxuICogQWx3YXlzIHJldHVybiBmYWxzZS5cbiAqL1xudmFyIG5vID0gZnVuY3Rpb24gbm8oKSB7XG4gIHJldHVybiBmYWxzZTtcbn07XG5cbi8qKlxuICogR2VuZXJhdGUgYSBzdGF0aWMga2V5cyBzdHJpbmcgZnJvbSBjb21waWxlciBtb2R1bGVzLlxuICovXG5mdW5jdGlvbiBnZW5TdGF0aWNLZXlzKG1vZHVsZXMpIHtcbiAgcmV0dXJuIG1vZHVsZXMucmVkdWNlKGZ1bmN0aW9uIChrZXlzLCBtKSB7XG4gICAgcmV0dXJuIGtleXMuY29uY2F0KG0uc3RhdGljS2V5cyB8fCBbXSk7XG4gIH0sIFtdKS5qb2luKCcsJyk7XG59XG5cbnZhciBjb25maWcgPSB7XG4gIC8qKlxuICAgKiBPcHRpb24gbWVyZ2Ugc3RyYXRlZ2llcyAodXNlZCBpbiBjb3JlL3V0aWwvb3B0aW9ucylcbiAgICovXG4gIG9wdGlvbk1lcmdlU3RyYXRlZ2llczogT2JqZWN0LmNyZWF0ZShudWxsKSxcblxuICAvKipcbiAgICogV2hldGhlciB0byBzdXBwcmVzcyB3YXJuaW5ncy5cbiAgICovXG4gIHNpbGVudDogZmFsc2UsXG5cbiAgLyoqXG4gICAqIFdoZXRoZXIgdG8gZW5hYmxlIGRldnRvb2xzXG4gICAqL1xuICBkZXZ0b29sczogcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyxcblxuICAvKipcbiAgICogRXJyb3IgaGFuZGxlciBmb3Igd2F0Y2hlciBlcnJvcnNcbiAgICovXG4gIGVycm9ySGFuZGxlcjogbnVsbCxcblxuICAvKipcbiAgICogSWdub3JlIGNlcnRhaW4gY3VzdG9tIGVsZW1lbnRzXG4gICAqL1xuICBpZ25vcmVkRWxlbWVudHM6IG51bGwsXG5cbiAgLyoqXG4gICAqIEN1c3RvbSB1c2VyIGtleSBhbGlhc2VzIGZvciB2LW9uXG4gICAqL1xuICBrZXlDb2RlczogT2JqZWN0LmNyZWF0ZShudWxsKSxcblxuICAvKipcbiAgICogQ2hlY2sgaWYgYSB0YWcgaXMgcmVzZXJ2ZWQgc28gdGhhdCBpdCBjYW5ub3QgYmUgcmVnaXN0ZXJlZCBhcyBhXG4gICAqIGNvbXBvbmVudC4gVGhpcyBpcyBwbGF0Zm9ybS1kZXBlbmRlbnQgYW5kIG1heSBiZSBvdmVyd3JpdHRlbi5cbiAgICovXG4gIGlzUmVzZXJ2ZWRUYWc6IG5vLFxuXG4gIC8qKlxuICAgKiBDaGVjayBpZiBhIHRhZyBpcyBhbiB1bmtub3duIGVsZW1lbnQuXG4gICAqIFBsYXRmb3JtLWRlcGVuZGVudC5cbiAgICovXG4gIGlzVW5rbm93bkVsZW1lbnQ6IG5vLFxuXG4gIC8qKlxuICAgKiBHZXQgdGhlIG5hbWVzcGFjZSBvZiBhbiBlbGVtZW50XG4gICAqL1xuICBnZXRUYWdOYW1lc3BhY2U6IG5vb3AsXG5cbiAgLyoqXG4gICAqIENoZWNrIGlmIGFuIGF0dHJpYnV0ZSBtdXN0IGJlIGJvdW5kIHVzaW5nIHByb3BlcnR5LCBlLmcuIHZhbHVlXG4gICAqIFBsYXRmb3JtLWRlcGVuZGVudC5cbiAgICovXG4gIG11c3RVc2VQcm9wOiBubyxcblxuICAvKipcbiAgICogTGlzdCBvZiBhc3NldCB0eXBlcyB0aGF0IGEgY29tcG9uZW50IGNhbiBvd24uXG4gICAqL1xuICBfYXNzZXRUeXBlczogWydjb21wb25lbnQnLCAnZGlyZWN0aXZlJywgJ3RyYW5zaXRpb24nLCAnZmlsdGVyJ10sXG5cbiAgLyoqXG4gICAqIExpc3Qgb2YgbGlmZWN5Y2xlIGhvb2tzLlxuICAgKi9cbiAgX2xpZmVjeWNsZUhvb2tzOiBbJ2JlZm9yZUNyZWF0ZScsICdjcmVhdGVkJywgJ2JlZm9yZU1vdW50JywgJ21vdW50ZWQnLCAnYmVmb3JlVXBkYXRlJywgJ3VwZGF0ZWQnLCAnYmVmb3JlRGVzdHJveScsICdkZXN0cm95ZWQnLCAnYWN0aXZhdGVkJywgJ2RlYWN0aXZhdGVkJ10sXG5cbiAgLyoqXG4gICAqIE1heCBjaXJjdWxhciB1cGRhdGVzIGFsbG93ZWQgaW4gYSBzY2hlZHVsZXIgZmx1c2ggY3ljbGUuXG4gICAqL1xuICBfbWF4VXBkYXRlQ291bnQ6IDEwMCxcblxuICAvKipcbiAgICogU2VydmVyIHJlbmRlcmluZz9cbiAgICovXG4gIF9pc1NlcnZlcjogcHJvY2Vzcy5lbnYuVlVFX0VOViA9PT0gJ3NlcnZlcidcbn07XG5cbi8qKlxuICogQ2hlY2sgaWYgYSBzdHJpbmcgc3RhcnRzIHdpdGggJCBvciBfXG4gKi9cbmZ1bmN0aW9uIGlzUmVzZXJ2ZWQoc3RyKSB7XG4gIHZhciBjID0gKHN0ciArICcnKS5jaGFyQ29kZUF0KDApO1xuICByZXR1cm4gYyA9PT0gMHgyNCB8fCBjID09PSAweDVGO1xufVxuXG4vKipcbiAqIERlZmluZSBhIHByb3BlcnR5LlxuICovXG5mdW5jdGlvbiBkZWYob2JqLCBrZXksIHZhbCwgZW51bWVyYWJsZSkge1xuICBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHtcbiAgICB2YWx1ZTogdmFsLFxuICAgIGVudW1lcmFibGU6ICEhZW51bWVyYWJsZSxcbiAgICB3cml0YWJsZTogdHJ1ZSxcbiAgICBjb25maWd1cmFibGU6IHRydWVcbiAgfSk7XG59XG5cbi8qKlxuICogUGFyc2Ugc2ltcGxlIHBhdGguXG4gKi9cbnZhciBiYWlsUkUgPSAvW15cXHdcXC5cXCRdLztcbmZ1bmN0aW9uIHBhcnNlUGF0aChwYXRoKSB7XG4gIGlmIChiYWlsUkUudGVzdChwYXRoKSkge1xuICAgIHJldHVybjtcbiAgfSBlbHNlIHtcbiAgICB2YXIgX3JldCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIHZhciBzZWdtZW50cyA9IHBhdGguc3BsaXQoJy4nKTtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHY6IGZ1bmN0aW9uIHYob2JqKSB7XG4gICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBzZWdtZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaWYgKCFvYmopIHJldHVybjtcbiAgICAgICAgICAgIG9iaiA9IG9ialtzZWdtZW50c1tpXV07XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiBvYmo7XG4gICAgICAgIH1cbiAgICAgIH07XG4gICAgfSgpO1xuXG4gICAgaWYgKHR5cGVvZiBfcmV0ID09PSBcIm9iamVjdFwiKSByZXR1cm4gX3JldC52O1xuICB9XG59XG5cbi8qIGdsb2JhbCBNdXRhdGlvbk9ic2VydmVyICovXG4vLyBjYW4gd2UgdXNlIF9fcHJvdG9fXz9cbnZhciBoYXNQcm90byA9ICdfX3Byb3RvX18nIGluIHt9O1xuXG4vLyBCcm93c2VyIGVudmlyb25tZW50IHNuaWZmaW5nXG52YXIgaW5Ccm93c2VyID0gdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiYgT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKHdpbmRvdykgIT09ICdbb2JqZWN0IE9iamVjdF0nO1xuXG4vLyBkZXRlY3QgZGV2dG9vbHNcbnZhciBkZXZ0b29scyA9IGluQnJvd3NlciAmJiB3aW5kb3cuX19WVUVfREVWVE9PTFNfR0xPQkFMX0hPT0tfXztcblxuLy8gVUEgc25pZmZpbmcgZm9yIHdvcmtpbmcgYXJvdW5kIGJyb3dzZXItc3BlY2lmaWMgcXVpcmtzXG52YXIgVUEgPSBpbkJyb3dzZXIgJiYgd2luZG93Lm5hdmlnYXRvci51c2VyQWdlbnQudG9Mb3dlckNhc2UoKTtcbnZhciBpc0lvcyA9IFVBICYmIC8oaXBob25lfGlwYWR8aXBvZHxpb3MpL2kudGVzdChVQSk7XG52YXIgaW9zVmVyc2lvbk1hdGNoID0gVUEgJiYgaXNJb3MgJiYgVUEubWF0Y2goL29zIChbXFxkX10rKS8pO1xudmFyIGlvc1ZlcnNpb24gPSBpb3NWZXJzaW9uTWF0Y2ggJiYgaW9zVmVyc2lvbk1hdGNoWzFdLnNwbGl0KCdfJyk7XG5cbi8vIE11dGF0aW9uT2JzZXJ2ZXIgaXMgdW5yZWxpYWJsZSBpbiBpT1MgOS4zIFVJV2ViVmlld1xuLy8gZGV0ZWN0aW5nIGl0IGJ5IGNoZWNraW5nIHByZXNlbmNlIG9mIEluZGV4ZWREQlxuLy8gcmVmICMzMDI3XG52YXIgaGFzTXV0YXRpb25PYnNlcnZlckJ1ZyA9IGlvc1ZlcnNpb24gJiYgTnVtYmVyKGlvc1ZlcnNpb25bMF0pID49IDkgJiYgTnVtYmVyKGlvc1ZlcnNpb25bMV0pID49IDMgJiYgIXdpbmRvdy5pbmRleGVkREI7XG5cbi8qKlxuICogRGVmZXIgYSB0YXNrIHRvIGV4ZWN1dGUgaXQgYXN5bmNocm9ub3VzbHkuIElkZWFsbHkgdGhpc1xuICogc2hvdWxkIGJlIGV4ZWN1dGVkIGFzIGEgbWljcm90YXNrLCBzbyB3ZSBsZXZlcmFnZVxuICogTXV0YXRpb25PYnNlcnZlciBpZiBpdCdzIGF2YWlsYWJsZSwgYW5kIGZhbGxiYWNrIHRvXG4gKiBzZXRUaW1lb3V0KDApLlxuICpcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGNiXG4gKiBAcGFyYW0ge09iamVjdH0gY3R4XG4gKi9cbnZhciBuZXh0VGljayA9IGZ1bmN0aW9uICgpIHtcbiAgdmFyIGNhbGxiYWNrcyA9IFtdO1xuICB2YXIgcGVuZGluZyA9IGZhbHNlO1xuICB2YXIgdGltZXJGdW5jID0gdm9pZCAwO1xuICBmdW5jdGlvbiBuZXh0VGlja0hhbmRsZXIoKSB7XG4gICAgcGVuZGluZyA9IGZhbHNlO1xuICAgIHZhciBjb3BpZXMgPSBjYWxsYmFja3Muc2xpY2UoMCk7XG4gICAgY2FsbGJhY2tzID0gW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBjb3BpZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGNvcGllc1tpXSgpO1xuICAgIH1cbiAgfVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBlbHNlICovXG4gIGlmICh0eXBlb2YgTXV0YXRpb25PYnNlcnZlciAhPT0gJ3VuZGVmaW5lZCcgJiYgIWhhc011dGF0aW9uT2JzZXJ2ZXJCdWcpIHtcbiAgICAoZnVuY3Rpb24gKCkge1xuICAgICAgdmFyIGNvdW50ZXIgPSAxO1xuICAgICAgdmFyIG9ic2VydmVyID0gbmV3IE11dGF0aW9uT2JzZXJ2ZXIobmV4dFRpY2tIYW5kbGVyKTtcbiAgICAgIHZhciB0ZXh0Tm9kZSA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKFN0cmluZyhjb3VudGVyKSk7XG4gICAgICBvYnNlcnZlci5vYnNlcnZlKHRleHROb2RlLCB7XG4gICAgICAgIGNoYXJhY3RlckRhdGE6IHRydWVcbiAgICAgIH0pO1xuICAgICAgdGltZXJGdW5jID0gZnVuY3Rpb24gdGltZXJGdW5jKCkge1xuICAgICAgICBjb3VudGVyID0gKGNvdW50ZXIgKyAxKSAlIDI7XG4gICAgICAgIHRleHROb2RlLmRhdGEgPSBTdHJpbmcoY291bnRlcik7XG4gICAgICB9O1xuICAgIH0pKCk7XG4gIH0gZWxzZSB7XG4gICAgLy8gd2VicGFjayBhdHRlbXB0cyB0byBpbmplY3QgYSBzaGltIGZvciBzZXRJbW1lZGlhdGVcbiAgICAvLyBpZiBpdCBpcyB1c2VkIGFzIGEgZ2xvYmFsLCBzbyB3ZSBoYXZlIHRvIHdvcmsgYXJvdW5kIHRoYXQgdG9cbiAgICAvLyBhdm9pZCBidW5kbGluZyB1bm5lY2Vzc2FyeSBjb2RlLlxuICAgIHZhciBjb250ZXh0ID0gaW5Ccm93c2VyID8gd2luZG93IDogdHlwZW9mIGdsb2JhbCAhPT0gJ3VuZGVmaW5lZCcgPyBnbG9iYWwgOiB7fTtcbiAgICB0aW1lckZ1bmMgPSBjb250ZXh0LnNldEltbWVkaWF0ZSB8fCBzZXRUaW1lb3V0O1xuICB9XG4gIHJldHVybiBmdW5jdGlvbiAoY2IsIGN0eCkge1xuICAgIHZhciBmdW5jID0gY3R4ID8gZnVuY3Rpb24gKCkge1xuICAgICAgY2IuY2FsbChjdHgpO1xuICAgIH0gOiBjYjtcbiAgICBjYWxsYmFja3MucHVzaChmdW5jKTtcbiAgICBpZiAocGVuZGluZykgcmV0dXJuO1xuICAgIHBlbmRpbmcgPSB0cnVlO1xuICAgIHRpbWVyRnVuYyhuZXh0VGlja0hhbmRsZXIsIDApO1xuICB9O1xufSgpO1xuXG52YXIgX1NldCA9IHZvaWQgMDtcbi8qIGlzdGFuYnVsIGlnbm9yZSBpZiAqL1xuaWYgKHR5cGVvZiBTZXQgIT09ICd1bmRlZmluZWQnICYmIC9uYXRpdmUgY29kZS8udGVzdChTZXQudG9TdHJpbmcoKSkpIHtcbiAgLy8gdXNlIG5hdGl2ZSBTZXQgd2hlbiBhdmFpbGFibGUuXG4gIF9TZXQgPSBTZXQ7XG59IGVsc2Uge1xuICAvLyBhIG5vbi1zdGFuZGFyZCBTZXQgcG9seWZpbGwgdGhhdCBvbmx5IHdvcmtzIHdpdGggcHJpbWl0aXZlIGtleXMuXG4gIF9TZXQgPSBmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gU2V0KCkge1xuICAgICAgdGhpcy5zZXQgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuICAgIH1cblxuICAgIFNldC5wcm90b3R5cGUuaGFzID0gZnVuY3Rpb24gaGFzKGtleSkge1xuICAgICAgcmV0dXJuIHRoaXMuc2V0W2tleV0gIT09IHVuZGVmaW5lZDtcbiAgICB9O1xuXG4gICAgU2V0LnByb3RvdHlwZS5hZGQgPSBmdW5jdGlvbiBhZGQoa2V5KSB7XG4gICAgICB0aGlzLnNldFtrZXldID0gMTtcbiAgICB9O1xuXG4gICAgU2V0LnByb3RvdHlwZS5jbGVhciA9IGZ1bmN0aW9uIGNsZWFyKCkge1xuICAgICAgdGhpcy5zZXQgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuICAgIH07XG5cbiAgICByZXR1cm4gU2V0O1xuICB9KCk7XG59XG5cbnZhciBoYXNQcm94eSA9IHZvaWQgMDtcbnZhciBwcm94eUhhbmRsZXJzID0gdm9pZCAwO1xudmFyIGluaXRQcm94eSA9IHZvaWQgMDtcbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gIChmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGFsbG93ZWRHbG9iYWxzID0gbWFrZU1hcCgnSW5maW5pdHksdW5kZWZpbmVkLE5hTixpc0Zpbml0ZSxpc05hTiwnICsgJ3BhcnNlRmxvYXQscGFyc2VJbnQsZGVjb2RlVVJJLGRlY29kZVVSSUNvbXBvbmVudCxlbmNvZGVVUkksZW5jb2RlVVJJQ29tcG9uZW50LCcgKyAnTWF0aCxOdW1iZXIsRGF0ZSxBcnJheSxPYmplY3QsQm9vbGVhbixTdHJpbmcsUmVnRXhwLE1hcCxTZXQsSlNPTixJbnRsLCcgKyAncmVxdWlyZSxfX3dlYnBhY2tfcmVxdWlyZV9fJyAvLyBmb3IgV2VicGFjay9Ccm93c2VyaWZ5XG4gICAgKTtcblxuICAgIGhhc1Byb3h5ID0gdHlwZW9mIFByb3h5ICE9PSAndW5kZWZpbmVkJyAmJiBQcm94eS50b1N0cmluZygpLm1hdGNoKC9uYXRpdmUgY29kZS8pO1xuXG4gICAgcHJveHlIYW5kbGVycyA9IHtcbiAgICAgIGhhczogZnVuY3Rpb24gaGFzKHRhcmdldCwga2V5KSB7XG4gICAgICAgIHZhciBoYXMgPSBrZXkgaW4gdGFyZ2V0O1xuICAgICAgICB2YXIgaXNBbGxvd2VkR2xvYmFsID0gYWxsb3dlZEdsb2JhbHMoa2V5KTtcbiAgICAgICAgaWYgKCFoYXMgJiYgIWlzQWxsb3dlZEdsb2JhbCkge1xuICAgICAgICAgIHdhcm4oJ1RyeWluZyB0byBhY2Nlc3Mgbm9uLWV4aXN0ZW50IHByb3BlcnR5IFwiJyArIGtleSArICdcIiB3aGlsZSByZW5kZXJpbmcuICcgKyAnTWFrZSBzdXJlIHRvIGRlY2xhcmUgcmVhY3RpdmUgZGF0YSBwcm9wZXJ0aWVzIGluIHRoZSBkYXRhIG9wdGlvbi4nLCB0YXJnZXQpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiAhaXNBbGxvd2VkR2xvYmFsO1xuICAgICAgfVxuICAgIH07XG5cbiAgICBpbml0UHJveHkgPSBmdW5jdGlvbiBpbml0UHJveHkodm0pIHtcbiAgICAgIGlmIChoYXNQcm94eSkge1xuICAgICAgICB2bS5fcmVuZGVyUHJveHkgPSBuZXcgUHJveHkodm0sIHByb3h5SGFuZGxlcnMpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdm0uX3JlbmRlclByb3h5ID0gdm07XG4gICAgICB9XG4gICAgfTtcbiAgfSkoKTtcbn1cblxudmFyIHVpZCQyID0gMDtcblxuLyoqXG4gKiBBIGRlcCBpcyBhbiBvYnNlcnZhYmxlIHRoYXQgY2FuIGhhdmUgbXVsdGlwbGVcbiAqIGRpcmVjdGl2ZXMgc3Vic2NyaWJpbmcgdG8gaXQuXG4gKi9cblxudmFyIERlcCA9IGZ1bmN0aW9uICgpIHtcbiAgZnVuY3Rpb24gRGVwKCkge1xuICAgIHRoaXMuaWQgPSB1aWQkMisrO1xuICAgIHRoaXMuc3VicyA9IFtdO1xuICB9XG5cbiAgRGVwLnByb3RvdHlwZS5hZGRTdWIgPSBmdW5jdGlvbiBhZGRTdWIoc3ViKSB7XG4gICAgdGhpcy5zdWJzLnB1c2goc3ViKTtcbiAgfTtcblxuICBEZXAucHJvdG90eXBlLnJlbW92ZVN1YiA9IGZ1bmN0aW9uIHJlbW92ZVN1YihzdWIpIHtcbiAgICByZW1vdmUodGhpcy5zdWJzLCBzdWIpO1xuICB9O1xuXG4gIERlcC5wcm90b3R5cGUuZGVwZW5kID0gZnVuY3Rpb24gZGVwZW5kKCkge1xuICAgIGlmIChEZXAudGFyZ2V0KSB7XG4gICAgICBEZXAudGFyZ2V0LmFkZERlcCh0aGlzKTtcbiAgICB9XG4gIH07XG5cbiAgRGVwLnByb3RvdHlwZS5ub3RpZnkgPSBmdW5jdGlvbiBub3RpZnkoKSB7XG4gICAgLy8gc3RhYmxpemUgdGhlIHN1YnNjcmliZXIgbGlzdCBmaXJzdFxuICAgIHZhciBzdWJzID0gdGhpcy5zdWJzLnNsaWNlKCk7XG4gICAgZm9yICh2YXIgaSA9IDAsIGwgPSBzdWJzLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgc3Vic1tpXS51cGRhdGUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIERlcDtcbn0oKTtcblxuRGVwLnRhcmdldCA9IG51bGw7XG52YXIgdGFyZ2V0U3RhY2sgPSBbXTtcblxuZnVuY3Rpb24gcHVzaFRhcmdldChfdGFyZ2V0KSB7XG4gIGlmIChEZXAudGFyZ2V0KSB0YXJnZXRTdGFjay5wdXNoKERlcC50YXJnZXQpO1xuICBEZXAudGFyZ2V0ID0gX3RhcmdldDtcbn1cblxuZnVuY3Rpb24gcG9wVGFyZ2V0KCkge1xuICBEZXAudGFyZ2V0ID0gdGFyZ2V0U3RhY2sucG9wKCk7XG59XG5cbi8vIFdlIGhhdmUgdHdvIHNlcGFyYXRlIHF1ZXVlczogb25lIGZvciBpbnRlcm5hbCBjb21wb25lbnQgcmUtcmVuZGVyIHVwZGF0ZXNcbi8vIGFuZCBvbmUgZm9yIHVzZXIgd2F0Y2hlciByZWdpc3RlcmVkIHZpYSAkd2F0Y2goKS4gV2Ugd2FudCB0byBndWFyYW50ZWVcbi8vIHJlLXJlbmRlciB1cGRhdGVzIHRvIGJlIGNhbGxlZCBiZWZvcmUgdXNlciB3YXRjaGVycyBzbyB0aGF0IHdoZW4gdXNlclxuLy8gd2F0Y2hlcnMgYXJlIHRyaWdnZXJlZCwgdGhlIERPTSB3b3VsZCBhbHJlYWR5IGJlIGluIHVwZGF0ZWQgc3RhdGUuXG5cbnZhciBxdWV1ZSA9IFtdO1xudmFyIHVzZXJRdWV1ZSA9IFtdO1xudmFyIGhhcyA9IHt9O1xudmFyIGNpcmN1bGFyID0ge307XG52YXIgd2FpdGluZyA9IGZhbHNlO1xuXG4vKipcbiAqIFJlc2V0IHRoZSBzY2hlZHVsZXIncyBzdGF0ZS5cbiAqL1xuZnVuY3Rpb24gcmVzZXRTY2hlZHVsZXJTdGF0ZSgpIHtcbiAgcXVldWUubGVuZ3RoID0gMDtcbiAgdXNlclF1ZXVlLmxlbmd0aCA9IDA7XG4gIGhhcyA9IHt9O1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIGNpcmN1bGFyID0ge307XG4gIH1cbiAgd2FpdGluZyA9IGZhbHNlO1xufVxuXG4vKipcbiAqIEZsdXNoIGJvdGggcXVldWVzIGFuZCBydW4gdGhlIHdhdGNoZXJzLlxuICovXG5mdW5jdGlvbiBmbHVzaFNjaGVkdWxlclF1ZXVlKCkge1xuICBydW5TY2hlZHVsZXJRdWV1ZShxdWV1ZS5zb3J0KHF1ZXVlU29ydGVyKSk7XG4gIHJ1blNjaGVkdWxlclF1ZXVlKHVzZXJRdWV1ZSk7XG4gIC8vIHVzZXIgd2F0Y2hlcnMgdHJpZ2dlcmVkIG1vcmUgd2F0Y2hlcnMsXG4gIC8vIGtlZXAgZmx1c2hpbmcgdW50aWwgaXQgZGVwbGV0ZXNcbiAgaWYgKHF1ZXVlLmxlbmd0aCkge1xuICAgIHJldHVybiBmbHVzaFNjaGVkdWxlclF1ZXVlKCk7XG4gIH1cbiAgLy8gZGV2dG9vbCBob29rXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAqL1xuICBpZiAoZGV2dG9vbHMgJiYgY29uZmlnLmRldnRvb2xzKSB7XG4gICAgZGV2dG9vbHMuZW1pdCgnZmx1c2gnKTtcbiAgfVxuICByZXNldFNjaGVkdWxlclN0YXRlKCk7XG59XG5cbi8qKlxuICogU29ydCBxdWV1ZSBiZWZvcmUgZmx1c2guXG4gKiBUaGlzIGVuc3VyZXMgY29tcG9uZW50cyBhcmUgdXBkYXRlZCBmcm9tIHBhcmVudCB0byBjaGlsZFxuICogc28gdGhlcmUgd2lsbCBiZSBubyBkdXBsaWNhdGUgdXBkYXRlcywgZS5nLiBhIGNoaWxkIHdhc1xuICogcHVzaGVkIGludG8gdGhlIHF1ZXVlIGZpcnN0IGFuZCB0aGVuIGl0cyBwYXJlbnQncyBwcm9wc1xuICogY2hhbmdlZC5cbiAqL1xuZnVuY3Rpb24gcXVldWVTb3J0ZXIoYSwgYikge1xuICByZXR1cm4gYS5pZCAtIGIuaWQ7XG59XG5cbi8qKlxuICogUnVuIHRoZSB3YXRjaGVycyBpbiBhIHNpbmdsZSBxdWV1ZS5cbiAqL1xuZnVuY3Rpb24gcnVuU2NoZWR1bGVyUXVldWUocXVldWUpIHtcbiAgLy8gZG8gbm90IGNhY2hlIGxlbmd0aCBiZWNhdXNlIG1vcmUgd2F0Y2hlcnMgbWlnaHQgYmUgcHVzaGVkXG4gIC8vIGFzIHdlIHJ1biBleGlzdGluZyB3YXRjaGVyc1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHF1ZXVlLmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIHdhdGNoZXIgPSBxdWV1ZVtpXTtcbiAgICB2YXIgaWQgPSB3YXRjaGVyLmlkO1xuICAgIGhhc1tpZF0gPSBudWxsO1xuICAgIHdhdGNoZXIucnVuKCk7XG4gICAgLy8gaW4gZGV2IGJ1aWxkLCBjaGVjayBhbmQgc3RvcCBjaXJjdWxhciB1cGRhdGVzLlxuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nICYmIGhhc1tpZF0gIT0gbnVsbCkge1xuICAgICAgY2lyY3VsYXJbaWRdID0gKGNpcmN1bGFyW2lkXSB8fCAwKSArIDE7XG4gICAgICBpZiAoY2lyY3VsYXJbaWRdID4gY29uZmlnLl9tYXhVcGRhdGVDb3VudCkge1xuICAgICAgICB3YXJuKCdZb3UgbWF5IGhhdmUgYW4gaW5maW5pdGUgdXBkYXRlIGxvb3AgZm9yIHdhdGNoZXIgJyArICd3aXRoIGV4cHJlc3Npb24gXCInICsgd2F0Y2hlci5leHByZXNzaW9uICsgJ1wiJywgd2F0Y2hlci52bSk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICBxdWV1ZS5sZW5ndGggPSAwO1xufVxuXG4vKipcbiAqIFB1c2ggYSB3YXRjaGVyIGludG8gdGhlIHdhdGNoZXIgcXVldWUuXG4gKiBKb2JzIHdpdGggZHVwbGljYXRlIElEcyB3aWxsIGJlIHNraXBwZWQgdW5sZXNzIGl0J3NcbiAqIHB1c2hlZCB3aGVuIHRoZSBxdWV1ZSBpcyBiZWluZyBmbHVzaGVkLlxuICovXG5mdW5jdGlvbiBxdWV1ZVdhdGNoZXIod2F0Y2hlcikge1xuICB2YXIgaWQgPSB3YXRjaGVyLmlkO1xuICBpZiAoaGFzW2lkXSA9PSBudWxsKSB7XG4gICAgLy8gcHVzaCB3YXRjaGVyIGludG8gYXBwcm9wcmlhdGUgcXVldWVcbiAgICB2YXIgcSA9IHdhdGNoZXIudXNlciA/IHVzZXJRdWV1ZSA6IHF1ZXVlO1xuICAgIGhhc1tpZF0gPSB0cnVlO1xuICAgIHEucHVzaCh3YXRjaGVyKTtcbiAgICAvLyBxdWV1ZSB0aGUgZmx1c2hcbiAgICBpZiAoIXdhaXRpbmcpIHtcbiAgICAgIHdhaXRpbmcgPSB0cnVlO1xuICAgICAgbmV4dFRpY2soZmx1c2hTY2hlZHVsZXJRdWV1ZSk7XG4gICAgfVxuICB9XG59XG5cbnZhciB1aWQkMSA9IDA7XG5cbi8qKlxuICogQSB3YXRjaGVyIHBhcnNlcyBhbiBleHByZXNzaW9uLCBjb2xsZWN0cyBkZXBlbmRlbmNpZXMsXG4gKiBhbmQgZmlyZXMgY2FsbGJhY2sgd2hlbiB0aGUgZXhwcmVzc2lvbiB2YWx1ZSBjaGFuZ2VzLlxuICogVGhpcyBpcyB1c2VkIGZvciBib3RoIHRoZSAkd2F0Y2goKSBhcGkgYW5kIGRpcmVjdGl2ZXMuXG4gKi9cblxudmFyIFdhdGNoZXIgPSBmdW5jdGlvbiAoKSB7XG4gIGZ1bmN0aW9uIFdhdGNoZXIodm0sIGV4cE9yRm4sIGNiKSB7XG4gICAgdmFyIG9wdGlvbnMgPSBhcmd1bWVudHMubGVuZ3RoIDw9IDMgfHwgYXJndW1lbnRzWzNdID09PSB1bmRlZmluZWQgPyB7fSA6IGFyZ3VtZW50c1szXTtcblxuICAgIHRoaXMudm0gPSB2bTtcbiAgICB2bS5fd2F0Y2hlcnMucHVzaCh0aGlzKTtcbiAgICAvLyBvcHRpb25zXG4gICAgdGhpcy5kZWVwID0gISFvcHRpb25zLmRlZXA7XG4gICAgdGhpcy51c2VyID0gISFvcHRpb25zLnVzZXI7XG4gICAgdGhpcy5sYXp5ID0gISFvcHRpb25zLmxhenk7XG4gICAgdGhpcy5zeW5jID0gISFvcHRpb25zLnN5bmM7XG4gICAgdGhpcy5leHByZXNzaW9uID0gZXhwT3JGbi50b1N0cmluZygpO1xuICAgIHRoaXMuY2IgPSBjYjtcbiAgICB0aGlzLmlkID0gKyt1aWQkMTsgLy8gdWlkIGZvciBiYXRjaGluZ1xuICAgIHRoaXMuYWN0aXZlID0gdHJ1ZTtcbiAgICB0aGlzLmRpcnR5ID0gdGhpcy5sYXp5OyAvLyBmb3IgbGF6eSB3YXRjaGVyc1xuICAgIHRoaXMuZGVwcyA9IFtdO1xuICAgIHRoaXMubmV3RGVwcyA9IFtdO1xuICAgIHRoaXMuZGVwSWRzID0gbmV3IF9TZXQoKTtcbiAgICB0aGlzLm5ld0RlcElkcyA9IG5ldyBfU2V0KCk7XG4gICAgLy8gcGFyc2UgZXhwcmVzc2lvbiBmb3IgZ2V0dGVyXG4gICAgaWYgKHR5cGVvZiBleHBPckZuID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICB0aGlzLmdldHRlciA9IGV4cE9yRm47XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuZ2V0dGVyID0gcGFyc2VQYXRoKGV4cE9yRm4pO1xuICAgICAgaWYgKCF0aGlzLmdldHRlcikge1xuICAgICAgICB0aGlzLmdldHRlciA9IGZ1bmN0aW9uICgpIHt9O1xuICAgICAgICBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nICYmIHdhcm4oJ0ZhaWxlZCB3YXRjaGluZyBwYXRoOiBcIicgKyBleHBPckZuICsgJ1wiICcgKyAnV2F0Y2hlciBvbmx5IGFjY2VwdHMgc2ltcGxlIGRvdC1kZWxpbWl0ZWQgcGF0aHMuICcgKyAnRm9yIGZ1bGwgY29udHJvbCwgdXNlIGEgZnVuY3Rpb24gaW5zdGVhZC4nLCB2bSk7XG4gICAgICB9XG4gICAgfVxuICAgIHRoaXMudmFsdWUgPSB0aGlzLmxhenkgPyB1bmRlZmluZWQgOiB0aGlzLmdldCgpO1xuICB9XG5cbiAgLyoqXG4gICAqIEV2YWx1YXRlIHRoZSBnZXR0ZXIsIGFuZCByZS1jb2xsZWN0IGRlcGVuZGVuY2llcy5cbiAgICovXG5cblxuICBXYXRjaGVyLnByb3RvdHlwZS5nZXQgPSBmdW5jdGlvbiBnZXQoKSB7XG4gICAgcHVzaFRhcmdldCh0aGlzKTtcbiAgICB2YXIgdmFsdWUgPSB2b2lkIDA7XG4gICAgdHJ5IHtcbiAgICAgIHZhbHVlID0gdGhpcy5nZXR0ZXIuY2FsbCh0aGlzLnZtLCB0aGlzLnZtKTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICBpZiAodGhpcy51c2VyKSB7XG4gICAgICAgICAgd2FybignRXJyb3Igd2hlbiBldmFsdWF0aW5nIHdhdGNoZXIgd2l0aCBnZXR0ZXI6ICcgKyB0aGlzLmV4cHJlc3Npb24sIHRoaXMudm0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHdhcm4oJ0Vycm9yIGR1cmluZyBjb21wb25lbnQgcmVuZGVyJywgdGhpcy52bSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBlbHNlICovXG4gICAgICBpZiAoY29uZmlnLmVycm9ySGFuZGxlcikge1xuICAgICAgICBjb25maWcuZXJyb3JIYW5kbGVyLmNhbGwobnVsbCwgZSwgdGhpcy52bSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aHJvdyBlO1xuICAgICAgfVxuICAgICAgLy8gcmV0dXJuIG9sZCB2YWx1ZSB3aGVuIGV2YWx1YXRpb24gZmFpbHMgc28gdGhlIGN1cnJlbnQgVUkgaXMgcHJlc2VydmVkXG4gICAgICAvLyBpZiB0aGUgZXJyb3Igd2FzIHNvbWVob3cgaGFuZGxlZCBieSB1c2VyXG4gICAgICB2YWx1ZSA9IHRoaXMudmFsdWU7XG4gICAgfVxuICAgIC8vIFwidG91Y2hcIiBldmVyeSBwcm9wZXJ0eSBzbyB0aGV5IGFyZSBhbGwgdHJhY2tlZCBhc1xuICAgIC8vIGRlcGVuZGVuY2llcyBmb3IgZGVlcCB3YXRjaGluZ1xuICAgIGlmICh0aGlzLmRlZXApIHtcbiAgICAgIHRyYXZlcnNlKHZhbHVlKTtcbiAgICB9XG4gICAgcG9wVGFyZ2V0KCk7XG4gICAgdGhpcy5jbGVhbnVwRGVwcygpO1xuICAgIHJldHVybiB2YWx1ZTtcbiAgfTtcblxuICAvKipcbiAgICogQWRkIGEgZGVwZW5kZW5jeSB0byB0aGlzIGRpcmVjdGl2ZS5cbiAgICovXG5cblxuICBXYXRjaGVyLnByb3RvdHlwZS5hZGREZXAgPSBmdW5jdGlvbiBhZGREZXAoZGVwKSB7XG4gICAgdmFyIGlkID0gZGVwLmlkO1xuICAgIGlmICghdGhpcy5uZXdEZXBJZHMuaGFzKGlkKSkge1xuICAgICAgdGhpcy5uZXdEZXBJZHMuYWRkKGlkKTtcbiAgICAgIHRoaXMubmV3RGVwcy5wdXNoKGRlcCk7XG4gICAgICBpZiAoIXRoaXMuZGVwSWRzLmhhcyhpZCkpIHtcbiAgICAgICAgZGVwLmFkZFN1Yih0aGlzKTtcbiAgICAgIH1cbiAgICB9XG4gIH07XG5cbiAgLyoqXG4gICAqIENsZWFuIHVwIGZvciBkZXBlbmRlbmN5IGNvbGxlY3Rpb24uXG4gICAqL1xuXG5cbiAgV2F0Y2hlci5wcm90b3R5cGUuY2xlYW51cERlcHMgPSBmdW5jdGlvbiBjbGVhbnVwRGVwcygpIHtcbiAgICB2YXIgaSA9IHRoaXMuZGVwcy5sZW5ndGg7XG4gICAgd2hpbGUgKGktLSkge1xuICAgICAgdmFyIGRlcCA9IHRoaXMuZGVwc1tpXTtcbiAgICAgIGlmICghdGhpcy5uZXdEZXBJZHMuaGFzKGRlcC5pZCkpIHtcbiAgICAgICAgZGVwLnJlbW92ZVN1Yih0aGlzKTtcbiAgICAgIH1cbiAgICB9XG4gICAgdmFyIHRtcCA9IHRoaXMuZGVwSWRzO1xuICAgIHRoaXMuZGVwSWRzID0gdGhpcy5uZXdEZXBJZHM7XG4gICAgdGhpcy5uZXdEZXBJZHMgPSB0bXA7XG4gICAgdGhpcy5uZXdEZXBJZHMuY2xlYXIoKTtcbiAgICB0bXAgPSB0aGlzLmRlcHM7XG4gICAgdGhpcy5kZXBzID0gdGhpcy5uZXdEZXBzO1xuICAgIHRoaXMubmV3RGVwcyA9IHRtcDtcbiAgICB0aGlzLm5ld0RlcHMubGVuZ3RoID0gMDtcbiAgfTtcblxuICAvKipcbiAgICogU3Vic2NyaWJlciBpbnRlcmZhY2UuXG4gICAqIFdpbGwgYmUgY2FsbGVkIHdoZW4gYSBkZXBlbmRlbmN5IGNoYW5nZXMuXG4gICAqL1xuXG5cbiAgV2F0Y2hlci5wcm90b3R5cGUudXBkYXRlID0gZnVuY3Rpb24gdXBkYXRlKCkge1xuICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBlbHNlICovXG4gICAgaWYgKHRoaXMubGF6eSkge1xuICAgICAgdGhpcy5kaXJ0eSA9IHRydWU7XG4gICAgfSBlbHNlIGlmICh0aGlzLnN5bmMpIHtcbiAgICAgIHRoaXMucnVuKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHF1ZXVlV2F0Y2hlcih0aGlzKTtcbiAgICB9XG4gIH07XG5cbiAgLyoqXG4gICAqIFNjaGVkdWxlciBqb2IgaW50ZXJmYWNlLlxuICAgKiBXaWxsIGJlIGNhbGxlZCBieSB0aGUgc2NoZWR1bGVyLlxuICAgKi9cblxuXG4gIFdhdGNoZXIucHJvdG90eXBlLnJ1biA9IGZ1bmN0aW9uIHJ1bigpIHtcbiAgICBpZiAodGhpcy5hY3RpdmUpIHtcbiAgICAgIHZhciB2YWx1ZSA9IHRoaXMuZ2V0KCk7XG4gICAgICBpZiAodmFsdWUgIT09IHRoaXMudmFsdWUgfHxcbiAgICAgIC8vIERlZXAgd2F0Y2hlcnMgYW5kIHdhdGNoZXJzIG9uIE9iamVjdC9BcnJheXMgc2hvdWxkIGZpcmUgZXZlblxuICAgICAgLy8gd2hlbiB0aGUgdmFsdWUgaXMgdGhlIHNhbWUsIGJlY2F1c2UgdGhlIHZhbHVlIG1heVxuICAgICAgLy8gaGF2ZSBtdXRhdGVkLlxuICAgICAgaXNPYmplY3QodmFsdWUpIHx8IHRoaXMuZGVlcCkge1xuICAgICAgICAvLyBzZXQgbmV3IHZhbHVlXG4gICAgICAgIHZhciBvbGRWYWx1ZSA9IHRoaXMudmFsdWU7XG4gICAgICAgIHRoaXMudmFsdWUgPSB2YWx1ZTtcbiAgICAgICAgaWYgKHRoaXMudXNlcikge1xuICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICB0aGlzLmNiLmNhbGwodGhpcy52bSwgdmFsdWUsIG9sZFZhbHVlKTtcbiAgICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nICYmIHdhcm4oJ0Vycm9yIGluIHdhdGNoZXIgXCInICsgdGhpcy5leHByZXNzaW9uICsgJ1wiJywgdGhpcy52bSk7XG4gICAgICAgICAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgZWxzZSAqL1xuICAgICAgICAgICAgaWYgKGNvbmZpZy5lcnJvckhhbmRsZXIpIHtcbiAgICAgICAgICAgICAgY29uZmlnLmVycm9ySGFuZGxlci5jYWxsKG51bGwsIGUsIHRoaXMudm0pO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgdGhyb3cgZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy5jYi5jYWxsKHRoaXMudm0sIHZhbHVlLCBvbGRWYWx1ZSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH07XG5cbiAgLyoqXG4gICAqIEV2YWx1YXRlIHRoZSB2YWx1ZSBvZiB0aGUgd2F0Y2hlci5cbiAgICogVGhpcyBvbmx5IGdldHMgY2FsbGVkIGZvciBsYXp5IHdhdGNoZXJzLlxuICAgKi9cblxuXG4gIFdhdGNoZXIucHJvdG90eXBlLmV2YWx1YXRlID0gZnVuY3Rpb24gZXZhbHVhdGUoKSB7XG4gICAgdGhpcy52YWx1ZSA9IHRoaXMuZ2V0KCk7XG4gICAgdGhpcy5kaXJ0eSA9IGZhbHNlO1xuICB9O1xuXG4gIC8qKlxuICAgKiBEZXBlbmQgb24gYWxsIGRlcHMgY29sbGVjdGVkIGJ5IHRoaXMgd2F0Y2hlci5cbiAgICovXG5cblxuICBXYXRjaGVyLnByb3RvdHlwZS5kZXBlbmQgPSBmdW5jdGlvbiBkZXBlbmQoKSB7XG4gICAgdmFyIGkgPSB0aGlzLmRlcHMubGVuZ3RoO1xuICAgIHdoaWxlIChpLS0pIHtcbiAgICAgIHRoaXMuZGVwc1tpXS5kZXBlbmQoKTtcbiAgICB9XG4gIH07XG5cbiAgLyoqXG4gICAqIFJlbW92ZSBzZWxmIGZyb20gYWxsIGRlcGVuZGVuY2llcycgc3ViY3JpYmVyIGxpc3QuXG4gICAqL1xuXG5cbiAgV2F0Y2hlci5wcm90b3R5cGUudGVhcmRvd24gPSBmdW5jdGlvbiB0ZWFyZG93bigpIHtcbiAgICBpZiAodGhpcy5hY3RpdmUpIHtcbiAgICAgIC8vIHJlbW92ZSBzZWxmIGZyb20gdm0ncyB3YXRjaGVyIGxpc3RcbiAgICAgIC8vIHRoaXMgaXMgYSBzb21ld2hhdCBleHBlbnNpdmUgb3BlcmF0aW9uIHNvIHdlIHNraXAgaXRcbiAgICAgIC8vIGlmIHRoZSB2bSBpcyBiZWluZyBkZXN0cm95ZWQgb3IgaXMgcGVyZm9ybWluZyBhIHYtZm9yXG4gICAgICAvLyByZS1yZW5kZXIgKHRoZSB3YXRjaGVyIGxpc3QgaXMgdGhlbiBmaWx0ZXJlZCBieSB2LWZvcikuXG4gICAgICBpZiAoIXRoaXMudm0uX2lzQmVpbmdEZXN0cm95ZWQgJiYgIXRoaXMudm0uX3ZGb3JSZW1vdmluZykge1xuICAgICAgICByZW1vdmUodGhpcy52bS5fd2F0Y2hlcnMsIHRoaXMpO1xuICAgICAgfVxuICAgICAgdmFyIGkgPSB0aGlzLmRlcHMubGVuZ3RoO1xuICAgICAgd2hpbGUgKGktLSkge1xuICAgICAgICB0aGlzLmRlcHNbaV0ucmVtb3ZlU3ViKHRoaXMpO1xuICAgICAgfVxuICAgICAgdGhpcy5hY3RpdmUgPSBmYWxzZTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIFdhdGNoZXI7XG59KCk7XG5cbnZhciBzZWVuT2JqZWN0cyA9IG5ldyBfU2V0KCk7XG5mdW5jdGlvbiB0cmF2ZXJzZSh2YWwsIHNlZW4pIHtcbiAgdmFyIGkgPSB2b2lkIDAsXG4gICAgICBrZXlzID0gdm9pZCAwO1xuICBpZiAoIXNlZW4pIHtcbiAgICBzZWVuID0gc2Vlbk9iamVjdHM7XG4gICAgc2Vlbi5jbGVhcigpO1xuICB9XG4gIHZhciBpc0EgPSBBcnJheS5pc0FycmF5KHZhbCk7XG4gIHZhciBpc08gPSBpc09iamVjdCh2YWwpO1xuICBpZiAoKGlzQSB8fCBpc08pICYmIE9iamVjdC5pc0V4dGVuc2libGUodmFsKSkge1xuICAgIGlmICh2YWwuX19vYl9fKSB7XG4gICAgICB2YXIgZGVwSWQgPSB2YWwuX19vYl9fLmRlcC5pZDtcbiAgICAgIGlmIChzZWVuLmhhcyhkZXBJZCkpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc2Vlbi5hZGQoZGVwSWQpO1xuICAgICAgfVxuICAgIH1cbiAgICBpZiAoaXNBKSB7XG4gICAgICBpID0gdmFsLmxlbmd0aDtcbiAgICAgIHdoaWxlIChpLS0pIHtcbiAgICAgICAgdHJhdmVyc2UodmFsW2ldLCBzZWVuKTtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKGlzTykge1xuICAgICAga2V5cyA9IE9iamVjdC5rZXlzKHZhbCk7XG4gICAgICBpID0ga2V5cy5sZW5ndGg7XG4gICAgICB3aGlsZSAoaS0tKSB7XG4gICAgICAgIHRyYXZlcnNlKHZhbFtrZXlzW2ldXSwgc2Vlbik7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbnZhciBhcnJheVByb3RvID0gQXJyYXkucHJvdG90eXBlO1xudmFyIGFycmF5TWV0aG9kcyA9IE9iamVjdC5jcmVhdGUoYXJyYXlQcm90bylcblxuLyoqXG4gKiBJbnRlcmNlcHQgbXV0YXRpbmcgbWV0aG9kcyBhbmQgZW1pdCBldmVudHNcbiAqL1xuO1sncHVzaCcsICdwb3AnLCAnc2hpZnQnLCAndW5zaGlmdCcsICdzcGxpY2UnLCAnc29ydCcsICdyZXZlcnNlJ10uZm9yRWFjaChmdW5jdGlvbiAobWV0aG9kKSB7XG4gIC8vIGNhY2hlIG9yaWdpbmFsIG1ldGhvZFxuICB2YXIgb3JpZ2luYWwgPSBhcnJheVByb3RvW21ldGhvZF07XG4gIGRlZihhcnJheU1ldGhvZHMsIG1ldGhvZCwgZnVuY3Rpb24gbXV0YXRvcigpIHtcbiAgICAvLyBhdm9pZCBsZWFraW5nIGFyZ3VtZW50czpcbiAgICAvLyBodHRwOi8vanNwZXJmLmNvbS9jbG9zdXJlLXdpdGgtYXJndW1lbnRzXG4gICAgdmFyIGkgPSBhcmd1bWVudHMubGVuZ3RoO1xuICAgIHZhciBhcmdzID0gbmV3IEFycmF5KGkpO1xuICAgIHdoaWxlIChpLS0pIHtcbiAgICAgIGFyZ3NbaV0gPSBhcmd1bWVudHNbaV07XG4gICAgfVxuICAgIHZhciByZXN1bHQgPSBvcmlnaW5hbC5hcHBseSh0aGlzLCBhcmdzKTtcbiAgICB2YXIgb2IgPSB0aGlzLl9fb2JfXztcbiAgICB2YXIgaW5zZXJ0ZWQgPSB2b2lkIDA7XG4gICAgc3dpdGNoIChtZXRob2QpIHtcbiAgICAgIGNhc2UgJ3B1c2gnOlxuICAgICAgICBpbnNlcnRlZCA9IGFyZ3M7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAndW5zaGlmdCc6XG4gICAgICAgIGluc2VydGVkID0gYXJncztcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdzcGxpY2UnOlxuICAgICAgICBpbnNlcnRlZCA9IGFyZ3Muc2xpY2UoMik7XG4gICAgICAgIGJyZWFrO1xuICAgIH1cbiAgICBpZiAoaW5zZXJ0ZWQpIG9iLm9ic2VydmVBcnJheShpbnNlcnRlZCk7XG4gICAgLy8gbm90aWZ5IGNoYW5nZVxuICAgIG9iLmRlcC5ub3RpZnkoKTtcbiAgICByZXR1cm4gcmVzdWx0O1xuICB9KTtcbn0pO1xuXG52YXIgYXJyYXlLZXlzID0gT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMoYXJyYXlNZXRob2RzKTtcblxuLyoqXG4gKiBCeSBkZWZhdWx0LCB3aGVuIGEgcmVhY3RpdmUgcHJvcGVydHkgaXMgc2V0LCB0aGUgbmV3IHZhbHVlIGlzXG4gKiBhbHNvIGNvbnZlcnRlZCB0byBiZWNvbWUgcmVhY3RpdmUuIEhvd2V2ZXIgd2hlbiBwYXNzaW5nIGRvd24gcHJvcHMsXG4gKiB3ZSBkb24ndCB3YW50IHRvIGZvcmNlIGNvbnZlcnNpb24gYmVjYXVzZSB0aGUgdmFsdWUgbWF5IGJlIGEgbmVzdGVkIHZhbHVlXG4gKiB1bmRlciBhIGZyb3plbiBkYXRhIHN0cnVjdHVyZS4gQ29udmVydGluZyBpdCB3b3VsZCBkZWZlYXQgdGhlIG9wdGltaXphdGlvbi5cbiAqL1xudmFyIG9ic2VydmVyU3RhdGUgPSB7XG4gIHNob3VsZENvbnZlcnQ6IHRydWUsXG4gIGlzU2V0dGluZ1Byb3BzOiBmYWxzZVxufTtcblxuLyoqXG4gKiBPYnNlcnZlciBjbGFzcyB0aGF0IGFyZSBhdHRhY2hlZCB0byBlYWNoIG9ic2VydmVkXG4gKiBvYmplY3QuIE9uY2UgYXR0YWNoZWQsIHRoZSBvYnNlcnZlciBjb252ZXJ0cyB0YXJnZXRcbiAqIG9iamVjdCdzIHByb3BlcnR5IGtleXMgaW50byBnZXR0ZXIvc2V0dGVycyB0aGF0XG4gKiBjb2xsZWN0IGRlcGVuZGVuY2llcyBhbmQgZGlzcGF0Y2hlcyB1cGRhdGVzLlxuICovXG52YXIgT2JzZXJ2ZXIgPSBmdW5jdGlvbiAoKSB7XG4gIC8vIG51bWJlciBvZiB2bXMgdGhhdCBoYXMgdGhpcyBvYmplY3QgYXMgcm9vdCAkZGF0YVxuXG4gIGZ1bmN0aW9uIE9ic2VydmVyKHZhbHVlKSB7XG4gICAgdGhpcy52YWx1ZSA9IHZhbHVlO1xuICAgIHRoaXMuZGVwID0gbmV3IERlcCgpO1xuICAgIHRoaXMudm1Db3VudCA9IDA7XG4gICAgZGVmKHZhbHVlLCAnX19vYl9fJywgdGhpcyk7XG4gICAgaWYgKEFycmF5LmlzQXJyYXkodmFsdWUpKSB7XG4gICAgICB2YXIgYXVnbWVudCA9IGhhc1Byb3RvID8gcHJvdG9BdWdtZW50IDogY29weUF1Z21lbnQ7XG4gICAgICBhdWdtZW50KHZhbHVlLCBhcnJheU1ldGhvZHMsIGFycmF5S2V5cyk7XG4gICAgICB0aGlzLm9ic2VydmVBcnJheSh2YWx1ZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMud2Fsayh2YWx1ZSk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFdhbGsgdGhyb3VnaCBlYWNoIHByb3BlcnR5IGFuZCBjb252ZXJ0IHRoZW0gaW50b1xuICAgKiBnZXR0ZXIvc2V0dGVycy4gVGhpcyBtZXRob2Qgc2hvdWxkIG9ubHkgYmUgY2FsbGVkIHdoZW5cbiAgICogdmFsdWUgdHlwZSBpcyBPYmplY3QuXG4gICAqL1xuXG5cbiAgT2JzZXJ2ZXIucHJvdG90eXBlLndhbGsgPSBmdW5jdGlvbiB3YWxrKG9iaikge1xuICAgIHZhciB2YWwgPSB0aGlzLnZhbHVlO1xuICAgIGZvciAodmFyIGtleSBpbiBvYmopIHtcbiAgICAgIGRlZmluZVJlYWN0aXZlKHZhbCwga2V5LCBvYmpba2V5XSk7XG4gICAgfVxuICB9O1xuXG4gIC8qKlxuICAgKiBPYnNlcnZlIGEgbGlzdCBvZiBBcnJheSBpdGVtcy5cbiAgICovXG5cblxuICBPYnNlcnZlci5wcm90b3R5cGUub2JzZXJ2ZUFycmF5ID0gZnVuY3Rpb24gb2JzZXJ2ZUFycmF5KGl0ZW1zKSB7XG4gICAgZm9yICh2YXIgaSA9IDAsIGwgPSBpdGVtcy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgIG9ic2VydmUoaXRlbXNbaV0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gT2JzZXJ2ZXI7XG59KCk7XG5cbi8vIGhlbHBlcnNcblxuLyoqXG4gKiBBdWdtZW50IGFuIHRhcmdldCBPYmplY3Qgb3IgQXJyYXkgYnkgaW50ZXJjZXB0aW5nXG4gKiB0aGUgcHJvdG90eXBlIGNoYWluIHVzaW5nIF9fcHJvdG9fX1xuICovXG5mdW5jdGlvbiBwcm90b0F1Z21lbnQodGFyZ2V0LCBzcmMpIHtcbiAgLyogZXNsaW50LWRpc2FibGUgbm8tcHJvdG8gKi9cbiAgdGFyZ2V0Ll9fcHJvdG9fXyA9IHNyYztcbiAgLyogZXNsaW50LWVuYWJsZSBuby1wcm90byAqL1xufVxuXG4vKipcbiAqIEF1Z21lbnQgYW4gdGFyZ2V0IE9iamVjdCBvciBBcnJheSBieSBkZWZpbmluZ1xuICogaGlkZGVuIHByb3BlcnRpZXMuXG4gKlxuICogaXN0YW5idWwgaWdub3JlIG5leHRcbiAqL1xuZnVuY3Rpb24gY29weUF1Z21lbnQodGFyZ2V0LCBzcmMsIGtleXMpIHtcbiAgZm9yICh2YXIgaSA9IDAsIGwgPSBrZXlzLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgIHZhciBrZXkgPSBrZXlzW2ldO1xuICAgIGRlZih0YXJnZXQsIGtleSwgc3JjW2tleV0pO1xuICB9XG59XG5cbi8qKlxuICogQXR0ZW1wdCB0byBjcmVhdGUgYW4gb2JzZXJ2ZXIgaW5zdGFuY2UgZm9yIGEgdmFsdWUsXG4gKiByZXR1cm5zIHRoZSBuZXcgb2JzZXJ2ZXIgaWYgc3VjY2Vzc2Z1bGx5IG9ic2VydmVkLFxuICogb3IgdGhlIGV4aXN0aW5nIG9ic2VydmVyIGlmIHRoZSB2YWx1ZSBhbHJlYWR5IGhhcyBvbmUuXG4gKi9cbmZ1bmN0aW9uIG9ic2VydmUodmFsdWUpIHtcbiAgaWYgKCFpc09iamVjdCh2YWx1ZSkpIHtcbiAgICByZXR1cm47XG4gIH1cbiAgdmFyIG9iID0gdm9pZCAwO1xuICBpZiAoaGFzT3duKHZhbHVlLCAnX19vYl9fJykgJiYgdmFsdWUuX19vYl9fIGluc3RhbmNlb2YgT2JzZXJ2ZXIpIHtcbiAgICBvYiA9IHZhbHVlLl9fb2JfXztcbiAgfSBlbHNlIGlmIChvYnNlcnZlclN0YXRlLnNob3VsZENvbnZlcnQgJiYgIWNvbmZpZy5faXNTZXJ2ZXIgJiYgKEFycmF5LmlzQXJyYXkodmFsdWUpIHx8IGlzUGxhaW5PYmplY3QodmFsdWUpKSAmJiBPYmplY3QuaXNFeHRlbnNpYmxlKHZhbHVlKSAmJiAhdmFsdWUuX2lzVnVlKSB7XG4gICAgb2IgPSBuZXcgT2JzZXJ2ZXIodmFsdWUpO1xuICB9XG4gIHJldHVybiBvYjtcbn1cblxuLyoqXG4gKiBEZWZpbmUgYSByZWFjdGl2ZSBwcm9wZXJ0eSBvbiBhbiBPYmplY3QuXG4gKi9cbmZ1bmN0aW9uIGRlZmluZVJlYWN0aXZlKG9iaiwga2V5LCB2YWwsIGN1c3RvbVNldHRlcikge1xuICB2YXIgZGVwID0gbmV3IERlcCgpO1xuXG4gIHZhciBwcm9wZXJ0eSA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Iob2JqLCBrZXkpO1xuICBpZiAocHJvcGVydHkgJiYgcHJvcGVydHkuY29uZmlndXJhYmxlID09PSBmYWxzZSkge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8vIGNhdGVyIGZvciBwcmUtZGVmaW5lZCBnZXR0ZXIvc2V0dGVyc1xuICB2YXIgZ2V0dGVyID0gcHJvcGVydHkgJiYgcHJvcGVydHkuZ2V0O1xuICB2YXIgc2V0dGVyID0gcHJvcGVydHkgJiYgcHJvcGVydHkuc2V0O1xuXG4gIHZhciBjaGlsZE9iID0gb2JzZXJ2ZSh2YWwpO1xuICBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHtcbiAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICBnZXQ6IGZ1bmN0aW9uIHJlYWN0aXZlR2V0dGVyKCkge1xuICAgICAgdmFyIHZhbHVlID0gZ2V0dGVyID8gZ2V0dGVyLmNhbGwob2JqKSA6IHZhbDtcbiAgICAgIGlmIChEZXAudGFyZ2V0KSB7XG4gICAgICAgIGRlcC5kZXBlbmQoKTtcbiAgICAgICAgaWYgKGNoaWxkT2IpIHtcbiAgICAgICAgICBjaGlsZE9iLmRlcC5kZXBlbmQoKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoQXJyYXkuaXNBcnJheSh2YWx1ZSkpIHtcbiAgICAgICAgICBmb3IgKHZhciBlLCBpID0gMCwgbCA9IHZhbHVlLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgICAgICAgZSA9IHZhbHVlW2ldO1xuICAgICAgICAgICAgZSAmJiBlLl9fb2JfXyAmJiBlLl9fb2JfXy5kZXAuZGVwZW5kKCk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gdmFsdWU7XG4gICAgfSxcbiAgICBzZXQ6IGZ1bmN0aW9uIHJlYWN0aXZlU2V0dGVyKG5ld1ZhbCkge1xuICAgICAgdmFyIHZhbHVlID0gZ2V0dGVyID8gZ2V0dGVyLmNhbGwob2JqKSA6IHZhbDtcbiAgICAgIGlmIChuZXdWYWwgPT09IHZhbHVlKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nICYmIGN1c3RvbVNldHRlcikge1xuICAgICAgICBjdXN0b21TZXR0ZXIoKTtcbiAgICAgIH1cbiAgICAgIGlmIChzZXR0ZXIpIHtcbiAgICAgICAgc2V0dGVyLmNhbGwob2JqLCBuZXdWYWwpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdmFsID0gbmV3VmFsO1xuICAgICAgfVxuICAgICAgY2hpbGRPYiA9IG9ic2VydmUobmV3VmFsKTtcbiAgICAgIGRlcC5ub3RpZnkoKTtcbiAgICB9XG4gIH0pO1xufVxuXG4vKipcbiAqIFNldCBhIHByb3BlcnR5IG9uIGFuIG9iamVjdC4gQWRkcyB0aGUgbmV3IHByb3BlcnR5IGFuZFxuICogdHJpZ2dlcnMgY2hhbmdlIG5vdGlmaWNhdGlvbiBpZiB0aGUgcHJvcGVydHkgZG9lc24ndFxuICogYWxyZWFkeSBleGlzdC5cbiAqL1xuZnVuY3Rpb24gc2V0KG9iaiwga2V5LCB2YWwpIHtcbiAgaWYgKEFycmF5LmlzQXJyYXkob2JqKSkge1xuICAgIG9iai5zcGxpY2Uoa2V5LCAxLCB2YWwpO1xuICAgIHJldHVybiB2YWw7XG4gIH1cbiAgaWYgKGhhc093bihvYmosIGtleSkpIHtcbiAgICBvYmpba2V5XSA9IHZhbDtcbiAgICByZXR1cm47XG4gIH1cbiAgdmFyIG9iID0gb2JqLl9fb2JfXztcbiAgaWYgKG9iai5faXNWdWUgfHwgb2IgJiYgb2Iudm1Db3VudCkge1xuICAgIHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgJiYgd2FybignQXZvaWQgYWRkaW5nIHJlYWN0aXZlIHByb3BlcnRpZXMgdG8gYSBWdWUgaW5zdGFuY2Ugb3IgaXRzIHJvb3QgJGRhdGEgJyArICdhdCBydW50aW1lIC0gZGVsY2FyZSBpdCB1cGZyb250IGluIHRoZSBkYXRhIG9wdGlvbi4nKTtcbiAgICByZXR1cm47XG4gIH1cbiAgaWYgKCFvYikge1xuICAgIG9ialtrZXldID0gdmFsO1xuICAgIHJldHVybjtcbiAgfVxuICBkZWZpbmVSZWFjdGl2ZShvYi52YWx1ZSwga2V5LCB2YWwpO1xuICBvYi5kZXAubm90aWZ5KCk7XG4gIHJldHVybiB2YWw7XG59XG5cbi8qKlxuICogRGVsZXRlIGEgcHJvcGVydHkgYW5kIHRyaWdnZXIgY2hhbmdlIGlmIG5lY2Vzc2FyeS5cbiAqL1xuZnVuY3Rpb24gZGVsKG9iaiwga2V5KSB7XG4gIHZhciBvYiA9IG9iai5fX29iX187XG4gIGlmIChvYmouX2lzVnVlIHx8IG9iICYmIG9iLnZtQ291bnQpIHtcbiAgICBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nICYmIHdhcm4oJ0F2b2lkIGRlbGV0aW5nIHByb3BlcnRpZXMgb24gYSBWdWUgaW5zdGFuY2Ugb3IgaXRzIHJvb3QgJGRhdGEgJyArICctIGp1c3Qgc2V0IGl0IHRvIG51bGwuJyk7XG4gICAgcmV0dXJuO1xuICB9XG4gIGlmICghaGFzT3duKG9iaiwga2V5KSkge1xuICAgIHJldHVybjtcbiAgfVxuICBkZWxldGUgb2JqW2tleV07XG4gIGlmICghb2IpIHtcbiAgICByZXR1cm47XG4gIH1cbiAgb2IuZGVwLm5vdGlmeSgpO1xufVxuXG5mdW5jdGlvbiBpbml0U3RhdGUodm0pIHtcbiAgdm0uX3dhdGNoZXJzID0gW107XG4gIGluaXRQcm9wcyh2bSk7XG4gIGluaXREYXRhKHZtKTtcbiAgaW5pdENvbXB1dGVkKHZtKTtcbiAgaW5pdE1ldGhvZHModm0pO1xuICBpbml0V2F0Y2godm0pO1xufVxuXG5mdW5jdGlvbiBpbml0UHJvcHModm0pIHtcbiAgdmFyIHByb3BzID0gdm0uJG9wdGlvbnMucHJvcHM7XG4gIHZhciBwcm9wc0RhdGEgPSB2bS4kb3B0aW9ucy5wcm9wc0RhdGE7XG4gIGlmIChwcm9wcykge1xuICAgIHZhciBrZXlzID0gdm0uJG9wdGlvbnMuX3Byb3BLZXlzID0gT2JqZWN0LmtleXMocHJvcHMpO1xuICAgIHZhciBpc1Jvb3QgPSAhdm0uJHBhcmVudDtcbiAgICAvLyByb290IGluc3RhbmNlIHByb3BzIHNob3VsZCBiZSBjb252ZXJ0ZWRcbiAgICBvYnNlcnZlclN0YXRlLnNob3VsZENvbnZlcnQgPSBpc1Jvb3Q7XG5cbiAgICB2YXIgX2xvb3AgPSBmdW5jdGlvbiBfbG9vcChpKSB7XG4gICAgICB2YXIga2V5ID0ga2V5c1tpXTtcbiAgICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBlbHNlICovXG4gICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICBkZWZpbmVSZWFjdGl2ZSh2bSwga2V5LCB2YWxpZGF0ZVByb3Aoa2V5LCBwcm9wcywgcHJvcHNEYXRhLCB2bSksIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICBpZiAodm0uJHBhcmVudCAmJiAhb2JzZXJ2ZXJTdGF0ZS5pc1NldHRpbmdQcm9wcykge1xuICAgICAgICAgICAgd2FybignQXZvaWQgbXV0YXRpbmcgYSBwcm9wIGRpcmVjdGx5IHNpbmNlIHRoZSB2YWx1ZSB3aWxsIGJlICcgKyAnb3ZlcndyaXR0ZW4gd2hlbmV2ZXIgdGhlIHBhcmVudCBjb21wb25lbnQgcmUtcmVuZGVycy4gJyArICdJbnN0ZWFkLCB1c2UgYSBkYXRhIG9yIGNvbXB1dGVkIHByb3BlcnR5IGJhc2VkIG9uIHRoZSBwcm9wXFwncyAnICsgKCd2YWx1ZS4gUHJvcCBiZWluZyBtdXRhdGVkOiBcIicgKyBrZXkgKyAnXCInKSwgdm0pO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBkZWZpbmVSZWFjdGl2ZSh2bSwga2V5LCB2YWxpZGF0ZVByb3Aoa2V5LCBwcm9wcywgcHJvcHNEYXRhLCB2bSkpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGtleXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIF9sb29wKGkpO1xuICAgIH1cbiAgICBvYnNlcnZlclN0YXRlLnNob3VsZENvbnZlcnQgPSB0cnVlO1xuICB9XG59XG5cbmZ1bmN0aW9uIGluaXREYXRhKHZtKSB7XG4gIHZhciBkYXRhID0gdm0uJG9wdGlvbnMuZGF0YTtcbiAgZGF0YSA9IHZtLl9kYXRhID0gdHlwZW9mIGRhdGEgPT09ICdmdW5jdGlvbicgPyBkYXRhLmNhbGwodm0pIDogZGF0YSB8fCB7fTtcbiAgaWYgKCFpc1BsYWluT2JqZWN0KGRhdGEpKSB7XG4gICAgZGF0YSA9IHt9O1xuICAgIHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgJiYgd2FybignZGF0YSBmdW5jdGlvbnMgc2hvdWxkIHJldHVybiBhbiBvYmplY3QuJywgdm0pO1xuICB9XG4gIC8vIHByb3h5IGRhdGEgb24gaW5zdGFuY2VcbiAgdmFyIGtleXMgPSBPYmplY3Qua2V5cyhkYXRhKTtcbiAgdmFyIHByb3BzID0gdm0uJG9wdGlvbnMucHJvcHM7XG4gIHZhciBpID0ga2V5cy5sZW5ndGg7XG4gIHdoaWxlIChpLS0pIHtcbiAgICBpZiAocHJvcHMgJiYgaGFzT3duKHByb3BzLCBrZXlzW2ldKSkge1xuICAgICAgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyAmJiB3YXJuKCdUaGUgZGF0YSBwcm9wZXJ0eSBcIicgKyBrZXlzW2ldICsgJ1wiIGlzIGFscmVhZHkgZGVjbGFyZWQgYXMgYSBwcm9wLiAnICsgJ1VzZSBwcm9wIGRlZmF1bHQgdmFsdWUgaW5zdGVhZC4nLCB2bSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHByb3h5KHZtLCBrZXlzW2ldKTtcbiAgICB9XG4gIH1cbiAgLy8gb2JzZXJ2ZSBkYXRhXG4gIG9ic2VydmUoZGF0YSk7XG4gIGRhdGEuX19vYl9fICYmIGRhdGEuX19vYl9fLnZtQ291bnQrKztcbn1cblxudmFyIGNvbXB1dGVkU2hhcmVkRGVmaW5pdGlvbiA9IHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgY29uZmlndXJhYmxlOiB0cnVlLFxuICBnZXQ6IG5vb3AsXG4gIHNldDogbm9vcFxufTtcblxuZnVuY3Rpb24gaW5pdENvbXB1dGVkKHZtKSB7XG4gIHZhciBjb21wdXRlZCA9IHZtLiRvcHRpb25zLmNvbXB1dGVkO1xuICBpZiAoY29tcHV0ZWQpIHtcbiAgICBmb3IgKHZhciBfa2V5IGluIGNvbXB1dGVkKSB7XG4gICAgICB2YXIgdXNlckRlZiA9IGNvbXB1dGVkW19rZXldO1xuICAgICAgaWYgKHR5cGVvZiB1c2VyRGVmID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIGNvbXB1dGVkU2hhcmVkRGVmaW5pdGlvbi5nZXQgPSBtYWtlQ29tcHV0ZWRHZXR0ZXIodXNlckRlZiwgdm0pO1xuICAgICAgICBjb21wdXRlZFNoYXJlZERlZmluaXRpb24uc2V0ID0gbm9vcDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbXB1dGVkU2hhcmVkRGVmaW5pdGlvbi5nZXQgPSB1c2VyRGVmLmdldCA/IHVzZXJEZWYuY2FjaGUgIT09IGZhbHNlID8gbWFrZUNvbXB1dGVkR2V0dGVyKHVzZXJEZWYuZ2V0LCB2bSkgOiBiaW5kKHVzZXJEZWYuZ2V0LCB2bSkgOiBub29wO1xuICAgICAgICBjb21wdXRlZFNoYXJlZERlZmluaXRpb24uc2V0ID0gdXNlckRlZi5zZXQgPyBiaW5kKHVzZXJEZWYuc2V0LCB2bSkgOiBub29wO1xuICAgICAgfVxuICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHZtLCBfa2V5LCBjb21wdXRlZFNoYXJlZERlZmluaXRpb24pO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBtYWtlQ29tcHV0ZWRHZXR0ZXIoZ2V0dGVyLCBvd25lcikge1xuICB2YXIgd2F0Y2hlciA9IG5ldyBXYXRjaGVyKG93bmVyLCBnZXR0ZXIsIG5vb3AsIHtcbiAgICBsYXp5OiB0cnVlXG4gIH0pO1xuICByZXR1cm4gZnVuY3Rpb24gY29tcHV0ZWRHZXR0ZXIoKSB7XG4gICAgaWYgKHdhdGNoZXIuZGlydHkpIHtcbiAgICAgIHdhdGNoZXIuZXZhbHVhdGUoKTtcbiAgICB9XG4gICAgaWYgKERlcC50YXJnZXQpIHtcbiAgICAgIHdhdGNoZXIuZGVwZW5kKCk7XG4gICAgfVxuICAgIHJldHVybiB3YXRjaGVyLnZhbHVlO1xuICB9O1xufVxuXG5mdW5jdGlvbiBpbml0TWV0aG9kcyh2bSkge1xuICB2YXIgbWV0aG9kcyA9IHZtLiRvcHRpb25zLm1ldGhvZHM7XG4gIGlmIChtZXRob2RzKSB7XG4gICAgZm9yICh2YXIgX2tleTIgaW4gbWV0aG9kcykge1xuICAgICAgdm1bX2tleTJdID0gYmluZChtZXRob2RzW19rZXkyXSwgdm0pO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBpbml0V2F0Y2godm0pIHtcbiAgdmFyIHdhdGNoID0gdm0uJG9wdGlvbnMud2F0Y2g7XG4gIGlmICh3YXRjaCkge1xuICAgIGZvciAodmFyIF9rZXkzIGluIHdhdGNoKSB7XG4gICAgICB2YXIgaGFuZGxlciA9IHdhdGNoW19rZXkzXTtcbiAgICAgIGlmIChBcnJheS5pc0FycmF5KGhhbmRsZXIpKSB7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgaGFuZGxlci5sZW5ndGg7IGkrKykge1xuICAgICAgICAgIGNyZWF0ZVdhdGNoZXIodm0sIF9rZXkzLCBoYW5kbGVyW2ldKTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY3JlYXRlV2F0Y2hlcih2bSwgX2tleTMsIGhhbmRsZXIpO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBjcmVhdGVXYXRjaGVyKHZtLCBrZXksIGhhbmRsZXIpIHtcbiAgdmFyIG9wdGlvbnMgPSB2b2lkIDA7XG4gIGlmIChpc1BsYWluT2JqZWN0KGhhbmRsZXIpKSB7XG4gICAgb3B0aW9ucyA9IGhhbmRsZXI7XG4gICAgaGFuZGxlciA9IGhhbmRsZXIuaGFuZGxlcjtcbiAgfVxuICBpZiAodHlwZW9mIGhhbmRsZXIgPT09ICdzdHJpbmcnKSB7XG4gICAgaGFuZGxlciA9IHZtW2hhbmRsZXJdO1xuICB9XG4gIHZtLiR3YXRjaChrZXksIGhhbmRsZXIsIG9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiBzdGF0ZU1peGluKFZ1ZSkge1xuICAvLyBmbG93IHNvbWVob3cgaGFzIHByb2JsZW1zIHdpdGggZGlyZWN0bHkgZGVjbGFyZWQgZGVmaW5pdGlvbiBvYmplY3RcbiAgLy8gd2hlbiB1c2luZyBPYmplY3QuZGVmaW5lUHJvcGVydHksIHNvIHdlIGhhdmUgdG8gcHJvY2VkdXJhbGx5IGJ1aWxkIHVwXG4gIC8vIHRoZSBvYmplY3QgaGVyZS5cbiAgdmFyIGRhdGFEZWYgPSB7fTtcbiAgZGF0YURlZi5nZXQgPSBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2RhdGE7XG4gIH07XG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgZGF0YURlZi5zZXQgPSBmdW5jdGlvbiAobmV3RGF0YSkge1xuICAgICAgd2FybignQXZvaWQgcmVwbGFjaW5nIGluc3RhbmNlIHJvb3QgJGRhdGEuICcgKyAnVXNlIG5lc3RlZCBkYXRhIHByb3BlcnRpZXMgaW5zdGVhZC4nLCB0aGlzKTtcbiAgICB9O1xuICB9XG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShWdWUucHJvdG90eXBlLCAnJGRhdGEnLCBkYXRhRGVmKTtcblxuICBWdWUucHJvdG90eXBlLiR3YXRjaCA9IGZ1bmN0aW9uIChleHBPckZuLCBjYiwgb3B0aW9ucykge1xuICAgIHZhciB2bSA9IHRoaXM7XG4gICAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gICAgb3B0aW9ucy51c2VyID0gdHJ1ZTtcbiAgICB2YXIgd2F0Y2hlciA9IG5ldyBXYXRjaGVyKHZtLCBleHBPckZuLCBjYiwgb3B0aW9ucyk7XG4gICAgaWYgKG9wdGlvbnMuaW1tZWRpYXRlKSB7XG4gICAgICBjYi5jYWxsKHZtLCB3YXRjaGVyLnZhbHVlKTtcbiAgICB9XG4gICAgcmV0dXJuIGZ1bmN0aW9uIHVud2F0Y2hGbigpIHtcbiAgICAgIHdhdGNoZXIudGVhcmRvd24oKTtcbiAgICB9O1xuICB9O1xufVxuXG5mdW5jdGlvbiBwcm94eSh2bSwga2V5KSB7XG4gIGlmICghaXNSZXNlcnZlZChrZXkpKSB7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHZtLCBrZXksIHtcbiAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICBnZXQ6IGZ1bmN0aW9uIHByb3h5R2V0dGVyKCkge1xuICAgICAgICByZXR1cm4gdm0uX2RhdGFba2V5XTtcbiAgICAgIH0sXG4gICAgICBzZXQ6IGZ1bmN0aW9uIHByb3h5U2V0dGVyKHZhbCkge1xuICAgICAgICB2bS5fZGF0YVtrZXldID0gdmFsO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG59XG5cbnZhciBWTm9kZSA9IGZ1bmN0aW9uIFZOb2RlKHRhZywgZGF0YSwgY2hpbGRyZW4sIHRleHQsIGVsbSwgbnMsIGNvbnRleHQsIGhvc3QsIGNvbXBvbmVudE9wdGlvbnMpIHtcbiAgdGhpcy50YWcgPSB0YWc7XG4gIHRoaXMuZGF0YSA9IGRhdGE7XG4gIHRoaXMuY2hpbGRyZW4gPSBjaGlsZHJlbjtcbiAgdGhpcy50ZXh0ID0gdGV4dDtcbiAgdGhpcy5lbG0gPSBlbG07XG4gIHRoaXMubnMgPSBucztcbiAgdGhpcy5jb250ZXh0ID0gY29udGV4dDtcbiAgdGhpcy5ob3N0ID0gaG9zdDtcbiAgdGhpcy5rZXkgPSBkYXRhICYmIGRhdGEua2V5O1xuICB0aGlzLmNvbXBvbmVudE9wdGlvbnMgPSBjb21wb25lbnRPcHRpb25zO1xuICB0aGlzLmNoaWxkID0gdW5kZWZpbmVkO1xuICB0aGlzLnBhcmVudCA9IHVuZGVmaW5lZDtcbiAgdGhpcy5yYXcgPSBmYWxzZTtcbiAgLy8gYXBwbHkgY29uc3RydWN0IGhvb2suXG4gIC8vIHRoaXMgaXMgYXBwbGllZCBkdXJpbmcgcmVuZGVyLCBiZWZvcmUgcGF0Y2ggaGFwcGVucy5cbiAgLy8gdW5saWtlIG90aGVyIGhvb2tzLCB0aGlzIGlzIGFwcGxpZWQgb24gYm90aCBjbGllbnQgYW5kIHNlcnZlci5cbiAgdmFyIGNvbnN0cnVjdEhvb2sgPSBkYXRhICYmIGRhdGEuaG9vayAmJiBkYXRhLmhvb2suY29uc3RydWN0O1xuICBpZiAoY29uc3RydWN0SG9vaykge1xuICAgIGNvbnN0cnVjdEhvb2sodGhpcyk7XG4gIH1cbn07XG5cbnZhciBlbXB0eVZOb2RlID0gZnVuY3Rpb24gZW1wdHlWTm9kZSgpIHtcbiAgcmV0dXJuIG5ldyBWTm9kZSh1bmRlZmluZWQsIHVuZGVmaW5lZCwgdW5kZWZpbmVkLCAnJyk7XG59O1xuXG5mdW5jdGlvbiBub3JtYWxpemVDaGlsZHJlbihjaGlsZHJlbiwgbnMpIHtcbiAgLy8gaW52b2tlIGNoaWxkcmVuIHRodW5rcy5cbiAgLy8gY29tcG9uZW50cyBhbHdheXMgcmVjZWl2ZSB0aGVpciBjaGlsZHJlbiBhcyB0aHVua3Mgc28gdGhhdCB0aGV5XG4gIC8vIGNhbiBwZXJmb3JtIHRoZSBhY3R1YWwgcmVuZGVyIGluc2lkZSB0aGVpciBvd24gZGVwZW5kZW5jeSBjb2xsZWN0aW9uIGN5Y2xlLlxuICBpZiAodHlwZW9mIGNoaWxkcmVuID09PSAnZnVuY3Rpb24nKSB7XG4gICAgY2hpbGRyZW4gPSBjaGlsZHJlbigpO1xuICB9XG4gIGlmIChpc1ByaW1pdGl2ZShjaGlsZHJlbikpIHtcbiAgICByZXR1cm4gW2NyZWF0ZVRleHRWTm9kZShjaGlsZHJlbildO1xuICB9XG4gIGlmIChBcnJheS5pc0FycmF5KGNoaWxkcmVuKSkge1xuICAgIHZhciByZXMgPSBbXTtcbiAgICBmb3IgKHZhciBpID0gMCwgbCA9IGNoaWxkcmVuLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgdmFyIGMgPSBjaGlsZHJlbltpXTtcbiAgICAgIHZhciBsYXN0ID0gcmVzW3Jlcy5sZW5ndGggLSAxXTtcbiAgICAgIC8vICBuZXN0ZWRcbiAgICAgIGlmIChBcnJheS5pc0FycmF5KGMpKSB7XG4gICAgICAgIHJlcy5wdXNoLmFwcGx5KHJlcywgbm9ybWFsaXplQ2hpbGRyZW4oYykpO1xuICAgICAgfSBlbHNlIGlmIChpc1ByaW1pdGl2ZShjKSkge1xuICAgICAgICBpZiAobGFzdCAmJiBsYXN0LnRleHQpIHtcbiAgICAgICAgICBsYXN0LnRleHQgKz0gU3RyaW5nKGMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIC8vIGNvbnZlcnQgcHJpbWl0aXZlIHRvIHZub2RlXG4gICAgICAgICAgcmVzLnB1c2goY3JlYXRlVGV4dFZOb2RlKGMpKTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmIChjIGluc3RhbmNlb2YgVk5vZGUpIHtcbiAgICAgICAgaWYgKGMudGV4dCAmJiBsYXN0ICYmIGxhc3QudGV4dCkge1xuICAgICAgICAgIGxhc3QudGV4dCArPSBjLnRleHQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgLy8gaW5oZXJpdCBwYXJlbnQgbmFtZXNwYWNlXG4gICAgICAgICAgaWYgKG5zKSB7XG4gICAgICAgICAgICBhcHBseU5TKGMsIG5zKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgcmVzLnB1c2goYyk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHJlcztcbiAgfVxufVxuXG5mdW5jdGlvbiBjcmVhdGVUZXh0Vk5vZGUodmFsKSB7XG4gIHJldHVybiBuZXcgVk5vZGUodW5kZWZpbmVkLCB1bmRlZmluZWQsIHVuZGVmaW5lZCwgU3RyaW5nKHZhbCkpO1xufVxuXG5mdW5jdGlvbiBhcHBseU5TKHZub2RlLCBucykge1xuICBpZiAodm5vZGUudGFnICYmICF2bm9kZS5ucykge1xuICAgIHZub2RlLm5zID0gbnM7XG4gICAgaWYgKHZub2RlLmNoaWxkcmVuKSB7XG4gICAgICBmb3IgKHZhciBpID0gMCwgbCA9IHZub2RlLmNoaWxkcmVuLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgICBhcHBseU5TKHZub2RlLmNoaWxkcmVuW2ldLCBucyk7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbi8vIGluIGNhc2UgdGhlIGNoaWxkIGlzIGFsc28gYW4gYWJzdHJhY3QgY29tcG9uZW50LCBlLmcuIDx0cmFuc2l0aW9uLWNvbnRyb2w+XG4vLyB3ZSB3YW50IHRvIHJlY3J1c2l2ZWx5IHJldHJpZXZlIHRoZSByZWFsIGNvbXBvbmVudCB0byBiZSByZW5kZXJlZFxuZnVuY3Rpb24gZ2V0UmVhbENoaWxkKHZub2RlKSB7XG4gIHZhciBjb21wT3B0aW9ucyA9IHZub2RlICYmIHZub2RlLmNvbXBvbmVudE9wdGlvbnM7XG4gIGlmIChjb21wT3B0aW9ucyAmJiBjb21wT3B0aW9ucy5DdG9yLm9wdGlvbnMuX2Fic3RyYWN0KSB7XG4gICAgcmV0dXJuIGdldFJlYWxDaGlsZChjb21wT3B0aW9ucy5wcm9wc0RhdGEgJiYgY29tcE9wdGlvbnMucHJvcHNEYXRhLmNoaWxkKTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gdm5vZGU7XG4gIH1cbn1cblxuZnVuY3Rpb24gdXBkYXRlTGlzdGVuZXJzKG9uLCBvbGRPbiwgYWRkLCByZW1vdmUpIHtcbiAgdmFyIG5hbWUgPSB2b2lkIDAsXG4gICAgICBjdXIgPSB2b2lkIDAsXG4gICAgICBvbGQgPSB2b2lkIDAsXG4gICAgICBmbiA9IHZvaWQgMCxcbiAgICAgIGV2ZW50ID0gdm9pZCAwLFxuICAgICAgY2FwdHVyZSA9IHZvaWQgMDtcbiAgZm9yIChuYW1lIGluIG9uKSB7XG4gICAgY3VyID0gb25bbmFtZV07XG4gICAgb2xkID0gb2xkT25bbmFtZV07XG4gICAgaWYgKCFvbGQpIHtcbiAgICAgIGNhcHR1cmUgPSBuYW1lLmNoYXJBdCgwKSA9PT0gJyEnO1xuICAgICAgZXZlbnQgPSBjYXB0dXJlID8gbmFtZS5zbGljZSgxKSA6IG5hbWU7XG4gICAgICBpZiAoQXJyYXkuaXNBcnJheShjdXIpKSB7XG4gICAgICAgIGFkZChldmVudCwgY3VyLmludm9rZXIgPSBhcnJJbnZva2VyKGN1ciksIGNhcHR1cmUpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZm4gPSBjdXI7XG4gICAgICAgIGN1ciA9IG9uW25hbWVdID0ge307XG4gICAgICAgIGN1ci5mbiA9IGZuO1xuICAgICAgICBhZGQoZXZlbnQsIGN1ci5pbnZva2VyID0gZm5JbnZva2VyKGN1ciksIGNhcHR1cmUpO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAoQXJyYXkuaXNBcnJheShvbGQpKSB7XG4gICAgICBvbGQubGVuZ3RoID0gY3VyLmxlbmd0aDtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgb2xkLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIG9sZFtpXSA9IGN1cltpXTtcbiAgICAgIH1vbltuYW1lXSA9IG9sZDtcbiAgICB9IGVsc2Uge1xuICAgICAgb2xkLmZuID0gY3VyO1xuICAgICAgb25bbmFtZV0gPSBvbGQ7XG4gICAgfVxuICB9XG4gIGZvciAobmFtZSBpbiBvbGRPbikge1xuICAgIGlmICghb25bbmFtZV0pIHtcbiAgICAgIGV2ZW50ID0gbmFtZS5jaGFyQXQoMCkgPT09ICchJyA/IG5hbWUuc2xpY2UoMSkgOiBuYW1lO1xuICAgICAgcmVtb3ZlKGV2ZW50LCBvbGRPbltuYW1lXS5pbnZva2VyKTtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gYXJySW52b2tlcihhcnIpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIChldikge1xuICAgIHZhciBzaW5nbGUgPSBhcmd1bWVudHMubGVuZ3RoID09PSAxO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYXJyLmxlbmd0aDsgaSsrKSB7XG4gICAgICBzaW5nbGUgPyBhcnJbaV0oZXYpIDogYXJyW2ldLmFwcGx5KG51bGwsIGFyZ3VtZW50cyk7XG4gICAgfVxuICB9O1xufVxuXG5mdW5jdGlvbiBmbkludm9rZXIobykge1xuICByZXR1cm4gZnVuY3Rpb24gKGV2KSB7XG4gICAgdmFyIHNpbmdsZSA9IGFyZ3VtZW50cy5sZW5ndGggPT09IDE7XG4gICAgc2luZ2xlID8gby5mbihldikgOiBvLmZuLmFwcGx5KG51bGwsIGFyZ3VtZW50cyk7XG4gIH07XG59XG5cbmZ1bmN0aW9uIGluaXRMaWZlY3ljbGUodm0pIHtcbiAgdmFyIG9wdGlvbnMgPSB2bS4kb3B0aW9ucztcblxuICB2bS4kcGFyZW50ID0gb3B0aW9ucy5wYXJlbnQ7XG4gIHZtLiRyb290ID0gdm0uJHBhcmVudCA/IHZtLiRwYXJlbnQuJHJvb3QgOiB2bTtcbiAgaWYgKHZtLiRwYXJlbnQgJiYgIW9wdGlvbnMuX2Fic3RyYWN0KSB7XG4gICAgdm0uJHBhcmVudC4kY2hpbGRyZW4ucHVzaCh2bSk7XG4gIH1cblxuICB2bS4kY2hpbGRyZW4gPSBbXTtcbiAgdm0uJHJlZnMgPSB7fTtcblxuICB2bS5fd2F0Y2hlciA9IG51bGw7XG4gIHZtLl9pbmFjdGl2ZSA9IGZhbHNlO1xuICB2bS5faXNNb3VudGVkID0gZmFsc2U7XG4gIHZtLl9pc0Rlc3Ryb3llZCA9IGZhbHNlO1xuICB2bS5faXNCZWluZ0Rlc3Ryb3llZCA9IGZhbHNlO1xufVxuXG5mdW5jdGlvbiBsaWZlY3ljbGVNaXhpbihWdWUpIHtcbiAgVnVlLnByb3RvdHlwZS5fbW91bnQgPSBmdW5jdGlvbiAoZWwsIGh5ZHJhdGluZykge1xuICAgIHZhciB2bSA9IHRoaXM7XG4gICAgdm0uJGVsID0gZWw7XG4gICAgaWYgKCF2bS4kb3B0aW9ucy5yZW5kZXIpIHtcbiAgICAgIHZtLiRvcHRpb25zLnJlbmRlciA9IGVtcHR5Vk5vZGU7XG4gICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgKi9cbiAgICAgICAgaWYgKHZtLiRvcHRpb25zLnRlbXBsYXRlKSB7XG4gICAgICAgICAgd2FybignWW91IGFyZSB1c2luZyB0aGUgcnVudGltZS1vbmx5IGJ1aWxkIG9mIFZ1ZSB3aGVyZSB0aGUgdGVtcGxhdGUgJyArICdvcHRpb24gaXMgbm90IGF2YWlsYWJsZS4gRWl0aGVyIHByZS1jb21waWxlIHRoZSB0ZW1wbGF0ZXMgaW50byAnICsgJ3JlbmRlciBmdW5jdGlvbnMsIG9yIHVzZSB0aGUgY29tcGlsZXItaW5jbHVkZWQgYnVpbGQuJywgdm0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHdhcm4oJ0ZhaWxlZCB0byBtb3VudCBjb21wb25lbnQ6IHRlbXBsYXRlIG9yIHJlbmRlciBmdW5jdGlvbiBub3QgZGVmaW5lZC4nLCB2bSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgY2FsbEhvb2sodm0sICdiZWZvcmVNb3VudCcpO1xuICAgIHZtLl93YXRjaGVyID0gbmV3IFdhdGNoZXIodm0sIGZ1bmN0aW9uICgpIHtcbiAgICAgIHZtLl91cGRhdGUodm0uX3JlbmRlcigpLCBoeWRyYXRpbmcpO1xuICAgIH0sIG5vb3ApO1xuICAgIGh5ZHJhdGluZyA9IGZhbHNlO1xuICAgIC8vIHJvb3QgaW5zdGFuY2UsIGNhbGwgbW91bnRlZCBvbiBzZWxmXG4gICAgLy8gbW91bnRlZCBpcyBjYWxsZWQgZm9yIGNoaWxkIGNvbXBvbmVudHMgaW4gaXRzIGluc2VydGVkIGhvb2tcbiAgICBpZiAodm0uJHJvb3QgPT09IHZtKSB7XG4gICAgICB2bS5faXNNb3VudGVkID0gdHJ1ZTtcbiAgICAgIGNhbGxIb29rKHZtLCAnbW91bnRlZCcpO1xuICAgIH1cbiAgICByZXR1cm4gdm07XG4gIH07XG5cbiAgVnVlLnByb3RvdHlwZS5fdXBkYXRlID0gZnVuY3Rpb24gKHZub2RlLCBoeWRyYXRpbmcpIHtcbiAgICB2YXIgdm0gPSB0aGlzO1xuICAgIGlmICh2bS5faXNNb3VudGVkKSB7XG4gICAgICBjYWxsSG9vayh2bSwgJ2JlZm9yZVVwZGF0ZScpO1xuICAgIH1cbiAgICB2YXIgcHJldkVsID0gdm0uJGVsO1xuICAgIGlmICghdm0uX3Zub2RlKSB7XG4gICAgICAvLyBWdWUucHJvdG90eXBlLl9fcGF0Y2hfXyBpcyBpbmplY3RlZCBpbiBlbnRyeSBwb2ludHNcbiAgICAgIC8vIGJhc2VkIG9uIHRoZSByZW5kZXJpbmcgYmFja2VuZCB1c2VkLlxuICAgICAgdm0uJGVsID0gdm0uX19wYXRjaF9fKHZtLiRlbCwgdm5vZGUsIGh5ZHJhdGluZyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZtLiRlbCA9IHZtLl9fcGF0Y2hfXyh2bS5fdm5vZGUsIHZub2RlKTtcbiAgICB9XG4gICAgdm0uX3Zub2RlID0gdm5vZGU7XG4gICAgLy8gdXBkYXRlIF9fdnVlX18gcmVmZXJlbmNlXG4gICAgaWYgKHByZXZFbCkge1xuICAgICAgcHJldkVsLl9fdnVlX18gPSBudWxsO1xuICAgIH1cbiAgICBpZiAodm0uJGVsKSB7XG4gICAgICB2bS4kZWwuX192dWVfXyA9IHZtO1xuICAgIH1cbiAgICAvLyBpZiBwYXJlbnQgaXMgYW4gSE9DLCB1cGRhdGUgaXRzICRlbCBhcyB3ZWxsXG4gICAgaWYgKHZtLiR2bm9kZSAmJiB2bS4kcGFyZW50ICYmIHZtLiR2bm9kZSA9PT0gdm0uJHBhcmVudC5fdm5vZGUpIHtcbiAgICAgIHZtLiRwYXJlbnQuJGVsID0gdm0uJGVsO1xuICAgIH1cbiAgICBpZiAodm0uX2lzTW91bnRlZCkge1xuICAgICAgY2FsbEhvb2sodm0sICd1cGRhdGVkJyk7XG4gICAgfVxuICB9O1xuXG4gIFZ1ZS5wcm90b3R5cGUuX3VwZGF0ZUZyb21QYXJlbnQgPSBmdW5jdGlvbiAocHJvcHNEYXRhLCBsaXN0ZW5lcnMsIHBhcmVudFZub2RlLCByZW5kZXJDaGlsZHJlbikge1xuICAgIHZhciB2bSA9IHRoaXM7XG4gICAgdm0uJG9wdGlvbnMuX3BhcmVudFZub2RlID0gcGFyZW50Vm5vZGU7XG4gICAgdm0uJG9wdGlvbnMuX3JlbmRlckNoaWxkcmVuID0gcmVuZGVyQ2hpbGRyZW47XG4gICAgLy8gdXBkYXRlIHByb3BzXG4gICAgaWYgKHByb3BzRGF0YSAmJiB2bS4kb3B0aW9ucy5wcm9wcykge1xuICAgICAgb2JzZXJ2ZXJTdGF0ZS5zaG91bGRDb252ZXJ0ID0gZmFsc2U7XG4gICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICBvYnNlcnZlclN0YXRlLmlzU2V0dGluZ1Byb3BzID0gdHJ1ZTtcbiAgICAgIH1cbiAgICAgIHZhciBwcm9wS2V5cyA9IHZtLiRvcHRpb25zLl9wcm9wS2V5cyB8fCBbXTtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcEtleXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgdmFyIGtleSA9IHByb3BLZXlzW2ldO1xuICAgICAgICB2bVtrZXldID0gdmFsaWRhdGVQcm9wKGtleSwgdm0uJG9wdGlvbnMucHJvcHMsIHByb3BzRGF0YSwgdm0pO1xuICAgICAgfVxuICAgICAgb2JzZXJ2ZXJTdGF0ZS5zaG91bGRDb252ZXJ0ID0gdHJ1ZTtcbiAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgIG9ic2VydmVyU3RhdGUuaXNTZXR0aW5nUHJvcHMgPSBmYWxzZTtcbiAgICAgIH1cbiAgICB9XG4gICAgLy8gdXBkYXRlIGxpc3RlbmVyc1xuICAgIGlmIChsaXN0ZW5lcnMpIHtcbiAgICAgIHZhciBvbGRMaXN0ZW5lcnMgPSB2bS4kb3B0aW9ucy5fcGFyZW50TGlzdGVuZXJzO1xuICAgICAgdm0uJG9wdGlvbnMuX3BhcmVudExpc3RlbmVycyA9IGxpc3RlbmVycztcbiAgICAgIHZtLl91cGRhdGVMaXN0ZW5lcnMobGlzdGVuZXJzLCBvbGRMaXN0ZW5lcnMpO1xuICAgIH1cbiAgfTtcblxuICBWdWUucHJvdG90eXBlLiRmb3JjZVVwZGF0ZSA9IGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgdm0gPSB0aGlzO1xuICAgIGlmICh2bS5fd2F0Y2hlcikge1xuICAgICAgdm0uX3dhdGNoZXIudXBkYXRlKCk7XG4gICAgfVxuICAgIGlmICh2bS5fd2F0Y2hlcnMubGVuZ3RoKSB7XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHZtLl93YXRjaGVycy5sZW5ndGg7IGkrKykge1xuICAgICAgICB2bS5fd2F0Y2hlcnNbaV0udXBkYXRlKHRydWUgLyogc2hhbGxvdyAqLyk7XG4gICAgICB9XG4gICAgfVxuICB9O1xuXG4gIFZ1ZS5wcm90b3R5cGUuJGRlc3Ryb3kgPSBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIHZtID0gdGhpcztcbiAgICBpZiAodm0uX2lzQmVpbmdEZXN0cm95ZWQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY2FsbEhvb2sodm0sICdiZWZvcmVEZXN0cm95Jyk7XG4gICAgdm0uX2lzQmVpbmdEZXN0cm95ZWQgPSB0cnVlO1xuICAgIC8vIHJlbW92ZSBzZWxmIGZyb20gcGFyZW50XG4gICAgdmFyIHBhcmVudCA9IHZtLiRwYXJlbnQ7XG4gICAgaWYgKHBhcmVudCAmJiAhcGFyZW50Ll9pc0JlaW5nRGVzdHJveWVkICYmICF2bS4kb3B0aW9ucy5fYWJzdHJhY3QpIHtcbiAgICAgIHJlbW92ZShwYXJlbnQuJGNoaWxkcmVuLCB2bSk7XG4gICAgfVxuICAgIC8vIHRlYXJkb3duIHdhdGNoZXJzXG4gICAgaWYgKHZtLl93YXRjaGVyKSB7XG4gICAgICB2bS5fd2F0Y2hlci50ZWFyZG93bigpO1xuICAgIH1cbiAgICB2YXIgaSA9IHZtLl93YXRjaGVycy5sZW5ndGg7XG4gICAgd2hpbGUgKGktLSkge1xuICAgICAgdm0uX3dhdGNoZXJzW2ldLnRlYXJkb3duKCk7XG4gICAgfVxuICAgIC8vIHJlbW92ZSByZWZlcmVuY2UgZnJvbSBkYXRhIG9iXG4gICAgLy8gZnJvemVuIG9iamVjdCBtYXkgbm90IGhhdmUgb2JzZXJ2ZXIuXG4gICAgaWYgKHZtLl9kYXRhLl9fb2JfXykge1xuICAgICAgdm0uX2RhdGEuX19vYl9fLnZtQ291bnQtLTtcbiAgICB9XG4gICAgLy8gY2FsbCB0aGUgbGFzdCBob29rLi4uXG4gICAgdm0uX2lzRGVzdHJveWVkID0gdHJ1ZTtcbiAgICBjYWxsSG9vayh2bSwgJ2Rlc3Ryb3llZCcpO1xuICAgIC8vIHR1cm4gb2ZmIGFsbCBpbnN0YW5jZSBsaXN0ZW5lcnMuXG4gICAgdm0uJG9mZigpO1xuICAgIC8vIHJlbW92ZSBfX3Z1ZV9fIHJlZmVyZW5jZVxuICAgIGlmICh2bS4kZWwpIHtcbiAgICAgIHZtLiRlbC5fX3Z1ZV9fID0gbnVsbDtcbiAgICB9XG4gIH07XG59XG5cbmZ1bmN0aW9uIGNhbGxIb29rKHZtLCBob29rKSB7XG4gIHZtLiRlbWl0KCdwcmUtaG9vazonICsgaG9vayk7XG4gIHZhciBoYW5kbGVycyA9IHZtLiRvcHRpb25zW2hvb2tdO1xuICBpZiAoaGFuZGxlcnMpIHtcbiAgICBmb3IgKHZhciBpID0gMCwgaiA9IGhhbmRsZXJzLmxlbmd0aDsgaSA8IGo7IGkrKykge1xuICAgICAgaGFuZGxlcnNbaV0uY2FsbCh2bSk7XG4gICAgfVxuICB9XG4gIHZtLiRlbWl0KCdob29rOicgKyBob29rKTtcbn1cblxudmFyIGhvb2tzID0geyBpbml0OiBpbml0LCBwcmVwYXRjaDogcHJlcGF0Y2gsIGluc2VydDogaW5zZXJ0LCBkZXN0cm95OiBkZXN0cm95IH07XG52YXIgaG9va3NUb01lcmdlID0gT2JqZWN0LmtleXMoaG9va3MpO1xuXG5mdW5jdGlvbiBjcmVhdGVDb21wb25lbnQoQ3RvciwgZGF0YSwgcGFyZW50LCBjb250ZXh0LCBob3N0LCBfY2hpbGRyZW4sIHRhZykge1xuICAvLyBlbnN1cmUgY2hpbGRyZW4gaXMgYSB0aHVua1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyAmJiBfY2hpbGRyZW4gJiYgdHlwZW9mIF9jaGlsZHJlbiAhPT0gJ2Z1bmN0aW9uJykge1xuICAgIHdhcm4oJ0EgY29tcG9uZW50XFwncyBjaGlsZHJlbiBzaG91bGQgYmUgYSBmdW5jdGlvbiB0aGF0IHJldHVybnMgdGhlICcgKyAnY2hpbGRyZW4gYXJyYXkuIFRoaXMgYWxsb3dzIHRoZSBjb21wb25lbnQgdG8gdHJhY2sgdGhlIGNoaWxkcmVuICcgKyAnZGVwZW5kZW5jaWVzIGFuZCBvcHRpbWl6ZXMgcmUtcmVuZGVyaW5nLicpO1xuICB9XG5cbiAgaWYgKCFDdG9yKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgaWYgKGlzT2JqZWN0KEN0b3IpKSB7XG4gICAgQ3RvciA9IFZ1ZS5leHRlbmQoQ3Rvcik7XG4gIH1cblxuICBpZiAodHlwZW9mIEN0b3IgIT09ICdmdW5jdGlvbicpIHtcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgd2FybignSW52YWxpZCBDb21wb25lbnQgZGVmaW5pdGlvbjogJyArIEN0b3IsIHBhcmVudCk7XG4gICAgfVxuICAgIHJldHVybjtcbiAgfVxuXG4gIC8vIGFzeW5jIGNvbXBvbmVudFxuICBpZiAoIUN0b3IuY2lkKSB7XG4gICAgaWYgKEN0b3IucmVzb2x2ZWQpIHtcbiAgICAgIEN0b3IgPSBDdG9yLnJlc29sdmVkO1xuICAgIH0gZWxzZSB7XG4gICAgICBDdG9yID0gcmVzb2x2ZUFzeW5jQ29tcG9uZW50KEN0b3IsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgLy8gaXQncyBvayB0byBxdWV1ZSB0aGlzIG9uIGV2ZXJ5IHJlbmRlciBiZWNhdXNlXG4gICAgICAgIC8vICRmb3JjZVVwZGF0ZSBpcyBidWZmZXJlZC4gdGhpcyBpcyBvbmx5IGNhbGxlZFxuICAgICAgICAvLyBpZiB0aGVcbiAgICAgICAgcGFyZW50LiRmb3JjZVVwZGF0ZSgpO1xuICAgICAgfSk7XG4gICAgICBpZiAoIUN0b3IpIHtcbiAgICAgICAgLy8gcmV0dXJuIG5vdGhpbmcgaWYgdGhpcyBpcyBpbmRlZWQgYW4gYXN5bmMgY29tcG9uZW50XG4gICAgICAgIC8vIHdhaXQgZm9yIHRoZSBjYWxsYmFjayB0byB0cmlnZ2VyIHBhcmVudCB1cGRhdGUuXG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBkYXRhID0gZGF0YSB8fCB7fTtcblxuICAvLyBleHRyYWN0IHByb3BzXG4gIHZhciBwcm9wc0RhdGEgPSBleHRyYWN0UHJvcHMoZGF0YSwgQ3Rvcik7XG5cbiAgLy8gZnVuY3Rpb25hbCBjb21wb25lbnRcbiAgaWYgKEN0b3Iub3B0aW9ucy5mdW5jdGlvbmFsKSB7XG4gICAgdmFyIF9yZXQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICB2YXIgcHJvcHMgPSB7fTtcbiAgICAgIHZhciBwcm9wT3B0aW9ucyA9IEN0b3Iub3B0aW9ucy5wcm9wcztcbiAgICAgIGlmIChwcm9wT3B0aW9ucykge1xuICAgICAgICBPYmplY3Qua2V5cyhwcm9wT3B0aW9ucykuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgICAgICAgcHJvcHNba2V5XSA9IHZhbGlkYXRlUHJvcChrZXksIHByb3BPcHRpb25zLCBwcm9wc0RhdGEpO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICAgIHJldHVybiB7XG4gICAgICAgIHY6IEN0b3Iub3B0aW9ucy5yZW5kZXIuY2FsbChudWxsLCBwYXJlbnQuJGNyZWF0ZUVsZW1lbnQsIHsgcHJvcHM6IHByb3BzLCBwYXJlbnQ6IHBhcmVudCwgZGF0YTogZGF0YSwgY2hpbGRyZW46IGZ1bmN0aW9uIGNoaWxkcmVuKCkge1xuICAgICAgICAgICAgcmV0dXJuIG5vcm1hbGl6ZUNoaWxkcmVuKF9jaGlsZHJlbik7XG4gICAgICAgICAgfSB9KVxuICAgICAgfTtcbiAgICB9KCk7XG5cbiAgICBpZiAodHlwZW9mIF9yZXQgPT09IFwib2JqZWN0XCIpIHJldHVybiBfcmV0LnY7XG4gIH1cblxuICAvLyBtZXJnZSBjb21wb25lbnQgbWFuYWdlbWVudCBob29rcyBvbnRvIHRoZSBwbGFjZWhvbGRlciBub2RlXG4gIG1lcmdlSG9va3MoZGF0YSk7XG5cbiAgLy8gZXh0cmFjdCBsaXN0ZW5lcnMsIHNpbmNlIHRoZXNlIG5lZWRzIHRvIGJlIHRyZWF0ZWQgYXNcbiAgLy8gY2hpbGQgY29tcG9uZW50IGxpc3RlbmVycyBpbnN0ZWFkIG9mIERPTSBsaXN0ZW5lcnNcbiAgdmFyIGxpc3RlbmVycyA9IGRhdGEub247XG4gIGlmIChsaXN0ZW5lcnMpIHtcbiAgICBkZWxldGUgZGF0YS5vbjtcbiAgfVxuXG4gIC8vIHJldHVybiBhIHBsYWNlaG9sZGVyIHZub2RlXG4gIHZhciBuYW1lID0gQ3Rvci5vcHRpb25zLm5hbWUgfHwgdGFnO1xuICB2YXIgdm5vZGUgPSBuZXcgVk5vZGUoJ3Z1ZS1jb21wb25lbnQtJyArIEN0b3IuY2lkICsgKG5hbWUgPyAnLScgKyBuYW1lIDogJycpLCBkYXRhLCB1bmRlZmluZWQsIHVuZGVmaW5lZCwgdW5kZWZpbmVkLCB1bmRlZmluZWQsIGNvbnRleHQsIGhvc3QsIHsgQ3RvcjogQ3RvciwgcHJvcHNEYXRhOiBwcm9wc0RhdGEsIGxpc3RlbmVyczogbGlzdGVuZXJzLCBwYXJlbnQ6IHBhcmVudCwgdGFnOiB0YWcsIGNoaWxkcmVuOiBfY2hpbGRyZW4gfSk7XG4gIHJldHVybiB2bm9kZTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlQ29tcG9uZW50SW5zdGFuY2VGb3JWbm9kZSh2bm9kZSAvLyB3ZSBrbm93IGl0J3MgTW91bnRlZENvbXBvbmVudFZOb2RlIGJ1dCBmbG93IGRvZXNuJ3Rcbikge1xuICB2YXIgdm5vZGVDb21wb25lbnRPcHRpb25zID0gdm5vZGUuY29tcG9uZW50T3B0aW9ucztcbiAgdmFyIG9wdGlvbnMgPSB7XG4gICAgX2lzQ29tcG9uZW50OiB0cnVlLFxuICAgIHBhcmVudDogdm5vZGVDb21wb25lbnRPcHRpb25zLnBhcmVudCxcbiAgICBwcm9wc0RhdGE6IHZub2RlQ29tcG9uZW50T3B0aW9ucy5wcm9wc0RhdGEsXG4gICAgX2NvbXBvbmVudFRhZzogdm5vZGVDb21wb25lbnRPcHRpb25zLnRhZyxcbiAgICBfcGFyZW50Vm5vZGU6IHZub2RlLFxuICAgIF9wYXJlbnRMaXN0ZW5lcnM6IHZub2RlQ29tcG9uZW50T3B0aW9ucy5saXN0ZW5lcnMsXG4gICAgX3JlbmRlckNoaWxkcmVuOiB2bm9kZUNvbXBvbmVudE9wdGlvbnMuY2hpbGRyZW5cbiAgfTtcbiAgLy8gY2hlY2sgaW5saW5lLXRlbXBsYXRlIHJlbmRlciBmdW5jdGlvbnNcbiAgdmFyIGlubGluZVRlbXBsYXRlID0gdm5vZGUuZGF0YS5pbmxpbmVUZW1wbGF0ZTtcbiAgaWYgKGlubGluZVRlbXBsYXRlKSB7XG4gICAgb3B0aW9ucy5yZW5kZXIgPSBpbmxpbmVUZW1wbGF0ZS5yZW5kZXI7XG4gICAgb3B0aW9ucy5zdGF0aWNSZW5kZXJGbnMgPSBpbmxpbmVUZW1wbGF0ZS5zdGF0aWNSZW5kZXJGbnM7XG4gIH1cbiAgcmV0dXJuIG5ldyB2bm9kZUNvbXBvbmVudE9wdGlvbnMuQ3RvcihvcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gaW5pdCh2bm9kZSwgaHlkcmF0aW5nKSB7XG4gIGlmICghdm5vZGUuY2hpbGQpIHtcbiAgICB2YXIgY2hpbGQgPSB2bm9kZS5jaGlsZCA9IGNyZWF0ZUNvbXBvbmVudEluc3RhbmNlRm9yVm5vZGUodm5vZGUpO1xuICAgIGNoaWxkLiRtb3VudChoeWRyYXRpbmcgPyB2bm9kZS5lbG0gOiB1bmRlZmluZWQsIGh5ZHJhdGluZyk7XG4gIH1cbn1cblxuZnVuY3Rpb24gcHJlcGF0Y2gob2xkVm5vZGUsIHZub2RlKSB7XG4gIHZhciBvcHRpb25zID0gdm5vZGUuY29tcG9uZW50T3B0aW9ucztcbiAgdm5vZGUuY2hpbGQgPSBvbGRWbm9kZS5jaGlsZDtcbiAgdm5vZGUuY2hpbGQuX3VwZGF0ZUZyb21QYXJlbnQob3B0aW9ucy5wcm9wc0RhdGEsIC8vIHVwZGF0ZWQgcHJvcHNcbiAgb3B0aW9ucy5saXN0ZW5lcnMsIC8vIHVwZGF0ZWQgbGlzdGVuZXJzXG4gIHZub2RlLCAvLyBuZXcgcGFyZW50IHZub2RlXG4gIG9wdGlvbnMuY2hpbGRyZW4gLy8gbmV3IGNoaWxkcmVuXG4gICk7XG59XG5cbmZ1bmN0aW9uIGluc2VydCh2bm9kZSkge1xuICBpZiAoIXZub2RlLmNoaWxkLl9pc01vdW50ZWQpIHtcbiAgICB2bm9kZS5jaGlsZC5faXNNb3VudGVkID0gdHJ1ZTtcbiAgICBjYWxsSG9vayh2bm9kZS5jaGlsZCwgJ21vdW50ZWQnKTtcbiAgfVxuICBpZiAodm5vZGUuZGF0YS5rZWVwQWxpdmUpIHtcbiAgICB2bm9kZS5jaGlsZC5faW5hY3RpdmUgPSBmYWxzZTtcbiAgICBjYWxsSG9vayh2bm9kZS5jaGlsZCwgJ2FjdGl2YXRlZCcpO1xuICB9XG59XG5cbmZ1bmN0aW9uIGRlc3Ryb3kodm5vZGUpIHtcbiAgaWYgKCF2bm9kZS5jaGlsZC5faXNEZXN0cm95ZWQpIHtcbiAgICBpZiAoIXZub2RlLmRhdGEua2VlcEFsaXZlKSB7XG4gICAgICB2bm9kZS5jaGlsZC4kZGVzdHJveSgpO1xuICAgIH0gZWxzZSB7XG4gICAgICB2bm9kZS5jaGlsZC5faW5hY3RpdmUgPSB0cnVlO1xuICAgICAgY2FsbEhvb2sodm5vZGUuY2hpbGQsICdkZWFjdGl2YXRlZCcpO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiByZXNvbHZlQXN5bmNDb21wb25lbnQoZmFjdG9yeSwgY2IpIHtcbiAgaWYgKGZhY3RvcnkucmVxdWVzdGVkKSB7XG4gICAgLy8gcG9vbCBjYWxsYmFja3NcbiAgICBmYWN0b3J5LnBlbmRpbmdDYWxsYmFja3MucHVzaChjYik7XG4gIH0gZWxzZSB7XG4gICAgdmFyIF9yZXQyID0gZnVuY3Rpb24gKCkge1xuICAgICAgZmFjdG9yeS5yZXF1ZXN0ZWQgPSB0cnVlO1xuICAgICAgdmFyIGNicyA9IGZhY3RvcnkucGVuZGluZ0NhbGxiYWNrcyA9IFtjYl07XG4gICAgICB2YXIgc3luYyA9IHRydWU7XG4gICAgICBmYWN0b3J5KFxuICAgICAgLy8gcmVzb2x2ZVxuICAgICAgZnVuY3Rpb24gKHJlcykge1xuICAgICAgICBpZiAoaXNPYmplY3QocmVzKSkge1xuICAgICAgICAgIHJlcyA9IFZ1ZS5leHRlbmQocmVzKTtcbiAgICAgICAgfVxuICAgICAgICAvLyBjYWNoZSByZXNvbHZlZFxuICAgICAgICBmYWN0b3J5LnJlc29sdmVkID0gcmVzO1xuICAgICAgICAvLyBpbnZva2UgY2FsbGJhY2tzIG9ubHkgaWYgdGhpcyBpcyBub3QgYSBzeW5jaHJvbm91cyByZXNvbHZlXG4gICAgICAgIC8vIChhc3luYyByZXNvbHZlcyBhcmUgc2hpbW1lZCBhcyBzeW5jaHJvbm91cyBkdXJpbmcgU1NSKVxuICAgICAgICBpZiAoIXN5bmMpIHtcbiAgICAgICAgICBmb3IgKHZhciBpID0gMCwgbCA9IGNicy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgICAgICAgIGNic1tpXShyZXMpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIC8vIHJlamVjdFxuICAgICAgZnVuY3Rpb24gKHJlYXNvbikge1xuICAgICAgICBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nICYmIHdhcm4oJ0ZhaWxlZCB0byByZXNvbHZlIGFzeW5jIGNvbXBvbmVudDogJyArIGZhY3RvcnkgKyAocmVhc29uID8gJ1xcblJlYXNvbjogJyArIHJlYXNvbiA6ICcnKSk7XG4gICAgICB9KTtcbiAgICAgIHN5bmMgPSBmYWxzZTtcbiAgICAgIC8vIHJldHVybiBpbiBjYXNlIHJlc29sdmVkIHN5bmNocm9ub3VzbHlcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHY6IGZhY3RvcnkucmVzb2x2ZWRcbiAgICAgIH07XG4gICAgfSgpO1xuXG4gICAgaWYgKHR5cGVvZiBfcmV0MiA9PT0gXCJvYmplY3RcIikgcmV0dXJuIF9yZXQyLnY7XG4gIH1cbn1cblxuZnVuY3Rpb24gZXh0cmFjdFByb3BzKGRhdGEsIEN0b3IpIHtcbiAgLy8gd2UgYXJlIG9ubHkgZXh0cmF0aW5nIHJhdyB2YWx1ZXMgaGVyZS5cbiAgLy8gdmFsaWRhdGlvbiBhbmQgZGVmYXVsdCB2YWx1ZXMgYXJlIGhhbmRsZWQgaW4gdGhlIGNoaWxkXG4gIC8vIGNvbXBvbmVudCBpdHNlbGYuXG4gIHZhciBwcm9wT3B0aW9ucyA9IEN0b3Iub3B0aW9ucy5wcm9wcztcbiAgaWYgKCFwcm9wT3B0aW9ucykge1xuICAgIHJldHVybjtcbiAgfVxuICB2YXIgcmVzID0ge307XG4gIHZhciBhdHRycyA9IGRhdGEuYXR0cnM7XG4gIHZhciBwcm9wcyA9IGRhdGEucHJvcHM7XG4gIHZhciBzdGF0aWNBdHRycyA9IGRhdGEuc3RhdGljQXR0cnM7XG4gIGlmICghYXR0cnMgJiYgIXByb3BzICYmICFzdGF0aWNBdHRycykge1xuICAgIHJldHVybiByZXM7XG4gIH1cbiAgZm9yICh2YXIga2V5IGluIHByb3BPcHRpb25zKSB7XG4gICAgdmFyIGFsdEtleSA9IGh5cGhlbmF0ZShrZXkpO1xuICAgIGNoZWNrUHJvcChyZXMsIGF0dHJzLCBrZXksIGFsdEtleSkgfHwgY2hlY2tQcm9wKHJlcywgcHJvcHMsIGtleSwgYWx0S2V5KSB8fCBjaGVja1Byb3AocmVzLCBzdGF0aWNBdHRycywga2V5LCBhbHRLZXkpO1xuICB9XG4gIHJldHVybiByZXM7XG59XG5cbmZ1bmN0aW9uIGNoZWNrUHJvcChyZXMsIGhhc2gsIGtleSwgYWx0S2V5KSB7XG4gIGlmIChoYXNoKSB7XG4gICAgaWYgKGhhc093bihoYXNoLCBrZXkpKSB7XG4gICAgICByZXNba2V5XSA9IGhhc2hba2V5XTtcbiAgICAgIGRlbGV0ZSBoYXNoW2tleV07XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9IGVsc2UgaWYgKGhhc093bihoYXNoLCBhbHRLZXkpKSB7XG4gICAgICByZXNba2V5XSA9IGhhc2hbYWx0S2V5XTtcbiAgICAgIGRlbGV0ZSBoYXNoW2FsdEtleV07XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIGZhbHNlO1xufVxuXG5mdW5jdGlvbiBtZXJnZUhvb2tzKGRhdGEpIHtcbiAgaWYgKGRhdGEuaG9vaykge1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgaG9va3NUb01lcmdlLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIga2V5ID0gaG9va3NUb01lcmdlW2ldO1xuICAgICAgdmFyIGZyb21QYXJlbnQgPSBkYXRhLmhvb2tba2V5XTtcbiAgICAgIHZhciBvdXJzID0gaG9va3Nba2V5XTtcbiAgICAgIGRhdGEuaG9va1trZXldID0gZnJvbVBhcmVudCA/IG1lcmdlSG9vayQxKG91cnMsIGZyb21QYXJlbnQpIDogb3VycztcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgZGF0YS5ob29rID0gaG9va3M7XG4gIH1cbn1cblxuZnVuY3Rpb24gbWVyZ2VIb29rJDEoYSwgYikge1xuICAvLyBzaW5jZSBhbGwgaG9va3MgaGF2ZSBhdCBtb3N0IHR3byBhcmdzLCB1c2UgZml4ZWQgYXJnc1xuICAvLyB0byBhdm9pZCBoYXZpbmcgdG8gdXNlIGZuLmFwcGx5KCkuXG4gIHJldHVybiBmdW5jdGlvbiAoXywgX18pIHtcbiAgICBhKF8sIF9fKTtcbiAgICBiKF8sIF9fKTtcbiAgfTtcbn1cblxuLy8gd3JhcHBlciBmdW5jdGlvbiBmb3IgcHJvdmlkaW5nIGEgbW9yZSBmbGV4aWJsZSBpbnRlcmZhY2Vcbi8vIHdpdGhvdXQgZ2V0dGluZyB5ZWxsZWQgYXQgYnkgZmxvd1xuZnVuY3Rpb24gY3JlYXRlRWxlbWVudCh0YWcsIGRhdGEsIGNoaWxkcmVuKSB7XG4gIGlmIChkYXRhICYmIChBcnJheS5pc0FycmF5KGRhdGEpIHx8IHR5cGVvZiBkYXRhICE9PSAnb2JqZWN0JykpIHtcbiAgICBjaGlsZHJlbiA9IGRhdGE7XG4gICAgZGF0YSA9IHVuZGVmaW5lZDtcbiAgfVxuICByZXR1cm4gX2NyZWF0ZUVsZW1lbnQuY2FsbCh0aGlzLCB0YWcsIGRhdGEsIGNoaWxkcmVuKTtcbn1cblxuZnVuY3Rpb24gX2NyZWF0ZUVsZW1lbnQodGFnLCBkYXRhLCBjaGlsZHJlbikge1xuICAvLyBtYWtlIHN1cmUgdG8gZXhwb3NlIHJlYWwgc2VsZiBpbnN0ZWFkIG9mIHByb3h5XG4gIHZhciBjb250ZXh0ID0gdGhpcy5fc2VsZjtcbiAgdmFyIHBhcmVudCA9IHJlbmRlclN0YXRlLmFjdGl2ZUluc3RhbmNlO1xuICB2YXIgaG9zdCA9IGNvbnRleHQgIT09IHBhcmVudCA/IHBhcmVudCA6IHVuZGVmaW5lZDtcbiAgaWYgKCFwYXJlbnQpIHtcbiAgICBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nICYmIHdhcm4oJ2NyZWF0ZUVsZW1lbnQgY2Fubm90IGJlIGNhbGxlZCBvdXRzaWRlIG9mIGNvbXBvbmVudCAnICsgJ3JlbmRlciBmdW5jdGlvbnMuJyk7XG4gICAgcmV0dXJuO1xuICB9XG4gIGlmICghdGFnKSB7XG4gICAgLy8gaW4gY2FzZSBvZiBjb21wb25lbnQgOmlzIHNldCB0byBmYWxzeSB2YWx1ZVxuICAgIHJldHVybiBlbXB0eVZOb2RlKCk7XG4gIH1cbiAgaWYgKHR5cGVvZiB0YWcgPT09ICdzdHJpbmcnKSB7XG4gICAgdmFyIEN0b3IgPSB2b2lkIDA7XG4gICAgaWYgKGNvbmZpZy5pc1Jlc2VydmVkVGFnKHRhZykpIHtcbiAgICAgIC8vIHBsYXRmb3JtIGJ1aWx0LWluIGVsZW1lbnRzXG4gICAgICByZXR1cm4gbmV3IFZOb2RlKHRhZywgZGF0YSwgbm9ybWFsaXplQ2hpbGRyZW4oY2hpbGRyZW4pLCB1bmRlZmluZWQsIHVuZGVmaW5lZCwgdW5kZWZpbmVkLCBjb250ZXh0LCBob3N0KTtcbiAgICB9IGVsc2UgaWYgKEN0b3IgPSByZXNvbHZlQXNzZXQoY29udGV4dC4kb3B0aW9ucywgJ2NvbXBvbmVudHMnLCB0YWcpKSB7XG4gICAgICAvLyBjb21wb25lbnRcbiAgICAgIHJldHVybiBjcmVhdGVDb21wb25lbnQoQ3RvciwgZGF0YSwgcGFyZW50LCBjb250ZXh0LCBob3N0LCBjaGlsZHJlbiwgdGFnKTtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gdW5rbm93biBvciBuYW1lc3BhY2VkIGVsZW1lbnRzXG4gICAgICAvLyBjaGVjayBhdCBydW50aW1lIGJlY2F1c2UgaXQgbWF5IGdldCBhc3NpZ25lZCBhIG5hbWVzcGFjZSB3aGVuIGl0c1xuICAgICAgLy8gcGFyZW50IG5vcm1hbGl6ZXMgY2hpbGRyZW5cbiAgICAgIHZhciBucyA9IGNvbmZpZy5nZXRUYWdOYW1lc3BhY2UodGFnKTtcbiAgICAgIHJldHVybiBuZXcgVk5vZGUodGFnLCBkYXRhLCBub3JtYWxpemVDaGlsZHJlbihjaGlsZHJlbiwgbnMpLCB1bmRlZmluZWQsIHVuZGVmaW5lZCwgbnMsIGNvbnRleHQsIGhvc3QpO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICAvLyBkaXJlY3QgY29tcG9uZW50IG9wdGlvbnMgLyBjb25zdHJ1Y3RvclxuICAgIHJldHVybiBjcmVhdGVDb21wb25lbnQodGFnLCBkYXRhLCBwYXJlbnQsIGNvbnRleHQsIGhvc3QsIGNoaWxkcmVuKTtcbiAgfVxufVxuXG52YXIgcmVuZGVyU3RhdGUgPSB7XG4gIGFjdGl2ZUluc3RhbmNlOiBudWxsXG59O1xuXG5mdW5jdGlvbiBpbml0UmVuZGVyKHZtKSB7XG4gIHZtLiR2bm9kZSA9IG51bGw7IC8vIHRoZSBwbGFjZWhvbGRlciBub2RlIGluIHBhcmVudCB0cmVlXG4gIHZtLl92bm9kZSA9IG51bGw7IC8vIHRoZSByb290IG9mIHRoZSBjaGlsZCB0cmVlXG4gIHZtLl9zdGF0aWNUcmVlcyA9IG51bGw7XG4gIHZtLiRzbG90cyA9IHt9O1xuICAvLyBiaW5kIHRoZSBwdWJsaWMgY3JlYXRlRWxlbWVudCBmbiB0byB0aGlzIGluc3RhbmNlXG4gIC8vIHNvIHRoYXQgd2UgZ2V0IHByb3BlciByZW5kZXIgY29udGV4dCBpbnNpZGUgaXQuXG4gIHZtLiRjcmVhdGVFbGVtZW50ID0gYmluZChjcmVhdGVFbGVtZW50LCB2bSk7XG4gIGlmICh2bS4kb3B0aW9ucy5lbCkge1xuICAgIHZtLiRtb3VudCh2bS4kb3B0aW9ucy5lbCk7XG4gIH1cbn1cblxuZnVuY3Rpb24gcmVuZGVyTWl4aW4oVnVlKSB7XG4gIFZ1ZS5wcm90b3R5cGUuJG5leHRUaWNrID0gZnVuY3Rpb24gKGZuKSB7XG4gICAgbmV4dFRpY2soZm4sIHRoaXMpO1xuICB9O1xuXG4gIFZ1ZS5wcm90b3R5cGUuX3JlbmRlciA9IGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgdm0gPSB0aGlzO1xuXG4gICAgLy8gc2V0IGN1cnJlbnQgYWN0aXZlIGluc3RhbmNlXG4gICAgdmFyIHByZXYgPSByZW5kZXJTdGF0ZS5hY3RpdmVJbnN0YW5jZTtcbiAgICByZW5kZXJTdGF0ZS5hY3RpdmVJbnN0YW5jZSA9IHZtO1xuXG4gICAgdmFyIF92bSQkb3B0aW9ucyA9IHZtLiRvcHRpb25zO1xuICAgIHZhciByZW5kZXIgPSBfdm0kJG9wdGlvbnMucmVuZGVyO1xuICAgIHZhciBzdGF0aWNSZW5kZXJGbnMgPSBfdm0kJG9wdGlvbnMuc3RhdGljUmVuZGVyRm5zO1xuICAgIHZhciBfcmVuZGVyQ2hpbGRyZW4gPSBfdm0kJG9wdGlvbnMuX3JlbmRlckNoaWxkcmVuO1xuICAgIHZhciBfcGFyZW50Vm5vZGUgPSBfdm0kJG9wdGlvbnMuX3BhcmVudFZub2RlO1xuXG5cbiAgICBpZiAoc3RhdGljUmVuZGVyRm5zICYmICF0aGlzLl9zdGF0aWNUcmVlcykge1xuICAgICAgdGhpcy5fc3RhdGljVHJlZXMgPSBbXTtcbiAgICB9XG4gICAgLy8gc2V0IHBhcmVudCB2bm9kZS4gdGhpcyBhbGxvd3MgcmVuZGVyIGZ1bmN0aW9ucyB0byBoYXZlIGFjY2Vzc1xuICAgIC8vIHRvIHRoZSBkYXRhIG9uIHRoZSBwbGFjZWhvbGRlciBub2RlLlxuICAgIHRoaXMuJHZub2RlID0gX3BhcmVudFZub2RlO1xuICAgIC8vIHJlc29sdmUgc2xvdHMuIGJlY2F1ZXMgc2xvdHMgYXJlIHJlbmRlcmVkIGluIHBhcmVudCBzY29wZSxcbiAgICAvLyB3ZSBzZXQgdGhlIGFjdGl2ZUluc3RhbmNlIHRvIHBhcmVudC5cbiAgICBpZiAoX3JlbmRlckNoaWxkcmVuKSB7XG4gICAgICByZXNvbHZlU2xvdHModm0sIF9yZW5kZXJDaGlsZHJlbik7XG4gICAgfVxuICAgIC8vIHJlbmRlciBzZWxmXG4gICAgdmFyIHZub2RlID0gcmVuZGVyLmNhbGwodm0uX3JlbmRlclByb3h5LCB2bS4kY3JlYXRlRWxlbWVudCk7XG4gICAgLy8gcmV0dXJuIGVtcHR5IHZub2RlIGluIGNhc2UgdGhlIHJlbmRlciBmdW5jdGlvbiBlcnJvcmVkIG91dFxuICAgIGlmICghKHZub2RlIGluc3RhbmNlb2YgVk5vZGUpKSB7XG4gICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyAmJiBBcnJheS5pc0FycmF5KHZub2RlKSkge1xuICAgICAgICB3YXJuKCdNdWx0aXBsZSByb290IG5vZGVzIHJldHVybmVkIGZyb20gcmVuZGVyIGZ1bmN0aW9uLiBSZW5kZXIgZnVuY3Rpb24gJyArICdzaG91bGQgcmV0dXJuIGEgc2luZ2xlIHJvb3Qgbm9kZS4nLCB2bSk7XG4gICAgICB9XG4gICAgICB2bm9kZSA9IGVtcHR5Vk5vZGUoKTtcbiAgICB9XG4gICAgLy8gc2V0IHBhcmVudFxuICAgIHZub2RlLnBhcmVudCA9IF9wYXJlbnRWbm9kZTtcbiAgICAvLyByZXN0b3JlIHJlbmRlciBzdGF0ZVxuICAgIHJlbmRlclN0YXRlLmFjdGl2ZUluc3RhbmNlID0gcHJldjtcbiAgICByZXR1cm4gdm5vZGU7XG4gIH07XG5cbiAgLy8gc2hvcnRoYW5kcyB1c2VkIGluIHJlbmRlciBmdW5jdGlvbnNcbiAgVnVlLnByb3RvdHlwZS5faCA9IGNyZWF0ZUVsZW1lbnQ7XG4gIC8vIHRvU3RyaW5nIGZvciBtdXN0YWNoZXNcbiAgVnVlLnByb3RvdHlwZS5fcyA9IF90b1N0cmluZztcbiAgLy8gbnVtYmVyIGNvbnZlcnNpb25cbiAgVnVlLnByb3RvdHlwZS5fbiA9IHRvTnVtYmVyO1xuXG4gIC8vXG4gIFZ1ZS5wcm90b3R5cGUuX20gPSBmdW5jdGlvbiByZW5kZXJTdGF0aWMoaW5kZXgpIHtcbiAgICByZXR1cm4gdGhpcy5fc3RhdGljVHJlZXNbaW5kZXhdIHx8ICh0aGlzLl9zdGF0aWNUcmVlc1tpbmRleF0gPSB0aGlzLiRvcHRpb25zLnN0YXRpY1JlbmRlckZuc1tpbmRleF0uY2FsbCh0aGlzLl9yZW5kZXJQcm94eSkpO1xuICB9O1xuXG4gIC8vIGZpbHRlciByZXNvbHV0aW9uIGhlbHBlclxuICB2YXIgaWRlbnRpdHkgPSBmdW5jdGlvbiBpZGVudGl0eShfKSB7XG4gICAgcmV0dXJuIF87XG4gIH07XG4gIFZ1ZS5wcm90b3R5cGUuX2YgPSBmdW5jdGlvbiByZXNvbHZlRmlsdGVyKGlkKSB7XG4gICAgcmV0dXJuIHJlc29sdmVBc3NldCh0aGlzLiRvcHRpb25zLCAnZmlsdGVycycsIGlkLCB0cnVlKSB8fCBpZGVudGl0eTtcbiAgfTtcblxuICAvLyByZW5kZXIgdi1mb3JcbiAgVnVlLnByb3RvdHlwZS5fbCA9IGZ1bmN0aW9uIHJlbmRlckxpc3QodmFsLCByZW5kZXIpIHtcbiAgICB2YXIgcmV0ID0gdm9pZCAwLFxuICAgICAgICBpID0gdm9pZCAwLFxuICAgICAgICBsID0gdm9pZCAwLFxuICAgICAgICBrZXlzID0gdm9pZCAwLFxuICAgICAgICBrZXkgPSB2b2lkIDA7XG4gICAgaWYgKEFycmF5LmlzQXJyYXkodmFsKSkge1xuICAgICAgcmV0ID0gbmV3IEFycmF5KHZhbC5sZW5ndGgpO1xuICAgICAgZm9yIChpID0gMCwgbCA9IHZhbC5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgICAgcmV0W2ldID0gcmVuZGVyKHZhbFtpXSwgaSk7XG4gICAgICB9XG4gICAgfSBlbHNlIGlmICh0eXBlb2YgdmFsID09PSAnbnVtYmVyJykge1xuICAgICAgcmV0ID0gbmV3IEFycmF5KHZhbCk7XG4gICAgICBmb3IgKGkgPSAwOyBpIDwgdmFsOyBpKyspIHtcbiAgICAgICAgcmV0W2ldID0gcmVuZGVyKGkgKyAxLCBpKTtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKGlzT2JqZWN0KHZhbCkpIHtcbiAgICAgIGtleXMgPSBPYmplY3Qua2V5cyh2YWwpO1xuICAgICAgcmV0ID0gbmV3IEFycmF5KGtleXMubGVuZ3RoKTtcbiAgICAgIGZvciAoaSA9IDAsIGwgPSBrZXlzLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgICBrZXkgPSBrZXlzW2ldO1xuICAgICAgICByZXRbaV0gPSByZW5kZXIodmFsW2tleV0sIGtleSwgaSk7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiByZXQ7XG4gIH07XG5cbiAgLy8gYXBwbHkgdi1iaW5kIG9iamVjdFxuICBWdWUucHJvdG90eXBlLl9iID0gZnVuY3Rpb24gYmluZFByb3BzKHZub2RlLCB2YWx1ZSkge1xuICAgIGlmICh2YWx1ZSkge1xuICAgICAgaWYgKCFpc09iamVjdCh2YWx1ZSkpIHtcbiAgICAgICAgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyAmJiB3YXJuKCd2LWJpbmQgd2l0aG91dCBhcmd1bWVudCBleHBlY3RzIGFuIE9iamVjdCBvciBBcnJheSB2YWx1ZScsIHRoaXMpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkodmFsdWUpKSB7XG4gICAgICAgICAgdmFsdWUgPSB0b09iamVjdCh2YWx1ZSk7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIGRhdGEgPSB2bm9kZS5kYXRhO1xuICAgICAgICBmb3IgKHZhciBrZXkgaW4gdmFsdWUpIHtcbiAgICAgICAgICB2YXIgaGFzaCA9IGNvbmZpZy5tdXN0VXNlUHJvcChrZXkpID8gZGF0YS5wcm9wcyB8fCAoZGF0YS5wcm9wcyA9IHt9KSA6IGRhdGEuYXR0cnMgfHwgKGRhdGEuYXR0cnMgPSB7fSk7XG4gICAgICAgICAgaGFzaFtrZXldID0gdmFsdWVba2V5XTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfTtcblxuICAvLyBleHBvc2Ugdi1vbiBrZXlDb2Rlc1xuICBWdWUucHJvdG90eXBlLl9rID0gZnVuY3Rpb24gZ2V0S2V5Q29kZXMoa2V5KSB7XG4gICAgcmV0dXJuIGNvbmZpZy5rZXlDb2Rlc1trZXldO1xuICB9O1xufVxuXG5mdW5jdGlvbiByZXNvbHZlU2xvdHModm0sIHJlbmRlckNoaWxkcmVuKSB7XG4gIGlmIChyZW5kZXJDaGlsZHJlbikge1xuICAgIHZhciBjaGlsZHJlbiA9IG5vcm1hbGl6ZUNoaWxkcmVuKHJlbmRlckNoaWxkcmVuKSB8fCBbXTtcbiAgICB2YXIgc2xvdHMgPSB7fTtcbiAgICB2YXIgZGVmYXVsdFNsb3QgPSBbXTtcbiAgICB2YXIgbmFtZSA9IHZvaWQgMCxcbiAgICAgICAgY2hpbGQgPSB2b2lkIDA7XG4gICAgZm9yICh2YXIgaSA9IDAsIGwgPSBjaGlsZHJlbi5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgIGNoaWxkID0gY2hpbGRyZW5baV07XG4gICAgICBpZiAobmFtZSA9IGNoaWxkLmRhdGEgJiYgY2hpbGQuZGF0YS5zbG90KSB7XG4gICAgICAgIHZhciBzbG90ID0gc2xvdHNbbmFtZV0gfHwgKHNsb3RzW25hbWVdID0gW10pO1xuICAgICAgICBpZiAoY2hpbGQudGFnID09PSAndGVtcGxhdGUnKSB7XG4gICAgICAgICAgc2xvdC5wdXNoLmFwcGx5KHNsb3QsIGNoaWxkLmNoaWxkcmVuKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBzbG90LnB1c2goY2hpbGQpO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBkZWZhdWx0U2xvdC5wdXNoKGNoaWxkKTtcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKGRlZmF1bHRTbG90Lmxlbmd0aCAmJiAhKGRlZmF1bHRTbG90Lmxlbmd0aCA9PT0gMSAmJiBkZWZhdWx0U2xvdFswXS50ZXh0ID09PSAnICcpKSB7XG4gICAgICBzbG90c1snZGVmYXVsdCddID0gZGVmYXVsdFNsb3Q7XG4gICAgfVxuICAgIHZtLiRzbG90cyA9IHNsb3RzO1xuICB9XG59XG5cbmZ1bmN0aW9uIGluaXRFdmVudHModm0pIHtcbiAgdm0uX2V2ZW50cyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gIC8vIGluaXQgcGFyZW50IGF0dGFjaGVkIGV2ZW50c1xuICB2YXIgbGlzdGVuZXJzID0gdm0uJG9wdGlvbnMuX3BhcmVudExpc3RlbmVycztcbiAgdmFyIG9uID0gYmluZCh2bS4kb24sIHZtKTtcbiAgdmFyIG9mZiA9IGJpbmQodm0uJG9mZiwgdm0pO1xuICB2bS5fdXBkYXRlTGlzdGVuZXJzID0gZnVuY3Rpb24gKGxpc3RlbmVycywgb2xkTGlzdGVuZXJzKSB7XG4gICAgdXBkYXRlTGlzdGVuZXJzKGxpc3RlbmVycywgb2xkTGlzdGVuZXJzIHx8IHt9LCBvbiwgb2ZmKTtcbiAgfTtcbiAgaWYgKGxpc3RlbmVycykge1xuICAgIHZtLl91cGRhdGVMaXN0ZW5lcnMobGlzdGVuZXJzKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBldmVudHNNaXhpbihWdWUpIHtcbiAgVnVlLnByb3RvdHlwZS4kb24gPSBmdW5jdGlvbiAoZXZlbnQsIGZuKSB7XG4gICAgdmFyIHZtID0gdGhpczsodm0uX2V2ZW50c1tldmVudF0gfHwgKHZtLl9ldmVudHNbZXZlbnRdID0gW10pKS5wdXNoKGZuKTtcbiAgICByZXR1cm4gdm07XG4gIH07XG5cbiAgVnVlLnByb3RvdHlwZS4kb25jZSA9IGZ1bmN0aW9uIChldmVudCwgZm4pIHtcbiAgICB2YXIgdm0gPSB0aGlzO1xuICAgIGZ1bmN0aW9uIG9uKCkge1xuICAgICAgdm0uJG9mZihldmVudCwgb24pO1xuICAgICAgZm4uYXBwbHkodm0sIGFyZ3VtZW50cyk7XG4gICAgfVxuICAgIG9uLmZuID0gZm47XG4gICAgdm0uJG9uKGV2ZW50LCBvbik7XG4gICAgcmV0dXJuIHZtO1xuICB9O1xuXG4gIFZ1ZS5wcm90b3R5cGUuJG9mZiA9IGZ1bmN0aW9uIChldmVudCwgZm4pIHtcbiAgICB2YXIgdm0gPSB0aGlzO1xuICAgIC8vIGFsbFxuICAgIGlmICghYXJndW1lbnRzLmxlbmd0aCkge1xuICAgICAgdm0uX2V2ZW50cyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gICAgICByZXR1cm4gdm07XG4gICAgfVxuICAgIC8vIHNwZWNpZmljIGV2ZW50XG4gICAgdmFyIGNicyA9IHZtLl9ldmVudHNbZXZlbnRdO1xuICAgIGlmICghY2JzKSB7XG4gICAgICByZXR1cm4gdm07XG4gICAgfVxuICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID09PSAxKSB7XG4gICAgICB2bS5fZXZlbnRzW2V2ZW50XSA9IG51bGw7XG4gICAgICByZXR1cm4gdm07XG4gICAgfVxuICAgIC8vIHNwZWNpZmljIGhhbmRsZXJcbiAgICB2YXIgY2IgPSB2b2lkIDA7XG4gICAgdmFyIGkgPSBjYnMubGVuZ3RoO1xuICAgIHdoaWxlIChpLS0pIHtcbiAgICAgIGNiID0gY2JzW2ldO1xuICAgICAgaWYgKGNiID09PSBmbiB8fCBjYi5mbiA9PT0gZm4pIHtcbiAgICAgICAgY2JzLnNwbGljZShpLCAxKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiB2bTtcbiAgfTtcblxuICBWdWUucHJvdG90eXBlLiRlbWl0ID0gZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgdmFyIHZtID0gdGhpcztcbiAgICB2YXIgY2JzID0gdm0uX2V2ZW50c1tldmVudF07XG4gICAgaWYgKGNicykge1xuICAgICAgY2JzID0gY2JzLmxlbmd0aCA+IDEgPyB0b0FycmF5KGNicykgOiBjYnM7XG4gICAgICB2YXIgYXJncyA9IHRvQXJyYXkoYXJndW1lbnRzLCAxKTtcbiAgICAgIGZvciAodmFyIGkgPSAwLCBsID0gY2JzLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgICBjYnNbaV0uYXBwbHkodm0sIGFyZ3MpO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gdm07XG4gIH07XG59XG5cbnZhciB1aWQgPSAwO1xuXG5mdW5jdGlvbiBpbml0TWl4aW4oVnVlKSB7XG4gIFZ1ZS5wcm90b3R5cGUuX2luaXQgPSBmdW5jdGlvbiAob3B0aW9ucykge1xuICAgIHZhciB2bSA9IHRoaXM7XG4gICAgLy8gYSB1aWRcbiAgICB2bS5fdWlkID0gdWlkKys7XG4gICAgLy8gYSBmbGFnIHRvIGF2b2lkIHRoaXMgYmVpbmcgb2JzZXJ2ZWRcbiAgICB2bS5faXNWdWUgPSB0cnVlO1xuICAgIC8vIG1lcmdlIG9wdGlvbnNcbiAgICBpZiAob3B0aW9ucyAmJiBvcHRpb25zLl9pc0NvbXBvbmVudCkge1xuICAgICAgLy8gb3B0aW1pemUgaW50ZXJuYWwgY29tcG9uZW50IGluc3RhbnRpYXRpb25cbiAgICAgIC8vIHNpbmNlIGR5bmFtaWMgb3B0aW9ucyBtZXJnaW5nIGlzIHByZXR0eSBzbG93LCBhbmQgbm9uZSBvZiB0aGVcbiAgICAgIC8vIGludGVybmFsIGNvbXBvbmVudCBvcHRpb25zIG5lZWRzIHNwZWNpYWwgdHJlYXRtZW50LlxuICAgICAgaW5pdEludGVybmFsQ29tcG9uZW50KHZtLCBvcHRpb25zKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdm0uJG9wdGlvbnMgPSBtZXJnZU9wdGlvbnMocmVzb2x2ZUNvbnN0cnVjdG9yT3B0aW9ucyh2bSksIG9wdGlvbnMgfHwge30sIHZtKTtcbiAgICB9XG4gICAgLyogaXN0YW5idWwgaWdub3JlIGVsc2UgKi9cbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgaW5pdFByb3h5KHZtKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdm0uX3JlbmRlclByb3h5ID0gdm07XG4gICAgfVxuICAgIC8vIGV4cG9zZSByZWFsIHNlbGZcbiAgICB2bS5fc2VsZiA9IHZtO1xuICAgIGluaXRMaWZlY3ljbGUodm0pO1xuICAgIGluaXRFdmVudHModm0pO1xuICAgIGNhbGxIb29rKHZtLCAnYmVmb3JlQ3JlYXRlJyk7XG4gICAgaW5pdFN0YXRlKHZtKTtcbiAgICBjYWxsSG9vayh2bSwgJ2NyZWF0ZWQnKTtcbiAgICBpbml0UmVuZGVyKHZtKTtcbiAgfTtcblxuICBmdW5jdGlvbiBpbml0SW50ZXJuYWxDb21wb25lbnQodm0sIG9wdGlvbnMpIHtcbiAgICB2YXIgb3B0cyA9IHZtLiRvcHRpb25zID0gT2JqZWN0LmNyZWF0ZShyZXNvbHZlQ29uc3RydWN0b3JPcHRpb25zKHZtKSk7XG4gICAgLy8gZG9pbmcgdGhpcyBiZWNhdXNlIGl0J3MgZmFzdGVyIHRoYW4gZHluYW1pYyBlbnVtZXJhdGlvbi5cbiAgICBvcHRzLnBhcmVudCA9IG9wdGlvbnMucGFyZW50O1xuICAgIG9wdHMucHJvcHNEYXRhID0gb3B0aW9ucy5wcm9wc0RhdGE7XG4gICAgb3B0cy5fcGFyZW50Vm5vZGUgPSBvcHRpb25zLl9wYXJlbnRWbm9kZTtcbiAgICBvcHRzLl9wYXJlbnRMaXN0ZW5lcnMgPSBvcHRpb25zLl9wYXJlbnRMaXN0ZW5lcnM7XG4gICAgb3B0cy5fcmVuZGVyQ2hpbGRyZW4gPSBvcHRpb25zLl9yZW5kZXJDaGlsZHJlbjtcbiAgICBvcHRzLl9jb21wb25lbnRUYWcgPSBvcHRpb25zLl9jb21wb25lbnRUYWc7XG4gICAgaWYgKG9wdGlvbnMucmVuZGVyKSB7XG4gICAgICBvcHRzLnJlbmRlciA9IG9wdGlvbnMucmVuZGVyO1xuICAgICAgb3B0cy5zdGF0aWNSZW5kZXJGbnMgPSBvcHRpb25zLnN0YXRpY1JlbmRlckZucztcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiByZXNvbHZlQ29uc3RydWN0b3JPcHRpb25zKHZtKSB7XG4gICAgdmFyIEN0b3IgPSB2bS5jb25zdHJ1Y3RvcjtcbiAgICB2YXIgb3B0aW9ucyA9IEN0b3Iub3B0aW9ucztcbiAgICBpZiAoQ3Rvci5zdXBlcikge1xuICAgICAgdmFyIHN1cGVyT3B0aW9ucyA9IEN0b3Iuc3VwZXIub3B0aW9ucztcbiAgICAgIHZhciBjYWNoZWRTdXBlck9wdGlvbnMgPSBDdG9yLnN1cGVyT3B0aW9ucztcbiAgICAgIGlmIChzdXBlck9wdGlvbnMgIT09IGNhY2hlZFN1cGVyT3B0aW9ucykge1xuICAgICAgICAvLyBzdXBlciBvcHRpb24gY2hhbmdlZFxuICAgICAgICBDdG9yLnN1cGVyT3B0aW9ucyA9IHN1cGVyT3B0aW9ucztcbiAgICAgICAgb3B0aW9ucyA9IEN0b3Iub3B0aW9ucyA9IG1lcmdlT3B0aW9ucyhzdXBlck9wdGlvbnMsIEN0b3IuZXh0ZW5kT3B0aW9ucyk7XG4gICAgICAgIGlmIChvcHRpb25zLm5hbWUpIHtcbiAgICAgICAgICBvcHRpb25zLmNvbXBvbmVudHNbb3B0aW9ucy5uYW1lXSA9IEN0b3I7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIG9wdGlvbnM7XG4gIH1cbn1cblxuZnVuY3Rpb24gVnVlKG9wdGlvbnMpIHtcbiAgdGhpcy5faW5pdChvcHRpb25zKTtcbn1cblxuaW5pdE1peGluKFZ1ZSk7XG5zdGF0ZU1peGluKFZ1ZSk7XG5ldmVudHNNaXhpbihWdWUpO1xubGlmZWN5Y2xlTWl4aW4oVnVlKTtcbnJlbmRlck1peGluKFZ1ZSk7XG5cbnZhciB3YXJuID0gdm9pZCAwO1xudmFyIGZvcm1hdENvbXBvbmVudE5hbWUgPSB2b2lkIDA7XG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gIChmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGhhc0NvbnNvbGUgPSB0eXBlb2YgY29uc29sZSAhPT0gJ3VuZGVmaW5lZCc7XG5cbiAgICB3YXJuID0gZnVuY3Rpb24gd2Fybihtc2csIHZtKSB7XG4gICAgICBpZiAoaGFzQ29uc29sZSAmJiAhY29uZmlnLnNpbGVudCkge1xuICAgICAgICBjb25zb2xlLmVycm9yKCdbVnVlIHdhcm5dOiAnICsgbXNnICsgKHZtID8gZm9ybWF0Q29tcG9uZW50TmFtZSh2bSkgOiAnJykpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICBmb3JtYXRDb21wb25lbnROYW1lID0gZnVuY3Rpb24gZm9ybWF0Q29tcG9uZW50TmFtZSh2bSkge1xuICAgICAgaWYgKHZtLiRyb290ID09PSB2bSkge1xuICAgICAgICByZXR1cm4gJyAoZm91bmQgaW4gcm9vdCBpbnN0YW5jZSknO1xuICAgICAgfVxuICAgICAgdmFyIG5hbWUgPSB2bS5faXNWdWUgPyB2bS4kb3B0aW9ucy5uYW1lIHx8IHZtLiRvcHRpb25zLl9jb21wb25lbnRUYWcgOiB2bS5uYW1lO1xuICAgICAgcmV0dXJuIG5hbWUgPyAnIChmb3VuZCBpbiBjb21wb25lbnQ6IDwnICsgaHlwaGVuYXRlKG5hbWUpICsgJz4pJyA6ICcgKGZvdW5kIGluIGFub255bW91cyBjb21wb25lbnQuIFVzZSB0aGUgXCJuYW1lXCIgb3B0aW9uIGZvciBiZXR0ZXIgZGVidWdnaW5nIG1lc3NhZ2VzKSc7XG4gICAgfTtcbiAgfSkoKTtcbn1cblxuLyoqXG4gKiBPcHRpb24gb3ZlcndyaXRpbmcgc3RyYXRlZ2llcyBhcmUgZnVuY3Rpb25zIHRoYXQgaGFuZGxlXG4gKiBob3cgdG8gbWVyZ2UgYSBwYXJlbnQgb3B0aW9uIHZhbHVlIGFuZCBhIGNoaWxkIG9wdGlvblxuICogdmFsdWUgaW50byB0aGUgZmluYWwgdmFsdWUuXG4gKi9cbnZhciBzdHJhdHMgPSBjb25maWcub3B0aW9uTWVyZ2VTdHJhdGVnaWVzO1xuXG4vKipcbiAqIE9wdGlvbnMgd2l0aCByZXN0cmljdGlvbnNcbiAqL1xuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgc3RyYXRzLmVsID0gc3RyYXRzLnByb3BzRGF0YSA9IGZ1bmN0aW9uIChwYXJlbnQsIGNoaWxkLCB2bSwga2V5KSB7XG4gICAgaWYgKCF2bSkge1xuICAgICAgd2Fybignb3B0aW9uIFwiJyArIGtleSArICdcIiBjYW4gb25seSBiZSB1c2VkIGR1cmluZyBpbnN0YW5jZSAnICsgJ2NyZWF0aW9uIHdpdGggdGhlIGBuZXdgIGtleXdvcmQuJyk7XG4gICAgfVxuICAgIHJldHVybiBkZWZhdWx0U3RyYXQocGFyZW50LCBjaGlsZCk7XG4gIH07XG5cbiAgc3RyYXRzLm5hbWUgPSBmdW5jdGlvbiAocGFyZW50LCBjaGlsZCwgdm0pIHtcbiAgICBpZiAodm0pIHtcbiAgICAgIHdhcm4oJ29wdGlvbnMgXCJuYW1lXCIgY2FuIG9ubHkgYmUgdXNlZCBhcyBhIGNvbXBvbmVudCBkZWZpbml0aW9uIG9wdGlvbiwgJyArICdub3QgZHVyaW5nIGluc3RhbmNlIGNyZWF0aW9uLicpO1xuICAgIH1cbiAgICByZXR1cm4gZGVmYXVsdFN0cmF0KHBhcmVudCwgY2hpbGQpO1xuICB9O1xufVxuXG4vKipcbiAqIEhlbHBlciB0aGF0IHJlY3Vyc2l2ZWx5IG1lcmdlcyB0d28gZGF0YSBvYmplY3RzIHRvZ2V0aGVyLlxuICovXG5mdW5jdGlvbiBtZXJnZURhdGEodG8sIGZyb20pIHtcbiAgdmFyIGtleSA9IHZvaWQgMCxcbiAgICAgIHRvVmFsID0gdm9pZCAwLFxuICAgICAgZnJvbVZhbCA9IHZvaWQgMDtcbiAgZm9yIChrZXkgaW4gZnJvbSkge1xuICAgIHRvVmFsID0gdG9ba2V5XTtcbiAgICBmcm9tVmFsID0gZnJvbVtrZXldO1xuICAgIGlmICghaGFzT3duKHRvLCBrZXkpKSB7XG4gICAgICBzZXQodG8sIGtleSwgZnJvbVZhbCk7XG4gICAgfSBlbHNlIGlmIChpc09iamVjdCh0b1ZhbCkgJiYgaXNPYmplY3QoZnJvbVZhbCkpIHtcbiAgICAgIG1lcmdlRGF0YSh0b1ZhbCwgZnJvbVZhbCk7XG4gICAgfVxuICB9XG4gIHJldHVybiB0bztcbn1cblxuLyoqXG4gKiBEYXRhXG4gKi9cbnN0cmF0cy5kYXRhID0gZnVuY3Rpb24gKHBhcmVudFZhbCwgY2hpbGRWYWwsIHZtKSB7XG4gIGlmICghdm0pIHtcbiAgICAvLyBpbiBhIFZ1ZS5leHRlbmQgbWVyZ2UsIGJvdGggc2hvdWxkIGJlIGZ1bmN0aW9uc1xuICAgIGlmICghY2hpbGRWYWwpIHtcbiAgICAgIHJldHVybiBwYXJlbnRWYWw7XG4gICAgfVxuICAgIGlmICh0eXBlb2YgY2hpbGRWYWwgIT09ICdmdW5jdGlvbicpIHtcbiAgICAgIHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgJiYgd2FybignVGhlIFwiZGF0YVwiIG9wdGlvbiBzaG91bGQgYmUgYSBmdW5jdGlvbiAnICsgJ3RoYXQgcmV0dXJucyBhIHBlci1pbnN0YW5jZSB2YWx1ZSBpbiBjb21wb25lbnQgJyArICdkZWZpbml0aW9ucy4nLCB2bSk7XG4gICAgICByZXR1cm4gcGFyZW50VmFsO1xuICAgIH1cbiAgICBpZiAoIXBhcmVudFZhbCkge1xuICAgICAgcmV0dXJuIGNoaWxkVmFsO1xuICAgIH1cbiAgICAvLyB3aGVuIHBhcmVudFZhbCAmIGNoaWxkVmFsIGFyZSBib3RoIHByZXNlbnQsXG4gICAgLy8gd2UgbmVlZCB0byByZXR1cm4gYSBmdW5jdGlvbiB0aGF0IHJldHVybnMgdGhlXG4gICAgLy8gbWVyZ2VkIHJlc3VsdCBvZiBib3RoIGZ1bmN0aW9ucy4uLiBubyBuZWVkIHRvXG4gICAgLy8gY2hlY2sgaWYgcGFyZW50VmFsIGlzIGEgZnVuY3Rpb24gaGVyZSBiZWNhdXNlXG4gICAgLy8gaXQgaGFzIHRvIGJlIGEgZnVuY3Rpb24gdG8gcGFzcyBwcmV2aW91cyBtZXJnZXMuXG4gICAgcmV0dXJuIGZ1bmN0aW9uIG1lcmdlZERhdGFGbigpIHtcbiAgICAgIHJldHVybiBtZXJnZURhdGEoY2hpbGRWYWwuY2FsbCh0aGlzKSwgcGFyZW50VmFsLmNhbGwodGhpcykpO1xuICAgIH07XG4gIH0gZWxzZSBpZiAocGFyZW50VmFsIHx8IGNoaWxkVmFsKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uIG1lcmdlZEluc3RhbmNlRGF0YUZuKCkge1xuICAgICAgLy8gaW5zdGFuY2UgbWVyZ2VcbiAgICAgIHZhciBpbnN0YW5jZURhdGEgPSB0eXBlb2YgY2hpbGRWYWwgPT09ICdmdW5jdGlvbicgPyBjaGlsZFZhbC5jYWxsKHZtKSA6IGNoaWxkVmFsO1xuICAgICAgdmFyIGRlZmF1bHREYXRhID0gdHlwZW9mIHBhcmVudFZhbCA9PT0gJ2Z1bmN0aW9uJyA/IHBhcmVudFZhbC5jYWxsKHZtKSA6IHVuZGVmaW5lZDtcbiAgICAgIGlmIChpbnN0YW5jZURhdGEpIHtcbiAgICAgICAgcmV0dXJuIG1lcmdlRGF0YShpbnN0YW5jZURhdGEsIGRlZmF1bHREYXRhKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBkZWZhdWx0RGF0YTtcbiAgICAgIH1cbiAgICB9O1xuICB9XG59O1xuXG4vKipcbiAqIEhvb2tzIGFuZCBwYXJhbSBhdHRyaWJ1dGVzIGFyZSBtZXJnZWQgYXMgYXJyYXlzLlxuICovXG5mdW5jdGlvbiBtZXJnZUhvb2socGFyZW50VmFsLCBjaGlsZFZhbCkge1xuICByZXR1cm4gY2hpbGRWYWwgPyBwYXJlbnRWYWwgPyBwYXJlbnRWYWwuY29uY2F0KGNoaWxkVmFsKSA6IEFycmF5LmlzQXJyYXkoY2hpbGRWYWwpID8gY2hpbGRWYWwgOiBbY2hpbGRWYWxdIDogcGFyZW50VmFsO1xufVxuXG5jb25maWcuX2xpZmVjeWNsZUhvb2tzLmZvckVhY2goZnVuY3Rpb24gKGhvb2spIHtcbiAgc3RyYXRzW2hvb2tdID0gbWVyZ2VIb29rO1xufSk7XG5cbi8qKlxuICogQXNzZXRzXG4gKlxuICogV2hlbiBhIHZtIGlzIHByZXNlbnQgKGluc3RhbmNlIGNyZWF0aW9uKSwgd2UgbmVlZCB0byBkb1xuICogYSB0aHJlZS13YXkgbWVyZ2UgYmV0d2VlbiBjb25zdHJ1Y3RvciBvcHRpb25zLCBpbnN0YW5jZVxuICogb3B0aW9ucyBhbmQgcGFyZW50IG9wdGlvbnMuXG4gKi9cbmZ1bmN0aW9uIG1lcmdlQXNzZXRzKHBhcmVudFZhbCwgY2hpbGRWYWwpIHtcbiAgdmFyIHJlcyA9IE9iamVjdC5jcmVhdGUocGFyZW50VmFsIHx8IG51bGwpO1xuICByZXR1cm4gY2hpbGRWYWwgPyBleHRlbmQocmVzLCBjaGlsZFZhbCkgOiByZXM7XG59XG5cbmNvbmZpZy5fYXNzZXRUeXBlcy5mb3JFYWNoKGZ1bmN0aW9uICh0eXBlKSB7XG4gIHN0cmF0c1t0eXBlICsgJ3MnXSA9IG1lcmdlQXNzZXRzO1xufSk7XG5cbi8qKlxuICogV2F0Y2hlcnMuXG4gKlxuICogV2F0Y2hlcnMgaGFzaGVzIHNob3VsZCBub3Qgb3ZlcndyaXRlIG9uZVxuICogYW5vdGhlciwgc28gd2UgbWVyZ2UgdGhlbSBhcyBhcnJheXMuXG4gKi9cbnN0cmF0cy53YXRjaCA9IGZ1bmN0aW9uIChwYXJlbnRWYWwsIGNoaWxkVmFsKSB7XG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAqL1xuICBpZiAoIWNoaWxkVmFsKSByZXR1cm4gcGFyZW50VmFsO1xuICBpZiAoIXBhcmVudFZhbCkgcmV0dXJuIGNoaWxkVmFsO1xuICB2YXIgcmV0ID0ge307XG4gIGV4dGVuZChyZXQsIHBhcmVudFZhbCk7XG4gIGZvciAodmFyIGtleSBpbiBjaGlsZFZhbCkge1xuICAgIHZhciBwYXJlbnQgPSByZXRba2V5XTtcbiAgICB2YXIgY2hpbGQgPSBjaGlsZFZhbFtrZXldO1xuICAgIGlmIChwYXJlbnQgJiYgIUFycmF5LmlzQXJyYXkocGFyZW50KSkge1xuICAgICAgcGFyZW50ID0gW3BhcmVudF07XG4gICAgfVxuICAgIHJldFtrZXldID0gcGFyZW50ID8gcGFyZW50LmNvbmNhdChjaGlsZCkgOiBbY2hpbGRdO1xuICB9XG4gIHJldHVybiByZXQ7XG59O1xuXG4vKipcbiAqIE90aGVyIG9iamVjdCBoYXNoZXMuXG4gKi9cbnN0cmF0cy5wcm9wcyA9IHN0cmF0cy5tZXRob2RzID0gc3RyYXRzLmNvbXB1dGVkID0gZnVuY3Rpb24gKHBhcmVudFZhbCwgY2hpbGRWYWwpIHtcbiAgaWYgKCFjaGlsZFZhbCkgcmV0dXJuIHBhcmVudFZhbDtcbiAgaWYgKCFwYXJlbnRWYWwpIHJldHVybiBjaGlsZFZhbDtcbiAgdmFyIHJldCA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gIGV4dGVuZChyZXQsIHBhcmVudFZhbCk7XG4gIGV4dGVuZChyZXQsIGNoaWxkVmFsKTtcbiAgcmV0dXJuIHJldDtcbn07XG5cbi8qKlxuICogRGVmYXVsdCBzdHJhdGVneS5cbiAqL1xudmFyIGRlZmF1bHRTdHJhdCA9IGZ1bmN0aW9uIGRlZmF1bHRTdHJhdChwYXJlbnRWYWwsIGNoaWxkVmFsKSB7XG4gIHJldHVybiBjaGlsZFZhbCA9PT0gdW5kZWZpbmVkID8gcGFyZW50VmFsIDogY2hpbGRWYWw7XG59O1xuXG4vKipcbiAqIE1ha2Ugc3VyZSBjb21wb25lbnQgb3B0aW9ucyBnZXQgY29udmVydGVkIHRvIGFjdHVhbFxuICogY29uc3RydWN0b3JzLlxuICovXG5mdW5jdGlvbiBub3JtYWxpemVDb21wb25lbnRzKG9wdGlvbnMpIHtcbiAgaWYgKG9wdGlvbnMuY29tcG9uZW50cykge1xuICAgIHZhciBjb21wb25lbnRzID0gb3B0aW9ucy5jb21wb25lbnRzO1xuICAgIHZhciBkZWYgPSB2b2lkIDA7XG4gICAgZm9yICh2YXIga2V5IGluIGNvbXBvbmVudHMpIHtcbiAgICAgIHZhciBsb3dlciA9IGtleS50b0xvd2VyQ2FzZSgpO1xuICAgICAgaWYgKGlzQnVpbHRJblRhZyhsb3dlcikgfHwgY29uZmlnLmlzUmVzZXJ2ZWRUYWcobG93ZXIpKSB7XG4gICAgICAgIHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgJiYgd2FybignRG8gbm90IHVzZSBidWlsdC1pbiBvciByZXNlcnZlZCBIVE1MIGVsZW1lbnRzIGFzIGNvbXBvbmVudCAnICsgJ2lkOiAnICsga2V5KTtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBkZWYgPSBjb21wb25lbnRzW2tleV07XG4gICAgICBpZiAoaXNQbGFpbk9iamVjdChkZWYpKSB7XG4gICAgICAgIGNvbXBvbmVudHNba2V5XSA9IFZ1ZS5leHRlbmQoZGVmKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuLyoqXG4gKiBFbnN1cmUgYWxsIHByb3BzIG9wdGlvbiBzeW50YXggYXJlIG5vcm1hbGl6ZWQgaW50byB0aGVcbiAqIE9iamVjdC1iYXNlZCBmb3JtYXQuXG4gKi9cbmZ1bmN0aW9uIG5vcm1hbGl6ZVByb3BzKG9wdGlvbnMpIHtcbiAgdmFyIHByb3BzID0gb3B0aW9ucy5wcm9wcztcbiAgaWYgKCFwcm9wcykgcmV0dXJuO1xuICB2YXIgcmVzID0ge307XG4gIHZhciBpID0gdm9pZCAwLFxuICAgICAgdmFsID0gdm9pZCAwLFxuICAgICAgbmFtZSA9IHZvaWQgMDtcbiAgaWYgKEFycmF5LmlzQXJyYXkocHJvcHMpKSB7XG4gICAgaSA9IHByb3BzLmxlbmd0aDtcbiAgICB3aGlsZSAoaS0tKSB7XG4gICAgICB2YWwgPSBwcm9wc1tpXTtcbiAgICAgIGlmICh0eXBlb2YgdmFsID09PSAnc3RyaW5nJykge1xuICAgICAgICBuYW1lID0gY2FtZWxpemUodmFsKTtcbiAgICAgICAgcmVzW25hbWVdID0geyB0eXBlOiBudWxsIH07XG4gICAgICB9IGVsc2UgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgd2FybigncHJvcHMgbXVzdCBiZSBzdHJpbmdzIHdoZW4gdXNpbmcgYXJyYXkgc3ludGF4LicpO1xuICAgICAgfVxuICAgIH1cbiAgfSBlbHNlIGlmIChpc1BsYWluT2JqZWN0KHByb3BzKSkge1xuICAgIGZvciAodmFyIGtleSBpbiBwcm9wcykge1xuICAgICAgdmFsID0gcHJvcHNba2V5XTtcbiAgICAgIG5hbWUgPSBjYW1lbGl6ZShrZXkpO1xuICAgICAgcmVzW25hbWVdID0gaXNQbGFpbk9iamVjdCh2YWwpID8gdmFsIDogeyB0eXBlOiB2YWwgfTtcbiAgICB9XG4gIH1cbiAgb3B0aW9ucy5wcm9wcyA9IHJlcztcbn1cblxuLyoqXG4gKiBOb3JtYWxpemUgcmF3IGZ1bmN0aW9uIGRpcmVjdGl2ZXMgaW50byBvYmplY3QgZm9ybWF0LlxuICovXG5mdW5jdGlvbiBub3JtYWxpemVEaXJlY3RpdmVzKG9wdGlvbnMpIHtcbiAgdmFyIGRpcnMgPSBvcHRpb25zLmRpcmVjdGl2ZXM7XG4gIGlmIChkaXJzKSB7XG4gICAgZm9yICh2YXIga2V5IGluIGRpcnMpIHtcbiAgICAgIHZhciBkZWYgPSBkaXJzW2tleV07XG4gICAgICBpZiAodHlwZW9mIGRlZiA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICBkaXJzW2tleV0gPSB7IGJpbmQ6IGRlZiwgdXBkYXRlOiBkZWYgfTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuLyoqXG4gKiBNZXJnZSB0d28gb3B0aW9uIG9iamVjdHMgaW50byBhIG5ldyBvbmUuXG4gKiBDb3JlIHV0aWxpdHkgdXNlZCBpbiBib3RoIGluc3RhbnRpYXRpb24gYW5kIGluaGVyaXRhbmNlLlxuICovXG5mdW5jdGlvbiBtZXJnZU9wdGlvbnMocGFyZW50LCBjaGlsZCwgdm0pIHtcbiAgbm9ybWFsaXplQ29tcG9uZW50cyhjaGlsZCk7XG4gIG5vcm1hbGl6ZVByb3BzKGNoaWxkKTtcbiAgbm9ybWFsaXplRGlyZWN0aXZlcyhjaGlsZCk7XG4gIHZhciBleHRlbmRzRnJvbSA9IGNoaWxkLmV4dGVuZHM7XG4gIGlmIChleHRlbmRzRnJvbSkge1xuICAgIHBhcmVudCA9IHR5cGVvZiBleHRlbmRzRnJvbSA9PT0gJ2Z1bmN0aW9uJyA/IG1lcmdlT3B0aW9ucyhwYXJlbnQsIGV4dGVuZHNGcm9tLm9wdGlvbnMsIHZtKSA6IG1lcmdlT3B0aW9ucyhwYXJlbnQsIGV4dGVuZHNGcm9tLCB2bSk7XG4gIH1cbiAgaWYgKGNoaWxkLm1peGlucykge1xuICAgIGZvciAodmFyIGkgPSAwLCBsID0gY2hpbGQubWl4aW5zLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgdmFyIG1peGluID0gY2hpbGQubWl4aW5zW2ldO1xuICAgICAgaWYgKG1peGluLnByb3RvdHlwZSBpbnN0YW5jZW9mIFZ1ZSkge1xuICAgICAgICBtaXhpbiA9IG1peGluLm9wdGlvbnM7XG4gICAgICB9XG4gICAgICBwYXJlbnQgPSBtZXJnZU9wdGlvbnMocGFyZW50LCBtaXhpbiwgdm0pO1xuICAgIH1cbiAgfVxuICB2YXIgb3B0aW9ucyA9IHt9O1xuICB2YXIga2V5ID0gdm9pZCAwO1xuICBmb3IgKGtleSBpbiBwYXJlbnQpIHtcbiAgICBtZXJnZUZpZWxkKGtleSk7XG4gIH1cbiAgZm9yIChrZXkgaW4gY2hpbGQpIHtcbiAgICBpZiAoIWhhc093bihwYXJlbnQsIGtleSkpIHtcbiAgICAgIG1lcmdlRmllbGQoa2V5KTtcbiAgICB9XG4gIH1cbiAgZnVuY3Rpb24gbWVyZ2VGaWVsZChrZXkpIHtcbiAgICB2YXIgc3RyYXQgPSBzdHJhdHNba2V5XSB8fCBkZWZhdWx0U3RyYXQ7XG4gICAgb3B0aW9uc1trZXldID0gc3RyYXQocGFyZW50W2tleV0sIGNoaWxkW2tleV0sIHZtLCBrZXkpO1xuICB9XG4gIHJldHVybiBvcHRpb25zO1xufVxuXG4vKipcbiAqIFJlc29sdmUgYW4gYXNzZXQuXG4gKiBUaGlzIGZ1bmN0aW9uIGlzIHVzZWQgYmVjYXVzZSBjaGlsZCBpbnN0YW5jZXMgbmVlZCBhY2Nlc3NcbiAqIHRvIGFzc2V0cyBkZWZpbmVkIGluIGl0cyBhbmNlc3RvciBjaGFpbi5cbiAqL1xuZnVuY3Rpb24gcmVzb2x2ZUFzc2V0KG9wdGlvbnMsIHR5cGUsIGlkLCB3YXJuTWlzc2luZykge1xuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgKi9cbiAgaWYgKHR5cGVvZiBpZCAhPT0gJ3N0cmluZycpIHtcbiAgICByZXR1cm47XG4gIH1cbiAgdmFyIGFzc2V0cyA9IG9wdGlvbnNbdHlwZV07XG4gIHZhciByZXMgPSBhc3NldHNbaWRdIHx8XG4gIC8vIGNhbWVsQ2FzZSBJRFxuICBhc3NldHNbY2FtZWxpemUoaWQpXSB8fFxuICAvLyBQYXNjYWwgQ2FzZSBJRFxuICBhc3NldHNbY2FwaXRhbGl6ZShjYW1lbGl6ZShpZCkpXTtcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgJiYgd2Fybk1pc3NpbmcgJiYgIXJlcykge1xuICAgIHdhcm4oJ0ZhaWxlZCB0byByZXNvbHZlICcgKyB0eXBlLnNsaWNlKDAsIC0xKSArICc6ICcgKyBpZCwgb3B0aW9ucyk7XG4gIH1cbiAgcmV0dXJuIHJlcztcbn1cblxuZnVuY3Rpb24gdmFsaWRhdGVQcm9wKGtleSwgcHJvcE9wdGlvbnMsIHByb3BzRGF0YSwgdm0pIHtcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICovXG4gIGlmICghcHJvcHNEYXRhKSByZXR1cm47XG4gIHZhciBwcm9wID0gcHJvcE9wdGlvbnNba2V5XTtcbiAgdmFyIGFic2VudCA9ICFoYXNPd24ocHJvcHNEYXRhLCBrZXkpO1xuICB2YXIgdmFsdWUgPSBwcm9wc0RhdGFba2V5XTtcbiAgLy8gaGFuZGxlIGJvb2xlYW4gcHJvcHNcbiAgaWYgKHByb3AudHlwZSA9PT0gQm9vbGVhbikge1xuICAgIGlmIChhYnNlbnQgJiYgIWhhc093bihwcm9wLCAnZGVmYXVsdCcpKSB7XG4gICAgICB2YWx1ZSA9IGZhbHNlO1xuICAgIH0gZWxzZSBpZiAodmFsdWUgPT09ICcnIHx8IHZhbHVlID09PSBoeXBoZW5hdGUoa2V5KSkge1xuICAgICAgdmFsdWUgPSB0cnVlO1xuICAgIH1cbiAgfVxuICAvLyBjaGVjayBkZWZhdWx0IHZhbHVlXG4gIGlmICh2YWx1ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgdmFsdWUgPSBnZXRQcm9wRGVmYXVsdFZhbHVlKHZtLCBwcm9wLCBrZXkpO1xuICAgIC8vIHNpbmNlIHRoZSBkZWZhdWx0IHZhbHVlIGlzIGEgZnJlc2ggY29weSxcbiAgICAvLyBtYWtlIHN1cmUgdG8gb2JzZXJ2ZSBpdC5cbiAgICBvYnNlcnZlclN0YXRlLnNob3VsZENvbnZlcnQgPSB0cnVlO1xuICAgIG9ic2VydmUodmFsdWUpO1xuICAgIG9ic2VydmVyU3RhdGUuc2hvdWxkQ29udmVydCA9IGZhbHNlO1xuICB9XG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgYXNzZXJ0UHJvcChwcm9wLCBrZXksIHZhbHVlLCB2bSwgYWJzZW50KTtcbiAgfVxuICByZXR1cm4gdmFsdWU7XG59XG5cbi8qKlxuICogR2V0IHRoZSBkZWZhdWx0IHZhbHVlIG9mIGEgcHJvcC5cbiAqL1xuZnVuY3Rpb24gZ2V0UHJvcERlZmF1bHRWYWx1ZSh2bSwgcHJvcCwgbmFtZSkge1xuICAvLyBubyBkZWZhdWx0LCByZXR1cm4gdW5kZWZpbmVkXG4gIGlmICghaGFzT3duKHByb3AsICdkZWZhdWx0JykpIHtcbiAgICByZXR1cm4gdW5kZWZpbmVkO1xuICB9XG4gIHZhciBkZWYgPSBwcm9wLmRlZmF1bHQ7XG4gIC8vIHdhcm4gYWdhaW5zdCBub24tZmFjdG9yeSBkZWZhdWx0cyBmb3IgT2JqZWN0ICYgQXJyYXlcbiAgaWYgKGlzT2JqZWN0KGRlZikpIHtcbiAgICBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nICYmIHdhcm4oJ0ludmFsaWQgZGVmYXVsdCB2YWx1ZSBmb3IgcHJvcCBcIicgKyBuYW1lICsgJ1wiOiAnICsgJ1Byb3BzIHdpdGggdHlwZSBPYmplY3QvQXJyYXkgbXVzdCB1c2UgYSBmYWN0b3J5IGZ1bmN0aW9uICcgKyAndG8gcmV0dXJuIHRoZSBkZWZhdWx0IHZhbHVlLicsIHZtKTtcbiAgfVxuICAvLyBjYWxsIGZhY3RvcnkgZnVuY3Rpb24gZm9yIG5vbi1GdW5jdGlvbiB0eXBlc1xuICByZXR1cm4gdHlwZW9mIGRlZiA9PT0gJ2Z1bmN0aW9uJyAmJiBwcm9wLnR5cGUgIT09IEZ1bmN0aW9uID8gZGVmLmNhbGwodm0pIDogZGVmO1xufVxuXG4vKipcbiAqIEFzc2VydCB3aGV0aGVyIGEgcHJvcCBpcyB2YWxpZC5cbiAqL1xuZnVuY3Rpb24gYXNzZXJ0UHJvcChwcm9wLCBuYW1lLCB2YWx1ZSwgdm0sIGFic2VudCkge1xuICBpZiAocHJvcC5yZXF1aXJlZCAmJiBhYnNlbnQpIHtcbiAgICB3YXJuKCdNaXNzaW5nIHJlcXVpcmVkIHByb3A6IFwiJyArIG5hbWUgKyAnXCInLCB2bSk7XG4gICAgcmV0dXJuO1xuICB9XG4gIGlmICh2YWx1ZSA9PSBudWxsICYmICFwcm9wLnJlcXVpcmVkKSB7XG4gICAgcmV0dXJuO1xuICB9XG4gIHZhciB0eXBlID0gcHJvcC50eXBlO1xuICB2YXIgdmFsaWQgPSAhdHlwZTtcbiAgdmFyIGV4cGVjdGVkVHlwZXMgPSBbXTtcbiAgaWYgKHR5cGUpIHtcbiAgICBpZiAoIUFycmF5LmlzQXJyYXkodHlwZSkpIHtcbiAgICAgIHR5cGUgPSBbdHlwZV07XG4gICAgfVxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdHlwZS5sZW5ndGggJiYgIXZhbGlkOyBpKyspIHtcbiAgICAgIHZhciBhc3NlcnRlZFR5cGUgPSBhc3NlcnRUeXBlKHZhbHVlLCB0eXBlW2ldKTtcbiAgICAgIGV4cGVjdGVkVHlwZXMucHVzaChhc3NlcnRlZFR5cGUuZXhwZWN0ZWRUeXBlKTtcbiAgICAgIHZhbGlkID0gYXNzZXJ0ZWRUeXBlLnZhbGlkO1xuICAgIH1cbiAgfVxuICBpZiAoIXZhbGlkKSB7XG4gICAgd2FybignSW52YWxpZCBwcm9wOiB0eXBlIGNoZWNrIGZhaWxlZCBmb3IgcHJvcCBcIicgKyBuYW1lICsgJ1wiLicgKyAnIEV4cGVjdGVkICcgKyBleHBlY3RlZFR5cGVzLm1hcChjYXBpdGFsaXplKS5qb2luKCcsICcpICsgJywgZ290ICcgKyBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwodmFsdWUpLnNsaWNlKDgsIC0xKSArICcuJywgdm0pO1xuICAgIHJldHVybjtcbiAgfVxuICB2YXIgdmFsaWRhdG9yID0gcHJvcC52YWxpZGF0b3I7XG4gIGlmICh2YWxpZGF0b3IpIHtcbiAgICBpZiAoIXZhbGlkYXRvcih2YWx1ZSkpIHtcbiAgICAgIHdhcm4oJ0ludmFsaWQgcHJvcDogY3VzdG9tIHZhbGlkYXRvciBjaGVjayBmYWlsZWQgZm9yIHByb3AgXCInICsgbmFtZSArICdcIi4nLCB2bSk7XG4gICAgfVxuICB9XG59XG5cbi8qKlxuICogQXNzZXJ0IHRoZSB0eXBlIG9mIGEgdmFsdWVcbiAqL1xuZnVuY3Rpb24gYXNzZXJ0VHlwZSh2YWx1ZSwgdHlwZSkge1xuICB2YXIgdmFsaWQgPSB2b2lkIDA7XG4gIHZhciBleHBlY3RlZFR5cGUgPSB2b2lkIDA7XG4gIGlmICh0eXBlID09PSBTdHJpbmcpIHtcbiAgICBleHBlY3RlZFR5cGUgPSAnc3RyaW5nJztcbiAgICB2YWxpZCA9IHR5cGVvZiB2YWx1ZSA9PT0gZXhwZWN0ZWRUeXBlO1xuICB9IGVsc2UgaWYgKHR5cGUgPT09IE51bWJlcikge1xuICAgIGV4cGVjdGVkVHlwZSA9ICdudW1iZXInO1xuICAgIHZhbGlkID0gdHlwZW9mIHZhbHVlID09PSBleHBlY3RlZFR5cGU7XG4gIH0gZWxzZSBpZiAodHlwZSA9PT0gQm9vbGVhbikge1xuICAgIGV4cGVjdGVkVHlwZSA9ICdib29sZWFuJztcbiAgICB2YWxpZCA9IHR5cGVvZiB2YWx1ZSA9PT0gZXhwZWN0ZWRUeXBlO1xuICB9IGVsc2UgaWYgKHR5cGUgPT09IEZ1bmN0aW9uKSB7XG4gICAgZXhwZWN0ZWRUeXBlID0gJ2Z1bmN0aW9uJztcbiAgICB2YWxpZCA9IHR5cGVvZiB2YWx1ZSA9PT0gZXhwZWN0ZWRUeXBlO1xuICB9IGVsc2UgaWYgKHR5cGUgPT09IE9iamVjdCkge1xuICAgIGV4cGVjdGVkVHlwZSA9ICdPYmplY3QnO1xuICAgIHZhbGlkID0gaXNQbGFpbk9iamVjdCh2YWx1ZSk7XG4gIH0gZWxzZSBpZiAodHlwZSA9PT0gQXJyYXkpIHtcbiAgICBleHBlY3RlZFR5cGUgPSAnQXJyYXknO1xuICAgIHZhbGlkID0gQXJyYXkuaXNBcnJheSh2YWx1ZSk7XG4gIH0gZWxzZSB7XG4gICAgZXhwZWN0ZWRUeXBlID0gdHlwZS5uYW1lIHx8IHR5cGUudG9TdHJpbmcoKTtcbiAgICB2YWxpZCA9IHZhbHVlIGluc3RhbmNlb2YgdHlwZTtcbiAgfVxuICByZXR1cm4ge1xuICAgIHZhbGlkOiB2YWxpZCxcbiAgICBleHBlY3RlZFR5cGU6IGV4cGVjdGVkVHlwZVxuICB9O1xufVxuXG5cblxudmFyIHV0aWwgPSBPYmplY3QuZnJlZXplKHtcblx0ZGVmaW5lUmVhY3RpdmU6IGRlZmluZVJlYWN0aXZlLFxuXHRfdG9TdHJpbmc6IF90b1N0cmluZyxcblx0dG9OdW1iZXI6IHRvTnVtYmVyLFxuXHRtYWtlTWFwOiBtYWtlTWFwLFxuXHRpc0J1aWx0SW5UYWc6IGlzQnVpbHRJblRhZyxcblx0cmVtb3ZlOiByZW1vdmUsXG5cdGhhc093bjogaGFzT3duLFxuXHRpc1ByaW1pdGl2ZTogaXNQcmltaXRpdmUsXG5cdGNhY2hlZDogY2FjaGVkLFxuXHRjYW1lbGl6ZTogY2FtZWxpemUsXG5cdGNhcGl0YWxpemU6IGNhcGl0YWxpemUsXG5cdGh5cGhlbmF0ZTogaHlwaGVuYXRlLFxuXHRiaW5kOiBiaW5kLFxuXHR0b0FycmF5OiB0b0FycmF5LFxuXHRleHRlbmQ6IGV4dGVuZCxcblx0aXNPYmplY3Q6IGlzT2JqZWN0LFxuXHRpc1BsYWluT2JqZWN0OiBpc1BsYWluT2JqZWN0LFxuXHR0b09iamVjdDogdG9PYmplY3QsXG5cdG5vb3A6IG5vb3AsXG5cdG5vOiBubyxcblx0Z2VuU3RhdGljS2V5czogZ2VuU3RhdGljS2V5cyxcblx0aXNSZXNlcnZlZDogaXNSZXNlcnZlZCxcblx0ZGVmOiBkZWYsXG5cdHBhcnNlUGF0aDogcGFyc2VQYXRoLFxuXHRoYXNQcm90bzogaGFzUHJvdG8sXG5cdGluQnJvd3NlcjogaW5Ccm93c2VyLFxuXHRkZXZ0b29sczogZGV2dG9vbHMsXG5cdFVBOiBVQSxcblx0bmV4dFRpY2s6IG5leHRUaWNrLFxuXHRnZXQgX1NldCAoKSB7IHJldHVybiBfU2V0OyB9LFxuXHRtZXJnZU9wdGlvbnM6IG1lcmdlT3B0aW9ucyxcblx0cmVzb2x2ZUFzc2V0OiByZXNvbHZlQXNzZXQsXG5cdGdldCB3YXJuICgpIHsgcmV0dXJuIHdhcm47IH0sXG5cdHZhbGlkYXRlUHJvcDogdmFsaWRhdGVQcm9wXG59KTtcblxuZnVuY3Rpb24gaW5pdFVzZShWdWUpIHtcbiAgVnVlLnVzZSA9IGZ1bmN0aW9uIChwbHVnaW4pIHtcbiAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgKi9cbiAgICBpZiAocGx1Z2luLmluc3RhbGxlZCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICAvLyBhZGRpdGlvbmFsIHBhcmFtZXRlcnNcbiAgICB2YXIgYXJncyA9IHRvQXJyYXkoYXJndW1lbnRzLCAxKTtcbiAgICBhcmdzLnVuc2hpZnQodGhpcyk7XG4gICAgaWYgKHR5cGVvZiBwbHVnaW4uaW5zdGFsbCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgcGx1Z2luLmluc3RhbGwuYXBwbHkocGx1Z2luLCBhcmdzKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcGx1Z2luLmFwcGx5KG51bGwsIGFyZ3MpO1xuICAgIH1cbiAgICBwbHVnaW4uaW5zdGFsbGVkID0gdHJ1ZTtcbiAgICByZXR1cm4gdGhpcztcbiAgfTtcbn1cblxuZnVuY3Rpb24gaW5pdE1peGluJDEoVnVlKSB7XG4gIFZ1ZS5taXhpbiA9IGZ1bmN0aW9uIChtaXhpbikge1xuICAgIFZ1ZS5vcHRpb25zID0gbWVyZ2VPcHRpb25zKFZ1ZS5vcHRpb25zLCBtaXhpbik7XG4gIH07XG59XG5cbmZ1bmN0aW9uIGluaXRFeHRlbmQoVnVlKSB7XG4gIC8qKlxuICAgKiBFYWNoIGluc3RhbmNlIGNvbnN0cnVjdG9yLCBpbmNsdWRpbmcgVnVlLCBoYXMgYSB1bmlxdWVcbiAgICogY2lkLiBUaGlzIGVuYWJsZXMgdXMgdG8gY3JlYXRlIHdyYXBwZWQgXCJjaGlsZFxuICAgKiBjb25zdHJ1Y3RvcnNcIiBmb3IgcHJvdG90eXBhbCBpbmhlcml0YW5jZSBhbmQgY2FjaGUgdGhlbS5cbiAgICovXG4gIFZ1ZS5jaWQgPSAwO1xuICB2YXIgY2lkID0gMTtcblxuICAvKipcbiAgICogQ2xhc3MgaW5oZXJpdGFuY2VcbiAgICovXG4gIFZ1ZS5leHRlbmQgPSBmdW5jdGlvbiAoZXh0ZW5kT3B0aW9ucykge1xuICAgIGV4dGVuZE9wdGlvbnMgPSBleHRlbmRPcHRpb25zIHx8IHt9O1xuICAgIHZhciBTdXBlciA9IHRoaXM7XG4gICAgdmFyIGlzRmlyc3RFeHRlbmQgPSBTdXBlci5jaWQgPT09IDA7XG4gICAgaWYgKGlzRmlyc3RFeHRlbmQgJiYgZXh0ZW5kT3B0aW9ucy5fQ3Rvcikge1xuICAgICAgcmV0dXJuIGV4dGVuZE9wdGlvbnMuX0N0b3I7XG4gICAgfVxuICAgIHZhciBuYW1lID0gZXh0ZW5kT3B0aW9ucy5uYW1lIHx8IFN1cGVyLm9wdGlvbnMubmFtZTtcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgaWYgKCEvXlthLXpBLVpdW1xcdy1dKiQvLnRlc3QobmFtZSkpIHtcbiAgICAgICAgd2FybignSW52YWxpZCBjb21wb25lbnQgbmFtZTogXCInICsgbmFtZSArICdcIi4gQ29tcG9uZW50IG5hbWVzICcgKyAnY2FuIG9ubHkgY29udGFpbiBhbHBoYW51bWVyaWMgY2hhcmFjYXRlcnMgYW5kIHRoZSBoeXBoZW4uJyk7XG4gICAgICAgIG5hbWUgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICB2YXIgU3ViID0gZnVuY3Rpb24gVnVlQ29tcG9uZW50KG9wdGlvbnMpIHtcbiAgICAgIHRoaXMuX2luaXQob3B0aW9ucyk7XG4gICAgfTtcbiAgICBTdWIucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShTdXBlci5wcm90b3R5cGUpO1xuICAgIFN1Yi5wcm90b3R5cGUuY29uc3RydWN0b3IgPSBTdWI7XG4gICAgU3ViLmNpZCA9IGNpZCsrO1xuICAgIFN1Yi5vcHRpb25zID0gbWVyZ2VPcHRpb25zKFN1cGVyLm9wdGlvbnMsIGV4dGVuZE9wdGlvbnMpO1xuICAgIFN1Ylsnc3VwZXInXSA9IFN1cGVyO1xuICAgIC8vIGFsbG93IGZ1cnRoZXIgZXh0ZW5zaW9uXG4gICAgU3ViLmV4dGVuZCA9IFN1cGVyLmV4dGVuZDtcbiAgICAvLyBjcmVhdGUgYXNzZXQgcmVnaXN0ZXJzLCBzbyBleHRlbmRlZCBjbGFzc2VzXG4gICAgLy8gY2FuIGhhdmUgdGhlaXIgcHJpdmF0ZSBhc3NldHMgdG9vLlxuICAgIGNvbmZpZy5fYXNzZXRUeXBlcy5mb3JFYWNoKGZ1bmN0aW9uICh0eXBlKSB7XG4gICAgICBTdWJbdHlwZV0gPSBTdXBlclt0eXBlXTtcbiAgICB9KTtcbiAgICAvLyBlbmFibGUgcmVjdXJzaXZlIHNlbGYtbG9va3VwXG4gICAgaWYgKG5hbWUpIHtcbiAgICAgIFN1Yi5vcHRpb25zLmNvbXBvbmVudHNbbmFtZV0gPSBTdWI7XG4gICAgfVxuICAgIC8vIGtlZXAgYSByZWZlcmVuY2UgdG8gdGhlIHN1cGVyIG9wdGlvbnMgYXQgZXh0ZW5zaW9uIHRpbWUuXG4gICAgLy8gbGF0ZXIgYXQgaW5zdGFudGlhdGlvbiB3ZSBjYW4gY2hlY2sgaWYgU3VwZXIncyBvcHRpb25zIGhhdmVcbiAgICAvLyBiZWVuIHVwZGF0ZWQuXG4gICAgU3ViLnN1cGVyT3B0aW9ucyA9IFN1cGVyLm9wdGlvbnM7XG4gICAgU3ViLmV4dGVuZE9wdGlvbnMgPSBleHRlbmRPcHRpb25zO1xuICAgIC8vIGNhY2hlIGNvbnN0cnVjdG9yXG4gICAgaWYgKGlzRmlyc3RFeHRlbmQpIHtcbiAgICAgIGV4dGVuZE9wdGlvbnMuX0N0b3IgPSBTdWI7XG4gICAgfVxuICAgIHJldHVybiBTdWI7XG4gIH07XG59XG5cbmZ1bmN0aW9uIGluaXRBc3NldFJlZ2lzdGVycyhWdWUpIHtcbiAgLyoqXG4gICAqIENyZWF0ZSBhc3NldCByZWdpc3RyYXRpb24gbWV0aG9kcy5cbiAgICovXG4gIGNvbmZpZy5fYXNzZXRUeXBlcy5mb3JFYWNoKGZ1bmN0aW9uICh0eXBlKSB7XG4gICAgVnVlW3R5cGVdID0gZnVuY3Rpb24gKGlkLCBkZWZpbml0aW9uKSB7XG4gICAgICBpZiAoIWRlZmluaXRpb24pIHtcbiAgICAgICAgcmV0dXJuIHRoaXMub3B0aW9uc1t0eXBlICsgJ3MnXVtpZF07XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgKi9cbiAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICBpZiAodHlwZSA9PT0gJ2NvbXBvbmVudCcgJiYgY29uZmlnLmlzUmVzZXJ2ZWRUYWcoaWQpKSB7XG4gICAgICAgICAgICB3YXJuKCdEbyBub3QgdXNlIGJ1aWx0LWluIG9yIHJlc2VydmVkIEhUTUwgZWxlbWVudHMgYXMgY29tcG9uZW50ICcgKyAnaWQ6ICcgKyBpZCk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmICh0eXBlID09PSAnY29tcG9uZW50JyAmJiBpc1BsYWluT2JqZWN0KGRlZmluaXRpb24pKSB7XG4gICAgICAgICAgZGVmaW5pdGlvbi5uYW1lID0gZGVmaW5pdGlvbi5uYW1lIHx8IGlkO1xuICAgICAgICAgIGRlZmluaXRpb24gPSBWdWUuZXh0ZW5kKGRlZmluaXRpb24pO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0eXBlID09PSAnZGlyZWN0aXZlJyAmJiB0eXBlb2YgZGVmaW5pdGlvbiA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgIGRlZmluaXRpb24gPSB7IGJpbmQ6IGRlZmluaXRpb24sIHVwZGF0ZTogZGVmaW5pdGlvbiB9O1xuICAgICAgICB9XG4gICAgICAgIHRoaXMub3B0aW9uc1t0eXBlICsgJ3MnXVtpZF0gPSBkZWZpbml0aW9uO1xuICAgICAgICByZXR1cm4gZGVmaW5pdGlvbjtcbiAgICAgIH1cbiAgICB9O1xuICB9KTtcbn1cblxudmFyIEtlZXBBbGl2ZSA9IHtcbiAgbmFtZTogJ2tlZXAtYWxpdmUnLFxuICBfYWJzdHJhY3Q6IHRydWUsXG4gIHByb3BzOiB7XG4gICAgY2hpbGQ6IE9iamVjdFxuICB9LFxuICBjcmVhdGVkOiBmdW5jdGlvbiBjcmVhdGVkKCkge1xuICAgIHRoaXMuY2FjaGUgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuICB9LFxuICByZW5kZXI6IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICB2YXIgcmF3Q2hpbGQgPSB0aGlzLmNoaWxkO1xuICAgIHZhciByZWFsQ2hpbGQgPSBnZXRSZWFsQ2hpbGQodGhpcy5jaGlsZCk7XG4gICAgdmFyIGNpZCA9IHJlYWxDaGlsZC5jb21wb25lbnRPcHRpb25zLkN0b3IuY2lkO1xuICAgIGlmICh0aGlzLmNhY2hlW2NpZF0pIHtcbiAgICAgIHZhciBjaGlsZCA9IHJlYWxDaGlsZC5jaGlsZCA9IHRoaXMuY2FjaGVbY2lkXS5jaGlsZDtcbiAgICAgIHJlYWxDaGlsZC5lbG0gPSB0aGlzLiRlbCA9IGNoaWxkLiRlbDtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5jYWNoZVtjaWRdID0gcmVhbENoaWxkO1xuICAgIH1cbiAgICByZWFsQ2hpbGQuZGF0YS5rZWVwQWxpdmUgPSB0cnVlO1xuICAgIHJldHVybiByYXdDaGlsZDtcbiAgfSxcbiAgZGVzdHJveWVkOiBmdW5jdGlvbiBkZXN0cm95ZWQoKSB7XG4gICAgZm9yICh2YXIga2V5IGluIHRoaXMuY2FjaGUpIHtcbiAgICAgIHZhciB2bm9kZSA9IHRoaXMuY2FjaGVba2V5XTtcbiAgICAgIGNhbGxIb29rKHZub2RlLmNoaWxkLCAnZGVhY3RpdmF0ZWQnKTtcbiAgICAgIHZub2RlLmNoaWxkLiRkZXN0cm95KCk7XG4gICAgfVxuICB9XG59O1xuXG52YXIgYnVpbHRJbkNvbXBvbmVudHMgPSB7XG4gIEtlZXBBbGl2ZTogS2VlcEFsaXZlXG59O1xuXG5mdW5jdGlvbiBpbml0R2xvYmFsQVBJKFZ1ZSkge1xuICAvLyBjb25maWdcbiAgdmFyIGNvbmZpZ0RlZiA9IHt9O1xuICBjb25maWdEZWYuZ2V0ID0gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBjb25maWc7XG4gIH07XG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgY29uZmlnRGVmLnNldCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIHdhcm4oJ0RvIG5vdCByZXBsYWNlIHRoZSBWdWUuY29uZmlnIG9iamVjdCwgc2V0IGluZGl2aWR1YWwgZmllbGRzIGluc3RlYWQuJyk7XG4gICAgfTtcbiAgfVxuICBPYmplY3QuZGVmaW5lUHJvcGVydHkoVnVlLCAnY29uZmlnJywgY29uZmlnRGVmKTtcbiAgVnVlLnV0aWwgPSB1dGlsO1xuICBWdWUuc2V0ID0gc2V0O1xuICBWdWUuZGVsZXRlID0gZGVsO1xuICBWdWUubmV4dFRpY2sgPSBuZXh0VGljaztcblxuICBWdWUub3B0aW9ucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gIGNvbmZpZy5fYXNzZXRUeXBlcy5mb3JFYWNoKGZ1bmN0aW9uICh0eXBlKSB7XG4gICAgVnVlLm9wdGlvbnNbdHlwZSArICdzJ10gPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuICB9KTtcblxuICBleHRlbmQoVnVlLm9wdGlvbnMuY29tcG9uZW50cywgYnVpbHRJbkNvbXBvbmVudHMpO1xuXG4gIGluaXRVc2UoVnVlKTtcbiAgaW5pdE1peGluJDEoVnVlKTtcbiAgaW5pdEV4dGVuZChWdWUpO1xuICBpbml0QXNzZXRSZWdpc3RlcnMoVnVlKTtcbn1cblxuaW5pdEdsb2JhbEFQSShWdWUpO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoVnVlLnByb3RvdHlwZSwgJyRpc1NlcnZlcicsIHtcbiAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgcmV0dXJuIGNvbmZpZy5faXNTZXJ2ZXI7XG4gIH1cbn0pO1xuXG5WdWUudmVyc2lvbiA9ICcyLjAuMC1iZXRhLjEnO1xuXG4vLyBhdHRyaWJ1dGVzIHRoYXQgc2hvdWxkIGJlIHVzaW5nIHByb3BzIGZvciBiaW5kaW5nXG52YXIgbXVzdFVzZVByb3AgPSBtYWtlTWFwKCd2YWx1ZSxzZWxlY3RlZCxjaGVja2VkLG11dGVkJyk7XG5cbnZhciBpc0VudW1lcmF0ZWRBdHRyID0gbWFrZU1hcCgnY29udGVudGVkaXRhYmxlLGRyYWdnYWJsZSxzcGVsbGNoZWNrJyk7XG5cbnZhciBpc0Jvb2xlYW5BdHRyID0gbWFrZU1hcCgnYWxsb3dmdWxsc2NyZWVuLGFzeW5jLGF1dG9mb2N1cyxhdXRvcGxheSxjaGVja2VkLGNvbXBhY3QsY29udHJvbHMsZGVjbGFyZSwnICsgJ2RlZmF1bHQsZGVmYXVsdGNoZWNrZWQsZGVmYXVsdG11dGVkLGRlZmF1bHRzZWxlY3RlZCxkZWZlcixkaXNhYmxlZCwnICsgJ2VuYWJsZWQsZm9ybW5vdmFsaWRhdGUsaGlkZGVuLGluZGV0ZXJtaW5hdGUsaW5lcnQsaXNtYXAsaXRlbXNjb3BlLGxvb3AsbXVsdGlwbGUsJyArICdtdXRlZCxub2hyZWYsbm9yZXNpemUsbm9zaGFkZSxub3ZhbGlkYXRlLG5vd3JhcCxvcGVuLHBhdXNlb25leGl0LHJlYWRvbmx5LCcgKyAncmVxdWlyZWQscmV2ZXJzZWQsc2NvcGVkLHNlYW1sZXNzLHNlbGVjdGVkLHNvcnRhYmxlLHRyYW5zbGF0ZSwnICsgJ3RydWVzcGVlZCx0eXBlbXVzdG1hdGNoLHZpc2libGUnKTtcblxudmFyIGlzQXR0ciA9IG1ha2VNYXAoJ2FjY2VwdCxhY2NlcHQtY2hhcnNldCxhY2Nlc3NrZXksYWN0aW9uLGFsaWduLGFsdCxhc3luYyxhdXRvY29tcGxldGUsJyArICdhdXRvZm9jdXMsYXV0b3BsYXksYXV0b3NhdmUsYmdjb2xvcixib3JkZXIsYnVmZmVyZWQsY2hhbGxlbmdlLGNoYXJzZXQsJyArICdjaGVja2VkLGNpdGUsY2xhc3MsY29kZSxjb2RlYmFzZSxjb2xvcixjb2xzLGNvbHNwYW4sY29udGVudCxodHRwLWVxdWl2LCcgKyAnbmFtZSxjb250ZW50ZWRpdGFibGUsY29udGV4dG1lbnUsY29udHJvbHMsY29vcmRzLGRhdGEsZGF0ZXRpbWUsZGVmYXVsdCwnICsgJ2RlZmVyLGRpcixkaXJuYW1lLGRpc2FibGVkLGRvd25sb2FkLGRyYWdnYWJsZSxkcm9wem9uZSxlbmN0eXBlLG1ldGhvZCxmb3IsJyArICdmb3JtLGZvcm1hY3Rpb24saGVhZGVycyw8dGg+LGhlaWdodCxoaWRkZW4saGlnaCxocmVmLGhyZWZsYW5nLGh0dHAtZXF1aXYsJyArICdpY29uLGlkLGlzbWFwLGl0ZW1wcm9wLGtleXR5cGUsa2luZCxsYWJlbCxsYW5nLGxhbmd1YWdlLGxpc3QsbG9vcCxsb3csJyArICdtYW5pZmVzdCxtYXgsbWF4bGVuZ3RoLG1lZGlhLG1ldGhvZCxHRVQsUE9TVCxtaW4sbXVsdGlwbGUsZW1haWwsZmlsZSwnICsgJ211dGVkLG5hbWUsbm92YWxpZGF0ZSxvcGVuLG9wdGltdW0scGF0dGVybixwaW5nLHBsYWNlaG9sZGVyLHBvc3RlciwnICsgJ3ByZWxvYWQscmFkaW9ncm91cCxyZWFkb25seSxyZWwscmVxdWlyZWQscmV2ZXJzZWQscm93cyxyb3dzcGFuLHNhbmRib3gsJyArICdzY29wZSxzY29wZWQsc2VhbWxlc3Msc2VsZWN0ZWQsc2hhcGUsc2l6ZSx0eXBlLHRleHQscGFzc3dvcmQsc2l6ZXMsc3BhbiwnICsgJ3NwZWxsY2hlY2ssc3JjLHNyY2RvYyxzcmNsYW5nLHNyY3NldCxzdGFydCxzdGVwLHN0eWxlLHN1bW1hcnksdGFiaW5kZXgsJyArICd0YXJnZXQsdGl0bGUsdHlwZSx1c2VtYXAsdmFsdWUsd2lkdGgsd3JhcCcpO1xuXG52YXIgeGxpbmtOUyA9ICdodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rJztcblxudmFyIGlzWGxpbmsgPSBmdW5jdGlvbiBpc1hsaW5rKG5hbWUpIHtcbiAgcmV0dXJuIG5hbWUuY2hhckF0KDUpID09PSAnOicgJiYgbmFtZS5zbGljZSgwLCA1KSA9PT0gJ3hsaW5rJztcbn07XG5cbnZhciBnZXRYbGlua1Byb3AgPSBmdW5jdGlvbiBnZXRYbGlua1Byb3AobmFtZSkge1xuICByZXR1cm4gaXNYbGluayhuYW1lKSA/IG5hbWUuc2xpY2UoNiwgbmFtZS5sZW5ndGgpIDogJyc7XG59O1xuXG52YXIgaXNGYWxzeUF0dHJWYWx1ZSA9IGZ1bmN0aW9uIGlzRmFsc3lBdHRyVmFsdWUodmFsKSB7XG4gIHJldHVybiB2YWwgPT0gbnVsbCB8fCB2YWwgPT09IGZhbHNlO1xufTtcblxuZnVuY3Rpb24gZ2VuQ2xhc3NGb3JWbm9kZSh2bm9kZSkge1xuICB2YXIgZGF0YSA9IHZub2RlLmRhdGE7XG4gIC8vIEltcG9ydGFudDogY2hlY2sgaWYgdGhpcyBpcyBhIGNvbXBvbmVudCBjb250YWluZXIgbm9kZVxuICAvLyBvciBhIGNoaWxkIGNvbXBvbmVudCByb290IG5vZGVcbiAgdmFyIGkgPSB2b2lkIDA7XG4gIGlmICgoaSA9IHZub2RlLmNoaWxkKSAmJiAoaSA9IGkuX3Zub2RlLmRhdGEpKSB7XG4gICAgZGF0YSA9IG1lcmdlQ2xhc3NEYXRhKGksIGRhdGEpO1xuICB9XG4gIGlmICgoaSA9IHZub2RlLnBhcmVudCkgJiYgKGkgPSBpLmRhdGEpKSB7XG4gICAgZGF0YSA9IG1lcmdlQ2xhc3NEYXRhKGRhdGEsIGkpO1xuICB9XG4gIHJldHVybiBnZW5DbGFzc0Zyb21EYXRhKGRhdGEpO1xufVxuXG5mdW5jdGlvbiBtZXJnZUNsYXNzRGF0YShjaGlsZCwgcGFyZW50KSB7XG4gIHJldHVybiB7XG4gICAgc3RhdGljQ2xhc3M6IGNvbmNhdChjaGlsZC5zdGF0aWNDbGFzcywgcGFyZW50LnN0YXRpY0NsYXNzKSxcbiAgICBjbGFzczogY2hpbGQuY2xhc3MgPyBbY2hpbGQuY2xhc3MsIHBhcmVudC5jbGFzc10gOiBwYXJlbnQuY2xhc3NcbiAgfTtcbn1cblxuZnVuY3Rpb24gZ2VuQ2xhc3NGcm9tRGF0YShkYXRhKSB7XG4gIHZhciBkeW5hbWljQ2xhc3MgPSBkYXRhLmNsYXNzO1xuICB2YXIgc3RhdGljQ2xhc3MgPSBkYXRhLnN0YXRpY0NsYXNzO1xuICBpZiAoc3RhdGljQ2xhc3MgfHwgZHluYW1pY0NsYXNzKSB7XG4gICAgcmV0dXJuIGNvbmNhdChzdGF0aWNDbGFzcywgc3RyaW5naWZ5Q2xhc3MoZHluYW1pY0NsYXNzKSk7XG4gIH1cbiAgLyogaXN0YW5idWwgaWdub3JlIG5leHQgKi9cbiAgcmV0dXJuICcnO1xufVxuXG5mdW5jdGlvbiBjb25jYXQoYSwgYikge1xuICByZXR1cm4gYSA/IGIgPyBhICsgJyAnICsgYiA6IGEgOiBiIHx8ICcnO1xufVxuXG5mdW5jdGlvbiBzdHJpbmdpZnlDbGFzcyh2YWx1ZSkge1xuICB2YXIgcmVzID0gJyc7XG4gIGlmICghdmFsdWUpIHtcbiAgICByZXR1cm4gcmVzO1xuICB9XG4gIGlmICh0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnKSB7XG4gICAgcmV0dXJuIHZhbHVlO1xuICB9XG4gIGlmIChBcnJheS5pc0FycmF5KHZhbHVlKSkge1xuICAgIHZhciBzdHJpbmdpZmllZCA9IHZvaWQgMDtcbiAgICBmb3IgKHZhciBpID0gMCwgbCA9IHZhbHVlLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgaWYgKHZhbHVlW2ldKSB7XG4gICAgICAgIGlmIChzdHJpbmdpZmllZCA9IHN0cmluZ2lmeUNsYXNzKHZhbHVlW2ldKSkge1xuICAgICAgICAgIHJlcyArPSBzdHJpbmdpZmllZCArICcgJztcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gcmVzLnNsaWNlKDAsIC0xKTtcbiAgfVxuICBpZiAoaXNPYmplY3QodmFsdWUpKSB7XG4gICAgZm9yICh2YXIga2V5IGluIHZhbHVlKSB7XG4gICAgICBpZiAodmFsdWVba2V5XSkgcmVzICs9IGtleSArICcgJztcbiAgICB9XG4gICAgcmV0dXJuIHJlcy5zbGljZSgwLCAtMSk7XG4gIH1cbiAgLyogaXN0YW5idWwgaWdub3JlIG5leHQgKi9cbiAgcmV0dXJuIHJlcztcbn1cblxudmFyIG5hbWVzcGFjZU1hcCA9IHtcbiAgc3ZnOiAnaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnLFxuICBtYXRoOiAnaHR0cDovL3d3dy53My5vcmcvMTk5OC9NYXRoL01hdGhNTCdcbn07XG5cbnZhciBpc1Jlc2VydmVkVGFnID0gbWFrZU1hcCgnaHRtbCxiYXNlLGhlYWQsbGluayxtZXRhLHN0eWxlLHRpdGxlLCcgKyAnYWRkcmVzcyxhcnRpY2xlLGZvb3RlcixoZWFkZXIsaDEsaDIsaDMsaDQsaDUsaDYsaGdyb3VwLG5hdixzZWN0aW9uLCcgKyAnZGl2LGRkLGRsLGR0LGZpZ2NhcHRpb24sZmlndXJlLGhyLGltZyxsaSxtYWluLG9sLHAscHJlLHVsLCcgKyAnYSxiLGFiYnIsYmRpLGJkbyxicixjaXRlLGNvZGUsZGF0YSxkZm4sZW0saSxrYmQsbWFyayxxLHJwLHJ0LHJ0YyxydWJ5LCcgKyAncyxzYW1wLHNtYWxsLHNwYW4sc3Ryb25nLHN1YixzdXAsdGltZSx1LHZhcix3YnIsYXJlYSxhdWRpbyxtYXAsdHJhY2ssdmlkZW8sJyArICdlbWJlZCxvYmplY3QscGFyYW0sc291cmNlLGNhbnZhcyxzY3JpcHQsbm9zY3JpcHQsZGVsLGlucywnICsgJ2NhcHRpb24sY29sLGNvbGdyb3VwLHRhYmxlLHRoZWFkLHRib2R5LHRkLHRoLHRyLCcgKyAnYnV0dG9uLGRhdGFsaXN0LGZpZWxkc2V0LGZvcm0saW5wdXQsbGFiZWwsbGVnZW5kLG1ldGVyLG9wdGdyb3VwLG9wdGlvbiwnICsgJ291dHB1dCxwcm9ncmVzcyxzZWxlY3QsdGV4dGFyZWEsJyArICdkZXRhaWxzLGRpYWxvZyxtZW51LG1lbnVpdGVtLHN1bW1hcnksJyArICdjb250ZW50LGVsZW1lbnQsc2hhZG93LHRlbXBsYXRlJyk7XG5cbnZhciBpc1VuYXJ5VGFnID0gbWFrZU1hcCgnYXJlYSxiYXNlLGJyLGNvbCxlbWJlZCxmcmFtZSxocixpbWcsaW5wdXQsaXNpbmRleCxrZXlnZW4sJyArICdsaW5rLG1ldGEscGFyYW0sc291cmNlLHRyYWNrLHdicicsIHRydWUpO1xuXG4vLyBFbGVtZW50cyB0aGF0IHlvdSBjYW4sIGludGVudGlvbmFsbHksIGxlYXZlIG9wZW5cbi8vIChhbmQgd2hpY2ggY2xvc2UgdGhlbXNlbHZlcylcbnZhciBjYW5CZUxlZnRPcGVuVGFnID0gbWFrZU1hcCgnY29sZ3JvdXAsZGQsZHQsbGksb3B0aW9ucyxwLHRkLHRmb290LHRoLHRoZWFkLHRyLHNvdXJjZScsIHRydWUpO1xuXG4vLyBIVE1MNSB0YWdzIGh0dHBzOi8vaHRtbC5zcGVjLndoYXR3Zy5vcmcvbXVsdGlwYWdlL2luZGljZXMuaHRtbCNlbGVtZW50cy0zXG4vLyBQaHJhc2luZyBDb250ZW50IGh0dHBzOi8vaHRtbC5zcGVjLndoYXR3Zy5vcmcvbXVsdGlwYWdlL2RvbS5odG1sI3BocmFzaW5nLWNvbnRlbnRcbnZhciBpc05vblBocmFzaW5nVGFnID0gbWFrZU1hcCgnYWRkcmVzcyxhcnRpY2xlLGFzaWRlLGJhc2UsYmxvY2txdW90ZSxib2R5LGNhcHRpb24sY29sLGNvbGdyb3VwLGRkLCcgKyAnZGV0YWlscyxkaWFsb2csZGl2LGRsLGR0LGZpZWxkc2V0LGZpZ2NhcHRpb24sZmlndXJlLGZvb3Rlcixmb3JtLCcgKyAnaDEsaDIsaDMsaDQsaDUsaDYsaGVhZCxoZWFkZXIsaGdyb3VwLGhyLGh0bWwsbGVnZW5kLGxpLG1lbnVpdGVtLG1ldGEsJyArICdvcHRncm91cCxvcHRpb24scGFyYW0scnAscnQsc291cmNlLHN0eWxlLHN1bW1hcnksdGJvZHksdGQsdGZvb3QsdGgsdGhlYWQsJyArICd0aXRsZSx0cix0cmFjaycsIHRydWUpO1xuXG4vLyB0aGlzIG1hcCBjb3ZlcnMgbmFtZXNwYWNlIGVsZW1lbnRzIHRoYXQgY2FuIGFwcGVhciBhcyB0ZW1wbGF0ZSByb290IG5vZGVzXG52YXIgaXNTVkcgPSBtYWtlTWFwKCdzdmcsZyxkZWZzLHN5bWJvbCx1c2UsaW1hZ2UsdGV4dCxjaXJjbGUsZWxsaXBzZSwnICsgJ2xpbmUscGF0aCxwb2x5Z29uLHBvbHlsaW5lLHJlY3QnLCB0cnVlKTtcblxuZnVuY3Rpb24gZ2V0VGFnTmFtZXNwYWNlKHRhZykge1xuICBpZiAoaXNTVkcodGFnKSkge1xuICAgIHJldHVybiAnc3ZnJztcbiAgfVxuICAvLyBiYXNpYyBzdXBwb3J0IGZvciBNYXRoTUxcbiAgLy8gbm90ZSBpdCBkb2Vzbid0IHN1cHBvcnQgb3RoZXIgTWF0aE1MIGVsZW1lbnRzIGJlaW5nIGNvbXBvbmVudCByb290c1xuICBpZiAodGFnID09PSAnbWF0aCcpIHtcbiAgICByZXR1cm4gJ21hdGgnO1xuICB9XG59XG5cbnZhciB1bmtub3duRWxlbWVudENhY2hlID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbmZ1bmN0aW9uIGlzVW5rbm93bkVsZW1lbnQodGFnKSB7XG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAqL1xuICBpZiAoIWluQnJvd3Nlcikge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG4gIHRhZyA9IHRhZy50b0xvd2VyQ2FzZSgpO1xuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgKi9cbiAgaWYgKHVua25vd25FbGVtZW50Q2FjaGVbdGFnXSAhPSBudWxsKSB7XG4gICAgcmV0dXJuIHVua25vd25FbGVtZW50Q2FjaGVbdGFnXTtcbiAgfVxuICB2YXIgZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KHRhZyk7XG4gIGlmICh0YWcuaW5kZXhPZignLScpID4gLTEpIHtcbiAgICAvLyBodHRwOi8vc3RhY2tvdmVyZmxvdy5jb20vYS8yODIxMDM2NC8xMDcwMjQ0XG4gICAgcmV0dXJuIHVua25vd25FbGVtZW50Q2FjaGVbdGFnXSA9IGVsLmNvbnN0cnVjdG9yID09PSB3aW5kb3cuSFRNTFVua25vd25FbGVtZW50IHx8IGVsLmNvbnN0cnVjdG9yID09PSB3aW5kb3cuSFRNTEVsZW1lbnQ7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIHVua25vd25FbGVtZW50Q2FjaGVbdGFnXSA9IC9IVE1MVW5rbm93bkVsZW1lbnQvLnRlc3QoZWwudG9TdHJpbmcoKSk7XG4gIH1cbn1cblxudmFyIFVBJDEgPSBpbkJyb3dzZXIgJiYgd2luZG93Lm5hdmlnYXRvci51c2VyQWdlbnQudG9Mb3dlckNhc2UoKTtcbnZhciBpc0lFID0gVUEkMSAmJiAvbXNpZXx0cmlkZW50Ly50ZXN0KFVBJDEpO1xudmFyIGlzSUU5ID0gVUEkMSAmJiBVQSQxLmluZGV4T2YoJ21zaWUgOS4wJykgPiAwO1xudmFyIGlzQW5kcm9pZCA9IFVBJDEgJiYgVUEkMS5pbmRleE9mKCdhbmRyb2lkJykgPiAwO1xuXG4vKipcbiAqIFF1ZXJ5IGFuIGVsZW1lbnQgc2VsZWN0b3IgaWYgaXQncyBub3QgYW4gZWxlbWVudCBhbHJlYWR5LlxuICovXG5mdW5jdGlvbiBxdWVyeShlbCkge1xuICBpZiAodHlwZW9mIGVsID09PSAnc3RyaW5nJykge1xuICAgIHZhciBzZWxlY3RvciA9IGVsO1xuICAgIGVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihlbCk7XG4gICAgaWYgKCFlbCkge1xuICAgICAgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyAmJiB3YXJuKCdDYW5ub3QgZmluZCBlbGVtZW50OiAnICsgc2VsZWN0b3IpO1xuICAgICAgcmV0dXJuIGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIH1cbiAgfVxuICByZXR1cm4gZWw7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUVsZW1lbnQkMSh0YWdOYW1lKSB7XG4gIHJldHVybiBkb2N1bWVudC5jcmVhdGVFbGVtZW50KHRhZ05hbWUpO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVFbGVtZW50TlMobmFtZXNwYWNlLCB0YWdOYW1lKSB7XG4gIHJldHVybiBkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMobmFtZXNwYWNlTWFwW25hbWVzcGFjZV0sIHRhZ05hbWUpO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVUZXh0Tm9kZSh0ZXh0KSB7XG4gIHJldHVybiBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZSh0ZXh0KTtcbn1cblxuZnVuY3Rpb24gaW5zZXJ0QmVmb3JlKHBhcmVudE5vZGUsIG5ld05vZGUsIHJlZmVyZW5jZU5vZGUpIHtcbiAgcGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUobmV3Tm9kZSwgcmVmZXJlbmNlTm9kZSk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZUNoaWxkKG5vZGUsIGNoaWxkKSB7XG4gIG5vZGUucmVtb3ZlQ2hpbGQoY2hpbGQpO1xufVxuXG5mdW5jdGlvbiBhcHBlbmRDaGlsZChub2RlLCBjaGlsZCkge1xuICBub2RlLmFwcGVuZENoaWxkKGNoaWxkKTtcbn1cblxuZnVuY3Rpb24gcGFyZW50Tm9kZShub2RlKSB7XG4gIHJldHVybiBub2RlLnBhcmVudE5vZGU7XG59XG5cbmZ1bmN0aW9uIG5leHRTaWJsaW5nKG5vZGUpIHtcbiAgcmV0dXJuIG5vZGUubmV4dFNpYmxpbmc7XG59XG5cbmZ1bmN0aW9uIHRhZ05hbWUobm9kZSkge1xuICByZXR1cm4gbm9kZS50YWdOYW1lO1xufVxuXG5mdW5jdGlvbiBzZXRUZXh0Q29udGVudChub2RlLCB0ZXh0KSB7XG4gIG5vZGUudGV4dENvbnRlbnQgPSB0ZXh0O1xufVxuXG5mdW5jdGlvbiBjaGlsZE5vZGVzKG5vZGUpIHtcbiAgcmV0dXJuIG5vZGUuY2hpbGROb2Rlcztcbn1cblxuZnVuY3Rpb24gc2V0QXR0cmlidXRlKG5vZGUsIGtleSwgdmFsKSB7XG4gIG5vZGUuc2V0QXR0cmlidXRlKGtleSwgdmFsKTtcbn1cblxudmFyIG5vZGVPcHMgPSBPYmplY3QuZnJlZXplKHtcbiAgY3JlYXRlRWxlbWVudDogY3JlYXRlRWxlbWVudCQxLFxuICBjcmVhdGVFbGVtZW50TlM6IGNyZWF0ZUVsZW1lbnROUyxcbiAgY3JlYXRlVGV4dE5vZGU6IGNyZWF0ZVRleHROb2RlLFxuICBpbnNlcnRCZWZvcmU6IGluc2VydEJlZm9yZSxcbiAgcmVtb3ZlQ2hpbGQ6IHJlbW92ZUNoaWxkLFxuICBhcHBlbmRDaGlsZDogYXBwZW5kQ2hpbGQsXG4gIHBhcmVudE5vZGU6IHBhcmVudE5vZGUsXG4gIG5leHRTaWJsaW5nOiBuZXh0U2libGluZyxcbiAgdGFnTmFtZTogdGFnTmFtZSxcbiAgc2V0VGV4dENvbnRlbnQ6IHNldFRleHRDb250ZW50LFxuICBjaGlsZE5vZGVzOiBjaGlsZE5vZGVzLFxuICBzZXRBdHRyaWJ1dGU6IHNldEF0dHJpYnV0ZVxufSk7XG5cbnZhciBlbXB0eURhdGEgPSB7fTtcbnZhciBlbXB0eU5vZGUgPSBuZXcgVk5vZGUoJycsIGVtcHR5RGF0YSwgW10pO1xudmFyIGhvb2tzJDEgPSBbJ2NyZWF0ZScsICd1cGRhdGUnLCAncG9zdHBhdGNoJywgJ3JlbW92ZScsICdkZXN0cm95J107XG5cbmZ1bmN0aW9uIGlzVW5kZWYocykge1xuICByZXR1cm4gcyA9PSBudWxsO1xufVxuXG5mdW5jdGlvbiBpc0RlZihzKSB7XG4gIHJldHVybiBzICE9IG51bGw7XG59XG5cbmZ1bmN0aW9uIHNhbWVWbm9kZSh2bm9kZTEsIHZub2RlMikge1xuICByZXR1cm4gdm5vZGUxLmtleSA9PT0gdm5vZGUyLmtleSAmJiB2bm9kZTEudGFnID09PSB2bm9kZTIudGFnICYmICF2bm9kZTEuZGF0YSA9PT0gIXZub2RlMi5kYXRhO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVLZXlUb09sZElkeChjaGlsZHJlbiwgYmVnaW5JZHgsIGVuZElkeCkge1xuICB2YXIgaSA9IHZvaWQgMCxcbiAgICAgIGtleSA9IHZvaWQgMDtcbiAgdmFyIG1hcCA9IHt9O1xuICBmb3IgKGkgPSBiZWdpbklkeDsgaSA8PSBlbmRJZHg7ICsraSkge1xuICAgIGtleSA9IGNoaWxkcmVuW2ldLmtleTtcbiAgICBpZiAoaXNEZWYoa2V5KSkgbWFwW2tleV0gPSBpO1xuICB9XG4gIHJldHVybiBtYXA7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVBhdGNoRnVuY3Rpb24oYmFja2VuZCkge1xuICB2YXIgaSA9IHZvaWQgMCxcbiAgICAgIGogPSB2b2lkIDA7XG4gIHZhciBjYnMgPSB7fTtcblxuICB2YXIgbW9kdWxlcyA9IGJhY2tlbmQubW9kdWxlcztcbiAgdmFyIG5vZGVPcHMgPSBiYWNrZW5kLm5vZGVPcHM7XG5cblxuICBmb3IgKGkgPSAwOyBpIDwgaG9va3MkMS5sZW5ndGg7ICsraSkge1xuICAgIGNic1tob29rcyQxW2ldXSA9IFtdO1xuICAgIGZvciAoaiA9IDA7IGogPCBtb2R1bGVzLmxlbmd0aDsgKytqKSB7XG4gICAgICBpZiAobW9kdWxlc1tqXVtob29rcyQxW2ldXSAhPT0gdW5kZWZpbmVkKSBjYnNbaG9va3MkMVtpXV0ucHVzaChtb2R1bGVzW2pdW2hvb2tzJDFbaV1dKTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBlbXB0eU5vZGVBdChlbG0pIHtcbiAgICByZXR1cm4gbmV3IFZOb2RlKG5vZGVPcHMudGFnTmFtZShlbG0pLnRvTG93ZXJDYXNlKCksIHt9LCBbXSwgdW5kZWZpbmVkLCBlbG0pO1xuICB9XG5cbiAgZnVuY3Rpb24gY3JlYXRlUm1DYihjaGlsZEVsbSwgbGlzdGVuZXJzKSB7XG4gICAgZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgaWYgKC0tcmVtb3ZlLmxpc3RlbmVycyA9PT0gMCkge1xuICAgICAgICByZW1vdmVFbGVtZW50KGNoaWxkRWxtKTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmVtb3ZlLmxpc3RlbmVycyA9IGxpc3RlbmVycztcbiAgICByZXR1cm4gcmVtb3ZlO1xuICB9XG5cbiAgZnVuY3Rpb24gcmVtb3ZlRWxlbWVudChlbCkge1xuICAgIHZhciBwYXJlbnQgPSBub2RlT3BzLnBhcmVudE5vZGUoZWwpO1xuICAgIG5vZGVPcHMucmVtb3ZlQ2hpbGQocGFyZW50LCBlbCk7XG4gIH1cblxuICBmdW5jdGlvbiBjcmVhdGVFbG0odm5vZGUsIGluc2VydGVkVm5vZGVRdWV1ZSkge1xuICAgIHZhciBpID0gdm9pZCAwLFxuICAgICAgICBlbG0gPSB2b2lkIDA7XG4gICAgdmFyIGRhdGEgPSB2bm9kZS5kYXRhO1xuICAgIGlmIChpc0RlZihkYXRhKSkge1xuICAgICAgaWYgKGlzRGVmKGkgPSBkYXRhLmhvb2spICYmIGlzRGVmKGkgPSBpLmluaXQpKSBpKHZub2RlKTtcbiAgICAgIC8vIGFmdGVyIGNhbGxpbmcgdGhlIGluaXQgaG9vaywgaWYgdGhlIHZub2RlIGlzIGEgY2hpbGQgY29tcG9uZW50XG4gICAgICAvLyBpdCBzaG91bGQndmUgY3JlYXRlZCBhIGNoaWxkIGluc3RhbmNlIGFuZCBtb3VudGVkIGl0LiB0aGUgY2hpbGRcbiAgICAgIC8vIGNvbXBvbmVudCBhbHNvIGhhcyBzZXQgdGhlIHBsYWNlaG9sZGVyIHZub2RlJ3MgZWxtLlxuICAgICAgLy8gaW4gdGhhdCBjYXNlIHdlIGNhbiBqdXN0IHJldHVybiB0aGUgZWxlbWVudCBhbmQgYmUgZG9uZS5cbiAgICAgIGlmIChpc0RlZihpID0gdm5vZGUuY2hpbGQpKSB7XG4gICAgICAgIHZub2RlLmVsbSA9IHZub2RlLmNoaWxkLiRlbDtcbiAgICAgICAgaW52b2tlQ3JlYXRlSG9va3Modm5vZGUsIGluc2VydGVkVm5vZGVRdWV1ZSk7XG4gICAgICAgIHNldFNjb3BlKHZub2RlKTtcbiAgICAgICAgcmV0dXJuIHZub2RlLmVsbTtcbiAgICAgIH1cbiAgICB9XG4gICAgdmFyIGNoaWxkcmVuID0gdm5vZGUuY2hpbGRyZW47XG4gICAgdmFyIHRhZyA9IHZub2RlLnRhZztcbiAgICBpZiAoaXNEZWYodGFnKSkge1xuICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgaWYgKCF2bm9kZS5ucyAmJiAhKGNvbmZpZy5pZ25vcmVkRWxlbWVudHMgJiYgY29uZmlnLmlnbm9yZWRFbGVtZW50cy5pbmRleE9mKHRhZykgPiAtMSkgJiYgY29uZmlnLmlzVW5rbm93bkVsZW1lbnQodGFnKSkge1xuICAgICAgICAgIHdhcm4oJ1Vua25vd24gY3VzdG9tIGVsZW1lbnQ6IDwnICsgdGFnICsgJz4gLSBkaWQgeW91ICcgKyAncmVnaXN0ZXIgdGhlIGNvbXBvbmVudCBjb3JyZWN0bHk/IEZvciByZWN1cnNpdmUgY29tcG9uZW50cywgJyArICdtYWtlIHN1cmUgdG8gcHJvdmlkZSB0aGUgXCJuYW1lXCIgb3B0aW9uLicsIHZub2RlLmNvbnRleHQpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBlbG0gPSB2bm9kZS5lbG0gPSB2bm9kZS5ucyA/IG5vZGVPcHMuY3JlYXRlRWxlbWVudE5TKHZub2RlLm5zLCB0YWcpIDogbm9kZU9wcy5jcmVhdGVFbGVtZW50KHRhZyk7XG4gICAgICBzZXRTY29wZSh2bm9kZSk7XG4gICAgICBpZiAoQXJyYXkuaXNBcnJheShjaGlsZHJlbikpIHtcbiAgICAgICAgZm9yIChpID0gMDsgaSA8IGNoaWxkcmVuLmxlbmd0aDsgKytpKSB7XG4gICAgICAgICAgbm9kZU9wcy5hcHBlbmRDaGlsZChlbG0sIGNyZWF0ZUVsbShjaGlsZHJlbltpXSwgaW5zZXJ0ZWRWbm9kZVF1ZXVlKSk7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAoaXNQcmltaXRpdmUodm5vZGUudGV4dCkpIHtcbiAgICAgICAgbm9kZU9wcy5hcHBlbmRDaGlsZChlbG0sIG5vZGVPcHMuY3JlYXRlVGV4dE5vZGUodm5vZGUudGV4dCkpO1xuICAgICAgfVxuICAgICAgaWYgKGlzRGVmKGRhdGEpKSB7XG4gICAgICAgIGludm9rZUNyZWF0ZUhvb2tzKHZub2RlLCBpbnNlcnRlZFZub2RlUXVldWUpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBlbG0gPSB2bm9kZS5lbG0gPSBub2RlT3BzLmNyZWF0ZVRleHROb2RlKHZub2RlLnRleHQpO1xuICAgIH1cbiAgICByZXR1cm4gdm5vZGUuZWxtO1xuICB9XG5cbiAgZnVuY3Rpb24gaW52b2tlQ3JlYXRlSG9va3Modm5vZGUsIGluc2VydGVkVm5vZGVRdWV1ZSkge1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBjYnMuY3JlYXRlLmxlbmd0aDsgKytfaSkge1xuICAgICAgY2JzLmNyZWF0ZVtfaV0oZW1wdHlOb2RlLCB2bm9kZSk7XG4gICAgfVxuICAgIGkgPSB2bm9kZS5kYXRhLmhvb2s7IC8vIFJldXNlIHZhcmlhYmxlXG4gICAgaWYgKGlzRGVmKGkpKSB7XG4gICAgICBpZiAoaS5jcmVhdGUpIGkuY3JlYXRlKGVtcHR5Tm9kZSwgdm5vZGUpO1xuICAgICAgaWYgKGkuaW5zZXJ0KSBpbnNlcnRlZFZub2RlUXVldWUucHVzaCh2bm9kZSk7XG4gICAgfVxuICB9XG5cbiAgLy8gc2V0IHNjb3BlIGlkIGF0dHJpYnV0ZSBmb3Igc2NvcGVkIENTUy5cbiAgLy8gdGhpcyBpcyBpbXBsZW1lbnRlZCBhcyBhIHNwZWNpYWwgY2FzZSB0byBhdm9pZCB0aGUgb3ZlcmhlYWRcbiAgLy8gb2YgZ29pbmcgdGhyb3VnaCB0aGUgbm9ybWFsIGF0dHJpYnV0ZSBwYXRjaGluZyBwcm9jZXNzLlxuICBmdW5jdGlvbiBzZXRTY29wZSh2bm9kZSkge1xuICAgIHZhciBpID0gdm9pZCAwO1xuICAgIGlmIChpc0RlZihpID0gdm5vZGUuaG9zdCkgJiYgaXNEZWYoaSA9IGkuJG9wdGlvbnMuX3Njb3BlSWQpKSB7XG4gICAgICBub2RlT3BzLnNldEF0dHJpYnV0ZSh2bm9kZS5lbG0sIGksICcnKTtcbiAgICB9XG4gICAgaWYgKGlzRGVmKGkgPSB2bm9kZS5jb250ZXh0KSAmJiBpc0RlZihpID0gaS4kb3B0aW9ucy5fc2NvcGVJZCkpIHtcbiAgICAgIG5vZGVPcHMuc2V0QXR0cmlidXRlKHZub2RlLmVsbSwgaSwgJycpO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGFkZFZub2RlcyhwYXJlbnRFbG0sIGJlZm9yZSwgdm5vZGVzLCBzdGFydElkeCwgZW5kSWR4LCBpbnNlcnRlZFZub2RlUXVldWUpIHtcbiAgICBmb3IgKDsgc3RhcnRJZHggPD0gZW5kSWR4OyArK3N0YXJ0SWR4KSB7XG4gICAgICBub2RlT3BzLmluc2VydEJlZm9yZShwYXJlbnRFbG0sIGNyZWF0ZUVsbSh2bm9kZXNbc3RhcnRJZHhdLCBpbnNlcnRlZFZub2RlUXVldWUpLCBiZWZvcmUpO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGludm9rZURlc3Ryb3lIb29rKHZub2RlKSB7XG4gICAgdmFyIGkgPSB2b2lkIDAsXG4gICAgICAgIGogPSB2b2lkIDA7XG4gICAgdmFyIGRhdGEgPSB2bm9kZS5kYXRhO1xuICAgIGlmIChpc0RlZihkYXRhKSkge1xuICAgICAgaWYgKGlzRGVmKGkgPSBkYXRhLmhvb2spICYmIGlzRGVmKGkgPSBpLmRlc3Ryb3kpKSBpKHZub2RlKTtcbiAgICAgIGZvciAoaSA9IDA7IGkgPCBjYnMuZGVzdHJveS5sZW5ndGg7ICsraSkge1xuICAgICAgICBjYnMuZGVzdHJveVtpXSh2bm9kZSk7XG4gICAgICB9XG4gICAgfVxuICAgIGlmIChpc0RlZihpID0gdm5vZGUuY2hpbGQpICYmICFkYXRhLmtlZXBBbGl2ZSkge1xuICAgICAgaW52b2tlRGVzdHJveUhvb2soaS5fdm5vZGUpO1xuICAgIH1cbiAgICBpZiAoaXNEZWYoaSA9IHZub2RlLmNoaWxkcmVuKSkge1xuICAgICAgZm9yIChqID0gMDsgaiA8IHZub2RlLmNoaWxkcmVuLmxlbmd0aDsgKytqKSB7XG4gICAgICAgIGludm9rZURlc3Ryb3lIb29rKHZub2RlLmNoaWxkcmVuW2pdKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiByZW1vdmVWbm9kZXMocGFyZW50RWxtLCB2bm9kZXMsIHN0YXJ0SWR4LCBlbmRJZHgpIHtcbiAgICBmb3IgKDsgc3RhcnRJZHggPD0gZW5kSWR4OyArK3N0YXJ0SWR4KSB7XG4gICAgICB2YXIgY2ggPSB2bm9kZXNbc3RhcnRJZHhdO1xuICAgICAgaWYgKGlzRGVmKGNoKSkge1xuICAgICAgICBpZiAoaXNEZWYoY2gudGFnKSkge1xuICAgICAgICAgIGludm9rZURlc3Ryb3lIb29rKGNoKTtcbiAgICAgICAgICByZW1vdmVBbmRJbnZva2VSZW1vdmVIb29rKGNoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAvLyBUZXh0IG5vZGVcbiAgICAgICAgICBub2RlT3BzLnJlbW92ZUNoaWxkKHBhcmVudEVsbSwgY2guZWxtKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIHJlbW92ZUFuZEludm9rZVJlbW92ZUhvb2sodm5vZGUsIHJtKSB7XG4gICAgaWYgKHJtIHx8IGlzRGVmKHZub2RlLmRhdGEpKSB7XG4gICAgICB2YXIgbGlzdGVuZXJzID0gY2JzLnJlbW92ZS5sZW5ndGggKyAxO1xuICAgICAgaWYgKCFybSkge1xuICAgICAgICAvLyBkaXJlY3RseSByZW1vdmluZ1xuICAgICAgICBybSA9IGNyZWF0ZVJtQ2Iodm5vZGUuZWxtLCBsaXN0ZW5lcnMpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gd2UgaGF2ZSBhIHJlY3Vyc2l2ZWx5IHBhc3NlZCBkb3duIHJtIGNhbGxiYWNrXG4gICAgICAgIC8vIGluY3JlYXNlIHRoZSBsaXN0ZW5lcnMgY291bnRcbiAgICAgICAgcm0ubGlzdGVuZXJzICs9IGxpc3RlbmVycztcbiAgICAgIH1cbiAgICAgIC8vIHJlY3Vyc2l2ZWx5IGludm9rZSBob29rcyBvbiBjaGlsZCBjb21wb25lbnQgcm9vdCBub2RlXG4gICAgICBpZiAoaXNEZWYoaSA9IHZub2RlLmNoaWxkKSAmJiBpc0RlZihpID0gaS5fdm5vZGUpICYmIGlzRGVmKGkuZGF0YSkpIHtcbiAgICAgICAgcmVtb3ZlQW5kSW52b2tlUmVtb3ZlSG9vayhpLCBybSk7XG4gICAgICB9XG4gICAgICBmb3IgKGkgPSAwOyBpIDwgY2JzLnJlbW92ZS5sZW5ndGg7ICsraSkge1xuICAgICAgICBjYnMucmVtb3ZlW2ldKHZub2RlLCBybSk7XG4gICAgICB9XG4gICAgICBpZiAoaXNEZWYoaSA9IHZub2RlLmRhdGEuaG9vaykgJiYgaXNEZWYoaSA9IGkucmVtb3ZlKSkge1xuICAgICAgICBpKHZub2RlLCBybSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBybSgpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICByZW1vdmVFbGVtZW50KHZub2RlLmVsbSk7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gdXBkYXRlQ2hpbGRyZW4ocGFyZW50RWxtLCBvbGRDaCwgbmV3Q2gsIGluc2VydGVkVm5vZGVRdWV1ZSkge1xuICAgIHZhciBvbGRTdGFydElkeCA9IDA7XG4gICAgdmFyIG5ld1N0YXJ0SWR4ID0gMDtcbiAgICB2YXIgb2xkRW5kSWR4ID0gb2xkQ2gubGVuZ3RoIC0gMTtcbiAgICB2YXIgb2xkU3RhcnRWbm9kZSA9IG9sZENoWzBdO1xuICAgIHZhciBvbGRFbmRWbm9kZSA9IG9sZENoW29sZEVuZElkeF07XG4gICAgdmFyIG5ld0VuZElkeCA9IG5ld0NoLmxlbmd0aCAtIDE7XG4gICAgdmFyIG5ld1N0YXJ0Vm5vZGUgPSBuZXdDaFswXTtcbiAgICB2YXIgbmV3RW5kVm5vZGUgPSBuZXdDaFtuZXdFbmRJZHhdO1xuICAgIHZhciBvbGRLZXlUb0lkeCA9IHZvaWQgMCxcbiAgICAgICAgaWR4SW5PbGQgPSB2b2lkIDAsXG4gICAgICAgIGVsbVRvTW92ZSA9IHZvaWQgMCxcbiAgICAgICAgYmVmb3JlID0gdm9pZCAwO1xuXG4gICAgd2hpbGUgKG9sZFN0YXJ0SWR4IDw9IG9sZEVuZElkeCAmJiBuZXdTdGFydElkeCA8PSBuZXdFbmRJZHgpIHtcbiAgICAgIGlmIChpc1VuZGVmKG9sZFN0YXJ0Vm5vZGUpKSB7XG4gICAgICAgIG9sZFN0YXJ0Vm5vZGUgPSBvbGRDaFsrK29sZFN0YXJ0SWR4XTsgLy8gVm5vZGUgaGFzIGJlZW4gbW92ZWQgbGVmdFxuICAgICAgfSBlbHNlIGlmIChpc1VuZGVmKG9sZEVuZFZub2RlKSkge1xuICAgICAgICBvbGRFbmRWbm9kZSA9IG9sZENoWy0tb2xkRW5kSWR4XTtcbiAgICAgIH0gZWxzZSBpZiAoc2FtZVZub2RlKG9sZFN0YXJ0Vm5vZGUsIG5ld1N0YXJ0Vm5vZGUpKSB7XG4gICAgICAgIHBhdGNoVm5vZGUob2xkU3RhcnRWbm9kZSwgbmV3U3RhcnRWbm9kZSwgaW5zZXJ0ZWRWbm9kZVF1ZXVlKTtcbiAgICAgICAgb2xkU3RhcnRWbm9kZSA9IG9sZENoWysrb2xkU3RhcnRJZHhdO1xuICAgICAgICBuZXdTdGFydFZub2RlID0gbmV3Q2hbKytuZXdTdGFydElkeF07XG4gICAgICB9IGVsc2UgaWYgKHNhbWVWbm9kZShvbGRFbmRWbm9kZSwgbmV3RW5kVm5vZGUpKSB7XG4gICAgICAgIHBhdGNoVm5vZGUob2xkRW5kVm5vZGUsIG5ld0VuZFZub2RlLCBpbnNlcnRlZFZub2RlUXVldWUpO1xuICAgICAgICBvbGRFbmRWbm9kZSA9IG9sZENoWy0tb2xkRW5kSWR4XTtcbiAgICAgICAgbmV3RW5kVm5vZGUgPSBuZXdDaFstLW5ld0VuZElkeF07XG4gICAgICB9IGVsc2UgaWYgKHNhbWVWbm9kZShvbGRTdGFydFZub2RlLCBuZXdFbmRWbm9kZSkpIHtcbiAgICAgICAgLy8gVm5vZGUgbW92ZWQgcmlnaHRcbiAgICAgICAgcGF0Y2hWbm9kZShvbGRTdGFydFZub2RlLCBuZXdFbmRWbm9kZSwgaW5zZXJ0ZWRWbm9kZVF1ZXVlKTtcbiAgICAgICAgbm9kZU9wcy5pbnNlcnRCZWZvcmUocGFyZW50RWxtLCBvbGRTdGFydFZub2RlLmVsbSwgbm9kZU9wcy5uZXh0U2libGluZyhvbGRFbmRWbm9kZS5lbG0pKTtcbiAgICAgICAgb2xkU3RhcnRWbm9kZSA9IG9sZENoWysrb2xkU3RhcnRJZHhdO1xuICAgICAgICBuZXdFbmRWbm9kZSA9IG5ld0NoWy0tbmV3RW5kSWR4XTtcbiAgICAgIH0gZWxzZSBpZiAoc2FtZVZub2RlKG9sZEVuZFZub2RlLCBuZXdTdGFydFZub2RlKSkge1xuICAgICAgICAvLyBWbm9kZSBtb3ZlZCBsZWZ0XG4gICAgICAgIHBhdGNoVm5vZGUob2xkRW5kVm5vZGUsIG5ld1N0YXJ0Vm5vZGUsIGluc2VydGVkVm5vZGVRdWV1ZSk7XG4gICAgICAgIG5vZGVPcHMuaW5zZXJ0QmVmb3JlKHBhcmVudEVsbSwgb2xkRW5kVm5vZGUuZWxtLCBvbGRTdGFydFZub2RlLmVsbSk7XG4gICAgICAgIG9sZEVuZFZub2RlID0gb2xkQ2hbLS1vbGRFbmRJZHhdO1xuICAgICAgICBuZXdTdGFydFZub2RlID0gbmV3Q2hbKytuZXdTdGFydElkeF07XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpZiAoaXNVbmRlZihvbGRLZXlUb0lkeCkpIG9sZEtleVRvSWR4ID0gY3JlYXRlS2V5VG9PbGRJZHgob2xkQ2gsIG9sZFN0YXJ0SWR4LCBvbGRFbmRJZHgpO1xuICAgICAgICBpZHhJbk9sZCA9IG9sZEtleVRvSWR4W25ld1N0YXJ0Vm5vZGUua2V5XTtcbiAgICAgICAgaWYgKGlzVW5kZWYoaWR4SW5PbGQpKSB7XG4gICAgICAgICAgLy8gTmV3IGVsZW1lbnRcbiAgICAgICAgICBub2RlT3BzLmluc2VydEJlZm9yZShwYXJlbnRFbG0sIGNyZWF0ZUVsbShuZXdTdGFydFZub2RlLCBpbnNlcnRlZFZub2RlUXVldWUpLCBvbGRTdGFydFZub2RlLmVsbSk7XG4gICAgICAgICAgbmV3U3RhcnRWbm9kZSA9IG5ld0NoWysrbmV3U3RhcnRJZHhdO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGVsbVRvTW92ZSA9IG9sZENoW2lkeEluT2xkXTtcbiAgICAgICAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgKi9cbiAgICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyAmJiAhZWxtVG9Nb3ZlKSB7XG4gICAgICAgICAgICB3YXJuKCdJdCBzZWVtcyB0aGVyZSBhcmUgZHVwbGljYXRlIGtleXMgdGhhdCBpcyBjYXVzaW5nIGFuIHVwZGF0ZSBlcnJvci4gJyArICdNYWtlIHN1cmUgZWFjaCB2LWZvciBpdGVtIGhhcyBhIHVuaXF1ZSBrZXkuJyk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmIChlbG1Ub01vdmUudGFnICE9PSBuZXdTdGFydFZub2RlLnRhZykge1xuICAgICAgICAgICAgLy8gc2FtZSBrZXkgYnV0IGRpZmZlcmVudCBlbGVtZW50LiB0cmVhdCBhcyBuZXcgZWxlbWVudFxuICAgICAgICAgICAgbm9kZU9wcy5pbnNlcnRCZWZvcmUocGFyZW50RWxtLCBjcmVhdGVFbG0obmV3U3RhcnRWbm9kZSwgaW5zZXJ0ZWRWbm9kZVF1ZXVlKSwgb2xkU3RhcnRWbm9kZS5lbG0pO1xuICAgICAgICAgICAgbmV3U3RhcnRWbm9kZSA9IG5ld0NoWysrbmV3U3RhcnRJZHhdO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBwYXRjaFZub2RlKGVsbVRvTW92ZSwgbmV3U3RhcnRWbm9kZSwgaW5zZXJ0ZWRWbm9kZVF1ZXVlKTtcbiAgICAgICAgICAgIG9sZENoW2lkeEluT2xkXSA9IHVuZGVmaW5lZDtcbiAgICAgICAgICAgIG5vZGVPcHMuaW5zZXJ0QmVmb3JlKHBhcmVudEVsbSwgbmV3U3RhcnRWbm9kZS5lbG0sIG9sZFN0YXJ0Vm5vZGUuZWxtKTtcbiAgICAgICAgICAgIG5ld1N0YXJ0Vm5vZGUgPSBuZXdDaFsrK25ld1N0YXJ0SWR4XTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKG9sZFN0YXJ0SWR4ID4gb2xkRW5kSWR4KSB7XG4gICAgICBiZWZvcmUgPSBpc1VuZGVmKG5ld0NoW25ld0VuZElkeCArIDFdKSA/IG51bGwgOiBuZXdDaFtuZXdFbmRJZHggKyAxXS5lbG07XG4gICAgICBhZGRWbm9kZXMocGFyZW50RWxtLCBiZWZvcmUsIG5ld0NoLCBuZXdTdGFydElkeCwgbmV3RW5kSWR4LCBpbnNlcnRlZFZub2RlUXVldWUpO1xuICAgIH0gZWxzZSBpZiAobmV3U3RhcnRJZHggPiBuZXdFbmRJZHgpIHtcbiAgICAgIHJlbW92ZVZub2RlcyhwYXJlbnRFbG0sIG9sZENoLCBvbGRTdGFydElkeCwgb2xkRW5kSWR4KTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBwYXRjaFZub2RlKG9sZFZub2RlLCB2bm9kZSwgaW5zZXJ0ZWRWbm9kZVF1ZXVlKSB7XG4gICAgaWYgKG9sZFZub2RlID09PSB2bm9kZSkgcmV0dXJuO1xuICAgIHZhciBpID0gdm9pZCAwLFxuICAgICAgICBob29rID0gdm9pZCAwO1xuICAgIHZhciBoYXNEYXRhID0gaXNEZWYoaSA9IHZub2RlLmRhdGEpO1xuICAgIGlmIChoYXNEYXRhICYmIGlzRGVmKGhvb2sgPSBpLmhvb2spICYmIGlzRGVmKGkgPSBob29rLnByZXBhdGNoKSkge1xuICAgICAgaShvbGRWbm9kZSwgdm5vZGUpO1xuICAgIH1cbiAgICB2YXIgZWxtID0gdm5vZGUuZWxtID0gb2xkVm5vZGUuZWxtO1xuICAgIHZhciBvbGRDaCA9IG9sZFZub2RlLmNoaWxkcmVuO1xuICAgIHZhciBjaCA9IHZub2RlLmNoaWxkcmVuO1xuICAgIGlmIChoYXNEYXRhKSB7XG4gICAgICBmb3IgKGkgPSAwOyBpIDwgY2JzLnVwZGF0ZS5sZW5ndGg7ICsraSkge1xuICAgICAgICBjYnMudXBkYXRlW2ldKG9sZFZub2RlLCB2bm9kZSk7XG4gICAgICB9aWYgKGlzRGVmKGhvb2spICYmIGlzRGVmKGkgPSBob29rLnVwZGF0ZSkpIGkob2xkVm5vZGUsIHZub2RlKTtcbiAgICB9XG4gICAgaWYgKGlzVW5kZWYodm5vZGUudGV4dCkpIHtcbiAgICAgIGlmIChpc0RlZihvbGRDaCkgJiYgaXNEZWYoY2gpKSB7XG4gICAgICAgIGlmIChvbGRDaCAhPT0gY2gpIHVwZGF0ZUNoaWxkcmVuKGVsbSwgb2xkQ2gsIGNoLCBpbnNlcnRlZFZub2RlUXVldWUpO1xuICAgICAgfSBlbHNlIGlmIChpc0RlZihjaCkpIHtcbiAgICAgICAgaWYgKGlzRGVmKG9sZFZub2RlLnRleHQpKSBub2RlT3BzLnNldFRleHRDb250ZW50KGVsbSwgJycpO1xuICAgICAgICBhZGRWbm9kZXMoZWxtLCBudWxsLCBjaCwgMCwgY2gubGVuZ3RoIC0gMSwgaW5zZXJ0ZWRWbm9kZVF1ZXVlKTtcbiAgICAgIH0gZWxzZSBpZiAoaXNEZWYob2xkQ2gpKSB7XG4gICAgICAgIHJlbW92ZVZub2RlcyhlbG0sIG9sZENoLCAwLCBvbGRDaC5sZW5ndGggLSAxKTtcbiAgICAgIH0gZWxzZSBpZiAoaXNEZWYob2xkVm5vZGUudGV4dCkpIHtcbiAgICAgICAgbm9kZU9wcy5zZXRUZXh0Q29udGVudChlbG0sICcnKTtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKG9sZFZub2RlLnRleHQgIT09IHZub2RlLnRleHQpIHtcbiAgICAgIG5vZGVPcHMuc2V0VGV4dENvbnRlbnQoZWxtLCB2bm9kZS50ZXh0KTtcbiAgICB9XG4gICAgaWYgKGhhc0RhdGEpIHtcbiAgICAgIGZvciAoaSA9IDA7IGkgPCBjYnMucG9zdHBhdGNoLmxlbmd0aDsgKytpKSB7XG4gICAgICAgIGNicy5wb3N0cGF0Y2hbaV0ob2xkVm5vZGUsIHZub2RlKTtcbiAgICAgIH1pZiAoaXNEZWYoaG9vaykgJiYgaXNEZWYoaSA9IGhvb2sucG9zdHBhdGNoKSkgaShvbGRWbm9kZSwgdm5vZGUpO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGludm9rZUluc2VydEhvb2socXVldWUpIHtcbiAgICBmb3IgKHZhciBfaTIgPSAwOyBfaTIgPCBxdWV1ZS5sZW5ndGg7ICsrX2kyKSB7XG4gICAgICBxdWV1ZVtfaTJdLmRhdGEuaG9vay5pbnNlcnQocXVldWVbX2kyXSk7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gaHlkcmF0ZShlbG0sIHZub2RlLCBpbnNlcnRlZFZub2RlUXVldWUpIHtcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgaWYgKCFhc3NlcnROb2RlTWF0Y2goZWxtLCB2bm9kZSkpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgIH1cbiAgICB2bm9kZS5lbG0gPSBlbG07XG4gICAgdmFyIHRhZyA9IHZub2RlLnRhZztcbiAgICB2YXIgZGF0YSA9IHZub2RlLmRhdGE7XG4gICAgdmFyIGNoaWxkcmVuID0gdm5vZGUuY2hpbGRyZW47XG5cbiAgICBpZiAoaXNEZWYoZGF0YSkpIHtcbiAgICAgIGlmIChpc0RlZihpID0gZGF0YS5ob29rKSAmJiBpc0RlZihpID0gaS5pbml0KSkgaSh2bm9kZSwgdHJ1ZSAvKiBoeWRyYXRpbmcgKi8pO1xuICAgICAgaWYgKGlzRGVmKGkgPSB2bm9kZS5jaGlsZCkpIHtcbiAgICAgICAgLy8gY2hpbGQgY29tcG9uZW50LiBpdCBzaG91bGQgaGF2ZSBoeWRyYXRlZCBpdHMgb3duIHRyZWUuXG4gICAgICAgIGludm9rZUNyZWF0ZUhvb2tzKHZub2RlLCBpbnNlcnRlZFZub2RlUXVldWUpO1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKGlzRGVmKHRhZykpIHtcbiAgICAgIGlmIChpc0RlZihjaGlsZHJlbikpIHtcbiAgICAgICAgdmFyIGNoaWxkTm9kZXMgPSBub2RlT3BzLmNoaWxkTm9kZXMoZWxtKTtcbiAgICAgICAgZm9yICh2YXIgX2kzID0gMDsgX2kzIDwgY2hpbGRyZW4ubGVuZ3RoOyBfaTMrKykge1xuICAgICAgICAgIHZhciBzdWNjZXNzID0gaHlkcmF0ZShjaGlsZE5vZGVzW19pM10sIGNoaWxkcmVuW19pM10sIGluc2VydGVkVm5vZGVRdWV1ZSk7XG4gICAgICAgICAgaWYgKCFzdWNjZXNzKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoaXNEZWYoZGF0YSkpIHtcbiAgICAgICAgaW52b2tlQ3JlYXRlSG9va3Modm5vZGUsIGluc2VydGVkVm5vZGVRdWV1ZSk7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgZnVuY3Rpb24gYXNzZXJ0Tm9kZU1hdGNoKG5vZGUsIHZub2RlKSB7XG4gICAgaWYgKHZub2RlLnRhZykge1xuICAgICAgaWYgKHZub2RlLnRhZy5pbmRleE9mKCd2dWUtY29tcG9uZW50JykgPT09IDApIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB2YXIgY2hpbGROb2RlcyA9IG5vZGVPcHMuY2hpbGROb2Rlcyhub2RlKTtcbiAgICAgICAgcmV0dXJuIHZub2RlLnRhZyA9PT0gbm9kZU9wcy50YWdOYW1lKG5vZGUpLnRvTG93ZXJDYXNlKCkgJiYgKHZub2RlLmNoaWxkcmVuID8gdm5vZGUuY2hpbGRyZW4ubGVuZ3RoID09PSBjaGlsZE5vZGVzLmxlbmd0aCA6IGNoaWxkTm9kZXMubGVuZ3RoID09PSAwKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIF90b1N0cmluZyh2bm9kZS50ZXh0KSA9PT0gbm9kZS5kYXRhO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBmdW5jdGlvbiBwYXRjaChvbGRWbm9kZSwgdm5vZGUsIGh5ZHJhdGluZykge1xuICAgIHZhciBlbG0gPSB2b2lkIDAsXG4gICAgICAgIHBhcmVudCA9IHZvaWQgMDtcbiAgICB2YXIgaW5zZXJ0ZWRWbm9kZVF1ZXVlID0gW107XG5cbiAgICBpZiAoIW9sZFZub2RlKSB7XG4gICAgICAvLyBlbXB0eSBtb3VudCwgY3JlYXRlIG5ldyByb290IGVsZW1lbnRcbiAgICAgIGNyZWF0ZUVsbSh2bm9kZSwgaW5zZXJ0ZWRWbm9kZVF1ZXVlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIGlzUmVhbEVsZW1lbnQgPSBpc0RlZihvbGRWbm9kZS5ub2RlVHlwZSk7XG4gICAgICBpZiAoIWlzUmVhbEVsZW1lbnQgJiYgc2FtZVZub2RlKG9sZFZub2RlLCB2bm9kZSkpIHtcbiAgICAgICAgcGF0Y2hWbm9kZShvbGRWbm9kZSwgdm5vZGUsIGluc2VydGVkVm5vZGVRdWV1ZSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpZiAoaXNSZWFsRWxlbWVudCkge1xuICAgICAgICAgIC8vIG1vdW50aW5nIHRvIGEgcmVhbCBlbGVtZW50XG4gICAgICAgICAgLy8gY2hlY2sgaWYgdGhpcyBpcyBzZXJ2ZXItcmVuZGVyZWQgY29udGVudCBhbmQgaWYgd2UgY2FuIHBlcmZvcm1cbiAgICAgICAgICAvLyBhIHN1Y2Nlc3NmdWwgaHlkcmF0aW9uLlxuICAgICAgICAgIGlmIChvbGRWbm9kZS5oYXNBdHRyaWJ1dGUoJ3NlcnZlci1yZW5kZXJlZCcpKSB7XG4gICAgICAgICAgICBvbGRWbm9kZS5yZW1vdmVBdHRyaWJ1dGUoJ3NlcnZlci1yZW5kZXJlZCcpO1xuICAgICAgICAgICAgaHlkcmF0aW5nID0gdHJ1ZTtcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKGh5ZHJhdGluZykge1xuICAgICAgICAgICAgaWYgKGh5ZHJhdGUob2xkVm5vZGUsIHZub2RlLCBpbnNlcnRlZFZub2RlUXVldWUpKSB7XG4gICAgICAgICAgICAgIGludm9rZUluc2VydEhvb2soaW5zZXJ0ZWRWbm9kZVF1ZXVlKTtcbiAgICAgICAgICAgICAgcmV0dXJuIG9sZFZub2RlO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgICAgIHdhcm4oJ1RoZSBjbGllbnQtc2lkZSByZW5kZXJlZCB2aXJ0dWFsIERPTSB0cmVlIGlzIG5vdCBtYXRjaGluZyAnICsgJ3NlcnZlci1yZW5kZXJlZCBjb250ZW50LiBCYWlsaW5nIGh5ZHJhdGlvbiBhbmQgcGVyZm9ybWluZyAnICsgJ2Z1bGwgY2xpZW50LXNpZGUgcmVuZGVyLicpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICAvLyBlaXRoZXIgbm90IHNlcnZlci1yZW5kZXJlZCwgb3IgaHlkcmF0aW9uIGZhaWxlZC5cbiAgICAgICAgICAvLyBjcmVhdGUgYW4gZW1wdHkgbm9kZSBhbmQgcmVwbGFjZSBpdFxuICAgICAgICAgIG9sZFZub2RlID0gZW1wdHlOb2RlQXQob2xkVm5vZGUpO1xuICAgICAgICB9XG4gICAgICAgIGVsbSA9IG9sZFZub2RlLmVsbTtcbiAgICAgICAgcGFyZW50ID0gbm9kZU9wcy5wYXJlbnROb2RlKGVsbSk7XG5cbiAgICAgICAgY3JlYXRlRWxtKHZub2RlLCBpbnNlcnRlZFZub2RlUXVldWUpO1xuXG4gICAgICAgIC8vIGNvbXBvbmVudCByb290IGVsZW1lbnQgcmVwbGFjZWQuXG4gICAgICAgIC8vIHVwZGF0ZSBwYXJlbnQgcGxhY2Vob2xkZXIgbm9kZSBlbGVtZW50LlxuICAgICAgICBpZiAodm5vZGUucGFyZW50KSB7XG4gICAgICAgICAgdm5vZGUucGFyZW50LmVsbSA9IHZub2RlLmVsbTtcbiAgICAgICAgICBmb3IgKHZhciBfaTQgPSAwOyBfaTQgPCBjYnMuY3JlYXRlLmxlbmd0aDsgKytfaTQpIHtcbiAgICAgICAgICAgIGNicy5jcmVhdGVbX2k0XShlbXB0eU5vZGUsIHZub2RlLnBhcmVudCk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHBhcmVudCAhPT0gbnVsbCkge1xuICAgICAgICAgIG5vZGVPcHMuaW5zZXJ0QmVmb3JlKHBhcmVudCwgdm5vZGUuZWxtLCBub2RlT3BzLm5leHRTaWJsaW5nKGVsbSkpO1xuICAgICAgICAgIHJlbW92ZVZub2RlcyhwYXJlbnQsIFtvbGRWbm9kZV0sIDAsIDApO1xuICAgICAgICB9IGVsc2UgaWYgKGlzRGVmKG9sZFZub2RlLnRhZykpIHtcbiAgICAgICAgICBpbnZva2VEZXN0cm95SG9vayhvbGRWbm9kZSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBpbnZva2VJbnNlcnRIb29rKGluc2VydGVkVm5vZGVRdWV1ZSk7XG4gICAgcmV0dXJuIHZub2RlLmVsbTtcbiAgfTtcbn1cblxudmFyIGRpcmVjdGl2ZXMgPSB7XG4gIGNyZWF0ZTogZnVuY3Rpb24gYmluZERpcmVjdGl2ZXMob2xkVm5vZGUsIHZub2RlKSB7XG4gICAgYXBwbHlEaXJlY3RpdmVzKG9sZFZub2RlLCB2bm9kZSwgJ2JpbmQnKTtcbiAgfSxcbiAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGVEaXJlY3RpdmVzKG9sZFZub2RlLCB2bm9kZSkge1xuICAgIGFwcGx5RGlyZWN0aXZlcyhvbGRWbm9kZSwgdm5vZGUsICd1cGRhdGUnKTtcbiAgfSxcbiAgcG9zdHBhdGNoOiBmdW5jdGlvbiBwb3N0dXBkYXRlRGlyZWN0aXZlcyhvbGRWbm9kZSwgdm5vZGUpIHtcbiAgICBhcHBseURpcmVjdGl2ZXMob2xkVm5vZGUsIHZub2RlLCAnY29tcG9uZW50VXBkYXRlZCcpO1xuICB9LFxuICBkZXN0cm95OiBmdW5jdGlvbiB1bmJpbmREaXJlY3RpdmVzKHZub2RlKSB7XG4gICAgYXBwbHlEaXJlY3RpdmVzKHZub2RlLCB2bm9kZSwgJ3VuYmluZCcpO1xuICB9XG59O1xuXG52YXIgZW1wdHlNb2RpZmllcnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuXG5mdW5jdGlvbiBhcHBseURpcmVjdGl2ZXMob2xkVm5vZGUsIHZub2RlLCBob29rKSB7XG4gIHZhciBkaXJzID0gdm5vZGUuZGF0YS5kaXJlY3RpdmVzO1xuICBpZiAoZGlycykge1xuICAgIHZhciBvbGREaXJzID0gb2xkVm5vZGUuZGF0YS5kaXJlY3RpdmVzO1xuICAgIHZhciBpc1VwZGF0ZSA9IGhvb2sgPT09ICd1cGRhdGUnO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgZGlycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGRpciA9IGRpcnNbaV07XG4gICAgICB2YXIgZGVmID0gcmVzb2x2ZUFzc2V0KHZub2RlLmNvbnRleHQuJG9wdGlvbnMsICdkaXJlY3RpdmVzJywgZGlyLm5hbWUsIHRydWUpO1xuICAgICAgdmFyIGZuID0gZGVmICYmIGRlZltob29rXTtcbiAgICAgIGlmIChmbikge1xuICAgICAgICBpZiAoaXNVcGRhdGUgJiYgb2xkRGlycykge1xuICAgICAgICAgIGRpci5vbGRWYWx1ZSA9IG9sZERpcnNbaV0udmFsdWU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFkaXIubW9kaWZpZXJzKSB7XG4gICAgICAgICAgZGlyLm1vZGlmaWVycyA9IGVtcHR5TW9kaWZpZXJzO1xuICAgICAgICB9XG4gICAgICAgIGZuKHZub2RlLmVsbSwgZGlyLCB2bm9kZSwgb2xkVm5vZGUpO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG52YXIgcmVmID0ge1xuICBjcmVhdGU6IGZ1bmN0aW9uIGNyZWF0ZShfLCB2bm9kZSkge1xuICAgIHJlZ2lzdGVyUmVmKHZub2RlKTtcbiAgfSxcbiAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2xkVm5vZGUsIHZub2RlKSB7XG4gICAgaWYgKG9sZFZub2RlLmRhdGEucmVmICE9PSB2bm9kZS5kYXRhLnJlZikge1xuICAgICAgcmVnaXN0ZXJSZWYob2xkVm5vZGUsIHRydWUpO1xuICAgICAgcmVnaXN0ZXJSZWYodm5vZGUpO1xuICAgIH1cbiAgfSxcbiAgZGVzdHJveTogZnVuY3Rpb24gZGVzdHJveSh2bm9kZSkge1xuICAgIHJlZ2lzdGVyUmVmKHZub2RlLCB0cnVlKTtcbiAgfVxufTtcblxuZnVuY3Rpb24gcmVnaXN0ZXJSZWYodm5vZGUsIGlzUmVtb3ZhbCkge1xuICB2YXIga2V5ID0gdm5vZGUuZGF0YS5yZWY7XG4gIGlmICgha2V5KSByZXR1cm47XG5cbiAgdmFyIHZtID0gdm5vZGUuY29udGV4dDtcbiAgdmFyIHJlZiA9IHZub2RlLmNoaWxkIHx8IHZub2RlLmVsbTtcbiAgdmFyIHJlZnMgPSB2bS4kcmVmcztcbiAgaWYgKGlzUmVtb3ZhbCkge1xuICAgIGlmIChBcnJheS5pc0FycmF5KHJlZnNba2V5XSkpIHtcbiAgICAgIHJlbW92ZShyZWZzW2tleV0sIHJlZik7XG4gICAgfSBlbHNlIGlmIChyZWZzW2tleV0gPT09IHJlZikge1xuICAgICAgcmVmc1trZXldID0gdW5kZWZpbmVkO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICBpZiAodm5vZGUuZGF0YS5yZWZJbkZvcikge1xuICAgICAgaWYgKEFycmF5LmlzQXJyYXkocmVmc1trZXldKSkge1xuICAgICAgICByZWZzW2tleV0ucHVzaChyZWYpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmVmc1trZXldID0gW3JlZl07XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHJlZnNba2V5XSA9IHJlZjtcbiAgICB9XG4gIH1cbn1cblxudmFyIGJhc2VNb2R1bGVzID0gW3JlZiwgZGlyZWN0aXZlc107XG5cbmZ1bmN0aW9uIHVwZGF0ZUF0dHJzKG9sZFZub2RlLCB2bm9kZSkge1xuICBpZiAoIW9sZFZub2RlLmRhdGEuYXR0cnMgJiYgIXZub2RlLmRhdGEuYXR0cnMpIHtcbiAgICByZXR1cm47XG4gIH1cbiAgdmFyIGtleSA9IHZvaWQgMCxcbiAgICAgIGN1ciA9IHZvaWQgMCxcbiAgICAgIG9sZCA9IHZvaWQgMDtcbiAgdmFyIGVsbSA9IHZub2RlLmVsbTtcbiAgdmFyIG9sZEF0dHJzID0gb2xkVm5vZGUuZGF0YS5hdHRycyB8fCB7fTtcbiAgdmFyIGF0dHJzID0gdm5vZGUuZGF0YS5hdHRycyB8fCB7fTtcblxuICBmb3IgKGtleSBpbiBhdHRycykge1xuICAgIGN1ciA9IGF0dHJzW2tleV07XG4gICAgb2xkID0gb2xkQXR0cnNba2V5XTtcbiAgICBpZiAob2xkICE9PSBjdXIpIHtcbiAgICAgIHNldEF0dHIoZWxtLCBrZXksIGN1cik7XG4gICAgfVxuICB9XG4gIGZvciAoa2V5IGluIG9sZEF0dHJzKSB7XG4gICAgaWYgKGF0dHJzW2tleV0gPT0gbnVsbCkge1xuICAgICAgaWYgKGlzWGxpbmsoa2V5KSkge1xuICAgICAgICBlbG0ucmVtb3ZlQXR0cmlidXRlTlMoeGxpbmtOUywgZ2V0WGxpbmtQcm9wKGtleSkpO1xuICAgICAgfSBlbHNlIGlmICghaXNFbnVtZXJhdGVkQXR0cihrZXkpKSB7XG4gICAgICAgIGVsbS5yZW1vdmVBdHRyaWJ1dGUoa2V5KTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gc2V0QXR0cihlbCwga2V5LCB2YWx1ZSkge1xuICBpZiAoaXNCb29sZWFuQXR0cihrZXkpKSB7XG4gICAgLy8gc2V0IGF0dHJpYnV0ZSBmb3IgYmxhbmsgdmFsdWVcbiAgICAvLyBlLmcuIDxvcHRpb24gZGlzYWJsZWQ+U2VsZWN0IG9uZTwvb3B0aW9uPlxuICAgIGlmIChpc0ZhbHN5QXR0clZhbHVlKHZhbHVlKSkge1xuICAgICAgZWwucmVtb3ZlQXR0cmlidXRlKGtleSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGVsLnNldEF0dHJpYnV0ZShrZXksIGtleSk7XG4gICAgfVxuICB9IGVsc2UgaWYgKGlzRW51bWVyYXRlZEF0dHIoa2V5KSkge1xuICAgIGVsLnNldEF0dHJpYnV0ZShrZXksIGlzRmFsc3lBdHRyVmFsdWUodmFsdWUpIHx8IHZhbHVlID09PSAnZmFsc2UnID8gJ2ZhbHNlJyA6ICd0cnVlJyk7XG4gIH0gZWxzZSBpZiAoaXNYbGluayhrZXkpKSB7XG4gICAgaWYgKGlzRmFsc3lBdHRyVmFsdWUodmFsdWUpKSB7XG4gICAgICBlbC5yZW1vdmVBdHRyaWJ1dGVOUyh4bGlua05TLCBnZXRYbGlua1Byb3Aoa2V5KSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGVsLnNldEF0dHJpYnV0ZU5TKHhsaW5rTlMsIGtleSwgdmFsdWUpO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICBpZiAoaXNGYWxzeUF0dHJWYWx1ZSh2YWx1ZSkpIHtcbiAgICAgIGVsLnJlbW92ZUF0dHJpYnV0ZShrZXkpO1xuICAgIH0gZWxzZSB7XG4gICAgICBlbC5zZXRBdHRyaWJ1dGUoa2V5LCB2YWx1ZSk7XG4gICAgfVxuICB9XG59XG5cbnZhciBhdHRycyA9IHtcbiAgY3JlYXRlOiBmdW5jdGlvbiBjcmVhdGUoXywgdm5vZGUpIHtcbiAgICB2YXIgYXR0cnMgPSB2bm9kZS5kYXRhLnN0YXRpY0F0dHJzO1xuICAgIGlmIChhdHRycykge1xuICAgICAgZm9yICh2YXIga2V5IGluIGF0dHJzKSB7XG4gICAgICAgIHNldEF0dHIodm5vZGUuZWxtLCBrZXksIGF0dHJzW2tleV0pO1xuICAgICAgfVxuICAgIH1cbiAgICB1cGRhdGVBdHRycyhfLCB2bm9kZSk7XG4gIH0sXG4gIHVwZGF0ZTogdXBkYXRlQXR0cnNcbn07XG5cbmZ1bmN0aW9uIHVwZGF0ZUNsYXNzKG9sZFZub2RlLCB2bm9kZSkge1xuICB2YXIgZWwgPSB2bm9kZS5lbG07XG4gIHZhciBkYXRhID0gdm5vZGUuZGF0YTtcbiAgaWYgKCFkYXRhLnN0YXRpY0NsYXNzICYmICFkYXRhLmNsYXNzKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgdmFyIGNscyA9IGdlbkNsYXNzRm9yVm5vZGUodm5vZGUpO1xuXG4gIC8vIGhhbmRsZSB0cmFuc2l0aW9uIGNsYXNzZXNcbiAgdmFyIHRyYW5zaXRpb25DbGFzcyA9IGVsLl90cmFuc2l0aW9uQ2xhc3NlcztcbiAgaWYgKHRyYW5zaXRpb25DbGFzcykge1xuICAgIGNscyA9IGNvbmNhdChjbHMsIHN0cmluZ2lmeUNsYXNzKHRyYW5zaXRpb25DbGFzcykpO1xuICB9XG5cbiAgLy8gc2V0IHRoZSBjbGFzc1xuICBpZiAoY2xzICE9PSBlbC5fcHJldkNsYXNzKSB7XG4gICAgZWwuc2V0QXR0cmlidXRlKCdjbGFzcycsIGNscyk7XG4gICAgZWwuX3ByZXZDbGFzcyA9IGNscztcbiAgfVxufVxuXG52YXIga2xhc3MgPSB7XG4gIGNyZWF0ZTogdXBkYXRlQ2xhc3MsXG4gIHVwZGF0ZTogdXBkYXRlQ2xhc3Ncbn07XG5cbmZ1bmN0aW9uIHVwZGF0ZURPTUxpc3RlbmVycyhvbGRWbm9kZSwgdm5vZGUpIHtcbiAgaWYgKCFvbGRWbm9kZS5kYXRhLm9uICYmICF2bm9kZS5kYXRhLm9uKSB7XG4gICAgcmV0dXJuO1xuICB9XG4gIHZhciBvbiA9IHZub2RlLmRhdGEub24gfHwge307XG4gIHZhciBvbGRPbiA9IG9sZFZub2RlLmRhdGEub24gfHwge307XG4gIHZhciBhZGQgPSB2bm9kZS5lbG0uX3ZfYWRkIHx8ICh2bm9kZS5lbG0uX3ZfYWRkID0gZnVuY3Rpb24gKGV2ZW50LCBoYW5kbGVyLCBjYXB0dXJlKSB7XG4gICAgdm5vZGUuZWxtLmFkZEV2ZW50TGlzdGVuZXIoZXZlbnQsIGhhbmRsZXIsIGNhcHR1cmUpO1xuICB9KTtcbiAgdmFyIHJlbW92ZSA9IHZub2RlLmVsbS5fdl9yZW1vdmUgfHwgKHZub2RlLmVsbS5fdl9yZW1vdmUgPSBmdW5jdGlvbiAoZXZlbnQsIGhhbmRsZXIpIHtcbiAgICB2bm9kZS5lbG0ucmVtb3ZlRXZlbnRMaXN0ZW5lcihldmVudCwgaGFuZGxlcik7XG4gIH0pO1xuICB1cGRhdGVMaXN0ZW5lcnMob24sIG9sZE9uLCBhZGQsIHJlbW92ZSk7XG59XG5cbnZhciBldmVudHMgPSB7XG4gIGNyZWF0ZTogdXBkYXRlRE9NTGlzdGVuZXJzLFxuICB1cGRhdGU6IHVwZGF0ZURPTUxpc3RlbmVyc1xufTtcblxuZnVuY3Rpb24gdXBkYXRlUHJvcHMob2xkVm5vZGUsIHZub2RlKSB7XG4gIGlmICghb2xkVm5vZGUuZGF0YS5wcm9wcyAmJiAhdm5vZGUuZGF0YS5wcm9wcykge1xuICAgIHJldHVybjtcbiAgfVxuICB2YXIga2V5ID0gdm9pZCAwLFxuICAgICAgY3VyID0gdm9pZCAwO1xuICB2YXIgZWxtID0gdm5vZGUuZWxtO1xuICB2YXIgb2xkUHJvcHMgPSBvbGRWbm9kZS5kYXRhLnByb3BzIHx8IHt9O1xuICB2YXIgcHJvcHMgPSB2bm9kZS5kYXRhLnByb3BzIHx8IHt9O1xuXG4gIGZvciAoa2V5IGluIG9sZFByb3BzKSB7XG4gICAgaWYgKHByb3BzW2tleV0gPT0gbnVsbCkge1xuICAgICAgZWxtW2tleV0gPSB1bmRlZmluZWQ7XG4gICAgfVxuICB9XG4gIGZvciAoa2V5IGluIHByb3BzKSB7XG4gICAgY3VyID0gcHJvcHNba2V5XTtcbiAgICBpZiAoa2V5ID09PSAndmFsdWUnKSB7XG4gICAgICAvLyBzdG9yZSB2YWx1ZSBhcyBfdmFsdWUgYXMgd2VsbCBzaW5jZVxuICAgICAgLy8gbm9uLXN0cmluZyB2YWx1ZXMgd2lsbCBiZSBzdHJpbmdpZmllZFxuICAgICAgZWxtLl92YWx1ZSA9IGN1cjtcbiAgICAgIC8vIGF2b2lkIHJlc2V0dGluZyBjdXJzb3IgcG9zaXRpb24gd2hlbiB2YWx1ZSBpcyB0aGUgc2FtZVxuICAgICAgaWYgKGVsbS52YWx1ZSAhPSBjdXIpIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbGluZVxuICAgICAgICBlbG0udmFsdWUgPSBjdXI7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGVsbVtrZXldID0gY3VyO1xuICAgIH1cbiAgfVxufVxuXG52YXIgcHJvcHMgPSB7XG4gIGNyZWF0ZTogdXBkYXRlUHJvcHMsXG4gIHVwZGF0ZTogdXBkYXRlUHJvcHNcbn07XG5cbnZhciBwcmVmaXhlcyA9IFsnV2Via2l0JywgJ01veicsICdtcyddO1xuXG52YXIgdGVzdEVsID0gdm9pZCAwO1xudmFyIG5vcm1hbGl6ZSA9IGNhY2hlZChmdW5jdGlvbiAocHJvcCkge1xuICB0ZXN0RWwgPSB0ZXN0RWwgfHwgZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIHByb3AgPSBjYW1lbGl6ZShwcm9wKTtcbiAgaWYgKHByb3AgIT09ICdmaWx0ZXInICYmIHByb3AgaW4gdGVzdEVsLnN0eWxlKSB7XG4gICAgcmV0dXJuIHByb3A7XG4gIH1cbiAgdmFyIHVwcGVyID0gcHJvcC5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIHByb3Auc2xpY2UoMSk7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgcHJlZml4ZXMubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgcHJlZml4ZWQgPSBwcmVmaXhlc1tpXSArIHVwcGVyO1xuICAgIGlmIChwcmVmaXhlZCBpbiB0ZXN0RWwuc3R5bGUpIHtcbiAgICAgIHJldHVybiBwcmVmaXhlZDtcbiAgICB9XG4gIH1cbn0pO1xuXG5mdW5jdGlvbiB1cGRhdGVTdHlsZShvbGRWbm9kZSwgdm5vZGUpIHtcbiAgaWYgKCFvbGRWbm9kZS5kYXRhLnN0eWxlICYmICF2bm9kZS5kYXRhLnN0eWxlKSB7XG4gICAgcmV0dXJuO1xuICB9XG4gIHZhciBjdXIgPSB2b2lkIDAsXG4gICAgICBuYW1lID0gdm9pZCAwO1xuICB2YXIgZWxtID0gdm5vZGUuZWxtO1xuICB2YXIgb2xkU3R5bGUgPSBvbGRWbm9kZS5kYXRhLnN0eWxlIHx8IHt9O1xuICB2YXIgc3R5bGUgPSB2bm9kZS5kYXRhLnN0eWxlIHx8IHt9O1xuXG4gIC8vIGhhbmRsZSBhcnJheSBzeW50YXhcbiAgaWYgKEFycmF5LmlzQXJyYXkoc3R5bGUpKSB7XG4gICAgc3R5bGUgPSB2bm9kZS5kYXRhLnN0eWxlID0gdG9PYmplY3Qoc3R5bGUpO1xuICB9XG5cbiAgZm9yIChuYW1lIGluIG9sZFN0eWxlKSB7XG4gICAgaWYgKCFzdHlsZVtuYW1lXSkge1xuICAgICAgZWxtLnN0eWxlW25vcm1hbGl6ZShuYW1lKV0gPSAnJztcbiAgICB9XG4gIH1cbiAgZm9yIChuYW1lIGluIHN0eWxlKSB7XG4gICAgY3VyID0gc3R5bGVbbmFtZV07XG4gICAgaWYgKGN1ciAhPT0gb2xkU3R5bGVbbmFtZV0pIHtcbiAgICAgIC8vIGllOSBzZXR0aW5nIHRvIG51bGwgaGFzIG5vIGVmZmVjdCwgbXVzdCB1c2UgZW1wdHkgc3RyaW5nXG4gICAgICBlbG0uc3R5bGVbbm9ybWFsaXplKG5hbWUpXSA9IGN1ciB8fCAnJztcbiAgICB9XG4gIH1cbiAgLy8gY2xvbmUgdGhlIHN0eWxlIGZvciBmdXR1cmUgdXBkYXRlcyxcbiAgLy8gaW4gY2FzZSB0aGUgdXNlciBtdXRhdGVzIHRoZSBzdHlsZSBvYmplY3QgaW4tcGxhY2UuXG4gIHZub2RlLmRhdGEuc3R5bGUgPSBleHRlbmQoe30sIHN0eWxlKTtcbn1cblxudmFyIHN0eWxlID0ge1xuICBjcmVhdGU6IHVwZGF0ZVN0eWxlLFxuICB1cGRhdGU6IHVwZGF0ZVN0eWxlXG59O1xuXG4vKipcbiAqIEFkZCBjbGFzcyB3aXRoIGNvbXBhdGliaWxpdHkgZm9yIFNWRyBzaW5jZSBjbGFzc0xpc3QgaXMgbm90IHN1cHBvcnRlZCBvblxuICogU1ZHIGVsZW1lbnRzIGluIElFXG4gKi9cbmZ1bmN0aW9uIGFkZENsYXNzKGVsLCBjbHMpIHtcbiAgLyogaXN0YW5idWwgaWdub3JlIGVsc2UgKi9cbiAgaWYgKGVsLmNsYXNzTGlzdCkge1xuICAgIGlmIChjbHMuaW5kZXhPZignICcpID4gLTEpIHtcbiAgICAgIGNscy5zcGxpdCgvXFxzKy8pLmZvckVhY2goZnVuY3Rpb24gKGMpIHtcbiAgICAgICAgcmV0dXJuIGVsLmNsYXNzTGlzdC5hZGQoYyk7XG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgZWwuY2xhc3NMaXN0LmFkZChjbHMpO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICB2YXIgY3VyID0gJyAnICsgZWwuZ2V0QXR0cmlidXRlKCdjbGFzcycpICsgJyAnO1xuICAgIGlmIChjdXIuaW5kZXhPZignICcgKyBjbHMgKyAnICcpIDwgMCkge1xuICAgICAgZWwuc2V0QXR0cmlidXRlKCdjbGFzcycsIChjdXIgKyBjbHMpLnRyaW0oKSk7XG4gICAgfVxuICB9XG59XG5cbi8qKlxuICogUmVtb3ZlIGNsYXNzIHdpdGggY29tcGF0aWJpbGl0eSBmb3IgU1ZHIHNpbmNlIGNsYXNzTGlzdCBpcyBub3Qgc3VwcG9ydGVkIG9uXG4gKiBTVkcgZWxlbWVudHMgaW4gSUVcbiAqL1xuZnVuY3Rpb24gcmVtb3ZlQ2xhc3MoZWwsIGNscykge1xuICAvKiBpc3RhbmJ1bCBpZ25vcmUgZWxzZSAqL1xuICBpZiAoZWwuY2xhc3NMaXN0KSB7XG4gICAgaWYgKGNscy5pbmRleE9mKCcgJykgPiAtMSkge1xuICAgICAgY2xzLnNwbGl0KC9cXHMrLykuZm9yRWFjaChmdW5jdGlvbiAoYykge1xuICAgICAgICByZXR1cm4gZWwuY2xhc3NMaXN0LnJlbW92ZShjKTtcbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBlbC5jbGFzc0xpc3QucmVtb3ZlKGNscyk7XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIHZhciBjdXIgPSAnICcgKyBlbC5nZXRBdHRyaWJ1dGUoJ2NsYXNzJykgKyAnICc7XG4gICAgdmFyIHRhciA9ICcgJyArIGNscyArICcgJztcbiAgICB3aGlsZSAoY3VyLmluZGV4T2YodGFyKSA+PSAwKSB7XG4gICAgICBjdXIgPSBjdXIucmVwbGFjZSh0YXIsICcgJyk7XG4gICAgfVxuICAgIGVsLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCBjdXIudHJpbSgpKTtcbiAgfVxufVxuXG52YXIgaGFzVHJhbnNpdGlvbiA9IGluQnJvd3NlciAmJiAhaXNJRTk7XG52YXIgVFJBTlNJVElPTiA9ICd0cmFuc2l0aW9uJztcbnZhciBBTklNQVRJT04gPSAnYW5pbWF0aW9uJztcblxuLy8gVHJhbnNpdGlvbiBwcm9wZXJ0eS9ldmVudCBzbmlmZmluZ1xudmFyIHRyYW5zaXRpb25Qcm9wID0gJ3RyYW5zaXRpb24nO1xudmFyIHRyYW5zaXRpb25FbmRFdmVudCA9ICd0cmFuc2l0aW9uZW5kJztcbnZhciBhbmltYXRpb25Qcm9wID0gJ2FuaW1hdGlvbic7XG52YXIgYW5pbWF0aW9uRW5kRXZlbnQgPSAnYW5pbWF0aW9uZW5kJztcbmlmIChoYXNUcmFuc2l0aW9uKSB7XG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAqL1xuICBpZiAod2luZG93Lm9udHJhbnNpdGlvbmVuZCA9PT0gdW5kZWZpbmVkICYmIHdpbmRvdy5vbndlYmtpdHRyYW5zaXRpb25lbmQgIT09IHVuZGVmaW5lZCkge1xuICAgIHRyYW5zaXRpb25Qcm9wID0gJ1dlYmtpdFRyYW5zaXRpb24nO1xuICAgIHRyYW5zaXRpb25FbmRFdmVudCA9ICd3ZWJraXRUcmFuc2l0aW9uRW5kJztcbiAgfVxuICBpZiAod2luZG93Lm9uYW5pbWF0aW9uZW5kID09PSB1bmRlZmluZWQgJiYgd2luZG93Lm9ud2Via2l0YW5pbWF0aW9uZW5kICE9PSB1bmRlZmluZWQpIHtcbiAgICBhbmltYXRpb25Qcm9wID0gJ1dlYmtpdEFuaW1hdGlvbic7XG4gICAgYW5pbWF0aW9uRW5kRXZlbnQgPSAnd2Via2l0QW5pbWF0aW9uRW5kJztcbiAgfVxufVxuXG52YXIgcmFmID0gaW5Ccm93c2VyICYmIHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUgfHwgc2V0VGltZW91dDtcbmZ1bmN0aW9uIG5leHRGcmFtZShmbikge1xuICByYWYoZnVuY3Rpb24gKCkge1xuICAgIHJhZihmbik7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBlbnRlcih2bm9kZSkge1xuICB2YXIgZWwgPSB2bm9kZS5lbG07XG4gIHZhciB2bSA9IHZub2RlLmNvbnRleHQ7XG4gIC8vIGNhbGwgbGVhdmUgY2FsbGJhY2sgbm93XG4gIGlmIChlbC5fbGVhdmVDYikge1xuICAgIGVsLl9sZWF2ZUNiLmNhbmNlbGxlZCA9IHRydWU7XG4gICAgZWwuX2xlYXZlQ2IoKTtcbiAgfVxuXG4gIHZhciBkYXRhID0gdm5vZGUuZGF0YS50cmFuc2l0aW9uO1xuICBpZiAoIWRhdGEpIHtcbiAgICByZXR1cm47XG4gIH1cblxuICB2YXIgX3Jlc29sdmVUcmFuc2l0aW9uID0gcmVzb2x2ZVRyYW5zaXRpb24oZGF0YSwgdm5vZGUuY29udGV4dCk7XG5cbiAgdmFyIGNzcyA9IF9yZXNvbHZlVHJhbnNpdGlvbi5jc3M7XG4gIHZhciBlbnRlckNsYXNzID0gX3Jlc29sdmVUcmFuc2l0aW9uLmVudGVyQ2xhc3M7XG4gIHZhciBlbnRlckFjdGl2ZUNsYXNzID0gX3Jlc29sdmVUcmFuc2l0aW9uLmVudGVyQWN0aXZlQ2xhc3M7XG4gIHZhciBhcHBlYXJDbGFzcyA9IF9yZXNvbHZlVHJhbnNpdGlvbi5hcHBlYXJDbGFzcztcbiAgdmFyIGFwcGVhckFjdGl2ZUNsYXNzID0gX3Jlc29sdmVUcmFuc2l0aW9uLmFwcGVhckFjdGl2ZUNsYXNzO1xuICB2YXIgYmVmb3JlRW50ZXIgPSBfcmVzb2x2ZVRyYW5zaXRpb24uYmVmb3JlRW50ZXI7XG4gIHZhciBlbnRlciA9IF9yZXNvbHZlVHJhbnNpdGlvbi5lbnRlcjtcbiAgdmFyIGFmdGVyRW50ZXIgPSBfcmVzb2x2ZVRyYW5zaXRpb24uYWZ0ZXJFbnRlcjtcbiAgdmFyIGVudGVyQ2FuY2VsbGVkID0gX3Jlc29sdmVUcmFuc2l0aW9uLmVudGVyQ2FuY2VsbGVkO1xuICB2YXIgYmVmb3JlQXBwZWFyID0gX3Jlc29sdmVUcmFuc2l0aW9uLmJlZm9yZUFwcGVhcjtcbiAgdmFyIGFwcGVhciA9IF9yZXNvbHZlVHJhbnNpdGlvbi5hcHBlYXI7XG4gIHZhciBhZnRlckFwcGVhciA9IF9yZXNvbHZlVHJhbnNpdGlvbi5hZnRlckFwcGVhcjtcbiAgdmFyIGFwcGVhckNhbmNlbGxlZCA9IF9yZXNvbHZlVHJhbnNpdGlvbi5hcHBlYXJDYW5jZWxsZWQ7XG5cblxuICB2YXIgaXNBcHBlYXIgPSAhdm5vZGUuY29udGV4dC4kcm9vdC5faXNNb3VudGVkO1xuICBpZiAoaXNBcHBlYXIgJiYgIWFwcGVhciAmJiBhcHBlYXIgIT09ICcnKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgdmFyIHN0YXJ0Q2xhc3MgPSBpc0FwcGVhciA/IGFwcGVhckNsYXNzIDogZW50ZXJDbGFzcztcbiAgdmFyIGFjdGl2ZUNsYXNzID0gaXNBcHBlYXIgPyBhcHBlYXJBY3RpdmVDbGFzcyA6IGVudGVyQWN0aXZlQ2xhc3M7XG4gIHZhciBiZWZvcmVFbnRlckhvb2sgPSBpc0FwcGVhciA/IGJlZm9yZUFwcGVhciB8fCBiZWZvcmVFbnRlciA6IGJlZm9yZUVudGVyO1xuICB2YXIgZW50ZXJIb29rID0gaXNBcHBlYXIgPyB0eXBlb2YgYXBwZWFyID09PSAnZnVuY3Rpb24nID8gYXBwZWFyIDogZW50ZXIgOiBlbnRlcjtcbiAgdmFyIGFmdGVyRW50ZXJIb29rID0gaXNBcHBlYXIgPyBhZnRlckFwcGVhciB8fCBhZnRlckVudGVyIDogYWZ0ZXJFbnRlcjtcbiAgdmFyIGVudGVyQ2FuY2VsbGVkSG9vayA9IGlzQXBwZWFyID8gYXBwZWFyQ2FuY2VsbGVkIHx8IGVudGVyQ2FuY2VsbGVkIDogZW50ZXJDYW5jZWxsZWQ7XG5cbiAgdmFyIGV4cGVjdHNDU1MgPSBjc3MgIT09IGZhbHNlO1xuICB2YXIgdXNlcldhbnRzQ29udHJvbCA9IGVudGVySG9vayAmJiBlbnRlckhvb2subGVuZ3RoID4gMjtcbiAgdmFyIGNiID0gZWwuX2VudGVyQ2IgPSBvbmNlKGZ1bmN0aW9uICgpIHtcbiAgICBpZiAoZXhwZWN0c0NTUykge1xuICAgICAgcmVtb3ZlVHJhbnNpdGlvbkNsYXNzKGVsLCBhY3RpdmVDbGFzcyk7XG4gICAgfVxuICAgIGlmIChjYi5jYW5jZWxsZWQpIHtcbiAgICAgIGlmIChleHBlY3RzQ1NTKSB7XG4gICAgICAgIHJlbW92ZVRyYW5zaXRpb25DbGFzcyhlbCwgc3RhcnRDbGFzcyk7XG4gICAgICB9XG4gICAgICBlbnRlckNhbmNlbGxlZEhvb2sgJiYgZW50ZXJDYW5jZWxsZWRIb29rKGVsLCB2bSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFmdGVyRW50ZXJIb29rICYmIGFmdGVyRW50ZXJIb29rKGVsLCB2bSk7XG4gICAgfVxuICAgIGVsLl9lbnRlckNiID0gbnVsbDtcbiAgfSk7XG5cbiAgYmVmb3JlRW50ZXJIb29rICYmIGJlZm9yZUVudGVySG9vayhlbCwgdm0pO1xuICBpZiAoZXhwZWN0c0NTUykge1xuICAgIGFkZFRyYW5zaXRpb25DbGFzcyhlbCwgc3RhcnRDbGFzcyk7XG4gICAgYWRkVHJhbnNpdGlvbkNsYXNzKGVsLCBhY3RpdmVDbGFzcyk7XG4gICAgbmV4dEZyYW1lKGZ1bmN0aW9uICgpIHtcbiAgICAgIHJlbW92ZVRyYW5zaXRpb25DbGFzcyhlbCwgc3RhcnRDbGFzcyk7XG4gICAgICBpZiAoIWNiLmNhbmNlbGxlZCAmJiAhdXNlcldhbnRzQ29udHJvbCkge1xuICAgICAgICB3aGVuVHJhbnNpdGlvbkVuZHMoZWwsIGNiKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuICBlbnRlckhvb2sgJiYgZW50ZXJIb29rKGVsLCB2bSwgY2IpO1xuICBpZiAoIWV4cGVjdHNDU1MgJiYgIXVzZXJXYW50c0NvbnRyb2wpIHtcbiAgICBjYigpO1xuICB9XG59XG5cbmZ1bmN0aW9uIGxlYXZlKHZub2RlLCBybSkge1xuICB2YXIgZWwgPSB2bm9kZS5lbG07XG4gIHZhciB2bSA9IHZub2RlLmNvbnRleHQ7XG4gIC8vIGNhbGwgZW50ZXIgY2FsbGJhY2sgbm93XG4gIGlmIChlbC5fZW50ZXJDYikge1xuICAgIGVsLl9lbnRlckNiLmNhbmNlbGxlZCA9IHRydWU7XG4gICAgZWwuX2VudGVyQ2IoKTtcbiAgfVxuICB2YXIgZGF0YSA9IHZub2RlLmRhdGEudHJhbnNpdGlvbjtcbiAgaWYgKCFkYXRhKSB7XG4gICAgcmV0dXJuIHJtKCk7XG4gIH1cblxuICB2YXIgX3Jlc29sdmVUcmFuc2l0aW9uMiA9IHJlc29sdmVUcmFuc2l0aW9uKGRhdGEsIHZub2RlLmNvbnRleHQpO1xuXG4gIHZhciBjc3MgPSBfcmVzb2x2ZVRyYW5zaXRpb24yLmNzcztcbiAgdmFyIGxlYXZlQ2xhc3MgPSBfcmVzb2x2ZVRyYW5zaXRpb24yLmxlYXZlQ2xhc3M7XG4gIHZhciBsZWF2ZUFjdGl2ZUNsYXNzID0gX3Jlc29sdmVUcmFuc2l0aW9uMi5sZWF2ZUFjdGl2ZUNsYXNzO1xuICB2YXIgYmVmb3JlTGVhdmUgPSBfcmVzb2x2ZVRyYW5zaXRpb24yLmJlZm9yZUxlYXZlO1xuICB2YXIgbGVhdmUgPSBfcmVzb2x2ZVRyYW5zaXRpb24yLmxlYXZlO1xuICB2YXIgYWZ0ZXJMZWF2ZSA9IF9yZXNvbHZlVHJhbnNpdGlvbjIuYWZ0ZXJMZWF2ZTtcbiAgdmFyIGxlYXZlQ2FuY2VsbGVkID0gX3Jlc29sdmVUcmFuc2l0aW9uMi5sZWF2ZUNhbmNlbGxlZDtcbiAgdmFyIGRlbGF5TGVhdmUgPSBfcmVzb2x2ZVRyYW5zaXRpb24yLmRlbGF5TGVhdmU7XG5cblxuICB2YXIgZXhwZWN0c0NTUyA9IGNzcyAhPT0gZmFsc2U7XG4gIHZhciB1c2VyV2FudHNDb250cm9sID0gbGVhdmUgJiYgbGVhdmUubGVuZ3RoID4gMjtcbiAgdmFyIGNiID0gZWwuX2xlYXZlQ2IgPSBvbmNlKGZ1bmN0aW9uICgpIHtcbiAgICBpZiAoZXhwZWN0c0NTUykge1xuICAgICAgcmVtb3ZlVHJhbnNpdGlvbkNsYXNzKGVsLCBsZWF2ZUFjdGl2ZUNsYXNzKTtcbiAgICB9XG4gICAgaWYgKGNiLmNhbmNlbGxlZCkge1xuICAgICAgaWYgKGV4cGVjdHNDU1MpIHtcbiAgICAgICAgcmVtb3ZlVHJhbnNpdGlvbkNsYXNzKGVsLCBsZWF2ZUNsYXNzKTtcbiAgICAgIH1cbiAgICAgIGxlYXZlQ2FuY2VsbGVkICYmIGxlYXZlQ2FuY2VsbGVkKGVsLCB2bSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJtKCk7XG4gICAgICBhZnRlckxlYXZlICYmIGFmdGVyTGVhdmUoZWwsIHZtKTtcbiAgICB9XG4gICAgZWwuX2xlYXZlQ2IgPSBudWxsO1xuICB9KTtcblxuICBpZiAoZGVsYXlMZWF2ZSkge1xuICAgIGRlbGF5TGVhdmUocGVyZm9ybUxlYXZlKTtcbiAgfSBlbHNlIHtcbiAgICBwZXJmb3JtTGVhdmUoKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHBlcmZvcm1MZWF2ZSgpIHtcbiAgICBiZWZvcmVMZWF2ZSAmJiBiZWZvcmVMZWF2ZShlbCwgdm0pO1xuICAgIGlmIChleHBlY3RzQ1NTKSB7XG4gICAgICBhZGRUcmFuc2l0aW9uQ2xhc3MoZWwsIGxlYXZlQ2xhc3MpO1xuICAgICAgYWRkVHJhbnNpdGlvbkNsYXNzKGVsLCBsZWF2ZUFjdGl2ZUNsYXNzKTtcbiAgICAgIG5leHRGcmFtZShmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJlbW92ZVRyYW5zaXRpb25DbGFzcyhlbCwgbGVhdmVDbGFzcyk7XG4gICAgICAgIGlmICghY2IuY2FuY2VsbGVkICYmICF1c2VyV2FudHNDb250cm9sKSB7XG4gICAgICAgICAgd2hlblRyYW5zaXRpb25FbmRzKGVsLCBjYik7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cbiAgICBsZWF2ZSAmJiBsZWF2ZShlbCwgdm0sIGNiKTtcbiAgICBpZiAoIWV4cGVjdHNDU1MgJiYgIXVzZXJXYW50c0NvbnRyb2wpIHtcbiAgICAgIGNiKCk7XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIHJlc29sdmVUcmFuc2l0aW9uKGlkLCBjb250ZXh0KSB7XG4gIHZhciBkZWYgPSB2b2lkIDA7XG4gIGlmIChpZCAmJiB0eXBlb2YgaWQgPT09ICdzdHJpbmcnKSB7XG4gICAgZGVmID0gcmVzb2x2ZUFzc2V0KGNvbnRleHQuJG9wdGlvbnMsICd0cmFuc2l0aW9ucycsIGlkKTtcbiAgICByZXR1cm4gZGVmID8gZW5zdXJlVHJhbnNpdGlvbkNsYXNzZXMoZGVmLm5hbWUgfHwgaWQsIGRlZikgOiBhdXRvQ3NzVHJhbnNpdGlvbihpZCk7XG4gIH0gZWxzZSBpZiAodHlwZW9mIGlkID09PSAnb2JqZWN0Jykge1xuICAgIC8vIGlubGluZSB0cmFuc2l0aW9uIG9iamVjdFxuICAgIGlmIChpZC5uYW1lKSB7XG4gICAgICBkZWYgPSByZXNvbHZlQXNzZXQoY29udGV4dC4kb3B0aW9ucywgJ3RyYW5zaXRpb25zJywgaWQubmFtZSk7XG4gICAgfVxuICAgIGRlZiA9IGRlZiA/IGV4dGVuZChlbnN1cmVUcmFuc2l0aW9uQ2xhc3NlcyhpZC5uYW1lLCBkZWYpLCBpZCkgOiBlbnN1cmVUcmFuc2l0aW9uQ2xhc3NlcyhpZC5uYW1lLCBpZCk7XG4gICAgLy8gZXh0cmEgaG9va3MgdG8gYmUgbWVyZ2VkXG4gICAgLy8gYWRkZWQgYnkgPHRyYW5zaXRpb24tY29udHJvbD5cbiAgICBpZiAoaWQuaG9va3MpIHtcbiAgICAgIGZvciAodmFyIGtleSBpbiBpZC5ob29rcykge1xuICAgICAgICBtZXJnZUhvb2skMihkZWYsIGtleSwgaWQuaG9va3Nba2V5XSk7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBkZWY7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIGF1dG9Dc3NUcmFuc2l0aW9uKCd2Jyk7XG4gIH1cbn1cblxuZnVuY3Rpb24gZW5zdXJlVHJhbnNpdGlvbkNsYXNzZXMobmFtZSwgZGVmKSB7XG4gIG5hbWUgPSBuYW1lIHx8ICd2JztcbiAgdmFyIHJlcyA9IHt9O1xuICBpZiAoZGVmLmNzcyAhPT0gZmFsc2UpIHtcbiAgICBleHRlbmQocmVzLCBhdXRvQ3NzVHJhbnNpdGlvbihuYW1lKSk7XG4gIH1cbiAgZXh0ZW5kKHJlcywgZGVmKTtcbiAgcmV0dXJuIHJlcztcbn1cblxudmFyIGF1dG9Dc3NUcmFuc2l0aW9uID0gY2FjaGVkKGZ1bmN0aW9uIChuYW1lKSB7XG4gIHJldHVybiB7XG4gICAgZW50ZXJDbGFzczogbmFtZSArICctZW50ZXInLFxuICAgIGxlYXZlQ2xhc3M6IG5hbWUgKyAnLWxlYXZlJyxcbiAgICBhcHBlYXJDbGFzczogbmFtZSArICctZW50ZXInLFxuICAgIGVudGVyQWN0aXZlQ2xhc3M6IG5hbWUgKyAnLWVudGVyLWFjdGl2ZScsXG4gICAgbGVhdmVBY3RpdmVDbGFzczogbmFtZSArICctbGVhdmUtYWN0aXZlJyxcbiAgICBhcHBlYXJBY3RpdmVDbGFzczogbmFtZSArICctZW50ZXItYWN0aXZlJ1xuICB9O1xufSk7XG5cbmZ1bmN0aW9uIG1lcmdlSG9vayQyKGRlZiwga2V5LCBob29rKSB7XG4gIHZhciBvbGRIb29rID0gZGVmW2tleV07XG4gIGlmIChvbGRIb29rKSB7XG4gICAgZGVmW2tleV0gPSBmdW5jdGlvbiAoKSB7XG4gICAgICBvbGRIb29rLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgICBob29rKCk7XG4gICAgfTtcbiAgfSBlbHNlIHtcbiAgICBkZWZba2V5XSA9IGhvb2s7XG4gIH1cbn1cblxuZnVuY3Rpb24gYWRkVHJhbnNpdGlvbkNsYXNzKGVsLCBjbHMpIHtcbiAgKGVsLl90cmFuc2l0aW9uQ2xhc3NlcyB8fCAoZWwuX3RyYW5zaXRpb25DbGFzc2VzID0gW10pKS5wdXNoKGNscyk7XG4gIGFkZENsYXNzKGVsLCBjbHMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVUcmFuc2l0aW9uQ2xhc3MoZWwsIGNscykge1xuICByZW1vdmUoZWwuX3RyYW5zaXRpb25DbGFzc2VzLCBjbHMpO1xuICByZW1vdmVDbGFzcyhlbCwgY2xzKTtcbn1cblxuZnVuY3Rpb24gd2hlblRyYW5zaXRpb25FbmRzKGVsLCBjYikge1xuICB2YXIgX2dldFRyYW5zaXRpb25JbmZvID0gZ2V0VHJhbnNpdGlvbkluZm8oZWwpO1xuXG4gIHZhciB0eXBlID0gX2dldFRyYW5zaXRpb25JbmZvLnR5cGU7XG4gIHZhciB0aW1lb3V0ID0gX2dldFRyYW5zaXRpb25JbmZvLnRpbWVvdXQ7XG4gIHZhciBwcm9wQ291bnQgPSBfZ2V0VHJhbnNpdGlvbkluZm8ucHJvcENvdW50O1xuXG4gIGlmICghdHlwZSkgcmV0dXJuIGNiKCk7XG4gIHZhciBldmVudCA9IHR5cGUgPT09IFRSQU5TSVRJT04gPyB0cmFuc2l0aW9uRW5kRXZlbnQgOiBhbmltYXRpb25FbmRFdmVudDtcbiAgdmFyIGVuZGVkID0gMDtcbiAgdmFyIGVuZCA9IGZ1bmN0aW9uIGVuZCgpIHtcbiAgICBlbC5yZW1vdmVFdmVudExpc3RlbmVyKGV2ZW50LCBvbkVuZCk7XG4gICAgY2IoKTtcbiAgfTtcbiAgdmFyIG9uRW5kID0gZnVuY3Rpb24gb25FbmQoKSB7XG4gICAgaWYgKCsrZW5kZWQgPj0gcHJvcENvdW50KSB7XG4gICAgICBlbmQoKTtcbiAgICB9XG4gIH07XG4gIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgIGlmIChlbmRlZCA8IHByb3BDb3VudCkge1xuICAgICAgZW5kKCk7XG4gICAgfVxuICB9LCB0aW1lb3V0ICsgMSk7XG4gIGVsLmFkZEV2ZW50TGlzdGVuZXIoZXZlbnQsIG9uRW5kKTtcbn1cblxuZnVuY3Rpb24gZ2V0VHJhbnNpdGlvbkluZm8oZWwpIHtcbiAgdmFyIHN0eWxlcyA9IHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKGVsKTtcbiAgLy8gMS4gZGV0ZXJtaW5lIHRoZSBtYXhpbXVtIGR1cmF0aW9uICh0aW1lb3V0KVxuICB2YXIgdHJhbnNpdGlvbmVEZWxheXMgPSBzdHlsZXNbdHJhbnNpdGlvblByb3AgKyAnRGVsYXknXS5zcGxpdCgnLCAnKTtcbiAgdmFyIHRyYW5zaXRpb25EdXJhdGlvbnMgPSBzdHlsZXNbdHJhbnNpdGlvblByb3AgKyAnRHVyYXRpb24nXS5zcGxpdCgnLCAnKTtcbiAgdmFyIGFuaW1hdGlvbkRlbGF5cyA9IHN0eWxlc1thbmltYXRpb25Qcm9wICsgJ0RlbGF5J10uc3BsaXQoJywgJyk7XG4gIHZhciBhbmltYXRpb25EdXJhdGlvbnMgPSBzdHlsZXNbYW5pbWF0aW9uUHJvcCArICdEdXJhdGlvbiddLnNwbGl0KCcsICcpO1xuICB2YXIgdHJhbnNpdGlvblRpbWVvdXQgPSBnZXRUaW1lb3V0KHRyYW5zaXRpb25lRGVsYXlzLCB0cmFuc2l0aW9uRHVyYXRpb25zKTtcbiAgdmFyIGFuaW1hdGlvblRpbWVvdXQgPSBnZXRUaW1lb3V0KGFuaW1hdGlvbkRlbGF5cywgYW5pbWF0aW9uRHVyYXRpb25zKTtcbiAgdmFyIHRpbWVvdXQgPSBNYXRoLm1heCh0cmFuc2l0aW9uVGltZW91dCwgYW5pbWF0aW9uVGltZW91dCk7XG4gIHZhciB0eXBlID0gdGltZW91dCA+IDAgPyB0cmFuc2l0aW9uVGltZW91dCA+IGFuaW1hdGlvblRpbWVvdXQgPyBUUkFOU0lUSU9OIDogQU5JTUFUSU9OIDogbnVsbDtcbiAgdmFyIHByb3BDb3VudCA9IHR5cGUgPyB0eXBlID09PSBUUkFOU0lUSU9OID8gdHJhbnNpdGlvbkR1cmF0aW9ucy5sZW5ndGggOiBhbmltYXRpb25EdXJhdGlvbnMubGVuZ3RoIDogMDtcbiAgcmV0dXJuIHtcbiAgICB0eXBlOiB0eXBlLFxuICAgIHRpbWVvdXQ6IHRpbWVvdXQsXG4gICAgcHJvcENvdW50OiBwcm9wQ291bnRcbiAgfTtcbn1cblxuZnVuY3Rpb24gZ2V0VGltZW91dChkZWxheXMsIGR1cmF0aW9ucykge1xuICByZXR1cm4gTWF0aC5tYXguYXBwbHkobnVsbCwgZHVyYXRpb25zLm1hcChmdW5jdGlvbiAoZCwgaSkge1xuICAgIHJldHVybiB0b01zKGQpICsgdG9NcyhkZWxheXNbaV0pO1xuICB9KSk7XG59XG5cbmZ1bmN0aW9uIHRvTXMocykge1xuICByZXR1cm4gTnVtYmVyKHMuc2xpY2UoMCwgLTEpKSAqIDEwMDA7XG59XG5cbmZ1bmN0aW9uIG9uY2UoZm4pIHtcbiAgdmFyIGNhbGxlZCA9IGZhbHNlO1xuICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgIGlmICghY2FsbGVkKSB7XG4gICAgICBjYWxsZWQgPSB0cnVlO1xuICAgICAgZm4oKTtcbiAgICB9XG4gIH07XG59XG5cbmZ1bmN0aW9uIHNob3VsZFNraXBUcmFuc2l0aW9uKHZub2RlKSB7XG4gIHJldHVybiAhIShcbiAgLy8gaWYgdGhpcyBpcyBhIGNvbXBvbmVudCByb290IG5vZGUgYW5kIHRoZSBjb21wb2VubnQnc1xuICAvLyBwYXJlbnQgY29udGFpbmVyIG5vZGUgYWxzbyBoYXMgdHJhbnNpdGlvbiwgc2tpcC5cbiAgdm5vZGUucGFyZW50ICYmIHZub2RlLnBhcmVudC5kYXRhLnRyYW5zaXRpb24gfHxcbiAgLy8gaWYgdGhlIGVsZW1lbnQgaGFzIHYtc2hvdywgbGV0IHRoZSBydW50aW1lIGRpcmVjdGl2ZVxuICAvLyBjYWxsIHRoZSBob29rcyBpbnN0ZWFkXG4gIHZub2RlLmRhdGEuc2hvdyk7XG59XG5cbnZhciB0cmFuc2l0aW9uID0gaGFzVHJhbnNpdGlvbiA/IHtcbiAgY3JlYXRlOiBmdW5jdGlvbiBjcmVhdGUoXywgdm5vZGUpIHtcbiAgICBpZiAoIXNob3VsZFNraXBUcmFuc2l0aW9uKHZub2RlKSkge1xuICAgICAgZW50ZXIodm5vZGUpO1xuICAgIH1cbiAgfSxcbiAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUodm5vZGUsIHJtKSB7XG4gICAgaWYgKCFzaG91bGRTa2lwVHJhbnNpdGlvbih2bm9kZSkpIHtcbiAgICAgIGxlYXZlKHZub2RlLCBybSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJtKCk7XG4gICAgfVxuICB9XG59IDoge307XG5cbnZhciBwbGF0Zm9ybU1vZHVsZXMgPSBbYXR0cnMsIGtsYXNzLCBldmVudHMsIHByb3BzLCBzdHlsZSwgdHJhbnNpdGlvbl07XG5cbi8vIHRoZSBkaXJlY3RpdmUgbW9kdWxlIHNob3VsZCBiZSBhcHBsaWVkIGxhc3QsIGFmdGVyIGFsbFxuLy8gYnVpbHQtaW4gbW9kdWxlcyBoYXZlIGJlZW4gYXBwbGllZC5cbnZhciBtb2R1bGVzID0gcGxhdGZvcm1Nb2R1bGVzLmNvbmNhdChiYXNlTW9kdWxlcyk7XG5cbnZhciBwYXRjaCA9IGNyZWF0ZVBhdGNoRnVuY3Rpb24oeyBub2RlT3BzOiBub2RlT3BzLCBtb2R1bGVzOiBtb2R1bGVzIH0pO1xuXG52YXIgbW9kZWxhYmxlVGFnUkUgPSAvXmlucHV0fHNlbGVjdHx0ZXh0YXJlYXx2dWUtY29tcG9uZW50LVswLTldKygtWzAtOWEtekEtWl9cXC1dKik/JC87XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBpZiAqL1xuaWYgKGlzSUU5KSB7XG4gIC8vIGh0dHA6Ly93d3cubWF0dHM0MTEuY29tL3Bvc3QvaW50ZXJuZXQtZXhwbG9yZXItOS1vbmlucHV0L1xuICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdzZWxlY3Rpb25jaGFuZ2UnLCBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGVsID0gZG9jdW1lbnQuYWN0aXZlRWxlbWVudDtcbiAgICBpZiAoZWwgJiYgZWwudm1vZGVsKSB7XG4gICAgICB0cmlnZ2VyKGVsLCAnaW5wdXQnKTtcbiAgICB9XG4gIH0pO1xufVxuXG52YXIgbW9kZWwgPSB7XG4gIGJpbmQ6IGZ1bmN0aW9uIGJpbmQoZWwsIGJpbmRpbmcsIHZub2RlKSB7XG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgIGlmICghbW9kZWxhYmxlVGFnUkUudGVzdCh2bm9kZS50YWcpKSB7XG4gICAgICAgIHdhcm4oJ3YtbW9kZWwgaXMgbm90IHN1cHBvcnRlZCBvbiBlbGVtZW50IHR5cGU6IDwnICsgdm5vZGUudGFnICsgJz4uICcgKyAnSWYgeW91IGFyZSB3b3JraW5nIHdpdGggY29udGVudGVkaXRhYmxlLCBpdFxcJ3MgcmVjb21tZW5kZWQgdG8gJyArICd3cmFwIGEgbGlicmFyeSBkZWRpY2F0ZWQgZm9yIHRoYXQgcHVycG9zZSBpbnNpZGUgYSBjdXN0b20gY29tcG9uZW50LicsIHZub2RlLmNvbnRleHQpO1xuICAgICAgfVxuICAgIH1cbiAgICBpZiAodm5vZGUudGFnID09PSAnc2VsZWN0Jykge1xuICAgICAgc2V0U2VsZWN0ZWQoZWwsIGJpbmRpbmcsIHZub2RlLmNvbnRleHQpO1xuICAgIH0gZWxzZSB7XG4gICAgICBpZiAoIWlzQW5kcm9pZCkge1xuICAgICAgICBlbC5hZGRFdmVudExpc3RlbmVyKCdjb21wb3NpdGlvbnN0YXJ0Jywgb25Db21wb3NpdGlvblN0YXJ0KTtcbiAgICAgICAgZWwuYWRkRXZlbnRMaXN0ZW5lcignY29tcG9zaXRpb25lbmQnLCBvbkNvbXBvc2l0aW9uRW5kKTtcbiAgICAgIH1cbiAgICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAqL1xuICAgICAgaWYgKGlzSUU5KSB7XG4gICAgICAgIGVsLnZtb2RlbCA9IHRydWU7XG4gICAgICB9XG4gICAgfVxuICB9LFxuICBjb21wb25lbnRVcGRhdGVkOiBmdW5jdGlvbiBjb21wb25lbnRVcGRhdGVkKGVsLCBiaW5kaW5nLCB2bm9kZSkge1xuICAgIGlmICh2bm9kZS50YWcgPT09ICdzZWxlY3QnKSB7XG4gICAgICBzZXRTZWxlY3RlZChlbCwgYmluZGluZywgdm5vZGUuY29udGV4dCk7XG4gICAgICAvLyBpbiBjYXNlIHRoZSBvcHRpb25zIHJlbmRlcmVkIGJ5IHYtZm9yIGhhdmUgY2hhbmdlZCxcbiAgICAgIC8vIGl0J3MgcG9zc2libGUgdGhhdCB0aGUgdmFsdWUgaXMgb3V0LW9mLXN5bmMgd2l0aCB0aGUgcmVuZGVyZWQgb3B0aW9ucy5cbiAgICAgIC8vIGRldGVjdCBzdWNoIGNhc2VzIGFuZCBmaWx0ZXIgb3V0IHZhbHVlcyB0aGF0IG5vIGxvbmdlciBoYXMgYSBtYXRjaGlnXG4gICAgICAvLyBvcHRpb24gaW4gdGhlIERPTS5cbiAgICAgIHZhciBuZWVkUmVzZXQgPSBlbC5tdWx0aXBsZSA/IGJpbmRpbmcudmFsdWUuc29tZShmdW5jdGlvbiAodikge1xuICAgICAgICByZXR1cm4gaGFzTm9NYXRjaGluZ09wdGlvbih2LCBlbC5vcHRpb25zKTtcbiAgICAgIH0pIDogaGFzTm9NYXRjaGluZ09wdGlvbihiaW5kaW5nLnZhbHVlLCBlbC5vcHRpb25zKTtcbiAgICAgIGlmIChuZWVkUmVzZXQpIHtcbiAgICAgICAgdHJpZ2dlcihlbCwgJ2NoYW5nZScpO1xuICAgICAgfVxuICAgIH1cbiAgfVxufTtcblxuZnVuY3Rpb24gc2V0U2VsZWN0ZWQoZWwsIGJpbmRpbmcsIHZtKSB7XG4gIHZhciB2YWx1ZSA9IGJpbmRpbmcudmFsdWU7XG4gIHZhciBpc011bHRpcGxlID0gZWwubXVsdGlwbGU7XG4gIGlmICghaXNNdWx0aXBsZSkge1xuICAgIGVsLnNlbGVjdGVkSW5kZXggPSAtMTtcbiAgfSBlbHNlIGlmICghQXJyYXkuaXNBcnJheSh2YWx1ZSkpIHtcbiAgICBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nICYmIHdhcm4oJzxzZWxlY3QgbXVsdGlwbGUgdi1tb2RlbD1cIicgKyBiaW5kaW5nLmV4cHJlc3Npb24gKyAnXCI+ICcgKyAoJ2V4cGVjdHMgYW4gQXJyYXkgdmFsdWUgZm9yIGl0cyBiaW5kaW5nLCBidXQgZ290ICcgKyBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwodmFsdWUpLnNsaWNlKDgsIC0xKSksIHZtKTtcbiAgICByZXR1cm47XG4gIH1cbiAgZm9yICh2YXIgaSA9IDAsIGwgPSBlbC5vcHRpb25zLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgIHZhciBvcHRpb24gPSBlbC5vcHRpb25zW2ldO1xuICAgIGlmIChpc011bHRpcGxlKSB7XG4gICAgICBvcHRpb24uc2VsZWN0ZWQgPSB2YWx1ZS5pbmRleE9mKGdldFZhbHVlKG9wdGlvbikpID4gLTE7XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmIChnZXRWYWx1ZShvcHRpb24pID09PSB2YWx1ZSkge1xuICAgICAgICBlbC5zZWxlY3RlZEluZGV4ID0gaTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGhhc05vTWF0Y2hpbmdPcHRpb24odmFsdWUsIG9wdGlvbnMpIHtcbiAgZm9yICh2YXIgaSA9IDAsIGwgPSBvcHRpb25zLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgIGlmIChnZXRWYWx1ZShvcHRpb25zW2ldKSA9PT0gdmFsdWUpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHRydWU7XG59XG5cbmZ1bmN0aW9uIGdldFZhbHVlKG9wdGlvbikge1xuICByZXR1cm4gJ192YWx1ZScgaW4gb3B0aW9uID8gb3B0aW9uLl92YWx1ZSA6IG9wdGlvbi52YWx1ZSB8fCBvcHRpb24udGV4dDtcbn1cblxuZnVuY3Rpb24gb25Db21wb3NpdGlvblN0YXJ0KGUpIHtcbiAgZS50YXJnZXQuY29tcG9zaW5nID0gdHJ1ZTtcbn1cblxuZnVuY3Rpb24gb25Db21wb3NpdGlvbkVuZChlKSB7XG4gIGUudGFyZ2V0LmNvbXBvc2luZyA9IGZhbHNlO1xuICB0cmlnZ2VyKGUudGFyZ2V0LCAnaW5wdXQnKTtcbn1cblxuZnVuY3Rpb24gdHJpZ2dlcihlbCwgdHlwZSkge1xuICB2YXIgZSA9IGRvY3VtZW50LmNyZWF0ZUV2ZW50KCdIVE1MRXZlbnRzJyk7XG4gIGUuaW5pdEV2ZW50KHR5cGUsIHRydWUsIHRydWUpO1xuICBlbC5kaXNwYXRjaEV2ZW50KGUpO1xufVxuXG52YXIgc2hvdyA9IHtcbiAgYmluZDogZnVuY3Rpb24gYmluZChlbCwgX3JlZiwgdm5vZGUpIHtcbiAgICB2YXIgdmFsdWUgPSBfcmVmLnZhbHVlO1xuXG4gICAgdmFyIHRyYW5zaXRpb24gPSBnZXRUcmFuc2l0aW9uKHZub2RlKTtcbiAgICBpZiAodmFsdWUgJiYgdHJhbnNpdGlvbiAmJiB0cmFuc2l0aW9uLmFwcGVhciAmJiAhaXNJRTkpIHtcbiAgICAgIGVudGVyKHZub2RlKTtcbiAgICB9XG4gICAgZWwuc3R5bGUuZGlzcGxheSA9IHZhbHVlID8gJycgOiAnbm9uZSc7XG4gIH0sXG4gIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKGVsLCBfcmVmMiwgdm5vZGUpIHtcbiAgICB2YXIgdmFsdWUgPSBfcmVmMi52YWx1ZTtcblxuICAgIHZhciB0cmFuc2l0aW9uID0gZ2V0VHJhbnNpdGlvbih2bm9kZSk7XG4gICAgaWYgKHRyYW5zaXRpb24gJiYgIWlzSUU5KSB7XG4gICAgICBpZiAodmFsdWUpIHtcbiAgICAgICAgZW50ZXIodm5vZGUpO1xuICAgICAgICBlbC5zdHlsZS5kaXNwbGF5ID0gJyc7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBsZWF2ZSh2bm9kZSwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgIGVsLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBlbC5zdHlsZS5kaXNwbGF5ID0gdmFsdWUgPyAnJyA6ICdub25lJztcbiAgICB9XG4gIH1cbn07XG5cbmZ1bmN0aW9uIGdldFRyYW5zaXRpb24odm5vZGUpIHtcbiAgdmFyIHBhcmVudCA9IHZub2RlLnBhcmVudDtcbiAgcmV0dXJuIHBhcmVudCAmJiBwYXJlbnQuZGF0YS50cmFuc2l0aW9uICE9IG51bGwgPyBwYXJlbnQuZGF0YS50cmFuc2l0aW9uIDogdm5vZGUuZGF0YS50cmFuc2l0aW9uO1xufVxuXG52YXIgcGxhdGZvcm1EaXJlY3RpdmVzID0ge1xuICBtb2RlbDogbW9kZWwsXG4gIHNob3c6IHNob3dcbn07XG5cbnZhciBUcmFuc2l0aW9uQ29udHJvbCA9IHtcbiAgbmFtZTogJ3RyYW5zaXRpb24tY29udHJvbCcsXG4gIF9hYnN0cmFjdDogdHJ1ZSxcbiAgcHJvcHM6IHtcbiAgICBjaGlsZDogT2JqZWN0LFxuICAgIG1vZGU6IHtcbiAgICAgIHZhbGlkYXRvcjogZnVuY3Rpb24gdmFsaWRhdG9yKHZhbCkge1xuICAgICAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgKi9cbiAgICAgICAgaWYgKHZhbCAmJiB2YWwgIT09ICdvdXQtaW4nICYmIHZhbCAhPT0gJ2luLW91dCcpIHtcbiAgICAgICAgICB3YXJuKCd0cmFuc2l0aW9uLW1vZGUgbXVzdCBiZSBlaXRoZXIgXCJvdXQtaW5cIiBvciBcImluLW91dFwiLicpO1xuICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG4gIH0sXG4gIHJlbmRlcjogZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgIHZhciBfdGhpcyA9IHRoaXM7XG5cbiAgICB2YXIgb2xkQ2hpbGQgPSB0aGlzLl92bm9kZTtcbiAgICB2YXIgbmV3Q2hpbGQgPSBnZXRSZWFsQ2hpbGQodGhpcy5jaGlsZCk7XG4gICAgaWYgKG9sZENoaWxkICYmIG9sZENoaWxkLmRhdGEgJiYgKG9sZENoaWxkLnRhZyAhPT0gbmV3Q2hpbGQudGFnIHx8IG9sZENoaWxkLmtleSAhPT0gbmV3Q2hpbGQua2V5KSkge1xuICAgICAgaWYgKHRoaXMubW9kZSA9PT0gJ291dC1pbicpIHtcbiAgICAgICAgLy8gcmV0dXJuIGVtcHR5IG5vZGVcbiAgICAgICAgLy8gYW5kIHF1ZXVlIGFuIHVwZGF0ZSB3aGVuIHRoZSBsZWF2ZSBmaW5pc2hlc1xuICAgICAgICByZXR1cm4gYWRkSG9vayhvbGRDaGlsZCwge1xuICAgICAgICAgIGFmdGVyTGVhdmU6IGZ1bmN0aW9uIGFmdGVyTGVhdmUoKSB7XG4gICAgICAgICAgICBfdGhpcy4kZm9yY2VVcGRhdGUoKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfSBlbHNlIGlmICh0aGlzLm1vZGUgPT09ICdpbi1vdXQnKSB7XG4gICAgICAgIChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgdmFyIGRlbGF5ZWRMZWF2ZSA9IHZvaWQgMDtcbiAgICAgICAgICB2YXIgcGVyZm9ybUxlYXZlID0gZnVuY3Rpb24gcGVyZm9ybUxlYXZlKCkge1xuICAgICAgICAgICAgZGVsYXllZExlYXZlKCk7XG4gICAgICAgICAgfTtcbiAgICAgICAgICBhZGRIb29rKG5ld0NoaWxkLCB7XG4gICAgICAgICAgICBhZnRlckVudGVyOiBwZXJmb3JtTGVhdmUsXG4gICAgICAgICAgICBlbnRlckNhbmNlbGxlZDogcGVyZm9ybUxlYXZlXG4gICAgICAgICAgfSk7XG4gICAgICAgICAgYWRkSG9vayhvbGRDaGlsZCwge1xuICAgICAgICAgICAgZGVsYXlMZWF2ZTogZnVuY3Rpb24gZGVsYXlMZWF2ZShsZWF2ZSkge1xuICAgICAgICAgICAgICBkZWxheWVkTGVhdmUgPSBsZWF2ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KTtcbiAgICAgICAgfSkoKTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIG5ld0NoaWxkO1xuICB9XG59O1xuXG5mdW5jdGlvbiBhZGRIb29rKHZub2RlLCBob29rcykge1xuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgKi9cbiAgaWYgKCF2bm9kZS5kYXRhIHx8ICF2bm9kZS5kYXRhLnRyYW5zaXRpb24pIHtcbiAgICByZXR1cm47XG4gIH1cbiAgdmFyIHRyYW5zID0gdm5vZGUuZGF0YS50cmFuc2l0aW9uO1xuICAvKiBpc3RhbmJ1bCBpZ25vcmUgZWxzZSAqL1xuICBpZiAodHlwZW9mIHRyYW5zID09PSAnc3RyaW5nJykge1xuICAgIHRyYW5zID0gdm5vZGUuZGF0YS50cmFuc2l0aW9uID0geyBuYW1lOiB0cmFucyB9O1xuICB9IGVsc2UgaWYgKHR5cGVvZiB0cmFucyAhPT0gJ29iamVjdCcpIHtcbiAgICB0cmFucyA9IHZub2RlLmRhdGEudHJhbnNpdGlvbiA9IHsgbmFtZTogJ3YnIH07XG4gIH1cbiAgdHJhbnMuaG9va3MgPSBob29rcztcbn1cblxudmFyIHBsYXRmb3JtQ29tcG9uZW50cyA9IHtcbiAgVHJhbnNpdGlvbkNvbnRyb2w6IFRyYW5zaXRpb25Db250cm9sXG59O1xuXG4vLyBpbnN0YWxsIHBsYXRmb3JtIHNwZWNpZmljIHV0aWxzXG5WdWUuY29uZmlnLmlzVW5rbm93bkVsZW1lbnQgPSBpc1Vua25vd25FbGVtZW50O1xuVnVlLmNvbmZpZy5pc1Jlc2VydmVkVGFnID0gaXNSZXNlcnZlZFRhZztcblZ1ZS5jb25maWcuZ2V0VGFnTmFtZXNwYWNlID0gZ2V0VGFnTmFtZXNwYWNlO1xuVnVlLmNvbmZpZy5tdXN0VXNlUHJvcCA9IG11c3RVc2VQcm9wO1xuXG4vLyBpbnN0YWxsIHBsYXRmb3JtIHJ1bnRpbWUgZGlyZWN0aXZlcyAmIGNvbXBvbmVudHNcbmV4dGVuZChWdWUub3B0aW9ucy5kaXJlY3RpdmVzLCBwbGF0Zm9ybURpcmVjdGl2ZXMpO1xuZXh0ZW5kKFZ1ZS5vcHRpb25zLmNvbXBvbmVudHMsIHBsYXRmb3JtQ29tcG9uZW50cyk7XG5cbi8vIGluc3RhbGwgcGxhdGZvcm0gcGF0Y2ggZnVuY3Rpb25cblZ1ZS5wcm90b3R5cGUuX19wYXRjaF9fID0gY29uZmlnLl9pc1NlcnZlciA/IG5vb3AgOiBwYXRjaDtcblxuLy8gd3JhcCBtb3VudFxuVnVlLnByb3RvdHlwZS4kbW91bnQgPSBmdW5jdGlvbiAoZWwsIGh5ZHJhdGluZykge1xuICBlbCA9IGVsICYmICFjb25maWcuX2lzU2VydmVyID8gcXVlcnkoZWwpIDogdW5kZWZpbmVkO1xuICByZXR1cm4gdGhpcy5fbW91bnQoZWwsIGh5ZHJhdGluZyk7XG59O1xuXG4vLyBkZXZ0b29scyBnbG9iYWwgaG9va1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgKi9cbnNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICBpZiAoY29uZmlnLmRldnRvb2xzKSB7XG4gICAgaWYgKGRldnRvb2xzKSB7XG4gICAgICBkZXZ0b29scy5lbWl0KCdpbml0JywgVnVlKTtcbiAgICB9IGVsc2UgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgJiYgaW5Ccm93c2VyICYmIC9DaHJvbWVcXC9cXGQrLy50ZXN0KHdpbmRvdy5uYXZpZ2F0b3IudXNlckFnZW50KSkge1xuICAgICAgY29uc29sZS5sb2coJ0Rvd25sb2FkIHRoZSBWdWUgRGV2dG9vbHMgZm9yIGEgYmV0dGVyIGRldmVsb3BtZW50IGV4cGVyaWVuY2U6XFxuJyArICdodHRwczovL2dpdGh1Yi5jb20vdnVlanMvdnVlLWRldnRvb2xzJyk7XG4gICAgfVxuICB9XG59LCAwKTtcblxubW9kdWxlLmV4cG9ydHMgPSBWdWU7IiwidmFyIGluc2VydGVkID0gZXhwb3J0cy5jYWNoZSA9IHt9XG5cbmZ1bmN0aW9uIG5vb3AgKCkge31cblxuZXhwb3J0cy5pbnNlcnQgPSBmdW5jdGlvbiAoY3NzKSB7XG4gIGlmIChpbnNlcnRlZFtjc3NdKSByZXR1cm4gbm9vcFxuICBpbnNlcnRlZFtjc3NdID0gdHJ1ZVxuXG4gIHZhciBlbGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3R5bGUnKVxuICBlbGVtLnNldEF0dHJpYnV0ZSgndHlwZScsICd0ZXh0L2NzcycpXG5cbiAgaWYgKCd0ZXh0Q29udGVudCcgaW4gZWxlbSkge1xuICAgIGVsZW0udGV4dENvbnRlbnQgPSBjc3NcbiAgfSBlbHNlIHtcbiAgICBlbGVtLnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzc1xuICB9XG5cbiAgZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2hlYWQnKVswXS5hcHBlbmRDaGlsZChlbGVtKVxuICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgIGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdoZWFkJylbMF0ucmVtb3ZlQ2hpbGQoZWxlbSlcbiAgICBpbnNlcnRlZFtjc3NdID0gZmFsc2VcbiAgfVxufVxuIiwiLyoqXG4gKiBDb3B5cmlnaHQgMjAxNC0yMDE1LCBGYWNlYm9vaywgSW5jLlxuICogQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBCU0Qtc3R5bGUgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS4gQW4gYWRkaXRpb25hbCBncmFudFxuICogb2YgcGF0ZW50IHJpZ2h0cyBjYW4gYmUgZm91bmQgaW4gdGhlIFBBVEVOVFMgZmlsZSBpbiB0aGUgc2FtZSBkaXJlY3RvcnkuXG4gKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG4vKipcbiAqIFNpbWlsYXIgdG8gaW52YXJpYW50IGJ1dCBvbmx5IGxvZ3MgYSB3YXJuaW5nIGlmIHRoZSBjb25kaXRpb24gaXMgbm90IG1ldC5cbiAqIFRoaXMgY2FuIGJlIHVzZWQgdG8gbG9nIGlzc3VlcyBpbiBkZXZlbG9wbWVudCBlbnZpcm9ubWVudHMgaW4gY3JpdGljYWxcbiAqIHBhdGhzLiBSZW1vdmluZyB0aGUgbG9nZ2luZyBjb2RlIGZvciBwcm9kdWN0aW9uIGVudmlyb25tZW50cyB3aWxsIGtlZXAgdGhlXG4gKiBzYW1lIGxvZ2ljIGFuZCBmb2xsb3cgdGhlIHNhbWUgY29kZSBwYXRocy5cbiAqL1xuXG52YXIgd2FybmluZyA9IGZ1bmN0aW9uKCkge307XG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gIHdhcm5pbmcgPSBmdW5jdGlvbihjb25kaXRpb24sIGZvcm1hdCwgYXJncykge1xuICAgIHZhciBsZW4gPSBhcmd1bWVudHMubGVuZ3RoO1xuICAgIGFyZ3MgPSBuZXcgQXJyYXkobGVuID4gMiA/IGxlbiAtIDIgOiAwKTtcbiAgICBmb3IgKHZhciBrZXkgPSAyOyBrZXkgPCBsZW47IGtleSsrKSB7XG4gICAgICBhcmdzW2tleSAtIDJdID0gYXJndW1lbnRzW2tleV07XG4gICAgfVxuICAgIGlmIChmb3JtYXQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICAnYHdhcm5pbmcoY29uZGl0aW9uLCBmb3JtYXQsIC4uLmFyZ3MpYCByZXF1aXJlcyBhIHdhcm5pbmcgJyArXG4gICAgICAgICdtZXNzYWdlIGFyZ3VtZW50J1xuICAgICAgKTtcbiAgICB9XG5cbiAgICBpZiAoZm9ybWF0Lmxlbmd0aCA8IDEwIHx8ICgvXltzXFxXXSokLykudGVzdChmb3JtYXQpKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgICdUaGUgd2FybmluZyBmb3JtYXQgc2hvdWxkIGJlIGFibGUgdG8gdW5pcXVlbHkgaWRlbnRpZnkgdGhpcyAnICtcbiAgICAgICAgJ3dhcm5pbmcuIFBsZWFzZSwgdXNlIGEgbW9yZSBkZXNjcmlwdGl2ZSBmb3JtYXQgdGhhbjogJyArIGZvcm1hdFxuICAgICAgKTtcbiAgICB9XG5cbiAgICBpZiAoIWNvbmRpdGlvbikge1xuICAgICAgdmFyIGFyZ0luZGV4ID0gMDtcbiAgICAgIHZhciBtZXNzYWdlID0gJ1dhcm5pbmc6ICcgK1xuICAgICAgICBmb3JtYXQucmVwbGFjZSgvJXMvZywgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgcmV0dXJuIGFyZ3NbYXJnSW5kZXgrK107XG4gICAgICAgIH0pO1xuICAgICAgaWYgKHR5cGVvZiBjb25zb2xlICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICBjb25zb2xlLmVycm9yKG1lc3NhZ2UpO1xuICAgICAgfVxuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyBlcnJvciB3YXMgdGhyb3duIGFzIGEgY29udmVuaWVuY2Ugc28gdGhhdCB5b3UgY2FuIHVzZSB0aGlzIHN0YWNrXG4gICAgICAgIC8vIHRvIGZpbmQgdGhlIGNhbGxzaXRlIHRoYXQgY2F1c2VkIHRoaXMgd2FybmluZyB0byBmaXJlLlxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IobWVzc2FnZSk7XG4gICAgICB9IGNhdGNoKHgpIHt9XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHdhcm5pbmc7XG4iLCIvLyBzaGltIGZvciB1c2luZyBwcm9jZXNzIGluIGJyb3dzZXJcblxudmFyIHByb2Nlc3MgPSBtb2R1bGUuZXhwb3J0cyA9IHt9O1xuXG4vLyBjYWNoZWQgZnJvbSB3aGF0ZXZlciBnbG9iYWwgaXMgcHJlc2VudCBzbyB0aGF0IHRlc3QgcnVubmVycyB0aGF0IHN0dWIgaXRcbi8vIGRvbid0IGJyZWFrIHRoaW5ncy4gIEJ1dCB3ZSBuZWVkIHRvIHdyYXAgaXQgaW4gYSB0cnkgY2F0Y2ggaW4gY2FzZSBpdCBpc1xuLy8gd3JhcHBlZCBpbiBzdHJpY3QgbW9kZSBjb2RlIHdoaWNoIGRvZXNuJ3QgZGVmaW5lIGFueSBnbG9iYWxzLiAgSXQncyBpbnNpZGUgYVxuLy8gZnVuY3Rpb24gYmVjYXVzZSB0cnkvY2F0Y2hlcyBkZW9wdGltaXplIGluIGNlcnRhaW4gZW5naW5lcy5cblxudmFyIGNhY2hlZFNldFRpbWVvdXQ7XG52YXIgY2FjaGVkQ2xlYXJUaW1lb3V0O1xuXG4oZnVuY3Rpb24gKCkge1xuICB0cnkge1xuICAgIGNhY2hlZFNldFRpbWVvdXQgPSBzZXRUaW1lb3V0O1xuICB9IGNhdGNoIChlKSB7XG4gICAgY2FjaGVkU2V0VGltZW91dCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignc2V0VGltZW91dCBpcyBub3QgZGVmaW5lZCcpO1xuICAgIH1cbiAgfVxuICB0cnkge1xuICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGNsZWFyVGltZW91dDtcbiAgfSBjYXRjaCAoZSkge1xuICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignY2xlYXJUaW1lb3V0IGlzIG5vdCBkZWZpbmVkJyk7XG4gICAgfVxuICB9XG59ICgpKVxudmFyIHF1ZXVlID0gW107XG52YXIgZHJhaW5pbmcgPSBmYWxzZTtcbnZhciBjdXJyZW50UXVldWU7XG52YXIgcXVldWVJbmRleCA9IC0xO1xuXG5mdW5jdGlvbiBjbGVhblVwTmV4dFRpY2soKSB7XG4gICAgaWYgKCFkcmFpbmluZyB8fCAhY3VycmVudFF1ZXVlKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgZHJhaW5pbmcgPSBmYWxzZTtcbiAgICBpZiAoY3VycmVudFF1ZXVlLmxlbmd0aCkge1xuICAgICAgICBxdWV1ZSA9IGN1cnJlbnRRdWV1ZS5jb25jYXQocXVldWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHF1ZXVlSW5kZXggPSAtMTtcbiAgICB9XG4gICAgaWYgKHF1ZXVlLmxlbmd0aCkge1xuICAgICAgICBkcmFpblF1ZXVlKCk7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBkcmFpblF1ZXVlKCkge1xuICAgIGlmIChkcmFpbmluZykge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIHZhciB0aW1lb3V0ID0gY2FjaGVkU2V0VGltZW91dChjbGVhblVwTmV4dFRpY2spO1xuICAgIGRyYWluaW5nID0gdHJ1ZTtcblxuICAgIHZhciBsZW4gPSBxdWV1ZS5sZW5ndGg7XG4gICAgd2hpbGUobGVuKSB7XG4gICAgICAgIGN1cnJlbnRRdWV1ZSA9IHF1ZXVlO1xuICAgICAgICBxdWV1ZSA9IFtdO1xuICAgICAgICB3aGlsZSAoKytxdWV1ZUluZGV4IDwgbGVuKSB7XG4gICAgICAgICAgICBpZiAoY3VycmVudFF1ZXVlKSB7XG4gICAgICAgICAgICAgICAgY3VycmVudFF1ZXVlW3F1ZXVlSW5kZXhdLnJ1bigpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHF1ZXVlSW5kZXggPSAtMTtcbiAgICAgICAgbGVuID0gcXVldWUubGVuZ3RoO1xuICAgIH1cbiAgICBjdXJyZW50UXVldWUgPSBudWxsO1xuICAgIGRyYWluaW5nID0gZmFsc2U7XG4gICAgY2FjaGVkQ2xlYXJUaW1lb3V0KHRpbWVvdXQpO1xufVxuXG5wcm9jZXNzLm5leHRUaWNrID0gZnVuY3Rpb24gKGZ1bikge1xuICAgIHZhciBhcmdzID0gbmV3IEFycmF5KGFyZ3VtZW50cy5sZW5ndGggLSAxKTtcbiAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGFyZ3NbaSAtIDFdID0gYXJndW1lbnRzW2ldO1xuICAgICAgICB9XG4gICAgfVxuICAgIHF1ZXVlLnB1c2gobmV3IEl0ZW0oZnVuLCBhcmdzKSk7XG4gICAgaWYgKHF1ZXVlLmxlbmd0aCA9PT0gMSAmJiAhZHJhaW5pbmcpIHtcbiAgICAgICAgY2FjaGVkU2V0VGltZW91dChkcmFpblF1ZXVlLCAwKTtcbiAgICB9XG59O1xuXG4vLyB2OCBsaWtlcyBwcmVkaWN0aWJsZSBvYmplY3RzXG5mdW5jdGlvbiBJdGVtKGZ1biwgYXJyYXkpIHtcbiAgICB0aGlzLmZ1biA9IGZ1bjtcbiAgICB0aGlzLmFycmF5ID0gYXJyYXk7XG59XG5JdGVtLnByb3RvdHlwZS5ydW4gPSBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy5mdW4uYXBwbHkobnVsbCwgdGhpcy5hcnJheSk7XG59O1xucHJvY2Vzcy50aXRsZSA9ICdicm93c2VyJztcbnByb2Nlc3MuYnJvd3NlciA9IHRydWU7XG5wcm9jZXNzLmVudiA9IHt9O1xucHJvY2Vzcy5hcmd2ID0gW107XG5wcm9jZXNzLnZlcnNpb24gPSAnJzsgLy8gZW1wdHkgc3RyaW5nIHRvIGF2b2lkIHJlZ2V4cCBpc3N1ZXNcbnByb2Nlc3MudmVyc2lvbnMgPSB7fTtcblxuZnVuY3Rpb24gbm9vcCgpIHt9XG5cbnByb2Nlc3Mub24gPSBub29wO1xucHJvY2Vzcy5hZGRMaXN0ZW5lciA9IG5vb3A7XG5wcm9jZXNzLm9uY2UgPSBub29wO1xucHJvY2Vzcy5vZmYgPSBub29wO1xucHJvY2Vzcy5yZW1vdmVMaXN0ZW5lciA9IG5vb3A7XG5wcm9jZXNzLnJlbW92ZUFsbExpc3RlbmVycyA9IG5vb3A7XG5wcm9jZXNzLmVtaXQgPSBub29wO1xuXG5wcm9jZXNzLmJpbmRpbmcgPSBmdW5jdGlvbiAobmFtZSkge1xuICAgIHRocm93IG5ldyBFcnJvcigncHJvY2Vzcy5iaW5kaW5nIGlzIG5vdCBzdXBwb3J0ZWQnKTtcbn07XG5cbnByb2Nlc3MuY3dkID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gJy8nIH07XG5wcm9jZXNzLmNoZGlyID0gZnVuY3Rpb24gKGRpcikge1xuICAgIHRocm93IG5ldyBFcnJvcigncHJvY2Vzcy5jaGRpciBpcyBub3Qgc3VwcG9ydGVkJyk7XG59O1xucHJvY2Vzcy51bWFzayA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gMDsgfTtcbiIsIihmdW5jdGlvbihmYWN0b3J5KSB7XG4gICAgJ3VzZSBzdHJpY3QnO1xuICAgIGlmICh0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpIHtcbiAgICAgICAgZGVmaW5lKFtdLCBmdW5jdGlvbigpe1xuICAgICAgICAgICAgcmV0dXJuIGZhY3Rvcnkod2luZG93LCBkb2N1bWVudCk7XG4gICAgICAgIH0pO1xuICAgIH0gZWxzZSBpZiAodHlwZW9mIGV4cG9ydHMgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSh3aW5kb3csIGRvY3VtZW50KTtcbiAgICB9IGVsc2Uge1xuICAgICAgICB3aW5kb3cud3lzaXd5ZyA9IGZhY3Rvcnkod2luZG93LCBkb2N1bWVudCk7XG4gICAgfVxufSkoZnVuY3Rpb24od2luZG93LCBkb2N1bWVudCl7XG4gICAgJ3VzZSBzdHJpY3QnO1xuXG4gICAgLy8gaHR0cDovL3N0YWNrb3ZlcmZsb3cuY29tL3F1ZXN0aW9ucy85Nzk2Mi9kZWJvdW5jZS1jbGlja3Mtd2hlbi1zdWJtaXR0aW5nLWEtd2ViLWZvcm1cbiAgICB2YXIgZGVib3VuY2UgPSBmdW5jdGlvbiggY2FsbGJhY2ssIHdhaXQsIGNhbmNlbHByZXZpb3VzIClcbiAgICB7XG4gICAgICAgIHZhciB0aW1lb3V0O1xuICAgICAgICByZXR1cm4gZnVuY3Rpb24oKVxuICAgICAgICB7XG4gICAgICAgICAgICBpZiggdGltZW91dCApXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgaWYoICEgY2FuY2VscHJldmlvdXMgKVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gO1xuICAgICAgICAgICAgICAgIGNsZWFyVGltZW91dCggdGltZW91dCApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdmFyIGNvbnRleHQgPSB0aGlzLFxuICAgICAgICAgICAgICAgIGFyZ3MgPSBhcmd1bWVudHM7XG4gICAgICAgICAgICB0aW1lb3V0ID0gc2V0VGltZW91dChcbiAgICAgICAgICAgICAgICBmdW5jdGlvbigpXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICB0aW1lb3V0ID0gbnVsbDtcbiAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2suYXBwbHkoIGNvbnRleHQsIGFyZ3MgKTtcbiAgICAgICAgICAgICAgICB9LCB3YWl0ICk7XG4gICAgICAgIH07XG4gICAgfTtcblxuICAgIC8vIGh0dHA6Ly9zdGFja292ZXJmbG93LmNvbS9xdWVzdGlvbnMvMTI5NDk1OTAvaG93LXRvLWRldGFjaC1ldmVudC1pbi1pZS02LTctOC05LXVzaW5nLWphdmFzY3JpcHRcbiAgICB2YXIgYWRkRXZlbnQgPSBmdW5jdGlvbiggZWxlbWVudCwgdHlwZSwgaGFuZGxlciwgdXNlQ2FwdHVyZSApXG4gICAge1xuICAgICAgICBpZiggZWxlbWVudC5hZGRFdmVudExpc3RlbmVyICkge1xuICAgICAgICAgICAgZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCB0eXBlLCBoYW5kbGVyLCB1c2VDYXB0dXJlID8gdHJ1ZSA6IGZhbHNlICk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiggZWxlbWVudC5hdHRhY2hFdmVudCApIHtcbiAgICAgICAgICAgIGVsZW1lbnQuYXR0YWNoRXZlbnQoICdvbicgKyB0eXBlLCBoYW5kbGVyICk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiggZWxlbWVudCAhPSB3aW5kb3cgKVxuICAgICAgICAgICAgZWxlbWVudFsnb24nICsgdHlwZV0gPSBoYW5kbGVyO1xuICAgIH07XG4gICAgdmFyIHJlbW92ZUV2ZW50ID0gZnVuY3Rpb24oIGVsZW1lbnQsIHR5cGUsIGhhbmRsZXIsIHVzZUNhcHR1cmUgKVxuICAgIHtcbiAgICAgICAgaWYoIGVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lciApIHtcbiAgICAgICAgICAgIGVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lciggdHlwZSwgaGFuZGxlciwgdXNlQ2FwdHVyZSA/IHRydWUgOiBmYWxzZSApO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYoIGVsZW1lbnQuZGV0YWNoRXZlbnQpIHtcbiAgICAgICAgICAgIGVsZW1lbnQuZGV0YWNoRXZlbnQoICdvbicgKyB0eXBlLCBoYW5kbGVyICk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiggZWxlbWVudCAhPSB3aW5kb3cgKVxuICAgICAgICAgICAgZWxlbWVudFsnb24nICsgdHlwZV0gPSBudWxsO1xuICAgIH07XG4gICAgLy8gaHR0cDovL3d3dy5jcmlzdGluYXdpdGhvdXQuY29tL2NvbnRlbnQvZnVuY3Rpb24tdHJpZ2dlci1ldmVudHMtamF2YXNjcmlwdFxuICAgIHZhciBmaXJlRXZlbnQgPSBmdW5jdGlvbiggZWxlbWVudCwgdHlwZSwgYnViYmxlcywgY2FuY2VsYWJsZSApXG4gICAge1xuICAgICAgICBpZiggZG9jdW1lbnQuY3JlYXRlRXZlbnQgKSB7XG4gICAgICAgICAgICB2YXIgZXZlbnQgPSBkb2N1bWVudC5jcmVhdGVFdmVudCgnRXZlbnQnKTtcbiAgICAgICAgICAgIGV2ZW50LmluaXRFdmVudCggdHlwZSwgYnViYmxlcyAhPT0gdW5kZWZpbmVkID8gYnViYmxlcyA6IHRydWUsIGNhbmNlbGFibGUgIT09IHVuZGVmaW5lZCA/IGNhbmNlbGFibGUgOiBmYWxzZSApO1xuICAgICAgICAgICAgZWxlbWVudC5kaXNwYXRjaEV2ZW50KGV2ZW50KTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmKCBkb2N1bWVudC5jcmVhdGVFdmVudE9iamVjdCApIHsgLy9JRVxuICAgICAgICAgICAgdmFyIGV2ZW50ID0gZG9jdW1lbnQuY3JlYXRlRXZlbnRPYmplY3QoKTtcbiAgICAgICAgICAgIGVsZW1lbnQuZmlyZUV2ZW50KCAnb24nICsgdHlwZSwgZXZlbnQgKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmKCB0eXBlb2YoZWxlbWVudFsnb24nICsgdHlwZV0pID09ICdmdW5jdGlvbicgKVxuICAgICAgICAgICAgZWxlbWVudFsnb24nICsgdHlwZV0oKTtcbiAgICB9O1xuICAgIC8vIHByZXZlbnQgZGVmYXVsdFxuICAgIHZhciBjYW5jZWxFdmVudCA9IGZ1bmN0aW9uKCBlIClcbiAgICB7XG4gICAgICAgIGlmKCBlLnByZXZlbnREZWZhdWx0IClcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgZWxzZVxuICAgICAgICAgICAgZS5yZXR1cm5WYWx1ZSA9IGZhbHNlO1xuICAgICAgICBpZiggZS5zdG9wUHJvcGFnYXRpb24gKVxuICAgICAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgZWxzZVxuICAgICAgICAgICAgZS5jYW5jZWxCdWJibGUgPSB0cnVlO1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfTtcblxuICAgIC8vIGh0dHA6Ly9zdGFja292ZXJmbG93LmNvbS9xdWVzdGlvbnMvMTMzNzc4ODcvamF2YXNjcmlwdC1ub2RlLXVuZGVmaW5lZC1pbi1pZTgtYW5kLXVuZGVyXG4gICAgdmFyIE5vZGVfRUxFTUVOVF9OT0RFID0gdHlwZW9mKE5vZGUpICE9ICd1bmRlZmluZWQnID8gTm9kZS5FTEVNRU5UX05PREUgOiAxO1xuICAgIHZhciBOb2RlX1RFWFRfTk9ERSA9IHR5cGVvZihOb2RlKSAhPSAndW5kZWZpbmVkJyA/IE5vZGUuVEVYVF9OT0RFIDogMztcblxuICAgIC8vIGh0dHA6Ly9zdGFja292ZXJmbG93LmNvbS9xdWVzdGlvbnMvMjIzNDk3OS9ob3ctdG8tY2hlY2staW4tamF2YXNjcmlwdC1pZi1vbmUtZWxlbWVudC1pcy1hLWNoaWxkLW9mLWFub3RoZXJcbiAgICB2YXIgaXNPckNvbnRhaW5zTm9kZSA9IGZ1bmN0aW9uKCBhbmNlc3RvciwgZGVzY2VuZGFudCApXG4gICAge1xuICAgICAgICB2YXIgbm9kZSA9IGRlc2NlbmRhbnQ7XG4gICAgICAgIHdoaWxlKCBub2RlIClcbiAgICAgICAge1xuICAgICAgICAgICAgaWYoIG5vZGUgPT09IGFuY2VzdG9yIClcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIG5vZGUgPSBub2RlLnBhcmVudE5vZGU7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH07XG5cbiAgICAvLyBodHRwOi8vc3RhY2tvdmVyZmxvdy5jb20vcXVlc3Rpb25zLzY2Nzk1MS9ob3ctdG8tZ2V0LW5vZGVzLWx5aW5nLWluc2lkZS1hLXJhbmdlLXdpdGgtamF2YXNjcmlwdFxuICAgIHZhciBuZXh0Tm9kZSA9IGZ1bmN0aW9uKCBub2RlLCBjb250YWluZXIgKVxuICAgIHtcbiAgICAgICAgaWYoIG5vZGUuZmlyc3RDaGlsZCApXG4gICAgICAgICAgICByZXR1cm4gbm9kZS5maXJzdENoaWxkO1xuICAgICAgICB3aGlsZSggbm9kZSApXG4gICAgICAgIHtcbiAgICAgICAgICAgIGlmKCBub2RlID09IGNvbnRhaW5lciApIC8vIGRvIG5vdCB3YWxrIG91dCBvZiB0aGUgY29udGFpbmVyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgICAgICBpZiggbm9kZS5uZXh0U2libGluZyApXG4gICAgICAgICAgICAgICAgcmV0dXJuIG5vZGUubmV4dFNpYmxpbmc7XG4gICAgICAgICAgICBub2RlID0gbm9kZS5wYXJlbnROb2RlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH07XG5cbiAgICAvLyBzYXZlL3Jlc3RvcmUgc2VsZWN0aW9uXG4gICAgLy8gaHR0cDovL3N0YWNrb3ZlcmZsb3cuY29tL3F1ZXN0aW9ucy8xMzk0OTA1OS9wZXJzaXN0aW5nLXRoZS1jaGFuZ2VzLW9mLXJhbmdlLW9iamVjdHMtYWZ0ZXItc2VsZWN0aW9uLWluLWh0bWwvMTM5NTAzNzYjMTM5NTAzNzZcbiAgICB2YXIgc2F2ZVNlbGVjdGlvbiA9IGZ1bmN0aW9uKCBjb250YWluZXJOb2RlIClcbiAgICB7XG4gICAgICAgIGlmKCB3aW5kb3cuZ2V0U2VsZWN0aW9uIClcbiAgICAgICAge1xuICAgICAgICAgICAgdmFyIHNlbCA9IHdpbmRvdy5nZXRTZWxlY3Rpb24oKTtcbiAgICAgICAgICAgIGlmKCBzZWwucmFuZ2VDb3VudCA+IDAgKVxuICAgICAgICAgICAgICAgIHJldHVybiBzZWwuZ2V0UmFuZ2VBdCgwKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmKCBkb2N1bWVudC5zZWxlY3Rpb24gKVxuICAgICAgICB7XG4gICAgICAgICAgICB2YXIgc2VsID0gZG9jdW1lbnQuc2VsZWN0aW9uO1xuICAgICAgICAgICAgcmV0dXJuIHNlbC5jcmVhdGVSYW5nZSgpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH07XG4gICAgdmFyIHJlc3RvcmVTZWxlY3Rpb24gPSBmdW5jdGlvbiggY29udGFpbmVyTm9kZSwgc2F2ZWRTZWwgKVxuICAgIHtcbiAgICAgICAgaWYoICEgc2F2ZWRTZWwgKVxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICBpZiggd2luZG93LmdldFNlbGVjdGlvbiApXG4gICAgICAgIHtcbiAgICAgICAgICAgIHZhciBzZWwgPSB3aW5kb3cuZ2V0U2VsZWN0aW9uKCk7XG4gICAgICAgICAgICBzZWwucmVtb3ZlQWxsUmFuZ2VzKCk7XG4gICAgICAgICAgICBzZWwuYWRkUmFuZ2Uoc2F2ZWRTZWwpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYoIGRvY3VtZW50LnNlbGVjdGlvbiApXG4gICAgICAgIHtcbiAgICAgICAgICAgIHNhdmVkU2VsLnNlbGVjdCgpO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIC8vIGh0dHA6Ly9zdGFja292ZXJmbG93LmNvbS9xdWVzdGlvbnMvMTI2MDMzOTcvY2FsY3VsYXRlLXdpZHRoLWhlaWdodC1vZi10aGUtc2VsZWN0ZWQtdGV4dC1qYXZhc2NyaXB0XG4gICAgLy8gaHR0cDovL3N0YWNrb3ZlcmZsb3cuY29tL3F1ZXN0aW9ucy82ODQ2MjMwL2Nvb3JkaW5hdGVzLW9mLXNlbGVjdGVkLXRleHQtaW4tYnJvd3Nlci1wYWdlXG4gICAgdmFyIGdldFNlbGVjdGlvblJlY3QgPSBmdW5jdGlvbigpXG4gICAge1xuICAgICAgICBpZiggd2luZG93LmdldFNlbGVjdGlvbiApXG4gICAgICAgIHtcbiAgICAgICAgICAgIHZhciBzZWwgPSB3aW5kb3cuZ2V0U2VsZWN0aW9uKCk7XG4gICAgICAgICAgICBpZiggISBzZWwucmFuZ2VDb3VudCApXG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgdmFyIHJhbmdlID0gc2VsLmdldFJhbmdlQXQoMCkuY2xvbmVSYW5nZSgpO1xuICAgICAgICAgICAgaWYoIHJhbmdlLmdldEJvdW5kaW5nQ2xpZW50UmVjdCApIC8vIE1pc3NpbmcgZm9yIEZpcmVmb3ggMy41KzMuNlxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHZhciByZWN0ID0gcmFuZ2UuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgICAgICAgICAgICAgLy8gU2FmYXJpIDUuMSByZXR1cm5zIG51bGwsIElFOSByZXR1cm5zIDAvMC8wLzAgaWYgaW1hZ2Ugc2VsZWN0ZWRcbiAgICAgICAgICAgICAgICBpZiggcmVjdCAmJiByZWN0LmxlZnQgJiYgcmVjdC50b3AgJiYgcmVjdC5yaWdodCAmJiByZWN0LmJvdHRvbSApXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBNb2Rlcm4gYnJvd3NlcnMgcmV0dXJuIGZsb2F0aW5nLXBvaW50IG51bWJlcnNcbiAgICAgICAgICAgICAgICAgICAgICAgIGxlZnQ6IHBhcnNlSW50KHJlY3QubGVmdCksXG4gICAgICAgICAgICAgICAgICAgICAgICB0b3A6IHBhcnNlSW50KHJlY3QudG9wKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiBwYXJzZUludChyZWN0LnJpZ2h0IC0gcmVjdC5sZWZ0KSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogcGFyc2VJbnQocmVjdC5ib3R0b20gLSByZWN0LnRvcClcbiAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAvLyBvbiBXZWJraXQgJ3JhbmdlLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpJyBzb21ldGltZXMgcmV0dXJuIDAvMC8wLzAgLSBidXQgJ3JhbmdlLmdldENsaWVudFJlY3RzKCknIHdvcmtzXG4gICAgICAgICAgICAgICAgdmFyIHJlY3RzID0gcmFuZ2UuZ2V0Q2xpZW50UmVjdHMgPyByYW5nZS5nZXRDbGllbnRSZWN0cygpIDogW107XG4gICAgICAgICAgICAgICAgZm9yKCB2YXIgaT0wOyBpIDwgcmVjdHMubGVuZ3RoOyArK2kgKVxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHJlY3QgPSByZWN0c1tpXTtcbiAgICAgICAgICAgICAgICAgICAgaWYoIHJlY3QubGVmdCAmJiByZWN0LnRvcCAmJiByZWN0LnJpZ2h0ICYmIHJlY3QuYm90dG9tIClcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gTW9kZXJuIGJyb3dzZXJzIHJldHVybiBmbG9hdGluZy1wb2ludCBudW1iZXJzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGVmdDogcGFyc2VJbnQocmVjdC5sZWZ0KSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b3A6IHBhcnNlSW50KHJlY3QudG9wKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogcGFyc2VJbnQocmVjdC5yaWdodCAtIHJlY3QubGVmdCksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiBwYXJzZUludChyZWN0LmJvdHRvbSAtIHJlY3QudG9wKVxuICAgICAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvKlxuICAgICAgICAgICAgLy8gRmFsbCBiYWNrIHRvIGluc2VydGluZyBhIHRlbXBvcmFyeSBlbGVtZW50IChvbmx5IGZvciBGaXJlZm94IDMuNSBhbmQgMy42KVxuICAgICAgICAgICAgdmFyIHNwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgICAgICAgICBpZiggc3Bhbi5nZXRCb3VuZGluZ0NsaWVudFJlY3QgKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIC8vIEVuc3VyZSBzcGFuIGhhcyBkaW1lbnNpb25zIGFuZCBwb3NpdGlvbiBieVxuICAgICAgICAgICAgICAgIC8vIGFkZGluZyBhIHplcm8td2lkdGggc3BhY2UgY2hhcmFjdGVyXG4gICAgICAgICAgICAgICAgc3Bhbi5hcHBlbmRDaGlsZCggZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoJ1xcdTIwMGInKSApO1xuICAgICAgICAgICAgICAgIHJhbmdlLmluc2VydE5vZGUoIHNwYW4gKTtcbiAgICAgICAgICAgICAgICB2YXIgcmVjdCA9IHNwYW4uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgICAgICAgICAgICAgdmFyIHNwYW5QYXJlbnQgPSBzcGFuLnBhcmVudE5vZGU7XG4gICAgICAgICAgICAgICAgc3BhblBhcmVudC5yZW1vdmVDaGlsZCggc3BhbiApO1xuICAgICAgICAgICAgICAgIC8vIEdsdWUgYW55IGJyb2tlbiB0ZXh0IG5vZGVzIGJhY2sgdG9nZXRoZXJcbiAgICAgICAgICAgICAgICBzcGFuUGFyZW50Lm5vcm1hbGl6ZSgpO1xuICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAgIGxlZnQ6IHBhcnNlSW50KHJlY3QubGVmdCksXG4gICAgICAgICAgICAgICAgICAgIHRvcDogcGFyc2VJbnQocmVjdC50b3ApLFxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogcGFyc2VJbnQocmVjdC5yaWdodCAtIHJlY3QubGVmdCksXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogcGFyc2VJbnQocmVjdC5ib3R0b20gLSByZWN0LnRvcClcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgKi9cbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmKCBkb2N1bWVudC5zZWxlY3Rpb24gKVxuICAgICAgICB7XG4gICAgICAgICAgICB2YXIgc2VsID0gZG9jdW1lbnQuc2VsZWN0aW9uO1xuICAgICAgICAgICAgaWYoIHNlbC50eXBlICE9ICdDb250cm9sJyApXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdmFyIHJhbmdlID0gc2VsLmNyZWF0ZVJhbmdlKCk7XG4gICAgICAgICAgICAgICAgLy8gSUU4IHJldHVybiAwLzAvMC8wIGlmIGNhcmV0IHJpZ2h0IGJlZm9yZSBuZXdsaW5lXG4gICAgICAgICAgICAgICAgaWYoIHJhbmdlLmJvdW5kaW5nTGVmdCB8fCByYW5nZS5ib3VuZGluZ1RvcCB8fCByYW5nZS5ib3VuZGluZ1dpZHRoIHx8IHJhbmdlLmJvdW5kaW5nSGVpZ2h0IClcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxlZnQ6IHJhbmdlLmJvdW5kaW5nTGVmdCxcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvcDogcmFuZ2UuYm91bmRpbmdUb3AsXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogcmFuZ2UuYm91bmRpbmdXaWR0aCxcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogcmFuZ2UuYm91bmRpbmdIZWlnaHRcbiAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfTtcblxuICAgIHZhciBnZXRTZWxlY3Rpb25Db2xsYXBzZWQgPSBmdW5jdGlvbiggY29udGFpbmVyTm9kZSApXG4gICAge1xuICAgICAgICBpZiggd2luZG93LmdldFNlbGVjdGlvbiApXG4gICAgICAgIHtcbiAgICAgICAgICAgIHZhciBzZWwgPSB3aW5kb3cuZ2V0U2VsZWN0aW9uKCk7XG4gICAgICAgICAgICBpZiggc2VsLmlzQ29sbGFwc2VkIClcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmKCBkb2N1bWVudC5zZWxlY3Rpb24gKVxuICAgICAgICB7XG4gICAgICAgICAgICB2YXIgc2VsID0gZG9jdW1lbnQuc2VsZWN0aW9uO1xuICAgICAgICAgICAgaWYoIHNlbC50eXBlID09ICdUZXh0JyApXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdmFyIHJhbmdlID0gZG9jdW1lbnQuc2VsZWN0aW9uLmNyZWF0ZVJhbmdlKCk7XG4gICAgICAgICAgICAgICAgdmFyIHRleHRyYW5nZSA9IGRvY3VtZW50LmJvZHkuY3JlYXRlVGV4dFJhbmdlKCk7XG4gICAgICAgICAgICAgICAgdGV4dHJhbmdlLm1vdmVUb0VsZW1lbnRUZXh0KGNvbnRhaW5lck5vZGUpO1xuICAgICAgICAgICAgICAgIHRleHRyYW5nZS5zZXRFbmRQb2ludCgnRW5kVG9TdGFydCcsIHJhbmdlKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gcmFuZ2UuaHRtbFRleHQubGVuZ3RoID09IDA7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiggc2VsLnR5cGUgPT0gJ0NvbnRyb2wnICkgLy8gZS5nLiBhbiBpbWFnZSBzZWxlY3RlZFxuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIC8vIHNlbC50eXBlID09ICdOb25lJyAtPiBjb2xsYXBzZWQgc2VsZWN0aW9uXG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfTtcblxuICAgIC8vIGh0dHA6Ly9zdGFja292ZXJmbG93LmNvbS9xdWVzdGlvbnMvNzc4MTk2My9qcy1nZXQtYXJyYXktb2YtYWxsLXNlbGVjdGVkLW5vZGVzLWluLWNvbnRlbnRlZGl0YWJsZS1kaXZcbiAgICB2YXIgZ2V0U2VsZWN0ZWROb2RlcyA9IGZ1bmN0aW9uKCBjb250YWluZXJOb2RlIClcbiAgICB7XG4gICAgICAgIGlmKCB3aW5kb3cuZ2V0U2VsZWN0aW9uIClcbiAgICAgICAge1xuICAgICAgICAgICAgdmFyIHNlbCA9IHdpbmRvdy5nZXRTZWxlY3Rpb24oKTtcbiAgICAgICAgICAgIGlmKCAhIHNlbC5yYW5nZUNvdW50IClcbiAgICAgICAgICAgICAgICByZXR1cm4gW107XG4gICAgICAgICAgICB2YXIgbm9kZXMgPSBbXTtcbiAgICAgICAgICAgIGZvciggdmFyIGk9MDsgaSA8IHNlbC5yYW5nZUNvdW50OyArK2kgKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHZhciByYW5nZSA9IHNlbC5nZXRSYW5nZUF0KGkpLFxuICAgICAgICAgICAgICAgICAgICBub2RlID0gcmFuZ2Uuc3RhcnRDb250YWluZXIsXG4gICAgICAgICAgICAgICAgICAgIGVuZE5vZGUgPSByYW5nZS5lbmRDb250YWluZXI7XG4gICAgICAgICAgICAgICAgd2hpbGUoIG5vZGUgKVxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gYWRkIHRoaXMgbm9kZT9cbiAgICAgICAgICAgICAgICAgICAgaWYoIG5vZGUgIT0gY29udGFpbmVyTm9kZSApXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBub2RlX2luc2lkZV9zZWxlY3Rpb24gPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKCBzZWwuY29udGFpbnNOb2RlIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBub2RlX2luc2lkZV9zZWxlY3Rpb24gPSBzZWwuY29udGFpbnNOb2RlKCBub2RlLCB0cnVlICk7XG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNlIC8vIElFMTFcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBodHRwOi8vc3RhY2tvdmVyZmxvdy5jb20vcXVlc3Rpb25zLzU4ODQyMTAvaG93LXRvLWZpbmQtaWYtYS1odG1sZWxlbWVudC1pcy1lbmNsb3NlZC1pbi1zZWxlY3RlZC10ZXh0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG5vZGVyYW5nZSA9IGRvY3VtZW50LmNyZWF0ZVJhbmdlKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbm9kZXJhbmdlLnNlbGVjdE5vZGVDb250ZW50cyggbm9kZSApO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvciggdmFyIGk9MDsgaSA8IHNlbC5yYW5nZUNvdW50OyArK2kgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHJhbmdlID0gc2VsLmdldFJhbmdlQXQoaSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIHN0YXJ0IGFmdGVyIG9yIGVuZCBiZWZvcmUgLT4gc2tpcCBub2RlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmKCByYW5nZS5jb21wYXJlQm91bmRhcnlQb2ludHMocmFuZ2UuRU5EX1RPX1NUQVJULG5vZGVyYW5nZSkgPj0gMCAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmFuZ2UuY29tcGFyZUJvdW5kYXJ5UG9pbnRzKHJhbmdlLlNUQVJUX1RPX0VORCxub2RlcmFuZ2UpIDw9IDAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBub2RlX2luc2lkZV9zZWxlY3Rpb24gPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiggbm9kZV9pbnNpZGVfc2VsZWN0aW9uIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBub2Rlcy5wdXNoKCBub2RlICk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgbm9kZSA9IG5leHROb2RlKCBub2RlLCBub2RlID09IGVuZE5vZGUgPyBlbmROb2RlIDogY29udGFpbmVyTm9kZSApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIEZhbGxiYWNrXG4gICAgICAgICAgICBpZiggbm9kZXMubGVuZ3RoID09IDAgJiYgaXNPckNvbnRhaW5zTm9kZShjb250YWluZXJOb2RlLHNlbC5mb2N1c05vZGUpICYmIHNlbC5mb2N1c05vZGUgIT0gY29udGFpbmVyTm9kZSApXG4gICAgICAgICAgICAgICAgbm9kZXMucHVzaCggc2VsLmZvY3VzTm9kZSApO1xuICAgICAgICAgICAgcmV0dXJuIG5vZGVzO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYoIGRvY3VtZW50LnNlbGVjdGlvbiApXG4gICAgICAgIHtcbiAgICAgICAgICAgIHZhciBzZWwgPSBkb2N1bWVudC5zZWxlY3Rpb247XG4gICAgICAgICAgICBpZiggc2VsLnR5cGUgPT0gJ1RleHQnIClcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICB2YXIgbm9kZXMgPSBbXTtcbiAgICAgICAgICAgICAgICB2YXIgcmFuZ2VzID0gc2VsLmNyZWF0ZVJhbmdlQ29sbGVjdGlvbigpO1xuICAgICAgICAgICAgICAgIGZvciggdmFyIGk9MDsgaSA8IHJhbmdlcy5sZW5ndGg7ICsraSApXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICB2YXIgcmFuZ2UgPSByYW5nZXNbaV0sXG4gICAgICAgICAgICAgICAgICAgICAgICBwYXJlbnROb2RlID0gcmFuZ2UucGFyZW50RWxlbWVudCgpLFxuICAgICAgICAgICAgICAgICAgICAgICAgbm9kZSA9IHBhcmVudE5vZGU7XG4gICAgICAgICAgICAgICAgICAgIHdoaWxlKCBub2RlIClcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gTm8gY2x1ZSBob3cgdG8gZGV0ZWN0IHdoZXRoZXIgYSBUZXh0Tm9kZSBpcyB3aXRoaW4gdGhlIHNlbGVjdGlvbi4uLlxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gRWxlbWVudE5vZGUgaXMgZWFzeTogaHR0cDovL3N0YWNrb3ZlcmZsb3cuY29tL3F1ZXN0aW9ucy81ODg0MjEwL2hvdy10by1maW5kLWlmLWEtaHRtbGVsZW1lbnQtaXMtZW5jbG9zZWQtaW4tc2VsZWN0ZWQtdGV4dFxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG5vZGVyYW5nZSA9IHJhbmdlLmR1cGxpY2F0ZSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgbm9kZXJhbmdlLm1vdmVUb0VsZW1lbnRUZXh0KCBub2RlLm5vZGVUeXBlICE9IE5vZGVfRUxFTUVOVF9OT0RFID8gbm9kZS5wYXJlbnROb2RlIDogbm9kZSApO1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gc3RhcnQgYWZ0ZXIgb3IgZW5kIGJlZm9yZSAtPiBza2lwIG5vZGVcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKCBub2RlcmFuZ2UuY29tcGFyZUVuZFBvaW50cygnRW5kVG9TdGFydCcscmFuZ2UpID49IDAgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBub2RlcmFuZ2UuY29tcGFyZUVuZFBvaW50cygnU3RhcnRUb0VuZCcscmFuZ2UpIDw9IDAgKVxuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIG5vIFwiQXJyYXkuaW5kZXhPZigpXCIgaW4gSUU4XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGluX2FycmF5ID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yKCB2YXIgaj0wOyBqIDwgbm9kZXMubGVuZ3RoOyArK2ogKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYoIG5vZGVzW2pdICE9PSBub2RlIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbl9hcnJheSA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiggISBpbl9hcnJheSApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vZGVzLnB1c2goIG5vZGUgKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIG5vZGUgPSBuZXh0Tm9kZSggbm9kZSwgcGFyZW50Tm9kZSApO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8vIEZhbGxiYWNrXG4gICAgICAgICAgICAgICAgaWYoIG5vZGVzLmxlbmd0aCA9PSAwICYmIGlzT3JDb250YWluc05vZGUoY29udGFpbmVyTm9kZSxkb2N1bWVudC5hY3RpdmVFbGVtZW50KSAmJiBkb2N1bWVudC5hY3RpdmVFbGVtZW50ICE9IGNvbnRhaW5lck5vZGUgKVxuICAgICAgICAgICAgICAgICAgICBub2Rlcy5wdXNoKCBkb2N1bWVudC5hY3RpdmVFbGVtZW50ICk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG5vZGVzO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYoIHNlbC50eXBlID09ICdDb250cm9sJyApIC8vIGUuZy4gYW4gaW1hZ2Ugc2VsZWN0ZWRcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICB2YXIgbm9kZXMgPSBbXTtcbiAgICAgICAgICAgICAgICAvLyBodHRwOi8vbXNkbi5taWNyb3NvZnQuY29tL2VuLXVzL2xpYnJhcnkvaWUvaGg4MjYwMjElMjh2PXZzLjg1JTI5LmFzcHhcbiAgICAgICAgICAgICAgICB2YXIgcmFuZ2UgPSBzZWwuY3JlYXRlUmFuZ2UoKTtcbiAgICAgICAgICAgICAgICBmb3IoIHZhciBpPTA7IGkgPCByYW5nZS5sZW5ndGg7ICsraSApXG4gICAgICAgICAgICAgICAgICAgIG5vZGVzLnB1c2goIHJhbmdlKGkpICk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG5vZGVzO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBbXTtcbiAgICB9O1xuXG4gICAgLy8gaHR0cDovL3N0YWNrb3ZlcmZsb3cuY29tL3F1ZXN0aW9ucy84NTEzMzY4L2NvbGxhcHNlLXNlbGVjdGlvbi10by1zdGFydC1vZi1zZWxlY3Rpb24tbm90LWRpdlxuICAgIHZhciBjb2xsYXBzZVNlbGVjdGlvbkVuZCA9IGZ1bmN0aW9uKClcbiAgICB7XG4gICAgICAgIGlmKCB3aW5kb3cuZ2V0U2VsZWN0aW9uIClcbiAgICAgICAge1xuICAgICAgICAgICAgdmFyIHNlbCA9IHdpbmRvdy5nZXRTZWxlY3Rpb24oKTtcbiAgICAgICAgICAgIGlmKCAhIHNlbC5pc0NvbGxhcHNlZCApXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgLy8gRm9ybS1zdWJtaXRzIHZpYSBFbnRlciB0aHJvdyAnTlNfRVJST1JfRkFJTFVSRScgb24gRmlyZWZveCAzNFxuICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgIHNlbC5jb2xsYXBzZVRvRW5kKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNhdGNoKCBlICkge1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmKCBkb2N1bWVudC5zZWxlY3Rpb24gKVxuICAgICAgICB7XG4gICAgICAgICAgICB2YXIgc2VsID0gZG9jdW1lbnQuc2VsZWN0aW9uO1xuICAgICAgICAgICAgaWYoIHNlbC50eXBlICE9ICdDb250cm9sJyApXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdmFyIHJhbmdlID0gc2VsLmNyZWF0ZVJhbmdlKCk7XG4gICAgICAgICAgICAgICAgcmFuZ2UuY29sbGFwc2UoZmFsc2UpO1xuICAgICAgICAgICAgICAgIHJhbmdlLnNlbGVjdCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfTtcblxuICAgIC8vIGh0dHA6Ly9zdGFja292ZXJmbG93LmNvbS9xdWVzdGlvbnMvMTUxNTc0MzUvZ2V0LWxhc3QtY2hhcmFjdGVyLWJlZm9yZS1jYXJldC1wb3NpdGlvbi1pbi1qYXZhc2NyaXB0XG4gICAgLy8gaHR0cDovL3N0YWNrb3ZlcmZsb3cuY29tL3F1ZXN0aW9ucy8xMTI0NzczNy9ob3ctY2FuLWktZ2V0LXRoZS13b3JkLXRoYXQtdGhlLWNhcmV0LWlzLXVwb24taW5zaWRlLWEtY29udGVudGVkaXRhYmxlLWRpdlxuICAgIHZhciBleHBhbmRTZWxlY3Rpb25DYXJldCA9IGZ1bmN0aW9uKCBjb250YWluZXJOb2RlLCBwcmVjZWRpbmcsIGZvbGxvd2luZyApXG4gICAge1xuICAgICAgICBpZiggd2luZG93LmdldFNlbGVjdGlvbiApXG4gICAgICAgIHtcbiAgICAgICAgICAgIHZhciBzZWwgPSB3aW5kb3cuZ2V0U2VsZWN0aW9uKCk7XG4gICAgICAgICAgICBpZiggc2VsLm1vZGlmeSApXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgZm9yKCB2YXIgaT0wOyBpIDwgcHJlY2VkaW5nOyArK2kgKVxuICAgICAgICAgICAgICAgICAgICBzZWwubW9kaWZ5KCdleHRlbmQnLCAnYmFja3dhcmQnLCAnY2hhcmFjdGVyJyk7XG4gICAgICAgICAgICAgICAgZm9yKCB2YXIgaT0wOyBpIDwgZm9sbG93aW5nOyArK2kgKVxuICAgICAgICAgICAgICAgICAgICBzZWwubW9kaWZ5KCdleHRlbmQnLCAnZm9yd2FyZCcsICdjaGFyYWN0ZXInKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAvLyBub3Qgc28gZWFzeSBpZiB0aGUgc3RlcHMgd291bGQgY292ZXIgbXVsdGlwbGUgbm9kZXMgLi4uXG4gICAgICAgICAgICAgICAgdmFyIHJhbmdlID0gc2VsLmdldFJhbmdlQXQoMCk7XG4gICAgICAgICAgICAgICAgcmFuZ2Uuc2V0U3RhcnQoIHJhbmdlLnN0YXJ0Q29udGFpbmVyLCByYW5nZS5zdGFydE9mZnNldCAtIHByZWNlZGluZyApO1xuICAgICAgICAgICAgICAgIHJhbmdlLnNldEVuZCggcmFuZ2UuZW5kQ29udGFpbmVyLCByYW5nZS5lbmRPZmZzZXQgKyBmb2xsb3dpbmcgKTtcbiAgICAgICAgICAgICAgICBzZWwucmVtb3ZlQWxsUmFuZ2VzKCk7XG4gICAgICAgICAgICAgICAgc2VsLmFkZFJhbmdlKHJhbmdlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmKCBkb2N1bWVudC5zZWxlY3Rpb24gKVxuICAgICAgICB7XG4gICAgICAgICAgICB2YXIgc2VsID0gZG9jdW1lbnQuc2VsZWN0aW9uO1xuICAgICAgICAgICAgaWYoIHNlbC50eXBlICE9ICdDb250cm9sJyApXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdmFyIHJhbmdlID0gc2VsLmNyZWF0ZVJhbmdlKCk7XG4gICAgICAgICAgICAgICAgcmFuZ2UuY29sbGFwc2UodHJ1ZSk7XG4gICAgICAgICAgICAgICAgcmFuZ2UubW92ZVN0YXJ0KCdjaGFyYWN0ZXInLCAtcHJlY2VkaW5nKTtcbiAgICAgICAgICAgICAgICByYW5nZS5tb3ZlRW5kKCdjaGFyYWN0ZXInLCBmb2xsb3dpbmcpO1xuICAgICAgICAgICAgICAgIHJhbmdlLnNlbGVjdCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfTtcblxuICAgIC8vIGh0dHA6Ly9zdGFja292ZXJmbG93LmNvbS9xdWVzdGlvbnMvNDY1MjczNC9yZXR1cm4taHRtbC1mcm9tLWEtdXNlci1zZWxlY3RlZC10ZXh0LzQ2NTI4MjQjNDY1MjgyNFxuICAgIHZhciBnZXRTZWxlY3Rpb25IdG1sID0gZnVuY3Rpb24oIGNvbnRhaW5lck5vZGUgKVxuICAgIHtcbiAgICAgICAgaWYoIGdldFNlbGVjdGlvbkNvbGxhcHNlZCggY29udGFpbmVyTm9kZSApIClcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICBpZiggd2luZG93LmdldFNlbGVjdGlvbiApXG4gICAgICAgIHtcbiAgICAgICAgICAgIHZhciBzZWwgPSB3aW5kb3cuZ2V0U2VsZWN0aW9uKCk7XG4gICAgICAgICAgICBpZiggc2VsLnJhbmdlQ291bnQgKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHZhciBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKSxcbiAgICAgICAgICAgICAgICAgICAgbGVuID0gc2VsLnJhbmdlQ291bnQ7XG4gICAgICAgICAgICAgICAgZm9yKCB2YXIgaT0wOyBpIDwgbGVuOyArK2kgKVxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGNvbnRlbnRzID0gc2VsLmdldFJhbmdlQXQoaSkuY2xvbmVDb250ZW50cygpO1xuICAgICAgICAgICAgICAgICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoY29udGVudHMpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gY29udGFpbmVyLmlubmVySFRNTDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmKCBkb2N1bWVudC5zZWxlY3Rpb24gKVxuICAgICAgICB7XG4gICAgICAgICAgICB2YXIgc2VsID0gZG9jdW1lbnQuc2VsZWN0aW9uO1xuICAgICAgICAgICAgaWYoIHNlbC50eXBlID09ICdUZXh0JyApXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdmFyIHJhbmdlID0gc2VsLmNyZWF0ZVJhbmdlKCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJhbmdlLmh0bWxUZXh0O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH07XG5cbiAgICB2YXIgc2VsZWN0aW9uSW5zaWRlID0gZnVuY3Rpb24oIGNvbnRhaW5lck5vZGUsIGZvcmNlIClcbiAgICB7XG4gICAgICAgIC8vIHNlbGVjdGlvbiBpbnNpZGUgZWRpdG9yP1xuICAgICAgICBpZiggd2luZG93LmdldFNlbGVjdGlvbiApXG4gICAgICAgIHtcbiAgICAgICAgICAgIHZhciBzZWwgPSB3aW5kb3cuZ2V0U2VsZWN0aW9uKCk7XG4gICAgICAgICAgICBpZiggaXNPckNvbnRhaW5zTm9kZShjb250YWluZXJOb2RlLHNlbC5hbmNob3JOb2RlKSAmJiBpc09yQ29udGFpbnNOb2RlKGNvbnRhaW5lck5vZGUsc2VsLmZvY3VzTm9kZSkgKVxuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgLy8gc2VsZWN0aW9uIGF0IGxlYXN0IHBhcnRseSBvdXRzaWRlIGVkaXRvclxuICAgICAgICAgICAgaWYoICEgZm9yY2UgKVxuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIC8vIGZvcmNlIHNlbGVjdGlvbiB0byBlZGl0b3JcbiAgICAgICAgICAgIHZhciByYW5nZSA9IGRvY3VtZW50LmNyZWF0ZVJhbmdlKCk7XG4gICAgICAgICAgICByYW5nZS5zZWxlY3ROb2RlQ29udGVudHMoIGNvbnRhaW5lck5vZGUgKTtcbiAgICAgICAgICAgIHJhbmdlLmNvbGxhcHNlKCBmYWxzZSApO1xuICAgICAgICAgICAgc2VsLnJlbW92ZUFsbFJhbmdlcygpO1xuICAgICAgICAgICAgc2VsLmFkZFJhbmdlKHJhbmdlKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmKCBkb2N1bWVudC5zZWxlY3Rpb24gKVxuICAgICAgICB7XG4gICAgICAgICAgICB2YXIgc2VsID0gZG9jdW1lbnQuc2VsZWN0aW9uO1xuICAgICAgICAgICAgaWYoIHNlbC50eXBlID09ICdDb250cm9sJyApIC8vIGUuZy4gYW4gaW1hZ2Ugc2VsZWN0ZWRcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAvLyBodHRwOi8vbXNkbi5taWNyb3NvZnQuY29tL2VuLXVzL2xpYnJhcnkvaWUvaGg4MjYwMjElMjh2PXZzLjg1JTI5LmFzcHhcbiAgICAgICAgICAgICAgICB2YXIgcmFuZ2UgPSBzZWwuY3JlYXRlUmFuZ2UoKTtcbiAgICAgICAgICAgICAgICBpZiggcmFuZ2UubGVuZ3RoICE9IDAgJiYgaXNPckNvbnRhaW5zTm9kZShjb250YWluZXJOb2RlLHJhbmdlKDApKSApIC8vIHRlc3Qgb25seSB0aGUgZmlyc3QgZWxlbWVudFxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgLy9pZiggc2VsLnR5cGUgPT0gJ1RleHQnIHx8IHNlbC50eXBlID09ICdOb25lJyApXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgLy8gUmFuZ2Ugb2YgY29udGFpbmVyXG4gICAgICAgICAgICAgICAgLy8gaHR0cDovL3N0YWNrb3ZlcmZsb3cuY29tL3F1ZXN0aW9ucy8xMjI0Mzg5OC9ob3ctdG8tc2VsZWN0LWFsbC10ZXh0LWluLWNvbnRlbnRlZGl0YWJsZS1kaXZcbiAgICAgICAgICAgICAgICB2YXIgcmFuZ2VDb250YWluZXIgPSBkb2N1bWVudC5ib2R5LmNyZWF0ZVRleHRSYW5nZSgpO1xuICAgICAgICAgICAgICAgIHJhbmdlQ29udGFpbmVyLm1vdmVUb0VsZW1lbnRUZXh0KGNvbnRhaW5lck5vZGUpO1xuICAgICAgICAgICAgICAgIC8vIENvbXBhcmUgd2l0aCBzZWxlY3Rpb24gcmFuZ2VcbiAgICAgICAgICAgICAgICB2YXIgcmFuZ2UgPSBzZWwuY3JlYXRlUmFuZ2UoKTtcbiAgICAgICAgICAgICAgICBpZiggcmFuZ2VDb250YWluZXIuaW5SYW5nZShyYW5nZSkgKVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIHNlbGVjdGlvbiBhdCBsZWFzdCBwYXJ0bHkgb3V0c2lkZSBlZGl0b3JcbiAgICAgICAgICAgIGlmKCAhIGZvcmNlIClcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAvLyBmb3JjZSBzZWxlY3Rpb24gdG8gZWRpdG9yXG4gICAgICAgICAgICAvLyBodHRwOi8vc3RhY2tvdmVyZmxvdy5jb20vcXVlc3Rpb25zLzEyMjQzODk4L2hvdy10by1zZWxlY3QtYWxsLXRleHQtaW4tY29udGVudGVkaXRhYmxlLWRpdlxuICAgICAgICAgICAgdmFyIHJhbmdlID0gZG9jdW1lbnQuYm9keS5jcmVhdGVUZXh0UmFuZ2UoKTtcbiAgICAgICAgICAgIHJhbmdlLm1vdmVUb0VsZW1lbnRUZXh0KGNvbnRhaW5lck5vZGUpO1xuICAgICAgICAgICAgcmFuZ2Uuc2V0RW5kUG9pbnQoJ1N0YXJ0VG9FbmQnLHJhbmdlKTsgLy8gY29sbGFwc2VcbiAgICAgICAgICAgIHJhbmdlLnNlbGVjdCgpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH07XG5cbiAgICAvKlxuICAgIHZhciBjbGlwU2VsZWN0aW9uVG8gPSBmdW5jdGlvbiggY29udGFpbmVyTm9kZSApXG4gICAge1xuICAgICAgICBpZiggd2luZG93LmdldFNlbGVjdGlvbiAmJiBjb250YWluZXJOb2RlLmNvbXBhcmVEb2N1bWVudFBvc2l0aW9uIClcbiAgICAgICAge1xuICAgICAgICAgICAgdmFyIHNlbCA9IHdpbmRvdy5nZXRTZWxlY3Rpb24oKTtcbiAgICAgICAgICAgIHZhciBsZWZ0X25vZGUgPSBzZWwuYW5jaG9yTm9kZSxcbiAgICAgICAgICAgICAgICBsZWZ0X29mZnNldCA9IHNlbC5hbmNob3JPZmZzZXQsXG4gICAgICAgICAgICAgICAgcmlnaHRfbm9kZSA9IHNlbC5mb2N1c05vZGUsXG4gICAgICAgICAgICAgICAgcmlnaHRfb2Zmc2V0ID0gc2VsLmZvY3VzT2Zmc2V0O1xuICAgICAgICAgICAgLy8gaHR0cDovL3N0YWNrb3ZlcmZsb3cuY29tL3F1ZXN0aW9ucy8xMDcxMDczMy9kb20tZGV0ZXJtaW5lLWlmLXRoZS1hbmNob3Jub2RlLW9yLWZvY3Vzbm9kZS1pcy1vbi10aGUtbGVmdC1zaWRlXG4gICAgICAgICAgICBpZiggKGxlZnRfbm9kZSA9PSByaWdodF9ub2RlICYmIGxlZnRfb2Zmc2V0ID4gcmlnaHRfb2Zmc2V0KSB8fFxuICAgICAgICAgICAgICAgIChsZWZ0X25vZGUuY29tcGFyZURvY3VtZW50UG9zaXRpb24ocmlnaHRfbm9kZSkgJiBOb2RlLkRPQ1VNRU5UX1BPU0lUSU9OX1BSRUNFRElORykgKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIC8vIFJpZ2h0LXRvLWxlZnQgc2VsZWN0aW9uXG4gICAgICAgICAgICAgICAgbGVmdF9ub2RlID0gc2VsLmZvY3VzTm9kZTtcbiAgICAgICAgICAgICAgICBsZWZ0X29mZnNldCA9IHNlbC5mb2N1c09mZnNldDtcbiAgICAgICAgICAgICAgICByaWdodF9ub2RlID0gc2VsLmFuY2hvck5vZGUsXG4gICAgICAgICAgICAgICAgcmlnaHRfb2Zmc2V0ID0gc2VsLmFuY2hvck9mZnNldDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIFNwZWVkIHVwOiBzZWxlY3Rpb24gaW5zaWRlIGVkaXRvclxuICAgICAgICAgICAgdmFyIGxlZnRfaW5zaWRlID0gaXNPckNvbnRhaW5zTm9kZShjb250YWluZXJOb2RlLGxlZnRfbm9kZSksXG4gICAgICAgICAgICAgICAgcmlnaHRfaW5zaWRlID0gaXNPckNvbnRhaW5zTm9kZShjb250YWluZXJOb2RlLHJpZ2h0X25vZGUpO1xuICAgICAgICAgICAgaWYoIGxlZnRfaW5zaWRlICYmIHJpZ2h0X2luc2lkZSApXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICAvLyBTZWxlY3Rpb24gYmVmb3JlL2FmdGVyIGNvbnRhaW5lcj9cbiAgICAgICAgICAgIGlmKCAhIGxlZnRfaW5zaWRlICYmIGNvbnRhaW5lck5vZGUuY29tcGFyZURvY3VtZW50UG9zaXRpb24obGVmdF9ub2RlKSAmIE5vZGUuRE9DVU1FTlRfUE9TSVRJT05fRk9MTE9XSU5HIClcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7IC8vIHNlbGVjdGlvbiBhZnRlclxuICAgICAgICAgICAgaWYoICEgcmlnaHRfaW5zaWRlICYmIGNvbnRhaW5lck5vZGUuY29tcGFyZURvY3VtZW50UG9zaXRpb24ocmlnaHRfbm9kZSkgJiBOb2RlLkRPQ1VNRU5UX1BPU0lUSU9OX1BSRUNFRElORyApXG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlOyAvLyBzZWxlY3Rpb24gYmVmb3JlXG4gICAgICAgICAgICAvLyBTZWxlY3Rpb24gcGFydGx5IGJlZm9yZS9hZnRlciBjb250YWluZXJcbiAgICAgICAgICAgIC8vIGh0dHA6Ly9zdGFja292ZXJmbG93LmNvbS9xdWVzdGlvbnMvMTIyNDM4OTgvaG93LXRvLXNlbGVjdC1hbGwtdGV4dC1pbi1jb250ZW50ZWRpdGFibGUtZGl2XG4gICAgICAgICAgICB2YXIgcmFuZ2UgPSBkb2N1bWVudC5jcmVhdGVSYW5nZSgpO1xuICAgICAgICAgICAgcmFuZ2Uuc2VsZWN0Tm9kZUNvbnRlbnRzKCBjb250YWluZXJOb2RlICk7XG4gICAgICAgICAgICBpZiggbGVmdF9pbnNpZGUgKVxuICAgICAgICAgICAgICAgIHJhbmdlLnNldFN0YXJ0KCBsZWZ0X25vZGUsIGxlZnRfb2Zmc2V0ICk7XG4gICAgICAgICAgICBpZiggcmlnaHRfaW5zaWRlIClcbiAgICAgICAgICAgICAgICByYW5nZS5zZXRFbmQoIHJpZ2h0X25vZGUsIHJpZ2h0X29mZnNldCApO1xuICAgICAgICAgICAgc2VsLnJlbW92ZUFsbFJhbmdlcygpO1xuICAgICAgICAgICAgc2VsLmFkZFJhbmdlKHJhbmdlKTtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYoIGRvY3VtZW50LnNlbGVjdGlvbiApXG4gICAgICAgIHtcbiAgICAgICAgICAgIHZhciBzZWwgPSBkb2N1bWVudC5zZWxlY3Rpb247XG4gICAgICAgICAgICBpZiggc2VsLnR5cGUgPT0gJ1RleHQnIClcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAvLyBSYW5nZSBvZiBjb250YWluZXJcbiAgICAgICAgICAgICAgICAvLyBodHRwOi8vc3RhY2tvdmVyZmxvdy5jb20vcXVlc3Rpb25zLzEyMjQzODk4L2hvdy10by1zZWxlY3QtYWxsLXRleHQtaW4tY29udGVudGVkaXRhYmxlLWRpdlxuICAgICAgICAgICAgICAgIHZhciByYW5nZUNvbnRhaW5lciA9IGRvY3VtZW50LmJvZHkuY3JlYXRlVGV4dFJhbmdlKCk7XG4gICAgICAgICAgICAgICAgcmFuZ2VDb250YWluZXIubW92ZVRvRWxlbWVudFRleHQoY29udGFpbmVyTm9kZSk7XG4gICAgICAgICAgICAgICAgLy8gQ29tcGFyZSB3aXRoIHNlbGVjdGlvbiByYW5nZVxuICAgICAgICAgICAgICAgIHZhciByYW5nZSA9IHNlbC5jcmVhdGVSYW5nZSgpO1xuICAgICAgICAgICAgICAgIGlmKCByYW5nZUNvbnRhaW5lci5pblJhbmdlKHJhbmdlKSApXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgICAgIC8vIFNlbGVjdGlvbiBiZWZvcmUvYWZ0ZXIgY29udGFpbmVyP1xuICAgICAgICAgICAgICAgIGlmKCByYW5nZUNvbnRhaW5lci5jb21wYXJlRW5kUG9pbnRzKCdTdGFydFRvRW5kJyxyYW5nZSkgPiAwIClcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgICAgIGlmKCByYW5nZUNvbnRhaW5lci5jb21wYXJlRW5kUG9pbnRzKCdFbmRUb1N0YXJ0JyxyYW5nZSkgPCAwIClcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgICAgIC8vIFNlbGVjdGlvbiBwYXJ0bHkgYmVmb3JlL2FmdGVyIGNvbnRhaW5lclxuICAgICAgICAgICAgICAgIGlmKCByYW5nZUNvbnRhaW5lci5jb21wYXJlRW5kUG9pbnRzKCdTdGFydFRvU3RhcnQnLHJhbmdlKSA+IDAgKVxuICAgICAgICAgICAgICAgICAgICByYW5nZS5zZXRFbmRQb2ludCgnU3RhcnRUb1N0YXJ0JyxyYW5nZUNvbnRhaW5lcik7XG4gICAgICAgICAgICAgICAgaWYoIHJhbmdlQ29udGFpbmVyLmNvbXBhcmVFbmRQb2ludHMoJ0VuZFRvRW5kJyxyYW5nZSkgPCAwIClcbiAgICAgICAgICAgICAgICAgICAgcmFuZ2Uuc2V0RW5kUG9pbnQoJ0VuZFRvRW5kJyxyYW5nZUNvbnRhaW5lcik7XG4gICAgICAgICAgICAgICAgLy8gc2VsZWN0IHJhbmdlXG4gICAgICAgICAgICAgICAgcmFuZ2Uuc2VsZWN0KCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfTtcbiAgICAqL1xuXG4gICAgLy8gaHR0cDovL3N0YWNrb3ZlcmZsb3cuY29tL3F1ZXN0aW9ucy82NjkwNzUyL2luc2VydC1odG1sLWF0LWNhcmV0LWluLWEtY29udGVudGVkaXRhYmxlLWRpdi82NjkxMjk0IzY2OTEyOTRcbiAgICAvLyBodHRwOi8vc3RhY2tvdmVyZmxvdy5jb20vcXVlc3Rpb25zLzQ4MjM2OTEvaW5zZXJ0LWFuLWh0bWwtZWxlbWVudC1pbi1hLWNvbnRlbnRlZGl0YWJsZS1lbGVtZW50XG4gICAgLy8gaHR0cDovL3N0YWNrb3ZlcmZsb3cuY29tL3F1ZXN0aW9ucy82MTM5MTA3L3Byb2dyYW1hdGljYWxseS1zZWxlY3QtdGV4dC1pbi1hLWNvbnRlbnRlZGl0YWJsZS1odG1sLWVsZW1lbnRcbiAgICB2YXIgcGFzdGVIdG1sQXRDYXJldCA9IGZ1bmN0aW9uKCBjb250YWluZXJOb2RlLCBodG1sIClcbiAgICB7XG4gICAgICAgIGlmKCB3aW5kb3cuZ2V0U2VsZWN0aW9uIClcbiAgICAgICAge1xuICAgICAgICAgICAgLy8gSUU5IGFuZCBub24tSUVcbiAgICAgICAgICAgIHZhciBzZWwgPSB3aW5kb3cuZ2V0U2VsZWN0aW9uKCk7XG4gICAgICAgICAgICBpZiggc2VsLmdldFJhbmdlQXQgJiYgc2VsLnJhbmdlQ291bnQgKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHZhciByYW5nZSA9IHNlbC5nZXRSYW5nZUF0KDApO1xuICAgICAgICAgICAgICAgIC8vIFJhbmdlLmNyZWF0ZUNvbnRleHR1YWxGcmFnbWVudCgpIHdvdWxkIGJlIHVzZWZ1bCBoZXJlIGJ1dCBpc1xuICAgICAgICAgICAgICAgIC8vIG9ubHkgcmVsYXRpdmVseSByZWNlbnRseSBzdGFuZGFyZGl6ZWQgYW5kIGlzIG5vdCBzdXBwb3J0ZWQgaW5cbiAgICAgICAgICAgICAgICAvLyBzb21lIGJyb3dzZXJzIChJRTksIGZvciBvbmUpXG4gICAgICAgICAgICAgICAgdmFyIGVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICAgICAgZWwuaW5uZXJIVE1MID0gaHRtbDtcbiAgICAgICAgICAgICAgICB2YXIgZnJhZyA9IGRvY3VtZW50LmNyZWF0ZURvY3VtZW50RnJhZ21lbnQoKSwgbm9kZSwgbGFzdE5vZGU7XG4gICAgICAgICAgICAgICAgd2hpbGUgKCAobm9kZSA9IGVsLmZpcnN0Q2hpbGQpICkge1xuICAgICAgICAgICAgICAgICAgICBsYXN0Tm9kZSA9IGZyYWcuYXBwZW5kQ2hpbGQobm9kZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmKCBpc09yQ29udGFpbnNOb2RlKGNvbnRhaW5lck5vZGUsIHJhbmdlLmNvbW1vbkFuY2VzdG9yQ29udGFpbmVyKSApXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICByYW5nZS5kZWxldGVDb250ZW50cygpO1xuICAgICAgICAgICAgICAgICAgICByYW5nZS5pbnNlcnROb2RlKGZyYWcpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgY29udGFpbmVyTm9kZS5hcHBlbmRDaGlsZChmcmFnKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLy8gUHJlc2VydmUgdGhlIHNlbGVjdGlvblxuICAgICAgICAgICAgICAgIGlmKCBsYXN0Tm9kZSApXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICByYW5nZSA9IHJhbmdlLmNsb25lUmFuZ2UoKTtcbiAgICAgICAgICAgICAgICAgICAgcmFuZ2Uuc2V0U3RhcnRBZnRlcihsYXN0Tm9kZSk7XG4gICAgICAgICAgICAgICAgICAgIHJhbmdlLmNvbGxhcHNlKHRydWUpO1xuICAgICAgICAgICAgICAgICAgICBzZWwucmVtb3ZlQWxsUmFuZ2VzKCk7XG4gICAgICAgICAgICAgICAgICAgIHNlbC5hZGRSYW5nZShyYW5nZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYoIGRvY3VtZW50LnNlbGVjdGlvbiApXG4gICAgICAgIHtcbiAgICAgICAgICAgIC8vIElFIDw9IDhcbiAgICAgICAgICAgIHZhciBzZWwgPSBkb2N1bWVudC5zZWxlY3Rpb247XG4gICAgICAgICAgICBpZiggc2VsLnR5cGUgIT0gJ0NvbnRyb2wnIClcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICB2YXIgb3JpZ2luYWxSYW5nZSA9IHNlbC5jcmVhdGVSYW5nZSgpO1xuICAgICAgICAgICAgICAgIG9yaWdpbmFsUmFuZ2UuY29sbGFwc2UodHJ1ZSk7XG4gICAgICAgICAgICAgICAgdmFyIHJhbmdlID0gc2VsLmNyZWF0ZVJhbmdlKCk7XG4gICAgICAgICAgICAgICAgaWYoIGlzT3JDb250YWluc05vZGUoY29udGFpbmVyTm9kZSwgcmFuZ2UucGFyZW50RWxlbWVudCgpKSApXG4gICAgICAgICAgICAgICAgICAgIHJhbmdlLnBhc3RlSFRNTCggaHRtbCApO1xuICAgICAgICAgICAgICAgIGVsc2UgLy8gc2ltcGx5IGFwcGVuZCB0byBFZGl0b3JcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHZhciB0ZXh0UmFuZ2UgPSBkb2N1bWVudC5ib2R5LmNyZWF0ZVRleHRSYW5nZSgpO1xuICAgICAgICAgICAgICAgICAgICB0ZXh0UmFuZ2UubW92ZVRvRWxlbWVudFRleHQoY29udGFpbmVyTm9kZSk7XG4gICAgICAgICAgICAgICAgICAgIHRleHRSYW5nZS5jb2xsYXBzZShmYWxzZSk7XG4gICAgICAgICAgICAgICAgICAgIHRleHRSYW5nZS5zZWxlY3QoKTtcbiAgICAgICAgICAgICAgICAgICAgdGV4dFJhbmdlLnBhc3RlSFRNTCggaHRtbCApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvLyBQcmVzZXJ2ZSB0aGUgc2VsZWN0aW9uXG4gICAgICAgICAgICAgICAgcmFuZ2UgPSBzZWwuY3JlYXRlUmFuZ2UoKTtcbiAgICAgICAgICAgICAgICByYW5nZS5zZXRFbmRQb2ludCgnU3RhcnRUb0VuZCcsIG9yaWdpbmFsUmFuZ2UpO1xuICAgICAgICAgICAgICAgIHJhbmdlLnNlbGVjdCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfTtcblxuICAgIC8vIEludGVyZmFjZTogQ3JlYXRlIHd5c2l3eWdcbiAgICB2YXIgd3lzaXd5ZyA9IGZ1bmN0aW9uKCBvcHRpb24gKVxuICAgIHtcbiAgICAgICAgLy8gT3B0aW9uc1xuICAgICAgICBvcHRpb24gPSBvcHRpb24gfHwge307XG4gICAgICAgIHZhciBvcHRpb25fZWxlbWVudCA9IG9wdGlvbi5lbGVtZW50IHx8IG51bGw7XG4gICAgICAgIGlmKCB0eXBlb2Yob3B0aW9uX2VsZW1lbnQpID09ICdzdHJpbmcnIClcbiAgICAgICAgICAgIG9wdGlvbl9lbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoIG9wdGlvbl9lbGVtZW50ICk7XG4gICAgICAgIHZhciBvcHRpb25fb25rZXlkb3duID0gb3B0aW9uLm9uS2V5RG93biB8fCBudWxsO1xuICAgICAgICB2YXIgb3B0aW9uX29ua2V5cHJlc3MgPSBvcHRpb24ub25LZXlQcmVzcyB8fCBudWxsO1xuICAgICAgICB2YXIgb3B0aW9uX29ua2V5dXAgPSBvcHRpb24ub25LZXlVcCB8fCBudWxsO1xuICAgICAgICB2YXIgb3B0aW9uX29uc2VsZWN0aW9uID0gb3B0aW9uLm9uU2VsZWN0aW9uIHx8IG51bGw7XG4gICAgICAgIHZhciBvcHRpb25fb25wbGFjZWhvbGRlciA9IG9wdGlvbi5vblBsYWNlaG9sZGVyIHx8IG51bGw7XG4gICAgICAgIHZhciBvcHRpb25fb25jbG9zZXBvcHVwID0gb3B0aW9uLm9uQ2xvc2Vwb3B1cCB8fCBudWxsO1xuICAgICAgICB2YXIgb3B0aW9uX2hpamFja2NvbnRleHRtZW51ID0gb3B0aW9uLmhpamFja0NvbnRleHRtZW51IHx8IGZhbHNlO1xuXG4gICAgICAgIC8vIEtlZXAgdGV4dGFyZWEgaWYgYnJvd3NlciBjYW4ndCBoYW5kbGUgY29udGVudC1lZGl0YWJsZVxuICAgICAgICB2YXIgaXNfdGV4dGFyZWEgPSBvcHRpb25fZWxlbWVudC5ub2RlTmFtZSA9PSAnVEVYVEFSRUEnIHx8IG9wdGlvbl9lbGVtZW50Lm5vZGVOYW1lID09ICdJTlBVVCc7XG4gICAgICAgIGlmKCBpc190ZXh0YXJlYSApXG4gICAgICAgIHtcbiAgICAgICAgICAgIC8vIGh0dHA6Ly9zdGFja292ZXJmbG93LmNvbS9xdWVzdGlvbnMvMTg4MjIwNS9ob3ctZG8taS1kZXRlY3Qtc3VwcG9ydC1mb3ItY29udGVudGVkaXRhYmxlLXZpYS1qYXZhc2NyaXB0XG4gICAgICAgICAgICB2YXIgY2FuQ29udGVudEVkaXRhYmxlID0gJ2NvbnRlbnRFZGl0YWJsZScgaW4gZG9jdW1lbnQuYm9keTtcbiAgICAgICAgICAgIGlmKCBjYW5Db250ZW50RWRpdGFibGUgKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIC8vIFNuaWZmZXIgdXNlcmFnZW50Li4uXG4gICAgICAgICAgICAgICAgdmFyIHdlYmtpdCA9IG5hdmlnYXRvci51c2VyQWdlbnQubWF0Y2goLyg/OmlQYWR8aVBob25lfEFuZHJvaWQpLiogQXBwbGVXZWJLaXRcXC8oW14gXSspLyk7XG4gICAgICAgICAgICAgICAgaWYoIHdlYmtpdCAmJiA0MjAgPD0gcGFyc2VJbnQod2Via2l0WzFdKSAmJiBwYXJzZUludCh3ZWJraXRbMV0pIDwgNTM0ICkgLy8gaVBob25lIDEgd2FzIFdlYmtpdC80MjBcbiAgICAgICAgICAgICAgICAgICAgY2FuQ29udGVudEVkaXRhYmxlID0gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiggISBjYW5Db250ZW50RWRpdGFibGUgKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIC8vIEtlZXAgdGV4dGFyZWFcbiAgICAgICAgICAgICAgICB2YXIgbm9kZV90ZXh0YXJlYSA9IG9wdGlvbl9lbGVtZW50O1xuICAgICAgICAgICAgICAgIC8vIEFkZCBhICduZXdsaW5lJyBhZnRlciBlYWNoICc8YnI+J1xuICAgICAgICAgICAgICAgIHZhciBuZXdsaW5lQWZ0ZXJCUiA9IGZ1bmN0aW9uKCBodG1sICkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gaHRtbC5yZXBsYWNlKC88YnJbIFxcL10qPlxcbj8vZ2ksJzxicj5cXG4nKTtcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIG5vZGVfdGV4dGFyZWEudmFsdWUgPSBuZXdsaW5lQWZ0ZXJCUiggbm9kZV90ZXh0YXJlYS52YWx1ZSApO1xuICAgICAgICAgICAgICAgIC8vIENvbW1hbmQgc3RydWN0dXJlXG4gICAgICAgICAgICAgICAgdmFyIGR1bW15X3RoaXMgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICB2YXIgZHVtbXlfbnVsbCA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAgIGxlZ2FjeTogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgLy8gcHJvcGVydGllc1xuICAgICAgICAgICAgICAgICAgICBnZXRFbGVtZW50OiBmdW5jdGlvbigpXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBub2RlX3RleHRhcmVhO1xuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBnZXRIVE1MOiBmdW5jdGlvbigpXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBub2RlX3RleHRhcmVhLnZhbHVlO1xuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBzZXRIVE1MOiBmdW5jdGlvbiggaHRtbCApXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG5vZGVfdGV4dGFyZWEudmFsdWUgPSBuZXdsaW5lQWZ0ZXJCUiggaHRtbCApO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIGdldFNlbGVjdGVkSFRNTDogZHVtbXlfbnVsbCxcbiAgICAgICAgICAgICAgICAgICAgc3luYzogZHVtbXlfdGhpcyxcbiAgICAgICAgICAgICAgICAgICAgLy8gc2VsZWN0aW9uIGFuZCBwb3B1cFxuICAgICAgICAgICAgICAgICAgICBjb2xsYXBzZVNlbGVjdGlvbjogZHVtbXlfdGhpcyxcbiAgICAgICAgICAgICAgICAgICAgZXhwYW5kU2VsZWN0aW9uOiBkdW1teV90aGlzLFxuICAgICAgICAgICAgICAgICAgICBvcGVuUG9wdXA6IGR1bW15X251bGwsXG4gICAgICAgICAgICAgICAgICAgIGNsb3NlUG9wdXA6IGR1bW15X3RoaXMsXG4gICAgICAgICAgICAgICAgICAgIC8vIGV4ZWMgY29tbWFuZHNcbiAgICAgICAgICAgICAgICAgICAgcmVtb3ZlRm9ybWF0OiBkdW1teV90aGlzLFxuICAgICAgICAgICAgICAgICAgICBib2xkOiBkdW1teV90aGlzLFxuICAgICAgICAgICAgICAgICAgICBpdGFsaWM6IGR1bW15X3RoaXMsXG4gICAgICAgICAgICAgICAgICAgIHVuZGVybGluZTogZHVtbXlfdGhpcyxcbiAgICAgICAgICAgICAgICAgICAgc3RyaWtldGhyb3VnaDogZHVtbXlfdGhpcyxcbiAgICAgICAgICAgICAgICAgICAgZm9yZWNvbG9yOiBkdW1teV90aGlzLFxuICAgICAgICAgICAgICAgICAgICBoaWdobGlnaHQ6IGR1bW15X3RoaXMsXG4gICAgICAgICAgICAgICAgICAgIGZvbnROYW1lOiBkdW1teV90aGlzLFxuICAgICAgICAgICAgICAgICAgICBmb250U2l6ZTogZHVtbXlfdGhpcyxcbiAgICAgICAgICAgICAgICAgICAgc3Vic2NyaXB0OiBkdW1teV90aGlzLFxuICAgICAgICAgICAgICAgICAgICBzdXBlcnNjcmlwdDogZHVtbXlfdGhpcyxcbiAgICAgICAgICAgICAgICAgICAgYWxpZ246IGR1bW15X3RoaXMsXG4gICAgICAgICAgICAgICAgICAgIGZvcm1hdDogZHVtbXlfdGhpcyxcbiAgICAgICAgICAgICAgICAgICAgaW5kZW50OiBkdW1teV90aGlzLFxuICAgICAgICAgICAgICAgICAgICBpbnNlcnRMaW5rOiBkdW1teV90aGlzLFxuICAgICAgICAgICAgICAgICAgICBpbnNlcnRJbWFnZTogZHVtbXlfdGhpcyxcbiAgICAgICAgICAgICAgICAgICAgaW5zZXJ0SFRNTDogZHVtbXlfdGhpcyxcbiAgICAgICAgICAgICAgICAgICAgaW5zZXJ0TGlzdDogZHVtbXlfdGhpc1xuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvLyBjcmVhdGUgY29udGVudC1lZGl0YWJsZVxuICAgICAgICB2YXIgbm9kZV90ZXh0YXJlYSA9IG51bGwsXG4gICAgICAgICAgICBub2RlX3d5c2l3eWcgPSBudWxsO1xuICAgICAgICBpZiggaXNfdGV4dGFyZWEgKVxuICAgICAgICB7XG4gICAgICAgICAgICAvLyBUZXh0YXJlYVxuICAgICAgICAgICAgbm9kZV90ZXh0YXJlYSA9IG9wdGlvbl9lbGVtZW50O1xuICAgICAgICAgICAgbm9kZV90ZXh0YXJlYS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuXG4gICAgICAgICAgICAvLyBDb250ZW50ZWRpdGFibGVcbiAgICAgICAgICAgIG5vZGVfd3lzaXd5ZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoICdESVYnICk7XG4gICAgICAgICAgICBub2RlX3d5c2l3eWcuaW5uZXJIVE1MID0gbm9kZV90ZXh0YXJlYS52YWx1ZTtcbiAgICAgICAgICAgIHZhciBwYXJlbnQgPSBub2RlX3RleHRhcmVhLnBhcmVudE5vZGUsXG4gICAgICAgICAgICAgICAgbmV4dCA9IG5vZGVfdGV4dGFyZWEubmV4dFNpYmxpbmc7XG4gICAgICAgICAgICBpZiggbmV4dCApXG4gICAgICAgICAgICAgICAgcGFyZW50Lmluc2VydEJlZm9yZSggbm9kZV93eXNpd3lnLCBuZXh0ICk7XG4gICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICAgICAgcGFyZW50LmFwcGVuZENoaWxkKCBub2RlX3d5c2l3eWcgKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlXG4gICAgICAgICAgICBub2RlX3d5c2l3eWcgPSBvcHRpb25fZWxlbWVudDtcbiAgICAgICAgbm9kZV93eXNpd3lnLnNldEF0dHJpYnV0ZSggJ2NvbnRlbnRFZGl0YWJsZScsICd0cnVlJyApOyAvLyBJRTcgaXMgY2FzZSBzZW5zaXRpdmVcblxuICAgICAgICAvLyBJRTggdXNlcyAnZG9jdW1lbnQnIGluc3RlYWQgb2YgJ3dpbmRvdydcbiAgICAgICAgLy8gaHR0cDovL3RhbmFsaW4uY29tL2VuL2FydGljbGVzL2llLXZlcnNpb24tanMvXG4gICAgICAgIHZhciB3aW5kb3dfaWU4ID0gKGRvY3VtZW50LmFsbCAmJiAhZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcikgPyBkb2N1bWVudCA6IHdpbmRvdztcblxuICAgICAgICAvLyBTeW5jIEVkaXRvciB3aXRoIFRleHRhcmVhXG4gICAgICAgIHZhciBzeW5jVGV4dGFyZWEgPSBudWxsO1xuICAgICAgICBpZiggaXNfdGV4dGFyZWEgKVxuICAgICAgICB7XG4gICAgICAgICAgICB2YXIgcHJldmlvdXNfaHRtbCA9IG5vZGVfd3lzaXd5Zy5pbm5lckhUTUw7XG4gICAgICAgICAgICBzeW5jVGV4dGFyZWEgPSBmdW5jdGlvbigpXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdmFyIG5ld19odG1sID0gbm9kZV93eXNpd3lnLmlubmVySFRNTDtcbiAgICAgICAgICAgICAgICBpZiggbmV3X2h0bWwgPT0gcHJldmlvdXNfaHRtbCApXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiA7XG4gICAgICAgICAgICAgICAgLy8gSFRNTCBjaGFuZ2VkXG4gICAgICAgICAgICAgICAgbm9kZV90ZXh0YXJlYS52YWx1ZSA9IG5ld19odG1sO1xuICAgICAgICAgICAgICAgIHByZXZpb3VzX2h0bWwgPSBuZXdfaHRtbDtcbiAgICAgICAgICAgICAgICAvLyBFdmVudCBIYW5kbGVyXG4gICAgICAgICAgICAgICAgZmlyZUV2ZW50KCBub2RlX3RleHRhcmVhLCAnY2hhbmdlJywgZmFsc2UgKTtcbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cblxuICAgICAgICAvLyBTaG93IHBsYWNlaG9sZGVyXG4gICAgICAgIHZhciBzaG93UGxhY2Vob2xkZXI7XG4gICAgICAgIGlmKCBvcHRpb25fb25wbGFjZWhvbGRlciApXG4gICAgICAgIHtcbiAgICAgICAgICAgIHZhciBwbGFjZWhvbGRlcl92aXNpYmxlID0gZmFsc2U7XG4gICAgICAgICAgICBzaG93UGxhY2Vob2xkZXIgPSBmdW5jdGlvbigpXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgLy8gVGVzdCBpZiB3eXNpd3lnIGhhcyBjb250ZW50XG4gICAgICAgICAgICAgICAgdmFyIHd5c2l3eWdfZW1wdHkgPSB0cnVlO1xuICAgICAgICAgICAgICAgIHZhciBub2RlID0gbm9kZV93eXNpd3lnO1xuICAgICAgICAgICAgICAgIHdoaWxlKCBub2RlIClcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIG5vZGUgPSBuZXh0Tm9kZSggbm9kZSwgbm9kZV93eXNpd3lnICk7XG4gICAgICAgICAgICAgICAgICAgIC8vIFRlc3QgaWYgbm9kZSBjb250YWlucyBzb21ldGhpbmcgdmlzaWJsZVxuICAgICAgICAgICAgICAgICAgICBpZiggISBub2RlIClcbiAgICAgICAgICAgICAgICAgICAgICAgIDtcbiAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiggbm9kZS5ub2RlVHlwZSA9PSBOb2RlX0VMRU1FTlRfTk9ERSApXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKCBub2RlLm5vZGVOYW1lID09ICdJTUcnIClcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3eXNpd3lnX2VtcHR5ID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiggbm9kZS5ub2RlVHlwZSA9PSBOb2RlX1RFWFRfTk9ERSApXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciB0ZXh0ID0gbm9kZS5ub2RlVmFsdWU7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiggdGV4dCAmJiB0ZXh0LnNlYXJjaCgvW15cXHNdLykgIT0gLTEgKVxuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHd5c2l3eWdfZW1wdHkgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiggcGxhY2Vob2xkZXJfdmlzaWJsZSAhPSB3eXNpd3lnX2VtcHR5IClcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIG9wdGlvbl9vbnBsYWNlaG9sZGVyKCB3eXNpd3lnX2VtcHR5ICk7XG4gICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyX3Zpc2libGUgPSB3eXNpd3lnX2VtcHR5O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBzaG93UGxhY2Vob2xkZXIoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIEhhbmRsZSBzZWxlY3Rpb25cbiAgICAgICAgdmFyIHBvcHVwX3NhdmVkX3NlbGVjdGlvbiA9IG51bGwsIC8vIHByZXNlcnZlIHNlbGVjdGlvbiBkdXJpbmcgcG9wdXBcbiAgICAgICAgICAgIGhhbmRsZVNlbGVjdGlvbiA9IG51bGwsXG4gICAgICAgICAgICBkZWJvdW5jZWRfaGFuZGxlU2VsZWN0aW9uID0gbnVsbDtcbiAgICAgICAgaWYoIG9wdGlvbl9vbnNlbGVjdGlvbiApXG4gICAgICAgIHtcbiAgICAgICAgICAgIGhhbmRsZVNlbGVjdGlvbiA9IGZ1bmN0aW9uKCBjbGllbnRYLCBjbGllbnRZLCByaWdodGNsaWNrIClcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAvLyBEZXRlY3QgY29sbGFwc2VkIHNlbGVjdGlvblxuICAgICAgICAgICAgICAgIHZhciBjb2xsYXBzZWQgPSBnZXRTZWxlY3Rpb25Db2xsYXBzZWQoIG5vZGVfd3lzaXd5ZyApO1xuICAgICAgICAgICAgICAgIC8vIExpc3Qgb2YgYWxsIHNlbGVjdGVkIG5vZGVzXG4gICAgICAgICAgICAgICAgdmFyIG5vZGVzID0gZ2V0U2VsZWN0ZWROb2Rlcyggbm9kZV93eXNpd3lnICk7XG4gICAgICAgICAgICAgICAgLy8gUmVjdGFuZ2xlIG9mIHRoZSBzZWxlY3Rpb25cbiAgICAgICAgICAgICAgICB2YXIgcmVjdCA9IChjbGllbnRYID09PSBudWxsIHx8IGNsaWVudFkgPT09IG51bGwpID8gbnVsbCA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZWZ0OiBjbGllbnRYLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b3A6IGNsaWVudFksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAwLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIHZhciBzZWxlY3Rpb25SZWN0ID0gZ2V0U2VsZWN0aW9uUmVjdCgpO1xuICAgICAgICAgICAgICAgIGlmKCBzZWxlY3Rpb25SZWN0IClcbiAgICAgICAgICAgICAgICAgICAgcmVjdCA9IHNlbGVjdGlvblJlY3Q7XG4gICAgICAgICAgICAgICAgaWYoIHJlY3QgKVxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gU28gZmFyICdyZWN0JyBpcyByZWxhdGl2ZSB0byB2aWV3cG9ydFxuICAgICAgICAgICAgICAgICAgICBpZiggbm9kZV93eXNpd3lnLmdldEJvdW5kaW5nQ2xpZW50UmVjdCApXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIE1ha2UgaXQgcmVsYXRpdmUgdG8gdGhlIGVkaXRvciB2aWEgJ2dldEJvdW5kaW5nQ2xpZW50UmVjdCgpJ1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGJvdW5kaW5ncmVjdCA9IG5vZGVfd3lzaXd5Zy5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlY3QubGVmdCAtPSBwYXJzZUludChib3VuZGluZ3JlY3QubGVmdCk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZWN0LnRvcCAtPSBwYXJzZUludChib3VuZGluZ3JlY3QudG9wKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBub2RlID0gbm9kZV93eXNpd3lnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9mZnNldExlZnQgPSAwLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9mZnNldFRvcCA9IDAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZml4ZWQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRvIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvZmZzZXRMZWZ0ICs9IG5vZGUub2Zmc2V0TGVmdCA/IHBhcnNlSW50KG5vZGUub2Zmc2V0TGVmdCkgOiAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9mZnNldFRvcCArPSBub2RlLm9mZnNldFRvcCA/IHBhcnNlSW50KG5vZGUub2Zmc2V0VG9wKSA6IDA7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYoIG5vZGUuc3R5bGUucG9zaXRpb24gPT0gJ2ZpeGVkJyApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpeGVkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHdoaWxlKCBub2RlID0gbm9kZS5vZmZzZXRQYXJlbnQgKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlY3QubGVmdCAtPSBvZmZzZXRMZWZ0IC0gKGZpeGVkID8gMCA6IHdpbmRvdy5wYWdlWE9mZnNldCk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZWN0LnRvcCAtPSBvZmZzZXRUb3AgLSAoZml4ZWQgPyAwIDogd2luZG93LnBhZ2VZT2Zmc2V0KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAvLyBUcmltIHJlY3RhbmdsZSB0byB0aGUgZWRpdG9yXG4gICAgICAgICAgICAgICAgICAgIGlmKCByZWN0LmxlZnQgPCAwIClcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlY3QubGVmdCA9IDA7XG4gICAgICAgICAgICAgICAgICAgIGlmKCByZWN0LnRvcCA8IDAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgcmVjdC50b3AgPSAwO1xuICAgICAgICAgICAgICAgICAgICBpZiggcmVjdC53aWR0aCA+IG5vZGVfd3lzaXd5Zy5vZmZzZXRXaWR0aCApXG4gICAgICAgICAgICAgICAgICAgICAgICByZWN0LndpZHRoID0gbm9kZV93eXNpd3lnLm9mZnNldFdpZHRoO1xuICAgICAgICAgICAgICAgICAgICBpZiggcmVjdC5oZWlnaHQgPiBub2RlX3d5c2l3eWcub2Zmc2V0SGVpZ2h0IClcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlY3QuaGVpZ2h0ID0gbm9kZV93eXNpd3lnLm9mZnNldEhlaWdodDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSBpZiggbm9kZXMubGVuZ3RoIClcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIC8vIFdoYXQgZWxzZSBjb3VsZCB3ZSBkbz8gT2Zmc2V0IG9mIGZpcnN0IGVsZW1lbnQuLi5cbiAgICAgICAgICAgICAgICAgICAgZm9yKCB2YXIgaT0wOyBpIDwgbm9kZXMubGVuZ3RoOyArK2kgKVxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgbm9kZSA9IG5vZGVzW2ldO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYoIG5vZGUubm9kZVR5cGUgIT0gTm9kZV9FTEVNRU5UX05PREUgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVjdCA9IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGVmdDogbm9kZS5vZmZzZXRMZWZ0LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b3A6IG5vZGUub2Zmc2V0VG9wLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogbm9kZS5vZmZzZXRXaWR0aCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiBub2RlLm9mZnNldEhlaWdodFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvLyBDYWxsYmFja1xuICAgICAgICAgICAgICAgIG9wdGlvbl9vbnNlbGVjdGlvbiggY29sbGFwc2VkLCByZWN0LCBub2RlcywgcmlnaHRjbGljayApO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIGRlYm91bmNlZF9oYW5kbGVTZWxlY3Rpb24gPSBkZWJvdW5jZSggaGFuZGxlU2VsZWN0aW9uLCAxICk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBPcGVuIHBvcHVwXG4gICAgICAgIHZhciBub2RlX3BvcHVwID0gbnVsbDtcbiAgICAgICAgdmFyIHBvcHVwQ2xpY2tDbG9zZSA9IGZ1bmN0aW9uKCBlIClcbiAgICAgICAge1xuICAgICAgICAgICAgLy8gaHR0cDovL3d3dy5xdWlya3Ntb2RlLm9yZy9qcy9ldmVudHNfcHJvcGVydGllcy5odG1sXG4gICAgICAgICAgICBpZiggIWUgKVxuICAgICAgICAgICAgICAgIHZhciBlID0gd2luZG93LmV2ZW50O1xuICAgICAgICAgICAgdmFyIHRhcmdldCA9IGUudGFyZ2V0IHx8IGUuc3JjRWxlbWVudDtcbiAgICAgICAgICAgIGlmKCB0YXJnZXQubm9kZVR5cGUgPT0gTm9kZV9URVhUX05PREUgKSAvLyBkZWZlYXQgU2FmYXJpIGJ1Z1xuICAgICAgICAgICAgICAgIHRhcmdldCA9IHRhcmdldC5wYXJlbnROb2RlO1xuICAgICAgICAgICAgLy8gQ2xpY2sgd2l0aGluIHBvcHVwP1xuICAgICAgICAgICAgaWYoIGlzT3JDb250YWluc05vZGUobm9kZV9wb3B1cCx0YXJnZXQpIClcbiAgICAgICAgICAgICAgICByZXR1cm4gO1xuICAgICAgICAgICAgLy8gY2xvc2UgcG9wdXBcbiAgICAgICAgICAgIHBvcHVwQ2xvc2UoKTtcbiAgICAgICAgfTtcbiAgICAgICAgdmFyIHBvcHVwT3BlbiA9IGZ1bmN0aW9uKClcbiAgICAgICAge1xuICAgICAgICAgICAgLy8gQWxyZWFkeSBvcGVuP1xuICAgICAgICAgICAgaWYoIG5vZGVfcG9wdXAgKVxuICAgICAgICAgICAgICAgIHJldHVybiBub2RlX3BvcHVwO1xuXG4gICAgICAgICAgICAvLyBHbG9iYWwgY2xpY2sgY2xvc2VzIHBvcHVwXG4gICAgICAgICAgICBhZGRFdmVudCggd2luZG93X2llOCwgJ21vdXNlZG93bicsIHBvcHVwQ2xpY2tDbG9zZSwgdHJ1ZSApO1xuXG4gICAgICAgICAgICAvLyBDcmVhdGUgcG9wdXAgZWxlbWVudFxuICAgICAgICAgICAgbm9kZV9wb3B1cCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoICdESVYnICk7XG4gICAgICAgICAgICB2YXIgcGFyZW50ID0gbm9kZV93eXNpd3lnLnBhcmVudE5vZGUsXG4gICAgICAgICAgICAgICAgbmV4dCA9IG5vZGVfd3lzaXd5Zy5uZXh0U2libGluZztcbiAgICAgICAgICAgIGlmKCBuZXh0IClcbiAgICAgICAgICAgICAgICBwYXJlbnQuaW5zZXJ0QmVmb3JlKCBub2RlX3BvcHVwLCBuZXh0ICk7XG4gICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICAgICAgcGFyZW50LmFwcGVuZENoaWxkKCBub2RlX3BvcHVwICk7XG4gICAgICAgICAgICByZXR1cm4gbm9kZV9wb3B1cDtcbiAgICAgICAgfTtcbiAgICAgICAgdmFyIHBvcHVwQ2xvc2UgPSBmdW5jdGlvbigpXG4gICAgICAgIHtcbiAgICAgICAgICAgIGlmKCAhIG5vZGVfcG9wdXAgKVxuICAgICAgICAgICAgICAgIHJldHVybiA7XG4gICAgICAgICAgICBub2RlX3BvcHVwLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoIG5vZGVfcG9wdXAgKTtcbiAgICAgICAgICAgIG5vZGVfcG9wdXAgPSBudWxsO1xuICAgICAgICAgICAgcmVtb3ZlRXZlbnQoIHdpbmRvd19pZTgsICdtb3VzZWRvd24nLCBwb3B1cENsaWNrQ2xvc2UsIHRydWUgKTtcbiAgICAgICAgICAgIGlmKCBvcHRpb25fb25jbG9zZXBvcHVwIClcbiAgICAgICAgICAgICAgICBvcHRpb25fb25jbG9zZXBvcHVwKCk7XG4gICAgICAgIH07XG5cbiAgICAgICAgLy8gRm9jdXMvQmx1ciBldmVudHNcbiAgICAgICAgYWRkRXZlbnQoIG5vZGVfd3lzaXd5ZywgJ2ZvY3VzJywgZnVuY3Rpb24oKVxuICAgICAgICB7XG4gICAgICAgICAgICAvLyBmb3J3YXJkIGZvY3VzL2JsdXIgdG8gdGhlIHRleHRhcmVhXG4gICAgICAgICAgICBpZiggbm9kZV90ZXh0YXJlYSApXG4gICAgICAgICAgICAgICAgZmlyZUV2ZW50KCBub2RlX3RleHRhcmVhLCAnZm9jdXMnLCBmYWxzZSApO1xuICAgICAgICB9KTtcbiAgICAgICAgYWRkRXZlbnQoIG5vZGVfd3lzaXd5ZywgJ2JsdXInLCBmdW5jdGlvbigpXG4gICAgICAgIHtcbiAgICAgICAgICAgIC8vIHN5bmMgdGV4dGFyZWEgaW1tZWRpYXRlbHlcbiAgICAgICAgICAgIGlmKCBzeW5jVGV4dGFyZWEgKVxuICAgICAgICAgICAgICAgIHN5bmNUZXh0YXJlYSgpO1xuICAgICAgICAgICAgLy8gZm9yd2FyZCBmb2N1cy9ibHVyIHRvIHRoZSB0ZXh0YXJlYVxuICAgICAgICAgICAgaWYoIG5vZGVfdGV4dGFyZWEgKVxuICAgICAgICAgICAgICAgIGZpcmVFdmVudCggbm9kZV90ZXh0YXJlYSwgJ2JsdXInLCBmYWxzZSApO1xuICAgICAgICB9KTtcblxuICAgICAgICAvLyBDaGFuZ2UgZXZlbnRzXG4gICAgICAgIHZhciBkZWJvdW5jZWRfY2hhbmdlSGFuZGxlciA9IG51bGw7XG4gICAgICAgIGlmKCBzaG93UGxhY2Vob2xkZXIgfHwgc3luY1RleHRhcmVhIClcbiAgICAgICAge1xuICAgICAgICAgICAgLy8gZGVib3VuY2UgJ3N5bmNUZXh0YXJlYScgYSBzZWNvbmQgdGltZSwgYmVjYXVzZSAnaW5uZXJIVE1MJyBpcyBxdWl0ZSBidXJkZW5zb21lXG4gICAgICAgICAgICB2YXIgZGVib3VuY2VkX3N5bmNUZXh0YXJlYSA9IHN5bmNUZXh0YXJlYSA/IGRlYm91bmNlKCBzeW5jVGV4dGFyZWEsIDI1MCwgdHJ1ZSApIDogbnVsbDsgLy8gaGlnaCB0aW1lb3V0IGlzIHNhdmUsIGJlY2F1c2Ugb2YgXCJvbmJsdXJcIiBmaXJlcyBpbW1lZGlhdGVseVxuICAgICAgICAgICAgdmFyIGNoYW5nZUhhbmRsZXIgPSBmdW5jdGlvbiggZSApXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgaWYoIHNob3dQbGFjZWhvbGRlciApXG4gICAgICAgICAgICAgICAgICAgIHNob3dQbGFjZWhvbGRlcigpO1xuICAgICAgICAgICAgICAgIGlmKCBkZWJvdW5jZWRfc3luY1RleHRhcmVhIClcbiAgICAgICAgICAgICAgICAgICAgZGVib3VuY2VkX3N5bmNUZXh0YXJlYSgpO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIGRlYm91bmNlZF9jaGFuZ2VIYW5kbGVyID0gZGVib3VuY2UoIGNoYW5nZUhhbmRsZXIsIDEgKTtcblxuICAgICAgICAgICAgLy8gQ2F0Y2ggY2hhbmdlIGV2ZW50c1xuICAgICAgICAgICAgLy8gaHR0cDovL3N0YWNrb3ZlcmZsb3cuY29tL3F1ZXN0aW9ucy8xMzkxMjc4L2NvbnRlbnRlZGl0YWJsZS1jaGFuZ2UtZXZlbnRzLzE0MTEyOTYjMTQxMTI5NlxuICAgICAgICAgICAgLy8gaHR0cDovL3N0YWNrb3ZlcmZsb3cuY29tL3F1ZXN0aW9ucy84Njk0MDU0L29uY2hhbmdlLWV2ZW50LXdpdGgtY29udGVudGVkaXRhYmxlLzg2OTQxMjUjODY5NDEyNVxuICAgICAgICAgICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL21pbmRtdXAvYm9vdHN0cmFwLXd5c2l3eWcvcHVsbC81MC9maWxlc1xuICAgICAgICAgICAgLy8gaHR0cDovL2NvZGViaXRzLmdsZW5uam9uZXMubmV0L2VkaXRpbmcvZXZlbnRzLWNvbnRlbnRlZGl0YWJsZS5odG1cbiAgICAgICAgICAgIGFkZEV2ZW50KCBub2RlX3d5c2l3eWcsICdpbnB1dCcsIGRlYm91bmNlZF9jaGFuZ2VIYW5kbGVyICk7XG4gICAgICAgICAgICBhZGRFdmVudCggbm9kZV93eXNpd3lnLCAnRE9NTm9kZUluc2VydGVkJywgZGVib3VuY2VkX2NoYW5nZUhhbmRsZXIgKTtcbiAgICAgICAgICAgIGFkZEV2ZW50KCBub2RlX3d5c2l3eWcsICdET01Ob2RlUmVtb3ZlZCcsIGRlYm91bmNlZF9jaGFuZ2VIYW5kbGVyICk7XG4gICAgICAgICAgICBhZGRFdmVudCggbm9kZV93eXNpd3lnLCAnRE9NU3VidHJlZU1vZGlmaWVkJywgZGVib3VuY2VkX2NoYW5nZUhhbmRsZXIgKTtcbiAgICAgICAgICAgIGFkZEV2ZW50KCBub2RlX3d5c2l3eWcsICdET01DaGFyYWN0ZXJEYXRhTW9kaWZpZWQnLCBkZWJvdW5jZWRfY2hhbmdlSGFuZGxlciApOyAvLyBwb2x5ZmlsbCBpbnB1dCBpbiBJRSA5LTEwXG4gICAgICAgICAgICBhZGRFdmVudCggbm9kZV93eXNpd3lnLCAncHJvcGVydHljaGFuZ2UnLCBkZWJvdW5jZWRfY2hhbmdlSGFuZGxlciApO1xuICAgICAgICAgICAgYWRkRXZlbnQoIG5vZGVfd3lzaXd5ZywgJ3RleHRJbnB1dCcsIGRlYm91bmNlZF9jaGFuZ2VIYW5kbGVyICk7XG4gICAgICAgICAgICBhZGRFdmVudCggbm9kZV93eXNpd3lnLCAncGFzdGUnLCBkZWJvdW5jZWRfY2hhbmdlSGFuZGxlciApO1xuICAgICAgICAgICAgYWRkRXZlbnQoIG5vZGVfd3lzaXd5ZywgJ2N1dCcsIGRlYm91bmNlZF9jaGFuZ2VIYW5kbGVyICk7XG4gICAgICAgICAgICBhZGRFdmVudCggbm9kZV93eXNpd3lnLCAnZHJvcCcsIGRlYm91bmNlZF9jaGFuZ2VIYW5kbGVyICk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBLZXkgZXZlbnRzXG4gICAgICAgIC8vIGh0dHA6Ly9zYW5kYm94LnRoZXdpa2llcy5jb20vaHRtbDUtZXhwZXJpbWVudHMva2V5LWV2ZW50cy5odG1sXG4gICAgICAgIHZhciBrZXlIYW5kbGVyID0gZnVuY3Rpb24oIGUsIHBoYXNlIClcbiAgICAgICAge1xuICAgICAgICAgICAgLy8gaHR0cDovL3d3dy5xdWlya3Ntb2RlLm9yZy9qcy9ldmVudHNfcHJvcGVydGllcy5odG1sXG4gICAgICAgICAgICBpZiggIWUgKVxuICAgICAgICAgICAgICAgIHZhciBlID0gd2luZG93LmV2ZW50O1xuICAgICAgICAgICAgLy8gaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL0tleWJvYXJkRXZlbnRcbiAgICAgICAgICAgIC8vIGh0dHA6Ly9zdGFja292ZXJmbG93LmNvbS9xdWVzdGlvbnMvMTQ0NDQ3Ny9rZXljb2RlLWFuZC1jaGFyY29kZVxuICAgICAgICAgICAgLy8gaHR0cDovL3N0YWNrb3ZlcmZsb3cuY29tL3F1ZXN0aW9ucy80Mjg1NjI3L2phdmFzY3JpcHQta2V5Y29kZS12cy1jaGFyY29kZS11dHRlci1jb25mdXNpb25cbiAgICAgICAgICAgIC8vIGh0dHA6Ly91bml4cGFwYS5jb20vanMva2V5Lmh0bWxcbiAgICAgICAgICAgIHZhciBrZXkgPSBlLndoaWNoIHx8IGUua2V5Q29kZSxcbiAgICAgICAgICAgICAgICBjaGFyYWN0ZXIgPSBTdHJpbmcuZnJvbUNoYXJDb2RlKGtleSB8fCBlLmNoYXJDb2RlKSxcbiAgICAgICAgICAgICAgICBzaGlmdEtleSA9IGUuc2hpZnRLZXkgfHwgZmFsc2UsXG4gICAgICAgICAgICAgICAgYWx0S2V5ID0gZS5hbHRLZXkgfHwgZmFsc2UsXG4gICAgICAgICAgICAgICAgY3RybEtleSA9IGUuY3RybEtleSB8fCBmYWxzZSxcbiAgICAgICAgICAgICAgICBtZXRhS2V5ID0gZS5tZXRhS2V5IHx8IGZhbHNlO1xuICAgICAgICAgICAgIGlmKCBwaGFzZSA9PSAxIClcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAvLyBDYWxsYmFja1xuICAgICAgICAgICAgICAgIGlmKCBvcHRpb25fb25rZXlkb3duICYmIG9wdGlvbl9vbmtleWRvd24oa2V5LCBjaGFyYWN0ZXIsIHNoaWZ0S2V5LCBhbHRLZXksIGN0cmxLZXksIG1ldGFLZXkpID09PSBmYWxzZSApXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBjYW5jZWxFdmVudCggZSApOyAvLyBkaXNtaXNzIGtleVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiggcGhhc2UgPT0gMiApXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgLy8gQ2FsbGJhY2tcbiAgICAgICAgICAgICAgICBpZiggb3B0aW9uX29ua2V5cHJlc3MgJiYgb3B0aW9uX29ua2V5cHJlc3Moa2V5LCBjaGFyYWN0ZXIsIHNoaWZ0S2V5LCBhbHRLZXksIGN0cmxLZXksIG1ldGFLZXkpID09PSBmYWxzZSApXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBjYW5jZWxFdmVudCggZSApOyAvLyBkaXNtaXNzIGtleVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiggcGhhc2UgPT0gMyApXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgLy8gQ2FsbGJhY2tcbiAgICAgICAgICAgICAgICBpZiggb3B0aW9uX29ua2V5dXAgJiYgb3B0aW9uX29ua2V5dXAoa2V5LCBjaGFyYWN0ZXIsIHNoaWZ0S2V5LCBhbHRLZXksIGN0cmxLZXksIG1ldGFLZXkpID09PSBmYWxzZSApXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBjYW5jZWxFdmVudCggZSApOyAvLyBkaXNtaXNzIGtleVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBLZXlzIGNhbiBjaGFuZ2UgdGhlIHNlbGVjdGlvblxuICAgICAgICAgICAgaWYoIHBoYXNlID09IDIgfHwgcGhhc2UgPT0gMyApXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgcG9wdXBfc2F2ZWRfc2VsZWN0aW9uID0gbnVsbDtcbiAgICAgICAgICAgICAgICBpZiggZGVib3VuY2VkX2hhbmRsZVNlbGVjdGlvbiApXG4gICAgICAgICAgICAgICAgICAgIGRlYm91bmNlZF9oYW5kbGVTZWxlY3Rpb24oIG51bGwsIG51bGwsIGZhbHNlICk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBNb3N0IGtleXMgY2FuIGNhdXNlIHRleHQtY2hhbmdlc1xuICAgICAgICAgICAgaWYoIHBoYXNlID09IDIgJiYgZGVib3VuY2VkX2NoYW5nZUhhbmRsZXIgKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHN3aXRjaCgga2V5IClcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMzM6IC8vIHBhZ2VVcFxuICAgICAgICAgICAgICAgICAgICBjYXNlIDM0OiAvLyBwYWdlRG93blxuICAgICAgICAgICAgICAgICAgICBjYXNlIDM1OiAvLyBlbmRcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAzNjogLy8gaG9tZVxuICAgICAgICAgICAgICAgICAgICBjYXNlIDM3OiAvLyBsZWZ0XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMzg6IC8vIHVwXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMzk6IC8vIHJpZ2h0XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgNDA6IC8vIGRvd25cbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGN1cnNvcnMgZG8gbm90XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGNhbGwgY2hhbmdlIGhhbmRsZXJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlYm91bmNlZF9jaGFuZ2VIYW5kbGVyKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIGFkZEV2ZW50KCBub2RlX3d5c2l3eWcsICdrZXlkb3duJywgZnVuY3Rpb24oIGUgKVxuICAgICAgICB7XG4gICAgICAgICAgICByZXR1cm4ga2V5SGFuZGxlciggZSwgMSApO1xuICAgICAgICB9KTtcbiAgICAgICAgYWRkRXZlbnQoIG5vZGVfd3lzaXd5ZywgJ2tleXByZXNzJywgZnVuY3Rpb24oIGUgKVxuICAgICAgICB7XG4gICAgICAgICAgICByZXR1cm4ga2V5SGFuZGxlciggZSwgMiApO1xuICAgICAgICB9KTtcbiAgICAgICAgYWRkRXZlbnQoIG5vZGVfd3lzaXd5ZywgJ2tleXVwJywgZnVuY3Rpb24oIGUgKVxuICAgICAgICB7XG4gICAgICAgICAgICByZXR1cm4ga2V5SGFuZGxlciggZSwgMyApO1xuICAgICAgICB9KTtcblxuICAgICAgICAvLyBNb3VzZSBldmVudHNcbiAgICAgICAgdmFyIG1vdXNlSGFuZGxlciA9IGZ1bmN0aW9uKCBlLCByaWdodGNsaWNrIClcbiAgICAgICAge1xuICAgICAgICAgICAgLy8gaHR0cDovL3d3dy5xdWlya3Ntb2RlLm9yZy9qcy9ldmVudHNfcHJvcGVydGllcy5odG1sXG4gICAgICAgICAgICBpZiggIWUgKVxuICAgICAgICAgICAgICAgIHZhciBlID0gd2luZG93LmV2ZW50O1xuICAgICAgICAgICAgLy8gbW91c2UgcG9zaXRpb25cbiAgICAgICAgICAgIHZhciBjbGllbnRYID0gbnVsbCxcbiAgICAgICAgICAgICAgICBjbGllbnRZID0gbnVsbDtcbiAgICAgICAgICAgIGlmKCBlLmNsaWVudFggJiYgZS5jbGllbnRZIClcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBjbGllbnRYID0gZS5jbGllbnRYO1xuICAgICAgICAgICAgICAgIGNsaWVudFkgPSBlLmNsaWVudFk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmKCBlLnBhZ2VYICYmIGUucGFnZVkgKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGNsaWVudFggPSBlLnBhZ2VYIC0gd2luZG93LnBhZ2VYT2Zmc2V0O1xuICAgICAgICAgICAgICAgIGNsaWVudFkgPSBlLnBhZ2VZIC0gd2luZG93LnBhZ2VZT2Zmc2V0O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gbW91c2UgYnV0dG9uXG4gICAgICAgICAgICBpZiggZS53aGljaCAmJiBlLndoaWNoID09IDMgKVxuICAgICAgICAgICAgICAgIHJpZ2h0Y2xpY2sgPSB0cnVlO1xuICAgICAgICAgICAgZWxzZSBpZiggZS5idXR0b24gJiYgZS5idXR0b24gPT0gMiApXG4gICAgICAgICAgICAgICAgcmlnaHRjbGljayA9IHRydWU7XG5cbiAgICAgICAgICAgIC8vIHJlbW92ZSBldmVudCBoYW5kbGVyXG4gICAgICAgICAgICByZW1vdmVFdmVudCggd2luZG93X2llOCwgJ21vdXNldXAnLCBtb3VzZUhhbmRsZXIgKTtcbiAgICAgICAgICAgIC8vIENhbGxiYWNrIHNlbGVjdGlvblxuICAgICAgICAgICAgcG9wdXBfc2F2ZWRfc2VsZWN0aW9uID0gbnVsbDtcbiAgICAgICAgICAgIGlmKCAhIG9wdGlvbl9oaWphY2tjb250ZXh0bWVudSAmJiByaWdodGNsaWNrIClcbiAgICAgICAgICAgICAgICByZXR1cm4gO1xuICAgICAgICAgICAgaWYoIGRlYm91bmNlZF9oYW5kbGVTZWxlY3Rpb24gKVxuICAgICAgICAgICAgICAgIGRlYm91bmNlZF9oYW5kbGVTZWxlY3Rpb24oIGNsaWVudFgsIGNsaWVudFksIHJpZ2h0Y2xpY2sgKTtcbiAgICAgICAgfTtcbiAgICAgICAgYWRkRXZlbnQoIG5vZGVfd3lzaXd5ZywgJ21vdXNlZG93bicsIGZ1bmN0aW9uKCBlIClcbiAgICAgICAge1xuICAgICAgICAgICAgLy8gY2F0Y2ggZXZlbnQgaWYgJ21vdXNldXAnIG91dHNpZGUgJ25vZGVfd3lzaXd5ZydcbiAgICAgICAgICAgIHJlbW92ZUV2ZW50KCB3aW5kb3dfaWU4LCAnbW91c2V1cCcsIG1vdXNlSGFuZGxlciApO1xuICAgICAgICAgICAgYWRkRXZlbnQoIHdpbmRvd19pZTgsICdtb3VzZXVwJywgbW91c2VIYW5kbGVyICk7XG4gICAgICAgIH0pO1xuICAgICAgICBhZGRFdmVudCggbm9kZV93eXNpd3lnLCAnbW91c2V1cCcsIGZ1bmN0aW9uKCBlIClcbiAgICAgICAge1xuICAgICAgICAgICAgbW91c2VIYW5kbGVyKCBlICk7XG4gICAgICAgICAgICAvLyBUcmlnZ2VyIGNoYW5nZVxuICAgICAgICAgICAgaWYoIGRlYm91bmNlZF9jaGFuZ2VIYW5kbGVyIClcbiAgICAgICAgICAgICAgICBkZWJvdW5jZWRfY2hhbmdlSGFuZGxlcigpO1xuICAgICAgICB9KTtcbiAgICAgICAgYWRkRXZlbnQoIG5vZGVfd3lzaXd5ZywgJ2RibGNsaWNrJywgZnVuY3Rpb24oIGUgKVxuICAgICAgICB7XG4gICAgICAgICAgICBtb3VzZUhhbmRsZXIoIGUgKTtcbiAgICAgICAgfSk7XG4gICAgICAgIGFkZEV2ZW50KCBub2RlX3d5c2l3eWcsICdzZWxlY3Rpb25jaGFuZ2UnLCAgZnVuY3Rpb24oIGUgKVxuICAgICAgICB7XG4gICAgICAgICAgICBtb3VzZUhhbmRsZXIoIGUgKTtcbiAgICAgICAgfSk7XG4gICAgICAgIGlmKCBvcHRpb25faGlqYWNrY29udGV4dG1lbnUgKVxuICAgICAgICB7XG4gICAgICAgICAgICBhZGRFdmVudCggbm9kZV93eXNpd3lnLCAnY29udGV4dG1lbnUnLCBmdW5jdGlvbiggZSApXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgbW91c2VIYW5kbGVyKCBlLCB0cnVlICk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGNhbmNlbEV2ZW50KCBlICk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG5cbiAgICAgICAgLy8gZXhlYyBjb21tYW5kXG4gICAgICAgIC8vIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9kb2N1bWVudC5leGVjQ29tbWFuZFxuICAgICAgICAvLyBodHRwOi8vd3d3LnF1aXJrc21vZGUub3JnL2RvbS9leGVjQ29tbWFuZC5odG1sXG4gICAgICAgIHZhciBleGVjQ29tbWFuZCA9IGZ1bmN0aW9uKCBjb21tYW5kLCBwYXJhbSwgZm9yY2Vfc2VsZWN0aW9uIClcbiAgICAgICAge1xuICAgICAgICAgICAgLy8gZ2l2ZSBzZWxlY3Rpb24gdG8gY29udGVudGVkaXRhYmxlIGVsZW1lbnRcbiAgICAgICAgICAgIHJlc3RvcmVTZWxlY3Rpb24oIG5vZGVfd3lzaXd5ZywgcG9wdXBfc2F2ZWRfc2VsZWN0aW9uICk7XG4gICAgICAgICAgICBpZiggISBzZWxlY3Rpb25JbnNpZGUobm9kZV93eXNpd3lnLCBmb3JjZV9zZWxlY3Rpb24pICkgLy8gcmV0dXJucyAnc2VsZWN0aW9uIGluc2lkZSBlZGl0b3InXG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgLy8gZm9yIHdlYmtpdCwgbW96aWxsYSwgb3BlcmFcbiAgICAgICAgICAgIGlmKCB3aW5kb3cuZ2V0U2VsZWN0aW9uIClcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAvLyBCdWdneSwgY2FsbCB3aXRoaW4gJ3RyeS9jYXRjaCdcbiAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICBpZiggZG9jdW1lbnQucXVlcnlDb21tYW5kU3VwcG9ydGVkICYmICEgZG9jdW1lbnQucXVlcnlDb21tYW5kU3VwcG9ydGVkKGNvbW1hbmQpIClcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGRvY3VtZW50LmV4ZWNDb21tYW5kKCBjb21tYW5kLCBmYWxzZSwgcGFyYW0gKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY2F0Y2goIGUgKSB7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gZm9yIElFXG4gICAgICAgICAgICBlbHNlIGlmKCBkb2N1bWVudC5zZWxlY3Rpb24gKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHZhciBzZWwgPSBkb2N1bWVudC5zZWxlY3Rpb247XG4gICAgICAgICAgICAgICAgaWYoIHNlbC50eXBlICE9ICdOb25lJyApXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICB2YXIgcmFuZ2UgPSBzZWwuY3JlYXRlUmFuZ2UoKTtcbiAgICAgICAgICAgICAgICAgICAgLy8gQnVnZ3ksIGNhbGwgd2l0aGluICd0cnkvY2F0Y2gnXG4gICAgICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiggISByYW5nZS5xdWVyeUNvbW1hbmRFbmFibGVkKGNvbW1hbmQpIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmFuZ2UuZXhlY0NvbW1hbmQoIGNvbW1hbmQsIGZhbHNlLCBwYXJhbSApO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGNhdGNoKCBlICkge1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9O1xuXG4gICAgICAgIC8vIFdvcmthcm91bmQgSUUxMSAtIGh0dHBzOi8vZ2l0aHViLmNvbS93eXNpd3lnanMvd3lzaXd5Zy5qcy9pc3N1ZXMvMTRcbiAgICAgICAgdmFyIHRyYWlsaW5nRGl2ID0gbnVsbDtcbiAgICAgICAgdmFyIElFdHJhaWxpbmdESVYgPSBmdW5jdGlvbigpXG4gICAgICAgIHtcbiAgICAgICAgICAgIC8vIERldGVjdCBJRSAtIGh0dHA6Ly9zdGFja292ZXJmbG93LmNvbS9xdWVzdGlvbnMvMTc5MDc0NDUvaG93LXRvLWRldGVjdC1pZTExXG4gICAgICAgICAgICBpZiggZG9jdW1lbnQuYWxsIHx8ICEhd2luZG93Lk1TSW5wdXRNZXRob2RDb250ZXh0IClcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICB0cmFpbGluZ0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoICdESVYnICk7XG4gICAgICAgICAgICAgICAgbm9kZV93eXNpd3lnLmFwcGVuZENoaWxkKCB0cmFpbGluZ0RpdiApO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICAvLyBDb21tYW5kIHN0cnVjdHVyZVxuICAgICAgICB2YXIgY2FsbFVwZGF0ZXMgPSBmdW5jdGlvbiggc2VsZWN0aW9uX2Rlc3Ryb3llZCApXG4gICAgICAgIHtcbiAgICAgICAgICAgIC8vIFJlbW92ZSBJRTExIHdvcmthcm91bmRcbiAgICAgICAgICAgIGlmKCB0cmFpbGluZ0RpdiApXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgbm9kZV93eXNpd3lnLnJlbW92ZUNoaWxkKCB0cmFpbGluZ0RpdiApO1xuICAgICAgICAgICAgICAgIHRyYWlsaW5nRGl2ID0gbnVsbDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIGNoYW5nZS1oYW5kbGVyXG4gICAgICAgICAgICBpZiggZGVib3VuY2VkX2NoYW5nZUhhbmRsZXIgKVxuICAgICAgICAgICAgICAgIGRlYm91bmNlZF9jaGFuZ2VIYW5kbGVyKCk7XG4gICAgICAgICAgICAvLyBoYW5kbGUgc2F2ZWQgc2VsZWN0aW9uXG4gICAgICAgICAgICBpZiggc2VsZWN0aW9uX2Rlc3Ryb3llZCApXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgY29sbGFwc2VTZWxlY3Rpb25FbmQoKTtcbiAgICAgICAgICAgICAgICBwb3B1cF9zYXZlZF9zZWxlY3Rpb24gPSBudWxsOyAvLyBzZWxlY3Rpb24gZGVzdHJveWVkXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmKCBwb3B1cF9zYXZlZF9zZWxlY3Rpb24gKVxuICAgICAgICAgICAgICAgIHBvcHVwX3NhdmVkX3NlbGVjdGlvbiA9IHNhdmVTZWxlY3Rpb24oIG5vZGVfd3lzaXd5ZyApO1xuICAgICAgICB9O1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgLy8gcHJvcGVydGllc1xuICAgICAgICAgICAgZ2V0RWxlbWVudDogZnVuY3Rpb24oKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHJldHVybiBub2RlX3d5c2l3eWc7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZ2V0SFRNTDogZnVuY3Rpb24oKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHJldHVybiBub2RlX3d5c2l3eWcuaW5uZXJIVE1MO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHNldEhUTUw6IGZ1bmN0aW9uKCBodG1sIClcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBub2RlX3d5c2l3eWcuaW5uZXJIVE1MID0gaHRtbDtcbiAgICAgICAgICAgICAgICBjYWxsVXBkYXRlcyggdHJ1ZSApOyAvLyBzZWxlY3Rpb24gZGVzdHJveWVkXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZ2V0U2VsZWN0ZWRIVE1MOiBmdW5jdGlvbigpXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgcmVzdG9yZVNlbGVjdGlvbiggbm9kZV93eXNpd3lnLCBwb3B1cF9zYXZlZF9zZWxlY3Rpb24gKTtcbiAgICAgICAgICAgICAgICBpZiggISBzZWxlY3Rpb25JbnNpZGUobm9kZV93eXNpd3lnKSApXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICAgICAgICAgIHJldHVybiBnZXRTZWxlY3Rpb25IdG1sKCBub2RlX3d5c2l3eWcgKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBzeW5jOiBmdW5jdGlvbigpXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgaWYoIHN5bmNUZXh0YXJlYSApXG4gICAgICAgICAgICAgICAgICAgIHN5bmNUZXh0YXJlYSgpO1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIC8vIHNlbGVjdGlvbiBhbmQgcG9wdXBcbiAgICAgICAgICAgIGNvbGxhcHNlU2VsZWN0aW9uOiBmdW5jdGlvbigpXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgY29sbGFwc2VTZWxlY3Rpb25FbmQoKTtcbiAgICAgICAgICAgICAgICBwb3B1cF9zYXZlZF9zZWxlY3Rpb24gPSBudWxsOyAvLyBzZWxlY3Rpb24gZGVzdHJveWVkXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZXhwYW5kU2VsZWN0aW9uOiBmdW5jdGlvbiggcHJlY2VkaW5nLCBmb2xsb3dpbmcgKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHJlc3RvcmVTZWxlY3Rpb24oIG5vZGVfd3lzaXd5ZywgcG9wdXBfc2F2ZWRfc2VsZWN0aW9uICk7XG4gICAgICAgICAgICAgICAgaWYoICEgc2VsZWN0aW9uSW5zaWRlKG5vZGVfd3lzaXd5ZykgKVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgICAgICAgICAgICBleHBhbmRTZWxlY3Rpb25DYXJldCggbm9kZV93eXNpd3lnLCBwcmVjZWRpbmcsIGZvbGxvd2luZyApO1xuICAgICAgICAgICAgICAgIHBvcHVwX3NhdmVkX3NlbGVjdGlvbiA9IHNhdmVTZWxlY3Rpb24oIG5vZGVfd3lzaXd5ZyApOyAvLyBzYXZlIG5ldyBzZWxlY3Rpb25cbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBvcGVuUG9wdXA6IGZ1bmN0aW9uKClcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBpZiggISBwb3B1cF9zYXZlZF9zZWxlY3Rpb24gKVxuICAgICAgICAgICAgICAgICAgICBwb3B1cF9zYXZlZF9zZWxlY3Rpb24gPSBzYXZlU2VsZWN0aW9uKCBub2RlX3d5c2l3eWcgKTsgLy8gc2F2ZSBjdXJyZW50IHNlbGVjdGlvblxuICAgICAgICAgICAgICAgIHJldHVybiBwb3B1cE9wZW4oKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBjbG9zZVBvcHVwOiBmdW5jdGlvbigpXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgcG9wdXBDbG9zZSgpO1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHJlbW92ZUZvcm1hdDogZnVuY3Rpb24oKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGV4ZWNDb21tYW5kKCAncmVtb3ZlRm9ybWF0JyApO1xuICAgICAgICAgICAgICAgIGV4ZWNDb21tYW5kKCAndW5saW5rJyApO1xuICAgICAgICAgICAgICAgIGNhbGxVcGRhdGVzKCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgYm9sZDogZnVuY3Rpb24oKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGV4ZWNDb21tYW5kKCAnYm9sZCcgKTtcbiAgICAgICAgICAgICAgICBjYWxsVXBkYXRlcygpO1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGl0YWxpYzogZnVuY3Rpb24oKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGV4ZWNDb21tYW5kKCAnaXRhbGljJyApO1xuICAgICAgICAgICAgICAgIGNhbGxVcGRhdGVzKCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgdW5kZXJsaW5lOiBmdW5jdGlvbigpXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgZXhlY0NvbW1hbmQoICd1bmRlcmxpbmUnICk7XG4gICAgICAgICAgICAgICAgY2FsbFVwZGF0ZXMoKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBzdHJpa2V0aHJvdWdoOiBmdW5jdGlvbigpXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgZXhlY0NvbW1hbmQoICdzdHJpa2VUaHJvdWdoJyApO1xuICAgICAgICAgICAgICAgIGNhbGxVcGRhdGVzKCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZm9yZWNvbG9yOiBmdW5jdGlvbiggY29sb3IgKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGV4ZWNDb21tYW5kKCAnZm9yZUNvbG9yJywgY29sb3IgKTtcbiAgICAgICAgICAgICAgICBjYWxsVXBkYXRlcygpO1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGhpZ2hsaWdodDogZnVuY3Rpb24oIGNvbG9yIClcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAvLyBodHRwOi8vc3RhY2tvdmVyZmxvdy5jb20vcXVlc3Rpb25zLzI3NTY5MzEvaGlnaGxpZ2h0LXRoZS10ZXh0LW9mLXRoZS1kb20tcmFuZ2UtZWxlbWVudFxuICAgICAgICAgICAgICAgIGlmKCAhIGV4ZWNDb21tYW5kKCdoaWxpdGVDb2xvcicsY29sb3IpICkgLy8gc29tZSBicm93c2VycyBhcHBseSAnYmFja0NvbG9yJyB0byB0aGUgd2hvbGUgYmxvY2tcbiAgICAgICAgICAgICAgICAgICAgZXhlY0NvbW1hbmQoICdiYWNrQ29sb3InLCBjb2xvciApO1xuICAgICAgICAgICAgICAgIGNhbGxVcGRhdGVzKCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZm9udE5hbWU6IGZ1bmN0aW9uKCBuYW1lIClcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBleGVjQ29tbWFuZCggJ2ZvbnROYW1lJywgbmFtZSApO1xuICAgICAgICAgICAgICAgIGNhbGxVcGRhdGVzKCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZm9udFNpemU6IGZ1bmN0aW9uKCBzaXplIClcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBleGVjQ29tbWFuZCggJ2ZvbnRTaXplJywgc2l6ZSApO1xuICAgICAgICAgICAgICAgIGNhbGxVcGRhdGVzKCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgc3Vic2NyaXB0OiBmdW5jdGlvbigpXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgZXhlY0NvbW1hbmQoICdzdWJzY3JpcHQnICk7XG4gICAgICAgICAgICAgICAgY2FsbFVwZGF0ZXMoKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBzdXBlcnNjcmlwdDogZnVuY3Rpb24oKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGV4ZWNDb21tYW5kKCAnc3VwZXJzY3JpcHQnICk7XG4gICAgICAgICAgICAgICAgY2FsbFVwZGF0ZXMoKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBhbGlnbjogZnVuY3Rpb24oIGFsaWduIClcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBJRXRyYWlsaW5nRElWKCk7XG4gICAgICAgICAgICAgICAgaWYoIGFsaWduID09ICdsZWZ0JyApXG4gICAgICAgICAgICAgICAgICAgIGV4ZWNDb21tYW5kKCAnanVzdGlmeUxlZnQnICk7XG4gICAgICAgICAgICAgICAgZWxzZSBpZiggYWxpZ24gPT0gJ2NlbnRlcicgKVxuICAgICAgICAgICAgICAgICAgICBleGVjQ29tbWFuZCggJ2p1c3RpZnlDZW50ZXInICk7XG4gICAgICAgICAgICAgICAgZWxzZSBpZiggYWxpZ24gPT0gJ3JpZ2h0JyApXG4gICAgICAgICAgICAgICAgICAgIGV4ZWNDb21tYW5kKCAnanVzdGlmeVJpZ2h0JyApO1xuICAgICAgICAgICAgICAgIGVsc2UgaWYoIGFsaWduID09ICdqdXN0aWZ5JyApXG4gICAgICAgICAgICAgICAgICAgIGV4ZWNDb21tYW5kKCAnanVzdGlmeUZ1bGwnICk7XG4gICAgICAgICAgICAgICAgY2FsbFVwZGF0ZXMoKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBmb3JtYXQ6IGZ1bmN0aW9uKCB0YWduYW1lIClcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBJRXRyYWlsaW5nRElWKCk7XG4gICAgICAgICAgICAgICAgZXhlY0NvbW1hbmQoICdmb3JtYXRCbG9jaycsIHRhZ25hbWUgKTtcbiAgICAgICAgICAgICAgICBjYWxsVXBkYXRlcygpO1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGluZGVudDogZnVuY3Rpb24oIG91dGRlbnQgKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIElFdHJhaWxpbmdESVYoKTtcbiAgICAgICAgICAgICAgICBleGVjQ29tbWFuZCggb3V0ZGVudCA/ICdvdXRkZW50JyA6ICdpbmRlbnQnICk7XG4gICAgICAgICAgICAgICAgY2FsbFVwZGF0ZXMoKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBpbnNlcnRMaW5rOiBmdW5jdGlvbiggdXJsIClcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBleGVjQ29tbWFuZCggJ2NyZWF0ZUxpbmsnLCB1cmwgKTtcbiAgICAgICAgICAgICAgICBjYWxsVXBkYXRlcyggdHJ1ZSApOyAvLyBzZWxlY3Rpb24gZGVzdHJveWVkXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgaW5zZXJ0SW1hZ2U6IGZ1bmN0aW9uKCB1cmwgKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGV4ZWNDb21tYW5kKCAnaW5zZXJ0SW1hZ2UnLCB1cmwsIHRydWUgKTtcbiAgICAgICAgICAgICAgICBjYWxsVXBkYXRlcyggdHJ1ZSApOyAvLyBzZWxlY3Rpb24gZGVzdHJveWVkXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgaW5zZXJ0SFRNTDogZnVuY3Rpb24oIGh0bWwgKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGlmKCAhIGV4ZWNDb21tYW5kKCdpbnNlcnRIVE1MJywgaHRtbCwgdHJ1ZSkgKVxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gSUUgMTEgc3RpbGwgZG9lcyBub3Qgc3VwcG9ydCAnaW5zZXJ0SFRNTCdcbiAgICAgICAgICAgICAgICAgICAgcmVzdG9yZVNlbGVjdGlvbiggbm9kZV93eXNpd3lnLCBwb3B1cF9zYXZlZF9zZWxlY3Rpb24gKTtcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0aW9uSW5zaWRlKCBub2RlX3d5c2l3eWcsIHRydWUgKTtcbiAgICAgICAgICAgICAgICAgICAgcGFzdGVIdG1sQXRDYXJldCggbm9kZV93eXNpd3lnLCBodG1sICk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNhbGxVcGRhdGVzKCB0cnVlICk7IC8vIHNlbGVjdGlvbiBkZXN0cm95ZWRcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBpbnNlcnRMaXN0OiBmdW5jdGlvbiggb3JkZXJlZCApXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgSUV0cmFpbGluZ0RJVigpO1xuICAgICAgICAgICAgICAgIGV4ZWNDb21tYW5kKCBvcmRlcmVkID8gJ2luc2VydE9yZGVyZWRMaXN0JyA6ICdpbnNlcnRVbm9yZGVyZWRMaXN0JyApO1xuICAgICAgICAgICAgICAgIGNhbGxVcGRhdGVzKCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgfTtcblxuICAgIHJldHVybiB3eXNpd3lnO1xufSk7XG4iLCJpbXBvcnQgVnVlIGZyb20gJ3Z1ZSdcbmV4cG9ydCBkZWZhdWx0IG5ldyBWdWVcbiIsIjx0ZW1wbGF0ZT5cbiAgPG1haW4+XG4gICAgPGFzaWRlIGFtLW5vdGE9YXNpZGU+XG4gICAgICA8bm90YS1saXN0IDppdGVtcz1pdGVtcz48L25vdGEtbGlzdD5cblxuICAgICAgPGJ1dHRvbiB0eXBlPWJ1dHRvbiB2LW9uOmNsaWNrPSdhZGQoIFwibm90YVwiICknPlxuICAgICAgICA8c3BhbiBjbGFzcz1tYXRlcmlhbC1pY29ucz5ub3RlX2FkZDwvc3Bhbj4gTmV3IG5vdGVcbiAgICAgIDwvYnV0dG9uPlxuXG4gICAgICA8YnV0dG9uIHR5cGU9YnV0dG9uIHYtb246Y2xpY2s9J2FkZCggXCJmb2xkZXJcIiApJz5cbiAgICAgICAgPHNwYW4gY2xhc3M9bWF0ZXJpYWwtaWNvbnM+Y3JlYXRlX25ld19mb2xkZXI8L3NwYW4+IE5ldyBmb2xkZXJcbiAgICAgIDwvYnV0dG9uPlxuICAgIDwvYXNpZGU+XG5cbiAgIDxub3RhLWVkaXRvciB2LXNob3c9ZWRpdGluZyA6ZWRpdGluZz1lZGl0aW5nIHRyYW5zaXRpb249ZWRpdG9yPjwvbm90YS1lZGl0b3I+XG4gIDwvbWFpbj5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG4gIGltcG9ydCBidXMgZnJvbSAnLi4vYnVzJ1xuICBpbXBvcnQgaGlzdG9yeSwgeyBocmVmIH0gZnJvbSAnLi4vaGlzdG9yeSdcbiAgaW1wb3J0IHsgSUQgfSBmcm9tICcuLi91dGlsJ1xuXG4gIGltcG9ydCBOb3RhRWRpdG9yIGZyb20gJy4vbm90YS1lZGl0b3IudnVlJ1xuICBpbXBvcnQgTm90YUxpc3QgZnJvbSAnLi9ub3RhLWxpc3QudnVlJ1xuXG4gIGV4cG9ydCBkZWZhdWx0IHtcbiAgICBuYW1lOiAnbm90YS1hcHAnLFxuICAgIGNvbXBvbmVudHM6IHsgTm90YUVkaXRvciwgTm90YUxpc3QgfSxcblxuICAgIGRhdGE6IF8gPT4gKHtcbiAgICAgIGVkaXRpbmc6IGZhbHNlLFxuXG4gICAgICBpdGVtczogW3tcbiAgICAgICAgdHlwZTogJ25vdGEnLFxuICAgICAgICBpZDogJzEnLFxuICAgICAgICB0aXRsZTogJ1RoZSBTaWxtYXJpbGxpb24nLFxuICAgICAgICBjb250ZW50OiAnPHA+ZHV1cDwvcD48cD5sZXg8L3A+JyxcbiAgICAgIH0sIHtcbiAgICAgICAgdHlwZTogJ25vdGEnLFxuICAgICAgICBpZDogJzInLFxuICAgICAgICB0aXRsZTogJ+S4jeaAneitsOOBruWbveOBruOCouODquOCuScsXG4gICAgICAgIGNvbnRlbnQ6ICc8cD5oZWx5PC9wPicsXG4gICAgICB9LCB7XG4gICAgICAgIHR5cGU6ICdub3RhJyxcbiAgICAgICAgaWQ6ICczJyxcbiAgICAgICAgdGl0bGU6ICdXYXJuaW5nISEnLFxuICAgICAgICBjb250ZW50OiAnPHA+dHJvcGljPC9wPicsXG4gICAgICB9LCB7XG4gICAgICAgIHR5cGU6ICdmb2xkZXInLFxuICAgICAgICBpZDogJzQnLFxuICAgICAgICB0aXRsZTogJ290aGVyJyxcbiAgICAgIH0sIHtcbiAgICAgICAgdHlwZTogJ25vdGEnLFxuICAgICAgICBpZDogJzUnLFxuICAgICAgICBwYXJlbnQ6ICc0JyxcbiAgICAgICAgdGl0bGU6ICdEb25cXCd0IFBhbmljJyxcbiAgICAgICAgY29udGVudDogJzxwPnl1bmE8L3A+JyxcbiAgICAgIH0sIHtcbiAgICAgICAgdHlwZTogJ2ZvbGRlcicsXG4gICAgICAgIGlkOiAnNicsXG4gICAgICAgIHBhcmVudDogJzQnLFxuICAgICAgICB0aXRsZTogJ2Vsc2UnLFxuICAgICAgfSwge1xuICAgICAgICB0eXBlOiAnbm90YScsXG4gICAgICAgIGlkOiAnNycsXG4gICAgICAgIHBhcmVudDogJzYnLFxuICAgICAgICB0aXRsZTogJ1NvbWV0aW1lcycsXG4gICAgICAgIGNvbnRlbnQ6ICc8cD55dW5hPC9wPicsXG4gICAgICB9LCB7XG4gICAgICAgIHR5cGU6ICdmb2xkZXInLFxuICAgICAgICBpZDogJzgnLFxuICAgICAgICBwYXJlbnQ6ICc2JyxcbiAgICAgICAgdGl0bGU6ICdhbm90aGVyJyxcbiAgICAgIH0sIHtcbiAgICAgICAgdHlwZTogJ25vdGEnLFxuICAgICAgICBpZDogJzknLFxuICAgICAgICBwYXJlbnQ6ICc4JyxcbiAgICAgICAgdGl0bGU6ICcxJyxcbiAgICAgICAgY29udGVudDogJzxwPnl1bmE8L3A+JyxcbiAgICAgIH1dLFxuICAgIH0pLFxuXG4gICAgY3JlYXRlZCgpIHtcbiAgICAgIGJ1cy4kb24oICdoaXN0b3J5Y2hhbmdlJywgdGhpcy5oaXN0b3J5Y2hhbmdlIClcbiAgICB9LFxuXG4gICAgbWV0aG9kczoge1xuICAgICAgaGlzdG9yeWNoYW5nZSh7IHBhcmFtcyB9KSB7XG4gICAgICAgIGlmICggISBwYXJhbXMuaWQgKSByZXR1cm5cblxuICAgICAgICBjb25zdCBpdGVtID0gdGhpcy5pdGVtcy5maW5kKCBpdGVtID0+IGl0ZW0uaWQgPT09IHBhcmFtcy5pZCApXG4gICAgICAgIGlmICggIWl0ZW0gfHwgaXRlbS50eXBlICE9PSAnbm90YScgKSByZXR1cm5cblxuICAgICAgICB0aGlzLmVkaXRpbmcgPSBpdGVtXG4gICAgICB9LFxuXG4gICAgICBhZGQoIHR5cGUgKSB7XG4gICAgICAgIGNvbnN0IGl0ZW0gPSB7XG4gICAgICAgICAgdHlwZSxcbiAgICAgICAgICB0aXRsZTogJycsXG4gICAgICAgICAgaWQ6IElEKCksXG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLml0ZW1zLnB1c2goIGl0ZW0gKVxuXG4gICAgICAgIGlmICggdHlwZSA9PT0gJ25vdGEnICkge1xuICAgICAgICAgIGl0ZW0uY29udGVudCA9ICcnXG4gICAgICAgICAgdGhpcy5lZGl0aW5nID0gaXRlbVxuXG4gICAgICAgICAgaGlzdG9yeS5wdXNoKFxuICAgICAgICAgICAgaHJlZih7IG5hbWU6ICdpdGVtJywgcGFyYW1zOiBpdGVtIH0pXG4gICAgICAgICAgKVxuICAgICAgICB9XG5cbiAgICAgICAgYnVzLiRlbWl0KCAnbmV3SXRlbScsIHsgaWQ6IGl0ZW0uaWQgfSApXG4gICAgICB9LFxuICAgIH0sXG4gIH1cbjwvc2NyaXB0PlxuIiwiPHRlbXBsYXRlPlxuICA8ZGl2IHJlZj1lZGl0b3IgY29udGVudGVkaXRhYmxlIHYtb246Ymx1cj1ibHVyPjwvZGl2PlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbiAgaW1wb3J0IGVkaXRhYmxlIGZyb20gJ3d5c2l3eWcuanMnXG4gIGltcG9ydCB7IGF1dG9saW5rIH0gZnJvbSAnLi4vdXRpbCdcbiAgaW1wb3J0IGJ1cyBmcm9tICcuLi9idXMnXG5cbiAgY29uc3QgbGlua2VkID0gYXV0b2xpbmtcbiAgbGV0IGVkaXRvclxuXG4gIGV4cG9ydCBkZWZhdWx0IHtcbiAgICBuYW1lOiAnbm90YS1lZGl0YWJsZScsXG4gICAgcHJvcHM6IFsgJ3ZhbHVlJyBdLFxuXG4gICAgbW91bnRlZCgpIHtcbiAgICAgIGVkaXRvciA9IGVkaXRhYmxlKHtcbiAgICAgICAgZWxlbWVudDogdGhpcy4kcmVmcy5lZGl0b3IsXG4gICAgICB9KVxuICAgIH0sXG5cbiAgICBtZXRob2RzOiB7XG4gICAgICBrZXl1cCggZXZlbnQgKSB7XG4gICAgICAgIGNvbnN0IGtleVByZXNzZWQgPSBrZXkoIGV2ZW50IClcbiAgICAgICAgY29uc3QgYWN0aXZhdGVLZXlzID0gWyAnc3BhY2UnLCAnZW50ZXInIF1cbiAgICAgICAgaWYgKCAhIGFjdGl2YXRlS2V5cy5pbmNsdWRlcyhrZXlQcmVzc2VkKSApIHJldHVyblxuXG4gICAgICAgIGNvbnN0IGNhcmV0UG9zID0gcmFuZ3kuc2F2ZVNlbGVjdGlvbigpXG4gICAgICAgIGNvbnN0IGVkaXRvckNvbnRlbnQgPSBlZGl0b3IuZ2V0SFRNTCgpLnJlcGxhY2UoIC8mbmJzcDsvZywgKCBtYXRjaCwgb2Zmc2V0KSlcbiAgICAgICAgY29uc3QgbGlua2VkQ29udGVudCA9IGxpbmtlZCggZWRpdG9yQ29udGVudCApXG4gICAgICAgIGNvbnNvbGUubG9nKCBsaW5rZWRDb250ZW50IClcbiAgICAgICAgZWRpdG9yLnNldEhUTUwoIGxpbmtlZENvbnRlbnQucmVwbGFjZSggLyAvZywgJyZuYnNwOycgKSApXG4gICAgICAgIHJhbmd5LnJlc3RvcmVTZWxlY3Rpb24oIGNhcmV0UG9zIClcblxuICAgICAgfSxcblxuICAgICAgYmx1cigpIHtcbiAgICAgICAgaWYgKCAhIGVkaXRvciApIHJldHVyblxuXG4gICAgICAgIGVkaXRvci5zZXRIVE1MKCBsaW5rZWQoZWRpdG9yLmdldEhUTUwoKSkgKVxuICAgICAgfSxcbiAgICB9LFxuICB9XG48L3NjcmlwdD5cblxuPHN0eWxlIGxhbmc9c3R5bHVzPlxuICBbIGNvbnRlbnRlZGl0YWJsZSBdIGEge1xuICAgIHRleHQtZGVjb3JhdGlvbiB1bmRlcmxpbmVcbiAgICBjdXJzb3IgcG9pbnRlclxuICAgIGRpc3BsYXkgaW5saW5lLWJsb2NrXG4gICAgbWFyZ2luIDBcbiAgfVxuPC9zdHlsZT5cbiIsIjx0ZW1wbGF0ZT5cbiAgPGRpdiBhbS1ub3RhPWVkaXRvcj5cbiAgICA8aGVhZGVyIGFtLW5vdGE9ZWRpdG9yLXRpdGxlIHYtdGV4dD0nZWRpdGluZy50aXRsZSc+PC9oZWFkZXI+XG5cbiAgICA8bm90YS1lZGl0YWJsZSB2LW1vZGVsPSdlZGl0aW5nLmNvbnRlbnQnPjwvbm90YS1lZGl0YWJsZT5cbiAgPC9kaXY+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuICBpbXBvcnQgYnVzIGZyb20gJy4uL2J1cydcbiAgaW1wb3J0IE5vdGFFZGl0YWJsZSBmcm9tICcuL25vdGEtZWRpdGFibGUudnVlJ1xuXG4gIGV4cG9ydCBkZWZhdWx0IHtcbiAgICBuYW1lOiAnbm90YS1lZGl0b3InLFxuICAgIHByb3BzOiBbICdlZGl0aW5nJyBdLFxuICAgIGNvbXBvbmVudHM6IHsgTm90YUVkaXRhYmxlIH0sXG4gIH1cbjwvc2NyaXB0PlxuIiwiPHRlbXBsYXRlPlxuICA8bmF2IGFtLW5vdGE9bGlzdFxuICAgIHYtb246Y2xpY2suY2FwdHVyZT0nZWRpdCggJGV2ZW50ICknXG4gICAgdi1vbjprZXl1cD0na2V5dXAoICRldmVudCApJ1xuICAgIHYtb246Zm9jdXNvdXQ9J2JsdXIoICRldmVudCApJ1xuICA+XG4gICAgPHRlbXBsYXRlIHYtZm9yPSdpdGVtIG9mIHJlc3VsdHMnPlxuICAgICAgPGEgYW0tbm90YT1pdGVtIDpkYXRhLXR5cGU9aXRlbS50eXBlXG4gICAgICAgIHYtaHJlZj0neyBuYW1lOiBcIml0ZW1cIiwgcGFyYW1zOiB7IGlkOiBpdGVtLmlkIH0gfSdcbiAgICAgID5cbiAgICAgICAgPHNwYW4gY2xhc3M9bWF0ZXJpYWwtaWNvbnM+XG4gICAgICAgICAge3sgaXRlbS50eXBlID09PSAnZm9sZGVyJyA/ICdmb2xkZXInIDogJ25vdGUnIH19XG4gICAgICAgIDwvc3Bhbj5cblxuICAgICAgICA8aW5wdXQgdi1tb2RlbD1pdGVtLnRpdGxlIDpkYXRhLWlkPWl0ZW0uaWQgOmlkPWl0ZW0uaWQgcmVhZG9ubHk+XG4gICAgICA8L2E+XG4gICAgPC90ZW1wbGF0ZT5cbiAgPC9uYXY+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuICBpbXBvcnQgYnVzIGZyb20gJy4uL2J1cydcbiAgaW1wb3J0IHsga2V5IH0gZnJvbSAnLi4vdXRpbCdcblxuICBmdW5jdGlvbiBoYXNOb1BhcmVudCh7IHBhcmVudCB9KSB7XG4gICAgcmV0dXJuICggISBwYXJlbnQgKVxuICB9XG5cbiAgZXhwb3J0IGRlZmF1bHQge1xuICAgIG5hbWU6ICdub3RhLWxpc3QnLFxuICAgIHByb3BzOiBbICdpdGVtcycgXSxcblxuICAgIGRhdGE6IF8gPT4gKHtcbiAgICAgIGZpbHRlcjogaGFzTm9QYXJlbnQsXG4gICAgICBjdXJyZW50Rm9sZGVyOiBudWxsLFxuICAgICAgbGFzdFRhcmdldDogbnVsbCxcbiAgICAgIGxhc3RWYWx1ZTogbnVsbCxcbiAgICB9KSxcblxuICAgIGNvbXB1dGVkOiB7XG4gICAgICByZXN1bHRzKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5pdGVtcy5maWx0ZXIoIHRoaXMuZmlsdGVyIClcbiAgICAgIH0sXG4gICAgfSxcblxuICAgIGNyZWF0ZWQoKSB7XG4gICAgICBidXMuJG9uKCAnaGlzdG9yeWNoYW5nZScsIHRoaXMuaGlzdG9yeWNoYW5nZSApXG5cbiAgICAgIGJ1cy4kb24oICduZXdJdGVtJywgKHsgaWQgfSkgPT5cbiAgICAgICAgdGhpcy4kbmV4dFRpY2soIF8gPT5cbiAgICAgICAgICB0aGlzLmZvY3VzKHsgdGFyZ2V0OiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChpZCkgfSlcbiAgICAgICAgKVxuICAgICAgKVxuICAgIH0sXG5cbiAgICBtZXRob2RzOiB7XG4gICAgICBoYXNOb1BhcmVudCxcbiAgICAgIGlzQ2hpbGRPZjogaWQgPT4gKHsgcGFyZW50IH0pID0+IHBhcmVudCA9PT0gaWQsXG5cbiAgICAgIGhpc3RvcnljaGFuZ2UoeyBzdGF0ZSA9IHt9LCBwYXJhbXMgfSkge1xuICAgICAgICBpZiAoICEgcGFyYW1zLmlkICkgeyAgLy8gbG9jYXRpb246IC9cbiAgICAgICAgICB0aGlzLmZpbHRlciA9IHRoaXMuaGFzTm9QYXJlbnRcbiAgICAgICAgICByZXR1cm5cbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGl0ZW0gPSB0aGlzLmdldEl0ZW1CeUlkKCBwYXJhbXMuaWQgKVxuICAgICAgICBsZXQgeyBpZCwgdHlwZSwgcGFyZW50IH0gPSBpdGVtXG5cbiAgICAgICAgaWYgKCB0eXBlID09PSAnbm90YScgKSB7XG4gICAgICAgICAgaWQgPSBwYXJlbnRcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAvLyByZXNldCBmb2N1cyB0byB0b3BcbiAgICAgICAgICB0aGlzLiRlbC50YWJJbmRleCA9IDBcbiAgICAgICAgICB0aGlzLiRlbC5mb2N1cygpXG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmZpbHRlciA9IHRoaXMuaXNDaGlsZE9mKCBpZCApXG4gICAgICB9LFxuXG4gICAgICBnZXRJdGVtQnlJZCggJGlkICkge1xuICAgICAgICByZXR1cm4gdGhpcy5pdGVtcy5maW5kKCAoeyBpZCB9KSA9PiBpZCA9PT0gJGlkIClcbiAgICAgIH0sXG5cbiAgICAgIGZvY3VzKHsgdGFyZ2V0IH0pIHtcbiAgICAgICAgaWYgKCB0YXJnZXQudGFnTmFtZSAhPT0gJ0lOUFVUJyApIHJldHVyblxuXG4gICAgICAgIHRhcmdldC5yZWFkT25seSA9IGZhbHNlXG4gICAgICAgIHRhcmdldC5mb2N1cygpXG4gICAgICAgIHRhcmdldC5zZWxlY3QoKVxuICAgICAgfSxcblxuICAgICAgYmx1cih7IHRhcmdldCB9KSB7XG4gICAgICAgIGlmICggdGFyZ2V0LnRhZ05hbWUgIT09ICdJTlBVVCcgKSByZXR1cm5cblxuICAgICAgICB0YXJnZXQucmVhZE9ubHkgPSB0cnVlXG4gICAgICAgIHRhcmdldC5ibHVyKClcbiAgICAgIH0sXG5cbiAgICAgIGVkaXQoIGV2ZW50ICkge1xuICAgICAgICBjb25zdCB7IHRhcmdldCB9ID0gZXZlbnRcblxuICAgICAgICBpZiAoIHRoaXMubGFzdFRhcmdldCApIHtcbiAgICAgICAgICB0aGlzLmxhc3RUYXJnZXQucmVhZE9ubHkgPSB0cnVlXG4gICAgICAgICAgdGhpcy5sYXN0VGFyZ2V0ID0gbnVsbFxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCB0YXJnZXQudGFnTmFtZSAhPT0gJ0lOUFVUJyApIHJldHVyblxuICAgICAgICBpZiAoICEgZXZlbnQuc2hpZnRLZXkgKSByZXR1cm5cblxuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpXG5cbiAgICAgICAgdGhpcy5mb2N1cyggZXZlbnQgKVxuXG4gICAgICAgIHRoaXMubGFzdFRhcmdldCA9IHRhcmdldFxuICAgICAgICB0aGlzLmxhc3RWYWx1ZSAgPSB0YXJnZXQudmFsdWVcbiAgICAgIH0sXG5cbiAgICAgIGNhbmNlbCh7IHRhcmdldCB9KSB7XG4gICAgICAgIHRoaXMuYmx1ciggdGFyZ2V0IClcblxuICAgICAgICBpZiAoICEgdGhpcy5sYXN0VmFsdWUgKSByZXR1cm5cblxuICAgICAgICB0aGlzLmdldEl0ZW1CeUlkKCB0YXJnZXQuZGF0YXNldC5pZCApLnRpdGxlID0gdGhpcy5sYXN0VmFsdWVcbiAgICAgICAgdGhpcy5sYXN0VmFsdWUgPSBudWxsXG4gICAgICB9LFxuXG4gICAgICBrZXl1cCggZXZlbnQgKSB7XG4gICAgICAgIGNvbnN0IHsgdGFyZ2V0IH0gPSBldmVudFxuXG4gICAgICAgIGlmICggdGFyZ2V0LnRhZ05hbWUgIT09ICdJTlBVVCcgKSByZXR1cm5cblxuICAgICAgICBjb25zdCBrZXlQcmVzc2VkID0ga2V5KCBldmVudCApXG5cbiAgICAgICAgaWYgKCBrZXlQcmVzc2VkID09PSAnZXNjYXBlJyApIHtcbiAgICAgICAgICB0aGlzLmNhbmNlbCggZXZlbnQgKVxuICAgICAgICB9IGVsc2UgaWYgKCBrZXlQcmVzc2VkID09PSAnZW50ZXInICkge1xuICAgICAgICAgIHRhcmdldC5wYXJlbnRFbGVtZW50LmNsaWNrKClcblxuICAgICAgICAgIGlmICggZXZlbnQuc2hpZnRLZXkgKSB7XG4gICAgICAgICAgICB0aGlzLmVkaXQoIGV2ZW50IClcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgfSxcbiAgfVxuPC9zY3JpcHQ+XG5cbjxzdHlsZSBsYW5nPSdzdHlsdXMnPlxuICBbYW0tbm90YT1saXN0XTpmb2N1cyB7XG4gICAgb3V0bGluZSBub25lXG4gIH1cblxuICAubWF0ZXJpYWwtaWNvbnMge1xuICAgIGZvbnQtc2l6ZSBpbmhlcml0XG4gICAgbWFyZ2luLXJpZ2h0IDVweFxuXG4gICAgJiwgJiArIHNwYW4ge1xuICAgICAgZGlzcGxheSBpbmxpbmUtYmxvY2tcbiAgICAgIHZlcnRpY2FsLWFsaWduIG1pZGRsZVxuICAgIH1cbiAgfVxuXG4gIGEge1xuICAgIGNvbG9yIGluaGVyaXRcbiAgICB0ZXh0LWRlY29yYXRpb24gbm9uZVxuICAgIG1hcmdpbiAuNWVtIDBcbiAgICBkaXNwbGF5IGJsb2NrXG4gIH1cbjwvc3R5bGU+XG4iLCJpbXBvcnQgVnVlIGZyb20gJ3Z1ZSdcbmltcG9ydCBSb3V0ZXIsIHsgaHJlZiB9IGZyb20gJy4vcm91dGVyJ1xuVnVlLnVzZSggUm91dGVyIClcblxuaW1wb3J0IGJ1cyBmcm9tICcuL2J1cydcblxuZXhwb3J0IGRlZmF1bHQgUm91dGVyKHtcbiAgcm91dGVzOiBbXG4gICAgeyBuYW1lOiAnaXRlbScsIHBhdGg6ICcvOmlkJyB9LFxuICBdLFxuXG4gIGJ1cyxcbn0pXG5cbmV4cG9ydCB7IGhyZWYgfVxuIiwiaW1wb3J0ICdzZXRpbW1lZGlhdGUnXG5cbmltcG9ydCBoaXN0b3J5IGZyb20gJy4vaGlzdG9yeSdcbmltcG9ydCBWdWUgZnJvbSAndnVlJ1xuXG5pbXBvcnQgTm90YUFwcCBmcm9tICcuL2NvbXBvbmVudHMvbm90YS1hcHAudnVlJ1xuXG5jb25zdCBub3RhID0gd2luZG93Lm5vdGEgPSBoaXN0b3J5XG5cbm5vdGEuYXBwID0gbmV3IFZ1ZSh7XG4gIGVsOiAnbWFpbicsXG5cbiAgcmVuZGVyOiBoID0+IGgoIE5vdGFBcHAgKSxcbn0pXG5cbm5vdGEuc3RhcnQoKVxuIiwiaW1wb3J0IHsgY3JlYXRlSGlzdG9yeSwgdXNlQmFzZW5hbWUgfSBmcm9tICdoaXN0b3J5J1xuaW1wb3J0IGZyb21QYXRoIGZyb20gJ3BhdGgtdG8tcmVnZXhwJ1xuXG5sZXQgaGlzdG9yeVxuY29uc3QgdG9QYXRoID0ge31cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUm91dGVyKHtcbiAgYmFzZW5hbWUgPSAnLycsXG4gIHJvdXRlcyA9IFtdLFxuICBidXMsXG59ID0ge30pIHtcbiAgaWYgKCAhIFJvdXRlci5pbnN0YWxsZWQgKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgJ1BsZWFzZSBpbnN0YWxsIHRoZSBSb3V0ZXIgd2l0aCBWdWUudXNlKCkgYmVmb3JlIGNyZWF0aW5nIGFuIGluc3RhbmNlLidcbiAgICApXG4gIH1cblxuICBpZiAoIHR5cGVvZiBidXMgIT09ICdvYmplY3QnICkge1xuICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICdQbGVhc2UgcHJvdmlkZSBhbiBldmVudCBidXMgYXMgdGhlIGBidXNgIG9wdGlvbidcbiAgICApXG4gIH1cblxuICBoaXN0b3J5ID0gdXNlQmFzZW5hbWUoIGNyZWF0ZUhpc3RvcnkgKSh7XG4gICAgYmFzZW5hbWUsXG4gIH0pXG5cbiAgaGlzdG9yeS5saXN0ZW4oIGxvY2F0aW9uID0+IHtcbiAgICBidXMuJGVtaXQoICdoaXN0b3J5Y2hhbmdlJywgbWF0Y2hSb3V0ZXMoIGxvY2F0aW9uLCByb3V0ZXMgKSApXG4gIH0pXG5cbiAgLy8gbWF0Y2ggaW5pdGlhbCByb3V0ZVxuICBjb25zdCBpbml0aWFsID0gbWF0Y2hSb3V0ZXMoIGhpc3RvcnkuZ2V0Q3VycmVudExvY2F0aW9uKCksIHJvdXRlcyApXG4gIGhpc3Rvcnkuc3RhcnQgPSBfID0+IGJ1cy4kZW1pdCggJ2hpc3RvcnljaGFuZ2UnLCBpbml0aWFsIClcblxuICByZXR1cm4gaGlzdG9yeVxufVxuXG5leHBvcnQgZnVuY3Rpb24gaHJlZih7IG5hbWUsIHBhcmFtcyB9KSB7XG4gIHJldHVybiB0b1BhdGhbbmFtZV0ocGFyYW1zKVxufVxuXG5Sb3V0ZXIuaW5zdGFsbCA9IGZ1bmN0aW9uIGluc3RhbGwoIFZ1ZSApIHtcbiAgZnVuY3Rpb24gY2xpY2soIGV2ZW50ICkge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KClcblxuICAgIGhpc3RvcnkucHVzaCh7XG4gICAgICBwYXRobmFtZTogbm9ybWFsaXNlUGF0aG5hbWUoIGV2ZW50LmN1cnJlbnRUYXJnZXQucGF0aG5hbWUgKSxcbiAgICB9KVxuICB9XG5cbiAgZnVuY3Rpb24gc2V0SHJlZiggZWwsIHJvdXRlICkge1xuICAgIGVsLnNldEF0dHJpYnV0ZSggJ2hyZWYnLCBocmVmKHJvdXRlKSApXG4gIH1cblxuICBWdWUuZGlyZWN0aXZlKCAnaHJlZicsIHtcbiAgICBiaW5kKCBlbCwgeyB2YWx1ZSB9ICkge1xuICAgICAgc2V0SHJlZiggZWwsIHZhbHVlIClcbiAgICAgIGVsLmFkZEV2ZW50TGlzdGVuZXIoICdjbGljaycsIGNsaWNrIClcbiAgICB9LFxuXG4gICAgdW5iaW5kKCBlbCApIHtcbiAgICAgIGVsLnJlbW92ZUV2ZW50TGlzdGVuZXIoICdjbGljaycsIGNsaWNrIClcbiAgICB9LFxuXG4gICAgdXBkYXRlKCBlbCwgeyB2YWx1ZSB9ICkge1xuICAgICAgc2V0SHJlZiggZWwsIHZhbHVlIClcbiAgICB9LFxuICB9KVxufVxuXG5mdW5jdGlvbiBtYXRjaFJvdXRlcyggeyBzdGF0ZSwgcGF0aG5hbWUgfSwgcm91dGVzICkge1xuICBjb25zdCBtYXRjaGVkID0ge1xuICAgIG5hbWU6IG51bGwsXG4gICAgcGFyYW1zOiB7fSxcbiAgICBzdGF0ZSxcbiAgfVxuXG4gIGZvciAoIGNvbnN0IHsgbmFtZSwgcGF0aCB9IG9mIHJvdXRlcyApIHtcbiAgICBjb25zdCBrZXlzID0gW11cbiAgICBjb25zdCBtYXRjaCA9IGZyb21QYXRoKCBwYXRoLCBrZXlzICkuZXhlYyggJy8nICsgcGF0aG5hbWUgKVxuXG4gICAgdG9QYXRoW25hbWVdID0gdG9QYXRoW25hbWVdIHx8IGZyb21QYXRoLmNvbXBpbGUoIHBhdGggKVxuICAgIGlmICggKCFtYXRjaCkgfHwgKCFtYXRjaC5ldmVyeShCb29sZWFuKSkgKSBjb250aW51ZVxuICAgIG1hdGNoZWQubmFtZSA9IG5hbWVcblxuICAgIGxldCBpbmRleCA9IDFcbiAgICBmb3IgKCBjb25zdCBrZXkgb2Yga2V5cyApIHtcbiAgICAgIG1hdGNoZWQucGFyYW1zW2tleS5uYW1lXSA9IGRlY29kZVVSSUNvbXBvbmVudCggbWF0Y2hbaW5kZXgrK10gKVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBtYXRjaGVkXG59XG5cbmZ1bmN0aW9uIG5vcm1hbGlzZVBhdGhuYW1lKCBwYXRobmFtZSApIHtcbiAgcmV0dXJuIHBhdGhuYW1lWzBdID09PSAnLycgPyBwYXRobmFtZSA6ICcvJyArIHBhdGhuYW1lXG59XG4iLCIvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbWF4LWxlblxuY29uc3Qga2V5bWFwID0gWyAnJywgJycsICcnLCAnQ0FOQ0VMJywgJycsICcnLCAnSEVMUCcsICcnLCAnQkFDS19TUEFDRScsICdUQUInLCAnJywgJycsICdDTEVBUicsICdFTlRFUicsICdSRVRVUk4nLCAnJywgJ1NISUZUJywgJ0NPTlRST0wnLCAnQUxUJywgJ1BBVVNFJywgJ0NBUFNfTE9DSycsICdLQU5BJywgJ0VJU1UnLCAnSlVOSkEnLCAnRklOQUwnLCAnSEFOSkEnLCAnJywgJ0VTQ0FQRScsICdDT05WRVJUJywgJ05PTkNPTlZFUlQnLCAnQUNDRVBUJywgJ01PREVDSEFOR0UnLCAnU1BBQ0UnLCAnUEFHRV9VUCcsICdQQUdFX0RPV04nLCAnRU5EJywgJ0hPTUUnLCAnTEVGVCcsICdVUCcsICdSSUdIVCcsICdET1dOJywgJ1NFTEVDVCcsICdQUklOVCcsICdFWEVDVVRFJywgJ1BSSU5UU0NSRUVOJywgJ0lOU0VSVCcsICdERUxFVEUnLCAnJywgJzAnLCAnMScsICcyJywgJzMnLCAnNCcsICc1JywgJzYnLCAnNycsICc4JywgJzknLCAnQ09MT04nLCAnU0VNSUNPTE9OJywgJ0xFU1NfVEhBTicsICdFUVVBTFMnLCAnR1JFQVRFUl9USEFOJywgJ1FVRVNUSU9OX01BUksnLCAnQVQnLCAnQScsICdCJywgJ0MnLCAnRCcsICdFJywgJ0YnLCAnRycsICdIJywgJ0knLCAnSicsICdLJywgJ0wnLCAnTScsICdOJywgJ08nLCAnUCcsICdRJywgJ1InLCAnUycsICdUJywgJ1UnLCAnVicsICdXJywgJ1gnLCAnWScsICdaJywgJ1dJTicsICcnLCAnQ09OVEVYVF9NRU5VJywgJycsICdTTEVFUCcsICdOVU1QQUQwJywgJ05VTVBBRDEnLCAnTlVNUEFEMicsICdOVU1QQUQzJywgJ05VTVBBRDQnLCAnTlVNUEFENScsICdOVU1QQUQ2JywgJ05VTVBBRDcnLCAnTlVNUEFEOCcsICdOVU1QQUQ5JywgJ01VTFRJUExZJywgJ0FERCcsICdTRVBBUkFUT1InLCAnU1VCVFJBQ1QnLCAnREVDSU1BTCcsICdESVZJREUnLCAnRjEnLCAnRjInLCAnRjMnLCAnRjQnLCAnRjUnLCAnRjYnLCAnRjcnLCAnRjgnLCAnRjknLCAnRjEwJywgJ0YxMScsICdGMTInLCAnRjEzJywgJ0YxNCcsICdGMTUnLCAnRjE2JywgJ0YxNycsICdGMTgnLCAnRjE5JywgJ0YyMCcsICdGMjEnLCAnRjIyJywgJ0YyMycsICdGMjQnLCAnJywgJycsICcnLCAnJywgJycsICcnLCAnJywgJycsICdOVU1fTE9DSycsICdTQ1JPTExfTE9DSycsICdXSU5fT0VNX0ZKX0pJU0hPJywgJ1dJTl9PRU1fRkpfTUFTU0hPVScsICdXSU5fT0VNX0ZKX1RPVVJPS1UnLCAnV0lOX09FTV9GSl9MT1lBJywgJ1dJTl9PRU1fRkpfUk9ZQScsICcnLCAnJywgJycsICcnLCAnJywgJycsICcnLCAnJywgJycsICdDSVJDVU1GTEVYJywgJ0VYQ0xBTUFUSU9OJywgJ0RPVUJMRV9RVU9URScsICdIQVNIJywgJ0RPTExBUicsICdQRVJDRU5UJywgJ0FNUEVSU0FORCcsICdVTkRFUlNDT1JFJywgJ09QRU5fUEFSRU4nLCAnQ0xPU0VfUEFSRU4nLCAnQVNURVJJU0snLCAnUExVUycsICdQSVBFJywgJ0hZUEhFTl9NSU5VUycsICdPUEVOX0NVUkxZX0JSQUNLRVQnLCAnQ0xPU0VfQ1VSTFlfQlJBQ0tFVCcsICdUSUxERScsICcnLCAnJywgJycsICcnLCAnVk9MVU1FX01VVEUnLCAnVk9MVU1FX0RPV04nLCAnVk9MVU1FX1VQJywgJycsICcnLCAnU0VNSUNPTE9OJywgJ0VRVUFMUycsICdDT01NQScsICdNSU5VUycsICdQRVJJT0QnLCAnU0xBU0gnLCAnQkFDS19RVU9URScsICcnLCAnJywgJycsICcnLCAnJywgJycsICcnLCAnJywgJycsICcnLCAnJywgJycsICcnLCAnJywgJycsICcnLCAnJywgJycsICcnLCAnJywgJycsICcnLCAnJywgJycsICcnLCAnJywgJ09QRU5fQlJBQ0tFVCcsICdCQUNLX1NMQVNIJywgJ0NMT1NFX0JSQUNLRVQnLCAnUVVPVEUnLCAnJywgJ01FVEEnLCAnQUxUR1InLCAnJywgJ1dJTl9JQ09fSEVMUCcsICdXSU5fSUNPXzAwJywgJycsICdXSU5fSUNPX0NMRUFSJywgJycsICcnLCAnV0lOX09FTV9SRVNFVCcsICdXSU5fT0VNX0pVTVAnLCAnV0lOX09FTV9QQTEnLCAnV0lOX09FTV9QQTInLCAnV0lOX09FTV9QQTMnLCAnV0lOX09FTV9XU0NUUkwnLCAnV0lOX09FTV9DVVNFTCcsICdXSU5fT0VNX0FUVE4nLCAnV0lOX09FTV9GSU5JU0gnLCAnV0lOX09FTV9DT1BZJywgJ1dJTl9PRU1fQVVUTycsICdXSU5fT0VNX0VOTFcnLCAnV0lOX09FTV9CQUNLVEFCJywgJ0FUVE4nLCAnQ1JTRUwnLCAnRVhTRUwnLCAnRVJFT0YnLCAnUExBWScsICdaT09NJywgJycsICdQQTEnLCAnV0lOX09FTV9DTEVBUicsICcnIF1cblxuY29uc3QgbG93ZXIgPSBzdHIgPT4gKCBzdHIgfHwgJycgKS50b0xvd2VyQ2FzZSgpXG5cbmV4cG9ydCBmdW5jdGlvbiBrZXkoeyBrZXlDb2RlIH0pIHtcbiAgcmV0dXJuIGxvd2VyKCBrZXltYXBba2V5Q29kZV0gKVxufVxuXG5jb25zdCAkY2hhcnMgPSAnYWJjZGVmZ2hpamtsbW5vcHFyc3R1dnd4eXpBQkNERUZHSElKS0xNTk9QUVJTVFVWV1laXy1+QCErJy5zcGxpdCgnJylcblxuZXhwb3J0IGZ1bmN0aW9uIElEKCkge1xuICBjb25zdCAkbGVuZ3RoID0gMTBcbiAgbGV0ICRyZXMgPSAnJ1xuXG4gIGNvbnN0IGVudHJvcHkgPSAkY2hhcnMubGVuZ3RoXG5cbiAgd2hpbGUgKCAkcmVzLmxlbmd0aCA8ICRsZW5ndGggKSB7XG4gICAgJHJlcyArPSAkY2hhcnNbTWF0aC5mbG9vciggTWF0aC5yYW5kb20oKSAqIGVudHJvcHkgKV1cbiAgfVxuXG4gIHJldHVybiAkcmVzXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzbHVnaWZ5KCB0aXRsZSApIHtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHByZWZlci10ZW1wbGF0ZVxuICByZXR1cm4gKCB0aXRsZSArICcnIClcbiAgICAudG9Mb3dlckNhc2UoKVxuICAgIC5yZXBsYWNlKC9cXHMrL2csICctJylcbiAgICAucmVwbGFjZSgvWyFcIifCoyQlXFxeJiooKV8rPVxcL1xcXFx8YMKsLz48Lix7fVtcXF06O10vZywgJycpXG4gICAgLnJlcGxhY2UoL1xcLVxcLSsvZywgJy0nKVxuICAgIC5yZXBsYWNlKC9eLSsvLCAnJylcbiAgICAucmVwbGFjZSgvLSskLywgJycpXG59XG5cbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBtYXgtbGVuXG5jb25zdCB1cmxSeCA9IC8oXnxbXFxzXFxuXXwmbmJzcDt8PFtBLVphLXpdKlxcLz8+KSgoPzpodHRwcz98ZnRwKTpcXC9cXC9bXFwtQS1aMC05K1xcdTAwMjZcXHUyMDE5QCNcXC8lPz0oKX5ffCE6LC47XSpbXFwtQS1aMC05K1xcdTAwMjZAI1xcLyU9figpX3xdKS9naVxuXG4vLyBvcmlnaW5hbGx5IGJyeWFud29vZHMvYXV0b2xpbmstanNcbmV4cG9ydCBmdW5jdGlvbiBhdXRvbGluayggc3RyaW5nICkge1xuICByZXR1cm4gc3RyaW5nLnJlcGxhY2UoIHVybFJ4LCAnJDE8YSBocmVmPVwiJDJcIj4kMjwvYT4nIClcblxuICAvKiBjYWxsYmFjayA9IG9wdGlvbltcImNhbGxiYWNrXCJdO1xuICBsaW5rQXR0cmlidXRlcyA9ICgoZnVuY3Rpb24oKSB7XG4gICAgdmFyIHJlc3VsdHM7XG4gICAgcmVzdWx0cyA9IFtdO1xuICAgIGZvciAoayBpbiBvcHRpb24pIHtcbiAgICAgIHYgPSBvcHRpb25ba107XG4gICAgICBpZiAoayAhPT0gJ2NhbGxiYWNrJykge1xuICAgICAgICByZXN1bHRzLnB1c2goXCIgXCIgKyBrICsgXCI9J1wiICsgdiArIFwiJ1wiKTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdHM7XG4gIH0pKCkpLmpvaW4oJycpO1xuICByZXR1cm4gdGhpcy5yZXBsYWNlKHBhdHRlcm4sIGZ1bmN0aW9uKG1hdGNoLCBzcGFjZSwgdXJsKSB7XG4gICAgdmFyIGxpbms7XG4gICAgbGluayA9ICh0eXBlb2YgY2FsbGJhY2sgPT09IFwiZnVuY3Rpb25cIiA/IGNhbGxiYWNrKHVybCkgOiB2b2lkIDApIHx8IChcIjxhIGhyZWY9J1wiICsgdXJsICsgXCInXCIgKyBsaW5rQXR0cmlidXRlcyArIFwiPlwiICsgdXJsICsgXCI8L2E+XCIpO1xuICAgIHJldHVybiBcIlwiICsgc3BhY2UgKyBsaW5rO1xuICB9KTsqL1xufVxuIl19
