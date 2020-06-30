// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className) {
  // your code here
  var results = [];

  // we want to push all of the elements with class of className to results
  // we want to push all of the child elements of those elements that have class of className to results

  var searchNode = function (node) {

    if (node.classList && node.classList.contains(className)) {
      results.push(node);
    }





    if (node.childNodes) {
      for (var i = 0; i < node.childNodes.length; i++) {
        searchNode(node.childNodes[i]);
      }
    }
  };


  // call the helper function on the document

  searchNode(document.body);

  // return results
  return results;
};
