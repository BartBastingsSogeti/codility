const nRange = {
  max: 100000,
  min: 1,
};

function solutionDemo(arr) {
  let result = 0;
  const tempArr = arr.filter(function(x) {
    return x >= nRange.min && x <= nRange.max;
  });

  if (tempArr.length === 0) {
    return 1;
  }

  const higestPositiveInteger = Math.max(...tempArr);
  const searchArr = [...Array(higestPositiveInteger).keys()];
  searchArr.some((value) => {
    if (value !== 0 && tempArr.indexOf(value) == -1) {
      result = value;
      return true;
    }
    return false;
  });

  if (result === 0) {
    return higestPositiveInteger + 1;
  }
  return result;
};

module.exports = {
  solutionDemo,
};
