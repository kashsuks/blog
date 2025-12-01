---
title: 'Day 1'
description: 'Secret Entrance'
pubDate: 'Dec 1, 2025'
heroImage: '../../../assets/aoc.png'
category: "Advent of Code"
---

## Part 1

We can imagine the dial as a circular clock which is numbered from `0` to `99` and we start at `50`.

Every rotation instruction (*L* or *R*) moves the dial step by step around the circle.

- Left
    - Rotates counter-clockwise
- Right
    - Rotates clockwise

It's a circular path meaning 0 comes after 99 and before 0 comes 99.

The first version of this problem asks,

> How many times does the dial end exactly at 0 after a rotation?

Theres really only 4 steps for this:

1. Take our current position (let's call it `cur`) on the dial
2. Apply the rotation (either left or right)
3. If after this rotation, we land on 0, we can increment our counter
4. Repeat for all instructions

### Why Do We Use Modulo 100?

Since the dial wraps around every 100 numbers, we can use a modulo to ensure our range is within 0 and 99.

## Part 2 

This section is fairly straightforward and I somehow managed to waste 4 whole minutes on it.

The only difference this time is that when we count every the dial points at 0, we also include during the rotation.

Meaning, if we do `R1000` that means we pass `0`, 10 times. If we do `R60`, we pass `0` only 1 time.

So compared to the first version, we have to simulate each movement and check whether we are currently at 0. This is easily achievable through a for loop and we check each time.

## Solution

You can find the Github code for this problem [here](https://github.com/kashsuks/aoc-2025/tree/master/day-1)