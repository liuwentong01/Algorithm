/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
  var stack = [];
  for(let i = 0; i < s.length; i++){
    if(s[i] == '(' || s[i] == '{' || s[i] == '['){
      stack.push(s[i]);
    } else{
      var tmp = stack.pop();
      if((s[i] == ')' && tmp == '(') || (s[i] == ']' && tmp == '[') || (s[i] == '}' && tmp == '{')) continue;
      else return false;
    }
  }
  return stack.length ? false : true;
};
