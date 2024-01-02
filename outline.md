Javascipt:

1. Intro
2. Operators:
   sum of 2 numebr 5 + 2 = 7
   1. Arithmetic (+, -, \*, /, %, ++, --)
   2. Logical(AND(&&), OR(||), NOT(!))
   3. Assignment(=)
   4. Comparison(==, ===, !=, !==, >, <, >=, <=)
   5. Bitwise(AND(&), OR(|), NOT(!))
   6. Ternary(? :)
   7. Type

if(condition == true) {
//true statement
} else {
//false statement
}

let a = 5;
if(5 == a) {
console.log("Hello")
} else {
console.log("Bye")
}

//output: Hello

//using ternary operator(? :)
here ? is used to represent true statement and : is used to represent false statement

let a = 5;
let b = 10;
const result = a == b ? "Hello" : "Bye";
=> 5 == 10 ? "Hello" : "Bye"
console.log(result); //output: Bye

3. Variables and Data types
   var, let and const => variables
   Number, string, object, undefined, etc ==> data types
4. Array
   var a = 10;
   var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] ==> it holds 10 valus

   array size = arr.length; => 10
   index kouthi startt heba : 0 ru
   arr[0] = 1;
   arr[7] = 8;

   find last index of array: arr[arr.length-1] = 10;

   const students = [
   {name: "Sushree", title: "Nayak"},
   {name: "Gajanan", title: "Mallik"}
   ]
   students[0].name = Sushree
   students[1].name = "Gajanan"
   students[0].title = Nayak
   students[1].title = Mallik

   students[0]["name"] = sushree

5. Obejcts

   key value pair of data
   const student = {
   name: "Sushree Nayak",
   address: "Angul"
   }

   object name: student
   student object ra keys mane: name, adreess
   student object ra value ku access kariba pain:

   //dot format
   student.name = Sushree Nayak
   student.address = Angul

   //array index format
   student["name"] = Sushree Nayak
   student["address"] = Angul

6. function

let a = 10;
let b = 20;

addtion(a, b)
multiplication(a, b)
division(a, b)

function addtion(num1, num2) {
let sum = num1 + num2;
console.log("Addition of num1 and num2", sum);
}

function multiplication(a, b) {
let mul = a \* b;
console.log("Multiplication of a and b", mul);
}

function division(a, b) {
let div = a / b;
console.log("Division of a and b", div);  
}

7. Dicision making statement (if else, switch case)
8. Loop

   1. while
      while(condition is true) {
      executes the statement
      }

      example
      let a = 1;
      while(a <= 10) {
      console.log("value of a", a);
      a++; ==> a = a+1
      }

   2. do while
      let a = 20;
      do {
      console.log("value of a", a) //20
      a++ //a = 20 +1 = 21
      } while(a <= 10)
   3. for loop
      for(let a = 1; a <= 10; a++) {
      console.log("value of a", a)
      }
