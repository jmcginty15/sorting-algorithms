function bubbleSort(arr) {
    let swapped = true;
    let i = arr.length - 1;
    while (i >= 0 && swapped) {
        swapped = false;
        for (let j = 0; j < i; j++) {
            if (arr[j] > arr[j + 1]) {
                swapped = true;
                const temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
        i--;
    }
    return arr;
}

module.exports = bubbleSort;