/**
 * Created by humbertosandigo on 10/14/16.
 */
'use strict';

/*
 * How many times a lucky number is repeated for every 100 customers?
 */
var luckyNumber;
var i = 1;
var counters = [0, 0, 0, 0, 0, 0];
while (i <= 100) {
    luckyNumber = Math.floor(Math.random() * 6);
     counters[luckyNumber]++;
    i++;
    }
    counters.forEach(function (counter, i){
        console.log (i + " appeared " + counter + " times.");
        });
// The output should be something like

// 0 appeared 10 times
// 1 appeared 20 times
// 2 appeared 15 times
// 3 appeared 35 times
// 4 appeared 4 times
// 5 appeared 16 times

// The total should be 100