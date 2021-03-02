const digit = 5;
const nRange = {
    max: 8000,
    min: -8000,
}

function setDefault(prev, current, index) {
  if (index !== 0) {
    return `${prev}${current}`;
  } 
  return `${current}`;
}

function setDigit(prev, current, index) {
  if (index !== 0) {
    return `${prev}${digit}${current}`;
  }
  return `${digit}${current}`;
}

function solutionTask1(n) {
    const nArr = n.toString().split('');
    let digitIsSet = false;
    if (n > 0) {
        const givenN = nArr.reduce((prev, current, index, array) => {
            current = parseFloat(current);
            if ((current < digit) && !digitIsSet) {
                digitIsSet = true;
                return setDigit(prev, current, index);
            }
            if (array.length - 1 === index && !digitIsSet) {
              return `${prev}${current}${digit}`;
          }
            return setDefault(prev, current, index);
        }, 0);

        const givenNFloat = parseFloat(givenN);
        if (givenNFloat > nRange.max) {
            return nRange.max;
        } 
        return givenNFloat;
    } else if (n === 0) {
        return 50;
    } else {
        nArr.shift();
        const givenN = nArr.reduce((prev, current, index, array) => {
            current = parseFloat(current);
            if ((current > digit) && !digitIsSet) {
                digitIsSet = true;
                return setDigit(prev, current, index);
            }
            if (array.length - 1 === index && !digitIsSet) {
                return `${prev}${current}${digit}`;
            }
            return setDefault(prev, current, index);
        }, 0);

        const givenNFloat = parseFloat(`-${givenN}`);
        if (givenNFloat < nRange.min) {
            return nRange.min; 
        }
        return givenNFloat;
    }
}

module.exports = {
  solutionTask1,
};
