var isContainer = function(thing) {
  return Array.isArray(thing) || (typeof thing === 'object' && Object.keys(thing).length);
}

var recurse = function(depth, thing, fn) {
  if (Array.isArray(thing)) {
    for (var i=0; i<thing.length; i++) {
      if (isContainer(thing[i])) {
        recurse(depth+1, thing[i], fn);
      } else {
        fn(depth, thing);
      }
    }
  } else if (typeof thing === 'object') {
    var keys = Object.keys(thing);
    for (var i=0; i<keys.length; i++) {
      var t = thing[keys[i]];
      if (isContainer(t)) {
        recurse(depth+1, t, fn)
      } else {
        fn(depth, t);
      }
    }
  } else {
    fn(thing);
  }
}

var kagui = function(obj) {

  recurse(0, obj, function(depth, thing) {
    var type = typeof thing;

    switch (type) {
      case 'number':

      break;

      case 'string':

      break;
    }

    // typecheck each item
    console.log(type, thing);
  });

  return { el : document.createElement('div') };
};

window.kagui = kagui;
