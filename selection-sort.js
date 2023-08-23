

function selectionSort(arr) {

  // Copy the original array
  let arrCopy = arr.map(el => el);

  // Create an array to store the sorted values
  let arrSorted = [];
  // While the array is not empty...
  while (arrCopy.length !== 0) {
    // Do not move this console.log
    console.log(arrSorted.join(","));

    // Find the index of the minimum value in the unsorted half
    let currentMin = Infinity;
    let index = 0;
    arrCopy.forEach((element,i) => {
      if (element < currentMin) {
        currentMin = element;
        index = i;
      }
    });

    // Save and remove the value at the min index
    arrCopy.splice(index,1);

    // Add the min value to the end of the sorted array
    arrSorted.push(currentMin);
  }
  return arrSorted;
}


function selectionSortInPlace(arr) {

  // Set a pointer at zero diving the array into sorted and unsorted halves
  let pointer = 0;

  // Repeat while the unsorted half is not empty:
  while (pointer !== arr.length) {
    // Do not move this console.log
    console.log(arr.join(","));

    // Find the index of the minimum value in the unsorted half
    // Save the min value
    let minVal = Infinity;
    let index;
    for (let i = pointer; i < arr.length; i++) {
      if (arr[i] < minVal) {
        minVal = arr[i];
        index = i;
      }
    }

    // Shift every unsorted value to the left of the min value to the right by 1
    for (let i = index; i > pointer; i--) {
      arr[i] = arr[i - 1];
    }

    // Put the min value at the divider
    arr[pointer] = minVal;

    // Increment the divider and repeat
    pointer++;
  }
  return arr;
}

// arr = [2,4,6,8,1,3,5,7,9];
// console.log(selectionSortInPlace(arr));

module.exports = [selectionSort, selectionSortInPlace];
