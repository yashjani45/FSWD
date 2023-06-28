// Task 1

// let a = 10
// var b = 100
// const c = 1000 


// console.log(`a=${a}  b=${b} c=${c}`)


// Task 2

// let a = 10
// var b = 100

// const add = (a,b) => {
//     return a+b;
// }

// const sub = (a,b) => {
//     return a-b;
// }

// const mul = (a,b) => {
//     return a*b;
// }

// const div = (a,b) => {
//     return b/a;
// }

// console.log(`add=${add(a,b)} sub=${sub(a,b)} mul=${mul(a,b)} div=${div(a,b)}`);


// Task3
// let person = prompt("Please enter your age");

// if(person<18){
//     document.getElementById('demo').textContent = "You are a minor."
// }
// else if(person>=18 && person<65){
//     document.getElementById('demo').textContent = "You are an adult."
// }
// else{
//     document.getElementById('demo').textContent = "You are a senior citizen."
// }


// //Task 4 

// const arr = [5000,3000,2000,1000]

// const min_max_sal = (arr) =>{
//     const a = [Math.min(...arr),Math.max(...arr)]
//     return(a)
// }

// console.log(min_max_sal(arr))
// //Task 5

const books = [{title:"Power of Big Thinking", pages:"200"},
        {title:"Rich Dad, Poor Dad", pages:"150"}
]

const books_title = (books) => {
    return books.map((book) =>  {
            return(book.title)
        }
    )
}
const titles = books_title(books)

document.getElementById("demo").textContent = titles.map((t) => {
    return `${t} `
}) 

// //Task 6

// const func = () => {
//     let a = 10
// }
// const b = a*2
// console.log(a)


// //Task 7

// function functionToExecute() {
//     document.getElementById("demo").style.color = "blue"
// }

//Task 8
// let n = prompt("Please enter number");
// function Positive_Number(n) {
//     if (n < 0) {
//       throw new Error('Error: Negative numbers are not allowed.');
//     }
//     return n;
//   }

// document.getElementById("demo").textContent = Positive_Number(n)




