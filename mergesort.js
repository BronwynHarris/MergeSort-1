function split(wholeArray) {
  let middle = Math.floor(wholeArray.length/2);
  let left = wholeArray.slice(0, middle);
  let right = wholeArray.slice(middle)
  return [left, right];
}


function merge(array) {
  let newArr = [];
  let leftIndex = 0;
  let rightIndex = 0;
  debugger;
  while (leftIndex < array[0].length && rightIndex <= array[1].length) {
    if (array[0][leftIndex] < array[1][rightIndex]) {
      // console.log(array[0][leftIndex], "is smaller and is left")
      newArr.push(array[0][leftIndex]);
      // console.log(newArr);
      leftIndex++
    } else {
      // console.log(array[1][rightIndex], "is smaller and is right")
      newArr.push(array[1][rightIndex]);
      // console.log(newArr);
      rightIndex++
    }
  }
  // return newArr
  return newArr.concat(array[0].slice(leftIndex).concat(array[1].slice(rightIndex)))
}
