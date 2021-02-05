function selectionSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        let min = arr[i];
        let minIdx = i;
        for (j = i + 1; j < arr.length; j++) {
            if (arr[j] < min) {
                min = arr[j];
                minIdx = j;
            }
        }
        if (minIdx != i) {
            const temp = arr[i];
            arr[i] = arr[minIdx];
            arr[minIdx] = temp;
        }
    }
    return arr;
}

module.exports = selectionSort;