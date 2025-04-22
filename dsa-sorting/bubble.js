/**
 * Sorts an array of numbers in ascending order using the Bubble Sort algorithm.
 * 
 * Bubble Sort works by repeatedly swapping adjacent elements if they are in the
 * wrong order. This implementation includes an optimization: if no swaps are made
 * in a full pass, the array is already sorted and the algorithm exits early.
 * 
 * Key detail: the inner loop runs from index 0 to `arr.length - i - 1` because:
 * - After each full outer loop iteration, the largest unsorted element "bubbles up"
 *   to its correct final position at the end of the array.
 * - The `- i` avoids comparing the elements that are already in their correct places.
 * - The `- 1` ensures we do not access out-of-bounds indices when comparing `arr[j]`
 *   with `arr[j + 1]`.
 * - Example: If arr.length = 6.  Loop from j = 0 to j = 4 (because you'll compare arr[4] with arr[5]).  
 *   Largest element ends up in arr[5]
 * 
 * @param {number[]} arr - The array of numbers to be sorted.
 * @returns {number[]} The sorted array (in ascending order).
 */
function bubbleSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        let swapped = false;
        // as we continue looping, last i elements are already in place
        for (let j = 0; j < arr.length - i - 1; j++) {
            // checking if the item at present iteration is greater than the next iteration
            if (arr[j] > arr[j + 1]) {
                // Swap elements
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
                swapped = true;
            }
        }
        // Optimization: if no swaps were made, array is sorted
        if (!swapped) break;
    }
    return arr;
}

function debugBubbleSort(arr) {
    console.log(`initial arr: ${arr}`);
    for (let i = 0; i < arr.length; i++) {
        let swapped = false;
        // last i elements are already in place
        for (let j = 0; j < arr.length - i - 1; j++) {
            // checking if the item at present iteration
            // is greater than the next iteration
            if (arr[j] > arr[j + 1]) {
                // if the condition is true, then swap them
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
                swapped = true;
            }
            console.log(`i = ${i}, j = ${j}, arr= ${arr}`);
        }
        // NEW: if no two elements were swapped in the inner loop, array is sorted.
        if (!swapped) break;
    }
    
    console.log(`sorted arr: ${arr}`);
    return arr;
}

debugBubbleSort([1, 5, 4, 7, 0]);

module.exports = bubbleSort;