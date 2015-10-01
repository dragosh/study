'use strict'

const array = module.exports = (N) => {
    const value = Array.apply(null, { length: N }).map(Number.call, Number)
    return {
        value: () => value,
        suffle: () => {
            let temp = [];
            for (let i = value.length - 1; i > 0; i--) {
                let j = Math.floor(Math.random() * (i + 1));
                temp = value[i];
                value[i] = value[j];
                value[j] = temp;
            }
            return value;
        }
    }
}

