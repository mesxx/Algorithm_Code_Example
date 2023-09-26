// Studi kasus mencari index data siswa

function searchStudent(arr, target) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].name === target) return i;
    }
    return -1;
}

const student = [{"name":"Ichsan"}, {"name":"Fauzan"}];
const targetValue = "Ichsan";
const result = searchStudent(student, targetValue);
console.log(result);
