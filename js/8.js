function prepend(root, val) {
  return {
    value: val,
    rest: root
  };
}
function arrayToList(arr) {
  var root = null;
  for (var i = arr.length - 1; i >= 0; i--)
    root = prepend(root, arr[i]);
  return root;
}
function nth(list, n) {
  if (list == null)
    return undefined;
  if (n === 0)
    return list.value;
  return nth(list.rest, n - 1);
}
function listToArray(list) {
  var arr = [];
  while (list != null) {
    arr.push(list.value);
    list = list.rest;
  }
  return arr;
}
var arr = [1, 2, 3];
var list = arrayToList(arr);
console.log(list)
console.log(nth(list, 2))
console.log(nth(list, 1))
console.log(nth(list, 10))
var arr_1 = listToArray(list);
console.log(arr_1)
