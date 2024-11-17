
let students = ["Rohan", "Dyal", "Sikandar", "Bharat", "Shikhar", ""];
let schoolStd = ["class A", "class B",["std1", "std2", ["Tchr1", "Tchr2"]]];
let str = "A cleaver fox jumps over the tree";
let numbers = [20, 18, 32, 74, 9, 15, 89, 40];
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


// 4. push(): it push/add one or more element at the end to Array.
// Pop(): it remove an element from the end of Array.

schoolStd.push("Sita", "Ram");
students.push(schoolStd);
console.log(students);
console.log(schoolStd.flat(2));
students.pop();
console.log(students);

// Parameter: Any type of element we can pass.
// Return: push() return total no. of elements And Pop() return removed element.
// they mutate the Array.


// 5. indexOf, lastIndexOf: they return the index of string_element But indexOf return the first index and lastIndexOf return the last index of the element.
console.log(str.indexOf('jumps'));
console.log(str.lastIndexOf('r'));
console.log(students.join('').lastIndexOf(''));
console.log("Elephant".indexOf(''));

// Parameter: string/subString/char as parameter.
// Return: index & last index of string_element.
// it does not mutate.


// 6. include(): it return "true/false" based on "subString/char" u Pass/Entered.
console.log(students.includes("Sh")); // Array
console.log(str.includes("u")); // String
console.log("Umbrella".includes("l"));

// Parameter: accept string/char as para
// does not mutate.



// 7. reverse(): it reverse the all elements of the Array.
console.log(students.reverse());
console.log(str.split(' ').reverse());
console.log(["Kamal", "Hasan"].reverse());
console.log("Komal".split('').reverse());

// Parameter: No paras. accepted
// Return: it returns the reverse of Array.
// it mutates the Array.



// 8. some(), every(): Both are accept a cbfn But some() needs to return "true" atleast once for Any element & every() needs to return true for all element then the Whole func. return "true" otherwise return "false".

// some():
let retStd = students.some(function (std) {
    return std.includes("Sh");
});
console.log(retStd);

function isNine(num) {
    return num > 90;
};
let retNum = numbers.some(isNine);
console.log(retNum);

// every():
let isPoor = function(num) {
    return num <= 89;
};
console.log(numbers.every(isPoor));

let isStd = students.every(function(std) {
    return std.includes("a");
})
console.log(isStd);

// Parameter: Accept cbfn as para.
// Return: "true/false" based on condition.
// does not mutate Array


// 9. shift, unShift() : shift() remove the an element from start and return it. & unShift() add one or more element in start and return the no. of elements.

console.log(students.shift());
console.log(students);
console.log(students.unshift("Rohit", isNine));
console.log(students);

// Parameter: shift() not accept any paras But unshift() accept Any type of Parameter (Number, string, boolean, func. etc)
// Return: shift() return the removed element and unshift() return the No. of elements
// they Both mutate the Array.



// 10. find, findIndex(): Accpet cbfn and return only one value.
// find(): it return the first value that match the condition.
// findIndex(): it return the index of first value that match.
let match_val = function(name) {
    return name.length > 6;
};
console.log(students.find(match_val)); // Sikandar
console.log(students.findIndex(match_val)); // 2
console.log(str.split(" ").find(match_val)); // cleaver

// Parameter: accept cbfn as para.
// does not mutate


// 11. splice(position, Howmany, Add_elements): to remove One or more elements from anyPosition and add other elements.
console.log(numbers); // [20, 18, 32, 74, 9, 15, 89, 40]
console.log(numbers.splice(2, 2, 21, 33, 49)); // [32, 74]
console.log(numbers.splice(1,0,0)); // []
console.log(numbers); // [20, 0, 18, 21, 33, 49, 9, 15, 89, 40]

// Parameter: accept 3 paras (position, Howmany_Remove, Add_elements) Add_elements is Optional.
// Return: it retunr the removed elements only.
// it does mutate.



// 12. reduce(cbfn, initial_val): it reduce the collec. of value into diff. shape of values Or into single value. 
// initialVal what we initialize (like: sum = 0), cbfn give u access of 4 variables (acc, num, i, arr) And whatEver cbfn return becomes the next val. of accumulator.
// firstVal of acc = initialVal = 0; (exp: sum = 0)
console.log(numbers.reduce((acc, num) => {
    return acc + num;
}, 0));   

console.log(students.reduce((acc, std) => {
    return acc + std + " ";
}, ""));

// Parameter: accept two paras (cbfn, initialVal) initialVal para can be Anytype of.
// it return the reduced value(small_size) of Array.
// does not mutate the Original value.


// 13. forEach(cbfn): it does not return Anything, it allows cbfn func. to run every element of Array.
numbers.forEach((num) => {
    console.log(num);
});

let isInclude = function(std_name) {
    if(std_name.length < 7)
        console.log(std_name);    
};
students.forEach(isInclude);

function log(str_char) {
    console.log(str.split(" ").shift());
};
str.split(" ").forEach(log);

// Parameter: accept cbfn
// Return: it return Nothing.
// does not mutate

*/ 
// 14. map(cbfn): it create a new same size of Array with some changes by applying a func. to each element.
function double(num) {
    return num * 2;
};
console.log(numbers.map(double));

console.log(students.map((std) => {
    return std.length + 1;
}));

let retMap = function(std) {
    return std + "Ok";
};

console.log(students.map(retMap));


// Parameter: cbfn
// Return: it return a same size of new Array with some modification in each element. 
// does not mutate



// 15. filter(cbfn): it return a new Array with filterOut some values.
let retFilterNum = numbers.filter((num) => {
    return num >= 20;
});
console.log(retFilterNum);

function filterStd(std) {
     if(std.split("")[0] == "S")
    return std;
};
console.log(students.filter(filterStd));

// Parameter: cbfn as para
// Return: new Array with some filtered values
// does not mutate the Array.