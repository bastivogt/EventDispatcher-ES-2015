"use strict";
import { Counter } from "./classes/Counter.js";

const counter = new Counter();

counter.addListener(Counter.ON_COUNTER_START, (e) => {
    console.log(`type: ${e.type}, count: ${e.target.count}`);
});

counter.addListener(Counter.ON_COUNTER_CHANGE, (e) => {
    console.log(`type: ${e.type}, count: ${e.target.count}`);
});

counter.addListener(Counter.ON_COUNTER_FINISH, (e) => {
    console.log(`type: ${e.type}, count: ${e.target.count}`);
});

counter.run();

console.dir(counter);