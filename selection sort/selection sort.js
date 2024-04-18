/*
 Implement the selection sort algorithm.
 */

let arr = [5, 3, 1, 2, 7,44, 4, 56, 23];
for (let i = 0; i < arr.length; i++) {
  let minmum = i;
  for (let index = minmum; index < arr.length; index++) {
    if (arr[minmum] > arr[index]) {
      minmum = index;
    }
  }
  if (i !== minmum) {
    let temp = arr[i];
    arr[i] = arr[minmum];
    arr[minmum] = temp;
  }
}
console.log(arr);
