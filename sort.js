var array = [10, 2, 5, 1, 9];
array.sort(function(a, b){return a - b});
console.log(array);

var students = [
    { id: 1, name: "bruce",    age: 40 },
    { id: 2, name: "zoidberg", age: 22 },
    { id: 3, name: "alex",     age: 22 },
    { id: 4, name: "alex",     age: 30 },
  ];

// function compareName(a, b){
//     let nameA = a.name;
//     let nameB = b.name;
//     let comparison = 0;
//     if (nameA > nameB){
//         comparison = 1;
//     } else if (nameA < nameB){
//         comparison = -1;
//     } else {
//         comparison = compareAge(a,b);
//     }
//     return comparison;
// }

// function compareAge(a,b){
//     let ageA = a.age;
//         let ageB = b.age;
//         let comparison = 0;
//         if (ageA > ageB){
//             comparison = -1;
//         } else if (ageA < ageB){
//             comparison = 1;
//         }
//         return comparison;
// }

 
function compare(key, order){
    return function(a, b) {
        if (a[key] == b[key]) {
            if (a.age == b.age) {
                return 0
            } else {
                return compare("age", "desc")(a, b)
            }
        } else if (order === "desc"){
            return (a[key] < b[key]) ? 1 : -1 ;
        } else if (order === "asc"){
            return (a[key] > b[key]) ? 1 : -1 ;
        }
    }
}

console.log(students.sort( compare("name", "desc") ));