// Explain the concept of quick sort and implement it.

/*QuickSort is a sorting algorithm based on the Divide and Conquer algorithm 
that picks an element as a pivot and partitions the given array around 
the picked pivot by placing the pivot in its correct position in the sorted array.

Time Complexity:
    Best Case: Ω (N log (N))
    Average Case: θ ( N log (N))
    Worst Case: O(N2)
*/

let arr = [2,58,1,47,11,36,100,23,17,56,39,47,23,34,6];

function quickSort(array){
    let len = array.length;
    if(len <= 1) return array;

    let piviot = array.pop();

    let left = [], right = [];
    for(let i=0;i<array.length;i++){
        if(array[i] < piviot){
            left.push(array[i])
        }
        else{
            right.push(array[i]);
        }
    };
    return quickSort(left).concat(piviot,quickSort(right));
}
console.log(quickSort(arr))