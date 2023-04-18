// Task 1
function getArrayParams(...arr) {
  let min = Infinity;
  let max = -Infinity;
  let sum = 0; 
  let avg;

  let arrLength = arr.length;

  for (let i = 0; i < arrLength; i++) {
    let num = arr[i];

    if (num > max) {
      max = num;
    }

    if (num < min) {
      min = num;
    }

    sum += num;
  }

  avg = Number((sum / arrLength).toFixed(2));

  return { min: min, max: max, avg: avg };
}

// Task 2
function summElementsWorker(...arr) {
  let  sum = 0;
  let i;

  if(arr.length === 0) return 0;

  for(i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  
  return sum;
}

function differenceMaxMinWorker(...arr) {
  let  min = Infinity;
  let  max = -Infinity;
  let i;

  if(arr.length === 0) return 0;

  for(i = 0; i < arr.length; i++) {
    if(min > arr[i]) min = arr[i];
    if(max < arr[i]) max = arr[i];
  }

  return max - min;
}

function differenceEvenOddWorker(...arr) {
  let sumEvenElement = 0;
  let sumOddElement = 0;
  let i;

  if(arr.length === 0) return 0;

  for(i = 0; i < arr.length; i++) {
    if((arr[i] % 2) === 0) sumEvenElement += arr[i]; else sumOddElement += arr[i];
  }

  return sumEvenElement - sumOddElement;
}

function averageEvenElementsWorker(...arr) {
  let sumEvenElement = 0;
  let countEvenElement = 0;
  let i;

  if(arr.length === 0) return 0;

  for(i = 0; i < arr.length; i++) {
    if((arr[i] % 2) === 0) {
      sumEvenElement += arr[i]; 
      countEvenElement++;
    }
  }

  return sumEvenElement / countEvenElement;
}

// Task 3
function makeWork (arrOfArr, func) {
  let maxWorkerResult = -Infinity;
  let i;
  let res;
  let numbers;

  if(arrOfArr.length === 0) return 0;

  for(i = 0; i < arrOfArr.length; i++) {
    numbers = arrOfArr[i];
    res = func(...numbers);
    if(res > maxWorkerResult) maxWorkerResult = res;
  }

  return maxWorkerResult;
}