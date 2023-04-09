"use strict";

function solveEquation(a, b, c) {
  let d = Math.pow(b,2)-4*a*c;

  if (d < 0) {
    return [];
  }

  if (d === 0) {
    console.log(-b/(2*a));
    return [-b/(2*a)];
  }

  let arr = [];

  arr.push((-b + Math.sqrt(d) )/(2*a));
  arr.push((-b - Math.sqrt(d) )/(2*a));

  return arr;
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {  
  if (isNaN(percent) || isNaN(contribution) || isNaN(amount) || isNaN(countMonths)){
    return false;
  }

  percent = percent/100/12;

  let loanBody = amount - contribution;
  let monthlyPayment = loanBody * (percent + (percent / ((Math.pow((1 + percent), countMonths)) - 1)));
  let totalPayment = monthlyPayment * countMonths;

  totalPayment = Number(totalPayment.toFixed(2));

  return totalPayment;
}