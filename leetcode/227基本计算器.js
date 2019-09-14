/**
 * @param {string} s
 * @return {number}
 */
 function processs() {
   if (sign == "+") {
     pre = pre + cur;
     cur = next;
   } else if (sign == "-") {
     pre = pre + cur;
     cur = -next;
   } else if (sign == "*") cur = cur * next;
   else {
     if (cur < 0 || (next < 0 && !(cur < 0 && next < 0)))
       cur = Math.ceil(cur / next);
     else cur = Math.floor(cur / next);
   }
   next = 0;
 }
var pre = 0, cur = 0, next = 0, sign = '+';
var calculate = function(s) {
  s = s+ '+';
  for(var i of s){
    if(i == ' ') continue;
    else if(i >= '0' && i <= '9'){
      next = 10 * next + parseInt(i-'0');
    }
    else{
      processs();
      sign = i;
    }
  }
  return pre + cur;
};
console.log(calculate('14-3/2'));

