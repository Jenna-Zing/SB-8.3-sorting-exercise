# 📊 Radix Sort (Basic) - JavaScript

The `radix.js` file contains a basic implementation of **Radix Sort**, a non-comparative sorting algorithm optimized for non-negative integers.

---

## Overview

**Radix Sort** is a linear sorting algorithm that organizes numbers by **processing individual digits**, from the **least significant digit (LSD)** to the **most significant digit (MSD)**.

Unlike comparison-based sorts (like QuickSort or MergeSort), Radix Sort works by **placing numbers into buckets** based on digits and **reassembling** them.

### Key Characteristics:

- **Non-comparative** (does not use `<` or `>`).
- ✅ **Fast** for integers — no comparisons like `<` or `>`
- ✅ **Stable** — preserves the original order of equal values
- ✅ **Good for big lists** of numbers with similar length
- ⚠️ **Only works with integers** — because it sorts digit by digit
- ❌ **The basic version implemented (here) does not handle negatives.**

- Often faster than `O(n log n)` sorts for specific datasets (like fixed-length integers).

---

## How It Works (High-Level):

Let's walk through how RadixSort works with the array `[902, 4, 7, 408, 29, 9637, 1556, 3556, 8157, 4386, 86, 593]`.

### Initial list:

`[902, 4, 7, 408, 29, 9637, 1556, 3556, 8157, 4386, 86, 593]`

---

### Step 1: Use the `mostDigits` function to determine the maximum number of digits in the input array

The first step in Radix Sort is to determine how many digits the largest number in the array has. We use the mostDigits helper function to calculate this.

`const maxDigitCount = mostDigits(nums);`

- **Why**: Radix Sort works by processing each digit (starting from the least significant digit), so the number of digits tells us how many times we need to loop through the array.

For example, the largest number in our array is **9637**, which has **4 digits**. So, we need to perform 4 passes of sorting.

---

### Step 2: Perform digit-wise sorting from least to most significant digit

Now that we know how many digits we need to process, we loop from `0` to `maxDigitCount - 1` to sort each digit starting from the least significant digit (ones place) to the most significant digit (thousands place).

```
for (let k = 0; k < maxDigitCount; k++) {
    const digitBuckets = Array.from({ length: 10 }, () => []);
    ...
}
```

**Explanation**:

- The loop runs 4 times in total for our example because the largest number, **9637**, has 4 digits.
- For each digit, we create 10 empty arrays (digitBuckets) to represent buckets for each digit (from 0 to 9).

---

### Step 3: Step 3: Place each number in the corresponding bucket based on current digit

For each digit (from the least significant to the most significant), we extract the digit at position k (where k starts from 0) and place the number into the corresponding bucket.

```
for (let i = 0; i < nums.length; i++) {
    const digit = getDigit(nums[i], k);
    digitBuckets[digit].push(nums[i]);
}
```

**What happens here**:

- getDigit(nums[i], k) extracts the digit at the current position k of the number nums[i].
  - Example: If k = 0 (ones place), getDigit(902, 0) would return 2 because the ones digit of 902 is 2.
  - Each number is placed into a bucket based on the extracted digit.

For example, if we were sorting by the ones place (k = 0), after this step, the buckets would look like this:

```
Buckets (k=0):
0 → [902]
4 → [4]
7 → [7]
8 → [408]
9 → [29]
```

---

### Step 4: Flatten the buckets back into the original array

After all numbers have been placed in the buckets, we need to flatten the buckets back into a single array. This step ensures that the array is correctly arranged according to the current digit being processed.

`nums = [].concat(...digitBuckets);`

What happens here:

- `[].concat(...digitBuckets)` takes the arrays inside `digitBuckets` and combines them into a single array.

Example: `[].concat(...[[10], [20, 30], [], [40]])` would return `[10, 20, 30, 40]`.

The array now looks like:
`[902, 4, 7, 408, 29]`

---

### Step 5: Return the sorted array

After all passes of sorting (across each digit), the array is sorted. We return the final sorted array.

`return nums;`

At this point, the array is fully sorted based on the digits, and we can return the sorted result.

---

## Example Run-through

Let's walk through the RadixSort algorithm with the array `[902, 4, 7, 408, 29, 9637, 1556, 3556, 8157, 4386, 86, 593]`.

### Step 1: Finding Maximum Number of Digits

RadixSort uses the helper function `mostDigits` to find the largest number in the input array. In this example, the largest number is 9637, which has 4 digits.

---

### Step 2: Sorting by Ones Place (k = 0)

We examine the ones place:

