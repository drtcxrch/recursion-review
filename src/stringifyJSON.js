// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function (obj) { //{""'a'": '"apple"'""}'

  if (typeof obj === 'string') {
    return '"' + obj + '"';
  }

  if (Array.isArray(obj)) {
    let results = [];
    for (var i = 0; i < obj.length; i++) {
      results.push(stringifyJSON(obj[i]));
    }
    return '[' + results.join(',') + ']';
  }

  if (obj && typeof obj === 'object') {
    var result = [];
    for (var key in obj) {

      if (obj[key] === undefined || typeof obj[key] === 'function') {
        continue;
      }

      result.push(stringifyJSON(key) + ':' + stringifyJSON(obj[key]));
    }

    return '{' + result.join(',') + '}';

  }

  return '' + obj;


};
