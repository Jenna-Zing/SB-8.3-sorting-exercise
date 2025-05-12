/**
 * Performs an in-place selection sort on an array of numbers.
 * The algorithm repeatedly selects the smallest element from the unsorted portion of the array
 * and swaps it with the first unsorted element.
 *
 * @param {number[]} arr - The array of numbers to be sorted.
 * @returns {number[]} The sorted array.
 */
function selectionSort(arr) {
    // Iterate through the entire array
    for (let i = 0; i < arr.length - 1; i++) {
        // Assume the current index (i) is the index of the smallest element
        let minIndex = i;

        // Iterate over the unsorted portion of the array (from i + 1 to the end) to find the actual minimum
        for (let j = i + 1; j < arr.length; j++) {
            // Update min_idx if a smaller element is found
            if (arr[j] < arr[minIndex]) {
                minIndex = j;
            }
        }

        // Move minimum element to its
        // correct position
        let temp = arr[i];
        arr[i] = arr[minIndex];
        arr[minIndex] = temp;
    }

    // Return the sorted array
    return arr;
}

/* Below is a debug version of the selection sort above so you can see each step through console.logs */
function debugSelectionSort(arr) {
    console.log(`Initial list: [${arr.join(', ')}]`);
    // Iterate through the entire array
    for (let i = 0; i < arr.length - 1; i++) {
        // Assume the current index (i) is the index of the smallest element
        let minIndex = i;
        console.log(`\nPass #${i + 1}:`);

        // Log the array state at the start of the pass
        console.log(`  Current Array: [${arr.join(', ')}]`);

        // Iterate over the unsorted portion of the array (from i + 1 to the end)
        for (let j = i + 1; j < arr.length; j++) {
            // If the current element is smaller than the element at minIndex, update minIndex
            process.stdout.write(`    Compare arr[${j}] = ${arr[j]} with arr[${minIndex}] = ${arr[minIndex]}`);
            if (arr[j] < arr[minIndex]) {
                minIndex = j;
                console.log(`    → New smallest element found: arr[${minIndex}] = ${arr[minIndex]}`);
            } else {
                console.log(`    → No change to minIndex.`);
            }
        }

        // If minIndex has changed, swap the element at i with the element at minIndex
        if (minIndex !== i) {
            console.log(` → Swapping arr[${i}] = ${arr[i]} with arr[${minIndex}] = ${arr[minIndex]}`);
            // Swap elements
            let temp = arr[i];
            arr[i] = arr[minIndex];
            arr[minIndex] = temp;
        } else {
            console.log(` → No swap needed, the current element ${arr[minIndex]} is already the smallest.`);
        }

        // Log the array after the swap (or no swap)
        console.log(`  Array after Pass #${i + 1}: [${arr.join(', ')}]`);
    }

    console.log("\nSelection Sort Completed!");
    console.log(`Final Sorted Array: [${arr.join(', ')}]`);
    return arr;
}

// Example usage:
let arr = [64, 25, 12, 22, 11];
let sortedArr = debugSelectionSort(arr);

module.exports = selectionSort;