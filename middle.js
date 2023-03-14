const middle = function(array) {

  const middleElements = [];
  if (array.length <= 1) {
    return [];
  }
  if (array.length % 2 === 0) {
    middleElements.push(array[Math.floor((array.length - 1) / 2)]);
  }
  const midArray = (array[Math.floor(array.length / 2)]);
  middleElements.push(midArray);
  return middleElements;
};

module.exports = middle;

