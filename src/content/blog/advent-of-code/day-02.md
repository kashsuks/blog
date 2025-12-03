---
title: 'Day 2'
description: 'Gift Shop'
pubDate: 'Dec 2, 2025'
heroImage: '../../../assets/aoc.png'
category: "Advent of Code"
---

## Part 1

A key part of understanding this problem is understanding what an ID is. For this problem, the definition of an ID is extremely restrictive

> A number is invalid only if it consists of some sequence of digits repeated exactly twice

So instead of overthinking any complicated number properties I realized that the simplest possible way to check is:
1. Convert the number to a string
2. If the length is odd:
    - It **cannot** possibly be a doubled pattern
3. If the length is even:
    - Split the string into two even halves 
        - One way to do this is to list splice right in the middle and check whether both new lists match
    - If the two halves match then you've got yourself an invalid Id

That's all the pattern wants us to detect

The only observation we need to make is that there is only one possible *structure* for an invalid ID

```
AAAA
BBBBBBBB
CCCCCCC CCCCCCC
(first half identical to second half)
```

There are **no** other possibilities for the structure of an invalid ID.

In c++ this can be easily done by implementing an isDouble function.

```cpp
bool isDouble(ll x) {
    string s = to_string(x);
    int m = s.size();
    if (m % 2) return false;
    string a = s.substr(0, m / 2);
    string b = s.substr(m / 2);
    return a == b;
}
```

*Note*: `ll` in this case means `long long`. This is from my template which can be found [here](https://github.com/kashsuks/competitiveProgramming/blob/main/codeforces/main.cpp)

The `isDouble` function above converts it to a string (line 2) and then checks the size of the string (line 3). After that we can use a simple
1-liner in order to see whether the size is even, if yes, then we can say that the number **cannot** be invalid. Strings `a` and `b` are the first and second half of the string respectively and we can check whether they are equal to each other.

The function is simple enough that it can be implemented in other languages in a few lines.

This process can be repeated for each input that is provided and our `ans` would just be the sum of all our invalid id's.

*Part 1 of this problem took me 5 minutes and 39 seconds (00:05:39)*

## Part 2 

The definition of an invalid ID is much more general in this part. We can generalize the definition of an invalid ID to be

> Any ID that is some sequence of digits repeated at least twice is invalid.

This means that instead of only checking

```
AA
```

We must now also check

```
AAA
AAAA
AAAAA
AA...A (k >= 2 times)
```

Or in a string form:
- Let the ID be `s` of length `n`
- If you can find *any* divisor `d` of `n` such that:
```
s = t repeated (n/d) times
```

Where `t` is `s[0:d]`

*Then the ID is invalid*

**The key difference in Part 2 is that we allow any divisor `d` such that the pattern repeats >= 2 times**

### Answers will increase significantly

You will notice that the answers will increase significantly. Below are periods that were ignored in Part 1 that are considered in Part 2:

1. Any number of identical digits
`5555`, `999`, etc
2. Any number that is built by alternation
`1212`, `121212`, `56565656`, etc
3. Any number that has repeated blocks:
`824824824`, `2121212121`, etc

This means that the chance of an invalid number showing up increases drastically meaning the final answer increases.

The same `isDouble` function can be used for this part as well except we would need to brute force through all of our numbers.

```cpp
for (auto &r : ranges) {
    for (ll id = r.first; id <= r.second; id++) {
        if (isDouble(id)) ans += id;
    }
}
```

The above code is an example as to how we can brute force through all of the ranges using our invalid checker.

## Alternate Approaches

One very clever and honestly very clean way to approach this would be through using *Regex* (regular expressions) that can be seen [here](https://github.com/hanaeatsplanes/advent-of-code/blob/main/2025/02/main.py)
- The key part of this solution is `^(\d+?)\1+$` which is the regex phrase that matches a string made by repeating the same digit-sequence two or more times.
- This is also known as a lazy match where we match as few digits as possible while still letting the rest of the regex succeed

A more mathy way to do this is to generate all the possible repeating numbers then check if they exist in the range. The solution for this can be found [here](https://github.com/michel-kraemer/adventofcode-rust/blob/main/2025/day02/src/main.rs)

## Solution

You can find the Github code for this problem [here](https://github.com/kashsuks/aoc-2025/tree/master/day-2)