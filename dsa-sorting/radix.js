/**
     * Extracts the digit at a given place from a number.
     * Example: getDigit(1234, 0) → 4 (units), getDigit(1234, 2) → 2 (hundreds)
     * @param {number} num - The number to extract a digit from
     * @param {number} place - The position (0 = ones, 1 = tens, etc.)
     * @returns {number} - The digit at that place
     */
function getDigit(num, place) {
    return Math.floor(Math.abs(num) / Math.pow(10, place)) % 10;
}

/**
     * Counts how many digits are in a number.
     * Example: digitCount(1234) → 4, digitCount(0) → 1
     * @param {number} num - The number to check
     * @returns {number} - Number of digits
     */
function digitCount(num) {
    if (num === 0) return 1;
    return Math.floor(Math.log10(Math.abs(num))) + 1;
}

/**
 * Finds the number with the most digits in an array.
 * This determines how many sorting passes are needed.
 * @param {number[]} nums - The input array
 * @returns {number} - Maximum number of digits in any number
 */
function mostDigits(nums) {
    let max = 0;
    for (let num of nums) {
        max = Math.max(max, digitCount(num));
    }
    return max;
}

/**
 * Performs Radix Sort on an array of integers (supports both positive and negative numbers).
 * 
 * Radix Sort processes digits from least to most significant and uses bucket sorting
 * at each digit level. It doesn't use comparisons like < or >, making it fast for integers.
 * 
 * Since standard Radix Sort only works with non-negative numbers, this version:
 *   1. Separates negative and positive numbers
 *   2. Sorts each separately (using radix sort logic)
 *   3. Merges them back: negatives first (reversed), then positives
 * 
 * @param {number[]} nums - Array of integers to be sorted (e.g. [170, -45, 75, -90, 802])
 * @returns {number[]} - Sorted array in ascending order (e.g. [-90, -45, 75, 170, 802])
 */
function radixSort(nums) {
    // Step 1: Determine the maximum number of digits in the input array
    const maxDigitCount = mostDigits(nums);

    // Step 2: Perform digit-wise sorting from least to most significant digit
    for (let k = 0; k < maxDigitCount; k++) {
        // This creates an array with 10 empty arrays (aka buckets) - one for each digit from 0 to 9.  
        // E.g. digitBuckets = [[], [], [], [], [], [], [], [], [], []]; 
        const digitBuckets = Array.from({ length: 10 }, () => []);

        // Step 3: Place each number in the corresponding bucket based on current digit
        for (let i = 0; i < nums.length; i++) {
            const digit = getDigit(nums[i], k);
            digitBuckets[digit].push(nums[i]);
        }

        // Step 4: Flatten the buckets back into the original array
        // This way uses the spread operator to "unpack" each sub-array so that concat can merge them all at once.
        // Example:  [].concat(...[[10], [20, 30], [], [40]]); -> result: [10, 20, 30, 40]
        nums = [].concat(...digitBuckets);
    }

    // Step 5: Return the sorted array
    return nums;
}



/* ---------------------------------------------------------------- 
   * Below are the debug versions of the functions above so you 
   * can follow along like in the example run-through in the 
   * `radix-sort-notes.md` file.
*/

function debugRadixSort(nums) {
    console.log("Initial List:", nums);

    // Step 1: Determine the maximum number of digits in the input array
    const maxDigitCount = debugMostDigits(nums);
    console.log(`Max digits in array: ${maxDigitCount}\n`);

    // Step 2: Perform digit-wise sorting from least to most significant digit
    for (let k = 0; k < maxDigitCount; k++) {
        console.log(`Pass ${k + 1} (k: ${k})`);

        const digitBuckets = Array.from({ length: 10 }, () => []);

        // Step 3: Place each number in the corresponding bucket based on current digit
        for (let i = 0; i < nums.length; i++) {
            const digit = debugGetDigit(nums[i], k);
            console.log(`   → Placing ${nums[i]} in bucket ${digit}`);
            digitBuckets[digit].push(nums[i]);
        }

        console.log("Buckets:");
        digitBuckets.forEach((bucket, idx) => {
            console.log(`   [${idx}]: ${JSON.stringify(bucket)}`);
        });

        // Step 4: Flatten the buckets back into the array
        nums = [].concat(...digitBuckets);
        console.log("Reassembled Array:", nums, "\n");
    }

    console.log("Final Sorted Array:", nums);
    return nums;
}

// Get the digit at a given place (0 = ones, 1 = tens, etc.)
function debugGetDigit(num, place) {
    const digit = Math.floor(Math.abs(num) / Math.pow(10, place)) % 10;
    console.log(`getDigit(${num}, ${place}) → ${digit}`);
    return digit;
}

// Count how many digits a number has
function debugDigitCount(num) {
    if (num === 0) return 1;
    const count = Math.floor(Math.log10(Math.abs(num))) + 1;
    console.log(`digitCount(${num}) → ${count}`);
    return count;
}

// Find the number with the most digits in an array
function debugMostDigits(nums) {
    let max = 0;
    for (let num of nums) {
        const currentDigits = debugDigitCount(num);
        if (currentDigits > max) {
            max = currentDigits;
        }
    }
    return max;
}

const input = [4, 7, 29, 86, 408, 593, 902, 1556, 3556, 4386, 8157, 9637];

debugRadixSort(input);

module.exports = {getDigit, digitCount, mostDigits, radixSort} ;