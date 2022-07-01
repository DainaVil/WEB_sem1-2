function countChar(str, ch) {
  var count = 0;
  for (var i = 0; i < str.length; i++)
    count += (str.charAt(i) === ch);
  return count;
}
function countBs(str) {
  return countChar(str, 'b');
}
console.log(countBs("big bee bought rubber"));
console.log(countChar("big bee bought rubber", "g"));