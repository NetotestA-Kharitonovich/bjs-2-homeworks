// Task 1
function compareArrays(arr1, arr2) {
    if (arr1.length !== arr2.length) {
      return false;
    }
  
    return arr1.every(function (element, index) {
      return element === arr2[index];
    });
  }
  
    
// Task 2
function getUsersNamesInAgeRange(users, gender) {
  
    let massive = users.filter(item => item.gender === gender).map(item => item.age);
    let result = massive.reduce((sum, age) => sum + age, 0);
    
    if (massive.length > 0) {
        return result / massive.length;
    }else{
        return 0;
    }
}
    
    