var arr1 = [3,4,1,6,2,6,8]

var bubbleSort = (arr1) => {
    // iterate through entire length of i
    for (var i = arr1.length-1; i>=0; i--) {
        for (var j=1; j<=i; j++){
            if (arr1[j-1] > arr1[j]) {
                var temp = arr1[j-1]
                arr1[j-1] = arr1[j]
                arr1[j] = temp
            }
        }
    }
    return arr1
}

console.log(bubbleSort(arr1))