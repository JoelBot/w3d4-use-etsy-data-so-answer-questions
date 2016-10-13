var invites = ['Matt','Susan','Jessica','John']

var tasks = new Array(3)
tasks[0] = 'Buy food'
tasks[1] = 'Feed pets'
tasks[2] = 'Cook food'

var inbox = new Array('Water bill','Paycheck','Greeting Card','Job Offer','Job Salary')

// inbox[3] = 'You have a rich uncle that ...'

// End of array operations
tasks.push('Help a stranger') // Add item to end of array
tasks.pop() // Removes item from end of array
inbox[inbox.length] = 'heeeeeeey, listen' // because array is always 1 less than length

// Beginning of array operations
tasks.unshift('adding item to front of array') // Insert item at front of the array and scoot all down a number
tasks.shift(); // deletes item [0] and reindexes value [1] to [0]
var holdShiftedItem = tasks.shift()
tasks[0] ='watch Hulu' // overwrites [0] with 'watch huly'


Middle of array operations
var payCheck = inbox.slice(1,2) // removes paycheck from array and stuffs it in to a variable.  first argument is index start and second is index to stop at.  Removes in between, not including end.
// console.log(inbox)
inbox.splice(2, 0, 'Homeboy skills', 'Alumni Donations') // first is starting index, second is how many to remove, third and boyond are values to add

// delete an items
// delete inbox[0]
// console.log(inbox)
// delete inbox
// console.log(inbox.length)
//
//
// // console.log(payCheck)
// console.log(tasks)
// console.log(holdShiftedItem)
//
// tasks.forEach(function() {
//     console.log(tasks)
// })

// var hasJobOffer = inbox.includes('Job Offer')
// var hasJobIndex = inbox.indexOf('Job Offer') // returns -1 if not exists or not found
// if (inbox.indexOf('Job Salary') === -1) { // looks for something in the array that matches exactly and has a condition if -1 is returned for not finding it
//     console.log('No salary found')
// }
// else {
//     console.log(inbox[inbox.indexOf('Job Salary')])
// // }
// console.log(hasJobOffer)
// console.log(hasJobIndex)

var matches = inbox.find(function(item) { // passes in a function to a method.  is anonymous function.  Finds the first match and then stops.
    return item.includes('Job')
})

console.log(matches)

// filter returns an array of matching results.  Try this for finding and returning titles with prices between 14 and 18
var matches = inbox.filter(function(item) { // Anonymous Function
    return item.includes('Job')
})

console.log(matches)

// functional iterators | Is a loop
function checkForJob(item) {  // Non anonymous function.
    return item.includes('Job')
}
var matches = inbox.filter(checkForJob)

// var matches.filter(function(item) {
//     return item.includes('Job')
// })

console.log(matches)


var matches = [] // instantiate the array
for (var i = 0; i < inbox.length ; i++) { // imperative code, it implies a loop
    // console.log(i + ', ' + inbox[i])
    var hasJob = checkForJob(inbox[i])
    if (hasJob){
        matches.push(inbox[i])
    }

}
console.log(matches)

// REverse
inbox.reverse() // immutable
console.log(inbox)  // test to prove array not altered.
console.log(inbox.reverse()) // immutable

inbox = inbox.reverse() // mutable
console.log(inbox)

// map
var fruit = ['Apple','Ramen','cake','corn']

// forEach not meant to change the array.  nothing to return, just does something for each item in array it finds.  No need to return
fruit.forEach(function(item) { // 'item' is a variable established just for this function, scoped and instantiated, essentially
console.log(item.toUpperCase())
})

console.log(fruit)
// map transforms the array one item at a time.  Can be assigned to a variable (or new variable)
fruit.map(function(item) {
    return item.toUpperCase()
})
var lowerFruit = fruit.map(function(item, i) {
    return item.toLowerCase()
})

fruit = fruit.map(function(item) {
    if (i === 2){
        return `<section>${item.toUpperCase()}</section>`
    }
    else{
        return `<div>${item}</div>`
    }
})
fruitObjectArray = fruit.map(function(item) {
    return `title : ${item}`
})
console.log(fruit)
console.log(lowerFruit)
console.log(fruitObjectArray)
// Reduce

var prices = [7.98, 14.99, 42, 12.90]
//
var total = prices.reduce(function(previous, current) {
    return (previous + current)
}, 0)/prices.length // this zeros out the first "previous" value as = 0.

var averagePrice = total/prices.length
console.log(averagePrice)

var pricesObjects = [
    {price: 12.34},
    {price: 13.34},
    {price: 14.34},
    {price: 55.34}
]

var total = pricesObjects.reduce(function(previous, current) { // This will be really handy with homework
    return {price: previous + current}
}, {price: 0})

var avgPrice = total.price / pricesObjects.length
console.log(avgPrice)
// Sorting
