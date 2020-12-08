/* binary search is a algorithm that takes advantage of ordered lists when finding an element in said list. 
 * It divides the list by half depending whether the target is smaller or greater than the middle index, and searches that half of the list depending on that result.
 * */ 
const binarySearch = (arr, target) => {
  let left = 0;
  let right = arr.length;
  
  while (right > left) {
    const indexToCheck = Math.floor((left + right) / 2);
    const checking = arr[indexToCheck];
    console.log(`indexToCheck equals: ${indexToCheck}`)
  
    if (checking === target) {
      return indexToCheck;
    } else if (checking < target) {
      left = indexToCheck + 1;
    } else {
      right = indexToCheck;
    }
  }
  return null;
}


