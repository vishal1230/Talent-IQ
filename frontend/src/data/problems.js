export const PROBLEMS = {
  // --- ORIGINAL 5 PROBLEMS ---
  "two-sum": {
    id: "two-sum",
    title: "Two Sum",
    difficulty: "Easy",
    category: "Array • Hash Table",
    description: {
      text: "Given an array of integers nums and an integer target, return indices of the two numbers in the array such that they add up to target.",
      notes: [
        "You may assume that each input would have exactly one solution, and you may not use the same element twice.",
        "You can return the answer in any order.",
      ],
    },
    examples: [
      {
        input: "nums = [2,7,11,15], target = 9",
        output: "[0,1]",
        explanation: "Because nums[0] + nums[1] == 9, we return [0, 1].",
      },
      {
        input: "nums = [3,2,4], target = 6",
        output: "[1,2]",
      },
      {
        input: "nums = [3,3], target = 6",
        output: "[0,1]",
      },
    ],
    constraints: [
      "2 ≤ nums.length ≤ 10⁴",
      "-10⁹ ≤ nums[i] ≤ 10⁹",
      "-10⁹ ≤ target ≤ 10⁹",
      "Only one valid answer exists",
    ],
    starterCode: {
      javascript: `function twoSum(nums, target) {\n  // Write your solution here\n}\n\nconsole.log(twoSum([2, 7, 11, 15], 9));`,
      python: `def twoSum(nums, target):\n    # Write your solution here\n    pass\n\nprint(twoSum([2, 7, 11, 15], 9))`,
      java: `import java.util.*;\nclass Solution {\n    public static int[] twoSum(int[] nums, int target) {\n        return new int[0];\n    }\n}`,
    },
    expectedOutput: {
      javascript: "[0,1]\n[1,2]\n[0,1]",
      python: "[0, 1]\n[1, 2]\n[0, 1]",
      java: "[0, 1]\n[1, 2]\n[0, 1]",
    },
  },

  "reverse-string": {
    id: "reverse-string",
    title: "Reverse String",
    difficulty: "Easy",
    category: "String • Two Pointers",
    description: {
      text: "Write a function that reverses a string. The input string is given as an array of characters s.",
      notes: ["You must do this by modifying the input array in-place with O(1) extra memory."],
    },
    examples: [
      { input: 's = ["h","e","l","l","o"]', output: '["o","l","l","e","h"]' },
    ],
    constraints: ["1 ≤ s.length ≤ 10⁵", "s[i] is a printable ascii character"],
    starterCode: {
      javascript: `function reverseString(s) {\n  // Write your solution here\n}`,
      python: `def reverseString(s):\n    # Write your solution here\n    pass`,
      java: `class Solution {\n    public static void reverseString(char[] s) {\n    }\n}`,
    },
    expectedOutput: {
      javascript: '["o","l","l","e","h"]\n["h","a","n","n","a","H"]',
      python: "['o', 'l', 'l', 'e', 'h']\n['h', 'a', 'n', 'n', 'a', 'H']",
      java: "[o, l, l, e, h]\n[h, a, n, n, a, H]",
    },
  },

  "valid-palindrome": {
    id: "valid-palindrome",
    title: "Valid Palindrome",
    difficulty: "Easy",
    category: "String • Two Pointers",
    description: {
      text: "A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward.",
      notes: ["Given a string s, return true if it is a palindrome, or false otherwise."],
    },
    examples: [
      { input: 's = "A man, a plan, a canal: Panama"', output: "true" },
    ],
    constraints: ["1 ≤ s.length ≤ 2 * 10⁵"],
    starterCode: {
      javascript: `function isPalindrome(s) {\n  // Write your solution here\n}`,
      python: `def isPalindrome(s):\n    # Write your solution here\n    pass`,
      java: `class Solution {\n    public static boolean isPalindrome(String s) {\n        return false;\n    }\n}`,
    },
    expectedOutput: {
      javascript: "true\nfalse\ntrue",
      python: "True\nFalse\nTrue",
      java: "true\nfalse\ntrue",
    },
  },

  "maximum-subarray": {
    id: "maximum-subarray",
    title: "Maximum Subarray",
    difficulty: "Medium",
    category: "Array • Dynamic Programming",
    description: {
      text: "Given an integer array nums, find the subarray with the largest sum, and return its sum.",
      notes: [],
    },
    examples: [
      { input: "nums = [-2,1,-3,4,-1,2,1,-5,4]", output: "6" },
    ],
    constraints: ["1 ≤ nums.length ≤ 10⁵", "-10⁴ ≤ nums[i] ≤ 10⁴"],
    starterCode: {
      javascript: `function maxSubArray(nums) {\n  // Write your solution here\n}`,
      python: `def maxSubArray(nums):\n    # Write your solution here\n    pass`,
      java: `class Solution {\n    public static int maxSubArray(int[] nums) {\n        return 0;\n    }\n}`,
    },
    expectedOutput: { javascript: "6\n1\n23", python: "6\n1\n23", java: "6\n1\n23" },
  },

  "container-with-most-water": {
    id: "container-with-most-water",
    title: "Container With Most Water",
    difficulty: "Medium",
    category: "Array • Two Pointers",
    description: {
      text: "Find two lines that together with the x-axis form a container, such that the container contains the most water.",
      notes: ["Return the maximum amount of water a container can store."],
    },
    examples: [
      { input: "height = [1,8,6,2,5,4,8,3,7]", output: "49" },
    ],
    constraints: ["n == height.length", "2 ≤ n ≤ 10⁵"],
    starterCode: {
      javascript: `function maxArea(height) {\n  // Write your solution here\n}`,
      python: `def maxArea(height):\n    # Write your solution here\n    pass`,
      java: `class Solution {\n    public static int maxArea(int[] height) {\n        return 0;\n    }\n}`,
    },
    expectedOutput: { javascript: "49\n1", python: "49\n1", java: "49\n1" },
  },

  // --- 10 NEW PROBLEMS ---

  "valid-parentheses": {
    id: "valid-parentheses",
    title: "Valid Parentheses",
    difficulty: "Easy",
    category: "Stack • String",
    description: {
      text: "Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.",
      notes: [
        "Open brackets must be closed by the same type of brackets.",
        "Open brackets must be closed in the correct order.",
      ],
    },
    examples: [
      { input: 's = "()"', output: "true" },
      { input: 's = "()[]{}"', output: "true" },
      { input: 's = "(]"', output: "false" },
    ],
    constraints: ["1 ≤ s.length ≤ 10⁴", "s consists of parentheses only '()[]{}'"],
    starterCode: {
      javascript: `function isValid(s) {\n  // Write your solution here\n}`,
      python: `def isValid(s):\n    # Write your solution here\n    pass`,
      java: `class Solution {\n    public boolean isValid(String s) {\n        return false;\n    }\n}`,
    },
    expectedOutput: {
      javascript: "true\ntrue\nfalse",
      python: "True\nTrue\nFalse",
      java: "true\ntrue\nfalse",
    },
  },

  "merge-two-sorted-lists": {
    id: "merge-two-sorted-lists",
    title: "Merge Two Sorted Lists",
    difficulty: "Easy",
    category: "Linked List • Recursion",
    description: {
      text: "Merge two sorted linked lists and return it as a sorted list. The list should be made by splicing together the nodes of the first two lists.",
      notes: ["The number of nodes in both lists is in the range [0, 50]."],
    },
    examples: [
      { input: "l1 = [1,2,4], l2 = [1,3,4]", output: "[1,1,2,3,4,4]" },
    ],
    constraints: ["Both lists are sorted in non-decreasing order."],
    starterCode: {
      javascript: `function mergeTwoLists(l1, l2) {\n  // l1 and l2 are head nodes of linked lists\n}`,
      python: `def mergeTwoLists(l1, l2):\n    # l1 and l2 are ListNode objects\n    pass`,
      java: `class Solution {\n    public ListNode mergeTwoLists(ListNode l1, ListNode l2) {\n        return null;\n    }\n}`,
    },
    expectedOutput: {
      javascript: "[1,1,2,3,4,4]",
      python: "[1, 1, 2, 3, 4, 4]",
      java: "[1, 1, 2, 3, 4, 4]",
    },
  },

  "best-time-to-buy-and-sell-stock": {
    id: "best-time-to-buy-and-sell-stock",
    title: "Best Time to Buy and Sell Stock",
    difficulty: "Easy",
    category: "Array • Dynamic Programming",
    description: {
      text: "You are given an array prices where prices[i] is the price of a given stock on the ith day.",
      notes: [
        "Find the maximum profit you can achieve from this transaction.",
        "If you cannot achieve any profit, return 0.",
      ],
    },
    examples: [
      { input: "prices = [7,1,5,3,6,4]", output: "5", explanation: "Buy on day 2 (price=1) and sell on day 5 (price=6), profit = 6-1 = 5." },
    ],
    constraints: ["1 ≤ prices.length ≤ 10⁵", "0 ≤ prices[i] ≤ 10⁴"],
    starterCode: {
      javascript: `function maxProfit(prices) {\n  // Write your solution here\n}`,
      python: `def maxProfit(prices):\n    # Write your solution here\n    pass`,
      java: `class Solution {\n    public int maxProfit(int[] prices) {\n        return 0;\n    }\n}`,
    },
    expectedOutput: { javascript: "5\n0", python: "5\n0", java: "5\n0" },
  },

  "invert-binary-tree": {
    id: "invert-binary-tree",
    title: "Invert Binary Tree",
    difficulty: "Easy",
    category: "Tree • BFS • DFS",
    description: {
      text: "Given the root of a binary tree, invert the tree, and return its root.",
      notes: ["This is a classic 'Max Howell' problem: Google: 90% of our engineers use the software you wrote (Homebrew), but you can’t invert a binary tree on a whiteboard so f*** off."],
    },
    examples: [
      { input: "root = [4,2,7,1,3,6,9]", output: "[4,7,2,9,6,3,1]" },
    ],
    constraints: ["The number of nodes in the tree is in the range [0, 100]."],
    starterCode: {
      javascript: `function invertTree(root) {\n  // root is the root of a binary tree\n}`,
      python: `def invertTree(root):\n    # root is a TreeNode object\n    pass`,
      java: `class Solution {\n    public TreeNode invertTree(TreeNode root) {\n        return null;\n    }\n}`,
    },
    expectedOutput: { javascript: "[4,7,2,9,6,3,1]", python: "[4, 7, 2, 9, 6, 3, 1]", java: "[4, 7, 2, 9, 6, 3, 1]" },
  },

  "climbing-stairs": {
    id: "climbing-stairs",
    title: "Climbing Stairs",
    difficulty: "Easy",
    category: "Dynamic Programming • Math",
    description: {
      text: "You are climbing a staircase. It takes n steps to reach the top. Each time you can either climb 1 or 2 steps.",
      notes: ["In how many distinct ways can you climb to the top?"],
    },
    examples: [
      { input: "n = 2", output: "2", explanation: "1. 1 step + 1 step\n2. 2 steps" },
      { input: "n = 3", output: "3", explanation: "1. 1+1+1\n2. 1+2\n3. 2+1" },
    ],
    constraints: ["1 ≤ n ≤ 45"],
    starterCode: {
      javascript: `function climbStairs(n) {\n  // Write your solution here\n}`,
      python: `def climbStairs(n):\n    # Write your solution here\n    pass`,
      java: `class Solution {\n    public int climbStairs(int n) {\n        return 0;\n    }\n}`,
    },
    expectedOutput: { javascript: "2\n3\n5", python: "2\n3\n5", java: "2\n3\n5" },
  },

  "longest-substring-without-repeating-characters": {
    id: "longest-substring-without-repeating-characters",
    title: "Longest Substring Without Repeating Characters",
    difficulty: "Medium",
    category: "String • Sliding Window",
    description: {
      text: "Given a string s, find the length of the longest substring without repeating characters.",
      notes: ["Substrings must be contiguous."],
    },
    examples: [
      { input: 's = "abcabcbb"', output: "3", explanation: "The answer is 'abc', with length 3." },
    ],
    constraints: ["0 ≤ s.length ≤ 5 * 10⁴"],
    starterCode: {
      javascript: `function lengthOfLongestSubstring(s) {\n  // Write your solution here\n}`,
      python: `def lengthOfLongestSubstring(s):\n    # Write your solution here\n    pass`,
      java: `class Solution {\n    public int lengthOfLongestSubstring(String s) {\n        return 0;\n    }\n}`,
    },
    expectedOutput: { javascript: "3\n1\n3", python: "3\n1\n3", java: "3\n1\n3" },
  },

  "3sum": {
    id: "3sum",
    title: "3Sum",
    difficulty: "Medium",
    category: "Array • Two Pointers",
    description: {
      text: "Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.",
      notes: ["The solution set must not contain duplicate triplets."],
    },
    examples: [
      { input: "nums = [-1,0,1,2,-1,-4]", output: "[[-1,-1,2],[-1,0,1]]" },
    ],
    constraints: ["3 ≤ nums.length ≤ 3000", "-10⁵ ≤ nums[i] ≤ 10⁵"],
    starterCode: {
      javascript: `function threeSum(nums) {\n  // Write your solution here\n}`,
      python: `def threeSum(nums):\n    # Write your solution here\n    pass`,
      java: `class Solution {\n    public List<List<Integer>> threeSum(int[] nums) {\n        return new ArrayList<>();\n    }\n}`,
    },
    expectedOutput: { javascript: "[[-1,-1,2],[-1,0,1]]", python: "[[-1, -1, 2], [-1, 0, 1]]", java: "[[-1, -1, 2], [-1, 0, 1]]" },
  },

  "product-of-array-except-self": {
    id: "product-of-array-except-self",
    title: "Product of Array Except Self",
    difficulty: "Medium",
    category: "Array • Prefix Sum",
    description: {
      text: "Given an integer array nums, return an array answer such that answer[i] is equal to the product of all the elements of nums except nums[i].",
      notes: [
        "You must write an algorithm that runs in O(n) time and without using the division operation.",
      ],
    },
    examples: [
      { input: "nums = [1,2,3,4]", output: "[24,12,8,6]" },
    ],
    constraints: ["2 ≤ nums.length ≤ 10⁵", "-30 ≤ nums[i] ≤ 30"],
    starterCode: {
      javascript: `function productExceptSelf(nums) {\n  // Write your solution here\n}`,
      python: `def productExceptSelf(nums):\n    # Write your solution here\n    pass`,
      java: `class Solution {\n    public int[] productExceptSelf(int[] nums) {\n        return new int[nums.length];\n    }\n}`,
    },
    expectedOutput: { javascript: "[24,12,8,6]", python: "[24, 12, 8, 6]", java: "[24, 12, 8, 6]" },
  },

  "number-of-islands": {
    id: "number-of-islands",
    title: "Number of Islands",
    difficulty: "Medium",
    category: "Graph • DFS • BFS",
    description: {
      text: "Given an m x n 2D binary grid which represents a map of '1's (land) and '0's (water), return the number of islands.",
      notes: ["An island is surrounded by water and is formed by connecting adjacent lands horizontally or vertically."],
    },
    examples: [
      { 
        input: 'grid = [["1","1","1","1","0"],["1","1","0","1","0"],["1","1","0","0","0"],["0","0","0","0","0"]]', 
        output: "1" 
      },
    ],
    constraints: ["m == grid.length", "n == grid[i].length", "1 ≤ m, n ≤ 300"],
    starterCode: {
      javascript: `function numIslands(grid) {\n  // Write your solution here\n}`,
      python: `def numIslands(grid):\n    # Write your solution here\n    pass`,
      java: `class Solution {\n    public int numIslands(char[][] grid) {\n        return 0;\n    }\n}`,
    },
    expectedOutput: { javascript: "1\n3", python: "1\n3", java: "1\n3" },
  },

  "median-of-two-sorted-arrays": {
    id: "median-of-two-sorted-arrays",
    title: "Median of Two Sorted Arrays",
    difficulty: "Hard",
    category: "Array • Binary Search • Divide and Conquer",
    description: {
      text: "Given two sorted arrays nums1 and nums2 of size m and n respectively, return the median of the two sorted arrays.",
      notes: [
        "The overall run time complexity should be O(log (m+n)).",
      ],
    },
    examples: [
      { input: "nums1 = [1,3], nums2 = [2]", output: "2.00000" },
      { input: "nums1 = [1,2], nums2 = [3,4]", output: "2.50000", explanation: "merged array = [1,2,3,4] and median is (2 + 3) / 2 = 2.5." },
    ],
    constraints: ["nums1.length == m", "nums2.length == n", "0 ≤ m, n ≤ 1000", "1 ≤ m + n ≤ 2000"],
    starterCode: {
      javascript: `function findMedianSortedArrays(nums1, nums2) {\n  // Write your solution here\n}`,
      python: `def findMedianSortedArrays(nums1, nums2):\n    # Write your solution here\n    pass`,
      java: `class Solution {\n    public double findMedianSortedArrays(int[] nums1, int[] nums2) {\n        return 0.0;\n    }\n}`,
    },
    expectedOutput: { javascript: "2.0\n2.5", python: "2.0\n2.5", java: "2.0\n2.5" },
  },

  "trapping-rain-water": {
    id: "trapping-rain-water",
    title: "Trapping Rain Water",
    difficulty: "Hard",
    category: "Array • Two Pointers • Stack",
    description: {
      text: "Given n non-negative integers representing an elevation map where the width of each bar is 1, compute how much water it can trap after raining.",
      notes: ["The width of each bar is 1."],
    },
    examples: [
      { input: "height = [0,1,0,2,1,0,1,3,2,1,2,1]", output: "6" },
      { input: "height = [4,2,0,3,2,5]", output: "9" },
    ],
    constraints: ["n == height.length", "1 ≤ n ≤ 2 * 10⁴", "0 ≤ height[i] ≤ 10⁵"],
    starterCode: {
      javascript: `function trap(height) {\n  // Write your solution here\n}`,
      python: `def trap(height):\n    # Write your solution here\n    pass`,
      java: `class Solution {\n    public int trap(int[] height) {\n        return 0;\n    }\n}`,
    },
    expectedOutput: { javascript: "6\n9", python: "6\n9", java: "6\n9" },
  },

  "merge-k-sorted-lists": {
    id: "merge-k-sorted-lists",
    title: "Merge k Sorted Lists",
    difficulty: "Hard",
    category: "Linked List • Divide and Conquer • Heap",
    description: {
      text: "You are given an array of k linked-lists lists, each linked-list is sorted in ascending order.",
      notes: ["Merge all the linked-lists into one sorted linked-list and return it."],
    },
    examples: [
      { input: "lists = [[1,4,5],[1,3,4],[2,6]]", output: "[1,1,2,3,4,4,5,6]" },
    ],
    constraints: ["k == lists.length", "0 ≤ k ≤ 10⁴", "0 ≤ lists[i].length ≤ 500"],
    starterCode: {
      javascript: `function mergeKLists(lists) {\n  // lists is an array of ListNode heads\n}`,
      python: `def mergeKLists(lists):\n    # lists is a list of ListNode objects\n    pass`,
      java: `class Solution {\n    public ListNode mergeKLists(ListNode[] lists) {\n        return null;\n    }\n}`,
    },
    expectedOutput: { javascript: "[1,1,2,3,4,4,5,6]", python: "[1, 1, 2, 3, 4, 4, 5, 6]", java: "[1, 1, 2, 3, 4, 4, 5, 6]" },
  },

  "longest-valid-parentheses": {
    id: "longest-valid-parentheses",
    title: "Longest Valid Parentheses",
    difficulty: "Hard",
    category: "String • Dynamic Programming • Stack",
    description: {
      text: "Given a string containing just the characters '(' and ')', return the length of the longest valid (well-formed) parentheses substring.",
      notes: [],
    },
    examples: [
      { input: 's = "(()"', output: "2", explanation: "The longest valid parentheses substring is '()'." },
      { input: 's = ")()())"', output: "4", explanation: "The longest valid parentheses substring is '()()'." },
    ],
    constraints: ["0 ≤ s.length ≤ 3 * 10⁴", "s[i] is '(' or ')'"],
    starterCode: {
      javascript: `function longestValidParentheses(s) {\n  // Write your solution here\n}`,
      python: `def longestValidParentheses(s):\n    # Write your solution here\n    pass`,
      java: `class Solution {\n    public int longestValidParentheses(String s) {\n        return 0;\n    }\n}`,
    },
    expectedOutput: { javascript: "2\n4\n0", python: "2\n4\n0", java: "2\n4\n0" },
  },

  "word-ladder": {
    id: "word-ladder",
    title: "Word Ladder",
    difficulty: "Hard",
    category: "Hash Table • String • BFS",
    description: {
      text: "Find the length of the shortest transformation sequence from beginWord to endWord, such that only one letter can be changed at a time and each transformed word must exist in the wordList.",
      notes: ["Return 0 if there is no such transformation sequence."],
    },
    examples: [
      { 
        input: 'beginWord = "hit", endWord = "cog", wordList = ["hot","dot","dog","lot","log","cog"]', 
        output: "5", 
        explanation: '"hit" -> "hot" -> "dot" -> "dog" -> "cog" is 5 words long.' 
      },
    ],
    constraints: ["1 ≤ beginWord.length ≤ 10", "wordList.length ≤ 5000"],
    starterCode: {
      javascript: `function ladderLength(beginWord, endWord, wordList) {\n  // Write your solution here\n}`,
      python: `def ladderLength(beginWord, endWord, wordList):\n    # Write your solution here\n    pass`,
      java: `class Solution {\n    public int ladderLength(String beginWord, String endWord, List<String> wordList) {\n        return 0;\n    }\n}`,
    },
    expectedOutput: { javascript: "5\n0", python: "5\n0", java: "5\n0" },
  },

  "coin-change": {
    id: "coin-change",
    title: "Coin Change",
    difficulty: "Medium",
    category: "Dynamic Programming • BFS",
    description: {
      text: "You are given an integer array coins representing coins of different denominations and an integer amount representing a total amount of money.",
      notes: [
        "Return the fewest number of coins that you need to make up that amount.",
        "If that amount of money cannot be made up by any combination of the coins, return -1.",
      ],
    },
    examples: [
      { input: "coins = [1,2,5], amount = 11", output: "3", explanation: "11 = 5 + 5 + 1" },
    ],
    constraints: ["1 ≤ coins.length ≤ 12", "0 ≤ amount ≤ 10⁴"],
    starterCode: {
      javascript: `function coinChange(coins, amount) {\n  // Write your solution here\n}`,
      python: `def coinChange(coins, amount):\n    # Write your solution here\n    pass`,
      java: `class Solution {\n    public int coinChange(int[] coins, int amount) {\n        return -1;\n    }\n}`,
    },
    expectedOutput: { javascript: "3\n-1\n0", python: "3\n-1\n0", java: "3\n-1\n0" },
  },
};

export const LANGUAGE_CONFIG = {
  javascript: {
    name: "JavaScript",
    icon: "/javascript.png",
    monacoLang: "javascript",
  },
  python: {
    name: "Python",
    icon: "/python.png",
    monacoLang: "python",
  },
  java: {
    name: "Java",
    icon: "/java.png",
    monacoLang: "java",
  },
};