// function comp(array1, array2) {
//     array2.forEach(arr2Element => {
//         if(!array1.some(x => x === Math.sqrt(arr2Element))) {
//             return false;
//         }
//     })
//     return true
// }

function comp(a, b) {
    console.log(a.map(x => x*x).sort().join());
    console.log(b.sort().join());
    return !!a && !!b && a.map(x => x*x).sort().join() == b.sort().join();
  }

a = [5, 5, 7, 5, 5, 10, 7, 10, 1, 8, 4, 0, 1, 8, 8, 0, 0, 6, 2, 2, 10, 6, 6, 1]
b = [25, 0, 64, 64, 36, 1, 25, 100, 1, 4, 36, 1, 1, 36, 4, 25, 100, 16, 100, 0, 49, 64, 49, 25]

console.log(comp(a, b));

