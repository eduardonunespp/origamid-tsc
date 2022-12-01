"use strict";
function toNumber(value) {
    if (typeof value === 'number') {
        return value;
    }
    else if (typeof value === 'string') {
        return Number(value);
    }
    else if (typeof value !== 'number' && value !== 'string') {
        return Error('value deve ser um número ou string');
    }
}
console.log(toNumber("100"));
//# sourceMappingURL=uniontypes2.js.map