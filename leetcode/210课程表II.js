/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {number[]}
 */
var findOrder = function(numCourses, prerequisites) {
  if(numCourses <= 0) return [];
  var queue = [];
  var res = [];
  var courses = new Array(numCourses).fill(0);
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
  return res.length == numCourses ? res : [];
};

