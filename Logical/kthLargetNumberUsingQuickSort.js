const quickSelect = (array, left, right) => {
  console.log(array, left, right);
  if (left < right) {
    const partitionIndx = partition(array, left, right);
    if (partitionIndx === IndexToFind) {
      return array[partitionIndx];
    } else if (IndexToFind < partitionIndx) {
      return quickSort(array, left, partitionIndx - 1, IndexToFind);
    } else {
      return quickSort(array, partitionIndx + 1, right, IndexToFind);
    }
  }
};

const partition = (array, left, right) => {
  const pivotElm = array[right];
  let partitionIdx = left;
  for (let j = left; j < right; j++) {
    if (array[j] < pivotElm) {
      console.log(pivotElm, array[j]);
      swap(array, partitionIdx, j);
      partitionIdx++;
    }
  }
  swap(array, partitionIdx, right);
  return partitionIdx;
};

const swap = (array, i, j) => {
  let foo = JSON.parse(JSON.stringify(array[i]));
  array[i] = array[j];
  array[j] = foo;
};

const kthLargestNumber = (array, k) => {
  const IndexToFind = array.length - k;
  quickSelect(array, 0, array.length - 1);
  return array[IndexToFind];
};

let arr = [5, 2, 9, 1, 3, 3];

let n = kthLargestNumber(arr, 2);
console.log(n, arr);

module.exports = { kthLargestNumber };
