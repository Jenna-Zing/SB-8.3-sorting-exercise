# Selection Sort

## Overview

**Selection Sort** is an in-place comparison sorting algorithm. It divides the input list into two parts: the sorted part at the front (initially empty) and the unsorted part at the back. The algorithm repeatedly selects the **smallest (or largest)** element from the unsorted part and moves it to the end of the sorted part.

## Analogy: Sorting Books on a Shelf 📚

Imagine you're organizing a messy bookshelf by book height — from shortest to tallest:

## 📚 Selection Sort Analogy: Sorting Books on a Shelf

Imagine you're organizing books on a shelf from shortest to tallest. Here's how you'd do it:

1. Start at the first book on the shelf.
2. Scan through the rest of the shelf to find the **shortest book**.
3. Swap the shortest book with the one in the **very first position** on the bookshelf — even if it's already there.
4. Move one spot to the right (while ignoring the first one, which is now correctly placed), and and keep repeating this. Each time, picking out the **shortest remaining book** and putting it in the **next open spot** from the left (by swapping).
5. Keep going until all the books are in order from shortest to tallest.

Eventually, the whole bookshelf is perfectly arranged from **shortest to tallest** — one book at a time, starting from the left.

### Why this analogy fits Selection Sort:

- You always search the **unsorted portion** for the **smallest item**.
- You perform **one swap per pass**.
- The **sorted portion grows left to right** as you go.

---

## How It Works (High-Level)

1. Start at the first element of the array.
2. Scan the rest of the array to find the smallest element.
3. Swap the smallest element with the first element.
4. Move to the next position (to the right by 1) and repeat until the array is sorted.

---

## Example

Let's walk through sorting the list `[4, 20, 12, 10, 7, 9]` using Selection Sort:

### Initial list:

`[4, 20, 12, 10, 7, 9]`

### Step-by-Step Execution:

#### Pass 1:

- Start at index `0`.
- Find the smallest value from index `0` to `5` → Smallest: **4**.
- Place at index `0` (swapped `4` with `4`). Note: It's already at the correct position - no effect seen.
- **Array after pass 1:** `[4, 20, 12, 10, 7, 9]`

#### Pass 2:

- Move to index `1`.
- Find the smallest value from index `1` to `5` → Smallest: **7**.
- Place at index `1` (swapped `20` with `7`).
- **Array after pass 2:** `[4, 7, 12, 10, 20, 9]`

#### Pass 3:

- Move to index `2`.
- Find the smallest value from index `2` to `5` → Smallest: **9**.
- Place at index `2` (swapped `12` with `9`).
- **Array after pass 3:** `[4, 7, 9, 10, 20, 12]`

#### Pass 4:

- Move to index `3`.
- Find the smallest value from index `3` to `5` → Smallest: **10**.
- Place at index `3` (swapped `10` with `10`). Note: it's already in the correct position — no effect seen.
- **Array after pass 4:** `[4, 7, 9, 10, 20, 12]`

#### Pass 5:

- Move to index `4`.
- Find the smallest value from index `4` to `5` → Smallest: **12**.
- Place at index `4` (swapped `20` with `12`).
- **Array after pass 5:** `[4, 7, 9, 10, 12, 20]`

---

### Final Sorted Array:

`[4, 7, 9, 10, 12, 20]`

---

In **Selection Sort**, for an array of length **n**, you always need to make **(n - 1)** passes because:

On each pass, you're placing one element into its correct position.

After **(n - 1)** elements are in place, the **last element is already sorted by default**, since there's nowhere else for it to go.

From the example walkthrough above, here's what happened:

1. Pass 1: Find the smallest of all 6 → place at index 0
2. Pass 2: Find the smallest of the remaining 5 → place at index 1
3. Pass 3: Find the smallest of the remaining 4 → place at index 2
4. Pass 4: Find the smallest of the remaining 3 → place at index 3
5. Pass 5: Find the smallest of the remaining 2 → place at index 4
6. Done: The final element at index 5 must be the largest — no need to compare

That’s **5 passes (n - 1)** for an array of **n = 6** elements.

---

## Time and Space Complexity

### Time Complexity

Time complexity tells us **how long an algorithm takes to run** based on the size of the input (number of elements, `n`).

> The Time Complexity of Selection Sort is the same for all cases at O(n²). - The best (array is already sorted), average (random array), and worst (array is sorted in reverse order).

Selection Sort always goes through the list to **look for the smallest item**, even if the list is already sorted.

#### How It Works:

For an array with `n` elements:

- Pass 1: Look at `n` elements to find the smallest
- Pass 2: Look at `n - 1` elements
- Pass 3: Look at `n - 2` elements
- ...
- Total comparisons: `n + (n - 1) + (n - 2) + ... + 1`  
  → This equals **n(n - 1) / 2**, which is **O(n²)**

