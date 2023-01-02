"use strict";

export class EventDispatcher {

    _listeners;

    constructor() {
        this._listeners = [];
    }


    get listeners() {
        return this._listeners;
    }

    hasListener(type) {
        for (const listener of this._listeners) {
            if(listener.type === type) {
                return true;
            }
        }
        return false;
    }

    addListener(type, handler) {
        if(!this.hasListener(type)) {
            this._listeners.push({
                type: type,
                handler: handler
            })
            return true;
        }
        return false;
    }

    removeListener(type) {
        for(let i = 0; i < this._listeners.length; i ++) {
            if(this._listeners[i].type === type) {
                this._listeners.splice(i, 1);
                return true;
            }
        }
        return false;
    }

    dispatchEvent(e) {
        for(let i = 0; i < this._listeners.length; i ++) {
            if(this._listeners[i].type === e.type) {
                this._listeners[i].handler(e);
                return true;
            }
        }
        return false;
    }
}


export class Event {
    type;
    target;

    constructor(type, target) {
        this.type = type;
        this.target = target;
    }
}