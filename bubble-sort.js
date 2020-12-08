const bubbleSort = input => {
  let swapCount = 0
  let swapping = true;
  
  while (swapping) {
    swapping = false;
    for (let i = 0; i < input.length - 1; i++) {
      if (input[i] > input[i + 1]) {
        swap(input, i, i + 1);
        swapCount++;
        swapping = true;
      }
    }
  }
  console.log(`Swapped ${swapCount} times`);
  return input;
};
function swap (arr, index_1, index_2){
	const temp = arr[index_2];
	arr[index_2] = arr[index_1];
	arr[index_1] = temp;
};

array = [3,4,65,67,7,3,45,6,7,4];
array2 = [2,5,7,8,9,64,555,1598,4,6];

console.log(bubbleSort(array));
console.log(bubbleSort(array2));
