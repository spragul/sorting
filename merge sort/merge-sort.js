// Explain the concept of merge sort and implement it.

/*
    Merge sort is a sorting algorithm that follows the divide-and-conquer approach
    It works by recursively dividing the input array into smaller subarrays and 
    sorting those subarrays then merging them back together to obtain the sorted array.
 Time Complexity:
    Best Case: O(n log n), When the array is already sorted or nearly sorted.
    Average Case: O(n log n), When the array is randomly ordered.
    Worst Case: O(n log n), When the array is sorted in reverse order.
 */
    function mergeSort(arr) {
        var sorted = arr.slice(),
            n = sorted.length,
            buffer = new Array(n);
      
        for (var size = 1; size < n; size *= 2) {
          for (var leftStart = 0; leftStart < n; leftStart += 2*size) {
            var left = leftStart,
                right = Math.min(left + size, n),
                leftLimit = right,
                rightLimit = Math.min(right + size, n),
                i = left;
            while (left < leftLimit && right < rightLimit) {
              if (sorted[left] <= sorted[right]) {
                buffer[i++] = sorted[left++];
              } else {
                buffer[i++] = sorted[right++];
              }
            }
            while (left < leftLimit) {
              buffer[i++] = sorted[left++];
            }
            while (right < rightLimit) {
              buffer[i++] = sorted[right++];
            }
          }
          var temp = sorted,
              sorted = buffer,
              buffer = temp;
        }
      
        return sorted;
      }
  console.log(mergeSort([3, 5, 8, 5, 99, 1]));