| Number | Ones Digit |
| ------ | ---------- |
| 902    | 2          |
| 4      | 4          |
| 7      | 7          |
| 408    | 8          |
| 29     | 9          |
| 9637   | 7          |
| 1556   | 6          |
| 3556   | 6          |
| 8157   | 7          |
| 4386   | 6          |
| 86     | 6          |
| 593    | 3          |

And extract the rightmost digit (ones place) from each number, and add them to their respective bucket.

```
Buckets (k = 0):
0 → []
1 → []
2 → [902]
3 → [593]
4 → [4]
5 → []
6 → [1556, 3556, 4386, 86]
7 → [7, 9637, 8157]
8 → [408]
9 → [29]
```

Flattened result after this step (k = 0):

`[902, 593, 4, 1556, 3556, 4386, 86, 7, 9637, 8157, 408, 29]`

---

### Step 3: Sorting by the Tens Place (k = 1)

We now look at the tens place (aka second-to-last digit):

| Number | Tens Digit |
| ------ | ---------- |
| 902    | 0          |
| 593    | 9          |
| 4      | 0          |
| 1556   | 5          |
| 3556   | 5          |
| 4386   | 8          |
| 86     | 8          |
| 7      | 0          |
| 9637   | 3          |
| 8157   | 5          |
| 408    | 0          |
| 29     | 2          |

Extract the second-to-last digit (tens place) from each number, and add them to their respective bucket.

```
Buckets (k = 1):
0 → [902, 4, 7, 408]
1 → []
2 → [29]
3 → [9637]
4 → []
5 → [1556, 3556, 8157]
6 → []
7 → []
8 → [4386, 86]
9 → [593]
```

Flattened result after this step (k = 1):

`[902, 4, 7, 408, 29, 9637, 1556, 3556, 8157, 4386, 86, 593]`

---

### Step 4: Sorting by the Hundreds Place (k = 2)

We now look at the hundreds place (aka third-to-last digit):

```
| Number | Hundreds Digit |
| ------ | -------------- |
| 902    | 9              |
| 4      | 0              |
| 7      | 0              |
| 408    | 4              |
| 29     | 0              |
| 9637   | 6              |
| 1556   | 5              |
| 3556   | 5              |
| 8157   | 1              |
| 4386   | 3              |
| 86     | 0              |
| 593    | 5              |
```

Extract the third-to-last digit (hundreds place) from each number, and add them to their respective bucket.

```
Buckets (k = 2):
0 → [4, 7, 29, 86]
1 → [8157]
2 → []
3 → [4386]
4 → [408]
5 → [1556, 3556, 593]
6 → [9637]
7 → []
8 → []
9 → [902]
```

Flattened result after this step (k = 2):

`[4, 7, 29, 86, 8157, 4386, 408, 1556, 3556, 593, 9637, 902]`

---

### Step 5: Sorting by the Thousands Place (k = 3)

We now look at the thousands place (aka fourth-from-right digit):

```
| Number | Thousands Digit |
| ------ | --------------- |
| 4      | 0               |
| 7      | 0               |
| 29     | 0               |
| 86     | 0               |
| 8157   | 8               |
| 4386   | 4               |
| 408    | 0               |
| 1556   | 1               |
| 3556   | 3               |
| 593    | 0               |
| 9637   | 9               |
| 902    | 0               |
```

Extract the fourth-from-right digit (thousands place) from each number, and add them to their respective bucket.

```
Buckets (k = 3):
0 → [4, 7, 29, 86, 408, 593, 902]
1 → [1556]
2 → []
3 → [3556]
4 → [4386]
5 → []
6 → []
7 → []
8 → [8157]
9 → [9637]
```

Flattened result after this step (k = 3):

`[4, 7, 29, 86, 408, 593, 902, 1556, 3556, 4386, 8157, 9637]`

### Final Sorted Array

The final sorted array is:

`[4, 7, 29, 86, 408, 593, 902, 1556, 3556, 4386, 8157, 9637]`

## Time and Space Complexity

| Case        | Time Complexity | Explanation                                                                                             |
| ----------- | --------------- | ------------------------------------------------------------------------------------------------------- |
| **Best**    | **O(nk)**       | All numbers have the same number of digits (`k`), and digit distribution is even.                       |
| **Average** | **O(nk)**       | Most inputs will have consistent digit length and uniform digit spread.                                 |
| **Worst**   | **O(nk)**       | Still linear in `n`, but if `k` is large (many digits), it takes longer — especially for large numbers. |

- `n` = number of elements in the array
- `k` = number of digits in the **longest number**

