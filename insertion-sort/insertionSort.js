// Implement the insertion sort algorithm.

const arr = [5, 2, 8, 6, 41, 58, 63, 44, 11, 85, 4, 1];
for (let i = 1; i < arr.length; i++) {
  let currentvalue = arr[i];
  let index = i;
  while (index > 0 && arr[index - 1] > currentvalue) {
    arr[index] = arr[index - 1];
    index--;
  }
  arr[index] = currentvalue;
}
console.log(...arr);
