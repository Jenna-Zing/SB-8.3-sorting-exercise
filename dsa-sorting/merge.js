/**
 * Merges two sorted arrays into a single sorted array.
 * 
 * This function takes two input arrays (arr1 and arr2), which are assumed to already be sorted.
 * It compares the elements from both arrays one by one, and constructs a new array (results) by
 * repeatedly pushing the smaller of the two elements. Once one of the arrays is exhausted,
 * it appends any remaining elements from the other array.
 * 
 * @param {Array} arr1 - The first sorted array to be merged.
 * @param {Array} arr2 - The second sorted array to be merged.
 * @returns {Array} - A new array that contains all the elements from arr1 and arr2, sorted in ascending order.
 * 
 * Notes:
 * - This function assumes that both input arrays are already sorted. If they aren't, you would need to sort them first.
 */
function merge(arr1, arr2) {
    const results = []; // To hold the merged result
    let i = 0; // Pointer for arr1
    let j = 0; // Pointer for arr2

    // Compare elements from both arrays and add the smaller element to results
    while (i < arr1.length && j < arr2.length) {
        if (arr1[i] < arr2[j]) {
            results.push(arr1[i]); // If arr1[i] is smaller, push it to results
            i++; // Move pointer in arr1
        } else {
            results.push(arr2[j]); // If arr2[j] is smaller or equal, push it to results
            j++; // Move pointer in arr2
        }
    }

    // If any elements remain in arr1 (arr2 is exhausted), add them to results
    while (i < arr1.length) {
        results.push(arr1[i]);
        i++; // Move pointer in arr1
    }

    // If any elements remain in arr2 (arr1 is exhausted), add them to results
    while (j < arr2.length) {
        results.push(arr2[j]);
        j++; // Move pointer in arr2
    }

    return results; // Return the merged sorted array
}
  
  /**
 * Divide-and-conquer sorting algorithm that sorts an array using the merge sort algorithm. 
 * It takes an unsorted array, splits it, and recursively sorts and merges the halves.
 * 
 * The function recursively splits the input array into two halves until each half has one or zero elements.
 * Then it merges the halves together using the merge function to produce a sorted array.
 * 
 * @param {Array} arr - The array to be sorted.
 * @returns {Array} - A new array containing the elements from arr, sorted in ascending order.
 * 
 * Notes:
 * - Merge Sort is stable, meaning that it preserves the order of equal elements.
 * - This implementation creates new arrays for every split, which can increase memory usage.
 */
function mergeSort(arr) {
    // Base case: If the array has one or zero elements, it's already sorted
    if (arr.length <= 1) return arr;
    // Split the array into two halves
    const mid = Math.floor(arr.length / 2);  // emphasis on the floor to have whole number indices
    const left = mergeSort(arr.slice(0, mid));  // sort the left half
    const right = mergeSort(arr.slice(mid));  // sort the right half

    // merge the two sorted halves and return the result
    return merge(left, right);
}

/* Debug Version of Merge */
function debugMerge(arr1, arr2) {
    process.stdout.write(`Merging: [${arr1}] and [${arr2}]`);
    const results = []; // To hold the merged result
    let i = 0; // Pointer for arr1
    let j = 0; // Pointer for arr2

    // Compare elements from both arrays and add the smaller element to results
    while (i < arr1.length && j < arr2.length) {
        if (arr1[i] < arr2[j]) {
            results.push(arr1[i]); // If arr1[i] is smaller, push it to results
            i++; // Move pointer in arr1
        } else {
            results.push(arr2[j]); // If arr2[j] is smaller or equal, push it to results
            j++; // Move pointer in arr2
        }
    }

    // If any elements remain in arr1 (arr2 is exhausted), add them to results
    while (i < arr1.length) {
        results.push(arr1[i]);
        i++; // Move pointer in arr1
    }

    // If any elements remain in arr2 (arr1 is exhausted), add them to results
    while (j < arr2.length) {
        results.push(arr2[j]);
        j++; // Move pointer in arr2
    }

    console.log(` → Result: [${results}]\n`);
    return results; // Return the merged sorted array
}

/* This version of the function is to include console.logs to follow along. */
function debugMergeSort(arr) {
    // Base case: If the array has one or zero elements, it's already sorted
    console.log(`List: [${arr.join(', ')}]`);
    if (arr.length <= 1) return arr;
    // Split the array into two halves
    const mid = Math.floor(arr.length / 2);  // emphasis on the floor to have whole number indices
    console.log(`mid: ${mid}`);
    const left = debugMergeSort(arr.slice(0, mid));  // sort the left half
    console.log(`left -> arr.slice(0, ${mid}).  Left: [${left.join(', ')}]`);
    const right = debugMergeSort(arr.slice(mid));  // sort the right half
    console.log(`right -> arr.slice(${mid}).  Right: [${right.join(', ')}]`);

    // merge the two sorted halves and return the result
    return debugMerge(left, right);
}

console.log(debugMergeSort([3,1,6,7,-2,4,-5,10]));

module.exports = { merge, mergeSort};