**Important:** Unlike comparison sorts (which are bounded by O(n log n)), Radix Sort can **beat** that for numbers with small, fixed digit lengths.

---

### 💾 Space Complexity

- n = number of items in the array
- k = number of digits in the largest number

| Component     | Space Complexity | Explanation                                                                                                                                                 |
| ------------- | ---------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Buckets       | `O(n)`           | All numbers go into 10 buckets during each pass. So while there are always 10 buckets, they can collectively hold up to `n` numbers.                        |
| Bucket count  | `O(1)`           | There are always 10 buckets (for digits 0–9), so the number of **buckets** is constant — `O(1)` space. But what's inside the buckets uses up to `O(n)`.     |
| Extra arrays  | `O(n)`           | After each digit pass, the algorithm flattens all the bucket contents back into a new list — this rebuilt array uses `n` space.                             |
| Digit helpers | `O(k)` or `O(1)` | The helper functions (like getting a digit or counting digits) use either a little fixed space or grow with the number of digits `k` in the biggest number. |
| **Total**     | **`O(n + k)`**   | Because we may need space for the numbers in buckets (`O(n)`) and possibly for digit-related helpers (`O(k)`) — we add them together.                       |

---

### Time and Space Complexity Summary

| Feature          | Value                                      |
| ---------------- | ------------------------------------------ |
| **Best Case**    | O(nk)                                      |
| **Average Case** | O(nk)                                      |
| **Worst Case**   | O(nk)                                      |
| **Space**        | O(n + k)                                   |
| **Stable Sort**  | ✅ Yes                                     |
| **In-Place**     | ❌ No (uses buckets)                       |
| **Works with**   | Non-negative integers only (basic version) |

## ✅ When to Use Radix Sort

Radix Sort is a great choice in the following situations:

- **You are sorting non-negative integers**
  - Basic radix sort only handles positive whole numbers.
- **The number of digits (k) is small**
  - Radix sort’s speed depends on the number of digits more than the number of elements.
- **You need stable sorting**
  - It preserves the relative order of equal elements, which is useful in multi-key sorting.
- **You want linear performance in specific scenarios**
  - Can outperform comparison-based sorts (like QuickSort or MergeSort) for large datasets of small integers.

---

## ❌ When Not to Use Radix Sort

Avoid radix sort in these situations:

- You need to sort **strings, objects, or floating-point values**
  - Radix sort works only integers.
- You're dealing with **negative numbers or decimals**
  - Basic versions don’t support them (though extensions exist).
- You have very large integers with many digits
  - More digits mean more passes → slower overall performance.
- You have strict memory constraints
  - Radix sort requires extra space for digit buckets in each pass.
- When simplicity and general-purpose use is more important than performance — comparison sorts (e.g. MergeSort, QuickSort) are simpler and more flexible.

---

## 🌍 Real-Life Applications

While not always the default, radix sort is useful in domains like:

- **Postal sorting systems**
  - Sort ZIP codes or numeric identifiers quickly.
- **Digital electronics and embedded systems**
  - For memory-efficient and fast integer sorting.
- **Database systems**
  - Internally used when sorting numeric indexes (especially in-memory).
- **Game development**
  - Sorting small numeric identifiers or sprite depths.
- **Data visualization tools**
  - Efficient pre-sorting of histogram or bin values.

---

## 🧾 Summary

Radix Sort is a sorting algorithm that works only for integers because it sorts numbers based on their individual digits (ones, tens, hundreds, etc.), not by comparing their actual values.

> To test/see this function yourself with any number list, please call `debugRadixSort(list);` in the `radixSort.js` file.

---

**What is it?**

- It’s a non-comparative sorting algorithm.
- Instead of comparing numbers directly, it groups them by digit values using buckets (0 to 9).
- It processes the digits from right to left (least to most significant).

---

**Why It Only Works for Integers**

It needs to pull out digits from numbers (like the tens or hundreds place), which only makes sense for whole numbers.

For example, getting the "3rd digit" of 408 is clear, but for a float like 4.08 or a string, this kind of digit extraction doesn’t work the same way.

---

**Key Characteristics**

- Time Complexity: O(nk), where n = number of items, k = number of digits
- Space Complexity: O(n + k) - because it uses buckets for grouping numbers
- Stable: Keeps the order of numbers with the same value.
- Not in-place: Requires extra memory for buckets.
- Only for integers: Can't sort floats, strings, or negatives (without modifications).

---

**What is it good for?**

- Large lists of non-negative integers
- Numbers with a similar number of digits
- When you want a fast and stable sort
