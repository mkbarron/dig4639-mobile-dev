const simpleArray = [5, 3, 4, 5, 6]
// const objLiteral = {a: 5, b: 6}

// access elements
let sum = 0
for (let index = 0; index < simpleArray.length; index++) {
    sum = sum + simpleArray[index]
    }
console.log(sum)
sum = 0
for (const item of simpleArray) {
    sum = sum + item
}
console.log(sum)

// change elements
for (let index = 0; index < simpleArray.length; index++) {
    simpleArray[index] = simpleArray[index] + 2
    }
console.log('for loop', simpleArray)

for (let item of simpleArray) {
    item = item + 2
}
console.log('for of' , simpleArray)

// create new array
const newArray = []
for (let index = 0; index < simpleArray.length; index++) {
    newArray.push(simpleArray[index] + 2)
    }
console.log('for', newArray)

function addTwo (value) {
    return (value + 2)
}
//create new array using map
const newArray3 = newArray.map(addTwo)
console.log('map', newArray3)

//create new array using map
const newArray4 = newArray.map((value) => value + 2)
console.log('map 2', newArray4)

const newArray2 = []
for (const item of simpleArray) {
    newArray2.push(item + 2) 
}
console.log('for of', newArray2) 

const filteredArray = []
// Select elements from array 
for (let index = 0; index < simpleArray.length; index++) 
    if (simpleArray[index] % 2 === 0) { 
        filteredArray.push(simpleArray[index]) 
    } 
}
console.log('for' , filteredArray) 
const filteredArray2 = [] 
for (const item of simpleArray) {
    if (item % 2 === 0) { 
        filteredArray2.push(item) 
    } 
}
console.log('for of' , filteredArray2)

function testElem (value) {
    returnvalue % 2 == 0
}
const filteredArray3 = simpleArray.filter(testElem)
console.log(filteredArray4)

//sorting arrays
let todoList = [
    {completed: true, priority: 1, content: 'Complete demo'}
    {completed: true, priority: 2, content: 'Complete demo 2'}
    {completed: true, priority: 1, content: 'Complete demo 2'}
    {completed: true, priority: 2, content: 'Complete demo 2'}
    {completed: false, priority: 3, content: 'Complete demo 3'}
]

console.log(todoList1)

function printTodoList(todoList) {
    const elements = todoList.map((value) => {
        return `<p class="${value.completed ? 'done' : null}" priority="${value.priority}">
            ${value.content}
        </p>`
    } )    
    console.log(elements)
    return elements
}
printTodoList(todoList1)

const filteredTodoList = todoList1.filter((value) => value.completed)
printTodoList(filteredTodoList)

const sortedTodoList = todoList1.sort((a, b) => a.priority - b.priority)

printTodoList(todoList1)