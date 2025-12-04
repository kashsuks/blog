---
title: 'Day 3'
description: 'Lobby'
pubDate: 'Dec 3, 2025'
heroImage: '../../../assets/aoc.png'
category: "Advent of Code"
---

## Part 1

We are in a lobby with elevators offline and the escalator needs power. Power comes from batteries labeled 1-9 that are arranged in banks.
Each bank is represented as a sequence of digits in our input. Turning on a subset of batteries in a bank produces a number which is the digits of the battery you choose in order.

> The goal is to maximize the output from each bank and sum them all

- Turn on exactly *two batteries* per bank
- The number that is formed by the two digits (in order) is the joltage for the bank
- Sum the maximum joltage from each bank for the total output

### Approach

Each bank is a sequence of digits
    Think `987654321111111`

In order to maximize the two digit number:
    - We need the largest first digit that occurs before the largest second digit
    - Since the sequence is not very long, we can try all possible pairs of positions `(i, j)` with `i < j`
    - Compute the number formed by that pair and track the maximum

Repeat for all banks and sum the results.

## Part 2 

- Turn on exactly *12 batteries* per bank
- The number formed by the 12 digits is the bank's joltage
- Sum these maximal numbers across all banks

**This could be done by using a greedy stack approach**
Essentially:
- Brute force all combinations is infeasible
- Get the largest 12 digit number while respecting the order
    - Scan left to right in the bank
    - Keep a stack of chosen digits forming the current sequence
- Repeat for each bank and sum the outputs

## Solution

You can find the Github code for this problem [here](https://github.com/kashsuks/aoc-2025/tree/master/day-3)