"use strict";

import { EventDispatcher, Event } from "./EventDispatcher.js";


export class Counter extends EventDispatcher {

    _start;
    _stop;
    _step;
    _count;




    constructor(start = 0, stop = 10, step = 1) {
        super();
        this._start = start;
        this._stop = stop;
        this._step = step;
        this._count = this._start;
    }

    static get ON_COUNTER_START() {return "onCounterStart"}
    static get ON_COUNTER_CHANGE() {return "onCounterChange"}
    static get ON_COUNTER_FINISH() {return "onCounterFinish"}

    get count() {
        return this._count;
    }

    run() {
        this._count = this._start;
        this.dispatchEvent(new Event(Counter.ON_COUNTER_START, this));
        for(; this._count < this._stop; this._count += this._step) {
            this.dispatchEvent(new Event(Counter.ON_COUNTER_CHANGE, this));
        }
        this.dispatchEvent(new Event(Counter.ON_COUNTER_FINISH, this));
    }
}
