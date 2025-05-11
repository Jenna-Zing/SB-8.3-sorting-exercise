# QuickSort

## Overview

QuickSort is an efficient, in-place sorting algorithm that uses a divide-and-conquer approach. It sorts an array by selecting a pivot element and partitioning the array into two sub-arrays: elements less than the pivot and elements greater than the pivot. The sub-arrays are then recursively sorted.

The given implementation uses the **first element of the array** as the pivot for partitioning. The pivot function rearranges the array so that elements less than the pivot are placed before it, and elements greater than or equal to it are placed after it. After partitioning, the QuickSort algorithm recursively sorts the left and right sub-arrays.

## How It Works (High-Level)

1. **Pivot Function**: The `pivot` function chooses the first element in the array as the pivot. It rearranges the array such that:

   - All elements less than the pivot come before it.
   - All elements greater than or equal to the pivot come after it.
     The function then returns the final index of the pivot after it has been placed in its correct position.

2. **QuickSort Function**: The `quickSort` function recursively partitions the array around the pivot and sorts the resulting sub-arrays. The base case for recursion is when the sub-array has one or zero elements (i.e., no further sorting is needed).

3. **Recursive Sorting**: The `quickSort` function is called on both the left and right sub-arrays formed by the pivot, ensuring that the entire array is sorted.

## Example

Let's walk through the QuickSort algorithm with the array `[4, 2, 5, 3, 6]`.

### Initial list:

`[4, 2, 5, 3, 6]`

**Step 1: Pivot Selection (First Element as Pivot)**

- The pivot is `4` (first element of the array).

**Step 2: Partitioning (Using Pivot = 4)**

- Start with `swapIndex = 0` (position of the pivot).
- We iterate from i = 1 (start + 1) to 4 (arr.length - 1):
  - arr[1] = 2 < 4 → increment swapIndex to 1, swap arr[1] with arr[1] (no visible change) → `[4, 2, 5, 3, 6]`
  - arr[2] = 5 > 4 → do nothing
  - arr[3] = 3 < 4 → increment swapIndex to 2, swap arr[2] with arr[3] → array becomes `[4, 2, 3, 5, 6]`
  - arr[4] = 6 > 4 → do nothing
- Final step: swap pivot (arr[0]) with arr[2] → array becomes `[3, 2, 4, 5, 6]`
- Returns the pivot index (aka swapIndex): `2`, which represents the correct position of the pivot value.

The pivot (`4`) is now in its correct position at index `2`.

**Step 3: Recursion (Sub-arrays)**

- We now recursively apply QuickSort to the left sub-array `[3, 2]` and the right sub-array `[5, 6]`.

### Left Side: `quickSort([3, 2], 0, 1)`

- Pivot is `3`
- `2` < `3` → swapIndex to 1, swap with itself
- Final swap → no change, pivot (`3`) goes to index 1 → array becomes `[2, 3, 4, 5, 6]`

### Right Side: `quickSort([5, 6], 3, 4)`

- Pivot is `5`
- `6` > `5` → no action
- Final swap → no change, pivot stays at index 3

### Final Sorted Array

After all recursive calls complete, the final sorted array is `[2, 3, 4, 5, 6]`.

## Time and Space Complexity

| Case        | Time Complexity | Explanation                                                                                            |
| ----------- | --------------- | ------------------------------------------------------------------------------------------------------ |
| **Best**    | **O(n log n)**  | The pivot divides the array into nearly equal parts, resulting in optimal performance.                 |
| **Average** | **O(n log n)**  | On average, the pivot divides the array reasonably evenly, giving good performance.                    |
| **Worst**   | **O(n²)**       | The pivot is the smallest or largest element, resulting in unbalanced partitions and poor performance. |

- **Space Complexity**: O(log n) — The space complexity is mainly due to the recursion stack, as the sorting is done in-place.

## ✅ When to Use QuickSort

