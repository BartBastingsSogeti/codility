const { solutionDemo } = require('./tasks/demo');
const { solutionTask1 } = require('./tasks/task-1');

console.log('---------------------------------');

// should be 5
const example1 = [1, 3, 6, 4, 1, 2];
const resultExample1 = solutionDemo(example1);
console.log('solutionDemo :: resultExample1 ::', resultExample1 === 5);

// should be 4
const example2 = [1, 2, 3];
const resultexample2 = solutionDemo(example2);
console.log('solutionDemo :: resultexample2 ::', resultexample2 === 4);

// should be 1
const example3 = [-1, -3];
const resultexample3 = solutionDemo(example3);
console.log('solutionDemo :: resultexample3 ::', resultexample3 === 1);

// should be 2
const extremeSingle = [1];
const resultExtremeSingle = solutionDemo(extremeSingle);
console.log('solutionDemo :: resultExtremeSingle ::', resultExtremeSingle === 2);

// should be 1
const simple = [99];
const resultSimple = solutionDemo(simple);
console.log('solutionDemo :: resultSimple ::', resultSimple === 1);

// should be 1
const extremeMinMaxValue = [-1000000, 1000000]
const resultExtremeMinMaxValue = solutionDemo(extremeMinMaxValue);
console.log('solutionDemo :: resultExtremeMinMaxValue ::', resultExtremeMinMaxValue === 1);

// should be 1
const postiveOnly = [100, 2, 50, 102, 200, 150];
const resultPostiveOnly = solutionDemo(postiveOnly);
console.log('solutionDemo :: resultPostiveOnly ::', resultPostiveOnly === 1);

// should be 1
const negativeOnly = [100, 2, 50, 102, 200, 150];
const resultNegativeOnly = solutionDemo(negativeOnly);
console.log('solutionDemo :: resultNegativeOnly ::', resultNegativeOnly === 1);

console.log('---------------------------------');

// should be 5268
const n1 = 268;
const resultN1 = solutionTask1(n1);
console.log('solutionTask1 :: resultN1 ::', resultN1 === 5268);

// should be 6750
const n2 = 670;
const resultN2 = solutionTask1(n2);
console.log('solutionTask1 :: resultN2 ::', resultN2 === 6750);

// should be 50
const n3 = 0;
const resultN3 = solutionTask1(n3);
console.log('solutionTask1 :: resultN3 ::', resultN3 === 50);

// should be -5999
const n4 = -999;
const resultN4 = solutionTask1(n4);
console.log('solutionTask1 :: resultN4 ::', resultN4 === -5999);

// should be -8000
const n5 = -8000;
const resultN5 = solutionTask1(n5);
console.log('resultN5 ::', resultN5);
console.log('solutionTask1 :: resultN5 ::', resultN5 === -8000);

// should be 8000
const n6 = 8000;
const resultN6 = solutionTask1(n6);
console.log('resultN6 ::', resultN6);
console.log('solutionTask1 :: resultN6 ::', resultN6 === 8000);

// should be -4005
const n7 = -400;
const resultN7 = solutionTask1(n7);
console.log('solutionTask1 :: resultN7 ::', resultN7 === -4005);

// should be 9995
const n8 = 999;
const resultN8 = solutionTask1(n8);
console.log('resultN8 ::', resultN8);
console.log('solutionTask1 :: resultN8 ::', resultN8 === 9995);

console.log('---------------------------------');
