
let students = ["Rohan", "Dyal", "Sikandar", "Bharat", "Shikhar", ""];
let schoolStd = ["class A", "class B",["std1", "std2", ["Tchr1", "Tchr2"]]];

/*
// 1. Concat()

let str = "Holyday";
let isTrue = function bolean(age) {
    return age == 18 ? true:false;
};
let str1 = students.join(" ");
console.log(str1);
console.log(str.concat(students));
console.log(str.concat(isTrue("18"))); // Holydaytrue

// Parameters: We can pass Anytype of paras like: Number, String, Boolean, undefined, null, Array, function.
// Return: it return a single string.
// It adds/joins the string,array,function whatever we give.
// not mutate the original value.


// 2. join()
console.log(students.join(isTrue));
console.log(students.join('-'));
console.log(students.join([]));

// console.log(students);

// Parameter: saperator(Optional it can be anything).
// Return: it also return a string.
// it joins the Array(Array's element) with parameter.
// does not mutate.


// 3. flat(): It convert multidimentional Array into 1D Array(flat Array).

console.log(schoolStd.flat(2));
console.log(schoolStd.flat());
console.log(schoolStd.flat([]));

// Parameter: depth(Number Optional)
// Return: An 1D Array
// does not mutate.

*/
// 4. push(): it push/add element at the end to Array.

schoolStd.push("Sita", "Ram");
students.push(schoolStd);
console.log(students);
console.log(schoolStd.flat(2));

// Parameter: Any type of element we can pass.
// Return: total no. of elements.
// it mutates the Array.


// 5. indexOf, lastIndexOf: they return the index of element But indexOf return the first index and lastIndexOf return the last index of the element.
console.log(schoolStd.indexOf('c'));
console.log(schoolStd.lastIndexOf('c'));