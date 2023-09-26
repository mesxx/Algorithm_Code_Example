// Studi kasus mengurutkan data siswa

function studentSort(arr) {
    let swapped;
    do {
        swapped = false;
        for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i].num > arr[i + 1].num) {
            const temp = arr[i];
            arr[i] = arr[i + 1];
            arr[i + 1] = temp;
            swapped = true;
        }
        }
    } while (swapped);

return arr;
}

const student = [
    {"num":3, "name":"Fauzan"}, 
    {"num":1, "name":"Muhammad"}, 
    {"num":2, "name":"Ichsan"},
];
console.log(studentSort(student));
  