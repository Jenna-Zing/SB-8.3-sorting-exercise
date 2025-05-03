# Bubble Sort

## Overview

**Bubble Sort** is a simple comparison-based sorting algorithm. It works by repeatedly stepping through the list, comparing adjacent items, and swapping them if they are in the wrong order. This process repeats until the list is sorted.

The algorithm gets its name because smaller elements "bubble" to the top of the list (i.e., the beginning), while larger elements sink to the bottom (i.e., the end) with each iteration.

## How It Works (High-Level)

1. Start at the beginning of the list.
2. Compare the first and second elements.
3. If the first is greater than the second, swap them.
4. Move to the next pair and repeat until the end of the list.
5. After each pass, the largest unsorted element is placed at its correct position.
6. Repeat the process for the remaining unsorted portion of the list.

This continues until no swaps are needed, indicating that the list is sorted.

## Example

Let's walk through sorting the list `[5, 1, 4, 2, 8]` using Bubble Sort:

### Initial list:

`[5, 1, 4, 2, 8]`

### Pass 1:

- Compare 5 and 1 → swap → `[1, 5, 4, 2, 8]`
- Compare 5 and 4 → swap → `[1, 4, 5, 2, 8]`
- Compare 5 and 2 → swap → `[1, 4, 2, 5, 8]`
- Compare 5 and 8 → no swap

### Pass 2:

- Compare 1 and 4 → no swap
- Compare 4 and 2 → swap → `[1, 2, 4, 5, 8]`
- Compare 4 and 5 → no swap
- Compare 5 and 8 → no swap

### Pass 3:

- Compare 1 and 2 → no swap
- Compare 2 and 4 → no swap

### List is sorted:

`[1, 2, 4, 5, 8]`

## Time and Space Complexity

| Case        | Time Complexity | Explanation                                                                  |
| ----------- | --------------- | ---------------------------------------------------------------------------- |
| **Best**    | **O(n)**        | If the array is already sorted, only one pass is needed (with optimization). |
| **Average** | **O(n²)**       | Nested loops iterate over all elements in most typical scenarios.            |
| **Worst**   | **O(n²)**       | When the array is sorted in reverse, it takes the maximum number of swaps.   |

- **Space Complexity**: O(1) — in-place sorting, no extra memory required.

**Best case** occurs when the list is already sorted (with an optimized version that checks for swaps).

## ✅ When to Use Bubble Sort

- **Learning and teaching**: Ideal for understanding the fundamentals of sorting algorithms.
- **Very small datasets**: Works acceptably on small lists where performance isn’t critical.
- **Data nearly sorted**: Optimized versions with early termination can be efficient in these scenarios.

## ❌ When Not to Use

- For large datasets or performance-critical systems, avoid Bubble Sort. More efficient algorithms like Merge Sort, Quick Sort, or Tim Sort are preferable.

## 🌍 Real-Life Applications

Bubble Sort is rarely used in production environments due to inefficiency. However, it might still appear in:

- **Educational tools**: Teaching basic sorting concepts.
- **Embedded systems**: Where code simplicity and low memory usage are more important than speed.
- **Animation and visualizations**: Simple to animate and demonstrate sorting behavior.

## 🧾 Summary

Bubble Sort is easy to implement and understand but inefficient for large lists. It’s primarily used for educational purposes or simple applications where performance isn't a concern.

To test/see this function yourself with any number list, please call `debugBubbleSort(list);` in the bubble.js file.
