function getDigit(num, place) {
    const str = num.toString();
    if (str.length <= place) return 0;
    else return parseInt(str[str.length - 1 - place]);
}

function digitCount(num) {
    return num.toString().length;
}

function mostDigits(arr) {
    let mostDigits = 0;
    for (let num of arr) {
        const digits = digitCount(num);
        if (digits > mostDigits) mostDigits = digits;
    }
    return mostDigits;
}

function radixSort(arr) {
    const queues = [[], [], [], [], [], [], [], [], [], []];
    const maxDigits = mostDigits(arr);
    for (let i = 0; i < maxDigits; i++) {
        for (let num of arr) {
            const digit = getDigit(num, i);
            queues[digit].push(num);
        }
        const newArr = [];
        for (let queue of queues) {
            while (queue.length) newArr.push(queue.shift());
        }
        arr = newArr;
    }
    return arr;
}

module.exports = { radixSort, getDigit, digitCount, mostDigits };