> Note: the swap operation is considered O(1) because no matter how big the array is, the steps don't change - you're always just accessing two elements directly by index and swapping them.

#### Time Complexity by Case

| **Case**         | **What Happens**                                                                 | **Comparisons** | **Time Complexity** |
| ---------------- | -------------------------------------------------------------------------------- | --------------- | ------------------- |
| **Best Case**    | The list is already sorted. But Selection Sort still checks every item.          | `n(n - 1)/2`    | O(n²)               |
| **Average Case** | The list is in random order. Every pass still checks the rest of the list.       | `n(n - 1)/2`    | O(n²)               |
| **Worst Case**   | The list is in reverse order. Selection Sort still goes through all comparisons. | `n(n - 1)/2`    | O(n²)               |

#### Simple Explanation:

- It **doesn't matter if the list is sorted or not** — Selection Sort **always** checks each remaining item.
- That's why it always takes about the same amount of time: **O(n²)**

---

### Space Complexity

Space complexity tells us **how much extra memory** the algorithm needs.

#### What Selection Sort Does:

- It sorts the array **in place** — it doesn’t create a new array.
- It only uses:
  - A few variables to keep track of indexes and temporary values during swaps.

So, the amount of extra memory used is **always the same**, no matter how big the array is.

#### Space Complexity Table

| **Case**               | **Extra Memory Used**                    | **Space Complexity** |
| ---------------------- | ---------------------------------------- | -------------------- |
| Best / Average / Worst | Just a few variables (like for swapping) | O(1)                 |

#### Simple Explanation:

- It only uses a **tiny, fixed amount of extra space** — it doesn’t grow with the size of the list.
- That’s why the space complexity is **O(1)** (constant space).

---

### Summary of Time and Space Complexity for Selection Sort

| **Aspect**           | **Best Case** | **Average Case** | **Worst Case** | **Explanation**                                                        |
| -------------------- | ------------- | ---------------- | -------------- | ---------------------------------------------------------------------- |
| **Time Complexity**  | O(n²)         | O(n²)            | O(n²)          | Always looks through the rest of the list to find the smallest element |
| **Space Complexity** | O(1)          | O(1)             | O(1)           | Doesn't use extra memory beyond a few variables                        |

---

> Tip for Beginners:  
> Even though Selection Sort is easy to understand, it's **not very efficient** for large arrays because it always does the same amount of work — even if the list is already sorted. More advanced algorithms like **Merge Sort** or **Quick Sort** are faster for big data sets.

---

## ✅ When to Use Selection Sort

- **You need a simple algorithm.**  
  Selection Sort is easy to understand and implement, making it great for teaching or quick prototypes.

- **You’re working with very small data sets.**  
  For small arrays (e.g., ≤ 10 elements), the performance difference is negligible, and simplicity can outweigh efficiency.

- **You want to minimize the number of swaps.**  
  Unlike Bubble Sort, Selection Sort only makes one swap per pass, which can be useful when swap operations are expensive (e.g., writing to memory or disk).

- **You have strict memory limitations.**  
  Selection Sort sorts the array in-place and only uses a small, fixed amount of extra memory (O(1)).

---

## ❌ When Not to Use Selection Sort

- **You need to sort large datasets efficiently.**  
  Selection Sort has O(n²) time complexity, so it becomes very slow as the array grows. Better alternatives are Quick Sort or Merge Sort.

- **You want a stable sort.**  
  Selection Sort is not stable by default — equal elements may change order after sorting - during the swapping of the current element with the minimum.

- **You want a sort that adapts to sorted or nearly sorted data.**  
  Selection Sort doesn’t take advantage of any existing order in the input; it does the same amount of work every time.

---

## 🌍 Real-Life Applications

- **Education and algorithm visualization.**  
  Selection Sort is often used to teach the concept of comparison-based sorting due to its step-by-step clarity.

- **Manual sorting or simple decision processes.**  
  It mimics how people often sort things — repeatedly picking the smallest remaining item.

- **Memory-constrained environments.**  
  Selection Sort is useful in systems with limited memory (RAM), such as microcontrollers, embedded systems, or real-time data analysis, where minimizing memory usage is more important than optimizing for speed. While not the fastest algorithm (with a time complexity of O(n²)), it is an in-place sorting algorithm, meaning it only uses a small, constant amount of extra memory (O(1)). In these contexts, Selection Sort is often chosen over more complex algorithms because it doesn’t require additional memory allocations, which is a key constraint in these environments.

---

## 🧾 Summary

**What is Selection Sort?**  
Selection Sort is a basic comparison-based sorting algorithm that repeatedly selects the smallest remaining item and places it in the correct position.

**How does it work?**  
It scans the unsorted part of the array, finds the smallest element, and swaps it into the next sorted position — one pass at a time.

**When and why do we use it?**  
Use Selection Sort when working with small datasets, teaching sorting concepts, or in environments where code simplicity and minimal memory use matter more than speed.