- You need a **fast sorting algorithm** for large datasets.
- You care about **average-case performance** (QuickSort is generally faster than others like Bubble Sort or Insertion Sort).
- You don't need the **original order preserved** for equal elements (QuickSort is not stable by default - meaning equal values can get shuffled around depending on how partitioning happens and are not guaranteed to keep their original order like stable sorts).
- You have limited memory – QuickSort uses less extra memory than some algorithms like Merge Sort.

To sum it up:

- **General-purpose sorting**: QuickSort is a good default sorting algorithm for large datasets due to its average-case time complexity of O(n log n).
- **When average-case performance is key**: QuickSort is faster than many other algorithms in most average cases, making it ideal for general sorting tasks.

## ❌ When Not to Use

- You need to keep the **original order** of items with the same value (you need a stable sort).
- The data is **already nearly sorted** – in some cases, this can make QuickSort slow (but modern versions fix this).
- If you're sorting **very small arrays** – simpler algorithms like Insertion Sort can be faster / may perform better in those cases.
- **Worst-case performance concerns**: In scenarios where guaranteed worst-case performance is critical (e.g. real-time applications), consider algorithms like Merge Sort or Heap Sort, which always runs in O(n log n).

## 🌍 Real-Life Applications

🌱 Beginner-Friendly Real-Life examples of QuickSort:

1. Sorting contacts on your phone.
   - When you open your contacts app and it shows names in alphabetical order, your phone may use a fast algorithm like QuickSort to sort those names.
2. E-commerce product sorting.
   - When you sort products by price, popularity, or rating on Amazon, the app must sort huge lists fast — QuickSort or its variants are often used here.
3. Leaderboard Ranking in Games
   - In games or fitness apps, when you see a ranked list of players/scores, that list is sorted using an efficient algorithm like QuickSort.
4. Music or Photo Library
   - If you sort your music by artist, album, or date, your app may use QuickSort to quickly organize the files.
5. Autocomplete Suggestions
   - When typing in Google or a search bar, it sorts suggested phrases based on how often you use them (e.g. frequency or popularity) — sorting is done behind the scenes using QuickSort or similar algorithms.

🧠 More Technical / Professional Applications of QuickSort:

1. Database Engines
   - When you run a query with `ORDER BY`, databases must sort rows — often using QuickSort (or introsort, a hybrid of QuickSort + Heap/Merge Sort for stability and worst-case protection).
2. Standard Coding Libraries
   - Languages like:
     - C++ (STL's std::sort)
     - Java (Arrays.sort() for primitives)
     - Python (historically in early versions) used QuickSort or a variation (like Introsort or Timsort) in their core sorting functions.
3. Operating Systems
   - QuickSort is used in:
     - File browsers to sort file names, dates, or sizes.
     - Task managers to sort processes by CPU usage or memory.

## 🧾 Summary

QuickSort is an efficient sorting algorithm with an average time complexity of O(n log n). It is a good choice for general-purpose sorting but may have poor worst-case performance (O(n²)) when the pivot is poorly chosen. Despite this, QuickSort is often used in practice due to its fast average performance and in-place sorting.

To test/see this function yourself with any number list, please call `debugQuickSort(list);` in the `quickSort.js` file.

---

QuickSort is a "divide and conquer" sorting method. Here's what it does:

1. Pick a number from the list (called the **pivot**).
2. **Split** the list into two parts:
   - Numbers **smaller** than the pivot. (go to the left of the pivot)
   - Numbers **larger** than the pivot. (go to the right of the pivot)
3. Do the same thing **recursively** on the two parts.
4. Combine them back into one **sorted list**.

> 💡 Imagine you’re sorting cards in your hand. You pick a middle card, separate the rest into piles smaller and bigger, then repeat until it’s all neat.

## ⚠️ Stability in QuickSort

QuickSort is **not stable** by default.

> A _stable sort_ keeps equal elements in their original order.
