# MergeSort

## Why is MergeSort - O(n log n)?

### Step 1: Divide Phase

Merge Sort works using a divide-and-conquer approach. The idea is to recursively divide the array into two halves until each subarray contains a single element or is empty. See below for a breakdown of the divide phase:

**How many levels of division?**

Every time you split the array into two halves, you're halving the size of the problem. So, if you start with an array of size n, you'll halve it in each step.

The number of times you can divide the array by 2 until you reach individual elements is log₂(n). (This is the number of levels or "depth" of recursion.) So, the number of times you divide the array is O(log n).

### Step 2: Conquer (Merging Phase)

At each level of recursion, after you split the array into smaller subarrays, you need to merge the subarrays back together in sorted order.

**How much work is done at each level?**

At each level of recursion, you're going through the entire array once to merge the elements. The merge process requires O(n) work because every element needs to be examined once and placed in the correct position in the sorted result.

**How many levels are there?**

Since the array is divided into two halves each time, and the division continues until all subarrays contain just one element, there will be log₂(n) levels of recursion (as explained above).

### Putting it Together

At each level of recursion:

You perform O(n) work for merging the subarrays.

There are O(log n) levels of recursion (due to the repeated halving).

So, the total time complexity is the product of the work done per level (O(n)) and the number of levels (O(log n)):
O(n)×O(logn)=O(nlogn)

## Example

### Initial list:

`[3, 1, 6, 7, -2, 4, -5, 10]`

### Step 1: Divide (Recursively Split into Halves)

Keep splitting the array into two halves until each sub-array has one element.

- `[3, 1, 6, 7] [-2, 4, -5, 10]`
- `[3, 1] [6, 7] [-2, 4] [-5, 10]`
- `[3] [1] [6] [7] [-2] [4] [-5] [10]`

> 📝 **Note on Execution Order**
>
> Merge Sort diagrams often show all splits happening at once for clarity,  
> but in practice, it performs splits **recursively**, one level at a time.  
> It keeps dividing until it reaches subarrays of size 1 (the base case),  
> and **only then** does it begin merging.
>
> The actual execution flow is **depth-first**, like so:  
> `Split → Split → Split → ... → Merge → Merge → ...`
>
> ---
>
> ### Try/See It Yourself:
>
> To observe this step-by-step, call: `debugMergeSort(list);` in the merge.js file with a custom list of numbers.
>
> This will log how it:
>
> - Recursively splits the **left half** down to base elements,
> - Merges them back up,
> - Then handles the **right half** the same way.

### Step 2: Conquer (Merge Sorted Halves)

Start merging the subarrays back together in sorted order:

- `[3]` + `[1]` → `[1, 3]`
- `[6]` + `[7]` → `[6, 7]`
- `[-2]` + `[4]` → `[-2, 4]`
- `[-5]` + `[10]` → `[-5, 10]`

Now the array looks like:
`[1, 3] [6, 7] [-2, 4] [-5, 10]`.

### Step 3: Continue Merging

- `[1, 3]` + `[6, 7]` → `[1, 3, 6, 7]`
- `[-2, 4]` + `[-5, 10]` → `[-5, -2, 4, 10]`

Now the array looks like:
`[1, 3, 6, 7] [-5, -2, 4, 10]`.

### Step 4: Final Merge

- `[1, 3, 6, 7]` + `[-5, -2, 4, 10]` → `[-5, -2, 1, 3, 4, 6, 7, 10]`

The final sorted array is `[-5, -2, 1, 3, 4, 6, 7, 10]`.

## Time and Space Complexity

| Case                                                                                                           | Time Complexity | Explanation                                                                  |
| -------------------------------------------------------------------------------------------------------------- | --------------- | ---------------------------------------------------------------------------- |
| **Best**                                                                                                       | **O(n log n)**  | Merge sort always divides the array and merges, even if it's already sorted. |
| **Average**                                                                                                    | **O(n log n)**  | The divide and merge steps take consistent time regardless of input.         |
| **Worst**                                                                                                      | **O(n log n)**  | Maximum comparisons and merging occur when the array is in reverse order.    |
| - **Space Complexity**: O(n) - Merge Sort requires extra space for temporary arrays used in merging subarrays. |

> ⚠️ **Note:** Merge Sort is **not an in-place algorithm**, unlike some other sorting algorithms like Bubble and Quick Sort. So if memory

### Why It’s Better Than O(n²) Algorithms

In comparison, simple sorting algorithms like Bubble Sort and Selection Sort have a time complexity of O(n²), because they repeatedly compare elements across the entire array for each element. Merge Sort’s divide-and-conquer approach of splitting the problem in half at each step results in a significantly more efficient algorithm for larger arrays.

## When to Use Merge Sort

- **Stable sort required:** Merge Sort preserves the relative order of equal elements.
- **Sorting linked lists:** It's efficient with linked lists since it doesn't require random access.
- **Consistent performance:** Guarantees `O(n log n)` time in all cases—best, average, and worst.
- **Large datasets on disk (external sorting):** Merge sort is ideal for sorting huge datasets stored in external memory because it accesses data sequentially.

---

## When Not to Use

- **Memory constraints:** It requires `O(n)` additional space, which makes it unsuitable for memory-critical applications.
- **In-place requirement:** Merge sort is not in-place, unlike Quick Sort or Heap Sort.
- **Small arrays in performance-critical code:** Simpler algorithms like Insertion Sort may outperform it due to lower overhead.

---

## 🌍 Real-Life Application Examples

| Use Case                                              | Why Merge Sort is Suitable                                                                                                                                    |
| ----------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **External Sorting (e.g., database sorting on disk)** | Handles data that cannot fit into RAM efficiently (when you can only load small parts of data at a time. Efficient external sorting using sequential access). |
| **Sorting large log files (e.g., server logs)**       | Breaks data into manageable chunks, merges efficiently                                                                                                        |
| **Sorting linked lists in functional languages**      | No random access needed; works well with recursion and lists, while avoiding pointer reassignment.                                                            |

---

## 🧾 Summary

- **Merge Sort** is a divide-and-conquer algorithm with consistent `O(n log n)` performance.
- It uses extra space (`O(n)`), so it's not ideal for in-place requirements.
- Perfect for stable sorting, linked lists, and large datasets that reside on disk.
- May not be ideal for small, memory-constrained environments or performance-critical inner loops.

> 📌 **Bottom Line:** Use Merge Sort when **predictability, stability, or large data support** is more important than in-place memory efficiency.

To test/see this function yourself with any number list, please call `debugMergeSort(list);` in the merge.js file.
