# Sorting Exercise

In this exercise, I will get to practice implementing sorting algorithms. In the starter-code.zip - it includes sort files as well as test files.

I have set up a package.json and installed jest. To run the test files, do `npm i` to install jest. Then run `npm test` to run jest.

# Jenna's Notes:

- \*\*For running the project, `cd dsa-sorting`, then run `node bubble.js` for example - and be sure that inside of the file you're calling - call the function. E.g. I call `debugMergeSort(list)` in merge.js which prints the steps as it completes the sort. For submision, please refer to the versions that are not prefaced with "debug".
- Alternatively, you could run the functions in each file from Node.js REPL interactive shell -> `cd dsa-sorting`, then run `node`, and `const bubbleSort = require('./bubble');` for example. Then you may call `bubbleSort(...)` (as many times with different inputs) as you wish.
- \*\*For unit testing, run `cd dsa-sorting` if you haven't already, then run `npx jest bubble.test.js` for example. Otherwise, run all tests at once using `npm test` once in the dsa-sorting directory.

> Please see the folder `sort-notes` for my notes on each sort. They include (1) an overview, (2) How it works (high-level), (3) an example walk-through of the sort, (4) Time and Space Complexity, (5) When to use the Sort, (6) When not to use the Sort, (7) real-life applications, and (8) a summary.
