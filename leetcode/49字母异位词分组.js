// /**
//  * @param {string[]} strs
//  * @return {string[][]}
//  */
// function sum(str) {
//   let map = {
//       'a':2,'b':3,'c':5,'d':7,'e':11,'f':13,'g':17,'h':19,'i':23,'j':29,'k':31,'l':37,'m':41,
//       'n':43,'o':47,'p':53,'q':59,'r':61,'s':67,'t':71,'u':73,'v':79,'w':83,'x':89,'y':97,'z':101
//     }
//   var res = 1;
//   for (let i = 0; i < str.length; i++) {
//     res *= map[str[i]];
//   }
//   return res;
// }
// var groupAnagrams = function(strs) {
//     var resMap = {};
//     var res = [];
//     for(let i = 0; i < strs.length; i++){
//       var tmp = sum(strs[i]);
//       if(!resMap[tmp]){
//         resMap[tmp] = [strs[i]];
//       } else{
//         resMap[tmp].push(strs[i]);
//       }
//     }
//     for(let i in resMap){
//       res.push(resMap[i]);
//     }
//     return res;
// };
//方法二 ： 对strs中的每个字符串进行排序， 再存到哈希表中。
//https://leetcode-cn.com/problems/group-anagrams/solution/zi-mu-yi-wei-ci-fen-zu-by-leetcode/ 

//方法三
/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
  var resMap = {};
  var res = [];
  for(var str of strs){
    var count = new Array(26).fill(0);
    var key = "";
    for(var i of str){
      count[i.charCodeAt()-'a'.charCodeAt()]++;
    }
    for(let k = 0; k < count.length; k++){
      key = key + "#"+count[k];
    }
    console.log(key);
    if(!resMap[key]) resMap[key] = [];
    resMap[key].push(str);
  }
  for(let i in resMap){
    res.push(resMap[i]);
  }
  return res;
};

console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]));