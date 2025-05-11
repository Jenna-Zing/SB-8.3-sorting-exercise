/**
 * The pivot function rearranges elements in the array around a pivot such that:
 * - All elements less than the pivot come before it.
 * - All elements greater than the pivot come after it.
 * The pivot is chosen as the first element of the array.
 * This function mutates the original array in-place, and returns the index where the pivot ends up.
 * 
 * Key Note: By the end of this function, notice all values to the left of the pivot are less than it, 
 * and all values greater than or equal to it are on the right.
 * 
 * @param {number[]} arr - The array to be partitioned.
 * @param {number} [start=0] - Starting index for the partition (default 0).
 * @param {number} [end=arr.length - 1] - Ending index for the partition.
 * @returns {number} The index where the pivot element ends up.
 */
function pivot(arr, start = 0, end = arr.length - 1) {
    // Store the pivot value (assume the first element)
    let pivotValue = arr[start];
    
    // This index will track where to move elements less than the pivot
    let swapIndex = start;

    // Loop through the array starting from the element after the pivot
    for (let i = start + 1; i <= end; i++) {
        // If current element is less than pivot, it's in the wrong place
        if (arr[i] < pivotValue) {
            swapIndex++; // Move the swapIndex forward

            // Swap arr[i] and arr[swapIndex] using a temp variable
            let temp = arr[i];
            arr[i] = arr[swapIndex];
            arr[swapIndex] = temp;
        }
    }

    // Final swap: move pivot to its correct place (with arr[swapIndex])
    let temp = arr[start];
    arr[start] = arr[swapIndex];
    arr[swapIndex] = temp;

    // Return the pivot's final index
    return swapIndex;
}

/**
 * Implements the QuickSort algorithm to sort an array in-place.
 * This function recursively partitions the array around a pivot element,
 * ensuring that elements less than the pivot are moved to the left,
 * and elements greater than the pivot are moved to the right.
 * The process continues recursively on the left and right subarrays until the entire array is sorted.
 * 
 * @param {number[]} arr - The array to be sorted.
 * @param {number} [left=0] - The starting index of the subarray to sort (default is 0).
 * @param {number} [right=arr.length - 1] - The ending index of the subarray to sort (default is end of array).
 * @returns {number[]} The sorted array (same reference as input array).
 */
function quickSort(arr, left = 0, right = arr.length - 1) {
    // Base case: if left index is less than right, there are at least two elements to sort
    if (left < right) {
        // Use the pivot function to partition the array and get the pivot index
        let pivotIndex = pivot(arr, left, right);

        // Recursively sort the subarray to the left of the pivot
        quickSort(arr, left, pivotIndex - 1);

        // Recursively sort the subarray to the right of the pivot
        quickSort(arr, pivotIndex + 1, right);
    }

    // Return the sorted array (in-place sort)
    return arr;
}


/* DEBUG VERSIONS which print console.log as it executes for you to see how it works */
function debugPivot(arr, start = 0, end = arr.length - 1) {
    let pivotValue = arr[start];
    let swapIndex = start;

    console.log('\n--- Pivot Debug ---');
    console.log(`Pivot Value: ${pivotValue} at index ${start}`);
    console.log('| Step | i | arr[i] | Condition               | swapIndex | Array After Operation     |');
    console.log('|------|---|--------|-------------------------|-----------|---------------------------|');
    console.log(`| Init |   |        |                         | ${swapIndex}         | [${arr.slice(start, end + 1)}]`);

    let step = 1;
    for (let i = start + 1; i <= end; i++) {
        let condition, swapped = false;
        if (arr[i] < pivotValue) {
            swapIndex++;

            // Swap arr[i] and arr[swapIndex] using a temp variable
            let temp = arr[i];
            arr[i] = arr[swapIndex];
            arr[swapIndex] = temp;

            condition = `${temp} < ${pivotValue} → swap`;
            swapped = true;
        } else {
            condition = `${arr[i]} > ${pivotValue} → no swap`;
        }
        const arrCopy = arr.slice(start, end + 1);
        const marker = swapped ? ' (swapped)' : '';
        console.log(`| ${step}    | ${i} | ${arr[i]}      | ${condition.padEnd(23)} | ${swapIndex}         | [${arrCopy}]${marker}`);
        step++;
    }

    // Final pivot swap
    // Final swap: move pivot to its correct place (with arr[swapIndex])
    let temp = arr[start];
    arr[start] = arr[swapIndex];
    arr[swapIndex] = temp;
    console.log(`| End  |   |        | Swap pivot with arr[${swapIndex}]  |           | [${arr}]`);

    return swapIndex;
}

function debugQuickSort(arr, left = 0, right = arr.length - 1, depth = 0) {
    const indent = '  '.repeat(depth); // indentation to show depth of recursion
    if (left < right) {
        console.log(`${indent}QuickSort called on [${arr.slice(left, right + 1)}] (left: ${left}, right: ${right})`);

        let pivotIndex = debugPivot(arr, left, right);

        console.log(`${indent}→ Pivot settled at index ${pivotIndex}, value ${arr[pivotIndex]}`);
        console.log(`${indent}→ Left of pivot: [${arr.slice(left, pivotIndex)}]`);
        console.log(`${indent}→ Right of pivot: [${arr.slice(pivotIndex + 1, right + 1)}]`);

        debugQuickSort(arr, left, pivotIndex - 1, depth + 1);      // left side
        debugQuickSort(arr, pivotIndex + 1, right, depth + 1);     // right side
    } else if (left === right) {
        console.log(`${indent}Single element [${arr[left]}] at index ${left}, no sorting needed.`);
    } else {
        console.log(`${indent}Empty subarray (left: ${left}, right: ${right}), skip.`);
    }

    if (depth === 0) {
        console.log(`\nFinal Sorted Array: [${arr}]`);
    }

    return arr;
}

const testArr = [4, 2, 5, 3, 6];
debugQuickSort(testArr);
// console.log('debugPivot([4,2,5,3,6])', debugPivot([4,2,5,3,6]));

module.exports = { quickSort, pivot };