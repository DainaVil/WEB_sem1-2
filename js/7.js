function reverseArray(arr) {
  var r_arr = [];
  for (var i = arr.length - 1;  i >= 0; i--)
    r_arr.push(arr[i]);
  return r_arr;
}
console.log(reverseArray([1, 2, 3, 4, 5]));

function reverseArrayInPlace(arr) {
  for (var i = 0;  i <= arr.length / 2; i++) {
    var r_i = arr.length - 1 - i;
    [arr[i], arr[r_i]] = [arr[r_i], arr[i]];
  }
}
var arr = [1, 2, 3, 4, 5];
reverseArrayInPlace(arr);
console.log(arr);
