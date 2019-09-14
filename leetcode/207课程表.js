/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
//这里是拓扑排序，dfs没看懂
var canFinish = function(numCourses, prerequisites) {
  if (numCourses <= 0) {
    return true;
  }
  var courses = new Array(numCourses).fill(0);
  var queue = [];
  var res = [];
  for (let i of prerequisites) {
    courses[i[0]]++;
  }
  for (let i = 0; i < courses.length; i++) {
    if (courses[i] == 0) {
      queue.push(i);
    }
  }
  while (queue.length != 0) {
    var tmp = queue.shift();
    res.push(tmp);
    for (let i of prerequisites) {
      if (i[1] == tmp) {
        courses[i[0]]--;
        if (courses[i[0]] == 0) {
          queue.push(i[0]);
        }
      }
    }
  }
  return res.length == numCourses ? true : false;
};
