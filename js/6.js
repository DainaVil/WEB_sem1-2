function range(start, end, step=1) {
  var res = [];
  if (step > 0)
    for (var i = start; i <= end; i += step)
      res.push(i);
  else
    for (var i = start; i >= end; i += step)
      res.push(i);
  return res;
}
function sum(arr) {
  var sum = 0;
  for (var i = 0; i < arr.length; i++)
    sum += arr[i];
  return sum;
}
console.log(range(1, 10));
console.log(sum(range(1, 10)));
console.log(range(1, 10, 2));
console.log(range(5, 2, -1));