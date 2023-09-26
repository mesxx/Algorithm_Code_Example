// Studi kasus menampilkan siswa acak

const student = ["Ichsan", "Fauzan", "Muhammad"];
const randInt = Math.random();

const index = Math.floor(randInt * student.length);
const result = student[index];
console.log(result);
