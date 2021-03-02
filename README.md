# codility

## Demo task

Write a function:

function solution(A);

that, given an array A of N integers, returns the smallest positive integer (greater than 0) that does not occur in A.

For example, given A = [1, 3, 6, 4, 1, 2], the function should return 5.

Given A = [1, 2, 3], the function should return 4.

Given A = [−1, −3], the function should return 1.

Write an efficient algorithm for the following assumptions:

* N is an integer within the range [1..100,000];
* each element of array A is an integer within the range [−1,000,000..1,000,000].

## Task 1

Write a function solution that, given an integer N, returns the maxium possible value obtained by inserting one '5' digit inside the decimal representation of integer N.

### Examples

1. Given N = 268, the function should return 5268
2. Given N = 670, the function should return 6750
3. Given N = 0, the function should return 50
4. Given N = -999, the function should return -5999
5. Given N = -400, the function should return -4005

### Assume that:

* ``N`` is an integer within the range [-8000, 8000]

## Task 2

You are given an array ``A`` of integers. Find the maximum number of non-intersecting segments of length 2 (two adjacent elements), such that segments have an equal sum.

For example, given A = [10,1,3,1,2,2,1,0,4], there are three non-intersecting segments, each whose sum is equal to 4: (1,3),(2,2),(0,4). Another three non-intersecting segments are: (3,1),(2,2),(0,4).

### Examples

1. Given A = [10,1,3,1,2,2,1,0,4], the function should return 3 as explained above.
2. Given A = [5,3,1,3,2,3], the function should return 1. Each sum of two adjacent elements is different from the others.
3. Given A = [9,9,9,9,9], the function should return 2.
4. Given A = [1,5,2,4,3,3], the function should return 3. There are three segements: (1,5)(2,4))(3,3) whose sums are equal to 6.

Write an efficient algorithm for the following assumptions:

* N is an integer within the range [2..100,000];
* each element of array A is an integer within the range [0..1,000,000,000].

## Task 3

There are ``N`` nails hammered into the same block of wood. Each nial sticks out of the wood at some length. You can choose at most K nails and hammer them down to any length between their orginal lengths and 0. Nails cannot be pulled up. The goals is to have as many nails of the same length as possible.