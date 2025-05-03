/**
 * Sorts an array of numbers in ascending order using the Insertion Sort algorithm.
 *
 * Insertion Sort is a simple, intuitive algorithm that builds a sorted section of the array
 * one element at a time by shifting larger elements to the right and inserting the current
 * element into its correct position.

 * Key details:
 * - Time Complexity:
 *   - Best case: O(n) when the array is already sorted
 *   - Average and Worst case: O(n^2) when the array is in reverse or random order
 * - Space Complexity: O(1) (in-place sort)
 * - Stable sort: maintains the order of equal elements
 *
 * @param {number[]} arr - The array of numbers to be sorted. This array is sorted in place.
 * @returns {number[]} The sorted array (in ascending order).
 */
function insertionSort(arr) {
    // compares key (current element / card) with the elements before it.
    // Assumes first element is already sorted, so we start at the second element (index 1).
    for (let i = 1; i < arr.length; i++) {
        let key = arr[i];  // key is the current value (the card you're holding)
        let j;

        // 1. j = i - 1 -> start comparing from the previous (sorted) element
        // 2. shift elements to the right (by 1) if they are greater than the key (current value / card)
        for (j = i - 1; j > -1 && arr[j] > key; j--) {
          arr[j + 1] = arr[j];
        }
    
        arr[j + 1] = key;
      }
    
      // Insert the key (current element / card) into the correct position
      return arr;
}

function debugInsertionSort(arr) {
    console.log(`Initial list: [${arr.join(', ')}]`);  // Print the initial state of the array
    
    // compares key (current element / card) with the elements before it.
    // Assumes first element is already sorted, so we start at the second element (index 1).
    for (let i = 1; i < arr.length; i++) {
        let key = arr[i];  // key is the current value (the card you're holding)
        let j;

        console.log(`\nStep ${i}: (key = ${key})`);
        console.log("  - Starting comparison with the sorted part of the array");

        // 1. j = i - 1 -> start comparing from the previous (sorted) element
        // 2. shift elements to the right (by 1) if they are greater than the key (current value / card)
        for (j = i - 1; j > -1 && arr[j] > key; j--) {
          const shiftedValue = arr[j];  // Capture the value before shifting
          arr[j + 1] = arr[j];
        //   console.log(`  - ${key} is compared with ${arr[j]}.  Since  ${key} < ${arr[j]}, insert ${key} before ${arr[j]} `);
          console.log(`  - Shifting ${shiftedValue} to the right. Current array: [${arr.join(', ')}]`);
        }
    
        // Insert the key (current element / card) into the correct position
        arr[j + 1] = key;
        console.log(`  - Inserted ${key} into position ${j + 1}. Current array: [${arr.join(', ')}]`);
      }
    
      console.log(`\nList is sorted: [${arr.join(', ')}]`);
      return arr;
}

debugInsertionSort([5,3,8,4,2]);

module.exports = insertionSort;